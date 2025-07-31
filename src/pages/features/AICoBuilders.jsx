import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  Sparkles, 
  Zap, 
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

const AICoBuilders = () => {
  const heroSection = {
    title: "Your Personal AI Co-Founder",
    subtitle: "Never Build Alone Again",
    description: "Meet your 24/7 AI co-founder that never sleeps, never gets confused, and always knows the next step. Get instant answers to every founder question, automated task prioritization, and stage-specific guidance.",
    stats: [
      { number: "24/7", label: "Available", icon: Clock },
      { number: "10x", label: "Faster decisions", icon: Zap },
      { number: "95%", label: "Accuracy rate", icon: CheckCircle },
      { number: "0", label: "Sleep required", icon: Brain }
    ]
  };

  const capabilities = [
    {
      title: "Instant Decision Support",
      description: "Get answers to any founder question in seconds, not hours or days.",
      features: [
        "Real-time market analysis and insights",
        "Competitive intelligence and positioning",
        "Technical architecture recommendations",
        "Pricing strategy optimization",
        "Team building and hiring guidance",
        "Fundraising preparation and strategy"
      ],
      icon: Brain,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Stage-Aware Intelligence",
      description: "AI that understands exactly where you are in your startup journey.",
      features: [
        "Adapts guidance to your specific stage",
        "Provides context-aware recommendations",
        "Learns from your progress and adjusts",
        "Prevents stage-appropriate mistakes",
        "Optimizes for your current challenges",
        "Predicts next-stage requirements"
      ],
      icon: Target,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Automated Task Prioritization",
      description: "Focus on what matters most with AI-powered task management.",
      features: [
        "Intelligent task ranking and scheduling",
        "Resource allocation optimization",
        "Deadline management and alerts",
        "Progress tracking and milestones",
        "Risk assessment and mitigation",
        "Team coordination and delegation"
      ],
      icon: Activity,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const useCases = [
    {
      title: "Product Development",
      description: "From idea validation to feature prioritization",
      examples: [
        "MVP feature prioritization based on user feedback",
        "Technical stack recommendations for your use case",
        "User experience optimization suggestions",
        "Performance and scalability planning"
      ],
      icon: Code,
      color: "from-indigo-400 to-purple-500"
    },
    {
      title: "Go-to-Market Strategy",
      description: "Launch and scale with confidence",
      examples: [
        "Customer acquisition channel optimization",
        "Pricing strategy and market positioning",
        "Partnership and distribution planning",
        "Brand messaging and positioning"
      ],
      icon: Rocket,
      color: "from-orange-400 to-red-500"
    },
    {
      title: "Team Building",
      description: "Build the right team at the right time",
      examples: [
        "Role prioritization and hiring sequence",
        "Culture fit assessment and team dynamics",
        "Compensation and equity planning",
        "Leadership development and management"
      ],
      icon: Users,
      color: "from-teal-400 to-cyan-500"
    },
    {
      title: "Financial Planning",
      description: "Optimize your runway and fundraising",
      examples: [
        "Unit economics analysis and optimization",
        "Fundraising timeline and preparation",
        "Cash flow management and forecasting",
        "Investor relationship and pitch strategy"
      ],
      icon: DollarSign,
      color: "from-emerald-400 to-green-500"
    }
  ];

  const successStories = [
    {
      founder: "Alex Chen",
      company: "DataFlow",
      story: "Alex was struggling with technical decisions and team scaling. The AI Co-Builder helped him prioritize features, choose the right tech stack, and build a hiring plan. He went from 3 months to make decisions to 3 days.",
      result: "Raised $2M seed round in 6 months",
      icon: Brain
    },
    {
      founder: "Sarah Kim",
      company: "EcoTech",
      story: "Sarah was overwhelmed with GTM decisions. The AI Co-Builder analyzed her market, identified the best channels, and helped her optimize pricing. Her customer acquisition cost dropped by 60%.",
      result: "Achieved PMF in 8 months",
      icon: Target
    },
    {
      founder: "Marcus Rodriguez",
      company: "HealthSync",
      story: "Marcus was burning out from decision fatigue. The AI Co-Builder became his strategic partner, helping prioritize tasks and focus on high-impact activities. His productivity increased 3x.",
      result: "Scaled to $5M ARR",
      icon: Activity
    }
  ];

  const features = [
    {
      category: "Natural Language Interface",
      description: "Ask any question in plain English and get instant, actionable answers",
      items: [
        "Conversational AI that understands context",
        "Multi-language support for global teams",
        "Voice-to-text for hands-free operation",
        "Context-aware follow-up questions",
        "Learning from your communication style",
        "Integration with your existing tools"
      ]
    },
    {
      category: "Predictive Analytics",
      description: "Get insights before you need them with AI-powered predictions",
      items: [
        "Market trend analysis and forecasting",
        "Customer behavior prediction",
        "Competitive move anticipation",
        "Resource requirement planning",
        "Risk assessment and early warnings",
        "Opportunity identification and timing"
      ]
    },
    {
      category: "Automated Workflows",
      description: "Streamline repetitive tasks and focus on high-impact work",
      items: [
        "Task automation and scheduling",
        "Email and communication management",
        "Meeting preparation and follow-up",
        "Document generation and review",
        "Data analysis and reporting",
        "Process optimization and improvement"
      ]
    },
    {
      category: "Knowledge Management",
      description: "Capture, organize, and leverage your startup's knowledge",
      items: [
        "Automatic knowledge base creation",
        "Best practice identification and sharing",
        "Decision history and rationale tracking",
        "Team knowledge transfer and onboarding",
        "External research and synthesis",
        "Continuous learning and improvement"
      ]
    }
  ];

  const pricing = {
    plan: "AI Co-Builders Pro",
    price: "$99/month",
    savings: "Save 17% with annual billing",
    features: [
      "Unlimited AI conversations and queries",
      "Advanced predictive analytics and insights",
      "Custom workflow automation and integration",
      "Priority support with 2-hour response time",
      "Team collaboration and knowledge sharing",
      "Advanced analytics and performance tracking",
      "API access for custom integrations",
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
              <Brain className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">AI Co-Builders</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="ultra-text-gradient">Your Personal AI Co-Founder</span>
              <br />
              <span className="text-white">Never Build Alone Again</span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
              Meet your 24/7 AI co-founder that never sleeps, never gets confused, and always knows the next step. 
              Get instant answers to every founder question, automated task prioritization, and stage-specific guidance.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ultra-button flex items-center space-x-2 mx-auto"
            >
              <Brain className="w-5 h-5" />
              <span>Start Your AI Journey</span>
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
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Three Core Capabilities
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Your AI co-founder brings three powerful capabilities that transform how you build your startup.
            </p>
          </motion.div>

          <div className="space-y-12">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl"
              >
                <div className="flex items-start space-x-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${capability.color} rounded-xl flex items-center justify-center`}>
                    <capability.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-4">{capability.title}</h3>
                    <p className="text-xl text-white/70 mb-6">{capability.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {capability.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
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

      {/* Use Cases */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Real-World Applications
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              See how AI Co-Builders transforms every aspect of your startup journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl border border-white/10"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${useCase.color} rounded-xl flex items-center justify-center mb-6`}>
                  <useCase.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                <p className="text-white/70 mb-6">{useCase.description}</p>
                
                <div className="space-y-3">
                  {useCase.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
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
              Real founders who transformed their startups with AI Co-Builders.
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
                <story.icon className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-2">{story.founder}</h3>
                <p className="text-blue-400 font-semibold mb-4">{story.company}</p>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">{story.story}</p>
                <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                  <p className="text-blue-400 font-semibold text-sm">{story.result}</p>
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
              Powerful capabilities that make your AI co-founder indispensable.
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
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
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
            className="ultra-glass rounded-3xl p-12 text-center border border-blue-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {pricing.plan}
            </h2>
            <div className="text-4xl font-bold text-white mb-2">{pricing.price}</div>
            <p className="text-blue-400 font-semibold mb-8">{pricing.savings}</p>
            
            <div className="space-y-3 mb-8">
              {pricing.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/pricing">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ultra-button flex items-center space-x-2 mx-auto"
              >
                <Brain className="w-5 h-5" />
                <span>Start Free Trial</span>
              </motion.button>
            </Link>

            <p className="text-white/50 text-sm mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AICoBuilders; 