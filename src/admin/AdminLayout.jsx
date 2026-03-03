import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import {
  LayoutDashboard, FileText, Plus, Image, LogOut,
  Menu, X, ExternalLink, ChevronRight,
} from 'lucide-react';

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

const SIDEBAR_W = 240;

const navItems = [
  { to: '/admin',          icon: LayoutDashboard, label: 'Dashboard', end: true },
  { to: '/admin/articles', icon: FileText,         label: 'Articles' },
  { to: '/admin/media',    icon: Image,            label: 'Media' },
];

function SidebarContent({ onClose }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  const linkBase = {
    display: 'flex', alignItems: 'center', gap: 10,
    padding: '9px 14px', borderRadius: 8, fontSize: 13, fontWeight: 500,
    textDecoration: 'none', transition: 'all 0.15s ease',
    color: C.secondary, border: '1px solid transparent',
  };

  return (
    <div style={{
      width: SIDEBAR_W, minWidth: SIDEBAR_W,
      background: C.bg,
      borderRight: `1px solid ${C.border}`,
      display: 'flex', flexDirection: 'column',
      height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 100,
      overflowY: 'auto',
    }}>
      {/* Logo */}
      <div style={{
        padding: '20px 20px 16px',
        borderBottom: `1px solid ${C.border}`,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 800, color: C.primary, letterSpacing: '-0.02em' }}>
            Meet Patel
          </div>
          <div style={{ fontSize: 10, color: C.violet, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 2 }}>
            CMS Admin
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: C.muted, cursor: 'pointer', padding: 4 }}>
            <X size={16} />
          </button>
        )}
      </div>

      {/* New Article CTA */}
      <div style={{ padding: '16px 16px 8px' }}>
        <NavLink
          to="/admin/articles/new"
          onClick={onClose}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
            padding: '9px 0', borderRadius: 9,
            background: C.violet, color: '#fff',
            fontSize: 13, fontWeight: 700, textDecoration: 'none',
            transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
        >
          <Plus size={14} /> New Article
        </NavLink>
      </div>

      {/* Nav */}
      <nav style={{ padding: '8px 12px', flex: 1 }}>
        <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.muted, padding: '8px 4px 6px' }}>
          Content
        </div>
        {navItems.map(({ to, icon: Icon, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={onClose}
            style={({ isActive }) => ({
              ...linkBase,
              color: isActive ? C.violet : C.secondary,
              background: isActive ? C.violetDim : 'transparent',
              border: `1px solid ${isActive ? C.violetBorder : 'transparent'}`,
            })}
            onMouseEnter={e => { if (!e.currentTarget.style.background.includes('rgba(139,92,246')) e.currentTarget.style.color = C.primary; }}
            onMouseLeave={e => { if (!e.currentTarget.style.background.includes('rgba(139,92,246')) e.currentTarget.style.color = C.secondary; }}
          >
            {({ isActive }) => (
              <>
                {isActive && <div style={{ position: 'absolute', left: 0, top: '20%', bottom: '20%', width: 3, borderRadius: '0 2px 2px 0', background: C.violet }} />}
                <Icon size={15} />
                {label}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Bottom actions */}
      <div style={{ padding: '12px 12px 20px', borderTop: `1px solid ${C.border}` }}>
        <a
          href="/blogs"
          target="_blank"
          rel="noreferrer"
          style={{ ...linkBase, marginBottom: 4, color: C.muted, fontSize: 12 }}
          onMouseEnter={e => e.currentTarget.style.color = C.secondary}
          onMouseLeave={e => e.currentTarget.style.color = C.muted}
        >
          <ExternalLink size={13} /> View Blog
        </a>
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          style={{ ...linkBase, marginBottom: 8, color: C.muted, fontSize: 12 }}
          onMouseEnter={e => e.currentTarget.style.color = C.secondary}
          onMouseLeave={e => e.currentTarget.style.color = C.muted}
        >
          <ExternalLink size={13} /> View Site
        </a>
        <button
          onClick={handleLogout}
          style={{
            ...linkBase, width: '100%', border: 'none',
            background: 'none', cursor: 'pointer', textAlign: 'left',
            color: C.muted, fontSize: 12,
          }}
          onMouseEnter={e => { e.currentTarget.style.color = '#ef4444'; e.currentTarget.style.background = 'rgba(239,68,68,0.06)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = C.muted; e.currentTarget.style.background = 'transparent'; }}
        >
          <LogOut size={13} /> Sign Out
        </button>
      </div>
    </div>
  );
}

export default function AdminLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div style={{ display: 'flex', background: C.surface, minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      {/* Desktop sidebar */}
      <div style={{ display: 'none' }} className="admin-sidebar-desktop">
        <SidebarContent />
      </div>

      {/* Mobile sidebar overlay */}
      {mobileOpen && (
        <div
          style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.6)', zIndex: 99 }}
          onClick={() => setMobileOpen(false)}
        />
      )}
      {mobileOpen && <SidebarContent onClose={() => setMobileOpen(false)} />}

      {/* Desktop sidebar (always visible) */}
      <div className="admin-sidebar-show">
        <SidebarContent />
      </div>

      {/* Main content */}
      <div style={{
        flex: 1,
        marginLeft: 0,
        minHeight: '100vh',
        background: C.surface,
        display: 'flex',
        flexDirection: 'column',
      }} className="admin-main-content">
        {/* Mobile top bar */}
        <div className="admin-mobile-bar" style={{
          display: 'none',
          padding: '14px 20px',
          background: C.bg,
          borderBottom: `1px solid ${C.border}`,
          alignItems: 'center', gap: 12,
        }}>
          <button
            onClick={() => setMobileOpen(true)}
            style={{ background: 'none', border: 'none', color: C.secondary, cursor: 'pointer', padding: 0 }}
          >
            <Menu size={20} />
          </button>
          <span style={{ fontSize: 14, fontWeight: 700, color: C.primary }}>Meet Patel CMS</span>
        </div>

        <div style={{ flex: 1, overflowY: 'auto' }}>
          <Outlet />
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .admin-sidebar-desktop { display: block !important; }
          .admin-sidebar-show > div { display: flex !important; }
          .admin-main-content { margin-left: ${SIDEBAR_W}px !important; }
          .admin-mobile-bar { display: none !important; }
        }
        @media (max-width: 767px) {
          .admin-sidebar-show { display: none; }
          .admin-mobile-bar { display: flex !important; }
        }
        * { box-sizing: border-box; -webkit-font-smoothing: antialiased; }
      `}</style>
    </div>
  );
}
