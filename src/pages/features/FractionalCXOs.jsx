import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  Crown, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Rocket,
  TrendingUp,
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
  Minimize2,
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

const FractionalCXOs = () => {
  const heroSection = {
    title: "Fractional CXOs",
    subtitle: "Executive Leadership on Demand",
    description: "Access world-class executive leadership without the full-time commitment. Get strategic guidance, operational expertise, and proven leadership from experienced C-level executives.",
    stats: [
      { number: "50+", label: "Expert CXOs", icon: Crown },
      { number: "200+", label: "Companies served", icon: Users },
      { number: "95%", label: "Success rate", icon: CheckCircle },
      { number: "Flexible", label: "Engagement models", icon: Clock }
    ]
  };

  const cxoRoles = [
    {
      title: "Fractional CEO",
      description: "Strategic leadership and company direction without full-time commitment.",
      responsibilities: [
        "Strategic planning and company vision",
        "Board and investor relations",
        "High-level decision making and guidance",
        "Team leadership and culture building",
        "Fundraising and financial strategy",
        "Exit planning and M&A strategy"
      ],
      icon: Crown,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Fractional CTO",
      description: "Technical leadership and technology strategy for scaling companies.",
      responsibilities: [
        "Technology strategy and architecture",
        "Team building and technical hiring",
        "Product development and engineering",
        "Infrastructure and scalability planning",
        "Technical debt management",
        "Innovation and emerging technology"
      ],
      icon: Code,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Fractional CFO",
      description: "Financial leadership and strategic financial management.",
      responsibilities: [
        "Financial planning and analysis",
        "Fundraising and investor relations",
        "Budgeting and cash flow management",
        "Financial reporting and compliance",
        "M&A and strategic financial decisions",
        "Risk management and controls"
      ],
      icon: DollarSign,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Fractional CMO",
      description: "Marketing leadership and growth strategy execution.",
      responsibilities: [
        "Marketing strategy and brand development",
        "Customer acquisition and growth",
        "Digital marketing and analytics",
        "Product marketing and positioning",
        "Marketing team building and management",
        "ROI optimization and performance tracking"
      ],
      icon: TrendingUp,
      color: "from-orange-400 to-red-500"
    }
  ];

  const engagementModels = [
    {
      title: "Strategic Advisory",
      description: "High-level strategic guidance and decision support",
      features: [
        "Monthly strategic planning sessions",
        "Quarterly business reviews",
        "Board meeting preparation and support",
        "Key decision consultation",
        "Industry insights and market analysis",
        "Network and relationship introductions"
      ],
      timeCommitment: "5-10 hours/month",
      icon: Target,
      color: "from-indigo-400 to-purple-500"
    },
    {
      title: "Operational Leadership",
      description: "Hands-on operational leadership and execution",
      features: [
        "Weekly operational meetings",
        "Team management and leadership",
        "Process improvement and optimization",
        "Project oversight and execution",
        "Performance monitoring and coaching",
        "Crisis management and problem-solving"
      ],
      timeCommitment: "20-30 hours/month",
      icon: Activity,
      color: "from-emerald-400 to-green-500"
    },
    {
      title: "Full-Time Equivalent",
      description: "Near full-time leadership with flexible scheduling",
      features: [
        "Daily availability and support",
        "Full operational responsibility",
        "Team building and management",
        "Strategic and tactical execution",
        "Continuous improvement initiatives",
        "Stakeholder communication and reporting"
      ],
      timeCommitment: "40+ hours/month",
      icon: Users,
      color: "from-blue-400 to-cyan-500"
    }
  ];

  const successStories = [
    {
      founder: "Alex Chen",
      company: "DataFlow",
      story: "Alex hired a fractional CTO who helped them scale from 5 to 50 engineers, implement proper engineering practices, and prepare for Series A funding.",
      result: "Raised $10M Series A in 12 months",
      icon: Code
    },
    {
      founder: "Sarah Kim",
      company: "EcoTech",
      story: "Sarah's fractional CFO helped optimize their financial operations, improve cash flow management, and secure $5M in venture funding.",
      result: "Improved cash flow by 40%",
      icon: DollarSign
    },
    {
      founder: "Marcus Rodriguez",
      company: "CloudScale",
      story: "Marcus brought in a fractional CEO who provided strategic guidance during rapid growth, helping them scale from $1M to $10M ARR.",
      result: "Scaled to $10M ARR in 18 months",
      icon: Crown
    }
  ];

  const features = [
    {
      category: "Expert Matching",
      description: "AI-powered matching with the right CXO for your needs",
      items: [
        "Industry-specific expertise matching",
        "Stage-appropriate leadership experience",
        "Cultural fit and communication style",
        "Availability and time commitment alignment",
        "Success track record verification",
        "Reference checking and validation"
      ]
    },
    {
      category: "Flexible Engagement",
      description: "Customizable engagement models to fit your needs",
      items: [
        "Part-time and full-time options",
        "Project-based and ongoing engagements",
        "Remote and on-site availability",
        "Scalable time commitment",
        "Performance-based compensation",
        "Easy onboarding and offboarding"
      ]
    },
    {
      category: "Performance Tracking",
      description: "Clear metrics and accountability for results",
      items: [
        "KPIs and success metrics definition",
        "Regular performance reviews and feedback",
        "Goal setting and progress tracking",
        "ROI measurement and reporting",
        "Continuous improvement initiatives",
        "Stakeholder satisfaction surveys"
      ]
    },
    {
      category: "Network Access",
      description: "Access to executive networks and resources",
      items: [
        "Investor and board member introductions",
        "Industry expert connections",
        "Strategic partnership opportunities",
        "Talent and hiring networks",
        "Vendor and service provider relationships",
        "Peer executive communities"
      ]
    }
  ];

  const pricing = {
    plan: "Fractional CXO Pro",
    price: "$5,000/month",
    savings: "Save 17% with annual billing",
    features: [
      "Access to 50+ expert fractional CXOs",
      "Custom engagement model design",
      "Performance tracking and reporting",
      "Strategic guidance and decision support",
      "Network access and introductions",
      "Dedicated success manager",
      "Flexible time commitment options",
      "14-day free trial, no credit card required"
    ]
  };

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900" />
        
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
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full px-6 py-3 mb-8"
            >
              <Crown className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">Fractional CXOs</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="ultra-text-gradient">Executive Leadership</span>
              <br />
              <span className="text-white">on Demand</span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
              Access world-class executive leadership without the full-time commitment. 
              Get strategic guidance, operational expertise, and proven leadership from experienced C-level executives.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ultra-button flex items-center space-x-2 mx-auto"
            >
              <Crown className="w-5 h-5" />
              <span>Find Your CXO</span>
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
                <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CXO Roles */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Four Core CXO Roles
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Expert fractional executives for every leadership need.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cxoRoles.map((role, index) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl border border-white/10"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${role.color} rounded-xl flex items-center justify-center mb-6`}>
                  <role.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{role.title}</h3>
                <p className="text-white/70 mb-6">{role.description}</p>
                
                <div className="space-y-3">
                  {role.responsibilities.map((responsibility, respIndex) => (
                    <div key={respIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{responsibility}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Flexible Engagement Models
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Choose the engagement model that fits your needs and budget.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {engagementModels.map((model, index) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl border border-white/10"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${model.color} rounded-xl flex items-center justify-center mb-6`}>
                  <model.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{model.title}</h3>
                <p className="text-white/70 mb-4">{model.description}</p>
                <div className="text-purple-400 font-semibold mb-6">{model.timeCommitment}</div>
                
                <div className="space-y-3">
                  {model.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{feature}</span>
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
              Real companies that transformed their leadership with fractional CXOs.
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
                <story.icon className="w-12 h-12 text-purple-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-2">{story.founder}</h3>
                <p className="text-purple-400 font-semibold mb-4">{story.company}</p>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">{story.story}</p>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-3">
                  <p className="text-purple-400 font-semibold text-sm">{story.result}</p>
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
              Powerful capabilities that make fractional CXO engagement successful.
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
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
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
            className="ultra-glass rounded-3xl p-12 text-center border border-purple-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {pricing.plan}
            </h2>
            <div className="text-4xl font-bold text-white mb-2">{pricing.price}</div>
            <p className="text-purple-400 font-semibold mb-8">{pricing.savings}</p>
            
            <div className="space-y-3 mb-8">
              {pricing.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
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
              <Crown className="w-5 h-5" />
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

export default FractionalCXOs; 