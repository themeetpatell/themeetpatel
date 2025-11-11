import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Settings, Workflow, FileText, Target, Zap, Users, TrendingUp,
  CheckCircle, ArrowRight, ExternalLink, Clock, Award, Star,
  BookOpen, Shield, Rocket, BarChart3, Cpu, Database,
  Globe, Smartphone, Monitor, Server, Cloud, Lock, Search, X
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import FollowMyJourney from '../components/FollowMyJourney';
import { systems } from '../data/systems';

const SystemsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'All Work', icon: Settings, count: systems.length },
    { id: 'systems', label: 'Systems', icon: Database, count: systems.filter(s => s.type === 'System').length },
    { id: 'processes', label: 'Processes', icon: Workflow, count: systems.filter(s => s.type === 'Process').length },
    { id: 'sops', label: 'SOPs', icon: FileText, count: systems.filter(s => s.type === 'SOP').length },
    { id: 'workflows', label: 'Workflows', icon: Zap, count: systems.filter(s => s.type === 'Workflow').length },
    { id: 'frameworks', label: 'Frameworks', icon: Target, count: systems.filter(s => s.type === 'Framework').length }
  ];

  const filteredSystems = systems.filter(system => {
    // Category filter
    let categoryMatch = false;
    if (selectedCategory === 'all') {
      categoryMatch = true;
    } else if (selectedCategory === 'systems') {
      categoryMatch = system.type === 'System';
    } else if (selectedCategory === 'processes') {
      categoryMatch = system.type === 'Process';
    } else if (selectedCategory === 'sops') {
      categoryMatch = system.type === 'SOP';
    } else if (selectedCategory === 'workflows') {
      categoryMatch = system.type === 'Workflow';
    } else if (selectedCategory === 'frameworks') {
      categoryMatch = system.type === 'Framework';
    }
    
    // Search filter
    const searchMatch = searchQuery === '' || 
      system.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      system.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      system.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    // Tag filter
    const tagMatch = selectedTags.length === 0 || 
      selectedTags.every(tag => system.tags?.includes(tag));
    
    return categoryMatch && searchMatch && tagMatch;
  });

  // Structured Data for Systems Page
  const systemsStructuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Systems Built - The Meet Patel's Business Operations & Startup Systems",
    "description": "Discover comprehensive business systems, processes, SOPs, workflows, and frameworks built by The Meet Patel across multiple ventures. From StartupOS to operational excellence systems for 10+ startups.",
    "url": "https://themeetpatel.com/systems",
    "mainEntity": {
      "@type": "Person",
      "name": "The Meet Patel",
      "alternateName": ["Meet Patel", "themeetpatel"],
      "jobTitle": "Serial Entrepreneur & Business Operations Expert",
      "description": "Serial entrepreneur and business operations expert with 8+ years experience building scalable systems and processes",
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
          "name": "Systems",
          "item": "https://themeetpatel.com/systems"
        }
      ]
    },
    "hasPart": systems.map(system => ({
      "@type": "SoftwareApplication",
      "name": system.title,
      "description": system.description,
      "applicationCategory": system.type,
      "operatingSystem": "Web",
      "creator": {
        "@type": "Person",
        "name": "The Meet Patel"
      },
      "keywords": system.technologies.join(", "),
      "dateCreated": "2024",
      "inLanguage": "en-US"
    }))
  };

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      <SEOHead 
        title="Systems Built - The Meet Patel's Business Operations & Startup Systems"
        description="Discover comprehensive business systems, processes, SOPs, workflows, and frameworks built by The Meet Patel across multiple ventures. From StartupOS to operational excellence systems for 10+ startups and business growth strategies."
        keywords="Systems The Meet Patel, Meet Patel business systems, themeetpatel processes, StartupOS systems, business operations systems, startup processes, SOPs frameworks, business workflows, operational excellence, startup scaling systems, business strategy systems, operations management, startup leadership systems, business growth systems, Dubai entrepreneur systems, serial entrepreneur processes, startup ecosystem systems, business development systems, product management systems, startup mentoring systems"
        canonical="/systems"
        ogImage="/systems-preview.jpg"
        structuredData={systemsStructuredData}
      />
      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 min-h-[75vh] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Floating Systems Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{ y: [0, -22, 0], rotate: [0, 10, 0], x: [0, 12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-24 left-[9%] w-20 h-20 bg-gradient-to-br from-purple-200/60 to-pink-200/60 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl border border-purple-300/50"
          >
            <Settings className="w-10 h-10 text-purple-600" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 28, 0], rotate: [0, -12, 0], x: [0, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-32 right-[12%] w-24 h-24 bg-gradient-to-tl from-pink-200/60 to-purple-200/60 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-2xl border border-pink-300/50"
          >
            <Workflow className="w-12 h-12 text-pink-600" />
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
            <Zap className="w-10 h-10 text-pink-700" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -16, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2.2 }}
            className="absolute top-1/2 left-[7%] w-16 h-16 bg-purple-200/55 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg"
          >
            <BarChart3 className="w-8 h-8 text-purple-600" />
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
            <Rocket className="w-7 h-7 text-purple-600" />
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
              Systems Built
            </h1>
            <p className="text-lg sm:text-2xl text-purple-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
              Comprehensive collection of systems, processes, SOPs, workflows, and frameworks 
              I've built and implemented across multiple ventures and industries.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto">
              <div className="bg-purple-50/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-200/50">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600">{systems.length}+</div>
                <div className="text-gray-600 text-xs sm:text-sm">Systems Built</div>
              </div>
              <div className="bg-purple-50/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-200/50">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600">10</div>
                <div className="text-gray-600 text-xs sm:text-sm">Business Functions</div>
              </div>
              <div className="bg-purple-50/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-200/50">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600">10+</div>
                <div className="text-gray-600 text-xs sm:text-sm">Startups Mentored</div>
              </div>
              <div className="bg-purple-50/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-200/50">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600">8+</div>
                <div className="text-gray-600 text-xs sm:text-sm">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 sm:py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">All Systems</h2>
            <p className="text-lg sm:text-xl text-purple-600 text-center max-w-3xl mx-auto mb-6 sm:mb-8 px-4 sm:px-0">
              Browse through all systems organized by category and industry
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-6 sm:mb-8">
              <div className="relative">
                <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-purple-400 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search systems, descriptions, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/80 border border-purple-200/50 rounded-xl pl-10 sm:pl-12 pr-10 sm:pr-12 py-3 sm:py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
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
                Showing {filteredSystems.length} of {systems.length} systems
                {searchQuery && (
                  <span className="text-purple-600"> for "{searchQuery}"</span>
                )}
              </p>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 sm:mb-12">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-200/50'
                        : 'bg-purple-100 text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                    <span className="whitespace-nowrap">{category.label}</span>
                    <span className="bg-white/20 text-gray-700 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full text-xs whitespace-nowrap">
                      {category.count}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Systems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {filteredSystems.map((system, index) => (
              <motion.div
                key={system.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/30 backdrop-blur-md border border-purple-200/50 rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 group"
              >
                {/* System Header */}
                <div className="relative h-48 bg-gradient-to-br from-purple-100 via-pink-100 to-purple-50">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/10 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                      {system.type}
                    </span>
                  </div>
                  {system.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-gray-900 text-sm font-medium">Featured</span>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Settings className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 px-4">{system.title}</h3>
                    </div>
                  </div>
                </div>

                {/* System Content */}
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {system.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-white/80 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">
                        {Object.values(system.metrics)[0]}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {Object.keys(system.metrics)[0]}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-white/80 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">
                        {Object.values(system.metrics)[1]}
                      </div>
                      <div className="text-gray-600 text-sm">
                        {Object.keys(system.metrics)[1]}
                      </div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {system.technologies.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {system.technologies.length > 4 && (
                      <span className="bg-purple-100 text-gray-600 px-2 py-1 rounded text-xs">
                        +{system.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Tags */}
                  {system.tags && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {system.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="bg-purple-100 text-purple-600 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                      {system.tags.length > 3 && (
                        <span className="bg-purple-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{system.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Status and Complexity */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        system.status === 'Live' ? 'bg-green-500' : 
                        system.status === 'Completed' ? 'bg-purple-500' : 'bg-yellow-500'
                      }`}></div>
                      <span className="text-gray-600 text-sm">{system.status}</span>
                    </div>
                    <div className="text-gray-600 text-sm">
                      {system.complexity} • {system.timeToBuild}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link to={`/systems/${system.slug}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 font-semibold py-3 rounded-xl border border-purple-500/30 hover:border-purple-500/50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-purple-200/50"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* No Results */}
          {filteredSystems.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">No systems found</h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or category filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedTags([]);
                }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors shadow-lg shadow-purple-200/50"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Follow My Journey Section */}
      <FollowMyJourney />
    </div>
  );
};

export default SystemsPage;
