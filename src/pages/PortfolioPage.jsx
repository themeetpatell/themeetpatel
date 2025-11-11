import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Github, Star, Eye, Code, Briefcase, 
  Award, TrendingUp, Users, Zap, Target, CheckCircle,
  Filter, Search, Calendar, Tag, ShoppingCart, Radio, Cpu, BookOpen, X
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import FollowMyJourney from '../components/FollowMyJourney';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: "StartupOS",
      description: "Comprehensive startup ecosystem platform with 50+ integrated tools and services for entrepreneurs at every stage.",
      longDescription: "A revolutionary platform that combines AI-powered tools, gamification, and ecosystem access to help startups scale from idea to exit. Features include co-builder AI, stage-aware gamification, real-time analytics, and fractional CXO services.",
      image: "/api/placeholder/600/400",
      category: "technology",
      status: "Pre-Launch",
      tech: ["React", "Node.js", "AWS", "MongoDB", "Framer Motion", "Tailwind CSS"],
      liveUrl: "https://www.startupos.in",
      featured: true,
      metrics: {
        waitlist: "300+",
        startups: "10+",
        Workflows: "40+"
      },
      achievements: [
        "50+ Systems & Processes built",
        "5+ Startups Successfully Scaled",
        "85% Success Rate"
      ]
    },
    {
      id: 2,
      title: "ZeroHuman",
      description: "AI human model platform creating ultra-realistic, customizable digital humans for advertising, fashion, retail, and entertainment.",
      longDescription: "A cutting-edge AI platform that generates photorealistic digital humans with 4K resolution. Features 300% customer interaction increase, 90% cost savings, and 24/7 brand availability. Serves 50+ industries with 1000+ human models created and 100+ satisfied clients.",
      image: "/api/placeholder/600/400",
      category: "technology",
      status: "Pre-Launch",
      tech: ["AI/ML", "Computer Vision", "4K Resolution", "Brand Safety", "Digital Marketing", "Enterprise AI"],
      liveUrl: "https://www.zerohuman.co",
      featured: true,
      metrics: {
        waitlist: "200+",
        clients: "30+",
        models: "50+"
      },
      achievements: [
        "Chief Growth Officer Role",
        "300% Customer Interaction Increase",
        "90% Cost Savings for Clients"
      ]
    },

    {
      id: 3,
      title: "BiggDate",
      description: "A co-foundership building and startup creation platform. Entrepreneurs connect, build startups together, and upon successful establishment, they receive a visa to StartupOS.",
      longDescription: "A co-foundership building and startup creation platform that brings together entrepreneurs to connect, build startups together, and upon successful establishment, they receive a visa to StartupOS - the comprehensive startup ecosystem platform with 50+ integrated tools and services.",
      image: "/api/placeholder/600/400",
      category: "social",
      status: "Pre-Launch",
      tech: ["Co-foundership", "Startup Creation", "Entrepreneurship Tools", "Web Platform", "StartupOS"],
      liveUrl: "https://biggdate.com",
      githubUrl: null,
      featured: false,
      metrics: {
        waitlist: "100+",
        founders: "50+",
        matches: "10+"
      },
      achievements: [
        "Co-foundership Building Platform",
        "Startup Creation Focus",
        "StartupOS Visa Program"
      ]
    },
    {
      id: 4,
      title: "MealVerse",
      description: "Innovative food technology platform revolutionizing the culinary experience through digital innovation and sustainable food solutions.",
      longDescription: "A comprehensive food tech platform that combines digital innovation with sustainable food solutions. Features include AI-powered meal planning, sustainable sourcing, and digital culinary experiences that transform how people interact with food.",
      image: "/api/placeholder/600/400",
      category: "foodtech",
      status: "Pre-Launch",
      tech: ["Food Tech", "Digital Innovation", "Sustainability", "Mobile App", "Web Platform", "AI"],
      liveUrl: "https://mealverse.in",
      githubUrl: null,
      featured: true,
      metrics: {
        Waitlist: "500+",
        Clients: "50+",
        Cities: "2+",
      },
      achievements: [
        "Sustainable Food Solutions",
        "Digital Innovation in Food",
        "Revolutionary Culinary Experience"
      ]
    },
    {
      id: 5,
      title: "Finanshels.com",
      description: "Business intelligence and financial optimization platform making businesses smarter with their money.",
      longDescription: "A comprehensive fintech solution that provides real-time financial analytics, automated reporting, and strategic insights to help businesses optimize their financial performance and make data-driven decisions.",
      image: "/api/placeholder/600/400",
      category: "fintech",
      status: "Live",
      tech: ["React", "Python", "PostgreSQL", "Docker", "Kubernetes"],
      liveUrl: "https://finanshels.com",
      githubUrl: null,
      featured: true,
      metrics: {
        clients: "4000+",
        team: "140+",
        rating: 4.9
      },
      achievements: [
        "35% Cost Reduction for Clients",
        "500+ Businesses Optimized",
        "Real-time Analytics"
      ]
    },
    {
      id: 6,
      title: "BAWES Universe",
      description: "A fully integrated, people-first universe designed to help you think, act, build, and grow — faster, smarter, and with less friction.",
      longDescription: "We are not building an app. We are building a universe. A fully integrated, people-first universe designed to help you think, act, build, and grow — faster, smarter, and with less friction. We don't just support execution. We are execution — deployed on-demand, backed by real humans, and powered by smart systems.",
      image: "/api/placeholder/600/400",
      category: "technology",
      status: "Live",
      tech: ["Universe Platform", "Integrated Systems", "People-First Design", "Execution Engine"],
      liveUrl: "https://bawes.net/en",
      githubUrl: null,
      featured: false,
      metrics: {
        startups: "7+",
        users: "50K+",
        team: "300+"
      },
      achievements: [
        "Universe Platform Architecture",
        "Integrated Ecosystem Design",
        "People-First Execution System"
      ]
    },
    {
      id: 7,
      title: "StudentHub",
      description: "Hire students like cloud resources—instantly, with full tracking and support.",
      longDescription: "A comprehensive platform that allows you to hire students like cloud resources—instantly, with full tracking and support. Features include instant hiring, full tracking capabilities, and comprehensive support systems for student-employer connections.",
      image: "/api/placeholder/600/400",
      category: "hrtech",
      status: "Live",
      tech: ["Cloud Resources", "Student Hiring", "Tracking Systems", "Support Infrastructure"],
      liveUrl: "https://studenthub.co",
      githubUrl: null,
      featured: false,
      metrics: {
        students: "30K+",
        employers: "500+",
        rating: 4.7
      },
      achievements: [
        "Cloud-Style Student Hiring",
        "Full Tracking & Support",
        "Instant Resource Allocation"
      ]
    },
    {
      id: 8,
      title: "Plugn",
      description: "Launch your store in minutes. Connect inventory, payments, and fulfillment—no devs needed.",
      longDescription: "A comprehensive e-commerce platform that allows you to launch your store in minutes. Connect inventory, payments, and fulfillment—no developers needed. Features include instant store setup, payment processing, inventory management, and fulfillment automation.",
      image: "/api/placeholder/600/400",
      category: "ecommerce",
      status: "Closed",
      tech: ["E-commerce", "Payment Gateway", "Inventory Management", "Fulfillment Automation"],
      liveUrl: "https://plugn.io",
      githubUrl: null,
      featured: false,
      metrics: {
        stores: "2000+",
        transactions: "$5M+",
        rating: 4.7
      },
      achievements: [
        "Instant Store Launch",
        "No-Code E-commerce Platform",
        "Integrated Payment & Fulfillment"
      ]
    },

    {
      id: 9,
      title: "BAWES Intelligence",
      description: "Type a goal. Get a plan. Let AI turn your thoughts into proposals and action steps.",
      longDescription: "An advanced AI system that transforms thoughts into structured proposals and action steps. Features include goal analysis, plan generation, and automated proposal creation for faster execution. Type a goal. Get a plan. Let AI turn your thoughts into proposals and action steps.",
      image: "/api/placeholder/600/400",
      category: "technology",
      status: "Strategized",
      tech: ["AI/ML", "Natural Language Processing", "Automation", "Goal Setting", "Proposal Generation"],
      liveUrl: "https://intelligence.bawes.net",
      githubUrl: null,
      featured: false,
      metrics: {
        waitlist: "200+",
        plans: "500+",
        rating: 4.8
      },
      achievements: [
        "AI-Powered Goal Processing",
        "Automated Proposal Generation",
        "Intelligent Action Planning"
      ]
    },
    {
      id: 10,
      title: "Tribe",
      description: "Find Your Tribe. Build Your Network. AI-powered platform connecting you with perfect student clubs based on interests and goals.",
      longDescription: "An AI-driven networking platform that connects students with relevant clubs and communities. Features include intelligent matching, interest-based recommendations, and schedule optimization for better connections. Connecting 1000+ students with their perfect clubs.",
      image: "/api/placeholder/600/400",
      category: "hrtech",
      status: "Strategized",
      tech: ["AI Matching", "Social Networking", "Student Communities", "Schedule Optimization"],
      liveUrl: "https://tribe.bawes.net",
      githubUrl: null,
      featured: false,
      metrics: {
        waitlist: "300+",
        matches: "500+",
        rating: 4.6
      },
      achievements: [
        "AI-Powered Matching",
        "Student Community Building",
        "Interest-Based Networking"
      ]
    },
    {
      id: 11,
      title: "Thought Processor",
      description: "The Native OS for Thinking, Processing, and Action. Capture, organize, prioritize, and delegate your ideas.",
      longDescription: "A comprehensive thinking and processing platform that serves as a native operating system for ideas. Features include idea capture, organization, prioritization, and delegation tools for enhanced productivity. The Native OS for Thinking, Processing, and Action.",
      image: "/api/placeholder/600/400",
      category: "technology",
      status: "Strategized",
      tech: ["React", "Node.js", "Database", "Task Management", "Idea Processing"],
      liveUrl: "https://thought.bawes.net",
      githubUrl: null,
      featured: false,
      metrics: {
        waitlist: "200+",
        tasks: "5K+",
        rating: 4.7
      },
      achievements: [
        "Native OS for Thinking",
        "Idea Organization System",
        "Task Delegation Platform"
      ]
    },
    {
      id: 12,
      title: "MyTorchIt",
      description: "Innovative assistive technologies and home automation systems for differently-abled people.",
      longDescription: "Developed cutting-edge smart assistive technologies including smart canes, home automation systems, and accessibility tools. Led global CSR initiatives and scaled production by 1678%.",
      image: "/api/placeholder/600/400",
      category: "electronics-communication",
      status: "Live",
      tech: ["Arduino", "Raspberry Pi", "Python", "IoT", "Mobile Apps"],
      liveUrl: "https://mytorchit.com",
      githubUrl: null,
      featured: false,
      metrics: {
        units: "100K+",
        impact: "Global",
        rating: 4.9
      },
      achievements: [
        "100K Smart Canes Distributed",
        "1678% Production Scale",
        "70% Brand Recognition Increase"
      ]
    },
    {
      id: 13,
      title: "Incsmart Technologies",
      description: "Smart energy meter manufacturing startup providing intelligent energy monitoring and management solutions.",
      longDescription: "A technology company focused on smart energy solutions and intelligent metering systems. Features include energy monitoring, smart grid integration, and energy management analytics.",
      image: "/api/placeholder/600/400",
      category: "iot-automation",
      status: "Exited",
      tech: ["Embedded Systems", "Energy Management", "Smart Grid", "IoT", "Manufacturing"],
      liveUrl: "https://incsmart.in",
      githubUrl: null,
      featured: false,
      metrics: {
        meters: "10K+",
        clients: "50+",
        projects: "100+",
        rating: 4.5
      },
      achievements: [
        "Co-Founder Role",
        "150% Revenue Increase",
        "Scaled from 3 to 14 Employees"
      ]
    },
    {
      id: 14,
      title: "Kingstorm Automations",
      description: "Smart home and agriculture automation startup providing IoT solutions for modern living and farming.",
      longDescription: "An innovative IoT platform specializing in smart home automation and agricultural technology. Features include home automation systems, smart farming solutions, and IoT device management.",
      image: "/api/placeholder/600/400",
      category: "iot-automation",
      status: "Closed",
      tech: ["Arduino", "Raspberry Pi", "IoT", "Smart Home", "Agriculture Tech"],
      githubUrl: null,
      featured: false,
      metrics: {
        devices: "200+",
        team: "10+",
        rating: 4.6
      },
      achievements: [
        "Co-Founder Role",
        "100% Sales Increase in 6 Months",
        "30% Customer Satisfaction Rise"
      ]
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Briefcase },
    { id: 'technology', label: 'Technology', icon: Zap },
    { id: 'foodtech', label: 'Food Technology', icon: Target },
    { id: 'fintech', label: 'Fintech', icon: TrendingUp },
    { id: 'hrtech', label: 'HR Tech', icon: Users },
    { id: 'ecommerce', label: 'E-commerce', icon: ShoppingCart },
    { id: 'electronics-communication', label: 'Electronics & Communication', icon: Radio },
    { id: 'iot-automation', label: 'IoT & Automation', icon: Cpu },
    { id: 'social', label: 'Social', icon: Users },
    { id: 'writing', label: 'Writing', icon: BookOpen }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Structured Data for Portfolio Page
  const portfolioStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Portfolio - The Meet Patel's Startup Ventures and Projects",
    "description": "Explore The Meet Patel's comprehensive portfolio of successful startups, technology ventures, and innovative projects. From StartupOS to ZeroHuman, discover 8+ years of entrepreneurial achievements.",
    "url": "https://themeetpatel.com/portfolio",
    "mainEntity": {
      "@type": "Person",
      "name": "The Meet Patel",
      "alternateName": ["Meet Patel", "themeetpatel"],
      "jobTitle": "Serial Entrepreneur & Startup Ecosystem Builder",
      "description": "Serial entrepreneur with 8+ years experience building and scaling technology companies",
      "url": "https://themeetpatel.com",
      "image": "https://themeetpatel.com/logo for themeetpatel.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "email": "the.meetll@gmail.com",
      "sameAs": [
        "https://www.linkedin.com/in/themeetpatel/",
        "https://x.com/the_meetpatel",
        "https://github.com/themeetpatell",
        "http://instagram.com/the.meetpatell/",
        "https://youtube.com/@themeetpatel"
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://themeetpatel.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Portfolio",
          "item": "https://themeetpatel.com/portfolio"
        }
      ]
    },
    "hasPart": projects.map(project => ({
      "@type": "CreativeWork",
      "name": project.title,
      "description": project.description,
      "url": project.liveUrl,
      "creator": {
        "@type": "Person",
        "name": "The Meet Patel"
      },
      "keywords": project.tech.join(", "),
      "genre": project.category,
      "dateCreated": "2024",
      "inLanguage": "en-US"
    }))
  };

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      <SEOHead 
        title="Portfolio - The Meet Patel's Startup Ventures and Projects"
        description="Explore The Meet Patel's comprehensive portfolio of successful startups, technology ventures, and innovative projects. From StartupOS to ZeroHuman, discover 8+ years of entrepreneurial achievements and business growth expertise."
        keywords="Portfolio The Meet Patel, Meet Patel projects, themeetpatel ventures, StartupOS portfolio, ZeroHuman portfolio, MealVerse portfolio, startup ventures, technology projects, business portfolio, entrepreneurial achievements, startup ecosystem projects, business growth projects, Dubai entrepreneur portfolio, serial entrepreneur projects, startup building portfolio, business operations projects, product development portfolio, startup scaling projects, business strategy portfolio, operations management projects, startup leadership portfolio"
        canonical="/portfolio"
        ogImage="/portfolio-preview.jpg"
        structuredData={portfolioStructuredData}
      />
      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 min-h-[75vh] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Floating Portfolio Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{ y: [0, -22, 0], rotate: [0, 10, 0], x: [0, 12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-24 left-[9%] w-20 h-20 bg-gradient-to-br from-purple-200/60 to-pink-200/60 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-purple-300/50"
          >
            <Briefcase className="w-10 h-10 text-purple-600" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 28, 0], rotate: [0, -12, 0], x: [0, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-32 right-[12%] w-24 h-24 bg-gradient-to-tl from-pink-200/60 to-purple-200/60 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl border border-pink-300/50"
          >
            <Code className="w-12 h-12 text-pink-600" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, 8, 0], scale: [1, 1.07, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-36 left-[14%] w-20 h-20 bg-gradient-to-br from-purple-100/70 to-pink-100/70 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border border-purple-200/50"
          >
            <Target className="w-10 h-10 text-purple-700" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 26, 0], rotate: [0, -10, 0], x: [0, -14, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
            className="absolute bottom-32 right-[10%] w-20 h-20 bg-gradient-to-tr from-pink-200/70 to-purple-200/70 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-pink-300/60"
          >
            <Award className="w-10 h-10 text-pink-700" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
            className="absolute top-1/2 left-[7%] w-16 h-16 bg-purple-200/55 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg"
          >
            <Star className="w-8 h-8 text-purple-600" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -8, 0], x: [0, 8, 0] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute top-1/3 right-[18%] w-16 h-16 bg-pink-100/65 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
          >
            <TrendingUp className="w-8 h-8 text-pink-600" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            className="absolute bottom-1/4 left-[24%] w-14 h-14 bg-purple-100/60 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md"
          >
            <Zap className="w-7 h-7 text-purple-600" />
          </motion.div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
              My Portfolio
            </h1>
            <p className="text-lg sm:text-2xl text-purple-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
              A collection of projects, ventures, and creative works that showcase my journey as an entrepreneur, startup builder, and writer.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto">
              <div className="bg-purple-50/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-200/50">
                <div className="text-2xl sm:text-3xl font-bold text-purple-500">8+</div>
                <div className="text-gray-600 text-xs sm:text-sm">Years Experience</div>
              </div>
              <div className="bg-purple-50/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-200/50">
                <div className="text-2xl sm:text-3xl font-bold text-purple-500">10+</div>
                <div className="text-gray-600 text-xs sm:text-sm">Startups Mentored</div>
              </div>
              <div className="bg-purple-50/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-200/50">
                <div className="text-2xl sm:text-3xl font-bold text-purple-500">300+</div>
                <div className="text-gray-600 text-xs sm:text-sm">Team Members Led</div>
              </div>
              <div className="bg-purple-50/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-200/50">
                <div className="text-2xl sm:text-3xl font-bold text-purple-500">2</div>
                <div className="text-gray-600 text-xs sm:text-sm">Books Published</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-4 sm:py-6 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 sm:mb-8"
          >
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
                <div className="relative">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search projects, descriptions, or tags..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/80 border border-purple-200/50 rounded-xl pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-purple-400 hover:text-purple-600 transition-colors"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Results Counter */}
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-gray-600 text-sm sm:text-base">
                Showing {filteredProjects.length} of {projects.length} projects
                {searchTerm && (
                  <span className="text-purple-600"> for "{searchTerm}"</span>
                )}
              </p>
              </div>
              
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {categories.map((category) => {
                const Icon = category.icon;
                const categoryProjects = projects.filter(p => p.category === category.id);
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                      activeFilter === category.id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-200/50'
                        : 'bg-purple-100 text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{category.label}</span>
                    <span className="text-xs opacity-70 whitespace-nowrap">({category.id === 'all' ? projects.length : categoryProjects.length})</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="pt-8 pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">All Projects</h2>
            <p className="text-lg sm:text-xl text-purple-600 text-center max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
              Browse through all projects organized by category and industry
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter + searchTerm}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/30 backdrop-blur-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 border border-purple-200/50"
                >
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-purple-600">{project.title}</h3>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className={`px-3 py-1.5 rounded-full text-xs font-semibold shadow-md ${
                        project.status === 'Live' ? 'bg-green-500/30 text-green-600 border border-green-400/50' :
                        project.status === 'Closed' ? 'bg-red-500/30 text-red-600 border border-red-400/50' :
                        project.status === 'Strategized' ? 'bg-purple-600/30 text-purple-700 border border-purple-500/50' :
                        project.status === 'Exited' ? 'bg-purple-500/30 text-purple-700 border border-purple-400/50' :
                        project.status === 'Pre-Launch' ? 'bg-yellow-500/40 text-yellow-700 border border-yellow-400/60 shadow-lg' :
                        project.status === 'In Development' ? 'bg-purple-600/30 text-purple-700 border border-purple-500/50' :
                        project.status === 'Acquired' ? 'bg-purple-500/30 text-purple-700 border border-purple-400/50' :
                        'bg-orange-500/30 text-orange-600 border border-orange-400/50'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-gray-700 text-sm mb-3 line-clamp-2">{project.description}</p>
                    
                    <div className="flex items-center gap-1.5 mb-3 overflow-x-auto scrollbar-hide">
                      <span className="bg-purple-200 text-purple-700 px-2 py-1 rounded text-xs font-medium whitespace-nowrap flex-shrink-0">
                        {categories.find(cat => cat.id === project.category)?.label || project.category}
                      </span>
                      {project.tech.slice(0, 2).map((tech, idx) => (
                        <span key={idx} className="bg-purple-100 text-gray-600 px-2 py-1 rounded text-xs whitespace-nowrap flex-shrink-0">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 2 && (
                        <span className="bg-purple-100 text-gray-600 px-2 py-1 rounded text-xs whitespace-nowrap flex-shrink-0">
                          +{project.tech.length - 2}
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-2">
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-purple-600 text-white py-2 px-3 rounded text-xs font-medium hover:bg-purple-700 transition-colors flex items-center justify-center"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Live
                        </motion.a>
                      )}
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex-1 bg-gray-600 text-white py-2 px-3 rounded text-xs font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
                        >
                          <Github className="w-3 h-3 mr-1" />
                          Code
                        </motion.a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-8 sm:py-12 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/30 backdrop-blur-md border border-purple-200/50 rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Interested in Working Together?</h2>
            <p className="text-gray-700 mb-8 text-lg">
              I'm always excited to take on new challenges and create innovative solutions. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors shadow-lg shadow-purple-200/50"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/80 text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-purple-50 border border-purple-200 transition-colors"
              >
                Learn More About Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Follow My Journey Section */}
      <FollowMyJourney />
    </div>
  );
};

export default PortfolioPage;
