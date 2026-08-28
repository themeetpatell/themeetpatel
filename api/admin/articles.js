import { waitUntil } from '@vercel/functions';
import { supabaseAdmin } from '../_supabase.js';
import { requireAuth } from '../_auth.js';
import { submitToIndexNow, articleUrls } from '../_indexnow.js';

export default async function handler(req, res) {
  if (!requireAuth(req, res)) return;

  if (req.method === 'GET') {
    const { data, error } = await supabaseAdmin
      .from('articles')
      .select('*')
      .order('updated_at', { ascending: false });
    if (error) return res.status(500).json({ error: error.message });
    return res.json(data);
  }

  if (req.method === 'POST') {
    const d = req.body;
    const slug = d.slug || generateSlug(d.title || '');
    const { data, error } = await supabaseAdmin
      .from('articles')
      .insert({
        slug,
        title:              d.title || '',
        excerpt:            d.excerpt || null,
        content:            d.content || null,
        content_html:       d.content_html || null,
        status:             d.status || 'draft',
        category:           d.category || null,
        tags:               d.tags || [],
        author:             d.author || 'Meet Patel',
        date:               d.date || new Date().toISOString().slice(0, 10),
        read_time:          d.read_time || null,
        featured:           d.featured || false,
        views:              0,
        likes:              0,
        meta_title:         d.meta_title || null,
        meta_description:   d.meta_description || null,
        og_title:           d.og_title || null,
        og_description:     d.og_description || null,
        og_image:           d.og_image || null,
        canonical_url:      d.canonical_url || null,
        focus_keyword:      d.focus_keyword || null,
        schema_type:        d.schema_type || 'BlogPosting',
        secondary_keywords: d.secondary_keywords || [],
        twitter_card:       d.twitter_card || 'summary_large_image',
        // Must match SEOHead's default and llms.txt. '@themeetpatel' is not the
      // real handle and was emitting a twitter:creator that resolves to nobody.
      twitter_creator:    d.twitter_creator || '@the_meetpatel',
        robots_noindex:     d.robots_noindex || false,
        robots_nofollow:    d.robots_nofollow || false,
        faq_items:          d.faq_items || [],
        ai_summary:         d.ai_summary || null,
        howto_steps:        d.howto_steps || [],
        speakable:          d.speakable || false,
        content_type:       d.content_type || 'evergreen',
        citations:          d.citations || [],
        key_stats:          d.key_stats || [],
        expert_quotes:      d.expert_quotes || [],
        related_entities:   d.related_entities || [],
      })
      .select()
      .single();
    if (error) return res.status(500).json({ error: error.message });

    // See the PUT handler in articles/[id].js — same rule, same reason.
    if (data.status === 'published' && !data.robots_noindex && data.slug) {
      waitUntil(submitToIndexNow(articleUrls(data.slug)));
    }

    return res.status(201).json(data);
  }

  res.status(405).end();
}

function generateSlug(title) {
  return (title || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}
