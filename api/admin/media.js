import { sql } from '../_db.js';
import { requireAuth } from '../_auth.js';
import { put } from '@vercel/blob';

export default async function handler(req, res) {
  if (!requireAuth(req, res)) return;

  if (req.method === 'GET') {
    const media = await sql`SELECT * FROM media ORDER BY created_at DESC`;
    return res.json(media);
  }

  if (req.method === 'POST') {
    const { filename, contentType } = req.query;
    if (!filename || !contentType) {
      return res.status(400).json({ error: 'filename and contentType query params required' });
    }
    const blob = await put(filename, req, {
      access: 'public',
      contentType,
    });
    const [record] = await sql`
      INSERT INTO media (name, url, size, mime_type)
      VALUES (${filename}, ${blob.url}, ${null}, ${contentType})
      RETURNING *
    `;
    return res.status(201).json(record);
  }

  res.status(405).end();
}
