// ─── Auth token helper (admin only) ─────────────────────────────────────────
const authHeader = () => {
  const token = typeof window !== 'undefined'
    ? localStorage.getItem('admin_token')
    : null;
  return token ? { Authorization: `Bearer ${token}` } : {};
};

const json = (r) => (r.ok ? r.json() : Promise.reject(new Error(`${r.status}`)));

// ─── Slug generation ─────────────────────────────────────────────────────────
export const generateSlug = (title) =>
  (title || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();

// ─── Public reads ─────────────────────────────────────────────────────────────
export const getPublishedArticles = () =>
  fetch('/api/articles').then(json);

export const getArticleBySlug = (slug) =>
  fetch(`/api/articles/${encodeURIComponent(slug)}`).then(r => r.ok ? r.json() : null);

export const getFeaturedArticles = () =>
  getPublishedArticles().then(articles => articles.filter(a => a.featured));

export const getArticlesByCategory = (category) =>
  getPublishedArticles().then(articles => articles.filter(a => a.category === category));

export const getRelatedArticles = async (currentArticle, limit = 3) => {
  if (!currentArticle?.category) return [];
  const articles = await getPublishedArticles();
  return articles
    .filter(a => a.category === currentArticle.category && a.id !== currentArticle.id)
    .slice(0, limit);
};

export const getCategories = async () => {
  const articles = await getPublishedArticles();
  const map = {};
  articles.forEach(a => {
    if (a.category) map[a.category] = (map[a.category] || 0) + 1;
  });
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
  return Object.entries(map).map(([name, count]) => ({
    name, count, icon: iconMap[name] || 'BookOpen',
  }));
};

export const incrementViews = (articleId) => {
  if (!articleId) return Promise.resolve();
  return fetch(`/api/views/${articleId}`, { method: 'PUT' }).catch(() => {});
};

// ─── Admin reads ──────────────────────────────────────────────────────────────
export const getAllArticlesAdmin = () =>
  fetch('/api/admin/articles', { headers: authHeader() }).then(json);

export const getArticleByIdAdmin = (id) =>
  fetch(`/api/admin/articles/${id}`, { headers: authHeader() }).then(json);

// ─── Admin CRUD ───────────────────────────────────────────────────────────────
export const createArticle = (data) =>
  fetch('/api/admin/articles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...authHeader() },
    body: JSON.stringify(data),
  }).then(json);

export const updateArticle = (id, updates) =>
  fetch(`/api/admin/articles/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...authHeader() },
    body: JSON.stringify(updates),
  }).then(json);

export const publishArticle = (id) =>
  updateArticle(id, { status: 'published', published_at: new Date().toISOString() });

export const unpublishArticle = (id) =>
  updateArticle(id, { status: 'draft', published_at: null });

export const archiveArticle = (id) =>
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

export const deleteArticle = (id) =>
  fetch(`/api/admin/articles/${id}`, {
    method: 'DELETE',
    headers: authHeader(),
  }).then(r => { if (!r.ok && r.status !== 204) throw new Error(r.status); });

// ─── Media ────────────────────────────────────────────────────────────────────
export const uploadMedia = async (file) => {
  const res = await fetch(
    `/api/admin/media?filename=${encodeURIComponent(file.name)}&contentType=${encodeURIComponent(file.type)}`,
    {
      method: 'POST',
      headers: authHeader(),
      body: file,
    }
  );
  if (!res.ok) throw new Error(await res.text());
  return res.json();
};

export const getAllMedia = () =>
  fetch('/api/admin/media', { headers: authHeader() }).then(json);

export const deleteMedia = (mediaItem) =>
  fetch(`/api/admin/media/${mediaItem.id}`, {
    method: 'DELETE',
    headers: authHeader(),
  }).then(r => { if (!r.ok && r.status !== 204) throw new Error(r.status); });
