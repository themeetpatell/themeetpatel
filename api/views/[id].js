import { sql } from '../../_db.js';

export default async function handler(req, res) {
  if (req.method !== 'PUT') return res.status(405).end();
  const { id } = req.query;
  try {
    await sql`UPDATE articles SET views = views + 1 WHERE id = ${id}`;
    res.status(204).end();
  } catch {
    res.status(204).end();
  }
}
