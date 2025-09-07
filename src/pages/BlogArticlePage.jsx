import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, Clock, User, Share2, Heart, MessageSquare, Bookmark,
  Twitter, Linkedin, Facebook, Copy, Eye, X, BookOpen,
  ArrowLeft, ArrowRight, Award, TrendingUp, Users, Zap
} from 'lucide-react';
import { 
  getArticleBySlug, 
  getRelatedArticles, 
  getPublishedArticles 
} from '../data/blogData';
import FollowMyJourney from '../components/FollowMyJourney';

const BlogArticlePage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const articleRef = useRef(null);

  useEffect(() => {
    setIsLoading(true);
    const foundArticle = getArticleBySlug(slug);
    if (foundArticle) {
      setArticle(foundArticle);
      setRelatedArticles(getRelatedArticles(foundArticle));
    }
    setTimeout(() => setIsLoading(false), 1000);
  }, [slug]);

  useEffect(() => {
    const handleScroll = () => {
      if (articleRef.current) {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        setReadingProgress(scrollPercent);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = article?.title || '';
    
    let shareUrl = '';
    switch (platform) {
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
    setShowShareMenu(false);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowShareMenu(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-16 ultra-gradient-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <p className="text-white/70">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen pt-16 ultra-gradient-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <X className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Article Not Found</h2>
          <p className="text-white/70 mb-6">The article you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Reading Progress Bar */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-white/10 z-40">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Article Header */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-teal-900/20 to-slate-900" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <Link
              to="/blog"
              className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>

            {/* Category */}
            <div className="mb-4">
              <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </span>
              </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>

            {/* Excerpt */}
            <p className="text-xl text-cyan-200 mb-8 leading-relaxed">
                {article.excerpt}
              </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-cyan-300 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{article.author}</span>
                </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                <span>{formatDate(article.date)}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>{article.views.toLocaleString()} views</span>
                  </div>
                </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag, index) => (
                <span key={index} className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm border border-cyan-500/30">
                  #{tag}
                                </span>
                            ))}
                  </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
                  <motion.button
                onClick={() => setIsLiked(!isLiked)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      isLiked 
                        ? 'bg-red-500/20 text-red-400' 
                        : 'bg-white/10 text-white/60 hover:text-white hover:bg-white/20'
                    }`}
                  >
                <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                <span>{isLiked ? article.likes + 1 : article.likes}</span>
                  </motion.button>

                  <motion.button
                onClick={() => setIsBookmarked(!isBookmarked)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      isBookmarked 
                    ? 'bg-blue-500/20 text-blue-400' 
                        : 'bg-white/10 text-white/60 hover:text-white hover:bg-white/20'
                    }`}
                  >
                <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
                <span>Save</span>
                  </motion.button>

                  <div className="relative">
                    <motion.button
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-colors"
                    >
                  <Share2 className="w-4 h-4" />
                  <span>Share</span>
                    </motion.button>

                    <AnimatePresence>
                      {showShareMenu && (
                        <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-lg p-2 min-w-[200px] z-50"
                    >
                            <button
                              onClick={() => handleShare('twitter')}
                        className="w-full flex items-center space-x-3 px-3 py-2 rounded hover:bg-white/10 transition-colors text-left"
                            >
                        <Twitter className="w-4 h-4 text-blue-400" />
                        <span className="text-white">Twitter</span>
                            </button>
                            <button
                              onClick={() => handleShare('linkedin')}
                        className="w-full flex items-center space-x-3 px-3 py-2 rounded hover:bg-white/10 transition-colors text-left"
                            >
                        <Linkedin className="w-4 h-4 text-blue-400" />
                        <span className="text-white">LinkedIn</span>
                            </button>
                            <button
                              onClick={() => handleShare('facebook')}
                        className="w-full flex items-center space-x-3 px-3 py-2 rounded hover:bg-white/10 transition-colors text-left"
                            >
                        <Facebook className="w-4 h-4 text-blue-400" />
                        <span className="text-white">Facebook</span>
                            </button>
                            <button
                        onClick={handleCopyLink}
                        className="w-full flex items-center space-x-3 px-3 py-2 rounded hover:bg-white/10 transition-colors text-left"
                            >
                        <Copy className="w-4 h-4 text-white/60" />
                        <span className="text-white">Copy Link</span>
                            </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div
                ref={articleRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="ultra-glass rounded-2xl overflow-hidden"
              >
                {/* Article Header Image */}
                <div className="relative h-64 md:h-80 bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-10 h-10 text-white" />
            </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white px-4">{article.title}</h2>
                    </div>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-8 md:p-12">
                {/* Table of Contents */}
                  <div className="mb-8 p-6 bg-white/5 rounded-xl border border-white/10">
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                      <BookOpen className="w-5 h-5 mr-2 text-cyan-400" />
                      Table of Contents
                    </h3>
                    <ul className="space-y-2 text-white/70">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>Introduction</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>Key Concepts</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>Practical Applications</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>Case Studies</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span>Conclusion</span>
                      </li>
                  </ul>
                </div>

                  {/* Enhanced Article Content */}
                  <div className="prose prose-xl prose-invert max-w-none">
                    {/* Introduction */}
                    <div className="mb-8">
                      <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-sm">1</span>
                        </div>
                        Introduction
                      </h2>
                      <div 
                        className="text-white/90 leading-relaxed text-lg"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                        style={{ lineHeight: '1.8' }}
                      />
                    </div>

                    {/* Key Insights Box */}
                    <div className="my-12 p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-lg">💡</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-3">Key Insight</h3>
                          <p className="text-white/80 leading-relaxed">
                            This article explores the fundamental principles that drive success in modern entrepreneurship, 
                            backed by real-world examples and actionable strategies you can implement immediately.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Main Content Sections */}
                    <div className="space-y-12">
                      <div>
                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">2</span>
                          </div>
                          Core Concepts
                        </h2>
                        <div className="space-y-6">
                          <p className="text-white/90 leading-relaxed text-lg">
                            Understanding the foundational elements is crucial for building sustainable success. 
                            These concepts form the bedrock of effective leadership and strategic thinking.
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                              <h3 className="text-xl font-semibold text-white mb-3">Strategic Vision</h3>
                              <p className="text-white/70 leading-relaxed">
                                The ability to see beyond immediate challenges and envision long-term opportunities 
                                that others might miss.
                              </p>
                            </div>
                            <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                              <h3 className="text-xl font-semibold text-white mb-3">Execution Excellence</h3>
                              <p className="text-white/70 leading-relaxed">
                                Turning vision into reality through disciplined execution and continuous improvement.
                              </p>
                            </div>
                          </div>
                  </div>
                </div>

                      <div>
                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">3</span>
                          </div>
                          Practical Applications
                        </h2>
                        <div className="space-y-6">
                          <p className="text-white/90 leading-relaxed text-lg">
                            Theory without practice is incomplete. Here are actionable strategies you can implement 
                            starting today to accelerate your growth and success.
                          </p>
                          
                          <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl p-8 border border-green-500/20">
                            <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                              <span className="text-2xl mr-3">🚀</span>
                              Action Steps
                            </h3>
                            <ol className="space-y-4 text-white/80">
                              <li className="flex items-start space-x-3">
                                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">1</span>
                                <span>Define your core values and align all decisions with them</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">2</span>
                                <span>Create a 90-day action plan with measurable milestones</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">3</span>
                                <span>Build a support network of mentors and peers</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">4</span>
                                <span>Implement daily reflection and learning practices</span>
                              </li>
                            </ol>
            </div>
          </div>
        </div>

                      <div>
                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">4</span>
                          </div>
                          Case Studies
                        </h2>
                        <div className="space-y-6">
                          <p className="text-white/90 leading-relaxed text-lg">
                            Real-world examples demonstrate how these principles work in practice. 
                            These case studies provide concrete evidence of success.
                          </p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-xl border border-blue-500/20">
                              <h3 className="text-xl font-semibold text-white mb-3">ZeroHuman Success Story</h3>
                              <p className="text-white/70 leading-relaxed mb-4">
                                How we built an AI platform that generated 300% increase in customer interactions 
                                and 90% cost savings for clients.
                              </p>
                              <div className="flex items-center space-x-4 text-sm text-white/60">
                                <span>300% Growth</span>
                                <span>•</span>
                                <span>90% Cost Savings</span>
              </div>
            </div>

                            <div className="p-6 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-xl border border-green-500/20">
                              <h3 className="text-xl font-semibold text-white mb-3">MealVerse Innovation</h3>
                              <p className="text-white/70 leading-relaxed mb-4">
                                Revolutionizing food technology through sustainable solutions and digital innovation 
                                that transformed culinary experiences.
                              </p>
                              <div className="flex items-center space-x-4 text-sm text-white/60">
                                <span>5K+ Users</span>
                                <span>•</span>
                                <span>70% Sustainability</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-white font-bold text-sm">5</span>
                          </div>
                          Conclusion
                        </h2>
                        <div className="space-y-6">
                          <p className="text-white/90 leading-relaxed text-lg">
                            Success is not a destination but a journey of continuous learning and adaptation. 
                            The principles outlined in this article provide a framework for sustainable growth.
                          </p>
                          
                          <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl border border-cyan-500/20">
                            <h3 className="text-2xl font-bold text-white mb-4">Key Takeaways</h3>
                            <ul className="space-y-3 text-white/80">
                              <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Focus on value creation over short-term gains</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Build systems that scale with your growth</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Invest in relationships and continuous learning</span>
                              </li>
                              <li className="flex items-start space-x-3">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Measure progress, not perfection</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Social Sharing */}
                  <div className="mt-12 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                      <div className="flex items-center space-x-4">
                        <span className="text-white/60 font-medium">Share this article:</span>
                        <div className="flex items-center space-x-3">
                          <motion.button
                            onClick={() => handleShare('linkedin')}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 rounded-xl transition-all duration-200"
                            title="Share on LinkedIn"
                          >
                            <Linkedin className="w-5 h-5" />
                          </motion.button>
                          
                          <motion.button
                            onClick={() => handleShare('twitter')}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-sky-500/20 text-sky-400 hover:bg-sky-500/30 rounded-xl transition-all duration-200"
                            title="Share on Twitter"
                          >
                            <Twitter className="w-5 h-5" />
                          </motion.button>
                          
                          <motion.button
                            onClick={() => handleShare('facebook')}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 rounded-xl transition-all duration-200"
                            title="Share on Facebook"
                          >
                            <Facebook className="w-5 h-5" />
                          </motion.button>
                          
                          <motion.button
                            onClick={handleCopyLink}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-gray-500/20 text-gray-400 hover:bg-gray-500/30 rounded-xl transition-all duration-200"
                            title="Copy Link"
                          >
                            <Copy className="w-5 h-5" />
                          </motion.button>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-6 text-white/60">
                        <div className="flex items-center space-x-2">
                          <Heart className="w-4 h-4" />
                          <span>{article.likes} likes</span>
                    </div>
                        <div className="flex items-center space-x-2">
                          <Eye className="w-4 h-4" />
                          <span>{article.views.toLocaleString()} views</span>
                        </div>
                              <div className="flex items-center space-x-2">
                          <MessageSquare className="w-4 h-4" />
                          <span>12 comments</span>
                              </div>
                            </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Author Card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="ultra-glass rounded-2xl p-6"
                >
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{article.author}</h3>
                    <p className="text-cyan-300 text-sm">Entrepreneur & Writer</p>
                  </div>
                  
                  <div className="space-y-4 text-sm text-white/70">
                    <div className="flex items-center justify-between">
                      <span>Articles Written</span>
                      <span className="text-cyan-400 font-semibold">15+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Total Views</span>
                      <span className="text-cyan-400 font-semibold">15K+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Followers</span>
                      <span className="text-cyan-400 font-semibold">2.5K+</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 space-y-3">
                    <motion.a
                      href="https://linkedin.com/in/themeetpatel"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span>Follow on LinkedIn</span>
                    </motion.a>
                    
                    <motion.a
                      href="https://twitter.com/themeetpatel"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center justify-center space-x-2 bg-sky-500 text-white py-3 rounded-xl font-semibold hover:bg-sky-600 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                      <span>Follow on Twitter</span>
                    </motion.a>
                  </div>
                </motion.div>

                {/* Reading Progress */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="ultra-glass rounded-2xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">Reading Progress</h3>
                  <div className="space-y-4">
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <motion.div
                        className="h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                        style={{ width: `${readingProgress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm text-white/60">
                      <span>{Math.round(readingProgress)}% complete</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Table of Contents */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="ultra-glass rounded-2xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    <a href="#introduction" className="block text-cyan-400 hover:text-cyan-300 text-sm py-1 transition-colors">
                      1. Introduction
                    </a>
                    <a href="#concepts" className="block text-white/60 hover:text-white text-sm py-1 transition-colors">
                      2. Core Concepts
                    </a>
                    <a href="#applications" className="block text-white/60 hover:text-white text-sm py-1 transition-colors">
                      3. Practical Applications
                    </a>
                    <a href="#case-studies" className="block text-white/60 hover:text-white text-sm py-1 transition-colors">
                      4. Case Studies
                    </a>
                    <a href="#conclusion" className="block text-white/60 hover:text-white text-sm py-1 transition-colors">
                      5. Conclusion
                    </a>
                  </nav>
          </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Related Articles</h2>
            <p className="text-white/70">Continue exploring more insights and stories</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((relatedArticle, index) => (
              <motion.div
                key={relatedArticle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="ultra-glass rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                <div className="relative">
                  <div className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-sm font-bold text-white line-clamp-2">{relatedArticle.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-white/10 text-white/60 px-2 py-1 rounded text-xs">
                      {relatedArticle.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">
                    {relatedArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-white/50 text-xs mb-4">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{formatDate(relatedArticle.date)}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                    <span>{relatedArticle.readTime}</span>
                    </span>
                  </div>
                  
                  <Link
                    to={`/blog/${relatedArticle.slug}`}
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

      {/* Newsletter Signup */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="ultra-glass rounded-xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Enjoyed this article?</h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Subscribe to get notified when I publish new articles about entrepreneurship, personal growth, and writing.
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

      {/* Follow My Journey Section */}
      <FollowMyJourney />
    </div>
  );
};

export default BlogArticlePage; 
