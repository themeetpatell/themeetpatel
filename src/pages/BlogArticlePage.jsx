import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, Clock, User, Share2, Heart, MessageSquare, Bookmark,
  Twitter, Linkedin, Facebook, Copy, Eye, X, BookOpen,
  ArrowLeft, ArrowRight
} from 'lucide-react';

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

  // Sample article data
  const articles = [
    {
      id: 1,
      slug: "from-idea-to-exit-8-year-journey",
      title: "From Idea to Exit: My 8-Year Journey as a Serial Entrepreneur",
      excerpt: "Reflecting on the lessons learned from building multiple startups, the challenges faced, and the wisdom gained along the way.",
      content: `
        <p>Eight years ago, I was a fresh engineering graduate with big dreams and even bigger questions about how to turn ideas into reality. Today, as I reflect on this incredible journey, I'm amazed at how much I've learned and how many lives I've been able to impact through entrepreneurship.</p>

        <h2>The Beginning: From Student to Entrepreneur</h2>
        <p>My journey began at Nirma University, where I pursued my diploma and later B.Tech in Mechanical Engineering. While my peers were focused on traditional career paths, I was fascinated by the world of startups and innovation.</p>

        <h2>Key Lessons Learned</h2>
        <p>Looking back on these eight years, several key lessons stand out:</p>

        <h3>1. Execution Trumps Ideas</h3>
        <p>Great ideas are a dime a dozen. What separates successful entrepreneurs from dreamers is the ability to execute relentlessly.</p>

        <h3>2. People Are Everything</h3>
        <p>Building and leading teams taught me that your people are your greatest asset. Investing in people is the highest ROI investment you can make.</p>

        <h3>3. Systems and Processes Scale</h3>
        <p>One of the biggest mistakes I see entrepreneurs make is trying to scale without proper systems. Systems don't just help you scale – they help you maintain quality and consistency as you grow.</p>

        <h2>Looking Forward</h2>
        <p>As I look to the future, I'm excited about continued innovation, expanded mentorship, and building tools that help entrepreneurs succeed at every stage of their journey.</p>
      `,
      category: "Entrepreneurship",
      author: "The Meet Patel",
      date: "2024-01-15",
      readTime: "8 min read",
      views: 2500,
      likes: 89,
      featured: true,
      tags: ["entrepreneurship", "startup journey", "lessons learned"]
    }
  ];

  const relatedArticlesData = [
      {
        id: 2,
      title: "The Art of Writing Love Stories: Behind 'The Eternal Love'",
      excerpt: "Exploring the creative process behind writing romantic novels and how personal experiences shape fictional narratives.",
      category: "Writing & Books",
      date: "2024-01-10",
      readTime: "6 min read"
      },
      {
        id: 3,
      title: "Mentoring 50+ Startups: What I've Learned About Success",
      excerpt: "Key insights from mentoring dozens of entrepreneurs and the common patterns that lead to startup success.",
      category: "Leadership",
      date: "2024-01-05",
      readTime: "7 min read"
    }
  ];

  useEffect(() => {
    setIsLoading(true);
    const foundArticle = articles.find(a => a.slug === slug);
    if (foundArticle) {
      setArticle(foundArticle);
      setRelatedArticles(relatedArticlesData);
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={articleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="ultra-glass rounded-xl p-8 md:p-12"
          >
            <div 
              className="prose prose-lg prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
              style={{
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.7'
              }}
            />
          </motion.div>
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
                    to={`/blog/${relatedArticle.id}`}
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
    </div>
  );
};

export default BlogArticlePage; 
