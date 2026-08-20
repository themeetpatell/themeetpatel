import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useAnimationFrame,
} from 'framer-motion';
import {
  ArrowUpRight,
  ArrowRight,
  Layers,
  Rocket,
  Heart,
  BookOpen,
  Clock,
  ChevronRight,
} from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { getPublishedArticles } from '../lib/articleService';
import meetPatelImage from '../assets/themeetpatel.jpeg';
import innovationLabImage from '../assets/innovation-lab.jpg';
import startupEcosystemImage from '../assets/startup-ecosystem.jpg';

/* ════════════════════════════════════════════════════════════════════════
 *  DATA — the script of the film
 * ════════════════════════════════════════════════════════════════════════ */

const ventures = [
  { name: 'Company 8',    tag: 'AI',         year: '2025', status: 'Live',      metric: 'AI-native business intelligence',   blurb: 'Ask your business anything and get answers that lead to action.' },
  { name: 'BiggMate',    tag: 'Network',    year: '2025', status: 'Building',  metric: 'Co-founder matching, intent-first', blurb: 'Find the right partner before the wrong one costs a year.' },
  { name: 'StartupOS',   tag: 'Community',  year: '2022', status: 'Live',      metric: '500+ founders in residence',         blurb: 'The systems that don’t break under pressure — taught, lived, repeated.' },
  { name: 'ZeroHuman',   tag: 'AI',         year: '2024', status: 'Live',      metric: 'AI-native creative pipelines',       blurb: 'AI-native media for modelling and creator industries.' },
  { name: 'MealVerse',   tag: 'FoodTech',   year: '2024', status: 'Live',      metric: 'Home-cooked, scheduled',             blurb: 'Meal planning + last-mile for humans who refuse to live on dark-kitchen takeout.' },
  { name: 'TorchIt',     tag: 'Impact',     year: '2020', status: 'Acquired',  metric: '1,000+ devices shipped',             blurb: 'Assistive technology for the differently-abled. Started here.' },
];

const verticals = [
  {
    no: '01', title: 'Foundation', icon: Layers,
    headline: 'Systems that don’t crack under pressure.',
    body: 'Org design, hiring rituals, operating cadence — the load-bearing layer founders forget they need until something snaps.',
    tags: ['Org design', 'Hiring system', 'Cadence'],
  },
  {
    no: '02', title: 'Growth', icon: Rocket,
    headline: 'Compound momentum, not chaos.',
    body: 'Distribution, capital, expansion. Strategy that survives contact with a Monday morning — not just a board deck.',
    tags: ['GTM', 'Capital', 'Scale-ups'],
  },
  {
    no: '03', title: 'Founder life', icon: Heart,
    headline: 'Humans first. Always.',
    body: 'The company you build is downstream of the life you live. Health, focus, relationships — engineered with the same care.',
    tags: ['Health', 'Focus', 'Family'],
  },
];

const manifesto = ['Not a portfolio.', 'Not a résumé.', 'An operating system for founders.'];

const chapters = [
  { id: 'hero',       label: 'I',    name: 'Open' },
  { id: 'origin',     label: 'II',   name: 'Origin' },
  { id: 'manifesto',  label: 'III',  name: 'Manifesto' },
  { id: 'universe',   label: 'IV',   name: 'Universe' },
  { id: 'portfolio',  label: 'V',    name: 'Ventures' },
  { id: 'verticals',  label: 'VI',   name: 'Verticals' },
  { id: 'operator',   label: 'VII',  name: 'Operator' },
  { id: 'cta',        label: 'VIII', name: 'Start' },
];

const backers = ['In5 Dubai', 'Headstart', 'IIM-A', 'XartUp', '24Six9', 'YC alumni'];

const originBeats = [
  { year: '2017', n: '01', verb: 'Started.',     body: 'First startup. Hardware. Built and shipped a thing that helped the differently-abled.' },
  { year: '2020', n: '03', verb: 'Operated.',    body: 'Then it was 270 people across continents, all remote, all under 30. Heroics nearly worked.' },
  { year: '2023', n: '07', verb: 'Scaled.',      body: 'Built the engine room at a million-dollar fintech. Closed books, hired teams, shipped the unsexy.' },
  { year: '2026', n: '10', verb: 'Compounded.',  body: 'Now? A studio. A community. A network. The systems repeat — the playbook compounds.' },
];

/* ════════════════════════════════════════════════════════════════════════
 *  FONT — Nunito only
 * ════════════════════════════════════════════════════════════════════════ */

function useNunito() {
  useEffect(() => {
    if (document.getElementById('v2-nunito')) return;
    const pre1 = document.createElement('link');
    pre1.rel = 'preconnect'; pre1.href = 'https://fonts.googleapis.com';
    const pre2 = document.createElement('link');
    pre2.rel = 'preconnect'; pre2.href = 'https://fonts.gstatic.com'; pre2.crossOrigin = 'anonymous';
    const link = document.createElement('link');
    link.id = 'v2-nunito';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap';
    document.head.append(pre1, pre2, link);
  }, []);
}

/* ════════════════════════════════════════════════════════════════════════
 *  HOOKS
 * ════════════════════════════════════════════════════════════════════════ */

function useDubaiClock() {
  const [time, setTime] = useState(() => fmtDubai(new Date()));
  useEffect(() => {
    const id = setInterval(() => setTime(fmtDubai(new Date())), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}
function fmtDubai(d) {
  return new Intl.DateTimeFormat('en-GB', {
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false, timeZone: 'Asia/Dubai',
  }).format(d);
}

function useCountUp(to, durationMs = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-15% 0px' });
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const t = Math.min(1, (now - start) / durationMs);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to, durationMs]);
  return { ref, value };
}

/* ════════════════════════════════════════════════════════════════════════
 *  STARFIELD — pure DOM particles (predictable, no canvas DPR drama)
 * ════════════════════════════════════════════════════════════════════════ */

const StarField = ({ count = 60, className = '' }) => {
  const stars = useMemo(
    () =>
      Array.from({ length: count }, () => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 1.6 + 0.6,
        delay: Math.random() * 6,
        duration: 3 + Math.random() * 4,
      })),
    [count],
  );
  return (
    <div className={`pointer-events-none ${className}`} aria-hidden>
      {stars.map((s, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-[#cfc4ff]"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            boxShadow: '0 0 6px rgba(207,196,255,0.4)',
          }}
          animate={{ opacity: [0.2, 0.85, 0.2] }}
          transition={{ duration: s.duration, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
};

/* ════════════════════════════════════════════════════════════════════════
 *  PRIMITIVES
 * ════════════════════════════════════════════════════════════════════════ */

const SplitText = ({ text, className = '', delay = 0, stagger = 0.035, italic = false }) => {
  const words = text.split(' ');
  let i = 0;
  return (
    <span className={className} aria-label={text}>
      {words.map((word, w) => (
        <span key={w} className="inline-block whitespace-nowrap" style={{ marginRight: '0.22em' }}>
          {Array.from(word).map((char) => {
            const idx = i++;
            return (
              <span key={idx} className="inline-block overflow-hidden align-baseline">
                <motion.span
                  initial={{ y: '110%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.95, delay: delay + idx * stagger, ease: [0.22, 1, 0.36, 1] }}
                  className={`inline-block ${italic ? 'italic font-light' : ''}`}
                  style={{ willChange: 'transform' }}
                >
                  {char}
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </span>
  );
};

const Reveal = ({ children, delay = 0, y = 30, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-15% 0px' }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

const Magnetic = ({ children, strength = 0.25, className = '' }) => {
  const ref = useRef(null);
  const x = useSpring(0, { stiffness: 180, damping: 18 });
  const y = useSpring(0, { stiffness: 180, damping: 18 });
  const move = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const reset = () => { x.set(0); y.set(0); };
  return (
    <motion.div ref={ref} onMouseMove={move} onMouseLeave={reset} style={{ x, y }} className={className}>
      {children}
    </motion.div>
  );
};

const Eyebrow = ({ children }) => (
  <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-white/55 font-semibold">
    <span className="w-1.5 h-1.5 rounded-full bg-[#9b8bff] shadow-[0_0_12px_2px_rgba(155,139,255,0.55)]" />
    {children}
  </div>
);

/* Cinematic chapter title card: appears in the corner with chapter number + name */
const SectionTitleCard = ({ label, name, kicker }) => (
  <Reveal>
    <div className="flex items-end justify-between border-t border-white/10 pt-5 sm:pt-6 mb-10 sm:mb-14 gap-4 sm:gap-6 flex-wrap">
      <div className="flex items-baseline gap-3 sm:gap-4 text-[10px] sm:text-[11px] uppercase tracking-[0.28em] sm:tracking-[0.32em] text-white/40 font-semibold">
        <span className="text-[#9b8bff]">CH · {label}</span>
        <span>{name}</span>
      </div>
      {kicker && (
        <div className="hidden sm:block text-[11px] uppercase tracking-[0.32em] text-white/35 font-semibold">{kicker}</div>
      )}
    </div>
  </Reveal>
);

/* ════════════════════════════════════════════════════════════════════════
 *  GLOBAL UI
 * ════════════════════════════════════════════════════════════════════════ */

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      style={{ scaleX, transformOrigin: '0% 50%', top: 'var(--launch-banner-h, 0px)' }}
      className="fixed left-0 right-0 h-[2px] bg-gradient-to-r from-[#9b8bff] via-[#cfc4ff] to-[#9b8bff] z-50"
    />
  );
};

const ChapterIndicator = ({ current }) => {
  const clock = useDubaiClock();
  return (
    <div className="fixed top-6 right-6 z-40 hidden md:flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/60 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 font-bold">
      <span className="w-1.5 h-1.5 rounded-full bg-[#9b8bff] shadow-[0_0_8px_rgba(155,139,255,0.7)] animate-pulse" />
      <span className="text-[#9b8bff]">CH · {current.label}</span>
      <span className="text-white/85">{current.name}</span>
      <span className="text-white/35">|</span>
      <span className="text-white/55">DXB · {clock}</span>
    </div>
  );
};

const ChapterDots = ({ current }) => (
  <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
    {chapters.map((c) => {
      const active = c.id === current.id;
      return (
        <a
          key={c.id}
          href={`#${c.id}`}
          onClick={(e) => {
            e.preventDefault();
            document.querySelector(`[data-chapter="${c.id}"]`)?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group flex items-center gap-3"
          data-cursor="hover"
        >
          <span className={`h-px transition-all duration-300 ${active ? 'w-10 bg-[#9b8bff]' : 'w-5 bg-white/25 group-hover:bg-white/60'}`} />
          <span className={`text-[10px] uppercase tracking-[0.25em] font-bold transition-opacity ${active ? 'text-white opacity-100' : 'text-white/40 opacity-0 group-hover:opacity-100'}`}>
            {c.label}
          </span>
        </a>
      );
    })}
  </div>
);

/* ════════════════════════════════════════════════════════════════════════
 *  ACT I — HERO
 * ════════════════════════════════════════════════════════════════════════ */

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const titleBlur = useTransform(scrollYProgress, [0, 1], [0, 8]);
  const titleFilter = useTransform(titleBlur, (b) => `blur(${b}px)`);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.6, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 250]);
  const clock = useDubaiClock();

  /* Mouse-following spotlight */
  const mx = useMotionValue(50);
  const my = useMotionValue(50);
  const sx = useSpring(mx, { stiffness: 50, damping: 18 });
  const sy = useSpring(my, { stiffness: 50, damping: 18 });
  const handleMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width) * 100);
    my.set(((e.clientY - r.top) / r.height) * 100);
  };
  const spotBg = useTransform([sx, sy], ([vx, vy]) =>
    `radial-gradient(520px circle at ${vx}% ${vy}%, rgba(155,139,255,0.28), transparent 65%)`,
  );

  return (
    <section
      ref={ref}
      onMouseMove={handleMove}
      data-chapter="hero"
      id="hero"
      className="relative min-h-[100svh] flex flex-col overflow-hidden"
    >
      {/* Layered backgrounds */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_25%_15%,rgba(155,139,255,0.22),transparent_55%),radial-gradient(ellipse_at_80%_70%,rgba(70,90,255,0.20),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
        {/* Animated blobs */}
        <motion.div
          animate={{ x: [0, 40, -20, 0], y: [0, -30, 20, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 -left-32 w-[28rem] h-[28rem] rounded-full bg-[#9b8bff]/12 blur-[120px]"
        />
        <motion.div
          animate={{ x: [0, -30, 40, 0], y: [0, 20, -30, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 -right-32 w-[32rem] h-[32rem] rounded-full bg-[#3a2bff]/14 blur-[140px]"
        />
      </motion.div>
      <motion.div style={{ background: spotBg }} className="pointer-events-none absolute inset-0 -z-10" />
      <StarField count={50} className="absolute inset-0 -z-10" />

      {/* Top status bar */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap items-center justify-between gap-2 sm:gap-4 text-[9px] sm:text-[11px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-white/50 border-b border-white/10 pb-4 font-bold"
        >
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inset-0 rounded-full bg-rose-500 animate-ping opacity-75" />
              <span className="relative rounded-full bg-rose-500 h-2 w-2" />
            </span>
            <span className="text-rose-300">REC</span>
            <span className="text-white/30">·</span>
            <span className="truncate">Building Dan · Company 8</span>
          </div>
          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            <span>DXB {clock}</span>
            <span className="text-[#9b8bff]">v.2026</span>
          </div>
        </motion.div>
      </div>

      {/* Headline — three-line cinematic moment */}
      <motion.div
        style={{ scale: titleScale, y: titleY, filter: titleFilter, opacity: titleOpacity }}
        className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-10 sm:pt-14 md:pt-16"
      >
        <Reveal delay={0.1}>
          <Eyebrow>Meet Patel — Founder &amp; operator · Dubai</Eyebrow>
        </Reveal>

        <h1 className="mt-6 sm:mt-8 font-black tracking-[-0.045em] leading-[0.86] text-white text-[clamp(2.75rem,8.5vw,7.5rem)]">
          <span className="block">
            <SplitText text="Build" delay={0.2} />
          </span>
          <span className="block text-white/85">
            <SplitText text="founder" delay={0.38} italic />
          </span>
          <span className="block">
            <SplitText text="momentum." delay={0.55} />
          </span>
        </h1>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-end">
          <Reveal delay={1.1} className="md:col-span-7">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/70 max-w-2xl font-light">
              Years inside startup engine rooms. 10+ ventures shipped. 490+ people led across teams.
              Now all-in on <span className="text-white font-semibold">Company 8</span>, building Dan —
              the AI that lets any operator ask their business anything and get answers that lead to action.
            </p>
          </Reveal>
          <Reveal delay={1.25} className="md:col-span-5">
            <div className="flex flex-wrap gap-3 sm:gap-4 md:justify-end">
              <Magnetic strength={0.3}>
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-white text-black px-6 sm:px-7 py-3.5 sm:py-4 font-bold hover:bg-[#cfc4ff] transition-colors text-sm sm:text-base"
                >
                  Start a conversation
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
                </Link>
              </Magnetic>
              <Magnetic strength={0.2}>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-3 rounded-full border border-white/15 px-6 sm:px-7 py-3.5 sm:py-4 font-bold text-white/85 hover:border-white/40 hover:text-white transition-colors text-sm sm:text-base"
                >
                  See the work
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </Magnetic>
            </div>
          </Reveal>
        </div>
      </motion.div>

      {/* Bottom metrics rail — always in flow so it never collides with the headline */}
      <div className="relative z-10 mt-auto pt-16 sm:pt-20 md:pt-24 pb-12 md:pb-14">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
          <Reveal delay={1.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/10 pt-5 sm:pt-6 gap-y-5 sm:gap-y-6">
              {[
                { kicker: '8+ yrs',    label: 'Operating in startup engine rooms' },
                { kicker: '10+',       label: 'Ventures shipped or scaled' },
                { kicker: '490+',      label: 'People led across ventures' },
                { kicker: 'Dubai → ∞', label: 'MENA-rooted, globally networked' },
              ].map((m) => (
                <div key={m.label} className="flex flex-col gap-1">
                  <span className="text-xl sm:text-2xl md:text-3xl font-black text-white">{m.kicker}</span>
                  <span className="text-[10px] sm:text-xs md:text-sm text-white/45 max-w-[18ch] leading-snug font-light">{m.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════════════════════
 *  TRAILER — full-bleed cinematic moment between Hero and Origin
 * ════════════════════════════════════════════════════════════════════════ */

const Trailer = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], [120, -120]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[110vh] overflow-hidden bg-black">
      <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 -z-10">
        <img
          src={innovationLabImage}
          alt=""
          aria-hidden
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#07070d] via-transparent to-[#07070d]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,transparent_20%,rgba(0,0,0,0.85)_85%)]" />
      </motion.div>

      <motion.div style={{ y: textY, opacity: textOpacity }} className="sticky top-0 h-screen flex items-center justify-center">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-[#9b8bff] mb-6 sm:mb-8 font-bold">
            — A short trailer —
          </div>
          <h2 className="font-black tracking-[-0.045em] leading-[0.92] text-white text-[clamp(2.5rem,8vw,7.5rem)] max-w-[16ch] mx-auto">
            Most founders fight gravity.{' '}
            <span className="italic font-light text-[#cfc4ff]">I help them build wings.</span>
          </h2>
          <div className="mt-10 sm:mt-14 text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-white/35 font-bold">
            Scroll — the film begins
          </div>
        </div>
      </motion.div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════════════════════
 *  MARQUEE
 * ════════════════════════════════════════════════════════════════════════ */

const Marquee = ({ items, speed = 35 }) => {
  const x = useMotionValue(0);
  const trackRef = useRef(null);
  const pausedRef = useRef(false);
  const widthRef = useRef(0);

  useEffect(() => {
    if (trackRef.current) widthRef.current = trackRef.current.scrollWidth / 2;
  }, [items]);

  useAnimationFrame((_, delta) => {
    if (pausedRef.current) return;
    const w = widthRef.current || 1;
    const next = x.get() - (delta / 1000) * speed;
    x.set(next <= -w ? next + w : next);
  });

  return (
    <div
      className="relative overflow-hidden w-full"
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#07070d] to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#07070d] to-transparent z-10" />
      <motion.div ref={trackRef} style={{ x }} className="flex whitespace-nowrap will-change-transform">
        {[...items, ...items].map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="inline-flex items-center gap-8 px-8 text-5xl md:text-7xl font-black tracking-tight text-white/15 hover:text-white/90 transition-colors duration-500 cursor-default"
            data-cursor="hover"
          >
            {label}
            <span className="text-[#9b8bff]">◆</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
};

const TickerStrip = () => (
  <section className="py-10 md:py-14 border-y border-white/5 overflow-hidden">
    <Marquee items={ventures.map((v) => v.name)} speed={45} />
  </section>
);

/* ════════════════════════════════════════════════════════════════════════
 *  ACT II — ORIGIN (scroll-pinned with massive ghost-year backdrop)
 * ════════════════════════════════════════════════════════════════════════ */

const Origin = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const [active, setActive] = useState(0);

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(originBeats.length - 1, Math.floor(v * originBeats.length));
    if (idx !== active) setActive(idx);
  });

  const lineH = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section ref={ref} data-chapter="origin" id="origin" className="relative h-[260vh] bg-[#04040a]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* Massive ghost year backdrop */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`bg-${active}`}
            initial={{ opacity: 0, y: 80, scale: 1.05 }}
            animate={{ opacity: 1, y: 0,  scale: 1 }}
            exit={{    opacity: 0, y: -40, scale: 0.95 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex items-center justify-center select-none pointer-events-none"
          >
            <span
              className="font-black tracking-[-0.08em] leading-none text-transparent"
              style={{
                fontSize: 'clamp(14rem, 36vw, 38rem)',
                WebkitTextStroke: '1px rgba(155,139,255,0.18)',
              }}
            >
              {originBeats[active].year}
            </span>
          </motion.div>
        </AnimatePresence>

        {/* Vertical timeline */}
        <div className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 h-[55vh] w-px bg-white/10 overflow-hidden">
          <motion.div style={{ height: lineH }} className="w-full bg-gradient-to-b from-[#9b8bff] to-transparent" />
        </div>

        <div className="max-w-[1400px] mx-auto w-full px-4 sm:px-8 md:px-12 lg:px-24 relative z-10">
          <SectionTitleCard label="II" name="Origin" kicker="Nine years · One arc" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-4">
              <Eyebrow>The arc, one beat at a time</Eyebrow>
              <h2 className="mt-6 font-black tracking-[-0.03em] leading-[0.95] text-[clamp(2rem,4.5vw,3.5rem)] text-white">
                Nine years.<br />
                <span className="italic font-light text-white/55">One arc.</span>
              </h2>
            </div>

            <div className="md:col-span-8 relative min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, y: 0,  filter: 'blur(0px)' }}
                  exit={{    opacity: 0, y: -30, filter: 'blur(8px)' }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <div className="text-[11px] uppercase tracking-[0.3em] text-[#9b8bff] mb-6 font-bold">
                    {originBeats[active].year} · BEAT {originBeats[active].n}
                  </div>
                  <div className="text-[clamp(2.5rem,6vw,5.5rem)] font-black tracking-[-0.03em] leading-[0.95] text-white">
                    <span className="italic font-light text-[#cfc4ff]">
                      {originBeats[active].verb}
                    </span>
                  </div>
                  <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed max-w-xl font-light">
                    {originBeats[active].body}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-0 left-0 flex gap-3">
                {originBeats.map((b, i) => (
                  <div key={i} className="flex flex-col items-start gap-1">
                    <div
                      className={`h-0.5 transition-all duration-500 ${
                        i === active ? 'w-12 bg-[#9b8bff]' : 'w-6 bg-white/15'
                      }`}
                    />
                    <span className={`text-[9px] uppercase tracking-[0.2em] font-bold transition-colors ${
                      i === active ? 'text-white/85' : 'text-white/30'
                    }`}>{b.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════════════════════
 *  ACT III — MANIFESTO
 * ════════════════════════════════════════════════════════════════════════ */

const Manifesto = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-25% 0px' });
  return (
    <section ref={ref} data-chapter="manifesto" id="manifesto" className="relative py-20 sm:py-32 md:py-48 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionTitleCard label="III" name="Manifesto" kicker="What I'm building" />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <Eyebrow>The thesis</Eyebrow>
          </div>
          <div className="md:col-span-9">
            {manifesto.map((line, i) => (
              <div key={line} className="overflow-hidden">
                <motion.h2
                  initial={{ y: '110%' }}
                  animate={inView ? { y: '0%' } : {}}
                  transition={{ duration: 1, delay: 0.18 * i, ease: [0.22, 1, 0.36, 1] }}
                  className={`font-black tracking-[-0.03em] leading-[0.98] text-[clamp(2.25rem,6.5vw,5.5rem)] ${
                    i === manifesto.length - 1 ? 'text-white' : 'text-white/30'
                  }`}
                >
                  {i === manifesto.length - 1 ? (
                    <>
                      <span className="italic font-light text-[#cfc4ff]">An operating system </span>
                      for founders.
                    </>
                  ) : (
                    line
                  )}
                </motion.h2>
              </div>
            ))}
            <Reveal delay={0.7}>
              <p className="mt-12 text-lg text-white/60 max-w-2xl leading-relaxed font-light">
                I don&rsquo;t pitch frameworks. I install them. Most startups die from the un-debuggable
                middle — operations, hiring, decision velocity, the boring connective tissue. That&rsquo;s
                what I fix, and that&rsquo;s what compounds.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════════════════════
 *  ACT IV — UNIVERSE (rotating orbits + starfield + pulsing connection lines)
 * ════════════════════════════════════════════════════════════════════════ */

const OrbitNode = ({ venture, mx, my }) => {
  const factor = 0.4 + (venture.delay % 0.3);
  const x = useTransform(mx, (v) => v * factor);
  const y = useTransform(my, (v) => v * factor);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: venture.delay, duration: 0.6, ease: 'backOut' }}
      style={{
        x, y,
        left: `calc(50% + ${venture.x}px)`,
        top: `calc(50% + ${venture.y}px)`,
      }}
      className="absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
      data-cursor="hover"
    >
      <div className="relative">
        <div className="w-16 h-16 rounded-full bg-white/[0.05] border border-white/15 backdrop-blur-md flex items-center justify-center group-hover:border-[#9b8bff] group-hover:bg-[#9b8bff]/15 group-hover:scale-110 transition-all duration-300">
          <span className="text-sm font-black text-white/85 group-hover:text-white">{venture.name.slice(0, 2)}</span>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 text-[10px] uppercase tracking-[0.2em] text-white/45 whitespace-nowrap group-hover:text-white/90 transition-colors font-bold">
          {venture.name}
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none absolute left-1/2 -translate-x-1/2 top-full mt-8 w-56 p-3 rounded-lg bg-[#0d0e16] border border-white/15 shadow-2xl z-20">
          <div className="text-xs text-white/55 mb-1 font-semibold">{venture.tag} · {venture.year}</div>
          <div className="text-sm text-white/85 leading-snug font-light">{venture.blurb}</div>
        </div>
      </div>
    </motion.div>
  );
};

const Universe = () => {
  const ref = useRef(null);
  const mx = useSpring(0, { stiffness: 50, damping: 20 });
  const my = useSpring(0, { stiffness: 50, damping: 20 });
  const move = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 30);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 30);
  };
  const orbits = useMemo(
    () => ventures.map((v, i) => {
      const total = ventures.length;
      const angle = (i / total) * Math.PI * 2 - Math.PI / 2;
      const radius = 230 + (i % 3) * 30;
      return { ...v, x: Math.cos(angle) * radius, y: Math.sin(angle) * radius, delay: i * 0.08 };
    }),
    [],
  );

  return (
    <section data-chapter="universe" id="universe" className="relative py-20 sm:py-32 md:py-48 bg-[#04040a] border-y border-white/5 overflow-hidden">
      <StarField count={80} className="absolute inset-0" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative">
        <SectionTitleCard label="IV" name="Universe" kicker="One operator · Ten orbits" />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="font-black tracking-[-0.03em] leading-[0.95] text-[clamp(2.25rem,5.5vw,4.5rem)] text-white max-w-3xl">
            One operator. <span className="italic font-light text-white/50">Ten orbits.</span>
          </h2>
          <p className="text-white/65 max-w-md font-light">
            Every venture shares context — what worked in one becomes the unfair starting line
            for the next. Hover a system. Watch it breathe.
          </p>
        </div>

        <div
          ref={ref}
          onMouseMove={move}
          onMouseLeave={() => { mx.set(0); my.set(0); }}
          className="relative h-[640px] hidden md:block"
        >
          {/* SVG connection lines from core to nodes */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ overflow: 'visible' }}>
            {orbits.map((o, i) => (
              <motion.line
                key={o.name}
                x1="50%" y1="50%"
                x2={`calc(50% + ${o.x}px)`} y2={`calc(50% + ${o.y}px)`}
                stroke="rgba(155,139,255,0.2)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.4 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              />
            ))}
          </svg>

          {/* Rotating rings with comet beads */}
          {[260, 320, 380, 460].map((r, i) => (
            <motion.div
              key={r}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 70 + i * 20, repeat: Infinity, ease: 'linear' }}
              className="absolute left-1/2 top-1/2 rounded-full border border-white/[0.06]"
              style={{ width: r * 2, height: r * 2, transform: `translate(-50%, -50%)` }}
            >
              <div
                className="absolute w-2 h-2 rounded-full bg-[#9b8bff]/60"
                style={{ top: -4, left: '50%', boxShadow: '0 0 10px rgba(155,139,255,0.8)' }}
              />
            </motion.div>
          ))}

          {/* Core */}
          <motion.div
            style={{ x: mx, y: my }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          >
            <div className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#9b8bff] to-[#3a2bff] flex items-center justify-center shadow-[0_0_80px_rgba(155,139,255,0.5)]">
              <div className="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-30" />
              <span className="font-black text-3xl text-white tracking-tight">MP</span>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 mt-3 text-[10px] uppercase tracking-[0.3em] text-white/60 whitespace-nowrap font-bold">
              Operator core
            </div>
          </motion.div>

          {orbits.map((o) => (
            <OrbitNode key={o.name} venture={o} mx={mx} my={my} />
          ))}
        </div>

        {/* Mobile list */}
        <div className="md:hidden grid grid-cols-2 gap-3">
          {ventures.map((v) => (
            <div key={v.name} className="rounded-2xl border border-white/10 p-4 bg-white/[0.02]">
              <div className="text-xs text-white/50 mb-2 font-bold uppercase tracking-wider">{v.tag} · {v.year}</div>
              <div className="text-base font-black text-white">{v.name}</div>
              <div className="text-xs text-white/65 leading-snug mt-1 font-light">{v.blurb}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════════════════════
 *  ACT V — PORTFOLIO (horizontal pinned scroll with letterbox bars)
 * ════════════════════════════════════════════════════════════════════════ */

const ProgressDot = ({ start, end, progress }) => {
  const opacity = useTransform(progress, [start - 0.01, start, end, end + 0.01], [0.2, 1, 1, 0.2]);
  const width = useTransform(progress, [start - 0.01, start, end, end + 0.01], [8, 32, 32, 8]);
  return <motion.div style={{ opacity, width }} className="h-1 rounded-full bg-[#9b8bff]" />;
};

const PortfolioHorizontal = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const totalShift = -((ventures.length - 1) / ventures.length) * 100;
  const x = useTransform(scrollYProgress, [0, 1], ['0%', `${totalShift}%`]);
  const barH = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 48, 48, 0]);

  return (
    <section
      ref={ref}
      data-chapter="portfolio"
      id="portfolio"
      className="relative bg-[#04040a]"
      style={{ height: `${ventures.length * 60}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col">
        {/* Cinematic letterbox bars */}
        <motion.div style={{ height: barH }} className="absolute top-0 inset-x-0 bg-black z-30 pointer-events-none border-b border-white/5" />
        <motion.div style={{ height: barH }} className="absolute bottom-0 inset-x-0 bg-black z-30 pointer-events-none border-t border-white/5" />

        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 pt-16 z-20 relative">
          <SectionTitleCard label="V" name="Selected ventures" kicker="A working portfolio, not a trophy case" />
        </div>

        <div className="flex-1 flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {ventures.map((v, i) => (
              <div key={v.name} className="w-screen flex-shrink-0 px-6 lg:px-12 flex items-center relative">
                {/* Ghost numeral backdrop */}
                <div
                  className="absolute right-12 top-1/2 -translate-y-1/2 font-black leading-none tracking-[-0.08em] text-transparent select-none pointer-events-none"
                  style={{
                    fontSize: 'clamp(14rem, 32vw, 32rem)',
                    WebkitTextStroke: '1px rgba(155,139,255,0.12)',
                  }}
                >
                  {(i + 1).toString().padStart(2, '0')}
                </div>

                <div className="max-w-[1300px] w-full mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
                  <div className="md:col-span-2">
                    <div className="text-[clamp(4rem,8vw,7rem)] font-black leading-none tracking-[-0.05em] text-white/15">
                      {(i + 1).toString().padStart(2, '0')}
                    </div>
                  </div>
                  <div className="md:col-span-7">
                    <div className="text-xs uppercase tracking-[0.3em] text-[#9b8bff] mb-4 font-black">
                      {v.tag} · {v.year} · {v.status}
                    </div>
                    <div className="text-[clamp(2.75rem,7vw,6rem)] font-black tracking-[-0.04em] leading-[0.95] text-white mb-6">
                      {v.name}
                    </div>
                    <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mb-6 font-light">
                      {v.blurb}
                    </p>
                    <div className="text-sm text-white/55 italic font-light">
                      {v.metric}
                    </div>
                  </div>
                  <div className="md:col-span-3">
                    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md">
                      <div className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-3 font-bold">Status</div>
                      <div className={`inline-block text-xs uppercase tracking-[0.2em] px-3 py-1 rounded-full font-bold ${
                        v.status === 'Live' || v.status === 'Operating'
                          ? 'bg-emerald-400/15 text-emerald-300'
                          : v.status === 'Building'
                          ? 'bg-[#9b8bff]/20 text-[#cfc4ff]'
                          : 'bg-white/10 text-white/55'
                      }`}>
                        {v.status}
                      </div>
                      <div className="mt-6 flex items-center justify-between text-xs text-white/55 font-bold">
                        <span>{(i + 1).toString().padStart(2, '0')} / {ventures.length.toString().padStart(2, '0')}</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Progress dots */}
        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {ventures.map((_, i) => {
            const start = i / ventures.length;
            const end = (i + 1) / ventures.length;
            return <ProgressDot key={i} start={start} end={end} progress={scrollYProgress} />;
          })}
        </div>

        {/* Director's note */}
        <div className="absolute bottom-6 right-6 z-30 text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold hidden md:block">
          ↑ Scroll to advance
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════════════════════
 *  ACT VI — VERTICALS
 * ════════════════════════════════════════════════════════════════════════ */

const Verticals = () => {
  const [active, setActive] = useState(0);
  return (
    <section data-chapter="verticals" id="verticals" className="relative py-20 sm:py-32 md:py-48 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionTitleCard label="VI" name="What I work on" kicker="Three verticals · One operating arc" />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="font-black tracking-[-0.03em] leading-[0.95] text-[clamp(2.25rem,5.5vw,4.5rem)] text-white max-w-3xl">
            Three verticals. <span className="italic font-light text-white/45">One operating arc.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {verticals.map((v, i) => {
            const isActive = active === i;
            const Icon = v.icon;
            return (
              <motion.div
                key={v.title}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                layout
                data-cursor="hover"
                className={`relative overflow-hidden rounded-3xl border p-8 md:p-10 min-h-[460px] flex flex-col justify-between cursor-pointer transition-colors duration-500 ${
                  isActive
                    ? 'border-[#9b8bff]/40 bg-gradient-to-br from-[#1a1530] to-[#0d0e16]'
                    : 'border-white/10 bg-[#0a0a12] hover:border-white/20'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="vertical-glow"
                    className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#9b8bff]/25 blur-3xl pointer-events-none"
                  />
                )}
                <div className="relative">
                  <div className="flex items-center justify-between mb-10">
                    <span className="text-xs uppercase tracking-[0.3em] text-white/45 font-black">{v.no}</span>
                    <Icon className="w-5 h-5 text-[#9b8bff]" />
                  </div>
                  <div className="text-sm uppercase tracking-[0.2em] text-white/55 mb-3 font-bold">{v.title}</div>
                  <h3 className="text-3xl md:text-4xl font-black tracking-tight text-white leading-[1.05] mb-5">
                    {v.headline}
                  </h3>
                  <p className="text-white/65 leading-relaxed text-sm md:text-base font-light">{v.body}</p>
                </div>
                <div className="relative flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/10">
                  {v.tags.map((t) => (
                    <span key={t} className="text-[11px] uppercase tracking-wider text-white/65 px-3 py-1 rounded-full border border-white/10 font-bold">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════════════════════
 *  ACT VII — OPERATOR
 * ════════════════════════════════════════════════════════════════════════ */

const TiltCard = ({ children, max = 8 }) => {
  const ref = useRef(null);
  const rx = useSpring(0, { stiffness: 200, damping: 20 });
  const ry = useSpring(0, { stiffness: 200, damping: 20 });
  const move = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    rx.set(-py * max);
    ry.set(px * max);
  };
  const reset = () => { rx.set(0); ry.set(0); };
  return (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformStyle: 'preserve-3d', transformPerspective: 1200 }}
      className="will-change-transform"
    >
      {children}
    </motion.div>
  );
};

const Operator = () => {
  const start = useCountUp(450);
  const yrs = useCountUp(8);
  const built = useCountUp(10);

  return (
    <section data-chapter="operator" id="operator" className="relative py-20 sm:py-32 md:py-48 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionTitleCard label="VII" name="The operator" kicker="Founder · Operator · Generalist with range" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <TiltCard max={6}>
              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-br from-[#9b8bff]/30 to-transparent blur-3xl rounded-full" />
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] border border-white/10">
                  <motion.img
                    initial={{ scale: 1.1 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    src={meetPatelImage}
                    alt="Meet Patel"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#05050b] via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-[10px] uppercase tracking-[0.3em] text-white/65 mb-2 font-bold">Operator on call</div>
                    <div className="text-white text-2xl font-black tracking-tight">Meet Patel</div>
                    <div className="text-white/65 text-sm font-light">Dubai · UAE</div>
                  </div>
                  <div className="absolute top-6 right-6 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/80 bg-black/40 backdrop-blur-md border border-white/10 rounded-full px-3 py-1.5 font-bold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          <div className="md:col-span-7 md:pl-8">
            <Eyebrow>What I bring</Eyebrow>
            <Reveal delay={0.1}>
              <h2 className="mt-6 font-black tracking-[-0.03em] leading-[0.95] text-[clamp(2rem,4.5vw,3.75rem)] text-white">
                I&rsquo;ve seen most of the ways{' '}
                <span className="italic font-light text-white/50">startups break</span>,
                and a few of the ways they actually work.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-lg text-white/65 leading-relaxed max-w-2xl font-light">
                Generalist with range. I connect dots across people, product, ops, and performance —
                and I say the hard truths when they matter most. Founders bring me in when they&rsquo;re
                ready to stop running on heroics.
              </p>
            </Reveal>

            <div className="mt-12 grid grid-cols-3 gap-px bg-white/10 border-y border-white/10">
              <div ref={yrs.ref} className="bg-[#07070d] p-6">
                <div className="text-4xl md:text-5xl font-black text-white">{yrs.value}+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/45 mt-2 font-bold">Years operating</div>
              </div>
              <div ref={built.ref} className="bg-[#07070d] p-6">
                <div className="text-4xl md:text-5xl font-black text-white">{built.value}+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/45 mt-2 font-bold">Ventures shipped</div>
              </div>
              <div ref={start.ref} className="bg-[#07070d] p-6">
                <div className="text-4xl md:text-5xl font-black text-white">{start.value}+</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/45 mt-2 font-bold">People led</div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/about" data-cursor="hover" className="group inline-flex items-center gap-2 text-white font-bold border-b border-white/20 pb-1 hover:border-[#9b8bff] transition-colors">
                The longer story <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════════════════════
 *  WRITING
 * ════════════════════════════════════════════════════════════════════════ */

const Writing = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPublishedArticles()
      .then((articles) => setPosts((articles || []).slice(0, 3)))
      .catch(() => setPosts([]));
  }, []);
  if (!posts.length) return null;
  const fmt = (val) => {
    if (!val) return '';
    const d = new Date(val);
    return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <section className="relative py-20 sm:py-32 md:py-48 bg-[#04040a] border-y border-white/5 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <SectionTitleCard label="·" name="Writing" kicker="Field notes from the engine room" />
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <h2 className="font-black tracking-[-0.03em] leading-[0.95] text-[clamp(2.25rem,5.5vw,4.5rem)] text-white max-w-3xl">
            Field notes from <span className="italic font-light text-white/45">the engine room.</span>
          </h2>
          <Link to="/blogs" data-cursor="hover" className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm uppercase tracking-[0.2em] font-bold">
            All writing <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
          {posts.map((p, i) => (
            <Link
              key={p.slug || p.id}
              to={`/blogs/${p.slug}`}
              data-cursor="hover"
              className="group relative bg-[#0a0a12] p-8 hover:bg-[#101020] transition-colors block"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="text-xs uppercase tracking-[0.25em] text-white/45 font-bold">
                  {(i + 1).toString().padStart(2, '0')} · {p.category}
                </span>
                <BookOpen className="w-4 h-4 text-white/30 group-hover:text-[#9b8bff] transition-colors" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-white leading-tight mb-4 group-hover:text-[#cfc4ff] transition-colors line-clamp-3">
                {p.title}
              </h3>
              <p className="text-white/65 text-sm leading-relaxed line-clamp-3 mb-8 font-light">{p.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-white/45 font-bold">
                <span>{fmt(p.published_at || p.date)}</span>
                {p.read_time && (
                  <span className="inline-flex items-center gap-1"><Clock className="w-3 h-3" />{p.read_time}</span>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════════════════════
 *  BACKERS + FINAL CTA
 * ════════════════════════════════════════════════════════════════════════ */

const Backers = () => (
  <section className="py-20 border-b border-white/5 overflow-hidden">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
      <div className="text-center text-[11px] uppercase tracking-[0.3em] text-white/45 mb-10 font-bold">
        Backed by founder networks and operators
      </div>
      <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
        {backers.map((b) => (
          <span key={b} className="text-lg md:text-xl font-black text-white/25 hover:text-white/80 transition-colors cursor-default">
            {b}
          </span>
        ))}
      </div>
    </div>
  </section>
);

const FinalCTA = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.08]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const blobScale = useTransform(scrollYProgress, [0, 1], [0.6, 1.4]);

  return (
    <section ref={ref} data-chapter="cta" id="cta" className="relative py-32 md:py-64 overflow-hidden">
      <motion.div
        style={{ scale: blobScale }}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] max-w-[1400px] max-h-[1400px] rounded-full bg-[radial-gradient(circle,rgba(155,139,255,0.18),transparent_60%)] -z-10"
      />
      <StarField count={40} className="absolute inset-0 -z-10" />

      <motion.div style={{ scale, y }} className="max-w-[1400px] mx-auto px-6 lg:px-12 text-center">
        <Reveal>
          <Eyebrow>END · ACT VIII</Eyebrow>
        </Reveal>
        <h2 className="mt-8 font-black tracking-[-0.04em] leading-[0.9] text-[clamp(2.75rem,9vw,9rem)] text-white">
          Build with{' '}
          <span className="italic font-light text-[#cfc4ff]">a system</span>
          <br />
          that compounds.
        </h2>
        <Reveal delay={0.2}>
          <p className="mt-10 text-lg md:text-xl text-white/65 max-w-2xl mx-auto leading-relaxed font-light">
            If you&rsquo;ve read this far, something probably resonated. I&rsquo;m building Dan at Company 8,
            and raising pre-seed. If you back operator-founders early, let&rsquo;s talk.
          </p>
        </Reveal>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Magnetic strength={0.3}>
            <Link
              to="/investors"
              data-cursor="hover"
              className="group inline-flex items-center gap-3 rounded-full bg-white text-black px-8 py-5 font-black hover:bg-[#cfc4ff] transition-colors text-lg"
            >
              For investors
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            </Link>
          </Magnetic>
          <Magnetic strength={0.2}>
            <Link
              to="/portfolio"
              data-cursor="hover"
              className="inline-flex items-center gap-3 rounded-full border border-white/15 px-8 py-5 font-black text-white/85 hover:border-white/40 hover:text-white transition-colors text-lg"
            >
              View all ventures
            </Link>
          </Magnetic>
        </div>

        {/* Closing timecode */}
        <div className="mt-24 text-[10px] uppercase tracking-[0.4em] text-white/30 font-bold">
          — Fin — themeetpatel.com · v.2026
        </div>
      </motion.div>
    </section>
  );
};

/* ════════════════════════════════════════════════════════════════════════
 *  CHAPTER OBSERVER
 * ════════════════════════════════════════════════════════════════════════ */

function useCurrentChapter() {
  const [current, setCurrent] = useState(chapters[0]);
  useEffect(() => {
    const sections = chapters
      .map((c) => ({ chapter: c, el: document.querySelector(`[data-chapter="${c.id}"]`) }))
      .filter((s) => s.el);
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) {
          const found = chapters.find((c) => c.id === visible.target.getAttribute('data-chapter'));
          if (found) setCurrent(found);
        }
      },
      { threshold: [0.25, 0.5, 0.75] },
    );
    sections.forEach((s) => obs.observe(s.el));
    return () => obs.disconnect();
  }, []);
  return current;
}

/* ════════════════════════════════════════════════════════════════════════
 *  PAGE
 * ════════════════════════════════════════════════════════════════════════ */

const HomePageV2 = () => {
  useNunito();
  const current = useCurrentChapter();

  return (
    <div
      className="min-h-screen bg-[#07070d] text-white antialiased selection:bg-[#9b8bff] selection:text-black"
      style={{
        fontFamily: "Nunito, system-ui, -apple-system, sans-serif",
        overflowX: 'clip',
      }}
    >
      <SEOHead
        title="Meet Patel — Founder &amp; Operator in Dubai"
        description="Founder and operator building a connected universe of ventures. Eight years inside startup engine rooms — now all-in on Company 8, building Dan."
        canonical="/v2"
        // /v2 is a design variant kept for preview. noindex (not canonical="/")
        // because a noindex page pointing its canonical at "/" sends search
        // engines two contradictory instructions about the homepage.
        robotsNoindex={true}
      />
      <ScrollProgress />
      <ChapterIndicator current={current} />
      <ChapterDots current={current} />
      <Hero />
      <TickerStrip />
      <Trailer />
      <Origin />
      <Manifesto />
      <Universe />
      <PortfolioHorizontal />
      <Verticals />
      <Operator />
      <Writing />
      <Backers />
      <FinalCTA />
    </div>
  );
};

export default HomePageV2;
