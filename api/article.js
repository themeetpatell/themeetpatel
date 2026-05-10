import { sql } from './_db.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
  const { slug } = req.query;
  if (!slug) return res.status(400).json({ error: 'slug required' });
  try {
    const [article] = await sql`
      SELECT * FROM articles
      WHERE slug = ${slug} AND status = 'published'
      LIMIT 1
    `;
    if (!article) return res.status(404).json({ error: 'Not found' });
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    res.json(article);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
