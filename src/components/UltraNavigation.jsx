import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Rocket,
  TrendingUp,
  Crown,
  Star,
  Zap,
  Globe,
  Code,
  BookOpen,
  FileText,
  Video,
  Play,
  Users,
  Target,
  Activity,
  Brain,
  Lightbulb,
  Building2,
  Network
} from 'lucide-react';
import WaitlistForm from './WaitlistForm';
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

  const solutions = [
    {
      title: "Idea to MVP",
      description: "Transform your idea into a working prototype",
      icon: Lightbulb,
      href: "/solutions/idea-to-mvp",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "MVP to PMF",
      description: "Find product-market fit and validate demand",
      icon: Target,
      href: "/solutions/mvp-to-pmf",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "PMF to Scale",
      description: "Scale your validated product to millions",
      icon: TrendingUp,
      href: "/solutions/pmf-to-scale",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Scale to Exit",
      description: "Prepare for acquisition or IPO",
      icon: Crown,
      href: "/solutions/scale-to-exit",
      color: "from-orange-500 to-red-500"
    }
  ];

  const features = [
    {
      title: "AI Co-Builders",
      description: "AI-powered development assistance",
      icon: Brain,
      href: "/features/ai-co-builders",
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "Real-time Analytics",
      description: "Live insights and performance tracking",
      icon: Activity,
      href: "/features/real-time-analytics",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Fractional CXOs",
      description: "Expert leadership on-demand",
      icon: Users,
      href: "/features/fractional-cxos",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Ecosystem Access",
      description: "Connect with startup ecosystem",
      icon: Globe,
      href: "/features/ecosystem-access",
      color: "from-orange-500 to-yellow-500"
    },
    {
      title: "Mergers & Acquisitions",
      description: "Strategic M&A guidance and execution",
      icon: Building2,
      href: "/features/mergers-acquisition",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "World-Class Community",
      description: "125K+ founders network and resources",
      icon: Network,
      href: "/features/ecosystem-access",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  const resources = [
    {
      title: "Blog",
      description: "Insights and stories from the startup world",
      icon: BookOpen,
      href: "/blog",
      color: "from-blue-500 to-indigo-500"
    },
    {
      title: "Case Studies",
      description: "Real success stories from our customers",
      icon: FileText,
      href: "/case-studies",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Webinars",
      description: "Live and on-demand learning sessions",
      icon: Video,
      href: "/webinars",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Documentation",
      description: "Complete guides and API documentation",
      icon: Code,
      href: "/docs",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Co-Builder Playground",
      description: "Contribute to building StartupOS live",
      icon: Play,
      href: "/co-builder-playground",
      color: "from-cyan-500 to-blue-500"
    }
  ];

  const handleDropdownEnter = (dropdown) => {
    setActiveDropdown(dropdown);
    setIsHovering(true);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
    setIsHovering(false);
  };

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
        {/* Animated Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-black via-blue-900/20 to-black"
          animate={{
            background: isHovering 
              ? [
                  "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(59,130,246,0.3) 50%, rgba(0,0,0,1) 100%)",
                  "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(147,51,234,0.3) 50%, rgba(0,0,0,1) 100%)",
                  "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(59,130,246,0.3) 50%, rgba(0,0,0,1) 100%)"
                ]
              : "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(59,130,246,0.1) 50%, rgba(0,0,0,1) 100%)"
          }}
          transition={{ duration: 2, repeat: isHovering ? Infinity : 0 }}
        />

        {/* Mouse Trail Effect */}
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full pointer-events-none"
          style={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
            filter: "blur(40px)"
          }}
          animate={{
            scale: isHovering ? [1, 1.2, 1] : 1,
            opacity: isHovering ? [0.3, 0.6, 0.3] : 0.1
          }}
          transition={{ duration: 2, repeat: isHovering ? Infinity : 0 }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <Link to="/" className="flex items-center space-x-3 group">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-2xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Rocket className="w-7 h-7 text-white" />
                </motion.div>
                <motion.span 
                  className="text-3xl font-black text-white group-hover:text-blue-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  StartupOS
                </motion.span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('solutions')}
                onMouseLeave={handleDropdownLeave}
              >
                <motion.button
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 py-2"
                  whileHover={{ y: -2 }}
                >
                  <span className="font-medium">Solutions</span>
                  <motion.div
                    animate={{ rotate: activeDropdown === 'solutions' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeDropdown === 'solutions' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.95 }}
                      transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-[9998]"
                    >
                      <div className="p-6 space-y-4">
                        {solutions.map((solution, index) => (
                          <motion.div
                            key={solution.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Link
                              to={solution.href}
                              className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                            >
                              <div className={`w-12 h-12 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                <solution.icon className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                                  {solution.title}
                                </h3>
                                <p className="text-white/60 text-sm mt-1 group-hover:text-white/80 transition-colors duration-300">
                                  {solution.description}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Features Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('features')}
                onMouseLeave={handleDropdownLeave}
              >
                <motion.button
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 py-2"
                  whileHover={{ y: -2 }}
                >
                  <span className="font-medium">Features</span>
                  <motion.div
                    animate={{ rotate: activeDropdown === 'features' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeDropdown === 'features' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.95 }}
                      transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-[9998]"
                    >
                      <div className="p-6 space-y-4">
                        {features.map((feature, index) => (
                          <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Link
                              to={feature.href}
                              className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                            >
                              <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                <feature.icon className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                                  {feature.title}
                                </h3>
                                <p className="text-white/60 text-sm mt-1 group-hover:text-white/80 transition-colors duration-300">
                                  {feature.description}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Resources Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleDropdownEnter('resources')}
                onMouseLeave={handleDropdownLeave}
              >
                <motion.button
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300 py-2"
                  whileHover={{ y: -2 }}
                >
                  <span className="font-medium">Resources</span>
                  <motion.div
                    animate={{ rotate: activeDropdown === 'resources' ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {activeDropdown === 'resources' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.95 }}
                      transition={{ duration: 0.3, type: "spring", bounce: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-black/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden z-[9998]"
                    >
                      <div className="p-6 space-y-4">
                        {resources.map((resource, index) => (
                          <motion.div
                            key={resource.title}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Link
                              to={resource.href}
                              className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                            >
                              <div className={`w-12 h-12 bg-gradient-to-r ${resource.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                <resource.icon className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <h3 className="text-white font-semibold group-hover:text-blue-400 transition-colors duration-300">
                                  {resource.title}
                                </h3>
                                <p className="text-white/60 text-sm mt-1 group-hover:text-white/80 transition-colors duration-300">
                                  {resource.description}
                                </p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Static Links */}
              <motion.div whileHover={{ y: -2 }}>
                <Link
                  to="/pricing"
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
                >
                  Pricing
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }}>
                <Link
                  to="/about"
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
                >
                  About
                </Link>
              </motion.div>

              <motion.div whileHover={{ y: -2 }}>
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-white transition-colors duration-300 font-medium"
                >
                  Contact
                </Link>
              </motion.div>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.a
                href="https://app.startupos.in"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 text-white/80 hover:text-white transition-colors duration-300 font-medium"
              >
                Sign In
              </motion.a>
              
              <WaitlistForm variant="primary" size="default" />
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
              <div className="grid grid-cols-1 gap-8">
                {/* Solutions */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-4">Solutions</h3>
                  <div className="space-y-3">
                    {solutions.map((solution, index) => (
                      <motion.div
                        key={solution.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={solution.href}
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className={`w-10 h-10 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center`}>
                            <solution.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                              {solution.title}
                            </h4>
                            <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors duration-300">
                              {solution.description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-4">Features</h3>
                  <div className="space-y-3">
                    {features.map((feature, index) => (
                      <motion.div
                        key={feature.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={feature.href}
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className={`w-10 h-10 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center`}>
                            <feature.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                              {feature.title}
                            </h4>
                            <p className="text-white/60 text-sm group-hover:text-blue-400 transition-colors duration-300">
                              {feature.description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Resources */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
                  <div className="space-y-3">
                    {resources.map((resource, index) => (
                      <motion.div
                        key={resource.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          to={resource.href}
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className={`w-10 h-10 bg-gradient-to-r ${resource.color} rounded-lg flex items-center justify-center`}>
                            <resource.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                              {resource.title}
                            </h4>
                            <p className="text-white/60 text-sm group-hover:text-blue-400 transition-colors duration-300">
                              {resource.description}
                            </p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Other Links */}
                <div className="space-y-3">
                  <motion.div
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      to="/pricing"
                      className="block text-white/80 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Pricing
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      to="/about"
                      className="block text-white/80 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      About
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                  >
                    <Link
                      to="/contact"
                      className="block text-white/80 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Contact
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Mobile CTA Buttons */}
              <div className="space-y-4 pt-6 border-t border-white/10">
                <motion.a
                  href="https://app.startupos.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-white/80 hover:text-white transition-colors block text-center py-3"
                >
                  Sign In
                </motion.a>
                <div className="w-full">
                  <WaitlistForm variant="primary" size="large" className="w-full" />
                </div>
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

