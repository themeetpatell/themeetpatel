import { supabase } from './supabase';

// ─── Slug generation (pure, same logic as blogData.js) ──────────────────────
export const generateSlug = (title) =>
  (title || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

// ─── Category icon map ───────────────────────────────────────────────────────
const getCategoryIcon = (category) => {
  const iconMap = {
    'Entrepreneurship': 'Rocket',
    'Biggbizz': 'Target',
    'Operations': 'Settings',
    'Personal Growth': 'TrendingUp',
    'Business Strategy': 'Lightbulb',
    'User-led Growth': 'Users',
    'Design & UX': 'Code',
    'Marketing & Sales': 'BarChart3',
    'Partnerships': 'Handshake',
    'Writing & Books': 'FileText',
    'Leadership': 'Crown',
    'Strategy': 'BookOpen',
  };
  return iconMap[category] || 'BookOpen';
};

// ─── Public reads (RLS: published only) ─────────────────────────────────────

export const getPublishedArticles = async () => {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('status', 'published')
    .order('date', { ascending: false });
  if (error) throw error;
  return data || [];
};

export const getArticleBySlug = async (slug) => {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .single();
  if (error) return null;
  return data;
};

export const getFeaturedArticles = async () => {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('status', 'published')
    .eq('featured', true)
    .order('date', { ascending: false });
  if (error) throw error;
  return data || [];
};

export const getArticlesByCategory = async (category) => {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('status', 'published')
    .eq('category', category)
    .order('date', { ascending: false });
  if (error) throw error;
  return data || [];
};

export const getRelatedArticles = async (currentArticle, limit = 3) => {
  if (!currentArticle?.id || !currentArticle?.category) return [];
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('status', 'published')
    .eq('category', currentArticle.category)
    .neq('id', currentArticle.id)
    .limit(limit);
  if (error) return [];
  return data || [];
};

export const getCategories = async () => {
  const articles = await getPublishedArticles();
  const categoryMap = {};
  articles.forEach(a => {
    if (a.category && typeof a.category === 'string') {
      categoryMap[a.category] = (categoryMap[a.category] || 0) + 1;
    }
  });
  return Object.entries(categoryMap).map(([name, count]) => ({
    name,
    count,
    icon: getCategoryIcon(name),
  }));
};

// ─── View increment (SECURITY DEFINER RPC — works without auth) ──────────────
export const incrementViews = async (articleId) => {
  if (!articleId) return;
  await supabase.rpc('increment_views', { article_id: articleId });
};

// ─── Admin reads (requires authenticated session) ────────────────────────────

export const getAllArticlesAdmin = async () => {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('updated_at', { ascending: false });
  if (error) throw error;
  return data || [];
};

export const getArticleByIdAdmin = async (id) => {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw error;
  return data;
};

// ─── Admin CRUD ──────────────────────────────────────────────────────────────

export const createArticle = async (articleData) => {
  const payload = {
    slug: articleData.slug || generateSlug(articleData.title),
    status: 'draft',
    views: 0,
    likes: 0,
    featured: false,
    ...articleData,
  };
  const { data, error } = await supabase
    .from('articles')
    .insert(payload)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const updateArticle = async (id, updates) => {
  const { data, error } = await supabase
    .from('articles')
    .update(updates)
    .eq('id', id)
    .select()
    .single();
  if (error) throw error;
  return data;
};

export const publishArticle = async (id) =>
  updateArticle(id, { status: 'published', published_at: new Date().toISOString() });

export const unpublishArticle = async (id) =>
  updateArticle(id, { status: 'draft', published_at: null });

export const archiveArticle = async (id) =>
  updateArticle(id, { status: 'archived' });

export const duplicateArticle = async (id) => {
  const original = await getArticleByIdAdmin(id);
  const { id: _id, created_at: _c, updated_at: _u, published_at: _p, ...rest } = original;
  return createArticle({
    ...rest,
    title: `${rest.title} (Copy)`,
    slug: generateSlug(`${rest.title} copy ${Date.now()}`),
    status: 'draft',
  });
};

export const deleteArticle = async (id) => {
  const { error } = await supabase.from('articles').delete().eq('id', id);
  if (error) throw error;
};

// ─── Media ───────────────────────────────────────────────────────────────────

export const uploadMedia = async (file) => {
  const nameParts = file.name.split('.');
  const ext  = nameParts.length > 1 ? nameParts.pop() : 'bin';
  const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

  const { error: uploadError } = await supabase.storage
    .from('media')
    .upload(path, file, { cacheControl: '3600', upsert: false });
  if (uploadError) throw uploadError;

  const { data: urlData } = supabase.storage.from('media').getPublicUrl(path);
  if (!urlData?.publicUrl) throw new Error('Failed to get public URL for uploaded file');

  const { data, error: dbError } = await supabase
    .from('media')
    .insert({ name: file.name, url: urlData.publicUrl, size: file.size, mime_type: file.type })
    .select()
    .single();
  if (dbError) throw dbError;

  return data;
};

export const getAllMedia = async () => {
  const { data, error } = await supabase
    .from('media')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) throw error;
  return data || [];
};

export const deleteMedia = async (mediaItem) => {
  if (!mediaItem?.url) throw new Error('Invalid media item: missing URL');

  // Extract storage path from public URL
  // URL format: https://<project>.supabase.co/storage/v1/object/public/media/<path>
  try {
    const url = new URL(mediaItem.url);
    const marker = '/public/media/';
    const idx = url.pathname.indexOf(marker);
    const storagePath = idx !== -1 ? url.pathname.slice(idx + marker.length) : null;
    if (storagePath) {
      await supabase.storage.from('media').remove([storagePath]);
    }
  } catch {
    // URL parsing failed — skip storage deletion, still remove DB record
  }

  const { error } = await supabase.from('media').delete().eq('id', mediaItem.id);
  if (error) throw error;
};
