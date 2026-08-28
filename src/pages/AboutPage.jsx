import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Briefcase, Target, Trophy, Mic, FileText,
  Linkedin, Twitter, Github, Instagram,
  CheckCircle, Award, BookOpen,
  MessageSquare, ArrowRight, MapPin
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { ABOUT } from '../data/pageVoice';
import { CATEGORY, PILLARS } from '../data/thesis';
import { BRAND, STATS } from '../data/company8';
import CapabilitiesTab from '../components/about/CapabilitiesTab';
import FollowMyJourney from '../components/FollowMyJourney';
import meetPatelImage from '../assets/themeetpatel.jpeg';
import { meetPatelEntities, personRef, buildBreadcrumb } from '../lib/seoEntity';

void motion;

/* ─── Design tokens ─── */
const T = {
  bg:      '#07070d',
  surface: '#0d0e16',
  raised:  '#151725',
  border:  'rgba(255,255,255,0.07)',
  text:    '#f7f7fb',
  sub:     '#a8a9c3',
  muted:   '#70728d',
  violet:  '#9b8bff',
  gold:    '#e8c36a',
};

/* System mono for figures only. No extra font request, so no layout
   shift — the numbers just have to read as data, not as prose. */
const MONO = 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace';

/* ─── Reusable label ─── */
const Label = ({ children }) => (
  <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: T.violet }}>
    {children}
  </span>
);

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const [expandedExp, setExpandedExp] = useState(null);

  /* ── DATA ── */
  const personalInfo = {
    bio: "I’m the founder of Company 8, building Dan — the AI that monitors a business, investigates what changed, and puts an evidence-backed decision in front of the people who run it. An operator who has built top teams and scaled ventures across fintech, hardware, and software, now all-in on Company 8.",
    about: [
      `${BRAND.company}, and ${BRAND.product} inside it — the layer that watches a business, works out what changed and why, and puts an evidence-backed decision in front of whoever has to act on it. Before this, ${STATS.venturesBuilt} ventures across fintech, hardware, edtech and software; two taken from zero to scale.`,
      'I bring the company onto one operating rhythm, put a clear owner behind every number, and stay close enough to the work to see what dashboards miss. I’m direct when decisions are needed, steady when things go wrong, and focused on building systems that work without depending on me.',
      'I spent years as the human version of Dan: the operator who had to notice what was moving, work out why, and say what to do about it. That is the job I am now building software for.'
    ],
    interests: [
      "Business Strategy", "Branding", "Customer Experience", "Product Management", "Operations & Scaling",
      "Automation & AI Workflows", "Strategic Partnerships", "Growth & Marketing", 
      "Writing & Storytelling", "Travelling & Hiking", "Cricket & Football",
      "Burgers & Chocolates", "Philosophy & Psychology", "Music & Photography"
    ],
    experience: [
      {
        company: "Company 8",
        position: "Founder & Operator — currently building Company 8",
        duration: "Nov 2025 – Present",
        location: "Dubai, UAE",
        achievements: [
          "Founder of Company 8, building Dan — the AI that monitors a business, investigates what changed, and puts an evidence-backed decision in front of the people who run it.",
          "Previously built and scaled 10+ ventures across AI, fintech, hardware, edtech, and software.",
          "ZeroHuman: CGO & Co-founder — AI human model platform for advertising, fashion, retail & entertainment.",
          "Mealverse: Investor & Mentor — Food technology platform revolutionizing the culinary experience."
        ]
      },
      {
        company: "Finanshels.com",
        position: "Associate Vice President / Head – COE / Interim COO",
        duration: "Dec 2023 – Present",
        location: "Dubai, UAE",
        achievements: [
          "Associate Vice President (Jul 2025 – Present): scaling strategy, sales, growth, product, people, and company-wide execution as the integrator across all functions.",
          "Head – COE (Aug 2024 – Jul 2025): led strategic projects, PMO systems, and cross-functional execution across departments — KPI and leadership reporting, SOPs, and accountability systems.",
          "Interim COO (Mar 2024 – Jul 2024): stepped in during a restructuring phase to improve operating discipline, ownership, and execution clarity — department-level KPIs and execution frameworks.",
          "Product & Growth Strategist (Dec 2023 – Feb 2024): product strategy, growth initiatives, GTM planning, and business process optimization."
        ]
      },
      {
        company: "StudentHub, Plugn, BAWES",
        position: "Chief Operating Officer / Product Manager",
        duration: "Apr 2022 – May 2024",
        location: "Kuwait (Remote)",
        achievements: [
          "Turned loss-making portfolio profitable through revenue lift and 35% cost reduction; built 30+ tool stack (Jira, Slack, Zapier, Mixpanel, CRM) improving productivity 40%.",
          "Managed 20+ projects with structured cadences; onboarding time down 30% via SOPs and playbooks.",
          "HR leadership for 250+ employees: recruitment, onboarding, payroll; retention up 25%.",
          "Product leadership for 11 products; market performance +45% via strategy, UX, and QA rigor.",
          "Expansion & alliances: supported investments, acquisitions, corporate partnerships; investor engagement and reporting."
        ]
      },
      {
        company: "Plugn (BAWES group)",
        position: "Sr. Operations Manager",
        duration: "Sep 2021 – Mar 2022",
        location: "Kuwait (Remote)",
        achievements: [
          "Established 10+ new policies and KPIs → operational efficiency up 30%.",
          "Boosted revenue 5% by launching new product variant and 3 customer engagement programs.",
          "Reduced customer inquiries 40% with CRM, WhatsApp automation, and integrations."
        ]
      },
      {
        company: "TorchIt",
        position: "Head of Operations",
        duration: "Mar 2020 – Oct 2021",
        location: "India",
        achievements: [
          "Launched 2 new product lines, revenue up 15% within 6 months.",
          "Scaled production from 45 to 800 units/day (1678% increase) across 3 locations.",
          "Led global CSR project distributing 100,000 smart canes — brand recognition up 70%."
        ]
      },
      {
        company: "Kingstorm Automations",
        position: "Co-Founder",
        duration: "Dec 2017 – Nov 2019",
        location: "Anand, India",
        achievements: [
          "Led team of 8 from concept to market — 100% increase in initial product sales in 6 months.",
          "Directed 3 product iterations based on market feedback → customer satisfaction up 30%.",
          "Smart home & agriculture automation markets."
        ]
      },
      {
        company: "Incsmart Technologies",
        position: "Co-Founder",
        duration: "Mar 2016 – Nov 2017",
        location: "Gandhinagar, India",
        achievements: [
          "Scaled startup from 3 to 14 employees; revenue up 150% in first year.",
          "Launched 2 new product lines, expanded market reach by 10%.",
          "Smart energy meter manufacturing."
        ]
      }
    ],
    education: [
      {
        institution: "Parul University",
        degree: "B.Tech in Mechanical Engineering",
        duration: "Jul 2015 – May 2018",
        description: "Mechanical Engineering, CGPA 7.6 — projects in automation and operations."
      },
      {
        institution: "Nirma University",
        degree: "Diploma in Mechanical Engineering",
        duration: "Aug 2012 – May 2015",
        description: "Diploma with CGPA 8.6 — focus on project management, manufacturing systems, and early leadership."
      }
    ],
    achievements: [
      { title: "National Level Winner", year: "Aug 2014", org: "Nirma University", description: "National level poster presentation & elocution competition." },
      { title: "Published Author", year: "2025", org: "Independent", description: "Two love story novels: 'The Eternal Love' & 'The Endless Devotion'." },
      { title: "Serial Entrepreneur", year: "2016–2025", org: "Self", description: "Founded and led multiple startups across India and UAE." }
    ],
    books: [
      {
        title: "The Eternal Love",
        subtitle: "Part I",
        quote: "It's True When Love Gives Everything and Demands Nothing in Return!",
        description: "A romantic novel exploring the depths of unconditional love and sacrifice.",
        genre: "Romance",
        status: "Published",
        coverGradient: "from-pink-400 via-purple-500 to-blue-500",
        readLink: "/The Eternal Love by The Meet Patel.pdf"
      },
      {
        title: "The Endless Devotion",
        subtitle: "Part II",
        quote: "You'll experience your life's entire journey in the eyes of the person who'll love you endlessly!",
        description: "A cosmic romance exploring the infinite nature of devotion and the profound connection between souls.",
        genre: "Romance",
        status: "Early Access",
        coverGradient: "from-rose-400 via-pink-500 to-purple-600",
        readLink: "#"
      }
    ],
    speaking: [
      { event: "Headstart Pitching", year: "2023", topic: "The Future of Startup Ecosystems", location: "Ahmedabad, India" },
      { event: "IIM A Startup Summit", year: "2019", topic: "Smart Home Trends in India", location: "Ahmedabad, India" }
    ],
    certifications: [
      { title: "Agile Project Management with Jira Cloud: 1 Projects, Boards, and Issues", issuer: "LinkedIn", date: "Apr 2025" },
      { title: "Agile Project Management with Jira Cloud: 2 Lean and Agile Processes", issuer: "LinkedIn", date: "Apr 2025" },
      { title: "Scrum: The Basics", issuer: "LinkedIn", date: "Apr 2025" },
      { title: "Accounting Foundations", issuer: "LinkedIn", date: "Jun 2024" },
      { title: "Agile Software Development: Scrum for Developers", issuer: "LinkedIn", date: "Jun 2024" },
      { title: "Critical Thinking for Better Judgment and Decision-Making", issuer: "LinkedIn", date: "Jun 2024" },
      { title: "Digital Marketing Tools: Create a Marketing Campaign from Start to Finish", issuer: "LinkedIn", date: "Jun 2024" },
      { title: "Integrating Generative AI into Business Strategy", issuer: "LinkedIn", date: "Jun 2024" },
      { title: "Operational Excellence Foundations", issuer: "LinkedIn", date: "Jun 2024" },
      { title: "SEO Foundations", issuer: "LinkedIn", date: "Jun 2024" },
      { title: "Software Architecture Foundations", issuer: "LinkedIn", date: "Jun 2024" },
      { title: "Talent Management", issuer: "LinkedIn", date: "Jun 2024" },
      { title: "Unconscious Bias", issuer: "LinkedIn", date: "Jun 2024" },
      { title: "Product Strategy", issuer: "PMI", date: "Dec 2023" },
      { title: "Product Management: Building a Product Roadmap", issuer: "PMI", date: "Dec 2023" },
      { title: "Technology for Product Managers", issuer: "PMI", date: "Dec 2023" },
      { title: "Strategic Partnerships", issuer: "PMI", date: "Dec 2023" },
      { title: "Becoming a Product Manager: A Complete Guide", issuer: "IIBA", date: "Dec 2023" },
      { title: "Business Analysis Foundations", issuer: "IIBA", date: "Dec 2023" },
      { title: "Advanced Product Marketing", issuer: "LinkedIn", date: "Dec 2023" },
      { title: "Agile Foundations", issuer: "LinkedIn", date: "Dec 2023" },
      { title: "Agile Software Development", issuer: "LinkedIn", date: "Dec 2023" },
      { title: "Business Development: Strategic Planning", issuer: "LinkedIn", date: "Dec 2023" },
      { title: "Communication Foundations", issuer: "LinkedIn", date: "Dec 2023" },
      { title: "Design Thinking: Understanding the Process", issuer: "LinkedIn", date: "Dec 2023" },
      { title: "Email Marketing: Strategy and Optimization", issuer: "LinkedIn", date: "Dec 2023" },
      { title: "Marketing: Customer Segmentation", issuer: "LinkedIn", date: "Dec 2023" },
      { title: "Product Management: Building a Product Strategy", issuer: "LinkedIn", date: "Dec 2023" },
      { title: "Product Management First Steps", issuer: "LinkedIn", date: "Dec 2023" },
      { title: "Unlock Your Team's Creativity", issuer: "LinkedIn", date: "Dec 2023" },
    ]
  };

  const tabs = [
    { id: 'experience',      label: 'Experience',      icon: Briefcase },
    { id: 'skills',          label: 'Capabilities',    icon: Target },
    { id: 'achievements',    label: 'Achievements',    icon: Trophy },
    { id: 'books',           label: 'Books',           icon: BookOpen },
    { id: 'speaking',        label: 'Speaking',        icon: Mic },
    { id: 'certifications',  label: 'Certifications',  icon: FileText },
  ];

  /* No FAQ on this page by design. Every crawler is routed to the
     server-rendered version (middleware.js -> api/_renderPage.js), which
     carries its own FAQ and FAQPage schema from api/_pageContent.js.
     A visible copy here only repeated the hero, the cards and the
     timeline to human readers. Edit the FAQ there, not here. */

  const structuredData = [
    ...meetPatelEntities,
    {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: personRef,
      about: personRef,
    },
    buildBreadcrumb([
      { name: 'Home', url: '/' },
      { name: 'About', url: '/about' },
    ]),
  ];

  /* ─── card style ─── */
  const card = { background: T.surface, border: `1px solid ${T.border}`, borderRadius: '16px' };
  const heroStats = [
    { value: '8+', label: 'Years' },
    { value: '10+', label: 'Ventures Built' },
    { value: '490+', label: 'Team Members Led' },
  ];
  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', meta: '/in/themeetpatel', href: 'https://www.linkedin.com/in/themeetpatel/' },
    { icon: Twitter, label: 'X', meta: '@the_meetpatel', href: 'https://x.com/the_meetpatel' },
    { icon: Github, label: 'GitHub', meta: 'themeetpatell', href: 'https://github.com/themeetpatell' },
    { icon: Instagram, label: 'Instagram', meta: '@the.meetpatell', href: 'https://instagram.com/the.meetpatell/' },
    { icon: BookOpen, label: 'Medium', meta: '@themeetpatel', href: 'https://medium.com/@themeetpatel' },
  ];

  return (
    <div style={{ backgroundColor: T.bg, minHeight: '100vh' }}>
      <SEOHead
        title="About Meet Patel — Founder & Operator in Dubai"
        description="Meet Patel (themeetpatel) is a Dubai-based founder and operator. He is the founder of Company 8, building Dan — it monitors the business, investigates what changed, and puts an evidence-backed decision in front of the people who run it."
        keywords="About Meet Patel, Meet Patel, themeetpatel, meetpatel, Meet Patel Dubai, startup founder, operator, Company 8, Dan, useDan, entrepreneurship, startups, founders"
        canonical="/about"
        structuredData={structuredData}
      />

      {/* ═══ HERO ═══ */}
      <section
        className="relative pt-[70px] overflow-hidden"
        style={{ backgroundColor: T.bg }}
      >
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(155,139,255,0.09) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(340px,520px)] gap-10 lg:gap-14 items-center">

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="flex flex-wrap items-center gap-4"
              >
                <div
                  className="inline-flex items-center gap-3 px-4 py-2 rounded-full"
                  style={{ background: 'rgba(232,195,106,0.08)', border: '1px solid rgba(232,195,106,0.18)' }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '999px', background: T.gold, display: 'inline-block' }} />
                  <span style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: T.gold }}>
                    Founder, Company 8
                  </span>
                </div>
                <div className="inline-flex items-center gap-2" style={{ color: T.muted, fontSize: '0.95rem' }}>
                  <MapPin className="w-4 h-4" style={{ color: T.violet }} />
                  <span>Dubai, UAE</span>
                  <span aria-hidden="true">🇦🇪</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
              >
                <Label>Meet Patel</Label>
                <h1 style={{ fontSize: 'clamp(4.2rem, 10vw, 8.6rem)', fontWeight: 900, lineHeight: 0.9, letterSpacing: '-0.055em', color: T.text, marginTop: '14px' }}>
                  <span style={{ display: 'block' }}>MEET</span>
                  <span style={{ display: 'block', color: T.violet }}>PATEL.</span>
                </h1>
                <p style={{ fontSize: 'clamp(1.15rem, 2vw, 1.45rem)', color: T.sub, marginTop: '22px', maxWidth: '620px', lineHeight: 1.55 }}>
                  I work on how AI changes the way companies are operated — how decisions get made, and what has to exist between information and action. Company 8 is that thesis as a product: I&apos;m building Dan.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.16 }}
                className="space-y-4"
              >
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="flex flex-wrap items-center gap-4"
              >
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #9b8bff, #7c5df7)',
                    color: '#fff',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    boxShadow: '0 18px 36px rgba(124,93,247,0.25)',
                  }}
                >
                  <MessageSquare className="w-4 h-4" />
                  Let&apos;s Talk
                </a>
                <a
                  href="/portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full"
                  style={{
                    background: 'transparent',
                    color: T.text,
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    border: `1px solid ${T.border}`,
                  }}
                >
                  View My Work
                  <ArrowRight className="w-4 h-4" />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.32 }}
                className="grid grid-cols-3 gap-4 pt-6"
                style={{ borderTop: `1px solid rgba(255,255,255,0.06)`, maxWidth: '620px' }}
              >
                {heroStats.map((s) => (
                  <div key={s.label}>
                    <div style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 900, color: T.text, lineHeight: 1 }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: T.muted, marginTop: '8px' }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                style={{
                  background: 'transparent',
                }}
              >
                <div style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden' }}>
                  <img
                    src={meetPatelImage}
                    alt="Meet Patel"
                    style={{ width: '100%', height: '620px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(180deg, rgba(7,7,13,0.08) 0%, rgba(7,7,13,0) 30%, rgba(7,7,13,0.58) 100%)',
                    }}
                  />
                  <div
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
                    style={{
                      position: 'absolute',
                      top: '18px',
                      right: '18px',
                      background: 'rgba(13,14,22,0.82)',
                      border: '1px solid rgba(232,195,106,0.24)',
                      color: T.gold,
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    <MapPin className="w-4 h-4" />
                    <span style={{ fontSize: '0.95rem', fontWeight: 700 }}>Dubai, UAE</span>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}
            className="mt-8 lg:mt-10"
          >
            <div style={{ ...card, padding: '20px 20px 22px' }}>
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <Label>Elsewhere</Label>
                <span style={{ fontSize: '0.85rem', color: T.muted }}>
                  Follow the work, the writing, and the thinking behind it.
                </span>
              </div>
              <div
                className="grid gap-3 mt-4"
                style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))' }}
              >
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-2xl flex items-center gap-3 px-4 py-3"
                    style={{
                      background: T.raised,
                      border: `1px solid ${T.border}`,
                      textDecoration: 'none',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(155,139,255,0.10)';
                      e.currentTarget.style.borderColor = 'rgba(155,139,255,0.24)';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = T.raised;
                      e.currentTarget.style.borderColor = T.border;
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: 'rgba(155,139,255,0.10)', color: T.violet }}
                    >
                      <s.icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div style={{ fontSize: '0.875rem', fontWeight: 700, color: T.text, lineHeight: 1.2 }}>
                        {s.label}
                      </div>
                      <div
                        style={{
                          fontSize: '0.75rem',
                          color: T.muted,
                          marginTop: '3px',
                          lineHeight: 1.2,
                          whiteSpace: 'nowrap',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {s.meta}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8">
            <div style={{ ...card, padding: '24px' }}>
              <Label>What I Build</Label>
              <p style={{ fontSize: '0.95rem', color: T.sub, lineHeight: 1.8, marginTop: '14px' }}>
                {personalInfo.about[0]}
              </p>
            </div>
            <div style={{ ...card, padding: '24px' }}>
              <Label>How I Operate</Label>
              <p style={{ fontSize: '0.95rem', color: T.sub, lineHeight: 1.8, marginTop: '14px' }}>
                {personalInfo.about[1]}
              </p>
            </div>
            <div style={{ ...card, padding: '24px' }}>
              <Label>Beyond Work</Label>
              <div className="flex flex-wrap gap-2 mt-4">
                {personalInfo.interests.map((interest, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '5px 12px',
                      background: 'rgba(155,139,255,0.08)',
                      color: T.violet,
                      border: '1px solid rgba(155,139,255,0.2)',
                      borderRadius: '50px',
                    }}
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ THESIS ═══
           Sits above the CV tabs on purpose: the argument is the reason to keep
           reading, the timeline is the evidence for it. Copy comes from
           src/data/thesis.js so /thesis, /about and the homepage never diverge. */}
      <section style={{ borderTop: `1px solid rgba(255,255,255,0.06)`, background: '#0b0b12' }}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10" style={{ padding: '72px 24px' }}>
          <Label>What I argue</Label>
          <h2
            style={{
              fontSize: 'clamp(1.6rem, 3.4vw, 2.4rem)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              color: T.text,
              margin: '14px 0 0',
              lineHeight: 1.2,
            }}
          >
            {CATEGORY.thesis}
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: T.sub, margin: '18px 0 0', maxWidth: 720 }}>
            {CATEGORY.elaboration}
          </p>

          <div style={{ display: 'grid', gap: 12, marginTop: 28 }}>
            {PILLARS.map((pillar) => (
              <div
                key={pillar.id}
                style={{
                  display: 'flex',
                  gap: 14,
                  padding: '16px 0',
                  borderTop: `1px solid rgba(255,255,255,0.06)`,
                }}
              >
                <span style={{ color: T.violet, fontWeight: 800, fontSize: 15, minWidth: 34 }}>
                  {pillar.weight}%
                </span>
                <div>
                  <div style={{ fontSize: 16.5, fontWeight: 700, color: T.text }}>{pillar.name}</div>
                  <div style={{ fontSize: 15.5, lineHeight: 1.6, color: T.sub, marginTop: 4 }}>
                    {pillar.summary}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <a
            href="/thesis"
            style={{
              display: 'inline-block',
              marginTop: 28,
              color: T.violet,
              fontSize: 15.5,
              fontWeight: 600,
              textDecoration: 'none',
            }}
          >
            Read the full thesis &rarr;
          </a>
        </div>
      </section>

      {/* ═══ TAB BAR ═══ */}
      <div
        className="sticky top-[64px] sm:top-[70px] z-50"
        style={{ backgroundColor: 'rgba(7,7,13,0.95)', backdropFilter: 'blur(20px)', borderBottom: `1px solid rgba(255,255,255,0.06)` }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-3">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl whitespace-nowrap text-sm font-medium transition-all duration-200 flex-shrink-0"
                style={{
                  background: activeTab === tab.id ? 'rgba(155,139,255,0.15)' : 'transparent',
                  color: activeTab === tab.id ? T.violet : T.muted,
                  border: activeTab === tab.id ? '1px solid rgba(155,139,255,0.25)' : '1px solid transparent',
                }}
              >
                <tab.icon className="w-3.5 h-3.5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ TAB CONTENT ═══ */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
          >

            {/* ── EXPERIENCE ── */}
            {activeTab === 'experience' && (
              <div className="space-y-4">
                <div className="mb-10">
                  <Label>Career</Label>
                  <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', color: T.text, marginTop: '8px' }}>{ABOUT.sectionTitles.experience}</h2>
                </div>

                {/* Experience cards */}
                <div className="space-y-3">
                  {personalInfo.experience.map((exp, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <div
                        className="rounded-2xl overflow-hidden cursor-pointer"
                        style={{ ...card, transition: 'all 0.25s ease' }}
                        onClick={() => setExpandedExp(expandedExp === i ? null : i)}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(155,139,255,0.2)'; e.currentTarget.style.background = T.raised; }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = T.border; e.currentTarget.style.background = T.surface; }}
                      >
                        {/* Header row */}
                        <div className="flex items-start justify-between p-6 gap-4">
                          <div className="flex items-start gap-4">
                            {/* Number */}
                            <div
                              className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center"
                              style={{ background: 'rgba(155,139,255,0.1)', border: '1px solid rgba(155,139,255,0.2)' }}
                            >
                              <span style={{ fontSize: '0.75rem', fontWeight: 900, color: T.violet }}>
                                {String(i + 1).padStart(2, '0')}
                              </span>
                            </div>
                            <div>
                              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: T.text }}>{exp.company}</h3>
                              <p style={{ fontSize: '0.875rem', color: T.violet, fontWeight: 600, marginTop: '2px' }}>{exp.position}</p>
                              <div className="flex items-center gap-3 mt-2">
                                <span style={{ fontSize: '0.75rem', color: T.muted }}>{exp.duration}</span>
                                {exp.location && (
                                  <>
                                    <span style={{ color: T.muted, fontSize: '0.5rem' }}>◆</span>
                                    <span style={{ fontSize: '0.75rem', color: T.muted }}>{exp.location}</span>
                                  </>
                                )}
                              </div>
                            </div>
                          </div>
                          <div
                            className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                            style={{
                              background: T.raised,
                              color: T.muted,
                              transform: expandedExp === i ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.3s ease'
                            }}
                          >
                            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                              <path d="M2 4l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                        </div>

                        {/* Expanded achievements */}
                        <AnimatePresence>
                          {expandedExp === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                            >
                              <div style={{ borderTop: `1px solid ${T.border}`, padding: '20px 24px 24px' }}>
                                <div className="space-y-2.5">
                                  {exp.achievements.map((a, j) => (
                                    <div key={j} className="flex items-start gap-3">
                                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: T.violet, marginTop: '8px', flexShrink: 0 }} />
                                      <p style={{ fontSize: '0.875rem', color: T.sub, lineHeight: 1.65 }}>{a}</p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Education */}
                <div className="mt-14">
                  <Label>Education</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {personalInfo.education.map((edu, i) => (
                      <div key={i} style={{ ...card, padding: '24px' }}>
                        <div
                          className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold mb-3"
                          style={{ background: 'rgba(212,168,71,0.1)', color: T.gold, border: '1px solid rgba(212,168,71,0.2)' }}
                        >
                          {edu.duration}
                        </div>
                        <h3 style={{ fontSize: '1rem', fontWeight: 700, color: T.text, marginBottom: '4px' }}>{edu.institution}</h3>
                        <p style={{ fontSize: '0.875rem', color: T.violet, fontWeight: 600, marginBottom: '8px' }}>{edu.degree}</p>
                        <p style={{ fontSize: '0.8125rem', color: T.muted, lineHeight: 1.6 }}>{edu.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* ── SKILLS ── */}
            {activeTab === 'skills' && <CapabilitiesTab T={T} card={card} mono={MONO} />}

            {/* ── ACHIEVEMENTS ── */}
            {activeTab === 'achievements' && (
              <div>
                <div className="mb-10">
                  <Label>Recognition</Label>
                  <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', color: T.text, marginTop: '8px' }}>{ABOUT.sectionTitles.awards}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {personalInfo.achievements.map((a, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.08 }}
                      style={{ ...card, padding: '24px' }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: 'rgba(212,168,71,0.1)', border: '1px solid rgba(212,168,71,0.2)' }}
                        >
                          <Award className="w-5 h-5" style={{ color: T.gold }} />
                        </div>
                        <span style={{ fontSize: '0.75rem', color: T.gold, fontWeight: 700 }}>{a.year}</span>
                      </div>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: T.text, marginBottom: '4px' }}>{a.title}</h3>
                      <p style={{ fontSize: '0.75rem', color: T.violet, fontWeight: 600, marginBottom: '8px' }}>{a.org}</p>
                      <p style={{ fontSize: '0.8125rem', color: T.muted, lineHeight: 1.6 }}>{a.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ── BOOKS ── */}
            {activeTab === 'books' && (
              <div>
                <div className="mb-10">
                  <Label>Writing</Label>
                  <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', color: T.text, marginTop: '8px' }}>{ABOUT.sectionTitles.published}</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {personalInfo.books.map((book, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.12 }}
                      style={{ ...card, padding: '28px' }}
                    >
                      <div className="flex gap-6">
                        <div
                          className={`w-28 h-36 flex-shrink-0 rounded-xl bg-gradient-to-br ${book.coverGradient} relative overflow-hidden flex items-end p-3`}
                          style={{ boxShadow: '0 12px 32px rgba(0,0,0,0.5)' }}
                        >
                          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.35)' }} />
                          <div className="relative z-10">
                            <p style={{ fontSize: '0.625rem', color: 'rgba(255,255,255,0.9)', fontWeight: 700, lineHeight: 1.2 }}>{book.title}</p>
                          </div>
                        </div>
                        <div className="flex-1 space-y-3">
                          <div>
                            <h3 style={{ fontSize: '1.125rem', fontWeight: 700, color: T.text }}>{book.title}</h3>
                            <p style={{ fontSize: '0.8125rem', color: T.muted }}>{book.subtitle}</p>
                          </div>
                          <p style={{ fontSize: '0.875rem', color: T.sub, lineHeight: 1.65, fontStyle: 'italic' }}>"{book.quote}"</p>
                          <p style={{ fontSize: '0.8125rem', color: T.muted, lineHeight: 1.6 }}>{book.description}</p>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span style={{ fontSize: '0.75rem', fontWeight: 600, padding: '3px 10px', borderRadius: '50px', background: 'rgba(236,72,153,0.1)', color: '#ec4899', border: '1px solid rgba(236,72,153,0.2)' }}>
                              {book.genre}
                            </span>
                            <span style={{
                              fontSize: '0.75rem', fontWeight: 600, padding: '3px 10px', borderRadius: '50px',
                              background: book.status === 'Published' ? 'rgba(16,185,129,0.1)' : 'rgba(155,139,255,0.1)',
                              color: book.status === 'Published' ? '#10b981' : T.violet,
                              border: book.status === 'Published' ? '1px solid rgba(16,185,129,0.2)' : '1px solid rgba(155,139,255,0.2)'
                            }}>{book.status}</span>
                          </div>
                          <a
                            href={book.readLink}
                            className="inline-flex items-center gap-1.5"
                            style={{ fontSize: '0.875rem', fontWeight: 600, color: T.violet, textDecoration: 'none' }}
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
            )}

            {/* ── SPEAKING ── */}
            {activeTab === 'speaking' && (
              <div>
                <div className="mb-10">
                  <Label>Talks</Label>
                  <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', color: T.text, marginTop: '8px' }}>{ABOUT.sectionTitles.speaking}</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {personalInfo.speaking.map((s, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      style={{ ...card, padding: '28px' }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className="w-10 h-10 rounded-xl flex items-center justify-center"
                          style={{ background: 'rgba(155,139,255,0.1)', border: '1px solid rgba(155,139,255,0.2)' }}
                        >
                          <Mic className="w-5 h-5" style={{ color: T.violet }} />
                        </div>
                        <span style={{ fontSize: '0.75rem', color: T.gold, fontWeight: 700 }}>{s.year}</span>
                      </div>
                      <h3 style={{ fontSize: '1.0625rem', fontWeight: 700, color: T.text, marginBottom: '6px' }}>{s.event}</h3>
                      <p style={{ fontSize: '0.875rem', color: T.violet, fontWeight: 600, marginBottom: '8px' }}>{s.topic}</p>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" style={{ color: T.muted }} />
                        <span style={{ fontSize: '0.8125rem', color: T.muted }}>{s.location}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* ── CERTIFICATIONS ── */}
            {activeTab === 'certifications' && (
              <div>
                <div className="mb-10">
                  <Label>Learning</Label>
                  <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', color: T.text, marginTop: '8px' }}>Certifications</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {personalInfo.certifications.map((cert, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.04 }}
                      style={{ ...card, padding: '18px 20px' }}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p style={{ fontSize: '0.875rem', fontWeight: 600, color: T.text, lineHeight: 1.4, marginBottom: '4px' }}>{cert.title}</p>
                          <p style={{ fontSize: '0.75rem', color: T.violet }}>{cert.issuer}</p>
                        </div>
                        <span style={{ fontSize: '0.6875rem', color: T.gold, fontWeight: 700, flexShrink: 0 }}>{cert.date}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

          </motion.div>
        </AnimatePresence>
      </div>

      {/* ═══ CTA ═══ */}
      <section style={{ backgroundColor: T.bg }} className="py-20">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
          <div
            className="p-10 lg:p-14 rounded-3xl text-center relative overflow-hidden"
            style={{ background: T.surface, border: `1px solid ${T.border}` }}
          >
            <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(155,139,255,0.08) 0%, transparent 70%)' }} />
            <div className="relative z-10">
              <Label>Let's Connect</Label>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.75rem)', fontWeight: 800, color: T.text, marginTop: '10px', marginBottom: '12px', letterSpacing: '-0.02em' }}>
                {ABOUT.closing.h2}
              </h2>
              <p style={{ color: T.sub, fontSize: '1rem', marginBottom: '28px', maxWidth: '420px', margin: '0 auto 28px' }}>
                {ABOUT.closing.sub}
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold"
                style={{ background: T.violet, boxShadow: '0 4px 20px rgba(155,139,255,0.4)' }}
              >
                <MessageSquare className="w-4 h-4" />
                {ABOUT.closing.cta}
              </a>
              <div className="flex items-center justify-center gap-x-6 gap-y-2 flex-wrap mt-7">
                <a href="/portfolio" style={{ fontSize: '0.875rem', fontWeight: 600, color: T.violet, textDecoration: 'none' }}>
                  View Portfolio
                </a>
                <a href="/blogs" style={{ fontSize: '0.875rem', fontWeight: 600, color: T.violet, textDecoration: 'none' }}>
                  Read the Blog
                </a>
                <a href="/" style={{ fontSize: '0.875rem', fontWeight: 600, color: T.violet, textDecoration: 'none' }}>
                  Back to Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FollowMyJourney />
    </div>
  );
};

export default AboutPage;
