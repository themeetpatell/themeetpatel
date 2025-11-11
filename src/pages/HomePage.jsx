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

// WhatsApp Icon Component
const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

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
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "10+",
      label: "Startups Mentored",
      icon: Heart,
      color: "from-purple-400 to-pink-500"
    },
    {
      number: "300+",
      label: "Team Members Led",
      icon: Users,
      color: "from-pink-400 to-purple-500"
    },
    {
      number: "2",
      label: "Books Published",
      icon: BookOpen,
      color: "from-purple-300 to-pink-400"
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
      color: "from-purple-300 to-purple-500"
    },
    {
      title: "Holistic Approach",
      description: "Combining technical expertise, business strategy, and creative writing to provide comprehensive solutions.",
      icon: Heart,
      color: "from-pink-500 to-pink-600"
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
      color: "from-purple-500 to-purple-600"
    }
  ];

  const achievements = [
    {
      title: "300+ Members",
      description: "Created a community of 1000+ entrepreneurs and investors in StartupOS",
      icon: Star,
      color: "from-purple-300 to-purple-500"
    },
    {
      title: "Building Leadership Team",
      description: "Built Entire Management team in 6 months at Million dollars company",
      icon: Award,
      color: "from-purple-400 to-purple-500"
    },
    {
      title: "Published Author",
      description: "Author of romantic novels and business guides",
      icon: BookOpen,
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Leadership & Management",
      description: "Led 270+ team members at age of 26 remotely",
      icon: Users,
      color: "from-pink-400 to-pink-500"
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
      
      {/* Hero Section - Premium Light Design */}
      <section ref={heroRef} className="pt-16 sm:pt-20 min-h-[75vh] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 to-white" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
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
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-8 sm:mb-12 shadow-2xl shadow-purple-300/50 overflow-hidden ring-4 ring-white ring-opacity-50">
                <img
                  src={logoImage}
                  alt="The Meet Patel Logo"
                  className="w-20 h-20 sm:w-28 sm:h-28 object-contain"
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
              <div className="absolute -top-8 -left-8 w-16 h-16 bg-purple-400/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -right-8 w-12 h-12 bg-pink-400/20 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 -left-12 w-8 h-8 bg-purple-500/20 rounded-full blur-lg"></div>
              <div className="absolute top-1/2 -right-12 w-10 h-10 bg-pink-500/20 rounded-full blur-lg"></div>
              
              <div className="relative">
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-gray-900 mb-3 sm:mb-6 tracking-tight leading-tight">
                  Meet The
            </h1>
                <h1 className="text-5xl sm:text-7xl md:text-9xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 bg-clip-text text-transparent mb-6 sm:mb-10 tracking-tighter relative leading-none">
                  Meet Patel
                  {/* Underline Effect */}
                  <div className="absolute -bottom-2 sm:-bottom-4 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full opacity-80"></div>
                </h1>
              </div>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-8"
            >
              <p className="text-xl sm:text-3xl md:text-4xl text-gray-700 mb-4 sm:mb-6 font-medium">
                {personalInfo.title}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 text-base sm:text-xl text-gray-600">
                <div className="flex items-center space-x-2 bg-purple-100 px-4 py-2 rounded-full">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  <span className="font-medium">{personalInfo.location}</span>
                </div>
                <span className="hidden sm:inline text-purple-400">•</span>
                <span className="bg-pink-100 px-4 py-2 rounded-full font-medium">A Startup Guy</span>
                <span className="hidden sm:inline text-purple-400">•</span>
                <span className="bg-purple-100 px-4 py-2 rounded-full font-medium">System Builder</span>
              </div>
          </motion.div>

          <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-lg sm:text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-8 sm:mb-12 px-6 sm:px-0"
            >
              A Startup Guy and <Link to="/about" className="text-purple-600 hover:text-pink-600 transition-colors duration-300 font-semibold underline decoration-purple-300 hover:decoration-pink-300 underline-offset-4">System builder</Link> with over 8 years of experience in building and scaling startups. <br className="hidden sm:block" /> I work with founders and teams to design business systems that don't break under pressure. <br className="hidden sm:block" /> Explore my <Link to="/portfolio" className="text-purple-600 hover:text-pink-600 transition-colors duration-300 font-semibold underline decoration-purple-300 hover:decoration-pink-300 underline-offset-4">portfolio of successful ventures</Link> and <Link to="/systems" className="text-purple-600 hover:text-pink-600 transition-colors duration-300 font-semibold underline decoration-purple-300 hover:decoration-pink-300 underline-offset-4">proven business systems</Link>.
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
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-bold text-lg sm:text-xl hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-3 sm:space-x-4 shadow-2xl shadow-purple-300/50 hover:shadow-purple-400/60 overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Discover My Journey</span>
                <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
              </motion.a>
              
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white backdrop-blur-sm text-purple-600 px-8 sm:px-12 py-4 sm:py-6 rounded-full font-bold text-lg sm:text-xl hover:bg-purple-50 transition-all duration-300 flex items-center justify-center space-x-3 sm:space-x-4 border-2 border-purple-200 hover:border-purple-400 shadow-xl hover:shadow-2xl hover:shadow-purple-200/50 overflow-hidden w-full sm:w-auto"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <MessageSquare className="w-6 h-6 sm:w-7 sm:h-7 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">Start a Conversation</span>
              </motion.a>
          </motion.div>

          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 items-center">
                <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
                  About Me
                </h2>
                <p className="text-lg sm:text-xl text-purple-600 mb-4 sm:mb-6">
                  I help founders build, scale, and stabilize
                </p>
                  </div>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              Startups rarely move in straight lines. They bend, break, and demand decisions when the clock is ticking. A generalist with range who connects dots across people, products, processes, and performance.
              </p>
              
              {/* Key Strengths */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Diagnosing messy problems, fast</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Building scalable systems that don't break under pressure</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Leading from the front in high-stakes, rapid-growth environments</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700">Saying the hard truths when they matter most</p>
                </div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed mb-6">
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
                    className="text-center p-4 bg-white/80 rounded-xl border border-purple-200/50"
                  >
                    <div className="text-3xl font-bold text-purple-600 mb-1">
                    {stat.number}
                  </div>
                    <div className="text-gray-900/60 text-sm">
                    {stat.label}
                  </div>
              </motion.div>
            ))}
              </div>

              <motion.a
                href="/about"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/40 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
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
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Checkout the Startups I've Built
            </h2>
            <p className="text-xl text-purple-600 max-w-3xl mx-auto">
              A showcase of my projects, ventures, and the impact I've created in the startup ecosystem.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {personalInfo.projects.slice(0, 6).map((project, index) => (
          <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-purple-200/50 hover:border-purple-300/70 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200/50 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-purple-200/50">
                    <Briefcase className="w-7 h-7 text-white" />
                </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">{project.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 min-h-[3rem]">{project.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-purple-100">
                    <span className="text-xs font-semibold bg-purple-100 text-purple-600 px-3 py-1.5 rounded-full">{project.category}</span>
                    <span className="text-xs text-gray-500 font-medium">{project.year}</span>
                  </div>
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
              className="group relative inline-flex items-center bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl shadow-purple-500/40 hover:shadow-purple-600/50 overflow-hidden border-2 border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">View All Projects</span>
              <ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Systems Section */}
      <section className="py-12 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 tracking-tight">
              The Systems I Built
            </h2>
            <p className="text-lg sm:text-xl text-purple-600 max-w-3xl mx-auto px-4 sm:px-0">
              Comprehensive frameworks, processes, and systems I've developed to help startups scale efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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
                className="group relative bg-white/90 backdrop-blur-md rounded-2xl p-6 border border-purple-200/50 hover:border-purple-300/70 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200/50 hover:-translate-y-1"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-pink-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">{system.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">{system.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 min-h-[3rem]">{system.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-purple-100">
                    <span className="text-xs font-semibold bg-purple-100 text-purple-600 px-3 py-1.5 rounded-full">{system.category}</span>
                    <span className="text-xs text-green-600 font-medium flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      Available
                    </span>
                  </div>
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
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/40 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">Explore All Systems</span>
              <ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
                  </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Read My Latest Insights Shared
            </h2>
            <p className="text-xl text-purple-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Thoughts on entrepreneurship, leadership, and the journey of building meaningful things.
            </p>
            
            {/* Blog Stats */}
            <div className="flex items-center justify-center space-x-8 text-gray-900/60">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {blogPosts.map((post, index) => (
              <motion.a
                key={post.slug}
                href={`/blog/${post.slug}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden border border-purple-200/50 hover:border-purple-300/70 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-200/50 hover:-translate-y-1 block"
              >
                {/* Header Section with Gradient */}
                <div className="h-40 bg-gradient-to-br from-purple-100 via-pink-100 to-purple-50 relative overflow-hidden">
                  <div className="absolute top-3 left-3">
                    <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-lg text-xs font-semibold shadow-sm">
                      {post.category}
              </span>
                      </div>
                  
                  {/* Center Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Metadata */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-2 py-1 rounded">
                        <Calendar className="w-3 h-3" />
                        <span>{post.date}</span>
                        <span>•</span>
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                  </div>
                      <div className="flex items-center gap-1 bg-white/80 backdrop-blur-sm px-2 py-1 rounded">
                        <Eye className="w-3 h-3" />
                        <span>2.5K</span>
            </div>
                  </div>
                  </div>
                  </div>
                  
                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors leading-tight mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-5 line-clamp-3 text-sm">
                    {post.excerpt}
                  </p>
                  
                  {/* Social Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-purple-100 mb-4" onClick={(e) => e.stopPropagation()}>
                    <div className="flex items-center gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200"
                        title="Share on LinkedIn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Linkedin className="w-4 h-4" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-gray-400 hover:text-sky-500 hover:bg-sky-50 rounded-lg transition-all duration-200"
                        title="Share on Twitter"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Twitter className="w-4 h-4" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                        title="Bookmark"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <BookOpen className="w-4 h-4" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-lg transition-all duration-200"
                        title="Share"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                      </div>
                  
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Heart className="w-4 h-4" />
                      <span>127</span>
                    </div>
        </div>

                  {/* Read More Button */}
                  <div className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-xl font-semibold text-sm group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300">
                    <span>Read Full Article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <motion.a
              href="/blogs"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white rounded-2xl font-bold text-lg hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/40 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <span className="relative z-10">Read All My Articles</span>
              <ArrowRight className="w-6 h-6 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </section>




      {/* Books Section - Apple Style */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Books Written
            </h2>
            <p className="text-xl text-purple-600 max-w-3xl mx-auto leading-relaxed">
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
                    <div className="absolute inset-0 bg-white/40" />
                    <div className="relative z-10 text-center p-6">
                      <p className="text-gray-900/90 text-sm italic mb-4 leading-relaxed">{book.quote}</p>
                      <h3 className="text-gray-900 text-2xl font-bold mb-2">{book.title}</h3>
                      <p className="text-gray-900/80 text-lg">{book.subtitle}</p>
                      <p className="text-gray-900/70 text-sm mt-3">A Novel by Meet Patel</p>
                </div>
                </div>
                  </div>
                  
                {/* Book Details */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 text-center">{book.title}</h3>
                  
                  <p className="text-gray-900/70 leading-relaxed text-center">
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
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white py-4 px-6 rounded-xl font-bold text-sm hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/30 overflow-hidden"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        <span className="relative z-10">Start Reading</span>
                      </motion.button>
                    ) : (
                      <motion.button
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative w-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 text-white py-4 px-6 rounded-xl font-bold text-sm hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/30 overflow-hidden"
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
      <section className="py-20 relative">
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
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
                Recognition & Impact
            </h2>
              <p className="text-xl text-purple-600 leading-relaxed">
                From mechanical engineer to mentoring 10+ startups as business expert, my work has been recognized and has created real impact.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <div key={achievement.title} className="apple-glass rounded-xl p-4">
                    <div className={`w-8 h-8 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center mb-3`}>
                      <achievement.icon className="w-4 h-4 text-gray-900" />
            </div>
                    <h4 className="text-gray-900 font-semibold text-sm mb-1">{achievement.title}</h4>
                    <p className="text-gray-900/60 text-xs">{achievement.description}</p>
                  </div>
                ))}
              </div>
                <motion.a
                href="/portfolio"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center bg-gradient-to-r from-purple-600 via-pink-600 to-purple-700 hover:from-purple-700 hover:via-pink-700 hover:to-purple-800 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-2xl shadow-purple-500/40 hover:shadow-purple-600/50 overflow-hidden border-2 border-white/20"
                >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">Explore My Portfolio</span>
                <ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.a>
          </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
              Let's Create Magic Together
                </h2>
            <p className="text-xl text-purple-600 max-w-3xl mx-auto leading-relaxed">
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
                  <label className="block text-gray-900 font-semibold text-sm mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/90 border border-purple-200/50 rounded-xl p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-gray-900 font-semibold text-sm mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-white/90 border border-purple-200/50 rounded-xl p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                </div>
              
              <div>
                <label className="block text-gray-900 font-semibold text-sm mb-2">WhatsApp Number</label>
                <div className="flex gap-2">
                  <div className="relative">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="bg-white/90 border border-purple-200/50 rounded-xl p-4 text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-300 appearance-none cursor-pointer min-w-[140px] pr-10"
                    >
                      {countryCodes.map((country) => (
                        <option key={country.code} value={country.code} className="bg-white text-gray-900">
                          {country.flag} {country.code}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <ChevronRight className="w-4 h-4 text-purple-400 rotate-90" />
            </div>
        </div>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    className="flex-1 bg-white/90 border border-purple-200/50 rounded-xl p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-300"
                    placeholder="Enter your WhatsApp number"
                  />
                </div>
                  </div>
                  
              <div>
                <label className="block text-gray-900 font-semibold text-sm mb-2">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/90 border border-purple-200/50 rounded-xl p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-300"
                  placeholder="What would you like to discuss?"
                />
        </div>

              <div>
                <label className="block text-gray-900 font-semibold text-sm mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full bg-white/90 border border-purple-200/50 rounded-xl p-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-400 transition-all duration-300 resize-none"
                  placeholder="Share your thoughts, questions, or tell me about your project. I'd love to hear from you!"
                />
                  </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02, y: isSubmitting ? 0 : -2 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`group relative w-full py-5 px-8 rounded-2xl font-bold transition-all duration-300 flex items-center justify-center space-x-3 text-lg overflow-hidden text-white ${
                  isSubmitting
                    ? 'bg-gray-500 cursor-not-allowed'
                    : 'bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 shadow-xl hover:shadow-2xl hover:shadow-purple-500/30'
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
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Join Our StartupOS Community</h2>
            <p className="text-xl text-purple-600 max-w-3xl mx-auto leading-relaxed">
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
              <div className="absolute top-10 left-10 w-20 h-20 bg-purple-500 rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-32 h-32 bg-teal-400 rounded-full"></div>
              <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-400 rounded-full"></div>
                </div>

            <div className="relative z-10">
              {/* WhatsApp Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="w-20 h-20 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl"
              >
                <WhatsAppIcon className="w-10 h-10 text-white" />
              </motion.div>

              {/* Community Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-purple-600 mb-2">500+</div>
                  <div className="text-gray-900/70">Active Members</div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
                  <div className="text-gray-900/70">Daily Discussions</div>
              </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                  <div className="text-gray-900/70">Support & Networking</div>
                </motion.div>
              </div>

              {/* Community Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Get:</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-4xl mx-auto">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-900/80">Exclusive startup insights and market trends</span>
                </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-900/80">Direct access to industry experts and mentors</span>
                </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-900/80">Networking opportunities with fellow entrepreneurs</span>
                </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-900/80">Early access to funding opportunities and partnerships</span>
            </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-900/80">Periodic masterclasses and Q&A sessions</span>
        </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-900/80">Job opportunities and talent referrals</span>
        </div>
                </div>
              </motion.div>

              {/* CTA Button */}
              <motion.a
                href="/community"
                initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-purple-600 hover:from-purple-600 hover:via-pink-600 hover:to-purple-700 text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-purple-500/40 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <WhatsAppIcon className="w-6 h-6 mr-3 relative z-10 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">Join StartupOS Community</span>
                <ArrowRight className="w-5 h-5 ml-3 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.a>

              {/* Additional Info */}
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="text-gray-900/60 text-sm mt-4"
              >
                Free to join • No spam • Instant access to 500+ entrepreneurs
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Follow My Journey Section */}
      <FollowMyJourney />

    </div>
  );
};

export default HomePage;