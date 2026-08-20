import { supabase } from '../_supabase.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { slug } = req.query;
  if (!slug) {
    return res.status(400).json({ error: 'slug is required' });
  }

  try {
    const { data, error } = await supabase
      .from('articles')
      .select('id, title, slug, excerpt, content, content_html, category, author, date, published_at, updated_at, read_time, featured, tags, views, meta_title, meta_description, og_title, og_description, og_image, canonical_url, twitter_card, twitter_creator, focus_keyword, secondary_keywords, schema_type, ai_summary, speakable, faq_items, howto_steps, citations, key_stats, related_entities, robots_noindex, robots_nofollow')
      .eq('slug', slug)
      .eq('status', 'published')
      .single();

    if (error || !data) {
      return res.status(404).json({ error: 'Article not found' });
    }

    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    return res.status(200).json(data);
  } catch (err) {
    console.error('article detail error:', err);
    return res.status(500).json({ error: 'Failed to fetch article' });
  }
}
