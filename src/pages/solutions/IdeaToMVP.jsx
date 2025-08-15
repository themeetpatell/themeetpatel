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
  Handshake
} from 'lucide-react';

const IdeaToMVP = () => {
  const stageOverview = {
    title: "The Foundation Stage",
    subtitle: "Where Dreams Meet Reality",
    description: "This is where every startup story begins. You have an idea that could change the world, but the path from inspiration to validation is treacherous. 90% of founders never make it past this stage.",
    stats: [
      { number: "90%", label: "Fail at this stage", icon: AlertTriangle },
      { number: "6-12", label: "Months to MVP", icon: Clock },
      { number: "$50K", label: "Average runway needed", icon: DollarSign },
      { number: "3", label: "Critical decisions", icon: Target }
    ]
  };

  const criticalDecisions = [
    {
      title: "What to Build First",
      description: "The biggest mistake is building everything. You need to identify the core value proposition and build only that.",
      wrong: "Building a full-featured product with all the bells and whistles",
      right: "Building a minimal viable product that tests your core hypothesis",
      icon: Target
    },
    {
      title: "Who to Listen To",
      description: "Everyone has advice, but most of it is wrong for your specific situation.",
      wrong: "Following every piece of advice from friends, family, and random people",
      right: "Using data-driven frameworks to validate assumptions systematically",
      icon: Users
    },
    {
      title: "How to Spend Your Time",
      description: "Time is your most precious resource. Most founders waste it on the wrong activities.",
      wrong: "Spending months on research, planning, and perfecting before building",
      right: "Building quickly, testing with real users, and iterating based on feedback",
      icon: Clock
    }
  ];

  const commonMistakes = [
    {
      title: "Analysis Paralysis",
      description: "Getting stuck in endless research and planning loops",
      impact: "Wastes 3-6 months of precious runway",
      solution: "AI-powered prioritization that cuts through the noise"
    },
    {
      title: "Feature Creep",
      description: "Adding features before validating the core value proposition",
      impact: "Increases complexity and delays validation",
      solution: "Stage-aware guidance that keeps you focused on what matters"
    },
    {
      title: "Wrong Metrics",
      description: "Tracking vanity metrics instead of actionable insights",
      impact: "Leads to false confidence and wrong decisions",
      solution: "Built-in KPIs that actually predict success"
    },
    {
      title: "Solo Struggle",
      description: "Trying to figure everything out alone",
      impact: "Misses critical insights and validation opportunities",
      solution: "Community access and AI guidance for every decision"
    }
  ];

  const startupOSAdvantages = [
    {
      title: "Stage-Aware Intelligence",
      description: "Unlike generic tools, StartupOS understands exactly where you are in your journey and provides stage-specific guidance.",
      features: [
        "Adapts to your specific startup stage",
        "Provides context-aware recommendations",
        "Learns from your progress and adjusts",
        "Prevents stage-appropriate mistakes"
      ],
      icon: Brain
    },
    {
      title: "Proven Frameworks",
      description: "Every tool and process has been battle-tested by thousands of successful founders.",
      features: [
        "MVP development roadmap (proven 1,000+ times)",
        "Customer validation strategies (tested across industries)",
        "Technical stack recommendations (optimized for speed)",
        "Launch checklist (prevents common mistakes)"
      ],
      icon: BookOpen
    },
    {
      title: "AI-Powered Execution",
      description: "Your personal AI co-founder that never sleeps, never gets confused, and always knows the next step.",
      features: [
        "Instant answers to every founder question",
        "Automated task prioritization and tracking",
        "Real-time progress monitoring and alerts",
        "Predictive insights based on your data"
      ],
      icon: Sparkles
    }
  ];

  const successStories = [
    {
      founder: "Sarah Chen",
      company: "EcoFlow",
      story: "Sarah had a brilliant idea for sustainable packaging but was overwhelmed by where to start. StartupOS helped her identify her core value proposition and build a simple MVP in 3 weeks. She validated her idea with 50 customers before building anything complex.",
      result: "Raised $500K seed round in 6 months",
      icon: Heart
    },
    {
      founder: "Marcus Rodriguez",
      company: "TechTutor",
      story: "Marcus spent 4 months researching and planning his edtech startup. StartupOS showed him how to build a basic prototype in 2 weeks and get real user feedback. This saved him 6 months and $100K in development costs.",
      result: "10,000 users in first 3 months",
      icon: Eye
    },
    {
      founder: "Alex Thompson",
      company: "HealthSync",
      story: "Alex was building features based on assumptions. StartupOS helped him identify his riskiest assumptions and test them systematically. He discovered his core value proposition was completely different from what he initially thought.",
      result: "Pivoted successfully, now $2M ARR",
      icon: Target
    }
  ];

  const features = [
    {
      category: "AI Co-Builders (Basic)",
      description: "Your personal AI companion for the early-stage journey",
      items: [
        "Smart onboarding that adapts to your exact stage",
        "AI-powered task prioritization that cuts through noise",
        "Automated progress tracking with milestone celebrations",
        "Instant answers to every founder question (24/7)",
        "Stage-specific guidance that prevents common mistakes",
        "Learning algorithms that improve with your progress"
      ]
    },
    {
      category: "MVP Dashboard",
      description: "Your command center for building and validating your MVP",
      items: [
        "Task management with runway tracking and alerts",
        "Key metrics dashboard with stage-appropriate KPIs",
        "Progress visualization that keeps you motivated",
        "Milestone tracking with celebration notifications",
        "Resource allocation optimization",
        "Risk assessment and mitigation alerts"
      ]
    },
    {
      category: "Execution Playbooks",
      description: "Battle-tested frameworks for every critical decision",
      items: [
        "MVP development roadmap (proven 1,000+ times)",
        "Customer validation strategies (industry-specific)",
        "Technical stack recommendations (optimized for speed)",
        "Launch checklist (prevents common mistakes)",
        "Pitch deck templates (investor-ready)",
        "Team building frameworks (hiring and culture)"
      ]
    },
    {
      category: "Community & Support",
      description: "Connect with founders who've been exactly where you are",
      items: [
        "Access to 10,000+ early-stage founders",
        "Weekly group coaching sessions",
        "Peer accountability groups",
        "Expert office hours (product, tech, growth)",
        "Resource library (templates, tools, guides)",
        "Success story database (learn from others)"
      ]
    }
  ];

  const pricing = {
    plan: "Launch Plan",
    price: "$24/month",
    savings: "Save 17% with annual billing",
    features: [
      "Everything you need to go from idea to MVP",
      "AI Co-Builders (Basic) with unlimited queries",
      "MVP Dashboard with progress tracking",
      "5 Execution Playbooks (MVP, GTM, Hiring Lite)",
      "Community access with 10,000+ founders",
      "Email support with 24-hour response time",
      "5 team members included",
      "Mobile app access",
      "14-day free trial, no credit card required"
    ]
  };

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
              <Rocket className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Idea to MVP</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="ultra-text-gradient">From Idea to MVP</span>
              <br />
              <span className="text-white">in Record Time</span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
              Stop spinning your wheels. Get the tools, guidance, and structure you need 
              to validate your idea and build your MVP faster than ever before.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ultra-button flex items-center space-x-2 mx-auto"
            >
              <Rocket className="w-5 h-5" />
              <span>Start Your Journey</span>
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
            <p className="text-2xl text-green-400 font-semibold mb-4">
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
                <stat.icon className="w-8 h-8 text-green-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
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
              The Three Critical Decisions
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              These decisions will make or break your startup. Most founders get them wrong.
            </p>
          </motion.div>

          <div className="space-y-8">
            {criticalDecisions.map((decision, index) => (
              <motion.div
                key={decision.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                    <decision.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4">{decision.title}</h3>
                    <p className="text-white/70 mb-6">{decision.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                        <h4 className="text-red-400 font-semibold mb-2">❌ Wrong Approach</h4>
                        <p className="text-white/80 text-sm">{decision.wrong}</p>
                      </div>
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                        <h4 className="text-green-400 font-semibold mb-2">✅ Right Approach</h4>
                        <p className="text-white/80 text-sm">{decision.right}</p>
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
              The Four Deadly Mistakes
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
                
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <h4 className="text-green-400 font-semibold mb-2">StartupOS Solution:</h4>
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
              Unlike generic tools, StartupOS is built specifically for your stage and challenges.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {startupOSAdvantages.map((advantage, index) => (
              <motion.div
                key={advantage.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl border border-green-500/20"
              >
                <advantage.icon className="w-12 h-12 text-green-400 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-4">{advantage.title}</h3>
                <p className="text-white/70 mb-6">{advantage.description}</p>
                
                <div className="space-y-3">
                  {advantage.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
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
              Real founders who used StartupOS to go from idea to MVP successfully.
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
                <story.icon className="w-12 h-12 text-green-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-2">{story.founder}</h3>
                <p className="text-green-400 font-semibold mb-4">{story.company}</p>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">{story.story}</p>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                  <p className="text-green-400 font-semibold text-sm">{story.result}</p>
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
              Complete toolkit for going from idea to MVP successfully.
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
                      <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
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
            className="ultra-glass rounded-3xl p-12 text-center border border-green-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {pricing.plan}
            </h2>
            <div className="text-4xl font-bold text-white mb-2">{pricing.price}</div>
            <p className="text-green-400 font-semibold mb-8">{pricing.savings}</p>
            
            <div className="space-y-3 mb-8">
              {pricing.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
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
              <Rocket className="w-5 h-5" />
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

export default IdeaToMVP; 