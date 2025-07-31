import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Sparkles,
  Zap,
  Rocket,
  Lightbulb,
  Code,
  Play,
  Download,
  Upload,
  Share2,
  Heart,
  Eye,
  MessageSquare,
  Users,
  Star,
  Award,
  Trophy,
  Crown,
  Target,
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Clock,
  Calendar,
  MapPin,
  Globe,
  Search,
  Filter,
  Grid,
  List,
  Plus,
  Minus,
  X,
  Check,
  CheckCircle,
  AlertCircle,
  Info,
  HelpCircle,
  Settings,
  User,
  UserPlus,
  UserCheck,
  Users2,
  Building,
  Briefcase,
  Home,
  Menu,
  ArrowRight,
  ArrowLeft,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  ExternalLink,
  Link,
  Copy,
  Edit,
  Trash2,
  Save,
  Folder,
  File,
  FileText,
  Image,
  Video,
  Music,
  Mic,
  Camera,
  Phone,
  Mail,
  MessageCircle,
  Send,
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
  DollarSign,
  Percent
} from 'lucide-react';

const CoBuilderPlayground = () => {
  const [activeTab, setActiveTab] = useState('build');
  const [isBuilding, setIsBuilding] = useState(false);
  const [buildProgress, setBuildProgress] = useState(0);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [exploreFilter, setExploreFilter] = useState('all');
  const [showSubmissionModal, setShowSubmissionModal] = useState(false);

  const tabs = [
    { id: 'build', name: 'Build', icon: Code, color: 'from-blue-500 to-cyan-500' },
    { id: 'explore', name: 'Explore', icon: Search, color: 'from-green-500 to-emerald-500' },
    { id: 'submit', name: 'Submit', icon: Upload, color: 'from-purple-500 to-pink-500' },
    { id: 'community', name: 'Community', icon: Users, color: 'from-orange-500 to-red-500' }
  ];

  const templates = [
    {
      id: 1,
      name: "E-commerce Platform",
      description: "Complete e-commerce solution with payment processing",
      category: "Business",
      difficulty: "Intermediate",
      rating: 4.8,
      downloads: 1250,
      author: "Sarah Chen",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      preview: "A full-stack e-commerce platform with user authentication, product management, shopping cart, and payment processing."
    },
    {
      id: 2,
      name: "AI Chat Assistant",
      description: "Intelligent chatbot with natural language processing",
      category: "AI/ML",
      difficulty: "Advanced",
      rating: 4.9,
      downloads: 890,
      author: "Alex Rodriguez",
      tags: ["Python", "TensorFlow", "OpenAI", "FastAPI"],
      preview: "An AI-powered chatbot that can understand context, provide helpful responses, and integrate with various platforms."
    },
    {
      id: 3,
      name: "Task Management App",
      description: "Collaborative task management with real-time updates",
      category: "Productivity",
      difficulty: "Beginner",
      rating: 4.6,
      downloads: 2100,
      author: "Maria Garcia",
      tags: ["Vue.js", "Firebase", "Vuex", "Tailwind"],
      preview: "A collaborative task management application with real-time updates, team collaboration, and progress tracking."
    },
    {
      id: 4,
      name: "Data Analytics Dashboard",
      description: "Real-time data visualization and analytics",
      category: "Analytics",
      difficulty: "Advanced",
      rating: 4.7,
      downloads: 650,
      author: "David Kim",
      tags: ["React", "D3.js", "Python", "PostgreSQL"],
      preview: "A comprehensive analytics dashboard with real-time data visualization, interactive charts, and customizable reports."
    }
  ];

  const communityProjects = [
    {
      id: 1,
      name: "StartupOS Integration",
      description: "Seamless integration with StartupOS ecosystem",
      author: "Team StartupOS",
      likes: 342,
      comments: 89,
      downloads: 1250,
      category: "Integration",
      status: "Featured"
    },
    {
      id: 2,
      name: "AI Mentor Matching",
      description: "AI-powered mentor matching algorithm",
      author: "AI Labs",
      likes: 256,
      comments: 67,
      downloads: 890,
      category: "AI/ML",
      status: "Popular"
    },
    {
      id: 3,
      name: "Investor Pitch Generator",
      description: "Automated pitch deck generation",
      author: "PitchPerfect",
      likes: 189,
      comments: 45,
      downloads: 567,
      category: "Business",
      status: "New"
    }
  ];

  const buildSteps = [
    "Analyzing requirements...",
    "Generating architecture...",
    "Creating components...",
    "Setting up database...",
    "Implementing features...",
    "Testing functionality...",
    "Optimizing performance...",
    "Finalizing build..."
  ];

  useEffect(() => {
    if (isBuilding) {
      const interval = setInterval(() => {
        setBuildProgress(prev => {
          if (prev >= 100) {
            setIsBuilding(false);
            return 100;
          }
          return prev + 12.5;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isBuilding]);

  const startBuild = () => {
    setIsBuilding(true);
    setBuildProgress(0);
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setUserInput(template.preview);
  };

  const generateCode = () => {
    if (!userInput.trim()) return;
    
    setIsBuilding(true);
    setBuildProgress(0);
    
    // Simulate AI code generation
    setTimeout(() => {
      setGeneratedCode(`
// Generated by StartupOS Co-Builder
// ${new Date().toLocaleString()}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const GeneratedComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data based on your requirements
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      // Your API call here
      setData([]);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-6 bg-white rounded-lg shadow-lg"
    >
      <h2 className="text-2xl font-bold mb-4">Generated Component</h2>
      {loading ? (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading...</p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Your generated content here */}
          <p className="text-gray-700">Based on your input: {userInput}</p>
        </div>
      )}
    </motion.div>
  );
};

export default GeneratedComponent;
      `);
      setIsBuilding(false);
      setBuildProgress(100);
    }, 8000);
  };

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900" />
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-20 left-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1.2, 1, 1.2],
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-40 right-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"
          />
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.3, 1],
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute bottom-20 left-1/3 w-40 h-40 bg-emerald-500/10 rounded-full blur-xl"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full px-6 py-3 mb-8"
            >
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">AI-Powered Building</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="ultra-text-gradient">Co-Builder</span>
              <br />
              <span className="text-white">Playground</span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
              Build, explore, and collaborate with AI-powered tools. Create amazing solutions 
              and share them with the global startup ecosystem.
            </p>

            {/* Tab Navigation */}
            <div className="flex justify-center space-x-4 mb-12">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? `bg-gradient-to-r ${tab.color} text-white`
                      : 'bg-white/10 text-white/70 hover:text-white hover:bg-white/20'
                  }`}
                >
                  <tab.icon className="w-5 h-5" />
                  <span>{tab.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {activeTab === 'build' && (
              <motion.div
                key="build"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12"
              >
                {/* Build Interface */}
                <div className="space-y-8">
                  <div className="ultra-glass p-8 rounded-xl">
                    <h3 className="text-2xl font-bold text-white mb-6">AI Builder</h3>
                    
                    <div className="space-y-6">
                      <div>
                        <label className="block text-white/80 mb-2">Describe what you want to build:</label>
                        <textarea
                          value={userInput}
                          onChange={(e) => setUserInput(e.target.value)}
                          placeholder="Describe your project, features, requirements, and goals..."
                          className="w-full h-32 bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-white/50 resize-none focus:outline-none focus:border-purple-500"
                        />
                      </div>
                      
                      <div className="flex space-x-4">
                        <motion.button
                          onClick={generateCode}
                          disabled={isBuilding || !userInput.trim()}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="ultra-button flex items-center space-x-2"
                        >
                          <Code className="w-5 h-5" />
                          <span>Generate Code</span>
                        </motion.button>
                        
                        <motion.button
                          onClick={() => setUserInput('')}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                        >
                          Clear
                        </motion.button>
                      </div>
                    </div>
                  </div>

                  {/* Build Progress */}
                  {isBuilding && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="ultra-glass p-8 rounded-xl"
                    >
                      <h3 className="text-xl font-bold text-white mb-4">Building Your Solution</h3>
                      <div className="space-y-4">
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                            style={{ width: `${buildProgress}%` }}
                          />
                        </div>
                        <p className="text-white/70 text-sm">
                          {buildSteps[Math.floor(buildProgress / 12.5)]}
                        </p>
                        <p className="text-purple-400 font-semibold">{Math.round(buildProgress)}%</p>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Templates */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white mb-6">Quick Start Templates</h3>
                  <div className="space-y-4">
                    {templates.map((template) => (
                      <motion.div
                        key={template.id}
                        whileHover={{ y: -2, scale: 1.02 }}
                        className="ultra-glass p-6 rounded-xl cursor-pointer"
                        onClick={() => handleTemplateSelect(template)}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="text-lg font-bold text-white">{template.name}</h4>
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-white/70 text-sm">{template.rating}</span>
                          </div>
                        </div>
                        <p className="text-white/70 text-sm mb-3">{template.description}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-purple-400 text-sm font-medium">{template.category}</span>
                          <span className="text-white/60 text-sm">{template.difficulty}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'explore' && (
              <motion.div
                key="explore"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <Search className="w-6 h-6 text-white/70" />
                    <input
                      type="text"
                      placeholder="Search projects, templates, and solutions..."
                      className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  
                  <div className="flex space-x-4">
                    {['all', 'business', 'ai', 'productivity', 'analytics'].map((filter) => (
                      <button
                        key={filter}
                        onClick={() => setExploreFilter(filter)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                          exploreFilter === filter
                            ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                            : 'bg-white/10 text-white/70 hover:text-white hover:bg-white/20'
                        }`}
                      >
                        {filter.charAt(0).toUpperCase() + filter.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {templates.map((template) => (
                    <motion.div
                      key={template.id}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="ultra-glass rounded-xl overflow-hidden cursor-pointer"
                    >
                      <div className="h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative">
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="absolute top-4 left-4">
                          <span className="bg-purple-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                            {template.category}
                          </span>
                        </div>
                        <div className="absolute bottom-4 right-4">
                          <Eye className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-lg font-bold text-white mb-2">{template.name}</h3>
                        <p className="text-white/70 text-sm mb-4">{template.description}</p>
                        
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span className="text-white/70 text-sm">{template.rating}</span>
                          </div>
                          <span className="text-white/60 text-sm">{template.downloads} downloads</span>
                        </div>
                        
                        <div className="flex flex-wrap gap-2 mb-4">
                          {template.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="bg-white/10 text-white/80 px-2 py-1 rounded text-xs">
                              {tag}
                            </span>
                          ))}
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-white/60 text-sm">by {template.author}</span>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="ultra-button flex items-center space-x-2"
                          >
                            <Download className="w-4 h-4" />
                            <span>Use</span>
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'submit' && (
              <motion.div
                key="submit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="ultra-glass p-8 rounded-xl">
                  <h3 className="text-2xl font-bold text-white mb-6">Submit Your Creation</h3>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-white/80 mb-2">Project Name</label>
                      <input
                        type="text"
                        placeholder="Enter your project name..."
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/80 mb-2">Description</label>
                      <textarea
                        placeholder="Describe your project, features, and how it helps the startup ecosystem..."
                        className="w-full h-32 bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-white/50 resize-none focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-white/80 mb-2">Category</label>
                        <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500">
                          <option>Business</option>
                          <option>AI/ML</option>
                          <option>Productivity</option>
                          <option>Analytics</option>
                          <option>Integration</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-white/80 mb-2">Difficulty Level</label>
                        <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-purple-500">
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-white/80 mb-2">Tags (comma separated)</label>
                      <input
                        type="text"
                        placeholder="React, Node.js, AI, etc..."
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-white/80 mb-2">GitHub Repository (optional)</label>
                      <input
                        type="url"
                        placeholder="https://github.com/username/repo"
                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-purple-500"
                      />
                    </div>
                    
                    <motion.button
                      onClick={() => setShowSubmissionModal(true)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="ultra-button flex items-center space-x-2"
                    >
                      <Upload className="w-5 h-5" />
                      <span>Submit to Community</span>
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'community' && (
              <motion.div
                key="community"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-6">Community Projects</h3>
                  <p className="text-white/70">Discover amazing solutions created by the StartupOS community.</p>
                </div>

                <div className="space-y-6">
                  {communityProjects.map((project) => (
                    <motion.div
                      key={project.id}
                      whileHover={{ y: -2, scale: 1.01 }}
                      className="ultra-glass p-6 rounded-xl"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">{project.name}</h4>
                          <p className="text-white/70 mb-3">{project.description}</p>
                          <div className="flex items-center space-x-4 text-sm text-white/60">
                            <span>by {project.author}</span>
                            <span>•</span>
                            <span>{project.category}</span>
                            <span>•</span>
                            <span>{project.downloads} downloads</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            project.status === 'Featured' ? 'bg-yellow-500/20 text-yellow-400' :
                            project.status === 'Popular' ? 'bg-green-500/20 text-green-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <div className="flex items-center space-x-2">
                            <Heart className="w-5 h-5 text-red-400" />
                            <span className="text-white/70">{project.likes}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <MessageSquare className="w-5 h-5 text-blue-400" />
                            <span className="text-white/70">{project.comments}</span>
                          </div>
                        </div>
                        
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="ultra-button flex items-center space-x-2"
                        >
                          <Download className="w-4 h-4" />
                          <span>Download</span>
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Generated Code Display */}
      {generatedCode && (
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="ultra-glass p-8 rounded-xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Generated Code</h3>
                <div className="flex space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <Copy className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                  >
                    <Download className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
              
              <pre className="bg-black/50 rounded-lg p-6 overflow-x-auto">
                <code className="text-green-400 text-sm">{generatedCode}</code>
              </pre>
            </motion.div>
          </div>
        </section>
      )}

      {/* Submission Success Modal */}
      <AnimatePresence>
        {showSubmissionModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowSubmissionModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="ultra-glass rounded-2xl p-8 max-w-md w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Submission Successful!</h3>
              <p className="text-white/70 mb-6">
                Your project has been submitted to the community. It will be reviewed and published within 24 hours.
              </p>
              <motion.button
                onClick={() => setShowSubmissionModal(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ultra-button"
              >
                Continue Building
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CoBuilderPlayground; 