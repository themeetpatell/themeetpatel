import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast, Toaster } from 'sonner';
import {
  Plus, Search, Edit, Copy, Archive, Eye,
  Calendar, ChevronLeft, ChevronRight,
} from 'lucide-react';
import {
  getAllArticlesAdmin, publishArticle, unpublishArticle,
  archiveArticle, duplicateArticle,
} from '../lib/articleService';

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

const STATUS_CFG = {
  published: { color: '#22c55e', bg: 'rgba(34,197,94,0.10)' },
  draft:     { color: '#f97316', bg: 'rgba(249,115,22,0.10)' },
  scheduled: { color: '#8b5cf6', bg: 'rgba(139,92,246,0.10)' },
  archived:  { color: '#5a5a6e', bg: 'rgba(90,90,110,0.10)' },
};

const TABS = ['All', 'Published', 'Draft', 'Scheduled', 'Archived'];
const PAGE_SIZE = 20;

function StatusBadge({ status, onClick }) {
  const cfg = STATUS_CFG[status] || STATUS_CFG.draft;
  return (
    <button
      type="button"
      onClick={onClick}
      title="Click to toggle publish status"
      style={{
        padding: '3px 9px', borderRadius: 100, fontSize: 10, fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.06em',
        color: cfg.color, background: cfg.bg,
        border: `1px solid ${cfg.color}30`,
        cursor: onClick ? 'pointer' : 'default',
        fontFamily: 'inherit',
      }}
    >
      {status}
    </button>
  );
}

export default function AdminArticlesPage() {
  const [articles, setArticles] = useState([]);
  const [loading,  setLoading]  = useState(true);
  const [search,   setSearch]   = useState('');
  const [tab,      setTab]      = useState('All');
  const [page,     setPage]     = useState(1);

  const reload = () => {
    setLoading(true);
    getAllArticlesAdmin()
      .then(setArticles)
      .catch(err => toast.error(`Load failed: ${err.message}`))
      .finally(() => setLoading(false));
  };

  useEffect(() => { reload(); }, []);

  const filtered = articles.filter(a => {
    const matchTab = tab === 'All' || a.status?.toLowerCase() === tab.toLowerCase();
    const q = search.toLowerCase();
    const matchSearch = !q
      || a.title?.toLowerCase().includes(q)
      || a.category?.toLowerCase().includes(q)
      || a.tags?.some(t => t.toLowerCase().includes(q));
    return matchTab && matchSearch;
  });

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated  = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const formatDate = d =>
    d ? new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—';

  const handleToggleStatus = async (article) => {
    try {
      let updated;
      if (article.status === 'published') {
        updated = await unpublishArticle(article.id);
        toast.success('Unpublished');
      } else {
        updated = await publishArticle(article.id);
        toast.success('Published! 🎉');
      }
      setArticles(prev => prev.map(a => a.id === updated.id ? updated : a));
    } catch (err) {
      toast.error(`Failed: ${err.message}`);
    }
  };

  const handleDuplicate = async (article) => {
    try {
      const dup = await duplicateArticle(article.id);
      toast.success('Duplicated as draft');
      setArticles(prev => [dup, ...prev]);
    } catch (err) {
      toast.error(`Failed: ${err.message}`);
    }
  };

  const handleArchive = async (article) => {
    try {
      const updated = await archiveArticle(article.id);
      toast.success('Archived');
      setArticles(prev => prev.map(a => a.id === updated.id ? updated : a));
    } catch (err) {
      toast.error(`Failed: ${err.message}`);
    }
  };

  return (
    <div style={{ padding: 'clamp(20px, 3vw, 36px)', color: C.primary, background: C.surface, minHeight: '100vh' }}>
      <Toaster theme="dark" position="top-right" />

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, flexWrap: 'wrap', gap: 12 }}>
        <h1 style={{ fontSize: 20, fontWeight: 800, margin: 0, letterSpacing: '-0.02em' }}>Articles</h1>
        <Link
          to="/admin/articles/new"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            padding: '9px 16px', borderRadius: 9,
            background: C.violet, color: '#fff',
            fontSize: 13, fontWeight: 700, textDecoration: 'none',
          }}
        >
          <Plus size={13} /> New Article
        </Link>
      </div>

      {/* Search */}
      <div style={{ position: 'relative', maxWidth: 380, marginBottom: 16 }}>
        <Search size={13} style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: C.muted, pointerEvents: 'none' }} />
        <input
          type="text"
          placeholder="Search articles…"
          value={search}
          onChange={e => { setSearch(e.target.value); setPage(1); }}
          style={{
            width: '100%', padding: '9px 12px 9px 36px',
            background: C.elevated, border: `1px solid ${C.border}`,
            borderRadius: 9, color: C.primary, fontSize: 13, outline: 'none',
            boxSizing: 'border-box', fontFamily: 'inherit',
          }}
          onFocus={e => e.target.style.borderColor = C.violetBorder}
          onBlur={e => e.target.style.borderColor = C.border}
        />
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 4, marginBottom: 20, borderBottom: `1px solid ${C.border}`, paddingBottom: 0 }}>
        {TABS.map(t => {
          const count = t === 'All'
            ? articles.length
            : articles.filter(a => a.status?.toLowerCase() === t.toLowerCase()).length;
          return (
            <button
              key={t}
              type="button"
              onClick={() => { setTab(t); setPage(1); }}
              style={{
                padding: '9px 14px', border: 'none', cursor: 'pointer',
                background: 'none', fontSize: 12, fontWeight: 700,
                color: tab === t ? C.violet : C.muted,
                borderBottom: `2px solid ${tab === t ? C.violet : 'transparent'}`,
                transition: 'color 0.15s', fontFamily: 'inherit',
                marginBottom: -1,
              }}
            >
              {t} <span style={{ opacity: 0.6 }}>({count})</span>
            </button>
          );
        })}
      </div>

      {/* Table */}
      {loading ? (
        <div style={{ fontSize: 13, color: C.muted, padding: '40px 0' }}>Loading…</div>
      ) : paginated.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '60px 0' }}>
          <div style={{ fontSize: 14, color: C.muted, marginBottom: 16 }}>
            {search ? 'No articles match your search.' : 'No articles yet.'}
          </div>
          <Link to="/admin/articles/new" style={{ fontSize: 13, color: C.violet, textDecoration: 'none', fontWeight: 700 }}>
            Create your first article →
          </Link>
        </div>
      ) : (
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, overflow: 'hidden' }}>
          {/* Table header */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 130px 100px 80px 100px',
            padding: '10px 16px', borderBottom: `1px solid ${C.border}`,
            fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: C.muted,
          }}>
            <span>Title</span>
            <span>Category</span>
            <span>Status</span>
            <span>Views</span>
            <span>Actions</span>
          </div>

          {paginated.map(article => (
            <div
              key={article.id}
              style={{
                display: 'grid', gridTemplateColumns: '1fr 130px 100px 80px 100px',
                padding: '13px 16px', borderBottom: `1px solid ${C.border}`,
                alignItems: 'center', transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = C.elevated}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              {/* Title + date */}
              <div style={{ minWidth: 0 }}>
                <Link
                  to={`/admin/articles/${article.id}`}
                  style={{ fontSize: 13, fontWeight: 600, color: C.primary, textDecoration: 'none', display: 'block', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                >
                  {article.title || 'Untitled'}
                </Link>
                <div style={{ fontSize: 11, color: C.muted, marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Calendar size={9} />
                  {formatDate(article.published_at || article.date)}
                </div>
              </div>

              {/* Category */}
              <div style={{ fontSize: 12, color: C.secondary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {article.category || '—'}
              </div>

              {/* Status badge */}
              <StatusBadge
                status={article.status}
                onClick={() => ['draft', 'published'].includes(article.status) ? handleToggleStatus(article) : undefined}
              />

              {/* Views */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: C.secondary }}>
                <Eye size={11} color={C.muted} />
                {(article.views || 0).toLocaleString()}
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: 4 }}>
                <Link
                  to={`/admin/articles/${article.id}`}
                  title="Edit"
                  style={{ display: 'flex', padding: 6, borderRadius: 6, color: C.muted, textDecoration: 'none', background: 'transparent' }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.elevated; e.currentTarget.style.color = C.secondary; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.muted; }}
                >
                  <Edit size={13} />
                </Link>
                <button
                  type="button"
                  onClick={() => handleDuplicate(article)}
                  title="Duplicate"
                  style={{ display: 'flex', padding: 6, borderRadius: 6, background: 'transparent', border: 'none', cursor: 'pointer', color: C.muted }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.elevated; e.currentTarget.style.color = C.secondary; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.muted; }}
                >
                  <Copy size={13} />
                </button>
                {article.status !== 'archived' && (
                  <button
                    type="button"
                    onClick={() => handleArchive(article)}
                    title="Archive"
                    style={{ display: 'flex', padding: 6, borderRadius: 6, background: 'transparent', border: 'none', cursor: 'pointer', color: C.muted }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'rgba(239,68,68,0.08)'; e.currentTarget.style.color = '#ef4444'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.muted; }}
                  >
                    <Archive size={13} />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 24 }}>
          <button
            type="button"
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            style={{ padding: '6px 10px', borderRadius: 7, border: `1px solid ${C.border}`, background: 'none', color: page === 1 ? C.muted : C.secondary, cursor: page === 1 ? 'not-allowed' : 'pointer', display: 'flex' }}
          >
            <ChevronLeft size={14} />
          </button>
          <span style={{ fontSize: 12, color: C.secondary }}>Page {page} of {totalPages}</span>
          <button
            type="button"
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            style={{ padding: '6px 10px', borderRadius: 7, border: `1px solid ${C.border}`, background: 'none', color: page === totalPages ? C.muted : C.secondary, cursor: page === totalPages ? 'not-allowed' : 'pointer', display: 'flex' }}
          >
            <ChevronRight size={14} />
          </button>
        </div>
      )}
    </div>
  );
}
