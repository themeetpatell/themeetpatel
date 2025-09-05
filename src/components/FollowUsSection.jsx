import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Twitter, 
  Instagram, 
  Youtube, 
  Github, 
  Mail,
  Users,
  Heart,
  Share2,
  ExternalLink,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const FollowUsSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const socialPlatforms = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/themeetpatel',
      followers: '25K+',
      color: 'from-blue-600 to-blue-700',
      description: 'Professional insights and career updates'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://x.com/the_startupos',
      followers: '15K+',
      color: 'from-sky-500 to-blue-600',
      description: 'Quick thoughts and industry news'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'http://instagram.com/thestartupos/',
      followers: '12K+',
      description: 'Behind-the-scenes and visual content'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@thestartupos',
      followers: '8K+',
      color: 'from-red-500 to-red-600',
      description: 'Video content and tutorials'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/startupos',
      followers: '5K+',
      color: 'from-gray-600 to-gray-700',
      description: 'Open source projects and code'
    }
  ];

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      // In a real app, this would integrate with an email service
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const stats = [
    {
      number: '65K+',
      label: 'Total Followers',
      icon: Users,
      color: 'from-blue-400 to-cyan-500'
    },
    {
      number: '2.5M+',
      label: 'Monthly Reach',
      icon: Share2,
      color: 'from-green-400 to-emerald-500'
    },
    {
      number: '95%',
      label: 'Engagement Rate',
      icon: Heart,
      color: 'from-red-400 to-pink-500'
    }
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Follow My Journey
          </h2>
          <p className="text-xl text-cyan-200 mb-8 max-w-3xl mx-auto">
            Stay connected and get exclusive insights on entrepreneurship, startup building, and personal growth.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <div key={index} className="ultra-glass rounded-xl p-6 text-center">
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Social Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Connect With Me</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialPlatforms.map((platform, index) => (
              <motion.a
                key={platform.name}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="ultra-glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${platform.color || 'from-gray-600 to-gray-700'} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <platform.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                        {platform.name}
                      </h4>
                      <ExternalLink className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                    </div>
                    <p className="text-white/60 text-sm mb-2">{platform.description}</p>
                    <div className="flex items-center space-x-2">
                      <span className="text-cyan-400 font-semibold">{platform.followers}</span>
                      <span className="text-white/40 text-sm">followers</span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="ultra-glass rounded-xl p-8 md:p-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 text-white" />
            </div>
            
            <h3 className="text-3xl font-bold text-white mb-4">
              Get Exclusive Updates
            </h3>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Join my newsletter for weekly insights on entrepreneurship, startup building, and personal growth. 
              No spam, just valuable content.
            </p>

            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center space-x-2 text-green-400"
              >
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg font-semibold">Successfully subscribed!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  required
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>
            )}

            <div className="mt-8 flex items-center justify-center space-x-8 text-white/60 text-sm">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Weekly insights</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>No spam</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Unsubscribe anytime</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-white/70 mb-6">
            Ready to start your entrepreneurial journey? Let's connect!
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FollowUsSection;
