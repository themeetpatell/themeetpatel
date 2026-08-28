import { waitUntil } from '@vercel/functions';
import { supabaseAdmin } from '../../_supabase.js';
import { requireAuth } from '../../_auth.js';
import { submitToIndexNow, articleUrls } from '../../_indexnow.js';

export default async function handler(req, res) {
  if (!requireAuth(req, res)) return;

  const { id } = req.query;

  if (req.method === 'GET') {
    const { data, error } = await supabaseAdmin
      .from('articles')
      .select('*')
      .eq('id', id)
      .single();
    if (error || !data) return res.status(404).json({ error: 'Not found' });
    return res.json(data);
  }

  if (req.method === 'PUT') {
    const d = req.body;
    // Only include defined fields in the update
    const updates = {};
    const fields = [
      'title', 'slug', 'excerpt', 'content', 'content_html', 'status',
      'scheduled_at', 'published_at', 'category', 'tags', 'author', 'date',
      'read_time', 'featured', 'meta_title', 'meta_description', 'og_title',
      'og_description', 'og_image', 'canonical_url', 'focus_keyword',
      'schema_type', 'secondary_keywords', 'twitter_card', 'twitter_creator',
      'robots_noindex', 'robots_nofollow', 'faq_items', 'ai_summary',
      'howto_steps', 'speakable', 'content_type', 'last_updated_at',
      'citations', 'key_stats', 'expert_quotes', 'related_entities',
    ];
    for (const f of fields) {
      if (d[f] !== undefined) updates[f] = d[f];
    }
    updates.updated_at = new Date().toISOString();

    const { data, error } = await supabaseAdmin
      .from('articles')
      .update(updates)
      .eq('id', id)
      .select()
      .single();
    if (error || !data) return res.status(404).json({ error: error?.message || 'Not found' });

    // Tell IndexNow the URL changed. Only for published, indexable articles —
    // submitting a draft or a noindex page is a wasted ping at best. Runs after
    // the response so a slow third party never delays the editor.
    if (data.status === 'published' && !data.robots_noindex && data.slug) {
      waitUntil(submitToIndexNow(articleUrls(data.slug)));
    }

    return res.json(data);
  }

  if (req.method === 'DELETE') {
    await supabaseAdmin.from('articles').delete().eq('id', id);
    return res.status(204).end();
  }

  res.status(405).end();
}
