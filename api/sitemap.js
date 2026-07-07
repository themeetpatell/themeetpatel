import { supabase } from './_supabase.js';

// Dynamic sitemap: static public routes + every published article from the DB,
// so the blog surface can never silently drift from what's actually live.
// Resilient by design — if the DB read fails, we still serve the static routes.

const SITE = 'https://www.themeetpatel.com';

// Indexable public routes only. Legal pages are noindex, so they are
// intentionally excluded (submitting noindex URLs triggers Search Console warnings).
const STATIC_ROUTES = [
  { path: '/', changefreq: 'daily', priority: '1.0' },
  { path: '/investors', changefreq: 'weekly', priority: '0.95' },
  { path: '/about', changefreq: 'weekly', priority: '0.9' },
  { path: '/portfolio', changefreq: 'weekly', priority: '0.85' },
  { path: '/biggmate', changefreq: 'weekly', priority: '0.8' },
  { path: '/blogs', changefreq: 'daily', priority: '0.9' },
  { path: '/community', changefreq: 'weekly', priority: '0.7' },
  { path: '/mind', changefreq: 'monthly', priority: '0.5' },
  { path: '/contact', changefreq: 'monthly', priority: '0.75' },
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
      .select('slug, published_at, last_updated_at, updated_at, date')
      .eq('status', 'published')
      .order('published_at', { ascending: false, nullsFirst: false });
    if (error) throw error;

    articleEntries = (data || [])
      .filter((a) => a.slug)
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

  const staticEntries = STATIC_ROUTES.map((r) => ({
    loc: `${SITE}${r.path}`,
    lastmod: today,
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
