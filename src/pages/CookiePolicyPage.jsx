import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Settings, Eye, Shield, Database, Globe, AlertCircle } from 'lucide-react';
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

function Section({ icon, title, children }) {
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
        <h2 style={{ fontSize: 18, fontWeight: 700, color: C.primary, margin: 0, letterSpacing: '-0.01em' }}>{title}</h2>
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

function SubSection({ icon, iconColor, title, children }) {
  const IconComponent = icon;
  return (
    <div style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 12, padding: '20px 24px', marginBottom: 16 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 9, marginBottom: 12 }}>
        {React.createElement(IconComponent, { size: 16, color: iconColor })}
        <h3 style={{ fontSize: 15, fontWeight: 700, color: C.primary, margin: 0 }}>{title}</h3>
      </div>
      {children}
    </div>
  );
}

const CookiePolicyPage = () => (
  <>
    <SEOHead
      title="Cookie Policy — The Meet Patel"
      description="Cookie Policy for The Meet Patel's personal website. Learn about how we use cookies and similar technologies."
      keywords="The Meet Patel cookie policy, Meet Patel cookies, themeetpatel cookie policy, website cookies, analytics cookies"
      canonical="/cookie-policy"
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
                <Cookie size={24} color="#8b5cf6" />
              </div>
              <div>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8b5cf6', display: 'block', marginBottom: 4 }}>Legal</span>
                <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', margin: 0, color: C.primary }}>Cookie Policy</h1>
              </div>
            </div>
            <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.65, maxWidth: 520, margin: '0 0 12px' }}>
              Learn about how we use cookies and similar technologies to enhance your browsing experience.
            </p>
            <span style={{ fontSize: 13, color: C.muted }}>Last updated: {lastUpdated}</span>
          </motion.div>
        </div>
      </section>

      {/* ── Content ─────────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 800, margin: '0 auto', padding: '56px 24px 100px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 20, padding: 'clamp(28px, 4vw, 48px)' }}>

            <Section icon={Cookie} title="What Are Cookies?">
              <BodyText>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and analyzing how you use our site.</BodyText>
            </Section>

            <Section icon={Settings} title="Types of Cookies We Use">
              <SubSection icon={Shield} iconColor="#22c55e" title="Essential Cookies">
                <BodyText>These cookies are necessary for the website to function properly and cannot be disabled.</BodyText>
                <BulletList items={['Session management and security', 'Form submission and validation', 'User authentication', 'Website functionality']} />
              </SubSection>

              <SubSection icon={Database} iconColor="#8b5cf6" title="Analytics Cookies">
                <BodyText>These cookies help us understand how visitors interact with our website.</BodyText>
                <BulletList items={['Google Analytics for website traffic analysis', 'Page views and user behavior tracking', 'Performance monitoring and optimization', 'User journey analysis']} />
              </SubSection>

              <SubSection icon={Eye} iconColor="#a78bfa" title="Functional Cookies">
                <BodyText>These cookies enhance your experience by remembering your preferences.</BodyText>
                <BulletList items={['Language and region preferences', 'Theme and display settings', 'Form data and user inputs', 'Personalized content delivery']} />
              </SubSection>

              <SubSection icon={Globe} iconColor="#f97316" title="Third-Party Cookies">
                <BodyText>These cookies are set by third-party services we use.</BodyText>
                <BulletList items={['Social media integration (LinkedIn, Twitter, etc.)', 'Email marketing and newsletter services', 'Customer support and chat widgets', 'Payment processing services']} />
              </SubSection>
            </Section>

            <Section icon={Settings} title="Managing Your Cookie Preferences">
              <SubSection icon={Settings} iconColor="#8b5cf6" title="Browser Settings">
                <BodyText>Most web browsers allow you to control cookies through their settings:</BodyText>
                <BulletList items={['Chrome: Settings → Privacy and Security → Cookies and other site data', 'Firefox: Options → Privacy & Security → Cookies and Site Data', 'Safari: Preferences → Privacy → Manage Website Data', 'Edge: Settings → Cookies and site permissions']} />
              </SubSection>

              <SubSection icon={Shield} iconColor="#22c55e" title="Cookie Consent">
                <BodyText>When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept or reject.</BodyText>
              </SubSection>
            </Section>

            <Section icon={AlertCircle} title="Important Notes">
              <div style={{ background: 'rgba(245,158,11,0.08)', border: '1px solid rgba(245,158,11,0.2)', borderRadius: 12, padding: '16px 20px', marginBottom: 16 }}>
                <p style={{ fontSize: 13, color: '#d4a847', margin: 0, lineHeight: 1.6 }}>
                  <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website and your user experience. Essential cookies cannot be disabled as they are necessary for the website to work properly.
                </p>
              </div>
              <div style={{ background: C.violetDim, border: `1px solid ${C.violetBorder}`, borderRadius: 12, padding: '16px 20px' }}>
                <p style={{ fontSize: 13, color: C.secondary, margin: 0, lineHeight: 1.6 }}>
                  <strong style={{ color: C.primary }}>Updates:</strong> We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                </p>
              </div>
            </Section>

            <Section icon={Shield} title="Contact Us">
              <BodyText>If you have any questions about our use of cookies, please contact us:</BodyText>
              <div style={{ background: C.elevated, border: `1px solid ${C.border}`, borderRadius: 12, padding: '20px 24px', marginTop: 8 }}>
                {[['Email', 'the.meetpatell@gmail.com'], ['Phone', '+971 54 754 1414'], ['Location', 'Dubai, UAE']].map(([label, value]) => (
                  <div key={label} style={{ display: 'flex', gap: 12, marginBottom: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: C.secondary, minWidth: 70 }}>{label}:</span>
                    <span style={{ fontSize: 13, color: C.primary }}>{value}</span>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          <div style={{ display: 'flex', gap: 20, marginTop: 32, flexWrap: 'wrap' }}>
            {[['Privacy Policy', '/privacy-policy'], ['Terms of Service', '/terms-of-service']].map(([label, href]) => (
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

export default CookiePolicyPage;
