import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  User, Briefcase, Target, Code, Trophy, Mic, FileText, Users,
  Linkedin, Twitter, Github, Instagram, Youtube, Mail, MapPin,
  ExternalLink, CheckCircle, Award, Star, TrendingUp, Zap,
  BookOpen, Heart, Calendar, Clock, Eye, MessageSquare, ArrowRight, X, Send
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import FollowMyJourney from '../components/FollowMyJourney';
import logoImage from '../assets/logo for themeetpatel.png';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const personalInfo = {
    name: "Meet Patel",
    title: "Head of Business Excellence",
    company: "Finanshels.com",
    location: "Dubai, UAE",
    email: "the.meetpatel@gmail.com",
    linkedin: "https://www.linkedin.com/in/themeetpatel",
    twitter: "https://x.com/the_meetpatel",
    github: "https://github.com/themeetpatell",
    instagram: "http://instagram.com/the.meetpatell/",
    youtube: "https://youtube.com/@themeetpatell",
    
    bio: "Serial entrepreneur and startup ecosystem builder with over 8 years of experience in building and scaling technology companies. Passionate about helping startups succeed through innovative solutions and strategic guidance.",
    
    about: [
      "Over the past few years, I've served as Head of Business Excellence and Chief of Staff at Finanshels.com, where I drove a company-wide restructuring that lifted revenue by 40% in 8 months, led a $1.5M fundraising round, and launched high-impact GTM initiatives including an AI-powered tax portal.",
      "My career spans FinTech, E-commerce, HRTech, and SaaS across India, UAE, and MENA—building and scaling teams, designing execution systems, and leading product and market strategies that deliver measurable growth."
    ],
    
    interests: [
      "Product Management",
      "Growth & Design", 
      "Business Strategy",
      "HR & Headhunting",
      "Strategic Partnerships",
      "Writing"
    ],
    
    experience: [
      {
        company: "Finanshels.com",
        position: "Head of Business Excellence, Ex. Chief of Staff, Interim COO, Product Manager",
        duration: "Dec 2023 - Present",
        timeSpent: "1 year 10+ months",
        description: "Learning, experimenting, building, and scaling Finanshels.com - The movement towards making businesses smarter with their money.",
        achievements: [
          "Strategic Leadership & Turnaround: Transitioned from Product Consultant to Interim COO, leading company-wide restructuring. Established HR, Marketing, Branding, Ops, and Engineering functions from scratch, hired all Heads, and built scalable systems that grew revenue by 40% in 8 months.",
          "Fundraising & Investor Readiness: Key role in $1.5M USD fundraising due diligence and investor processes, ensuring operational and compliance readiness.",
          "Operational Excellence: Introduced SOPs, OKR/KPI frameworks, and cross-functional processes, improving efficiency by 50% and aligning the org for scale.",
          "Organizational Growth: Scaled HR from 1 to 4 and company size from 34 to 97 in 6 months, lifting retention by 20% and embedding a high-performance culture.",
          "Product & Tech Foundations: Built Product & Engineering from ground-up; defined product strategy, roadmaps, and UI/UX systems that became the base for scalable delivery.",
          "Systems & Automation: Drove CRM migrations (HubSpot/Pipedrive → Zoho), built dashboards, automated workflows, WhatsApp bots, AI calling, and subscription optimizations, cutting costs and boosting funnel conversions.",
          "GTM & Growth Execution: Launched Corporate Tax Portal (AED 99 entry), designed referral/affiliate loops, cross-selling campaigns, and community-first GTMs.",
          "Cost Optimization & Partnerships: Negotiated SaaS/vendor contracts (HubSpot, Ziwo, Wati, Brightcall), saving 6-figure annual costs. Rolled out Partner Portals (Kiflo, Zoho) and onboarded 50+ partners, scaling distribution channels."
        ]
      },
      {
        company: "StudentHub - Jobs for Students and Fresh Graduates",
        position: "COO & Product Manager",
        duration: "Apr 2022 - May 2024",
        timeSpent: "2 years 2 month",
        description: "Managed multiple startups, including Studenthub, Plugn, Tamr, and provided strategic consulting for sold startups like Pogi and theCapital.",
        achievements: [
          "Strategic Financial Management: Turned a loss-making enterprise into a profitable one through increased revenue streams and achieved strategic cost reductions by 35%",
          "Operational Excellence: Improved team productivity by 40% by implementing 30+ tools like Jira, Slack, Zapier, Mixpanel, CRM systems, and Adobe Suite",
          "Expansion & Alliances: Played a pivotal role in expansion efforts, engaging in investments, acquisitions, and forging corporate alliances",
          "Process Enhancement: Developed and implemented 25+ policies, SOPs and procedures that reduced operational bottlenecks by 30%",
          "Project Management: Managed 20+ projects with Jira, reduced onboarding time by 30%, and enhanced communication through structured meetings",
          "HR Leadership: Spearheaded HR strategies for 250+ employees, including recruitment, onboarding, and payroll, enhancing retention rates by 25%",
          "Product Leadership: Led product innovation for 11 products, resulting in a 45% improvement in market performance and customer satisfaction"
        ]
      },
      {
        company: "Plugn",
        position: "Sr. Operations Manager",
        duration: "Sep 2021 - Mar 2022",
        timeSpent: "7 months",
        location: "Kuwait (Remote)",
        description: "An integrated platform offering seamless online business/store initiation, operations, and expansion, encompassing payment, delivery, and warehousing services.",
        achievements: [
          "Operational Leadership: Established 10+ new policies and KPIs that increased operational efficiency by 30% and customer satisfaction by 20%",
          "Revenue Growth: Boosted revenue by 5% by launching a new product variant and introducing 3 customer engagement programs",
          "Process Automation: Reduced customer inquiries by 40% and increased resolution speed by 50% with CRM, WhatsApp automation, and seamless integrations"
        ]
      },
      {
        company: "TorchIt",
        position: "Head Of Operations",
        duration: "Mar 2020 - Oct 2021",
        timeSpent: "1 year 8 months",
        description: "Developed innovative tech solutions for enhanced accessibility, including smart assistive technologies and home automation systems for differently-abled people.",
        achievements: [
          "Product Launch & Revenue Boost: Launched 2 new product lines, increasing revenue by 15% within 6 months",
          "Scaling & Efficiency: Scaled production from 45 to 800 units per day (1678% increase) across 3 locations through effective outsourcing",
          "CSR Impact & Operations: Led a global CSR project, distributing 100,000 smart canes, increasing brand recognition by 70%",
          "Supply-chain and Support: Managed complex supply chain operations, social media strategies, and established a Customer Service department"
        ]
      },
      {
        company: "Kingstorm Automations Pvt Ltd",
        position: "Co-Founder",
        duration: "Dec 2017 - Nov 2019",
        timeSpent: "2 years",
        location: "Anand, India",
        description: "Led a smart home and agriculture automation startup, driving strategic planning, team collaboration, and rapid prototype-to-product development.",
        achievements: [
          "Startup Leadership: Led a team of 8 from concept to market launch, achieving a 100% increase in initial product sales within 6 months",
          "Product Development: Directed 3 product iterations based on market feedback, leading to a 30% rise in customer satisfaction",
          "Strategic Planning: Developed comprehensive business strategies for smart home and agriculture automation markets",
          "Team Collaboration: Built and managed cross-functional teams for product development and market expansion"
        ]
      },
      {
        company: "Incsmart Technologies LLP",
        position: "Co-Founder",
        duration: "Mar 2016 - Nov 2017",
        timeSpent: "1 year 9 months",
        location: "Gandhinagar, India",
        description: "Co-founded and scaled a smart energy meter manufacturing startup, driving HR management, business planning, marketing strategy, sales, and investor relations.",
        achievements: [
          "Company Growth: Scaled startup from 3 to 14 employees, driving a 150% increase in revenue within the first year by implementing effective marketing and sales strategies",
          "Product & Market Strategy: Launched 2 new product lines and expanded market reach by 10% through targeted user feedback and agile development",
          "HR Management: Built comprehensive HR systems and processes for rapid team scaling and employee retention",
          "Investor Relations: Successfully managed investor communications and funding rounds for business expansion"
        ]
      }
    ],
    
    education: [
      {
        institution: "Parul University",
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
      technical: [
        "Operations Management", "Product Management", "Business Strategy", "CRM Systems", "Jira", "Slack", "Zapier", "Mixpanel", "Adobe Suite", "Process Automation", "Supply Chain Management",
        "Software Architecture", "Agile Project Management", "Scrum", "Agile Software Development", "Agile Methodologies", "Product Road Mapping", "Product Development", "Product Design",
        "User Experience Design (UED)", "Design Thinking", "Technology", "Engineering Management", "IT Recruitment", "Technical Recruiting"
      ],
      business: [
        "Strategic Planning", "Financial Modeling", "Revenue Optimization", "Cost Reduction", "Market Analysis", "Business Development", "Investor Relations", "M&A", "Corporate Alliances",
        "Strategic Partnerships", "Business Management", "Business Growth", "Business Planning", "Business Analysis", "Brand Management", "Product Marketing", "Product Strategy",
        "Marketing Management", "Digital Marketing", "Email Marketing", "Customer Success Operations", "Sales Operations", "Customer Segmentation Strategy", "Marketing & Growth",
        "Cross-functional Team Leadership", "Business Operations", "Lean Startup", "Presentation Skills", "Creativity and Innovation", "Research", "Problem Solving"
      ],
      leadership: [
        "Team Management", "HR Leadership", "Project Management", "Communication", "Problem Solving", "Decision Making", "Innovation", "Mentoring", "Operational Excellence",
        "Team Leadership", "Leadership", "People Management", "Management", "Start-ups", "Entrepreneurship", "Critical Thinking", "Decision-Making", "Judgment",
        "Unconscious Bias Awareness Training", "Talent Management", "Accounting", "Marketing Campaigns", "Artificial Intelligence for Business", "Search Engine Optimization (SEO)"
      ]
    },
    
    books: [
      {
        title: "The Eternal Love",
        subtitle: "Part - 1",
        quote: "It's True When Love Gives Everything and Demands Nothing in Return!",
        description: "A romantic novel exploring the depths of unconditional love and sacrifice. Set against a backdrop of timeless romance, this story captures the essence of true love that gives everything without expecting anything in return.",
        genre: "Romance",
        status: "Published",
        readLink: "/The Eternal Love by The Meet Patel.pdf",
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
        title: "Best New Joiner Award",
        year: "April 2024",
        description: "Recognized as the best new joiner at Finanshels for exceptional performance and quick adaptation to company culture"
      },
      {
        title: "Star Performer of the Month",
        year: "Dec 2024",
        description: "Awarded Star Performer of the Month at Finanshels for outstanding contributions and exceeding performance expectations"
      },
      {
        title: "Best Creative Innovator Award",
        year: "Feb 2025",
        description: "Received Best Creative Innovator Award at Finanshels for innovative solutions and creative problem-solving approaches"
      },
      {
        title: "National Level Presentation Winner",
        year: "Aug 2014",
        description: "Won national level poster presentation & elocution competition while in Nirma University"
      },
      {
        title: "Two Fiction Books",
        year: "2025",
        description: "Written two love story books called- 'The Eternal Love' and 'The Endless Devotion' "
      },
      {
        title: "2 Failed Startups During BTech",
        year: "2016-2019",
        description: "Founded and led two startups during BTech - Incsmart Technologies LLP (smart energy meters) and Kingstorm Automations (smart home & agriculture automation). Both ventures provided valuable learning experiences in entrepreneurship, team management, and product development."
      }
    ],
    
    projects: [
      {
        name: "ZeroHuman",
        description: "AI human model platform that creates ultra-realistic, customizable digital humans for advertising, fashion, retail, and entertainment. Features 300% customer interaction increase with zero human efforts and 90% cost savings.",
        tech: ["AI/ML", "Computer Vision", "4K Resolution", "Brand Safety", "Digital Marketing"],
        link: "https://www.zerohuman.co",
        status: "Live"
      },
      {
        name: "MealVerse",
        description: "Innovative food technology platform revolutionizing the culinary experience through digital innovation and sustainable food solutions.",
        tech: ["Food Tech", "Digital Innovation", "Sustainability", "Mobile App", "Web Platform"],
        link: "https://mealverse.in",
        status: "Live"
      },
      {
        name: "StartupOS",
        description: "Comprehensive startup ecosystem platform with 50+ integrated tools and services.",
        tech: ["Mergers & Acquisitions", "Networking", "OS for Startups", "Web Platform"],
        link: "https://www.startupos.in",
        status: "Live"
      },
      {
        name: "Auto Sampler Drug Dissolution Tester",
        description: "Developed an automated drug dissolution testing system for pharmaceutical quality control, featuring precision sampling and real-time data analysis capabilities.",
        tech: ["Arduino", "C++", "LabVIEW", "Mechanical Engineering"],
        company: "Kingstorm",
        duration: "Jul 2020 - Dec 2020",
        status: "Completed"
      },
      {
        name: "Smart Home",
        description: "Built an integrated smart home automation system with IoT sensors, mobile app control, and energy management features for residential and commercial applications.",
        tech: ["IoT", "Arduino", "Mobile App", "Cloud Integration"],
        company: "Kingstorm",
        duration: "Jun 2018 - Dec 2020",
        status: "Completed"
      },
      {
        name: "GSM Motor Pump Starter",
        description: "Designed and developed a GSM-based remote motor pump control system for agricultural irrigation, enabling farmers to control water pumps via SMS commands.",
        tech: ["GSM Module", "Arduino", "SMS Control", "Agriculture Tech"],
        company: "Kingstorm",
        duration: "Nov 2017 - Jun 2018",
        status: "Completed"
      },
      {
        name: "Energy Meter",
        description: "Created a smart energy metering solution with real-time monitoring, data logging, and remote communication capabilities for efficient energy management.",
        tech: ["Embedded Systems", "Energy Monitoring", "Data Logging", "Remote Communication"],
        company: "INCSmart Technologies LLP",
        duration: "Dec 2016 - Jun 2017",
        status: "Completed"
      }
    ],
    
    speaking: [
      {
        event: "Headstart Pitching",
        year: "2023",
        topic: "The Future of Startup Ecosystems",
        location: "Ahmedabad, India"
      },
      {
        event: "IIM A Startup Summit",
        year: "2019",
        topic: "The Smart Home Trends in India",
        location: "Ahmedabad, India"
      }
    ],
    
    certifications: [
      // April 2025
      {
        title: "Agile Project Management with Jira Cloud: 1 Projects, Boards, and Issues",
        issuer: "LinkedIn",
        date: "Apr 2025",
        skills: ["Agile Project Management", "Jira"]
      },
      {
        title: "Agile Project Management with Jira Cloud: 2 Lean and Agile Processes",
        issuer: "LinkedIn",
        date: "Apr 2025",
        skills: ["Agile Project Management", "Jira"]
      },
      {
        title: "Scrum: The Basics",
        issuer: "LinkedIn",
        date: "Apr 2025",
        skills: ["Scrum"]
      },
      
      // June 2024
      {
        title: "Accounting Foundations (2019)",
        issuer: "LinkedIn",
        date: "Jun 2024",
        skills: ["Accounting"]
      },
      {
        title: "Agile Software Development: Scrum for Developers",
        issuer: "LinkedIn",
        date: "Jun 2024",
        skills: ["Agile Software Development", "Scrum"]
      },
      {
        title: "Critical Thinking for Better Judgment and Decision-Making",
        issuer: "LinkedIn",
        date: "Jun 2024",
        skills: ["Decision-Making", "Critical Thinking"]
      },
      {
        title: "Digital Marketing Tools: Create a Marketing Campaign from Start to Finish",
        issuer: "LinkedIn",
        date: "Jun 2024",
        skills: ["Digital Marketing", "Marketing Campaigns"]
      },
      {
        title: "Integrating Generative AI into Business Strategy",
        issuer: "LinkedIn",
        date: "Jun 2024",
        skills: ["Business Strategy", "Artificial Intelligence for Business"]
      },
      {
        title: "Operational Excellence Foundations",
        issuer: "LinkedIn",
        date: "Jun 2024",
        skills: ["Operational Excellence"]
      },
      {
        title: "SEO Foundations",
        issuer: "LinkedIn",
        date: "Jun 2024",
        skills: ["Search Engine Optimization (SEO)"]
      },
      {
        title: "Software Architecture Foundations",
        issuer: "LinkedIn",
        date: "Jun 2024",
        skills: ["Software Architecture"]
      },
      {
        title: "Talent Management",
        issuer: "LinkedIn",
        date: "Jun 2024",
        skills: ["Talent Management"]
      },
      {
        title: "Unconscious Bias",
        issuer: "LinkedIn",
        date: "Jun 2024",
        skills: ["Unconscious Bias Awareness Training"]
      },
      
      // December 2023
      {
        title: "Advanced Product Marketing",
        issuer: "LinkedIn",
        date: "Dec 2023",
        skills: ["Marketing", "Product Marketing"]
      },
      {
        title: "Agile Foundations",
        issuer: "LinkedIn",
        date: "Dec 2023",
        skills: ["Product Management"]
      },
      {
        title: "Agile Software Development",
        issuer: "LinkedIn",
        date: "Dec 2023",
        skills: ["Scrum", "Agile Software Development"]
      },
      {
        title: "Becoming a Product Manager: A Complete Guide",
        issuer: "IIBA",
        date: "Dec 2023",
        skills: ["Scrum", "Product Management"]
      },
      {
        title: "Business Analysis Foundations",
        issuer: "IIBA",
        date: "Dec 2023",
        skills: ["Business Analysis"]
      },
      {
        title: "Business Development: Strategic Planning",
        issuer: "LinkedIn",
        date: "Dec 2023",
        skills: ["Business Strategy", "Business Development", "Strategic Planning"]
      },
      {
        title: "Communication Foundations (2018)",
        issuer: "LinkedIn",
        date: "Dec 2023",
        skills: ["Communication", "Marketing"]
      },
      {
        title: "Design Thinking: Understanding the Process",
        issuer: "LinkedIn",
        date: "Dec 2023",
        skills: ["Design Thinking", "Product Development", "Product Design"]
      },
      {
        title: "Email Marketing: Strategy and Optimization",
        issuer: "LinkedIn",
        date: "Dec 2023",
        skills: ["Digital Marketing", "Email Marketing", "Marketing"]
      },
      {
        title: "Marketing: Customer Segmentation",
        issuer: "LinkedIn",
        date: "Dec 2023",
        skills: ["Customer Segmentation Strategy"]
      },
      {
        title: "Product Management First Steps",
        issuer: "LinkedIn",
        date: "Dec 2023",
        skills: ["Product Management"]
      },
      {
        title: "Product Management: Building a Product Roadmap",
        issuer: "Project Management Institute",
        date: "Dec 2023",
        skills: ["Product Management", "Product Road Mapping"]
      },
      {
        title: "Product Management: Building a Product Strategy",
        issuer: "LinkedIn",
        date: "Dec 2023",
        skills: ["Product Management"]
      },
      {
        title: "Product Strategy",
        issuer: "Project Management Institute",
        date: "Dec 2023",
        skills: ["Product Management", "Product Strategy"]
      },
      {
        title: "Strategic Partnerships",
        issuer: "Project Management Institute",
        date: "Dec 2023",
        skills: ["Business Strategy", "Business", "Strategic Partnerships"]
      },
      {
        title: "Technology for Product Managers",
        issuer: "Project Management Institute",
        date: "Dec 2023",
        skills: ["Technology", "Product Management"]
      },
      {
        title: "Unlock Your Team's Creativity",
        issuer: "LinkedIn",
        date: "Dec 2023",
        skills: ["Creativity and Innovation", "Team Leadership"]
      }
    ],
    
    mentorship: {
      startups: "10+",
      entrepreneurs: "50+",
      successRate: "85%",
      focus: ["Product & Growth", "Design & Marketing", "Systems & Processes", "People & Culture"]
    }
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
    { id: 'certifications', label: 'Licenses & Certifications', icon: FileText },
    { id: 'mentorship', label: 'Mentorship', icon: Users }
  ];

  // Structured Data for About Page
  const aboutStructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About The Meet Patel - Serial Entrepreneur & Startup Ecosystem Builder",
    "description": "Learn about The Meet Patel's journey as a serial entrepreneur, his experience building startups, and his expertise in business operations, product development, and startup ecosystem building.",
    "url": "https://themeetpatel.in/about",
    "mainEntity": {
      "@type": "Person",
      "name": "The Meet Patel",
      "alternateName": ["Meet Patel", "themeetpatel"],
      "jobTitle": "Serial Entrepreneur & Startup Ecosystem Builder",
      "description": "Serial entrepreneur and startup ecosystem builder with over 8 years of experience in building and scaling technology companies.",
      "url": "https://themeetpatel.in",
      "image": "https://themeetpatel.in/logo for themeetpatel.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "email": "the.meetll@gmail.com",
      "telephone": "+971-XX-XXXXXXX",
      "sameAs": [
        "https://www.linkedin.com/in/themeetpatel/",
        "https://x.com/the_meetpatel",
        "https://github.com/themeetpatell",
        "http://instagram.com/the.meetpatell/",
        "https://youtube.com/@themeetpatel"
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
        "name": "Serial Entrepreneur",
        "description": "Building and scaling multiple technology startups",
        "occupationLocation": {
          "@type": "City",
          "name": "Dubai, UAE"
        }
      },
      "alumniOf": [
        {
          "@type": "Organization",
          "name": "Kingstorm Automations Pvt Ltd"
        },
        {
          "@type": "Organization",
          "name": "Incsmart Technologies LLP"
        },
        {
          "@type": "Organization",
          "name": "Plugn"
        }
      ]
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://themeetpatel.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://themeetpatel.in/about"
        }
      ]
    }
  };

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      <SEOHead 
        title="About The Meet Patel - Serial Entrepreneur & Startup Ecosystem Builder"
        description="Learn about The Meet Patel's journey as a serial entrepreneur with 8+ years experience building and scaling startups. Discover his expertise in business operations, product development, and startup ecosystem building. Founder of StartupOS, ZeroHuman, and MealVerse."
        keywords="About The Meet Patel, Meet Patel biography, themeetpatel story, serial entrepreneur journey, startup ecosystem builder, business operations expert, StartupOS founder story, ZeroHuman founder, MealVerse founder, Dubai entrepreneur, startup mentor background, business consultant experience, product development expert, startup scaling expert, entrepreneurship journey, startup advisor background, business strategy expert, operations management expert, startup leadership experience"
        canonical="/about"
        ogImage="/logo for themeetpatel.png"
        structuredData={aboutStructuredData}
      />

      {/* Hero Section */}
      <section ref={heroRef} className="py-12 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-teal-900/20 to-slate-900" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Profile Image */}
            <div className="mb-6 sm:mb-8">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden mb-4 sm:mb-6 border-4 border-cyan-400/20 shadow-2xl">
                <img 
                  src={logoImage} 
                  alt="The Meet Patel" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Name and Title */}
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-3 sm:mb-4">
              {personalInfo.name}
            </h1>
            <p className="text-lg sm:text-2xl text-cyan-200 mb-4 sm:mb-6">
              {personalInfo.title} at {personalInfo.company}
            </p>
            <p className="text-base sm:text-lg text-white/60 mb-6 sm:mb-8 max-w-3xl mx-auto px-4 sm:px-0">
              {personalInfo.bio}
            </p>

            {/* Location and Contact */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-white/60 mb-6 sm:mb-8">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">{personalInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-sm sm:text-base">{personalInfo.email}</span>
              </div>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              <motion.button
                onClick={() => setIsContactFormOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-cyan-400 to-teal-500 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-teal-600 transition-colors w-full sm:w-auto"
              >
                Get In Touch
              </motion.button>
              <motion.a
                href="/blog"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-white/20 transition-colors w-full sm:w-auto"
              >
                Read My Blog
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-4 sm:py-8 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-1 ultra-glass rounded-xl p-1 sm:p-2 overflow-x-auto">
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg transition-all duration-300 whitespace-nowrap text-xs sm:text-sm ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-cyan-400 to-teal-500 text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/10'
                }`}
              >
                <tab.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm font-medium">{tab.label}</span>
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
                      <div className="space-y-4 mb-6">
                        {personalInfo.about.map((paragraph, index) => (
                          <p key={index} className="text-white/80 text-lg leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
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
                        {(() => {
                          console.log('Interests data:', personalInfo.interests);
                          return personalInfo.interests && personalInfo.interests.length > 0 ? (
                            personalInfo.interests.map((interest, index) => (
                              <span key={index} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                                {interest}
                              </span>
                            ))
                          ) : (
                            <p className="text-white/60">No interests defined</p>
                          );
                        })()}
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-4">Quick Stats</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-cyan-400">8+</div>
                          <div className="text-white/60 text-sm">Years Experience</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-cyan-400">10+</div>
                          <div className="text-white/60 text-sm">Startups Mentored</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-cyan-400">2</div>
                          <div className="text-white/60 text-sm">Books Published</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-2xl font-bold text-emerald-400">300+</div>
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
                            <p className="text-cyan-400 font-medium">{exp.company}</p>
                            <p className="text-white/50 text-sm">{exp.duration}</p>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="text-cyan-300 text-sm font-medium bg-cyan-500/10 px-2 py-1 rounded-full">
                                {exp.timeSpent}
                              </span>
                              {exp.location && (
                                <p className="text-white/40 text-xs flex items-center">
                                  <MapPin className="w-3 h-3 mr-1" />
                                  {exp.location}
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                              {exp.duration.split(' - ')[1]}
                            </span>
                          </div>
                        </div>
                        <p className="text-white/70 mb-4">{exp.description}</p>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
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
                        <Code className="w-5 h-5 mr-2 text-cyan-400" />
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
                        <TrendingUp className="w-5 h-5 mr-2 text-cyan-400" />
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
                        <Users className="w-5 h-5 mr-2 text-cyan-400" />
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
                              : project.status === 'Completed'
                              ? 'bg-blue-500/20 text-blue-400'
                              : 'bg-gray-500/20 text-gray-400'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                        {project.company && (
                          <div className="mb-2">
                            <span className="text-cyan-400 text-sm font-medium">{project.company}</span>
                            {project.duration && (
                              <span className="text-white/50 text-sm ml-2">• {project.duration}</span>
                            )}
                          </div>
                        )}
                        <p className="text-white/70 text-sm mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech, idx) => (
                            <span key={idx} className="bg-white/10 text-white/60 px-2 py-1 rounded text-xs">
                              {tech}
                            </span>
                          ))}
                        </div>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-400 hover:text-cyan-300 text-sm font-medium flex items-center"
                          >
                            View Project
                            <ExternalLink className="w-4 h-4 ml-1" />
                          </a>
                        )}
              </motion.div>
            ))}
          </div>
        </div>
              )}

              {/* Books Section */}
              {activeTab === 'books' && (
                <div className="ultra-glass rounded-xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-8">Books Written</h2>
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
                              <motion.a
                                href={book.readLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-1 bg-cyan-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-cyan-600 transition-colors text-center block"
                              >
                                Read Now
                              </motion.a>
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
                          <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <Trophy className="w-6 h-6 text-cyan-400" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{achievement.title}</h3>
                            <p className="text-cyan-400 text-sm font-medium">{achievement.year}</p>
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
                            <p className="text-cyan-400 font-medium">{event.topic}</p>
                            <p className="text-white/50 text-sm">{event.location}</p>
                          </div>
                          <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                            {event.year}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}

              {/* Licenses & Certifications Section */}
              {activeTab === 'certifications' && (
                <div className="ultra-glass rounded-xl p-8">
                  <h2 className="text-3xl font-bold text-white mb-8">Licenses & Certifications</h2>
                  <div className="space-y-6">
                    {personalInfo.certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="bg-white/5 rounded-lg p-6"
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-white mb-2">{cert.title}</h3>
                            <div className="flex items-center space-x-4 text-sm">
                              <span className="text-cyan-400 font-medium">{cert.issuer}</span>
                              <span className="text-white/50">{cert.date}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                              {cert.issuer}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="bg-cyan-500/10 text-cyan-300 px-2 py-1 rounded-full text-xs"
                            >
                              {skill}
                            </span>
                          ))}
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
                          <div className="text-3xl font-bold text-cyan-400">{personalInfo.mentorship.startups}</div>
                          <div className="text-white/60 text-sm">Startups Mentored</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-3xl font-bold text-cyan-400">{personalInfo.mentorship.entrepreneurs}</div>
                          <div className="text-white/60 text-sm">Entrepreneurs Helped</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-3xl font-bold text-cyan-400">{personalInfo.mentorship.successRate}</div>
                          <div className="text-white/60 text-sm">Success Rate</div>
                        </div>
                        <div className="bg-white/5 rounded-lg p-4 text-center">
                          <div className="text-3xl font-bold text-cyan-400">8+</div>
                          <div className="text-white/60 text-sm">Years Mentoring</div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">Focus Areas</h3>
                      <div className="space-y-3">
                        {personalInfo.mentorship.focus.map((area, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-cyan-400" />
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
                          className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
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
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-white/80 text-sm mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                    placeholder="How can I help you?"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-cyan-500 text-white py-3 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Follow My Journey Section */}
      <FollowMyJourney />
    </div>
  );
};

export default AboutPage;