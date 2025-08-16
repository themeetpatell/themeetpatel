import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Target, Zap, Globe, Award, Heart, Brain, Rocket } from 'lucide-react';
import meetPatelImage from '../assets/themeetpatel.jpeg';
import drashtySoniImage from '../assets/drashty.jpg';
import YashviSoniImage from '../assets/Yashvi.jpg';
import '../App.css';

const AboutPage = () => {
  const [activeFounder, setActiveFounder] = useState(0);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const founders = [
    {
      name: "Meet Patel",
      role: "CEO & Founder",
      bio: "A part business mind, part startup therapist, and full-time problem-solver. Serial entrepreneur who's built and scaled startups from college dorm to serving hundreds of people. Expert in turning chaos into streamlined growth machines.",
      image: meetPatelImage,
      achievements: ["5+ Successful startups led", "500+ team members scaled", "3X Founder"],
      quote: "Every startup deserves the StartupOS to become extraordinary Startup."
    },
    {
      name: "Drashty Soni",
      role: "CTO & Co-Founder", 
      bio: "Tech visionary with 4+ years building scalable systems and AI-powered solutions. Former senior engineer at multiple unicorn startups. Expert in turning complex technical challenges into elegant, user-friendly solutions that scale from 0 to millions.",
      image: drashtySoniImage,
      achievements: ["100+ systems architected", "10K+ users served", "99.9% uptime maintained"],
      quote: "Great technology should be invisible - it just works."
    },
          {
        name: "Yashvi Soni",
        role: "Chief Community Officer", 
        bio: "Community builder and startup ecosystem expert with 6+ years growing vibrant founder communities. Former head of community at top accelerators. Passionate about connecting founders with the resources, mentors, and networks they need to succeed.",
        image: YashviSoniImage,
        achievements: ["500+ founders connected", "10+ events organized", "95% community satisfaction"],
        quote: "The best startup advice comes from founders who've been there."
      },
      {
        name: "To be announced",
        role: "Chief Operating Officer", 
        bio: "Operations maestro with 10+ years scaling startups from 5 to 500+ employees. Former VP of Operations at multiple successful exits. Expert in building systems that run like clockwork while maintaining the human touch that makes teams thrive.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        achievements: ["500+ processes optimized", "2 successful exits", "40% efficiency gains"],
        quote: "Operations excellence is the foundation of startup success."
      }
  ];

  const values = [
    {
      icon: Rocket,
      title: "Build with Boldness",
      description: "We take calculated risks and push boundaries to create breakthrough solutions.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: Heart,
      title: "Fulfill with Fun",
      description: "We believe work should be joyful and that spirited fun drives innovation.",
      gradient: "from-pink-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Move with Momentum",
      description: "We act with urgency while taking care of each other and our community.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Target,
      title: "Obsessed with Outcomes",
      description: "We think like customers and measure success by the value we create.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Outperform with Ownership",
      description: "We take full responsibility and maintain integrity in everything we do.",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Globe,
      title: "Scale with Speed",
      description: "We move quickly but thoughtfully, ensuring quality at every step.",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Startups Growing", icon: Rocket },
    { number: "100+", label: "Systems", icon: Target },
    { number: "10000+", label: "Community Members", icon: Users },
    { number: "4.9/5", label: "User Rating", icon: Award }
  ];

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-particles"></div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <motion.h1 
              className="text-6xl md:text-8xl font-bold mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.2 }}
            >
              <span className="ultra-text-gradient">Building the Future</span>
              <br />
              <span className="text-white">of Startup Success</span>
            </motion.h1>
            <motion.p 
              className="text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            >
              We're on a mission to democratize startup success by providing the systems, 
              tools, and networks that turn great ideas into unstoppable companies.
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="ultra-glass text-center p-8 rounded-2xl"
                whileHover={{ scale: 1.05, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <stat.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <div className="text-4xl font-bold ultra-text-gradient mb-2">{stat.number}</div>
                <div className="text-white/70 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="ultra-glass p-12 rounded-3xl"
            >
              <Target className="w-16 h-16 text-blue-400 mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-white/70 leading-relaxed mb-6">
                To be the startup therapist that every founder needs. We're building the complete 
                operating system that transforms chaos into streamlined growth - from idea validation 
                to scale operations, providing the systems, processes, and expert guidance that 
                turn startup struggles into success stories.
              </p>
              <div className="flex items-center space-x-2 text-blue-400">
                <Target className="w-5 h-5" />
                <span className="font-medium">Transforming startup chaos into streamlined success</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="ultra-glass p-12 rounded-3xl"
            >
              <Brain className="w-16 h-16 text-purple-400 mb-6" />
              <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-xl text-white/70 leading-relaxed mb-6">
                A future where every founder has a startup therapist in their corner. We envision 
                a world where entrepreneurs can focus on their vision while we handle the chaos, 
                systems, and growth challenges that turn great ideas into successful, scalable businesses.
              </p>
              <div className="flex items-center space-x-2 text-purple-400">
                <Brain className="w-5 h-5" />
                <span className="font-medium">Every founder deserves a startup therapist</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Our <span className="ultra-text-gradient">Core Values</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we build the future of startup success.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="ultra-glass p-8 rounded-2xl group cursor-pointer"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${value.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Meet the <span className="ultra-text-gradient">Visionaries</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Our founding team combines decades of startup experience with cutting-edge technical expertise.
            </p>
          </motion.div>

          <div className="ultra-glass rounded-3xl p-8 md:p-12">
            {/* Founder Selector */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {founders.map((founder, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFounder(index)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFounder === index
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:scale-105'
                  }`}
                >
                  {founder.name}
                </button>
              ))}
            </div>

            {/* Active Founder Display */}
            <motion.div
              key={activeFounder}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <div className="text-center md:text-left">
                <h3 className="text-4xl font-bold text-white mb-2">
                  {founders[activeFounder].name}
                </h3>
                <p className="text-xl text-blue-400 mb-6 font-medium">{founders[activeFounder].role}</p>
                <p className="text-lg text-white/70 mb-8 leading-relaxed">
                  {founders[activeFounder].bio}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                    <Award className="w-6 h-6 text-yellow-400 mr-3" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-3">
                    {founders[activeFounder].achievements.map((achievement, index) => (
                      <li key={index} className="text-white/70 flex items-center group">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3 group-hover:scale-125 transition-transform duration-200" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                <blockquote className="text-xl italic text-white/80 border-l-4 border-gradient-to-b from-blue-400 to-purple-400 pl-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 py-4 rounded-r-lg">
                  "{founders[activeFounder].quote}"
                </blockquote>
              </div>

              <div className="relative">
                <div className="w-80 h-80 mx-auto rounded-3xl overflow-hidden ultra-glass border border-white/10">
                  <img 
                    src={founders[activeFounder].image} 
                    alt={founders[activeFounder].name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="ultra-glass rounded-3xl p-12"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to <span className="ultra-text-gradient">Scale Your Startup</span>?
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Join thousands of startups already using StartupOS to accelerate their growth 
              and achieve their goals faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="ultra-button flex items-center space-x-2 text-lg px-8 py-4">
                <Rocket className="w-6 h-6" />
                <span>View Open Role</span>
              </button>
              <button className="px-8 py-4 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors duration-200 font-medium">
                Create Your Own Role
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

