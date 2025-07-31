import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Star, 
  Award, 
  Target, 
  CheckCircle, 
  ArrowRight,
  Rocket,
  TrendingUp,
  Crown,
  Brain,
  Clock,
  DollarSign,
  AlertTriangle,
  Lightbulb,
  Map,
  Compass,
  Heart,
  Eye,
  Handshake,
  Search,
  MessageSquare,
  Activity,
  PieChart,
  Users2,
  Settings,
  GitBranch,
  Database,
  Cpu,
  Globe,
  Smartphone,
  Monitor,
  Palette,
  Code,
  TestTube,
  Filter,
  Calendar,
  Mail,
  Phone,
  Video,
  FileText,
  Download,
  Upload,
  RefreshCw,
  RotateCw,
  FastForward,
  Rewind,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Wifi,
  WifiOff,
  Battery,
  BatteryCharging,
  Lock,
  Unlock,
  Key,
  Fingerprint,
  ShieldCheck,
  AlertCircle,
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
  Maximize2,
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
  ArrowLeft,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CornerUpLeft,
  CornerUpRight,
  CornerDownLeft,
  CornerDownRight
} from 'lucide-react';

const StageAwareGamification = () => {
  const heroSection = {
    title: "Stage-Aware Gamification",
    subtitle: "Turn Your Startup Journey Into a Game",
    description: "Transform your startup journey into an engaging game that adapts to your stage. Earn points, unlock achievements, and compete with other founders while building your company.",
    stats: [
      { number: "3x", label: "Higher engagement", icon: Activity },
      { number: "85%", label: "Completion rate", icon: CheckCircle },
      { number: "50+", label: "Achievements", icon: Trophy },
      { number: "10K+", label: "Active players", icon: Users2 }
    ]
  };

  const gameMechanics = [
    {
      title: "Stage-Specific Challenges",
      description: "Challenges that adapt to your startup's current stage and goals.",
      features: [
        "MVP validation challenges with real user feedback",
        "PMF discovery missions with customer interviews",
        "Scaling quests with growth metrics tracking",
        "Team building adventures with hiring milestones",
        "Fundraising expeditions with investor meetings",
        "Product development sprints with feature launches"
      ],
      icon: Target,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "Progressive Achievement System",
      description: "Unlock achievements as you progress through your startup journey.",
      features: [
        "Milestone-based achievement unlocking",
        "Stage-specific badges and rewards",
        "Progress tracking and visualization",
        "Competitive leaderboards by stage",
        "Social sharing and celebration",
        "Exclusive rewards for top performers"
      ],
      icon: Trophy,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Real-Time Feedback Loops",
      description: "Instant feedback and rewards for every action and decision.",
      features: [
        "Immediate points for completed tasks",
        "Real-time progress notifications",
        "Streak bonuses for consistent progress",
        "Peer recognition and validation",
        "Expert feedback and guidance",
        "Performance analytics and insights"
      ],
      icon: Star,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const stages = [
    {
      title: "Idea to MVP",
      subtitle: "The Foundation Stage",
      description: "Build and validate your MVP with guided challenges and rewards.",
      challenges: [
        "Complete customer interviews (10 points each)",
        "Build MVP prototype (50 points)",
        "Get first 10 users (100 points)",
        "Validate core hypothesis (200 points)"
      ],
      achievements: [
        "First Steps Badge",
        "MVP Builder",
        "Customer Whisperer",
        "Validation Master"
      ],
      icon: Rocket,
      color: "from-green-400 to-emerald-500"
    },
    {
      title: "MVP to PMF",
      subtitle: "The Validation Stage",
      description: "Find product-market fit through systematic experimentation.",
      challenges: [
        "Run A/B tests (25 points each)",
        "Achieve 40% retention (150 points)",
        "Get 100 paying customers (300 points)",
        "Define clear value proposition (200 points)"
      ],
      achievements: [
        "PMF Seeker",
        "Growth Hacker",
        "Customer Champion",
        "Market Master"
      ],
      icon: Target,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "PMF to Scale",
      subtitle: "The Scaling Stage",
      description: "Scale your business while maintaining quality and culture.",
      challenges: [
        "Hire key team members (100 points each)",
        "Implement scalable processes (200 points)",
        "Achieve $1M ARR (500 points)",
        "Build leadership team (300 points)"
      ],
      achievements: [
        "Scale Master",
        "Team Builder",
        "Process Optimizer",
        "Leadership Legend"
      ],
      icon: TrendingUp,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const successStories = [
    {
      founder: "Lisa Park",
      company: "DataFlow",
      story: "Lisa was struggling to stay motivated during the MVP phase. The gamification system gave her clear milestones and rewards. She completed 15 challenges in 3 months and achieved PMF faster than expected.",
      result: "Achieved PMF in 6 months (vs 12 average)",
      icon: Trophy
    },
    {
      founder: "David Chen",
      company: "CloudSync",
      story: "David used the competitive leaderboards to benchmark his progress against other founders. The stage-specific challenges helped him focus on the right priorities at the right time.",
      result: "Raised $2M seed round in 8 months",
      icon: Star
    },
    {
      founder: "Maria Rodriguez",
      company: "EduTech",
      story: "Maria loved the achievement system. She unlocked 25 badges and used the social features to connect with other founders. The gamification kept her engaged during tough times.",
      result: "Scaled to $5M ARR in 18 months",
      icon: Award
    }
  ];

  const features = [
    {
      category: "Personalized Challenges",
      description: "Challenges that adapt to your specific startup stage and goals",
      items: [
        "AI-powered challenge generation based on your progress",
        "Stage-specific difficulty scaling and progression",
        "Custom challenge creation for your unique needs",
        "Adaptive difficulty based on your performance",
        "Real-time challenge recommendations",
        "Integration with your existing tools and workflows"
      ]
    },
    {
      category: "Social Competition",
      description: "Compete and collaborate with other founders in your stage",
      items: [
        "Stage-specific leaderboards and rankings",
        "Peer challenges and collaborative missions",
        "Founder communities and networking",
        "Mentorship matching and guidance",
        "Team challenges and group achievements",
        "Social sharing and celebration features"
      ]
    },
    {
      category: "Rewards & Recognition",
      description: "Meaningful rewards that drive real progress",
      items: [
        "Exclusive access to expert resources and tools",
        "Priority support and personalized guidance",
        "Networking opportunities with investors and mentors",
        "Product discounts and partner benefits",
        "Recognition in the startup community",
        "Real-world rewards and opportunities"
      ]
    },
    {
      category: "Progress Analytics",
      description: "Detailed insights into your startup journey and performance",
      items: [
        "Comprehensive progress tracking and visualization",
        "Performance benchmarking against peers",
        "Predictive analytics for next-stage requirements",
        "Achievement history and milestone tracking",
        "Skill development and learning analytics",
        "ROI measurement and impact assessment"
      ]
    }
  ];

  const pricing = {
    plan: "Gamification Pro",
    price: "$49/month",
    savings: "Save 17% with annual billing",
    features: [
      "Full access to all gamification features",
      "Unlimited challenges and achievements",
      "Advanced analytics and progress tracking",
      "Priority access to exclusive rewards",
      "Personalized challenge recommendations",
      "Community access and networking",
      "Expert mentorship matching",
      "14-day free trial, no credit card required"
    ]
  };

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-yellow-900/20 to-slate-900" />
        
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
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full px-6 py-3 mb-8"
            >
              <Trophy className="w-5 h-5 text-yellow-400" />
              <span className="text-yellow-400 font-medium">Stage-Aware Gamification</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="ultra-text-gradient">Turn Your Startup Journey</span>
              <br />
              <span className="text-white">Into a Game</span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
              Transform your startup journey into an engaging game that adapts to your stage. 
              Earn points, unlock achievements, and compete with other founders while building your company.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ultra-button flex items-center space-x-2 mx-auto"
            >
              <Trophy className="w-5 h-5" />
              <span>Start Playing</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {heroSection.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-6 rounded-xl text-center"
              >
                <stat.icon className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
                <div className="text-2xl font-bold text-white mb-2">{stat.number}</div>
                <p className="text-white/70 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Mechanics */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Three Core Game Mechanics
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Powerful game mechanics that make building your startup engaging and rewarding.
            </p>
          </motion.div>

          <div className="space-y-12">
            {gameMechanics.map((mechanic, index) => (
              <motion.div
                key={mechanic.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl"
              >
                <div className="flex items-start space-x-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${mechanic.color} rounded-xl flex items-center justify-center`}>
                    <mechanic.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-4">{mechanic.title}</h3>
                    <p className="text-xl text-white/70 mb-6">{mechanic.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {mechanic.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-3">
                          <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stages */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Stage-Specific Gaming
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Each startup stage has its own unique challenges, achievements, and rewards.
            </p>
          </motion.div>

          <div className="space-y-12">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl border border-white/10"
              >
                <div className="flex items-start space-x-8">
                  <div className={`w-20 h-20 bg-gradient-to-r ${stage.color} rounded-xl flex items-center justify-center`}>
                    <stage.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-2">{stage.title}</h3>
                    <p className="text-xl text-yellow-400 font-semibold mb-4">{stage.subtitle}</p>
                    <p className="text-white/70 mb-6">{stage.description}</p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-white font-semibold mb-4">Challenges</h4>
                        <div className="space-y-2">
                          {stage.challenges.map((challenge, challengeIndex) => (
                            <div key={challengeIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-white/80 text-sm">{challenge}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-4">Achievements</h4>
                        <div className="space-y-2">
                          {stage.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start space-x-3">
                              <Trophy className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                              <span className="text-white/80 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Real founders who transformed their journey with gamification.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.founder}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl"
              >
                <story.icon className="w-12 h-12 text-yellow-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-2">{story.founder}</h3>
                <p className="text-yellow-400 font-semibold mb-4">{story.company}</p>
                <p className="text-white/70 mb-4 text-sm leading-relaxed">{story.story}</p>
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-3">
                  <p className="text-yellow-400 font-semibold text-sm">{story.result}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced Features
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Powerful capabilities that make gamification truly effective.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.category}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl"
              >
                <h3 className="text-2xl font-bold text-white mb-3">{feature.category}</h3>
                <p className="text-white/70 mb-6">{feature.description}</p>
                
                <div className="space-y-3">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="ultra-glass rounded-3xl p-12 text-center border border-yellow-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {pricing.plan}
            </h2>
            <div className="text-4xl font-bold text-white mb-2">{pricing.price}</div>
            <p className="text-yellow-400 font-semibold mb-8">{pricing.savings}</p>
            
            <div className="space-y-3 mb-8">
              {pricing.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ultra-button flex items-center space-x-2 mx-auto"
            >
              <Trophy className="w-5 h-5" />
              <span>Start Free Trial</span>
            </motion.button>

            <p className="text-white/50 text-sm mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StageAwareGamification; 