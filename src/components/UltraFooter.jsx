import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail, MapPin, Linkedin, Twitter, Github, Instagram, Youtube,
  Heart, Send
} from 'lucide-react';
import logoImage from '../assets/logo for themeetpatel.png';
import { trackButtonClick, trackSocialClick, trackFormSubmission } from '../utils/analytics';

const UltraFooter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      trackFormSubmission('newsletter_subscription');
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const ventures = [
    { name: 'BiggMate', href: 'https://www.biggmate.com', external: true },
    { name: 'BiggBizz', href: 'https://www.biggbizz.com', external: true },
    { name: 'ZeroHuman', href: 'https://www.zerohuman.co', external: true },
    { name: 'MealVerse', href: 'https://www.mealverse.in', external: true },
    { name: 'Finanshels', href: 'https://finanshels.com', external: true },
  ];

  const writing = [
    { name: 'The Eternal Love', href: '/The Eternal Love by The Meet Patel.pdf', external: false },
    { name: 'The Endless Devotion', href: '#', external: false },
    { name: 'Blog Articles', href: '/blogs', external: false },
    { name: 'LinkedIn Newsletter', href: 'https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7323218198735015937', external: true },
  ];

  const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Community', href: '/community' },
    { name: 'Blog', href: '/blogs' },
    { name: 'Contact', href: '/contact' },
  ];

  const socials = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/themeetpatel/', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/the_meetpatel', label: 'Twitter' },
    { icon: Github, href: 'https://github.com/themeetpatell', label: 'GitHub' },
    { icon: Instagram, href: 'http://instagram.com/the.meetpatell/', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com/@themeetpatel', label: 'YouTube' },
  ];

  const muted = { color: '#5a5a6e', fontSize: '0.875rem' };
  const colHead = {
    color: '#f5f5f7',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    marginBottom: '18px',
    display: 'block'
  };

  return (
    <footer style={{ backgroundColor: '#09090e', borderTop: '1px solid rgba(255,255,255,0.06)' }}>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10">

          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2 space-y-6">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <img src={logoImage} alt="Meet Patel" className="w-8 h-8 object-contain" style={{ opacity: 0.85 }} />
              <span style={{ color: '#f5f5f7', fontWeight: 700, fontSize: '1rem' }}>Meet Patel</span>
            </Link>

            <p style={{ color: '#5a5a6e', fontSize: '0.875rem', lineHeight: 1.75, maxWidth: '280px' }}>
              Serial entrepreneur, author, and mentor. Building ventures that matter — from Dubai to the world.
            </p>

            {/* Contact details */}
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#8b5cf6' }} />
                <a
                  href="mailto:the.meetpatell@gmail.com"
                  style={{ ...muted, transition: 'color 0.2s' }}
                  onMouseEnter={e => e.target.style.color = '#f5f5f7'}
                  onMouseLeave={e => e.target.style.color = '#5a5a6e'}
                >the.meetpatell@gmail.com</a>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: '#8b5cf6' }} />
                <span style={muted}>Dubai, United Arab Emirates</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2.5 pt-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ background: 'rgba(255,255,255,0.05)', color: '#5a5a6e', transition: 'all 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(139,92,246,0.15)'; e.currentTarget.style.color = '#8b5cf6'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = '#5a5a6e'; }}
                  onClick={() => trackSocialClick(s.label.toLowerCase())}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Ventures */}
          <div>
            <span style={colHead}>Ventures</span>
            <ul className="space-y-2.5">
              {ventures.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    target={l.external ? '_blank' : '_self'}
                    rel={l.external ? 'noopener noreferrer' : ''}
                    style={{ ...muted, display: 'block', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#f5f5f7'}
                    onMouseLeave={e => e.target.style.color = '#5a5a6e'}
                    onClick={() => trackButtonClick(`footer_venture_${l.name.toLowerCase()}`, 'footer')}
                  >{l.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Writing */}
          <div>
            <span style={colHead}>Writing</span>
            <ul className="space-y-2.5">
              {writing.map((l) => (
                <li key={l.name}>
                  <a
                    href={l.href}
                    target={l.external ? '_blank' : '_self'}
                    rel={l.external ? 'noopener noreferrer' : ''}
                    style={{ ...muted, display: 'block', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#f5f5f7'}
                    onMouseLeave={e => e.target.style.color = '#5a5a6e'}
                  >{l.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <span style={colHead}>Navigate</span>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.name}>
                  <Link
                    to={l.href}
                    style={{ ...muted, display: 'block', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.target.style.color = '#f5f5f7'}
                    onMouseLeave={e => e.target.style.color = '#5a5a6e'}
                    onClick={() => trackButtonClick(`footer_${l.name.toLowerCase()}`, 'footer')}
                  >{l.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter strip */}
        <div
          className="mt-14 pt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div>
            <p style={{ color: '#f5f5f7', fontWeight: 700, fontSize: '1rem', marginBottom: '4px' }}>Stay in the loop</p>
            <p style={{ color: '#5a5a6e', fontSize: '0.875rem' }}>New articles, projects, and insights from the journey.</p>
          </div>

          {isSubscribed ? (
            <div className="flex items-center gap-2" style={{ color: '#8b5cf6', fontSize: '0.875rem', fontWeight: 600 }}>
              <Heart className="w-4 h-4" />
              Thank you for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                style={{
                  background: '#111118',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '50px',
                  padding: '10px 18px',
                  color: '#f5f5f7',
                  fontSize: '0.875rem',
                  outline: 'none',
                  width: '220px',
                  transition: 'border-color 0.2s'
                }}
                onFocus={e => e.target.style.borderColor = 'rgba(139,92,246,0.4)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.08)'}
              />
              <button
                type="submit"
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-full text-white text-sm font-semibold"
                style={{ background: '#8b5cf6', whiteSpace: 'nowrap', flexShrink: 0, transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#7c3aed'}
                onMouseLeave={e => e.currentTarget.style.background = '#8b5cf6'}
              >
                <Send className="w-3.5 h-3.5" />
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span style={{ color: '#3a3a4e', fontSize: '0.8125rem' }}>
            © 2025 The Meet Patel. All rights reserved.
          </span>
          <div className="flex items-center gap-5">
            {[
              { label: 'Privacy Policy', href: '/privacy-policy' },
              { label: 'Cookie Policy', href: '/cookie-policy' },
              { label: 'Terms of Service', href: '/terms-of-service' },
            ].map((l) => (
              <Link
                key={l.label}
                to={l.href}
                style={{ color: '#3a3a4e', fontSize: '0.8125rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#8e8ea0'}
                onMouseLeave={e => e.target.style.color = '#3a3a4e'}
              >{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraFooter;
