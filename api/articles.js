import { sql } from './_db.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const rows = await sql`
      SELECT
        id, title, slug, excerpt, category, author,
        date, published_at, read_time, featured, tags, og_image, views
      FROM articles
      WHERE status = 'published'
      ORDER BY published_at DESC NULLS LAST, date DESC NULLS LAST
    `;

    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    return res.status(200).json(rows);
  } catch (err) {
    console.error('articles list error:', err);
    return res.status(500).json({ error: 'Failed to fetch articles' });
  }
}
