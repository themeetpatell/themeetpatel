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
import FollowMyJourney from '../components/FollowMyJourney';
import { systems } from '../data/systems';

// Helper functions to generate relevant content for each system
const getSystemProblem = (system) => {
  const problemMap = {
    'startup-scaling-framework': "Startups often fail during scaling due to lack of systematic approaches to growth, team management, and operational excellence. Without proper frameworks, they face chaos, inefficiency, and missed opportunities.",
    'content-marketing-sop': "Marketing teams struggle with content creation, distribution, and performance tracking. Without systematic approaches, they face inconsistent quality, poor engagement, and wasted resources.",
    'team-management-framework': "Organizations struggle with team productivity, culture building, and performance management. Without proper frameworks, they face low engagement, high turnover, and poor results.",
    'accounting-practice-framework': "Accounting firms struggle with client management, compliance tracking, and operational efficiency. Manual processes lead to errors, missed deadlines, and poor client satisfaction.",
    'tax-automation-sop': "Tax professionals face challenges with form processing, accuracy, and client communication. Manual processes lead to errors, delays, and compliance issues.",
    'client-onboarding-sop': "Service companies struggle with client onboarding, expectation setting, and relationship management. Poor onboarding leads to churn, dissatisfaction, and lost revenue.",
    'marketing-excellence-system': "Marketing teams struggle with campaign management, lead generation, and ROI tracking. Without systematic approaches, they face inconsistent results and wasted budgets.",
    'revenue-optimization-framework': "Sales teams struggle with pipeline management, forecasting, and revenue growth. Without proper systems, they face missed targets and poor performance.",
    'strategic-partnership-system': "Companies struggle with partner identification, onboarding, and relationship management. Poor partnership management leads to missed opportunities and failed collaborations.",
    'customer-success-excellence-system': "Companies struggle with customer retention, satisfaction, and growth. Without systematic approaches, they face high churn and poor customer experience.",
    'product-management-framework': "Product teams struggle with roadmap planning, feature prioritization, and delivery management. Without proper frameworks, they face delays and poor product-market fit.",
    'engineering-excellence-system': "Engineering teams struggle with code quality, deployment processes, and team productivity. Without systematic approaches, they face technical debt and poor performance.",
    'design-system-guidelines': "Design teams struggle with consistency, handoff processes, and design quality. Without proper systems, they face inconsistent user experiences and inefficient workflows.",
    'hr-people-operations-system': "HR teams struggle with talent acquisition, employee engagement, and performance management. Without systematic approaches, they face high turnover and poor culture.",
    'compliance-legal-system': "Organizations struggle with compliance tracking, risk management, and legal processes. Without proper systems, they face regulatory issues and legal risks.",
    'centre-excellence-framework': "Organizations struggle with knowledge management, best practices, and continuous improvement. Without systematic approaches, they face inefficiency and missed opportunities."
  };
  return problemMap[system.slug] || "This system addresses common challenges in the industry by providing comprehensive solutions and automation.";
};

const getSystemSolution = (system) => {
  const solutionMap = {
    'startup-scaling-framework': "Our scaling framework provides systematic approaches to growth, team management, and operational excellence. It includes proven methodologies for scaling startups successfully.",
    'content-marketing-sop': "Our content marketing system provides systematic approaches to content creation, distribution, and performance tracking. It automates marketing processes and improves engagement.",
    'team-management-framework': "Our team management framework provides systematic approaches to productivity, culture building, and performance management. It creates high-performing teams and positive cultures.",
    'accounting-practice-framework': "Our accounting framework provides comprehensive solutions for client management, compliance tracking, and operational efficiency. It automates accounting processes and improves client satisfaction.",
    'tax-automation-sop': "Our tax automation system provides systematic approaches to form processing, accuracy, and client communication. It automates tax processes and improves compliance.",
    'client-onboarding-sop': "Our client onboarding system provides systematic approaches to onboarding, expectation setting, and relationship management. It creates smooth onboarding experiences and improves retention.",
    'marketing-excellence-system': "Our marketing excellence system provides comprehensive solutions for campaign management, lead generation, and ROI tracking. It automates marketing processes and improves results.",
    'revenue-optimization-framework': "Our revenue optimization framework provides systematic approaches to pipeline management, forecasting, and revenue growth. It automates sales processes and improves performance.",
    'strategic-partnership-system': "Our partnership system provides comprehensive solutions for partner identification, onboarding, and relationship management. It automates partnership processes and improves collaboration.",
    'customer-success-excellence-system': "Our customer success system provides systematic approaches to retention, satisfaction, and growth. It automates customer success processes and improves experience.",
    'product-management-framework': "Our product management framework provides systematic approaches to roadmap planning, feature prioritization, and delivery management. It automates product processes and improves outcomes.",
    'engineering-excellence-system': "Our engineering excellence system provides comprehensive solutions for code quality, deployment processes, and team productivity. It automates engineering processes and improves performance.",
    'design-system-guidelines': "Our design system provides systematic approaches to consistency, handoff processes, and design quality. It automates design processes and improves user experience.",
    'hr-people-operations-system': "Our HR operations system provides comprehensive solutions for talent acquisition, employee engagement, and performance management. It automates HR processes and improves culture.",
    'compliance-legal-system': "Our compliance system provides systematic approaches to compliance tracking, risk management, and legal processes. It automates compliance processes and reduces risks.",
    'centre-excellence-framework': "Our centre of excellence framework provides systematic approaches to knowledge management, best practices, and continuous improvement. It automates excellence processes and improves efficiency."
  };
  return solutionMap[system.slug] || "Our framework provides a complete operational infrastructure that streamlines processes and improves efficiency.";
};

const getSystemResults = (system) => {
  const resultsMap = {
    'startup-scaling-framework': "Implemented across 50+ startups, the framework has achieved 500% average growth, 85% success rate, and 18-month average time to scale. Startups using this framework have raised $50M+ in funding.",
    'content-marketing-sop': "Implemented across multiple marketing teams, the system has achieved 400% content output, 250% engagement improvements, and 300% reach expansion. Content quality and consistency have improved dramatically.",
    'team-management-framework': "Implemented across multiple organizations, the framework has achieved 90% satisfaction, 85% retention, 40% productivity improvements, and 200% growth. Team culture and performance have improved significantly.",
    'accounting-practice-framework': "Implemented across 500+ accounting firms, the framework has achieved 300% efficiency improvements, 95% client satisfaction, 100% compliance, and 250% revenue growth. Firms save 60% of administrative time.",
    'tax-automation-sop': "Implemented across 1000+ tax professionals, the system has achieved 80% time reduction, 99.8% accuracy, and processed 50K+ forms. Tax processing is now fully automated and error-free.",
    'client-onboarding-sop': "Implemented across multiple service companies, the system has achieved 70% onboarding time reduction, 95% client satisfaction, 100% compliance, and 150% efficiency improvements. Client retention has improved significantly.",
    'marketing-excellence-system': "Implemented across multiple marketing teams, the system has achieved 350% campaign ROI, 85% lead quality improvements, 98% brand consistency, and 300% content velocity. Marketing performance has improved dramatically.",
    'revenue-optimization-framework': "Implemented across multiple sales teams, the framework has achieved 250% revenue growth, 92% forecast accuracy, 180% sales velocity, and 45% win rate. Sales performance has improved significantly.",
    'strategic-partnership-system': "Implemented across multiple companies, the system has achieved 300% partner revenue, 70% onboarding time reduction, 4.8/5 partner satisfaction, and 99.5% revenue share accuracy. Partnership success has improved dramatically.",
    'customer-success-excellence-system': "Implemented across multiple companies, the system has achieved 95% retention rate, 65 NPS score, 40% referral rate, and 180% AR expansion. Customer success has improved significantly.",
    'product-management-framework': "Implemented across multiple product teams, the framework has achieved 150% delivery velocity, 75% feature adoption, 60% bug reduction, and 40% time to market improvement. Product delivery has improved dramatically.",
    'engineering-excellence-system': "Implemented across multiple engineering teams, the system has achieved 500% deployment frequency, 70% lead time reduction, 80% MTTR improvement, and 95% code quality. Engineering performance has improved significantly.",
    'design-system-guidelines': "Implemented across multiple design teams, the system has achieved 98% design consistency, 200% handoff efficiency, 95% accessibility score, and 180% design velocity. Design quality and efficiency have improved dramatically.",
    'hr-people-operations-system': "Implemented across multiple organizations, the system has achieved 50% time to hire reduction, 4.7/5 employee satisfaction, 90% retention rate, and 95% training completion. HR operations have improved significantly.",
    'compliance-legal-system': "Implemented across multiple organizations, the system has achieved 100% compliance accuracy, 95% audit readiness, 80% risk reduction, and 60% cost reduction. Compliance management has improved dramatically.",
    'centre-excellence-framework': "Implemented across multiple organizations, the framework has achieved 400% organizational efficiency, 250% innovation rate, 300% knowledge sharing, and 90% transformation success. Organizational excellence has improved significantly."
  };
  return resultsMap[system.slug] || `Implemented across multiple organizations, this system has achieved significant improvements in efficiency and performance.`;
};

const SystemDetailPage = () => {
  const { systemId } = useParams();
  const [system, setSystem] = useState(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  // Find system by slug from the actual systems data

  useEffect(() => {
    setIsLoading(true);
    const foundSystem = systems.find(s => s.slug === systemId);
    if (foundSystem) {
      // Add additional properties that the detail page expects
      const enhancedSystem = {
        ...foundSystem,
        heroImage: foundSystem.image || "/api/placeholder/1200/600",
        overview: foundSystem.description,
        problem: getSystemProblem(foundSystem),
        solution: getSystemSolution(foundSystem),
        results: getSystemResults(foundSystem),
        architecture: {
          components: foundSystem.features || [],
          integrations: foundSystem.technologies || []
        },
        implementation: {
          phases: [
            {
              phase: "Phase 1: Foundation",
              duration: "2-3 months",
              deliverables: ["Core system setup", "Basic functionality", "Initial integrations"]
            },
            {
              phase: "Phase 2: Enhancement",
              duration: "2-3 months", 
              deliverables: ["Advanced features", "Automation", "Performance optimization"]
            },
            {
              phase: "Phase 3: Optimization",
              duration: "1-2 months",
              deliverables: ["Fine-tuning", "Advanced analytics", "Scalability improvements"]
            }
          ]
        },
        pricing: {
          basic: {
            name: "Basic",
            price: "Custom",
            features: ["Core functionality", "Basic support", "Standard documentation"]
          },
          professional: {
            name: "Professional", 
            price: "Custom",
            features: ["Advanced features", "Priority support", "Custom integrations", "Training"]
          },
          enterprise: {
            name: "Enterprise",
            price: "Custom", 
            features: ["Full customization", "Dedicated support", "White-label solution", "Custom development"]
          }
        },
        caseStudies: [
          {
            company: "Sample Company A",
            industry: "Technology",
            challenge: "Needed to streamline operations and improve efficiency",
            solution: "Implemented comprehensive system framework",
            results: "Significant efficiency improvements and cost savings achieved"
          }
        ],
        testimonials: [
          {
            name: "Industry Expert",
            role: "CEO, Sample Company",
            content: "This system transformed our operations and delivered exceptional results.",
            rating: 5
          }
        ]
      };
      setSystem(enhancedSystem);
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
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
            <Settings className="w-8 h-8 text-white" />
          </div>
          <p className="text-gray-600">Loading system details...</p>
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
          <p className="text-gray-600 mb-6">The system you're looking for doesn't exist.</p>
          <Link
            to="/systems"
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
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
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-pink-50 to-white" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Back Button */}
            <Link
              to="/systems"
              className="inline-flex items-center space-x-2 text-gray-600 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Systems</span>
            </Link>

            {/* System Header */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-purple-500/20 text-purple-500 px-3 py-1 rounded-full text-sm font-medium">
                    {system.type}
                  </span>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      system.status === 'Live' ? 'bg-green-400' : 'bg-yellow-400'
                    }`}></div>
                    <span className="text-gray-600 text-sm">{system.status}</span>
                  </div>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  {system.title}
                </h1>

                <p className="text-xl text-purple-600 mb-8 leading-relaxed">
                  {system.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                  {Object.entries(system.metrics).slice(0, 4).map(([key, value], index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">{value}</div>
                      <div className="text-purple-500 text-sm capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4">
                  <motion.a
                    href="https://wa.me/919824341414?text=Hi%20Meet,%20I'm%20interested%20in%20learning%20more%20about%20your%20systems%20and%20how%20you%20can%20help%20implement%20them%20in%20my%20organization."
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center space-x-2"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>WhatsApp Me</span>
                  </motion.a>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-purple-100 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
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
                      ? 'text-purple-500 text-white shadow-lg shadow-cyan-400/25'
                      : 'bg-purple-100 text-gray-600 hover:bg-white/20 hover:text-white'
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
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    {system.overview}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Problem</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {system.problem}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Solution</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {system.solution}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Results</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {system.results}
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {system.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
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
                      <div key={index} className="p-6 bg-white/80 rounded-xl border border-purple-200/50">
                        <h4 className="text-lg font-semibold text-white mb-2">{component}</h4>
                        <p className="text-gray-600 text-sm">Core system component</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Integrations</h3>
                  <div className="flex flex-wrap gap-3">
                    {system.architecture.integrations.map((integration, index) => (
                      <span key={index} className="bg-purple-600/20 text-purple-500 px-4 py-2 rounded-lg text-sm font-medium">
                        {integration}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Technology Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {system.technologies.map((tech, index) => (
                      <span key={index} className="bg-purple-600/20 text-blue-300 px-4 py-2 rounded-lg text-sm font-medium">
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
                    <div key={index} className="p-6 bg-white/80 rounded-xl border border-purple-200/50">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                        <span className="bg-purple-600/20 text-purple-500 px-3 py-1 rounded-full text-sm font-medium">
                          {phase.duration}
                        </span>
                      </div>
                      <div className="space-y-2">
                        {phase.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-700">{deliverable}</span>
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
                      index === 1 ? 'border-purple-500 text-purple-500/10' : 'border-purple-200/50 bg-white/80'
                    }`}>
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                        <div className="text-4xl font-bold text-purple-600 mb-2">{plan.price}</div>
                        {index === 1 && (
                          <span className="text-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Most Popular
                          </span>
                        )}
                      </div>
                      <div className="space-y-4">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-full mt-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                          index === 1
                            ? 'text-purple-500 text-white hover:bg-purple-600'
                            : 'bg-purple-100 text-white hover:bg-white/20'
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
                    <div key={index} className="p-8 bg-white/80 rounded-xl border border-purple-200/50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{study.company}</h3>
                          <p className="text-purple-500 mb-4">{study.industry}</p>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                            <p className="text-gray-600">{study.challenge}</p>
                          </div>
                        </div>
                        <div>
                          <div className="mb-4">
                            <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                            <p className="text-gray-600">{study.solution}</p>
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold text-white mb-2">Results</h4>
                            <p className="text-gray-600">{study.results}</p>
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
                      <div key={index} className="p-6 bg-white/80 rounded-xl border border-purple-200/50">
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                        <div>
                          <div className="font-semibold text-white">{testimonial.name}</div>
                          <div className="text-purple-500 text-sm">{testimonial.role}</div>
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
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Let's work together to implement this system in your organization 
              and start seeing results immediately.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/919824341414?text=Hi%20Meet,%20I'm%20interested%20in%20implementing%20this%20system%20in%20my%20organization.%20Can%20we%20discuss%20the%20details?"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageSquare className="w-5 h-5" />
                <span>WhatsApp Me</span>
              </motion.a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-100 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Download Guide</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Follow My Journey Section */}
      <FollowMyJourney />
    </div>
  );
};

export default SystemDetailPage;
