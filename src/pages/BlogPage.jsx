import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Calendar, 
  User, 
  Clock, 
  Eye, 
  Heart,
  ArrowRight,
  BookOpen,
  Target,
  TrendingUp,
  Rocket,
  Crown,
  Star,
  Zap,
  Users,
  DollarSign,
  Lightbulb,
  Award,
  Globe,
  Code,
  Settings,
  BarChart3,
  Handshake,
  Brain,
  Trophy,
  MessageSquare,
  FileText,
  X
} from 'lucide-react';
import { 
  getPublishedArticles, 
  getFeaturedArticles, 
  getCategories 
} from '../data/blogData';
import BlogDashboard from '../components/BlogDashboard';
import BlogPublishingGuide from '../components/BlogPublishingGuide';
import FollowMyJourney from '../components/FollowMyJourney';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showDashboard, setShowDashboard] = useState(false);
  const [showGuide, setShowGuide] = useState(false);
  const location = useLocation();

  // Check for admin query parameter and open dashboard
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get('admin') === 'true' && process.env.NODE_ENV === 'development') {
      setShowDashboard(true);
      // Clean up the URL by removing the query parameter
      window.history.replaceState({}, '', '/blog');
    }
  }, [location.search]);

  // Get data from blog system
  const allArticles = getPublishedArticles();
  const featuredArticles = getFeaturedArticles();
  const categoriesData = getCategories();
  
  // Add "All" category
  const categories = [
    { name: 'All', icon: BookOpen, count: allArticles.length },
    ...categoriesData.map(cat => ({
      name: cat.name,
      icon: cat.icon === 'Rocket' ? Rocket : 
            cat.icon === 'TrendingUp' ? TrendingUp :
            cat.icon === 'FileText' ? FileText :
            cat.icon === 'Crown' ? Crown : BookOpen,
      count: cat.count
    }))
  ];


  const filteredArticles = allArticles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Hero Section */}
      <section className="py-12 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-teal-900/20 to-slate-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-center mb-8">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl sm:text-6xl md:text-8xl font-bold text-white mb-3 sm:mb-4"
              >
                My Blog
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-4 sm:mb-6"
              />
            </div>
            <p className="text-lg sm:text-2xl text-cyan-200 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
              Thoughts on entrepreneurship, personal growth, writing, and the journey of building meaningful things.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 rounded-lg p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-blue-400">{allArticles.length}</div>
                <div className="text-white/60 text-xs sm:text-sm">Articles</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-400">100K+</div>
                <div className="text-white/60 text-xs sm:text-sm">Total Reach</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">5.5K+</div>
                <div className="text-white/60 text-xs sm:text-sm">Followers</div>
              </div>
              <div className="bg-white/5 rounded-lg p-3 sm:p-4">
                <div className="text-2xl sm:text-3xl font-bold text-orange-400">6</div>
                <div className="text-white/60 text-xs sm:text-sm">Categories</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

            {/* Search and Filter */}
      <section className="py-6 sm:py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-8 sm:pl-10 pr-4 py-2.5 sm:py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                />
              </div>

            <div className="flex items-center space-x-1 sm:space-x-2 overflow-x-auto pb-2">
                {categories.map((category) => (
                  <motion.button
                    key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                      selectedCategory === category.name
                        ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-white/60 hover:text-white hover:bg-white/20'
                    }`}
                  >
                    <category.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs sm:text-sm font-medium">{category.name}</span>
                  <span className="text-xs opacity-70">({category.count})</span>
                  </motion.button>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Featured Articles</h2>
            <p className="text-white/70">My most popular and impactful pieces</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="ultra-glass rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                      <Link 
                        to={`/blog/${article.slug}`}
                        className="text-lg font-bold text-white hover:text-blue-400 transition-colors duration-200"
                      >
                        {article.title}
                      </Link>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-white/10 text-white/60 px-2 py-1 rounded text-xs">
                      {article.category}
                    </span>
                  </div>
                  
                  <Link 
                    to={`/blog/${article.slug}`}
                    className="text-base sm:text-lg font-semibold text-white mb-3 line-clamp-2 hover:text-blue-400 transition-colors duration-200 block"
                  >
                    {article.title}
                  </Link>
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between text-white/50 text-xs mb-4 space-y-2 sm:space-y-0">
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span className="hidden sm:inline">{formatDate(article.date)}</span>
                        <span className="sm:hidden">{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{article.views}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{article.likes}</span>
                      </span>
                    </div>
                  </div>

                    <Link
                      to={`/blog/${article.slug}`}
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center"
                    >
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">All Articles</h2>
            <p className="text-white/70">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="ultra-glass rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <div className="h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <Link 
                        to={`/blog/${article.slug}`}
                        className="text-sm font-bold text-white line-clamp-2 hover:text-blue-400 transition-colors duration-200"
                      >
                        {article.title}
                      </Link>
                    </div>
                  </div>
                  {article.featured && (
                    <div className="absolute top-3 left-3">
                      <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="bg-white/10 text-white/60 px-2 py-1 rounded text-xs">
                      {article.category}
                    </span>
                  </div>
                  
                  <Link 
                    to={`/blog/${article.slug}`}
                    className="text-sm font-semibold text-white mb-2 line-clamp-2 hover:text-blue-400 transition-colors duration-200 block"
                  >
                    {article.title}
                  </Link>
                  <p className="text-white/70 text-xs mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-white/50 text-xs mb-3">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(article.date)}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-white/50 text-xs">
                      <span className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{article.views}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{article.likes}</span>
                      </span>
                    </div>
                    <Link
                      to={`/blog/${article.slug}`}
                      className="text-blue-400 hover:text-blue-300 text-xs font-medium flex items-center"
                    >
                      Read
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-white/40" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-white/60">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="ultra-glass rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Stay Updated</h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Get notified when I publish new articles about entrepreneurship, personal growth, and writing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Subscribe</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Dashboard */}
      {showDashboard && (
        <BlogDashboard onClose={() => setShowDashboard(false)} />
      )}

      {/* Blog Publishing Guide */}
      {showGuide && (
        <BlogPublishingGuide onClose={() => setShowGuide(false)} />
      )}

      {/* Follow My Journey Section */}
      <FollowMyJourney />
    </div>
  );
};

export default BlogPage; 