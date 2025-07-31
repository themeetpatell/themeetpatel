import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import { 
  Calendar,
  Clock,
  MapPin,
  DollarSign,
  Users,
  Building,
  Briefcase,
  Star,
  Award,
  Trophy,
  Crown,
  Globe,
  Mail,
  Phone,
  ExternalLink,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  AlertCircle,
  Info,
  HelpCircle,
  Settings,
  User,
  UserPlus,
  UserCheck,
  Users2,
  Home,
  Menu,
  Search,
  Filter,
  Grid,
  List,
  Plus,
  Minus,
  X,
  Check,
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
  Percent,
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Target,
  Zap,
  Lightbulb,
  Code,
  Rocket,
  Sparkles,
  Heart,
  Eye,
  Share2,
  Bookmark,
  Download,
  Upload,
  RefreshCw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Lock,
  Unlock,
  Shield,
  ShieldCheck,
  Copy,
  Scissors,
  Paperclip,
  Link as LinkIcon
} from 'lucide-react';

const JobDetailPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    resume: null,
    coverLetter: '',
    portfolio: '',
    linkedin: '',
    github: '',
    whyJoin: '',
    salaryExpectation: '',
    startDate: '',
    remotePreference: 'hybrid'
  });

  // Simulate fetching job data
  useEffect(() => {
    const mockJob = {
      id: id || 'senior-frontend-developer',
      title: "Senior Frontend Developer",
      company: "StartupOS",
      location: "San Francisco, CA (Hybrid)",
      type: "Full-time",
      experience: "3-5 years",
      salary: "$120,000 - $160,000",
      equity: "0.1% - 0.3%",
      postedDate: "2024-01-15",
      applicationDeadline: "2024-02-15",
      applications: 45,
      views: 1200,
      department: "Engineering",
      level: "Senior",
      category: "Frontend Development",
      description: `
        <p>We're looking for a Senior Frontend Developer to join our growing engineering team. You'll be responsible for building and maintaining our web applications, working closely with designers and backend developers to create exceptional user experiences.</p>
        
        <h3>What You'll Do:</h3>
        <ul>
          <li>Build and maintain scalable, responsive web applications using React, TypeScript, and modern CSS</li>
          <li>Collaborate with designers to implement pixel-perfect UI/UX designs</li>
          <li>Work with backend developers to integrate APIs and optimize performance</li>
          <li>Write clean, maintainable code and participate in code reviews</li>
          <li>Mentor junior developers and contribute to technical decisions</li>
          <li>Stay up-to-date with the latest frontend technologies and best practices</li>
        </ul>

        <h3>What We're Looking For:</h3>
        <ul>
          <li>3+ years of experience building web applications with React or similar frameworks</li>
          <li>Strong proficiency in JavaScript/TypeScript, HTML, and CSS</li>
          <li>Experience with modern frontend build tools (Webpack, Vite, etc.)</li>
          <li>Knowledge of responsive design principles and cross-browser compatibility</li>
          <li>Experience with version control systems (Git)</li>
          <li>Strong problem-solving skills and attention to detail</li>
          <li>Excellent communication and collaboration skills</li>
        </ul>

        <h3>Nice to Have:</h3>
        <ul>
          <li>Experience with Next.js, Vue.js, or Angular</li>
          <li>Knowledge of testing frameworks (Jest, Cypress)</li>
          <li>Experience with design systems and component libraries</li>
          <li>Understanding of SEO principles and web accessibility</li>
          <li>Experience with performance optimization and monitoring</li>
        </ul>
      `,
      benefits: [
        "Competitive salary and equity package",
        "Comprehensive health, dental, and vision insurance",
        "Flexible work arrangements (remote/hybrid)",
        "Unlimited PTO and paid parental leave",
        "Professional development budget",
        "401(k) with company match",
        "Free lunch and snacks in office",
        "Regular team events and activities",
        "Latest equipment and tools",
        "Opportunity to work on cutting-edge technology"
      ],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of professional frontend development experience",
        "Strong portfolio of web applications",
        "Experience with modern JavaScript frameworks",
        "Knowledge of responsive design principles",
        "Excellent problem-solving and communication skills",
        "Ability to work in a fast-paced startup environment"
      ],
      responsibilities: [
        "Develop and maintain high-quality, scalable frontend applications",
        "Collaborate with cross-functional teams to deliver features",
        "Write clean, maintainable, and well-documented code",
        "Participate in code reviews and technical discussions",
        "Mentor junior developers and share knowledge",
        "Contribute to technical architecture decisions",
        "Stay current with industry trends and best practices"
      ],
      company: {
        name: "StartupOS",
        description: "StartupOS is the revolutionary platform that transforms how startups build, scale, and succeed. We provide AI-powered tools, ecosystem access, and strategic guidance to help founders navigate every stage of their journey.",
        size: "50-100 employees",
        industry: "SaaS / Startup Ecosystem",
        founded: "2022",
        location: "San Francisco, CA",
        website: "https://startupos.com",
        logo: "/api/placeholder/100/100"
      },
      team: {
        name: "Engineering",
        description: "Our engineering team is responsible for building the core platform that powers StartupOS. We work on everything from the frontend user interface to the backend APIs and infrastructure.",
        size: "15 engineers",
        tech: ["React", "TypeScript", "Node.js", "Python", "AWS", "PostgreSQL"]
      }
    };

    setJob(mockJob);
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setApplicationSubmitted(true);
      setShowApplicationForm(false);
    }, 2000);
  };

  if (!job) {
    return (
      <div className="min-h-screen pt-16 ultra-gradient-bg flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500 mx-auto mb-4"></div>
          <p className="text-white/70">Loading job details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-white/60 text-sm mb-8">
              <Link to="/careers" className="hover:text-white transition-colors">Careers</Link>
              <span>•</span>
              <span>{job.department}</span>
            </div>

            {/* Job Header */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                    <Building className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{job.title}</h1>
                    <p className="text-xl text-blue-400 font-semibold">{job.company.name}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center space-x-3 text-white/70">
                    <MapPin className="w-5 h-5" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/70">
                    <Briefcase className="w-5 h-5" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/70">
                    <Users className="w-5 h-5" />
                    <span>{job.experience} experience</span>
                  </div>
                  <div className="flex items-center space-x-3 text-white/70">
                    <DollarSign className="w-5 h-5" />
                    <span>{job.salary}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-6 text-sm text-white/60 mb-8">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Posted {new Date(job.postedDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{job.applications} applications</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>{job.views} views</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="ultra-glass p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-white mb-4">Quick Apply</h3>
                  <p className="text-white/70 text-sm mb-6">
                    Ready to join our team? Submit your application in just a few minutes.
                  </p>
                  
                  <motion.button
                    onClick={() => setShowApplicationForm(true)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full ultra-button flex items-center justify-center space-x-2"
                  >
                    <Briefcase className="w-5 h-5" />
                    <span>Apply Now</span>
                  </motion.button>

                  <div className="mt-6 space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Salary Range</span>
                      <span className="text-white font-semibold">{job.salary}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Equity</span>
                      <span className="text-white font-semibold">{job.equity}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white/60">Experience</span>
                      <span className="text-white font-semibold">{job.experience}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Details */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Job Description */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="ultra-glass p-8 rounded-xl"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Job Description</h2>
                <div 
                  className="prose prose-invert prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: job.description }}
                />
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="ultra-glass p-8 rounded-xl"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Responsibilities */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="ultra-glass p-8 rounded-xl"
              >
                <h2 className="text-2xl font-bold text-white mb-6">Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Company Info */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="ultra-glass p-6 rounded-xl"
              >
                <h3 className="text-lg font-bold text-white mb-4">About {job.company.name}</h3>
                <p className="text-white/70 text-sm mb-4">{job.company.description}</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Company Size</span>
                    <span className="text-white">{job.company.size}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Industry</span>
                    <span className="text-white">{job.company.industry}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Founded</span>
                    <span className="text-white">{job.company.founded}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Location</span>
                    <span className="text-white">{job.company.location}</span>
                  </div>
                </div>
              </motion.div>

              {/* Team Info */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="ultra-glass p-6 rounded-xl"
              >
                <h3 className="text-lg font-bold text-white mb-4">About the Team</h3>
                <p className="text-white/70 text-sm mb-4">{job.team.description}</p>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-white/60">Team Size</span>
                    <span className="text-white">{job.team.size}</span>
                  </div>
                  <div>
                    <span className="text-white/60 text-sm">Technologies</span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {job.team.tech.map((tech) => (
                        <span key={tech} className="bg-white/10 text-white/80 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="ultra-glass p-6 rounded-xl"
              >
                <h3 className="text-lg font-bold text-white mb-4">Benefits & Perks</h3>
                <ul className="space-y-2">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form Modal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showApplicationForm ? 1 : 0 }}
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${
          showApplicationForm ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        onClick={() => setShowApplicationForm(false)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: showApplicationForm ? 1 : 0.9, opacity: showApplicationForm ? 1 : 0 }}
          className="ultra-glass rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-white">Apply for {job.title}</h2>
            <button
              onClick={() => setShowApplicationForm(false)}
              className="text-white/60 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/80 mb-2">Resume/CV *</label>
              <input
                type="file"
                name="resume"
                onChange={handleInputChange}
                accept=".pdf,.doc,.docx"
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2">Cover Letter</label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={4}
                placeholder="Tell us why you're interested in this position..."
                className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-white/50 resize-none focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 mb-2">Portfolio URL</label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  placeholder="https://your-portfolio.com"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2">LinkedIn</label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/80 mb-2">GitHub (if applicable)</label>
              <input
                type="url"
                name="github"
                value={formData.github}
                onChange={handleInputChange}
                placeholder="https://github.com/yourusername"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-white/80 mb-2">Why do you want to join our team? *</label>
              <textarea
                name="whyJoin"
                value={formData.whyJoin}
                onChange={handleInputChange}
                required
                rows={3}
                placeholder="Tell us what excites you about this opportunity..."
                className="w-full bg-white/10 border border-white/20 rounded-lg p-4 text-white placeholder-white/50 resize-none focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-white/80 mb-2">Salary Expectation</label>
                <input
                  type="text"
                  name="salaryExpectation"
                  value={formData.salaryExpectation}
                  onChange={handleInputChange}
                  placeholder="e.g., $120,000 - $140,000"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2">Earliest Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-white/80 mb-2">Remote Work Preference</label>
              <select
                name="remotePreference"
                value={formData.remotePreference}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
              >
                <option value="remote">Fully Remote</option>
                <option value="hybrid">Hybrid</option>
                <option value="onsite">On-site</option>
              </select>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full ultra-button flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Submit Application</span>
            </motion.button>
          </form>
        </motion.div>
      </motion.div>

      {/* Application Success Modal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: applicationSubmitted ? 1 : 0 }}
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 ${
          applicationSubmitted ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: applicationSubmitted ? 1 : 0.9, opacity: applicationSubmitted ? 1 : 0 }}
          className="ultra-glass rounded-2xl p-8 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Application Submitted!</h3>
          <p className="text-white/70 mb-6">
            Thank you for your application. We'll review your submission and get back to you within 5-7 business days.
          </p>
          <motion.button
            onClick={() => setApplicationSubmitted(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="ultra-button"
          >
            Continue Browsing
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default JobDetailPage; 