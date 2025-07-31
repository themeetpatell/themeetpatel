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
  Trophy
} from 'lucide-react';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    { name: 'All', icon: BookOpen, count: 24 },
    { name: 'Startup Strategy', icon: Target, count: 8 },
    { name: 'Growth & Scaling', icon: TrendingUp, count: 6 },
    { name: 'Product Development', icon: Rocket, count: 5 },
    { name: 'Leadership', icon: Crown, count: 3 },
    { name: 'Funding', icon: DollarSign, count: 2 }
  ];

  const featuredArticles = [
    {
      id: 1,
      title: "The Complete Guide to Building Your MVP in 30 Days",
      excerpt: "Learn the proven framework that helped 500+ founders build and launch their MVP in just 30 days. From idea validation to first users.",
      author: "Sarah Chen",
      authorRole: "Head of Product",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Product Development",
      image: "/blog/mvp-guide.jpg",
      views: 15420,
      likes: 892,
      featured: true,
      slug: "complete-guide-mvp-30-days"
    },
    {
      id: 2,
      title: "How to Achieve Product-Market Fit: A Founder's Journey",
      excerpt: "Real stories from founders who achieved PMF and the exact steps they took. Plus, the common mistakes to avoid.",
      author: "Marcus Rodriguez",
      authorRole: "Startup Advisor",
      date: "2024-01-12",
      readTime: "12 min read",
      category: "Startup Strategy",
      image: "/blog/pmf-journey.jpg",
      views: 12340,
      likes: 756,
      featured: true,
      slug: "achieve-product-market-fit-founders-journey"
    },
    {
      id: 3,
      title: "Scaling from $1M to $10M ARR: The Playbook",
      excerpt: "The exact strategies and frameworks used by successful startups to scale their revenue from $1M to $10M ARR.",
      author: "Alex Kim",
      authorRole: "Growth Expert",
      date: "2024-01-10",
      readTime: "15 min read",
      category: "Growth & Scaling",
      image: "/blog/scaling-playbook.jpg",
      views: 9870,
      likes: 634,
      featured: true,
      slug: "scaling-1m-to-10m-arr-playbook"
    }
  ];

  const allArticles = [
    {
      id: 4,
      title: "10 Common Mistakes That Kill Early-Stage Startups",
      excerpt: "Based on analysis of 1,000+ failed startups, here are the most common mistakes and how to avoid them.",
      author: "Lisa Park",
      authorRole: "Startup Analyst",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "Startup Strategy",
      image: "/blog/common-mistakes.jpg",
      views: 8760,
      likes: 445,
      slug: "10-common-mistakes-kill-early-stage-startups"
    },
    {
      id: 5,
      title: "Building a High-Performance Team: Hiring for Startups",
      excerpt: "How to attract, hire, and retain top talent when you're competing with big tech companies.",
      author: "David Chen",
      authorRole: "HR Director",
      date: "2024-01-05",
      readTime: "10 min read",
      category: "Leadership",
      image: "/blog/hiring-startups.jpg",
      views: 6540,
      likes: 321,
      slug: "building-high-performance-team-hiring-startups"
    },
    {
      id: 6,
      title: "The Art of Pitching: How to Raise Your First $1M",
      excerpt: "Step-by-step guide to crafting the perfect pitch deck and winning over investors.",
      author: "Rachel Green",
      authorRole: "Investment Advisor",
      date: "2024-01-03",
      readTime: "9 min read",
      category: "Funding",
      image: "/blog/pitching-guide.jpg",
      views: 5430,
      likes: 298,
      slug: "art-of-pitching-raise-first-1m"
    },
    {
      id: 7,
      title: "Customer Acquisition Strategies That Actually Work",
      excerpt: "Data-driven customer acquisition strategies that have proven successful for B2B and B2C startups.",
      author: "Tom Wilson",
      authorRole: "Growth Marketing",
      date: "2024-01-01",
      readTime: "11 min read",
      category: "Growth & Scaling",
      image: "/blog/customer-acquisition.jpg",
      views: 4320,
      likes: 267,
      slug: "customer-acquisition-strategies-actually-work"
    },
    {
      id: 8,
      title: "Technical Architecture for Scalable Startups",
      excerpt: "How to build a technical foundation that can scale from 100 to 1M users without breaking.",
      author: "Mike Johnson",
      authorRole: "CTO",
      date: "2023-12-28",
      readTime: "14 min read",
      category: "Product Development",
      image: "/blog/technical-architecture.jpg",
      views: 3980,
      likes: 234,
      slug: "technical-architecture-scalable-startups"
    },
    {
      id: 9,
      title: "The Psychology of Startup Success",
      excerpt: "Understanding the mental models and psychological frameworks that drive startup success.",
      author: "Emma Davis",
      authorRole: "Startup Psychologist",
      date: "2023-12-25",
      readTime: "7 min read",
      category: "Leadership",
      image: "/blog/psychology-success.jpg",
      views: 3650,
      likes: 198,
      slug: "psychology-startup-success"
    }
  ];

  const filteredArticles = allArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
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
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="ultra-text-gradient">StartupOS Blog</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto mb-8">
              Insights, strategies, and stories from the startup world. Learn from successful founders, 
              industry experts, and our team of startup advisors.
            </p>

            {/* Search and Filter */}
            <div className="max-w-2xl mx-auto space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-400 transition-colors"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-3">
                {categories.map((category) => (
                  <motion.button
                    key={category.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.name)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category.name
                        ? 'bg-blue-500 text-white'
                        : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className="text-xs opacity-60">({category.count})</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Articles</h2>
            <p className="text-white/70">Our most popular and insightful articles</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass rounded-xl overflow-hidden border border-white/10"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                  <BookOpen className="w-16 h-16 text-white/40" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-blue-400 text-sm font-medium">{article.category}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{article.title}</h3>
                  <p className="text-white/70 mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{article.author}</p>
                        <p className="text-white/60 text-xs">{article.authorRole}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white/60 text-sm">{formatDate(article.date)}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-white/60">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{article.likes}</span>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${article.slug}`}
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
            </h2>
            <p className="text-white/70">
              {filteredArticles.length} articles found
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass rounded-xl overflow-hidden border border-white/10"
              >
                <div className="h-40 bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center">
                  <BookOpen className="w-12 h-12 text-white/40" />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-green-400 text-sm font-medium">{article.category}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3">{article.title}</h3>
                  <p className="text-white/70 mb-4 line-clamp-2">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                        <User className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{article.author}</p>
                        <p className="text-white/60 text-xs">{article.authorRole}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white/60 text-sm">{formatDate(article.date)}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-white/60">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{article.likes}</span>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${article.slug}`}
                      className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors"
                    >
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <BookOpen className="w-16 h-16 text-white/40 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-white/60">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage; 