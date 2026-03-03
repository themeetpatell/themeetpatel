import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Search, Calendar, Clock, Eye, ArrowRight, BookOpen,
  Target, TrendingUp, Rocket, Crown, Zap, Users, Lightbulb,
  Award, Code, Settings, BarChart3, Handshake, FileText,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { getPublishedArticles, getCategories } from '../lib/articleService';
import FollowMyJourney from '../components/FollowMyJourney';

void motion;

// ─── Design tokens ─────────────────────────────────────────────────────────────
const C = {
  bg:           '#09090e',
  surface:      '#111118',
  elevated:     '#16161f',
  border:       'rgba(255,255,255,0.07)',
  primary:      '#f5f5f7',
  secondary:    '#8e8ea0',
  muted:        '#5a5a6e',
  violet:       '#8b5cf6',
  violetDim:    'rgba(139,92,246,0.12)',
  violetBorder: 'rgba(139,92,246,0.25)',
  gold:         '#d4a847',
  goldDim:      'rgba(212,168,71,0.12)',
};

const iconMap = {
  Rocket, Target, Settings, TrendingUp, Lightbulb,
  Users, Code, BarChart3, Handshake, FileText, Crown, BookOpen, Award, Zap,
};

// ─── Article card ──────────────────────────────────────────────────────────────
function ArticleCard({ article, index, formatDate }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:    hovered ? C.elevated : C.surface,
        border:        `1px solid ${hovered ? C.violetBorder : C.border}`,
        borderRadius:  16,
        overflow:      'hidden',
        transition:    'all 0.25s ease',
        boxShadow:     hovered ? '0 8px 32px rgba(139,92,246,0.12)' : 'none',
        display:       'flex',
        flexDirection: 'column',
        position:      'relative',
      }}
    >
      {hovered && (
        <div style={{
          position:   'absolute',
          top:        0,
          left:       '15%',
          right:      '15%',
          height:     '1px',
          background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.6), transparent)',
        }} />
      )}

      {/* Badges */}
      <div style={{ padding: '16px 24px 8px', display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
        <span style={{
          padding: '3px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700,
          letterSpacing: '0.06em', textTransform: 'uppercase',
          background: C.violetDim, color: C.violet, border: `1px solid rgba(139,92,246,0.2)`,
        }}>
          {article.category}
        </span>
        {article.featured && (
          <span style={{
            padding: '3px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            background: C.goldDim, color: C.gold, border: `1px solid rgba(212,168,71,0.2)`,
          }}>
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '8px 24px 24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Link to={`/blogs/${article.slug}`} style={{ textDecoration: 'none' }}>
          <h3 style={{
            fontSize: 18, fontWeight: 700,
            color: hovered ? '#ffffff' : C.primary,
            margin: '0 0 10px', lineHeight: 1.35,
            letterSpacing: '-0.01em', transition: 'color 0.2s',
          }}>
            {article.title}
          </h3>
        </Link>

        <p style={{ fontSize: 13, color: C.secondary, lineHeight: 1.7, margin: '0 0 18px', flex: 1 }}>
          {article.excerpt}
        </p>

        {article.tags?.length > 0 && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
            {article.tags.slice(0, 3).map(tag => (
              <span key={tag} style={{
                fontSize: 11, color: C.muted,
                background: 'rgba(255,255,255,0.04)',
                border: `1px solid rgba(255,255,255,0.06)`,
                padding: '2px 8px', borderRadius: 6,
              }}>
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.05)',
          flexWrap: 'wrap', gap: 10,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: C.muted }}>
              <Calendar size={11} />{formatDate(article.date)}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: C.muted }}>
              <Clock size={11} />{article.readTime}
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: C.muted }}>
              <Eye size={11} />{article.views}
            </span>
          </div>
          <Link
            to={`/blogs/${article.slug}`}
            style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 600, color: C.violet, textDecoration: 'none' }}
          >
            Read <ArrowRight size={11} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Skeleton card ─────────────────────────────────────────────────────────────
function SkeletonCard() {
  return (
    <div style={{
      background: C.surface, border: `1px solid ${C.border}`,
      borderRadius: 16, padding: '20px 24px', minHeight: 220,
    }}>
      {[80, 200, 140, 60].map((w, i) => (
        <div key={i} style={{
          height: i === 1 ? 16 : 12, width: `${w}px`,
          background: 'rgba(255,255,255,0.05)', borderRadius: 6,
          marginBottom: 12, animation: 'shimmer 1.5s ease-in-out infinite',
        }} />
      ))}
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────
const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [allArticles, setAllArticles] = useState([]);
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([getPublishedArticles(), getCategories()])
      .then(([articles, cats]) => {
        setAllArticles(articles);
        setCategoriesData(cats);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const categories = [
    { name: 'All', icon: BookOpen, count: allArticles.length },
    ...categoriesData.map(cat => ({
      name: cat.name,
      icon: iconMap[cat.icon] || BookOpen,
      count: cat.count,
    })),
  ];

  const filtered = allArticles.filter(a => {
    const matchesCat    = selectedCategory === 'All' || a.category === selectedCategory;
    const q             = searchTerm.toLowerCase();
    const matchesSearch = !q
      || a.title.toLowerCase().includes(q)
      || a.excerpt.toLowerCase().includes(q)
      || a.tags.some(t => t.toLowerCase().includes(q));
    return matchesCat && matchesSearch;
  });

  const formatDate = d =>
    new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });

  const blogStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: "The Meet Patel's Blog - Startup Insights & Business Strategy",
    description: 'Read insights on entrepreneurship, startup building, business strategy, and operations management from serial entrepreneur The Meet Patel.',
    url: 'https://themeetpatel.com/blogs',
    author: { '@type': 'Person', name: 'The Meet Patel', url: 'https://themeetpatel.com' },
  };

  return (
    <>
      <SEOHead
        title="Blog — Meet Patel | Startup Insights & Entrepreneurship"
        description="Read articles by The Meet Patel on startups, venture building, business strategy, growth systems, execution, and entrepreneurship."
        keywords="The Meet Patel blog, Meet Patel articles, themeetpatel blog, startup insights, venture building, business strategy, entrepreneurship, startup operations, founder advice"
        canonical="/blogs"
        structuredData={blogStructuredData}
      />

      <style>{`
        * { box-sizing: border-box; }
        input::placeholder { color: #5a5a6e; }
        * { -webkit-font-smoothing: antialiased; }
        @keyframes shimmer { 0%, 100% { opacity: 0.4; } 50% { opacity: 0.8; } }
      `}</style>

      <div style={{
        background: C.bg,
        minHeight:  '100vh',
        color:      C.primary,
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        overflowX:  'hidden',
      }}>

        {/* ══ HERO ══════════════════════════════════════════════════════════════ */}
        <section style={{ position: 'relative', overflow: 'hidden', padding: 'clamp(120px, 16vw, 180px) 24px clamp(60px, 8vw, 96px)' }}>
          {/* Dot grid background */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `radial-gradient(rgba(139,92,246,0.18) 1px, transparent 1px)`,
            backgroundSize: '28px 28px',
            pointerEvents: 'none',
            maskImage: 'radial-gradient(ellipse 80% 60% at 30% 50%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 30% 50%, black, transparent)',
          }} />
          <div style={{
            position: 'absolute', top: '10%', left: '-10%',
            width: 600, height: 500,
            background: 'radial-gradient(ellipse, rgba(139,92,246,0.07) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', maxWidth: 1200, margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} style={{ marginBottom: 20 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.violet }}>
                Insights & Ideas
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.06 }}
              style={{ fontSize: 'clamp(64px, 10vw, 120px)', fontWeight: 900, letterSpacing: '-0.045em', lineHeight: 0.9, margin: '0 0 32px', color: C.primary }}
            >
              BLOG<span style={{ color: C.gold }}>.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
              style={{ fontSize: 'clamp(16px, 2vw, 19px)', color: C.secondary, maxWidth: 500, lineHeight: 1.7, margin: '0 0 48px' }}
            >
              Thoughts on entrepreneurship, personal growth, and the journey of building meaningful things from Dubai.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}
            >
              {[
                { value: allArticles.length, label: 'Articles' },
                { value: '100K+', label: 'Total Reach' },
                { value: '5.5K+', label: 'Followers' },
                { value: `${categories.length - 1}`, label: 'Categories' },
              ].map(s => (
                <div key={s.label} style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 12, padding: '12px 20px' }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: C.violet, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 12, color: C.muted, marginTop: 4 }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ══ SEARCH + FILTERS ══════════════════════════════════════════════════ */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 48px' }}>
          <div style={{ position: 'relative', maxWidth: 480, marginBottom: 24 }}>
            <Search size={14} style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: C.muted, pointerEvents: 'none' }} />
            <input
              type="text"
              placeholder="Search articles…"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{
                width: '100%', padding: '11px 16px 11px 44px',
                background: C.surface, border: `1px solid ${C.border}`,
                borderRadius: 10, color: C.primary, fontSize: 14,
                outline: 'none', transition: 'border-color 0.2s', boxSizing: 'border-box',
              }}
              onFocus={e => e.target.style.borderColor = C.violetBorder}
              onBlur={e => e.target.style.borderColor = C.border}
            />
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {categories.map(cat => {
              const isActive = selectedCategory === cat.name;
              const Icon = cat.icon;
              return (
                <button
                  key={cat.name}
                  onClick={() => setSelectedCategory(cat.name)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    padding: '7px 14px', borderRadius: 100, fontSize: 12, fontWeight: 600,
                    cursor: 'pointer',
                    background: isActive ? C.violet : C.surface,
                    color: isActive ? '#fff' : C.secondary,
                    border: `1px solid ${isActive ? C.violet : C.border}`,
                    transition: 'all 0.2s ease', whiteSpace: 'nowrap',
                  }}
                >
                  <Icon size={12} />
                  {cat.name}
                  <span style={{ opacity: 0.6, fontSize: 11 }}>({cat.count})</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* ══ ARTICLES GRID ═════════════════════════════════════════════════════ */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 100px' }}>
          <div style={{ fontSize: 13, color: C.muted, marginBottom: 24 }}>
            {filtered.length} article{filtered.length !== 1 ? 's' : ''}
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>

          {loading ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
              {[1, 2, 3].map(i => <SkeletonCard key={i} />)}
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '80px 24px' }}>
              <div style={{
                width: 56, height: 56, background: C.violetDim, borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px',
              }}>
                <Search size={22} color={C.violet} />
              </div>
              <p style={{ fontSize: 16, color: C.muted }}>No articles found. Try a different search or category.</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 20 }}>
              {filtered.map((article, i) => (
                <ArticleCard key={article.id} article={article} index={i} formatDate={formatDate} />
              ))}
            </div>
          )}
        </section>

        {/* ══ FOLLOW MY JOURNEY ═════════════════════════════════════════════════ */}
        <div style={{ borderTop: `1px solid ${C.border}` }}>
          <FollowMyJourney />
        </div>
      </div>
    </>
  );
};

export default BlogPage;
