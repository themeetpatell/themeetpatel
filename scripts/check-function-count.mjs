#!/usr/bin/env node
/**
 * Guards the Vercel function ceiling.
 *
 * Measured on this project, not guessed: a deploy reporting nodejs:14 FAILED;
 * 13 and 12 succeeded. The failure mode is the dangerous part — the build
 * passes, then the deploy dies at "Deploying outputs…" with no error in the
 * build log, the deployment reads state: ERROR, and the URL serves a
 * "Deployment has failed" placeholder.
 *
 * Counted: every .js under api/ whose basename does not start with `_`
 * (underscore files are modules, not functions), plus middleware.js.
 *
 * Runs as `prebuild`, so npm invokes it before every local and Vercel build.
 */
import { readdirSync, statSync, existsSync } from 'node:fs';
import { join, basename } from 'node:path';

const CEILING = 13;
const API_DIR = 'api';

function walk(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return walk(full);
    return full.endsWith('.js') && !basename(full).startsWith('_') ? [full] : [];
  });
}

const functions = walk(API_DIR).sort();
if (existsSync('middleware.js')) functions.push('middleware.js');

if (functions.length > CEILING) {
  console.error(
    `\n✖ Vercel function ceiling exceeded: ${functions.length} of ${CEILING}.\n` +
      `  The build would pass and the DEPLOY would fail silently.\n\n` +
      functions.map((f) => `    ${f}`).join('\n') +
      `\n\n  Fold the new handler into an existing one (api/og.js already\n` +
      `  dispatches on ?slug= vs ?path=), or prefix it with _ to make it a\n` +
      `  module rather than a function.\n`
  );
  process.exit(1);
}

console.log(`Vercel functions: ${functions.length}/${CEILING}${functions.length === CEILING ? ' — at the ceiling' : ''}`);
