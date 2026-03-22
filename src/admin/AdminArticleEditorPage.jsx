import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'sonner';
import { ArrowLeft, Save, ExternalLink } from 'lucide-react';
import {
  createArticle, updateArticle, getArticleByIdAdmin,
  publishArticle, unpublishArticle, generateSlug,
} from '../lib/articleService';
import TiptapEditor from './components/TiptapEditor';
import PublishPanel from './components/PublishPanel';
import SEOPanel from './components/SEOPanel';
import AEOPanel from './components/AEOPanel';
import GEOPanel from './components/GEOPanel';

const C = {
  bg:           '#09090e',
  surface:      '#111118',
  elevated:     '#16161f',
  border:       'rgba(255,255,255,0.07)',
  primary:      '#f5f5f7',
  secondary:    '#8e8ea0',
  muted:        '#5a5a6e',
  violet:       '#8b5cf6',
  violetDim:    'rgba(139,92,246,0.10)',
  violetBorder: 'rgba(139,92,246,0.22)',
};

const PANEL_TABS = ['Publish', 'SEO', 'AEO', 'GEO'];

const DEFAULT_FORM = {
  title:           '',
  excerpt:         '',
  slug:            '',
  content:         null,
  content_html:    '',
  category:        '',
  author:          'Meet Patel',
  date:            new Date().toISOString().slice(0, 10),
  read_time:       '',
  featured:        false,
  tags:            [],
  status:          'draft',
  scheduled_at:    null,
  meta_title:         '',
  meta_description:   '',
  og_title:           '',
  og_description:     '',
  og_image:           '',
  canonical_url:      '',
  focus_keyword:      '',
  schema_type:        'BlogPosting',
  secondary_keywords: [],
  twitter_card:       'summary_large_image',
  twitter_creator:    '@themeetpatel',
  robots_noindex:     false,
  robots_nofollow:    false,
  faq_items:          [],
  ai_summary:         '',
  howto_steps:        [],
  speakable:          false,
  content_type:       'evergreen',
  last_updated_at:    null,
  citations:          [],
  key_stats:          [],
  expert_quotes:      [],
  related_entities:   [],
};

export default function AdminArticleEditorPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const isNew = !id || id === 'new';

  const [form,      setForm]      = useState(DEFAULT_FORM);
  const [wordCount, setWordCount] = useState(0);
  const [saving,    setSaving]    = useState(false);
  const [loading,   setLoading]   = useState(!isNew);
  const [activeTab, setActiveTab] = useState(0);
  const [slugEdited, setSlugEdited] = useState(false);

  const autoSaveTimer = useRef(null);
  const articleIdRef  = useRef(id && id !== 'new' ? id : null);

  // Load existing article
  useEffect(() => {
    if (isNew) { setLoading(false); return; }
    getArticleByIdAdmin(id)
      .then(article => {
        setForm({
          ...DEFAULT_FORM,
          ...article,
          tags:              article.tags              || [],
          faq_items:         article.faq_items         || [],
          secondary_keywords:article.secondary_keywords|| [],
          howto_steps:       article.howto_steps       || [],
          citations:         article.citations         || [],
          key_stats:         article.key_stats         || [],
          expert_quotes:     article.expert_quotes     || [],
          related_entities:  article.related_entities  || [],
        });
        setSlugEdited(true); // Don't auto-update slug for existing articles
      })
      .catch(() => {
        toast.error('Failed to load article');
      })
      .finally(() => setLoading(false));
  }, [id, isNew]);

  // Auto-slug from title (only for new articles and if slug not manually edited)
  useEffect(() => {
    if (!slugEdited && isNew && form.title) {
      setForm(f => ({ ...f, slug: generateSlug(f.title) }));
    }
  }, [form.title, slugEdited, isNew]);

  const doSave = useCallback(async (silent = false) => {
    if (!form.title) {
      if (!silent) toast.error('Title is required');
      return;
    }
    setSaving(true);
    try {
      const payload = {
        ...form,
        slug: form.slug || generateSlug(form.title),
        date: form.date || new Date().toISOString().slice(0, 10),
      };
      let saved;
      if (articleIdRef.current) {
        saved = await updateArticle(articleIdRef.current, payload);
      } else {
        saved = await createArticle(payload);
        articleIdRef.current = saved.id;
        // Update URL without re-mounting
        window.history.replaceState({}, '', `/admin/articles/${saved.id}`);
      }
      setForm(f => ({ ...f, ...saved }));
      if (!silent) toast.success('Draft saved');
    } catch (err) {
      if (!silent) toast.error(`Save failed: ${err.message}`);
    } finally {
      setSaving(false);
    }
  }, [form]);

  // Auto-save every 30 seconds when the form has a title.
  useEffect(() => {
    if (autoSaveTimer.current) clearTimeout(autoSaveTimer.current);
    autoSaveTimer.current = setTimeout(() => {
      if (form.title) doSave(true);
    }, 30000);
    return () => clearTimeout(autoSaveTimer.current);
  }, [doSave, form.title]);

  const doPrimaryAction = useCallback(async () => {
    if (!form.title) { toast.error('Title is required'); return; }
    setSaving(true);
    try {
      // Save current content first
      const payload = { ...form, slug: form.slug || generateSlug(form.title) };
      let saved;
      if (articleIdRef.current) {
        saved = await updateArticle(articleIdRef.current, payload);
      } else {
        saved = await createArticle(payload);
        articleIdRef.current = saved.id;
        window.history.replaceState({}, '', `/admin/articles/${saved.id}`);
      }

      // Then toggle publish status
      if (saved.status === 'published') {
        saved = await unpublishArticle(saved.id);
        toast.success('Article unpublished');
      } else {
        saved = await publishArticle(saved.id);
        toast.success('Article published! 🎉');
      }
      setForm(f => ({ ...f, ...saved }));
    } catch (err) {
      toast.error(`Failed: ${err.message}`);
    } finally {
      setSaving(false);
    }
  }, [form]);

  const handleEditorChange = useCallback(({ json, html }) => {
    setForm(f => ({ ...f, content: json, content_html: html }));
  }, []);

  if (loading) return (
    <div style={{ padding: 40, color: C.muted, fontSize: 14 }}>Loading article…</div>
  );

  const slugDisplay = form.slug || (form.title ? generateSlug(form.title) : '');

  return (
    <div style={{ background: C.surface, minHeight: '100vh', color: C.primary, fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Toaster theme="dark" position="top-right" />

      {/* Top bar */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '14px 24px', borderBottom: `1px solid ${C.border}`,
        background: C.bg, position: 'sticky', top: 0, zIndex: 20,
        flexWrap: 'wrap', gap: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <button
            type="button"
            onClick={() => navigate('/admin/articles')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: C.muted, display: 'flex', padding: 4 }}
          >
            <ArrowLeft size={16} />
          </button>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: C.primary }}>
              {isNew ? 'New Article' : (form.title || 'Edit Article')}
            </div>
            {slugDisplay && (
              <div style={{ fontSize: 11, color: C.muted }}>/{slugDisplay}</div>
            )}
          </div>
          {form.status && (
            <span style={{
              padding: '2px 8px', borderRadius: 100, fontSize: 10, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.06em',
              color: { published: '#22c55e', draft: '#f97316', scheduled: C.violet, archived: C.muted }[form.status] || C.muted,
              background: 'rgba(255,255,255,0.05)',
            }}>
              {form.status}
            </span>
          )}
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {form.status === 'published' && slugDisplay && (
            <a
              href={`/blogs/${slugDisplay}`}
              target="_blank"
              rel="noreferrer"
              style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: C.muted, textDecoration: 'none' }}
            >
              <ExternalLink size={12} /> View
            </a>
          )}
          <button
            type="button"
            onClick={() => doSave(false)}
            disabled={saving}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              padding: '8px 14px', borderRadius: 8,
              background: 'transparent', border: `1px solid ${C.border}`,
              color: C.secondary, fontSize: 12, fontWeight: 600,
              cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'inherit',
            }}
          >
            <Save size={12} /> {saving ? 'Saving…' : 'Save'}
          </button>
        </div>
      </div>

      {/* Body */}
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        {/* Main editor area */}
        <div style={{ flex: 1, padding: 'clamp(20px, 3vw, 40px)', maxWidth: 860, minWidth: 0 }}>
          {/* Title */}
          <input
            value={form.title}
            onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
            placeholder="Article title…"
            style={{
              width: '100%', fontSize: 'clamp(22px, 3vw, 32px)', fontWeight: 800,
              color: C.primary, background: 'transparent', border: 'none', outline: 'none',
              marginBottom: 12, letterSpacing: '-0.03em', fontFamily: 'inherit',
              borderBottom: `1px solid ${C.border}`, paddingBottom: 12,
            }}
          />

          {/* Slug */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
            <span style={{ fontSize: 12, color: C.muted, flexShrink: 0 }}>Slug:</span>
            <input
              value={form.slug}
              onChange={e => { setForm(f => ({ ...f, slug: e.target.value })); setSlugEdited(true); }}
              placeholder={generateSlug(form.title) || 'article-slug'}
              style={{
                flex: 1, fontSize: 12, color: C.secondary, background: 'transparent',
                border: 'none', borderBottom: `1px solid ${C.border}`,
                outline: 'none', paddingBottom: 4, fontFamily: 'monospace',
              }}
            />
          </div>

          {/* Excerpt */}
          <textarea
            value={form.excerpt}
            onChange={e => setForm(f => ({ ...f, excerpt: e.target.value }))}
            placeholder="Short excerpt / summary (shown in article cards)…"
            rows={2}
            style={{
              width: '100%', fontSize: 15, color: C.secondary,
              background: 'transparent', border: 'none', outline: 'none',
              resize: 'none', fontFamily: 'inherit', lineHeight: 1.6,
              marginBottom: 24, borderBottom: `1px solid ${C.border}`, paddingBottom: 12,
            }}
          />

          {/* Block editor */}
          <TiptapEditor
            content={form.content || form.content_html || ''}
            onChange={handleEditorChange}
            onWordCountChange={setWordCount}
          />
        </div>

        {/* Right panel */}
        <div style={{
          width: 420, minWidth: 380, flexShrink: 0,
          borderLeft: `1px solid ${C.border}`,
          background: C.bg,
          minHeight: 'calc(100vh - 57px)',
          position: 'sticky', top: 57,
          maxHeight: 'calc(100vh - 57px)',
          overflowY: 'auto',
        }} className="admin-right-panel">
          {/* Tabs */}
          <div style={{ display: 'flex', borderBottom: `1px solid ${C.border}` }}>
            {PANEL_TABS.map((tab, i) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(i)}
                style={{
                  flex: 1, padding: '13px 0', border: 'none', cursor: 'pointer',
                  background: 'none',
                  fontSize: 12, fontWeight: 700,
                  color: activeTab === i ? C.violet : C.muted,
                  borderBottom: `2px solid ${activeTab === i ? C.violet : 'transparent'}`,
                  transition: 'color 0.15s', fontFamily: 'inherit',
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Panel content */}
          <div style={{ padding: 20 }}>
            {activeTab === 0 && (
              <PublishPanel
                data={form}
                onChange={setForm}
                wordCount={wordCount}
                onSave={() => doSave(false)}
                onPrimaryAction={doPrimaryAction}
                saving={saving}
              />
            )}
            {activeTab === 1 && (
              <SEOPanel
                data={form}
                onChange={setForm}
                contentHtml={form.content_html}
                wordCount={wordCount}
                slug={form.slug || generateSlug(form.title)}
              />
            )}
            {activeTab === 2 && (
              <AEOPanel
                data={form}
                onChange={setForm}
              />
            )}
            {activeTab === 3 && (
              <GEOPanel
                data={form}
                onChange={setForm}
                wordCount={wordCount}
              />
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .admin-right-panel { display: none !important; }
        }
      `}</style>
    </div>
  );
}
