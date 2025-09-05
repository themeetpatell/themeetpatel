import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Github, Star, Eye, Code, Briefcase, 
  Award, TrendingUp, Users, Zap, Target, CheckCircle,
  Filter, Search, Calendar, Tag
} from 'lucide-react';

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: "ZeroHuman",
      description: "AI human model platform creating ultra-realistic, customizable digital humans for advertising, fashion, retail, and entertainment.",
      longDescription: "A cutting-edge AI platform that generates photorealistic digital humans with 4K resolution. Features 300% customer interaction increase, 90% cost savings, and 24/7 brand availability. Serves 50+ industries with 1000+ human models created and 100+ satisfied clients.",
      image: "/api/placeholder/600/400",
      category: "ai",
      status: "Live",
      tech: ["AI/ML", "Computer Vision", "4K Resolution", "Brand Safety", "Digital Marketing", "Enterprise AI"],
      liveUrl: "https://www.zerohuman.co",
      githubUrl: null,
      featured: true,
      metrics: {
        models: "1000+",
        industries: "50+",
        clients: "100+",
        rating: 4.9
      },
      achievements: [
        "Chief Growth Officer Role",
        "300% Customer Interaction Increase",
        "90% Cost Savings for Clients"
      ]
    },
    {
      id: 2,
      title: "MealVerse",
      description: "Innovative food technology platform revolutionizing the culinary experience through digital innovation and sustainable food solutions.",
      longDescription: "A comprehensive food tech platform that combines digital innovation with sustainable food solutions. Features include AI-powered meal planning, sustainable sourcing, and digital culinary experiences that transform how people interact with food.",
      image: "/api/placeholder/600/400",
      category: "foodtech",
      status: "Live",
      tech: ["Food Tech", "Digital Innovation", "Sustainability", "Mobile App", "Web Platform", "AI"],
      liveUrl: "https://mealverse.in",
      githubUrl: null,
      featured: true,
      metrics: {
        users: "5K+",
        sustainability: "70%",
        innovation: "High",
        rating: 4.8
      },
      achievements: [
        "Sustainable Food Solutions",
        "Digital Innovation in Food",
        "Revolutionary Culinary Experience"
      ]
    },
    {
      id: 3,
      title: "StartupOS Platform",
      description: "Comprehensive startup ecosystem platform with 50+ integrated tools and services for entrepreneurs at every stage.",
      longDescription: "A revolutionary platform that combines AI-powered tools, gamification, and ecosystem access to help startups scale from idea to exit. Features include co-builder AI, stage-aware gamification, real-time analytics, and fractional CXO services.",
      image: "/api/placeholder/600/400",
      category: "web",
      status: "Live",
      tech: ["React", "Node.js", "AWS", "MongoDB", "Framer Motion", "Tailwind CSS"],
      liveUrl: "https://www.startupos.in",
      githubUrl: "https://github.com/startupos",
      featured: true,
      metrics: {
        users: "10K+",
        revenue: "$2M+",
        rating: 4.9
      },
      achievements: [
        "Forbes 30 Under 30 Recognition",
        "50+ Startups Successfully Scaled",
        "85% Success Rate"
      ]
    },
    {
      id: 4,
      title: "Finanshels.com",
      description: "Business intelligence and financial optimization platform making businesses smarter with their money.",
      longDescription: "A comprehensive fintech solution that provides real-time financial analytics, automated reporting, and strategic insights to help businesses optimize their financial performance and make data-driven decisions.",
      image: "/api/placeholder/600/400",
      category: "fintech",
      status: "In Development",
      tech: ["React", "Python", "PostgreSQL", "Docker", "Kubernetes"],
      liveUrl: "https://finanshels.com",
      githubUrl: null,
      featured: true,
      metrics: {
        businesses: "500+",
        savings: "$5M+",
        rating: 4.8
      },
      achievements: [
        "35% Cost Reduction for Clients",
        "500+ Businesses Optimized",
        "Real-time Analytics"
      ]
    },
    {
      id: 5,
      title: "StudentHub Platform",
      description: "Jobs and opportunities platform for students and fresh graduates with comprehensive career guidance.",
      longDescription: "A multi-faceted platform connecting students with job opportunities, internships, and career guidance. Features include AI-powered job matching, skill assessment, and personalized career roadmaps.",
      image: "/api/placeholder/600/400",
      category: "education",
      status: "Acquired",
      tech: ["Vue.js", "Laravel", "MySQL", "Redis", "Elasticsearch"],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      metrics: {
        students: "50K+",
        jobs: "10K+",
        rating: 4.7
      },
      achievements: [
        "50K+ Students Helped",
        "Strategic Acquisition",
        "40% Productivity Improvement"
      ]
    },
    {
      id: 6,
      title: "TorchIt Smart Solutions",
      description: "Innovative assistive technologies and home automation systems for differently-abled people.",
      longDescription: "Developed cutting-edge smart assistive technologies including smart canes, home automation systems, and accessibility tools. Led global CSR initiatives and scaled production by 1678%.",
      image: "/api/placeholder/600/400",
      category: "iot",
      status: "Live",
      tech: ["Arduino", "Raspberry Pi", "Python", "IoT", "Mobile Apps"],
      liveUrl: "https://torchit.com",
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
      id: 7,
      title: "The Eternal Love - Novel",
      description: "A romantic novel exploring the depths of unconditional love and sacrifice.",
      longDescription: "A beautifully crafted romantic novel that captures the essence of true love that gives everything without expecting anything in return. Set against a backdrop of timeless romance, this story explores the profound nature of unconditional love.",
      image: "/api/placeholder/600/400",
      category: "writing",
      status: "Published",
      tech: ["Creative Writing", "Publishing", "Marketing"],
      liveUrl: "#",
      githubUrl: null,
      featured: false,
      metrics: {
        readers: "5K+",
        rating: 4.8,
        reviews: "200+"
      },
      achievements: [
        "Published Author",
        "5K+ Readers",
        "4.8/5 Rating"
      ]
    },
    {
      id: 8,
      title: "The Endless Devotion - Novel",
      description: "A cosmic romance novel exploring infinite devotion and soul connections.",
      longDescription: "The sequel to The Eternal Love, this cosmic romance takes readers on a journey through the universe of love. It explores the infinite nature of devotion and the profound connection between souls destined to love each other endlessly.",
      image: "/api/placeholder/600/400",
      category: "writing",
      status: "Early Access",
      tech: ["Creative Writing", "Publishing", "Marketing"],
      liveUrl: "#",
      githubUrl: null,
      featured: false,
      metrics: {
        preorders: "1K+",
        rating: 4.9,
        anticipation: "High"
      },
      achievements: [
        "Early Access Available",
        "1K+ Pre-orders",
        "High Anticipation"
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: Briefcase },
    { id: 'ai', label: 'AI & Machine Learning', icon: Zap },
    { id: 'foodtech', label: 'Food Technology', icon: Target },
    { id: 'web', label: 'Web Development', icon: Code },
    { id: 'fintech', label: 'Fintech', icon: TrendingUp },
    { id: 'education', label: 'Education', icon: Users },
    { id: 'iot', label: 'IoT & Hardware', icon: Zap },
    { id: 'writing', label: 'Writing', icon: Target }
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              My Portfolio
            </h1>
            <p className="text-2xl text-cyan-200 mb-8 max-w-3xl mx-auto">
              A collection of projects, ventures, and creative works that showcase my journey as an entrepreneur, developer, and writer.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-400">{projects.length}</div>
                <div className="text-white/60 text-sm">Books Written</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-400">8+</div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-3xl font-bold text-purple-400">$15M+</div>
                <div className="text-white/60 text-sm">Revenue Generated</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-3xl font-bold text-orange-400">300+</div>
                <div className="text-white/60 text-sm">Team members led</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 text-center">Featured Projects</h2>
            <p className="text-white/70 text-center max-w-2xl mx-auto">
              My most impactful and innovative projects that have made a real difference in people's lives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="ultra-glass rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <div className="h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                      project.status === 'In Development' ? 'bg-blue-500/20 text-blue-400' :
                      project.status === 'Acquired' ? 'bg-purple-500/20 text-purple-400' :
                      'bg-orange-500/20 text-orange-400'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-white/80 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="bg-white/10 text-white/70 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="bg-white/10 text-white/70 px-2 py-1 rounded text-xs">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.metrics).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-lg font-bold text-blue-400">{value}</div>
                        <div className="text-white/60 text-xs capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-blue-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors flex items-center justify-center"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-8 text-center">All Projects</h2>
            
            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="flex items-center space-x-2 overflow-x-auto">
                {categories.map((category) => (
                  <motion.button
                    key={category.id}
                    onClick={() => setActiveFilter(category.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                      activeFilter === category.id
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/10 text-white/60 hover:text-white hover:bg-white/20'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{category.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter + searchTerm}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="ultra-glass rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative">
                    <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      </div>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Live' ? 'bg-green-500/20 text-green-400' :
                        project.status === 'In Development' ? 'bg-blue-500/20 text-blue-400' :
                        project.status === 'Acquired' ? 'bg-purple-500/20 text-purple-400' :
                        'bg-orange-500/20 text-orange-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <p className="text-white/80 text-sm mb-3 line-clamp-2">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.tech.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="bg-white/10 text-white/60 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="bg-white/10 text-white/60 px-2 py-1 rounded text-xs">
                          +{project.tech.length - 3}
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
                          className="flex-1 bg-blue-500 text-white py-2 px-3 rounded text-xs font-medium hover:bg-blue-600 transition-colors flex items-center justify-center"
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
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white/40" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
              <p className="text-white/60">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="ultra-glass rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Interested in Working Together?</h2>
            <p className="text-white/70 mb-8 text-lg">
              I'm always excited to take on new challenges and create innovative solutions. 
              Let's discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
              >
                Get In Touch
              </motion.a>
              <motion.a
                href="/meet"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Learn More About Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
