import { sql } from '../../_db.js';
import { requireAuth } from '../../_auth.js';

export default async function handler(req, res) {
  if (!requireAuth(req, res)) return;

  const { id } = req.query;

  if (req.method === 'GET') {
    const [article] = await sql`SELECT * FROM articles WHERE id = ${id} LIMIT 1`;
    if (!article) return res.status(404).json({ error: 'Not found' });
    return res.json(article);
  }

  if (req.method === 'PUT') {
    const d = req.body;
    const [updated] = await sql`
      UPDATE articles SET
        title           = COALESCE(${d.title}, title),
        slug            = COALESCE(${d.slug}, slug),
        excerpt         = COALESCE(${d.excerpt}, excerpt),
        content         = COALESCE(${d.content ? JSON.stringify(d.content) : null}::jsonb, content),
        content_html    = COALESCE(${d.content_html}, content_html),
        status          = COALESCE(${d.status}, status),
        scheduled_at    = COALESCE(${d.scheduled_at}, scheduled_at),
        published_at    = COALESCE(${d.published_at}, published_at),
        category        = COALESCE(${d.category}, category),
        tags            = COALESCE(${d.tags}, tags),
        author          = COALESCE(${d.author}, author),
        date            = COALESCE(${d.date}::date, date),
        read_time       = COALESCE(${d.read_time}, read_time),
        featured        = COALESCE(${d.featured}, featured),
        meta_title      = COALESCE(${d.meta_title}, meta_title),
        meta_description = COALESCE(${d.meta_description}, meta_description),
        og_title        = COALESCE(${d.og_title}, og_title),
        og_description  = COALESCE(${d.og_description}, og_description),
        og_image        = COALESCE(${d.og_image}, og_image),
        canonical_url   = COALESCE(${d.canonical_url}, canonical_url),
        focus_keyword   = COALESCE(${d.focus_keyword}, focus_keyword),
        schema_type     = COALESCE(${d.schema_type}, schema_type),
        secondary_keywords = COALESCE(${d.secondary_keywords}, secondary_keywords),
        twitter_card    = COALESCE(${d.twitter_card}, twitter_card),
        twitter_creator = COALESCE(${d.twitter_creator}, twitter_creator),
        robots_noindex  = COALESCE(${d.robots_noindex}, robots_noindex),
        robots_nofollow = COALESCE(${d.robots_nofollow}, robots_nofollow),
        faq_items       = COALESCE(${d.faq_items ? JSON.stringify(d.faq_items) : null}::jsonb, faq_items),
        ai_summary      = COALESCE(${d.ai_summary}, ai_summary),
        howto_steps     = COALESCE(${d.howto_steps ? JSON.stringify(d.howto_steps) : null}::jsonb, howto_steps),
        speakable       = COALESCE(${d.speakable}, speakable),
        content_type    = COALESCE(${d.content_type}, content_type),
        last_updated_at = COALESCE(${d.last_updated_at}, last_updated_at),
        citations       = COALESCE(${d.citations ? JSON.stringify(d.citations) : null}::jsonb, citations),
        key_stats       = COALESCE(${d.key_stats ? JSON.stringify(d.key_stats) : null}::jsonb, key_stats),
        expert_quotes   = COALESCE(${d.expert_quotes ? JSON.stringify(d.expert_quotes) : null}::jsonb, expert_quotes),
        related_entities = COALESCE(${d.related_entities}, related_entities)
      WHERE id = ${id}
      RETURNING *
    `;
    if (!updated) return res.status(404).json({ error: 'Not found' });
    return res.json(updated);
  }

  if (req.method === 'DELETE') {
    await sql`DELETE FROM articles WHERE id = ${id}`;
    return res.status(204).end();
  }

  res.status(405).end();
}
