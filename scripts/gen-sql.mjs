/**
 * Reads BLOG_BATCH_2.md, parses articles, outputs SQL INSERT statements.
 */
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

function parseBlogBatch(filePath) {
  const raw = readFileSync(filePath, 'utf-8');
  const articles = [];
  const articleBlocks = raw.split(/(?=^### Article \d+:)/m).filter(b => b.trim().startsWith('### Article'));
  for (const block of articleBlocks) {
    try {
      const article = parseArticleBlock(block);
      if (article) articles.push(article);
    } catch (e) {
      process.stderr.write('Failed to parse block: ' + e.message + '\n');
    }
  }
  return articles;
}

function parseArticleBlock(block) {
  const titleMatch = block.match(/^### Article \d+:\s*(.+)$/m);
  if (!titleMatch) return null;
  const title = titleMatch[1].trim();

  const getField = (name) => {
    const m = block.match(new RegExp(`\\*\\*${name}:\\*\\*\\s*\`?([^\`\\n]+)\`?`));
    return m ? m[1].trim() : null;
  };

  const slug = getField('slug');
  const category = getField('category');
  const author = getField('author') || 'The Meet Patel';
  const date = getField('date') || '2026-03-14';
  const readTime = getField('readTime');
  const featured = getField('featured') === 'true';
  const tagsRaw = getField('tags');
  const tags = tagsRaw ? tagsRaw.split(',').map(t => t.trim()).filter(Boolean) : [];

  const excerptMatch = block.match(/#### Excerpt\s*\n([\s\S]+?)(?=\n####|\n---|\n###|$)/);
  const excerpt = excerptMatch ? excerptMatch[1].trim() : null;

  const htmlMatch = block.match(/```html\s*\n([\s\S]+?)\n```/);
  const content_html = htmlMatch ? htmlMatch[1].trim() : null;

  if (!slug || !title) return null;

  return { slug, title, category, author, date, read_time: readTime, featured, tags, excerpt, content_html };
}

const esc = (v) => v == null ? 'NULL' : `'${String(v).replace(/'/g, "''")}'`;
const escBool = (v) => v ? 'true' : 'false';
const escArr = (arr) => arr.length === 0 ? `'{}'` : `ARRAY[${arr.map(t => `'${t.replace(/'/g, "''")}'`).join(', ')}]`;

const articles = parseBlogBatch(resolve(__dirname, '../BLOG_BATCH_2.md'));

process.stderr.write(`Parsed ${articles.length} articles\n`);

const rows = articles.map(a => `(
  ${esc(a.slug)},
  ${esc(a.title)},
  ${esc(a.excerpt)},
  ${esc(a.content_html)},
  ${esc(a.content_html)},
  'published',
  ${esc(a.category)},
  ${escArr(a.tags)},
  ${esc(a.author)},
  ${esc(a.date)}::date,
  ${esc(a.read_time)},
  ${escBool(a.featured)},
  0,
  0,
  '2026-03-14T00:00:00.000Z'::timestamptz
)`);

const sql = `INSERT INTO articles
  (slug, title, excerpt, content_html, content_html_sanitized, status, category, tags, author, date, read_time, featured, views, likes, published_at)
VALUES
${rows.join(',\n')}
ON CONFLICT (slug) DO UPDATE SET
  title = EXCLUDED.title,
  excerpt = EXCLUDED.excerpt,
  content_html = EXCLUDED.content_html,
  content_html_sanitized = EXCLUDED.content_html_sanitized,
  status = EXCLUDED.status,
  category = EXCLUDED.category,
  tags = EXCLUDED.tags,
  author = EXCLUDED.author,
  date = EXCLUDED.date,
  read_time = EXCLUDED.read_time,
  featured = EXCLUDED.featured,
  published_at = EXCLUDED.published_at;`;

process.stdout.write(sql);
