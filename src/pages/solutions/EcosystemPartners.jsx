import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Users, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Sparkles,
  BarChart3,
  Crown,
  Play,
  BookOpen,
  TrendingUp,
  Zap,
  Building,
  AlertTriangle,
  Clock,
  Trophy,
  Heart,
  Eye,
  Handshake,
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
  ExternalLink,
  DollarSign
} from 'lucide-react';

const EcosystemPartners = () => {
  const stageOverview = {
    title: "The Ecosystem Stage",
    subtitle: "Where Networks Create Value",
    description: "This is where startup ecosystems thrive. You're building a community that supports founders, accelerates growth, and creates sustainable value. The best ecosystems achieve 10x better outcomes than individual efforts.",
    stats: [
      { number: "10x", label: "Better outcomes", icon: TrendingUp },
      { number: "500+", label: "Startups supported", icon: Users },
      { number: "$2B+", label: "Combined value created", icon: DollarSign },
      { number: "95%", label: "Success rate", icon: CheckCircle }
    ]
  };

  const criticalDecisions = [
    {
      title: "Community Building",
      description: "The biggest challenge is creating a truly supportive ecosystem that scales beyond individual relationships.",
      wrong: "Focusing only on individual startup success without building community connections",
      right: "Creating a network effect where startups support and accelerate each other",
      icon: Users
    },
    {
      title: "Value Delivery",
      description: "Different startups need different types of support at different stages.",
      wrong: "Providing the same generic support to all startups regardless of stage",
      right: "Stage-aware support systems that adapt to each startup's specific needs",
      icon: Target
    },
    {
      title: "Scale Management",
      description: "As your ecosystem grows, maintaining quality support becomes exponentially harder.",
      wrong: "Trying to manually manage relationships and support for hundreds of startups",
      right: "AI-powered systems that scale support while maintaining personal touch",
      icon: Building
    }
  ];

  const commonMistakes = [
    {
      title: "Fragmented Support",
      description: "Providing disconnected services without integration or coordination",
      impact: "Reduces startup success rates by 60%",
      solution: "Integrated ecosystem platform with coordinated support systems"
    },
    {
      title: "One-Size-Fits-All",
      description: "Treating all startups the same regardless of stage or needs",
      impact: "Wastes resources and misses critical opportunities",
      solution: "Stage-aware support systems with personalized guidance"
    },
    {
      title: "Manual Scaling",
      description: "Trying to scale support manually as ecosystem grows",
      impact: "Quality degrades as ecosystem expands",
      solution: "AI-powered automation that scales support intelligently"
    },
    {
      title: "Weak Network Effects",
      description: "Not creating connections between startups in the ecosystem",
      impact: "Misses the multiplier effect of community collaboration",
      solution: "Platform that facilitates startup-to-startup connections and collaboration"
    }
  ];

  const startupOSAdvantages = [
    {
      title: "Ecosystem Intelligence Platform",
      description: "Unlike generic tools, StartupOS provides ecosystem-specific intelligence and coordination frameworks.",
      features: [
        "Portfolio company performance tracking",
        "Cross-startup collaboration facilitation",
        "Ecosystem health monitoring",
        "Resource allocation optimization",
        "Success pattern identification",
        "Network effect measurement"
      ]
    },
    {
      title: "Proven Ecosystem Frameworks",
      description: "Battle-tested frameworks from successful startup ecosystems around the world.",
      features: [
        "Community building playbook",
        "Stage-aware support systems",
        "Mentor matching algorithms",
        "Investor connection strategies",
        "Resource sharing protocols",
        "Success measurement frameworks"
      ]
    },
    {
      title: "AI-Powered Ecosystem Management",
      description: "AI co-pilots trained on successful startup ecosystems and community dynamics.",
      features: [
        "Startup needs prediction",
        "Optimal resource allocation",
        "Community health monitoring",
        "Collaboration opportunity identification",
        "Success probability modeling",
        "Ecosystem growth optimization"
      ]
    }
  ];

  const successStories = [
    {
      founder: "David Kim",
      company: "TechHub Accelerator",
      story: "Used StartupOS ecosystem platform to coordinate support for 200+ startups. The AI-powered system helped us identify which startups needed what resources, resulting in 3x higher success rates.",
      result: "200+ startups supported with 85% success rate"
    },
    {
      founder: "Maria Rodriguez",
      company: "Innovation District",
      story: "The ecosystem intelligence platform revealed critical gaps in our support system. We used the frameworks to build a comprehensive ecosystem that now supports startups from idea to exit.",
      result: "Created $500M ecosystem value in 3 years"
    },
    {
      founder: "Alex Thompson",
      company: "Startup Network",
      story: "StartupOS helped us scale our support from 50 to 500 startups without losing quality. The AI systems maintain personal touch while automating routine tasks.",
      result: "10x scale with 95% satisfaction rate"
    }
  ];

  const features = [
    {
      category: "Ecosystem Intelligence",
      description: "Comprehensive tools for ecosystem management and optimization",
      items: [
        "Portfolio performance tracking",
        "Ecosystem health monitoring",
        "Resource allocation optimization",
        "Success pattern identification",
        "Network effect measurement",
        "Community engagement analytics"
      ]
    },
    {
      category: "Community Building",
      description: "Frameworks and tools to build thriving startup communities",
      items: [
        "Startup onboarding systems",
        "Mentor matching algorithms",
        "Event and workshop coordination",
        "Peer-to-peer connection facilitation",
        "Knowledge sharing platforms",
        "Community governance tools"
      ]
    },
    {
      category: "Support Coordination",
      description: "Integrated support systems that scale with your ecosystem",
      items: [
        "Stage-aware support delivery",
        "Resource sharing coordination",
        "Investor connection management",
        "Service provider integration",
        "Success tracking and reporting",
        "Continuous improvement systems"
      ]
    }
  ];

  const pricing = {
    plan: "Ecosystem Partner Package",
    price: "$5,000/month",
    savings: "Save 25% with annual billing",
    features: [
      "Full ecosystem intelligence platform access",
      "AI-powered ecosystem management",
      "Comprehensive community building frameworks",
      "Unlimited startup onboarding",
      "Advanced analytics and reporting",
      "Custom branding and theming",
      "Dedicated ecosystem success manager",
      "Priority support and consultation",
      "White-label platform options",
      "API access for custom integrations"
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
              <Globe className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-semibold">Ecosystem Stage</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Startup
              <br />
              <span className="ultra-text-gradient">Ecosystem</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed mb-8">
              Build thriving startup communities that accelerate growth and create sustainable value. 
              From accelerators to innovation districts, we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ultra-button flex items-center space-x-2 text-lg px-8 py-4"
              >
                <Globe className="w-5 h-5" />
                <span>Build Your Ecosystem</span>
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
                <span className="font-medium">Watch Ecosystem Success Stories</span>
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
              Critical Ecosystem Decisions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              These decisions will determine your ecosystem's success and impact.
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
              Common Ecosystem Mistakes
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Avoid these pitfalls that destroy ecosystem value and effectiveness.
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
              Why StartupOS for Ecosystem Success
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Unlike generic tools, we provide ecosystem-specific intelligence and proven frameworks.
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
              Ecosystem Success Stories
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Real ecosystem builders who used StartupOS to create thriving communities.
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
              Everything You Need for Ecosystem Success
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Complete toolkit for building and managing thriving startup ecosystems.
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

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ultra-button flex items-center space-x-2 mx-auto"
            >
              <Globe className="w-5 h-5" />
              <span>Build Your Ecosystem</span>
            </motion.button>

            <p className="text-white/50 text-sm mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default EcosystemPartners; 