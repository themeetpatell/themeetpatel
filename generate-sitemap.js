#!/usr/bin/env node

/**
 * Sitemap Generator for The Meet Patel Website
 * Generates a comprehensive sitemap.xml with all pages and blog articles
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL
const baseUrl = 'https://themeetpatel.com';

// Current date in ISO format
const currentDate = new Date().toISOString().split('T')[0];

// Static pages with their priorities and change frequencies - SUPER HIGH SEO OPTIMIZED
const staticPages = [
  {
    url: '/',
    priority: '1.0',
    changefreq: 'daily',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/og-image.jpg`,
        title: 'The Meet Patel - Serial Entrepreneur | StartupOS Founder | BiggBizz Creator',
        caption: 'The Meet Patel - Serial entrepreneur, StartupOS founder, BiggBizz creator with 8+ years experience building and scaling startups'
      }
    ]
  },
  {
    url: '/about',
    priority: '0.95',
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/meet-patel-profile.jpg`,
        title: 'About The Meet Patel - Serial Entrepreneur | StartupOS Founder | BiggBizz Creator',
        caption: 'Learn about The Meet Patel\'s entrepreneurial journey, StartupOS creation, and BiggBizz development expertise'
      }
    ]
  },
  {
    url: '/the-meet-patel',
    priority: '0.95',
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/the-meet-patel-profile.jpg`,
        title: 'The Meet Patel - Serial Entrepreneur | StartupOS | BiggBizz',
        caption: 'The Meet Patel - Serial entrepreneur, StartupOS founder, BiggBizz creator, and startup ecosystem builder'
      }
    ]
  },
  {
    url: '/themeetpatel',
    priority: '0.95',
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/themeetpatel-profile.jpg`,
        title: 'themeetpatel - Serial Entrepreneur | StartupOS | BiggBizz',
        caption: 'themeetpatel - The Meet Patel\'s personal brand, StartupOS platform, and BiggBizz ventures'
      }
    ]
  },
  {
    url: '/startupos',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/startupos-main.jpg`,
        title: 'StartupOS - The Meet Patel\'s Startup Management Platform',
        caption: 'StartupOS by The Meet Patel - Complete startup management and operations platform for entrepreneurs'
      }
    ]
  },
  {
    url: '/biggmate',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/biggmate-main.jpg`,
        title: 'BiggMate - The Meet Patel\'s Co-foundership Building Platform',
        caption: 'BiggMate by The Meet Patel - Co-foundership building platform connecting entrepreneurs to build startups together'
      }
    ]
  },
  {
    url: '/biggbizz',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/biggbizz-main.jpg`,
        title: 'BiggBizz - The Meet Patel\'s Business Platform',
        caption: 'BiggBizz by The Meet Patel - Comprehensive business platform for entrepreneurs and startups'
      }
    ]
  },
  {
    url: '/portfolio',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/portfolio-preview.jpg`,
        title: 'Portfolio - The Meet Patel\'s Startup Ventures | StartupOS | BiggBizz | BiggMate',
        caption: 'Explore The Meet Patel\'s portfolio including StartupOS, BiggBizz, BiggMate, and other successful startup ventures'
      }
    ]
  },
  {
    url: '/startups',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/startups-main.jpg`,
        title: 'Startups - The Meet Patel\'s Startup Ventures and Mentorship',
        caption: 'The Meet Patel\'s startup ventures, mentorship programs, and startup ecosystem building expertise'
      }
    ]
  },
  {
    url: '/business-strategy',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/business-strategy-main.jpg`,
        title: 'Business Strategy - The Meet Patel\'s Strategic Consulting',
        caption: 'Business strategy consulting and advisory services by The Meet Patel for startups and entrepreneurs'
      }
    ]
  },
  {
    url: '/serial-entrepreneur',
    priority: '0.9',
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/serial-entrepreneur-main.jpg`,
        title: 'Serial Entrepreneur - The Meet Patel\'s Journey',
        caption: 'The Meet Patel\'s journey as a serial entrepreneur, building multiple successful startups and ventures'
      }
    ]
  },
  {
    url: '/startup-mentor',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/startup-mentor-main.jpg`,
        title: 'Startup Mentor - The Meet Patel\'s Mentorship Program',
        caption: 'The Meet Patel\'s startup mentorship program, guiding entrepreneurs and startup founders to success'
      }
    ]
  },
  {
    url: '/dubai-entrepreneur',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/dubai-entrepreneur-main.jpg`,
        title: 'Dubai Entrepreneur - The Meet Patel in UAE',
        caption: 'The Meet Patel - Dubai-based serial entrepreneur, startup ecosystem builder, and business consultant'
      }
    ]
  },
  {
    url: '/systems',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/systems-preview.jpg`,
        title: 'StartupOS - Business Systems by The Meet Patel | StartupOS Platform',
        caption: 'Discover StartupOS and business systems developed by The Meet Patel for startup management and operations'
      }
    ]
  },
  {
    url: '/startup-ecosystem-builder',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/startup-ecosystem-builder-main.jpg`,
        title: 'Startup Ecosystem Builder - The Meet Patel',
        caption: 'The Meet Patel as a startup ecosystem builder, creating platforms and communities for entrepreneurs'
      }
    ]
  },
  {
    url: '/business-operations-expert',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/business-operations-expert-main.jpg`,
        title: 'Business Operations Expert - The Meet Patel',
        caption: 'The Meet Patel as a business operations expert, helping startups scale and optimize their operations'
      }
    ]
  },
  {
    url: '/product-development-expert',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/product-development-expert-main.jpg`,
        title: 'Product Development Expert - The Meet Patel',
        caption: 'The Meet Patel as a product development expert, building innovative products and platforms'
      }
    ]
  },
  {
    url: '/startup-scaling-expert',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/startup-scaling-expert-main.jpg`,
        title: 'Startup Scaling Expert - The Meet Patel',
        caption: 'The Meet Patel as a startup scaling expert, helping startups grow from idea to exit'
      }
    ]
  },
  {
    url: '/business-consultant',
    priority: '0.8',
    changefreq: 'weekly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/business-consultant-main.jpg`,
        title: 'Business Consultant - The Meet Patel',
        caption: 'The Meet Patel as a business consultant, providing strategic advice and guidance to entrepreneurs'
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

// Blog articles - comprehensive list from blogData.js
const blogArticles = [
  {
    url: '/blog/from-idea-to-exit-8-year-journey',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/blog/from-idea-to-exit-8-year-journey.jpg`,
        title: 'From Idea to Exit: My 8-Year Journey as a Serial Entrepreneur',
        caption: 'Reflecting on the lessons learned from building multiple startups and the wisdom gained along the way'
      }
    ]
  },
  {
    url: '/blog/art-of-writing-love-stories-eternal-love',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/blog/art-of-writing-love-stories-eternal-love.jpg`,
        title: 'The Art of Writing Love Stories: Behind The Eternal Love',
        caption: 'Discover the creative process behind writing romantic novels and storytelling'
      }
    ]
  },
  {
    url: '/blog/startup-ecosystem-building',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/blog/startup-ecosystem-building.jpg`,
        title: 'Startup Ecosystem Building - Insights by The Meet Patel',
        caption: 'Learn how to build successful startup ecosystems from The Meet Patel\'s experience'
      }
    ]
  },
  {
    url: '/blog/business-operations-expertise',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/blog/business-operations-expertise.jpg`,
        title: 'Business Operations Expertise - The Meet Patel\'s Guide',
        caption: 'Master business operations with insights from serial entrepreneur The Meet Patel'
      }
    ]
  },
  {
    url: '/blog/startup-scaling-strategies',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/blog/startup-scaling-strategies.jpg`,
        title: 'Startup Scaling Strategies - The Meet Patel\'s Experience',
        caption: 'Proven startup scaling strategies from The Meet Patel\'s 8+ years of experience'
      }
    ]
  },
  {
    url: '/blog/entrepreneurship-lessons',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/blog/entrepreneurship-lessons.jpg`,
        title: 'Entrepreneurship Lessons - The Meet Patel\'s Journey',
        caption: 'Key entrepreneurship lessons learned from The Meet Patel\'s startup journey'
      }
    ]
  },
  {
    url: '/blog/product-management-guide',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/blog/product-management-guide.jpg`,
        title: 'Product Management Guide - The Meet Patel\'s Expertise',
        caption: 'Comprehensive product management guide from serial entrepreneur The Meet Patel'
      }
    ]
  },
  {
    url: '/blog/startup-funding-guide',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/blog/startup-funding-guide.jpg`,
        title: 'Startup Funding Guide - The Meet Patel\'s Experience',
        caption: 'Complete guide to startup funding and investor relations from serial entrepreneur The Meet Patel'
      }
    ]
  },
  {
    url: '/blog/team-building-startups',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/blog/team-building-startups.jpg`,
        title: 'Team Building for Startups - The Meet Patel\'s Method',
        caption: 'Learn how to build and scale high-performing teams in startup environments'
      }
    ]
  },
  {
    url: '/blog/digital-marketing-strategies',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/blog/digital-marketing-strategies.jpg`,
        title: 'Digital Marketing Strategies for Startups - The Meet Patel',
        caption: 'Effective digital marketing strategies for startup growth and customer acquisition'
      }
    ]
  }
];

// System detail pages - comprehensive list from systems.js
const systemPages = [
  {
    url: '/systems/startup-scaling-framework',
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/systems/startup-scaling-framework.jpg`,
        title: 'Startup Scaling & Growth Framework - The Meet Patel',
        caption: 'Comprehensive framework for scaling startups from early stage to growth phase'
      }
    ]
  },
  {
    url: '/systems/content-marketing-sop',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/systems/content-marketing-sop.jpg`,
        title: 'Content Creation & Marketing System - The Meet Patel',
        caption: 'Comprehensive content marketing system including creation workflows and distribution strategies'
      }
    ]
  },
  {
    url: '/systems/customer-success-workflow',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/systems/customer-success-workflow.jpg`,
        title: 'Customer Success & Retention Workflow - The Meet Patel',
        caption: 'Proven customer success workflow for improving retention and satisfaction'
      }
    ]
  },
  {
    url: '/systems/hr-recruitment-system',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/systems/hr-recruitment-system.jpg`,
        title: 'HR & Recruitment Management System - The Meet Patel',
        caption: 'Complete HR and recruitment system for startup team building'
      }
    ]
  },
  {
    url: '/systems/financial-tracking-system',
    priority: '0.6',
    changefreq: 'monthly',
    lastmod: currentDate,
    images: [
      {
        loc: `${baseUrl}/systems/financial-tracking-system.jpg`,
        title: 'Financial Tracking & Reporting System - The Meet Patel',
        caption: 'Advanced financial tracking and reporting system for startup financial management'
      }
    ]
  },
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
  blogArticles.forEach(article => {
    sitemap += `  <url>
    <loc>${baseUrl}${article.url}</loc>
    <lastmod>${article.lastmod}</lastmod>
    <changefreq>${article.changefreq}</changefreq>
    <priority>${article.priority}</priority>`;
    
    if (article.images) {
      article.images.forEach(image => {
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
    console.log(`📊 Total URLs: ${staticPages.length + blogArticles.length + systemPages.length}`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
  }
}

// Run the generator
writeSitemap();
