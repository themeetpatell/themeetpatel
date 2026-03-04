import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllArticlesAdmin } from '../lib/articleService';
import {
  Plus, FileText, Eye, TrendingUp, Edit,
  CheckCircle, Clock, Archive, BookOpen,
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

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
  orange:       '#f97316',
};

const STATUS_COLORS = {
  published: '#22c55e',
  draft:     '#f97316',
  scheduled: '#8b5cf6',
  archived:  '#5a5a6e',
};

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <div style={{
      background: C.surface, border: `1px solid ${C.border}`,
      borderRadius: 14, padding: '20px 24px',
      display: 'flex', alignItems: 'center', gap: 16,
    }}>
      <div style={{
        width: 44, height: 44, borderRadius: 12, flexShrink: 0,
        background: `${color}15`, border: `1px solid ${color}30`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <Icon size={18} color={color} />
      </div>
      <div>
        <div style={{ fontSize: 24, fontWeight: 800, color: C.primary, lineHeight: 1 }}>{value}</div>
        <div style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>{label}</div>
      </div>
    </div>
  );
}

export default function AdminDashboardPage() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    getAllArticlesAdmin()
      .then(setArticles)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const published  = articles.filter(a => a.status === 'published').length;
  const drafts     = articles.filter(a => a.status === 'draft').length;
  const totalViews = articles.reduce((sum, a) => sum + (a.views || 0), 0);

  const recent = [...articles]
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, 5);

  const topByViews = [...articles]
    .sort((a, b) => (b.views || 0) - (a.views || 0))
    .slice(0, 5)
    .map(a => { const t = a.title || 'Untitled'; return { name: t.slice(0, 22) + (t.length > 22 ? '…' : ''), views: a.views || 0 }; });

  const formatDate = d =>
    new Date(d).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

  if (loading) return (
    <div style={{ padding: 40, color: C.muted, fontSize: 14 }}>Loading dashboard…</div>
  );

  return (
    <div style={{ padding: 'clamp(24px, 3vw, 40px)', color: C.primary, background: C.surface, minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32, flexWrap: 'wrap', gap: 12 }}>
        <div>
          <h1 style={{ fontSize: 22, fontWeight: 800, margin: '0 0 4px', letterSpacing: '-0.02em' }}>Dashboard</h1>
          <p style={{ fontSize: 13, color: C.muted, margin: 0 }}>Welcome back. Here's your content overview.</p>
        </div>
        <Link
          to="/admin/articles/new"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 7,
            padding: '10px 18px', borderRadius: 10,
            background: C.violet, color: '#fff',
            fontSize: 13, fontWeight: 700, textDecoration: 'none',
          }}
        >
          <Plus size={14} /> New Article
        </Link>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 14, marginBottom: 32 }}>
        <StatCard icon={BookOpen}    label="Total Articles" value={articles.length} color={C.violet} />
        <StatCard icon={CheckCircle} label="Published"      value={published}       color={C.green} />
        <StatCard icon={Clock}       label="Drafts"         value={drafts}          color={C.orange} />
        <StatCard icon={Eye}         label="Total Views"    value={totalViews.toLocaleString()} color="#60a5fa" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
        {/* Recent articles */}
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24, gridColumn: 'span 1' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
            <h2 style={{ fontSize: 14, fontWeight: 700, margin: 0, color: C.primary }}>Recent Articles</h2>
            <Link to="/admin/articles" style={{ fontSize: 12, color: C.violet, textDecoration: 'none' }}>View all →</Link>
          </div>
          {recent.length === 0 ? (
            <p style={{ fontSize: 13, color: C.muted, textAlign: 'center', padding: '24px 0' }}>No articles yet.</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {recent.map(a => (
                <Link
                  key={a.id}
                  to={`/admin/articles/${a.id}`}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '10px 12px', borderRadius: 8, textDecoration: 'none',
                    transition: 'background 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = C.elevated}
                  onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, color: C.primary, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {a.title}
                    </div>
                    <div style={{ fontSize: 11, color: C.muted, marginTop: 2 }}>{formatDate(a.updated_at)}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginLeft: 12, flexShrink: 0 }}>
                    <span style={{
                      padding: '2px 8px', borderRadius: 100, fontSize: 10, fontWeight: 700,
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                      color: STATUS_COLORS[a.status] || C.muted,
                      background: `${STATUS_COLORS[a.status] || C.muted}15`,
                    }}>
                      {a.status}
                    </span>
                    <span style={{ fontSize: 11, color: C.muted, display: 'flex', alignItems: 'center', gap: 3 }}>
                      <Eye size={10} />{a.views || 0}
                    </span>
                    <Edit size={12} color={C.muted} />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Top articles chart */}
        <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 14, padding: 24 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, margin: '0 0 18px', color: C.primary }}>Top Articles by Views</h2>
          {topByViews.length === 0 ? (
            <p style={{ fontSize: 13, color: C.muted, textAlign: 'center', padding: '24px 0' }}>No data yet.</p>
          ) : (
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={topByViews} margin={{ top: 0, right: 0, bottom: 0, left: -20 }}>
                <XAxis dataKey="name" tick={{ fill: C.muted, fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: C.muted, fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 8, fontSize: 12, color: C.primary }}
                  cursor={{ fill: 'rgba(139,92,246,0.06)' }}
                />
                <Bar dataKey="views" fill={C.violet} radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}
