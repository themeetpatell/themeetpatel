import { sql } from '../../_db.js';
import { requireAuth } from '../../_auth.js';
import { del } from '@vercel/blob';

export default async function handler(req, res) {
  if (!requireAuth(req, res)) return;
  if (req.method !== 'DELETE') return res.status(405).end();

  const { id } = req.query;
  const [record] = await sql`SELECT * FROM media WHERE id = ${id} LIMIT 1`;
  if (!record) return res.status(404).json({ error: 'Not found' });

  try {
    await del(record.url);
  } catch {
    // blob delete failed — still remove the DB record
  }

  await sql`DELETE FROM media WHERE id = ${id}`;
  res.status(204).end();
}
