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
import { PORTFOLIO } from '../data/pageVoice';
import FollowMyJourney from '../components/FollowMyJourney';
import { meetPatelEntities, personRef, buildBreadcrumb } from '../lib/seoEntity';
import { TRACTION } from '../data/company8';

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
    id: 5,
    title: 'Company 8',
    description: 'Autonomous decision intelligence. Dan connects your systems, reconciles conflicting data, and tells you what changed, why it matters and what to do next.',
    category: 'ai',
    status: 'Pre-Revenue',
    featured: true,
    liveUrl: 'https://usedan.com',
    tags: ['AI-Native BI', 'Analytics', 'Dan', 'First 10 weeks · zero paid'],
    // Pre-seed deck (2026) slide 12, via TRACTION in src/data/company8.js.
    metrics: TRACTION.chips,
  },
  {
    id: 13,
    title: 'Finanshels',
    description: 'UAE accounting, tax and compliance platform for SMEs. Joined as interim COO, then Head of COE, now Associate Vice President — scaled the company from 17 to 192 people and from 105 to 7,000+ SMEs served.',
    category: 'fintech',
    status: 'Live',
    featured: false,
    liveUrl: 'https://finanshels.com',
    tags: ['Accounting', 'Tax & Compliance', 'SME', 'UAE'],
    // Pre-seed deck (2026) slide 15, via POSITIONING.whyMe in src/data/company8.js.
    metrics: { 'Team': '17 → 192', 'SMEs Served': '7,000+' },
  },
  {
    id: 3,
    title: 'ZeroHuman',
    description: 'AI human model platform offering photorealistic virtual models for brands. Eliminate costly photoshoots while scaling creative output.',
    category: 'ai',
    status: 'Building',
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
    status: 'Live',
    featured: true,
    liveUrl: 'https://www.mealverse.in',
    tags: ['FoodTech', 'Marketplace', 'Mobile', 'Logistics'],
    metrics: {'Providers Registered': '100+', 'Cities': '2+', 'waitlist': '500+'},
  },
  {
    id: 6,
    title: 'BAWES',
    description: 'Integrated business execution platform helping teams think, act, build, and grow faster with less operational friction.',
    category: 'technology',
    status: 'Exited',
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
    status: 'Exited',
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
    status: 'Exited',
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
    status: 'Exited',
    featured: false,
    liveUrl: 'https://torchit.in',
    tags: ['Hardware', 'AssistiveTech', 'IoT', 'Social Impact'],
    metrics: { 'Units': '100K', 'Growth': '1,678%', 'CSR Projects Done': '17+' },
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
  {
    id: 12,
    title: 'BiggDate',
    description: 'AI-led dating app for intentional adults. Instead of a swipe feed, a relationship profiler named Maahi ran a 20-minute conversation, built a psychological profile, and surfaced a handful of high-fit matches a day.',
    category: 'social',
    status: 'Cancelled',
    featured: false,
    liveUrl: 'https://biggdate.com',
    tags: ['AI Dating', 'Matchmaking', 'Psychology', 'India'],
    // biggdate/docs/investor-due-diligence.md §16.1, dated 2026-05-03.
    metrics: { 'Beta Users': '40', 'Maahi Modes': '16' },
  },
  {
    id: 1,
    title: 'BiggMate',
    description: 'AI-powered co-foundership platform that matched entrepreneurs to build startups together. Successful startups earned a StartupOS Visa.',
    category: 'social',
    status: 'Cancelled',
    featured: false,
    liveUrl: 'https://biggmate.com',
    internalUrl: '/biggmate',
    tags: ['Co-Foundership', 'AI Matching', 'StartupOS Visa', 'Web Platform'],
    metrics: { 'Waitlist': '547+', 'Founders': '50+', 'Matches': '10+' },
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

const portfolioStructuredData = [
  // Person (worksFor Company 8) + Company 8 + Dan entities.
  ...meetPatelEntities,
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.themeetpatel.com/portfolio",
    "name": "Startups & Ventures by Meet Patel — Portfolio",
    "url": "https://www.themeetpatel.com/portfolio",
    "description": "Portfolio of 10+ ventures built and scaled by Meet Patel across AI, fintech, hardware, edtech, and software before founding Company 8.",
    "author": personRef,
    "creator": personRef,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": PROJECTS.map((project, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": project.title,
        "url": project.liveUrl || (project.internalUrl ? `https://www.themeetpatel.com${project.internalUrl}` : "https://www.themeetpatel.com/portfolio"),
        "description": project.description,
      })),
    },
  },
  buildBreadcrumb([
    { name: 'Home', url: '/' },
    { name: 'Portfolio', url: '/portfolio' },
  ]),
];

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
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
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
                textDecoration: 'none',
              }}
            >
              Live Site <ExternalLink size={12} />
            </a>
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
        title="Portfolio | The Meet Patel — Startups & Ventures Built by Meet Patel"
        description="Meet Patel has built and scaled 10+ startups — Company 8, BiggDate, BiggMate, ZeroHuman, TorchIt & more. Explore the full venture portfolio."
        keywords="The Meet Patel portfolio, Meet Patel startups, themeetpatel ventures, meetpatel portfolio, startup portfolio, Finanshels, BiggDate, BiggMate, ZeroHuman, TorchIt, Incsmart, BAWES, Plugn, startup builder, serial entrepreneur portfolio, ventures"
        canonical="/portfolio"
        structuredData={portfolioStructuredData}
      />

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        * { box-sizing: border-box; }

        /* Hero lockup. Below 1024px everything stacks; above it the stats sit
           beside the copy and bottom-align with it, so a wide viewport does not
           leave half the hero empty. */
        .pf-hero { display: grid; grid-template-columns: 1fr; gap: 40px; align-items: end; }
        .pf-hero-copy { min-width: 0; }
        .pf-hero-stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(160px, 1fr)); gap: 12px; }
        @media (min-width: 1024px) {
          .pf-hero { grid-template-columns: minmax(0, 1.4fr) minmax(340px, 0.6fr); gap: 64px; }
          .pf-hero-stats { grid-template-columns: 1fr 1fr; }
        }

        /* The H1 is set as two explicit lines. Left to wrap on its own it broke
           after "Ventures" and orphaned "by" on a line of its own, making three.
           Each line still wraps internally on narrow screens. */
        .pf-h1-line { display: block; }

        /* Value and label stack, so the label gets the card's full inner width.
           Sharing a row with the icon left ~68px and split every two-word label
           across two lines. */
        .pf-stat { display: flex; flex-direction: column; gap: 10px; }
        .pf-stat-head { display: flex; align-items: center; gap: 12px; }
        .pf-stat-label { white-space: nowrap; }
      `}</style>

      <div style={{ background: C.bg, minHeight: '100vh', color: C.primary, fontFamily: 'var(--font-sans-stack)' }}>

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

            <div className="pf-hero">
              <div className="pf-hero-copy">
                {/* Heading */}
                <h1 style={{
                  fontSize: 'clamp(40px, 6vw, 76px)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: 0.98,
                  margin: '0 0 20px',
                  color: C.primary,
                }}>
                  <span className="pf-h1-line">Startups &amp; Ventures</span>
                  <span className="pf-h1-line">
                    by{' '}
                    <span style={{
                      background: 'linear-gradient(135deg, #9b8bff, #b7a6ff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}>
                      Meet Patel
                    </span>
                  </span>
                </h1>

                {/* Styled subline — copy from pageVoice.PORTFOLIO */}
                <p style={{
                  fontSize: 'clamp(24px, 3.5vw, 40px)',
                  fontWeight: 800,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  margin: '0 0 28px',
                  color: C.primary,
                }}>
                  {PORTFOLIO.sublineLead}{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #9b8bff, #b7a6ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    {PORTFOLIO.sublineAccent}
                  </span>
                </p>

                {/* Subtitle */}
                <p style={{
                  fontSize: 'clamp(16px, 2vw, 20px)',
                  color: C.secondary,
                  maxWidth: '58ch',
                  lineHeight: 1.65,
                  margin: '0 0 18px',
                }}>
                  {PORTFOLIO.sub}
                </p>

                {/* Where the work goes now */}
                <p style={{
                  fontSize: 'clamp(15px, 1.7vw, 17px)',
                  color: C.muted,
                  maxWidth: '58ch',
                  lineHeight: 1.65,
                  margin: 0,
                }}>
                  {PORTFOLIO.nowLine.lead}{' '}
                  <span style={{ color: C.violet, fontWeight: 700 }}>Company 8</span>
                  {' '}{PORTFOLIO.nowLine.mid}{' '}
                  <span style={{ color: C.violet, fontWeight: 700 }}>Dan</span>
                  {PORTFOLIO.nowLine.tail}
                </p>

              </div>

              {/* Stats — beside the copy on desktop, stacked under it on mobile */}
              <div className="pf-hero-stats">
              {STATS.map((stat) => {
                const IconComponent = stat.icon;
                return (
                <div key={stat.label} className="pf-stat" style={{
                  background: C.surface,
                  border: `1px solid ${C.borderSub}`,
                  borderRadius: '12px',
                  padding: '14px 16px',
                }}>
                  <div className="pf-stat-head">
                    <div style={{
                      width: '36px', height: '36px', flexShrink: 0,
                      background: C.violetDim,
                      borderRadius: '8px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      {React.createElement(IconComponent, { size: 16, color: C.violet })}
                    </div>
                    <div style={{ fontSize: '18px', fontWeight: 700, color: C.primary, lineHeight: 1 }}>{stat.value}</div>
                  </div>
                  <div className="pf-stat-label" style={{ fontSize: '12px', color: C.muted }}>{stat.label}</div>
                </div>
                );
              })}
              </div>
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
                placeholder={PORTFOLIO.searchPlaceholder}
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
          {/* Section heading */}
          <h2 style={{
            fontSize: 'clamp(26px, 3vw, 36px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.1,
            margin: '0 0 8px',
            color: C.primary,
          }}>
            Featured Ventures
          </h2>
          <p style={{
            fontSize: '15px',
            color: C.secondary,
            lineHeight: 1.6,
            margin: '0 0 24px',
            maxWidth: '620px',
          }}>
            A selection of startups Meet Patel has built and scaled.
          </p>

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
                <p style={{ fontSize: '16px' }}>{PORTFOLIO.empty}</p>
              </motion.div>
            ) : (
              <motion.div
                key="grid"
                layout
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
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
