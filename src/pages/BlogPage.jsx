import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
import SEOHead from '../components/SEOHead';
import { 
  getPublishedArticles, 
  getCategories 
} from '../data/blogData';
import FollowMyJourney from '../components/FollowMyJourney';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Get data from blog system
  const allArticles = getPublishedArticles();
  const categoriesData = getCategories();
  
  // Add "All" category
  const iconMap = {
    'Rocket': Rocket,
    'Target': Target,
    'Settings': Settings,
    'TrendingUp': TrendingUp,
    'Lightbulb': Lightbulb,
    'Users': Users,
    'Code': Code,
    'BarChart3': BarChart3,
    'Handshake': Handshake,
    'FileText': FileText,
    'Crown': Crown,
    'BookOpen': BookOpen
  };

  const categories = [
    { name: 'All', icon: BookOpen, count: allArticles.length },
    ...categoriesData.map(cat => ({
      name: cat.name,
      icon: iconMap[cat.icon] || BookOpen,
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

  // Structured Data for Blog Page
  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "The Meet Patel's Blog - Startup Insights & Business Strategy",
    "description": "Read insights on entrepreneurship, startup building, business strategy, and operations management from serial entrepreneur The Meet Patel. Expert advice on startup scaling, business growth, and startup ecosystem building.",
    "url": "https://themeetpatel.com/blogs",
    "author": {
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
    "publisher": {
      "@type": "Person",
      "name": "The Meet Patel"
    },
    "inLanguage": "en-US",
    "copyrightYear": "2024",
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
          "name": "Blog",
          "item": "https://themeetpatel.com/blogs"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      <SEOHead 
        title="Blog - The Meet Patel's Startup Insights & Business Strategy"
        description="Read insights on entrepreneurship, startup building, business strategy, and operations management from serial entrepreneur The Meet Patel. Expert advice on startup scaling, business growth, and startup ecosystem building."
        keywords="Blog The Meet Patel, Meet Patel blog, themeetpatel insights, startup blog, entrepreneurship blog, business strategy blog, startup scaling blog, business operations blog, startup ecosystem blog, business growth blog, startup mentoring blog, Dubai entrepreneur blog, serial entrepreneur insights, startup building blog, business development blog, product management blog, startup leadership blog, business strategy insights, operations management blog, startup advice blog"
        canonical="/blogs"
        ogImage="/blog-preview.jpg"
        structuredData={blogStructuredData}
      />
      {/* Hero Section */}
      <section className="pt-16 sm:pt-20 min-h-[75vh] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white" />
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Floating Blog Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 8, 0], x: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-28 left-[10%] w-20 h-20 bg-gradient-to-br from-purple-200/50 to-pink-200/50 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl border border-purple-300/40"
          >
            <BookOpen className="w-10 h-10 text-purple-600" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 24, 0], rotate: [0, -10, 0], x: [0, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            className="absolute top-36 right-[13%] w-22 h-22 bg-gradient-to-tl from-pink-200/50 to-purple-200/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl border border-pink-300/40"
          >
            <FileText className="w-11 h-11 text-pink-600" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -16, 0], rotate: [0, 10, 0], scale: [1, 1.06, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            className="absolute bottom-28 left-[16%] w-18 h-18 bg-gradient-to-br from-purple-100/60 to-pink-100/60 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-purple-200/50"
          >
            <MessageSquare className="w-9 h-9 text-purple-700" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 26, 0], rotate: [0, -12, 0], x: [0, -12, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute bottom-32 right-[11%] w-24 h-24 bg-gradient-to-tr from-pink-200/60 to-purple-200/60 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl border border-pink-300/50"
          >
            <Heart className="w-12 h-12 text-pink-700" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 right-[8%] w-16 h-16 bg-purple-200/50 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
          >
            <Star className="w-8 h-8 text-purple-600" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 18, 0], rotate: [0, -8, 0], x: [0, 10, 0] }}
            transition={{ duration: 8.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            className="absolute top-1/3 left-[8%] w-14 h-14 bg-pink-100/60 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md"
          >
            <Eye className="w-7 h-7 text-pink-600" />
          </motion.div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
                className="text-4xl sm:text-6xl md:text-8xl font-bold text-gray-900 mb-3 sm:mb-4 tracking-tight"
              >
                My Blog
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-16 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4 sm:mb-6"
              />
            </div>
            <p className="text-lg sm:text-2xl text-purple-600 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
              Thoughts on entrepreneurship, personal growth, writing, and the journey of building meaningful things.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
              <div className="bg-purple-50/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-200/50">
                <div className="text-2xl sm:text-3xl font-bold text-purple-600">{allArticles.length}</div>
                <div className="text-gray-600 text-xs sm:text-sm">Articles</div>
              </div>
              <div className="bg-purple-50/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-200/50">
                <div className="text-2xl sm:text-3xl font-bold text-pink-500">100K+</div>
                <div className="text-gray-600 text-xs sm:text-sm">Total Reach</div>
              </div>
              <div className="bg-purple-50/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-200/50">
                <div className="text-2xl sm:text-3xl font-bold text-purple-400">5.5K+</div>
                <div className="text-gray-600 text-xs sm:text-sm">Followers</div>
              </div>
              <div className="bg-purple-50/80 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-purple-200/50">
                <div className="text-2xl sm:text-3xl font-bold text-orange-400">9</div>
                <div className="text-gray-600 text-xs sm:text-sm">Categories</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

            {/* Search and Filter */}
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
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-white/80 border border-purple-200/50 rounded-xl pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm sm:text-base"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl transition-all duration-300 ${
                    selectedCategory === category.name
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-200/50'
                      : 'bg-purple-100 text-gray-600 hover:text-purple-600 hover:bg-purple-50'
                  }`}
                >
                  <category.icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
                  <span className="text-xs sm:text-sm font-medium whitespace-nowrap">{category.name}</span>
                  <span className="text-xs opacity-70 whitespace-nowrap">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* All Articles */}
      <section className="pt-8 pb-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-3">All Articles</h2>
            <p className="text-gray-600">
              {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/30 backdrop-blur-md border border-purple-200/50 rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300 mx-3 sm:mx-4"
              >
                <div className="relative">
                  <div className="h-40 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center relative overflow-hidden">
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 left-0 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
                      <div className="absolute bottom-0 right-0 w-32 h-32 bg-pink-500 rounded-full blur-3xl"></div>
                    </div>
                    <div className="text-center relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto shadow-lg">
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    {article.featured && (
                      <div className="absolute top-3 left-3 z-10">
                        <span className="bg-purple-600/20 text-purple-600 px-2 py-1 rounded-full text-xs font-medium border border-purple-300/50">
                          Featured
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="bg-white/80 backdrop-blur-sm text-purple-600 px-2 py-1 rounded-lg text-xs font-semibold shadow-sm">
                        {article.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <Link 
                    to={`/blogs/${article.slug}`}
                    className="text-sm font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-purple-600 transition-colors duration-200 block"
                  >
                    {article.title}
                  </Link>
                  <p className="text-gray-700 text-xs mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-gray-600 text-xs mb-3">
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
                    <div className="flex items-center space-x-3 text-gray-600 text-xs">
                      <span className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{article.views}</span>
                      </span>
                    </div>
                    <Link
                      to={`/blogs/${article.slug}`}
                      className="text-purple-600 hover:text-purple-700 text-xs font-medium flex items-center"
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
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/30 backdrop-blur-md border border-purple-200/50 rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Get notified when I publish new articles about entrepreneurship, personal growth, and writing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/80 border border-purple-200/50 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-purple-200/50"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Subscribe</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Follow My Journey Section */}
      <FollowMyJourney />
    </div>
  );
};

export default BlogPage; 