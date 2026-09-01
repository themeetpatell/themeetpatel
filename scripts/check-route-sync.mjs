#!/usr/bin/env node
/**
 * Guards the four places a public route has to be declared at once.
 *
 * This exists because the failure already happened. On 2026-08-29 the live site
 * answered GPTBot with 404 for /acu while the committed sitemap listed it at
 * priority 0.8 and llms.txt linked it — because middleware's PAGE_ROUTES had
 * not shipped with them. Nothing failed loudly: the build passed, the deploy
 * passed, and a crawler simply got a 404 for a URL we had asked it to fetch.
 *
 * The four sources of truth, all of which must agree:
 *   1. middleware.js       PAGE_ROUTES   — decides bot 404 vs server render
 *   2. api/_pageContent.js PAGES         — supplies the prose the render needs
 *   3. api/sitemap.js      STATIC_ROUTES — what we ask Google to index
 *   4. public/llms.txt                   — what we hand answer engines
 *
 * Direction of the checks matters. A route in the sitemap or llms.txt that
 * middleware does not know is a hard error: we published a URL that 404s.
 * A route middleware serves but the sitemap omits is only a warning — /mind is
 * legitimately renderable and deliberately low priority.
 *
 * Runs as part of `prebuild`, so npm invokes it before every local and Vercel
 * build.
 */
import { readFileSync } from 'node:fs';

const read = (p) => readFileSync(p, 'utf8');

/** Pull the quoted paths out of a `new Set([...])` or array literal by name. */
function extractBlock(source, marker, file) {
  const start = source.indexOf(marker);
  if (start === -1) throw new Error(`check-route-sync: could not find \`${marker}\` in ${file}`);
  const open = source.indexOf('[', start);
  const close = source.indexOf(']', open);
  if (open === -1 || close === -1) throw new Error(`check-route-sync: malformed \`${marker}\` in ${file}`);
  return new Set(source.slice(open, close).match(/['"](\/[^'"]*)['"]/g)?.map((m) => m.slice(1, -1)) ?? []);
}

const middleware = read('middleware.js');
const sitemapSrc = read('api/sitemap.js');
const pageContent = read('api/_pageContent.js');
const llms = read('public/llms.txt');

const pageRoutes = extractBlock(middleware, 'const PAGE_ROUTES', 'middleware.js');
const noindexRoutes = extractBlock(middleware, 'const KNOWN_NOINDEX_ROUTES', 'middleware.js');
const movedFrom = new Set(
  (middleware.slice(middleware.indexOf('const MOVED_PATHS')).match(/\[['"](\/[^'"]*)['"]/g) ?? [])
    .map((m) => m.slice(2, -1))
);

// api/sitemap.js: `{ path: '/investors', ... }`
const sitemapRoutes = new Set(
  (sitemapSrc.match(/path:\s*['"](\/[^'"]*)['"]/g) ?? []).map((m) => m.replace(/path:\s*['"]/, '').slice(0, -1))
);

// api/_pageContent.js: PAGES keys, `'/thesis': {`
const pagesBlock = pageContent.slice(pageContent.indexOf('export const PAGES'));
const contentRoutes = new Set((pagesBlock.match(/^\s{2}'(\/[^']*)':/gm) ?? []).map((m) => m.trim().slice(1, -2)));

// public/llms.txt: absolute links back to our own host.
const llmsRoutes = new Set(
  (llms.match(/https:\/\/www\.themeetpatel\.com(\/[a-z0-9-]*)/g) ?? [])
    .map((m) => m.replace('https://www.themeetpatel.com', '') || '/')
    // llms-full, sitemap and feed are files, not SPA routes. They are served by
    // api/sitemap.js (via the vercel.json rewrites) or straight from public/,
    // so middleware never sees them and PAGE_ROUTES must not list them.
    .filter((p) => !['/llms-full', '/sitemap', '/llms', '/feed'].includes(p))
);

const errors = [];
const warnings = [];

for (const route of sitemapRoutes) {
  if (!pageRoutes.has(route)) {
    errors.push(`api/sitemap.js lists ${route}, but middleware.js PAGE_ROUTES does not — crawlers get 404.`);
  }
  if (!contentRoutes.has(route)) {
    errors.push(`api/sitemap.js lists ${route}, but api/_pageContent.js PAGES has no prose for it.`);
  }
  if (movedFrom.has(route)) {
    errors.push(`api/sitemap.js lists ${route}, which middleware.js redirects — submitting a redirect trips Search Console.`);
  }
}

for (const route of llmsRoutes) {
  if (!pageRoutes.has(route) && !noindexRoutes.has(route)) {
    errors.push(`public/llms.txt links ${route}, but middleware.js PAGE_ROUTES does not — answer engines get 404.`);
  }
}

for (const route of pageRoutes) {
  if (!contentRoutes.has(route)) {
    errors.push(`middleware.js routes ${route} to api/og, but api/_pageContent.js PAGES has no prose for it.`);
  }
  if (!sitemapRoutes.has(route)) {
    warnings.push(`middleware.js serves ${route} but api/sitemap.js omits it — intentional only if the page is noindex.`);
  }
}

for (const w of warnings) console.warn(`  ! ${w}`);

if (errors.length) {
  console.error(
    `\n✖ Route declarations are out of sync (${errors.length} error${errors.length === 1 ? '' : 's'}).\n` +
      `  The build and deploy would both pass, and crawlers would get 404s.\n\n` +
      errors.map((e) => `    ${e}`).join('\n') +
      `\n\n  Fix by declaring the route in all of: middleware.js PAGE_ROUTES,\n` +
      `  api/_pageContent.js PAGES, api/sitemap.js STATIC_ROUTES, public/llms.txt.\n`
  );
  process.exit(1);
}

console.log(
  `Routes in sync: ${pageRoutes.size} rendered, ${sitemapRoutes.size} in sitemap, ${llmsRoutes.size} in llms.txt` +
    (warnings.length ? ` (${warnings.length} warning${warnings.length === 1 ? '' : 's'})` : '')
);
