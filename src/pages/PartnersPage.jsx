import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Handshake, 
  Globe, 
  Users, 
  DollarSign, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Rocket,
  TrendingUp,
  Crown,
  Star,
  Clock,
  AlertTriangle,
  Lightbulb,
  Map,
  Compass,
  Heart,
  Eye,
  Search,
  MessageSquare,
  Activity,
  PieChart,
  Users2,
  Settings,
  GitBranch,
  Database,
  Cpu,
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
  HelpCircle,
  XCircle,
  MinusCircle,
  PlusCircle,
  Edit,
  Trash2,
  Copy,
  Scissors,
  Paperclip,
  Link,
  ExternalLink,
  Maximize2,
  Home,
  Menu,
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
  Building2,
  User,
  MapPin,
  Globe2,
  Briefcase,
  Award,
  Zap
} from 'lucide-react';

const PartnersPage = () => {
  const [selectedPartnershipType, setSelectedPartnershipType] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    website: '',
    companySize: '',
    industry: '',
    partnershipType: '',
    description: '',
    benefits: '',
    requirements: '',
    timeline: '',
    budget: '',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Simulate API call to database
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send data to your backend/database
      console.log('Partner application submitted:', formData);
      
      // Store in localStorage as a simple database simulation
      const existingApplications = JSON.parse(localStorage.getItem('partnerApplications') || '[]');
      const newApplication = {
        id: Date.now(),
        ...formData,
        submittedAt: new Date().toISOString(),
        status: 'pending'
      };
      existingApplications.push(newApplication);
      localStorage.setItem('partnerApplications', JSON.stringify(existingApplications));
      
      setSubmitSuccess(true);
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        phone: '',
        website: '',
        companySize: '',
        industry: '',
        partnershipType: '',
        description: '',
        benefits: '',
        requirements: '',
        timeline: '',
        budget: '',
        additionalInfo: ''
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
        setShowForm(false);
      }, 3000);
      
    } catch (error) {
      setSubmitError('Failed to submit application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      website: '',
      companySize: '',
      industry: '',
      partnershipType: '',
      description: '',
      benefits: '',
      requirements: '',
      timeline: '',
      budget: '',
      additionalInfo: ''
    });
    setSubmitError('');
  };

  const partnershipTypes = [
    { name: 'All', count: 4 },
    { name: 'Strategic Partners', count: 1 },
    { name: 'Technology Partners', count: 1 },
    { name: 'Service Partners', count: 1 },
    { name: 'Channel Partners', count: 1 }
  ];

  const partnershipOpportunities = [
    {
      title: "Strategic Partners",
      description: "Deep integration partnerships with complementary platforms and services.",
      benefits: [
        "Joint product development",
        "Shared customer base access",
        "Revenue sharing opportunities",
        "Co-marketing initiatives",
        "Technical integration support",
        "Priority customer referrals"
      ],
      requirements: [
        "Established B2B SaaS platform",
        "Over 10,000 active users",
        "Complementary customer base",
        "Technical integration capabilities",
        "Shared vision for startup ecosystem"
      ],
      icon: Crown,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Technology Partners",
      description: "Integration partnerships with technology providers and tools.",
      benefits: [
        "API access and documentation",
        "Technical support and training",
        "Co-development opportunities",
        "Market expansion support",
        "Customer success collaboration",
        "Product roadmap alignment"
      ],
      requirements: [
        "Robust API and integration capabilities",
        "Enterprise-grade security",
        "Scalable infrastructure",
        "Strong customer support",
        "Innovative technology stack"
      ],
      icon: Code,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Service Partners",
      description: "Partnerships with service providers who support startup growth.",
      benefits: [
        "Referral program participation",
        "Joint service offerings",
        "Customer success collaboration",
        "Market expansion support",
        "Revenue sharing opportunities",
        "Brand visibility and recognition"
      ],
      requirements: [
        "Proven track record with startups",
        "High-quality service delivery",
        "Strong customer satisfaction",
        "Scalable service model",
        "Alignment with startup needs"
      ],
      icon: Settings,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Channel Partners",
      description: "Distribution partnerships to expand market reach and customer acquisition.",
      benefits: [
        "Exclusive territory rights",
        "Marketing and sales support",
        "Training and certification programs",
        "Revenue sharing model",
        "Customer success collaboration",
        "Brand and marketing materials"
      ],
      requirements: [
        "Established sales and marketing capabilities",
        "Strong local market presence",
        "Startup ecosystem knowledge",
        "Dedicated partnership team",
        "Proven track record of success"
      ],
      icon: Globe,
      color: "from-orange-400 to-red-500"
    }
  ];

  const currentPartners = [
    {
      name: "TechFlow Solutions",
      type: "Strategic Partner",
      description: "Leading B2B SaaS platform with 50,000+ users. Joint product development and shared customer base.",
      logo: "/partners/techflow.png",
      benefits: "Revenue sharing, co-marketing, technical integration",
      icon: Crown
    },
    {
      name: "CloudScale Systems",
      type: "Technology Partner",
      description: "Enterprise cloud infrastructure provider. Deep API integration and technical collaboration.",
      logo: "/partners/cloudscale.png",
      benefits: "API access, technical support, co-development",
      icon: Code
    },
    {
      name: "Growth Advisors",
      type: "Service Partner",
      description: "Premium startup consulting services. Joint service offerings and customer success collaboration.",
      logo: "/partners/growth-advisors.png",
      benefits: "Referral program, joint services, revenue sharing",
      icon: Settings
    },
    {
      name: "Startup Network",
      type: "Channel Partner",
      description: "Regional startup ecosystem builder. Exclusive distribution rights in key markets.",
      logo: "/partners/startup-network.png",
      benefits: "Exclusive rights, marketing support, training programs",
      icon: Globe
    }
  ];

  const successMetrics = [
    {
      metric: "500+",
      label: "Partner Companies",
      description: "Trusted partners worldwide",
      icon: Users
    },
    {
      metric: "$50M+",
      label: "Joint Revenue",
      description: "Generated through partnerships",
      icon: DollarSign
    },
    {
      metric: "10,000+",
      label: "Joint Customers",
      description: "Served through partnerships",
      icon: Target
    },
    {
      metric: "95%",
      label: "Partner Satisfaction",
      description: "Based on annual surveys",
      icon: Star
    }
  ];

  const applicationProcess = [
    {
      step: 1,
      title: "Initial Contact",
      description: "Reach out to our partnership team with your proposal",
      duration: "1-2 days",
      icon: Mail
    },
    {
      step: 2,
      title: "Qualification Review",
      description: "We review your company and partnership fit",
      duration: "3-5 days",
      icon: Search
    },
    {
      step: 3,
      title: "Partnership Discussion",
      description: "Deep dive into partnership opportunities and alignment",
      duration: "1-2 weeks",
      icon: MessageSquare
    },
    {
      step: 4,
      title: "Agreement & Launch",
      description: "Finalize partnership terms and begin collaboration",
      duration: "2-4 weeks",
      icon: Handshake
    }
  ];

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-green-900/20 to-slate-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full px-6 py-3 mb-8"
            >
              <Handshake className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Partnership Program</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="ultra-text-gradient">Become a Partner</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
              Join our ecosystem of partners and help us revolutionize how startups build, scale, and succeed. 
              Together, we can create more value for founders worldwide.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className="ultra-button flex items-center space-x-2 mx-auto"
            >
              <Handshake className="w-5 h-5" />
              <span>Apply for Partnership</span>
            </motion.button>
          </motion.div>

          {/* Partnership Types Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {partnershipTypes.map((type) => (
              <motion.button
                key={type.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedPartnershipType(type.name)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                  selectedPartnershipType === type.name
                    ? 'bg-green-500 text-white'
                    : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
                }`}
              >
                <span>{type.name}</span>
                <span className="text-xs opacity-60">({type.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Opportunities */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Partnership Opportunities
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Choose the partnership type that aligns with your business goals and capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {partnershipOpportunities
              .filter(opportunity => selectedPartnershipType === 'All' || opportunity.title.includes(selectedPartnershipType))
              .map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl border border-white/10"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${opportunity.color} rounded-xl flex items-center justify-center mb-6`}>
                  <opportunity.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{opportunity.title}</h3>
                <p className="text-white/70 mb-6">{opportunity.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3">Benefits</h4>
                    <div className="space-y-2">
                      {opportunity.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Requirements</h4>
                    <div className="space-y-2">
                      {opportunity.requirements.map((requirement, reqIndex) => (
                        <div key={reqIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-white/80 text-sm">{requirement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Partnership Success
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our partnerships are driving real results for both our partners and the startup ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-6 rounded-xl text-center"
              >
                <metric.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-2">{metric.metric}</div>
                <p className="text-white font-semibold mb-1">{metric.label}</p>
                <p className="text-white/60 text-sm">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Current Partners
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Meet some of our trusted partners who are helping us transform the startup ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {currentPartners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl border border-white/10"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                    <partner.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{partner.name}</h3>
                    <p className="text-blue-400 font-semibold mb-3">{partner.type}</p>
                    <p className="text-white/70 mb-4">{partner.description}</p>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                      <p className="text-blue-400 font-semibold text-sm">{partner.benefits}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Application Process
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our streamlined process makes it easy to become a StartupOS partner.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applicationProcess.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-6 rounded-xl text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{step.step}</span>
                </div>
                <step.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white/70 mb-3">{step.description}</p>
                <p className="text-green-400 font-semibold text-sm">{step.duration}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Application Form */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Apply for Partnership
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Ready to join our ecosystem? Fill out the application below and our partnership team will get back to you within 48 hours.
            </p>
          </motion.div>

          {/* Form Toggle */}
          <div className="text-center mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(!showForm)}
              className="ultra-button flex items-center space-x-2 mx-auto"
            >
              {showForm ? (
                <>
                  <XCircle className="w-5 h-5" />
                  <span>Hide Application Form</span>
                </>
              ) : (
                <>
                  <Handshake className="w-5 h-5" />
                  <span>Show Application Form</span>
                </>
              )}
            </motion.button>
          </div>

          {/* Application Form */}
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="ultra-glass rounded-3xl p-8 border border-green-500/20"
              >
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Application Submitted!</h3>
                    <p className="text-white/70 text-lg mb-6">
                      Thank you for your partnership application. Our team will review your submission and contact you within 48 hours.
                    </p>
                    <div className="text-green-400 font-semibold">
                      Application ID: {Date.now()}
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Company Information */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                          <Building2 className="w-5 h-5 text-green-400" />
                          <span>Company Information</span>
                        </h3>
                        
                        <div>
                          <label className="block text-white font-medium mb-2">Company Name *</label>
                          <input
                            type="text"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-green-400 transition-colors"
                            placeholder="Enter your company name"
                          />
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-2">Website</label>
                          <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-green-400 transition-colors"
                            placeholder="https://yourcompany.com"
                          />
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-2">Company Size *</label>
                          <select
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-400 transition-colors"
                          >
                            <option value="">Select company size</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-1000">201-1000 employees</option>
                            <option value="1000+">1000+ employees</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-2">Industry *</label>
                          <select
                            name="industry"
                            value={formData.industry}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-400 transition-colors"
                          >
                            <option value="">Select industry</option>
                            <option value="Technology">Technology</option>
                            <option value="Finance">Finance</option>
                            <option value="Healthcare">Healthcare</option>
                            <option value="Education">Education</option>
                            <option value="E-commerce">E-commerce</option>
                            <option value="Consulting">Consulting</option>
                            <option value="Marketing">Marketing</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>

                      {/* Contact Information */}
                      <div className="space-y-4">
                        <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                          <User className="w-5 h-5 text-green-400" />
                          <span>Contact Information</span>
                        </h3>
                        
                        <div>
                          <label className="block text-white font-medium mb-2">Contact Name *</label>
                          <input
                            type="text"
                            name="contactName"
                            value={formData.contactName}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-green-400 transition-colors"
                            placeholder="Enter contact person name"
                          />
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-2">Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-green-400 transition-colors"
                            placeholder="contact@company.com"
                          />
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-2">Phone</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-green-400 transition-colors"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>

                        <div>
                          <label className="block text-white font-medium mb-2">Partnership Type *</label>
                          <select
                            name="partnershipType"
                            value={formData.partnershipType}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-400 transition-colors"
                          >
                            <option value="">Select partnership type</option>
                            <option value="Strategic Partner">Strategic Partner</option>
                            <option value="Technology Partner">Technology Partner</option>
                            <option value="Service Partner">Service Partner</option>
                            <option value="Channel Partner">Channel Partner</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Partnership Details */}
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                        <Handshake className="w-5 h-5 text-green-400" />
                        <span>Partnership Details</span>
                      </h3>
                      
                      <div>
                        <label className="block text-white font-medium mb-2">Company Description *</label>
                        <textarea
                          name="description"
                          value={formData.description}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-green-400 transition-colors"
                          placeholder="Tell us about your company, mission, and what you do..."
                        />
                      </div>

                      <div>
                        <label className="block text-white font-medium mb-2">Proposed Benefits *</label>
                        <textarea
                          name="benefits"
                          value={formData.benefits}
                          onChange={handleInputChange}
                          required
                          rows={3}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-green-400 transition-colors"
                          placeholder="What benefits can you bring to StartupOS and our users?"
                        />
                      </div>

                      <div>
                        <label className="block text-white font-medium mb-2">Your Requirements</label>
                        <textarea
                          name="requirements"
                          value={formData.requirements}
                          onChange={handleInputChange}
                          rows={3}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-green-400 transition-colors"
                          placeholder="What do you need from StartupOS for this partnership?"
                        />
                      </div>
                    </div>

                    {/* Timeline & Budget */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white font-medium mb-2">Expected Timeline</label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-400 transition-colors"
                        >
                          <option value="">Select timeline</option>
                          <option value="Immediate">Immediate</option>
                          <option value="1-3 months">1-3 months</option>
                          <option value="3-6 months">3-6 months</option>
                          <option value="6-12 months">6-12 months</option>
                          <option value="12+ months">12+ months</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-white font-medium mb-2">Budget Range</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-green-400 transition-colors"
                        >
                          <option value="">Select budget range</option>
                          <option value="$0 - $10K">$0 - $10K</option>
                          <option value="$10K - $50K">$10K - $50K</option>
                          <option value="$50K - $100K">$50K - $100K</option>
                          <option value="$100K - $500K">$100K - $500K</option>
                          <option value="$500K+">$500K+</option>
                        </select>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div>
                      <label className="block text-white font-medium mb-2">Additional Information</label>
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleInputChange}
                        rows={4}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-green-400 transition-colors"
                        placeholder="Any additional information you'd like to share..."
                      />
                    </div>

                    {/* Error Message */}
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 text-red-400 text-center"
                      >
                        {submitError}
                      </motion.div>
                    )}

                    {/* Form Actions */}
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-6">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={resetForm}
                        className="px-8 py-4 text-white/80 hover:text-white transition-colors border border-white/20 rounded-xl hover:border-white/40"
                      >
                        Reset Form
                      </motion.button>
                      
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        disabled={isSubmitting}
                        className="ultra-button flex items-center space-x-2 px-8 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <RefreshCw className="w-5 h-5 animate-spin" />
                            <span>Submitting...</span>
                          </>
                          ) : (
                          <>
                            <Zap className="w-5 h-5" />
                            <span>Submit Application</span>
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Admin Panel - View Applications */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Partnership Applications
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              View and manage partnership applications from our database.
            </p>
          </motion.div>

          <div className="ultra-glass rounded-3xl p-8 border border-green-500/20">
            <PartnershipApplicationsViewer />
          </div>
        </div>
      </section>
    </div>
  );
};

// Partnership Applications Viewer Component
const PartnershipApplicationsViewer = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load applications from localStorage (simulating database)
    const loadApplications = () => {
      try {
        const stored = localStorage.getItem('partnerApplications');
        if (stored) {
          setApplications(JSON.parse(stored));
        }
      } catch (error) {
        console.error('Error loading applications:', error);
      } finally {
        setLoading(false);
      }
    };

    loadApplications();
    
    // Listen for storage changes (when new applications are added)
    const handleStorageChange = () => loadApplications();
    window.addEventListener('storage', handleStorageChange);
    
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const updateApplicationStatus = (id, newStatus) => {
    const updatedApplications = applications.map(app => 
      app.id === id ? { ...app, status: newStatus } : app
    );
    setApplications(updatedApplications);
    localStorage.setItem('partnerApplications', JSON.stringify(updatedApplications));
  };

  const deleteApplication = (id) => {
    const updatedApplications = applications.filter(app => app.id !== id);
    setApplications(updatedApplications);
    localStorage.setItem('partnerApplications', JSON.stringify(updatedApplications));
  };

  if (loading) {
    return (
      <div className="text-center py-12">
        <RefreshCw className="w-8 h-8 text-green-400 animate-spin mx-auto mb-4" />
        <p className="text-white/70">Loading applications...</p>
      </div>
    );
  }

  if (applications.length === 0) {
    return (
      <div className="text-center py-12">
        <Database className="w-16 h-16 text-white/30 mx-auto mb-4" />
        <h3 className="text-xl font-bold text-white mb-2">No Applications Yet</h3>
        <p className="text-white/70">Partnership applications will appear here once submitted.</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">
          Total Applications: {applications.length}
        </h3>
        <div className="text-sm text-white/60">
          Last updated: {new Date().toLocaleString()}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {applications.map((application) => (
          <motion.div
            key={application.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4"
          >
            {/* Header */}
            <div className="flex items-start justify-between">
              <div>
                <h4 className="text-lg font-bold text-white">{application.companyName}</h4>
                <p className="text-green-400 font-semibold text-sm">{application.partnershipType}</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                  application.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                  application.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                  application.status === 'rejected' ? 'bg-red-500/20 text-red-400' :
                  'bg-gray-500/20 text-gray-400'
                }`}>
                  {application.status}
                </span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-white/70">
                <User className="w-4 h-4" />
                <span>{application.contactName}</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-white/70">
                <Mail className="w-4 h-4" />
                <span>{application.email}</span>
              </div>
              {application.phone && (
                <div className="flex items-center space-x-2 text-sm text-white/70">
                  <Phone className="w-4 h-4" />
                  <span>{application.phone}</span>
                </div>
              )}
            </div>

            {/* Company Details */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-white/70">
                <Building2 className="w-4 h-4" />
                <span>{application.companySize} • {application.industry}</span>
              </div>
              {application.website && (
                <div className="flex items-center space-x-2 text-sm text-white/70">
                  <Globe2 className="w-4 h-4" />
                  <a 
                    href={application.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    {application.website}
                  </a>
                </div>
              )}
            </div>

            {/* Description Preview */}
            <div>
              <p className="text-white/80 text-sm line-clamp-3">
                {application.description}
              </p>
            </div>

            {/* Submitted Date */}
            <div className="text-xs text-white/50">
              Submitted: {new Date(application.submittedAt).toLocaleDateString()}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-2 pt-4 border-t border-white/10">
              <select
                value={application.status}
                onChange={(e) => updateApplicationStatus(application.id, e.target.value)}
                className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-green-400"
              >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="under-review">Under Review</option>
              </select>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => deleteApplication(application.id)}
                className="px-3 py-2 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 hover:bg-red-500/30 transition-colors"
                title="Delete Application"
              >
                <Trash2 className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PartnersPage; 