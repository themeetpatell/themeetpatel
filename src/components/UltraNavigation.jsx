import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion, useDragControls } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/logo for themeetpatel.png';
import { trackButtonClick } from '../utils/analytics';
import { signupHref } from '../data/company8';
import '../App.css';

/** Downward drag distance (px) or flick velocity past which the sheet dismisses. */
const SHEET_DISMISS_OFFSET = 90;
const SHEET_DISMISS_VELOCITY = 500;

/**
 * StickyWhatsApp pins a full-width bar to the bottom edge on mobile at z-index
 * 9999 — the same layer as this nav. The menu is a bottom sheet, so it has to
 * sit above that bar, and the nav has to sit above the scrim to keep its close
 * button live and undimmed.
 */
const Z = {
  navResting: 'z-[9999]',
  navMenuOpen: 'z-[10002]',
  backdrop: 'z-[10000]',
  sheet: 'z-[10001]',
};

const UltraNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const dragControls = useDragControls();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location]);

  // While the sheet is open: Escape closes it and the page behind it must not scroll.
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Fundraising IA: lead with the company/product, keep the founder credible,
  // and give investors a path. Personal-brand surfaces (Community,
  // Mind, Portfolio) still exist as routes — reachable from the footer — but are
  // out of the primary nav so a VC isn't scattered across vanity pages.
  const navigationItems = [
    { title: 'Home',    href: '/' },
    { title: 'Dan',     href: 'https://usedan.com', external: true },
    { title: 'Thesis',  href: '/thesis' },
    { title: 'About Me', href: '/about' },
    { title: 'Writing', href: '/blogs' },
  ];

  const isActive = (href) => {
    if (href.startsWith('http')) return false; // external (Dan → usedan.com)
    if (href === '/')   return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  const railTransition = prefersReducedMotion
    ? { duration: 0 }
    : { type: 'spring', stiffness: 380, damping: 32 };

  const sheetTransition = prefersReducedMotion
    ? { duration: 0.15 }
    : { type: 'spring', stiffness: 420, damping: 40 };

  return (
    <>
      {/* ───── Main Navigation ───── */}
      <nav
        aria-label="Main navigation"
        style={{ top: 'var(--launch-banner-h, 0px)' }}
        className={`fixed left-0 right-0 transition-all duration-400 ${
          isOpen ? Z.navMenuOpen : Z.navResting
        } ${
          scrolled
            ? 'bg-[rgba(9,9,14,0.95)] backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_1px_24px_rgba(0,0,0,0.5)]'
            : 'bg-[rgba(9,9,14,0.80)] backdrop-blur-xl'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-[64px] sm:h-[70px]">

            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2.5 group shrink-0"
              onClick={() => trackButtonClick('logo', 'nav')}
            >
              <img
                src={logoImage}
                alt="Meet Patel"
                className="w-8 h-8 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-[#f5f5f7] text-sm font-semibold tracking-tight group-hover:text-white transition-colors">
                Meet Patel
              </span>
            </Link>

            {/* Desktop segmented rail — one pill, active item is a capsule that
                slides between links via a shared layout animation. */}
            <div className="hidden lg:flex items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.04] p-1">
              {navigationItems.map((item) => {
                const active = isActive(item.href);
                const cls = `relative rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors duration-200 ${
                  active ? 'text-white' : 'text-[#8e8ea0] hover:text-white'
                }`;
                const track = () => trackButtonClick(`nav_${item.title.toLowerCase()}`, 'desktop_nav');
                const label = (
                  <>
                    {active && (
                      <motion.span
                        layoutId="nav-rail-active"
                        aria-hidden="true"
                        transition={railTransition}
                        className="absolute inset-0 rounded-full bg-[#8b5cf6]/20 shadow-[0_0_0_1px_rgba(139,92,246,0.25)_inset]"
                      />
                    )}
                    <span className="relative z-10">{item.title}</span>
                  </>
                );

                return item.external ? (
                  <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" onClick={track} className={cls}>
                    {label}
                  </a>
                ) : (
                  <Link key={item.title} to={item.href} onClick={track} className={cls} aria-current={active ? 'page' : undefined}>
                    {label}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA — investor path. Client-side route, not a full reload. */}
            <div className="hidden lg:flex items-center">
              <Link
                to="/investors"
                onClick={() => trackButtonClick('for_investors', 'nav_cta')}
                className="px-5 py-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-sm font-semibold rounded-full shadow-[0_4px_14px_rgba(139,92,246,0.35)] transition-[background-color,transform] duration-200 hover:scale-[1.03] active:scale-[0.97]"
              >
                For investors
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-1.5 text-[#8e8ea0] hover:text-white transition-colors"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu-sheet"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

      {/* ───── Mobile Menu — bottom sheet, so every row lands in the thumb zone ───── */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Scrim. Sits above StickyWhatsApp so the bar is covered, not poking through. */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
              className={`fixed inset-0 bg-black/70 backdrop-blur-[2px] lg:hidden ${Z.backdrop}`}
            />

            <motion.div
              id="mobile-menu-sheet"
              role="dialog"
              aria-modal="true"
              aria-label="Site menu"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={sheetTransition}
              drag={prefersReducedMotion ? false : 'y'}
              // Drag starts from the handle only, so the list can scroll on short viewports.
              dragListener={false}
              dragControls={dragControls}
              dragConstraints={{ top: 0, bottom: 0 }}
              dragElastic={{ top: 0, bottom: 0.4 }}
              onDragEnd={(_, info) => {
                if (info.offset.y > SHEET_DISMISS_OFFSET || info.velocity.y > SHEET_DISMISS_VELOCITY) {
                  setIsOpen(false);
                }
              }}
              style={{ paddingBottom: 'max(env(safe-area-inset-bottom), 20px)' }}
              className={`fixed left-0 right-0 bottom-0 lg:hidden max-h-[88dvh] flex flex-col rounded-t-3xl bg-[#14141d] border-t border-white/[0.09] shadow-[0_-14px_40px_-10px_rgba(0,0,0,0.9)] ${Z.sheet}`}
            >
              {/* Grab handle — the only drag surface */}
              <div
                onPointerDown={(e) => dragControls.start(e)}
                className="flex shrink-0 justify-center pt-3.5 pb-2.5 touch-none cursor-grab active:cursor-grabbing"
              >
                <span aria-hidden="true" className="h-1 w-9 rounded-full bg-white/20" />
              </div>

              <div className="overflow-y-auto px-4 pb-1">
                <div className="space-y-0.5">
                  {navigationItems.map((item, i) => {
                    const active = isActive(item.href);
                    const cls = `flex items-center px-4 py-3.5 rounded-xl text-[15px] font-medium transition-colors duration-200 ${
                      active
                        ? 'bg-[#8b5cf6]/[0.16] text-white'
                        : 'text-[#a8a9c3] hover:bg-white/[0.05] hover:text-white'
                    }`;
                    const onNav = () => {
                      setIsOpen(false);
                      trackButtonClick(`nav_${item.title.toLowerCase()}`, 'mobile_menu');
                    };

                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={prefersReducedMotion ? { duration: 0 } : { delay: 0.04 + i * 0.035 }}
                      >
                        {item.external ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={onNav} className={cls}>
                            {item.title}
                          </a>
                        ) : (
                          <Link to={item.href} onClick={onNav} className={cls} aria-current={active ? 'page' : undefined}>
                            {item.title}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                {/* The launch bar is desktop-only, so the Dan CTA lives here on mobile. */}
                <div className="mt-4 pt-4 border-t border-white/[0.07] space-y-2.5">
                  <a
                    href={signupHref('nav_sheet')}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setIsOpen(false);
                      trackButtonClick('try_dan', 'mobile_menu');
                    }}
                    className="block w-full text-center px-5 py-3.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-[15px] font-semibold rounded-full transition-colors duration-200"
                  >
                    Try Dan free
                  </a>
                  <Link
                    to="/investors"
                    onClick={() => {
                      setIsOpen(false);
                      trackButtonClick('for_investors', 'mobile_menu');
                    }}
                    className="block w-full text-center px-5 py-3.5 border border-white/[0.12] hover:border-white/25 text-[#f5f5f7] text-[15px] font-semibold rounded-full transition-colors duration-200"
                  >
                    For investors
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default UltraNavigation;
