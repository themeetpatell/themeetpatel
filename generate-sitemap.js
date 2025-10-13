#!/usr/bin/env node

/**
 * Sitemap Generator for The Meet Patel Website
 * Generates a comprehensive sitemap.xml with all pages and blog articles
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogArticles } from './src/data/blogData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL
const baseUrl = 'https://themeetpatel.com';

// Current date in ISO format
const currentDate = new Date().toISOString().split('T')[0];

// Static pages with their priorities and change frequencies
const staticPages = [
  {
    url: '/',
    priority: '1.0',
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/og-image.jpg`,
        title: 'The Meet Patel - Serial Entrepreneur | Startup Ecosystem Builder',
        caption: 'Meet The Meet Patel - Serial entrepreneur with 8+ years experience building and scaling startups'
      }
    ]
  },
  {
    url: '/about',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/meet-patel-profile.jpg`,
        title: 'About The Meet Patel - Serial Entrepreneur',
        caption: 'Learn about The Meet Patel\'s entrepreneurial journey and startup ecosystem building expertise'
      }
    ]
  },
  {
    url: '/portfolio',
    priority: '0.9',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/portfolio-preview.jpg`,
        title: 'Portfolio - The Meet Patel\'s Startup Ventures',
        caption: 'Explore The Meet Patel\'s portfolio of successful startups and business ventures'
      }
    ]
  },
  {
    url: '/systems',
    priority: '0.8',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/systems-preview.jpg`,
        title: 'StartupOS - Business Systems by The Meet Patel',
        caption: 'Discover StartupOS and business systems developed by The Meet Patel'
      }
    ]
  },
  {
    url: '/blog',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/blog-preview.jpg`,
        title: 'Blog - Startup Insights by The Meet Patel',
        caption: 'Read insights on entrepreneurship, startup building, and business strategy from The Meet Patel'
      }
    ]
  },
  {
    url: '/community',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/community-preview.jpg`,
        title: 'Community - Startup Ecosystem by The Meet Patel',
        caption: 'Join The Meet Patel\'s startup community and ecosystem'
      }
    ]
  },
  {
    url: '/contact',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/contact-preview.jpg`,
        title: 'Contact The Meet Patel - Serial Entrepreneur',
        caption: 'Get in touch with The Meet Patel for business opportunities and startup advice'
      }
    ]
  },
  {
    url: '/privacy-policy',
    priority: '0.3',
    changefreq: 'yearly',
    lastmod: currentDate
  },
  {
    url: '/terms-of-service',
    priority: '0.3',
    changefreq: 'yearly',
    lastmod: currentDate
  },
  {
    url: '/cookie-policy',
    priority: '0.3',
    changefreq: 'yearly',
    lastmod: currentDate
  }
];

// Generate blog articles from blogData.js
const blogArticleUrls = blogArticles
  .filter(article => article.published)
  .map(article => ({
    url: `/blog/${article.slug}`,
    priority: article.featured ? '0.8' : '0.6',
    changefreq: 'monthly',
    lastmod: article.date || currentDate,
    title: article.title,
    excerpt: article.excerpt
  }));

// System detail pages
const systemPages = [
  {
    url: '/systems/startupos',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/startupos-preview.jpg`,
        title: 'StartupOS - Complete Startup Management System',
        caption: 'StartupOS by The Meet Patel - Comprehensive startup management and operations system'
      }
    ]
  },
  {
    url: '/systems/business-operations-framework',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/business-operations-framework.jpg`,
        title: 'Business Operations Framework - The Meet Patel',
        caption: 'Proven business operations framework developed by The Meet Patel'
      }
    ]
  },
  {
    url: '/systems/startup-scaling-process',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/startup-scaling-process.jpg`,
        title: 'Startup Scaling Process - The Meet Patel\'s Method',
        caption: 'Systematic startup scaling process created by serial entrepreneur The Meet Patel'
      }
    ]
  }
];

// Generate XML sitemap
function generateSitemap() {
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
`;

  // Add static pages
  staticPages.forEach(page => {
    sitemap += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>`;
    
    if (page.images) {
      page.images.forEach(image => {
        sitemap += `
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
    </image:image>`;
      });
    }
    
    sitemap += `
  </url>
`;
  });

  // Add blog articles
  blogArticleUrls.forEach(article => {
    sitemap += `  <url>
    <loc>${baseUrl}${article.url}</loc>
    <lastmod>${article.lastmod}</lastmod>
    <changefreq>${article.changefreq}</changefreq>
    <priority>${article.priority}</priority>
  </url>
`;
  });

  // Add system pages
  systemPages.forEach(system => {
    sitemap += `  <url>
    <loc>${baseUrl}${system.url}</loc>
    <lastmod>${system.lastmod}</lastmod>
    <changefreq>${system.changefreq}</changefreq>
    <priority>${system.priority}</priority>`;
    
    if (system.images) {
      system.images.forEach(image => {
        sitemap += `
    <image:image>
      <image:loc>${image.loc}</image:loc>
      <image:title>${image.title}</image:title>
      <image:caption>${image.caption}</image:caption>
    </image:image>`;
      });
    }
    
    sitemap += `
  </url>
`;
  });

  sitemap += `</urlset>`;

  return sitemap;
}

// Write sitemap to file
function writeSitemap() {
  const sitemap = generateSitemap();
  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  
  try {
    fs.writeFileSync(sitemapPath, sitemap, 'utf8');
    console.log('✅ Sitemap generated successfully at:', sitemapPath);
    console.log(`📊 Total URLs: ${staticPages.length + blogArticleUrls.length + systemPages.length}`);
    console.log(`📝 Blog articles: ${blogArticleUrls.length}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
  }
}

// Run the generator
writeSitemap();
