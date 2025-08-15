import React from 'react';
import { motion } from 'framer-motion';
import { 
  Handshake, 
  Building2, 
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
  Users,
  Search,
  MessageSquare,
  Activity,
  PieChart,
  Users2,
  Settings,
  GitBranch,
  Database,
  Cpu,
  Globe,
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

const MergersAcquisition = () => {
  const heroSection = {
    title: "Mergers & Acquisition",
    subtitle: "Strategic Growth Through M&A",
    description: "Navigate the complex world of mergers and acquisitions with expert guidance, comprehensive due diligence, and strategic execution. Maximize value and minimize risk in every deal.",
    stats: [
      { number: "$50B+", label: "Deal value facilitated", icon: DollarSign },
      { number: "200+", label: "Successful deals", icon: CheckCircle },
      { number: "95%", label: "Success rate", icon: Target },
      { number: "24/7", label: "Expert support", icon: Clock }
    ]
  };

  const services = [
    {
      title: "Strategic M&A Planning",
      description: "Develop comprehensive M&A strategies aligned with your business objectives.",
      features: [
        "Target identification and screening",
        "Strategic fit analysis and assessment",
        "Deal structure optimization",
        "Timeline planning and execution",
        "Risk assessment and mitigation",
        "Value creation opportunity analysis"
      ],
      icon: Target,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Due Diligence Excellence",
      description: "Comprehensive due diligence to uncover risks and opportunities.",
      features: [
        "Financial due diligence and analysis",
        "Legal and regulatory compliance review",
        "Operational and technical assessment",
        "Market and competitive analysis",
        "Cultural and integration planning",
        "Synergy identification and quantification"
      ],
      icon: Search,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Deal Execution & Negotiation",
      description: "Expert negotiation and deal execution to maximize value.",
      features: [
        "Deal structuring and terms negotiation",
        "Valuation analysis and modeling",
        "Legal documentation and review",
        "Regulatory approval coordination",
        "Closing coordination and execution",
        "Post-deal integration planning"
      ],
      icon: Handshake,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Integration & Value Creation",
      description: "Seamless integration and value creation post-acquisition.",
      features: [
        "Integration planning and execution",
        "Change management and communication",
        "Synergy realization and tracking",
        "Performance monitoring and optimization",
        "Cultural integration and alignment",
        "Value creation measurement and reporting"
      ],
      icon: Building2,
      color: "from-orange-400 to-red-500"
    }
  ];

  const dealTypes = [
    {
      title: "Strategic Acquisitions",
      description: "Acquire complementary businesses to expand market reach and capabilities",
      examples: [
        "Market expansion acquisitions",
        "Product portfolio expansion",
        "Technology and IP acquisition",
        "Talent and team acquisition"
      ],
      icon: Target,
      color: "from-indigo-400 to-purple-500"
    },
    {
      title: "Financial Acquisitions",
      description: "Leveraged buyouts and financial engineering for value creation",
      examples: [
        "Leveraged buyouts (LBOs)",
        "Management buyouts (MBOs)",
        "Private equity acquisitions",
        "Asset-based acquisitions"
      ],
      icon: DollarSign,
      color: "from-emerald-400 to-green-500"
    },
    {
      title: "Mergers of Equals",
      description: "Strategic combinations to create stronger market positions",
      examples: [
        "Horizontal mergers for market share",
        "Vertical integration mergers",
        "Cross-border mergers",
        "Joint venture formations"
      ],
      icon: Handshake,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Divestitures & Spin-offs",
      description: "Strategic divestitures to unlock value and focus operations",
      examples: [
        "Non-core asset divestitures",
        "Spin-off transactions",
        "Carve-out transactions",
        "Asset sales and liquidations"
      ],
      icon: Building2,
      color: "from-orange-400 to-red-500"
    }
  ];

  const successStories = [
    {
      founder: "Alex Chen",
      company: "TechFlow",
      story: "Alex used our M&A services to acquire a complementary SaaS company. The strategic fit analysis and integration planning helped them achieve 40% revenue growth in the first year.",
      result: "40% revenue growth in first year post-acquisition",
      icon: Target
    },
    {
      founder: "Sarah Kim",
      company: "DataSync",
      story: "Sarah's company was acquired by a larger competitor. Our due diligence and negotiation support helped them secure a 3x valuation premium over market average.",
      result: "3x valuation premium over market average",
      icon: DollarSign
    },
    {
      founder: "Marcus Rodriguez",
      company: "CloudScale",
      story: "Marcus merged his company with a competitor to create market leadership. The integration planning and execution resulted in 60% cost synergies.",
      result: "60% cost synergies achieved",
      icon: Building2
    }
  ];

  const features = [
    {
      category: "Deal Sourcing & Screening",
      description: "Identify and evaluate potential M&A opportunities",
      items: [
        "Comprehensive target identification",
        "Strategic fit assessment",
        "Financial analysis and modeling",
        "Risk evaluation and mitigation",
        "Market and competitive analysis",
        "Valuation and pricing analysis"
      ]
    },
    {
      category: "Due Diligence Management",
      description: "Comprehensive due diligence processes and tools",
      items: [
        "Financial due diligence automation",
        "Legal and regulatory compliance review",
        "Operational and technical assessment",
        "Cultural and integration analysis",
        "Synergy identification and quantification",
        "Risk assessment and reporting"
      ]
    },
    {
      category: "Deal Execution Support",
      description: "Expert guidance through deal execution and closing",
      items: [
        "Deal structuring and negotiation",
        "Legal documentation and review",
        "Regulatory approval coordination",
        "Closing coordination and execution",
        "Post-deal integration planning",
        "Value creation tracking"
      ]
    },
    {
      category: "Integration Excellence",
      description: "Seamless post-deal integration and value creation",
      items: [
        "Integration planning and execution",
        "Change management and communication",
        "Synergy realization and tracking",
        "Performance monitoring and optimization",
        "Cultural integration and alignment",
        "Value creation measurement"
      ]
    }
  ];

  const pricing = {
    plan: "M&A Enterprise",
    price: "$2,999/month",
    savings: "Save 17% with annual billing",
    features: [
      "Full M&A advisory and execution services",
      "Comprehensive due diligence support",
      "Deal structuring and negotiation",
      "Integration planning and execution",
      "Dedicated M&A team and support",
      "Advanced analytics and reporting",
      "Regulatory compliance and approval",
      "14-day free trial, no credit card required"
    ]
  };

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-indigo-900/20 to-slate-900" />
        
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
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-8"
            >
              <Handshake className="w-5 h-5 text-indigo-400" />
              <span className="text-indigo-400 font-medium">Mergers & Acquisition</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="ultra-text-gradient">Strategic Growth</span>
              <br />
              <span className="text-white">Through M&A</span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
              Navigate the complex world of mergers and acquisitions with expert guidance, 
              comprehensive due diligence, and strategic execution. Maximize value and minimize risk in every deal.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ultra-button flex items-center space-x-2 mx-auto"
            >
              <Handshake className="w-5 h-5" />
              <span>Start Your M&A Journey</span>
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
                className="ultra-glass p-6 rounded-xl text-center"
              >
                <stat.icon className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Four Core M&A Services
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Comprehensive M&A services from strategy to integration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl border border-white/10"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/70 mb-6">{service.description}</p>
                
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Deal Types */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Types of M&A Transactions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Expert guidance for all types of M&A transactions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {dealTypes.map((dealType, index) => (
              <motion.div
                key={dealType.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl border border-white/10"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${dealType.color} rounded-xl flex items-center justify-center mb-6`}>
                  <dealType.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{dealType.title}</h3>
                <p className="text-white/70 mb-6">{dealType.description}</p>
                
                <div className="space-y-3">
                  {dealType.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{example}</span>
                    </div>
                  ))}
                </div>
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
              Real companies that achieved exceptional results through M&A.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.founder}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl"
              >
                <story.icon className="w-12 h-12 text-indigo-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-2">{story.founder}</h3>
                <p className="text-indigo-400 font-semibold mb-4">{story.company}</p>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">{story.story}</p>
                <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-3">
                  <p className="text-indigo-400 font-semibold text-sm">{story.result}</p>
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
              Powerful capabilities that make M&A successful.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.category}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{feature.category}</h3>
                <p className="text-white/70 mb-6">{feature.description}</p>
                
                <div className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
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
            className="ultra-glass rounded-3xl p-12 text-center border border-indigo-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {pricing.plan}
            </h2>
            <div className="text-4xl font-bold text-white mb-2">{pricing.price}</div>
            <p className="text-indigo-400 font-semibold mb-8">{pricing.savings}</p>
            
            <div className="space-y-3 mb-8">
              {pricing.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <motion.a
              href="https://startupos-one.vercel.app/signup"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ultra-button flex items-center space-x-2 mx-auto"
            >
              <Handshake className="w-5 h-5" />
              <span>Start Free Trial</span>
            </motion.a>

            <p className="text-white/50 text-sm mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MergersAcquisition; 