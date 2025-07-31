import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp,
  DollarSign,
  Users,
  Rocket,
  Target,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  Trophy,
  Zap,
  Globe,
  Building,
  Briefcase,
  Lightbulb,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Clock,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Play,
  XCircle,
  Grid,
  Users2,
  Handshake
} from 'lucide-react';

const CaseStudyPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);

  const categories = [
    { id: 'all', name: 'All Cases', icon: Grid },
    { id: 'funding', name: 'Funding Success', icon: DollarSign },
    { id: 'growth', name: 'Growth Stories', icon: TrendingUp },
    { id: 'acquisition', name: 'Acquisitions', icon: Building },
    { id: 'innovation', name: 'Innovation', icon: Lightbulb }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "DataFlow: From MVP to $50M Series B",
      company: "DataFlow",
      category: "funding",
      industry: "AI/ML",
      founder: "Alex Chen",
      location: "San Francisco, CA",
      timeline: "18 months",
      challenge: "Building an AI-powered data analytics platform with limited resources and competing against established enterprise players.",
      solution: "Leveraged StartupOS ecosystem to connect with strategic investors, technical mentors, and enterprise customers. Used AI Co-Builders to accelerate product development.",
      results: [
        { metric: "Funding Raised", value: "$50M", icon: DollarSign },
        { metric: "Customer Growth", value: "300%", icon: Users },
        { metric: "Team Size", value: "150+", icon: Users2 },
        { metric: "Valuation", value: "$500M", icon: TrendingUp }
      ],
      story: "Alex started DataFlow with just a vision and $50K in savings. Through StartupOS, he connected with mentors who helped refine his pitch and business model. The AI Co-Builders accelerated development by 6 months, and strategic introductions led to meetings with top-tier VCs.",
      videoUrl: "https://example.com/dataflow-case-study",
      image: "/api/placeholder/600/400",
      tags: ["AI/ML", "Enterprise", "Series B", "San Francisco"],
      featured: true
    },
    {
      id: 2,
      title: "EcoTech: Sustainable Innovation to Market Leader",
      company: "EcoTech",
      category: "growth",
      industry: "CleanTech",
      founder: "Sarah Kim",
      location: "Austin, TX",
      timeline: "24 months",
      challenge: "Breaking into the conservative energy sector with innovative sustainable technology while building credibility and trust.",
      solution: "Utilized StartupOS mentor network for industry expertise, connected with corporate partners through ecosystem, and leveraged fractional CXO services for strategic guidance.",
      results: [
        { metric: "Revenue Growth", value: "$10M ARR", icon: DollarSign },
        { metric: "Market Share", value: "15%", icon: Target },
        { metric: "Partnerships", value: "25+", icon: Handshake },
        { metric: "Carbon Offset", value: "1M tons", icon: Globe }
      ],
      story: "Sarah's journey from a small startup to a market leader in clean energy was accelerated by StartupOS's ecosystem. The mentor network provided crucial industry insights, while corporate partnerships opened doors to enterprise customers.",
      videoUrl: "https://example.com/ecotech-case-study",
      image: "/api/placeholder/600/400",
      tags: ["CleanTech", "Sustainability", "Enterprise", "Austin"],
      featured: true
    },
    {
      id: 3,
      title: "HealthSync: Revolutionizing Healthcare Access",
      company: "HealthSync",
      category: "innovation",
      industry: "HealthTech",
      founder: "Marcus Rodriguez",
      location: "Miami, FL",
      timeline: "36 months",
      challenge: "Navigating complex healthcare regulations while building a platform that connects patients with healthcare providers in underserved areas.",
      solution: "Leveraged StartupOS legal and compliance expertise, connected with healthcare industry mentors, and used ecosystem resources for regulatory navigation.",
      results: [
        { metric: "Patients Served", value: "500K+", icon: Users },
        { metric: "Provider Network", value: "10K+", icon: Building },
        { metric: "States Covered", value: "35", icon: MapPin },
        { metric: "Funding", value: "$75M", icon: DollarSign }
      ],
      story: "Marcus faced the daunting challenge of healthcare regulations. StartupOS connected him with healthcare industry veterans who guided him through compliance requirements and helped build strategic partnerships.",
      videoUrl: "https://example.com/healthsync-case-study",
      image: "/api/placeholder/600/400",
      tags: ["HealthTech", "Regulation", "Series C", "Miami"],
      featured: false
    },
    {
      id: 4,
      title: "FinFlow: Democratizing Financial Services",
      company: "FinFlow",
      category: "acquisition",
      industry: "FinTech",
      founder: "Priya Patel",
      location: "New York, NY",
      timeline: "30 months",
      challenge: "Building trust in fintech while competing with established banks and navigating complex financial regulations.",
      solution: "Used StartupOS ecosystem for regulatory guidance, connected with fintech mentors, and leveraged strategic partnerships for market expansion.",
      results: [
        { metric: "Acquisition Value", value: "$200M", icon: DollarSign },
        { metric: "User Base", value: "2M+", icon: Users },
        { metric: "Revenue", value: "$25M", icon: TrendingUp },
        { metric: "Team Growth", value: "200+", icon: Users2 }
      ],
      story: "Priya's fintech startup was acquired by a major financial institution for $200M. StartupOS played a crucial role in connecting her with the right mentors and advisors who helped navigate the complex acquisition process.",
      videoUrl: "https://example.com/finflow-case-study",
      image: "/api/placeholder/600/400",
      tags: ["FinTech", "Acquisition", "Regulation", "New York"],
      featured: false
    },
    {
      id: 5,
      title: "EduTech: Transforming Online Learning",
      company: "EduTech",
      category: "growth",
      industry: "EdTech",
      founder: "David Thompson",
      location: "Seattle, WA",
      timeline: "42 months",
      challenge: "Scaling an online learning platform while maintaining quality and competing with established education companies.",
      solution: "Leveraged StartupOS ecosystem for strategic partnerships, used AI Co-Builders for platform optimization, and connected with education industry mentors.",
      results: [
        { metric: "Student Growth", value: "500K+", icon: Users },
        { metric: "Course Library", value: "10K+", icon: Building },
        { metric: "Revenue", value: "$40M", icon: DollarSign },
        { metric: "Countries", value: "50+", icon: Globe }
      ],
      story: "David's education platform grew from a small startup to serving 500K+ students globally. StartupOS's ecosystem provided crucial connections with education partners and helped optimize the platform using AI technology.",
      videoUrl: "https://example.com/edutech-case-study",
      image: "/api/placeholder/600/400",
      tags: ["EdTech", "Global", "Series A", "Seattle"],
      featured: false
    }
  ];

  const filteredCases = activeCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(caseStudy => caseStudy.category === activeCategory);

  const featuredCases = caseStudies.filter(caseStudy => caseStudy.featured);

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-emerald-900/20 to-slate-900" />
        
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
            className="absolute top-20 left-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"
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
        </div>
        
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
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/20 to-green-500/20 rounded-full px-6 py-3 mb-8"
            >
              <Trophy className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-medium">Success Stories</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="ultra-text-gradient">Real Success</span>
              <br />
              <span className="text-white">Stories</span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
              Discover how founders transformed their startups into successful companies 
              with the help of StartupOS ecosystem. Learn from real challenges, solutions, and outcomes.
            </p>

            <div className="flex justify-center space-x-4 mb-12">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white'
                      : 'bg-white/10 text-white/70 hover:text-white hover:bg-white/20'
                  }`}
                >
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="ultra-glass p-6 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-emerald-400 mb-2">$500M+</div>
              <p className="text-white/70 text-sm">Total Funding Raised</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="ultra-glass p-6 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-emerald-400 mb-2">50+</div>
              <p className="text-white/70 text-sm">Successful Exits</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="ultra-glass p-6 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-emerald-400 mb-2">1M+</div>
              <p className="text-white/70 text-sm">Users Impacted</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="ultra-glass p-6 rounded-xl text-center"
            >
              <div className="text-3xl font-bold text-emerald-400 mb-2">95%</div>
              <p className="text-white/70 text-sm">Success Rate</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Featured Success Stories
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              In-depth case studies of our most successful ecosystem members.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="ultra-glass rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedCase(caseStudy)}
              >
                <div className="relative h-48 bg-gradient-to-br from-emerald-500/20 to-blue-500/20">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {caseStudy.industry}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center space-x-2 mb-4">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-emerald-400 text-sm font-medium">Featured</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2">{caseStudy.title}</h3>
                  <p className="text-emerald-400 font-semibold mb-4">{caseStudy.company}</p>
                  
                  <div className="flex items-center space-x-4 text-white/60 text-sm mb-6">
                    <span>{caseStudy.founder}</span>
                    <span>•</span>
                    <span>{caseStudy.location}</span>
                    <span>•</span>
                    <span>{caseStudy.timeline}</span>
                  </div>
                  
                  <p className="text-white/70 mb-6 line-clamp-3">{caseStudy.story}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {caseStudy.results.slice(0, 2).map((result, idx) => (
                      <div key={idx} className="text-center">
                        <div className="text-xl font-bold text-emerald-400">{result.value}</div>
                        <div className="text-white/60 text-xs">{result.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Case Studies */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              All Case Studies
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Explore detailed case studies across different industries and success types.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="ultra-glass rounded-xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedCase(caseStudy)}
              >
                <div className="relative h-40 bg-gradient-to-br from-emerald-500/20 to-blue-500/20">
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {caseStudy.industry}
                    </span>
                  </div>
                  {caseStudy.featured && (
                    <div className="absolute top-4 right-4">
                      <Star className="w-5 h-5 text-yellow-400" />
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{caseStudy.title}</h3>
                  <p className="text-emerald-400 font-semibold mb-3">{caseStudy.company}</p>
                  
                  <div className="flex items-center space-x-4 text-white/60 text-sm mb-4">
                    <span>{caseStudy.founder}</span>
                    <span>•</span>
                    <span>{caseStudy.location}</span>
                  </div>
                  
                  <p className="text-white/70 mb-4 line-clamp-3">{caseStudy.story}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="text-lg font-bold text-emerald-400">{caseStudy.results[0].value}</div>
                      <div className="text-white/60 text-xs">{caseStudy.results[0].metric}</div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/60" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCase(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="ultra-glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64 bg-gradient-to-br from-emerald-500/20 to-blue-500/20">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 left-4">
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedCase.industry}
                  </span>
                </div>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="absolute top-4 right-4 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center"
                >
                  <XCircle className="w-5 h-5 text-white" />
                </button>
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">{selectedCase.title}</h2>
                <p className="text-emerald-400 font-semibold text-xl mb-6">{selectedCase.company}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">The Challenge</h3>
                    <p className="text-white/70 leading-relaxed">{selectedCase.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-4">The Solution</h3>
                    <p className="text-white/70 leading-relaxed">{selectedCase.solution}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {selectedCase.results.map((result, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <result.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-emerald-400 mb-1">{result.value}</div>
                      <div className="text-white/60 text-sm">{result.metric}</div>
                    </div>
                  ))}
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-4">The Story</h3>
                  <p className="text-white/70 leading-relaxed">{selectedCase.story}</p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedCase.tags.map((tag, index) => (
                    <span key={index} className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-white/60 text-sm">
                    <span>{selectedCase.founder}</span>
                    <span>•</span>
                    <span>{selectedCase.location}</span>
                    <span>•</span>
                    <span>{selectedCase.timeline}</span>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="ultra-button flex items-center space-x-2"
                  >
                    <Play className="w-5 h-5" />
                    <span>Watch Full Story</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CaseStudyPage; 