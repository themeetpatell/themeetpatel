#!/usr/bin/env node
/**
 * Triages the published blog corpus against the stated thesis.
 *
 * As of 2026-08-29 the blog carried 37 published posts. Two of them — both
 * from August — sit on the thesis the site actually argues (organizational
 * attention, decision intelligence, AI-native operating models). Six are about
 * relationships. The rest are general founder advice. The effect is that both
 * Google and every retrieval model learn this domain is a general-purpose
 * founder blog rather than the home of a category.
 *
 * This script does not delete anything. It sets `robots_noindex` on the posts
 * you classify as off-thesis, which drops them from the sitemap (api/sitemap.js
 * already excludes noindex URLs) and from IndexNow submissions, while leaving
 * every URL live and every inbound link intact. It is fully reversible: run
 * with --restore to clear the flag again.
 *
 * Usage:
 *   node seo/cms-triage.mjs                    # dry run — prints the plan, changes nothing
 *   node seo/cms-triage.mjs --apply            # sets robots_noindex on OFF_THESIS categories
 *   node seo/cms-triage.mjs --apply --restore  # clears robots_noindex on those same posts
 *
 * Requires ADMIN_EMAIL and ADMIN_PASSWORD in .env — the same credentials the
 * admin UI uses. Writes go through the live admin API, not the database.
 */
import { readFileSync } from 'node:fs';

const SITE = process.env.SEO_TRIAGE_SITE || 'https://www.themeetpatel.com';

/**
 * Categories to drop from the index. This is an editorial judgement, not a
 * computed one — edit the list before running with --apply.
 *
 * 'Relationships' is the clear case: six posts on intimacy, loyalty and
 * long-distance relationships, on the domain of a founder raising a pre-seed
 * for an AI infrastructure company.
 */
const OFF_THESIS = new Set(['Relationships']);

const apply = process.argv.includes('--apply');
const restore = process.argv.includes('--restore');

/** Minimal .env reader — no dependency, and it never overwrites a real env var. */
function loadEnv(path = '.env') {
  let raw = '';
  try { raw = readFileSync(path, 'utf8'); } catch { return; }
  for (const line of raw.split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/);
    if (!m) continue;
    const value = m[2].trim().replace(/^["']|["']$/g, '');
    if (process.env[m[1]] === undefined) process.env[m[1]] = value;
  }
}

async function login() {
  const res = await fetch(`${SITE}/api/admin/login`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ email: process.env.ADMIN_EMAIL, password: process.env.ADMIN_PASSWORD }),
  });
  if (!res.ok) throw new Error(`login failed: ${res.status} ${await res.text()}`);
  const { token } = await res.json();
  if (!token) throw new Error('login returned no token');
  return token;
}

loadEnv();
if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
  console.error('✖ ADMIN_EMAIL and ADMIN_PASSWORD must be set (they are read from .env).');
  process.exit(1);
}

const token = await login();
const auth = { authorization: `Bearer ${token}`, 'content-type': 'application/json' };

const all = await (await fetch(`${SITE}/api/admin/articles`, { headers: auth })).json();
const published = all.filter((a) => a.status === 'published');

const targets = published.filter((a) => OFF_THESIS.has(a.category));
const wanted = !restore;
const changing = targets.filter((a) => Boolean(a.robots_noindex) !== wanted);

const byCategory = published.reduce((acc, a) => ({ ...acc, [a.category || '(none)']: (acc[a.category || '(none)'] || 0) + 1 }), {});

console.log(`published posts: ${published.length}`);
console.log('by category:');
for (const [cat, n] of Object.entries(byCategory).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${OFF_THESIS.has(cat) ? '→' : ' '} ${String(n).padStart(3)}  ${cat}`);
}
console.log(`\noff-thesis categories: ${[...OFF_THESIS].join(', ')}`);
console.log(`matching posts: ${targets.length}, of which ${changing.length} need changing to robots_noindex=${wanted}\n`);

for (const a of changing) console.log(`  ${a.slug}\n      ${a.title}`);

if (!changing.length) {
  console.log('\nNothing to do.');
  process.exit(0);
}

if (!apply) {
  console.log(`\nDry run. Re-run with --apply to set robots_noindex=${wanted} on the ${changing.length} post(s) above.`);
  process.exit(0);
}

let ok = 0;
for (const a of changing) {
  const res = await fetch(`${SITE}/api/admin/articles/${a.id}`, {
    method: 'PUT',
    headers: auth,
    body: JSON.stringify({ robots_noindex: wanted }),
  });
  if (res.ok) { ok += 1; console.log(`  ✓ ${a.slug}`); }
  else console.error(`  ✖ ${a.slug}: ${res.status} ${await res.text()}`);
}

console.log(`\n${ok}/${changing.length} updated. Re-submit the sitemap in Search Console once this is done.`);
if (ok !== changing.length) process.exit(1);
