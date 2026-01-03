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
  Settings,
  Users
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
      title: "Community",
      href: "/community",
      icon: Users
    },
    {
      title: "Blog",
      href: "/blogs",
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
            ? 'bg-white/85 backdrop-blur-xl border-b border-purple-200/50 shadow-lg shadow-purple-100/50' 
            : 'bg-white/70 backdrop-blur-md'
        }`}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Apple-style Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-50/60 via-pink-50/60 to-purple-50/60"
          animate={{
            opacity: isHovering ? 1 : 0.8
          }}
          transition={{ duration: 0.3 }}
        />


        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <Link to="/" className="flex items-center group">
                <motion.img
                  src={logoImage}
                  alt="Meet Patel Logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
                <span className="ml-2 sm:ml-3 text-gray-900 text-sm sm:text-lg font-semibold group-hover:text-purple-600 transition-colors">
                  Meet Patel
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <motion.div key={item.title} whileHover={{ y: -2 }}>
                  <Link
                    to={item.href}
                    className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 transition-colors duration-200 font-medium text-sm"
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
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-colors duration-200 text-sm shadow-lg shadow-purple-200"
              >
                Get In Touch
              </motion.a>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors duration-300"
              aria-label="Toggle mobile menu"
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
            className="fixed top-16 sm:top-20 left-0 right-0 z-[9997] lg:hidden bg-white/95 backdrop-blur-xl border-b border-purple-200/50 overflow-hidden shadow-xl shadow-purple-100/50"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
              <div className="space-y-4 sm:space-y-6">
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
                      className="flex items-center space-x-3 p-3 sm:p-4 rounded-xl hover:bg-purple-50 transition-all duration-300 group"
                          onClick={() => {
                            setIsOpen(false);
                            trackButtonClick(`nav_${item.title.toLowerCase()}`, 'mobile_menu');
                          }}
                        >
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg shadow-purple-200/50">
                        <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-gray-900 font-medium group-hover:text-purple-600 transition-colors duration-300 text-sm sm:text-base">
                          {item.title}
                            </h4>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
              </div>

              {/* Mobile CTA Buttons */}
              <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t border-purple-200/50">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-colors block text-center py-2.5 sm:py-3 text-sm sm:text-base shadow-lg shadow-purple-200"
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
            className="fixed inset-0 bg-purple-900/20 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

    </>
  );
};

export default UltraNavigation;

