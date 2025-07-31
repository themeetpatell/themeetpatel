import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Network, 
  Users, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Rocket,
  TrendingUp,
  Crown,
  Star,
  Clock,
  DollarSign,
  AlertTriangle,
  Lightbulb,
  Map,
  Compass,
  Heart,
  Eye,
  Handshake,
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
  Trophy,
  Zap,
  Shield,
  Award,
  Briefcase,
  Building,
  Factory,
  Store,
  ShoppingBag,
  Tag,
  Percent,
  BarChart3,
  LineChart,
  PieChart as PieChartIcon,
  ScatterChart
} from 'lucide-react';

const EcosystemAccess = () => {
  const [activeTab, setActiveTab] = useState('investors');
  const [hoveredCard, setHoveredCard] = useState(null);

  const heroSection = {
    title: "Startup Ecosystem Access",
    subtitle: "Connect with the World's Best Resources",
    description: "Get exclusive access to investors, mentors, partners, and service providers. Connect with the global startup ecosystem and accelerate your growth with curated introductions.",
    stats: [
      { number: "500+", label: "Investors", icon: DollarSign, color: "from-green-400 to-emerald-500" },
      { number: "1,000+", label: "Mentors", icon: Users, color: "from-blue-400 to-cyan-500" },
      { number: "200+", label: "Partners", icon: Handshake, color: "from-purple-400 to-pink-500" },
      { number: "50+", label: "Countries", icon: Globe, color: "from-orange-400 to-red-500" }
    ]
  };

  const ecosystemPartners = [
    {
      id: 'investors',
      title: "Investor Network",
      description: "Connect with angel investors, VCs, and strategic investors worldwide.",
      features: [
        "Curated investor matching based on your stage and sector",
        "Direct introduction to relevant investors",
        "Pitch deck optimization and feedback",
        "Due diligence preparation support",
        "Term sheet negotiation guidance",
        "Post-investment relationship management"
      ],
      icon: DollarSign,
      color: "from-green-400 to-emerald-500",
      stats: { connections: "500+", success: "85%", avgTime: "2.3 weeks" }
    },
    {
      id: 'mentors',
      title: "Mentor Network",
      description: "Access to successful founders, executives, and industry experts.",
      features: [
        "Stage-specific mentor matching",
        "1-on-1 mentoring sessions",
        "Group mastermind sessions",
        "Expert office hours",
        "Mentor-led workshops",
        "Long-term mentorship programs"
      ],
      icon: Users,
      color: "from-blue-400 to-cyan-500",
      stats: { connections: "1,000+", success: "92%", avgTime: "1.8 weeks" }
    },
    {
      id: 'services',
      title: "Service Provider Network",
      description: "Premium service providers for legal, accounting, marketing, and more.",
      features: [
        "Vetted service provider recommendations",
        "Discounted rates for ecosystem members",
        "Quality assurance and performance tracking",
        "Bundled service packages",
        "Priority support and service",
        "Exclusive deals and offers"
      ],
      icon: Settings,
      color: "from-purple-400 to-pink-500",
      stats: { connections: "200+", success: "78%", avgTime: "1.2 weeks" }
    },
    {
      id: 'partners',
      title: "Partner Network",
      description: "Strategic partnerships with corporations, accelerators, and platforms.",
      features: [
        "Corporate partnership opportunities",
        "Accelerator and incubator access",
        "Platform integration partnerships",
        "Joint venture opportunities",
        "Channel partnership development",
        "Strategic alliance formation"
      ],
      icon: Handshake,
      color: "from-orange-400 to-red-500",
      stats: { connections: "150+", success: "88%", avgTime: "3.1 weeks" }
    }
  ];

  const accessLevels = [
    {
      title: "Basic Access",
      description: "Essential ecosystem connections for early-stage startups",
      features: [
        "Access to mentor network (10 sessions/month)",
        "Basic investor introductions (5/month)",
        "Service provider directory access",
        "Community events and workshops",
        "Resource library access",
        "Email support"
      ],
      price: "$99/month",
      icon: Star,
      color: "from-gray-400 to-gray-600",
      popular: false
    },
    {
      title: "Premium Access",
      description: "Comprehensive ecosystem access for growing startups",
      features: [
        "Unlimited mentor sessions",
        "Priority investor introductions",
        "Exclusive service provider deals",
        "Private events and networking",
        "Advanced matching algorithms",
        "Dedicated success manager"
      ],
      price: "$299/month",
      icon: Crown,
      color: "from-yellow-400 to-orange-500",
      popular: true
    },
    {
      title: "Enterprise Access",
      description: "Full ecosystem access for scaling companies",
      features: [
        "Custom ecosystem strategy",
        "Direct investor relationships",
        "White-glove service coordination",
        "Exclusive partnership opportunities",
        "Strategic advisory services",
        "24/7 priority support"
      ],
      price: "$999/month",
      icon: Trophy,
      color: "from-purple-400 to-pink-500",
      popular: false
    }
  ];

  const successStories = [
    {
      founder: "Alex Chen",
      company: "DataFlow",
      story: "Alex connected with 3 strategic investors through the ecosystem and raised $2M in seed funding. The mentor network helped him refine his pitch and business model.",
      result: "Raised $2M seed round in 6 months",
      icon: DollarSign,
      avatar: "AC",
      industry: "AI/ML"
    },
    {
      founder: "Sarah Kim",
      company: "EcoTech",
      story: "Sarah found her perfect mentor through the ecosystem who helped her navigate the enterprise sales process. She also secured partnerships with 2 major corporations.",
      result: "Achieved $1M ARR in 12 months",
      icon: Users,
      avatar: "SK",
      industry: "CleanTech"
    },
    {
      founder: "Marcus Rodriguez",
      company: "HealthSync",
      story: "Marcus used the service provider network to build his legal and financial foundation. The ecosystem connections helped him scale from 10 to 100 employees.",
      result: "Scaled to 100 employees in 18 months",
      icon: Settings,
      avatar: "MR",
      industry: "HealthTech"
    }
  ];

  const features = [
    {
      category: "Intelligent Matching",
      description: "AI-powered matching based on your stage, sector, and needs",
      items: [
        "Advanced algorithm for optimal connections",
        "Stage-specific partner recommendations",
        "Sector-focused matching criteria",
        "Success rate tracking and optimization",
        "Feedback-based matching improvement",
        "Custom matching preferences and filters"
      ],
      icon: Cpu
    },
    {
      category: "Quality Assurance",
      description: "Vetted and verified ecosystem partners for reliable connections",
      items: [
        "Rigorous partner verification process",
        "Performance tracking and ratings",
        "Quality feedback and reviews",
        "Continuous partner evaluation",
        "Exclusive access to top-tier partners",
        "Guaranteed satisfaction or replacement"
      ],
      icon: ShieldCheck
    },
    {
      category: "Strategic Support",
      description: "Expert guidance for maximizing ecosystem value",
      items: [
        "Ecosystem strategy development",
        "Connection optimization coaching",
        "Relationship management guidance",
        "Follow-up and engagement support",
        "Strategic partnership advice",
        "Long-term relationship building"
      ],
      icon: Compass
    },
    {
      category: "Global Network",
      description: "Access to the world's most valuable startup ecosystem",
      items: [
        "500+ verified investors worldwide",
        "1,000+ successful founder mentors",
        "200+ premium service providers",
        "50+ countries and regions",
        "24/7 global network access",
        "Local ecosystem integration"
      ],
      icon: Globe
    }
  ];

  const pricing = {
    plan: "Ecosystem Pro",
    price: "$299/month",
    savings: "Save 17% with annual billing",
    features: [
      "Full access to all ecosystem networks",
      "Unlimited mentor sessions and introductions",
      "Priority access to top-tier partners",
      "Dedicated success manager",
      "Advanced matching algorithms",
      "Exclusive events and networking",
      "Strategic advisory services",
      "14-day free trial, no credit card required"
    ]
  };

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-emerald-900/20 to-slate-900" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1.2, 1, 1.2],
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.3, 1],
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 left-1/3 w-40 h-40 bg-purple-500/10 rounded-full blur-xl"
          />
        </div>
        
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
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full px-6 py-3 mb-8"
            >
              <Globe className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Ecosystem Access</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="ultra-text-gradient">Connect with the World's</span>
              <br />
              <span className="text-white">Best Resources</span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
              Get exclusive access to investors, mentors, partners, and service providers. 
              Connect with the global startup ecosystem and accelerate your growth with curated introductions.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ultra-button flex items-center space-x-2 mx-auto"
            >
              <Globe className="w-5 h-5" />
              <span>Join the Ecosystem</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {heroSection.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="ultra-glass p-6 rounded-xl text-center cursor-pointer"
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Ecosystem Partners */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Four Ecosystem Networks
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Access to the most valuable networks in the startup ecosystem.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="ultra-glass rounded-xl p-2 flex space-x-2">
              {ecosystemPartners.map((partner) => (
                <button
                  key={partner.id}
                  onClick={() => setActiveTab(partner.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === partner.id
                      ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {partner.title}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {ecosystemPartners.map((partner) => (
              activeTab === partner.id && (
                <motion.div
                  key={partner.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                >
                  <div>
                    <div className={`w-20 h-20 bg-gradient-to-r ${partner.color} rounded-2xl flex items-center justify-center mb-8`}>
                      <partner.icon className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">{partner.title}</h3>
                    <p className="text-xl text-white/70 mb-8 leading-relaxed">{partner.description}</p>
                    
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-400">{partner.stats.connections}</div>
                        <div className="text-white/60 text-sm">Connections</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-400">{partner.stats.success}</div>
                        <div className="text-white/60 text-sm">Success Rate</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emerald-400">{partner.stats.avgTime}</div>
                        <div className="text-white/60 text-sm">Avg Time</div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {partner.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-start space-x-4 p-4 ultra-glass rounded-xl"
                      >
                        <CheckCircle className="w-6 h-6 text-emerald-400 mt-0.5 flex-shrink-0" />
                        <span className="text-white/90">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* Access Levels */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Choose Your Access Level
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Different levels of ecosystem access for different stages of your journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {accessLevels.map((level, index) => (
              <motion.div
                key={level.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`ultra-glass p-8 rounded-xl border relative ${
                  level.popular 
                    ? 'border-emerald-500/50 bg-gradient-to-b from-emerald-500/10 to-transparent' 
                    : 'border-white/10'
                }`}
              >
                {level.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className={`w-16 h-16 bg-gradient-to-r ${level.color} rounded-xl flex items-center justify-center mb-6`}>
                  <level.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{level.title}</h3>
                <p className="text-white/70 mb-4">{level.description}</p>
                <div className="text-3xl font-bold text-emerald-400 mb-6">{level.price}</div>
                
                <div className="space-y-3">
                  {level.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full mt-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                    level.popular
                      ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  Get Started
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Real founders who accelerated their growth through ecosystem access.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.founder}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="ultra-glass p-8 rounded-xl cursor-pointer"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{story.avatar}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{story.founder}</h3>
                    <p className="text-emerald-400 font-semibold">{story.company}</p>
                    <span className="text-white/60 text-sm">{story.industry}</span>
                  </div>
                </div>
                
                <story.icon className="w-8 h-8 text-emerald-400 mb-4" />
                <p className="text-white/70 mb-4 text-sm leading-relaxed">{story.story}</p>
                <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3">
                  <p className="text-emerald-400 font-semibold text-sm">{story.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced Features
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Powerful capabilities that make ecosystem access truly valuable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.category}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="ultra-glass p-8 rounded-xl cursor-pointer"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{feature.category}</h3>
                </div>
                <p className="text-white/70 mb-6">{feature.description}</p>
                
                <div className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="ultra-glass rounded-3xl p-12 text-center border border-emerald-500/20 relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">
                {pricing.plan}
              </h2>
              <div className="text-4xl font-bold text-white mb-2">{pricing.price}</div>
              <p className="text-emerald-400 font-semibold mb-8">{pricing.savings}</p>
              
              <div className="space-y-3 mb-8">
                {pricing.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ultra-button flex items-center space-x-2 mx-auto"
              >
                <Globe className="w-5 h-5" />
                <span>Start Free Trial</span>
              </motion.button>

              <p className="text-white/50 text-sm mt-6">
                No credit card required • 14-day free trial • Cancel anytime
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EcosystemAccess; 