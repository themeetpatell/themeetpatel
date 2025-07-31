import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  User, Briefcase, Target, Code, Trophy, Mic, FileText, Users,
  Linkedin, Twitter, Github, Instagram, Youtube, Mail, MapPin,
  ExternalLink, CheckCircle, Award, Star, TrendingUp, Zap,
  X, Send, Calendar, Clock, Eye, Heart, MessageSquare, BookOpen
} from 'lucide-react';

const PersonalPage = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const personalInfo = {
    name: "The Meet Patel",
    title: "Founder & CEO",
    company: "StartupOS",
    location: "Ahmedabad, India",
    email: "meet@startupos.com",
    linkedin: "https://linkedin.com/in/themeetpatel",
    twitter: "https://twitter.com/the_meetpatel",
    github: "https://github.com/themeetpatel",
    instagram: "https://instagram.com/the.meetpatell",
    youtube: "https://youtube.com/@themeetpatel",
    
    bio: "Serial entrepreneur and startup ecosystem builder with over 8 years of experience in building and scaling technology companies. Passionate about helping startups succeed through innovative solutions and strategic guidance.",
    
    about: "The Meet Patel is a visionary entrepreneur and startup ecosystem builder based in Mumbai, India. With over 8 years of experience in the technology sector, he has successfully founded and scaled multiple startups, helping hundreds of entrepreneurs build successful businesses. His expertise spans across product development, growth marketing, fundraising, and team building. Through StartupOS, he's creating a comprehensive platform that empowers startups at every stage of their journey.",
    
    experience: [
      {
        company: "Finanshels.com",
        position: "X-3",
        duration: "Aug 2024 - Present",
        description: "Learning, experimenting, building, and scaling Finanshels.com - The movement towards making businesses smarter with their money.",
        achievements: [
          "Leading strategic initiatives for business intelligence and financial optimization",
          "Driving innovation in fintech solutions for business growth",
          "Building scalable systems for financial management and analytics"
        ]
      },
      {
        company: "StudentHub - Jobs for Students and Fresh Graduates",
        position: "COO & Product Manager",
        duration: "Apr 2022 - May 2024",
        description: "Managed multiple startups, including Studenthub, Plugn, Tamr, and provided strategic consulting for sold startups like Pogi and theCapital.",
        achievements: [
          "Strategic Financial Turnaround: Turned a loss-making enterprise into a profitable one through increased revenue streams and achieved strategic cost reductions by 35%",
          "Operational Excellence: Improved team productivity by 40% by implementing 30+ tools like Jira, Slack, Zapier, Mixpanel, CRM systems, and Adobe Suite",
          "Expansion & Alliances: Played a pivotal role in expansion efforts, engaging in investments, acquisitions, and forging corporate alliances",
          "Process Enhancement: Developed and implemented 25+ policies, SOPs and procedures that reduced operational bottlenecks by 30%",
          "Project Management: Managed 20+ projects with Jira, reduced onboarding time by 30%, and enhanced communication through structured meetings",
          "HR Leadership: Spearheaded HR strategies for 250+ employees, including recruitment, onboarding, and payroll, enhancing retention rates by 25%",
          "Product Leadership: Led product innovation for 11 products, resulting in a 45% improvement in market performance and customer satisfaction"
        ]
      },
      {
        company: "TorchIt",
        position: "Head Of Operations",
        duration: "Mar 2020 - Oct 2021",
        description: "Developed innovative tech solutions for enhanced accessibility, including smart assistive technologies and home automation systems for differently-abled people.",
        achievements: [
          "Product Launch & Revenue Boost: Launched 2 new product lines, increasing revenue by 15% within 6 months",
          "Scaling & Efficiency: Scaled production from 45 to 800 units per day (1678% increase) across 3 locations through effective outsourcing",
          "CSR Impact & Operations: Led a global CSR project, distributing 100,000 smart canes, increasing brand recognition by 70%",
          "Supply-chain and Support: Managed complex supply chain operations, social media strategies, and established a Customer Service department"
        ]
      }
    ],
    
    education: [
      {
        institution: "Nirma University",
        degree: "B Tech in Mechanical Engineering",
        duration: "2015 - 2018",
        description: "Graduated with honors, specialized in Mechanical engineering and entrepreneurship."
      },
      {
        institution: "Nirma University",
        degree: "Diploma in Mechanical Engineering",
        duration: "2012-2015",
        description: "Intensive program focused on Project management and Operations"
      }
    ],
    
    skills: {
      technical: ["Operations Management", "Product Management", "Business Strategy", "CRM Systems", "Jira", "Slack", "Zapier", "Mixpanel", "Adobe Suite", "Process Automation", "Supply Chain Management"],
      business: ["Strategic Planning", "Financial Modeling", "Revenue Optimization", "Cost Reduction", "Market Analysis", "Business Development", "Investor Relations", "M&A", "Corporate Alliances"],
      leadership: ["Team Management", "HR Leadership", "Project Management", "Communication", "Problem Solving", "Decision Making", "Innovation", "Mentoring", "Operational Excellence"]
    },
    
    books: [
      {
        title: "The Eternal Love",
        subtitle: "Part - 1",
        quote: "It's True When Love Gives Everything and Demands Nothing in Return!",
        description: "A romantic novel exploring the depths of unconditional love and sacrifice. Set against a backdrop of timeless romance, this story captures the essence of true love that gives everything without expecting anything in return.",
        genre: "Romance",
        status: "Published",
        readLink: "#",
        requestLink: "#"
      },
      {
        title: "THE ENDLESS DEVOTION",
        subtitle: "PART-2",
        quote: "You'll experience your life's entire journey in the eyes of the person who'll love you endlessly!",
        description: "A cosmic romance novel that takes readers on a journey through the universe of love. This sequel explores the infinite nature of devotion and the profound connection between souls destined to love each other endlessly.",
        genre: "Romance",
        status: "Early Access",
        readLink: "#",
        requestLink: "#"
      }
    ],
    
    achievements: [
      {
        title: "Forbes 30 Under 30",
        year: "2023",
        description: "Recognized in the Technology category for innovative contributions to the startup ecosystem."
      },
      {
        title: "Entrepreneur of the Year",
        year: "2022",
        description: "Awarded by Startup India for outstanding contributions to the startup community."
      }
    ],
    
    projects: [
      {
        name: "StartupOS Platform",
        description: "Comprehensive startup ecosystem platform with 50+ integrated tools and services.",
        tech: ["React", "Node.js", "AWS", "MongoDB"],
        link: "https://startupos.com",
        status: "Live"
      }
    ],
    
    speaking: [
      {
        event: "TechCrunch Disrupt",
        year: "2023",
        topic: "The Future of Startup Ecosystems",
        location: "San Francisco, CA"
      }
    ],
    
    publications: [
      {
        title: "The Complete Guide to Startup Scaling",
        platform: "Medium",
        year: "2023",
        link: "https://medium.com/@themeetpatel/startup-scaling-guide",
        views: "50K+"
      }
    ],
    
    mentorship: {
      startups: 50,
      entrepreneurs: 200,
      successRate: "85%",
      focus: ["Product Strategy", "Growth Marketing", "Fundraising", "Team Building"]
    },
    
    interests: ["Technology", "Entrepreneurship", "Innovation", "Mentoring", "Reading", "Travel", "Fitness"]
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted');
  };

  const tabs = [
    { id: 'about', label: 'About', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'skills', label: 'Skills', icon: Target },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'books', label: 'Books', icon: BookOpen },
    { id: 'achievements', label: 'Achievements', icon: Trophy },
    { id: 'speaking', label: 'Speaking', icon: Mic },
    { id: 'publications', label: 'Publications', icon: FileText },
    { id: 'mentorship', label: 'Mentorship', icon: Users }
  ];

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-emerald-900/20 to-slate-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Profile Image */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full flex items-center justify-center mb-6">
                <span className="text-white text-4xl font-bold">MP</span>
              </div>
            </div>

            {/* Name and Title */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              {personalInfo.name}
            </h1>
            <p className="text-2xl text-white/70 mb-6">
              {personalInfo.title} at {personalInfo.company}
            </p>
            <p className="text-lg text-white/60 mb-8 max-w-3xl mx-auto">
              {personalInfo.bio}
            </p>

            {/* Location and Contact */}
            <div className="flex items-center justify-center space-x-6 text-white/60 mb-8">
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>{personalInfo.email}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              {[
                { icon: Linkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: Twitter, href: personalInfo.twitter, label: 'Twitter' },
                { icon: Github, href: personalInfo.github, label: 'GitHub' },
                { icon: Instagram, href: personalInfo.instagram, label: 'Instagram' },
                { icon: Youtube, href: personalInfo.youtube, label: 'YouTube' }
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center space-x-4">
              <motion.button
                onClick={() => setIsContactFormOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
              >
                Get In Touch
              </motion.button>
              <motion.a
                href="/blog"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors"
              >
                Read My Blog
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-1 ultra-glass rounded-xl p-2 overflow-x-auto">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-emerald-500 text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {/* About Section */}
              {activeTab === 'about' && (
                <div className="ultra-glass rounded-xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-6">About Me</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <p className="text-white/80 text-lg leading-relaxed mb-6">
                        {personalInfo.about}
                      </p>
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-white mb-4">Education</h3>
                        {personalInfo.education.map((edu, index) => (
                          <div key={index} className="bg-white/5 rounded-lg p-4">
                            <h4 className="text-white font-semibold">{edu.institution}</h4>
                            <p className="text-white/70">{edu.degree}</p>
                            <p className="text-white/50 text-sm">{edu.duration}</p>
                            <p className="text-white/60 text-sm mt-2">{edu.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Interests</h3>
                      <div className="flex flex-wrap gap-2 mb-8">
                        {personalInfo.interests.map((interest, index) => (
                          <span key={index} className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
                            {interest}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">Quick Stats</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-emerald-400">8+</div>
                          <div className="text-white/60 text-sm">Years Experience</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-emerald-400">50+</div>
                          <div className="text-white/60 text-sm">Startups Mentored</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-emerald-400">$10M+</div>
                          <div className="text-white/60 text-sm">Revenue Generated</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-emerald-400">100+</div>
                          <div className="text-white/60 text-sm">Team Members Led</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Experience Section */}
              {activeTab === 'experience' && (
                <div className="ultra-glass rounded-xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-8">Professional Experience</h2>
                  <div className="space-y-8">
                    {personalInfo.experience.map((exp, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 rounded-lg p-6"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                            <p className="text-emerald-400 font-medium">{exp.company}</p>
                            <p className="text-white/50 text-sm">{exp.duration}</p>
                          </div>
                          <div className="text-right">
                            <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
                              {exp.duration.split(' - ')[1]}
                            </span>
                          </div>
                        </div>
                        <p className="text-white/70 mb-4">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                              <span className="text-white/80 text-sm">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Skills Section */}
              {activeTab === 'skills' && (
                <div className="ultra-glass rounded-xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-8">Skills & Expertise</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Code className="w-5 h-5 mr-2 text-emerald-400" />
                        Technical Skills
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {personalInfo.skills.technical.map((skill, index) => (
                          <span key={index} className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-emerald-400" />
                        Business Skills
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {personalInfo.skills.business.map((skill, index) => (
                          <span key={index} className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                        <Users className="w-5 h-5 mr-2 text-emerald-400" />
                        Leadership Skills
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {personalInfo.skills.leadership.map((skill, index) => (
                          <span key={index} className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Projects Section */}
              {activeTab === 'projects' && (
                <div className="ultra-glass rounded-xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-8">Featured Projects</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {personalInfo.projects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-lg font-semibold text-white">{project.name}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            project.status === 'Live' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-blue-500/20 text-blue-400'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        <p className="text-white/70 text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, idx) => (
                            <span key={idx} className="bg-white/10 text-white/60 px-2 py-1 rounded text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center"
                        >
                          View Project
                          <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Books Section */}
              {activeTab === 'books' && (
                <div className="ultra-glass rounded-xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-8">Love Stories Written by Me</h2>
                  <p className="text-white/70 text-lg mb-8 text-center">
                    Here's something special for you to freshen up! Few Love stories written by me 😲
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {personalInfo.books.map((book, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
                      >
                        <div className="text-center mb-6">
                          <div className="w-48 h-64 mx-auto bg-gradient-to-br from-pink-400 via-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
                            <div className="absolute inset-0 bg-black/20" />
                            <div className="relative z-10 text-center p-4">
                              <p className="text-white/90 text-xs italic mb-2">{book.quote}</p>
                              <h3 className="text-white text-xl font-bold mb-2">{book.title}</h3>
                              <p className="text-white/80 text-sm">{book.subtitle}</p>
                              <p className="text-white/70 text-xs mt-2">A Novel by Meet Patel</p>
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold text-white mb-2">{book.title}</h3>
                        </div>
                        
                        <div className="space-y-4">
                          <p className="text-white/70 text-sm leading-relaxed">{book.description}</p>
                          
                          <div className="flex items-center justify-between">
                            <span className="bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full text-xs font-medium">
                              {book.genre}
                            </span>
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              book.status === 'Published' 
                                ? 'bg-green-500/20 text-green-400' 
                                : 'bg-purple-500/20 text-purple-400'
                            }`}>
                              {book.status}
                            </span>
                          </div>
                          
                          <div className="flex space-x-3">
                            {book.status === 'Published' ? (
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-1 bg-emerald-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-emerald-600 transition-colors"
                              >
                                Read Now
                              </motion.button>
                            ) : (
                              <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-1 bg-purple-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-purple-600 transition-colors"
                              >
                                Request Early Access
                              </motion.button>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-12 text-center">
                    <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
                    <div className="space-y-2 text-white/70">
                      <p>📧 the.meetpatell@gmail.com</p>
                      <p>📱 +971 50 495 4698 | +91 98 2434 1414</p>
                      <p>📍 In5, Dubai, UAE</p>
                    </div>
                    
                    <div className="mt-8">
                      <h4 className="text-lg font-semibold text-white mb-4">Subscribe My Newsletter:</h4>
                      <div className="flex justify-center space-x-4">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-blue-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                        >
                          Subscribe
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gray-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-gray-700 transition-colors"
                        >
                          Subscribe
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Achievements Section */}
              {activeTab === 'achievements' && (
                <div className="ultra-glass rounded-xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-8">Awards & Recognition</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {personalInfo.achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 rounded-lg p-6"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <Trophy className="w-6 h-6 text-emerald-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                            <p className="text-emerald-400 text-sm font-medium">{achievement.year}</p>
                            <p className="text-white/70 text-sm mt-2">{achievement.description}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Speaking Section */}
              {activeTab === 'speaking' && (
                <div className="ultra-glass rounded-xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-8">Speaking Engagements</h2>
                  <div className="space-y-6">
                    {personalInfo.speaking.map((event, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 rounded-lg p-6"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-white">{event.event}</h3>
                            <p className="text-emerald-400 font-medium">{event.topic}</p>
                            <p className="text-white/50 text-sm">{event.location}</p>
                          </div>
                          <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm">
                            {event.year}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Publications Section */}
              {activeTab === 'publications' && (
                <div className="ultra-glass rounded-xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-8">Publications & Writing</h2>
                  <div className="space-y-6">
                    {personalInfo.publications.map((pub, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/5 rounded-lg p-6"
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-white">{pub.title}</h3>
                            <p className="text-emerald-400 text-sm">{pub.platform} • {pub.year}</p>
                            <p className="text-white/50 text-sm">{pub.views} views</p>
                          </div>
                          <a
                            href={pub.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-400 hover:text-emerald-300 text-sm font-medium flex items-center"
                          >
                            Read Article
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Mentorship Section */}
              {activeTab === 'mentorship' && (
                <div className="ultra-glass rounded-xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-8">Mentorship & Community</h2>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-6">Mentorship Impact</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-3xl font-bold text-emerald-400">{personalInfo.mentorship.startups}</div>
                          <div className="text-white/60 text-sm">Startups Mentored</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-3xl font-bold text-emerald-400">{personalInfo.mentorship.entrepreneurs}</div>
                          <div className="text-white/60 text-sm">Entrepreneurs Helped</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-3xl font-bold text-emerald-400">{personalInfo.mentorship.successRate}</div>
                          <div className="text-white/60 text-sm">Success Rate</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-3xl font-bold text-emerald-400">8+</div>
                          <div className="text-white/60 text-sm">Years Mentoring</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Focus Areas</h3>
                      <div className="space-y-3">
                        {personalInfo.mentorship.focus.map((area, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-emerald-400" />
                            <span className="text-white/80">{area}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-8">
                        <h3 className="text-xl font-semibold text-white mb-4">Get Mentored</h3>
                        <p className="text-white/70 mb-4">
                          I'm passionate about helping entrepreneurs succeed. If you're building a startup and need guidance, I'd love to help.
                        </p>
                        <motion.button
                          onClick={() => setIsContactFormOpen(true)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-emerald-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
                        >
                          Request Mentorship
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {isContactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsContactFormOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="ultra-glass rounded-xl p-8 max-w-md w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-white">Get In Touch</h3>
                <button
                  onClick={() => setIsContactFormOpen(false)}
                  className="text-white/60 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-white/80 text-sm mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
                    placeholder="How can I help you?"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PersonalPage; 