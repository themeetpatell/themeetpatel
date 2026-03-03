import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';

const C = { bg: '#09090e', violet: '#8b5cf6' };

export default function AdminProtectedRoute({ children }) {
  const [session, setSession] = useState(undefined); // undefined = loading

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session));

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => subscription.unsubscribe();
  }, []);

  if (session === undefined) {
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

  if (!session) return <Navigate to="/admin/login" replace />;

  return children;
}
