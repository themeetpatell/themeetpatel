import React from 'react';

/**
 * Rendered by PostHogErrorBoundary when a render-time exception escapes the app.
 * The exception itself is already reported to PostHog error tracking.
 */
export default function AppCrashFallback() {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 12,
        background: '#09090e',
        color: '#cfd0e6',
        fontFamily: "'Nunito', system-ui, -apple-system, sans-serif",
        padding: 24,
        textAlign: 'center',
      }}
    >
      <h1 style={{ fontSize: 22, fontWeight: 700, color: '#f7f7fb', margin: 0 }}>
        Something broke on this page
      </h1>
      <p style={{ fontSize: 15, margin: 0 }}>
        It has been reported. Try reloading, or head back to{' '}
        <a href="/" style={{ color: '#c4b5fd' }}>
          the homepage
        </a>
        .
      </p>
    </div>
  );
}
