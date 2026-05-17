import { supabaseAdmin } from '../../_supabase.js';

export default async function handler(req, res) {
  if (req.method !== 'PUT') return res.status(405).end();
  const { id } = req.query;
  try {
    const { data } = await supabaseAdmin
      .from('articles')
      .select('views')
      .eq('id', id)
      .single();
    if (data) {
      await supabaseAdmin
        .from('articles')
        .update({ views: (data.views || 0) + 1 })
        .eq('id', id);
    }
  } catch {
    // view increment is best-effort
  }
  res.status(204).end();
}
