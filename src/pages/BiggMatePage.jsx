import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import {
  Users,
  Target,
  Zap,
  CheckCircle,
  ArrowRight,
  MessageSquare,
  Clock,
  XCircle,
  Lightbulb,
  Rocket,
  Heart,
  Award,
  Search,
  UserCheck,
  Bot,
} from 'lucide-react';

void motion;

// ─── Design Tokens ───────────────────────────────────────────────────────────
const C = {
  bg:        '#09090e',
  surface:   '#111118',
  elevated:  '#16161f',
  border:    'rgba(139,92,246,0.15)',
  borderSub: 'rgba(255,255,255,0.07)',
  primary:   '#f5f5f7',
  secondary: '#8e8ea0',
  muted:     '#5a5a6e',
  violet:    '#8b5cf6',
  violetDim: 'rgba(139,92,246,0.12)',
  violetMid: 'rgba(139,92,246,0.25)',
  gold:      '#d4a847',
  goldDim:   'rgba(212,168,71,0.12)',
  red:       '#ef4444',
  redDim:    'rgba(239,68,68,0.1)',
  orange:    '#f97316',
  orangeDim: 'rgba(249,115,22,0.1)',
  amber:     '#f59e0b',
  amberDim:  'rgba(245,158,11,0.1)',
};

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = (delay = 0.1) => ({
  show: { transition: { staggerChildren: delay } },
});

// ─── Data ─────────────────────────────────────────────────────────────────────
const PROBLEMS = [
  {
    num: '01',
    icon: XCircle,
    title: 'Wrong Connections',
    body: 'Endless networking without real alignment. You connect with people who look great on paper but lack the commitment or shared vision needed to build.',
    stat: '6+ months wasted per bad match',
    accent: C.red,
    dim: C.redDim,
  },
  {
    num: '02',
    icon: MessageSquare,
    title: 'Cofounder Conflicts',
    body: 'Mismatched working styles, values, or financial expectations tear teams apart. 65% of startups fail due to cofounder disputes — it\'s the #1 killer.',
    stat: '65% of startups fail this way',
    accent: C.orange,
    dim: C.orangeDim,
  },
  {
    num: '03',
    icon: Clock,
    title: 'Wasted Time & Money',
    body: 'Months of vetting with no efficient compatibility framework. No clear signal upfront. The clock ticks, runway burns, and the window narrows.',
    stat: 'Delayed launch and lost runway',
    accent: C.amber,
    dim: C.amberDim,
  },
];

const HOW_IT_WORKS = [
  {
    num: '01',
    icon: UserCheck,
    title: 'Create Profile',
    body: 'Share your vision, skills, experience, and what you\'re building. Your profile is your pitch to potential co-founders.',
  },
  {
    num: '02',
    icon: Bot,
    title: 'AI Matching',
    body: 'Our deep compatibility algorithm analyzes skills, personality, goals, and working style to surface your best co-founder candidates.',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Build Together',
    body: 'Connect, validate your idea, align on equity and roles, and launch your startup — with tools built for co-founder pairs.',
  },
];

const FEATURES = [
  {
    icon: Search,
    title: 'Pitch Home',
    subtitle: 'Discover startups looking for co-founders',
    body: 'Browse community pitches filtered by industry, stage, and role. The central marketplace where founders showcase their vision.',
    span: 1,
  },
  {
    icon: Bot,
    title: 'AI Matching',
    subtitle: 'Deep compatibility, not just skills',
    body: 'Our algorithm goes beyond résumés — it maps personality, communication style, and long-term ambition to find your real match.',
    span: 1,
  },
  {
    icon: Users,
    title: 'Duo Mode',
    subtitle: 'Built for co-founder pairs',
    body: 'Shared workspace, equity simulator, milestone tracker, and conflict resolution tools — everything two founders need to move fast together.',
    span: 2,
  },
  {
    icon: Target,
    title: 'Smart Filters',
    subtitle: 'Find exactly who you need',
    body: 'Filter by industry vertical, technical role, funding stage, geography, and commitment level.',
    span: 1,
  },
  {
    icon: Award,
    title: 'Verified Profiles',
    subtitle: 'Serious founders only',
    body: 'Every profile is authenticated. No lurkers, no idea tourists — just committed builders ready to build.',
    span: 1,
  },
  {
    icon: Zap,
    title: 'StartupOS Visa',
    subtitle: 'Graduate to the full ecosystem',
    body: 'Successful startups built on BiggMate earn a Visa to StartupOS — unlocking 50+ tools, investor networks, and community resources.',
    span: 2,
  },
];

const TESTIMONIALS = [
  {
    quote: "I spent 9 months on LinkedIn trying to find a technical co-founder. BiggMate matched me in a week with someone whose vision was identical to mine. We just filed our company.",
    name: 'Aryan Mehta',
    role: 'Founder, stealth fintech',
    initials: 'AM',
  },
  {
    quote: "The AI matching isn't a gimmick. It flagged a co-founder whose values and risk tolerance aligned perfectly with mine. We haven't had a single conflict in 4 months of building.",
    name: 'Priya Singh',
    role: 'CEO, consumer health app',
    initials: 'PS',
  },
  {
    quote: "Finally a platform that understands co-founder chemistry. The duo mode tools helped us resolve equity early, before it became a problem. That alone is worth the waitlist.",
    name: 'Rohan Kapoor',
    role: 'CTO, B2B SaaS startup',
    initials: 'RK',
  },
];

const STATS_HERO = [
  { value: '547+', label: 'Founders' },
  { value: '50+', label: 'Matches' },
  { value: '10+', label: 'Startups Forming' },
];

// ─── Main Component ───────────────────────────────────────────────────────────
const BiggMatePage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlist = (e) => {
    e.preventDefault();
    if (email) {
      window.open(`https://www.biggmate.com?email=${encodeURIComponent(email)}`, '_blank');
      setSubmitted(true);
    }
  };

  return (
    <>
      <SEOHead
        title="BiggMate — Find Your Co-Founder | AI-Powered Matching"
        description="BiggMate is the AI-powered co-founder matching platform by The Meet Patel, helping founders find aligned startup partners and build better ventures together."
        keywords="BiggMate, cofounder matching, startup cofounder, find cofounder, AI matching, entrepreneur networking, The Meet Patel, Meet Patel startups"
        canonical="/biggmate"
        ogTitle="BiggMate — Find Your Co-Founder"
        ogDescription="AI-powered co-founder matching. 547+ founders on the waitlist. Don't build alone."
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'BiggMate',
          applicationCategory: 'BusinessApplication',
          description: 'AI-powered co-founder matching platform connecting entrepreneurs to build startups together.',
          url: 'https://www.biggmate.com',
          operatingSystem: 'Web',
          author: { '@type': 'Person', name: 'The Meet Patel', url: 'https://themeetpatel.com' },
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD', availability: 'https://schema.org/PreOrder' },
        }}
      />

      <style>{`
        * { box-sizing: border-box; }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.85); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .waitlist-input:focus {
          outline: none;
          border-color: ${C.violet} !important;
        }
        .cta-btn:hover {
          background: #7c3aed !important;
          transform: translateY(-1px);
          box-shadow: 0 8px 30px rgba(139,92,246,0.35) !important;
        }
        .outline-btn:hover {
          background: rgba(139,92,246,0.1) !important;
          border-color: rgba(139,92,246,0.5) !important;
          color: ${C.primary} !important;
        }
      `}</style>

      <div style={{
        background: C.bg,
        minHeight: '100vh',
        color: C.primary,
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
        overflowX: 'hidden',
      }}>

        {/* ═══════════════════════════════════════════
            HERO
        ═══════════════════════════════════════════ */}
        <section style={{
          position: 'relative',
          padding: '140px 24px 100px',
          textAlign: 'center',
          overflow: 'hidden',
        }}>
          {/* Radial violet glow */}
          <div style={{
            position: 'absolute',
            top: '5%',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '900px',
            height: '600px',
            background: 'radial-gradient(ellipse at center, rgba(139,92,246,0.12) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)',
            pointerEvents: 'none',
          }} />
          {/* Grid overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
            pointerEvents: 'none',
            maskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 100%)',
          }} />

          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            <motion.div
              variants={stagger(0.12)}
              initial="hidden"
              animate="show"
            >
              {/* Status badge */}
              <motion.div variants={fadeUp} style={{ marginBottom: '32px' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: C.goldDim,
                  border: `1px solid rgba(212,168,71,0.3)`,
                  borderRadius: '100px',
                  padding: '8px 20px',
                }}>
                  <Heart size={13} color={C.gold} />
                  <span style={{
                    fontSize: '13px',
                    fontWeight: 600,
                    color: C.gold,
                    letterSpacing: '0.03em',
                  }}>
                    Launching Valentine's Day 2026
                  </span>
                </div>
              </motion.div>

              {/* Headline */}
              <motion.h1 variants={fadeUp} style={{
                fontSize: 'clamp(52px, 8vw, 96px)',
                fontWeight: 800,
                letterSpacing: '-0.045em',
                lineHeight: 0.92,
                margin: '0 0 28px',
              }}>
                <span style={{ color: C.primary }}>Find Your</span>
                <br />
                <span style={{
                  background: 'linear-gradient(135deg, #d4a847 0%, #f5c842 40%, #8b5cf6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Co-Founder.
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p variants={fadeUp} style={{
                fontSize: 'clamp(17px, 2.2vw, 21px)',
                color: C.secondary,
                lineHeight: 1.6,
                maxWidth: '560px',
                margin: '0 auto 40px',
              }}>
                The AI-powered platform that matches entrepreneurs to build startups together.{' '}
                <strong style={{ color: C.primary, fontWeight: 600 }}>547+ founders on the waitlist.</strong>
              </motion.p>

              {/* Stat pills */}
              <motion.div variants={fadeUp} style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '12px',
                flexWrap: 'wrap',
                marginBottom: '44px',
              }}>
                {STATS_HERO.map(({ value, label }) => (
                  <div key={label} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: C.surface,
                    border: `1px solid ${C.borderSub}`,
                    borderRadius: '100px',
                    padding: '8px 18px',
                  }}>
                    <span style={{ fontSize: '15px', fontWeight: 700, color: C.violet }}>{value}</span>
                    <span style={{ fontSize: '13px', color: C.muted }}>{label}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTAs */}
              <motion.div variants={fadeUp} style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '12px',
                flexWrap: 'wrap',
              }}>
                <button
                  className="cta-btn"
                  onClick={() => window.open('https://www.biggmate.com', '_blank')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 32px',
                    background: C.violet,
                    border: 'none',
                    borderRadius: '12px',
                    color: '#fff',
                    fontSize: '16px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Join Waitlist <ArrowRight size={16} />
                </button>
                <button
                  className="outline-btn"
                  onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '14px 32px',
                    background: 'transparent',
                    border: `1px solid ${C.borderSub}`,
                    borderRadius: '12px',
                    color: C.secondary,
                    fontSize: '16px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Learn More
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════
            PROBLEMS SECTION
        ═══════════════════════════════════════════ */}
        <section style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '80px 24px',
        }}>
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} style={{ marginBottom: '56px' }}>
              <span style={{
                fontSize: '12px',
                fontWeight: 700,
                color: C.violet,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}>
                The Problem
              </span>
              <h2 style={{
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                margin: '12px 0 16px',
                color: C.primary,
              }}>
                Finding a co-founder is broken.
              </h2>
              <p style={{ fontSize: '18px', color: C.secondary, maxWidth: '520px' }}>
                Founders waste months on misaligned partnerships. Here's why.
              </p>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '16px',
            }}>
              {PROBLEMS.map((p) => {
                const Icon = p.icon;
                return (
                  <motion.div
                    key={p.num}
                    variants={fadeUp}
                    style={{
                      background: C.surface,
                      border: `1px solid ${C.borderSub}`,
                      borderRadius: '16px',
                      padding: '32px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Number watermark */}
                    <div style={{
                      position: 'absolute',
                      top: '-10px',
                      right: '20px',
                      fontSize: '80px',
                      fontWeight: 900,
                      color: 'rgba(255,255,255,0.03)',
                      lineHeight: 1,
                      userSelect: 'none',
                      letterSpacing: '-0.05em',
                    }}>
                      {p.num}
                    </div>

                    <div style={{
                      width: '44px', height: '44px',
                      background: p.dim,
                      borderRadius: '10px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '20px',
                    }}>
                      <Icon size={20} color={p.accent} />
                    </div>

                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: C.primary,
                      margin: '0 0 12px',
                      letterSpacing: '-0.02em',
                    }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: '15px', color: C.secondary, lineHeight: 1.65, margin: '0 0 20px' }}>
                      {p.body}
                    </p>
                    <div style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '6px 12px',
                      background: p.dim,
                      borderRadius: '8px',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: p.accent,
                      letterSpacing: '0.02em',
                    }}>
                      {p.stat}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════
            HOW IT WORKS
        ═══════════════════════════════════════════ */}
        <section id="how-it-works" style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '80px 24px',
        }}>
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} style={{ textAlign: 'center', marginBottom: '64px' }}>
              <span style={{
                fontSize: '12px', fontWeight: 700, color: C.violet,
                letterSpacing: '0.12em', textTransform: 'uppercase',
              }}>How It Works</span>
              <h2 style={{
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                margin: '12px 0 0',
                color: C.primary,
              }}>
                Three steps to your co-founder.
              </h2>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '0',
              position: 'relative',
            }}>
              {/* Connecting line */}
              <div style={{
                position: 'absolute',
                top: '48px',
                left: '15%',
                right: '15%',
                height: '1px',
                background: `linear-gradient(90deg, transparent, ${C.violet}, transparent)`,
                opacity: 0.3,
                pointerEvents: 'none',
              }} />

              {HOW_IT_WORKS.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.num}
                    variants={fadeUp}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      padding: '0 24px 40px',
                      position: 'relative',
                    }}
                  >
                    {/* Step circle */}
                    <div style={{
                      width: '80px', height: '80px',
                      background: C.surface,
                      border: `2px solid ${C.border}`,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                      position: 'relative',
                      zIndex: 1,
                      animation: 'float 4s ease-in-out infinite',
                      animationDelay: `${i * 0.8}s`,
                    }}>
                      <Icon size={28} color={C.violet} />
                    </div>

                    {/* Number */}
                    <span style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: C.muted,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                    }}>
                      {step.num}
                    </span>

                    <h3 style={{
                      fontSize: '20px',
                      fontWeight: 700,
                      color: C.primary,
                      margin: '0 0 12px',
                      letterSpacing: '-0.02em',
                    }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '15px', color: C.secondary, lineHeight: 1.65, margin: 0 }}>
                      {step.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════
            FEATURES — BENTO GRID
        ═══════════════════════════════════════════ */}
        <section style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '80px 24px',
        }}>
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={fadeUp} style={{ marginBottom: '56px' }}>
              <span style={{
                fontSize: '12px', fontWeight: 700, color: C.violet,
                letterSpacing: '0.12em', textTransform: 'uppercase',
              }}>Features</span>
              <h2 style={{
                fontSize: 'clamp(32px, 4vw, 52px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                margin: '12px 0 0',
                color: C.primary,
              }}>
                Everything co-founders need.
              </h2>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px',
            }}>
              {FEATURES.map((feat) => {
                const Icon = feat.icon;
                const isWide = feat.span === 2;
                return (
                  <motion.div
                    key={feat.title}
                    variants={fadeUp}
                    style={{
                      gridColumn: isWide ? '1 / -1' : undefined,
                      background: C.surface,
                      border: `1px solid ${C.borderSub}`,
                      borderRadius: '16px',
                      padding: '32px',
                      display: 'flex',
                      flexDirection: isWide ? 'row' : 'column',
                      gap: isWide ? '32px' : '20px',
                      alignItems: isWide ? 'center' : 'flex-start',
                      transition: 'border-color 0.2s ease',
                    }}
                  >
                    <div style={{
                      width: '52px', height: '52px', flexShrink: 0,
                      background: C.violetDim,
                      border: `1px solid ${C.border}`,
                      borderRadius: '12px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={22} color={C.violet} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        color: C.primary,
                        margin: '0 0 4px',
                        letterSpacing: '-0.02em',
                      }}>
                        {feat.title}
                      </h3>
                      <p style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        color: C.violet,
                        margin: '0 0 10px',
                        letterSpacing: '0.02em',
                      }}>
                        {feat.subtitle}
                      </p>
                      <p style={{ fontSize: '14px', color: C.secondary, lineHeight: 1.65, margin: 0 }}>
                        {feat.body}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════
            SOCIAL PROOF
        ═══════════════════════════════════════════ */}
        <section style={{
          maxWidth: '1100px',
          margin: '0 auto',
          padding: '80px 24px',
        }}>
          <motion.div
            variants={stagger()}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Stats banner */}
            <motion.div variants={fadeUp} style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: '16px',
              padding: '32px',
              display: 'flex',
              justifyContent: 'space-around',
              flexWrap: 'wrap',
              gap: '24px',
              marginBottom: '48px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Subtle glow */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.07), transparent 70%)',
                pointerEvents: 'none',
              }} />
              <div style={{ position: 'relative' }}>
                <div style={{ fontSize: '40px', fontWeight: 800, color: C.violet, letterSpacing: '-0.04em', lineHeight: 1 }}>547+</div>
                <div style={{ fontSize: '13px', color: C.muted, marginTop: '6px' }}>founders already waiting</div>
              </div>
              <div style={{ width: '1px', background: C.borderSub, position: 'relative' }} />
              <div style={{ position: 'relative' }}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  fontSize: '18px', fontWeight: 700, color: C.gold,
                }}>
                  <span style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    background: C.gold, display: 'inline-block',
                    animation: 'pulse-dot 2s infinite',
                  }} />
                  Launching Valentine's Day 2026
                </div>
                <div style={{ fontSize: '13px', color: C.muted, marginTop: '6px' }}>mark your calendar</div>
              </div>
              <div style={{ width: '1px', background: C.borderSub, position: 'relative' }} />
              <div style={{ position: 'relative' }}>
                <div style={{ fontSize: '40px', fontWeight: 800, color: C.violet, letterSpacing: '-0.04em', lineHeight: 1 }}>10+</div>
                <div style={{ fontSize: '13px', color: C.muted, marginTop: '6px' }}>startups already forming</div>
              </div>
            </motion.div>

            {/* Testimonials */}
            <motion.div variants={fadeUp} style={{ marginBottom: '16px' }}>
              <span style={{
                fontSize: '12px', fontWeight: 700, color: C.violet,
                letterSpacing: '0.12em', textTransform: 'uppercase',
              }}>Beta Voices</span>
              <h2 style={{
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                margin: '12px 0 40px',
                color: C.primary,
              }}>
                Founders are excited.
              </h2>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '16px',
            }}>
              {TESTIMONIALS.map((t) => (
                <motion.div key={t.name} variants={fadeUp} style={{
                  background: C.surface,
                  border: `1px solid ${C.borderSub}`,
                  borderRadius: '16px',
                  padding: '28px',
                }}>
                  {/* Quote mark */}
                  <div style={{
                    fontSize: '48px',
                    lineHeight: 0.8,
                    color: C.violet,
                    opacity: 0.4,
                    marginBottom: '16px',
                    fontFamily: 'Georgia, serif',
                  }}>
                    "
                  </div>
                  <p style={{
                    fontSize: '15px',
                    color: C.secondary,
                    lineHeight: 1.7,
                    margin: '0 0 24px',
                    fontStyle: 'italic',
                  }}>
                    {t.quote}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '40px', height: '40px',
                      background: C.violetDim,
                      border: `1px solid ${C.border}`,
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '13px', fontWeight: 700, color: C.violet,
                    }}>
                      {t.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 700, color: C.primary }}>{t.name}</div>
                      <div style={{ fontSize: '12px', color: C.muted }}>{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* ═══════════════════════════════════════════
            CTA SECTION
        ═══════════════════════════════════════════ */}
        <section style={{ padding: '80px 24px 120px' }}>
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ maxWidth: '720px', margin: '0 auto' }}
          >
            <div style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: '24px',
              padding: 'clamp(40px, 6vw, 72px)',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Violet glow */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'radial-gradient(ellipse at 50% 0%, rgba(139,92,246,0.14), transparent 65%)',
                pointerEvents: 'none',
              }} />
              {/* Top border glow */}
              <div style={{
                position: 'absolute', top: 0, left: '10%', right: '10%', height: '1px',
                background: `linear-gradient(90deg, transparent, ${C.violet}, transparent)`,
              }} />

              <div style={{ position: 'relative' }}>
                {/* Icon */}
                <div style={{
                  width: '64px', height: '64px',
                  background: C.violetDim,
                  border: `1px solid ${C.border}`,
                  borderRadius: '16px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 28px',
                }}>
                  <Users size={28} color={C.violet} />
                </div>

                <h2 style={{
                  fontSize: 'clamp(32px, 5vw, 56px)',
                  fontWeight: 800,
                  letterSpacing: '-0.04em',
                  lineHeight: 1.05,
                  margin: '0 0 16px',
                  color: C.primary,
                }}>
                  Don't Build Alone.
                </h2>
                <p style={{
                  fontSize: '18px',
                  color: C.secondary,
                  lineHeight: 1.6,
                  margin: '0 0 40px',
                  maxWidth: '460px',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                }}>
                  Join 547+ founders who are done doing it the hard way. Your co-founder is one match away.
                </p>

                {/* Waitlist form */}
                {!submitted ? (
                  <form
                    onSubmit={handleWaitlist}
                    style={{
                      display: 'flex',
                      gap: '10px',
                      maxWidth: '440px',
                      margin: '0 auto 24px',
                      flexWrap: 'wrap',
                    }}
                  >
                    <input
                      type="email"
                      className="waitlist-input"
                      placeholder="you@yourcompany.com"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      required
                      style={{
                        flex: '1 1 220px',
                        padding: '13px 18px',
                        background: C.elevated,
                        border: `1px solid ${C.borderSub}`,
                        borderRadius: '10px',
                        color: C.primary,
                        fontSize: '15px',
                        transition: 'border-color 0.2s ease',
                      }}
                    />
                    <button
                      type="submit"
                      className="cta-btn"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '7px',
                        padding: '13px 24px',
                        background: C.violet,
                        border: 'none',
                        borderRadius: '10px',
                        color: '#fff',
                        fontSize: '15px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Join Waitlist <ArrowRight size={15} />
                    </button>
                  </form>
                ) : (
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    background: 'rgba(34,197,94,0.1)',
                    border: '1px solid rgba(34,197,94,0.25)',
                    borderRadius: '12px',
                    padding: '14px 24px',
                    color: '#22c55e',
                    fontSize: '15px',
                    fontWeight: 600,
                    marginBottom: '24px',
                  }}>
                    <CheckCircle size={18} />
                    You're on the list. We'll be in touch.
                  </div>
                )}

                <div style={{ fontSize: '13px', color: C.muted }}>
                  Or visit{' '}
                  <a
                    href="https://www.biggmate.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: C.violet, textDecoration: 'none', fontWeight: 600 }}
                  >
                    biggmate.com
                  </a>
                  {' '}directly
                </div>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </>
  );
};

export default BiggMatePage;
