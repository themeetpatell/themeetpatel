import React, { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  Brain, 
  Zap, 
  Users, 
  BarChart3, 
  Globe, 
  Shield, 
  ArrowRight,
  Sparkles,
  Target,
  Layers
} from 'lucide-react';
import aiImage from '../assets/ai-neural-network.jpg';
import ecosystemImage from '../assets/startup-ecosystem.jpg';
import growthImage from '../assets/growth-visualization.jpg';
import innovationImage from '../assets/innovation-lab.jpg';
import '../App.css';

const UltraFeatures = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["100px", "-100px"]);

  const features = [
    {
      icon: Brain,
      title: "AI Co-builders",
      subtitle: "Intelligence that executes",
      description: "Domain-specific AI that executes—that assists—across finance, GTM, hiring, and operations.",
      image: aiImage,
      gradient: "from-blue-500 to-cyan-500",
      details: [
        "Finance: Budgeting, burn forecasting, runway extension",
        "GTM: ICPs, channel testing, campaign plans", 
        "Hiring: JDs, comp bands, top-match filtering",
        "Ops: Project breakdowns, OKR mapping, task automation"
      ]
    },
    {
      icon: Zap,
      title: "Stage-Aware Growth",
      subtitle: "Platform that evolves",
      description: "Platform evolves with your startup, unlocking new tools and features as you hit milestones.",
      image: growthImage,
      gradient: "from-purple-500 to-pink-500",
      details: [
        "Seedling: Idea validator and MVP builders",
        "Sprinter: GTM setup, growth funnel tools",
        "Scaler: Hiring, ops, internal systems", 
        "Dominator: Expansion and IPO readiness"
      ]
    },
    {
      icon: Globe,
      title: "Ecosystem Access",
      subtitle: "Connected startup world",
      description: "Connect with VCs, accelerators, communities, and tools through our integrated marketplace.",
      image: ecosystemImage,
      gradient: "from-indigo-500 to-purple-500",
      details: [
        "Co-branded OS for VCs & accelerators",
        "Curated template + tool marketplace",
        "Referral engine for partner growth",
        "Community white-labeling"
      ]
    },
    {
      icon: Shield,
      title: "Mergers & Acquisitions",
      subtitle: "Bank-level protection",
      description: "Bank-level security with SOC 2 compliance, ensuring your startup data stays protected.",
      image: innovationImage,
      gradient: "from-gray-500 to-slate-500",
      details: [
        "Target discovery by sector, size, or signal",
        "Term sheet & deal flow tracker",
        "Readiness checks across ops & legal",
        "On-demand access to M&A advisors"
      ]
    },
    {
      icon: Users,
      title: "Fractional CXOs",
      subtitle: "Expert leadership on-demand",
      description: "Access expert fractional executives matched to your stage, goals, and company culture.",
      image: innovationImage,
      gradient: "from-green-500 to-emerald-500",
      details: [
        "Matched by stage, need, and culture",
        "Pay for outcomes, not time",
        "CXO dashboards and collaboration tools",
        "Performance tracking and optimization"
      ]
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      subtitle: "Intelligence built-in",
      description: "Live metrics, outcome tracking, and progress visibility built into your operating system.",
      image: growthImage,
      gradient: "from-orange-500 to-red-500",
      details: [
        "Founder cockpit: KPIs, burn, retention",
        "For VCs: Portfolio command center",
        "Community health insights",
        "Execution insights feed AI Co-builders"
      ]
    },
  ];

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900" />
      
      <motion.div
        style={{ y }}
        className="absolute inset-0 opacity-10"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">Revolutionary Features</span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="ultra-text-gradient">Everything you need</span>
            <br />
            <br />
            <span className="text-white">to Start & Scale</span>
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            From idea to IPO, StartupOS provides the systems, roadmaps, insights, and network you need 
            at every stage of your startup's journey.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="ultra-card group cursor-pointer"
            >
              {/* Feature Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-blue-400 font-medium">{feature.subtitle}</p>
                </div>
              </div>

              {/* Feature Image */}
              <div className="relative mb-6 rounded-xl overflow-hidden h-48">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Feature Description */}
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Feature Details */}
              <div className="space-y-3 mb-6">
                {feature.details.map((detail, detailIndex) => (
                  <motion.div
                    key={detailIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: (index * 0.1) + (detailIndex * 0.1) }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                    <span className="text-white/70">{detail}</span>
                  </motion.div>
                ))}
              </div>

              {/* Learn More Button */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <span>Learn more</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.button>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UltraFeatures;

