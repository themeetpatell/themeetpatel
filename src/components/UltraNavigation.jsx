import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Search, 
  User, 
  Settings, 
  LogOut,
  Bell,
  MessageSquare,
  HelpCircle,
  BookOpen,
  Users,
  Target,
  TrendingUp,
  Rocket,
  Sparkles,
  Crown,
  Star,
  Heart,
  Eye,
  Zap,
  Globe,
  Smartphone,
  Monitor,
  Palette,
  Code,
  TestTube,
  Filter,
  Calendar,
  Mail,
  Phone,
  Video,
  FileText,
  Download,
  Upload,
  RefreshCw,
  RotateCw,
  FastForward,
  Rewind,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Wifi,
  WifiOff,
  Battery,
  BatteryCharging,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  ShieldCheck,
  AlertCircle,
  Info,
  XCircle,
  MinusCircle,
  PlusCircle,
  Edit,
  Trash2,
  Copy,
  Scissors,
  Paperclip,
  Link as LinkIcon,
  ExternalLink,
  Maximize2,
  Home,
  Grid,
  List,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Award,
  Gift,
  ShoppingCart,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  TrendingDown,
  ArrowUp,
  ArrowDown,
  CornerUpLeft,
  CornerUpRight,
  CornerDownLeft,
  CornerDownRight,
  Trophy,
  Handshake,
  BarChart3
} from 'lucide-react';
import '../App.css';

const UltraNavigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    {
      title: "Idea to MVP",
      description: "Build and validate your MVP faster",
      icon: Rocket,
      href: "/solutions/idea-to-mvp",
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "MVP to PMF",
      description: "Find product-market fit systematically",
      icon: Target,
      href: "/solutions/mvp-to-pmf",
      color: "from-blue-400 to-cyan-400"
    },
    {
      title: "PMF to Scale",
      description: "Scale without breaking your foundation",
      icon: TrendingUp,
      href: "/solutions/pmf-to-scale",
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "Scale to Exit",
      description: "Scale your startup to successful exit",
      icon: Award,
      href: "/solutions/scale-to-exit",
      color: "from-purple-400 to-yellow-400"
    },
    {
      title: "Startup Ecosystem",
      description: "Connect with the broader startup ecosystem",
      icon: Heart,
      href: "/solutions/ecosystem",
      color: "from-purple-400 to-pink-400"
    }
  ];

  const features = [
    {
      title: "AI Co-Builders",
      description: "Your personal AI co-founder",
      icon: Sparkles,
      href: "/features/ai-co-builders"
    },
    {
      title: "Stage Aware Gamification",
      description: "Turn your startup journey into a game",
      icon: Trophy,
      href: "/features/stage-aware-gamification"
    },
    {
      title: "Ecosystem Access",
      description: "Connect with investors, mentors, and partners",
      icon: Globe,
      href: "/features/ecosystem-access"
    },
    {
      title: "Mergers & Acquisition",
      description: "Strategic growth through M&A",
      icon: Handshake,
      href: "/features/mergers-acquisition"
    },
    {
      title: "Real-time Analytics",
      description: "Data-driven decisions in real-time",
      icon: BarChart3,
      href: "/features/real-time-analytics"
    },
    {
      title: "Fractional CXOs",
      description: "Executive leadership on demand",
      icon: Crown,
      href: "/features/fractional-cxos"
    }
  ];

  const resources = [
    {
      title: "Blog",
      description: "Insights and stories from the startup world",
      icon: BookOpen,
      href: "/blog"
    },
    {
      title: "Case Studies",
      description: "Real success stories from our customers",
      icon: FileText,
      href: "/case-studies"
    },
    {
      title: "Webinars",
      description: "Live and on-demand learning sessions",
      icon: Video,
      href: "/webinars"
    },
    {
      title: "Documentation",
      description: "Complete guides and API documentation",
      icon: FileText,
      href: "/docs"
    },
    {
      title: "Co-Builder Playground",
      description: "Contribute to building StartupOS live",
      icon: Code,
      href: "/co-builder-playground"
    }
  ];

  return (
    <>
      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3"
            >
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold ultra-text-gradient">StartupOS</span>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {/* Solutions Dropdown */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                >
                  <span>Solutions</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {activeDropdown === 'solutions' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 ultra-glass rounded-2xl p-6 border border-white/10"
                    >
                      <div className="space-y-4">
                        {solutions.map((solution, index) => (
                          <motion.div
                            key={solution.title}
                            whileHover={{ x: 5 }}
                          >
                            <Link
                              to={solution.href}
                              className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                            >
                              <div className={`w-12 h-12 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                <solution.icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-white font-semibold">{solution.title}</h3>
                                <p className="text-white/60 text-sm">{solution.description}</p>
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
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveDropdown(activeDropdown === 'features' ? null : 'features')}
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                >
                  <span>Features</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'features' ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {activeDropdown === 'features' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 ultra-glass rounded-2xl p-6 border border-white/10"
                    >
                      <div className="space-y-4">
                        {features.map((feature, index) => (
                          <motion.div
                            key={feature.title}
                            whileHover={{ x: 5 }}
                          >
                            <Link
                              to={feature.href}
                              className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                            >
                              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <feature.icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-white font-semibold">{feature.title}</h3>
                                <p className="text-white/60 text-sm">{feature.description}</p>
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
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                  className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                >
                  <span>Resources</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${activeDropdown === 'resources' ? 'rotate-180' : ''}`} />
                </motion.button>

                <AnimatePresence>
                  {activeDropdown === 'resources' && (
                    <motion.div
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 20, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-80 ultra-glass rounded-2xl p-6 border border-white/10"
                    >
                      <div className="space-y-4">
                        {resources.map((resource, index) => (
                          <motion.div
                            key={resource.title}
                            whileHover={{ x: 5 }}
                          >
                            <Link
                              to={resource.href}
                              className="flex items-start space-x-4 p-3 rounded-xl hover:bg-white/5 transition-colors group"
                            >
                              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                                <resource.icon className="w-6 h-6 text-white" />
                              </div>
                              <div>
                                <h3 className="text-white font-semibold">{resource.title}</h3>
                                <p className="text-white/60 text-sm">{resource.description}</p>
                              </div>
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to="/pricing"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to="/meet"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Meet
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to="/about"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
              >
                <Link
                  to="/contact"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </motion.div>
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/80 hover:text-white transition-colors"
              >
                Sign In
              </motion.button>
              <Link to="/pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ultra-button"
                >
                  Start Free Trial
                </motion.button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-white"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-80 ultra-glass z-50 border-l border-white/10"
          >
            <div className="p-6 h-full flex flex-col">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-3">
                  <Link to="/" className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center">
                      <Rocket className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-xl font-bold ultra-text-gradient">StartupOS</span>
                  </Link>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="text-white/60 hover:text-white"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Mobile Menu Items */}
              <div className="flex-1 space-y-6">
                <div>
                  <h3 className="text-white/60 text-sm font-semibold mb-4">SOLUTIONS</h3>
                  <div className="space-y-3">
                    {solutions.map((solution) => (
                      <motion.div
                        key={solution.title}
                        whileHover={{ x: 5 }}
                      >
                        <Link
                          to={solution.href}
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className={`w-10 h-10 bg-gradient-to-r ${solution.color} rounded-lg flex items-center justify-center`}>
                            <solution.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold">{solution.title}</h4>
                            <p className="text-white/60 text-sm">{solution.description}</p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-white/60 text-sm font-semibold mb-4">FEATURES</h3>
                  <div className="space-y-3">
                    {features.map((feature) => (
                      <motion.div
                        key={feature.title}
                        whileHover={{ x: 5 }}
                      >
                        <Link
                          to={feature.href}
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
                            <feature.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold">{feature.title}</h4>
                            <p className="text-white/60 text-sm">{feature.description}</p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-white/60 text-sm font-semibold mb-4">RESOURCES</h3>
                  <div className="space-y-3">
                    {resources.map((resource) => (
                      <motion.div
                        key={resource.title}
                        whileHover={{ x: 5 }}
                      >
                        <Link
                          to={resource.href}
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                            <resource.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold">{resource.title}</h4>
                            <p className="text-white/60 text-sm">{resource.description}</p>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

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
                      to="/meet"
                      className="block text-white/80 hover:text-white transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Meet
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
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full text-white/80 hover:text-white transition-colors"
                >
                  Sign In
                </motion.button>
                <Link to="/pricing">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="ultra-button w-full"
                  >
                    Start Free Trial
                  </motion.button>
                </Link>
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default UltraNavigation;

