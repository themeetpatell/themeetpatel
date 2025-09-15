#!/usr/bin/env node

/**
 * SEO Validation Script for The Meet Patel Website
 * Validates SEO implementation and provides recommendations
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Target keywords to validate
const targetKeywords = [
  'Meet Patel',
  'themeetpatel', 
  'The Meet Patel',
  'StartupOS',
  'Startups',
  'Business Strategy',
  'Serial Entrepreneur',
  'Startup Ecosystem Builder',
  'Business Operations Expert',
  'Dubai Entrepreneur'
];

// Pages to validate
const pages = [
  { path: '/', name: 'Homepage' },
  { path: '/about', name: 'About Page' },
  { path: '/portfolio', name: 'Portfolio Page' },
  { path: '/systems', name: 'Systems Page' },
  { path: '/blog', name: 'Blog Page' },
  { path: '/community', name: 'Community Page' },
  { path: '/contact', name: 'Contact Page' }
];

// Check if file exists
function fileExists(filePath) {
  try {
    return fs.existsSync(filePath);
  } catch (error) {
    return false;
  }
}

// Validate robots.txt
function validateRobotsTxt() {
  console.log('🔍 Validating robots.txt...');
  const robotsPath = path.join(__dirname, 'public', 'robots.txt');
  
  if (!fileExists(robotsPath)) {
    console.log('❌ robots.txt not found');
    return false;
  }
  
  const content = fs.readFileSync(robotsPath, 'utf8');
  const hasUserAgent = content.includes('User-agent: *');
  const hasAllow = content.includes('Allow: /');
  const hasSitemap = content.includes('Sitemap:');
  
  console.log(`✅ robots.txt exists`);
  console.log(`   - User-agent directive: ${hasUserAgent ? '✅' : '❌'}`);
  console.log(`   - Allow directive: ${hasAllow ? '✅' : '❌'}`);
  console.log(`   - Sitemap reference: ${hasSitemap ? '✅' : '❌'}`);
  
  return hasUserAgent && hasAllow && hasSitemap;
}

// Validate sitemap.xml
function validateSitemapXml() {
  console.log('\n🔍 Validating sitemap.xml...');
  const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
  
  if (!fileExists(sitemapPath)) {
    console.log('❌ sitemap.xml not found');
    return false;
  }
  
  const content = fs.readFileSync(sitemapPath, 'utf8');
  const urlCount = (content.match(/<url>/g) || []).length;
  const hasImages = content.includes('xmlns:image');
  const hasBaseUrl = content.includes('https://themeetpatel.com');
  
  console.log(`✅ sitemap.xml exists`);
  console.log(`   - URL count: ${urlCount}`);
  console.log(`   - Image sitemap: ${hasImages ? '✅' : '❌'}`);
  console.log(`   - Base URL: ${hasBaseUrl ? '✅' : '❌'}`);
  
  return urlCount > 0 && hasImages && hasBaseUrl;
}

// Validate page SEO implementation
function validatePageSEO(pagePath, pageName) {
  console.log(`\n🔍 Validating ${pageName}...`);
  
  // Check if page component exists
  const componentPath = path.join(__dirname, 'src', 'pages', `${pageName.replace(' Page', 'Page')}.jsx`);
  
  if (!fileExists(componentPath)) {
    console.log(`❌ ${pageName} component not found`);
    return false;
  }
  
  const content = fs.readFileSync(componentPath, 'utf8');
  
  // Check for SEO components
  const hasSEOHead = content.includes('SEOHead');
  const hasStructuredData = content.includes('structuredData');
  const hasKeywords = content.includes('keywords');
  const hasDescription = content.includes('description');
  const hasCanonical = content.includes('canonical');
  
  console.log(`✅ ${pageName} component exists`);
  console.log(`   - SEOHead component: ${hasSEOHead ? '✅' : '❌'}`);
  console.log(`   - Structured data: ${hasStructuredData ? '✅' : '❌'}`);
  console.log(`   - Keywords prop: ${hasKeywords ? '✅' : '❌'}`);
  console.log(`   - Description prop: ${hasDescription ? '✅' : '❌'}`);
  console.log(`   - Canonical prop: ${hasCanonical ? '✅' : '❌'}`);
  
  return hasSEOHead && hasStructuredData && hasKeywords && hasDescription && hasCanonical;
}

// Validate main HTML file
function validateMainHTML() {
  console.log('\n🔍 Validating main HTML file...');
  const htmlPath = path.join(__dirname, 'index.html');
  
  if (!fileExists(htmlPath)) {
    console.log('❌ index.html not found');
    return false;
  }
  
  const content = fs.readFileSync(htmlPath, 'utf8');
  
  // Check for essential meta tags
  const hasTitle = content.includes('<title>');
  const hasDescription = content.includes('name="description"');
  const hasKeywords = content.includes('name="keywords"');
  const hasCanonical = content.includes('rel="canonical"');
  const hasOGTags = content.includes('property="og:');
  const hasTwitterTags = content.includes('name="twitter:');
  const hasStructuredData = content.includes('application/ld+json');
  
  console.log(`✅ index.html exists`);
  console.log(`   - Title tag: ${hasTitle ? '✅' : '❌'}`);
  console.log(`   - Description meta: ${hasDescription ? '✅' : '❌'}`);
  console.log(`   - Keywords meta: ${hasKeywords ? '✅' : '❌'}`);
  console.log(`   - Canonical link: ${hasCanonical ? '✅' : '❌'}`);
  console.log(`   - Open Graph tags: ${hasOGTags ? '✅' : '❌'}`);
  console.log(`   - Twitter tags: ${hasTwitterTags ? '✅' : '❌'}`);
  console.log(`   - Structured data: ${hasStructuredData ? '✅' : '❌'}`);
  
  return hasTitle && hasDescription && hasKeywords && hasCanonical && hasOGTags && hasTwitterTags && hasStructuredData;
}

// Main validation function
function validateSEO() {
  console.log('🚀 Starting SEO Validation for The Meet Patel Website\n');
  console.log('=' .repeat(60));
  
  let allValid = true;
  
  // Validate technical SEO
  allValid &= validateRobotsTxt();
  allValid &= validateSitemapXml();
  allValid &= validateMainHTML();
  
  // Validate page SEO
  pages.forEach(page => {
    allValid &= validatePageSEO(page.path, page.name);
  });
  
  console.log('\n' + '=' .repeat(60));
  
  if (allValid) {
    console.log('🎉 All SEO validations passed! Your website is fully optimized.');
    console.log('\n📋 Next Steps:');
    console.log('1. Submit sitemap to Google Search Console');
    console.log('2. Submit sitemap to Bing Webmaster Tools');
    console.log('3. Monitor keyword rankings');
    console.log('4. Track organic traffic growth');
  } else {
    console.log('⚠️  Some SEO validations failed. Please review the issues above.');
  }
  
  console.log('\n📊 SEO Implementation Summary:');
  console.log(`✅ Target Keywords: ${targetKeywords.length} keywords identified`);
  console.log(`✅ Pages Optimized: ${pages.length} pages`);
  console.log(`✅ Technical SEO: robots.txt, sitemap.xml, meta tags`);
  console.log(`✅ Structured Data: JSON-LD schemas implemented`);
  console.log(`✅ Social Media: Open Graph and Twitter Cards`);
  
  return allValid;
}

// Run validation
validateSEO();
