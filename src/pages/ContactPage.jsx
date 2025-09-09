import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, X, MessageSquare, Calendar, Clock,
  Linkedin, Twitter, Github, Instagram, Youtube, ExternalLink,
  CheckCircle, Star, Users, Award, Heart, Zap, Globe, Coffee,
  Briefcase, BookOpen, Mic, FileText, ArrowRight, ChevronRight,
  Copy, Check, Share2, Download, Calendar as CalendarIcon, BookOpen as Medium
} from 'lucide-react';
import { submitContactFormData, submitCommunityFormData } from '../services/formService';
import ProductionDebug from '../components/ProductionDebug';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+971',
    whatsapp: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [copiedItem, setCopiedItem] = useState(null);
  const [isCommunityFormOpen, setIsCommunityFormOpen] = useState(false);
  const [isCommunitySubmitting, setIsCommunitySubmitting] = useState(false);
  const [communitySubmitError, setCommunitySubmitError] = useState(null);
  const [communityFormData, setCommunityFormData] = useState({
    linkedinId: '',
    email: '',
    whatsapp: '',
    businessName: '',
    role: '',
    reason: ''
  });
  
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const contactInfo = {
    email: "the.meetpatell@gmail.com",
    phone: "+91 98 2434 1414",
    phone2: "+91 98 2434 1414",
    location: "Dubai, UAE",
    location2: "Ahmedabad, India",
    linkedin: "https://www.linkedin.com/in/themeetpatel/",
    twitter: "https://x.com/the_meetpatel",
    github: "https://github.com/themeetpatell",
    instagram: "http://instagram.com/the.meetpatell/",
    youtube: "https://youtube.com/@themeetpatel",
    medium: "https://medium.com/@themeetpatel",
    whatsapp: "https://wa.me/919824341414",
    calendly: "https://calendly.com/themeetpatell/quick-connect",
  };

  const countryCodes = [
    { flag: '🇦🇪', code: '+971', country: 'UAE' },
    { flag: '🇮🇳', code: '+91', country: 'India' },
    { flag: '🇺🇸', code: '+1', country: 'USA' },
    { flag: '🇬🇧', code: '+44', country: 'UK' },
    { flag: '🇨🇦', code: '+1', country: 'Canada' },
    { flag: '🇦🇺', code: '+61', country: 'Australia' },
    { flag: '🇸🇬', code: '+65', country: 'Singapore' },
    { flag: '🇩🇪', code: '+49', country: 'Germany' },
    { flag: '🇫🇷', code: '+33', country: 'France' },
    { flag: '🇯🇵', code: '+81', country: 'Japan' }
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
      title: "WhatsApp Me",
      description: "For urgent matters or if you prefer a direct conversation",
      icon: MessageSquare,
      value: "WhatsApp Chat",
      action: contactInfo.whatsapp,
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
      value: "@the_meetpatel",
      action: contactInfo.twitter,
      color: "from-sky-400 to-blue-500",
      priority: "medium"
    },
    {
      title: "Instagram",
      description: "Behind-the-scenes content and personal updates",
      icon: Instagram,
      value: "@the.meetpatell",
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
    },
    {
      title: "GitHub",
      description: "View my code repositories and open source contributions",
      icon: Github,
      value: "GitHub Profile",
      action: contactInfo.github,
      color: "from-gray-600 to-gray-800",
      priority: "medium"
    },
    {
      title: "Medium",
      description: "Read my articles and insights on entrepreneurship",
      icon: Medium,
      value: "Medium Profile",
      action: contactInfo.medium,
      color: "from-green-500 to-green-700",
      priority: "medium"
    },
    {
      title: "Calendly",
      description: "Schedule a meeting or consultation at your convenience",
      icon: Calendar,
      value: "Book a Meeting",
      action: contactInfo.calendly,
      color: "from-blue-400 to-blue-600",
      priority: "high"
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

  const handleCommunityInputChange = (e) => {
    setCommunityFormData({
      ...communityFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleJoinCommunity = () => {
    setIsCommunityFormOpen(true);
  };

  const handleCommunitySubmit = async (e) => {
    e.preventDefault();
    setIsCommunitySubmitting(true);
    setCommunitySubmitError(null);
    
    try {
      // Submit to Google Sheets and other services
      const result = await submitCommunityFormData(communityFormData);
      
      if (result.success) {
        // Create WhatsApp message with form data
        const message = `Hi Meet! I want to join the StartupOS WhatsApp community.

Here are my details:
• LinkedIn: ${communityFormData.linkedinId}
• Email: ${communityFormData.email}
• WhatsApp: ${communityFormData.whatsapp}
• Business: ${communityFormData.businessName}
• Role: ${communityFormData.role}
• Reason: ${communityFormData.reason}

Please add me to the community!`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);
        
        // Open WhatsApp with pre-filled message
        window.open(`https://wa.me/919824341414?text=${encodedMessage}`, '_blank');
        
        // Reset form and close modal
        setCommunityFormData({
          linkedinId: '',
          email: '',
          whatsapp: '',
          businessName: '',
          role: '',
          reason: ''
        });
        setIsCommunityFormOpen(false);
      } else {
        setCommunitySubmitError('Failed to submit form. Please try again or contact us directly.');
        console.error('Community form submission failed:', result.errors);
      }
    } catch (error) {
      setCommunitySubmitError('An error occurred. Please try again.');
      console.error('Community form submission error:', error);
    } finally {
      setIsCommunitySubmitting(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Submit to Google Sheets and other services
      const result = await submitContactFormData(formData);
      
      if (result.success) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', countryCode: '+971', whatsapp: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        setSubmitError('Failed to submit form. Please try again or contact us directly.');
        console.error('Contact form submission failed:', result.errors);
      }
    } catch (error) {
      setSubmitError('An error occurred. Please try again.');
      console.error('Contact form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
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
      <section ref={heroRef} className="py-12 sm:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-teal-900/20 to-slate-900" />
        
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-teal-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-400 rounded-full blur-2xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Main Title */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-3xl sm:text-6xl md:text-8xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
                Let's <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-400 bg-clip-text text-transparent">Connect</span>
              </h1>
              
              {/* Decorative Line */}
              <div className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-400 to-teal-400 mx-auto rounded-full"></div>
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-cyan-200 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
            >
              I'm always excited to meet new people, share experiences, and explore opportunities for collaboration. 
              <span className="block mt-2 text-white/80">
                Let's build something amazing together.
              </span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
            >
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-teal-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 relative z-10" />
                <span className="relative z-10">Send a Message</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 sm:ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>

              <motion.button
                onClick={handleJoinCommunity}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white font-bold text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 rounded-2xl transition-all duration-300 overflow-hidden w-full sm:w-auto"
              >
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 relative z-10" />
                <span className="relative z-10">Join Community</span>
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12 sm:mt-16 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-white/60"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                <span className="text-xs sm:text-sm">24h Response Time</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                <span className="text-xs sm:text-sm">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-400" />
                <span className="text-xs sm:text-sm">Confidential & Secure</span>
              </div>
            </motion.div>
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
      <section id="contact-form" className="py-20 relative">
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
                <label className="block text-white/80 text-sm mb-2 font-medium">WhatsApp Number</label>
                <div className="flex gap-2">
                  <div className="relative">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer min-w-[120px]"
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code} className="bg-gray-800 text-white">
                          {country.flag} {country.code}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronRight className="w-4 h-4 text-white/40" />
                    </div>
                  </div>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="98 2434 1414"
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

            {/* Error Message */}
            <AnimatePresence>
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center space-x-3"
                >
                  <X className="w-5 h-5 text-red-400 flex-shrink-0" />
                  <span className="text-red-300">
                    {submitError}
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
            {[
              { icon: Linkedin, href: contactInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
              { icon: Twitter, href: contactInfo.twitter, label: 'Twitter', color: 'hover:text-sky-400' },
              { icon: Github, href: contactInfo.github, label: 'GitHub', color: 'hover:text-gray-400' },
              { icon: Instagram, href: contactInfo.instagram, label: 'Instagram', color: 'hover:text-pink-400' },
              { icon: Youtube, href: contactInfo.youtube, label: 'YouTube', color: 'hover:text-red-400' },
              { icon: Medium, href: contactInfo.medium, label: 'Medium', color: 'hover:text-green-400' },
              { icon: Calendar, href: contactInfo.calendly, label: 'Calendly', color: 'hover:text-blue-400' }
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
                  Follow
                </p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Community Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Join Our StartupOS Community</h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
              Connect with fellow entrepreneurs, get exclusive insights, and be part of a thriving startup ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="apple-glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-400 rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400 rounded-full"></div>
            </div>

            <div className="relative z-10">
              {/* WhatsApp Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <MessageSquare className="w-10 h-10 text-green-400" />
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-white/60 text-sm">Active Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">50+</div>
                  <div className="text-white/60 text-sm">Daily Insights</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">24/7</div>
                  <div className="text-white/60 text-sm">Support</div>
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mb-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/80">Exclusive startup insights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/80">Networking opportunities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/80">Direct access to mentors</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-white/80">Early access to resources</span>
                  </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                onClick={handleJoinCommunity}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <MessageSquare className="w-6 h-6 mr-3 relative z-10" />
                <span className="relative z-10">Join StartupOS Community</span>
                <ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              {/* Additional Info */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-white/60 text-sm mt-4"
              >
                Free to join • No spam • Instant access to 500+ entrepreneurs
              </motion.p>
          </div>
          </motion.div>
        </div>
      </section>

      {/* Community Form Modal */}
      <AnimatePresence>
        {isCommunityFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            onClick={() => setIsCommunityFormOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-gray-900/95 backdrop-blur-xl border border-white/10 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Join StartupOS Community</h3>
                  <p className="text-white/70">Tell us about yourself to get started</p>
                </div>
                <button
                  onClick={() => setIsCommunityFormOpen(false)}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleCommunitySubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 text-sm mb-2 font-medium">LinkedIn Profile URL *</label>
                    <input
                      type="url"
                      name="linkedinId"
                      value={communityFormData.linkedinId}
                      onChange={handleCommunityInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-2 font-medium">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={communityFormData.email}
                      onChange={handleCommunityInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm mb-2 font-medium">WhatsApp Number *</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={communityFormData.whatsapp}
                    onChange={handleCommunityInputChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="+91 98 2434 1414"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 text-sm mb-2 font-medium">Business/Company Name *</label>
                    <input
                      type="text"
                      name="businessName"
                      value={communityFormData.businessName}
                      onChange={handleCommunityInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-2 font-medium">Your Role *</label>
                    <input
                      type="text"
                      name="role"
                      value={communityFormData.role}
                      onChange={handleCommunityInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Founder, CEO, etc."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm mb-2 font-medium">Why do you want to join? *</label>
                  <textarea
                    name="reason"
                    value={communityFormData.reason}
                    onChange={handleCommunityInputChange}
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your goals and what you hope to gain from the community..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isCommunitySubmitting}
                  whileHover={{ scale: isCommunitySubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isCommunitySubmitting ? 1 : 0.98 }}
                  className={`w-full py-4 px-6 rounded-xl font-bold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isCommunitySubmitting
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700'
                  }`}
                >
                  {isCommunitySubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <MessageSquare className="w-5 h-5" />
                      <span>Join Community via WhatsApp</span>
                    </>
                  )}
                </motion.button>

                {/* Community Form Error Message */}
                {communitySubmitError && (
                  <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center space-x-2">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span className="text-red-300 text-sm">{communitySubmitError}</span>
                  </div>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Production Debug - Remove after fixing */}
      <ProductionDebug />
    </div>
  );
};

export default ContactPage;