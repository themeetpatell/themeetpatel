import React from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Activity, 
  TrendingUp, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Rocket,
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

const RealTimeAnalytics = () => {
  const heroSection = {
    title: "Real-Time Analytics",
    subtitle: "Data-Driven Decisions in Real-Time",
    description: "Get instant insights into your startup's performance with real-time analytics. Monitor KPIs, track progress, and make data-driven decisions with live dashboards and automated alerts.",
    stats: [
      { number: "Real-time", label: "Data updates", icon: Activity },
      { number: "50+", label: "KPI dashboards", icon: BarChart3 },
      { number: "24/7", label: "Monitoring", icon: Clock },
      { number: "95%", label: "Accuracy", icon: CheckCircle }
    ]
  };

  const analyticsFeatures = [
    {
      title: "Live KPI Dashboards",
      description: "Monitor your most important metrics in real-time with customizable dashboards.",
      features: [
        "Real-time revenue and growth tracking",
        "Customer acquisition and retention metrics",
        "Product usage and engagement analytics",
        "Team performance and productivity tracking",
        "Financial metrics and cash flow monitoring",
        "Market and competitive intelligence"
      ],
      icon: BarChart3,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Predictive Analytics",
      description: "Anticipate trends and opportunities with AI-powered predictive insights.",
      features: [
        "Revenue forecasting and trend prediction",
        "Customer behavior and churn prediction",
        "Market opportunity identification",
        "Resource requirement planning",
        "Risk assessment and early warnings",
        "Performance optimization recommendations"
      ],
      icon: TrendingUp,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Automated Alerts",
      description: "Get notified instantly when important metrics change or thresholds are reached.",
      features: [
        "Custom alert thresholds and triggers",
        "Multi-channel notifications (email, SMS, Slack)",
        "Escalation protocols for critical issues",
        "Smart alert filtering and prioritization",
        "Alert history and performance tracking",
        "Integration with existing tools and workflows"
      ],
      icon: AlertTriangle,
      color: "from-red-400 to-pink-500"
    },
    {
      title: "Advanced Reporting",
      description: "Generate comprehensive reports and insights for stakeholders and investors.",
      features: [
        "Automated report generation and scheduling",
        "Custom report builder and templates",
        "Data visualization and charting tools",
        "Export capabilities (PDF, Excel, CSV)",
        "Collaborative reporting and sharing",
        "Historical data analysis and trends"
      ],
      icon: FileText,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const useCases = [
    {
      title: "Revenue Tracking",
      description: "Monitor revenue, ARR, and growth metrics in real-time",
      metrics: [
        "Monthly Recurring Revenue (MRR)",
        "Annual Recurring Revenue (ARR)",
        "Customer Lifetime Value (CLV)",
        "Average Revenue Per User (ARPU)",
        "Churn rate and retention metrics",
        "Revenue growth rate and projections"
      ],
      icon: DollarSign,
      color: "from-emerald-400 to-green-500"
    },
    {
      title: "Customer Analytics",
      description: "Track customer behavior, acquisition, and satisfaction",
      metrics: [
        "Customer acquisition cost (CAC)",
        "Customer acquisition channels",
        "User engagement and activity",
        "Customer satisfaction scores",
        "Feature adoption and usage",
        "Customer feedback and sentiment"
      ],
      icon: Users,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Product Performance",
      description: "Monitor product usage, performance, and user experience",
      metrics: [
        "Feature usage and adoption rates",
        "Performance and uptime metrics",
        "User journey and conversion funnels",
        "Bug reports and issue tracking",
        "A/B test results and optimization",
        "Product roadmap progress tracking"
      ],
      icon: Code,
      color: "from-purple-400 to-pink-500"
    },
    {
      title: "Team Analytics",
      description: "Track team productivity, performance, and collaboration",
      metrics: [
        "Task completion and productivity",
        "Team collaboration and communication",
        "Project progress and milestones",
        "Resource allocation and utilization",
        "Performance reviews and feedback",
        "Learning and development tracking"
      ],
      icon: Users2,
      color: "from-orange-400 to-red-500"
    }
  ];

  const successStories = [
    {
      founder: "Alex Chen",
      company: "DataFlow",
      story: "Alex used real-time analytics to identify a 40% drop in user engagement. The instant alert allowed them to fix the issue within hours, preventing significant revenue loss.",
      result: "Prevented $50K in potential revenue loss",
      icon: Activity
    },
    {
      founder: "Sarah Kim",
      company: "EcoTech",
      story: "Sarah's predictive analytics identified a 60% increase in customer churn risk. The early warning system helped them implement retention strategies that reduced churn by 30%.",
      result: "Reduced customer churn by 30%",
      icon: TrendingUp
    },
    {
      founder: "Marcus Rodriguez",
      company: "CloudScale",
      story: "Marcus used real-time dashboards to track team productivity. The insights helped optimize workflows and increase team efficiency by 25%.",
      result: "Increased team efficiency by 25%",
      icon: BarChart3
    }
  ];

  const features = [
    {
      category: "Real-Time Data Processing",
      description: "Instant data collection, processing, and visualization",
      items: [
        "Live data streaming and processing",
        "Real-time data transformation and aggregation",
        "Instant dashboard updates and refreshes",
        "Low-latency data pipeline optimization",
        "Multi-source data integration",
        "Data quality monitoring and validation"
      ]
    },
    {
      category: "Advanced Visualizations",
      description: "Rich, interactive charts and graphs for better insights",
      items: [
        "Interactive charts and graphs",
        "Custom dashboard layouts and themes",
        "Drill-down and drill-up capabilities",
        "Comparative analysis tools",
        "Trend analysis and forecasting",
        "Mobile-responsive visualizations"
      ]
    },
    {
      category: "Intelligent Alerts",
      description: "Smart notifications based on data patterns and thresholds",
      items: [
        "Machine learning-based anomaly detection",
        "Custom alert rules and conditions",
        "Alert escalation and routing",
        "Alert performance optimization",
        "Alert history and analytics",
        "Integration with communication tools"
      ]
    },
    {
      category: "Data Security & Compliance",
      description: "Enterprise-grade security and compliance features",
      items: [
        "End-to-end data encryption",
        "Role-based access control",
        "Data privacy and GDPR compliance",
        "Audit trails and logging",
        "Backup and disaster recovery",
        "SOC 2 and ISO 27001 compliance"
      ]
    }
  ];

  const pricing = {
    plan: "Analytics Pro",
    price: "$199/month",
    savings: "Save 17% with annual billing",
    features: [
      "Unlimited real-time dashboards and metrics",
      "Advanced predictive analytics and AI insights",
      "Custom alert rules and notifications",
      "Advanced reporting and data export",
      "API access and custom integrations",
      "Priority support and dedicated account manager",
      "Enterprise security and compliance",
      "14-day free trial, no credit card required"
    ]
  };

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-cyan-900/20 to-slate-900" />
        
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
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full px-6 py-3 mb-8"
            >
              <BarChart3 className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">Real-Time Analytics</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="ultra-text-gradient">Data-Driven Decisions</span>
              <br />
              <span className="text-white">in Real-Time</span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
              Get instant insights into your startup's performance with real-time analytics. 
              Monitor KPIs, track progress, and make data-driven decisions with live dashboards and automated alerts.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ultra-button flex items-center space-x-2 mx-auto"
            >
              <BarChart3 className="w-5 h-5" />
              <span>Start Analytics Journey</span>
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
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Features */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Four Core Analytics Features
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Powerful analytics capabilities that transform your data into actionable insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {analyticsFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl border border-white/10"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-white/70 mb-6">{feature.description}</p>
                
                <div className="space-y-3">
                  {feature.features.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
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
              Analytics Use Cases
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Real-time analytics for every aspect of your startup.
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
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{metric}</span>
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
              Real companies that transformed their operations with real-time analytics.
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
                <story.icon className="w-12 h-12 text-cyan-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-2">{story.founder}</h3>
                <p className="text-cyan-400 font-semibold mb-4">{story.company}</p>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">{story.story}</p>
                <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-3">
                  <p className="text-cyan-400 font-semibold text-sm">{story.result}</p>
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
              Powerful capabilities that make analytics truly valuable.
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
                      <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
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
            className="ultra-glass rounded-3xl p-12 text-center border border-cyan-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {pricing.plan}
            </h2>
            <div className="text-4xl font-bold text-white mb-2">{pricing.price}</div>
            <p className="text-cyan-400 font-semibold mb-8">{pricing.savings}</p>
            
            <div className="space-y-3 mb-8">
              {pricing.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
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
              <BarChart3 className="w-5 h-5" />
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

export default RealTimeAnalytics; 