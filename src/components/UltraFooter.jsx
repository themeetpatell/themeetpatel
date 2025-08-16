import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Twitter, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Youtube,
  Github,
  MessageSquare,
  Heart,
  Star,
  Award,
  Users,
  Target,
  TrendingUp,
  Sparkles,
  Crown,
  BookOpen,
  FileText,
  Video,
  Calendar,
  Bell,
  Settings,
  HelpCircle,
  Shield,
  Lock,
  Eye,
  Zap,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Download,
  Upload,
  RefreshCw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Home,
  Grid,
  List,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Gift,
  ShoppingCart,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  TrendingDown,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CornerUpLeft,
  CornerUpRight,
  CornerDownLeft,
  CornerDownRight,
  DollarSign,
  User
} from 'lucide-react';
import WaitlistForm from './WaitlistForm';
import BlogDashboard from './BlogDashboard';


const UltraFooter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [showBlogDashboard, setShowBlogDashboard] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerSections = [
    {
      title: "Product",
      items: [
        { name: "AI Co-Builders", href: "/features/ai-co-builders" },
        { name: "Stage Aware Gamification", href: "/features/stage-aware-gamification" },
        { name: "Ecosystem Access", href: "/features/ecosystem-access" },
        { name: "Mergers & Acquisition", href: "/features/mergers-acquisition" },
        { name: "Real-time Analytics", href: "/features/real-time-analytics" },
        { name: "Fractional CXOs", href: "/features/fractional-cxos" }
      ]
    },
    {
      title: "Solutions",
      items: [
        { name: "Idea to MVP", href: "/solutions/idea-to-mvp" },
        { name: "MVP to PMF", href: "/solutions/mvp-to-pmf" },
        { name: "PMF to Scale", href: "/solutions/pmf-to-scale" },
        { name: "Scale to Exit", href: "/solutions/scale-to-exit" },
        { name: "Startup Ecosystem", href: "/solutions/ecosystem" }
      ]
    },
    {
      title: "Resources",
      items: [
        { name: "Blog", href: "/blog" },
        { name: "Case Studies", href: "/case-studies" },
        { name: "Webinars", href: "/webinars" }
      ]
    },
    {
      title: "Company",
      items: [
        { name: "About", href: "/about" },
        { name: "About Founder", href: "/meet" },
        { name: "Careers", href: "/careers" },
        { name: "Contact", href: "/contact" },
        { name: "Partners", href: "/partners" },
        { name: "Manage Blogs", href: "#", onClick: () => setShowBlogDashboard(true) }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: Twitter, href: "https://x.com/the_startupos", color: "hover:text-blue-400" },
    { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/company/the-startupos/", color: "hover:text-blue-600" },
    { name: "Instagram", icon: Instagram, href: "http://instagram.com/thestartupos/", color: "hover:text-pink-500" }
  ];

  const stats = [
    { number: "1,000+", label: "Founders", icon: Users },
    { number: "100+", label: "Startups", icon: DollarSign },
    { number: "50+", label: "AI Co-Builders", icon: Award },
    { number: "100+", label: "CXOs", icon: User }
  ];

  return (
    <footer className="relative bg-slate-900 border-t border-white/10">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800/50 to-slate-900" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-20">
          {/* Top Section with Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Column - Brand & Newsletter */}
            <div className="space-y-8">
              {/* Brand */}
              <div className="space-y-4">
                <div className="flex items-center">
                  <Link to="/" className="flex items-center">
                    <div className="w-24 h-14 rounded-xl flex items-center justify-center overflow-hidden">
                      <img 
                        src="/src/assets/logo.png" 
                        alt="Startup-Center" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </Link>
                </div>
                <p className="text-white/70 text-lg max-w-md leading-relaxed">
                  The ultimate platform for founders. Build, validate, and scale your startup with AI-powered guidance and proven frameworks.
                </p>
              </div>

              {/* Newsletter */}
              <div className="space-y-4">
                <h3 className="text-white font-semibold text-lg">Stay Updated</h3>
                <p className="text-white/60 text-sm">Get the latest insights, strategies, and success stories delivered to your inbox.</p>
                
                <form onSubmit={handleSubscribe} className="flex space-x-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-green-400 transition-colors"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="ultra-button px-6 py-3"
                  >
                    Subscribe
                  </motion.button>
                </form>

                <AnimatePresence>
                  {isSubscribed && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="flex items-center space-x-2 text-green-400 text-sm"
                    >
                      <CheckCircle className="w-4 h-4" />
                      <span>Successfully subscribed!</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column - Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="ultra-glass p-6 rounded-xl text-center"
                >
                  <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <p className="text-white/60 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                className="space-y-4"
              >
                <h3 className="text-white font-semibold text-lg">{section.title}</h3>
                <div className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={item.name}
                      whileHover={{ x: 5 }}
                    >
                      {item.onClick ? (
                        <button
                          onClick={item.onClick}
                          className="block text-white/60 hover:text-white transition-colors text-sm text-left w-full"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          to={item.href}
                          className="block text-white/60 hover:text-white transition-colors text-sm"
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
              {/* Copyright & Links */}
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <p className="text-white/60 text-sm">
                  © 2025 StartupOS. All rights reserved.
                </p>
                <div className="flex items-center space-x-6">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link
                      to="/privacy"
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      Privacy Policy
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link
                      to="/terms"
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      Terms of Service
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                  >
                    <Link
                      to="/cookies"
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      Cookie Policy
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center text-white/60 transition-all duration-200 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
       
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-green-400 rounded-full opacity-60 animate-pulse" />
      <div className="absolute top-40 right-20 w-1 h-1 bg-blue-400 rounded-full opacity-40 animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-20 w-1 h-1 bg-purple-400 rounded-full opacity-50 animate-pulse delay-2000" />
      <div className="absolute bottom-20 right-10 w-2 h-2 bg-emerald-400 rounded-full opacity-30 animate-pulse delay-1500" />

      {/* Blog Dashboard */}
      <BlogDashboard
        isOpen={showBlogDashboard}
        onClose={() => setShowBlogDashboard(false)}
      />
    </footer>
  );
};

export default UltraFooter; 