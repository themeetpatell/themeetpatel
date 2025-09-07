import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Settings, Workflow, FileText, Target, Zap, Users, TrendingUp,
  CheckCircle, ArrowRight, ExternalLink, Clock, Award, Star,
  BookOpen, Shield, Rocket, BarChart3, Cpu, Database,
  Globe, Smartphone, Monitor, Server, Cloud, Lock, Search, X
} from 'lucide-react';
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
              Comprehensive collection of systems, processes, SOPs, workflows, and frameworks 
              I've built and implemented across multiple ventures and industries.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{systems.length}+</div>
                <div className="text-cyan-300 text-sm">Systems Built</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">10</div>
                <div className="text-cyan-300 text-sm">Business Functions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">10+</div>
                <div className="text-cyan-300 text-sm">Startups Mentored</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">8+</div>
                <div className="text-cyan-300 text-sm">Years Experience</div>
              </div>
            </div>
          </motion.div>
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

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search systems, descriptions, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-xl pl-12 pr-12 py-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Results Counter */}
            <div className="text-center mb-8">
              <p className="text-white/60">
                Showing {filteredSystems.length} of {systems.length} systems
                {searchQuery && (
                  <span className="text-cyan-400"> for "{searchQuery}"</span>
                )}
              </p>
            </div>

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
                    <span className="bg-white/20 text-white/80 px-2 py-1 rounded-full text-xs">
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
                <div className="relative h-48 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                      {system.type}
                    </span>
                  </div>
                  {system.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-white text-sm font-medium">Featured</span>
                      </div>
                    </div>
                  )}
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
                      <div className="text-2xl font-bold text-cyan-400">
                        {Object.values(system.metrics)[0]}
                      </div>
                      <div className="text-white/60 text-sm">
                        {Object.keys(system.metrics)[0]}
                      </div>
                    </div>
                    <div className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-2xl font-bold text-cyan-400">
                        {Object.values(system.metrics)[1]}
                      </div>
                      <div className="text-white/60 text-sm">
                        {Object.keys(system.metrics)[1]}
                      </div>
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

                  {/* Tags */}
                  {system.tags && (
                    <div className="flex flex-wrap gap-2 mb-6">
                      {system.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="bg-green-500/20 text-green-300 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                      {system.tags.length > 3 && (
                        <span className="bg-white/10 text-white/60 px-2 py-1 rounded text-xs">
                          +{system.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  )}

                  {/* Status and Complexity */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className={`w-2 h-2 rounded-full ${
                        system.status === 'Live' ? 'bg-green-400' : 
                        system.status === 'Completed' ? 'bg-blue-400' : 'bg-yellow-400'
                      }`}></div>
                      <span className="text-white/70 text-sm">{system.status}</span>
                    </div>
                    <div className="text-white/60 text-sm">
                      {system.complexity} • {system.timeToBuild}
                    </div>
                  </div>

                  {/* Action Button */}
                  <Link to={`/systems/${system.slug}`}>
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

          {/* No Results */}
          {filteredSystems.length === 0 && (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-white/40" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">No systems found</h3>
              <p className="text-white/60 mb-6">
                Try adjusting your search terms or category filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedTags([]);
                }}
                className="bg-cyan-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-cyan-500 transition-colors"
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
