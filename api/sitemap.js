import { supabase } from './_supabase.js';

// Dynamic sitemap: static public routes + every published article from the DB,
// so the blog surface can never silently drift from what's actually live.
// Resilient by design — if the DB read fails, we still serve the static routes.

const SITE = 'https://www.themeetpatel.com';

// Indexable public routes only. Legal pages are noindex, so they are
// intentionally excluded (submitting noindex URLs triggers Search Console warnings).
//
// `lastmod` must be honest — Google discounts sitemaps where every URL claims
// today's date. Each route carries the date its copy actually last changed;
// bump it in the same commit that edits the page. Routes marked `feed: true`
// derive lastmod from the newest published article instead.
//
// /labs is intentionally absent: LabsPage sets robotsNoindex, and submitting
// noindex URLs is what triggers Search Console coverage warnings.
const STATIC_ROUTES = [
  { path: '/',           changefreq: 'weekly',  priority: '1.0',  feed: true,  lastmod: '2026-08-20' },
  { path: '/investors',  changefreq: 'weekly',  priority: '0.95', lastmod: '2026-08-20' },
  { path: '/about',      changefreq: 'monthly', priority: '0.9',  lastmod: '2026-08-20' },
  { path: '/blogs',      changefreq: 'daily',   priority: '0.9',  feed: true,  lastmod: '2026-08-20' },
  { path: '/portfolio',  changefreq: 'monthly', priority: '0.85', lastmod: '2026-07-07' },
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

export default async function handler(req, res) {
  const today = new Date().toISOString().slice(0, 10);

  let articleEntries = [];
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('slug, published_at, last_updated_at, updated_at, date, canonical_url')
      .eq('status', 'published')
      .order('published_at', { ascending: false, nullsFirst: false });
    if (error) throw error;

    // A syndicated post canonicalises to another domain. Listing it here would ask
    // Google to index a URL we have already told it not to index.
    const isSyndicated = (a) =>
      a.canonical_url &&
      /^https?:\/\//i.test(a.canonical_url) &&
      !a.canonical_url.startsWith(SITE);

    articleEntries = (data || [])
      .filter((a) => a.slug && !isSyndicated(a))
      .map((a) => ({
        loc: `${SITE}/blogs/${a.slug}`,
        lastmod: toDate(a.last_updated_at || a.updated_at || a.published_at || a.date, today),
        changefreq: 'monthly',
        priority: '0.8',
      }));
  } catch (err) {
    // Never fail the sitemap — degrade to static routes only.
    console.error('sitemap: article fetch failed, serving static routes only:', err);
  }

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
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  return res.status(200).send(body);
}
