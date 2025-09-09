import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, CheckCircle, X, ArrowRight, Users, 
  Star, Award, Heart, Zap, BookOpen, Calendar,
  Linkedin, Twitter, Github, Instagram, Youtube
} from 'lucide-react';
import SEOHead from '../components/SEOHead';

const CommunityPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
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
  };

  const communityStats = [
    {
      number: "500+",
      label: "Active Members",
      icon: Users,
      color: "from-cyan-400 to-teal-500"
    },
    {
      number: "50+",
      label: "Daily Discussions",
      icon: MessageSquare,
      color: "from-teal-400 to-cyan-500"
    },
    {
      number: "24/7",
      label: "Support & Networking",
      icon: Heart,
      color: "from-emerald-400 to-teal-500"
    },
    {
      number: "100%",
      label: "Free to Join",
      icon: Star,
      color: "from-cyan-300 to-emerald-400"
    }
  ];

  const benefits = [
    {
      title: "Exclusive Insights",
      description: "Get access to market trends, startup insights, and industry analysis that you won't find anywhere else.",
      icon: BookOpen,
      color: "from-blue-400 to-cyan-500"
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
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Funding & Partnerships",
      description: "Early access to funding opportunities, partnership deals, and collaboration possibilities.",
      icon: Zap,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Masterclasses & Q&A",
      description: "Regular masterclasses, Q&A sessions, and workshops with industry leaders and successful founders.",
      icon: Calendar,
      color: "from-pink-400 to-rose-500"
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
      name: "Sarah Chen",
      role: "Founder, TechFlow",
      content: "The StartupOS community has been a game-changer for my startup. The insights and connections I've gained here are invaluable.",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "CEO, DataVault",
      content: "I've found my co-founder, secured funding, and learned from the best entrepreneurs all in this community. Highly recommended!",
      avatar: "MR"
    },
    {
      name: "Priya Sharma",
      role: "Product Manager, InnovateLab",
      content: "The daily discussions and expert advice have helped me navigate complex business challenges with confidence.",
      avatar: "PS"
    }
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "StartupOS Community",
    "description": "Join the StartupOS WhatsApp community of 500+ entrepreneurs, founders, and startup enthusiasts. Get exclusive insights, mentorship, and networking opportunities.",
    "url": "https://themeetpatel.in/community",
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
      <section className="pt-16 sm:pt-20 pb-20 sm:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Community Icon */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-8 sm:mb-12"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-green-500 via-teal-600 to-green-700 rounded-full flex items-center justify-center mb-6 sm:mb-8 shadow-2xl">
                <MessageSquare className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8"
            >
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
                Join StartupOS
                <span className="block bg-gradient-to-r from-green-400 via-teal-500 to-green-600 bg-clip-text text-transparent">
                  Community
                </span>
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
                Connect with 500+ entrepreneurs, founders, and startup enthusiasts in our exclusive WhatsApp community
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.button
              onClick={() => setIsFormOpen(true)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-gradient-to-r from-green-500 via-teal-600 to-green-700 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-2xl font-bold text-lg sm:text-xl hover:from-green-600 hover:via-teal-700 hover:to-green-800 transition-all duration-300 flex items-center space-x-3 mx-auto shadow-2xl shadow-green-500/30 hover:shadow-green-500/50 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <MessageSquare className="w-6 h-6 relative z-10" />
              <span className="relative z-10">Join Community Now</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-white/60 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              What You'll Get
            </h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
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
                className="apple-glass rounded-3xl p-6 group hover:scale-105 transition-transform duration-300"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              What Members Say
            </h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
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
                className="apple-glass rounded-3xl p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="apple-glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-400 rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400 rounded-full"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Join?
              </h2>
              <p className="text-xl text-cyan-200 mb-8 max-w-2xl mx-auto">
                Take the first step towards building meaningful connections and accelerating your startup journey
              </p>
              
              <motion.button
                onClick={() => setIsFormOpen(true)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <MessageSquare className="w-6 h-6 mr-3 relative z-10" />
                <span className="relative z-10">Join StartupOS Community</span>
                <ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              <p className="text-white/60 text-sm mt-4">
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
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsFormOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="apple-glass rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Join StartupOS Community</h3>
                  <p className="text-white/70">Tell us about yourself to get started</p>
                </div>
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 text-sm mb-2 font-medium">LinkedIn Profile URL *</label>
                    <input
                      type="url"
                      name="linkedinId"
                      value={formData.linkedinId}
                      onChange={handleInputChange}
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
                      value={formData.email}
                      onChange={handleInputChange}
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
                    value={formData.whatsapp}
                    onChange={handleInputChange}
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
                      value={formData.businessName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your company or startup name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-2 font-medium">Your Role *</label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Founder, CEO, Developer, etc."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm mb-2 font-medium">Why do you want to join our community? *</label>
                  <textarea
                    name="reason"
                    value={formData.reason}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your goals, what you're working on, or how you'd like to contribute to the community..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/20 flex items-center justify-center space-x-3"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Application via WhatsApp</span>
                </motion.button>
              </form>

              {/* Footer Note */}
              <p className="text-white/60 text-sm mt-4 text-center">
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
