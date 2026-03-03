import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
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

  const navigationItems = [
    { title: 'Home',      href: '/' },
    { title: 'About',     href: '/about' },
    { title: 'Portfolio', href: '/portfolio' },
    { title: 'Community', href: '/community' },
    { title: 'Blog',      href: '/blogs' },
  ];

  const isActive = (href) => {
    if (href === '/') return location.pathname === '/';
    return location.pathname.startsWith(href);
  };

  return (
    <>
      {/* ───── Main Navigation ───── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-400 ${
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
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.href}
                  onClick={() => trackButtonClick(`nav_${item.title.toLowerCase()}`, 'desktop_nav')}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-white'
                      : 'text-[#8e8ea0] hover:text-white'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => trackButtonClick('lets_talk', 'nav_cta')}
                className="px-5 py-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-sm font-semibold rounded-full transition-colors duration-200 shadow-[0_4px_14px_rgba(139,92,246,0.35)]"
              >
                Let's Talk
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
              className="fixed top-[64px] sm:top-[70px] left-0 right-0 z-[9997] lg:hidden bg-[#111118] border-b border-white/[0.07]"
            >
              <div className="max-w-7xl mx-auto px-5 sm:px-8 py-6">
                <div className="space-y-1">
                  {navigationItems.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        to={item.href}
                        onClick={() => {
                          setIsOpen(false);
                          trackButtonClick(`nav_${item.title.toLowerCase()}`, 'mobile_menu');
                        }}
                        className={`flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                          isActive(item.href)
                            ? 'bg-[#8b5cf6]/10 text-white'
                            : 'text-[#8e8ea0] hover:bg-white/[0.05] hover:text-white'
                        }`}
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-5 pt-5 border-t border-white/[0.07]">
                  <a
                    href="/contact"
                    onClick={() => {
                      setIsOpen(false);
                      trackButtonClick('lets_talk', 'mobile_menu');
                    }}
                    className="block w-full text-center px-5 py-3 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-sm font-semibold rounded-full transition-colors duration-200"
                  >
                    Let's Talk
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
