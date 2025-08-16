import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Lightbulb,
  Rocket,
  ArrowRight,
  TrendingDown,
  Clock,
  DollarSign,
  Network,
  Cpu,
  Compass,
  Users,
  Activity,
  Brain,
  Target,
  Award,
  Zap,
  Star,
  TrendingUp,
  Crown,
  Sparkles,
  Eye,
  Heart,
  Globe,
  Shield,
  Sword,
  Play,
  ChevronDown,
  ArrowUp,
  CheckCircle,
  BarChart3,
  Target as TargetIcon,
  Users as UsersIcon,
  Zap as ZapIcon,
  Flame,
  Target as TargetIcon2,
  Users as UsersIcon2,
  Zap as ZapIcon2,
  Building2,
  MessageCircle
} from 'lucide-react';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // HERO SECTION DATA
  const heroStats = [
    { number: "50+", label: "Startups", icon: Rocket, color: "from-blue-500 to-cyan-500" },
    { number: "1000+", label: "Community Audience", icon: DollarSign, color: "from-blue-600 to-blue-800" },
    { number: "200+", label: "Founders", icon: Crown, color: "from-blue-400 to-blue-600" },
    { number: "4.9/5", label: "Rating", icon: Star, color: "from-cyan-500 to-blue-500" }
  ];

  // INNOVATION TOOLS
  const innovationTools = [
    {
      icon: Cpu,
      title: "AI Co-Builders",
      description: "Your AI co-founder that never sleeps, never doubts, and always finds the best path forward.",
      impact: "10x faster development",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Compass,
      title: "Stage-Aware Intelligence",
      description: "Knows exactly what you need at each stage of your journey - from idea to scale.",
      impact: "Right strategy, right time",
      color: "from-blue-600 to-blue-800"
    },
    {
      icon: Users,
      title: "Fractional CXOs",
      description: "Access to world-class leadership on demand, without the full-time commitment.",
      impact: "Expert guidance when needed",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Activity,
      title: "Real-Time Analytics",
      description: "See your startup's heartbeat in real-time. Every metric, every trend, every opportunity.",
      impact: "Data-driven decisions",
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: Building2,
      title: "Mergers & Acquisitions",
      description: "Navigate complex M&A deals with expert guidance, due diligence, and strategic execution.",
      impact: "Maximize deal value",
      color: "from-blue-500 to-indigo-600"
    },
    {
      icon: Network,
      title: "World-Class Community",
      description: "Join 125K+ founders with premium features, expert mentors, and exclusive resources.",
      impact: "Network & grow together",
      color: "from-indigo-500 to-purple-600"
    }
  ];

  // SUCCESS METRICS
  const successMetrics = [
    { metric: "1,000+", label: "Audience", description: "Trusted our community", icon: UsersIcon, color: "from-blue-500 to-cyan-500" },
    { metric: "$50+", label: "Startups", description: "Trusted our platform", icon: DollarSign, color: "from-blue-600 to-blue-800" },
    { metric: "95%", label: "Success Rate", description: "Based on surveys", icon: CheckCircle, color: "from-blue-400 to-blue-600" },
    { metric: "24/7", label: "AI Support", description: "Always available", icon: ZapIcon, color: "from-cyan-500 to-blue-500" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section - Revolutionary Storytelling */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
          
          {/* Floating Geometric Shapes */}
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, Math.random() * 50 - 25, 0],
                scale: [0, 1, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 6,
              }}
            />
          ))}
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Revolutionary Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full px-6 py-3 border border-red-500/30 mb-8 mt-8"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <TrendingDown className="w-5 h-5 text-red-400" />
            </motion.div>
            <span className="text-red-400 font-medium">9 out of 10 startups fail</span>
          </motion.div>

          {/* Main Headline - Revolutionary Storytelling */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-6xl md:text-8xl font-black leading-none mb-6">
              <span className="text-white">THE</span>
              <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                STARTUP SHOW
              </span>
              <br />
              <span className="text-white text-5xl md:text-6xl">STARTS HERE</span>
            </h1>
            <p className="text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
              90% of startups fail. Not because the idea was bad, but because the journey is harder than anyone imagined. 
              <br />
              <span className="text-red-400 font-semibold">The causes of failure, uncertainty, and resource scarcity are winning.</span>
              <br />
              <span className="text-blue-400 font-semibold">It's time to fight back with the ultimate startup arsenal.</span>
            </p>
          </motion.div>

          {/* Interactive Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto"
          >
            {heroStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <motion.div
                  className="bg-black/30 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-6 hover:border-blue-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1 group-hover:text-blue-100 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-white/70 text-sm group-hover:text-white/80 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.a
              href="https://startupos-one.vercel.app/signup"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:from-blue-600 hover:to-cyan-600 flex items-center space-x-3"
            >
              <Rocket className="w-6 h-6" />
              <span>Join the Arena</span>
            </motion.a>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 text-white/80 hover:text-white transition-colors duration-300 border-2 border-white/20 rounded-2xl hover:border-white/40 flex items-center space-x-3 group"
            >
              <MessageCircle className="w-6 h-6 group-hover:text-blue-400 transition-colors" />
              <span>Join the Community</span>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-blue-400"
            >
              <ChevronDown className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Villains Section - Revolutionary Design */}
      <section className="py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-black to-blue-900/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(239,68,68,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              MEET THE
              <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                DESTROYERS
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              These are the forces that destroy startups. But every problem has a weakness.
            </p>
          </motion.div>

          {/* Villains Grid - Extraordinary Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Failure",
                description: "The silent killer that claims 90% of startups",
                weakness: "AI-powered guidance and stage-aware intelligence",
                icon: TrendingDown,
                color: "from-red-500 to-red-700",
                animation: "pulse"
              },
              {
                name: "Uncertainty",
                description: "The fog that blinds founders from the right path",
                weakness: "Real-time analytics and predictive insights",
                icon: Eye,
                color: "from-orange-500 to-orange-700",
                animation: "bounce"
              },
              {
                name: "Resource Scarcity",
                description: "The limitation that forces premature decisions",
                weakness: "Fractional CXOs and ecosystem access",
                icon: DollarSign,
                color: "from-yellow-500 to-yellow-700",
                animation: "shake"
              },
              {
                name: "Lack of Focus",
                description: "The distraction that scatters startup energy",
                weakness: "Stage-aware gamification and AI prioritization",
                icon: Target,
                color: "from-purple-500 to-purple-700",
                animation: "pulse"
              },
              {
                name: "Poor Execution",
                description: "The gap between strategy and implementation",
                weakness: "AI Co-Builders and execution frameworks",
                icon: Zap,
                color: "from-indigo-500 to-indigo-700",
                animation: "bounce"
              },
              {
                name: "Weak Network",
                description: "The isolation that limits growth opportunities",
                weakness: "World-class community and ecosystem partnerships",
                icon: Network,
                color: "from-cyan-500 to-cyan-700",
                animation: "shake"
              }
            ].map((villain, index) => (
              <motion.div
                key={villain.name}
                initial={{ opacity: 0, y: 100, rotateY: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: index * 0.3 }}
                className="group cursor-pointer"
              >
                <motion.div
                  className="relative bg-black/50 backdrop-blur-xl border border-red-500/30 rounded-3xl p-8 hover:border-red-400/50 transition-all duration-500"
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    boxShadow: "0 25px 50px -12px rgba(239, 68, 68, 0.25)"
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotateZ: [0, 1, -1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {/* Glowing Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${villain.color} opacity-5 rounded-3xl blur-xl`} />
                  
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${villain.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <villain.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-300 transition-colors">
                    {villain.name}
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {villain.description}
                  </p>
                  
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                    <p className="text-red-400 font-semibold text-sm">
                      <span className="text-white/60">Weakness: </span>
                      {villain.weakness}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Destruction Section - Revolutionary Timeline */}
      <section className="py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-red-900/5 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(239,68,68,0.05),transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              WITNESS THE
              <br />
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                DESTRUCTION
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              This is what happens when startups face the villains alone. The statistics don't lie.
            </p>
          </motion.div>

          {/* Destruction Timeline - Extraordinary Design */}
          <div className="relative">
            {/* Central Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-red-500 via-orange-500 to-red-500 h-full" />
            
            <div className="space-y-16">
              {[
                {
                  stage: "Idea Stage",
                  failure: "70%",
                  description: "Never get past the initial concept",
                  icon: Lightbulb,
                  color: "from-red-400 to-red-600"
                },
                {
                  stage: "MVP Stage", 
                  failure: "85%",
                  description: "Fail to find product-market fit",
                  icon: Rocket,
                  color: "from-orange-400 to-orange-600"
                },
                {
                  stage: "Growth Stage",
                  failure: "90%",
                  description: "Can't scale without proper systems",
                  icon: TrendingUp,
                  color: "from-red-500 to-red-700"
                },
                {
                  stage: "Scale Stage",
                  failure: "95%",
                  description: "Operations collapse under pressure",
                  icon: Users,
                  color: "from-red-600 to-red-800"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.stage}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Timeline Node */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-full border-4 border-black shadow-2xl z-10" />
                  
                  {/* Content Card */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                    <motion.div
                      className="bg-black/50 backdrop-blur-xl border border-red-500/20 rounded-2xl p-8 hover:border-red-400/40 transition-all duration-300"
                      whileHover={{ scale: 1.02, y: -5 }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-6`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{item.stage}</h3>
                      <div className="text-4xl font-black text-red-400 mb-2">{item.failure}</div>
                      <p className="text-white/80 leading-relaxed">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Painkiller Section - Revolutionary Arsenal */}
      <section className="py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/10 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
              YOUR
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                ARSENAL
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              This is StartupOS. The revolutionary platform that turns startup failure into startup success.
            </p>
          </motion.div>

          {/* Innovation Arsenal - Revolutionary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {innovationTools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 100, rotateY: -90 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <motion.div
                  className="relative bg-black/50 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-8 hover:border-blue-400/50 transition-all duration-500"
                  whileHover={{ 
                    scale: 1.05, 
                    rotateY: 5,
                    boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.25)"
                  }}
                  animate={{
                    y: [0, -10, 0],
                    rotateZ: [0, 1, -1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {/* Glowing Background */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-5 rounded-3xl blur-xl`} />
                  
                  {/* Icon */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${tool.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <tool.icon className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors">
                    {tool.title}
                  </h3>
                  <p className="text-white/70 mb-6 leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                    <p className="text-blue-400 font-semibold text-sm">
                      <span className="text-white/60">Impact: </span>
                      {tool.impact}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>


        </div>
      </section>

      {/* WhatsApp Community Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/30 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.2),transparent_50%)]" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-emerald-500/20 to-green-500/20 rounded-3xl blur-3xl" />
            
            {/* Main Content */}
            <div className="relative bg-black/60 backdrop-blur-xl rounded-3xl p-16 text-center border border-green-500/30">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mb-8"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">
                  🚀 Join the StartupOS Community
                </h2>
                <p className="text-xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
                  We're building the StartupOS space for founders, operators, and startup talent — live AMAs, execution frameworks, insider resources, and real collaboration.
                </p>
                <p className="text-lg text-green-400 font-semibold mb-8">
                  Tap in, build faster, scale smarter.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
              >
                <motion.a
                  href="https://chat.whatsapp.com/FXo00jnKmTzEOMK3c6f3AB?mode=ems_wa_c"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-5 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-xl rounded-2xl shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:from-green-600 hover:to-emerald-600 flex items-center space-x-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>Join WhatsApp Community</span>
                </motion.a>

              </motion.div>

              {/* Community Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">250+</div>
                  <p className="text-white/70">Active Members</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                  <p className="text-white/70">Community Support</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">10+</div>
                  <p className="text-white/70">Events</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Metrics - Revolutionary Design */}
      <section className="py-32 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/15 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              PROVEN
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                SUCCESS
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Our platform has already helped thousands of founders achieve their dreams.
            </p>
          </motion.div>

          {/* Revolutionary Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <motion.div
                  className="bg-black/30 backdrop-blur-xl border border-blue-500/20 rounded-2xl p-8 text-center hover:border-blue-500/40 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -10, rotateY: 5 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <metric.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-100 transition-colors">
                    {metric.metric}
                  </div>
                  <p className="text-white font-semibold mb-2 group-hover:text-blue-200 transition-colors">
                    {metric.label}
                  </p>
                  <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">
                    {metric.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




    </div>
  );
};

export default HomePage;
