/**
 * Seed script: parse BLOG_BATCH_2.md and insert all articles into Supabase.
 * Usage: node scripts/seed-blog-batch2.mjs
 *
 * Requires: npm install @supabase/supabase-js dotenv
 */

import { createClient } from '@supabase/supabase-js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import dotenv from 'dotenv';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: resolve(__dirname, '../.env') });

const supabase = createClient(
  process.env.VITE_SUPABASE_URL,
  process.env.VITE_SUPABASE_ANON_KEY
);

// ─── Parse the markdown file ─────────────────────────────────────────────────

function parseBlogBatch(filePath) {
  const raw = readFileSync(filePath, 'utf-8');
  const articles = [];

  // Split on article headers: ### Article N: ...
  const articleBlocks = raw.split(/(?=^### Article \d+:)/m).filter(b => b.trim().startsWith('### Article'));

  for (const block of articleBlocks) {
    try {
      const article = parseArticleBlock(block);
      if (article) articles.push(article);
    } catch (e) {
      console.error('Failed to parse block:', block.slice(0, 100), e.message);
    }
  }

  return articles;
}

function parseArticleBlock(block) {
  // Title
  const titleMatch = block.match(/^### Article \d+:\s*(.+)$/m);
  if (!titleMatch) return null;
  const title = titleMatch[1].trim();

  // Metadata fields
  const getField = (name) => {
    const m = block.match(new RegExp(`\\*\\*${name}:\\*\\*\\s*\`?([^\`\\n]+)\`?`));
    return m ? m[1].trim() : null;
  };

  const slug = getField('slug');
  const category = getField('category');
  const author = getField('author') || 'The Meet Patel';
  const date = getField('date') || '2026-03-14';
  const readTime = getField('readTime');
  const featuredRaw = getField('featured');
  const featured = featuredRaw === 'true';
  const tagsRaw = getField('tags');
  const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [];

  // Excerpt: text between #### Excerpt and the next ####
  const excerptMatch = block.match(/#### Excerpt\s*\n([\s\S]+?)(?=\n####|\n---|\n###|$)/);
  const excerpt = excerptMatch ? excerptMatch[1].trim() : null;

  // Content HTML: inside ```html ... ```
  const htmlMatch = block.match(/```html\s*\n([\s\S]+?)\n```/);
  const content_html = htmlMatch ? htmlMatch[1].trim() : null;

  if (!slug || !title) {
    console.warn('Skipping article with missing slug or title:', title);
    return null;
  }

  return {
    slug,
    title,
    category,
    author,
    date,
    read_time: readTime,
    featured,
    tags,
    excerpt,
    content_html,
    content_html_sanitized: content_html, // same for now
    status: 'published',
    published_at: new Date(`${date}T00:00:00.000Z`).toISOString(),
    views: 0,
    likes: 0,
  };
}

// ─── Main ─────────────────────────────────────────────────────────────────────

async function main() {
  const filePath = resolve(__dirname, '../BLOG_BATCH_2.md');
  console.log('Reading:', filePath);

  const articles = parseBlogBatch(filePath);
  console.log(`Parsed ${articles.length} articles`);

  if (articles.length === 0) {
    console.error('No articles parsed — check the markdown structure.');
    process.exit(1);
  }

  // Preview what we're about to insert
  articles.forEach((a, i) => {
    console.log(`  ${i + 1}. [${a.category}] ${a.title} (${a.slug}) — featured: ${a.featured}`);
  });

  console.log('\nInserting into Supabase...');

  const { data, error } = await supabase
    .from('articles')
    .upsert(articles, { onConflict: 'slug', ignoreDuplicates: false })
    .select('id, slug, title');

  if (error) {
    console.error('Insert error:', error);
    process.exit(1);
  }

  console.log(`\n✓ Successfully inserted/updated ${data.length} articles:`);
  data.forEach(a => console.log(`  • ${a.title} (${a.slug})`));
}

main();
