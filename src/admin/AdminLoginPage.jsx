import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { Lock, Mail, Eye, EyeOff, LogIn } from 'lucide-react';

const C = {
  bg:           '#09090e',
  surface:      '#111118',
  border:       'rgba(255,255,255,0.07)',
  primary:      '#f5f5f7',
  secondary:    '#8e8ea0',
  muted:        '#5a5a6e',
  violet:       '#8b5cf6',
  violetDim:    'rgba(139,92,246,0.10)',
  violetBorder: 'rgba(139,92,246,0.22)',
  error:        '#ef4444',
  errorDim:     'rgba(239,68,68,0.10)',
};

export default function AdminLoginPage() {
  const [email, setEmail]         = useState('');
  const [password, setPassword]   = useState('');
  const [showPass, setShowPass]   = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError(error.message);
    } else {
      navigate('/admin');
    }
  };

  const inputStyle = {
    width: '100%', padding: '11px 14px 11px 44px',
    background: 'rgba(255,255,255,0.03)',
    border: `1px solid ${C.border}`,
    borderRadius: 10, color: C.primary, fontSize: 14,
    outline: 'none', boxSizing: 'border-box',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  };

  return (
    <div style={{
      background: C.bg, minHeight: '100vh',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 24, fontFamily: 'system-ui, -apple-system, sans-serif',
    }}>
      <div style={{
        background: C.surface,
        border: `1px solid ${C.border}`,
        borderRadius: 20,
        padding: 40,
        width: '100%',
        maxWidth: 400,
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Top glow */}
        <div style={{
          position: 'absolute', top: 0, left: '20%', right: '20%',
          height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)',
        }} />

        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{
            width: 56, height: 56, borderRadius: 16,
            background: C.violetDim, border: `1px solid ${C.violetBorder}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 16px',
          }}>
            <Lock size={24} color={C.violet} />
          </div>
          <h1 style={{ fontSize: 22, fontWeight: 800, color: C.primary, margin: '0 0 6px', letterSpacing: '-0.02em' }}>
            Admin Login
          </h1>
          <p style={{ fontSize: 13, color: C.muted, margin: 0 }}>themeetpatel.com CMS</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Email */}
          <div style={{ position: 'relative' }}>
            <Mail size={15} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: C.muted, pointerEvents: 'none' }} />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = C.violetBorder}
              onBlur={e => e.target.style.borderColor = C.border}
            />
          </div>

          {/* Password */}
          <div style={{ position: 'relative' }}>
            <Lock size={15} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: C.muted, pointerEvents: 'none' }} />
            <input
              type={showPass ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
              style={{ ...inputStyle, paddingRight: 44 }}
              onFocus={e => e.target.style.borderColor = C.violetBorder}
              onBlur={e => e.target.style.borderColor = C.border}
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              style={{
                position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
                background: 'none', border: 'none', cursor: 'pointer', color: C.muted, padding: 0,
              }}
            >
              {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>

          {/* Error */}
          {error && (
            <div style={{
              background: C.errorDim, border: `1px solid rgba(239,68,68,0.2)`,
              borderRadius: 8, padding: '10px 14px',
              fontSize: 13, color: C.error,
            }}>
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%', padding: '12px 0',
              background: loading ? 'rgba(139,92,246,0.4)' : C.violet,
              border: 'none', borderRadius: 10,
              color: '#fff', fontSize: 14, fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              transition: 'background 0.2s', fontFamily: 'inherit',
            }}
          >
            {loading ? (
              <>
                <div style={{ width: 14, height: 14, border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
                Signing in…
              </>
            ) : (
              <><LogIn size={15} /> Sign In</>
            )}
          </button>
        </form>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}
