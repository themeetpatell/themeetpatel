import { supabase } from './_supabase.js';
import { PAGES, SITE, SITE_LINKS, PROFILE_LINKS } from './_pageContent.js';
import { meetPatelEntities, buildBreadcrumb, buildFaqPage } from '../src/lib/seoEntity.js';

// Bot-facing renderer for every non-article route.
//
// Exported as a function rather than being its own api/ handler: Vercel's plan
// caps this project at 12 Serverless Functions and it was already at exactly 12,
// so adding a file here failed the deployment. api/og.js dispatches to this.
//
// The site is a client-rendered SPA. Googlebot renders JS on a second pass, but
// GPTBot, ClaudeBot, PerplexityBot, Applebot-Extended and most other AI crawlers
// do not — they were receiving an identical empty shell on every URL, which is
// why /investors and /about looked like duplicates of the homepage.
//
// vercel.json routes bot user-agents here; humans get the SPA untouched. The
// prose served here is a faithful summary of what the React page renders
// (see api/_pageContent.js) — not a keyword surface.

const esc = (value) => {
  if (value === null || value === undefined) return '';
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
};

/** Normalise the incoming path to a key in PAGES, or null if it isn't one. */
const resolvePath = (raw) => {
  if (!raw) return null;
  const path = String(raw).split('?')[0].replace(/\/+$/, '') || '/';
  return Object.prototype.hasOwnProperty.call(PAGES, path) ? path : null;
};

const renderList = (items = []) =>
  items.length ? `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>` : '';

const renderSection = ({ h2, paragraphs = [], list = [] }) =>
  [
    `<h2>${esc(h2)}</h2>`,
    ...paragraphs.map((p) => `<p>${esc(p)}</p>`),
    renderList(list),
  ].join('\n    ');

/** FAQ is rendered visibly, so the FAQPage schema describes content that exists. */
const renderFaq = (faq = []) =>
  faq.length
    ? `<section>
    <h2>Frequently asked questions</h2>
    ${faq.map(({ q, a }) => `<h3>${esc(q)}</h3>\n    <p>${esc(a)}</p>`).join('\n    ')}
  </section>`
    : '';

const renderLinks = (heading, links) => `<nav>
    <h2>${esc(heading)}</h2>
    <ul>${links.map((l) => `<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`).join('')}</ul>
  </nav>`;

/** Recent articles, so a crawler landing on /blogs can reach the actual essays. */
async function fetchArticleLinks(limit = 60) {
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('slug, title, excerpt, published_at, date')
      .eq('status', 'published')
      .order('published_at', { ascending: false, nullsFirst: false })
      .limit(limit);
    if (error) throw error;
    return (data || []).filter((a) => a.slug && a.title);
  } catch (err) {
    // A crawler should still get the page; it just won't get the index.
    console.error('page: article list fetch failed, rendering page without it:', err);
    return [];
  }
}

export async function renderPage(req, res) {
  const path = resolvePath(req.query?.path);

  if (!path) {
    res.writeHead(302, { Location: SITE });
    return res.end();
  }

  const page = PAGES[path];
  const canonical = path === '/' ? `${SITE}/` : `${SITE}${path}`;

  const articles = page.injectArticleList ? await fetchArticleLinks() : [];

  const sections = [...(page.sections || [])];
  if (page.injectArticleList) {
    sections.push({
      h2: `All essays (${articles.length})`,
      paragraphs: articles.length
        ? []
        : ['The article index is temporarily unavailable. Every essay is listed in the sitemap at https://www.themeetpatel.com/sitemap.xml.'],
    });
  }

  const articleHtml = articles.length
    ? `<ul>${articles
        .map(
          (a) =>
            `<li><a href="${SITE}/blogs/${esc(a.slug)}">${esc(a.title)}</a>${
              a.excerpt ? ` — ${esc(a.excerpt)}` : ''
            }</li>`
        )
        .join('')}</ul>`
    : '';

  const graph = [
    ...meetPatelEntities,
    {
      '@context': 'https://schema.org',
      '@type': page.schemaType || 'WebPage',
      '@id': `${canonical}#webpage`,
      url: canonical,
      name: page.title,
      description: page.description,
      isPartOf: { '@id': `${SITE}/#website` },
      about: { '@id': `${SITE}/#person` },
      ...(page.schemaType === 'ProfilePage' ? { mainEntity: { '@id': `${SITE}/#person` } } : {}),
      inLanguage: 'en-US',
      breadcrumb: buildBreadcrumb(page.breadcrumb || [{ name: 'Home', url: '/' }]),
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2'] },
    },
    buildBreadcrumb(page.breadcrumb || [{ name: 'Home', url: '/' }]),
    ...(page.faq?.length ? [buildFaqPage(page.faq)] : []),
  ];

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${esc(page.title)}</title>
  <meta name="description" content="${esc(page.description)}" />
  <meta name="author" content="Meet Patel" />
  ${page.keywords ? `<meta name="keywords" content="${esc(page.keywords)}" />` : ''}
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  <link rel="canonical" href="${esc(canonical)}" />

  <meta property="og:type" content="website" />
  <meta property="og:url" content="${esc(canonical)}" />
  <meta property="og:title" content="${esc(page.title)}" />
  <meta property="og:description" content="${esc(page.description)}" />
  <meta property="og:image" content="${SITE}/og-image.jpg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:site_name" content="The Meet Patel" />
  <meta property="og:locale" content="en_US" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@the_meetpatel" />
  <meta name="twitter:creator" content="@the_meetpatel" />
  <meta name="twitter:title" content="${esc(page.title)}" />
  <meta name="twitter:description" content="${esc(page.description)}" />
  <meta name="twitter:image" content="${SITE}/og-image.jpg" />

  <script type="application/ld+json">${JSON.stringify(graph)}</script>

  <!-- Real browsers get the SPA; bots don't execute this. -->
  <script>window.location.replace(${JSON.stringify(canonical)});</script>
</head>
<body>
  <main>
    <h1>${esc(page.h1)}</h1>
    <p>${esc(page.intro)}</p>
    ${sections.map(renderSection).join('\n    ')}
    ${articleHtml}
    ${renderFaq(page.faq)}
  </main>
  ${renderLinks('Elsewhere on this site', SITE_LINKS)}
  ${renderLinks('Meet Patel elsewhere', PROFILE_LINKS)}
  <footer>
    <p>Canonical: <a href="${esc(canonical)}">${esc(canonical)}</a> · Machine-readable summary: <a href="${SITE}/llms.txt">llms.txt</a> · <a href="${SITE}/llms-full.txt">llms-full.txt</a></p>
  </footer>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  return res.status(200).send(html);
}
