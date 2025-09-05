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
  FileText
} from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', icon: BookOpen, count: 15 },
    { name: 'Entrepreneurship', icon: Rocket, count: 6 },
    { name: 'Personal Growth', icon: TrendingUp, count: 4 },
    { name: 'Writing & Books', icon: FileText, count: 3 },
    { name: 'Leadership', icon: Crown, count: 2 }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "From Idea to Exit: My 8-Year Journey as a Serial Entrepreneur",
      excerpt: "Reflecting on the lessons learned from building multiple startups, the challenges faced, and the wisdom gained along the way.",
      category: "Entrepreneurship",
      author: "The Meet Patel",
      date: "2024-01-15",
      readTime: "8 min read",
      views: "2.5K",
      likes: 89,
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["entrepreneurship", "startup journey", "lessons learned"]
    },
    {
      id: 2,
      title: "The Art of Writing Love Stories: Behind 'The Eternal Love'",
      excerpt: "Exploring the creative process behind writing romantic novels and how personal experiences shape fictional narratives.",
      category: "Writing & Books",
      author: "The Meet Patel",
      date: "2024-01-10",
      readTime: "6 min read",
      views: "1.8K",
      likes: 67,
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["writing", "creative process", "romance novels"]
    },
    {
      id: 3,
      title: "Mentoring 50+ Startups: What I've Learned About Success",
      excerpt: "Key insights from mentoring dozens of entrepreneurs and the common patterns that lead to startup success.",
      category: "Leadership",
      author: "The Meet Patel",
      date: "2024-01-05",
      readTime: "7 min read",
      views: "3.2K",
      likes: 124,
      image: "/api/placeholder/600/400",
      featured: true,
      tags: ["mentorship", "startup success", "leadership"]
    }
  ];

  const allArticles = [
    ...featuredArticles,
    {
      id: 4,
      title: "Building Finanshels.com: Making Businesses Smarter with Money",
      excerpt: "The story behind building a business intelligence platform and the challenges of financial optimization.",
      category: "Entrepreneurship",
      author: "The Meet Patel",
      date: "2023-12-28",
      readTime: "5 min read",
      views: "1.2K",
      likes: 45,
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["fintech", "business intelligence", "startup building"]
    },
    {
      id: 5,
      title: "The Power of Authentic Storytelling in Business",
      excerpt: "How authentic narratives can transform your brand and connect with your audience on a deeper level.",
      category: "Personal Growth",
      author: "The Meet Patel",
      date: "2023-12-20",
      readTime: "4 min read",
      views: "980",
      likes: 38,
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["storytelling", "branding", "authenticity"]
    },
    {
      id: 6,
      title: "Lessons from Scaling StudentHub to 50K+ Users",
      excerpt: "The operational challenges and solutions when scaling a platform from hundreds to tens of thousands of users.",
      category: "Entrepreneurship",
      author: "The Meet Patel",
      date: "2023-12-15",
      readTime: "6 min read",
      views: "1.5K",
      likes: 72,
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["scaling", "operations", "user growth"]
    },
    {
      id: 7,
      title: "Why I Write Romance Novels as a Tech Entrepreneur",
      excerpt: "The unexpected connection between building startups and writing love stories, and how creativity fuels both.",
      category: "Writing & Books",
      author: "The Meet Patel",
      date: "2023-12-10",
      readTime: "5 min read",
      views: "1.1K",
      likes: 56,
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["writing", "creativity", "entrepreneurship"]
    },
    {
      id: 8,
      title: "The Forbes 30 Under 30 Experience: What It Really Means",
      excerpt: "Reflecting on the recognition, the responsibility, and the journey that led to this milestone.",
      category: "Personal Growth",
      author: "The Meet Patel",
      date: "2023-12-05",
      readTime: "4 min read",
      views: "2.1K",
      likes: 95,
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["achievement", "recognition", "personal growth"]
    },
    {
      id: 9,
      title: "Building StartupOS: Creating an Ecosystem for Entrepreneurs",
      excerpt: "The vision behind StartupOS and how we're building tools to help startups succeed at every stage.",
      category: "Entrepreneurship",
      author: "The Meet Patel",
      date: "2023-11-28",
      readTime: "7 min read",
      views: "1.8K",
      likes: 83,
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["startup ecosystem", "platform building", "entrepreneurship"]
    },
    {
      id: 10,
      title: "The Endless Devotion: Writing a Sequel to Success",
      excerpt: "The challenges and joys of writing a sequel, and how reader feedback shaped the second book.",
      category: "Writing & Books",
      author: "The Meet Patel",
      date: "2023-11-20",
      readTime: "5 min read",
      views: "890",
      likes: 42,
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["writing", "sequel", "reader feedback"]
    },
    {
      id: 11,
      title: "Leading 250+ Employees: Lessons in Team Management",
      excerpt: "Key insights from managing large teams across multiple startups and the evolution of leadership style.",
      category: "Leadership",
      author: "The Meet Patel",
      date: "2023-11-15",
      readTime: "6 min read",
      views: "1.3K",
      likes: 61,
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["leadership", "team management", "scaling teams"]
    },
    {
      id: 12,
      title: "From TorchIt to Global Impact: Scaling Assistive Technology",
      excerpt: "The journey of building and scaling assistive technology solutions that reached 100K+ users worldwide.",
      category: "Entrepreneurship",
      author: "The Meet Patel",
      date: "2023-11-10",
      readTime: "5 min read",
      views: "1.0K",
      likes: 48,
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["assistive technology", "social impact", "global scaling"]
    },
    {
      id: 13,
      title: "The Art of Balancing Multiple Ventures",
      excerpt: "How to manage multiple projects simultaneously while maintaining quality and personal well-being.",
      category: "Personal Growth",
      author: "The Meet Patel",
      date: "2023-11-05",
      readTime: "4 min read",
      views: "1.2K",
      likes: 54,
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["work-life balance", "productivity", "multiple ventures"]
    },
    {
      id: 14,
      title: "Why I Mentor: The Joy of Helping Others Succeed",
      excerpt: "The personal fulfillment that comes from mentoring and the impact it has on both mentor and mentee.",
      category: "Leadership",
      author: "The Meet Patel",
      date: "2023-10-30",
      readTime: "5 min read",
      views: "1.4K",
      likes: 67,
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["mentorship", "giving back", "personal fulfillment"]
    },
    {
      id: 15,
      title: "The Future of Entrepreneurship in India",
      excerpt: "Thoughts on the evolving startup ecosystem in India and what the next decade holds for entrepreneurs.",
      category: "Entrepreneurship",
      author: "The Meet Patel",
      date: "2023-10-25",
      readTime: "6 min read",
      views: "1.6K",
      likes: 78,
      image: "/api/placeholder/600/400",
      featured: false,
      tags: ["India startup ecosystem", "future trends", "entrepreneurship"]
    }
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
              My Blog
            </h1>
            <p className="text-2xl text-cyan-200 mb-8 max-w-3xl mx-auto">
              Thoughts on entrepreneurship, personal growth, writing, and the journey of building meaningful things.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-3xl font-bold text-blue-400">{allArticles.length}</div>
                <div className="text-white/60 text-sm">Articles</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-3xl font-bold text-emerald-400">15K+</div>
                <div className="text-white/60 text-sm">Total Views</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-3xl font-bold text-purple-400">800+</div>
                <div className="text-white/60 text-sm">Likes</div>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <div className="text-3xl font-bold text-orange-400">5</div>
                <div className="text-white/60 text-sm">Categories</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            
            <div className="flex items-center space-x-2 overflow-x-auto">
              {categories.map((category) => (
                <motion.button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                    selectedCategory === category.name
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-white/60 hover:text-white hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.name}</span>
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

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                      <h3 className="text-lg font-bold text-white">{article.title}</h3>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-white/10 text-white/60 px-2 py-1 rounded text-xs">
                      {article.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-white/50 text-xs mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(article.date)}</span>
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
                    to={`/blog/${article.id}`}
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      <h3 className="text-sm font-bold text-white line-clamp-2">{article.title}</h3>
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
                  
                  <h3 className="text-sm font-semibold text-white mb-2 line-clamp-2">
                    {article.title}
                  </h3>
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
                      to={`/blog/${article.id}`}
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
    </div>
  );
};

export default BlogPage;