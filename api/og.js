import { supabase } from './_supabase.js';

// Bot-facing article page: full content + entity-linked JSON-LD.
// Real browsers are redirected to the SPA; crawlers and AI agents (which do
// not execute JS) get the complete article HTML so answer engines can quote it.

const BASE = 'https://www.themeetpatel.com';
const DEFAULT_IMAGE = `${BASE}/og-image.jpg`;
const PERSON_ID = `${BASE}/#person`;
const SLUG_PATTERN = /^[a-z0-9][a-z0-9-]{0,199}$/i;

function esc(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req, res) {
  const { slug } = req.query;

  if (!slug || !SLUG_PATTERN.test(String(slug))) {
    res.writeHead(302, { Location: `${BASE}/blogs` });
    return res.end();
  }

  const articleUrl = `${BASE}/blogs/${slug}`;

  let article = null;
  try {
    const { data, error } = await supabase
      .from('articles')
      .select(
        'title, excerpt, slug, author, date, published_at, last_updated_at, updated_at, category, tags, content_html, og_image, meta_title, meta_description, og_title, og_description, twitter_card, twitter_creator'
      )
      .eq('slug', slug)
      .eq('status', 'published')
      .limit(1)
      .maybeSingle();
    if (error) throw error;
    article = data ?? null;
  } catch (err) {
    // Degrade to slug-based defaults rather than failing the page.
    console.error('og: article fetch failed, serving slug defaults:', err);
  }

  const rawTitle =
    article?.og_title ||
    article?.meta_title ||
    article?.title ||
    String(slug)
      .split('-')
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(' ');
  const rawDescription =
    article?.og_description ||
    article?.meta_description ||
    article?.excerpt ||
    `Read this article by Meet Patel (themeetpatel) on ${BASE}/blogs`;
  const rawImage = article?.og_image || DEFAULT_IMAGE;
  const rawAuthor = article?.author || 'Meet Patel';
  const publishedTime = article?.published_at || article?.date || '';
  const modifiedTime = article?.last_updated_at || article?.updated_at || publishedTime;
  const rawKeywords = [...(article?.tags || []), article?.category].filter(Boolean).join(', ');

  const title = esc(rawTitle);
  const description = esc(rawDescription);
  const image = esc(rawImage);
  const author = esc(rawAuthor);
  const twitterCard = esc(article?.twitter_card || 'summary_large_image');
  const twitterCreator = esc(article?.twitter_creator || '@the_meetpatel');
  const keywords = esc(rawKeywords);

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': `${articleUrl}#article`,
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    headline: rawTitle,
    description: rawDescription,
    image: rawImage,
    ...(publishedTime ? { datePublished: publishedTime } : {}),
    ...(modifiedTime ? { dateModified: modifiedTime } : {}),
    ...(rawKeywords ? { keywords: rawKeywords } : {}),
    author: { '@type': 'Person', '@id': PERSON_ID, name: 'Meet Patel', url: BASE },
    publisher: { '@type': 'Person', '@id': PERSON_ID, name: 'Meet Patel', url: BASE },
  };

  // content_html is admin-authored rich text, rendered as-is on purpose so
  // crawlers receive the full article body.
  const bodyHtml =
    article?.content_html ||
    (article?.excerpt ? `<p>${esc(article.excerpt)}</p>` : `<p>${description}</p>`);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${title} | Meet Patel — themeetpatel</title>
  <meta name="description" content="${description}" />
  <meta name="author" content="${author}" />
  ${keywords ? `<meta name="keywords" content="${keywords}" />` : ''}
  <link rel="canonical" href="${articleUrl}" />

  <!-- Open Graph (LinkedIn, Facebook, WhatsApp) -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${articleUrl}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  <meta property="og:image" content="${image}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${title}" />
  <meta property="og:site_name" content="The Meet Patel" />
  <meta property="og:locale" content="en_US" />
  <meta property="article:author" content="${author}" />
  ${publishedTime ? `<meta property="article:published_time" content="${esc(publishedTime)}" />` : ''}

  <!-- Twitter / X -->
  <meta name="twitter:card" content="${twitterCard}" />
  <meta name="twitter:site" content="@the_meetpatel" />
  <meta name="twitter:creator" content="${twitterCreator}" />
  <meta name="twitter:url" content="${articleUrl}" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  <meta name="twitter:image" content="${image}" />
  <meta name="twitter:image:alt" content="${title}" />

  <script type="application/ld+json">${JSON.stringify(articleLd)}</script>

  <!-- Redirect real browsers to the SPA (bots don't execute JS) -->
  <script>window.location.replace(${JSON.stringify(articleUrl)});</script>
</head>
<body>
  <article>
    <h1>${title}</h1>
    <p>By ${author}${publishedTime ? ` · ${esc(String(publishedTime).slice(0, 10))}` : ''}</p>
    ${bodyHtml}
    <p><a href="${articleUrl}">Read on themeetpatel.com</a> · <a href="${BASE}/blogs">More articles by Meet Patel</a></p>
  </article>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  res.status(200).send(html);
}
