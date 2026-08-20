import { supabase } from './_supabase.js';
import { SITE_LINKS, PROFILE_LINKS } from './_pageContent.js';
import { meetPatelEntities, buildBreadcrumb } from '../src/lib/seoEntity.js';

// Bot-facing article page: full content + entity-linked JSON-LD.
// Real browsers are redirected to the SPA; crawlers and AI agents (which do
// not execute JS) get the complete article HTML so answer engines can quote it.

const BASE = 'https://www.themeetpatel.com';
const PERSON_ID = `${BASE}/#person`;
const SLUG_PATTERN = /^[a-z0-9][a-z0-9-]{0,199}$/i;
const RELATED_LIMIT = 6;

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
        'title, excerpt, slug, author, date, published_at, last_updated_at, updated_at, category, tags, secondary_keywords, read_time, content_html, og_image, meta_title, meta_description, og_title, og_description, twitter_card, twitter_creator, schema_type, ai_summary, faq_items, howto_steps, citations, speakable'
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
  // Prefer an explicitly uploaded image; otherwise generate a per-article card.
  // The old fallback was a single shared /og-image.jpg, which gave 35 different
  // essays an identical card everywhere they were shared or cited.
  const rawImage = article?.og_image || `${BASE}/api/og-image?slug=${encodeURIComponent(slug)}`;
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

  // Other essays, so a crawler that lands on one article can reach the rest of
  // the corpus. Without this the bot page is a dead end with two links on it.
  let related = [];
  try {
    const { data, error } = await supabase
      .from('articles')
      .select('slug, title')
      .eq('status', 'published')
      .neq('slug', slug)
      .order('published_at', { ascending: false, nullsFirst: false })
      .limit(RELATED_LIMIT);
    if (error) throw error;
    related = (data || []).filter((a) => a.slug && a.title);
  } catch (err) {
    console.error('og: related fetch failed, rendering article without it:', err);
  }

  // The CMS carries a full AEO payload per article (ai_summary, faq_items,
  // howto_steps, citations). The SPA already renders it; without this block the
  // bot page — the surface AI crawlers actually read — was dropping all of it.
  const faqItems = (article?.faq_items || []).filter((f) => f?.question && f?.answer);
  const howtoSteps = (article?.howto_steps || []).filter((s) => s?.title);
  const citations = (article?.citations || []).filter((c) => c?.url && c?.title);
  const schemaType = article?.schema_type || 'BlogPosting';

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    '@id': `${articleUrl}#article`,
    mainEntityOfPage: articleUrl,
    url: articleUrl,
    headline: rawTitle.slice(0, 110),
    description: rawDescription,
    image: rawImage,
    ...(publishedTime ? { datePublished: publishedTime } : {}),
    ...(modifiedTime ? { dateModified: modifiedTime } : {}),
    ...(rawKeywords ? { keywords: rawKeywords } : {}),
    ...(article?.category ? { articleSection: article.category } : {}),
    ...(article?.read_time ? { timeRequired: article.read_time } : {}),
    ...(article?.ai_summary ? { abstract: article.ai_summary } : {}),
    ...(article?.speakable && article?.ai_summary
      ? { speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-ai-summary'] } }
      : {}),
    ...(citations.length
      ? { citation: citations.map((c) => ({ '@type': 'CreativeWork', name: c.title, url: c.url })) }
      : {}),
    inLanguage: 'en-US',
    isPartOf: { '@id': `${BASE}/#website` },
    about: { '@id': PERSON_ID },
    author: { '@id': PERSON_ID },
    publisher: { '@id': PERSON_ID },
  };

  const graph = [
    ...meetPatelEntities,
    articleLd,
    buildBreadcrumb([
      { name: 'Home', url: '/' },
      { name: 'Writing', url: '/blogs' },
      { name: rawTitle, url: `/blogs/${slug}` },
    ]),
    // FAQ/HowTo schema is only emitted when the Q&A or steps are also rendered
    // in the body below — markup describing absent content is a policy violation.
    ...(faqItems.length
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqItems.map((f) => ({
              '@type': 'Question',
              name: f.question,
              acceptedAnswer: { '@type': 'Answer', text: f.answer },
            })),
          },
        ]
      : []),
    ...(schemaType === 'HowToArticle' && howtoSteps.length >= 2
      ? [
          {
            '@context': 'https://schema.org',
            '@type': 'HowTo',
            name: rawTitle,
            step: howtoSteps.map((s, i) => ({
              '@type': 'HowToStep',
              position: i + 1,
              name: s.title,
              text: s.description || s.title,
              ...(s.image ? { image: s.image } : {}),
            })),
          },
        ]
      : []),
  ];

  const aiSummaryHtml = article?.ai_summary
    ? `<section class="article-ai-summary"><h2>Summary</h2><p>${esc(article.ai_summary)}</p></section>`
    : '';

  const faqHtml = faqItems.length
    ? `<section><h2>Frequently asked questions</h2>${faqItems
        .map((f) => `<h3>${esc(f.question)}</h3><p>${esc(f.answer)}</p>`)
        .join('')}</section>`
    : '';

  const howtoHtml =
    schemaType === 'HowToArticle' && howtoSteps.length >= 2
      ? `<section><h2>Steps</h2><ol>${howtoSteps
          .map((s) => `<li><strong>${esc(s.title)}</strong>${s.description ? ` — ${esc(s.description)}` : ''}</li>`)
          .join('')}</ol></section>`
      : '';

  const citationsHtml = citations.length
    ? `<section><h2>Sources</h2><ul>${citations
        .map((c) => `<li><a href="${esc(c.url)}">${esc(c.title)}</a></li>`)
        .join('')}</ul></section>`
    : '';

  const linkList = (heading, links) =>
    `<nav><h2>${heading}</h2><ul>${links
      .map((l) => `<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`)
      .join('')}</ul></nav>`;

  const relatedHtml = related.length
    ? `<nav><h2>More essays by Meet Patel</h2><ul>${related
        .map((a) => `<li><a href="${BASE}/blogs/${esc(a.slug)}">${esc(a.title)}</a></li>`)
        .join('')}</ul></nav>`
    : '';

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

  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

  <script type="application/ld+json">${JSON.stringify(graph)}</script>

  <!-- Redirect real browsers to the SPA (bots don't execute JS) -->
  <script>window.location.replace(${JSON.stringify(articleUrl)});</script>
</head>
<body>
  <nav><a href="${BASE}/">Home</a> › <a href="${BASE}/blogs">Writing</a> › <span>${title}</span></nav>
  <article>
    <h1>${title}</h1>
    <p>By ${author}${publishedTime ? ` · ${esc(String(publishedTime).slice(0, 10))}` : ''}${
      modifiedTime && modifiedTime !== publishedTime
        ? ` · updated ${esc(String(modifiedTime).slice(0, 10))}`
        : ''
    }</p>
    ${aiSummaryHtml}
    ${bodyHtml}
    ${howtoHtml}
    ${faqHtml}
    ${citationsHtml}
    <p>Written by Meet Patel — founder of Company 8, building Dan (usedan.com). Dubai, UAE.</p>
    <p><a href="${articleUrl}">Read on themeetpatel.com</a></p>
  </article>
  ${relatedHtml}
  ${linkList('Elsewhere on this site', SITE_LINKS)}
  ${linkList('Meet Patel elsewhere', PROFILE_LINKS)}
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  res.status(200).send(html);
}
