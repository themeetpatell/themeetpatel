#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { blogArticles } from './src/data/blogData.js';
import { systems } from './src/data/systems.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const baseUrl = 'https://www.themeetpatel.com';
const currentDate = new Date().toISOString().split('T')[0];

const staticPages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/about', priority: '0.95', changefreq: 'weekly' },
  { url: '/portfolio', priority: '0.95', changefreq: 'weekly' },
  { url: '/biggmate', priority: '0.9', changefreq: 'weekly' },
  { url: '/systems', priority: '0.85', changefreq: 'weekly' },
  { url: '/blogs', priority: '0.9', changefreq: 'daily' },
  { url: '/community', priority: '0.8', changefreq: 'weekly' },
  { url: '/contact', priority: '0.75', changefreq: 'monthly' },
  { url: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { url: '/cookie-policy', priority: '0.3', changefreq: 'yearly' },
  { url: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
];

const articlePages = (blogArticles || [])
  .filter((article) => article.published)
  .map((article) => ({
    url: `/blogs/${article.slug}`,
    priority: article.featured ? '0.8' : '0.7',
    changefreq: 'monthly',
    lastmod: article.date || currentDate,
  }));

const systemPages = (systems || []).map((system) => ({
  url: `/systems/${system.slug}`,
  priority: system.featured ? '0.7' : '0.6',
  changefreq: 'monthly',
  lastmod: currentDate,
}));

const urls = [...staticPages.map((page) => ({ ...page, lastmod: currentDate })), ...articlePages, ...systemPages];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log(`Generated sitemap with ${urls.length} URLs.`);
