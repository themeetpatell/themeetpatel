import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

const C = { bg: '#09090e', violet: '#8b5cf6' };

function isTokenValid() {
  const token = localStorage.getItem('admin_token');
  if (!token) return false;
  try {
    const decoded = atob(token.replace(/-/g, '+').replace(/_/g, '/'));
    const parts = decoded.split(':');
    if (parts.length < 3) return false;
    const expiry = Number(parts[1]);
    return Date.now() < expiry;
  } catch {
    return false;
  }
}

export default function AdminProtectedRoute({ children }) {
  const [authed, setAuthed] = useState(undefined); // undefined = loading

  useEffect(() => {
    setAuthed(isTokenValid());
  }, []);

  if (authed === undefined) {
    return (
      <div style={{
        background: C.bg, minHeight: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          border: `3px solid rgba(139,92,246,0.2)`,
          borderTopColor: C.violet,
          animation: 'spin 0.8s linear infinite',
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (!authed) return <Navigate to="/admin/login" replace />;

  return children;
}
