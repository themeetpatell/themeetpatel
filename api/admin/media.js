import { supabaseAdmin } from '../_supabase.js';
import { requireAuth } from '../_auth.js';
import { put } from '@vercel/blob';

export default async function handler(req, res) {
  if (!requireAuth(req, res)) return;

  if (req.method === 'GET') {
    const { data, error } = await supabaseAdmin
      .from('media')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) return res.status(500).json({ error: error.message });
    return res.json(data);
  }

  if (req.method === 'POST') {
    const { filename, contentType } = req.query;
    if (!filename || !contentType) {
      return res.status(400).json({ error: 'filename and contentType query params required' });
    }
    const blob = await put(filename, req, { access: 'public', contentType });
    const { data, error } = await supabaseAdmin
      .from('media')
      .insert({ name: filename, url: blob.url, size: null, mime_type: contentType })
      .select()
      .single();
    if (error) return res.status(500).json({ error: error.message });
    return res.status(201).json(data);
  }

  res.status(405).end();
}
