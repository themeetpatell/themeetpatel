import { createClient } from '@supabase/supabase-js';

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req, res) {
  const { slug } = req.query;
  if (!slug) {
    res.writeHead(302, { Location: '/blogs' });
    return res.end();
  }

  const supabaseUrl = process.env.VITE_SUPABASE_URL;
  const supabaseKey =
    process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
    process.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseKey) {
    res.writeHead(302, { Location: `/blogs/${encodeURIComponent(slug)}` });
    return res.end();
  }

  const supabase = createClient(supabaseUrl, supabaseKey);

  const { data: article } = await supabase
    .from('articles')
    .select(
      'title, excerpt, slug, author, date, published_at, category, tags, og_image, meta_title, meta_description, og_title, og_description, twitter_card, twitter_creator'
    )
    .eq('slug', slug)
    .eq('status', 'published')
    .single();

  if (!article) {
    res.writeHead(302, { Location: `/blogs/${encodeURIComponent(slug)}` });
    return res.end();
  }

  const title = escapeHtml(
    article.og_title || article.meta_title || article.title
  );
  const description = escapeHtml(
    article.og_description || article.meta_description || article.excerpt
  );
  // Only use og_image if explicitly set — avoids referencing a missing fallback file
  const image = article.og_image ? escapeHtml(article.og_image) : null;
  const url = `https://themeetpatel.com/blogs/${article.slug}`;
  const author = escapeHtml(article.author || 'The Meet Patel');
  const publishedTime = article.published_at || article.date || '';
  const twitterCard = escapeHtml(article.twitter_card || 'summary_large_image');
  const twitterCreator = escapeHtml(article.twitter_creator || '@the_meetpatel');
  const keywords = escapeHtml(
    [...(article.tags || []), article.category].filter(Boolean).join(', ')
  );

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${title} | The Meet Patel</title>
  <meta name="description" content="${description}" />
  <meta name="author" content="${author}" />
  <meta name="keywords" content="${keywords}" />
  <link rel="canonical" href="${url}" />

  <!-- Open Graph -->
  <meta property="og:type" content="article" />
  <meta property="og:url" content="${url}" />
  <meta property="og:title" content="${title}" />
  <meta property="og:description" content="${description}" />
  ${image ? `<meta property="og:image" content="${image}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content="${title}" />` : ''}
  <meta property="og:site_name" content="The Meet Patel" />
  <meta property="og:locale" content="en_US" />
  <meta property="article:author" content="${author}" />
  ${publishedTime ? `<meta property="article:published_time" content="${publishedTime}" />` : ''}

  <!-- Twitter -->
  <meta name="twitter:card" content="${image ? twitterCard : 'summary'}" />
  <meta name="twitter:url" content="${url}" />
  <meta name="twitter:title" content="${title}" />
  <meta name="twitter:description" content="${description}" />
  ${image ? `<meta name="twitter:image" content="${image}" />
  <meta name="twitter:image:alt" content="${title}" />` : ''}
  <meta name="twitter:creator" content="${twitterCreator}" />

  <!-- LinkedIn specific -->
  <meta name="title" content="${title}" />

  <!-- Redirect human visitors to the SPA (bots read OG tags above and don't follow) -->
  <script>if(!/bot|crawler|spider|linkedinbot|twitterbot|facebookexternalhit/i.test(navigator.userAgent)){window.location.replace('${url}');}</script>
</head>
<body>
  <p>${description}</p>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400');
  res.status(200).send(html);
}
