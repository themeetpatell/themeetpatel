import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Linkedin,
  Twitter,
  Github,
  Instagram,
  Youtube,
  Calendar,
  ArrowRight,
  MessageSquare,
  Copy,
  Check,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ProductionDebug from '../components/ProductionDebug';

void motion;

// ─── Design tokens ────────────────────────────────────────────────────────────
const C = {
  bg:         '#09090e',
  surface:    '#111118',
  elevated:   '#16161f',
  textPrimary:'#f5f5f7',
  textSec:    '#8e8ea0',
  textMuted:  '#5a5a6e',
  violet:     '#8b5cf6',
  gold:       '#d4a847',
  border:     'rgba(255,255,255,0.07)',
  borderMd:   'rgba(255,255,255,0.10)',
  borderHi:   'rgba(255,255,255,0.12)',
  violetBorder:'rgba(139,92,246,0.25)',
  violetBg:   'rgba(139,92,246,0.08)',
  goldBg:     'rgba(212,168,71,0.08)',
  greenBg:    'rgba(34,197,94,0.08)',
  green:      '#22c55e',
};

// ─── Country codes ────────────────────────────────────────────────────────────
const COUNTRY_CODES = [
  { label: 'UAE', code: '+971' },
  { label: 'India', code: '+91' },
  { label: 'USA', code: '+1' },
  { label: 'UK', code: '+44' },
  { label: 'Canada', code: '+1' },
  { label: 'Australia', code: '+61' },
  { label: 'Singapore', code: '+65' },
  { label: 'Germany', code: '+49' },
  { label: 'France', code: '+33' },
  { label: 'Japan', code: '+81' },
];

// ─── Social links ─────────────────────────────────────────────────────────────
const SOCIALS = [
  { icon: Linkedin,  href: 'https://www.linkedin.com/in/themeetpatel/', label: 'LinkedIn' },
  { icon: Twitter,   href: 'https://x.com/the_meetpatel',              label: 'Twitter/X' },
  { icon: Github,    href: 'https://github.com/themeetpatell',          label: 'GitHub' },
  { icon: Instagram, href: 'http://instagram.com/the.meetpatell/',      label: 'Instagram' },
  { icon: Youtube,   href: 'https://youtube.com/@themeetpatel',         label: 'YouTube' },
];

// ─── Animation variants ───────────────────────────────────────────────────────
const stagger = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94], delay } },
});

// ─── Reusable animated section wrapper ────────────────────────────────────────
function AnimatedSection({ children, delay = 0, style }) {
  const ref  = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
      variants={stagger(delay)}
      style={style}
    >
      {children}
    </motion.div>
  );
}

// ─── Info card ────────────────────────────────────────────────────────────────
function InfoCard({ icon, iconColor, iconBg, title, children, style }) {
  const [hovered, setHovered] = useState(false);
  const IconComponent = icon;
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background:    C.surface,
        border:        `1px solid ${hovered ? C.violetBorder : C.border}`,
        borderRadius:  16,
        padding:       '24px 28px',
        transition:    'border-color 0.25s ease, box-shadow 0.25s ease',
        boxShadow:     hovered ? '0 0 24px rgba(139,92,246,0.08)' : 'none',
        ...style,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
        <div style={{
          width: 44, height: 44, borderRadius: 12,
          background: iconBg,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          {React.createElement(IconComponent, { size: 20, color: iconColor })}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.textMuted, marginBottom: 6 }}>
            {title}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

// ─── Copy button ──────────────────────────────────────────────────────────────
function CopyButton({ text, itemKey, copiedItem, onCopy }) {
  const copied = copiedItem === itemKey;
  return (
    <button
      onClick={() => onCopy(text, itemKey)}
      title={copied ? 'Copied!' : 'Copy to clipboard'}
      style={{
        background:    copied ? 'rgba(34,197,94,0.12)' : 'rgba(255,255,255,0.05)',
        border:        `1px solid ${copied ? 'rgba(34,197,94,0.3)' : C.border}`,
        borderRadius:  8,
        padding:       '4px 10px',
        cursor:        'pointer',
        display:       'inline-flex',
        alignItems:    'center',
        gap:           5,
        fontSize:      12,
        color:         copied ? C.green : C.textMuted,
        fontWeight:    500,
        transition:    'all 0.2s ease',
        marginLeft:    10,
        flexShrink:    0,
      }}
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

// ─── Form input ───────────────────────────────────────────────────────────────
function FormInput({ label, id, type = 'text', value, onChange, placeholder, required, style, inputStyle }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      <label htmlFor={id} style={{ fontSize: 13, fontWeight: 500, color: C.textSec, letterSpacing: '0.02em' }}>
        {label}{required && <span style={{ color: C.violet, marginLeft: 3 }}>*</span>}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        style={{
          background:   C.elevated,
          border:       `1px solid ${focused ? C.violetBorder : 'rgba(255,255,255,0.08)'}`,
          borderRadius: 10,
          padding:      '12px 16px',
          fontSize:     14,
          color:        C.textPrimary,
          outline:      'none',
          transition:   'border-color 0.2s ease, box-shadow 0.2s ease',
          boxShadow:    focused ? '0 0 0 3px rgba(139,92,246,0.12)' : 'none',
          width:        '100%',
          boxSizing:    'border-box',
          ...inputStyle,
        }}
      />
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function ContactPage() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  // Copy state
  const [copiedItem, setCopiedItem] = useState(null);
  const handleCopy = (text, item) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(item);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  // Form state
  const [form, setForm] = useState({
    name:        '',
    email:       '',
    countryCode: '+971',
    whatsapp:    '',
    subject:     '',
    message:     '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted,  setIsSubmitted]  = useState(false);
  const [ccOpen,       setCcOpen]       = useState(false);

  const setField = (key) => (e) => setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  // ─── render ─────────────────────────────────────────────────────────────────
  return (
    <>
      <SEOHead
        title="Contact | Meet Patel"
        description="Get in touch with Meet Patel — entrepreneur, builder, and AI-first product thinker based in Dubai. Let's build something together."
        keywords="Contact The Meet Patel, Meet Patel contact, themeetpatel contact, startup consultant Dubai, venture builder contact, business strategist Dubai"
        canonical="/contact"
      />

      <div style={{ background: C.bg, minHeight: '100vh', color: C.textPrimary, fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif" }}>

        {/* ── HERO ──────────────────────────────────────────────────────────── */}
        <section
          ref={heroRef}
          style={{
            position:   'relative',
            overflow:   'hidden',
            padding:    'clamp(100px, 14vw, 160px) 24px clamp(72px, 10vw, 112px)',
            textAlign:  'center',
          }}
        >
          {/* Radial glow */}
          <div style={{
            position:     'absolute',
            inset:        0,
            background:   'radial-gradient(ellipse 70% 55% at 50% 40%, rgba(139,92,246,0.07) 0%, transparent 70%)',
            pointerEvents:'none',
          }} />

          <div style={{ position: 'relative', zIndex: 1, maxWidth: 760, margin: '0 auto' }}>
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              style={{
                display:        'inline-flex',
                alignItems:     'center',
                gap:            8,
                background:     C.violetBg,
                border:         `1px solid rgba(139,92,246,0.2)`,
                borderRadius:   100,
                padding:        '6px 18px',
                fontSize:       11,
                fontWeight:     600,
                letterSpacing:  '0.1em',
                textTransform:  'uppercase',
                color:          C.violet,
                marginBottom:   28,
              }}
            >
              <MessageSquare size={12} />
              Contact
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.08 }}
              style={{
                fontSize:   'clamp(40px, 7vw, 80px)',
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: '-0.03em',
                margin:     '0 0 24px',
                color:      C.textPrimary,
              }}
            >
              Let's Build{' '}
              <span style={{
                background:            `linear-gradient(135deg, ${C.violet} 0%, #a78bfa 100%)`,
                WebkitBackgroundClip:  'text',
                WebkitTextFillColor:   'transparent',
                backgroundClip:        'text',
              }}>
                Something
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.16 }}
              style={{
                fontSize:   'clamp(15px, 2.2vw, 18px)',
                color:      C.textSec,
                lineHeight: 1.7,
                maxWidth:   560,
                margin:     '0 auto 36px',
              }}
            >
              Whether you have a project in mind, want to explore a partnership, or simply want to connect — I'm open to meaningful conversations.
            </motion.p>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.26 }}
              style={{
                display:        'inline-flex',
                alignItems:     'center',
                gap:            10,
                background:     'rgba(212,168,71,0.07)',
                border:         '1px solid rgba(212,168,71,0.2)',
                borderRadius:   100,
                padding:        '10px 22px',
                fontSize:       13,
                color:          C.gold,
                fontWeight:     500,
              }}
            >
              {/* Pulsing gold dot */}
              <span style={{ position: 'relative', display: 'inline-flex', width: 10, height: 10 }}>
                <span style={{
                  position:   'absolute',
                  inset:      0,
                  borderRadius:'50%',
                  background: C.gold,
                  opacity:    0.35,
                  animation:  'pulse-ring 1.8s ease-out infinite',
                }} />
                <span style={{
                  width: 10, height: 10,
                  borderRadius: '50%',
                  background:   C.gold,
                  display:      'block',
                }} />
              </span>
              Currently available for consulting&nbsp;&middot;&nbsp;Dubai, UAE
            </motion.div>
          </div>
        </section>

        {/* ── MAIN CONTENT ──────────────────────────────────────────────────── */}
        <section style={{ maxWidth: 1180, margin: '0 auto', padding: '0 24px clamp(80px, 12vw, 140px)' }}>
          <div style={{
            display:             'grid',
            gridTemplateColumns: 'minmax(0,1fr)',
            gap:                 32,
          }}
            className="contact-grid"
          >
            {/* ── LEFT: contact info ──────────────────────────────────────── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

              {/* Email card */}
              <AnimatedSection delay={0}>
                <InfoCard icon={Mail} iconColor={C.violet} iconBg={C.violetBg} title="Send an Email">
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 4 }}>
                    <a
                      href="mailto:the.meetpatell@gmail.com"
                      style={{ color: C.textPrimary, textDecoration: 'none', fontSize: 15, fontWeight: 500, wordBreak: 'break-all' }}
                    >
                      the.meetpatell@gmail.com
                    </a>
                    <CopyButton text="the.meetpatell@gmail.com" itemKey="email" copiedItem={copiedItem} onCopy={handleCopy} />
                  </div>
                  <div style={{ fontSize: 12, color: C.textMuted, marginTop: 4 }}>Typically responds within 24 hours</div>
                </InfoCard>
              </AnimatedSection>

              {/* WhatsApp card */}
              <AnimatedSection delay={0.07}>
                <InfoCard icon={Phone} iconColor={C.green} iconBg={C.greenBg} title="WhatsApp">
                  <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 4 }}>
                    <a
                      href="https://wa.me/919824341414"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: C.textPrimary, textDecoration: 'none', fontSize: 15, fontWeight: 500 }}
                    >
                      +91 98 2434 1414
                    </a>
                    <CopyButton text="+919824341414" itemKey="phone" copiedItem={copiedItem} onCopy={handleCopy} />
                  </div>
                  <a
                    href="https://wa.me/919824341414"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display:     'inline-flex',
                      alignItems:  'center',
                      gap:         5,
                      marginTop:   10,
                      fontSize:    12,
                      fontWeight:  500,
                      color:       C.green,
                      textDecoration: 'none',
                    }}
                  >
                    Open WhatsApp <ArrowRight size={12} />
                  </a>
                </InfoCard>
              </AnimatedSection>

              {/* Schedule card */}
              <AnimatedSection delay={0.14}>
                <InfoCard icon={Calendar} iconColor={C.gold} iconBg={C.goldBg} title="Schedule a Call">
                  <div style={{ fontSize: 15, fontWeight: 500, color: C.textPrimary, marginBottom: 10 }}>
                    Book a 30-min quick connect
                  </div>
                  <a
                    href="https://calendly.com/themeetpatell/quick-connect"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display:         'inline-flex',
                      alignItems:      'center',
                      gap:             7,
                      background:      C.goldBg,
                      border:          '1px solid rgba(212,168,71,0.25)',
                      borderRadius:    8,
                      padding:         '8px 16px',
                      fontSize:        13,
                      fontWeight:      600,
                      color:           C.gold,
                      textDecoration:  'none',
                      transition:      'background 0.2s',
                    }}
                  >
                    <Calendar size={14} />
                    Book on Calendly
                    <ArrowRight size={13} />
                  </a>
                </InfoCard>
              </AnimatedSection>

              {/* Location card */}
              <AnimatedSection delay={0.21}>
                <InfoCard icon={MapPin} iconColor="#e879f9" iconBg="rgba(232,121,249,0.08)" title="Location">
                  <div style={{ fontSize: 15, fontWeight: 500, color: C.textPrimary }}>Dubai, UAE</div>
                  <div style={{ fontSize: 13, color: C.textMuted, marginTop: 3 }}>& Ahmedabad, India</div>
                  <div style={{ fontSize: 12, color: C.textMuted, marginTop: 6 }}>Available for in-person meetings in both cities</div>
                </InfoCard>
              </AnimatedSection>

              {/* Social links */}
              <AnimatedSection delay={0.28}>
                <div style={{
                  background:   C.surface,
                  border:       `1px solid ${C.border}`,
                  borderRadius: 16,
                  padding:      '20px 28px',
                }}>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.textMuted, marginBottom: 16 }}>
                    Find me online
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                    {SOCIALS.map((social) => {
                      const IconComponent = social.icon;
                      return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={social.label}
                        style={{
                          display:        'flex',
                          alignItems:     'center',
                          justifyContent: 'center',
                          width:          40,
                          height:         40,
                          background:     C.elevated,
                          border:         `1px solid ${C.border}`,
                          borderRadius:   10,
                          color:          C.textSec,
                          textDecoration: 'none',
                          transition:     'all 0.2s ease',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = C.violetBorder;
                          e.currentTarget.style.color = C.violet;
                          e.currentTarget.style.background = C.violetBg;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = C.border;
                          e.currentTarget.style.color = C.textSec;
                          e.currentTarget.style.background = C.elevated;
                        }}
                      >
                        {React.createElement(IconComponent, { size: 17 })}
                      </a>
                      );
                    })}
                    {/* Medium link (no lucide icon, use text) */}
                    <a
                      href="https://medium.com/@themeetpatel"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Medium"
                      style={{
                        display:        'flex',
                        alignItems:     'center',
                        justifyContent: 'center',
                        width:          40,
                        height:         40,
                        background:     C.elevated,
                        border:         `1px solid ${C.border}`,
                        borderRadius:   10,
                        color:          C.textSec,
                        textDecoration: 'none',
                        fontSize:       13,
                        fontWeight:     700,
                        letterSpacing:  '-0.02em',
                        transition:     'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = C.violetBorder;
                        e.currentTarget.style.color = C.violet;
                        e.currentTarget.style.background = C.violetBg;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = C.border;
                        e.currentTarget.style.color = C.textSec;
                        e.currentTarget.style.background = C.elevated;
                      }}
                    >
                      M
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* ── RIGHT: contact form ─────────────────────────────────────── */}
            <AnimatedSection delay={0.1} style={{ alignSelf: 'start' }}>
              <div style={{
                background:   C.surface,
                border:       `1px solid ${C.border}`,
                borderRadius: 20,
                padding:      'clamp(28px, 4vw, 44px)',
              }}>
                <div style={{ marginBottom: 28 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: C.violet, marginBottom: 8 }}>
                    Send a Message
                  </div>
                  <h2 style={{ fontSize: 22, fontWeight: 700, color: C.textPrimary, margin: 0, letterSpacing: '-0.02em' }}>
                    Start a Conversation
                  </h2>
                  <p style={{ fontSize: 14, color: C.textMuted, marginTop: 6, lineHeight: 1.6 }}>
                    Fill out the form and I'll get back to you as soon as possible.
                  </p>
                </div>

                {isSubmitted ? (
                  <div style={{
                    textAlign:  'center',
                    padding:    '48px 24px',
                    display:    'flex',
                    flexDirection:'column',
                    alignItems:'center',
                    gap:        16,
                  }}>
                    <div style={{
                      width:          64,
                      height:         64,
                      borderRadius:   '50%',
                      background:     'rgba(34,197,94,0.10)',
                      border:         '1px solid rgba(34,197,94,0.25)',
                      display:        'flex',
                      alignItems:     'center',
                      justifyContent: 'center',
                    }}>
                      <CheckCircle size={28} color={C.green} />
                    </div>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 700, color: C.textPrimary, marginBottom: 8 }}>Message Sent!</div>
                      <div style={{ fontSize: 14, color: C.textSec, lineHeight: 1.6 }}>
                        Thanks for reaching out. I'll be in touch within 24 hours.
                      </div>
                    </div>
                    <button
                      onClick={() => { setIsSubmitted(false); setForm({ name:'', email:'', countryCode:'+971', whatsapp:'', subject:'', message:'' }); }}
                      style={{
                        marginTop:    8,
                        background:   C.violetBg,
                        border:       `1px solid rgba(139,92,246,0.25)`,
                        borderRadius: 10,
                        padding:      '10px 22px',
                        fontSize:     13,
                        fontWeight:   600,
                        color:        C.violet,
                        cursor:       'pointer',
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
                    {/* Name + Email row */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }} className="form-row">
                      <FormInput
                        label="Full Name"
                        id="name"
                        value={form.name}
                        onChange={setField('name')}
                        placeholder="Meet Patel"
                        required
                      />
                      <FormInput
                        label="Email Address"
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={setField('email')}
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                    {/* WhatsApp row */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <label style={{ fontSize: 13, fontWeight: 500, color: C.textSec, letterSpacing: '0.02em' }}>
                        WhatsApp Number
                      </label>
                      <div style={{ display: 'flex', gap: 10 }}>
                        {/* Country code selector */}
                        <div style={{ position: 'relative', flexShrink: 0 }}>
                          <button
                            type="button"
                            onClick={() => setCcOpen((v) => !v)}
                            style={{
                              background:   C.elevated,
                              border:       `1px solid ${ccOpen ? C.violetBorder : 'rgba(255,255,255,0.08)'}`,
                              borderRadius: 10,
                              padding:      '12px 14px',
                              fontSize:     14,
                              color:        C.textPrimary,
                              cursor:       'pointer',
                              minWidth:     86,
                              textAlign:    'left',
                              display:      'flex',
                              alignItems:   'center',
                              gap:          6,
                              boxShadow:    ccOpen ? '0 0 0 3px rgba(139,92,246,0.12)' : 'none',
                              transition:   'all 0.2s ease',
                              whiteSpace:   'nowrap',
                            }}
                          >
                            {form.countryCode}
                            <span style={{ marginLeft: 'auto', opacity: 0.5, fontSize: 10 }}>▾</span>
                          </button>
                          {ccOpen && (
                            <div style={{
                              position:   'absolute',
                              top:        'calc(100% + 6px)',
                              left:       0,
                              zIndex:     50,
                              background: C.elevated,
                              border:     `1px solid ${C.borderMd}`,
                              borderRadius:10,
                              overflow:   'hidden',
                              boxShadow:  '0 12px 40px rgba(0,0,0,0.5)',
                              minWidth:   140,
                            }}>
                              {COUNTRY_CODES.map((cc) => (
                                <button
                                  key={cc.label + cc.code}
                                  type="button"
                                  onClick={() => { setForm((p) => ({ ...p, countryCode: cc.code })); setCcOpen(false); }}
                                  style={{
                                    display:    'flex',
                                    width:      '100%',
                                    alignItems: 'center',
                                    justifyContent:'space-between',
                                    padding:    '10px 14px',
                                    background: form.countryCode === cc.code ? C.violetBg : 'transparent',
                                    border:     'none',
                                    cursor:     'pointer',
                                    fontSize:   13,
                                    color:      form.countryCode === cc.code ? C.violet : C.textSec,
                                    fontWeight: form.countryCode === cc.code ? 600 : 400,
                                    gap:        12,
                                    transition: 'background 0.15s',
                                    whiteSpace: 'nowrap',
                                  }}
                                  onMouseEnter={(e) => { if (form.countryCode !== cc.code) e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
                                  onMouseLeave={(e) => { if (form.countryCode !== cc.code) e.currentTarget.style.background = 'transparent'; }}
                                >
                                  <span>{cc.label}</span>
                                  <span style={{ opacity: 0.6, fontSize: 12 }}>{cc.code}</span>
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                        {/* Number input */}
                        <WhatsappInput value={form.whatsapp} onChange={setField('whatsapp')} />
                      </div>
                    </div>

                    {/* Subject */}
                    <FormInput
                      label="Subject"
                      id="subject"
                      value={form.subject}
                      onChange={setField('subject')}
                      placeholder="What's this about?"
                      required
                    />

                    {/* Message */}
                    <TextareaField
                      label="Message"
                      id="message"
                      value={form.message}
                      onChange={setField('message')}
                      placeholder="Tell me about your project, idea, or how I can help..."
                      required
                    />

                    {/* Submit */}
                    <SubmitButton isSubmitting={isSubmitting} />
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>

      {/* Global styles */}
      <style>{`
        @keyframes pulse-ring {
          0%   { transform: scale(1); opacity: 0.4; }
          70%  { transform: scale(2.2); opacity: 0; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        @media (min-width: 860px) {
          .contact-grid {
            grid-template-columns: 3fr 2fr !important;
          }
        }

        @media (max-width: 580px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }

        input::placeholder,
        textarea::placeholder {
          color: #5a5a6e;
        }

        select {
          -webkit-appearance: none;
        }

        * {
          -webkit-font-smoothing: antialiased;
        }
      `}</style>

      <ProductionDebug />
    </>
  );
}

// ─── Extracted sub-components (keep file readable) ────────────────────────────

function WhatsappInput({ value, onChange }) {
  const [focused, setFocused] = useState(false);
  return (
    <input
      type="tel"
      value={value}
      onChange={onChange}
      placeholder="98 2434 1414"
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      style={{
        flex:         1,
        background:   '#16161f',
        border:       `1px solid ${focused ? 'rgba(139,92,246,0.25)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 10,
        padding:      '12px 16px',
        fontSize:     14,
        color:        '#f5f5f7',
        outline:      'none',
        transition:   'border-color 0.2s ease, box-shadow 0.2s ease',
        boxShadow:    focused ? '0 0 0 3px rgba(139,92,246,0.12)' : 'none',
        boxSizing:    'border-box',
        minWidth:     0,
      }}
    />
  );
}

function TextareaField({ label, id, value, onChange, placeholder, required }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <label htmlFor={id} style={{ fontSize: 13, fontWeight: 500, color: '#8e8ea0', letterSpacing: '0.02em' }}>
        {label}{required && <span style={{ color: '#8b5cf6', marginLeft: 3 }}>*</span>}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        rows={5}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          background:   '#16161f',
          border:       `1px solid ${focused ? 'rgba(139,92,246,0.25)' : 'rgba(255,255,255,0.08)'}`,
          borderRadius: 10,
          padding:      '12px 16px',
          fontSize:     14,
          color:        '#f5f5f7',
          outline:      'none',
          resize:       'vertical',
          lineHeight:   1.6,
          transition:   'border-color 0.2s ease, box-shadow 0.2s ease',
          boxShadow:    focused ? '0 0 0 3px rgba(139,92,246,0.12)' : 'none',
          width:        '100%',
          boxSizing:    'border-box',
          fontFamily:   "'Inter', -apple-system, sans-serif",
        }}
      />
    </div>
  );
}

function SubmitButton({ isSubmitting }) {
  const [hovered, setHovered] = useState(false);
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'center',
        gap:            9,
        background:     isSubmitting
                          ? 'rgba(139,92,246,0.5)'
                          : hovered
                            ? '#7c3aed'
                            : '#8b5cf6',
        border:         'none',
        borderRadius:   12,
        padding:        '14px 28px',
        fontSize:       15,
        fontWeight:     600,
        color:          '#fff',
        cursor:         isSubmitting ? 'not-allowed' : 'pointer',
        transition:     'all 0.2s ease',
        boxShadow:      hovered && !isSubmitting ? '0 6px 24px rgba(139,92,246,0.35)' : 'none',
        transform:      hovered && !isSubmitting ? 'translateY(-1px)' : 'none',
        letterSpacing:  '0.01em',
      }}
    >
      {isSubmitting ? (
        <>
          <SpinnerIcon />
          Sending...
        </>
      ) : (
        <>
          <Send size={16} />
          Send Message
        </>
      )}
    </button>
  );
}

function SpinnerIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      style={{ animation: 'spin 0.75s linear infinite' }}
    >
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
