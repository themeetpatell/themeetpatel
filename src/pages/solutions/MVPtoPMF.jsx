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
  Banknote,
  Coins,
  TrendingDown,
  ArrowUp,
} from 'lucide-react';
import WaitlistForm from '../../components/WaitlistForm';

const MVPtoPMF = () => {
  const stageOverview = {
    title: "The Validation Stage",
    subtitle: "Where Ideas Meet Reality",
    description: "You've built your MVP, but now comes the real test. This is where most startups fail - they can't find product-market fit. 80% of startups die here because they can't validate their assumptions with real users.",
    stats: [
      { number: "80%", label: "Fail at this stage", icon: AlertTriangle },
      { number: "12-18", label: "Months to PMF", icon: Clock },
      { number: "$200K", label: "Average runway needed", icon: DollarSign },
      { number: "5", label: "Critical experiments", icon: TestTube }
    ]
  };

  const criticalExperiments = [
    {
      title: "Customer Discovery",
      description: "Finding and understanding your ideal customers is the foundation of PMF. Most founders build for themselves, not their customers.",
      wrong: "Building features based on your own assumptions and preferences",
      right: "Systematically interviewing and observing your target customers",
      icon: Users
    },
    {
      title: "Value Proposition Testing",
      description: "Your value proposition is your startup's core. Most founders can't articulate it clearly or test it properly.",
      wrong: "Using generic messaging that doesn't resonate with specific customers",
      right: "Testing specific value propositions with different customer segments",
      icon: Target
    },
    {
      title: "Usage Pattern Analysis",
      description: "How users actually use your product reveals what they really value. Most founders ignore the data.",
      wrong: "Focusing on vanity metrics like downloads and signups",
      right: "Analyzing actual usage patterns to identify core value",
      icon: Activity
    },
    {
      title: "Retention Optimization",
      description: "Retention is the ultimate PMF indicator. Most founders optimize for acquisition before retention.",
      wrong: "Chasing new users while existing ones churn",
      right: "Fixing retention issues before scaling acquisition",
      icon: TrendingUp
    },
    {
      title: "Pricing Validation",
      description: "Pricing reveals true value perception. Most founders set prices based on costs, not value.",
      wrong: "Setting prices based on your costs and competitors",
      right: "Testing different price points to find optimal value capture",
      icon: DollarSign
    }
  ];

  const commonMistakes = [
    {
      title: "Building Before Learning",
      description: "Adding features without understanding user needs",
      impact: "Wastes development resources and confuses users",
      solution: "AI-powered user research and feedback analysis"
    },
    {
      title: "Wrong Success Metrics",
      description: "Tracking vanity metrics instead of PMF indicators",
      impact: "Leads to false confidence and wrong decisions",
      solution: "Built-in PMF tracking with proven indicators"
    },
    {
      title: "Premature Scaling",
      description: "Scaling before achieving product-market fit",
      impact: "Burns cash and creates operational complexity",
      solution: "Stage-aware scaling guidance and runway management"
    },
    {
      title: "Ignoring User Feedback",
      description: "Not listening to what users are actually saying",
      impact: "Misses critical insights for product improvement",
      solution: "Automated feedback collection and sentiment analysis"
    },
    {
      title: "Feature Bloat",
      description: "Adding features to please every user request",
      impact: "Increases complexity and reduces focus",
      solution: "AI-powered feature prioritization based on PMF impact"
    }
  ];

  const startupOSAdvantages = [
    {
      title: "PMF-Focused Intelligence",
      description: "StartupOS is specifically designed to help you find product-market fit faster than any other tool.",
      features: [
        "PMF tracking dashboard with proven indicators",
        "Customer feedback analysis and sentiment tracking",
        "A/B testing frameworks for value proposition validation",
        "Retention optimization algorithms and insights"
      ],
      icon: Target
    },
    {
      title: "User Research Automation",
      description: "Automate the tedious parts of user research so you can focus on insights and decisions.",
      features: [
        "Automated customer interview scheduling and recording",
        "Sentiment analysis of user feedback and reviews",
        "Usage pattern analysis and behavioral insights",
        "Competitive analysis and market positioning tools"
      ],
      icon: Search
    },
    {
      title: "Data-Driven Decision Making",
      description: "Turn your gut feelings into data-driven decisions with proven frameworks and analytics.",
      features: [
        "PMF score calculation and tracking",
        "Cohort analysis and retention modeling",
        "Pricing optimization algorithms",
        "Growth experiment planning and tracking"
      ],
      icon: BarChart3
    }
  ];

  const successStories = [
    {
      founder: "Lisa Park",
      company: "DataFlow",
      story: "Lisa had a data analytics tool but couldn't figure out who her real customers were. StartupOS helped her identify her ideal customer profile and test different value propositions. She discovered her core value was 10x faster than competitors, not just 'better analytics'.",
      result: "Achieved PMF in 8 months, now $5M ARR",
      icon: Target
    },
    {
      founder: "David Chen",
      company: "CloudSync",
      story: "David was building features based on every customer request. StartupOS showed him how to analyze usage patterns and focus on the 20% of features that drove 80% of value. This led to a complete product redesign.",
      result: "User retention improved from 30% to 70%",
      icon: Activity
    },
    {
      founder: "Maria Rodriguez",
      company: "EduTech",
      story: "Maria was struggling with pricing. StartupOS helped her test different price points and value propositions. She discovered her customers would pay 3x more for enterprise features she hadn't even built yet.",
      result: "ARPU increased from $29 to $89/month",
      icon: DollarSign
    }
  ];

  const features = [
    {
      category: "PMF Tracking Dashboard",
      description: "Your command center for measuring and optimizing product-market fit",
      items: [
        "Real-time PMF score calculation and tracking",
        "Cohort analysis with retention modeling",
        "User behavior analytics and pattern recognition",
        "A/B testing framework for value proposition validation",
        "Customer feedback sentiment analysis",
        "Competitive positioning and market analysis"
      ]
    },
    {
      category: "User Research Automation",
      description: "Automate customer discovery and feedback collection",
      items: [
        "Automated customer interview scheduling and recording",
        "User feedback collection and sentiment analysis",
        "Usage pattern analysis and behavioral insights",
        "Customer journey mapping and optimization",
        "Voice of customer analysis and insights",
        "Competitive user research and benchmarking"
      ]
    },
    {
      category: "Growth Experiment Framework",
      description: "Systematic approach to testing and optimizing for PMF",
      items: [
        "Experiment planning and hypothesis testing",
        "Statistical significance calculation and analysis",
        "Growth experiment tracking and optimization",
        "Pricing optimization and value capture testing",
        "Channel testing and acquisition optimization",
        "Retention optimization and churn prevention"
      ]
    },
    {
      category: "AI-Powered Insights",
      description: "Get actionable insights from your data automatically",
      items: [
        "Automated PMF indicator analysis and alerts",
        "Predictive analytics for user behavior",
        "Feature impact analysis and prioritization",
        "Customer segment analysis and targeting",
        "Market opportunity identification and sizing",
        "Risk assessment and mitigation recommendations"
      ]
    }
  ];

  const pricing = {
    plan: "Scale Plan",
    price: "$49/month",
    savings: "Save 17% with annual billing",
    features: [
      "Everything you need to achieve PMF",
      "PMF Tracking Dashboard with real-time analytics",
      "User Research Automation with sentiment analysis",
      "Growth Experiment Framework with A/B testing",
      "AI-Powered Insights with predictive analytics",
      "Community access with 10,000+ founders",
      "Priority support with 4-hour response time",
      "10 team members included",
      "Advanced analytics and reporting",
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
              <Target className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">MVP to PMF</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="ultra-text-gradient">Find Product-Market Fit</span>
              <br />
              <span className="text-white">Before Running Out of Cash</span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
              Stop guessing what your customers want. Get the tools, frameworks, and insights 
              you need to validate your product and achieve PMF systematically.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ultra-button flex items-center space-x-2 mx-auto"
            >
              <Target className="w-5 h-5" />
              <span>Start Your PMF Journey</span>
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
            <p className="text-2xl text-blue-400 font-semibold mb-4">
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

      {/* Critical Experiments */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              The Five Critical Experiments
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              These experiments will determine whether you achieve PMF or fail. Most founders skip them.
            </p>
          </motion.div>

          <div className="space-y-8">
            {criticalExperiments.map((experiment, index) => (
              <motion.div
                key={experiment.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center">
                    <experiment.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{experiment.title}</h3>
                    <p className="text-white/70 mb-6">{experiment.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <h4 className="text-red-400 font-semibold mb-2">❌ Wrong Approach</h4>
                        <p className="text-white/80 text-sm">{experiment.wrong}</p>
                      </div>
                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                        <h4 className="text-blue-400 font-semibold mb-2">✅ Right Approach</h4>
                        <p className="text-white/80 text-sm">{experiment.right}</p>
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
              The Five Deadly PMF Mistakes
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              These mistakes have killed more startups than anything else. Don't make them.
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
              Unlike generic analytics tools, StartupOS is built specifically for PMF validation.
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
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
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
              Real founders who used StartupOS to achieve PMF successfully.
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
              Everything You Need
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Complete toolkit for achieving product-market fit.
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

            <div className="mx-auto">
              <WaitlistForm 
                variant="primary"
                size="default"
                className="flex items-center space-x-2 mx-auto"
              />
            </div>

            <p className="text-white/50 text-sm mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MVPtoPMF; 