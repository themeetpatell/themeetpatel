import { sql } from '../_db.js';
import { requireAuth } from '../_auth.js';

export default async function handler(req, res) {
  if (!requireAuth(req, res)) return;

  if (req.method === 'GET') {
    const articles = await sql`
      SELECT * FROM articles ORDER BY updated_at DESC
    `;
    return res.json(articles);
  }

  if (req.method === 'POST') {
    const d = req.body;
    const slug = d.slug || generateSlug(d.title || '');
    const [created] = await sql`
      INSERT INTO articles (
        slug, title, excerpt, content, content_html, status,
        category, tags, author, date, read_time, featured, views, likes,
        meta_title, meta_description, og_title, og_description, og_image,
        canonical_url, focus_keyword, schema_type, secondary_keywords,
        twitter_card, twitter_creator, robots_noindex, robots_nofollow,
        faq_items, ai_summary, howto_steps, speakable,
        content_type, citations, key_stats, expert_quotes, related_entities
      ) VALUES (
        ${slug}, ${d.title || ''}, ${d.excerpt || null},
        ${d.content ? JSON.stringify(d.content) : null}, ${d.content_html || null},
        ${d.status || 'draft'},
        ${d.category || null}, ${d.tags || []}, ${d.author || 'Meet Patel'},
        ${d.date || new Date().toISOString().slice(0,10)}, ${d.read_time || null},
        ${d.featured || false}, ${0}, ${0},
        ${d.meta_title || null}, ${d.meta_description || null},
        ${d.og_title || null}, ${d.og_description || null}, ${d.og_image || null},
        ${d.canonical_url || null}, ${d.focus_keyword || null},
        ${d.schema_type || 'BlogPosting'}, ${d.secondary_keywords || []},
        ${d.twitter_card || 'summary_large_image'}, ${d.twitter_creator || '@themeetpatel'},
        ${d.robots_noindex || false}, ${d.robots_nofollow || false},
        ${d.faq_items ? JSON.stringify(d.faq_items) : '[]'},
        ${d.ai_summary || null},
        ${d.howto_steps ? JSON.stringify(d.howto_steps) : '[]'},
        ${d.speakable || false},
        ${d.content_type || 'evergreen'},
        ${d.citations ? JSON.stringify(d.citations) : '[]'},
        ${d.key_stats ? JSON.stringify(d.key_stats) : '[]'},
        ${d.expert_quotes ? JSON.stringify(d.expert_quotes) : '[]'},
        ${d.related_entities || []}
      )
      RETURNING *
    `;
    return res.status(201).json(created);
  }

  res.status(405).end();
}

function generateSlug(title) {
  return (title || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
