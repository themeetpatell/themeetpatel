import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, X, MessageSquare, Calendar, Clock,
  Linkedin, Twitter, Github, Instagram, Youtube, ExternalLink,
  CheckCircle, Star, Users, Award, Heart, Zap, Globe, Coffee,
  Briefcase, BookOpen, Mic, FileText, ArrowRight, ChevronRight,
  Copy, Check, Share2, Download, Calendar as CalendarIcon
} from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedItem, setCopiedItem] = useState(null);
  
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const contactInfo = {
    email: "meet@startupos.com",
    phone: "+91 98 2434 1414",
    phone2: "+971 50 495 4698",
    location: "Ahmedabad, India",
    location2: "In5, Dubai, UAE",
    linkedin: "https://www.linkedin.com/company/the-startupos/",
    twitter: "https://x.com/the_startupos",
    github: "https://github.com/startupos",
    instagram: "http://instagram.com/thestartupos/",
    youtube: "https://youtube.com/@thestartupos",
    website: "https://www.startupos.in"
  };

  const quickStats = [
    {
      number: "24h",
      label: "Response Time",
      icon: Clock,
      color: "from-cyan-400 to-teal-500",
      description: "Average response time for emails"
    },
    {
      number: "50+",
      label: "Startups Mentored",
      icon: Users,
      color: "from-teal-400 to-cyan-500",
      description: "Successful startup mentoring"
    },
    {
      number: "200+",
      label: "Entrepreneurs Helped",
      icon: Heart,
      color: "from-emerald-400 to-teal-500",
      description: "Entrepreneurs guided to success"
    },
    {
      number: "85%",
      label: "Success Rate",
      icon: Award,
      color: "from-cyan-300 to-emerald-400",
      description: "Mentorship success rate"
    }
  ];

  const contactMethods = [
    {
      title: "Email Me",
      description: "For business inquiries, collaborations, or general questions",
      icon: Mail,
      value: contactInfo.email,
      action: `mailto:${contactInfo.email}`,
      color: "from-blue-500 to-cyan-500",
      priority: "high"
    },
    {
      title: "Call Me",
      description: "For urgent matters or if you prefer a direct conversation",
      icon: Phone,
      value: contactInfo.phone,
      action: `tel:${contactInfo.phone}`,
      color: "from-green-500 to-emerald-500",
      priority: "high"
    },
    {
      title: "LinkedIn",
      description: "Connect with me professionally and follow my updates",
      icon: Linkedin,
      value: "LinkedIn Profile",
      action: contactInfo.linkedin,
      color: "from-blue-600 to-blue-700",
      priority: "medium"
    },
    {
      title: "Twitter",
      description: "Follow me for daily insights and quick interactions",
      icon: Twitter,
      value: "@the_startupos",
      action: contactInfo.twitter,
      color: "from-sky-400 to-blue-500",
      priority: "medium"
    },
    {
      title: "Instagram",
      description: "Behind-the-scenes content and personal updates",
      icon: Instagram,
      value: "@thestartupos",
      action: contactInfo.instagram,
      color: "from-pink-500 to-rose-500",
      priority: "low"
    },
    {
      title: "YouTube",
      description: "Video content, tutorials, and speaking engagements",
      icon: Youtube,
      value: "YouTube Channel",
      action: contactInfo.youtube,
      color: "from-red-500 to-red-600",
      priority: "low"
    }
  ];

  const availability = [
    {
      day: "Monday - Friday",
      time: "9:00 AM - 6:00 PM IST",
      status: "Available",
      color: "text-green-400"
    },
    {
      day: "Saturday",
      time: "10:00 AM - 2:00 PM IST",
      status: "Limited",
      color: "text-yellow-400"
    },
    {
      day: "Sunday",
      time: "Emergency Only",
      status: "Unavailable",
      color: "text-red-400"
    }
  ];

  const services = [
    {
      title: "Startup Mentoring",
      description: "1-on-1 guidance for early-stage entrepreneurs",
      duration: "1-2 hours",
      price: "Free for first session",
      icon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Business Strategy",
      description: "Strategic planning and growth consulting",
      duration: "2-4 hours",
      price: "Custom pricing",
      icon: Briefcase,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Speaking Engagements",
      description: "Keynotes, workshops, and panel discussions",
      duration: "30-90 minutes",
      price: "Contact for rates",
      icon: Mic,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Content Collaboration",
      description: "Guest posts, interviews, and co-created content",
      duration: "1-3 hours",
      price: "Mutual benefit",
      icon: FileText,
      color: "from-orange-500 to-red-500"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const copyToClipboard = async (text, item) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedItem(item);
      setTimeout(() => setCopiedItem(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Hero Section */}
      <section ref={heroRef} className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-teal-900/20 to-slate-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Let's Connect
            </h1>
            <p className="text-2xl text-cyan-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              I'm always excited to meet new people, share experiences, and explore opportunities for collaboration.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
              {quickStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="apple-glass p-6 text-center group hover:scale-105 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="apple-caption mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-white/50">
                    {stat.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Choose Your Preferred Way</h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
              Whether you prefer email, phone calls, or social media, I'm here to help and connect with you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="apple-glass p-8 text-center group hover:scale-105 transition-all duration-300 relative"
              >
                {/* Priority Badge */}
                <div className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${
                  method.priority === 'high' ? 'bg-green-500/20 text-green-400' :
                  method.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {method.priority}
                </div>

                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {method.title}
                </h3>
                
                <p className="text-white/70 mb-4 text-sm leading-relaxed">
                  {method.description}
                </p>
                
                <div className="space-y-3">
                  <motion.a
                    href={method.action}
                    target={method.action.startsWith('http') ? '_blank' : undefined}
                    rel={method.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:underline"
                  >
                    {method.value}
                    {method.action.startsWith('http') && (
                      <ExternalLink className="w-4 h-4 ml-1" />
                    )}
                  </motion.a>
                  
                  <button
                    onClick={() => copyToClipboard(method.value === 'LinkedIn Profile' ? contactInfo.linkedin : method.value, method.title)}
                    className="flex items-center justify-center w-full text-white/60 hover:text-white text-xs space-x-1"
                  >
                    {copiedItem === method.title ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Services I Offer</h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
              From startup mentoring to speaking engagements, here's how I can help you succeed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="apple-glass p-6 group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2 text-xs text-white/60">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>{service.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price:</span>
                    <span className="text-cyan-400">{service.price}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          >
            {/* Availability Schedule */}
            <div className="apple-glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <CalendarIcon className="w-6 h-6 mr-3 text-cyan-400" />
                My Availability
              </h3>
              <div className="space-y-4">
                {availability.map((slot, index) => (
                  <div key={slot.day} className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                    <div>
                      <h4 className="text-white font-semibold">{slot.day}</h4>
                      <p className="text-white/70 text-sm">{slot.time}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${slot.color} bg-opacity-20`}>
                      {slot.status}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
                <p className="text-cyan-200 text-sm">
                  <strong>Note:</strong> All times are in IST (Indian Standard Time). 
                  I'm flexible with scheduling for important discussions.
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="apple-glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-cyan-400" />
                Contact Details
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">Email Address</h4>
                    <p className="text-cyan-200 mb-1">{contactInfo.email}</p>
                    <p className="text-white/60 text-sm">Primary business email</p>
                    <button
                      onClick={() => copyToClipboard(contactInfo.email, 'email')}
                      className="text-xs text-cyan-400 hover:text-cyan-300 mt-1"
                    >
                      {copiedItem === 'email' ? 'Copied!' : 'Copy email'}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">Phone Numbers</h4>
                    <p className="text-cyan-200 mb-1">{contactInfo.phone}</p>
                    <p className="text-cyan-200 mb-1">{contactInfo.phone2}</p>
                    <p className="text-white/60 text-sm">Available during business hours</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">Locations</h4>
                    <p className="text-cyan-200 mb-1">{contactInfo.location}</p>
                    <p className="text-cyan-200 mb-1">{contactInfo.location2}</p>
                    <p className="text-white/60 text-sm">Frequently traveling between locations</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Send Me a Message</h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
              Have a specific question or project in mind? I'd love to hear from you.
            </p>
                </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="apple-glass rounded-3xl p-8"
          >
                <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                  <label className="block text-white/80 text-sm mb-2 font-medium">Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                  <label className="block text-white/80 text-sm mb-2 font-medium">Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                    <div>
                <label className="block text-white/80 text-sm mb-2 font-medium">Subject *</label>
                      <input
                        type="text"
                  name="subject"
                  value={formData.subject}
                        onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
                  </div>

                  <div>
                <label className="block text-white/80 text-sm mb-2 font-medium">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                  required
                      rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, question, or how I can help you..."
                />
                  </div>

              <motion.button
                    type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 px-8 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-lg ${
                  isSubmitting
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-400 to-teal-500 hover:from-cyan-500 hover:to-teal-600'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
                </form>

            {/* Success Message */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-green-300">
                    Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
            </motion.div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Follow My Journey</h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
              Stay updated with my latest projects, insights, and entrepreneurial journey across all platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { icon: Linkedin, href: contactInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400', followers: '5K+' },
              { icon: Twitter, href: contactInfo.twitter, label: 'Twitter', color: 'hover:text-sky-400', followers: '2K+' },
              { icon: Github, href: contactInfo.github, label: 'GitHub', color: 'hover:text-gray-400', followers: '1K+' },
              { icon: Instagram, href: contactInfo.instagram, label: 'Instagram', color: 'hover:text-pink-400', followers: '3K+' },
              { icon: Youtube, href: contactInfo.youtube, label: 'YouTube', color: 'hover:text-red-400', followers: '500+' },
              { icon: Globe, href: contactInfo.website, label: 'Website', color: 'hover:text-cyan-400', followers: '10K+' }
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="apple-glass p-6 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 text-white/60 ${social.color} transition-all duration-300 group-hover:bg-white/20`}>
                  <social.icon className="w-6 h-6" />
                </div>
                <h3 className="text-white font-semibold mb-1 group-hover:text-cyan-400 transition-colors">
                  {social.label}
                </h3>
                <p className="text-white/60 text-sm">
                  {social.followers} followers
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;