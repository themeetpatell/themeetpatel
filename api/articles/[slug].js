/* global process */
import { neon } from '@neondatabase/serverless';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { slug } = req.query;
  if (!slug) {
    return res.status(400).json({ error: 'slug is required' });
  }

  try {
    const sql = neon(process.env.DATABASE_URL);
    const [article] = await sql`
      SELECT
        id, title, slug, excerpt, content, content_html,
        category, author, date, published_at, read_time,
        featured, tags, views,
        meta_title, meta_description,
        og_title, og_description, og_image,
        canonical_url, twitter_card, twitter_creator
      FROM articles
      WHERE slug = ${slug}
        AND status = 'published'
      LIMIT 1
    `;

    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    return res.status(200).json(article);
  } catch (err) {
    console.error('article detail error:', err);
    return res.status(500).json({ error: 'Failed to fetch article' });
  }
}
