#!/usr/bin/env node
/**
 * Regenerates the two hand-maintained blocks in index.html from the data
 * modules that own them, and fails the build when they have drifted.
 *
 * This exists because the failure already happened, quietly, for months. The
 * shell carried its own copy of the entity @graph and its own copy of the
 * homepage prose. Both were written once and never updated, so on 2026-09-01
 * index.html was asserting, at the SAME @id the rest of the site uses:
 *
 *   - Company 8 is "an AI-native business intelligence company" — the site had
 *     moved to autonomous decision intelligence
 *   - Dan "lets any operator ask their business anything"      — replaced copy
 *   - Meet Patel was "Chief of Staff and interim COO"          — a job title
 *     that appears nowhere else on the site, in a list of three others
 *
 * A crawler that does not execute JS reads this file first. Two descriptions
 * of one @id is exactly the contradiction that makes an engine hedge on an
 * entity, which is the opposite of what every other file here is for.
 *
 * Usage:
 *   node scripts/sync-index-shell.mjs           rewrite index.html
 *   node scripts/sync-index-shell.mjs --check   exit 1 if it would change
 *
 * `prebuild` runs --check, following check-route-sync: a guard reports, a
 * human runs the fix. That keeps CI from mutating a tracked file.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { siteGraph } from '../src/lib/seoEntity.js';
import { PAGES, SITE_LINKS, PROFILE_LINKS } from '../api/_pageContent.js';
import { DISAMBIGUATION } from '../src/lib/seoEntity.js';

const FILE = 'index.html';
const CHECK = process.argv.includes('--check');

const esc = (v) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

/** Replace the text between two marker comments. Idempotent by construction. */
function replaceBlock(source, name, body) {
  const begin = `<!-- BEGIN:${name} -->`;
  const end = `<!-- END:${name} -->`;
  const i = source.indexOf(begin);
  const j = source.indexOf(end);
  if (i === -1 || j === -1) {
    throw new Error(`sync-index-shell: markers for "${name}" are missing from ${FILE}`);
  }
  return source.slice(0, i + begin.length) + body + source.slice(j);
}

// ── 1. the entity @graph ─────────────────────────────────────────────────────
// One @context at the top; the per-node ones would be redundant inside a graph.
const graph = {
  '@context': 'https://schema.org',
  '@graph': siteGraph.map(({ '@context': _ctx, ...node }) => node),
};

const jsonLd = `
    <script type="application/ld+json">
${JSON.stringify(graph, null, 2)
  .split('\n')
  .map((l) => `    ${l}`)
  .join('\n')}
    </script>
    `;

// ── 2. the no-JS payload ─────────────────────────────────────────────────────
// Generated from the SAME PAGES['/'] entry api/og.js serves to bots, so the two
// renderings of this URL cannot say different things.
const home = PAGES['/'];

const renderSection = ({ h2, paragraphs = [], list = [] }) =>
  [
    `        <h2>${esc(h2)}</h2>`,
    ...paragraphs.map((p) => `        <p>${esc(p)}</p>`),
    list.length
      ? `        <ul>\n${list.map((i) => `          <li>${esc(i)}</li>`).join('\n')}\n        </ul>`
      : null,
  ]
    .filter(Boolean)
    .join('\n');

const renderLinks = (heading, links) =>
  [
    `        <h2>${esc(heading)}</h2>`,
    '        <ul>',
    ...links.map(
      ({ href, label }) => `          <li><a href="${esc(href)}">${esc(label)}</a></li>`
    ),
    '        </ul>',
  ].join('\n');

const noscript = `
      <main>
        <h1>${esc(home.h1)}</h1>
        <p>${esc(home.intro)}</p>
        <p><em>Which Meet Patel:</em> ${esc(DISAMBIGUATION)}</p>
${home.sections.map(renderSection).join('\n')}
${renderLinks('Explore', SITE_LINKS)}
${renderLinks('Elsewhere', PROFILE_LINKS)}
${
  home.faq?.length
    ? [
        '        <h2>Frequently asked questions</h2>',
        ...home.faq.map(
          ({ q, a }) => `        <h3>${esc(q)}</h3>\n        <p>${esc(a)}</p>`
        ),
      ].join('\n')
    : ''
}
      </main>
    `;

// ── apply ────────────────────────────────────────────────────────────────────
const before = readFileSync(FILE, 'utf8');
let after = replaceBlock(before, 'generated-jsonld', jsonLd);
after = replaceBlock(after, 'generated-noscript', noscript);

if (after === before) {
  console.log('index.html shell is in sync with seoEntity.js and _pageContent.js');
  process.exit(0);
}

if (CHECK) {
  console.error(
    `\n✖ index.html has drifted from its sources.\n` +
      `  The shell is the first thing a non-JS crawler reads, and it is asserting\n` +
      `  something the rest of the site no longer says.\n\n` +
      `  Fix: node scripts/sync-index-shell.mjs\n`
  );
  process.exit(1);
}

writeFileSync(FILE, after);
console.log('index.html regenerated from src/lib/seoEntity.js and api/_pageContent.js');
