import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Instagram, Youtube, Calendar, BookOpen as Medium } from 'lucide-react';

const FollowMyJourney = () => {
  const socials = [
    { icon: Linkedin,  href: 'https://www.linkedin.com/in/themeetpatel/', label: 'LinkedIn',  sub: 'Professional network' },
    { icon: Twitter,   href: 'https://x.com/the_meetpatel',               label: 'Twitter',   sub: 'Thoughts & takes' },
    { icon: Github,    href: 'https://github.com/themeetpatell',           label: 'GitHub',    sub: 'Open source work' },
    { icon: Instagram, href: 'http://instagram.com/the.meetpatell/',       label: 'Instagram', sub: 'Behind the scenes' },
    { icon: Youtube,   href: 'https://youtube.com/@themeetpatel',          label: 'YouTube',   sub: 'Video content' },
    { icon: Medium,    href: 'https://medium.com/@themeetpatel',           label: 'Medium',    sub: 'Long-form writing' },
    { icon: Calendar,  href: 'https://calendly.com/themeetpatell/quick-connect', label: 'Calendly', sub: 'Book a call' },
  ];

  return (
    <section className="py-20 lg:py-28" style={{ backgroundColor: '#09090e' }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8b5cf6' }}>
            Connect
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, letterSpacing: '-0.025em', color: '#f5f5f7', marginTop: '10px' }}>
            Follow My Journey
          </h2>
          <p style={{ color: '#5a5a6e', fontSize: '1rem', marginTop: '8px' }}>
            Stay updated with the latest work, insights, and builds across channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
          {socials.map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center text-center p-5 rounded-2xl"
              style={{
                background: '#111118',
                border: '1px solid rgba(255,255,255,0.07)',
                textDecoration: 'none',
                transition: 'all 0.25s ease'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(139,92,246,0.25)';
                e.currentTarget.style.background = '#16161f';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)';
                e.currentTarget.style.background = '#111118';
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: 'rgba(139,92,246,0.1)' }}
              >
                <s.icon className="w-5 h-5" style={{ color: '#8b5cf6' }} />
              </div>
              <p style={{ fontSize: '0.875rem', fontWeight: 700, color: '#f5f5f7', marginBottom: '2px' }}>{s.label}</p>
              <p style={{ fontSize: '0.6875rem', color: '#5a5a6e', lineHeight: 1.3 }}>{s.sub}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FollowMyJourney;
