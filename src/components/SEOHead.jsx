import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title, 
  description, 
  keywords, 
  canonical, 
  ogImage, 
  ogType = 'website',
  articleAuthor,
  articlePublishedTime,
  articleModifiedTime,
  structuredData
}) => {
  const baseUrl = 'https://themeetpatel.com';
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;
  const fullOgImage = ogImage ? `${baseUrl}${ogImage}` : `${baseUrl}/og-image.jpg`;
  
  // Default SEO data
  const defaultTitle = 'The Meet Patel - Serial Entrepreneur | Startup Ecosystem Builder | Business Operations Expert';
  const defaultDescription = 'Meet The Meet Patel - Serial entrepreneur with 8+ years experience building and scaling startups. Founder of StartupOS, ZeroHuman, MealVerse. Expert in business operations, product development, and startup ecosystem building. Based in Dubai, UAE.';
  const defaultKeywords = 'The Meet Patel, Meet Patel, themeetpatel, serial entrepreneur, startup ecosystem builder, business operations expert, StartupOS founder, ZeroHuman founder, MealVerse founder, startup mentor, Dubai entrepreneur, business consultant, product development expert, startup scaling, business growth, entrepreneurship, startup advisor, business strategy, operations management, startup leadership';
  
  const seoTitle = title ? `${title} | The Meet Patel` : defaultTitle;
  const seoDescription = description || defaultDescription;
  const seoKeywords = keywords || defaultKeywords;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoTitle}</title>
      <meta name="title" content={seoTitle} />
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={seoTitle} />
      <meta property="og:site_name" content="The Meet Patel" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:image:alt" content={seoTitle} />
      <meta name="twitter:creator" content="@the_meetpatel" />
      <meta name="twitter:site" content="@the_meetpatel" />
      
      {/* Article specific meta tags */}
      {articleAuthor && <meta property="article:author" content={articleAuthor} />}
      {articlePublishedTime && <meta property="article:published_time" content={articlePublishedTime} />}
      {articleModifiedTime && <meta property="article:modified_time" content={articleModifiedTime} />}
      
      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="theme-color" content="#0f0f23" />
      <meta name="msapplication-TileColor" content="#0f0f23" />
      <meta name="application-name" content="The Meet Patel" />
      <meta name="apple-mobile-web-app-title" content="The Meet Patel" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Language and Content */}
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
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
