import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, CheckCircle, X, ArrowRight, Users, 
  Star, Award, Heart, Zap, BookOpen, Calendar,
  Linkedin, Twitter, Github, Instagram, Youtube, TrendingUp, Target, Briefcase
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const CommunityPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [formData, setFormData] = useState({
    linkedinId: '',
    email: '',
    whatsapp: '',
    businessName: '',
    role: '',
    reason: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Create WhatsApp message with form data
      const message = `Hi Meet! I want to join the StartupOS WhatsApp community.

Here are my details:
• LinkedIn: ${formData.linkedinId}
• Email: ${formData.email}
• WhatsApp: ${formData.whatsapp}
• Business: ${formData.businessName}
• Role: ${formData.role}
• Reason: ${formData.reason}

Please add me to the community!`;

      // Encode message for URL
      const encodedMessage = encodeURIComponent(message);
      
      // Open WhatsApp with pre-filled message
      window.open(`https://wa.me/919824341414?text=${encodedMessage}`, '_blank');
      
      // Close the form
      setIsFormOpen(false);
      
      // Reset form data
      setFormData({
        linkedinId: '',
        email: '',
        whatsapp: '',
        businessName: '',
        role: '',
        reason: ''
      });
    } catch (error) {
      setSubmitError('An error occurred. Please try again.');
      console.error('Community form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const communityStats = [
    {
      number: "500+",
      label: "Active Members",
      icon: Users,
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "10+",
      label: "Daily Threads",
      icon: WhatsAppIcon,
      color: "from-purple-400 to-pink-500"
    },
    {
      number: "24/7",
      label: "Support & Networking",
      icon: Heart,
      color: "from-pink-400 to-purple-500"
    },
    {
      number: "100%",
      label: "Free to Join",
      icon: Star,
      color: "from-purple-300 to-pink-400"
    }
  ];

  const benefits = [
    {
      title: "Exclusive Insights",
      description: "Get access to market trends, startup insights, and industry analysis that you won't find anywhere else.",
      icon: BookOpen,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Expert Mentorship",
      description: "Direct access to industry experts, successful entrepreneurs, and experienced mentors ready to guide you.",
      icon: Award,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Networking Opportunities",
      description: "Connect with fellow entrepreneurs, potential co-founders, investors, and business partners.",
      icon: Users,
      color: "from-pink-400 to-pink-500"
    },
    {
      title: "Funding & Partnerships",
      description: "Early access to funding opportunities, partnership deals, and collaboration possibilities.",
      icon: Zap,
      color: "from-purple-300 to-purple-500"
    },
    {
      title: "Masterclasses & Q&A",
      description: "Regular masterclasses, Q&A sessions, and workshops with industry leaders and successful founders.",
      icon: Calendar,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Job Opportunities",
      description: "Access to exclusive job postings, talent referrals, and career advancement opportunities.",
      icon: Star,
      color: "from-indigo-400 to-purple-500"
    }
  ];

  const testimonials = [
    {
      name: "Harris Solangi",
      role: "CTO, Finanshels",
      content: "The StartupOS community has been a game-changer for my startup. The insights and connections I've gained here are invaluable.",
      avatar: "SC"
    },
    {
      name: "Drashty Soni",
      role: "CEO, ZeroHuman",
      content: "I've found my co-founder, secured funding, and learned from the best entrepreneurs all in this community. Highly recommended!",
      avatar: "MR"
    },
    {
      name: "Yashvi Soni",
      role: "Founder, Mealverse",
      content: "The daily discussions and expert advice have helped me navigate complex business challenges with confidence.",
      avatar: "PS"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "StartupOS Community",
    "description": "Join the StartupOS WhatsApp community of 500+ entrepreneurs, founders, and startup enthusiasts. Get exclusive insights, mentorship, and networking opportunities.",
    "url": "https://themeetpatel.com/community",
    "memberOf": {
      "@type": "Organization",
      "name": "The Meet Patel - Startup Ecosystem"
    },
    "foundingDate": "2023",
    "numberOfEmployees": "500+",
    "areaServed": "Global"
  };

  return (
    <div className="min-h-screen ultra-gradient-bg">
      <SEOHead 
        title="Join StartupOS Community | 500+ Entrepreneurs | The Meet Patel"
        description="Join the StartupOS WhatsApp community of 500+ entrepreneurs, founders, and startup enthusiasts. Get exclusive insights, mentorship, networking opportunities, and direct access to industry experts."
        keywords="StartupOS community, startup community, entrepreneur community, WhatsApp community, startup networking, business mentorship, startup insights, founder community, startup ecosystem, The Meet Patel community"
        canonical="/community"
        ogImage="/community-og-image.jpg"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 min-h-[75vh] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Floating Community Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{ y: [0, -22, 0], rotate: [0, 10, 0], x: [0, 12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-24 left-[9%] w-20 h-20 bg-gradient-to-br from-purple-200/60 to-pink-200/60 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-purple-300/50"
          >
            <Users className="w-10 h-10 text-purple-600" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 28, 0], rotate: [0, -12, 0], x: [0, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-32 right-[12%] w-24 h-24 bg-gradient-to-tl from-pink-200/60 to-purple-200/60 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl border border-pink-300/50"
          >
            <WhatsAppIcon className="w-12 h-12 text-pink-600" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, 8, 0], scale: [1, 1.07, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-36 left-[14%] w-20 h-20 bg-gradient-to-br from-purple-100/70 to-pink-100/70 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border border-purple-200/50"
          >
            <Heart className="w-10 h-10 text-purple-700" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 26, 0], rotate: [0, -10, 0], x: [0, -14, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
            className="absolute bottom-32 right-[10%] w-20 h-20 bg-gradient-to-tr from-pink-200/70 to-purple-200/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-pink-300/60"
          >
            <Star className="w-10 h-10 text-pink-700" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
            className="absolute top-1/2 left-[7%] w-16 h-16 bg-purple-200/55 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg"
          >
            <Target className="w-8 h-8 text-purple-600" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -8, 0], x: [0, 8, 0] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute top-1/3 right-[18%] w-16 h-16 bg-pink-100/65 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
          >
            <TrendingUp className="w-8 h-8 text-pink-600" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute bottom-1/4 left-[24%] w-14 h-14 bg-purple-100/60 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md"
          >
            <Award className="w-7 h-7 text-purple-600" />
          </motion.div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
              Join StartupOS Community
            </h1>
            <p className="text-lg sm:text-2xl text-purple-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
              Connect with 500+ entrepreneurs, founders, and startup enthusiasts in our exclusive WhatsApp community
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto">
              {communityStats.map((stat, index) => (
                <div key={index} className="bg-purple-50/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-200/50">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-500">{stat.number}</div>
                  <div className="text-gray-600 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 relative hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white/80 rounded-2xl border border-purple-200/50 hover:bg-purple-50 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  {stat.icon === WhatsAppIcon ? (
                    <WhatsAppIcon className="w-6 h-6 text-white" />
                  ) : (
                    <stat.icon className="w-6 h-6 text-white" />
                  )}
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              What You'll Get
            </h2>
            <p className="text-xl text-purple-600 max-w-3xl mx-auto">
              Exclusive benefits and opportunities designed to accelerate your entrepreneurial journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/30 backdrop-blur-md border border-purple-200/50 rounded-3xl p-6 group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              What Members Say
            </h2>
            <p className="text-xl text-purple-600 max-w-3xl mx-auto">
              Hear from entrepreneurs who've transformed their businesses through our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/30 backdrop-blur-md border border-purple-200/50 rounded-3xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold">{testimonial.name}</h4>
                    <p className="text-purple-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white/30 backdrop-blur-md border border-purple-200/50 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-20 h-20 text-purple-500 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-pink-500 rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-500 rounded-full"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Join?
              </h2>
              <p className="text-xl text-purple-600 mb-8 max-w-2xl mx-auto">
                Take the first step towards building meaningful connections and accelerating your startup journey
              </p>
              
              <motion.button
                onClick={() => setIsFormOpen(true)}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/40 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <WhatsAppIcon className="w-6 h-6 mr-3 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">Join StartupOS Community</span>
                <ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <p className="text-gray-600 text-sm mt-4">
                Free to join • No spam • Instant access to 500+ entrepreneurs
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Community Form Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-purple-900/20 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsFormOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white/30 backdrop-blur-md border border-purple-200/50 rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Join StartupOS Community</h3>
                  <p className="text-gray-600">Tell us about yourself to get started</p>
                </div>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 hover:bg-purple-50 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm mb-2 font-medium">LinkedIn Profile URL *</label>
                    <input
                      type="url"
                      name="linkedinId"
                      value={formData.linkedinId}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/80 border border-purple-200/50 rounded-xl p-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-2 font-medium">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/80 border border-purple-200/50 rounded-xl p-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm mb-2 font-medium">WhatsApp Number *</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/80 border border-purple-200/50 rounded-xl p-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="+91 98 2434 1414"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 text-sm mb-2 font-medium">Business/Company Name *</label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/80 border border-purple-200/50 rounded-xl p-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your company or startup name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 text-sm mb-2 font-medium">Your Role *</label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/80 border border-purple-200/50 rounded-xl p-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Founder, CEO, Developer, etc."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 text-sm mb-2 font-medium">Why do you want to join our community? *</label>
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full bg-white/80 border border-purple-200/50 rounded-xl p-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your goals, what you're working on, or how you'd like to contribute to the community..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`group relative w-full py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 shadow-xl flex items-center justify-center space-x-3 overflow-hidden text-white ${
                    isSubmitting
                      ? 'bg-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 hover:shadow-2xl hover:shadow-purple-500/30'
                  }`}
                >
                  {!isSubmitting && (
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  )}
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span className="relative z-10">Submitting...</span>
                    </>
                  ) : (
                    <>
                      <WhatsAppIcon className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                      <span className="relative z-10">Send Application via WhatsApp</span>
                    </>
                  )}
                </motion.button>

                {/* Error Message */}
                {submitError && (
                  <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-xl flex items-center space-x-2">
                    <X className="w-4 h-4 text-red-400 flex-shrink-0" />
                    <span className="text-red-300 text-sm">{submitError}</span>
                  </div>
                )}
              </form>

              {/* Footer Note */}
              <p className="text-gray-600 text-sm mt-4 text-center">
                Your information will be sent to Meet via WhatsApp for community approval
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CommunityPage;
