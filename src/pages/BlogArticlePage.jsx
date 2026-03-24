import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
  Calendar, Clock, User, Share2, Bookmark,
  Twitter, Linkedin, Facebook, Copy, Eye,
  ArrowLeft, ArrowRight, X,
} from 'lucide-react';
import { getArticleBySlug, getRelatedArticles, incrementViews } from '../lib/articleService';
import FollowMyJourney from '../components/FollowMyJourney';
import SEOHead from '../components/SEOHead';

const C = {
  bg:           '#09090e',
  surface:      '#111118',
  elevated:     '#16161f',
  border:       'rgba(255,255,255,0.07)',
  borderMd:     'rgba(255,255,255,0.10)',
  primary:      '#f5f5f7',
  secondary:    '#8e8ea0',
  muted:        '#5a5a6e',
  violet:       '#8b5cf6',
  violetDim:    'rgba(139,92,246,0.12)',
  violetBorder: 'rgba(139,92,246,0.25)',
};

const BlogArticlePage = () => {
  const { slug } = useParams();
  const [article, setArticle]             = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [isBookmarked, setIsBookmarked]   = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isLoading, setIsLoading]         = useState(true);
  const [copiedLink, setCopiedLink]       = useState(false);
  const articleRef = useRef(null);
  const shareRef = useRef(null);

  // Close share menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (shareRef.current && !shareRef.current.contains(e.target)) {
        setShowShareMenu(false);
      }
    };
    if (showShareMenu) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showShareMenu]);

  useEffect(() => {
    setIsLoading(true);
    getArticleBySlug(slug)
      .then(async found => {
        if (found) {
          setArticle(found);
          incrementViews(found.id).then(() => {
            setArticle(prev => prev ? { ...prev, views: (prev.views || 0) + 1 } : prev);
          }).catch(() => {});
          const related = await getRelatedArticles(found);
          setRelatedArticles(related);
        }
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setReadingProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatDate = d =>
    new Date(d).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const handleShare = (platform) => {
    const url   = window.location.href;
    const title = article?.title || '';
    const map = {
      twitter:  `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    };
    if (map[platform]) window.open(map[platform], '_blank', 'width=600,height=400');
    setShowShareMenu(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
    setShowShareMenu(false);
  };

  // ── Loading ──────────────────────────────────────────────────────────────────
  if (isLoading) {
    return (
      <div style={{ minHeight: '100vh', background: C.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            style={{
              width: 48, height: 48,
              border: `2px solid ${C.violetBorder}`,
              borderTopColor: C.violet,
              borderRadius: '50%',
              margin: '0 auto 16px',
            }}
          />
          <p style={{ color: C.muted, fontSize: 14 }}>Loading article…</p>
        </div>
      </div>
    );
  }

  // ── Not found ────────────────────────────────────────────────────────────────
  if (!article) {
    return (
      <>
        <SEOHead
          title="Article Not Found"
          description="The article you're looking for doesn't exist on The Meet Patel's blog."
          canonical={`/blogs/${slug}`}
        />
        <div style={{ minHeight: '100vh', background: C.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
          <div style={{ textAlign: 'center', maxWidth: 400 }}>
            <div style={{
              width: 64, height: 64, background: 'rgba(239,68,68,0.1)',
              border: '1px solid rgba(239,68,68,0.2)',
              borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px',
            }}>
              <X size={28} color="#ef4444" />
            </div>
            <h2 style={{ fontSize: 24, fontWeight: 700, color: C.primary, margin: '0 0 10px' }}>Article Not Found</h2>
            <p style={{ fontSize: 15, color: C.secondary, margin: '0 0 24px' }}>The article you're looking for doesn't exist.</p>
            <Link
              to="/blogs"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: C.violet, color: '#fff', borderRadius: 10,
                padding: '10px 22px', fontSize: 14, fontWeight: 600, textDecoration: 'none',
              }}
            >
              <ArrowLeft size={14} /> Back to Blog
            </Link>
          </div>
        </div>
      </>
    );
  }

  // ── Structured data ──────────────────────────────────────────────────────────
  const schemaType = article.schema_type || 'BlogPosting';
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    headline: article.title,
    description: article.meta_description || article.excerpt,
    author: { '@type': 'Person', name: article.author || 'Meet Patel', url: 'https://themeetpatel.com/about' },
    publisher: { '@type': 'Person', name: 'The Meet Patel', url: 'https://themeetpatel.com' },
    datePublished: article.published_at || article.date,
    dateModified: article.last_updated_at || article.updated_at || article.date,
    keywords: [...(article.tags || []), ...(article.secondary_keywords || [])].join(', '),
    articleSection: article.category,
    timeRequired: article.read_time,
    ...(article.og_image ? { image: article.og_image } : {}),
    ...(article.speakable && article.ai_summary ? {
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['.article-ai-summary'] },
    } : {}),
    ...(article.citations?.length ? {
      citation: article.citations
        .filter(c => c.url && c.title)
        .map(c => ({ '@type': 'CreativeWork', name: c.title, url: c.url })),
    } : {}),
  };

  const faqItems = article.faq_items || [];
  const faqSchema = faqItems.filter(f => f.question && f.answer).length >= 1 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.filter(f => f.question && f.answer).map(f => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  } : null;

  const howtoSteps = article.howto_steps || [];
  const howtoSchema = schemaType === 'HowToArticle' && howtoSteps.filter(s => s.title).length >= 2 ? {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: article.title,
    step: howtoSteps.filter(s => s.title).map((s, i) => ({
      '@type': 'HowToStep',
      position: i + 1,
      name: s.title,
      text: s.description || s.title,
      ...(s.image ? { image: s.image } : {}),
    })),
  } : null;

  const readTime = article.read_time;

  return (
    <>
      <SEOHead
        title={article.meta_title || article.title}
        description={article.meta_description || article.excerpt}
        keywords={[...(article.tags || []), ...(article.secondary_keywords || []), article.category, 'The Meet Patel blog'].filter(Boolean).join(', ')}
        canonical={article.canonical_url || `/blogs/${article.slug}`}
        ogType="article"
        ogTitle={article.og_title || article.meta_title || article.title}
        ogDescription={article.og_description || article.meta_description || article.excerpt}
        ogImage={article.og_image}
        articlePublishedTime={article.published_at || article.date}
        articleModifiedTime={article.last_updated_at || article.updated_at}
        structuredData={structuredData}
        twitterCard={article.twitter_card || 'summary_large_image'}
        twitterCreator={article.twitter_creator || '@the_meetpatel'}
        robotsNoindex={!!article.robots_noindex}
        robotsNofollow={!!article.robots_nofollow}
      />
      {faqSchema && faqSchema.mainEntity.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      {howtoSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howtoSchema) }} />
      )}

      <style>{`
        * { box-sizing: border-box; -webkit-font-smoothing: antialiased; }

        /* ── Article body typography ── */
        .article-body h1,
        .article-body h2,
        .article-body h3,
        .article-body h4 {
          color: #f5f5f7;
          font-weight: 700;
          letter-spacing: -0.02em;
          line-height: 1.3;
          margin: 2.2rem 0 1rem;
        }
        .article-body h1 { font-size: clamp(26px, 4vw, 38px); }
        .article-body h2 { font-size: clamp(20px, 3vw, 28px); border-bottom: 1px solid rgba(255,255,255,0.07); padding-bottom: 10px; }
        .article-body h3 { font-size: clamp(17px, 2.5vw, 22px); }
        .article-body h4 { font-size: clamp(14px, 2vw, 17px); text-transform: uppercase; letter-spacing: 0.05em; color: #8e8ea0; }

        .article-body p {
          color: #8e8ea0;
          line-height: 1.85;
          margin: 0 0 1.25rem;
          font-size: clamp(15px, 1.5vw, 17px);
        }

        /* ── Lists — critical: must set list-style-type explicitly ── */
        .article-body ul {
          list-style-type: disc;
          list-style-position: outside;
          padding-left: 1.6rem;
          margin: 0.25rem 0 1.25rem;
          color: #8e8ea0;
          font-size: clamp(15px, 1.5vw, 17px);
        }
        .article-body ul ul  { list-style-type: circle; margin: 0.25rem 0; }
        .article-body ul ul ul { list-style-type: square; }

        .article-body ol {
          list-style-type: decimal;
          list-style-position: outside;
          padding-left: 1.6rem;
          margin: 0.25rem 0 1.25rem;
          color: #8e8ea0;
          font-size: clamp(15px, 1.5vw, 17px);
        }
        .article-body ol ol  { list-style-type: lower-alpha; margin: 0.25rem 0; }
        .article-body ol ol ol { list-style-type: lower-roman; }

        .article-body li {
          line-height: 1.8;
          margin-bottom: 0.45rem;
          padding-left: 0.2rem;
        }
        .article-body li p { margin: 0; }
        .article-body li::marker { color: #8b5cf6; font-weight: 700; }

        .article-body li > ul,
        .article-body li > ol { margin-top: 0.25rem; margin-bottom: 0.25rem; }

        /* ── Inline ── */
        .article-body strong { color: #f5f5f7; font-weight: 600; }
        .article-body em { font-style: italic; }
        .article-body u { text-decoration: underline; text-underline-offset: 3px; }
        .article-body s { text-decoration: line-through; opacity: 0.6; }
        .article-body mark { background: rgba(139,92,246,0.2); color: #f5f5f7; padding: 1px 4px; border-radius: 3px; }

        /* ── Links ── */
        .article-body a { color: #8b5cf6; text-decoration: underline; text-underline-offset: 3px; text-decoration-color: rgba(139,92,246,0.4); }
        .article-body a:hover { text-decoration-color: #8b5cf6; color: #a78bfa; }

        /* ── Blockquote ── */
        .article-body blockquote {
          border-left: 3px solid #8b5cf6;
          margin: 1.75rem 0;
          padding: 16px 22px;
          background: rgba(139,92,246,0.06);
          border-radius: 0 10px 10px 0;
          color: #8e8ea0;
          font-style: italic;
        }
        .article-body blockquote p { margin: 0; }

        /* ── Code ── */
        .article-body code {
          background: #16161f;
          border: 1px solid rgba(167,139,250,0.15);
          border-radius: 5px;
          padding: 2px 7px;
          font-family: 'JetBrains Mono', 'Fira Code', monospace;
          font-size: 13px;
          color: #a78bfa;
        }
        .article-body pre {
          background: #16161f;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          padding: 18px 22px;
          overflow-x: auto;
          margin: 1.5rem 0;
        }
        .article-body pre code { padding: 0; border: none; background: none; font-size: 13px; line-height: 1.7; }

        /* ── Misc ── */
        .article-body hr { border: none; border-top: 1px solid rgba(255,255,255,0.07); margin: 2.25rem 0; }
        .article-body img { max-width: 100%; border-radius: 12px; margin: 1.5rem 0; display: block; border: 1px solid rgba(255,255,255,0.07); }
        .article-body table { border-collapse: collapse; width: 100%; margin: 1.5rem 0; }
        .article-body th, .article-body td { border: 1px solid rgba(255,255,255,0.07); padding: 10px 16px; font-size: 14px; text-align: left; }
        .article-body th { background: #16161f; color: #f5f5f7; font-weight: 700; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; }
        .article-body td { color: #8e8ea0; }
        .article-body tr:nth-child(even) td { background: rgba(255,255,255,0.02); }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .article-layout { grid-template-columns: 1fr !important; }
          .article-sidebar { display: none !important; }
        }
      `}</style>

      <div style={{ background: C.bg, minHeight: '100vh', color: C.primary, fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>

        {/* ── Reading progress ──────────────────────────────────────────────── */}
        <div style={{ position: 'fixed', top: 64, left: 0, right: 0, height: 2, background: 'rgba(255,255,255,0.05)', zIndex: 9998 }}>
          <motion.div
            style={{ height: '100%', background: C.violet, width: `${readingProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* ── Hero header ───────────────────────────────────────────────────── */}
        <section style={{ position: 'relative', zIndex: 2, padding: 'clamp(100px, 12vw, 150px) 0 clamp(48px, 6vw, 72px)' }}>
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse 70% 55% at 50% 30%, rgba(139,92,246,0.07) 0%, transparent 65%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative' }}>
          <div style={{ maxWidth: 760 }}>

            {/* Back */}
            <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: 28 }}>
              <Link
                to="/blogs"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 500, color: C.muted, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = C.secondary}
                onMouseLeave={e => e.currentTarget.style.color = C.muted}
              >
                <ArrowLeft size={14} /> Back to Blog
              </Link>
            </motion.div>

            {/* Category */}
            {article.category && (
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.05 }} style={{ marginBottom: 18 }}>
                <span style={{
                  padding: '4px 14px', borderRadius: 100, fontSize: 11, fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  background: C.violetDim, color: C.violet, border: `1px solid rgba(139,92,246,0.2)`,
                }}>
                  {article.category}
                </span>
              </motion.div>
            )}

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15, margin: '0 0 20px', color: C.primary }}
            >
              {article.title}
            </motion.h1>

            {/* Excerpt */}
            {article.excerpt && (
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.16 }}
                style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: C.secondary, lineHeight: 1.65, margin: '0 0 28px' }}
              >
                {article.excerpt}
              </motion.p>
            )}

            {/* Meta */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.22 }}
              style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16, marginBottom: 20 }}
            >
              {[
                { icon: User,     text: article.author },
                { icon: Calendar, text: formatDate(article.date) },
                { icon: Clock,    text: readTime },
                { icon: Eye,      text: `${(article.views || 0).toLocaleString()} views` },
              ].filter(m => m.text).map(({ icon: Icon, text }) => (
                <span key={text} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: C.muted }}>
                  <Icon size={13} /> {text}
                </span>
              ))}
            </motion.div>

            {/* Tags */}
            {article.tags?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.28 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 28 }}
              >
                {article.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: 12, color: C.muted,
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid rgba(255,255,255,0.07)`,
                    padding: '3px 10px', borderRadius: 6,
                  }}>
                    #{tag}
                  </span>
                ))}
              </motion.div>
            )}

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.32 }}
              style={{ display: 'flex', alignItems: 'center', gap: 10 }}
            >
              <button
                onClick={() => setIsBookmarked(b => !b)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '8px 16px', borderRadius: 8, cursor: 'pointer',
                  background: isBookmarked ? C.violetDim : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${isBookmarked ? C.violetBorder : C.border}`,
                  color: isBookmarked ? C.violet : C.secondary,
                  fontSize: 13, fontWeight: 500, transition: 'all 0.2s',
                }}
              >
                <Bookmark size={14} style={{ fill: isBookmarked ? C.violet : 'none' }} />
                {isBookmarked ? 'Saved' : 'Save'}
              </button>

              <div ref={shareRef} style={{ position: 'relative' }}>
                <button
                  onClick={() => setShowShareMenu(v => !v)}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 6,
                    padding: '8px 16px', borderRadius: 8, cursor: 'pointer',
                    background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.border}`,
                    color: C.secondary, fontSize: 13, fontWeight: 500, transition: 'all 0.2s',
                  }}
                >
                  <Share2 size={14} /> Share
                </button>
                <AnimatePresence>
                  {showShareMenu && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.18 }}
                      style={{
                        position: 'absolute', top: 'calc(100% + 8px)', left: 0, zIndex: 50,
                        background: C.elevated, border: `1px solid ${C.borderMd}`,
                        borderRadius: 12, padding: 8, minWidth: 180,
                        boxShadow: '0 12px 40px rgba(0,0,0,0.5)',
                      }}
                    >
                      {[
                        { icon: Twitter,  label: 'Twitter',                       action: () => handleShare('twitter') },
                        { icon: Linkedin, label: 'LinkedIn',                      action: () => handleShare('linkedin') },
                        { icon: Facebook, label: 'Facebook',                      action: () => handleShare('facebook') },
                        { icon: Copy,     label: copiedLink ? 'Copied!' : 'Copy Link', action: handleCopyLink },
                      ].map(({ icon: Icon, label, action }) => (
                        <button
                          key={label} onClick={action}
                          style={{
                            display: 'flex', alignItems: 'center', gap: 10, width: '100%',
                            padding: '9px 14px', background: 'transparent', border: 'none',
                            borderRadius: 8, cursor: 'pointer', color: C.secondary,
                            fontSize: 13, fontWeight: 500, transition: 'all 0.15s', textAlign: 'left',
                          }}
                          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = C.primary; }}
                          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.secondary; }}
                        >
                          <Icon size={15} /> {label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>
          </div>
        </section>

        {/* ── Main: content + sidebar ───────────────────────────────────────── */}
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 80px' }}>
          <div
            className="article-layout"
            style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 40, alignItems: 'start' }}
          >

            {/* Content card */}
            <motion.div
              ref={articleRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 20, overflow: 'hidden' }}
            >
              {/* Cover image OR gradient banner */}
              {article.og_image ? (
                <div style={{ position: 'relative', height: 'clamp(160px, 22vw, 340px)', overflow: 'hidden' }}>
                  <img
                    src={article.og_image}
                    alt={article.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  />
                  <div style={{
                    position: 'absolute', inset: 0,
                    background: 'linear-gradient(to bottom, transparent 40%, rgba(17,17,24,0.9) 100%)',
                  }} />
                </div>
              ) : (
                <div style={{
                  height: 'clamp(80px, 14vw, 140px)',
                  background: 'linear-gradient(135deg, #111118 0%, #16161f 50%, rgba(139,92,246,0.12) 100%)',
                  position: 'relative', overflow: 'hidden',
                  borderBottom: `1px solid ${C.border}`,
                }}>
                  <div style={{
                    position: 'absolute', inset: 0,
                    backgroundImage: `radial-gradient(rgba(139,92,246,0.12) 1px, transparent 1px)`,
                    backgroundSize: '24px 24px',
                  }} />
                  <div style={{
                    position: 'absolute', bottom: 0, left: 0, right: 0, height: 1,
                    background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.3), transparent)',
                  }} />
                </div>
              )}

              {/* Article body */}
              <div style={{ padding: 'clamp(28px, 5vw, 52px)' }}>

                {/* AI summary / Quick Answer */}
                {article.ai_summary && (
                  <div
                    className="article-ai-summary"
                    style={{
                      background: 'rgba(139,92,246,0.07)',
                      border: `1px solid rgba(139,92,246,0.2)`,
                      borderRadius: 12, padding: '16px 20px', marginBottom: 36,
                    }}
                  >
                    <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.violet, marginBottom: 8 }}>
                      Quick Answer
                    </div>
                    <p style={{ margin: 0, fontSize: 15, color: C.secondary, lineHeight: 1.75 }}>
                      {article.ai_summary}
                    </p>
                  </div>
                )}

                {/* ✅ FIXED: use content_html not content */}
                <div
                  className="article-body"
                  dangerouslySetInnerHTML={{ __html: article.content_html || '' }}
                />

                {/* Citations */}
                {article.citations?.filter(c => c.url && c.title).length > 0 && (
                  <div style={{ marginTop: 40, paddingTop: 28, borderTop: `1px solid ${C.border}` }}>
                    <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: C.muted, marginBottom: 12 }}>
                      Sources & Citations
                    </div>
                    <ol style={{ margin: 0, paddingLeft: 20, listStyleType: 'decimal' }}>
                      {article.citations.filter(c => c.url && c.title).map((c, i) => (
                        <li key={i} style={{ marginBottom: 6, color: C.muted, fontSize: 13 }}>
                          <a href={c.url} target="_blank" rel="noopener noreferrer"
                            style={{ color: C.violet, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                            {c.title}
                          </a>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                {/* Share strip */}
                <div style={{
                  marginTop: 48, paddingTop: 28, borderTop: `1px solid ${C.border}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  flexWrap: 'wrap', gap: 16,
                }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: C.secondary }}>Share this article:</span>
                  <div style={{ display: 'flex', gap: 8 }}>
                    {[
                      { icon: Linkedin, action: () => handleShare('linkedin'), title: 'Share on LinkedIn' },
                      { icon: Twitter,  action: () => handleShare('twitter'),  title: 'Share on Twitter' },
                      { icon: Facebook, action: () => handleShare('facebook'), title: 'Share on Facebook' },
                      { icon: Copy,     action: handleCopyLink,                title: 'Copy link' },
                    ].map(({ icon: Icon, action, title }) => (
                      <button
                        key={title} onClick={action} title={title}
                        style={{
                          width: 38, height: 38, background: C.elevated,
                          border: `1px solid ${C.border}`, borderRadius: 8, cursor: 'pointer',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: C.muted, transition: 'all 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.background = C.violetDim; e.currentTarget.style.color = C.violet; e.currentTarget.style.borderColor = C.violetBorder; }}
                        onMouseLeave={e => { e.currentTarget.style.background = C.elevated; e.currentTarget.style.color = C.muted; e.currentTarget.style.borderColor = C.border; }}
                      >
                        <Icon size={15} />
                      </button>
                    ))}
                  </div>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: C.muted }}>
                    <Eye size={13} /> {(article.views || 0).toLocaleString()} views
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <div className="article-sidebar" style={{ position: 'sticky', top: 90, display: 'flex', flexDirection: 'column', gap: 16 }}>

              {/* Author card */}
              <motion.div
                initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 16, padding: 24 }}
              >
                <div style={{ textAlign: 'center', marginBottom: 20 }}>
                  <div style={{
                    width: 64, height: 64, background: C.violetDim, border: `1px solid ${C.violetBorder}`,
                    borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px',
                  }}>
                    <User size={28} color={C.violet} />
                  </div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: C.primary, marginBottom: 4 }}>{article.author}</div>
                  <div style={{ fontSize: 12, color: C.muted }}>Serial Entrepreneur · Dubai</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                  {[
                    { label: 'Articles',     value: '16+' },
                    { label: 'Total Reach',  value: '100K+' },
                    { label: 'Followers',    value: '6.5K+' },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: 13, color: C.muted }}>{label}</span>
                      <span style={{ fontSize: 13, fontWeight: 700, color: C.violet }}>{value}</span>
                    </div>
                  ))}
                </div>
                <a
                  href="https://www.linkedin.com/in/themeetpatel/"
                  target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
                    width: '100%', padding: '10px 16px',
                    background: C.violet, border: 'none', borderRadius: 8,
                    color: '#fff', fontSize: 13, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#7c3aed'}
                  onMouseLeave={e => e.currentTarget.style.background = C.violet}
                >
                  <Linkedin size={14} /> Follow on LinkedIn
                </a>
              </motion.div>

              {/* Reading progress */}
              <motion.div
                initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 16, padding: 24 }}
              >
                <div style={{ fontSize: 13, fontWeight: 600, color: C.secondary, marginBottom: 14 }}>Reading Progress</div>
                <div style={{ width: '100%', height: 4, background: 'rgba(255,255,255,0.06)', borderRadius: 2, overflow: 'hidden', marginBottom: 10 }}>
                  <motion.div
                    style={{ height: '100%', background: C.violet, borderRadius: 2, width: `${readingProgress}%` }}
                    transition={{ duration: 0.2 }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, color: C.muted }}>
                  <span>{Math.round(readingProgress)}% complete</span>
                  <span>{readTime}</span>
                </div>
              </motion.div>

              {/* Article info */}
              <motion.div
                initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
                style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 16, padding: 24 }}
              >
                <div style={{ fontSize: 13, fontWeight: 600, color: C.secondary, marginBottom: 14 }}>Article Info</div>
                {[
                  { label: 'Read time',  value: readTime },
                  { label: 'Views',      value: (article.views || 0).toLocaleString() },
                  { label: 'Category',   value: article.category },
                  { label: 'Published',  value: formatDate(article.date) },
                ].filter(r => r.value).map(({ label, value }) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <span style={{ fontSize: 13, color: C.muted }}>{label}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: C.secondary }}>{value}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Related articles ──────────────────────────────────────────────── */}
        {relatedArticles.length > 0 && (
          <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px 80px' }}>
            <div style={{ marginBottom: 32 }}>
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.violet }}>Continue Reading</span>
              <h2 style={{ fontSize: 'clamp(22px, 3vw, 34px)', fontWeight: 700, color: C.primary, margin: '8px 0 0', letterSpacing: '-0.02em' }}>
                Related Articles
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: 20 }}>
              {relatedArticles.map((rel, i) => (
                <motion.div
                  key={rel.id}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                  style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 16, overflow: 'hidden', transition: 'all 0.25s ease' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.violetBorder; e.currentTarget.style.background = C.elevated; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = C.border; e.currentTarget.style.background = C.surface; }}
                >
                  <div style={{ padding: '16px 20px 8px' }}>
                    <span style={{
                      padding: '3px 10px', borderRadius: 100, fontSize: 11, fontWeight: 700,
                      letterSpacing: '0.06em', textTransform: 'uppercase',
                      background: C.violetDim, color: C.violet, border: `1px solid rgba(139,92,246,0.2)`,
                    }}>
                      {rel.category}
                    </span>
                  </div>
                  <div style={{ padding: '8px 20px 20px' }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: C.primary, margin: '0 0 10px', lineHeight: 1.35 }}>
                      {rel.title}
                    </h3>
                    <p style={{ fontSize: 13, color: C.secondary, lineHeight: 1.65, margin: '0 0 16px' }}>
                      {rel.excerpt}
                    </p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 16, borderTop: `1px solid rgba(255,255,255,0.05)` }}>
                      <div style={{ display: 'flex', gap: 12 }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: C.muted }}>
                          <Calendar size={11} /> {formatDate(rel.date)}
                        </span>
                        {rel.read_time && (
                          <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: C.muted }}>
                            <Clock size={11} /> {rel.read_time}
                          </span>
                        )}
                      </div>
                      <Link
                        to={`/blogs/${rel.slug}`}
                        style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, fontWeight: 600, color: C.violet, textDecoration: 'none' }}
                      >
                        Read <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* ── CTA ───────────────────────────────────────────────────────────── */}
        <section style={{ maxWidth: 720, margin: '0 auto', padding: '0 24px 100px' }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{
              background: C.surface, border: `1px solid ${C.violetBorder}`,
              borderRadius: 24, padding: 'clamp(36px, 5vw, 56px)',
              textAlign: 'center', position: 'relative', overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.12), transparent 65%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', top: 0, left: '15%', right: '15%', height: 1, background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)' }} />
            <div style={{ position: 'relative' }}>
              <h2 style={{ fontSize: 'clamp(22px, 4vw, 34px)', fontWeight: 800, color: C.primary, margin: '0 0 12px', letterSpacing: '-0.03em' }}>
                Enjoyed this article?
              </h2>
              <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.65, margin: '0 0 28px', maxWidth: 420, marginLeft: 'auto', marginRight: 'auto' }}>
                Get notified when I publish new insights about entrepreneurship, startups, and building things that matter.
              </p>
              <Link
                to="/contact"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                  background: C.violet, color: '#fff', borderRadius: 10,
                  padding: '12px 26px', fontSize: 14, fontWeight: 600, textDecoration: 'none', transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#7c3aed'}
                onMouseLeave={e => e.currentTarget.style.background = C.violet}
              >
                Stay Connected <ArrowRight size={14} />
              </Link>
            </div>
          </motion.div>
        </section>

        {/* ── Follow My Journey ─────────────────────────────────────────────── */}
        <div style={{ borderTop: `1px solid ${C.border}` }}>
          <FollowMyJourney />
        </div>
      </div>
    </>
  );
};

export default BlogArticlePage;
