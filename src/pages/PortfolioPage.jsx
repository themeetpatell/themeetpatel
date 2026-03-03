import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ExternalLink,
  Briefcase,
  Award,
  Users,
  CheckCircle,
  Search,
  ArrowRight,
  Zap,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import FollowMyJourney from '../components/FollowMyJourney';

void motion;

// ─── Design Tokens ───────────────────────────────────────────────────────────
const C = {
  bg:        '#07070d',
  surface:   '#0d0e16',
  elevated:  '#151725',
  border:    'rgba(155,139,255,0.20)',
  borderSub: 'rgba(255,255,255,0.07)',
  primary:   '#f7f7fb',
  secondary: '#a8a9c3',
  muted:     '#70728d',
  violet:    '#9b8bff',
  violetDim: 'rgba(155,139,255,0.16)',
  violetGlow:'rgba(155,139,255,0.10)',
  gold:      '#e8c36a',
  goldDim:   'rgba(232,195,106,0.16)',
};

// ─── Project Data ─────────────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: 'BiggMate',
    description: 'AI-powered co-foundership platform that matches entrepreneurs to build startups together. Successful startups earn a StartupOS Visa.',
    category: 'social',
    status: 'Pre-Launch',
    featured: true,
    liveUrl: 'https://biggmate.com',
    internalUrl: '/biggmate',
    tags: ['Co-Foundership', 'AI Matching', 'StartupOS Visa', 'Web Platform'],
    metrics: { 'Waitlist': '547+', 'Founders': '50+', 'Matches': '10+' },
  },
  {
    id: 3,
    title: 'ZeroHuman',
    description: 'AI human model platform offering photorealistic virtual models for brands. Eliminate costly photoshoots while scaling creative output.',
    category: 'ai',
    status: 'Pre-Launch',
    featured: true,
    liveUrl: 'https://www.zerohuman.co',
    tags: ['AI Models', 'Generative AI', 'E-Commerce', 'Computer Vision'],
    metrics: { 'Cost Savings': '90%', 'Interactions': '300%', 'Resolution': '4K' },
  },
  {
    id: 4,
    title: 'MealVerse',
    description: 'Next-generation food tech platform reimagining how people discover, order, and experience food across India.',
    category: 'foodtech',
    status: 'Pre-Launch',
    featured: true,
    liveUrl: 'https://www.mealverse.in',
    tags: ['FoodTech', 'Marketplace', 'Mobile', 'Logistics'],
    metrics: {'Providers Registered': '100+', 'Cities': '2+', 'waitlist': '500+'},
  },
  {
    id: 5,
    title: 'Finanshels',
    description: 'Financial management platform purpose-built for SMBs. Streamlines bookkeeping, compliance, and financial visibility in one dashboard.',
    category: 'fintech',
    status: 'Live',
    featured: true,
    liveUrl: 'https://finanshels.com',
    tags: ['FinTech', 'SMB Finance', 'Accounting', 'SaaS'],
    metrics: { 'Clients': '6000+', 'Team Size': '140+', 'Funding': '$1.5M' },
  },
  {
    id: 6,
    title: 'BAWES',
    description: 'Integrated business execution platform helping teams think, act, build, and grow faster with less operational friction.',
    category: 'technology',
    status: 'Live',
    featured: false,
    liveUrl: 'https://bawes.net/work',
    tags: ['Business OS', 'Execution', 'Growth Systems', 'Platform'],
    metrics: {'Startups': '6+'},
  },
  {
    id: 7,
    title: 'StudentHub',
    description: 'Student recruitment platform bridging the gap between top talent and leading companies, powering thousands of placements annually.',
    category: 'edtech',
    status: 'Live',
    featured: false,
    liveUrl: 'https://studenthub.co.in',
    tags: ['EdTech', 'Recruitment', 'Campus Hiring', 'Career Platform'],
    metrics: { 'Students': '25K+', 'Companies': '300+', 'Placements': '5K+' },
  },
  {
    id: 8,
    title: 'Plugn',
    description: 'Kuwait-based ecommerce platform enabling merchants to launch online stores fast, in the vein of Shopify and Dukaan.',
    category: 'technology',
    status: 'Live',
    featured: false,
    liveUrl: 'https://plugn.io/',
    tags: ['E-Commerce', 'Store Builder', 'Merchant Tools', 'Kuwait'],
    metrics: {'Stores': '5000+', 'GMV': '$2M+', 'Growth': '150%'},
  },
  {
    id: 9,
    title: 'TorchIt',
    description: 'Award-winning assistive technology company building smart devices for the visually impaired. 1678% growth and global recognition.',
    category: 'hardware',
    status: 'Live',
    featured: false,
    liveUrl: 'https://torchit.in',
    tags: ['Hardware', 'AssistiveTech', 'IoT', 'Social Impact'],
    metrics: { 'Units': '100K', 'Growth': '167.8%', 'CSR Projects Done': '17+' },
  },
  {
    id: 10,
    title: 'Kingstorm',
    description: 'Home automation startup building connected experiences for lighting, security, and everyday control across modern homes.',
    category: 'technology',
    status: 'Shut Down',
    featured: false,
    tags: ['Home Automation', 'Smart Homes', 'IoT', 'Connected Living'],
    metrics: {'Devices Installed': '170+', 'Team': '10+', 'Revenue': 'INR 750K+'},
  },
  {
    id: 11,
    title: 'Incsmart',
    description: 'Smart energy meter manufacturing startup creating intelligent metering hardware for utilities, industries, and energy-aware communities.',
    category: 'hardware',
    status: 'Exited',
    featured: false,
    tags: ['Smart Meters', 'EnergyTech', 'Manufacturing', 'IoT'],
    metrics: {'Meters Installed': '800+', 'Team': '15+', 'Revenue': 'INR 1M+'},
  },
];

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'social', label: 'Social' },
  { key: 'technology', label: 'Technology' },
  { key: 'ai', label: 'AI' },
  { key: 'fintech', label: 'FinTech' },
  { key: 'edtech', label: 'EdTech' },
  { key: 'foodtech', label: 'FoodTech' },
  { key: 'hardware', label: 'Hardware' },
];

const STATS = [
  { value: '10+', label: 'Ventures Built', icon: Briefcase },
  { value: '12K+', label: 'Lives Impacted', icon: Users },
  { value: '$1.5M+', label: 'Funding Raised', icon: Award },
  { value: '100%', label: 'Passion Driven', icon: Zap },
];

const portfolioStructuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Meet Patel Portfolio",
  "url": "https://themeetpatel.com/portfolio",
  "description": "Portfolio of ventures built, led, or shaped by The Meet Patel across startups, AI, fintech, hardware, software, and growth systems.",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": PROJECTS.map((project, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": project.title,
      "url": project.liveUrl || (project.internalUrl ? `https://themeetpatel.com${project.internalUrl}` : "https://themeetpatel.com/portfolio"),
      "description": project.description,
    })),
  },
};

// ─── Sub-components ───────────────────────────────────────────────────────────

const MetricChip = ({ label, value }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    background: C.violetDim,
    border: `1px solid ${C.border}`,
    borderRadius: '8px',
    padding: '6px 12px',
    minWidth: '64px',
  }}>
    <span style={{ fontSize: '13px', fontWeight: 700, color: C.violet, lineHeight: 1 }}>{value}</span>
    <span style={{ fontSize: '10px', color: C.muted, marginTop: '2px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</span>
  </div>
);

const StatusBadge = ({ status }) => {
  const isLive = status === 'Live';
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '5px',
      padding: '3px 10px',
      borderRadius: '20px',
      fontSize: '11px',
      fontWeight: 600,
      letterSpacing: '0.04em',
      textTransform: 'uppercase',
      background: isLive ? C.goldDim : 'rgba(90,90,110,0.2)',
      color: isLive ? C.gold : C.muted,
      border: `1px solid ${isLive ? 'rgba(232,195,106,0.3)' : 'rgba(90,90,110,0.3)'}`,
    }}>
      {isLive && (
        <span style={{
          width: '6px', height: '6px', borderRadius: '50%',
          background: C.gold,
          display: 'inline-block',
          animation: 'pulse 2s infinite',
        }} />
      )}
      {status}
    </span>
  );
};

const CategoryBadge = ({ category }) => (
  <span style={{
    padding: '3px 10px',
    borderRadius: '20px',
    fontSize: '11px',
    fontWeight: 600,
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    background: C.violetDim,
    color: C.violet,
    border: `1px solid ${C.border}`,
  }}>
    {category}
  </span>
);

const ProjectCard = ({ project, index, navigate }) => {
  const [hovered, setHovered] = useState(false);
  const metricEntries = Object.entries(project.metrics);
  const hasCta = Boolean(project.internalUrl || project.liveUrl);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24, scale: 0.96 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? C.elevated : C.surface,
        border: `1px solid ${hovered ? 'rgba(155,139,255,0.35)' : C.borderSub}`,
        borderRadius: '16px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        boxShadow: hovered ? `0 10px 44px rgba(155,139,255,0.14)` : 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Glow on hover */}
      {hovered && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(155,139,255,0.6), transparent)',
        }} />
      )}

      {/* Top row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', alignItems: 'center' }}>
          <CategoryBadge category={project.category} />
          <StatusBadge status={project.status} />
          {project.featured && (
            <span style={{
              padding: '3px 10px',
              borderRadius: '20px',
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              background: C.goldDim,
              color: C.gold,
              border: `1px solid rgba(232,195,106,0.32)`,
            }}>
              Featured
            </span>
          )}
        </div>
        <ExternalLink
          size={15}
          style={{ color: C.muted, flexShrink: 0, marginTop: '2px' }}
        />
      </div>

      {/* Title */}
      <div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 700,
          color: C.primary,
          letterSpacing: '-0.02em',
          margin: 0,
          lineHeight: 1.2,
        }}>
          {project.title}
        </h3>
      </div>

      {/* Description */}
      <p style={{
        fontSize: '14px',
        color: C.secondary,
        lineHeight: 1.65,
        margin: 0,
        flexGrow: 1,
      }}>
        {project.description}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
        {project.tags.map(tag => (
          <span key={tag} style={{
            fontSize: '11px',
            color: C.muted,
            background: 'rgba(255,255,255,0.04)',
            border: `1px solid ${C.borderSub}`,
            padding: '3px 9px',
            borderRadius: '6px',
          }}>
            {tag}
          </span>
        ))}
      </div>

      {/* Metrics */}
      {metricEntries.length > 0 && (
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {metricEntries.map(([label, value]) => (
            <MetricChip key={label} label={label} value={value} />
          ))}
        </div>
      )}

      {/* Footer CTA */}
      {hasCta && (
        <div style={{
          display: 'flex',
          gap: '10px',
          paddingTop: '4px',
          borderTop: `1px solid ${C.borderSub}`,
        }}>
          {project.internalUrl && (
            <button
              onClick={() => navigate(project.internalUrl)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                background: C.violetDim,
                border: `1px solid ${C.border}`,
                borderRadius: '8px',
                color: C.violet,
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              View Project <ArrowRight size={13} />
            </button>
          )}
          {project.liveUrl && (
            <button
              onClick={() => window.open(project.liveUrl, '_blank')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                background: 'transparent',
                border: `1px solid ${C.borderSub}`,
                borderRadius: '8px',
                color: C.secondary,
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              Live Site <ExternalLink size={12} />
            </button>
          )}
        </div>
      )}
    </motion.div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filtered = PROJECTS.filter(p => {
    const matchesFilter = activeFilter === 'all' || p.category === activeFilter;
    const q = searchTerm.toLowerCase();
    const matchesSearch =
      !q ||
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some(t => t.toLowerCase().includes(q)) ||
      p.category.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <SEOHead
        title="Portfolio — Meet Patel | Ventures, Products & Startups"
        description="10+ ventures built across AI, fintech, edtech, hardware, and social. From BAWES to BiggMate, each venture is built to last."
        keywords="The Meet Patel portfolio, Meet Patel startups, themeetpatel ventures, startup portfolio, BiggMate, ZeroHuman, TorchIt, Kingstorm, Incsmart, BAWES, Plugn, startup builder portfolio"
        canonical="/portfolio"
        structuredData={portfolioStructuredData}
      />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        * { box-sizing: border-box; }
      `}</style>

      <div style={{ background: C.bg, minHeight: '100vh', color: C.primary, fontFamily: 'system-ui, -apple-system, sans-serif' }}>

        {/* ── HERO ── */}
        <section style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '120px 24px 80px',
          position: 'relative',
        }}>
          {/* background glow */}
          <div style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '600px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(155,139,255,0.10) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ position: 'relative' }}
          >
            {/* Label */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: C.violetDim,
              border: `1px solid ${C.border}`,
              borderRadius: '100px',
              padding: '6px 16px',
              marginBottom: '32px',
            }}>
              <Briefcase size={13} color={C.violet} />
              <span style={{ fontSize: '12px', fontWeight: 600, color: C.violet, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Portfolio
              </span>
            </div>

            {/* Heading */}
            <h1 style={{
              fontSize: 'clamp(48px, 7vw, 88px)',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              margin: '0 0 24px',
              color: C.primary,
            }}>
              Built to{' '}
              <span style={{
                background: 'linear-gradient(135deg, #9b8bff, #b7a6ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Last.
              </span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: 'clamp(16px, 2vw, 20px)',
              color: C.secondary,
              maxWidth: '560px',
              lineHeight: 1.65,
              margin: '0 0 56px',
            }}>
              Ten ventures spanning AI, fintech, edtech, hardware, and social, each one built with conviction and a long-term horizon.
            </p>

            {/* Stats row */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '16px',
            }}>
              {STATS.map((stat) => {
                const IconComponent = stat.icon;
                return (
                <div key={stat.label} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: C.surface,
                  border: `1px solid ${C.borderSub}`,
                  borderRadius: '12px',
                  padding: '14px 20px',
                }}>
                  <div style={{
                    width: '36px', height: '36px',
                    background: C.violetDim,
                    borderRadius: '8px',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    {React.createElement(IconComponent, { size: 16, color: C.violet })}
                  </div>
                  <div>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: C.primary, lineHeight: 1 }}>{stat.value}</div>
                    <div style={{ fontSize: '12px', color: C.muted, marginTop: '2px' }}>{stat.label}</div>
                  </div>
                </div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* ── FILTERS + SEARCH ── */}
        <section style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px 48px',
        }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Search */}
            <div style={{ position: 'relative', maxWidth: '400px', marginBottom: '20px' }}>
              <Search
                size={15}
                style={{
                  position: 'absolute', left: '14px', top: '50%',
                  transform: 'translateY(-50%)',
                  color: C.muted, pointerEvents: 'none',
                }}
              />
              <input
                type="text"
                placeholder="Search projects…"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px 10px 40px',
                  background: C.surface,
                  border: `1px solid ${C.borderSub}`,
                  borderRadius: '10px',
                  color: C.primary,
                  fontSize: '14px',
                  outline: 'none',
                  transition: 'border-color 0.2s ease',
                }}
                onFocus={e => e.target.style.borderColor = C.violet}
                onBlur={e => e.target.style.borderColor = C.borderSub}
              />
            </div>

            {/* Filter pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {FILTERS.map(f => {
                const isActive = activeFilter === f.key;
                return (
                  <button
                    key={f.key}
                    onClick={() => setActiveFilter(f.key)}
                    style={{
                      padding: '7px 16px',
                      borderRadius: '100px',
                      fontSize: '13px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      background: isActive ? C.violet : C.surface,
                      color: isActive ? '#fff' : C.secondary,
                      border: `1px solid ${isActive ? C.violet : C.borderSub}`,
                      letterSpacing: '0.01em',
                    }}
                  >
                    {f.label}
                  </button>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* ── PROJECT GRID ── */}
        <section style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px 80px',
        }}>
          {/* Result count */}
          <div style={{ fontSize: '13px', color: C.muted, marginBottom: '24px' }}>
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
            {activeFilter !== 'all' && ` in ${activeFilter}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </div>

          <AnimatePresence mode="sync">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{
                  textAlign: 'center',
                  padding: '80px 24px',
                  color: C.muted,
                }}
              >
                <CheckCircle size={40} style={{ margin: '0 auto 16px', opacity: 0.3 }} />
                <p style={{ fontSize: '16px' }}>No projects match your search.</p>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                layout
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
                  gap: '20px',
                }}
              >
                <AnimatePresence>
                  {filtered.map((project, index) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={index}
                      navigate={navigate}
                    />
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* ── FOLLOW MY JOURNEY ── */}
        <div style={{ borderTop: `1px solid ${C.borderSub}` }}>
          <FollowMyJourney />
        </div>

      </div>
    </>
  );
};

export default PortfolioPage;
