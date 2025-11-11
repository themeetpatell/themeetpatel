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
import SEOHead from '../components/SEOHead';

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
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <p className="text-gray-600">Loading article...</p>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <>
        <SEOHead 
          title="Article Not Found"
          description="The article you're looking for doesn't exist on The Meet Patel's blog."
          canonical={`/blogs/${slug}`}
        />
        <div className="min-h-screen pt-16 ultra-gradient-bg flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <X className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Article Not Found</h2>
            <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
            <Link
              to="/blogs"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Back to Blog
            </Link>
          </div>
        </div>
      </>
    );
  }

  // Generate structured data for article
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": article.title,
    "description": article.excerpt,
    "image": `https://themeetpatel.com/blogs/${article.slug}.jpg`,
    "author": {
      "@type": "Person",
      "name": article.author,
      "url": "https://themeetpatel.com/about"
    },
    "publisher": {
      "@type": "Person",
      "name": "The Meet Patel",
      "url": "https://themeetpatel.com"
    },
    "datePublished": article.date,
    "dateModified": article.date,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://themeetpatel.com/blogs/${article.slug}`
    },
    "keywords": article.tags.join(', '),
    "articleSection": article.category,
    "wordCount": article.content.split(' ').length,
    "timeRequired": article.readTime
  };

  return (
    <>
      <SEOHead 
        title={article.title}
        description={article.excerpt}
        keywords={`${article.tags.join(', ')}, ${article.category}, The Meet Patel blog, ${article.author}`}
        canonical={`/blogs/${article.slug}`}
        ogImage={`/blogs/${article.slug}.jpg`}
        ogType="article"
        articleAuthor={article.author}
        articlePublishedTime={article.date}
        articleModifiedTime={article.date}
        structuredData={structuredData}
      />
      <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Reading Progress Bar */}
      <div className="fixed top-16 left-0 right-0 h-1 bg-purple-100 z-40">
        <motion.div
          className="h-full bg-gradient-to-r from-purple-500 to-pink-500"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Article Header */}
      <section className="pt-28 sm:pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-pink-50 to-white" />
        
        {/* Animated Background Blobs */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-20 right-10 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Floating Article Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ y: [0, -18, 0], rotate: [0, 8, 0], x: [0, 8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-24 left-[10%] w-18 h-18 bg-gradient-to-br from-purple-200/50 to-pink-200/50 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl border border-purple-300/40"
          >
            <BookOpen className="w-9 h-9 text-purple-600" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 22, 0], rotate: [0, -10, 0], x: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
            className="absolute top-32 right-[12%] w-20 h-20 bg-gradient-to-tl from-pink-200/50 to-purple-200/50 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl border border-pink-300/40"
          >
            <Heart className="w-10 h-10 text-pink-600" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -14, 0], rotate: [0, 6, 0], scale: [1, 1.05, 1] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="absolute bottom-24 left-[14%] w-16 h-16 bg-gradient-to-br from-purple-100/60 to-pink-100/60 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg border border-purple-200/50"
          >
            <Share2 className="w-8 h-8 text-purple-700" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -8, 0], x: [0, -10, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.3 }}
            className="absolute bottom-28 right-[10%] w-18 h-18 bg-gradient-to-tr from-pink-200/60 to-purple-200/60 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl border border-pink-300/50"
          >
            <MessageSquare className="w-9 h-9 text-pink-700" />
          </motion.div>
          <motion.div
            animate={{ y: [0, -16, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}
            className="absolute top-1/2 right-[8%] w-14 h-14 bg-purple-200/50 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg"
          >
            <Bookmark className="w-7 h-7 text-purple-600" />
          </motion.div>
          <motion.div
            animate={{ y: [0, 18, 0], rotate: [0, -6, 0], x: [0, 6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute top-1/3 left-[8%] w-14 h-14 bg-pink-100/60 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-md"
          >
            <Eye className="w-7 h-7 text-pink-600" />
          </motion.div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <Link
              to="/blogs"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Blog</span>
            </Link>

            {/* Category */}
            <div className="mb-4">
              <span className="bg-purple-600/20 text-purple-500 px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </span>
              </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {article.title}
              </h1>

            {/* Excerpt */}
            <p className="text-xl text-purple-600 mb-8 leading-relaxed">
                {article.excerpt}
              </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center gap-6 text-purple-500 mb-8">
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
                <span key={index} className="bg-purple-600/20 text-purple-500 px-3 py-1 rounded-full text-sm border border-purple-600/30">
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
                        : 'bg-purple-100 text-gray-600 hover:text-white hover:bg-white/20'
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
                    ? 'bg-purple-600/20 text-purple-500' 
                        : 'bg-purple-100 text-gray-600 hover:text-white hover:bg-white/20'
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
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-purple-100 text-gray-600 hover:text-white hover:bg-white/20 transition-colors"
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
                      className="absolute top-full left-0 mt-2 bg-white/95 backdrop-blur-xl border border-purple-200/50 rounded-lg p-2 min-w-[200px] z-50"
                    >
                            <button
                              onClick={() => handleShare('twitter')}
                        className="w-full flex items-center space-x-3 px-3 py-2 rounded hover:bg-purple-50 transition-colors text-left"
                            >
                        <Twitter className="w-4 h-4 text-purple-500" />
                        <span className="text-white">Twitter</span>
                            </button>
                            <button
                              onClick={() => handleShare('linkedin')}
                        className="w-full flex items-center space-x-3 px-3 py-2 rounded hover:bg-purple-50 transition-colors text-left"
                            >
                        <Linkedin className="w-4 h-4 text-purple-500" />
                        <span className="text-white">LinkedIn</span>
                            </button>
                            <button
                              onClick={() => handleShare('facebook')}
                        className="w-full flex items-center space-x-3 px-3 py-2 rounded hover:bg-purple-50 transition-colors text-left"
                            >
                        <Facebook className="w-4 h-4 text-purple-500" />
                        <span className="text-white">Facebook</span>
                            </button>
                            <button
                        onClick={handleCopyLink}
                        className="w-full flex items-center space-x-3 px-3 py-2 rounded hover:bg-purple-50 transition-colors text-left"
                            >
                        <Copy className="w-4 h-4 text-gray-600" />
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
                      <div className="w-20 h-20 bg-purple-100 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                        <BookOpen className="w-10 h-10 text-white" />
            </div>
                      <h2 className="text-2xl md:text-3xl font-bold text-white px-4">{article.title}</h2>
                    </div>
                  </div>
                </div>

                {/* Article Body */}
                <div className="p-8 md:p-12 lg:p-16">

                  {/* Article Content */}
                  <div className="prose prose-xl prose-invert max-w-none">
                    <div 
                      className="text-white/90 leading-relaxed text-lg"
                      dangerouslySetInnerHTML={{ __html: article.content }}
                      style={{ 
                        lineHeight: '1.8',
                        marginTop: '2rem',
                        marginBottom: '2rem'
                      }}
                    />
                  </div>

                  {/* Enhanced Social Sharing */}
                  <div className="mt-12 pt-8 border-t border-purple-200/50">
                    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                      <div className="flex items-center space-x-4">
                        <span className="text-gray-600 font-medium">Share this article:</span>
                        <div className="flex items-center space-x-3">
                          <motion.button
                            onClick={() => handleShare('linkedin')}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-blue-600/20 text-purple-500 hover:bg-purple-700/30 rounded-xl transition-all duration-200"
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
                            className="p-3 bg-purple-600/20 text-purple-500 hover:bg-purple-600/30 rounded-xl transition-all duration-200"
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
                      
                      <div className="flex items-center space-x-6 text-gray-600">
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
                    <p className="text-purple-500 text-sm">Entrepreneur & Writer</p>
                  </div>
                  
                  <div className="space-y-4 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <span>Articles Written</span>
                      <span className="text-purple-600 font-semibold">{getPublishedArticles().length}+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Total Reach</span>
                      <span className="text-purple-600 font-semibold">100K+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Followers</span>
                      <span className="text-purple-600 font-semibold">5.5K+</span>
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
                    <div className="w-full bg-purple-100 rounded-full h-2">
                      <motion.div
                        className="h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                        style={{ width: `${readingProgress}%` }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{Math.round(readingProgress)}% complete</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </motion.div>

                {/* Article Stats */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="ultra-glass rounded-2xl p-6"
                >
                  <h3 className="text-lg font-semibold text-white mb-4">Article Stats</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <span>Reading Time</span>
                      <span className="text-purple-600 font-semibold">{article.readTime}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Views</span>
                      <span className="text-purple-600 font-semibold">{article.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Likes</span>
                      <span className="text-purple-600 font-semibold">{article.likes}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Category</span>
                      <span className="text-purple-600 font-semibold">{article.category}</span>
                    </div>
                  </div>
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
            <p className="text-gray-600">Continue exploring more insights and stories</p>
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
                  <div className="h-48 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-sm font-bold text-white line-clamp-2">{relatedArticle.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="bg-purple-100 text-gray-600 px-2 py-1 rounded text-xs">
                      {relatedArticle.category}
                    </span>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-3 line-clamp-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
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
                    to={`/blogs/${relatedArticle.slug}`}
                    className="text-purple-500 hover:text-blue-300 text-sm font-medium flex items-center"
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
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Subscribe to get notified when I publish new articles about entrepreneurship, personal growth, and writing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/80 border border-purple-200/50 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center justify-center space-x-2"
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
    </>
  );
};

export default BlogArticlePage; 
