import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, ExternalLink, Download, Share2, Heart, Bookmark,
  Clock, Users, TrendingUp, Award, CheckCircle, Star,
  Settings, Workflow, FileText, Target, Zap, BarChart3,
  Cpu, Database, Globe, Smartphone, Monitor, Server, Cloud, Lock,
  Calendar, MapPin, Phone, Mail, MessageSquare, ChevronRight
} from 'lucide-react';

const SystemDetailPage = () => {
  const { systemId } = useParams();
  const [system, setSystem] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  // Mock data - in real app, this would come from an API
  const systemsData = {
    'zerohuman-ai-framework': {
      id: 'zerohuman-ai-framework',
      title: "ZeroHuman AI Operations Framework",
      description: "Complete operational framework for AI-powered digital human platform including content creation, quality control, and client management workflows.",
      category: "ai",
      type: "Framework",
      status: "Live",
      complexity: "Advanced",
      timeToBuild: "6 months",
      teamSize: "8 members",
      impact: "300% efficiency increase",
      image: "/api/placeholder/800/400",
      heroImage: "/api/placeholder/1200/600",
      features: [
        "Automated content generation pipeline",
        "Quality assurance checkpoints",
        "Client onboarding automation",
        "Performance monitoring dashboard",
        "Scalable deployment system",
        "AI model training pipeline",
        "Content moderation system",
        "Client feedback integration"
      ],
      technologies: ["AI/ML", "Python", "Docker", "Kubernetes", "AWS", "MongoDB", "TensorFlow", "OpenAI API"],
      metrics: {
        efficiency: "300%",
        clients: "100+",
        uptime: "99.9%",
        satisfaction: "4.9/5",
        contentGenerated: "10K+",
        processingTime: "80% reduction"
      },
      documentation: "Complete SOP documentation with video tutorials",
      featured: true,
      overview: "The ZeroHuman AI Operations Framework is a comprehensive system designed to streamline the creation, management, and delivery of AI-generated digital human content. Built from years of experience in AI startups, this framework addresses the unique challenges of scaling AI operations while maintaining quality and client satisfaction.",
      problem: "AI content generation platforms face significant challenges in maintaining quality, managing client expectations, and scaling operations efficiently. Without proper systems, teams struggle with inconsistent outputs, manual quality checks, and poor client experiences.",
      solution: "Our framework provides a complete operational infrastructure that automates content generation, implements quality control checkpoints, and ensures seamless client onboarding. The system is designed to scale from startup to enterprise level.",
      results: "Implemented across 100+ clients, the framework has achieved 300% efficiency improvements, 99.9% uptime, and 4.9/5 client satisfaction ratings. The system processes 10K+ content pieces monthly with 80% reduction in processing time.",
      architecture: {
        components: [
          "Content Generation Engine",
          "Quality Assurance Module",
          "Client Management Portal",
          "Analytics Dashboard",
          "API Gateway",
          "Database Layer"
        ],
        integrations: [
          "OpenAI GPT Models",
          "AWS Cloud Services",
          "MongoDB Database",
          "Docker Containers",
          "Kubernetes Orchestration"
        ]
      },
      implementation: {
        phases: [
          {
            phase: "Phase 1: Foundation",
            duration: "2 months",
            deliverables: ["Core infrastructure setup", "Basic content generation", "Initial quality controls"]
          },
          {
            phase: "Phase 2: Automation",
            duration: "2 months",
            deliverables: ["Automated pipelines", "Advanced quality checks", "Client portal development"]
          },
          {
            phase: "Phase 3: Optimization",
            duration: "2 months",
            deliverables: ["Performance optimization", "Advanced analytics", "Scalability improvements"]
          }
        ]
      },
      pricing: {
        startup: {
          name: "Startup",
          price: "$2,500/month",
          features: ["Up to 1K content pieces", "Basic quality controls", "Email support", "Standard templates"]
        },
        professional: {
          name: "Professional",
          price: "$7,500/month",
          features: ["Up to 10K content pieces", "Advanced quality controls", "Priority support", "Custom templates", "Analytics dashboard"]
        },
        enterprise: {
          name: "Enterprise",
          price: "Custom",
          features: ["Unlimited content", "Custom quality controls", "Dedicated support", "White-label solution", "Custom integrations"]
        }
      },
      caseStudies: [
        {
          company: "Fashion Brand X",
          industry: "Fashion",
          challenge: "Needed to generate 5K+ product images monthly",
          solution: "Implemented automated content generation pipeline",
          results: "95% time reduction, 40% cost savings, 99.8% quality score"
        },
        {
          company: "Marketing Agency Y",
          industry: "Marketing",
          challenge: "Scaling content creation for 50+ clients",
          solution: "Deployed full framework with client portal",
          results: "300% capacity increase, 90% client satisfaction, 60% revenue growth"
        }
      ],
      testimonials: [
        {
          name: "Sarah Johnson",
          role: "CTO, Fashion Brand X",
          content: "The ZeroHuman framework transformed our content operations. We went from manual processes to fully automated workflows in just 3 months.",
          rating: 5
        },
        {
          name: "Mike Chen",
          role: "Founder, Marketing Agency Y",
          content: "This system allowed us to scale from 10 to 50+ clients without adding staff. The ROI was immediate and substantial.",
          rating: 5
        }
      ]
    },
    'accounting-practice-management': {
      id: 'accounting-practice-management',
      title: "Accounting Practice Management Framework",
      description: "Comprehensive practice management system for accounting firms including client management, workflow automation, compliance tracking, and revenue optimization.",
      category: "accounting",
      type: "Framework",
      status: "Live",
      complexity: "Expert",
      timeToBuild: "12 months",
      teamSize: "15 members",
      impact: "250% efficiency increase",
      image: "/api/placeholder/800/400",
      heroImage: "/api/placeholder/1200/600",
      features: [
        "Client lifecycle management",
        "Automated workflow routing",
        "Compliance tracking system",
        "Revenue optimization tools",
        "Document management system",
        "Time tracking and billing",
        "Tax preparation automation",
        "Client portal integration"
      ],
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "QuickBooks API", "Tax Software APIs"],
      metrics: {
        efficiency: "250%",
        clients: "500+",
        compliance: "100%",
        revenue: "180%",
        timeSaved: "60%",
        accuracy: "99.5%"
      },
      documentation: "Complete accounting practice playbook with compliance guidelines",
      featured: true,
      overview: "The Accounting Practice Management Framework is a comprehensive system designed specifically for accounting firms to streamline operations, ensure compliance, and maximize revenue. Built from extensive experience working with accounting practices, this framework addresses the unique challenges of modern accounting firms.",
      problem: "Accounting firms struggle with manual processes, compliance requirements, client management complexity, and revenue optimization. Without proper systems, firms face inefficiencies, compliance risks, and missed growth opportunities.",
      solution: "Our framework provides a complete practice management infrastructure that automates workflows, ensures compliance, optimizes revenue, and enhances client relationships. The system is designed to scale from small practices to large firms.",
      results: "Implemented across 500+ accounting firms, the framework has achieved 250% efficiency improvements, 100% compliance rates, and 180% revenue growth. Firms save 60% of administrative time while improving accuracy to 99.5%.",
      architecture: {
        components: [
          "Client Management System",
          "Workflow Automation Engine",
          "Compliance Tracking Module",
          "Revenue Optimization Tools",
          "Document Management System",
          "Reporting Dashboard"
        ],
        integrations: [
          "QuickBooks Online/Desktop",
          "Tax Software (TurboTax, H&R Block)",
          "Banking APIs",
          "Email Systems",
          "Calendar Applications"
        ]
      },
      implementation: {
        phases: [
          {
            phase: "Phase 1: Foundation",
            duration: "3 months",
            deliverables: ["Client management setup", "Basic workflow automation", "Document management system"]
          },
          {
            phase: "Phase 2: Automation",
            duration: "4 months",
            deliverables: ["Advanced workflow automation", "Compliance tracking", "Revenue optimization tools"]
          },
          {
            phase: "Phase 3: Integration",
            duration: "3 months",
            deliverables: ["Third-party integrations", "Advanced reporting", "Client portal development"]
          },
          {
            phase: "Phase 4: Optimization",
            duration: "2 months",
            deliverables: ["Performance optimization", "Advanced analytics", "Custom configurations"]
          }
        ]
      },
      pricing: {
        small: {
          name: "Small Practice",
          price: "$500/month",
          features: ["Up to 100 clients", "Basic workflow automation", "Email support", "Standard reports"]
        },
        medium: {
          name: "Medium Practice",
          price: "$1,500/month",
          features: ["Up to 500 clients", "Advanced automation", "Priority support", "Custom reports", "Compliance tracking"]
        },
        large: {
          name: "Large Practice",
          price: "$3,500/month",
          features: ["Unlimited clients", "Full automation", "Dedicated support", "White-label solution", "Custom integrations"]
        }
      },
      caseStudies: [
        {
          company: "Smith & Associates CPA",
          industry: "Accounting",
          challenge: "Managing 200+ clients with manual processes",
          solution: "Implemented complete practice management framework",
          results: "250% efficiency gain, 100% compliance, 150% revenue growth"
        },
        {
          company: "Regional Tax Services",
          industry: "Tax Services",
          challenge: "Scaling from 50 to 300+ clients",
          solution: "Deployed workflow automation and client portal",
          results: "300% client capacity increase, 90% client satisfaction, 200% revenue growth"
        }
      ],
      testimonials: [
        {
          name: "Robert Smith",
          role: "Managing Partner, Smith & Associates CPA",
          content: "This framework revolutionized our practice. We can now handle 3x more clients with the same staff while maintaining perfect compliance.",
          rating: 5
        },
        {
          name: "Jennifer Martinez",
          role: "Owner, Regional Tax Services",
          content: "The automation features saved us 20 hours per week. Our clients love the portal and our team is more productive than ever.",
          rating: 5
        }
      ]
    }
  };

  useEffect(() => {
    setIsLoading(true);
    const foundSystem = systemsData[systemId];
    if (foundSystem) {
      setSystem(foundSystem);
    }
    setTimeout(() => setIsLoading(false), 1000);
  }, [systemId]);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FileText },
    { id: 'architecture', label: 'Architecture', icon: Settings },
    { id: 'implementation', label: 'Implementation', icon: Workflow },
    { id: 'pricing', label: 'Pricing', icon: TrendingUp },
    { id: 'casestudies', label: 'Case Studies', icon: BarChart3 }
  ];

  if (isLoading) {
    return (
      <div className="min-h-screen pt-16 ultra-gradient-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <p className="text-white/70">Loading system details...</p>
        </div>
      </div>
    );
  }

  if (!system) {
    return (
      <div className="min-h-screen pt-16 ultra-gradient-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">System Not Found</h2>
          <p className="text-white/70 mb-6">The system you're looking for doesn't exist.</p>
          <Link
            to="/systems"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
          >
            Back to Systems
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-teal-900/20 to-slate-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <Link
              to="/systems"
              className="inline-flex items-center space-x-2 text-white/60 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Systems</span>
            </Link>

            {/* System Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                    {system.type}
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      system.status === 'Live' ? 'bg-green-400' : 'bg-yellow-400'
                    }`}></div>
                    <span className="text-white/60 text-sm">{system.status}</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {system.title}
                </h1>

                <p className="text-xl text-cyan-200 mb-8 leading-relaxed">
                  {system.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{system.metrics.efficiency}</div>
                    <div className="text-cyan-300 text-sm">Efficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{system.metrics.clients}</div>
                    <div className="text-cyan-300 text-sm">Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{system.metrics.uptime || system.metrics.compliance}</div>
                    <div className="text-cyan-300 text-sm">{system.metrics.uptime ? 'Uptime' : 'Compliance'}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-2">{system.metrics.satisfaction}</div>
                    <div className="text-cyan-300 text-sm">Satisfaction</div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center space-x-2"
                  >
                    <span>Get Started</span>
                    <ChevronRight className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Guide</span>
                  </motion.button>
                </div>
              </div>

              <div className="relative">
                <div className="ultra-glass rounded-2xl overflow-hidden">
                  <img
                    src={system.heroImage}
                    alt={system.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-cyan-400 text-white shadow-lg shadow-cyan-400/25'
                      : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-12 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="ultra-glass rounded-2xl p-8 md:p-12"
          >
            {activeTab === 'overview' && (
              <div className="space-y-12">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-6">System Overview</h2>
                  <p className="text-white/80 leading-relaxed text-lg mb-6">
                    {system.overview}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Problem</h3>
                    <p className="text-white/70 leading-relaxed">
                      {system.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Solution</h3>
                    <p className="text-white/70 leading-relaxed">
                      {system.solution}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Results</h3>
                  <p className="text-white/70 leading-relaxed text-lg">
                    {system.results}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {system.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-white/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'architecture' && (
              <div className="space-y-12">
                <h2 className="text-3xl font-bold text-white mb-6">System Architecture</h2>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Core Components</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {system.architecture.components.map((component, index) => (
                      <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/10">
                        <h4 className="text-lg font-semibold text-white mb-2">{component}</h4>
                        <p className="text-white/60 text-sm">Core system component</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Integrations</h3>
                  <div className="flex flex-wrap gap-3">
                    {system.architecture.integrations.map((integration, index) => (
                      <span key={index} className="bg-cyan-500/20 text-cyan-300 px-4 py-2 rounded-lg text-sm font-medium">
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Technology Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {system.technologies.map((tech, index) => (
                      <span key={index} className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-lg text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'implementation' && (
              <div className="space-y-12">
                <h2 className="text-3xl font-bold text-white mb-6">Implementation Plan</h2>
                
                <div className="space-y-8">
                  {system.implementation.phases.map((phase, index) => (
                    <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/10">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                        <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium">
                          {phase.duration}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {phase.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-white/80">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'pricing' && (
              <div className="space-y-12">
                <h2 className="text-3xl font-bold text-white mb-6">Pricing Plans</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {Object.values(system.pricing).map((plan, index) => (
                    <div key={index} className={`p-8 rounded-2xl border-2 ${
                      index === 1 ? 'border-cyan-400 bg-cyan-400/10' : 'border-white/10 bg-white/5'
                    }`}>
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="text-4xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                        {index === 1 && (
                          <span className="bg-cyan-400 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <div className="space-y-4">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-white/80 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full mt-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                          index === 1
                            ? 'bg-cyan-400 text-white hover:bg-cyan-500'
                            : 'bg-white/10 text-white hover:bg-white/20'
                        }`}
                      >
                        Choose Plan
                      </motion.button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'casestudies' && (
              <div className="space-y-12">
                <h2 className="text-3xl font-bold text-white mb-6">Case Studies</h2>
                
                <div className="space-y-8">
                  {system.caseStudies.map((study, index) => (
                    <div key={index} className="p-8 bg-white/5 rounded-xl border border-white/10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{study.company}</h3>
                          <p className="text-cyan-300 mb-4">{study.industry}</p>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                            <p className="text-white/70">{study.challenge}</p>
                          </div>
                        </div>
                        <div>
                          <div className="mb-4">
                            <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                            <p className="text-white/70">{study.solution}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                            <p className="text-white/70">{study.results}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Client Testimonials</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {system.testimonials.map((testimonial, index) => (
                      <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/10">
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-white/80 mb-4 italic">"{testimonial.content}"</p>
                        <div>
                          <div className="font-semibold text-white">{testimonial.name}</div>
                          <div className="text-cyan-300 text-sm">{testimonial.role}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="ultra-glass rounded-2xl p-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Ready to Implement This System?
            </h2>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Let's work together to implement this system in your organization 
              and start seeing results immediately.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Start Implementation</span>
                <ChevronRight className="w-5 h-5" />
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Guide</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SystemDetailPage;
