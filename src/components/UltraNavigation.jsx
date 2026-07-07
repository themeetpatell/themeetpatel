import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/logo for themeetpatel.png';
import { trackButtonClick } from '../utils/analytics';
import '../App.css';

const UltraNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => setIsOpen(false), [location]);

  // Fundraising IA: lead with the company/product, keep the founder credible,
  // and give investors a path. Personal-brand surfaces (My Story/v2, Community,
  // Mind, Portfolio) still exist as routes — reachable from the footer — but are
  // out of the primary nav so a VC isn't scattered across vanity pages.
  const navigationItems = [
    { title: 'Home',    href: '/' },
    { title: 'Dan',     href: 'https://usedan.com', external: true },
    { title: 'Founder', href: '/about' },
    { title: 'Writing', href: '/blogs' },
  ];

  const isActive = (href) => {
    if (href.startsWith('http')) return false; // external (Dan → usedan.com)
    if (href === '/')   return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* ───── Main Navigation ───── */}
      <nav
        aria-label="Main navigation"
        style={{ top: 'var(--launch-banner-h, 0px)' }}
        className={`fixed left-0 right-0 z-[9999] transition-all duration-400 ${
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

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navigationItems.map((item) => {
                const cls = `text-sm font-medium transition-colors duration-200 ${
                  isActive(item.href) ? 'text-white' : 'text-[#8e8ea0] hover:text-white'
                }`;
                const track = () => trackButtonClick(`nav_${item.title.toLowerCase()}`, 'desktop_nav');
                return item.external ? (
                  <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer" onClick={track} className={cls}>
                    {item.title}
                  </a>
                ) : (
                  <Link key={item.title} to={item.href} onClick={track} className={cls}>
                    {item.title}
                  </Link>
                );
              })}
            </div>

            {/* Desktop CTA — investor path */}
            <div className="hidden lg:flex items-center">
              <motion.a
                href="/investors"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => trackButtonClick('for_investors', 'nav_cta')}
                className="px-5 py-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-sm font-semibold rounded-full transition-colors duration-200 shadow-[0_4px_14px_rgba(139,92,246,0.35)]"
              >
                For investors
              </motion.a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-1.5 text-[#8e8ea0] hover:text-white transition-colors"
              aria-label="Toggle menu"
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

      {/* ───── Mobile Menu ───── */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              style={{ top: 'calc(var(--launch-banner-h, 0px) + var(--nav-h, 64px))' }}
              className="fixed left-0 right-0 z-[9997] lg:hidden bg-[#111118] border-b border-white/[0.07]"
            >
              <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6">
                <div className="space-y-1">
                  {navigationItems.map((item, i) => {
                    const cls = `flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? 'bg-[#8b5cf6]/10 text-white'
                        : 'text-[#8e8ea0] hover:bg-white/[0.05] hover:text-white'
                    }`;
                    const onNav = () => {
                      setIsOpen(false);
                      trackButtonClick(`nav_${item.title.toLowerCase()}`, 'mobile_menu');
                    };
                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                      >
                        {item.external ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={onNav} className={cls}>
                            {item.title}
                          </a>
                        ) : (
                          <Link to={item.href} onClick={onNav} className={cls}>
                            {item.title}
                          </Link>
                        )}
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-5 pt-5 border-t border-white/[0.07]">
                  <a
                    href="/investors"
                    onClick={() => {
                      setIsOpen(false);
                      trackButtonClick('for_investors', 'mobile_menu');
                    }}
                    className="block w-full text-center px-5 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-sm font-semibold rounded-full transition-colors duration-200"
                  >
                    For investors
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 z-[9995] lg:hidden"
              onClick={() => setIsOpen(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default UltraNavigation;
