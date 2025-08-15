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
  Sword
} from 'lucide-react';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // STORY SECTIONS
  const storySections = [
    {
      id: 'awakening',
      icon: Lightbulb,
      title: "The Awakening",
      subtitle: "Every founder has a moment",
      description: "You see a problem that needs solving. A vision that could change the world. But between that moment and reality lies a journey that most never complete.",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 'struggle',
      icon: TrendingDown,
      title: "The Struggle",
      subtitle: "The valley of uncertainty",
      description: "90% of startups fail. Not because the idea was bad, but because the journey is harder than anyone imagined. Resources are scarce, time is limited, and the market moves faster than you can adapt.",
      color: "from-red-500 to-orange-500"
    },
    {
      id: 'discovery',
      icon: Eye,
      title: "The Discovery",
      subtitle: "Finding the right path",
      description: "The founders who succeed discover something crucial: they need more than just passion. They need intelligence, guidance, and tools that grow with them.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 'transformation',
      icon: Sparkles,
      title: "The Transformation",
      subtitle: "Where magic happens",
      description: "This is where StartupOS enters your story. We don't just give you tools - we become your AI co-founder, your strategic advisor, your growth engine.",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 'victory',
      icon: Crown,
      title: "The Victory",
      subtitle: "Your success story",
      description: "500+ startups have already written their success stories with StartupOS. $2.1B+ in funding raised. 100+ successful exits. Your story could be next.",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  // INNOVATION TOOLS
  const innovationTools = [
    {
      icon: Cpu,
      title: "AI Co-Builders",
      description: "Your AI co-founder that never sleeps, never doubts, and always finds the best path forward.",
      impact: "10x faster development"
    },
    {
      icon: Compass,
      title: "Stage-Aware Intelligence",
      description: "Knows exactly what you need at each stage of your journey - from idea to scale.",
      impact: "Right strategy, right time"
    },
    {
      icon: Users,
      title: "Fractional CXOs",
      description: "Access to world-class leadership on demand, without the full-time commitment.",
      impact: "Expert guidance when needed"
    },
    {
      icon: Activity,
      title: "Real-Time Analytics",
      description: "See what works instantly, not months later when it's too late to pivot.",
      impact: "Instant insights, faster decisions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
      {/* Hero Section - The Story Begins */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Story Particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -300, 0],
                x: [0, Math.random() * 200 - 100, 0],
                scale: [0, 1.5, 0],
                opacity: [0, 0.9, 0],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 6,
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Story Opening - Split Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Side - Story Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-left"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8"
              >
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-semibold">YOUR STARTUP STORY</span>
              </motion.div>
              
              <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-none">
                <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                  WRITE
                </span>
                <br />
                <span className="text-white">
                  YOUR
                </span>
                <br />
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                  STORY
                </span>
              </h1>
              
              <p className="text-xl text-white/80 mb-8 leading-relaxed">
                Every successful startup has a story. A journey from idea to impact. 
                <br />
                <span className="text-purple-400 font-semibold">What will your story be?</span>
              </p>
            </motion.div>

            {/* Right Side - Floating Story Elements */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="relative"
            >
              {/* Floating Story Elements */}
              <div className="relative h-96">
                {[
                  { icon: Lightbulb, color: "from-yellow-500 to-orange-500", delay: 0 },
                  { icon: Rocket, color: "from-purple-500 to-pink-500", delay: 0.5 },
                  { icon: Crown, color: "from-blue-500 to-cyan-500", delay: 1 },
                  { icon: Star, color: "from-green-500 to-emerald-500", delay: 1.5 }
                ].map((element, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.5 + element.delay }}
                    className="absolute"
                    style={{
                      left: `${25 + (index % 2) * 50}%`,
                      top: `${20 + Math.floor(index / 2) * 60}%`,
                    }}
                  >
                    <motion.div
                      className={`w-20 h-20 rounded-full bg-gradient-to-r ${element.color} flex items-center justify-center shadow-2xl`}
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      animate={{ 
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      <element.icon className="w-10 h-10 text-white" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              href="https://startupos-one.vercel.app/signup"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-10 py-5 text-white font-bold text-xl flex items-center space-x-3 shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Rocket className="w-6 h-6" />
              </motion.div>
              <span>BEGIN YOUR STORY</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* The Journey - Story Sections */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              THE
              <br />
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                JOURNEY
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Every startup story follows a path. Here's how your story unfolds.
            </p>
          </motion.div>

          {/* Story Timeline - Vertical Flow */}
          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/50 to-pink-500/50 transform -translate-x-1/2"></div>
            
            <div className="space-y-32">
              {storySections.map((section, index) => (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.3 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Icon Side */}
                  <div className="flex-1 flex justify-center relative">
                    <motion.div
                      className={`w-40 h-40 rounded-full bg-gradient-to-r ${section.color} flex items-center justify-center shadow-2xl relative z-10`}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 4, 
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      <section.icon className="w-20 h-20 text-white" />
                    </motion.div>
                    
                    {/* Glow Effect */}
                    <motion.div
                      className={`absolute inset-0 w-40 h-40 rounded-full bg-gradient-to-r ${section.color} blur-2xl opacity-30`}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                  </div>

                  {/* Content Side */}
                  <div className="flex-1 text-center max-w-2xl">
                    <motion.div
                      initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.3 + 0.2 }}
                    >
                      <div className="text-sm text-purple-400 font-semibold mb-3 tracking-wider uppercase">
                        {section.subtitle}
                      </div>
                      <h3 className="text-5xl font-black text-white mb-6 leading-tight">
                        {section.title}
                      </h3>
                      <p className="text-xl text-white/80 leading-relaxed">
                        {section.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Tools - Innovation Arsenal */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              YOUR
              <br />
              <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                INNOVATION ARSENAL
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              These aren't just tools. They're your companions on the journey to success.
            </p>
          </motion.div>

          {/* Wave-Based Arsenal Layout */}
          <div className="relative">
            {/* Central Energy Core */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Shield className="w-32 h-32 text-white" />
              </motion.div>
              
              {/* Pulsing Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-blue-500/30"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-cyan-500/30"
                animate={{
                  scale: [1, 2, 1],
                  opacity: [0.3, 0, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
            </motion.div>

            {/* Floating Arsenal Elements */}
            <div className="relative h-96">
              {innovationTools.map((tool, index) => {
                const angle = (index * 90) * (Math.PI / 180);
                const radius = 200;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={tool.title}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 1 + index * 0.3 }}
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                  >
                    <motion.div
                      className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl"
                      whileHover={{ scale: 1.3, rotate: 360 }}
                      animate={{ 
                        rotate: [0, 360],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        duration: 10, 
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      <tool.icon className="w-20 h-20 text-white" />
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Wave-Based Info Display */}
          <div className="mt-32 relative">
            {/* Wave Background */}
            <div className="absolute inset-0">
              <svg className="w-full h-32" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path
                  d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
                  opacity=".25"
                  className="fill-purple-500"
                />
                <path
                  d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.26,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                  opacity=".5"
                  className="fill-pink-500"
                />
                <path
                  d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
                  className="fill-blue-500"
                />
              </svg>
            </div>

            {/* Floating Info Elements */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {innovationTools.map((tool, index) => (
                <motion.div
                  key={tool.title}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative group"
                >
                  {/* Floating Background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                  
                  {/* Content Container */}
                  <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-blue-500/30 rounded-full p-8 text-center group-hover:border-blue-400/50 transition-all duration-300">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                      {tool.title}
                    </h3>
                    <p className="text-white/70 mb-6 leading-relaxed group-hover:text-white/80 transition-colors duration-300">
                      {tool.description}
                    </p>
                    <div className="text-blue-400 font-semibold text-lg group-hover:text-blue-300 transition-colors duration-300">
                      {tool.impact}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The Call - Your Story Awaits */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Animated Story Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-96 h-96 rounded-full border-2 border-purple-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-80 h-80 rounded-full border-2 border-pink-500/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-64 h-64 rounded-full border-2 border-blue-500/20"
                animate={{ rotate: 360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Floating Particles */}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  style={{
                    left: `${20 + (i * 10)}%`,
                    top: `${30 + Math.sin(i * 0.8) * 40}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full px-6 py-3 mb-8"
              >
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-purple-400 font-semibold">YOUR STORY AWAITS</span>
              </motion.div>
              
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
                YOUR STORY
                <br />
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 bg-clip-text text-transparent">
                  AWAITS
                </span>
              </h2>
              
              <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                Join 500+ founders who have already written their success stories. 
                <br />
                <span className="text-purple-400 font-semibold">Your story could be next.</span>
              </p>

              {/* Success Stories - Floating Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {[
                  { number: "500+", label: "Stories Written", color: "from-purple-500 to-pink-500" },
                  { number: "$2.1B+", label: "Funding Raised", color: "from-blue-500 to-cyan-500" },
                  { number: "100+", label: "Successful Exits", color: "from-green-500 to-emerald-500" },
                  { number: "4.9/5", label: "Founder Rating", color: "from-yellow-500 to-orange-500" }
                ].map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative group"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-lg"
                      animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.2,
                      }}
                    />
                    <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-purple-500/20 rounded-2xl p-6 text-center group-hover:border-purple-400/40 transition-all duration-300">
                      <div className={`text-4xl font-black text-white mb-2 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                        {metric.number}
                      </div>
                      <div className="text-white/70 font-medium text-sm">
                        {metric.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="https://startupos-one.vercel.app/signup"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-12 py-6 text-white font-bold text-2xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Rocket className="w-8 h-8" />
                </motion.div>
                <span>WRITE YOUR STORY</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="w-8 h-8" />
                </motion.div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

