import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  User,
  Briefcase,
  Mail,
  BookOpen,
  Home,
  FileText,
  Settings
} from 'lucide-react';
import logoImage from '../assets/logo for themeetpatel.png';
import { trackButtonClick, trackExternalLink } from '../utils/analytics';

import '../App.css';

const UltraNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const navRef = useRef(null);
  const { scrollY } = useScroll();

  // Transform scroll progress to opacity and scale
  const navOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const navScale = useTransform(scrollY, [0, 100], [1, 0.98]);
  const navBlur = useTransform(scrollY, [0, 100], [0, 10]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleMouseMove = (e) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const navigationItems = [
    {
      title: "Home",
      href: "/",
      icon: Home
    },
    {
      title: "About",
      href: "/about",
      icon: User
    },
    {
      title: "Portfolio",
      href: "/portfolio",
      icon: Briefcase
    },
    {
      title: "Systems",
      href: "/systems",
      icon: Settings
    },
    {
      title: "Blog",
      href: "/blog",
      icon: BookOpen
    }
  ];

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        ref={navRef}
        style={{
          opacity: navOpacity,
          scale: navScale,
          filter: `blur(${navBlur}px)`
        }}
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
          scrolled 
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Apple-style Background */}
        <motion.div
          className="absolute inset-0 bg-black/50"
          animate={{
            opacity: isHovering ? 0.8 : 0.5
          }}
          transition={{ duration: 0.3 }}
        />


        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <Link to="/" className="flex items-center group">
                <motion.div
                  className="w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <img 
                    src={logoImage}
                    alt="The Meet Patel Logo"
                    className="w-full h-full object-contain"
                  />
                </motion.div>
                <span className="ml-3 text-white text-lg font-semibold group-hover:text-cyan-400 transition-colors">
                  The Meet Patel
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <motion.div key={item.title} whileHover={{ y: -2 }}>
                            <Link
                    to={item.href}
                    className="flex items-center space-x-2 text-white/70 hover:text-white transition-colors duration-200 font-medium text-sm"
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.title}</span>
                            </Link>
                          </motion.div>
                        ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-teal-500 text-white rounded-lg font-medium hover:from-cyan-500 hover:to-teal-600 transition-colors duration-200 text-sm"
              >
                Get In Touch
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white/80 hover:text-white transition-colors duration-300"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-20 left-0 right-0 z-[9997] lg:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="space-y-6">
                {/* Navigation Items */}
                {navigationItems.map((item, index) => (
                      <motion.div
                    key={item.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                      to={item.href}
                      className="flex items-center space-x-3 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                          onClick={() => {
                            setIsOpen(false);
                            trackButtonClick(`nav_${item.title.toLowerCase()}`, 'mobile_menu');
                          }}
                        >
                      <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                          {item.title}
                            </h4>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-cyan-400 to-teal-500 text-white rounded-lg font-medium hover:from-cyan-500 hover:to-teal-600 transition-colors block text-center py-3"
                  onClick={() => {
                    setIsOpen(false);
                    trackButtonClick('get_in_touch', 'mobile_menu');
                  }}
                >
                  Get In Touch
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

    </>
  );
};

export default UltraNavigation;

