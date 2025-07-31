import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Video, 
  Calendar, 
  Clock, 
  Users, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  Maximize2,
  Minimize2,
  Download,
  Share2,
  Heart,
  MessageSquare,
  Bookmark,
  ArrowRight,
  ArrowLeft,
  Search,
  Filter,
  BookOpen,
  Target,
  TrendingUp,
  Rocket,
  Crown,
  Star,
  Zap,
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
  CheckCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  XCircle,
  MinusCircle,
  PlusCircle,
  Edit,
  Trash2,
  Copy,
  Scissors,
  Paperclip,
  Link,
  ExternalLink,
  Move,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Home,
  Menu,
  Grid,
  List,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Gift,
  ShoppingCart,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  TrendingDown,
  ArrowUp,
  ArrowDown,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CornerUpLeft,
  CornerUpRight,
  CornerDownLeft,
  CornerDownRight,
  Eye
} from 'lucide-react';

const WebinarsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const categories = [
    { name: 'All', count: 12 },
    { name: 'Startup Strategy', count: 4 },
    { name: 'Product Development', count: 3 },
    { name: 'Growth & Marketing', count: 3 },
    { name: 'Funding & Finance', count: 2 }
  ];

  const types = [
    { name: 'All', count: 12 },
    { name: 'Live', count: 3 },
    { name: 'On-Demand', count: 6 },
    { name: 'Series', count: 3 }
  ];

  const upcomingWebinars = [
    {
      id: 1,
      title: "Building Your First MVP: A Complete Guide",
      description: "Learn the step-by-step process of building your first MVP, from idea validation to launch. Join us for this comprehensive workshop.",
      speaker: "Sarah Chen",
      speakerRole: "Head of Product",
      date: "2024-02-15T14:00:00Z",
      duration: "90 minutes",
      category: "Product Development",
      type: "Live",
      attendees: 450,
      maxAttendees: 500,
      image: "/webinars/mvp-guide.jpg",
      tags: ["MVP", "Product Development", "Workshop"],
      registrationRequired: true,
      featured: true
    },
    {
      id: 2,
      title: "Scaling from $1M to $10M ARR",
      description: "Real strategies from founders who successfully scaled their startups. Learn the frameworks and tactics that actually work.",
      speaker: "Alex Kim",
      speakerRole: "Growth Expert",
      date: "2024-02-20T15:00:00Z",
      duration: "60 minutes",
      category: "Growth & Marketing",
      type: "Live",
      attendees: 320,
      maxAttendees: 400,
      image: "/webinars/scaling-strategies.jpg",
      tags: ["Scaling", "Growth", "Revenue"],
      registrationRequired: true,
      featured: true
    },
    {
      id: 3,
      title: "Fundraising Masterclass Series",
      description: "A 3-part series covering everything from seed to Series A. Learn from successful founders and investors.",
      speaker: "Rachel Green",
      speakerRole: "Investment Advisor",
      date: "2024-02-25T16:00:00Z",
      duration: "3 sessions",
      category: "Funding & Finance",
      type: "Series",
      attendees: 280,
      maxAttendees: 300,
      image: "/webinars/fundraising-series.jpg",
      tags: ["Fundraising", "Investors", "Series"],
      registrationRequired: true,
      featured: false
    }
  ];

  const pastWebinars = [
    {
      id: 4,
      title: "Customer Development: The Foundation of Startup Success",
      description: "How to conduct effective customer interviews and validate your assumptions before building.",
      speaker: "Marcus Rodriguez",
      speakerRole: "Startup Advisor",
      date: "2024-01-10T14:00:00Z",
      duration: "75 minutes",
      category: "Startup Strategy",
      type: "On-Demand",
      views: 1240,
      likes: 89,
      image: "/webinars/customer-development.jpg",
      tags: ["Customer Development", "Validation", "Interviews"],
      videoUrl: "https://example.com/video1",
      slidesUrl: "https://example.com/slides1"
    },
    {
      id: 5,
      title: "Technical Architecture for Scalable Startups",
      description: "How to build a technical foundation that can scale from 100 to 1M users without breaking.",
      speaker: "Mike Johnson",
      speakerRole: "CTO",
      date: "2024-01-05T15:00:00Z",
      duration: "90 minutes",
      category: "Product Development",
      type: "On-Demand",
      views: 980,
      likes: 67,
      image: "/webinars/technical-architecture.jpg",
      tags: ["Architecture", "Scalability", "Technology"],
      videoUrl: "https://example.com/video2",
      slidesUrl: "https://example.com/slides2"
    },
    {
      id: 6,
      title: "Growth Hacking for Early-Stage Startups",
      description: "Practical growth hacking techniques that don't require a big budget or team.",
      speaker: "Tom Wilson",
      speakerRole: "Growth Marketing",
      date: "2023-12-20T14:00:00Z",
      duration: "60 minutes",
      category: "Growth & Marketing",
      type: "On-Demand",
      views: 1560,
      likes: 124,
      image: "/webinars/growth-hacking.jpg",
      tags: ["Growth Hacking", "Marketing", "Early Stage"],
      videoUrl: "https://example.com/video3",
      slidesUrl: "https://example.com/slides3"
    },
    {
      id: 7,
      title: "Building a High-Performance Team",
      description: "How to attract, hire, and retain top talent when competing with big tech companies.",
      speaker: "David Chen",
      speakerRole: "HR Director",
      date: "2023-12-15T15:00:00Z",
      duration: "75 minutes",
      category: "Startup Strategy",
      type: "On-Demand",
      views: 890,
      likes: 56,
      image: "/webinars/team-building.jpg",
      tags: ["Hiring", "Team Building", "Culture"],
      videoUrl: "https://example.com/video4",
      slidesUrl: "https://example.com/slides4"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const formatTimeUntil = (dateString) => {
    const now = new Date();
    const eventDate = new Date(dateString);
    const diffTime = eventDate - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 0) return 'Past';
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Tomorrow';
    return `${diffDays} days`;
  };

  const filteredUpcoming = upcomingWebinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'All' || webinar.category === selectedCategory;
    const matchesType = selectedType === 'All' || webinar.type === selectedType;
    return matchesCategory && matchesType;
  });

  const filteredPast = pastWebinars.filter(webinar => {
    const matchesCategory = selectedCategory === 'All' || webinar.category === selectedCategory;
    const matchesType = selectedType === 'All' || webinar.type === selectedType;
    return matchesCategory && matchesType;
  });

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full px-6 py-3 mb-8"
            >
              <Video className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">Live & On-Demand</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="ultra-text-gradient">StartupOS Webinars</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
              Learn from successful founders, industry experts, and our team of startup advisors. 
              Join live sessions or watch on-demand content at your own pace.
            </p>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="flex flex-wrap justify-center gap-4">
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
                    <span>{category.name}</span>
                    <span className="text-xs opacity-60">({category.count})</span>
                  </motion.button>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {types.map((type) => (
                  <motion.button
                    key={type.name}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedType(type.name)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedType === type.name
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/5 text-white/70 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{type.name}</span>
                    <span className="text-xs opacity-60">({type.count})</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Upcoming Webinars</h2>
            <p className="text-xl text-white/70">Join our live sessions and interact with experts</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {filteredUpcoming.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass rounded-xl overflow-hidden border border-white/10"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center relative">
                  <Video className="w-16 h-16 text-white/40" />
                  {webinar.featured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Featured
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Live
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-blue-400 text-sm font-medium">{webinar.category}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60 text-sm">{webinar.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{webinar.title}</h3>
                  <p className="text-white/70 mb-4 line-clamp-3">{webinar.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{webinar.speaker}</p>
                        <p className="text-white/60 text-xs">{webinar.speakerRole}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white/60 text-sm">{formatDate(webinar.date)}</p>
                      <p className="text-green-400 text-sm font-medium">{formatTimeUntil(webinar.date)}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-white/60">
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{webinar.attendees}/{webinar.maxAttendees}</span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="ultra-button flex items-center space-x-2"
                    >
                      <span>Register</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {webinar.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-white/5 text-white/60 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredUpcoming.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Video className="w-16 h-16 text-white/40 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No upcoming webinars</h3>
              <p className="text-white/60">Check back soon for new live sessions</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Past Webinars</h2>
            <p className="text-xl text-white/70">Watch on-demand content from our previous sessions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPast.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass rounded-xl overflow-hidden border border-white/10"
              >
                <div className="h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center relative">
                  <Video className="w-12 h-12 text-white/40" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </motion.button>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-purple-400 text-sm font-medium">{webinar.category}</span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/60 text-sm">{webinar.duration}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3">{webinar.title}</h3>
                  <p className="text-white/70 mb-4 line-clamp-2">{webinar.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                        <Users className="w-3 h-3 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{webinar.speaker}</p>
                        <p className="text-white/60 text-xs">{webinar.speakerRole}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-white/60 text-sm">{formatDate(webinar.date)}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-white/60">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{webinar.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{webinar.likes}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <Share2 className="w-4 h-4" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPast.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <Video className="w-16 h-16 text-white/40 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">No past webinars found</h3>
              <p className="text-white/60">Try adjusting your filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="ultra-glass rounded-3xl p-12 text-center border border-blue-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Never Miss a Webinar
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Get notified about upcoming webinars and access to exclusive content. 
              Join thousands of founders learning from the best.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ultra-button flex items-center space-x-2"
              >
                <Video className="w-5 h-5" />
                <span>Subscribe to Updates</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 text-white/80 hover:text-white transition-colors"
              >
                <span>View All Webinars</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebinarsPage; 