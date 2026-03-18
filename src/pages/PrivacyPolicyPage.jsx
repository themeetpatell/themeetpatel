import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Database, User, Mail, Globe } from 'lucide-react';
import SEOHead from '../components/SEOHead';

void motion;

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

const lastUpdated = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

function Section({ icon, number, title, children }) {
  const IconComponent = icon;
  return (
    <div style={{ marginBottom: 40 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 9, flexShrink: 0,
          background: C.violetDim, border: `1px solid ${C.violetBorder}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          {React.createElement(IconComponent, { size: 16, color: '#8b5cf6' })}
        </div>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '-0.01em' }}>
          {number}. {title}
        </h2>
      </div>
      <div style={{ paddingLeft: 48 }}>{children}</div>
    </div>
  );
}

function BodyText({ children }) {
  return <p style={{ fontSize: 15, color: C.secondary, lineHeight: 1.75, margin: '0 0 12px' }}>{children}</p>;
}

function BulletList({ items }) {
  return (
    <ul style={{ margin: '8px 0 12px', paddingLeft: 20 }}>
      {items.map((item, i) => (
        <li key={i} style={{ fontSize: 15, color: C.secondary, lineHeight: 1.7, marginBottom: 6 }}>{item}</li>
      ))}
    </ul>
  );
}

const PrivacyPolicyPage = () => (
  <>
    <SEOHead
      title="Privacy Policy — The Meet Patel"
      description="Privacy Policy for The Meet Patel's personal website. Learn how we collect, use, and protect your personal information."
      keywords="The Meet Patel privacy policy, Meet Patel privacy, themeetpatel privacy policy, data protection, privacy rights"
      canonical="/privacy-policy"
      robotsNoindex={true}
    />

    <style>{`* { box-sizing: border-box; } * { -webkit-font-smoothing: antialiased; }`}</style>

    <div style={{ background: C.bg, minHeight: '100vh', color: C.primary, fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, sans-serif' }}>

      {/* ── Header ──────────────────────────────────────────────────────────── */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        padding: 'clamp(100px, 13vw, 150px) 24px clamp(48px, 7vw, 72px)',
        borderBottom: `1px solid ${C.border}`,
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(139,92,246,0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{ position: 'relative', maxWidth: 800, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }} style={{ marginBottom: 28 }}>
            <Link
              to="/"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, fontWeight: 500, color: C.muted, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.color = C.secondary}
              onMouseLeave={e => e.currentTarget.style.color = C.muted}
            >
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 20 }}>
              <div style={{ width: 52, height: 52, borderRadius: 14, background: C.violetDim, border: `1px solid ${C.violetBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Shield size={24} color="#8b5cf6" />
              </div>
              <div>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8b5cf6', display: 'block', marginBottom: 4 }}>Legal</span>
                <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', margin: 0, color: C.primary }}>Privacy Policy</h1>
              </div>
            </div>
            <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.65, maxWidth: 520, margin: '0 0 12px' }}>
              Your privacy is important. This policy explains how we collect, use, and protect your information.
            </p>
            <span style={{ fontSize: 13, color: C.muted }}>Last updated: {lastUpdated}</span>
          </motion.div>
        </div>
      </section>

      {/* ── Content ─────────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 800, margin: '0 auto', padding: '56px 24px 100px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 20, padding: 'clamp(28px, 4vw, 48px)' }}>

            <Section icon={Eye} number="1" title="Information We Collect">
              <BodyText>We collect information you provide directly to us, such as when you:</BodyText>
              <BulletList items={['Fill out our contact forms', 'Subscribe to our newsletter', 'Join our WhatsApp community', 'Communicate with us via email or social media']} />
              <BodyText>Types of information we collect:</BodyText>
              <BulletList items={['Name and contact information (email, phone number)', 'Professional information (company, role, LinkedIn profile)', 'Communication preferences and interests', 'Website usage data and analytics']} />
            </Section>

            <Section icon={Database} number="2" title="How We Use Your Information">
              <BodyText>We use the information we collect to:</BodyText>
              <BulletList items={['Respond to your inquiries and provide customer support', 'Send you newsletters and updates about our services', 'Improve our website and user experience', 'Analyze website traffic and user behavior', 'Comply with legal obligations']} />
            </Section>

            <Section icon={Lock} number="3" title="Information Sharing and Disclosure">
              <BodyText>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:</BodyText>
              <BulletList items={['When required by law or legal process', 'To protect our rights and prevent fraud', 'With service providers who assist in website operations (under strict confidentiality agreements)', 'In connection with a business transfer or acquisition']} />
            </Section>

            <Section icon={Shield} number="4" title="Data Security">
              <BodyText>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</BodyText>
            </Section>

            <Section icon={User} number="5" title="Your Rights">
              <BodyText>You have the right to:</BodyText>
              <BulletList items={['Access and update your personal information', 'Request deletion of your personal information', 'Opt-out of marketing communications', 'Withdraw consent for data processing', 'Request data portability']} />
            </Section>

            <Section icon={Globe} number="6" title="Cookies and Tracking">
              <BodyText>
                We use cookies and similar technologies to enhance your browsing experience. You can control cookie settings through your browser preferences. For more details, see our{' '}
                <Link to="/cookie-policy" style={{ color: '#8b5cf6', textDecoration: 'underline', textUnderlineOffset: 3 }}>Cookie Policy</Link>.
              </BodyText>
            </Section>

            <Section icon={Mail} number="7" title="Contact Us">
              <BodyText>If you have any questions about this Privacy Policy, please contact us:</BodyText>
              <div style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 12, padding: '20px 24px', marginTop: 8 }}>
                {[['Email', 'the.meetpatell@gmail.com'], ['Phone', '+971 54 754 1414'], ['Location', 'Dubai, UAE']].map(([label, value]) => (
                  <div key={label} style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: C.secondary, minWidth: 70 }}>{label}:</span>
                    <span style={{ fontSize: 13, color: C.primary }}>{value}</span>
                  </div>
                ))}
              </div>
            </Section>

            <div style={{ background: C.violetDim, border: `1px solid ${C.violetBorder}`, borderRadius: 12, padding: '16px 20px' }}>
              <p style={{ fontSize: 13, color: C.secondary, margin: 0, lineHeight: 1.6 }}>
                <strong style={{ color: C.primary }}>Note:</strong> This Privacy Policy may be updated from time to time. We will notify you of any material changes by posting the new policy on this page.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 20, marginTop: 32, flexWrap: 'wrap' }}>
            {[['Cookie Policy', '/cookie-policy'], ['Terms of Service', '/terms-of-service']].map(([label, href]) => (
              <Link
                key={href}
                to={href}
                style={{ fontSize: 13, fontWeight: 500, color: C.muted, textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = '#8b5cf6'}
                onMouseLeave={e => e.currentTarget.style.color = C.muted}
              >
                {label} →
              </Link>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  </>
);

export default PrivacyPolicyPage;
