import { supabase } from './_supabase.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).end();
  const { slug } = req.query;
  if (!slug) return res.status(400).json({ error: 'slug required' });

  try {
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error || !data) return res.status(404).json({ error: 'Not found' });

    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
