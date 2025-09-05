import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Settings, Workflow, FileText, Target, Zap, Users, TrendingUp,
  CheckCircle, ArrowRight, ExternalLink, Clock, Award, Star,
  BookOpen, Shield, Rocket, BarChart3, Cpu, Database,
  Globe, Smartphone, Monitor, Server, Cloud, Lock
} from 'lucide-react';

const SystemsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const systems = [
    {
      id: 1,
      title: "ZeroHuman AI Operations Framework",
      description: "Complete operational framework for AI-powered digital human platform including content creation, quality control, and client management workflows.",
      category: "ai",
      type: "Framework",
      status: "Live",
      complexity: "Advanced",
      timeToBuild: "6 months",
      teamSize: "8 members",
      impact: "300% efficiency increase",
      image: "/api/placeholder/600/400",
      features: [
        "Automated content generation pipeline",
        "Quality assurance checkpoints",
        "Client onboarding automation",
        "Performance monitoring dashboard",
        "Scalable deployment system"
      ],
      technologies: ["AI/ML", "Python", "Docker", "Kubernetes", "AWS", "MongoDB"],
      metrics: {
        efficiency: "300%",
        clients: "100+",
        uptime: "99.9%",
        satisfaction: "4.9/5"
      },
      documentation: "Complete SOP documentation with video tutorials",
      featured: true
    },
    {
      id: 2,
      title: "MealVerse Food Tech Ecosystem",
      description: "End-to-end food technology platform with sustainable sourcing, digital ordering, and supply chain optimization systems.",
      category: "foodtech",
      type: "Ecosystem",
      status: "Live",
      complexity: "Advanced",
      timeToBuild: "8 months",
      teamSize: "12 members",
      impact: "70% sustainability improvement",
      image: "/api/placeholder/600/400",
      features: [
        "Sustainable sourcing algorithm",
        "Digital ordering system",
        "Supply chain optimization",
        "Nutrition tracking dashboard",
        "Restaurant management tools"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS"],
      metrics: {
        sustainability: "70%",
        users: "5K+",
        restaurants: "200+",
        wasteReduction: "45%"
      },
      documentation: "Comprehensive workflow documentation",
      featured: true
    },
    {
      id: 3,
      title: "Startup Growth Acceleration System",
      description: "Proven framework for scaling startups from MVP to market leader with growth hacking, team building, and operational excellence processes.",
      category: "growth",
      type: "Framework",
      status: "Live",
      complexity: "Expert",
      timeToBuild: "4 years",
      teamSize: "15+ members",
      impact: "500% revenue growth average",
      image: "/api/placeholder/600/400",
      features: [
        "Growth hacking playbook",
        "Team scaling methodology",
        "Revenue optimization processes",
        "Market penetration strategies",
        "Investor relations framework"
      ],
      technologies: ["Analytics", "CRM", "Marketing Automation", "A/B Testing", "Data Science"],
      metrics: {
        avgGrowth: "500%",
        startups: "50+",
        successRate: "85%",
        avgTimeToScale: "18 months"
      },
      documentation: "Complete playbook with case studies",
      featured: true
    },
    {
      id: 4,
      title: "Kingstorm IoT Automation Platform",
      description: "Smart home and agriculture automation system with device management, data analytics, and predictive maintenance workflows.",
      category: "iot",
      type: "Platform",
      status: "Completed",
      complexity: "Advanced",
      timeToBuild: "18 months",
      teamSize: "8 members",
      impact: "100% sales increase",
      image: "/api/placeholder/600/400",
      features: [
        "Device management system",
        "Real-time monitoring dashboard",
        "Predictive maintenance algorithms",
        "Mobile app integration",
        "Data analytics platform"
      ],
      technologies: ["IoT", "Python", "React Native", "MQTT", "InfluxDB", "Raspberry Pi"],
      metrics: {
        salesGrowth: "100%",
        devices: "1000+",
        efficiency: "40%",
        customerSatisfaction: "4.7/5"
      },
      documentation: "Technical documentation and user guides",
      featured: false
    },
    {
      id: 5,
      title: "Incsmart Energy Management System",
      description: "Smart energy meter manufacturing and management system with production optimization, quality control, and distribution workflows.",
      category: "manufacturing",
      type: "System",
      status: "Completed",
      complexity: "Advanced",
      timeToBuild: "12 months",
      teamSize: "14 members",
      impact: "150% revenue increase",
      image: "/api/placeholder/600/400",
      features: [
        "Production line optimization",
        "Quality control automation",
        "Inventory management system",
        "Distribution tracking",
        "Customer support portal"
      ],
      technologies: ["Manufacturing", "ERP", "Quality Control", "Supply Chain", "Analytics"],
      metrics: {
        revenueGrowth: "150%",
        production: "200%",
        quality: "99.5%",
        efficiency: "60%"
      },
      documentation: "Manufacturing SOPs and quality standards",
      featured: false
    },
    {
      id: 6,
      title: "Plugn Operations Excellence Framework",
      description: "Comprehensive operations management system for e-commerce platforms with payment processing, delivery optimization, and customer service workflows.",
      category: "operations",
      type: "Framework",
      status: "Completed",
      complexity: "Expert",
      timeToBuild: "6 months",
      teamSize: "10 members",
      impact: "30% efficiency increase",
      image: "/api/placeholder/600/400",
      features: [
        "Payment processing automation",
        "Delivery route optimization",
        "Customer service workflows",
        "Inventory management",
        "Performance analytics"
      ],
      technologies: ["Operations", "Process Automation", "CRM", "Analytics", "Workflow Management"],
      metrics: {
        efficiency: "30%",
        customerSatisfaction: "20%",
        costReduction: "25%",
        processingTime: "50%"
      },
      documentation: "Operations manual and training materials",
      featured: false
    },
    {
      id: 7,
      title: "Content Creation & Marketing System",
      description: "Automated content creation and marketing distribution system with SEO optimization, social media management, and performance tracking.",
      category: "marketing",
      type: "System",
      status: "Live",
      complexity: "Intermediate",
      timeToBuild: "3 months",
      teamSize: "5 members",
      impact: "400% content output increase",
      image: "/api/placeholder/600/400",
      features: [
        "Content calendar automation",
        "SEO optimization tools",
        "Social media scheduling",
        "Performance analytics",
        "A/B testing framework"
      ],
      technologies: ["Content Management", "SEO", "Social Media", "Analytics", "Automation"],
      metrics: {
        contentOutput: "400%",
        engagement: "250%",
        reach: "300%",
        conversion: "180%"
      },
      documentation: "Marketing playbook and content guidelines",
      featured: false
    },
    {
      id: 8,
      title: "Team Management & Culture Framework",
      description: "Comprehensive human resources and team management system with hiring processes, performance management, and culture building workflows.",
      category: "hr",
      type: "Framework",
      status: "Live",
      complexity: "Advanced",
      timeToBuild: "2 years",
      teamSize: "20+ members",
      impact: "90% employee satisfaction",
      image: "/api/placeholder/600/400",
      features: [
        "Hiring and onboarding process",
        "Performance management system",
        "Culture building activities",
        "Learning and development programs",
        "Employee engagement tools"
      ],
      technologies: ["HR Management", "Performance Analytics", "Learning Management", "Culture Tools"],
      metrics: {
        satisfaction: "90%",
        retention: "85%",
        productivity: "40%",
        growth: "200%"
      },
      documentation: "HR policies and culture playbook",
      featured: false
    },
    {
      id: 9,
      title: "Accounting Practice Management Framework",
      description: "Comprehensive practice management system for accounting firms including client management, workflow automation, compliance tracking, and revenue optimization.",
      category: "accounting",
      type: "Framework",
      status: "Live",
      complexity: "Expert",
      timeToBuild: "12 months",
      teamSize: "15 members",
      impact: "250% efficiency increase",
      image: "/api/placeholder/600/400",
      features: [
        "Client lifecycle management",
        "Automated workflow routing",
        "Compliance tracking system",
        "Revenue optimization tools",
        "Document management system",
        "Time tracking and billing",
        "Tax preparation automation",
        "Client portal integration"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "QuickBooks API", "Tax Software APIs"],
      metrics: {
        efficiency: "250%",
        clients: "500+",
        compliance: "100%",
        revenue: "180%",
        timeSaved: "60%",
        accuracy: "99.5%"
      },
      documentation: "Complete accounting practice playbook with compliance guidelines",
      featured: true
    },
    {
      id: 10,
      title: "Tax Preparation Automation System",
      description: "Automated tax preparation and filing system with client data integration, form generation, and compliance monitoring for accounting practices.",
      category: "accounting",
      type: "System",
      status: "Live",
      complexity: "Advanced",
      timeToBuild: "8 months",
      teamSize: "12 members",
      impact: "80% time reduction",
      image: "/api/placeholder/600/400",
      features: [
        "Automated form generation",
        "Client data integration",
        "Error checking and validation",
        "E-filing automation",
        "Compliance monitoring",
        "Client communication tools"
      ],
      technologies: ["Python", "Tax APIs", "PDF Generation", "E-filing Systems", "Database Management"],
      metrics: {
        timeReduction: "80%",
        accuracy: "99.8%",
        clients: "1000+",
        formsProcessed: "50K+"
      },
      documentation: "Tax automation procedures and compliance guidelines",
      featured: false
    },
    {
      id: 11,
      title: "Client Onboarding & Management System",
      description: "Streamlined client onboarding process with document collection, compliance checks, and automated workflow management for accounting firms.",
      category: "accounting",
      type: "System",
      status: "Live",
      complexity: "Intermediate",
      timeToBuild: "4 months",
      teamSize: "8 members",
      impact: "70% faster onboarding",
      image: "/api/placeholder/600/400",
      features: [
        "Digital document collection",
        "Automated compliance checks",
        "Client portal setup",
        "Workflow automation",
        "Progress tracking",
        "Communication templates"
      ],
      technologies: ["Web Forms", "Document Management", "Workflow Automation", "Email Integration"],
      metrics: {
        onboardingTime: "70%",
        clientSatisfaction: "95%",
        compliance: "100%",
        efficiency: "150%"
      },
      documentation: "Client onboarding procedures and templates",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Systems', icon: Settings, count: systems.length },
    { id: 'ai', label: 'AI & Machine Learning', icon: Cpu, count: systems.filter(s => s.category === 'ai').length },
    { id: 'foodtech', label: 'Food Technology', icon: Target, count: systems.filter(s => s.category === 'foodtech').length },
    { id: 'growth', label: 'Growth & Scaling', icon: TrendingUp, count: systems.filter(s => s.category === 'growth').length },
    { id: 'accounting', label: 'Accounting & Finance', icon: BarChart3, count: systems.filter(s => s.category === 'accounting').length },
    { id: 'iot', label: 'IoT & Hardware', icon: Zap, count: systems.filter(s => s.category === 'iot').length },
    { id: 'manufacturing', label: 'Manufacturing', icon: Database, count: systems.filter(s => s.category === 'manufacturing').length },
    { id: 'operations', label: 'Operations', icon: Workflow, count: systems.filter(s => s.category === 'operations').length },
    { id: 'marketing', label: 'Marketing', icon: BarChart3, count: systems.filter(s => s.category === 'marketing').length },
    { id: 'hr', label: 'Human Resources', icon: Users, count: systems.filter(s => s.category === 'hr').length }
  ];

  const filteredSystems = selectedCategory === 'all' 
    ? systems 
    : systems.filter(system => system.category === selectedCategory);

  const featuredSystems = systems.filter(system => system.featured);

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-teal-900/20 to-slate-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                Systems Built
              </h1>
            </div>
            
            <p className="text-xl text-cyan-200 max-w-4xl mx-auto leading-relaxed mb-8">
              Comprehensive collection of startup systems, processes, SOPs, workflows, and frameworks 
              I've built and implemented across multiple ventures and industries.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{systems.length}+</div>
                <div className="text-cyan-300 text-sm">Systems Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">8</div>
                <div className="text-cyan-300 text-sm">Industries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-cyan-300 text-sm">Startups Helped</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">4</div>
                <div className="text-cyan-300 text-sm">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Systems */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 text-center">Featured Systems</h2>
            <p className="text-xl text-cyan-200 text-center max-w-3xl mx-auto">
              Our most impactful and innovative systems that have driven significant business results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredSystems.map((system, index) => (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="ultra-glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group"
              >
                {/* System Header */}
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                      {system.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-white text-sm font-medium">Featured</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Settings className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white px-4">{system.title}</h3>
                    </div>
                  </div>
                </div>

                {/* System Content */}
                <div className="p-6">
                  <p className="text-white/80 leading-relaxed mb-4">
                    {system.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-cyan-400">{system.metrics.efficiency || system.metrics.sustainability || system.metrics.avgGrowth}</div>
                      <div className="text-white/60 text-sm">Efficiency</div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-cyan-400">{system.metrics.clients || system.metrics.users || system.metrics.startups}</div>
                      <div className="text-white/60 text-sm">Users</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {system.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {system.technologies.length > 4 && (
                      <span className="bg-white/10 text-white/60 px-2 py-1 rounded text-xs">
                        +{system.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Status and Complexity */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        system.status === 'Live' ? 'bg-green-400' : 'bg-yellow-400'
                      }`}></div>
                      <span className="text-white/70 text-sm">{system.status}</span>
                    </div>
                    <div className="text-white/60 text-sm">
                      {system.complexity} • {system.timeToBuild}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link to={`/systems/${system.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-400 hover:text-cyan-300 font-semibold py-3 rounded-xl border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center space-x-2"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-6 text-center">All Systems</h2>
            <p className="text-xl text-cyan-200 text-center max-w-3xl mx-auto mb-8">
              Browse through all systems organized by category and industry
            </p>

            {/* Category Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      selectedCategory === category.id
                        ? 'bg-cyan-400 text-white shadow-lg shadow-cyan-400/25'
                        : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{category.label}</span>
                    <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Systems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSystems.map((system, index) => (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="ultra-glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group"
              >
                {/* System Header */}
                <div className="relative h-40 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded text-xs font-medium">
                      {system.type}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-2 h-2 rounded-full ${
                      system.status === 'Live' ? 'bg-green-400' : 'bg-yellow-400'
                    }`}></div>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                        <Settings className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white px-4 line-clamp-2">{system.title}</h3>
                    </div>
                  </div>
                </div>

                {/* System Content */}
                <div className="p-6">
                  <p className="text-white/70 leading-relaxed mb-4 text-sm line-clamp-3">
                    {system.description}
                  </p>

                  {/* Key Features */}
                  <div className="space-y-2 mb-4">
                    {system.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-white/60 text-sm">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                    {system.features.length > 3 && (
                      <div className="text-white/40 text-xs">
                        +{system.features.length - 3} more features
                      </div>
                    )}
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 bg-white/5 rounded-lg">
                      <div className="text-lg font-bold text-cyan-400">
                        {system.metrics.efficiency || system.metrics.sustainability || system.metrics.avgGrowth || system.metrics.salesGrowth}
                      </div>
                      <div className="text-white/60 text-xs">Impact</div>
                    </div>
                    <div className="text-center p-2 bg-white/5 rounded-lg">
                      <div className="text-lg font-bold text-cyan-400">
                        {system.metrics.clients || system.metrics.users || system.metrics.startups || system.metrics.devices}
                      </div>
                      <div className="text-white/60 text-xs">Scale</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {system.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {system.technologies.length > 3 && (
                      <span className="bg-white/10 text-white/60 px-2 py-1 rounded text-xs">
                        +{system.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Status and Details */}
                  <div className="flex items-center justify-between text-white/60 text-xs mb-4">
                    <span>{system.complexity}</span>
                    <span>•</span>
                    <span>{system.timeToBuild}</span>
                    <span>•</span>
                    <span>{system.teamSize}</span>
                  </div>

                  {/* Action Button */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-400 hover:text-cyan-300 font-semibold py-2 rounded-xl border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Explore System</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="ultra-glass rounded-2xl p-12"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Build Your System?
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Let's work together to create custom systems, processes, and frameworks 
              that will accelerate your startup's growth and success.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="/portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View Portfolio</span>
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SystemsPage;
