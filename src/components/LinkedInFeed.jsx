import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  ExternalLink, 
  Heart, 
  MessageCircle, 
  Share2, 
  Calendar,
  User,
  ChevronRight,
  RefreshCw,
  AlertCircle
} from 'lucide-react';

const LinkedInFeed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Sample LinkedIn posts data (in a real implementation, this would come from LinkedIn API)
  const samplePosts = [
    {
      id: 1,
      content: "Excited to share that I've been recognized in Forbes 30 Under 30! This journey from a small town in Gujarat to building multiple successful startups has been incredible. Grateful for all the mentors, team members, and supporters who made this possible. #Forbes30Under30 #Entrepreneurship #StartupJourney",
      author: {
        name: "The Meet Patel",
        title: "Serial Entrepreneur & Author",
        avatar: "https://via.placeholder.com/60x60/4FC9CC/ffffff?text=MP",
        profileUrl: "https://linkedin.com/in/themeetpatel"
      },
      timestamp: "2 hours ago",
      likes: 127,
      comments: 23,
      shares: 8,
      image: "https://via.placeholder.com/600x300/2E3830/4FC9CC?text=Forbes+30+Under+30+Achievement",
      postUrl: "https://linkedin.com/posts/themeetpatel-activity-1234567890"
    },
    {
      id: 2,
      content: "Just published my latest article on 'The Future of Entrepreneurship in India'. The startup ecosystem is evolving rapidly, and I'm excited about the opportunities ahead. What trends are you most excited about? #Entrepreneurship #IndiaStartups #Innovation",
      author: {
        name: "The Meet Patel",
        title: "Serial Entrepreneur & Author",
        avatar: "https://via.placeholder.com/60x60/4FC9CC/ffffff?text=MP",
        profileUrl: "https://linkedin.com/in/themeetpatel"
      },
      timestamp: "1 day ago",
      likes: 89,
      comments: 15,
      shares: 12,
      image: "https://via.placeholder.com/600x300/2E3830/4FC9CC?text=Future+of+Entrepreneurship",
      postUrl: "https://linkedin.com/posts/themeetpatel-activity-1234567891"
    },
    {
      id: 3,
      content: "Thrilled to announce the launch of ZeroHuman! Our AI-powered platform is revolutionizing how businesses create digital humans for marketing and customer engagement. 300% increase in customer interaction with 90% cost savings. #AI #Innovation #ZeroHuman #DigitalMarketing",
      author: {
        name: "The Meet Patel",
        title: "Serial Entrepreneur & Author",
        avatar: "https://via.placeholder.com/60x60/4FC9CC/ffffff?text=MP",
        profileUrl: "https://linkedin.com/in/themeetpatel"
      },
      timestamp: "3 days ago",
      likes: 156,
      comments: 31,
      shares: 19,
      image: "https://via.placeholder.com/600x300/2E3830/4FC9CC?text=ZeroHuman+AI+Platform",
      postUrl: "https://linkedin.com/posts/themeetpatel-activity-1234567892"
    },
    {
      id: 4,
      content: "Mentoring session with 20+ entrepreneurs today. The energy and passion in the startup community never ceases to amaze me. Remember: Success isn't about having all the answers, it's about asking the right questions. #Mentorship #StartupCommunity #Leadership",
      author: {
        name: "The Meet Patel",
        title: "Serial Entrepreneur & Author",
        avatar: "https://via.placeholder.com/60x60/4FC9CC/ffffff?text=MP",
        profileUrl: "https://linkedin.com/in/themeetpatel"
      },
      timestamp: "5 days ago",
      likes: 73,
      comments: 18,
      shares: 6,
      image: "https://via.placeholder.com/600x300/2E3830/4FC9CC?text=Mentorship+Session",
      postUrl: "https://linkedin.com/posts/themeetpatel-activity-1234567893"
    }
  ];

  useEffect(() => {
    // Simulate API call
    const loadPosts = async () => {
      setIsLoading(true);
      setError(null);
      
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        setPosts(samplePosts);
      } catch (err) {
        setError('Failed to load LinkedIn posts');
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setPosts([...samplePosts]); // In real app, this would fetch fresh data
    } catch (err) {
      setError('Failed to refresh posts');
    } finally {
      setIsRefreshing(false);
    }
  };

  const formatTimestamp = (timestamp) => {
    return timestamp;
  };

  if (isLoading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="ultra-glass rounded-xl p-6 animate-pulse">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-white/10 rounded w-1/3"></div>
                <div className="h-3 bg-white/10 rounded w-1/4"></div>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <div className="h-4 bg-white/10 rounded"></div>
              <div className="h-4 bg-white/10 rounded w-3/4"></div>
            </div>
            <div className="mt-4 h-48 bg-white/10 rounded"></div>
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="ultra-glass rounded-xl p-8 text-center">
        <AlertCircle className="w-12 h-12 text-red-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-white mb-2">Unable to Load Posts</h3>
        <p className="text-white/70 mb-4">{error}</p>
        <motion.button
          onClick={handleRefresh}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        >
          Try Again
        </motion.button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Compact Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
            <Linkedin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Latest from LinkedIn</h3>
            <p className="text-cyan-300 text-sm">Follow my journey and insights</p>
          </div>
        </div>
        
        <motion.a
          href="https://linkedin.com/in/themeetpatel"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg"
        >
          <Linkedin className="w-5 h-5" />
          <span>Follow Me</span>
        </motion.a>
      </div>

      {/* Compact Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.slice(0, 4).map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="ultra-glass rounded-xl overflow-hidden hover:scale-[1.02] transition-all duration-300 group"
          >
            {/* Post Header */}
            <div className="p-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-white truncate">{post.author.name}</h4>
                  <p className="text-white/60 text-xs">{formatTimestamp(post.timestamp)}</p>
                </div>
                <motion.a
                  href={post.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-white/40 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.a>
              </div>
            </div>

            {/* Post Content */}
            <div className="p-4">
              <p className="text-white/80 text-sm leading-relaxed mb-3 line-clamp-3">{post.content}</p>
              
              {post.image && (
                <div className="mb-3">
                  <img
                    src={post.image}
                    alt="Post content"
                    className="w-full h-32 object-cover rounded-lg"
                  />
                </div>
              )}

              {/* Post Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-1 text-white/50 hover:text-red-400 transition-colors"
                  >
                    <Heart className="w-4 h-4" />
                    <span className="text-xs font-medium">{post.likes}</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-1 text-white/50 hover:text-blue-400 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-xs font-medium">{post.comments}</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center space-x-1 text-white/50 hover:text-green-400 transition-colors"
                  >
                    <Share2 className="w-4 h-4" />
                    <span className="text-xs font-medium">{post.shares}</span>
                  </motion.button>
                </div>
                
                <motion.a
                  href={post.postUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-400 hover:text-blue-300 text-xs font-medium flex items-center space-x-1 group-hover:space-x-2 transition-all duration-200"
                >
                  <span>View Post</span>
                  <ChevronRight className="w-3 h-3" />
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LinkedInFeed;
