import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({
  title,
  description,
  keywords,
  canonical,
  canonicalUrl,
  ogImage,
  ogType = 'website',
  ogTitle,
  ogDescription,
  articleAuthor,
  articlePublishedTime,
  articleModifiedTime,
  structuredData,
  // Twitter / X Card (set per-article in CMS)
  twitterCard    = 'summary_large_image',
  twitterCreator = '@the_meetpatel',
  // Robots (set per-article in CMS)
  robotsNoindex  = false,
  robotsNofollow = false,
}) => {
  const baseUrl = 'https://themeetpatel.com';
  const resolveUrl = (value, fallback = baseUrl) => {
    if (!value) return fallback;
    if (/^https?:\/\//i.test(value)) return value;
    return `${baseUrl}${value.startsWith('/') ? value : `/${value}`}`;
  };

  const canonicalValue = canonicalUrl || canonical;
  const fullCanonical  = resolveUrl(canonicalValue);
  const fullOgImage    = resolveUrl(ogImage, `${baseUrl}/og-image.jpg`);

  const defaultTitle       = 'The Meet Patel | Venture Builder, Business Strategist & Author';
  const defaultDescription = 'The Meet Patel, also known as Meet Patel and themeetpatel, is a Dubai-based venture builder, startup operator, business strategist, and author working across startups, growth, systems, and execution.';
  const defaultKeywords    = 'The Meet Patel, Meet Patel, themeetpatel, venture builder, startup operator, business strategist, startup consultant Dubai, entrepreneur Dubai, startup builder, startup growth, startup systems, business operations, startup mentor, founder advisor, author Meet Patel, startup portfolio, business strategy, operational excellence, team building, startup execution';

  const seoTitle       = title
    ? (/the meet patel|meet patel/i.test(title) ? title : `${title} | The Meet Patel`)
    : defaultTitle;
  const seoDescription = description  || defaultDescription;
  const seoKeywords    = Array.isArray(keywords) ? keywords.join(', ') : (keywords || defaultKeywords);
  const author         = articleAuthor || 'The Meet Patel';

  const resolvedOgTitle       = ogTitle       || seoTitle;
  const resolvedOgDescription = ogDescription || seoDescription;

  // Build robots directive
  const robotsParts = [
    robotsNoindex  ? 'noindex'  : 'index',
    robotsNofollow ? 'nofollow' : 'follow',
  ];
  if (!robotsNoindex) {
    robotsParts.push('max-image-preview:large', 'max-snippet:-1', 'max-video-preview:-1');
  }
  const robotsContent = robotsParts.join(', ');

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title"       content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="keywords"    content={seoKeywords} />
      <meta name="author"      content={author} />
      <meta name="creator"     content="The Meet Patel" />
      <meta name="publisher"   content="The Meet Patel" />
      <link rel="canonical"    href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type"         content={ogType} />
      <meta property="og:url"          content={fullCanonical} />
      <meta property="og:title"        content={resolvedOgTitle} />
      <meta property="og:description"  content={resolvedOgDescription} />
      <meta property="og:image"        content={fullOgImage} />
      <meta property="og:image:width"  content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt"    content={resolvedOgTitle} />
      <meta property="og:site_name"    content="The Meet Patel" />
      <meta property="og:locale"       content="en_US" />

      {/* Twitter / X */}
      <meta name="twitter:card"        content={twitterCard} />
      <meta name="twitter:url"         content={fullCanonical} />
      <meta name="twitter:title"       content={resolvedOgTitle} />
      <meta name="twitter:description" content={resolvedOgDescription} />
      <meta name="twitter:image"       content={fullOgImage} />
      <meta name="twitter:image:alt"   content={resolvedOgTitle} />
      <meta name="twitter:creator"     content={twitterCreator || '@the_meetpatel'} />
      <meta name="twitter:site"        content="@the_meetpatel" />

      {/* Article-specific */}
      <meta property="article:author" content={author} />
      {articlePublishedTime && <meta property="article:published_time" content={articlePublishedTime} />}
      {articleModifiedTime  && <meta property="article:modified_time"  content={articleModifiedTime} />}

      {/* Robots */}
      <meta name="robots"    content={robotsContent} />
      <meta name="googlebot" content={robotsNoindex ? 'noindex, nofollow' : 'index, follow'} />
      <meta name="bingbot"   content={robotsNoindex ? 'noindex, nofollow' : 'index, follow'} />

      {/* App / Device */}
      <meta name="theme-color"                           content="#0f0f23" />
      <meta name="msapplication-TileColor"               content="#0f0f23" />
      <meta name="application-name"                      content="The Meet Patel" />
      <meta name="apple-mobile-web-app-title"            content="The Meet Patel" />
      <meta name="apple-mobile-web-app-capable"          content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

      {/* Language & crawl hints */}
      <meta name="language"      content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution"  content="global" />
      <meta name="rating"        content="general" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
