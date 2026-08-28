import React, { useEffect, useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { trackButtonClick } from '../../utils/analytics';
import {
  LAUNCH,
  CARD_DISMISS_KEY,
  isDismissed,
  setDismissed,
} from './launchConfig';

const REVEAL_DELAY_MS = 600;

/**
 * Floating, dismissible "try Dan" card pinned to the bottom-left on desktop
 * (mirrors the WhatsApp CTA at bottom-right). Hidden on mobile, where the
 * full-width WhatsApp bar owns the bottom edge and the top bar carries the promo.
 */
const LaunchTryDanCard = () => {
  const [visible, setVisible] = useState(
    () => LAUNCH.enabled && !isDismissed(CARD_DISMISS_KEY)
  );
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (!visible) return undefined;
    const t = setTimeout(() => setShown(true), REVEAL_DELAY_MS);
    return () => clearTimeout(t);
  }, [visible]);

  const handleDismiss = () => {
    setDismissed(CARD_DISMISS_KEY);
    trackButtonClick('launch_card_dismiss', 'launch_card');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="pointer-events-none fixed bottom-6 left-6 z-[9990] hidden sm:block"
      style={{
        transition:
          'opacity 300ms ease, transform 400ms cubic-bezier(0.22, 1, 0.36, 1)',
        opacity: shown ? 1 : 0,
        transform: shown ? 'translateY(0)' : 'translateY(24px)',
      }}
    >
      <div
        className="pointer-events-auto relative w-[340px] overflow-hidden rounded-2xl border border-white/10 p-4 backdrop-blur-xl"
        style={{
          background:
            'linear-gradient(150deg, rgba(17,16,24,0.95) 0%, rgba(19,15,28,0.95) 100%)',
          boxShadow: `0 24px 60px -18px ${LAUNCH.accent}55, 0 0 0 1px ${LAUNCH.accent}1f inset`,
        }}
      >
        {/* soft violet radial */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background: `radial-gradient(120% 80% at 0% 0%, ${LAUNCH.accent}1f 0%, transparent 55%)`,
          }}
        />

        {/* Dismiss */}
        <button
          type="button"
          onClick={handleDismiss}
          aria-label={`Dismiss ${LAUNCH.product} card`}
          className="absolute right-2.5 top-2.5 z-10 rounded-full p-1 text-[#8e8ea0] transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Header */}
        <div className="relative flex items-center gap-3 pr-6">
          <img
            src={LAUNCH.iconUrl}
            alt={`${LAUNCH.product} by ${LAUNCH.company}`}
            width={48}
            height={48}
            loading="lazy"
            className="h-12 w-12 shrink-0 rounded-lg object-cover"
          />
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="truncate text-[15px] font-semibold text-white">
                {LAUNCH.product} by {LAUNCH.company}
              </h3>
            </div>
            <span
              className="mt-0.5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.1em]"
              style={{ color: LAUNCH.accent }}
            >
              <span className="relative inline-flex h-1.5 w-1.5">
                <span
                  className="absolute inset-0 animate-ping rounded-full opacity-70"
                  style={{ background: LAUNCH.accent }}
                />
                <span
                  className="relative inline-flex h-1.5 w-1.5 rounded-full"
                  style={{ background: LAUNCH.accent }}
                />
              </span>
              {LAUNCH.status}
            </span>
          </div>
        </div>

        {/* Tagline */}
        <p className="relative mt-3 text-[13px] leading-relaxed text-[#cfd0e6]">
          {LAUNCH.promoLine}
        </p>

        {/* CTA */}
        <a
          href={LAUNCH.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackButtonClick('launch_card_cta', 'launch_card')}
          className="group relative mt-3.5 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-[13px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5"
          style={{
            background: `linear-gradient(180deg, ${LAUNCH.accent} 0%, ${LAUNCH.accentDark} 100%)`,
            boxShadow: `0 10px 24px -8px ${LAUNCH.accent}aa`,
          }}
        >
          {LAUNCH.ctaLabel}
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>
      </div>
    </div>
  );
};

export default LaunchTryDanCard;
