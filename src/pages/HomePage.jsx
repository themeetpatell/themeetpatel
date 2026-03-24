import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Target, Users, BookOpen, Send, CheckCircle,
  Linkedin, Twitter, Github, Instagram, Youtube,
  Award, Heart, Star, ArrowRight,
  MapPin, MessageSquare, Clock, Briefcase,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import FollowMyJourney from '../components/FollowMyJourney';
import meetPatelImage from '../assets/themeetpatel.jpeg';
import meetPatelImage2 from '../assets/the meet patel.jpeg';

void motion;

// WhatsApp Icon
const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const HomePage = () => {
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
    { code: '+61', country: 'Australia', flag: '🇦🇺' },
    { code: '+64', country: 'New Zealand', flag: '🇳🇿' },
    { code: '+55', country: 'Brazil', flag: '🇧🇷' },
    { code: '+86', country: 'China', flag: '🇨🇳' },
    { code: '+81', country: 'Japan', flag: '🇯🇵' },
    { code: '+65', country: 'Singapore', flag: '🇸🇬' },
    { code: '+60', country: 'Malaysia', flag: '🇲🇾' },
    { code: '+966', country: 'Saudi Arabia', flag: '🇸🇦' },
    { code: '+965', country: 'Kuwait', flag: '🇰🇼' },
    { code: '+974', country: 'Qatar', flag: '🇶🇦' },
    { code: '+20', country: 'Egypt', flag: '🇪🇬' },
    { code: '+234', country: 'Nigeria', flag: '🇳🇬' },
    { code: '+27', country: 'South Africa', flag: '🇿🇦' },
    { code: '+7', country: 'Russia', flag: '🇷🇺' },
  ];

  const personalInfo = {
    name: "Meet Patel",
    title: "Biggventure CEO & Founder | BiggMate Founder | Serial Entrepreneur | Business Operations Expert",
    location: "Dubai, United Arab Emirates",
    email: "the.meetpatell@gmail.com",
    bio: "A Startup ecosystem builder with over 8 years of experience in building and scaling technology companies.",
    projects: [
      {
        name: "BiggMate",
        description: "AI-powered co-founder matching platform connecting entrepreneurs to build startups together.",
        category: "Platform",
        year: "2026",
        link: "/biggmate"
      },
      {
        name: "Finanshels.com",
        description: "Financial management platform for small businesses with automated bookkeeping and taxes.",
        category: "Fintech",
        year: "2023"
      },
      {
        name: "StudentHub",
        description: "Recruitment technology platform connecting students with jobs and companies.",
        category: "EdTech",
        year: "2021"
      },
      {
        name: "ZeroHuman",
        description: "AI-powered automation platform for modelling industry and media creation.",
        category: "AI",
        year: "2026"
      },
      {
        name: "MealVerse",
        description: "Food technology platform revolutionizing home-cooked meal planning and delivery services.",
        category: "FoodTech",
        year: "2026"
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
    ]
  };

  const stats = [
    { number: "8+", label: "Years Experience", icon: Target },
    { number: "10+", label: "Startups Mentored", icon: Heart },
    { number: "450+", label: "Team Members Led", icon: Users },
    { number: "2", label: "Books Published", icon: BookOpen }
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
      description: "A romantic novel exploring the depths of unconditional love and sacrifice. Set against a backdrop of timeless romance, this story captures the essence of true love.",
      genre: "Romance",
      status: "Published",
      coverColor: "from-pink-400 via-purple-500 to-blue-500",
      readLink: "/The Eternal Love by The Meet Patel.pdf",
    },
    {
      title: "The Endless Love",
      subtitle: "PART - 2",
      quote: "You'll experience your life's entire journey in the eyes which'll love you endlessly!",
      description: "A cosmic romance novel that takes readers on a journey through the universe of love. Explores the infinite nature of devotion and connection between souls.",
      genre: "Romance",
      status: "Early Access",
      coverColor: "from-rose-400 via-pink-500 to-purple-600",
      readLink: "#",
    }
  ];

  const achievements = [
    { title: "500+ Members", description: "Created a community of 500+ entrepreneurs in StartupOS", icon: Star },
    { title: "Leadership Team", description: "Built entire management team in 6 months at a million dollar company", icon: Award },
    { title: "Published Author", description: "Author of romantic novels and business guides", icon: BookOpen },
    { title: "Led 270+ People", description: "Led 270+ team members at age of 26 remotely", icon: Users }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', countryCode: '+971', whatsapp: '', subject: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // Ventures for ticker
  const ventures = [
    'BiggMate', 'Finanshels', 'StudentHub', 'ZeroHuman', 'MealVerse', 'TorchIt', 'BAWES', 'Biggventure',
    'Kingstorm', 'Plugn', 'Incsmart', 'StudentHub', 'ZeroHuman', 'MealVerse', 'BAWES', 'Finanshels'
  ];

  // Structured data (SEO)
  const homepageStructuredData = [
    // WebSite schema — enables sitelinks search in Google
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://www.themeetpatel.com/#website",
      "name": "The Meet Patel",
      "alternateName": ["Meet Patel", "themeetpatel", "meetpatel"],
      "url": "https://www.themeetpatel.com",
      "description": "Official website of The Meet Patel — Dubai-based serial entrepreneur, venture builder, startup operator, business strategist, and author.",
      "inLanguage": "en-US",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.themeetpatel.com/blogs?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    },
    // Rich Person entity — primary identity node for GEO/AI disambiguation
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://www.themeetpatel.com/#person",
      "name": "The Meet Patel",
      "alternateName": ["Meet Patel", "themeetpatel", "meetpatel", "Meet Patel Dubai"],
      "description": "The Meet Patel (also known as Meet Patel, themeetpatel, or meetpatel) is a Dubai-based serial entrepreneur, venture builder, startup operator, business strategist, and author. He has built 10+ ventures, led 450+ people, and mentored hundreds of founders across AI, fintech, hardware, edtech, and software.",
      "jobTitle": ["Serial Entrepreneur", "Venture Builder", "Business Strategist", "Startup Operator", "Startup Founder", "Author"],
      "url": "https://www.themeetpatel.com",
      "mainEntityOfPage": "https://www.themeetpatel.com/about",
      "image": {
        "@type": "ImageObject",
        "url": "https://www.themeetpatel.com/og-image.jpg",
        "width": 1200,
        "height": 630
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "sameAs": [
        "https://www.linkedin.com/in/themeetpatel/",
        "https://x.com/the_meetpatel",
        "https://twitter.com/the_meetpatel",
        "https://github.com/themeetpatell",
        "https://medium.com/@themeetpatel",
        "https://instagram.com/the.meetpatell/",
        "https://www.themeetpatel.com"
      ],
      "knowsAbout": [
        "Startups", "Venture Building", "Serial Entrepreneurship", "Business Strategy",
        "Startup Operations", "Growth Systems", "Startup Mentorship", "Founder Coaching",
        "Team Building", "Product Management", "Fintech", "AI Startups", "EdTech",
        "Hardware Startups", "Business Development", "Dubai Startup Ecosystem",
        "Entrepreneurship", "Startup Scaling", "Angel Investing"
      ],
      "hasOccupation": [
        { "@type": "Occupation", "name": "Venture Builder", "description": "Building and scaling startups from zero to growth stage" },
        { "@type": "Occupation", "name": "Business Strategist", "description": "Strategic and operational guidance for founders and startups" },
        { "@type": "Occupation", "name": "Author", "description": "Author of entrepreneurship and fiction books including The Eternal Love and The Endless Devotion" }
      ],
      "founder": [
        { "@type": "Organization", "name": "BiggMate", "url": "https://www.biggmate.com" },
        { "@type": "Organization", "name": "ZeroHuman", "url": "https://www.zerohuman.co" },
        { "@type": "Organization", "name": "Finanshels", "url": "https://finanshels.com" }
      ]
    },
    // FAQPage schema — AEO: surfaces in Google People Also Ask + AI-generated answers
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is The Meet Patel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Meet Patel (also known as Meet Patel, themeetpatel, or meetpatel) is a Dubai-based serial entrepreneur, venture builder, startup operator, business strategist, and author. With 8+ years of experience, he has built 10+ ventures across AI, fintech, hardware, edtech, and software, and has led teams of 450+ people across his portfolio companies."
          }
        },
        {
          "@type": "Question",
          "name": "What is Meet Patel known for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Meet Patel (The Meet Patel) is known for building and scaling startups from zero to growth stage, his StartupOS operating framework for founders, his WhatsApp community of 500+ entrepreneurs, his books on entrepreneurship and storytelling, and his advisory work with startup founders in Dubai and internationally."
          }
        },
        {
          "@type": "Question",
          "name": "Where is The Meet Patel based?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The Meet Patel (Meet Patel / themeetpatel) is based in Dubai, UAE. He builds ventures and works with founders globally, with a focus on the UAE, India, and international startup ecosystems."
          }
        },
        {
          "@type": "Question",
          "name": "What startups has Meet Patel built?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Meet Patel has built 10+ ventures including BiggMate (AI-powered co-foundership platform), ZeroHuman (AI automation), Finanshels (fintech accounting), TorchIt (assistive technology hardware for the visually impaired), MealVerse (food tech), StudentHub (edtech, scaled to 50K+ users), and others across AI, fintech, hardware, and software sectors."
          }
        },
        {
          "@type": "Question",
          "name": "How can I work with or contact The Meet Patel?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can reach The Meet Patel through his website contact page at www.themeetpatel.com/contact, connect on LinkedIn at linkedin.com/in/themeetpatel, or join his StartupOS founder community at www.themeetpatel.com/community for daily startup discussions and founder networking."
          }
        },
        {
          "@type": "Question",
          "name": "What is themeetpatel.com?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "themeetpatel.com is the official website of The Meet Patel — a Dubai-based serial entrepreneur and venture builder. The site features his blog on startups and entrepreneurship, his venture portfolio, founder community, and contact information."
          }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#09090e' }}>
      <SEOHead
        title="The Meet Patel | Serial Entrepreneur, Startup Founder & Venture Builder"
        description="The Meet Patel (Meet Patel / themeetpatel) is a Dubai-based serial entrepreneur, startup founder, venture builder, and business strategist. Built 10+ ventures across AI, fintech, hardware & software. Mentor to 500+ founders."
        keywords="The Meet Patel, Meet Patel, themeetpatel, meetpatel, serial entrepreneur, startup founder, venture builder, startup operator, business strategist, Dubai entrepreneur, startup consultant, founder advisor, startup builder, AI startups, fintech startups, hardware startups, startup portfolio, entrepreneurship, founders, startups"
        canonical="/"
        ogImage="/og-image.jpg"
        structuredData={homepageStructuredData}
      />

      {/* ═══════════════════════════════════════════════════
          HERO — Dark Luxury Bento Grid
      ═══════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-[70px]"
        style={{ backgroundColor: '#09090e' }}
      >
        {/* Subtle radial glow — no blobs, just a deep violet horizon */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 70% 60%, rgba(139,92,246,0.07) 0%, transparent 70%)'
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-24">

          {/* ── Top Row: Status Indicator ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2.5 mb-10 lg:mb-14"
          >
            <span className="status-dot" />
            <span style={{ color: '#d4a847', fontSize: '0.8125rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              Available for consulting
            </span>
            <span style={{ color: '#3a3a4e', fontSize: '0.8125rem' }}>·</span>
            <span style={{ color: '#5a5a6e', fontSize: '0.8125rem', fontWeight: 500 }}>
              Dubai, UAE 🇦🇪
            </span>
          </motion.div>

          {/* ── Main Bento Grid ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-8 lg:gap-12 items-start">

            {/* Left Column — Typography + CTAs */}
            <div className="space-y-8">

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <h1 className="m-0 p-0 leading-none" style={{ letterSpacing: '-0.04em' }}>
                  <span
                    className="block"
                    style={{
                      fontSize: 'clamp(4.5rem, 11vw, 9.5rem)',
                      fontWeight: 900,
                      lineHeight: 0.92,
                      color: '#f5f5f7'
                    }}
                  >
                    MEET
                  </span>
                  <span
                    className="block"
                    style={{
                      fontSize: 'clamp(4.5rem, 11vw, 9.5rem)',
                      fontWeight: 900,
                      lineHeight: 0.92,
                      color: '#d4a847'
                    }}
                  >
                    PATEL.
                  </span>
                </h1>
              </motion.div>

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="space-y-2"
              >
                <div
                  style={{
                    height: '1px',
                    width: '60px',
                    background: 'rgba(255,255,255,0.15)',
                    marginBottom: '20px'
                  }}
                />
                <p style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: 500, color: '#8e8ea0', lineHeight: 1.5, maxWidth: '480px' }}>
                  Serial Entrepreneur & Startup Builder
                </p>
                <p style={{ fontSize: '1rem', color: '#5a5a6e', lineHeight: 1.7, maxWidth: '460px' }}>
                  I help founders build, scale, and stabilize businesses through proven systems and strategic guidance.
                </p>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-col sm:flex-row items-start gap-3 pt-2"
              >
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm"
                  style={{
                    background: '#8b5cf6',
                    boxShadow: '0 4px 20px rgba(139,92,246,0.4)',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = '#7c3aed'}
                  onMouseLeave={e => e.currentTarget.style.background = '#8b5cf6'}
                >
                  <MessageSquare className="w-4 h-4" />
                  Let's Talk
                </motion.a>

                <motion.a
                  href="/portfolio"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm"
                  style={{
                    color: '#f5f5f7',
                    border: '1px solid rgba(255,255,255,0.18)',
                    transition: 'all 0.2s ease',
                    background: 'transparent'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#16161f'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'; }}
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </motion.div>

              {/* Mini Stats Row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isHeroInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.65 }}
                className="flex items-center gap-8 pt-4"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                {[
                  { value: '8+', label: 'Years' },
                  { value: '10+', label: 'Startups' },
                  { value: '450+', label: 'Team Members' },
                ].map((s, i) => (
                  <div key={i} className="text-center">
                    <div style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 900, color: '#f5f5f7', lineHeight: 1 }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: '#5a5a6e', marginTop: '4px', fontWeight: 500 }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column — Photo Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 0 0 1px rgba(139,92,246,0.12), 0 32px 80px rgba(0,0,0,0.7)',
                  aspectRatio: '3/4'
                }}
              >
                <img
                  src={meetPatelImage}
                  alt="Meet Patel — Serial Entrepreneur, Dubai"
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'brightness(0.92) contrast(1.05)',
                    objectPosition: 'center 22%'
                  }}
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, rgba(9,9,14,0.04) 0%, rgba(9,9,14,0.08) 24%, rgba(9,9,14,0.28) 52%, rgba(9,9,14,0.92) 100%)' }}
                />
                <div
                  className="absolute inset-x-0 top-0 h-40 pointer-events-none"
                  style={{ background: 'linear-gradient(180deg, rgba(9,9,14,0.24) 0%, rgba(9,9,14,0) 100%)' }}
                />
                <div
                  className="absolute -bottom-12 left-1/2 w-72 h-72 -translate-x-1/2 rounded-full pointer-events-none"
                  style={{ background: 'rgba(139,92,246,0.12)', filter: 'blur(70px)' }}
                />

                {/* Location badge */}
                <div
                  className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full"
                  style={{
                    background: 'rgba(17,17,24,0.85)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(212,168,71,0.2)'
                  }}
                >
                  <MapPin className="w-3 h-3" style={{ color: '#d4a847' }} />
                  <span style={{ fontSize: '0.6875rem', color: '#d4a847', fontWeight: 600 }}>Dubai, UAE</span>
                </div>

                <div
                  className="absolute left-4 right-4 bottom-4 rounded-[1.4rem] p-5"
                  style={{
                    background: 'linear-gradient(180deg, rgba(17,17,24,0.68) 0%, rgba(9,9,14,0.92) 100%)',
                    backdropFilter: 'blur(18px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    boxShadow: '0 18px 40px rgba(0,0,0,0.35)'
                  }}
                >
                  <div
                    className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full"
                    style={{
                      background: 'rgba(212,168,71,0.08)',
                      border: '1px solid rgba(212,168,71,0.18)',
                      color: '#d4a847',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase'
                    }}
                  >
                    Featured Profile
                  </div>

                  <div style={{ marginTop: '14px' }}>
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, letterSpacing: '-0.03em', color: '#f5f5f7', lineHeight: 1 }}>
                      The Meet Patel
                    </div>
                    <p style={{ marginTop: '8px', fontSize: '0.9rem', lineHeight: 1.65, color: '#9c9cab', maxWidth: '320px' }}>
                      Building startups through product clarity, operating systems, and disciplined execution.
                    </p>
                  </div>

                  <div className="flex items-center gap-3 mt-5">
                    <div
                      className="flex-1 rounded-2xl px-3 py-3"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)'
                      }}
                    >
                      <div className="flex items-center gap-2" style={{ color: '#f5f5f7' }}>
                        <Briefcase className="w-3.5 h-3.5" style={{ color: '#8b5cf6' }} />
                        <span style={{ fontSize: '0.74rem', fontWeight: 700 }}>Startup Operator</span>
                      </div>
                    </div>

                    <div
                      className="flex-1 rounded-2xl px-3 py-3"
                      style={{
                        background: 'rgba(255,255,255,0.03)',
                        border: '1px solid rgba(255,255,255,0.06)'
                      }}
                    >
                      <div className="flex items-center gap-2" style={{ color: '#f5f5f7' }}>
                        <Clock className="w-3.5 h-3.5" style={{ color: '#d4a847' }} />
                        <span style={{ fontSize: '0.74rem', fontWeight: 700 }}>8+ Years Building</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Venture Ticker ── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isHeroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 lg:mt-20 pt-6"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span style={{ fontSize: '0.6875rem', color: '#3a3a4e', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                Ventures & Projects
              </span>
              <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.05)' }} />
            </div>
            <div className="luxury-ticker">
              <div className="luxury-ticker-inner">
                {ventures.concat(ventures).map((v, i) => (
                  <span
                    key={`ticker-${i}`}
                    className="inline-flex items-center gap-4 mx-6"
                    style={{ color: '#8b5cf6', fontSize: '0.875rem', fontWeight: 500 }}
                  >
                    <span style={{ color: 'rgba(139,92,246,0.5)', fontSize: '0.5rem' }}>◆</span>
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          ABOUT SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32 relative" style={{ backgroundColor: '#09090e' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="space-y-7"
            >
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8b5cf6' }}>
                  About Me
                </span>
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.05, letterSpacing: '-0.025em', color: '#f5f5f7', marginTop: '12px', marginBottom: '0' }}>
                  I help founders<br />
                  <span style={{ color: '#d4a847' }}>build the future.</span>
                </h2>
              </div>

              <p style={{ fontSize: '1.0625rem', color: '#8e8ea0', lineHeight: 1.75 }}>
                Startups rarely move in straight lines. They bend, break, and demand decisions when the clock is ticking. I'm a generalist with range — connecting dots across people, products, processes, and performance.
              </p>

              {/* Strength bullets */}
              <div className="space-y-3">
                {[
                  'Diagnosing messy problems, fast',
                  'Building scalable systems that don\'t break under pressure',
                  'Leading from the front in high-stakes environments',
                  'Saying the hard truths when they matter most',
                ].map((s, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#8b5cf6', marginTop: '9px', flexShrink: 0 }} />
                    <p style={{ fontSize: '0.9375rem', color: '#8e8ea0', lineHeight: 1.6 }}>{s}</p>
                  </div>
                ))}
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="p-4 rounded-2xl"
                    style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f5f5f7', lineHeight: 1 }}>
                      {stat.number}
                    </div>
                    <div style={{ fontSize: '0.8125rem', color: '#5a5a6e', marginTop: '4px', fontWeight: 500 }}>
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.a
                href="/about"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-white font-semibold text-sm"
                style={{ background: '#8b5cf6', boxShadow: '0 4px 20px rgba(139,92,246,0.35)' }}
              >
                Explore My Full Story
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            {/* Photo Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative"
            >
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 0 0 1px rgba(139,92,246,0.1), 0 24px 64px rgba(0,0,0,0.6)'
                }}
              >
                <img
                  src={meetPatelImage}
                  alt="Meet Patel"
                  className="w-full object-cover"
                  style={{ height: '500px', filter: 'brightness(0.9) contrast(1.05)' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 50%, rgba(9,9,14,0.8) 100%)' }}
                />
              </div>
              {/* Violet glow accent */}
              <div
                className="absolute -bottom-6 -right-6 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: 'rgba(139,92,246,0.08)', filter: 'blur(40px)' }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          PORTFOLIO / VENTURES
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: '#09090e' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8b5cf6' }}>
              Ventures
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#f5f5f7', marginTop: '12px', marginBottom: '8px' }}>
              Startups I've Built
            </h2>
            <p style={{ fontSize: '1rem', color: '#5a5a6e', maxWidth: '480px' }}>
              A portfolio of ventures spanning AI, fintech, edtech, and food technology.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {personalInfo.projects.slice(0, 6).map((project, index) => {
              const CardContent = (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="group relative p-6 rounded-2xl cursor-pointer"
                  style={{
                    background: '#111118',
                    border: '1px solid rgba(255,255,255,0.07)',
                    transition: 'all 0.25s ease'
                  }}
                  whileHover={{
                    y: -4,
                    borderColor: 'rgba(139,92,246,0.25)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(139,92,246,0.15)'
                  }}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(139,92,246,0.12)', border: '1px solid rgba(139,92,246,0.2)' }}
                    >
                      <Briefcase className="w-5 h-5" style={{ color: '#8b5cf6' }} />
                    </div>
                    <span style={{ fontSize: '0.75rem', color: '#d4a847', fontWeight: 600 }}>{project.year}</span>
                  </div>

                  <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: '#f5f5f7', marginBottom: '8px' }}>
                    {project.name}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#5a5a6e', lineHeight: 1.6, marginBottom: '16px' }}>
                    {project.description}
                  </p>

                  <div
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: 'rgba(139,92,246,0.1)', color: '#8b5cf6', border: '1px solid rgba(139,92,246,0.2)' }}
                  >
                    {project.category}
                  </div>
                </motion.div>
              );

              return project.link ? (
                <Link key={index} to={project.link}>{CardContent}</Link>
              ) : CardContent;
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10"
          >
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm"
              style={{
                color: '#f5f5f7',
                border: '1px solid rgba(255,255,255,0.15)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#16161f'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
            >
              View All Projects
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BLOG SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: '#09090e' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8b5cf6' }}>
              Writing
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#f5f5f7', marginTop: '12px', marginBottom: '8px' }}>
              Latest Insights
            </h2>
            <div className="flex items-center gap-5 mt-5">
              {[{ v: '15+', l: 'Articles' }, { v: '15K+', l: 'Views' }, { v: '800+', l: 'Likes' }].map((s, i) => (
                <span key={i} style={{ fontSize: '0.8125rem', color: '#5a5a6e' }}>
                  <span style={{ color: '#8b5cf6', fontWeight: 700 }}>{s.v}</span> {s.l}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogPosts.map((post, index) => (
              <motion.a
                key={post.slug}
                href={`/blog/${post.slug}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group block p-6 rounded-2xl"
                style={{
                  background: '#111118',
                  border: '1px solid rgba(255,255,255,0.07)',
                  transition: 'all 0.25s ease',
                  textDecoration: 'none'
                }}
                whileHover={{
                  y: -4,
                  borderColor: 'rgba(139,92,246,0.2)',
                  boxShadow: '0 12px 40px rgba(0,0,0,0.4)'
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span
                    className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: 'rgba(139,92,246,0.1)', color: '#8b5cf6', border: '1px solid rgba(139,92,246,0.2)' }}
                  >
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1" style={{ color: '#3a3a4e', fontSize: '0.75rem' }}>
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>

                <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f5f5f7', lineHeight: 1.4, marginBottom: '8px' }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#5a5a6e', lineHeight: 1.6, marginBottom: '16px' }}>
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between" style={{ borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '12px' }}>
                  <span style={{ fontSize: '0.75rem', color: '#3a3a4e' }}>{post.date}</span>
                  <div className="flex items-center gap-1 group-hover:gap-2 transition-all" style={{ color: '#8b5cf6', fontSize: '0.8125rem', fontWeight: 600 }}>
                    Read
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10"
          >
            <a
              href="/blogs"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm"
              style={{
                color: '#f5f5f7',
                border: '1px solid rgba(255,255,255,0.15)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#16161f'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
            >
              Read All Articles
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          BOOKS SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: '#09090e' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-14"
          >
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8b5cf6' }}>
              Books
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#f5f5f7', marginTop: '12px', marginBottom: '8px' }}>
              Written Works
            </h2>
            <p style={{ fontSize: '1rem', color: '#5a5a6e' }}>Love stories that give you a different perspective of life</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {books.map((book, index) => (
              <motion.div
                key={book.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="p-7 rounded-2xl"
                style={{
                  background: '#111118',
                  border: '1px solid rgba(255,255,255,0.07)',
                  transition: 'all 0.25s ease'
                }}
                whileHover={{
                  borderColor: 'rgba(139,92,246,0.2)',
                  boxShadow: '0 8px 40px rgba(0,0,0,0.4)'
                }}
              >
                <div className="flex gap-6 items-start">
                  {/* Book Cover */}
                  <div
                    className={`w-24 h-32 flex-shrink-0 rounded-xl flex items-center justify-center bg-gradient-to-br ${book.coverColor} relative overflow-hidden`}
                    style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}
                  >
                    <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.3)' }} />
                    <div className="relative z-10 text-center p-2">
                      <p style={{ fontSize: '0.5625rem', color: 'rgba(255,255,255,0.85)', fontStyle: 'italic', lineHeight: 1.3, marginBottom: '4px' }}>
                        {book.quote.substring(0, 40)}...
                      </p>
                    </div>
                  </div>

                  {/* Book Details */}
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: '#f5f5f7', marginBottom: '2px' }}>{book.title}</h3>
                      <p style={{ fontSize: '0.8125rem', color: '#5a5a6e' }}>{book.subtitle}</p>
                    </div>
                    <p style={{ fontSize: '0.875rem', color: '#8e8ea0', lineHeight: 1.6 }}>{book.description.substring(0, 120)}...</p>

                    <div className="flex items-center gap-2">
                      <span
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{ background: 'rgba(236,72,153,0.1)', color: '#ec4899', border: '1px solid rgba(236,72,153,0.2)' }}
                      >
                        {book.genre}
                      </span>
                      <span
                        className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold"
                        style={{
                          background: book.status === 'Published' ? 'rgba(16,185,129,0.1)' : 'rgba(139,92,246,0.1)',
                          color: book.status === 'Published' ? '#10b981' : '#8b5cf6',
                          border: book.status === 'Published' ? '1px solid rgba(16,185,129,0.2)' : '1px solid rgba(139,92,246,0.2)'
                        }}
                      >
                        {book.status}
                      </span>
                    </div>

                    <a
                      href={book.readLink}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold"
                      style={{ color: '#8b5cf6' }}
                    >
                      {book.status === 'Published' ? 'Start Reading' : 'Get Early Access'}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          RECOGNITION & IMPACT
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: '#09090e' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div
                className="relative rounded-2xl overflow-hidden aspect-square"
                style={{
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 0 0 1px rgba(139,92,246,0.1), 0 24px 64px rgba(0,0,0,0.6)'
                }}
              >
                <img
                  src={meetPatelImage2}
                  alt="Meet Patel — Recognition & Impact"
                  className="w-full h-full object-cover"
                  style={{ filter: 'brightness(0.88) contrast(1.08)' }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(180deg, transparent 40%, rgba(9,9,14,0.8) 100%)' }}
                />
              </div>
              <div
                className="absolute -top-6 -left-6 w-40 h-40 rounded-full pointer-events-none"
                style={{ background: 'rgba(212,168,71,0.05)', filter: 'blur(40px)' }}
              />
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="space-y-7"
            >
              <div>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8b5cf6' }}>
                  Impact
                </span>
                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#f5f5f7', marginTop: '12px' }}>
                  Recognition &<br />
                  <span style={{ color: '#d4a847' }}>Real Impact</span>
                </h2>
                <p style={{ fontSize: '1rem', color: '#8e8ea0', lineHeight: 1.75, marginTop: '16px' }}>
                  From mechanical engineer to mentoring 10+ startups as a business expert — the work has created real impact.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.title}
                    className="p-4 rounded-xl"
                    style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <achievement.icon className="w-5 h-5 mb-3" style={{ color: '#8b5cf6' }} />
                    <h4 style={{ fontSize: '0.9375rem', fontWeight: 700, color: '#f5f5f7', marginBottom: '4px' }}>{achievement.title}</h4>
                    <p style={{ fontSize: '0.8125rem', color: '#5a5a6e', lineHeight: 1.5 }}>{achievement.description}</p>
                  </div>
                ))}
              </div>

              <a
                href="/portfolio"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white"
                style={{ background: '#8b5cf6', boxShadow: '0 4px 20px rgba(139,92,246,0.35)' }}
              >
                Explore My Portfolio
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          CONTACT FORM
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: '#09090e' }}>
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8b5cf6' }}>
              Contact
            </span>
            <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#f5f5f7', marginTop: '12px', marginBottom: '8px' }}>
              Let's Create Something
            </h2>
            <p style={{ fontSize: '1rem', color: '#5a5a6e' }}>
              Ready to build, scale, or get guidance? I'd love to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-8 rounded-2xl"
            style={{ background: '#111118', border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#8e8ea0', marginBottom: '8px' }}>Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your full name"
                    style={{
                      width: '100%',
                      background: '#16161f',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      color: '#f5f5f7',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(139,92,246,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>
                {/* Email */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#8e8ea0', marginBottom: '8px' }}>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    style={{
                      width: '100%',
                      background: '#16161f',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      color: '#f5f5f7',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(139,92,246,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>
              </div>

              {/* WhatsApp */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#8e8ea0', marginBottom: '8px' }}>WhatsApp Number</label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    style={{
                      background: '#16161f',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      padding: '12px 14px',
                      color: '#f5f5f7',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      minWidth: '120px',
                      cursor: 'pointer'
                    }}
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code + country.country} value={country.code} style={{ background: '#16161f' }}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    name="whatsapp"
                    value={formData.whatsapp}
                    onChange={handleInputChange}
                    placeholder="Your WhatsApp number"
                    style={{
                      flex: 1,
                      background: '#16161f',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      color: '#f5f5f7',
                      fontSize: '0.9375rem',
                      outline: 'none',
                      transition: 'border-color 0.2s ease'
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(139,92,246,0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#8e8ea0', marginBottom: '8px' }}>Subject *</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What would you like to discuss?"
                  style={{
                    width: '100%',
                    background: '#16161f',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    color: '#f5f5f7',
                    fontSize: '0.9375rem',
                    outline: 'none',
                    transition: 'border-color 0.2s ease'
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(139,92,246,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              {/* Message */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8125rem', fontWeight: 600, color: '#8e8ea0', marginBottom: '8px' }}>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  placeholder="Share your thoughts, questions, or tell me about your project."
                  style={{
                    width: '100%',
                    background: '#16161f',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    color: '#f5f5f7',
                    fontSize: '0.9375rem',
                    outline: 'none',
                    resize: 'none',
                    transition: 'border-color 0.2s ease',
                    lineHeight: 1.7
                  }}
                  onFocus={e => e.target.style.borderColor = 'rgba(139,92,246,0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className="w-full flex items-center justify-center gap-2.5 py-4 rounded-xl font-semibold text-white"
                style={{
                  background: isSubmitting ? '#3a3a4e' : '#8b5cf6',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  boxShadow: isSubmitting ? 'none' : '0 4px 20px rgba(139,92,246,0.4)',
                  fontSize: '0.9375rem',
                  transition: 'all 0.2s ease'
                }}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            <AnimatePresence>
              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="mt-5 p-4 rounded-xl flex items-center gap-3"
                  style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)' }}
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: '#10b981' }} />
                  <span style={{ fontSize: '0.9375rem', color: '#10b981' }}>
                    Message sent! I'll get back to you within 24 hours.
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          COMMUNITY SECTION
      ═══════════════════════════════════════════════════ */}
      <section className="py-24 lg:py-32" style={{ backgroundColor: '#09090e' }}>
        <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-10 lg:p-14 rounded-3xl text-center relative overflow-hidden"
            style={{
              background: '#111118',
              border: '1px solid rgba(255,255,255,0.07)',
            }}
          >
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(139,92,246,0.08) 0%, transparent 70%)' }}
            />

            <div className="relative z-10">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{ background: 'rgba(139,92,246,0.15)', border: '1px solid rgba(139,92,246,0.25)' }}
              >
                <WhatsAppIcon className="w-7 h-7" style={{ color: '#8b5cf6' }} />
              </div>

              <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8b5cf6' }}>
                Community
              </span>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 800, color: '#f5f5f7', marginTop: '10px', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                Join StartupOS Community
              </h2>
              <p style={{ fontSize: '1rem', color: '#8e8ea0', maxWidth: '500px', margin: '0 auto 32px' }}>
                Connect with fellow entrepreneurs, get exclusive insights, and be part of a thriving startup ecosystem.
              </p>

              <div className="flex flex-wrap gap-10 justify-center mb-10">
                {[{ v: '500+', l: 'Active Members' }, { v: '50+', l: 'Daily Discussions' }, { v: '24/7', l: 'Support' }].map((s, i) => (
                  <div key={i} className="text-center">
                    <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#f5f5f7', lineHeight: 1 }}>{s.v}</div>
                    <div style={{ fontSize: '0.8125rem', color: '#5a5a6e', marginTop: '4px' }}>{s.l}</div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto mb-10 text-left">
                {[
                  'Exclusive startup insights and market trends',
                  'Direct access to industry experts and mentors',
                  'Networking with fellow entrepreneurs',
                  'Early access to funding opportunities',
                  'Periodic masterclasses and Q&A sessions',
                  'Job opportunities and talent referrals',
                ].map((b, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: '#8b5cf6' }} />
                    <span style={{ fontSize: '0.875rem', color: '#8e8ea0' }}>{b}</span>
                  </div>
                ))}
              </div>

              <a
                href="/community"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-semibold"
                style={{ background: '#8b5cf6', boxShadow: '0 4px 20px rgba(139,92,246,0.4)' }}
              >
                <WhatsAppIcon className="w-5 h-5" />
                Join StartupOS Community
                <ArrowRight className="w-4 h-4" />
              </a>

              <p style={{ fontSize: '0.8125rem', color: '#3a3a4e', marginTop: '16px' }}>
                Free to join · No spam · Instant access to 500+ entrepreneurs
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Follow My Journey */}
      <FollowMyJourney />
    </div>
  );
};

export default HomePage;
