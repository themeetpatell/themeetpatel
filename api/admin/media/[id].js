import { supabaseAdmin } from '../../_supabase.js';
import { requireAuth } from '../../_auth.js';
import { del } from '@vercel/blob';

// Reads and writes go through Supabase, same as api/admin/media.js. This used
// to query the deprecated Neon client in _db.js, so a delete never touched the
// rows the media library actually lists.
export default async function handler(req, res) {
  if (!requireAuth(req, res)) return;
  if (req.method !== 'DELETE') return res.status(405).end();

  const { id } = req.query;

  const { data: record, error: readError } = await supabaseAdmin
    .from('media')
    .select('url')
    .eq('id', id)
    .single();

  if (readError || !record) return res.status(404).json({ error: 'Not found' });

  try {
    await del(record.url);
  } catch (err) {
    // The blob may already be gone. The row still has to go, so carry on —
    // but leave a trace, because a leaked blob costs storage silently.
    console.warn(`blob delete failed for media ${id}:`, err?.message || err);
  }

  const { error: deleteError } = await supabaseAdmin.from('media').delete().eq('id', id);
  if (deleteError) return res.status(500).json({ error: deleteError.message });

  res.status(204).end();
}
