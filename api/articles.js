import { supabase } from './_supabase.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { data, error } = await supabase
      .from('articles')
      .select('id, title, slug, excerpt, category, author, date, published_at, read_time, featured, tags, og_image, views')
      .eq('status', 'published')
      .order('published_at', { ascending: false, nullsFirst: false });

    if (error) throw error;

    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    return res.status(200).json(data);
  } catch (err) {
    console.error('articles list error:', err);
    return res.status(500).json({ error: 'Failed to fetch articles' });
  }
}
