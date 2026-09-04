import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import {
  Heart,
  Shield,
  MessageCircle,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Globe,
  Camera,
  Users,
  XCircle,
  Clock,
  Target,
  Lock,
  Star,
  MapPin,
} from 'lucide-react';
import { submitWaitlistFormData } from '../services/formService';

void motion;

const C = {
  bg: '#120910',
  surface: '#1a0f18',
  elevated: '#241522',
  border: 'rgba(255,122,89,0.28)',
  borderSub: 'rgba(255,255,255,0.10)',
  primary: '#fff4f7',
  secondary: '#f2cad6',
  muted: '#c89eb0',
  rose: '#ff4f8b',
  coral: '#ff7a59',
  cherry: '#ff2e63',
  successBg: 'rgba(34,197,94,0.12)',
  successBorder: 'rgba(34,197,94,0.35)',
};

const highlights = [
  { icon: Heart, title: 'Meaningful Matches', text: 'Compatibility-first matching based on values, lifestyle, and relationship goals.' },
  { icon: Shield, title: 'Safer Dating', text: 'Profile trust checks, smart moderation, and intent signals to reduce low-quality interactions.' },
  { icon: MessageCircle, title: 'Conversation Prompts', text: 'Context-rich prompts that help people start better conversations faster.' },
  { icon: Sparkles, title: 'Quality Over Quantity', text: 'A few strong suggestions a day, chosen for fit.' },
];

const steps = [
  {
    icon: Camera,
    title: 'Build Your Profile',
    text: 'Share your interests, relationship intent, and vibe in under three minutes.',
  },
  {
    icon: Globe,
    title: 'Get Curated Matches',
    text: 'BiggDate surfaces curated people in your city who align with your energy and priorities.',
  },
  {
    icon: Users,
    title: 'Meet With Confidence',
    text: 'Use conversation guidance and safety features to move from chat to meaningful dates.',
  },
];

const problems = [
  {
    num: '01',
    icon: XCircle,
    title: 'Swipe Fatigue Is Real',
    body: 'Infinite swiping trains shallow decisions and burns attention without creating meaningful outcomes.',
    stat: 'Hours lost every week',
  },
  {
    num: '02',
    icon: Clock,
    title: 'Low-Intent Conversations',
    body: 'Most chats fade because expectations are unclear. People invest time before discovering mismatch.',
    stat: 'Majority of chats end in 48h',
  },
  {
    num: '03',
    icon: Shield,
    title: 'Safety Feels Reactive',
    body: 'Users often deal with moderation after damage is done. Trust should be built into the matching experience.',
    stat: 'Safe by design',
  },
];

const compatibilityPillars = [
  {
    icon: Target,
    title: 'Intent Alignment',
    text: 'Relationship goals, timeline, and clarity signals are weighted before profile aesthetics.',
  },
  {
    icon: Sparkles,
    title: 'Lifestyle Fit',
    text: 'Habits, social rhythm, communication style, and values create a deeper compatibility layer.',
  },
  {
    icon: MessageCircle,
    title: 'Conversation Quality',
    text: 'Prompted intros and context cards reduce dead starts and improve response quality.',
  },
  {
    icon: MapPin,
    title: 'Location Context',
    text: 'Smart city-aware pairing balances proximity with compatibility so matches are practical and meaningful.',
  },
];

const testimonials = [
  {
    quote: 'I deleted two apps after trying BiggDate. Conversations felt intentional from message one.',
    name: 'Naina R.',
    role: 'Early Access User',
    initials: 'NR',
  },
  {
    quote: 'The intent filter saved me from weeks of mismatch. I finally matched with people on the same page.',
    name: 'Karan M.',
    role: 'Product Designer',
    initials: 'KM',
  },
  {
    quote: 'BiggDate feels calmer. Fewer matches, better people, and less emotional noise.',
    name: 'Sana A.',
    role: 'Founder',
    initials: 'SA',
  },
];

const faqs = [
  {
    q: 'Is BiggDate a swipe app?',
    a: 'No. BiggDate focuses on curated, compatibility-first suggestions.',
  },
  {
    q: 'How do you improve match quality?',
    a: 'We combine intent, values, lifestyle fit, and conversation behavior to prioritize meaningful connections.',
  },
  {
    q: 'What safety features are built in?',
    a: 'Trust signals, profile quality checks, behavior flags, and conversation guardrails are built directly into the product flow.',
  },
];

const BiggDatePage = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleWaitlist = async (e) => {
    e.preventDefault();
    if (!email) return;

    await submitWaitlistFormData({
      email,
      product: 'biggdate',
    });

    window.open(`https://biggdate.com?email=${encodeURIComponent(email)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="BiggDate - Find Real Connections, Not Endless Swipes"
        description="BiggDate is a relationship-first dating platform focused on genuine compatibility, safer interactions, and meaningful conversations."
        keywords="BiggDate, dating app, meaningful dating, compatibility matching, safer dating, relationship app"
        canonical="/biggdate"
        ogTitle="BiggDate - Relationship-First Dating"
        ogDescription="Meet people who match your values. Join BiggDate waitlist."
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'BiggDate',
          applicationCategory: 'SocialNetworkingApplication',
          description: 'Relationship-first dating platform focused on meaningful compatibility and safer conversations.',
          url: 'https://biggdate.com',
          operatingSystem: 'Web',
          author: {
            '@type': 'Person',
            name: 'The Meet Patel',
            url: 'https://themeetpatel.com',
          },
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
            availability: 'https://schema.org/PreOrder',
          },
        }}
      />

      <style>{`
        * { box-sizing: border-box; }
        @keyframes pulseGlow {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.04); opacity: 0.65; }
        }
        @keyframes drift {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .biggdate-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 12px 34px rgba(255,79,139,0.35);
        }
        .biggdate-outline:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,122,89,0.45);
        }
        @media (max-width: 768px) {
          .biggdate-grid {
            grid-template-columns: 1fr !important;
          }
          .biggdate-hero {
            padding-top: 120px !important;
          }
          .biggdate-heading {
            line-height: 1.02 !important;
          }
        }
      `}</style>

      <div
        style={{
          minHeight: '100vh',
          background: `radial-gradient(1100px 500px at 50% -10%, rgba(255,79,139,0.20), transparent 62%),
                       radial-gradient(900px 460px at 88% 14%, rgba(255,122,89,0.16), transparent 60%),
                       ${C.bg}`,
          color: C.primary,
          overflowX: 'hidden',
          fontFamily: 'var(--font-sans-stack)',
        }}
      >
        <section
          className="biggdate-hero"
          style={{
            position: 'relative',
            maxWidth: '1120px',
            margin: '0 auto',
            padding: '140px 24px 90px',
          }}
        >
          <div
            style={{
              position: 'absolute',
              right: '-160px',
              top: '30px',
              width: '420px',
              height: '420px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,46,99,0.26), transparent 70%)',
              animation: 'pulseGlow 5s ease-in-out infinite',
              pointerEvents: 'none',
            }}
          />

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ position: 'relative', zIndex: 1 }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                border: `1px solid ${C.border}`,
                background: 'rgba(255,79,139,0.14)',
                borderRadius: '999px',
                padding: '7px 16px',
                marginBottom: '28px',
              }}
            >
              <Heart size={14} color={C.rose} />
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', color: C.rose, textTransform: 'uppercase' }}>
                BiggDate.com
              </span>
            </div>

            <h1
              className="biggdate-heading"
              style={{
                fontSize: 'clamp(46px, 9vw, 92px)',
                letterSpacing: '-0.045em',
                margin: '0 0 20px',
                fontWeight: 800,
                lineHeight: 0.92,
              }}
            >
              Date with
              <br />
              <span
                style={{
                  background: `linear-gradient(135deg, ${C.rose} 0%, ${C.cherry} 40%, ${C.coral} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                real intent.
              </span>
            </h1>

            <p
              style={{
                maxWidth: '620px',
                fontSize: 'clamp(17px, 2vw, 22px)',
                lineHeight: 1.6,
                color: C.secondary,
                margin: '0 0 34px',
              }}
            >
              BiggDate is a relationship-first platform designed for meaningful connections,
              better conversations, and safer dating experiences.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
              <button
                className="biggdate-cta"
                onClick={() => window.open('https://biggdate.com', '_blank')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '15px',
                  fontWeight: 700,
                  color: '#fff',
                  background: `linear-gradient(135deg, ${C.rose}, ${C.cherry})`,
                  transition: 'all 0.2s ease',
                }}
              >
                Visit BiggDate <ArrowRight size={16} />
              </button>

              <button
                className="biggdate-outline"
                onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '14px 28px',
                  borderRadius: '12px',
                  border: `1px solid ${C.borderSub}`,
                  cursor: 'pointer',
                  fontSize: '15px',
                  fontWeight: 600,
                  color: C.primary,
                  background: 'transparent',
                  transition: 'all 0.2s ease',
                }}
              >
                Join Waitlist
              </button>
            </div>

            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {["Compatibility-first", "Safety-focused", "No swipe fatigue"].map((label) => (
                <span
                  key={label}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: `1px solid ${C.borderSub}`,
                    borderRadius: '999px',
                    padding: '7px 12px',
                    fontSize: '12px',
                    color: C.muted,
                  }}
                >
                  {label}
                </span>
              ))}
            </div>
          </motion.div>
        </section>

        <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '24px 24px 36px' }}>
          <div className="biggdate-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '14px' }}>
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.borderSub}`,
                    borderRadius: '16px',
                    padding: '24px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(255,79,139,0.14)',
                      border: `1px solid ${C.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '14px',
                    }}
                  >
                    <Icon size={20} color={C.rose} />
                  </div>
                  <h3 style={{ margin: '0 0 8px', fontSize: '20px', letterSpacing: '-0.02em', color: C.primary }}>
                    {item.title}
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.65, color: C.secondary }}>
                    {item.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '26px 24px 28px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '24px' }}
          >
            <span style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.coral, fontWeight: 700 }}>
              The Problem
            </span>
            <h2 style={{ margin: '10px 0 0', fontSize: 'clamp(30px, 5vw, 54px)', letterSpacing: '-0.03em', lineHeight: 1.06 }}>
              Dating apps optimize for time spent.
            </h2>
          </motion.div>

          <div className="biggdate-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
            {problems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  style={{
                    background: C.surface,
                    border: `1px solid ${C.borderSub}`,
                    borderRadius: '16px',
                    padding: '24px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      right: '12px',
                      top: '0',
                      fontSize: '68px',
                      color: 'rgba(255,255,255,0.03)',
                      fontWeight: 800,
                      lineHeight: 1,
                    }}
                  >
                    {item.num}
                  </div>
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: 'rgba(255,122,89,0.14)',
                      border: `1px solid ${C.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '14px',
                    }}
                  >
                    <Icon size={20} color={C.coral} />
                  </div>
                  <h3 style={{ margin: '0 0 8px', fontSize: '20px', letterSpacing: '-0.02em' }}>{item.title}</h3>
                  <p style={{ margin: '0 0 14px', fontSize: '14px', lineHeight: 1.65, color: C.secondary }}>{item.body}</p>
                  <div style={{ display: 'inline-flex', padding: '6px 11px', borderRadius: '8px', background: 'rgba(255,79,139,0.14)', color: C.rose, fontSize: '12px', fontWeight: 700 }}>
                    {item.stat}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '44px 24px 70px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '30px' }}
          >
            <span style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.coral, fontWeight: 700 }}>
              How It Works
            </span>
            <h2 style={{ margin: '10px 0 0', fontSize: 'clamp(30px, 5vw, 54px)', letterSpacing: '-0.03em', lineHeight: 1.06 }}>
              Better dates in three simple steps.
            </h2>
          </motion.div>

          <div className="biggdate-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.06 }}
                  style={{
                    background: C.elevated,
                    border: `1px solid ${C.borderSub}`,
                    borderRadius: '16px',
                    padding: '24px',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      right: '-16px',
                      top: '-16px',
                      fontSize: '84px',
                      fontWeight: 800,
                      color: 'rgba(255,255,255,0.03)',
                      lineHeight: 1,
                    }}
                  >
                    {`0${index + 1}`}
                  </div>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '12px',
                      background: 'rgba(255,122,89,0.14)',
                      border: `1px solid ${C.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '14px',
                      animation: 'drift 4s ease-in-out infinite',
                      animationDelay: `${index * 0.4}s`,
                    }}
                  >
                    <Icon size={22} color={C.coral} />
                  </div>
                  <h3 style={{ margin: '0 0 8px', fontSize: '19px', letterSpacing: '-0.02em' }}>{step.title}</h3>
                  <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.65, color: C.secondary }}>{step.text}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '10px 24px 68px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '24px' }}
          >
            <span style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.coral, fontWeight: 700 }}>
              Compatibility Engine
            </span>
            <h2 style={{ margin: '10px 0 0', fontSize: 'clamp(30px, 5vw, 54px)', letterSpacing: '-0.03em', lineHeight: 1.06 }}>
              What BiggDate looks at before recommending a match.
            </h2>
          </motion.div>

          <div className="biggdate-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '14px' }}>
            {compatibilityPillars.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  style={{
                    background: C.elevated,
                    border: `1px solid ${C.borderSub}`,
                    borderRadius: '16px',
                    padding: '24px',
                  }}
                >
                  <div style={{ width: '46px', height: '46px', borderRadius: '10px', background: 'rgba(255,79,139,0.14)', border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px' }}>
                    <Icon size={20} color={C.rose} />
                  </div>
                  <h3 style={{ margin: '0 0 8px', fontSize: '20px', letterSpacing: '-0.02em' }}>{item.title}</h3>
                  <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.65, color: C.secondary }}>{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px 72px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            style={{
              background: C.surface,
              border: `1px solid ${C.border}`,
              borderRadius: '18px',
              padding: '26px',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 0%, rgba(255,79,139,0.14), transparent 68%)', pointerEvents: 'none' }} />
            <div style={{ position: 'relative', display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'space-between' }}>
              <div style={{ minWidth: '180px' }}>
                <div style={{ fontSize: '38px', fontWeight: 800, lineHeight: 1, color: C.rose }}>1K+</div>
                <div style={{ color: C.muted, fontSize: '13px', marginTop: '6px' }}>early waitlist signups</div>
              </div>
              <div style={{ minWidth: '180px' }}>
                <div style={{ fontSize: '38px', fontWeight: 800, lineHeight: 1, color: C.coral }}>300+</div>
                <div style={{ color: C.muted, fontSize: '13px', marginTop: '6px' }}>quality matches in pilot</div>
              </div>
              <div style={{ minWidth: '180px' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: C.primary, fontSize: '18px', fontWeight: 700 }}>
                  <Lock size={17} color={C.rose} /> Safety-first launch
                </div>
                <div style={{ color: C.muted, fontSize: '13px', marginTop: '8px' }}>trust checks and guardrails built in</div>
              </div>
            </div>
          </motion.div>
        </section>

        <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px 72px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '24px' }}
          >
            <span style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.coral, fontWeight: 700 }}>
              Early Voices
            </span>
            <h2 style={{ margin: '10px 0 0', fontSize: 'clamp(30px, 5vw, 54px)', letterSpacing: '-0.03em', lineHeight: 1.06 }}>
              People want less noise and more real connection.
            </h2>
          </motion.div>

          <div className="biggdate-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
            {testimonials.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                style={{
                  background: C.surface,
                  border: `1px solid ${C.borderSub}`,
                  borderRadius: '16px',
                  padding: '24px',
                }}
              >
                <div style={{ display: 'inline-flex', marginBottom: '10px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} color={C.coral} fill={C.coral} style={{ marginRight: 3 }} />
                  ))}
                </div>
                <p style={{ margin: '0 0 16px', fontSize: '14px', lineHeight: 1.65, color: C.secondary, fontStyle: 'italic' }}>
                  "{item.quote}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,79,139,0.16)', border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.rose, fontSize: '12px', fontWeight: 700 }}>
                    {item.initials}
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 700, color: C.primary }}>{item.name}</div>
                    <div style={{ fontSize: '12px', color: C.muted }}>{item.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section style={{ maxWidth: '1120px', margin: '0 auto', padding: '0 24px 72px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            style={{ marginBottom: '24px' }}
          >
            <span style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.coral, fontWeight: 700 }}>
              FAQ
            </span>
            <h2 style={{ margin: '10px 0 0', fontSize: 'clamp(30px, 5vw, 54px)', letterSpacing: '-0.03em', lineHeight: 1.06 }}>
              Questions people ask before joining.
            </h2>
          </motion.div>

          <div className="biggdate-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
            {faqs.map((item, index) => (
              <motion.div
                key={item.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                style={{
                  background: C.elevated,
                  border: `1px solid ${C.borderSub}`,
                  borderRadius: '14px',
                  padding: '20px',
                }}
              >
                <h3 style={{ margin: '0 0 8px', fontSize: '18px', letterSpacing: '-0.02em' }}>{item.q}</h3>
                <p style={{ margin: 0, fontSize: '14px', lineHeight: 1.65, color: C.secondary }}>{item.a}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="waitlist" style={{ maxWidth: '920px', margin: '0 auto', padding: '10px 24px 120px' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            style={{
              background: `linear-gradient(160deg, rgba(255,79,139,0.16), rgba(255,122,89,0.10))`,
              border: `1px solid ${C.border}`,
              borderRadius: '22px',
              padding: 'clamp(28px, 6vw, 56px)',
              textAlign: 'center',
            }}
          >
            <h2 style={{ margin: '0 0 10px', fontSize: 'clamp(30px, 5vw, 58px)', letterSpacing: '-0.04em', lineHeight: 1.02 }}>
              Ready for better dating?
            </h2>
            <p style={{ margin: '0 auto 28px', maxWidth: '520px', color: C.secondary, fontSize: '17px', lineHeight: 1.6 }}>
              Join early access and be the first to experience a platform built for meaningful relationships.
            </p>

            {!submitted ? (
              <form
                onSubmit={handleWaitlist}
                style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '12px' }}
              >
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    minWidth: '260px',
                    flex: '1 1 260px',
                    maxWidth: '420px',
                    borderRadius: '10px',
                    border: `1px solid ${C.borderSub}`,
                    background: 'rgba(20,10,16,0.78)',
                    color: C.primary,
                    padding: '13px 16px',
                    fontSize: '15px',
                    outline: 'none',
                  }}
                />
                <button
                  type="submit"
                  className="biggdate-cta"
                  style={{
                    borderRadius: '10px',
                    border: 'none',
                    padding: '13px 22px',
                    background: `linear-gradient(135deg, ${C.rose}, ${C.cherry})`,
                    color: '#fff',
                    fontSize: '15px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  Join Waitlist
                </button>
              </form>
            ) : (
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '9px',
                  padding: '12px 18px',
                  borderRadius: '10px',
                  background: C.successBg,
                  border: `1px solid ${C.successBorder}`,
                  color: '#22c55e',
                  fontWeight: 600,
                  marginBottom: '12px',
                }}
              >
                <CheckCircle size={18} /> You're on the early access list.
              </div>
            )}

            <p style={{ margin: 0, color: C.muted, fontSize: '13px' }}>
              Or visit{' '}
              <a href="https://biggdate.com" target="_blank" rel="noopener noreferrer" style={{ color: C.primary, fontWeight: 700, textDecoration: 'none' }}>
                biggdate.com
              </a>
            </p>
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default BiggDatePage;
