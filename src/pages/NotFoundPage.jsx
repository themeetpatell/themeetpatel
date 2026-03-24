import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const C = {
  bg: '#09090e',
  surface: '#111118',
  border: 'rgba(139,92,246,0.15)',
  violet: '#8b5cf6',
  primary: '#f8fafc',
  secondary: '#94a3b8',
  muted: '#475569',
};

export default function NotFoundPage() {
  return (
    <>
      <SEOHead
        title="Page Not Found | The Meet Patel"
        description="The page you're looking for doesn't exist."
        canonical="/404"
        robotsNoindex={true}
      />
      <div style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: C.bg,
        padding: '60px 24px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: 80, fontWeight: 900, color: C.violet, lineHeight: 1, marginBottom: 16 }}>
          404
        </div>
        <h1 style={{ fontSize: 28, fontWeight: 700, color: C.primary, marginBottom: 12 }}>
          Page Not Found
        </h1>
        <p style={{ fontSize: 16, color: C.secondary, maxWidth: 420, marginBottom: 40, lineHeight: 1.6 }}>
          This page doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '12px 28px',
            borderRadius: 10,
            background: C.violet,
            color: '#fff',
            fontWeight: 700,
            fontSize: 15,
            textDecoration: 'none',
          }}
        >
          Back to Home
        </Link>
      </div>
    </>
  );
}
