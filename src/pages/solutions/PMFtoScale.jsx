import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Zap, 
  Users, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  Brain,
  BarChart3,
  Play,
  BookOpen,
  TrendingUp,
  Shield,
  Sword,
  Crown,
  Star,
  Clock,
  DollarSign,
  AlertTriangle,
  Lightbulb,
  Map,
  Compass,
  Trophy,
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
  RotateCcw,
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
  Minimize2,
  Move,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Home,
  Menu,
  Grid,
  List,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Award,
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

const PMFtoScale = () => {
  const stageOverview = {
    title: "The Scaling Stage",
    subtitle: "Where Growth Meets Execution",
    description: "You've found product-market fit. Now comes the hardest part - scaling without breaking. 70% of startups fail here because they can't execute growth while maintaining product quality and company culture.",
    stats: [
      { number: "70%", label: "Fail at this stage", icon: AlertTriangle },
      { number: "18-24", label: "Months to scale", icon: Clock },
      { number: "$1M+", label: "Average runway needed", icon: DollarSign },
      { number: "7", label: "Critical systems", icon: Settings }
    ]
  };

  const criticalSystems = [
    {
      title: "Team Building & Culture",
      description: "Your team will make or break your scaling efforts. Most founders hire too fast or too slow, and lose their culture in the process.",
      wrong: "Hiring quickly to fill roles without proper vetting or culture fit",
      right: "Building a systematic hiring process that scales with your culture",
      icon: Users
    },
    {
      title: "Process & Operations",
      description: "What worked for 10 people will break at 50. You need systems that scale with your growth.",
      wrong: "Keeping everything manual and relying on heroics to get things done",
      right: "Building scalable processes and systems that reduce dependency on individuals",
      icon: Settings
    },
    {
      title: "Revenue & Unit Economics",
      description: "Scaling unprofitable growth is a death sentence. You need to understand and optimize your unit economics.",
      wrong: "Focusing only on top-line growth without understanding unit economics",
      right: "Tracking and optimizing LTV, CAC, and unit economics before scaling",
      icon: DollarSign
    },
    {
      title: "Product Development",
      description: "Your product team needs to scale without losing velocity or quality. Most teams slow down dramatically.",
      wrong: "Adding features without a clear roadmap or prioritization framework",
      right: "Building a scalable product development process with clear ownership",
      icon: Code
    },
    {
      title: "Customer Success",
      description: "Happy customers are your best growth engine. Most companies lose customers faster than they gain them.",
      wrong: "Focusing only on acquisition while existing customers churn",
      right: "Building a customer success system that drives retention and expansion",
      icon: Heart
    },
    {
      title: "Data & Analytics",
      description: "You can't optimize what you don't measure. Most companies have data but don't know how to use it.",
      wrong: "Collecting data without a clear strategy for how to use it",
      right: "Building a data-driven culture with actionable insights and dashboards",
      icon: BarChart3
    },
    {
      title: "Leadership & Management",
      description: "You need to evolve from a founder to a CEO. Most founders struggle with delegation and management.",
      wrong: "Trying to control everything and not trusting your team",
      right: "Building a leadership team and learning to delegate effectively",
      icon: Crown
    }
  ];

  const commonMistakes = [
    {
      title: "Premature Scaling",
      description: "Scaling before achieving product-market fit or having unit economics",
      impact: "Burns cash and creates operational complexity",
      solution: "Stage-aware scaling guidance with PMF validation"
    },
    {
      title: "Hiring Too Fast",
      description: "Adding headcount without clear roles, processes, or culture fit",
      impact: "Dilutes culture and creates operational chaos",
      solution: "Systematic hiring playbooks with culture assessment tools"
    },
    {
      title: "Ignoring Unit Economics",
      description: "Focusing on growth without understanding profitability",
      impact: "Scales unprofitable business model",
      solution: "Unit economics tracking and optimization frameworks"
    },
    {
      title: "Process Debt",
      description: "Not building scalable processes early enough",
      impact: "Creates operational bottlenecks and inefficiencies",
      solution: "Process automation and systemization frameworks"
    },
    {
      title: "Culture Erosion",
      description: "Losing company culture during rapid growth",
      impact: "Reduces employee retention and productivity",
      solution: "Culture preservation and team building frameworks"
    },
    {
      title: "Data Chaos",
      description: "Collecting data without a strategy for using it",
      impact: "Misses optimization opportunities and insights",
      solution: "Data strategy and analytics implementation"
    }
  ];

  const startupOSAdvantages = [
    {
      title: "Scale-Ready Intelligence",
      description: "StartupOS understands the unique challenges of scaling and provides stage-specific guidance.",
      features: [
        "Scaling readiness assessment and planning",
        "Team building and culture preservation frameworks",
        "Process automation and systemization tools",
        "Unit economics tracking and optimization"
      ],
      icon: TrendingUp
    },
    {
      title: "Execution Excellence",
      description: "Proven frameworks for building scalable operations and teams.",
      features: [
        "Hiring playbooks for every role and stage",
        "Process documentation and automation tools",
        "Management and leadership development",
        "Performance tracking and optimization"
      ],
      icon: Settings
    },
    {
      title: "Growth Optimization",
      description: "Data-driven approaches to scaling revenue and operations efficiently.",
      features: [
        "Growth experiment planning and execution",
        "Customer acquisition and retention optimization",
        "Revenue optimization and pricing strategies",
        "Market expansion and international scaling"
      ],
      icon: BarChart3
    }
  ];

  const successStories = [
    {
      founder: "James Wilson",
      company: "TechFlow",
      story: "James had achieved PMF but was struggling to scale his team from 10 to 50 people. StartupOS helped him build a systematic hiring process and preserve his company culture. He went from 3 months to fill roles to 2 weeks.",
      result: "Scaled from $2M to $20M ARR in 18 months",
      icon: Users
    },
    {
      founder: "Sarah Kim",
      company: "DataSync",
      story: "Sarah was scaling revenue but losing money on every customer. StartupOS helped her understand her unit economics and optimize her pricing model. She went from negative margins to 40% gross margins.",
      result: "Achieved profitability while growing 300% YoY",
      icon: DollarSign
    },
    {
      founder: "Michael Chen",
      company: "CloudScale",
      story: "Michael's product team was slowing down as they grew. StartupOS helped him implement scalable development processes and build a proper engineering culture. Velocity increased 3x while quality improved.",
      result: "Product team efficiency improved 3x",
      icon: Code
    }
  ];

  const features = [
    {
      category: "Scaling Intelligence",
      description: "AI-powered guidance for every scaling decision",
      items: [
        "Scaling readiness assessment and planning",
        "Team building and culture preservation frameworks",
        "Process automation and systemization tools",
        "Unit economics tracking and optimization",
        "Growth experiment planning and execution",
        "Risk assessment and mitigation strategies"
      ]
    },
    {
      category: "Team & Culture",
      description: "Build and scale your team while preserving culture",
      items: [
        "Hiring playbooks for every role and stage",
        "Culture assessment and preservation tools",
        "Management and leadership development",
        "Performance tracking and optimization",
        "Team structure and organizational design",
        "Employee retention and engagement strategies"
      ]
    },
    {
      category: "Operations & Process",
      description: "Build scalable systems and processes",
      items: [
        "Process documentation and automation tools",
        "System implementation and optimization",
        "Quality assurance and control frameworks",
        "Customer success and support systems",
        "Financial planning and management tools",
        "Compliance and legal framework guidance"
      ]
    },
    {
      category: "Growth & Revenue",
      description: "Scale revenue and operations efficiently",
      items: [
        "Customer acquisition and retention optimization",
        "Revenue optimization and pricing strategies",
        "Market expansion and international scaling",
        "Partnership and channel development",
        "M&A and strategic growth planning",
        "Investor relations and fundraising support"
      ]
    }
  ];

  const pricing = {
    plan: "Enterprise Plan",
    price: "$99/month",
    savings: "Save 17% with annual billing",
    features: [
      "Everything you need to scale successfully",
      "Scaling Intelligence with AI-powered guidance",
      "Team & Culture frameworks with hiring playbooks",
      "Operations & Process automation tools",
      "Growth & Revenue optimization strategies",
      "Community access with 10,000+ founders",
      "Priority support with 2-hour response time",
      "Unlimited team members included",
      "Advanced analytics and reporting",
      "Custom integrations and API access",
      "14-day free trial, no credit card required"
    ]
  };

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900" />
        
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
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full px-6 py-3 mb-8"
            >
              <TrendingUp className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">PMF to Scale</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="ultra-text-gradient">Scale Without Breaking</span>
              <br />
              <span className="text-white">Your Startup's Foundation</span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
              Stop the chaos. Get the systems, processes, and frameworks you need 
              to scale your startup from 10 to 100+ people without losing your soul.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ultra-button flex items-center space-x-2 mx-auto"
            >
              <TrendingUp className="w-5 h-5" />
              <span>Start Scaling Smart</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stage Overview */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              {stageOverview.title}
            </h2>
            <p className="text-xl text-blue-400 font-semibold mb-4">
              {stageOverview.subtitle}
            </p>
            <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
              {stageOverview.description}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {stageOverview.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-6 rounded-xl text-center"
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Critical Systems */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              The Seven Critical Systems
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              These systems will determine whether you scale successfully or fail spectacularly.
            </p>
          </motion.div>

          <div className="space-y-8">
            {criticalSystems.map((system, index) => (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-xl flex items-center justify-center">
                    <system.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{system.title}</h3>
                    <p className="text-white/70 mb-6">{system.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <h4 className="text-red-400 font-semibold mb-2">❌ Wrong Approach</h4>
                        <p className="text-white/80 text-sm">{system.wrong}</p>
                      </div>
                                              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                          <h4 className="text-blue-400 font-semibold mb-2">✅ Right Approach</h4>
                          <p className="text-white/80 text-sm">{system.right}</p>
                        </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              The Six Deadly Scaling Mistakes
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              These mistakes have killed more scaling startups than anything else.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {commonMistakes.map((mistake, index) => (
              <motion.div
                key={mistake.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl border border-red-500/20"
              >
                <h3 className="text-xl font-bold text-white mb-3">{mistake.title}</h3>
                <p className="text-white/70 mb-4">{mistake.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-red-400 font-semibold mb-2">Impact:</h4>
                  <p className="text-white/80 text-sm">{mistake.impact}</p>
                </div>
                
                                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <h4 className="text-blue-400 font-semibold mb-2">StartupOS Solution:</h4>
                  <p className="text-white/80 text-sm">{mistake.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* StartupOS Advantages */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Why StartupOS is Different
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Unlike generic business tools, StartupOS is built specifically for scaling startups.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {startupOSAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl border border-blue-500/20"
              >
                                  <advantage.icon className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{advantage.title}</h3>
                <p className="text-white/70 mb-6">{advantage.description}</p>
                
                <div className="space-y-3">
                  {advantage.features.map((feature, featureIndex) => (
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
              Real founders who used StartupOS to scale successfully.
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
              Everything You Need
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Complete toolkit for scaling your startup successfully.
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
              <TrendingUp className="w-5 h-5" />
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

export default PMFtoScale; 