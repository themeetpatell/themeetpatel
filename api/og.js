/* global process */
import { createClient } from '@supabase/supabase-js';

const BASE = 'https://www.themeetpatel.com';
const DEFAULT_IMAGE = `${BASE}/og-image.jpg`;

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

  if (!slug) {
    res.writeHead(302, { Location: `${BASE}/blogs` });
    return res.end();
  }

  const articleUrl = `${BASE}/blogs/${slug}`;

  // --- fetch article (never redirect on failure — bots would loop) ---
  let article = null;
  try {
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseKey =
      process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
      process.env.VITE_SUPABASE_ANON_KEY;

    if (supabaseUrl && supabaseKey) {
      const supabase = createClient(supabaseUrl, supabaseKey);
      const { data } = await supabase
        .from('articles')
        .select('title, excerpt, slug, author, date, published_at, category, tags, og_image, meta_title, meta_description, og_title, og_description, twitter_card, twitter_creator')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();
      article = data;
    }
  } catch {
    // fall through to slug-based defaults
  }

  // --- resolve values (graceful fallback when article is null) ---
  const title       = esc(article?.og_title || article?.meta_title || article?.title || slug.split('-').map(w => w[0].toUpperCase() + w.slice(1)).join(' '));
  const description = esc(article?.og_description || article?.meta_description || article?.excerpt || `Read this article by The Meet Patel on ${BASE}/blogs`);
  const image       = esc(article?.og_image || DEFAULT_IMAGE);
  const author      = esc(article?.author || 'The Meet Patel');
  const publishedTime = article?.published_at || article?.date || '';
  const twitterCard   = esc(article?.twitter_card || 'summary_large_image');
  const twitterCreator = esc(article?.twitter_creator || '@the_meetpatel');
  const keywords    = esc([...(article?.tags || []), article?.category].filter(Boolean).join(', '));

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${title} | The Meet Patel</title>
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

  <!-- Redirect real browsers to the SPA (bots don't execute JS) -->
  <script>window.location.replace('${articleUrl}');</script>
</head>
<body>
  <h1>${title}</h1>
  <p>${description}</p>
  <a href="${articleUrl}">Read on The Meet Patel</a>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  res.status(200).send(html);
}
