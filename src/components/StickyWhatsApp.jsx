import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { capture } from '../lib/posthog';

const WHATSAPP_NUMBER = '919824341414';
const PREFILLED_MESSAGE =
  "Hi Meet! I just visited themeetpatel.com and would love to connect.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

const WhatsAppGlyph = ({ className = 'h-5 w-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const StickyWhatsApp = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 9999,
        display: 'flex',
        justifyContent: 'center',
        pointerEvents: 'none',
        padding: '0 16px max(env(safe-area-inset-bottom), 16px) 16px',
        transition: 'opacity 300ms ease, transform 400ms cubic-bezier(0.22, 1, 0.36, 1)',
        opacity: mounted ? 1 : 0,
        transform: mounted ? 'translateY(0)' : 'translateY(40px)'
      }}
      className="sm:!left-auto sm:!right-6 sm:!bottom-6 sm:!p-0 sm:!justify-end"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Meet on WhatsApp"
        onClick={() =>
          capture('whatsapp_cta_clicked', {
            location: 'sticky_bar',
            page_path: window.location.pathname,
          })
        }
        className="wa-cta pointer-events-auto group relative flex w-full max-w-[440px] items-center gap-3 overflow-hidden rounded-2xl border border-white/10 px-4 py-3 text-white backdrop-blur-xl sm:w-auto sm:max-w-none sm:gap-3 sm:rounded-full sm:px-3 sm:py-2.5 sm:pr-5"
        style={{
          background:
            'linear-gradient(135deg, rgba(11,10,24,0.92) 0%, rgba(15,25,18,0.92) 100%)',
          boxShadow:
            '0 24px 60px -18px rgba(37,211,102,0.55), 0 0 0 1px rgba(37,211,102,0.18) inset, 0 1px 0 rgba(255,255,255,0.04) inset'
        }}
      >
        {/* Animated green border glow */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -inset-px rounded-[inherit]"
          style={{
            background:
              'conic-gradient(from 0deg, rgba(37,211,102,0) 0deg, rgba(37,211,102,0.55) 90deg, rgba(37,211,102,0) 180deg, rgba(37,211,102,0.4) 270deg, rgba(37,211,102,0) 360deg)',
            WebkitMask:
              'linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            padding: '1px',
            animation: 'wa-spin 6s linear infinite',
            opacity: 0.55
          }}
        />

        {/* Soft inner radial */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[inherit]"
          style={{
            background:
              'radial-gradient(140% 90% at 0% 50%, rgba(37,211,102,0.22) 0%, rgba(37,211,102,0) 55%)'
          }}
        />

        {/* Green icon orb with pulsing ring */}
        <span className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center sm:h-10 sm:w-10">
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full"
            style={{ animation: 'wa-pulse 2.4s ease-out infinite' }}
          />
          <span
            className="relative flex h-full w-full items-center justify-center rounded-full"
            style={{
              background:
                'radial-gradient(circle at 30% 25%, #5cf093 0%, #25D366 45%, #149a4a 100%)',
              boxShadow:
                '0 10px 22px -6px rgba(37,211,102,0.7), inset 0 1px 0 rgba(255,255,255,0.35)'
            }}
          >
            <WhatsAppGlyph className="h-5 w-5 text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]" />
          </span>
          {/* Online indicator */}
          <span
            aria-hidden="true"
            className="absolute -bottom-0.5 -right-0.5 inline-flex h-3 w-3 items-center justify-center rounded-full border-2 border-[#0b0a18] bg-[#25D366]"
          >
            <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-60" />
          </span>
        </span>

        {/* Copy */}
        <span className="relative flex min-w-0 flex-1 flex-col justify-center leading-tight sm:flex-none">
          <span className="flex items-baseline gap-1.5">
            <span className="text-[15px] font-semibold tracking-tight text-white">
              Chat with Meet
            </span>
            <span className="hidden text-[11px] font-medium uppercase tracking-[0.14em] text-[#25D366] sm:inline">
              on WhatsApp
            </span>
          </span>
          <span className="mt-0.5 flex items-center gap-1.5 text-[11px] text-[#a8a9c3]">
            <span className="relative inline-flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#25D366]" />
            </span>
            Online · usually replies in an hour
          </span>
        </span>

        <span className="relative ml-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-white/[0.06] transition-all duration-300 group-hover:bg-[#25D366] group-hover:text-[#0b0a18]">
          <ArrowRight className="h-4 w-4 text-white/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-[#0b0a18]" />
        </span>
      </a>

      <style>{`
        @keyframes wa-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(37,211,102,0.55); }
          70%  { box-shadow: 0 0 0 14px rgba(37,211,102,0);  }
          100% { box-shadow: 0 0 0 0 rgba(37,211,102,0);     }
        }
        @keyframes wa-spin {
          to { transform: rotate(360deg); }
        }
        .wa-cta:hover {
          transform: translateY(-2px);
          box-shadow:
            0 30px 70px -16px rgba(37,211,102,0.75),
            0 0 0 1px rgba(37,211,102,0.32) inset,
            0 1px 0 rgba(255,255,255,0.06) inset !important;
        }
        .wa-cta { transition: transform 250ms ease, box-shadow 250ms ease; }
      `}</style>
    </div>
  );
};

export default StickyWhatsApp;
