import React from 'react';
import { motion } from 'framer-motion';
import { 
  Crown, 
  Users, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  BarChart3,
  TrendingUp,
  Play,
  BookOpen,
  Globe,
  Zap,
  DollarSign,
  AlertTriangle,
  Clock,
  Trophy,
  Heart,
  Eye,
  Handshake,
  Building,
  Shield,
  Star,
  Award,
  Rocket,
  Brain,
  Map,
  Compass,
  Lightbulb,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  FileText,
  ExternalLink
} from 'lucide-react';

const ScaleToExit = () => {
  const stageOverview = {
    title: "The Exit Stage",
    subtitle: "Where Dreams Become Reality",
    description: "This is where your startup journey reaches its pinnacle. You've built something valuable, and now it's time to maximize that value through strategic exit planning. Only 1% of startups reach this stage successfully.",
    stats: [
      { number: "1%", label: "Reach this stage", icon: Crown },
      { number: "12-24", label: "Months to exit", icon: Clock },
      { number: "$100M+", label: "Average exit value", icon: DollarSign },
      { number: "5", label: "Critical decisions", icon: Target }
    ]
  };

  const criticalDecisions = [
    {
      title: "Exit Timing",
      description: "The biggest mistake is exiting too early or too late. Market conditions and company readiness must align perfectly.",
      wrong: "Exiting based on personal financial needs or market hype",
      right: "Data-driven exit timing based on market conditions and company metrics",
      icon: Clock
    },
    {
      title: "Exit Strategy",
      description: "Different exit strategies require different preparations and have vastly different outcomes.",
      wrong: "Choosing the first exit opportunity that comes along",
      right: "Strategic planning for the optimal exit path (IPO, acquisition, secondary)",
      icon: Target
    },
    {
      title: "Valuation Optimization",
      description: "Your company's value can vary dramatically based on how you position and prepare for exit.",
      wrong: "Focusing only on revenue growth without optimizing for valuation multiples",
      right: "Building metrics and positioning that maximize valuation in your target exit market",
      icon: DollarSign
    }
  ];

  const commonMistakes = [
    {
      title: "Premature Exit",
      description: "Exiting before the company reaches its full potential",
      impact: "Leaves 3-10x value on the table",
      solution: "AI-powered exit timing analysis and readiness assessment"
    },
    {
      title: "Poor Preparation",
      description: "Not having the right metrics, documentation, and positioning ready",
      impact: "Reduces exit value by 30-50%",
      solution: "Comprehensive exit readiness framework and preparation timeline"
    },
    {
      title: "Wrong Buyers",
      description: "Targeting the wrong acquirers or investors for your exit",
      impact: "Misses optimal exit opportunities and value",
      solution: "Strategic buyer identification and relationship building"
    },
    {
      title: "Negotiation Weakness",
      description: "Poor negotiation positioning and lack of competitive leverage",
      impact: "Significantly reduces final exit value",
      solution: "Exit negotiation playbook and competitive positioning"
    }
  ];

  const startupOSAdvantages = [
    {
      title: "Exit Intelligence Platform",
      description: "Unlike generic tools, StartupOS provides exit-specific intelligence and preparation frameworks.",
      features: [
        "Real-time exit market analysis",
        "Company valuation optimization",
        "Strategic buyer identification",
        "Exit readiness assessment",
        "Due diligence preparation",
        "Negotiation strategy support"
      ]
    },
    {
      title: "Proven Exit Frameworks",
      description: "Battle-tested frameworks from successful exits across different industries and markets.",
      features: [
        "IPO preparation roadmap",
        "Acquisition strategy framework",
        "Secondary sale optimization",
        "Investor relations management",
        "Board communication strategies",
        "Post-exit transition planning"
      ]
    },
    {
      title: "AI-Powered Exit Guidance",
      description: "AI co-pilots trained on thousands of successful and failed exits.",
      features: [
        "Exit timing recommendations",
        "Valuation optimization strategies",
        "Buyer relationship management",
        "Competitive positioning analysis",
        "Risk assessment and mitigation",
        "Success probability modeling"
      ]
    }
  ];

  const successStories = [
    {
      founder: "Sarah Chen",
      company: "TechFlow Solutions",
      story: "Used StartupOS exit intelligence to identify the perfect acquisition opportunity. The AI platform helped us optimize our metrics and positioning, resulting in a 3x higher exit valuation than initially expected.",
      result: "Exited for $150M after 18 months of preparation"
    },
    {
      founder: "Marcus Rodriguez",
      company: "DataVault Inc",
      story: "The exit readiness assessment revealed critical gaps in our preparation. We used the platform's frameworks to address each issue systematically, making us much more attractive to potential acquirers.",
      result: "Successfully acquired by Fortune 500 company for $200M"
    },
    {
      founder: "Jennifer Park",
      company: "CloudScale Systems",
      story: "StartupOS helped us navigate a complex IPO process. The platform's guidance on timing, preparation, and investor relations was invaluable in achieving a successful public offering.",
      result: "IPO'd at $2B valuation with 40% first-day pop"
    }
  ];

  const features = [
    {
      category: "Exit Intelligence",
      description: "Comprehensive tools for exit planning and execution",
      items: [
        "Market timing analysis and alerts",
        "Valuation optimization strategies",
        "Strategic buyer identification",
        "Competitive landscape analysis",
        "Exit readiness assessment",
        "Risk analysis and mitigation"
      ]
    },
    {
      category: "Exit Preparation",
      description: "Frameworks and tools to prepare for successful exits",
      items: [
        "Due diligence preparation checklist",
        "Financial model optimization",
        "Legal and compliance readiness",
        "Team and culture documentation",
        "IP and technology positioning",
        "Customer and revenue validation"
      ]
    },
    {
      category: "Exit Execution",
      description: "Support throughout the exit process",
      items: [
        "Negotiation strategy and playbook",
        "Board and investor communication",
        "Media and PR positioning",
        "Employee communication planning",
        "Post-exit transition support",
        "Success measurement and tracking"
      ]
    }
  ];

  const pricing = {
    plan: "Enterprise Exit Package",
    price: "$2,500/month",
    savings: "Save 20% with annual billing",
    features: [
      "Full exit intelligence platform access",
      "AI-powered exit guidance and analysis",
      "Comprehensive exit preparation frameworks",
      "Strategic buyer identification and outreach",
      "Valuation optimization tools and strategies",
      "Due diligence preparation support",
      "Negotiation strategy and playbook",
      "Post-exit transition planning",
      "Dedicated exit success manager",
      "Priority support and consultation"
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
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-6 py-3 mb-8"
            >
              <Crown className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">Exit Stage</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Scale to
              <br />
              <span className="ultra-text-gradient">Exit</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Maximize your startup's value and execute the perfect exit strategy. 
              From IPO preparation to strategic acquisitions, we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ultra-button flex items-center space-x-2 text-lg px-8 py-4"
              >
                <Crown className="w-5 h-5" />
                <span>Start Exit Planning</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-full ultra-glass flex items-center justify-center">
                  <Play className="w-5 h-5 ml-1" />
                </div>
                <span className="font-medium">Watch Exit Success Stories</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {stageOverview.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="ultra-glass p-6 rounded-xl text-center"
              >
                <stat.icon className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
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
            <p className="text-lg text-white/70 max-w-4xl mx-auto leading-relaxed">
              {stageOverview.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Critical Decisions */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Critical Exit Decisions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              These decisions will determine your exit success and valuation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {criticalDecisions.map((decision, index) => (
              <motion.div
                key={decision.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="ultra-glass p-8 rounded-xl"
              >
                <decision.icon className="w-12 h-12 text-blue-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{decision.title}</h3>
                <p className="text-white/70 mb-6">{decision.description}</p>
                
                <div className="space-y-4">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <h4 className="text-red-400 font-semibold mb-2">❌ Wrong Approach</h4>
                    <p className="text-white/70 text-sm">{decision.wrong}</p>
                  </div>
                                      <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                    <h4 className="text-blue-400 font-semibold mb-2">✅ Right Approach</h4>
                    <p className="text-white/70 text-sm">{decision.right}</p>
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
              Common Exit Mistakes
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Avoid these pitfalls that destroy exit value and success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {commonMistakes.map((mistake, index) => (
              <motion.div
                key={mistake.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{mistake.title}</h3>
                <p className="text-white/70 mb-4">{mistake.description}</p>
                
                <div className="space-y-3">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3">
                    <p className="text-red-400 font-semibold text-sm">Impact: {mistake.impact}</p>
                  </div>
                                                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-3">
                      <p className="text-blue-400 font-semibold text-sm">Solution: {mistake.solution}</p>
                    </div>
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
              Why StartupOS for Exit Success
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Unlike generic tools, we provide exit-specific intelligence and proven frameworks.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {startupOSAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="ultra-glass p-8 rounded-xl"
              >
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
              Exit Success Stories
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Real founders who used StartupOS to achieve successful exits.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.founder}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="ultra-glass p-8 rounded-xl text-center"
              >
                <Trophy className="w-12 h-12 text-blue-400 mx-auto mb-6" />
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
              Everything You Need for Exit Success
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Complete toolkit for maximizing exit value and execution.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
            <p className="text-blue-400 font-semibold mb-8">{pricing.savings}</p>
            
            <div className="space-y-3 mb-8">
              {pricing.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
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
              <span>Start Exit Planning</span>
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

export default ScaleToExit; 