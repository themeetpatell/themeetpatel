import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, Users, TrendingUp, BookOpen, Mail, Send, X, CheckCircle,
  Linkedin, Twitter, Github, Instagram, Youtube, ExternalLink,
  Award, Heart, Zap, Star, ArrowRight, Play, Quote, Calendar,
  MapPin, Phone, MessageSquare, Clock, Eye, ChevronRight
} from 'lucide-react';

const HomePage = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const personalInfo = {
    name: "The Meet Patel",
    title: "Entrepreneur • Author • Mentor",
    location: "Ahmedabad, India",
    email: "meet@startupos.com",
    bio: "Serial entrepreneur and startup ecosystem builder with over 8 years of experience in building and scaling technology companies. Passionate about helping startups succeed through innovative solutions and strategic guidance.",
    
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/the-startupos/", icon: Linkedin },
      { label: "Twitter", href: "https://x.com/the_startupos", icon: Twitter },
      { label: "GitHub", href: "https://github.com/startupos", icon: Github },
      { label: "Instagram", href: "http://instagram.com/thestartupos/", icon: Instagram },
      { label: "YouTube", href: "https://youtube.com/@thestartupos", icon: Youtube }
    ]
  };

  const stats = [
    {
      number: "8+",
      label: "Years Experience",
      icon: Target,
      color: "from-cyan-400 to-teal-500"
    },
    {
      number: "50+",
      label: "Startups Mentored",
      icon: Users,
      color: "from-teal-400 to-cyan-500"
    },
    {
      number: "$10M+",
      label: "Revenue Generated",
      icon: TrendingUp,
      color: "from-emerald-400 to-teal-500"
    },
    {
      number: "2",
      label: "Books Published",
      icon: BookOpen,
      color: "from-cyan-300 to-emerald-400"
    }
  ];

  const books = [
    {
      title: "The Eternal Love",
      subtitle: "Part - 1",
      quote: "It's True When Love Gives Everything and Demands Nothing in Return!",
      description: "A romantic novel exploring the depths of unconditional love and sacrifice. Set against a backdrop of timeless romance, this story captures the essence of true love that gives everything without expecting anything in return.",
      genre: "Romance",
      status: "Published",
      coverColor: "from-pink-400 via-purple-500 to-blue-500",
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
      coverColor: "from-rose-400 via-pink-500 to-purple-600",
      readLink: "#",
      requestLink: "#"
    }
  ];

  const usps = [
    {
      title: "Proven Track Record",
      description: "8+ years of experience building and scaling technology companies, with a 85% success rate in mentoring startups.",
      icon: Award,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Holistic Approach",
      description: "Combining technical expertise, business strategy, and creative writing to provide comprehensive solutions.",
      icon: Heart,
      color: "from-pink-400 to-rose-500"
    },
    {
      title: "Innovation First",
      description: "Always pushing boundaries and finding creative solutions to complex problems in entrepreneurship.",
      icon: Zap,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: "Authentic Storytelling",
      description: "Sharing real experiences and insights through writing that connects and inspires others.",
      icon: BookOpen,
      color: "from-purple-400 to-indigo-500"
    }
  ];

  const achievements = [
    {
      title: "Forbes 30 Under 30",
      description: "Recognized for exceptional entrepreneurial achievements",
      icon: Star,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Entrepreneur of the Year",
      description: "Awarded by Startup India for outstanding contributions",
      icon: Award,
      color: "from-blue-400 to-indigo-500"
    },
    {
      title: "Published Author",
      description: "Author of romantic novels and business guides",
      icon: BookOpen,
      color: "from-pink-400 to-rose-500"
    },
    {
      title: "Startup Ecosystem Builder",
      description: "Built and scaled multiple successful startups",
      icon: Users,
      color: "from-green-400 to-emerald-500"
    }
  ];

  const blogPosts = [
    {
      title: "The Complete Guide to Startup Scaling",
      excerpt: "Learn the essential strategies and frameworks that have helped 50+ startups scale from idea to market leaders.",
      category: "Entrepreneurship",
      readTime: "8 min read",
      date: "Dec 15, 2024",
      slug: "complete-guide-startup-scaling",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Building a Culture of Innovation",
      excerpt: "How to create an environment where creativity thrives and breakthrough ideas are born every day.",
      category: "Leadership",
      readTime: "6 min read",
      date: "Dec 10, 2024",
      slug: "building-culture-innovation",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "The Art of Storytelling in Business",
      excerpt: "Why authentic storytelling is your most powerful tool for connecting with customers and building lasting relationships.",
      category: "Marketing",
      readTime: "5 min read",
      date: "Dec 5, 2024",
      slug: "art-storytelling-business",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen ultra-gradient-bg">
      {/* Hero Section - Apple Style */}
      <section ref={heroRef} className="pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-teal-900/20 to-slate-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Profile Avatar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-cyan-400 via-teal-500 to-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-2xl">
                <span className="text-white text-4xl font-bold">MP</span>
              </div>
            </motion.div>

            {/* Name and Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
            >
              {personalInfo.name}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-2xl md:text-3xl text-cyan-200 mb-8 font-light"
            >
              {personalInfo.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                onClick={() => setIsContactFormOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-teal-500 text-white rounded-2xl font-semibold hover:from-cyan-500 hover:to-teal-600 transition-all duration-300 text-lg"
              >
                Get In Touch
              </motion.button>
              
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 text-white rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 text-lg backdrop-blur-sm"
              >
                Learn More
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Apple Style */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="apple-glass p-8 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="w-8 h-8 text-white" />
                  </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {stat.number}
                  </div>
                <div className="apple-caption">
                    {stat.label}
                  </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Books Section - Apple Style */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Love Stories Written by Me
            </h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
              Here's something special for you to freshen up! Few Love stories written by me 😲
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {books.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="apple-glass rounded-3xl p-8 group hover:scale-105 transition-all duration-500"
              >
                {/* Book Cover */}
                <div className="text-center mb-8">
                  <div className={`w-64 h-80 mx-auto bg-gradient-to-br ${book.coverColor} rounded-2xl flex items-center justify-center mb-6 relative overflow-hidden shadow-2xl`}>
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 text-center p-6">
                      <p className="text-white/90 text-sm italic mb-4 leading-relaxed">{book.quote}</p>
                      <h3 className="text-white text-2xl font-bold mb-2">{book.title}</h3>
                      <p className="text-white/80 text-lg">{book.subtitle}</p>
                      <p className="text-white/70 text-sm mt-3">A Novel by Meet Patel</p>
                    </div>
                  </div>
                </div>

                {/* Book Details */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-white text-center">{book.title}</h3>
                  
                  <p className="text-white/70 leading-relaxed text-center">
                    {book.description}
                  </p>
                  
                  <div className="flex items-center justify-center space-x-4">
                    <span className="bg-pink-500/20 text-pink-400 px-4 py-2 rounded-full text-sm font-medium">
                      {book.genre}
                    </span>
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      book.status === 'Published' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-purple-500/20 text-purple-400'
                    }`}>
                      {book.status}
                    </span>
                  </div>
                  
                  <div className="flex space-x-4">
                    {book.status === 'Published' ? (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-cyan-500 text-white py-3 px-6 rounded-xl text-sm font-semibold hover:bg-cyan-600 transition-colors"
                      >
                        Read Now
                      </motion.button>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 bg-purple-500 text-white py-3 px-6 rounded-xl text-sm font-semibold hover:bg-purple-600 transition-colors"
                      >
                        Request Early Access
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Section 1 - Storytelling */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                The Journey
            </h2>
              <p className="text-xl text-cyan-200 leading-relaxed">
                From a curious mechanical engineer to a serial entrepreneur, my journey has been about pushing boundaries and creating impact.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                What started as a simple curiosity about how businesses work has evolved into a mission to help other entrepreneurs succeed. Through every challenge, every success, and every failure, I've learned that the most powerful tool an entrepreneur can have is the right mindset and the willingness to learn.
              </p>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-lg group"
              >
                Read My Story
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
          </motion.div>
            
                <motion.div
              initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="apple-glass rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-cyan-400 via-teal-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-6xl">📚</span>
                      </div>
                  </div>
                </motion.div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Why Work With Me
            </h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
              A unique combination of technical expertise, business acumen, and creative storytelling that sets me apart.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {usps.map((usp, index) => (
              <motion.div
                key={usp.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="apple-glass rounded-2xl p-8 group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${usp.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <usp.icon className="w-8 h-8 text-white" />
                  </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {usp.title}
                  </h3>
                <p className="text-white/70 leading-relaxed">
                  {usp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Latest Insights
            </h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
              Thoughts on entrepreneurship, leadership, and the journey of building meaningful things.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="apple-glass rounded-2xl p-6 group hover:scale-105 transition-all duration-300"
              >
                <div className={`w-full h-48 bg-gradient-to-br ${post.color} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="relative z-10 text-center">
                    <BookOpen className="w-12 h-12 text-white mx-auto mb-2" />
                    <span className="text-white text-sm font-medium">{post.category}</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-white/60">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <motion.a
                    href={`/blog/${post.slug}`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:underline"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                  </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <motion.a
              href="/blog"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-teal-500 text-white rounded-2xl font-semibold hover:from-cyan-500 hover:to-teal-600 transition-all duration-300 text-lg"
            >
              View All Articles
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* About Me CTA Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="apple-glass rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Want to Know More About Me?
            </h2>
            <p className="text-xl text-cyan-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover my journey, experience, skills, and the stories that shaped me into the entrepreneur and mentor I am today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-teal-500 text-white rounded-2xl font-semibold hover:from-cyan-500 hover:to-teal-600 transition-all duration-300 text-lg"
              >
                Learn My Story
              </motion.a>
              
              <motion.a
                href="/portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 text-white rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 text-lg backdrop-blur-sm"
              >
                View My Work
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Section 2 - Achievements */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="apple-glass rounded-3xl p-8 aspect-square flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center">
                  <span className="text-white text-6xl">🏆</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8 order-1 lg:order-2"
            >
              <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                Recognition & Impact
              </h2>
              <p className="text-xl text-cyan-200 leading-relaxed">
                From Forbes 30 Under 30 to mentoring 50+ startups, my work has been recognized and has created real impact.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={achievement.title} className="apple-glass rounded-xl p-4">
                    <div className={`w-8 h-8 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center mb-3`}>
                      <achievement.icon className="w-4 h-4 text-white" />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">{achievement.title}</h4>
                    <p className="text-white/60 text-xs">{achievement.description}</p>
                  </div>
                ))}
              </div>
              <motion.a
                href="/portfolio"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-lg group"
              >
                View My Work
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-32 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Let's Create Something Amazing
                </h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
              Ready to start your entrepreneurial journey or need guidance on your current venture? I'd love to hear from you.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="apple-glass rounded-3xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/80 text-sm mb-2 font-medium">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2 font-medium">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white/80 text-sm mb-2 font-medium">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className="block text-white/80 text-sm mb-2 font-medium">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell me about your project, question, or how I can help you..."
                />
                </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 px-8 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 text-lg ${
                  isSubmitting
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-400 to-teal-500 hover:from-cyan-500 hover:to-teal-600'
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Success Message */}
            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span className="text-green-300">
                    Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.
                  </span>
              </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Social Links Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-8">Follow My Journey</h2>
            <div className="flex items-center justify-center space-x-6">
              {personalInfo.socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-300"
                >
                  <social.icon className="w-6 h-6" />
                </motion.a>
            ))}
          </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;