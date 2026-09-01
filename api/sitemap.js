import { supabase } from './_supabase.js';
import { resolveCanonical } from '../src/lib/seoEntity.js';

// Dynamic sitemap: static public routes + every published article from the DB,
// so the blog surface can never silently drift from what's actually live.
// Resilient by design — if the DB read fails, we still serve the static routes.
//
// This handler ALSO serves the RSS feed at /feed.xml (vercel.json rewrites it to
// /api/sitemap?format=rss). That is not tidiness — the project is at the Vercel
// function ceiling of 13, and a fourteenth function makes the BUILD pass and the
// DEPLOY fail silently. scripts/check-function-count.mjs guards it. Both outputs
// need the same article query, so one function is also the honest shape.

const SITE = 'https://www.themeetpatel.com';

// Indexable public routes only. Legal pages are noindex, so they are
// intentionally excluded (submitting noindex URLs triggers Search Console warnings).
//
// `lastmod` must be honest — Google discounts sitemaps where every URL claims
// today's date. Each route carries the date its copy actually last changed;
// bump it in the same commit that edits the page. Routes marked `feed: true`
// derive lastmod from the newest published article instead.
//
// /labs is gone: it became /acu, and middleware.js 308s the old path. Only the
// destination belongs in the sitemap — submitting a redirecting URL is what
// triggers Search Console coverage warnings.
const STATIC_ROUTES = [
  { path: '/',           changefreq: 'weekly',  priority: '1.0',  feed: true,  lastmod: '2026-08-20' },
  { path: '/investors',  changefreq: 'weekly',  priority: '0.95', lastmod: '2026-08-20' },
  { path: '/about',      changefreq: 'monthly', priority: '0.9',  lastmod: '2026-08-21' },
  { path: '/thesis',     changefreq: 'monthly', priority: '0.9',  lastmod: '2026-08-21' },
  { path: '/glossary',   changefreq: 'monthly', priority: '0.85', lastmod: '2026-09-01' },
  { path: '/glossary/autonomous-decision-intelligence', changefreq: 'monthly', priority: '0.8', lastmod: '2026-09-01' },
  { path: '/glossary/organizational-attention',         changefreq: 'monthly', priority: '0.8', lastmod: '2026-09-01' },
  { path: '/glossary/decision-debt',                    changefreq: 'monthly', priority: '0.8', lastmod: '2026-09-01' },
  { path: '/glossary/management-latency',               changefreq: 'monthly', priority: '0.8', lastmod: '2026-09-01' },
  { path: '/glossary/decision-infrastructure',          changefreq: 'monthly', priority: '0.8', lastmod: '2026-09-01' },
  { path: '/glossary/machine-coworkers',                changefreq: 'monthly', priority: '0.8', lastmod: '2026-09-01' },
  { path: '/glossary/evidence-layer',                   changefreq: 'monthly', priority: '0.8', lastmod: '2026-09-01' },
  { path: '/answers',    changefreq: 'monthly', priority: '0.85', lastmod: '2026-09-01' },
  { path: '/answers/decision-intelligence-vs-business-intelligence', changefreq: 'monthly', priority: '0.8', lastmod: '2026-09-01' },
  { path: '/answers/why-crm-and-finance-disagree-about-revenue',     changefreq: 'monthly', priority: '0.8', lastmod: '2026-09-01' },
  { path: '/answers/how-to-measure-management-latency',              changefreq: 'monthly', priority: '0.8', lastmod: '2026-09-01' },
  { path: '/answers/do-ai-agents-replace-business-intelligence',     changefreq: 'monthly', priority: '0.8', lastmod: '2026-09-01' },
  { path: '/blogs',      changefreq: 'daily',   priority: '0.9',  feed: true,  lastmod: '2026-08-20' },
  { path: '/portfolio',  changefreq: 'monthly', priority: '0.85', lastmod: '2026-07-07' },
  { path: '/acu',        changefreq: 'monthly', priority: '0.8',  lastmod: '2026-08-29' },
  { path: '/biggmate',   changefreq: 'monthly', priority: '0.8',  lastmod: '2026-07-07' },
  { path: '/contact',    changefreq: 'monthly', priority: '0.75', lastmod: '2026-07-07' },
  { path: '/community',  changefreq: 'monthly', priority: '0.7',  lastmod: '2026-07-07' },
  { path: '/mind',       changefreq: 'monthly', priority: '0.5',  lastmod: '2026-07-07' },
];

const xmlEscape = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const toDate = (value, fallback) => {
  if (!value) return fallback;
  const str = String(value);
  return str.length >= 10 ? str.slice(0, 10) : fallback;
};

const urlEntry = ({ loc, lastmod, changefreq, priority }) =>
  [
    '  <url>',
    `    <loc>${xmlEscape(loc)}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    changefreq ? `    <changefreq>${changefreq}</changefreq>` : null,
    priority ? `    <priority>${priority}</priority>` : null,
    '  </url>',
  ]
    .filter(Boolean)
    .join('\n');

/**
 * RFC-822 date for RSS pubDate. Feed readers are strict about this and will
 * silently drop an item with an ISO date, which is the worst kind of failure —
 * the feed still validates and the post never appears.
 * @param {string|null|undefined} value
 * @returns {string|null}
 */
const toRfc822 = (value) => {
  if (!value) return null;
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? null : d.toUTCString();
};

const FEED_LIMIT = 50;

/**
 * RSS 2.0. Kept deliberately plain: title, link, guid, date, description.
 * `content:encoded` is not emitted — the full article body belongs on the page
 * and in llms-full.txt, and shipping it here would let aggregators outrank the
 * canonical with a full copy.
 * @param {Array<{slug: string, title: string, excerpt: string|null, category: string|null, pubDate: string|null}>} items
 */
export const rssFeed = (items) => {
  const now = new Date().toUTCString();
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">\n' +
    '  <channel>\n' +
    `    <title>Meet Patel — writing on AI-native company operations</title>\n` +
    `    <link>${SITE}/blogs</link>\n` +
    `    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml" />\n` +
    '    <description>Essays on how AI changes the way companies are operated — decision intelligence, organizational attention and what has to exist between information and action.</description>\n' +
    '    <language>en-us</language>\n' +
    `    <lastBuildDate>${items[0]?.pubDate || now}</lastBuildDate>\n` +
    '    <managingEditor>meet@company8.dev (Meet Patel)</managingEditor>\n' +
    items
      .map((item) =>
        [
          '    <item>',
          `      <title>${xmlEscape(item.title)}</title>`,
          `      <link>${SITE}/blogs/${xmlEscape(item.slug)}</link>`,
          `      <guid isPermaLink="true">${SITE}/blogs/${xmlEscape(item.slug)}</guid>`,
          item.pubDate ? `      <pubDate>${item.pubDate}</pubDate>` : null,
          item.category ? `      <category>${xmlEscape(item.category)}</category>` : null,
          item.excerpt ? `      <description>${xmlEscape(item.excerpt)}</description>` : null,
          '    </item>',
        ]
          .filter(Boolean)
          .join('\n')
      )
      .join('\n') +
    '\n  </channel>\n</rss>\n'
  );
};

export default async function handler(req, res) {
  const today = new Date().toISOString().slice(0, 10);
  const wantsRss = String(req.query?.format || '').toLowerCase() === 'rss';

  let articles = [];
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('slug, title, excerpt, category, published_at, last_updated_at, updated_at, date, canonical_url')
      .eq('status', 'published')
      .order('published_at', { ascending: false, nullsFirst: false });
    if (error) throw error;

    // A genuinely syndicated post canonicalises to another domain; listing it
    // would ask Google to index a URL we've told it not to index, and putting it
    // in our feed would republish someone else's canonical.
    //
    // The host check must be host-aware, not a string prefix: every article in
    // the CMS is self-canonical to the non-www host, so `startsWith(SITE)`
    // classified 35 of 37 articles as syndicated and dropped them.
    const isSyndicated = (a) =>
      resolveCanonical(a.canonical_url, `${SITE}/blogs/${a.slug}`).isSyndicated;

    articles = (data || []).filter((a) => a.slug && !isSyndicated(a));
  } catch (err) {
    // Never fail either output — degrade to static routes / an empty feed.
    console.error('sitemap: article fetch failed, serving static routes only:', err);
  }

  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');

  // ── RSS at /feed.xml ──────────────────────────────────────────────────────
  if (wantsRss) {
    const items = articles.slice(0, FEED_LIMIT).map((a) => ({
      slug: a.slug,
      title: a.title || a.slug,
      excerpt: a.excerpt || null,
      category: a.category || null,
      pubDate: toRfc822(a.published_at || a.date || a.updated_at),
    }));
    res.setHeader('Content-Type', 'application/rss+xml; charset=utf-8');
    return res.status(200).send(rssFeed(items));
  }

  // ── sitemap.xml ───────────────────────────────────────────────────────────
  const articleEntries = articles.map((a) => ({
    loc: `${SITE}/blogs/${a.slug}`,
    lastmod: toDate(a.last_updated_at || a.updated_at || a.published_at || a.date, today),
    changefreq: 'monthly',
    priority: '0.8',
  }));

  // Feed routes (home, blog index) are only as fresh as the newest article on them.
  const newestArticleDate = articleEntries.reduce(
    (newest, entry) => (entry.lastmod > newest ? entry.lastmod : newest),
    ''
  );

  const staticEntries = STATIC_ROUTES.map((r) => ({
    loc: `${SITE}${r.path}`,
    lastmod: r.feed && newestArticleDate > r.lastmod ? newestArticleDate : r.lastmod,
    changefreq: r.changefreq,
    priority: r.priority,
  }));

  const body =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    [...staticEntries, ...articleEntries].map(urlEntry).join('\n') +
    '\n</urlset>\n';

  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  return res.status(200).send(body);
}
