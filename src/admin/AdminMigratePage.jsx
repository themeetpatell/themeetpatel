import React, { useState } from 'react';
import { toast, Toaster } from 'sonner';
import { blogArticles } from '../data/blogData';
import { createArticle } from '../lib/articleService';
import { CheckCircle, XCircle, Loader, Database } from 'lucide-react';

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
  green:        '#22c55e',
  red:          '#ef4444',
};

export default function AdminMigratePage() {
  const [results, setResults]   = useState([]);
  const [running, setRunning]   = useState(false);
  const [done,    setDone]      = useState(false);

  const run = async () => {
    if (done) return;
    setRunning(true);
    setResults([]);

    for (const article of blogArticles) {
      const entry = { title: article.title, status: 'pending' };
      setResults(prev => [...prev, entry]);

      try {
        await createArticle({
          slug:         article.slug,
          title:        article.title,
          excerpt:      article.excerpt,
          content:      null,
          content_html: article.content,
          category:     article.category,
          author:       article.author || 'Meet Patel',
          date:         article.date,
          read_time:    article.readTime || article.read_time || '5 min read',
          views:        article.views || 0,
          likes:        article.likes || 0,
          featured:     article.featured || false,
          tags:         article.tags || [],
          status:       'published',
          published_at: article.date ? new Date(article.date).toISOString() : new Date().toISOString(),
        });
        setResults(prev => prev.map(r => r.title === article.title ? { ...r, status: 'ok' } : r));
      } catch (err) {
        const msg = err?.message || 'Unknown error';
        setResults(prev => prev.map(r => r.title === article.title ? { ...r, status: 'error', error: msg } : r));
      }

      // Small delay to avoid rate limiting
      await new Promise(r => setTimeout(r, 300));
    }

    setRunning(false);
    setDone(true);
    toast.success('Migration complete!');
  };

  const success = results.filter(r => r.status === 'ok').length;
  const errors  = results.filter(r => r.status === 'error').length;

  return (
    <div style={{ padding: 'clamp(24px, 3vw, 40px)', color: C.primary, background: C.surface, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <Toaster theme="dark" position="top-right" />

      <div style={{ maxWidth: 680 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{ width: 40, height: 40, borderRadius: 10, background: C.violetDim, border: `1px solid ${C.violetBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Database size={18} color={C.violet} />
          </div>
          <h1 style={{ fontSize: 20, fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>Migrate Static Articles</h1>
        </div>
        <p style={{ fontSize: 14, color: C.secondary, lineHeight: 1.7, marginBottom: 28 }}>
          This one-time migration copies all {blogArticles.length} static articles from <code style={{ background: C.elevated, padding: '2px 6px', borderRadius: 4, fontSize: 12, color: '#a78bfa' }}>blogData.js</code> into your Supabase database.
          Each article will be published automatically. <strong style={{ color: '#f97316' }}>Run this only once.</strong>
        </p>

        <div style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 12, padding: '14px 18px', marginBottom: 24 }}>
          <p style={{ fontSize: 13, color: '#d4a847', margin: 0, lineHeight: 1.6 }}>
            If an article with the same slug already exists in Supabase, it will fail (duplicate slug). This is safe — you can re-run and only the failed ones will need attention.
          </p>
        </div>

        <button
          type="button"
          onClick={run}
          disabled={running || done}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '12px 24px', borderRadius: 10,
            background: done ? 'rgba(34,197,94,0.15)' : running ? 'rgba(139,92,246,0.4)' : C.violet,
            border: done ? '1px solid rgba(34,197,94,0.3)' : 'none',
            color: done ? C.green : '#fff',
            fontSize: 14, fontWeight: 700, cursor: (running || done) ? 'not-allowed' : 'pointer',
            fontFamily: 'inherit', marginBottom: 32,
          }}
        >
          {running && <div style={{ width: 14, height: 14, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />}
          {done ? '✓ Migration Complete' : running ? `Migrating… (${results.length}/${blogArticles.length})` : `Migrate ${blogArticles.length} Articles to Supabase`}
        </button>

        {results.length > 0 && (
          <div>
            <div style={{ fontSize: 12, color: C.muted, marginBottom: 12 }}>
              {success > 0 && <span style={{ color: C.green }}>✓ {success} migrated </span>}
              {errors > 0 && <span style={{ color: C.red }}>✗ {errors} failed </span>}
              {running && <span>· {blogArticles.length - results.length} remaining</span>}
            </div>
            <div style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 12, overflow: 'hidden' }}>
              {results.map((r, i) => (
                <div
                  key={r.title || i}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 10,
                    padding: '10px 16px', borderBottom: i < results.length - 1 ? `1px solid ${C.border}` : 'none',
                  }}
                >
                  {r.status === 'ok'      && <CheckCircle size={14} color={C.green} style={{ flexShrink: 0, marginTop: 1 }} />}
                  {r.status === 'error'   && <XCircle     size={14} color={C.red}   style={{ flexShrink: 0, marginTop: 1 }} />}
                  {r.status === 'pending' && <Loader      size={14} color={C.muted}  style={{ flexShrink: 0, marginTop: 1, animation: 'spin 1s linear infinite' }} />}
                  <div>
                    <div style={{ fontSize: 13, color: C.secondary }}>{r.title}</div>
                    {r.error && <div style={{ fontSize: 11, color: C.red, marginTop: 2 }}>{r.error}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
