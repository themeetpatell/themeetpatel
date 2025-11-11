import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  Github, 
  Instagram, 
  Youtube,
  ArrowRight,
  Heart,
  Send,
  MessageSquare,
  Calendar,
  Clock,
  Globe,
  Award,
  Users,
  BookOpen,
  Briefcase,
  User,
  FolderOpen
} from 'lucide-react';
import logoImage from '../assets/logo for themeetpatel.png';
import { trackButtonClick, trackSocialClick, trackEmailClick, trackFormSubmission } from '../utils/analytics';

const UltraFooter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      trackFormSubmission('newsletter_subscription');
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const footerSections = {
    personal: {
      title: "The Meet Patel",
      description: "Serial entrepreneur, author, and mentor passionate about helping others succeed in their journey.",
      links: [
        { name: "About Me", href: "/about", icon: User },
        { name: "My Story", href: "/about", icon: BookOpen },
        { name: "Portfolio", href: "/portfolio", icon: Briefcase },
        { name: "Contact", href: "/contact", icon: MessageSquare }
      ]
    },
    projects: {
      title: "Projects & Ventures",
      links: [
        { name: "StartupOS", href: "https://www.startupos.in", external: true },
        { name: "Zerohuman", href: "https://www.zerohuman.co", external: true },
        { name: "Mealverse", href: "https://www.mealverse.in", external: true },
        { name: "Finanshels.com", href: "https://finanshels.com", external: true }
      ]
    },
    writing: {
      title: "Writing & Books",
      links: [
        { name: "The Eternal Love", href: "/The Eternal Love by The Meet Patel.pdf", external: false },
        { name: "The Endless Devotion", href: "#", external: false },
        { name: "Blog Articles", href: "/blogs", external: false },
        { name: "Linkedin Newsletter", href: "https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7323218198735015937", external: true }
      ]
    },
    navigation: {
      title: "Quick Navigation",
      links: [
        { name: "About", href: "/about", external: false, icon: User },
        { name: "Portfolio", href: "/portfolio", external: false, icon: FolderOpen },
        { name: "Systems", href: "/systems", external: false, icon: Award },
        { name: "Blog", href: "/blogs", external: false, icon: BookOpen },
        { name: "Contact", href: "/contact", external: false, icon: MessageSquare }
      ]
    }
  };

  const contactInfo = {
    email: "the.meetpatell@gmail.com",
    phone: "+971 54 754 1414",
    location: "Dubai, UAE"
  };


  return (
    <footer className="bg-gradient-to-br from-purple-50 via-pink-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(192,132,252,0.08),transparent_50%)]" />
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 sm:gap-12">
            {/* Personal Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center overflow-hidden shadow-lg shadow-purple-200">
                      <img
                        src={logoImage}
                        alt="The Meet Patel Logo"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">The Meet Patel</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {footerSections.personal.description}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Mail className="w-4 h-4 text-purple-600" />
                    <a 
                      href={`mailto:${contactInfo.email}`} 
                      className="hover:text-purple-600 transition-colors"
                      onClick={() => trackEmailClick('footer_contact')}
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <Phone className="w-4 h-4 text-purple-600" />
                    <a 
                      href={`tel:${contactInfo.phone}`} 
                      className="hover:text-purple-600 transition-colors"
                      onClick={() => trackButtonClick('phone_contact', 'footer')}
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-700">
                    <MapPin className="w-4 h-4 text-purple-600" />
                    <span>{contactInfo.location}</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Projects Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6">{footerSections.projects.title}</h3>
                <ul className="space-y-3">
                  {footerSections.projects.links.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        target={link.external ? "_blank" : "_self"}
                        rel={link.external ? "noopener noreferrer" : ""}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors group"
                        onClick={() => link.external ? trackExternalLink(link.href) : trackButtonClick(`footer_${link.name.toLowerCase().replace(/\s+/g, '_')}`, 'footer')}
                      >
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        <span>{link.name}</span>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Writing Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6">{footerSections.writing.title}</h3>
                <ul className="space-y-3">
                  {footerSections.writing.links.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        target={link.external ? "_blank" : "_self"}
                        rel={link.external ? "noopener noreferrer" : ""}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors group"
                        onClick={() => link.external ? trackExternalLink(link.href) : trackButtonClick(`footer_${link.name.toLowerCase().replace(/\s+/g, '_')}`, 'footer')}
                      >
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        <span>{link.name}</span>
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Navigation Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-6">{footerSections.navigation.title}</h3>
                <ul className="space-y-3">
                  {footerSections.navigation.links.map((link, index) => (
                    <li key={index}>
                      <motion.div whileHover={{ x: 5 }}>
                        {link.external ? (
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors group"
                            onClick={() => trackButtonClick(`footer_${link.name.toLowerCase()}`, 'footer_navigation')}
                          >
                            <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span>{link.name}</span>
                          </a>
                        ) : (
                          <Link
                            to={link.href}
                            className="flex items-center space-x-2 text-gray-600 hover:text-purple-600 transition-colors group"
                            onClick={() => trackButtonClick(`footer_${link.name.toLowerCase()}`, 'footer_navigation')}
                          >
                            <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                            <span>{link.name}</span>
                          </Link>
                        )}
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
              </div>

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-purple-200"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Stay Updated</h3>
              <p className="text-gray-700 mb-8">
                Get notified about new articles, projects, and insights from my entrepreneurial journey.
              </p>
              
              {isSubscribed ? (
                  <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center space-x-2 text-purple-600"
                >
                  <Heart className="w-5 h-5 fill-current" />
                  <span className="font-medium">Thank you for subscribing!</span>
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-white/80 border border-purple-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-gray-900 placeholder-gray-500"
                    required
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-purple-200"
                  >
                    <Send className="w-4 h-4" />
                    <span>Subscribe</span>
                  </motion.button>
                </form>
              )}
            </div>
                </motion.div>
          </div>

        {/* Bottom Bar */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 border-t border-purple-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-700">
                <span>© 2025 The Meet Patel. Made with</span>
                <Heart className="w-4 h-4 text-pink-500 fill-current" />
                <span>in Dubai, UAE</span>
          </div>

                <div className="flex items-center space-x-6">
                <Link to="/privacy-policy" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                      Privacy Policy
                    </Link>
                <Link to="/cookie-policy" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Cookie Policy
                    </Link>
                <Link to="/terms-of-service" className="text-gray-600 hover:text-purple-600 transition-colors text-sm">
                  Terms of Service
                    </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFooter; 