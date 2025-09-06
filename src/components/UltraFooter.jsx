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
  User
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
        { name: "Finanshels.com", href: "https://finanshels.com", external: true },
        { name: "StudentHub", href: "https://www.studenthub.co", external: false },
        { name: "TorchIt", href: "https://www.mytorchit.com", external: false }
      ]
    },
    writing: {
      title: "Writing & Books",
      links: [
        { name: "The Eternal Love", href: "#", external: false },
        { name: "The Endless Devotion", href: "#", external: false },
        { name: "Blog Articles", href: "/blog", external: false },
        { name: "Writing Process", href: "/blog", external: false }
      ]
    },
    connect: {
      title: "Connect With Me",
      links: [
        { name: "LinkedIn", href: "https://www.linkedin.com/in/themeetpatel/", external: true, icon: Linkedin },
        { name: "Twitter", href: "https://x.com/the_themeetpatel", external: true, icon: Twitter },
        { name: "GitHub", href: "https://github.com/themeetpatell", external: true, icon: Github },
        { name: "Instagram", href: "http://instagram.com/the.meetpatell/", external: true, icon: Instagram },
        { name: "YouTube", href: "https://youtube.com/@themeetpatel", external: true, icon: Youtube }
      ]
    }
  };

  const contactInfo = {
    email: "the.meetpatell@gmail.com",
    phone: "+971 54 754 1414",
    location: "Dubai, UAE"
  };


  return (
    <footer className="bg-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.05),transparent_50%)]" />
      </div>
      
      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
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
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center overflow-hidden">
                      <img
                        src={logoImage}
                        alt="The Meet Patel Logo"
                        className="w-8 h-8 object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-white">The Meet Patel</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {footerSections.personal.description}
                  </p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-4 h-4 text-blue-400" />
                    <a 
                      href={`mailto:${contactInfo.email}`} 
                      className="hover:text-blue-300 transition-colors"
                      onClick={() => trackEmailClick('footer_contact')}
                    >
                      {contactInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Phone className="w-4 h-4 text-blue-400" />
                    <a 
                      href={`tel:${contactInfo.phone}`} 
                      className="hover:text-blue-300 transition-colors"
                      onClick={() => trackButtonClick('phone_contact', 'footer')}
                    >
                      {contactInfo.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-4 h-4 text-blue-400" />
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
                <h3 className="text-lg font-semibold text-white mb-6">{footerSections.projects.title}</h3>
                <ul className="space-y-3">
                  {footerSections.projects.links.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        target={link.external ? "_blank" : "_self"}
                        rel={link.external ? "noopener noreferrer" : ""}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors group"
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
                <h3 className="text-lg font-semibold text-white mb-6">{footerSections.writing.title}</h3>
                <ul className="space-y-3">
                  {footerSections.writing.links.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        target={link.external ? "_blank" : "_self"}
                        rel={link.external ? "noopener noreferrer" : ""}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors group"
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

            {/* Connect Section */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-white mb-6">{footerSections.connect.title}</h3>
                <ul className="space-y-3">
                  {footerSections.connect.links.map((link, index) => (
                    <li key={index}>
                      <motion.a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors group"
                        onClick={() => trackSocialClick(link.name.toLowerCase())}
                      >
                        <link.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span>{link.name}</span>
                      </motion.a>
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
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Stay Updated</h3>
              <p className="text-gray-300 mb-8">
                Get notified about new articles, projects, and insights from my entrepreneurial journey.
              </p>
              
              {isSubscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center justify-center space-x-2 text-green-600"
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
                    className="flex-1 px-4 py-3 bg-black/50 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    required
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
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
        <div className="bg-gradient-to-r from-gray-900 to-black border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 text-gray-300">
                <span>© 2024 The Meet Patel. Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current" />
                <span>in Dubai, UAE</span>
          </div>

                <div className="flex items-center space-x-6">
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About
                    </Link>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact
                    </Link>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Blog
                    </Link>
                <a 
                  href="https://www.linkedin.com/in/themeetpatel/" 
                    target="_blank"
                    rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFooter; 