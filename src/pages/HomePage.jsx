import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, Users, TrendingUp, BookOpen, Mail, Send, X, CheckCircle,
  Linkedin, Twitter, Github, Instagram, Youtube, ExternalLink,
  Award, Heart, Zap, Star, ArrowRight, Play, Quote, Calendar,
  MapPin, Phone, MessageSquare, Clock, Eye, ChevronRight, Briefcase,
  BookOpen as Medium, Calendar as Calendly
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import FollowMyJourney from '../components/FollowMyJourney';
import meetPatelImage from '../assets/themeetpatel.jpeg';
import meetPatelImage2 from '../assets/the meet patel.jpeg';
import logoImage from '../assets/logo for themeetpatel.png';

const HomePage = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    countryCode: '+971',
    whatsapp: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCommunityFormOpen, setIsCommunityFormOpen] = useState(false);
  const [communityFormData, setCommunityFormData] = useState({
    linkedinId: '',
    email: '',
    whatsapp: '',
    businessName: '',
    role: '',
    reason: ''
  });
  
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const countryCodes = [
    { code: '+971', country: 'UAE', flag: '🇦🇪' },
    { code: '+91', country: 'India', flag: '🇮🇳' },
    { code: '+1', country: 'USA/Canada', flag: '🇺🇸' },
    { code: '+44', country: 'UK', flag: '🇬🇧' },
    { code: '+49', country: 'Germany', flag: '🇩🇪' },
    { code: '+33', country: 'France', flag: '🇫🇷' },
    { code: '+39', country: 'Italy', flag: '🇮🇹' },
    { code: '+34', country: 'Spain', flag: '🇪🇸' },
    { code: '+31', country: 'Netherlands', flag: '🇳🇱' },
    { code: '+41', country: 'Switzerland', flag: '🇨🇭' },
    { code: '+43', country: 'Austria', flag: '🇦🇹' },
    { code: '+46', country: 'Sweden', flag: '🇸🇪' },
    { code: '+47', country: 'Norway', flag: '🇳🇴' },
    { code: '+45', country: 'Denmark', flag: '🇩🇰' },
    { code: '+358', country: 'Finland', flag: '🇫🇮' },
    { code: '+32', country: 'Belgium', flag: '🇧🇪' },
    { code: '+351', country: 'Portugal', flag: '🇵🇹' },
    { code: '+30', country: 'Greece', flag: '🇬🇷' },
    { code: '+48', country: 'Poland', flag: '🇵🇱' },
    { code: '+420', country: 'Czech Republic', flag: '🇨🇿' },
    { code: '+36', country: 'Hungary', flag: '🇭🇺' },
    { code: '+40', country: 'Romania', flag: '🇷🇴' },
    { code: '+359', country: 'Bulgaria', flag: '🇧🇬' },
    { code: '+385', country: 'Croatia', flag: '🇭🇷' },
    { code: '+386', country: 'Slovenia', flag: '🇸🇮' },
    { code: '+421', country: 'Slovakia', flag: '🇸🇰' },
    { code: '+370', country: 'Lithuania', flag: '🇱🇹' },
    { code: '+371', country: 'Latvia', flag: '🇱🇻' },
    { code: '+372', country: 'Estonia', flag: '🇪🇪' },
    { code: '+353', country: 'Ireland', flag: '🇮🇪' },
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
    { code: '+27', country: 'South Africa', flag: '🇿🇦' },
    { code: '+55', country: 'Brazil', flag: '🇧🇷' },
    { code: '+54', country: 'Argentina', flag: '🇦🇷' },
    { code: '+56', country: 'Chile', flag: '🇨🇱' },
    { code: '+57', country: 'Colombia', flag: '🇨🇴' },
    { code: '+52', country: 'Mexico', flag: '🇲🇽' },
    { code: '+51', country: 'Peru', flag: '🇵🇪' },
    { code: '+58', country: 'Venezuela', flag: '🇻🇪' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
    { code: '+82', country: 'South Korea', flag: '🇰🇷' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
    { code: '+66', country: 'Thailand', flag: '🇹🇭' },
    { code: '+63', country: 'Philippines', flag: '🇵🇭' },
    { code: '+62', country: 'Indonesia', flag: '🇮🇩' },
    { code: '+84', country: 'Vietnam', flag: '🇻🇳' },
    { code: '+90', country: 'Turkey', flag: '🇹🇷' },
    { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
    { code: '+973', country: 'Bahrain', flag: '🇧🇭' },
    { code: '+974', country: 'Qatar', flag: '🇶🇦' },
    { code: '+968', country: 'Oman', flag: '🇴🇲' },
    { code: '+961', country: 'Lebanon', flag: '🇱🇧' },
    { code: '+962', country: 'Jordan', flag: '🇯🇴' },
    { code: '+972', country: 'Israel', flag: '🇮🇱' },
    { code: '+20', country: 'Egypt', flag: '🇪🇬' },
    { code: '+212', country: 'Morocco', flag: '🇲🇦' },
    { code: '+213', country: 'Algeria', flag: '🇩🇿' },
    { code: '+216', country: 'Tunisia', flag: '🇹🇳' },
    { code: '+218', country: 'Libya', flag: '🇱🇾' },
    { code: '+249', country: 'Sudan', flag: '🇸🇩' },
    { code: '+251', country: 'Ethiopia', flag: '🇪🇹' },
    { code: '+254', country: 'Kenya', flag: '🇰🇪' },
    { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
    { code: '+233', country: 'Ghana', flag: '🇬🇭' },
    { code: '+27', country: 'South Africa', flag: '🇿🇦' },
    { code: '+7', country: 'Russia', flag: '🇷🇺' },
    { code: '+380', country: 'Ukraine', flag: '🇺🇦' },
    { code: '+375', country: 'Belarus', flag: '🇧🇾' },
    { code: '+374', country: 'Armenia', flag: '🇦🇲' },
    { code: '+995', country: 'Georgia', flag: '🇬🇪' },
    { code: '+994', country: 'Azerbaijan', flag: '🇦🇿' },
    { code: '+998', country: 'Uzbekistan', flag: '🇺🇿' },
    { code: '+7', country: 'Kazakhstan', flag: '🇰🇿' },
    { code: '+996', country: 'Kyrgyzstan', flag: '🇰🇬' },
    { code: '+992', country: 'Tajikistan', flag: '🇹🇯' },
    { code: '+993', country: 'Turkmenistan', flag: '🇹🇲' }
  ];

  const personalInfo = {
    name: "The Meet Patel",
    title: "Business • Operations • Product • Growth",
    location: "Dubai, UAE",
    email: "the.meetll@gmail.com",
    bio: "A Startup ecosystem builder with over 8 years of experience in building and scaling technology companies. Passionate about helping startups succeed through innovative solutions and strategic guidance.",
    
    projects: [
      {
        name: "StartupOS",
        description: "Complete startup development platform helping entrepreneurs build, launch, and scale their ventures.",
        category: "Platform",
        year: "2023"
      },
      {
        name: "Finanshels.com",
        description: "Financial management platform for small businesses with automated bookkeeping and taxes.",
        category: "Fintech",
        year: "2022"
      },
      {
        name: "StudentHub",
        description: "Recruitment technology platform connecting students with jobs and resources and companies with students.",
        category: "EdTech",
        year: "2021"
      },
      {
        name: "ZeroHuman",
        description: "AI-powered automation platform for Modelling industry and media creation.",
        category: "AI",
        year: "2024"
      },
      {
        name: "MealVerse",
        description: "Food technology platform revolutionizing home-cooked meal planning and delivery services.",
        category: "FoodTech",
        year: "2024"
      },
      {
        name: "TorchIt",
        description: "An assis-tech startup helping differently-abled people with smart devices.",
        category: "Mobile",
        year: "2020"
      }
    ],
    
    socialLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/themeetpatel/", icon: Linkedin },
      { label: "Twitter", href: "https://x.com/the_meetpatel", icon: Twitter },
      { label: "GitHub", href: "https://github.com/themeetpatell", icon: Github },
      { label: "Instagram", href: "http://instagram.com/the.meetpatell/", icon: Instagram },
      { label: "YouTube", href: "https://youtube.com/@themeetpatel", icon: Youtube },
      { label: "Medium", href: "https://medium.com/@themeetpatel", icon: Medium },
      { label: "Calendly", href: "https://calendly.com/themeetpatell/quick-connect", icon: Calendly }
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
      number: "10+",
      label: "Startups Mentored",
      icon: Heart,
      color: "from-teal-400 to-cyan-500"
    },
    {
      number: "300+",
      label: "Team Members Led",
      icon: Users,
      color: "from-emerald-400 to-teal-500"
    },
    {
      number: "2",
      label: "Books Published",
      icon: BookOpen,
      color: "from-cyan-300 to-emerald-400"
    }
  ];

  const blogPosts = [
    {
      slug: "building-startup-ecosystem",
      title: "Building a Thriving Startup Ecosystem",
      excerpt: "How to create an environment where startups can flourish and grow sustainably.",
      readTime: "8 min read",
      date: "2024-01-15",
      category: "Entrepreneurship"
    },
    {
      slug: "scaling-operations-efficiency",
      title: "Scaling Operations for Maximum Efficiency",
      excerpt: "Proven strategies for scaling your business operations without losing quality.",
      readTime: "6 min read",
      date: "2024-01-10",
      category: "Operations"
    },
    {
      slug: "leadership-remote-teams",
      title: "Leading Remote Teams to Success",
      excerpt: "Essential leadership principles for managing distributed teams effectively.",
      readTime: "10 min read",
      date: "2024-01-05",
      category: "Leadership"
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
      readLink: "/The Eternal Love by The Meet Patel.pdf",
      requestLink: "#"
    },
    {
      title: "The Endless Love",
      subtitle: "PART-2",
      quote: "You'll experience your life's entire journey in the eyes which'll love you endlessly!",
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
      title: "300+ Members",
      description: "Created a community of 1000+ entrepreneurs and investors in StartupOS",
      icon: Star,
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Building Leadership Team",
      description: "Built Entire Management team in 6 months at Million dollars company",
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
      title: "Leadership & Management",
      description: "Led 270+ team members at age of 26 remotely",
      icon: Users,
      color: "from-green-400 to-emerald-500"
    }
  ];


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCommunityInputChange = (e) => {
    setCommunityFormData({
      ...communityFormData,
      [e.target.name]: e.target.value
    });
  };

  const handleJoinCommunity = () => {
    setIsCommunityFormOpen(true);
  };

  const handleCommunitySubmit = async (e) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `Hi Meet! I want to join the StartupOS WhatsApp community.

Here are my details:
• LinkedIn: ${communityFormData.linkedinId}
• Email: ${communityFormData.email}
• WhatsApp: ${communityFormData.whatsapp}
• Business: ${communityFormData.businessName}
• Role: ${communityFormData.role}
• Reason: ${communityFormData.reason}

Please add me to the community!`;

    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/919824341414?text=${encodedMessage}`, '_blank');
    
    // Close the form
    setIsCommunityFormOpen(false);
    
    // Reset form data
    setCommunityFormData({
      linkedinId: '',
      email: '',
      whatsapp: '',
      businessName: '',
      role: '',
      reason: ''
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', countryCode: '+971', whatsapp: '', subject: '', message: '' });
    
    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // Structured Data for Homepage
  const homepageStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "The Meet Patel - A Startup Guy | Head of Business Excellence",
    "description": "Meet The Meet Patel - A Startup Guy with 8+ years experience building and scaling startups. Founder of StartupOS, ZeroHuman, MealVerse. Expert in business operations, product development, and startup ecosystem building.",
    "url": "https://themeetpatel.in",
    "mainEntity": {
      "@type": "Person",
      "name": "The Meet Patel",
      "alternateName": ["Meet Patel", "themeetpatel"],
      "jobTitle": "Head of Business Excellence & A Startup Guy",
      "description": "A startup ecosystem builder with over 8 years of experience in building and scaling technology companies.",
      "url": "https://themeetpatel.in",
      "image": "https://themeetpatel.in/meet-patel-profile.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "email": "the.meetll@gmail.com",
      "sameAs": [
        "https://www.linkedin.com/in/themeetpatel/",
        "https://x.com/the_meetpatel",
        "https://github.com/themeetpatell",
        "http://instagram.com/the.meetpatell/",
        "https://youtube.com/@themeetpatel",
        "https://medium.com/@themeetpatel"
      ],
      "knowsAbout": [
        "Entrepreneurship",
        "Startup Ecosystem Building", 
        "Business Operations",
        "Product Development",
        "Startup Scaling",
        "Business Strategy",
        "Operations Management",
        "Startup Leadership",
        "Business Growth",
        "Startup Mentoring"
      ],
      "hasOccupation": {
        "@type": "Occupation",
        "name": "Head of Business Excellence",
        "description": "Building and scaling multiple technology startups",
        "occupationLocation": {
          "@type": "City",
          "name": "Dubai, UAE"
        }
      }
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://themeetpatel.in"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen ultra-gradient-bg">
      <SEOHead 
        title="The Meet Patel - A Startup Guy | Business Excellence | Business Operations Expert"
        description="Meet The Meet Patel - A Startup Guy with 8+ years experience building and scaling startups. Founder of StartupOS, ZeroHuman, MealVerse. Expert in business operations, product development, and startup ecosystem building. Based in Dubai, UAE."
        keywords="The Meet Patel, Meet Patel, themeetpatel, serial entrepreneur, startup ecosystem builder, business operations expert, StartupOS founder, ZeroHuman founder, MealVerse founder, startup mentor, Dubai entrepreneur, business consultant, product development expert, startup scaling, business growth, entrepreneurship, startup advisor, business strategy, operations management, startup leadership"
        canonical="/"
        ogImage="/og-image.jpg"
        structuredData={homepageStructuredData}
      />
      
      {/* Hero Section - Apple Style */}
      <section ref={heroRef} className="pt-16 sm:pt-20 pb-20 sm:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900/20 to-black" />
        
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
              className="mb-8 sm:mb-12"
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 rounded-full flex items-center justify-center mb-6 sm:mb-8 shadow-2xl overflow-hidden">
                <img
                  src={logoImage}
                  alt="The Meet Patel Logo"
                  className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
                />
              </div>
          </motion.div>

            {/* Banner Title */}
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-8 relative"
            >
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500/20 rounded-full blur-sm"></div>
              <div className="absolute -bottom-2 -right-4 w-6 h-6 bg-purple-500/20 rounded-full blur-sm"></div>
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-600/20 rounded-full blur-sm"></div>
              <div className="absolute top-1/2 -right-8 w-5 h-5 bg-purple-600/20 rounded-full blur-sm"></div>
              
              <div className="relative">
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-2 sm:mb-4 tracking-tight">
                  Meet The
            </h1>
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent mb-4 sm:mb-6 tracking-tight relative">
                  Meet Patel
                  {/* Underline Effect */}
                  <div className="absolute -bottom-1 sm:-bottom-2 left-0 right-0 h-0.5 sm:h-1 bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 rounded-full opacity-60"></div>
                </h1>
              </div>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-8"
            >
              <p className="text-lg sm:text-2xl md:text-3xl text-gray-300 mb-3 sm:mb-4 font-light">
                {personalInfo.title}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-1 sm:space-y-0 sm:space-x-2 text-sm sm:text-lg text-white/60">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>{personalInfo.location}</span>
                </div>
                <span className="hidden sm:inline">•</span>
                <span>A Startup Guy</span>
                <span className="hidden sm:inline">•</span>
                <span>System Builder</span>
              </div>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4 sm:px-0"
            >
              A Startup Guy and <Link to="/about" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">System builder</Link> with over 8 years of experience in building and scaling technology companies. Passionate about helping startups succeed through innovative solutions and strategic guidance. Explore my <Link to="/portfolio" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">portfolio of successful ventures</Link> and <Link to="/systems" className="text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium">proven business systems</Link>.
            </motion.div>

            {/* Call to Action Buttons */}
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 px-4 sm:px-0"
            >
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-blue-500 via-purple-600 to-blue-700 text-white px-6 sm:px-10 py-3 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:from-blue-600 hover:via-purple-700 hover:to-blue-800 transition-all duration-300 flex items-center space-x-2 sm:space-x-3 shadow-2xl shadow-blue-500/30 hover:shadow-blue-500/50 overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Discover My Journey</span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-white/5 backdrop-blur-sm text-white px-6 sm:px-10 py-3 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 flex items-center space-x-2 sm:space-x-3 border-2 border-white/20 hover:border-white/40 shadow-xl hover:shadow-2xl overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">Start a Conversation</span>
              </motion.a>
          </motion.div>

          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
                <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
                  About Me
                </h2>
                <p className="text-lg sm:text-xl text-cyan-200 mb-4 sm:mb-6">
                  I help founders build, scale, and stabilize
                </p>
                  </div>
              <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-4 sm:mb-6">
                Fixing broken systems, designing smart strategies, and transforming chaos into clarity and growth. A generalist with range who connects dots across people, products, processes, and performance — fast.
              </p>
              
              {/* Key Strengths */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Diagnosing messy problems, fast</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Building scalable systems that don't break under pressure</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Leading from the front in high-stakes, rapid-growth environments</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-300">Saying the hard truths when they matter most</p>
                </div>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Founders trust me to push when needed, pivot when smart, and double down when it counts. I'm also a student of psychology, user-led growth, and storytelling.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-4 bg-white/5 rounded-xl border border-white/10"
                  >
                    <div className="text-3xl font-bold text-cyan-400 mb-1">
                    {stat.number}
                  </div>
                    <div className="text-white/60 text-sm">
                    {stat.label}
                  </div>
              </motion.div>
            ))}
              </div>

              <motion.a
                href="/about"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center bg-gradient-to-r from-cyan-400/20 to-teal-500/20 hover:from-cyan-400/30 hover:to-teal-500/30 text-cyan-400 hover:text-cyan-300 font-bold text-lg px-8 py-4 rounded-2xl border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Explore My Full Story</span>
                <ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <img
                  src={meetPatelImage}
                  alt="The Meet Patel - A Startup Guy & System Builder"
                  className="w-full h-96 object-cover rounded-3xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Portfolio Section */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              My Portfolio
            </h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto">
              A showcase of my projects, ventures, and the impact I've created in the startup ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalInfo.projects.slice(0, 6).map((project, index) => (
          <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="apple-glass rounded-3xl p-6 group hover:scale-105 transition-transform duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{project.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-purple-400 font-semibold">{project.category}</span>
                  <span className="text-xs text-white/60">{project.year}</span>
                </div>
              </motion.div>
            ))}
          </div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.a
              href="/portfolio"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-purple-400 hover:text-purple-300 font-bold text-lg px-8 py-4 rounded-2xl border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">View All Projects</span>
              <ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Systems Section */}
      <section className="py-16 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight">
              Systems Built
            </h2>
            <p className="text-lg sm:text-xl text-cyan-200 max-w-3xl mx-auto px-4 sm:px-0">
              Comprehensive frameworks, processes, and systems I've developed to help startups scale efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {[
              {
                name: "StartupOS Framework",
                description: "Complete startup development methodology covering ideation to scaling",
                category: "Framework",
                icon: "🚀"
              },
              {
                name: "Practice Management System",
                description: "Comprehensive accounting firm management software with automation",
                category: "Software",
                icon: "📊"
              },
              {
                name: "Growth Hacking Playbook",
                description: "Proven strategies and tactics for rapid user acquisition and retention",
                category: "Process",
                icon: "📈"
              },
              {
                name: "Team Building SOPs",
                description: "Standard operating procedures for building and managing remote teams",
                category: "Process",
                icon: "👥"
              },
              {
                name: "Financial Modeling Templates",
                description: "Advanced financial models for startups and investment analysis",
                category: "Template",
                icon: "💰"
              },
              {
                name: "Customer Success Framework",
                description: "Systematic approach to customer onboarding, retention, and growth",
                category: "Framework",
                icon: "🎯"
              }
            ].map((system, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="apple-glass rounded-3xl p-6 group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-4xl mb-4">{system.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{system.name}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{system.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-cyan-400 font-semibold">{system.category}</span>
                  <span className="text-xs text-white/60">Available</span>
                </div>
              </motion.div>
            ))}
          </div>

                <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.a
              href="/systems"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center bg-gradient-to-r from-cyan-400/20 to-teal-500/20 hover:from-cyan-400/30 hover:to-teal-500/30 text-cyan-400 hover:text-cyan-300 font-bold text-lg px-8 py-4 rounded-2xl border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Explore All Systems</span>
              <ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
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
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                <BookOpen className="w-6 h-6 text-white" />
                  </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                Latest Insights
            </h2>
            </div>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed mb-8">
              Thoughts on entrepreneurship, leadership, and the journey of building meaningful things.
            </p>
            
            {/* Blog Stats */}
            <div className="flex items-center justify-center space-x-8 text-white/60">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-sm">15+ Articles</span>
                  </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                <span className="text-sm">15K+ Views</span>
          </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm">800+ Likes</span>
        </div>
        </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post, index) => (
          <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="apple-glass rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                {/* Enhanced Header with Gradient */}
                <div className={`w-full h-48 bg-gradient-to-br ${post.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
              </span>
                      </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-white/80 text-sm">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                        <span>•</span>
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                  </div>
                      <div className="flex items-center space-x-2">
                        <Eye className="w-4 h-4 text-white/60" />
                        <span className="text-white/60 text-sm">2.5K</span>
            </div>
          </div>
        </div>
                  
                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  </div>
                  </div>
                  
                {/* Enhanced Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors leading-tight mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-white/70 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Social Sharing Options */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-white/50 hover:text-blue-400 hover:bg-blue-500/10 rounded-lg transition-all duration-200"
                        title="Share on LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-white/50 hover:text-sky-400 hover:bg-sky-500/10 rounded-lg transition-all duration-200"
                        title="Share on Twitter"
                      >
                        <Twitter className="w-4 h-4" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-white/50 hover:text-green-400 hover:bg-green-500/10 rounded-lg transition-all duration-200"
                        title="Share on WhatsApp"
                      >
                        <MessageSquare className="w-4 h-4" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-white/50 hover:text-gray-400 hover:bg-gray-500/10 rounded-lg transition-all duration-200"
                        title="Copy Link"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                      </div>
                  
                    <div className="flex items-center space-x-2 text-white/40 text-sm">
                      <Heart className="w-4 h-4" />
                      <span>127</span>
                    </div>
        </div>

                  {/* Read More Button */}
                  <motion.a
                    href={`/blog/${post.slug}`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center justify-center w-full py-4 bg-gradient-to-r from-cyan-400/20 to-teal-500/20 hover:from-cyan-400/30 hover:to-teal-500/30 text-cyan-400 hover:text-cyan-300 font-bold rounded-xl border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10">Read Full Article</span>
                    <ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
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
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-cyan-400 via-teal-500 to-cyan-600 text-white rounded-2xl font-bold text-lg hover:from-cyan-500 hover:via-teal-600 hover:to-cyan-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">Read All My Articles</span>
              <ArrowRight className="w-6 h-6 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
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
              Books Written
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
                  
                  <div className="flex space-x-3">
                    {book.status === 'Published' ? (
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex-1 bg-gradient-to-r from-cyan-500 to-teal-600 text-white py-4 px-6 rounded-xl font-bold text-sm hover:from-cyan-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/30 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <span className="relative z-10">Start Reading</span>
                      </motion.button>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex-1 bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 px-6 rounded-xl font-bold text-sm hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/30 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <span className="relative z-10">Get Early Access</span>
                      </motion.button>
                    )}
                      </div>
                  </div>
                </motion.div>
              ))}
          </div>
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
              <div className="relative rounded-3xl aspect-square overflow-hidden shadow-2xl">
                <img
                  src={meetPatelImage2}
                  alt="The Meet Patel - Recognition & Impact"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
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
                From mechanical engineer to mentoring 10+ startups as business expert, my work has been recognized and has created real impact.
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
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/30 hover:to-pink-500/30 text-purple-400 hover:text-purple-300 font-bold text-lg px-8 py-4 rounded-2xl border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/20 overflow-hidden"
                >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Explore My Portfolio</span>
                <ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
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
              Let's Create Magic Together
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
                <label className="block text-white/80 text-sm mb-2 font-medium">WhatsApp Number</label>
                <div className="flex gap-2">
                  <div className="relative">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 appearance-none cursor-pointer min-w-[120px]"
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code} className="bg-gray-800 text-white">
                          {country.flag} {country.code}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronRight className="w-4 h-4 text-white/40 rotate-90" />
            </div>
        </div>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="98 2434 1414"
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
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`group relative w-full py-5 px-8 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 text-lg overflow-hidden ${
                  isSubmitting
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 via-teal-600 to-cyan-700 hover:from-cyan-600 hover:via-teal-700 hover:to-cyan-800 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/30'
                }`}
              >
                {!isSubmitting && (
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                )}
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span className="relative z-10">Sending Your Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-6 h-6 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                    <span className="relative z-10">Send Message</span>
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

      {/* WhatsApp Community Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Join Our StartupOS Community</h2>
            <p className="text-xl text-cyan-200 max-w-3xl mx-auto leading-relaxed">
              Connect with fellow entrepreneurs, get exclusive insights, and be part of a thriving startup ecosystem.
            </p>
          </motion.div>

              <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="apple-glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-400 rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400 rounded-full"></div>
                </div>

            <div className="relative z-10">
              {/* WhatsApp Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <MessageSquare className="w-10 h-10 text-white" />
              </motion.div>

              {/* Community Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-white/70">Active Members</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <div className="text-white/70">Daily Discussions</div>
              </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                  <div className="text-white/70">Support & Networking</div>
                </motion.div>
              </div>

              {/* Community Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-white mb-6">What You'll Get:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-white/80">Exclusive startup insights and market trends</span>
                </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-white/80">Direct access to industry experts and mentors</span>
                </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-white/80">Networking opportunities with fellow entrepreneurs</span>
                </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-white/80">Early access to funding opportunities and partnerships</span>
            </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-white/80">Periodic masterclasses and Q&A sessions</span>
        </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-white/80">Job opportunities and talent referrals</span>
        </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.button
                onClick={handleJoinCommunity}
                initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <MessageSquare className="w-6 h-6 mr-3 relative z-10" />
                <span className="relative z-10">Join StartupOS Community</span>
                <ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>

              {/* Additional Info */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-white/60 text-sm mt-4"
              >
                Free to join • No spam • Instant access to 500+ entrepreneurs
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Follow My Journey Section */}
      <FollowMyJourney />

      {/* Community Form Modal */}
      <AnimatePresence>
        {isCommunityFormOpen && (
              <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsCommunityFormOpen(false)}
              >
                <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="apple-glass rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Join StartupOS Community</h3>
                  <p className="text-white/70">Tell us about yourself to get started</p>
                  </div>
                <button
                  onClick={() => setIsCommunityFormOpen(false)}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
                  </div>

              {/* Form */}
              <form onSubmit={handleCommunitySubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 text-sm mb-2 font-medium">LinkedIn Profile URL *</label>
                    <input
                      type="url"
                      name="linkedinId"
                      value={communityFormData.linkedinId}
                      onChange={handleCommunityInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="https://linkedin.com/in/yourprofile"
                    />
          </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-2 font-medium">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={communityFormData.email}
                      onChange={handleCommunityInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
        </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm mb-2 font-medium">WhatsApp Number *</label>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={communityFormData.whatsapp}
                    onChange={handleCommunityInputChange}
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                    placeholder="+91 98 2434 1414"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/80 text-sm mb-2 font-medium">Business/Company Name *</label>
                    <input
                      type="text"
                      name="businessName"
                      value={communityFormData.businessName}
                      onChange={handleCommunityInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your company or startup name"
                    />
                  </div>
                  <div>
                    <label className="block text-white/80 text-sm mb-2 font-medium">Your Role *</label>
                    <input
                      type="text"
                      name="role"
                      value={communityFormData.role}
                      onChange={handleCommunityInputChange}
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                      placeholder="Founder, CEO, Developer, etc."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white/80 text-sm mb-2 font-medium">Why do you want to join our community? *</label>
                  <textarea
                    name="reason"
                    value={communityFormData.reason}
                    onChange={handleCommunityInputChange}
                    required
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your goals, what you're working on, or how you'd like to contribute to the community..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-green-500/20 flex items-center justify-center space-x-3"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>Send Application via WhatsApp</span>
                </motion.button>
              </form>

              {/* Footer Note */}
              <p className="text-white/60 text-sm mt-4 text-center">
                Your information will be sent to Meet via WhatsApp for community approval
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomePage;