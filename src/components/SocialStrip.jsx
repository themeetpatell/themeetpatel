import React, { useEffect, useRef, useState } from 'react';
import { Linkedin, Twitter, Github, Instagram, Youtube, Building2, Plus } from 'lucide-react';
import { liveSocials, FOLLOW_STRIP } from '../data/socials';
import { SubstackIcon, MediumIcon } from './icons/BrandIcons';

/**
 * Floating follow bubble, pinned to the left edge and vertically centred.
 *
 * Collapsed it is a single bubble. Clicking it fans the channels out ABOVE and
 * BELOW that bubble — half each way — so the bubble itself never moves and the
 * expansion reads as growing from a point rather than unrolling from an edge.
 *
 * Why the left edge and why centred: both bottom corners are already occupied —
 * StickyWhatsApp sits bottom-right on desktop and spans the full width on
 * mobile, and LaunchTryDanCard sits bottom-left on desktop. Left-centre is the
 * only anchor that collides with neither at any breakpoint.
 *
 * The two stacks are `position: absolute` against the bubble, so opening costs
 * the document no reflow at all. Nothing animates top or left: doing that on a
 * floating element is what caused the 0.184 CLS regression on the homepage.
 * Transform and opacity only.
 */

const ICONS = {
  linkedin: Linkedin,
  'linkedin-company': Building2,
  twitter: Twitter,
  substack: SubstackIcon,
  medium: MediumIcon,
  instagram: Instagram,
  youtube: Youtube,
  github: Github,
};

const Z = 9980; // below StickyWhatsApp (9999) and LaunchTryDanCard (9990)
const STEP = 46; // px between channel centres when open

export default function SocialStrip() {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef(null);

  const channels = liveSocials();
  const half = Math.ceil(channels.length / 2);
  const above = channels.slice(0, half).reverse(); // nearest the bubble first
  const below = channels.slice(half);

  // Escape closes, and so does a click anywhere outside. Both listeners are
  // attached only while open — a closed bubble should cost nothing.
  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const onPointerDown = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setIsOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [isOpen]);

  const renderChannel = ({ id, label, href, handle }, index, direction) => {
    const Icon = ICONS[id];
    const offset = (index + 1) * STEP * direction;
    return (
      <a
        key={id}
        className="sb-item"
        href={href}
        target="_blank"
        rel="noopener noreferrer me"
        aria-label={`${label} — ${handle}`}
        tabIndex={isOpen ? 0 : -1}
        style={{
          transform: isOpen ? `translateY(${offset}px) scale(1)` : 'translateY(0) scale(0.4)',
          transitionDelay: `${isOpen ? index * 28 : 0}ms`,
        }}
      >
        {Icon ? <Icon size={17} aria-hidden="true" /> : null}
        <span className="sb-tip" aria-hidden="true">{label}</span>
      </a>
    );
  };

  return (
    <>
      <style>{`
        .sb-root {
          position: fixed;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          z-index: ${Z};
          width: 46px;
          height: 46px;
        }
        .sb-item {
          position: absolute;
          left: 0;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          border: 1px solid rgba(155,139,255,0.2);
          border-radius: 50%;
          background: rgba(13,14,22,0.94);
          backdrop-filter: blur(12px);
          color: #a8a9c3;
          text-decoration: none;
          opacity: 0;
          pointer-events: none;
          transition: transform 320ms cubic-bezier(0.34,1.3,0.64,1), opacity 200ms ease,
                      background-color 180ms ease, color 180ms ease, border-color 180ms ease;
        }
        .sb-root[data-open="true"] .sb-item { opacity: 1; pointer-events: auto; }
        .sb-item:hover, .sb-item:focus-visible {
          background: rgba(155,139,255,0.18);
          border-color: rgba(155,139,255,0.55);
          color: #f7f7fb;
        }
        .sb-item:focus-visible { outline: 2px solid #9b8bff; outline-offset: 2px; }

        /* Label appears on hover only, so the resting state stays one bubble. */
        .sb-tip {
          position: absolute;
          left: 56px;
          padding: 5px 10px;
          border: 1px solid rgba(155,139,255,0.2);
          border-radius: 8px;
          background: rgba(13,14,22,0.97);
          color: #f7f7fb;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          opacity: 0;
          transform: translateX(-6px);
          pointer-events: none;
          transition: opacity 160ms ease, transform 160ms ease;
        }
        .sb-item:hover .sb-tip, .sb-item:focus-visible .sb-tip { opacity: 1; transform: translateX(0); }

        .sb-bubble {
          position: absolute;
          left: 0;
          top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 46px;
          height: 46px;
          padding: 0;
          border: 1px solid rgba(155,139,255,0.35);
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(155,139,255,0.22), rgba(139,92,246,0.14));
          backdrop-filter: blur(12px);
          box-shadow: 0 6px 24px rgba(0,0,0,0.5);
          color: #c4b5fd;
          cursor: pointer;
          transition: transform 320ms cubic-bezier(0.34,1.3,0.64,1), border-color 180ms ease;
        }
        .sb-bubble:hover { border-color: rgba(155,139,255,0.7); }
        .sb-bubble:focus-visible { outline: 2px solid #9b8bff; outline-offset: 3px; }
        .sb-root[data-open="true"] .sb-bubble { transform: rotate(45deg); }

        @media (max-width: 640px) {
          .sb-root { left: 10px; }
          .sb-tip { display: none; }
        }

        /* Landscape phones: eight channels fanned out is taller than the
           viewport. Nothing is lost — the same links are in the footer. */
        @media (max-height: 560px) {
          .sb-root { display: none; }
        }

        @media (prefers-reduced-motion: reduce) {
          .sb-item, .sb-bubble, .sb-tip { transition: opacity 120ms ease; }
        }
      `}</style>

      <div ref={rootRef} className="sb-root" data-open={isOpen}>
        <nav aria-label={FOLLOW_STRIP.heading}>
          {above.map((c, i) => renderChannel(c, i, -1))}
          {below.map((c, i) => renderChannel(c, i, 1))}
        </nav>

        <button
          type="button"
          className="sb-bubble"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
          aria-label={isOpen ? FOLLOW_STRIP.closeLabel : FOLLOW_STRIP.openLabel}
        >
          <Plus size={20} aria-hidden="true" />
        </button>
      </div>
    </>
  );
}
