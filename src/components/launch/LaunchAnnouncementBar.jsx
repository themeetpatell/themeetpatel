import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Rocket, ArrowRight, X } from 'lucide-react';
import { trackButtonClick } from '../../utils/analytics';
import {
  LAUNCH,
  BAR_DISMISS_KEY,
  isDismissed,
  setDismissed,
} from './launchConfig';

const BANNER_VAR = '--launch-banner-h';

function setBannerHeight(px) {
  document.documentElement.style.setProperty(BANNER_VAR, `${px}px`);
}

/**
 * Slim, dismissible launch strip pinned above the nav on every public page.
 * Publishes its measured height to the `--launch-banner-h` CSS variable so the
 * fixed nav and page content shift down by exactly the right amount.
 */
const LaunchAnnouncementBar = () => {
  const [visible, setVisible] = useState(
    () => LAUNCH.enabled && !isDismissed(BAR_DISMISS_KEY)
  );
  const barRef = useRef(null);

  // Keep the CSS variable in sync with the bar's real height (handles wrapping
  // on narrow screens) and reset it to 0 whenever the bar is hidden.
  useLayoutEffect(() => {
    if (!visible) {
      setBannerHeight(0);
      return undefined;
    }

    const el = barRef.current;
    if (!el) return undefined;

    const update = () => setBannerHeight(el.offsetHeight);
    update();

    const observer =
      typeof ResizeObserver !== 'undefined' ? new ResizeObserver(update) : null;
    observer?.observe(el);
    window.addEventListener('resize', update);

    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', update);
    };
  }, [visible]);

  // Safety net: clear the offset if this component unmounts.
  useEffect(() => () => setBannerHeight(0), []);

  const handleDismiss = () => {
    setDismissed(BAR_DISMISS_KEY);
    trackButtonClick('launch_bar_dismiss', 'launch_banner');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      ref={barRef}
      role="region"
      aria-label={`${LAUNCH.product} by ${LAUNCH.company} is on Product Hunt`}
      className="fixed top-0 left-0 right-0 z-[9996]"
      style={{
        background:
          'linear-gradient(90deg, #0b0a14 0%, #15101a 50%, #0b0a14 100%)',
        borderBottom: `1px solid ${LAUNCH.phOrange}33`,
        boxShadow: '0 1px 24px rgba(0,0,0,0.45)',
      }}
    >
      {/* faint orange glow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(120% 140% at 50% -40%, ${LAUNCH.phOrange}26 0%, transparent 60%)`,
        }}
      />

      <div className="relative mx-auto flex max-w-7xl items-center gap-3 px-4 py-2 sm:px-8 sm:py-2.5">
        {/* Eyebrow badge */}
        <span
          className="hidden shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] sm:inline-flex"
          style={{
            color: LAUNCH.phOrange,
            background: `${LAUNCH.phOrange}1f`,
            border: `1px solid ${LAUNCH.phOrange}33`,
          }}
        >
          <Rocket className="h-3.5 w-3.5" />
          {LAUNCH.eyebrow}
        </span>

        {/* Copy */}
        <p className="min-w-0 flex-1 truncate text-[13px] text-[#cfd0e6] sm:text-sm">
          <span className="font-semibold text-white">
            {LAUNCH.product} by {LAUNCH.company}
          </span>
          <span className="hidden text-[#a8a9c3] sm:inline">
            {' '}
            — {LAUNCH.tagline}
          </span>
          <span className="text-[#a8a9c3] sm:hidden"> is live on Product Hunt</span>
        </p>

        {/* CTA */}
        <a
          href={LAUNCH.productHuntUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackButtonClick('launch_bar_cta', 'launch_banner')}
          className="group inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 sm:text-[13px]"
          style={{
            background: `linear-gradient(180deg, ${LAUNCH.phOrange} 0%, ${LAUNCH.phOrangeDark} 100%)`,
            boxShadow: `0 6px 18px -6px ${LAUNCH.phOrange}99`,
          }}
        >
          <span className="hidden sm:inline">Check it out</span>
          <span className="sm:hidden">Support</span>
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
        </a>

        {/* Dismiss */}
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Dismiss launch announcement"
          className="shrink-0 rounded-full p-1 text-[#8e8ea0] transition-colors hover:bg-white/10 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default LaunchAnnouncementBar;
