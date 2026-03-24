import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageCircle, CheckCircle, X, ArrowRight, Users, Star, Award,
  Heart, Zap, BookOpen, Calendar, Linkedin, Twitter, Github,
  Instagram, Youtube, TrendingUp, Target, Briefcase, Send
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

void motion;

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const COLORS = {
  bg: '#07070d',
  surface: '#0d0e16',
  elevated: '#151725',
  border: 'rgba(255,255,255,0.08)',
  borderHover: '#9b8bff',
  textPrimary: '#f7f7fb',
  textSecondary: '#a8a9c3',
  textMuted: '#70728d',
  violet: '#9b8bff',
  violetDim: 'rgba(155,139,255,0.16)',
  violetGlow: 'rgba(155,139,255,0.25)',
  gold: '#e8c36a',
  goldDim: 'rgba(232,195,106,0.16)',
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.08, ease: [0.25, 0.46, 0.45, 0.94] } }),
};

const benefits = [
  { icon: TrendingUp, title: 'Exclusive Insights', desc: 'Daily market trends, startup signals, and curated intelligence you will not find anywhere else.' },
  { icon: Users,      title: 'Expert Access',      desc: 'Direct line to seasoned mentors, domain experts, and operators who have built what you are building.' },
  { icon: Heart,      title: 'Peer Network',        desc: 'Surround yourself with 500+ founders who understand the grind, share resources, and hold each other accountable.' },
  { icon: Briefcase,  title: 'Funding Opportunities', desc: 'Early access to investor introductions, pitch prep sessions, and warm connections that move the needle.' },
  { icon: BookOpen,   title: 'Masterclasses',       desc: 'Live workshops, deep-dive Q&As, and recorded sessions covering every stage of the startup journey.' },
  { icon: Award,      title: 'Career Opportunities', desc: 'Exclusive job referrals, talent spotlights, and co-founder matching for builders inside the network.' },
];

const testimonials = [
  { quote: 'The StartupOS community changed how I approach my startup. The daily discussions alone are worth more than any course I have taken.', name: 'Priya S.', role: 'Founder, EdTech Startup' },
  { quote: 'I met my first investor through this community three weeks after joining. The network here is genuinely world-class.', name: 'Arjun M.', role: 'Co-Founder, FinTech' },
  { quote: "Meet's insights are unmatched. This community is gold — every conversation pushes me to think bigger and execute smarter.", name: 'Riya K.', role: 'CEO, SaaS Platform' },
];

export default function CommunityPage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [formData, setFormData] = useState({
    linkedinId: '', email: '', whatsapp: '', businessName: '', role: '', reason: '',
  });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const message = `Hi Meet! I want to join the StartupOS WhatsApp community.\n\nHere are my details:\n• LinkedIn: ${formData.linkedinId}\n• Email: ${formData.email}\n• WhatsApp: ${formData.whatsapp}\n• Business: ${formData.businessName}\n• Role: ${formData.role}\n• Reason: ${formData.reason}\n\nPlease add me to the community!`;
      const encodedMessage = encodeURIComponent(message);
      window.open(`https://wa.me/919824341414?text=${encodedMessage}`, '_blank');
      setIsFormOpen(false);
      setFormData({ linkedinId: '', email: '', whatsapp: '', businessName: '', role: '', reason: '' });
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputStyle = {
    width: '100%',
    background: COLORS.elevated,
    border: `1px solid ${COLORS.border}`,
    borderRadius: 10,
    padding: '12px 16px',
    color: COLORS.textPrimary,
    fontSize: 14,
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
    transition: 'border-color 0.2s',
  };

  const labelStyle = {
    display: 'block',
    fontSize: 13,
    fontWeight: 500,
    color: COLORS.textSecondary,
    marginBottom: 6,
    letterSpacing: '0.01em',
  };

  return (
    <>
      <SEOHead
        title="Founder Community | The Meet Patel — Join 500+ Startup Founders"
        description="Join The Meet Patel's StartupOS community — 500+ founders, daily startup discussions, expert access, and founder networking. Built by Meet Patel (themeetpatel) for serious entrepreneurs."
        keywords="The Meet Patel community, Meet Patel founder community, themeetpatel startup community, StartupOS community, startup founders network, Dubai entrepreneur community, founder networking, startup WhatsApp group, entrepreneurship community"
        canonical="/community"
        structuredData={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': 'https://www.themeetpatel.com/community#org',
            name: 'StartupOS Community by The Meet Patel',
            description: 'A community of 500+ founders created by The Meet Patel (Meet Patel / themeetpatel) for startup conversations, founder networking, operator insights, and practical support for ambitious entrepreneurs.',
            url: 'https://www.themeetpatel.com/community',
            founder: {
              '@type': 'Person',
              '@id': 'https://www.themeetpatel.com/#person',
              name: 'The Meet Patel',
              alternateName: ['Meet Patel', 'themeetpatel'],
              url: 'https://www.themeetpatel.com',
            },
            about: [
              { '@type': 'Thing', name: 'Startups' },
              { '@type': 'Thing', name: 'Entrepreneurship' },
              { '@type': 'Thing', name: 'Founder Networking' },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.themeetpatel.com/' },
              { '@type': 'ListItem', position: 2, name: 'Community', item: 'https://www.themeetpatel.com/community' },
            ],
          },
        ]}
      />

      <div style={{ background: COLORS.bg, minHeight: '100vh', fontFamily: 'inherit' }}>

        {/* ── HERO ── */}
        <section style={{ position: 'relative', overflow: 'hidden', paddingTop: 120, paddingBottom: 100 }}>
          {/* Violet glow */}
          <div style={{
            position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)',
            width: 700, height: 500, borderRadius: '50%',
            background: 'radial-gradient(ellipse, rgba(155,139,255,0.20) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 24px', textAlign: 'center', position: 'relative' }}>
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                background: COLORS.violetDim, border: `1px solid rgba(155,139,255,0.32)`,
                borderRadius: 999, padding: '6px 16px', marginBottom: 28,
                fontSize: 12, fontWeight: 600, letterSpacing: '0.12em',
                textTransform: 'uppercase', color: COLORS.violet,
              }}>
                <Users size={13} />
                Community
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1}
              style={{ fontSize: 'clamp(42px, 7vw, 80px)', fontWeight: 800, lineHeight: 1.08, margin: '0 0 24px', letterSpacing: '-0.03em', color: COLORS.textPrimary }}>
              Join the{' '}
              <span style={{ color: COLORS.gold }}>StartupOS</span>{' '}
              Community
            </motion.h1>

            <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2}
              style={{ fontSize: 20, color: COLORS.textSecondary, maxWidth: 520, margin: '0 auto 48px', lineHeight: 1.6 }}>
              500+ entrepreneurs. Daily discussions. Exclusive access.
            </motion.p>

            {/* Stat chips */}
            <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3}
              style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
              {[
                { icon: Users, label: '500+ Members' },
                { icon: MessageCircle, label: '50+ Daily Discussions' },
                { icon: Zap, label: '24/7 Support' },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                <div key={item.label} style={{
                  display: 'flex', alignItems: 'center', gap: 8,
                  background: COLORS.surface, border: `1px solid ${COLORS.border}`,
                  borderRadius: 999, padding: '10px 20px',
                  fontSize: 14, fontWeight: 500, color: COLORS.textSecondary,
                }}>
                  {React.createElement(IconComponent, { size: 15, style: { color: COLORS.violet } })}
                  {item.label}
                </div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ── BENEFITS BENTO GRID ── */}
        <section style={{ maxWidth: 1120, margin: '0 auto', padding: '0 24px 100px' }}>
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
            style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 700, color: COLORS.textPrimary, margin: '0 0 12px', letterSpacing: '-0.02em' }}>
              Why entrepreneurs love this community
            </h2>
            <p style={{ fontSize: 16, color: COLORS.textSecondary, margin: 0 }}>
              Built for founders who are serious about building something real.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 16 }}>
            {benefits.map((benefit, i) => {
              const IconComponent = benefit.icon;
              return (
              <motion.div
                key={benefit.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
                whileHover={{ y: -4, borderColor: COLORS.violet }}
                style={{
                  background: COLORS.surface, border: `1px solid ${COLORS.border}`,
                  borderRadius: 16, padding: '28px 28px 30px',
                  cursor: 'default', transition: 'border-color 0.25s',
                }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: COLORS.violetDim, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18,
                }}>
                  {React.createElement(IconComponent, { size: 20, style: { color: COLORS.violet } })}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: COLORS.textPrimary, margin: '0 0 10px', letterSpacing: '-0.01em' }}>
                  {benefit.title}
                </h3>
                <p style={{ fontSize: 14, color: COLORS.textSecondary, margin: 0, lineHeight: 1.65 }}>
                  {benefit.desc}
                </p>
              </motion.div>
              );
            })}
          </div>
        </section>

        {/* ── TESTIMONIALS ── */}
        <section style={{ background: COLORS.surface, borderTop: `1px solid ${COLORS.border}`, borderBottom: `1px solid ${COLORS.border}`, padding: '80px 24px' }}>
          <div style={{ maxWidth: 1120, margin: '0 auto' }}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
              style={{ textAlign: 'center', marginBottom: 52 }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 4, marginBottom: 16 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={COLORS.gold} style={{ color: COLORS.gold }} />
                ))}
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 4vw, 38px)', fontWeight: 700, color: COLORS.textPrimary, margin: '0 0 10px', letterSpacing: '-0.02em' }}>
                What members are saying
              </h2>
              <p style={{ fontSize: 15, color: COLORS.textSecondary, margin: 0 }}>Real words from real founders inside the community.</p>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
              {testimonials.map(({ quote, name, role }, i) => (
                <motion.div
                  key={name}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.6}
                  style={{
                    background: COLORS.elevated, border: `1px solid ${COLORS.border}`,
                    borderRadius: 16, padding: '28px 28px 30px',
                  }}>
                  <div style={{ fontSize: 28, color: COLORS.violet, lineHeight: 1, marginBottom: 14, fontWeight: 800 }}>"</div>
                  <p style={{ fontSize: 15, color: COLORS.textSecondary, lineHeight: 1.7, margin: '0 0 24px', fontStyle: 'italic' }}>
                    {quote}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: COLORS.violetDim, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Users size={16} style={{ color: COLORS.violet }} />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: COLORS.textPrimary }}>{name}</div>
                      <div style={{ fontSize: 12, color: COLORS.textMuted }}>{role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── JOIN FORM SECTION ── */}
        <section style={{ padding: '100px 24px', textAlign: 'center' }}>
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0}
            style={{
              maxWidth: 560, margin: '0 auto',
              background: COLORS.surface,
              border: `1px solid ${COLORS.border}`,
              borderRadius: 20, padding: '48px 40px',
              position: 'relative', overflow: 'hidden',
            }}>
            {/* Top violet glow border */}
            <div style={{
              position: 'absolute', top: 0, left: '10%', right: '10%', height: 2,
              background: `linear-gradient(90deg, transparent, ${COLORS.violet}, transparent)`,
              borderRadius: 2,
            }} />

            <div style={{ width: 52, height: 52, borderRadius: 14, background: COLORS.violetDim, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <WhatsAppIcon />
            </div>

            <h2 style={{ fontSize: 32, fontWeight: 800, color: COLORS.textPrimary, margin: '0 0 12px', letterSpacing: '-0.02em' }}>
              Apply to Join
            </h2>
            <p style={{ fontSize: 15, color: COLORS.textSecondary, margin: '0 0 36px', lineHeight: 1.6 }}>
              We review each application to maintain quality. Join 500+ founders building the future.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginBottom: 32 }}>
              {['Free to join', 'Vetted founders', 'No spam'].map(item => (
                <span key={item} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: COLORS.textSecondary }}>
                  <CheckCircle size={13} style={{ color: COLORS.violet }} />
                  {item}
                </span>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setIsFormOpen(true)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: '#25d366', color: '#fff',
                border: 'none', borderRadius: 12, padding: '14px 28px',
                fontSize: 15, fontWeight: 700, cursor: 'pointer',
                letterSpacing: '-0.01em',
              }}>
              <WhatsAppIcon />
              Apply via WhatsApp
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        </section>

        {/* ── MODAL ── */}
        <AnimatePresence>
          {isFormOpen && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{
                position: 'fixed', inset: 0, zIndex: 9999,
                background: 'rgba(7,7,13,0.85)', backdropFilter: 'blur(12px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: 20, overflowY: 'auto',
              }}
              onClick={(e) => { if (e.target === e.currentTarget) setIsFormOpen(false); }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 16 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  background: COLORS.surface, border: `1px solid ${COLORS.border}`,
                  borderRadius: 20, padding: '40px 36px',
                  width: '100%', maxWidth: 520,
                  position: 'relative',
                }}>
                {/* Top glow */}
                <div style={{
                  position: 'absolute', top: 0, left: '15%', right: '15%', height: 2,
                  background: `linear-gradient(90deg, transparent, ${COLORS.violet}, transparent)`,
                  borderRadius: 2,
                }} />

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
                  <div>
                    <h2 style={{ fontSize: 22, fontWeight: 800, color: COLORS.textPrimary, margin: '0 0 4px', letterSpacing: '-0.02em' }}>
                      Apply to Join
                    </h2>
                    <p style={{ fontSize: 13, color: COLORS.textMuted, margin: 0 }}>Fill in your details to send a WhatsApp message</p>
                  </div>
                  <button onClick={() => setIsFormOpen(false)} style={{ background: COLORS.elevated, border: `1px solid ${COLORS.border}`, borderRadius: 8, padding: 8, cursor: 'pointer', color: COLORS.textSecondary, lineHeight: 0 }}>
                    <X size={16} />
                  </button>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                  <div>
                    <label style={labelStyle}>LinkedIn Profile URL or ID</label>
                    <input
                      type="text" name="linkedinId" value={formData.linkedinId}
                      onChange={handleChange} required placeholder="linkedin.com/in/yourname"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = COLORS.violet}
                      onBlur={e => e.target.style.borderColor = COLORS.border}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Email Address</label>
                    <input
                      type="email" name="email" value={formData.email}
                      onChange={handleChange} required placeholder="you@example.com"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = COLORS.violet}
                      onBlur={e => e.target.style.borderColor = COLORS.border}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>WhatsApp Number</label>
                    <input
                      type="tel" name="whatsapp" value={formData.whatsapp}
                      onChange={handleChange} required placeholder="+91 98765 43210"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = COLORS.violet}
                      onBlur={e => e.target.style.borderColor = COLORS.border}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Business / Startup Name</label>
                    <input
                      type="text" name="businessName" value={formData.businessName}
                      onChange={handleChange} required placeholder="Your company or idea"
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = COLORS.violet}
                      onBlur={e => e.target.style.borderColor = COLORS.border}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Your Role</label>
                    <input
                      type="text" name="role" value={formData.role}
                      onChange={handleChange} required placeholder="Founder, CEO, CTO, etc."
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = COLORS.violet}
                      onBlur={e => e.target.style.borderColor = COLORS.border}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Why do you want to join?</label>
                    <textarea
                      name="reason" value={formData.reason}
                      onChange={handleChange} required
                      placeholder="Tell us briefly what you hope to get from the community..."
                      rows={3}
                      style={{ ...inputStyle, resize: 'vertical', minHeight: 80 }}
                      onFocus={e => e.target.style.borderColor = COLORS.violet}
                      onBlur={e => e.target.style.borderColor = COLORS.border}
                    />
                  </div>

                  {submitError && (
                    <p style={{ fontSize: 13, color: '#f87171', margin: 0 }}>{submitError}</p>
                  )}

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
                      background: '#25d366', color: '#fff',
                      border: 'none', borderRadius: 12, padding: '14px 28px',
                      fontSize: 15, fontWeight: 700, cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      opacity: isSubmitting ? 0.7 : 1,
                      marginTop: 4,
                    }}>
                    <WhatsAppIcon />
                    {isSubmitting ? 'Sending...' : 'Send via WhatsApp'}
                    <Send size={15} />
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
