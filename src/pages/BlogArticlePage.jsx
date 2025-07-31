import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar, Clock, User, Tag, Share2, Heart, MessageSquare, Bookmark,
  Twitter, Linkedin, Facebook, Copy, Eye, Star, Award, Trophy, Crown,
  Users, Target, TrendingUp, BarChart3, PieChart, LineChart, Activity,
  Globe, Search, Filter, Grid, List, Plus, Minus, X, Check, CheckCircle,
  AlertCircle, Info, HelpCircle, Settings, User as UserIcon, UserPlus,
  UserCheck, Users2, Building, Briefcase, Home, Menu, ExternalLink,
  Link as LinkIcon, Edit, Trash2, Save, Folder, File, FileText, Image,
  Video, Music, Mic, Camera, Phone, Mail, MessageCircle, Send,
  ThumbsUp, ThumbsDown, Smile, Frown, Meh, Gift, ShoppingCart,
  CreditCard, Wallet, Banknote, Coins, DollarSign, Percent,
  ChevronUp, ChevronDown, Reply, MoreHorizontal, Flag, BookOpen,
  Clock as ClockIcon, Calendar as CalendarIcon, User as UserIcon2,
  Eye as EyeIcon, Heart as HeartIcon, MessageSquare as MessageSquareIcon,
  Share2 as Share2Icon, Bookmark as BookmarkIcon, Star as StarIcon,
  TrendingUp as TrendingUpIcon, BarChart3 as BarChart3Icon,
  PieChart as PieChartIcon, LineChart as LineChartIcon,
  Activity as ActivityIcon, Globe as GlobeIcon, Search as SearchIcon,
  Filter as FilterIcon, Grid as GridIcon, List as ListIcon,
  Plus as PlusIcon, Minus as MinusIcon, X as XIcon, Check as CheckIcon,
  CheckCircle as CheckCircleIcon, AlertCircle as AlertCircleIcon,
  Info as InfoIcon, HelpCircle as HelpCircleIcon, Settings as SettingsIcon,
  UserPlus as UserPlusIcon, UserCheck as UserCheckIcon, Users2 as Users2Icon,
  Building as BuildingIcon, Briefcase as BriefcaseIcon, Home as HomeIcon,
  Menu as MenuIcon, ExternalLink as ExternalLinkIcon, LinkIcon as LinkIcon2,
  Edit as EditIcon, Trash2 as Trash2Icon, Save as SaveIcon, Folder as FolderIcon,
  File as FileIcon, FileText as FileTextIcon, Image as ImageIcon,
  Video as VideoIcon, Music as MusicIcon, Mic as MicIcon, Camera as CameraIcon,
  Phone as PhoneIcon, Mail as MailIcon, MessageCircle as MessageCircleIcon,
  Send as SendIcon, ThumbsUp as ThumbsUpIcon, ThumbsDown as ThumbsDownIcon,
  Smile as SmileIcon, Frown as FrownIcon, Meh as MehIcon, Gift as GiftIcon,
  ShoppingCart as ShoppingCartIcon, CreditCard as CreditCardIcon,
  Wallet as WalletIcon, Banknote as BanknoteIcon, Coins as CoinsIcon,
  DollarSign as DollarSignIcon, Percent as PercentIcon
} from 'lucide-react';

const BlogArticlePage = () => {
  const { slug } = useParams();
  const [article, setArticle] = useState(null);
  const [relatedArticles, setRelatedArticles] = useState([]);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const [showComments, setShowComments] = useState(true);
  const [reactions, setReactions] = useState({
    love: 234,
    helpful: 156,
    insightful: 89,
    amazing: 67
  });
  const [userReaction, setUserReaction] = useState(null);
  const [showReactions, setShowReactions] = useState(false);
  const contentRef = useRef(null);

  // Reading progress tracker
  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const element = contentRef.current;
        const totalHeight = element.scrollHeight - element.clientHeight;
        const progress = (element.scrollTop / totalHeight) * 100;
        setReadingProgress(Math.min(progress, 100));
      }
    };

    const element = contentRef.current;
    if (element) {
      element.addEventListener('scroll', handleScroll);
      return () => element.removeEventListener('scroll', handleScroll);
    }
  }, [article]);

  // Simulate fetching article data
  useEffect(() => {
    // Mock article data based on slug
    const mockArticle = {
      id: 1,
      slug: slug || 'how-to-scale-your-startup',
      title: "How to Scale Your Startup from 0 to 1000 Customers",
      excerpt: "Learn the proven strategies and frameworks that successful startups use to achieve rapid growth and scale their customer base effectively.",
      content: `
        <h2 id="foundation">The Foundation: Product-Market Fit</h2>
        <p>Before scaling, you must achieve product-market fit. This means your product solves a real problem for a large enough market that's willing to pay for your solution.</p>
        
        <h3>Key Indicators of Product-Market Fit:</h3>
        <ul>
          <li>40% of users would be "very disappointed" if your product disappeared</li>
          <li>Organic growth through word-of-mouth</li>
          <li>Users are actively using your product daily/weekly</li>
          <li>You're getting unsolicited positive feedback</li>
        </ul>

        <h2 id="acquisition">Customer Acquisition Strategies</h2>
        <p>Once you have product-market fit, focus on scalable customer acquisition channels:</p>

        <h3>1. Content Marketing</h3>
        <p>Create valuable content that attracts your target audience. This includes blog posts, videos, podcasts, and social media content.</p>

        <h3>2. SEO Optimization</h3>
        <p>Optimize your website and content for search engines to drive organic traffic.</p>

        <h3>3. Paid Advertising</h3>
        <p>Use targeted advertising on platforms like Google Ads, Facebook, and LinkedIn to reach your ideal customers.</p>

        <h3>4. Referral Programs</h3>
        <p>Encourage existing customers to refer new customers through incentives and rewards.</p>

        <h2 id="team">Building a Scalable Team</h2>
        <p>As you scale, you'll need to build a team that can handle growth:</p>

        <h3>Hiring Strategy:</h3>
        <ul>
          <li>Hire for culture fit first, skills second</li>
          <li>Create clear job descriptions and expectations</li>
          <li>Implement a structured onboarding process</li>
          <li>Focus on retention and employee development</li>
        </ul>

        <h2 id="technology">Technology and Infrastructure</h2>
        <p>Ensure your technology can handle scale:</p>

        <h3>Key Considerations:</h3>
        <ul>
          <li>Scalable cloud infrastructure</li>
          <li>Automated processes and workflows</li>
          <li>Data analytics and insights</li>
          <li>Security and compliance</li>
        </ul>

        <h2 id="retention">Customer Success and Retention</h2>
        <p>Retaining customers is more cost-effective than acquiring new ones:</p>

        <h3>Retention Strategies:</h3>
        <ul>
          <li>Proactive customer support</li>
          <li>Regular check-ins and feedback</li>
          <li>Product updates and improvements</li>
          <li>Customer education and training</li>
        </ul>

        <h2 id="metrics">Measuring Success</h2>
        <p>Track key metrics to ensure sustainable growth:</p>

        <h3>Key Metrics:</h3>
        <ul>
          <li>Customer Acquisition Cost (CAC)</li>
          <li>Customer Lifetime Value (CLV)</li>
          <li>Monthly Recurring Revenue (MRR)</li>
          <li>Churn Rate</li>
          <li>Net Promoter Score (NPS)</li>
        </ul>

        <h2>Conclusion</h2>
        <p>Scaling a startup requires a combination of the right product, team, processes, and technology. Focus on sustainable growth rather than rapid expansion, and always prioritize customer success.</p>
      `,
      author: {
        name: "Sarah Chen",
        avatar: "SC",
        title: "Growth Strategist",
        bio: "Sarah has helped over 50 startups scale from 0 to 1000+ customers. She specializes in growth marketing and customer acquisition strategies.",
        followers: 12450,
        articles: 23
      },
      publishedAt: "2024-01-15",
      readTime: "8 min read",
      category: "Growth",
      tags: ["Scaling", "Growth", "Customer Acquisition", "Startup"],
      views: 15420,
      likes: 892,
      comments: 156,
      featured: true,
      estimatedReadTime: 8
    };

    setArticle(mockArticle);

    // Mock comments
    setComments([
      {
        id: 1,
        author: "Alex Rodriguez",
        avatar: "AR",
        content: "This is exactly what I needed! The section on product-market fit really resonated with our current situation. We're at that critical juncture where we need to decide whether to scale or refine our product further.",
        timestamp: "2 hours ago",
        likes: 12,
        replies: 3,
        isAuthor: false
      },
      {
        id: 2,
        author: "Maria Garcia",
        avatar: "MG",
        content: "Great insights on customer acquisition strategies. I particularly liked the emphasis on content marketing. We've seen a 300% increase in organic traffic since implementing a content-first approach.",
        timestamp: "4 hours ago",
        likes: 8,
        replies: 1,
        isAuthor: false
      },
      {
        id: 3,
        author: "David Kim",
        avatar: "DK",
        content: "The metrics section is gold! We've been tracking CAC and CLV religiously, but adding NPS to our dashboard has given us much better insights into customer satisfaction.",
        timestamp: "6 hours ago",
        likes: 15,
        replies: 0,
        isAuthor: false
      }
    ]);

    // Mock related articles
    setRelatedArticles([
      {
        id: 2,
        slug: "fundraising-strategies",
        title: "10 Proven Fundraising Strategies for Early-Stage Startups",
        excerpt: "Discover the most effective fundraising strategies that successful startups use to secure funding.",
        author: "Alex Rodriguez",
        publishedAt: "2024-01-10",
        readTime: "6 min read",
        category: "Funding",
        image: "/api/placeholder/400/250",
        views: 8920,
        likes: 456
      },
      {
        id: 3,
        slug: "team-building",
        title: "Building a High-Performing Startup Team",
        excerpt: "Learn how to attract, hire, and retain top talent for your startup.",
        author: "Maria Garcia",
        publishedAt: "2024-01-08",
        readTime: "7 min read",
        category: "Team",
        image: "/api/placeholder/400/250",
        views: 12340,
        likes: 678
      },
      {
        id: 4,
        slug: "product-development",
        title: "Agile Product Development for Startups",
        excerpt: "Implement agile methodologies to build better products faster.",
        author: "David Kim",
        publishedAt: "2024-01-05",
        readTime: "5 min read",
        category: "Product",
        image: "/api/placeholder/400/250",
        views: 7560,
        likes: 234
      }
    ]);
  }, [slug]);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const text = article?.title;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        break;
    }
    setShowShareMenu(false);
  };

  const handleReaction = (reactionType) => {
    if (userReaction === reactionType) {
      setUserReaction(null);
      setReactions(prev => ({ ...prev, [reactionType]: prev[reactionType] - 1 }));
    } else {
      if (userReaction) {
        setReactions(prev => ({ ...prev, [userReaction]: prev[userReaction] - 1 }));
      }
      setUserReaction(reactionType);
      setReactions(prev => ({ ...prev, [reactionType]: prev[reactionType] + 1 }));
    }
    setShowReactions(false);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment = {
        id: comments.length + 1,
        author: "You",
        avatar: "YO",
        content: newComment,
        timestamp: "Just now",
        likes: 0,
        replies: 0,
        isAuthor: true
      };
      setComments([comment, ...comments]);
      setNewComment('');
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen pt-16 ultra-gradient-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-white/70">Loading article...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Reading Progress Bar */}
      <div className="fixed top-16 left-0 w-full h-1 bg-white/10 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-emerald-500 to-blue-500"
          initial={{ width: 0 }}
          animate={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-emerald-900/20 to-slate-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-white/60 text-sm mb-8">
              <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
              <span>•</span>
              <span>{article.category}</span>
            </div>

            {/* Article Header */}
            <div className="mb-8">
              <div className="flex items-center space-x-4 mb-6">
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {article.category}
                </span>
                {article.featured && (
                  <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight max-w-5xl">
                {article.title}
              </h1>

              <p className="text-xl text-white/70 mb-8 leading-relaxed max-w-4xl">
                {article.excerpt}
              </p>

              {/* Author Info */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{article.author.avatar}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{article.author.name}</h3>
                    <p className="text-white/60 text-sm">{article.author.title}</p>
                    <div className="flex items-center space-x-4 text-xs text-white/40 mt-1">
                      <span>{article.author.followers.toLocaleString()} followers</span>
                      <span>{article.author.articles} articles</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 text-white/60 text-sm">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </div>

              {/* Article Stats */}
              <div className="flex items-center justify-between py-4 border-t border-white/10">
                <div className="flex items-center space-x-6 text-white/60 text-sm">
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>{article.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4" />
                    <span>{article.likes} likes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MessageSquare className="w-4 h-4" />
                    <span>{article.comments} comments</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Reactions */}
                  <div className="relative">
                    <motion.button
                      onClick={() => setShowReactions(!showReactions)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <Smile className="w-5 h-5" />
                    </motion.button>

                    <AnimatePresence>
                      {showReactions && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: 10 }}
                          className="absolute bottom-full right-0 mb-2 ultra-glass rounded-lg p-3"
                        >
                          <div className="flex space-x-2">
                            {Object.entries(reactions).map(([reaction, count]) => (
                              <motion.button
                                key={reaction}
                                onClick={() => handleReaction(reaction)}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className={`p-2 rounded-full transition-all duration-200 ${
                                  userReaction === reaction
                                    ? 'bg-emerald-500/20 text-emerald-400'
                                    : 'bg-white/10 text-white/60 hover:text-white hover:bg-white/20'
                                }`}
                                title={`${reaction} (${count})`}
                              >
                                <span className="text-lg">
                                  {reaction === 'love' && '❤️'}
                                  {reaction === 'helpful' && '👍'}
                                  {reaction === 'insightful' && '💡'}
                                  {reaction === 'amazing' && '🔥'}
                                </span>
                              </motion.button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <motion.button
                    onClick={handleLike}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      isLiked 
                        ? 'bg-red-500/20 text-red-400' 
                        : 'bg-white/10 text-white/60 hover:text-white hover:bg-white/20'
                    }`}
                  >
                    <Heart className="w-5 h-5" />
                  </motion.button>

                  <motion.button
                    onClick={handleBookmark}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-2 rounded-lg transition-all duration-300 ${
                      isBookmarked 
                        ? 'bg-yellow-500/20 text-yellow-400' 
                        : 'bg-white/10 text-white/60 hover:text-white hover:bg-white/20'
                    }`}
                  >
                    <Bookmark className="w-5 h-5" />
                  </motion.button>

                  <div className="relative">
                    <motion.button
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 rounded-lg bg-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-all duration-300"
                    >
                      <Share2 className="w-5 h-5" />
                    </motion.button>

                    <AnimatePresence>
                      {showShareMenu && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          className="absolute right-0 top-full mt-2 ultra-glass rounded-lg p-2 min-w-[200px]"
                        >
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              onClick={() => handleShare('twitter')}
                              className="flex items-center space-x-2 p-2 rounded hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                            >
                              <Twitter className="w-4 h-4" />
                              <span className="text-sm">Twitter</span>
                            </button>
                            <button
                              onClick={() => handleShare('linkedin')}
                              className="flex items-center space-x-2 p-2 rounded hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                            >
                              <Linkedin className="w-4 h-4" />
                              <span className="text-sm">LinkedIn</span>
                            </button>
                            <button
                              onClick={() => handleShare('facebook')}
                              className="flex items-center space-x-2 p-2 rounded hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                            >
                              <Facebook className="w-4 h-4" />
                              <span className="text-sm">Facebook</span>
                            </button>
                            <button
                              onClick={() => handleShare('copy')}
                              className="flex items-center space-x-2 p-2 rounded hover:bg-white/10 text-white/70 hover:text-white transition-colors"
                            >
                              <Copy className="w-4 h-4" />
                              <span className="text-sm">Copy Link</span>
                            </button>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="xl:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="ultra-glass p-12 rounded-xl"
                ref={contentRef}
              >
                <div 
                  className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-white/80 prose-strong:text-white prose-li:text-white/80 prose-a:text-emerald-400 hover:prose-a:text-emerald-300"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="xl:col-span-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Author Card */}
                <div className="ultra-glass p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-6">About the Author</h3>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{article.author.avatar}</span>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{article.author.name}</h4>
                      <p className="text-white/60 text-sm">{article.author.title}</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm mb-6 leading-relaxed">{article.author.bio}</p>
                  <div className="flex items-center justify-between text-sm text-white/40">
                    <span>{article.author.followers.toLocaleString()} followers</span>
                    <span>{article.author.articles} articles</span>
                  </div>
                </div>

                {/* Table of Contents */}
                <div className="ultra-glass p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-6">Table of Contents</h3>
                  <ul className="space-y-3 text-sm">
                    <li><a href="#foundation" className="text-white/70 hover:text-white transition-colors block py-3 px-4 rounded-lg hover:bg-white/5">The Foundation: Product-Market Fit</a></li>
                    <li><a href="#acquisition" className="text-white/70 hover:text-white transition-colors block py-3 px-4 rounded-lg hover:bg-white/5">Customer Acquisition Strategies</a></li>
                    <li><a href="#team" className="text-white/70 hover:text-white transition-colors block py-3 px-4 rounded-lg hover:bg-white/5">Building a Scalable Team</a></li>
                    <li><a href="#technology" className="text-white/70 hover:text-white transition-colors block py-3 px-4 rounded-lg hover:bg-white/5">Technology and Infrastructure</a></li>
                    <li><a href="#retention" className="text-white/70 hover:text-white transition-colors block py-3 px-4 rounded-lg hover:bg-white/5">Customer Success and Retention</a></li>
                    <li><a href="#metrics" className="text-white/70 hover:text-white transition-colors block py-3 px-4 rounded-lg hover:bg-white/5">Measuring Success</a></li>
                  </ul>
                </div>

                {/* Tags */}
                <div className="ultra-glass p-8 rounded-xl">
                  <h3 className="text-xl font-bold text-white mb-6">Tags</h3>
                  <div className="flex flex-wrap gap-3">
                    {article.tags.map((tag) => (
                      <span key={tag} className="bg-white/10 text-white/80 px-4 py-2 rounded-full text-sm font-medium hover:bg-white/20 transition-colors cursor-pointer">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Comments Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="ultra-glass rounded-xl overflow-hidden"
          >
            {/* Comments Header */}
            <div className="p-8 border-b border-white/10">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-white">Comments ({comments.length})</h2>
                <button
                  onClick={() => setShowComments(!showComments)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  {showComments ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <AnimatePresence>
              {showComments && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-8"
                >
                  {/* Comment Form */}
                  <form onSubmit={handleCommentSubmit} className="mb-8">
                    <div className="flex space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">YO</span>
                      </div>
                      <div className="flex-1">
                        <textarea
                          value={newComment}
                          onChange={(e) => setNewComment(e.target.value)}
                          placeholder="Share your thoughts..."
                          className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                          rows={3}
                        />
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center space-x-2 text-sm text-white/60">
                            <span>Press Enter to submit</span>
                          </div>
                          <motion.button
                            type="submit"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors"
                          >
                            Post Comment
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </form>

                  {/* Comments List */}
                  <div className="space-y-6">
                    {comments.map((comment) => (
                      <motion.div
                        key={comment.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex space-x-4"
                      >
                        <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-sm">{comment.avatar}</span>
                        </div>
                        <div className="flex-1">
                          <div className="bg-white/5 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-2">
                                <span className="text-white font-semibold text-sm">{comment.author}</span>
                                {comment.isAuthor && (
                                  <span className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full text-xs">Author</span>
                                )}
                              </div>
                              <span className="text-white/40 text-xs">{comment.timestamp}</span>
                            </div>
                            <p className="text-white/80 text-sm mb-3">{comment.content}</p>
                            <div className="flex items-center space-x-4 text-xs text-white/60">
                              <button className="flex items-center space-x-1 hover:text-white transition-colors">
                                <ThumbsUp className="w-3 h-3" />
                                <span>{comment.likes}</span>
                              </button>
                              <button className="flex items-center space-x-1 hover:text-white transition-colors">
                                <Reply className="w-3 h-3" />
                                <span>Reply</span>
                              </button>
                              {comment.replies > 0 && (
                                <span>{comment.replies} replies</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Related Articles</h2>
            <p className="text-xl text-white/70">Continue your learning journey with these related articles.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedArticles.map((relatedArticle, index) => (
              <motion.div
                key={relatedArticle.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="ultra-glass rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="h-48 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 relative">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                      {relatedArticle.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-3">
                    {relatedArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>by {relatedArticle.author}</span>
                    <span>{relatedArticle.readTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between mt-4 text-xs text-white/40">
                    <span>{relatedArticle.views.toLocaleString()} views</span>
                    <span>{relatedArticle.likes} likes</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogArticlePage; 