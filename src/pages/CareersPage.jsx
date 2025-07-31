import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  Star,
  ArrowRight,
  BookOpen,
  Target,
  TrendingUp,
  Rocket,
  Crown,
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

const CareersPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const departments = [
    { name: 'All', count: 12 },
    { name: 'Engineering', count: 5 },
    { name: 'Product', count: 3 },
    { name: 'Marketing', count: 2 },
    { name: 'Sales', count: 2 }
  ];

  const locations = [
    { name: 'All', count: 12 },
    { name: 'San Francisco', count: 6 },
    { name: 'New York', count: 3 },
    { name: 'Remote', count: 3 }
  ];

  const companyValues = [
    {
      title: "Customer First",
      description: "Everything we do starts with understanding and serving our customers' needs.",
      icon: Heart,
      color: "from-red-400 to-pink-500"
    },
    {
      title: "Innovation Driven",
      description: "We constantly push boundaries and embrace new technologies and ideas.",
      icon: Lightbulb,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Team Excellence",
      description: "We believe in the power of diverse, high-performing teams working together.",
      icon: Users,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Impact Focused",
      description: "We measure success by the positive impact we create for founders worldwide.",
      icon: Target,
      color: "from-green-400 to-emerald-500"
    }
  ];

  const benefits = [
    {
      category: "Health & Wellness",
      items: [
        "Comprehensive health insurance",
        "Mental health support",
        "Fitness reimbursement",
        "Wellness programs"
      ],
      icon: Heart,
      color: "from-red-400 to-pink-500"
    },
    {
      category: "Professional Growth",
      items: [
        "Learning and development budget",
        "Conference attendance",
        "Mentorship programs",
        "Career advancement paths"
      ],
      icon: TrendingUp,
      color: "from-blue-400 to-cyan-500"
    },
    {
      category: "Work-Life Balance",
      items: [
        "Flexible work arrangements",
        "Unlimited PTO",
        "Parental leave",
        "Remote work options"
      ],
      icon: Clock,
      color: "from-green-400 to-emerald-500"
    },
    {
      category: "Compensation",
      items: [
        "Competitive salary",
        "Equity participation",
        "Performance bonuses",
        "401(k) matching"
      ],
      icon: DollarSign,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const jobListings = [
    {
      id: 1,
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "San Francisco",
      type: "Full-time",
      experience: "5+ years",
      description: "Build the next generation of startup tools and AI-powered features.",
      requirements: [
        "Expert in React, Node.js, and TypeScript",
        "Experience with AI/ML integration",
        "Strong system design skills",
        "Startup experience preferred"
      ],
      benefits: [
        "$150K - $200K base salary",
        "Equity participation",
        "Remote-friendly",
        "Health insurance"
      ]
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "New York",
      type: "Full-time",
      experience: "3+ years",
      description: "Lead product strategy and execution for our core platform features.",
      requirements: [
        "Proven track record in B2B SaaS",
        "Strong analytical skills",
        "Experience with user research",
        "Technical background preferred"
      ],
      benefits: [
        "$130K - $170K base salary",
        "Equity participation",
        "Flexible work arrangements",
        "Learning budget"
      ]
    },
    {
      id: 3,
      title: "Growth Marketing Manager",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Drive user acquisition and growth strategies across all channels.",
      requirements: [
        "Experience in B2B marketing",
        "Strong analytical skills",
        "Experience with growth hacking",
        "Startup experience preferred"
      ],
      benefits: [
        "$120K - $160K base salary",
        "Equity participation",
        "Remote work",
        "Performance bonuses"
      ]
    },
    {
      id: 4,
      title: "Enterprise Sales Executive",
      department: "Sales",
      location: "San Francisco",
      type: "Full-time",
      experience: "5+ years",
      description: "Build relationships with enterprise customers and drive revenue growth.",
      requirements: [
        "Proven enterprise sales experience",
        "Strong relationship building skills",
        "Experience in B2B SaaS",
        "Track record of exceeding quotas"
      ],
      benefits: [
        "$100K - $150K base salary",
        "Uncapped commission",
        "Equity participation",
        "Travel opportunities"
      ]
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location === selectedLocation;
    return matchesSearch && matchesDepartment && matchesLocation;
  });

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Hero Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="ultra-text-gradient">Join Our Mission</span>
            </h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
              Help us revolutionize how startups build, scale, and succeed. 
              Join a team of passionate innovators working to empower founders worldwide.
            </p>

            {/* Search and Filter */}
            <div className="max-w-4xl mx-auto space-y-6">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>

              <div className="flex flex-wrap justify-center gap-4">
                {/* Department Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="w-4 h-4 text-white/60" />
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
                  >
                    {departments.map((dept) => (
                      <option key={dept.name} value={dept.name}>
                        {dept.name} ({dept.count})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Location Filter */}
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-white/60" />
                  <select
                    value={selectedLocation}
                    onChange={(e) => setSelectedLocation(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-400"
                  >
                    {locations.map((location) => (
                      <option key={location.name} value={location.name}>
                        {location.name} ({location.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The principles that guide everything we do at StartupOS.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-6 rounded-xl text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Benefits & Perks
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              We take care of our team so you can focus on doing your best work.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.category}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center mb-6`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{benefit.category}</h3>
                <div className="space-y-3">
                  {benefit.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-white/70">
              {filteredJobs.length} positions available
            </p>
          </motion.div>

          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="ultra-glass p-8 rounded-xl border border-white/10"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <p className="text-white/70 mb-4">{job.description}</p>
                    
                    <div className="flex items-center space-x-6 mb-4">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-white/60" />
                        <span className="text-white/80 text-sm">{job.department}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-white/60" />
                        <span className="text-white/80 text-sm">{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-white/60" />
                        <span className="text-white/80 text-sm">{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-white/60" />
                        <span className="text-white/80 text-sm">{job.experience}</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-white font-semibold mb-3">Requirements</h4>
                        <div className="space-y-2">
                          {job.requirements.map((req, reqIndex) => (
                            <div key={reqIndex} className="flex items-start space-x-3">
                              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                              <span className="text-white/80 text-sm">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-white font-semibold mb-3">Benefits</h4>
                        <div className="space-y-2">
                          {job.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-start space-x-3">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-white/80 text-sm">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <Link to={`/jobs/${job.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="ultra-button flex items-center space-x-2 ml-8"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}

            {filteredJobs.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <Search className="w-16 h-16 text-white/40 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No positions found</h3>
                <p className="text-white/60">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="ultra-glass rounded-3xl p-12 text-center border border-purple-500/20"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See the Right Fit?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              We're always looking for talented individuals to join our team. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="ultra-button flex items-center space-x-2"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Resume</span>
                </motion.button>
              </Link>
              
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 text-white/80 hover:text-white transition-colors"
                >
                  <span>Contact Recruiting</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage; 