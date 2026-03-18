import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Scale, AlertTriangle, Shield, Users, Globe, Mail } from 'lucide-react';
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

const TermsOfServicePage = () => (
  <>
    <SEOHead
      title="Terms of Service — The Meet Patel"
      description="Terms of Service for The Meet Patel's personal website. Read our terms and conditions for using our services."
      keywords="The Meet Patel terms of service, Meet Patel terms, themeetpatel legal terms, terms and conditions, website terms"
      canonical="/terms-of-service"
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
                <FileText size={24} color="#8b5cf6" />
              </div>
              <div>
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8b5cf6', display: 'block', marginBottom: 4 }}>Legal</span>
                <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, letterSpacing: '-0.03em', margin: 0, color: C.primary }}>Terms of Service</h1>
              </div>
            </div>
            <p style={{ fontSize: 16, color: C.secondary, lineHeight: 1.65, maxWidth: 520, margin: '0 0 12px' }}>
              Please read these terms and conditions carefully before using our website and services.
            </p>
            <span style={{ fontSize: 13, color: C.muted }}>Last updated: {lastUpdated}</span>
          </motion.div>
        </div>
      </section>

      {/* ── Content ─────────────────────────────────────────────────────────── */}
      <section style={{ maxWidth: 800, margin: '0 auto', padding: '56px 24px 100px' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
          <div style={{ background: C.surface, border: `1px solid ${C.border}`, borderRadius: 20, padding: 'clamp(28px, 4vw, 48px)' }}>

            <Section icon={Scale} number="1" title="Acceptance of Terms">
              <BodyText>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</BodyText>
            </Section>

            <Section icon={Users} number="2" title="Use License">
              <BodyText>Permission is granted to temporarily download one copy of the materials on The Meet Patel's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</BodyText>
              <BulletList items={['Modify or copy the materials', 'Use the materials for any commercial purpose or for any public display', 'Attempt to reverse engineer any software contained on the website', 'Remove any copyright or other proprietary notations from the materials']} />
            </Section>

            <Section icon={AlertTriangle} number="3" title="Disclaimer">
              <BodyText>The materials on The Meet Patel's website are provided on an 'as is' basis. The Meet Patel makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</BodyText>
            </Section>

            <Section icon={Shield} number="4" title="Limitations">
              <BodyText>In no event shall The Meet Patel or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on The Meet Patel's website, even if The Meet Patel or an authorized representative has been notified orally or in writing of the possibility of such damage.</BodyText>
            </Section>

            <Section icon={FileText} number="5" title="Accuracy of Materials">
              <BodyText>The materials appearing on The Meet Patel's website could include technical, typographical, or photographic errors. The Meet Patel does not warrant that any of the materials on its website are accurate, complete, or current. The Meet Patel may make changes to the materials contained on its website at any time without notice.</BodyText>
            </Section>

            <Section icon={Globe} number="6" title="Links">
              <BodyText>The Meet Patel has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by The Meet Patel of the site. Use of any such linked website is at the user's own risk.</BodyText>
            </Section>

            <Section icon={Scale} number="7" title="Modifications">
              <BodyText>The Meet Patel may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</BodyText>
            </Section>

            <Section icon={Users} number="8" title="User Conduct">
              <BodyText>You agree to use our website and services only for lawful purposes and in accordance with these Terms. You agree not to:</BodyText>
              <BulletList items={['Use the website in any way that violates any applicable laws or regulations', 'Transmit any harmful, threatening, abusive, or harassing content', 'Impersonate any person or entity or misrepresent your affiliation', 'Interfere with or disrupt the website or servers', 'Attempt to gain unauthorized access to any part of the website']} />
            </Section>

            <Section icon={Shield} number="9" title="Intellectual Property">
              <BodyText>All content, including but not limited to text, graphics, logos, images, and software, is the property of The Meet Patel or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without written permission.</BodyText>
            </Section>

            <Section icon={Scale} number="10" title="Governing Law">
              <BodyText>These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.</BodyText>
            </Section>

            <Section icon={Mail} number="11" title="Contact Information">
              <BodyText>If you have any questions about these Terms of Service, please contact us:</BodyText>
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
                <strong style={{ color: C.primary }}>Note:</strong> These Terms of Service may be updated from time to time. We will notify you of any material changes by posting the new Terms on this page and updating the "Last updated" date.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 20, marginTop: 32, flexWrap: 'wrap' }}>
            {[['Privacy Policy', '/privacy-policy'], ['Cookie Policy', '/cookie-policy']].map(([label, href]) => (
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

export default TermsOfServicePage;
