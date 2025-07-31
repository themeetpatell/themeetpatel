import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  CornerDownRight
} from 'lucide-react';

const PartnersPage = () => {
  const [selectedPartnershipType, setSelectedPartnershipType] = useState('All');

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

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ultra-button flex items-center space-x-2 mx-auto"
              >
                <Handshake className="w-5 h-5" />
                <span>Apply for Partnership</span>
              </motion.button>
            </Link>
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

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="ultra-glass rounded-3xl p-12 text-center border border-green-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join our ecosystem and help us revolutionize how startups build, scale, and succeed. 
              Let's create something amazing together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ultra-button flex items-center space-x-2"
                >
                  <Handshake className="w-5 h-5" />
                  <span>Apply for Partnership</span>
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 text-white/80 hover:text-white transition-colors"
                >
                  <span>Contact Partnership Team</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage; 