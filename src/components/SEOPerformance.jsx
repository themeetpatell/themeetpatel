import React, { useEffect } from 'react';

const getGtag = () => {
  if (typeof window === 'undefined') return null;
  return typeof window.gtag === 'function' ? window.gtag : null;
};

const trackEvent = (eventName, params = {}) => {
  const gtag = getGtag();
  if (!gtag) return;
  gtag('event', eventName, params);
};

const SEOPerformance = () => {
  useEffect(() => {
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return undefined;
    }

    trackEvent('page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname,
    });

    const scrollThresholds = [25, 50, 75, 90, 100];
    const firedScrollThresholds = new Set();
    const handleScroll = () => {
      const denominator = document.documentElement.scrollHeight - window.innerHeight;
      if (denominator <= 0) return;
      const scrollPercent = Math.round((window.scrollY / denominator) * 100);

      scrollThresholds.forEach((threshold) => {
        if (scrollPercent >= threshold && !firedScrollThresholds.has(threshold)) {
          firedScrollThresholds.add(threshold);
          trackEvent('scroll', {
            event_category: 'engagement',
            event_label: `${threshold}%`,
            value: threshold,
          });
        }
      });
    };

    const startTime = Date.now();
    const handleBeforeUnload = () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      trackEvent('timing_complete', {
        name: 'time_on_page',
        value: timeOnPage,
      });
    };

    const formListeners = [];
    document.querySelectorAll('form').forEach((form) => {
      const handler = () => {
        trackEvent('form_submit', {
          event_category: 'engagement',
          event_label: form.id || 'contact_form',
        });
      };
      form.addEventListener('submit', handler);
      formListeners.push([form, handler]);
    });

    const externalLinkListeners = [];
    document.querySelectorAll('a[href^="http"]').forEach((link) => {
      const handler = () => {
        trackEvent('click', {
          event_category: 'outbound',
          event_label: link.href,
          transport_type: 'beacon',
        });
      };
      link.addEventListener('click', handler);
      externalLinkListeners.push([link, handler]);
    });

    const ctaListeners = [];
    document.querySelectorAll('a[href="/contact"], a[href="/about"], button').forEach((button) => {
      const handler = () => {
        trackEvent('cta_click', {
          event_category: 'engagement',
          event_label: button.textContent || button.getAttribute('href') || 'button',
        });
      };
      button.addEventListener('click', handler);
      ctaListeners.push([button, handler]);
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);

      formListeners.forEach(([form, handler]) => form.removeEventListener('submit', handler));
      externalLinkListeners.forEach(([link, handler]) => link.removeEventListener('click', handler));
      ctaListeners.forEach(([button, handler]) => button.removeEventListener('click', handler));
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || typeof PerformanceObserver === 'undefined') {
      return undefined;
    }

    const observers = [];
    const safeObserve = (observer, options) => {
      try {
        observer.observe(options);
        observers.push(observer);
      } catch {
        observer.disconnect();
      }
    };

    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      if (!lastEntry) return;
      trackEvent('web_vitals', {
        event_category: 'performance',
        event_label: 'LCP',
        value: Math.round(lastEntry.startTime),
      });
    });
    safeObserve(lcpObserver, { entryTypes: ['largest-contentful-paint'] });

    const fidObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        const delay = entry.processingStart - entry.startTime;
        if (!Number.isFinite(delay)) return;
        trackEvent('web_vitals', {
          event_category: 'performance',
          event_label: 'FID',
          value: Math.round(delay),
        });
      });
    });
    safeObserve(fidObserver, { entryTypes: ['first-input'] });

    let clsValue = 0;
    const clsObserver = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (!entry.hadRecentInput && typeof entry.value === 'number') {
          clsValue += entry.value;
        }
      });

      trackEvent('web_vitals', {
        event_category: 'performance',
        event_label: 'CLS',
        value: Math.round(clsValue * 1000),
      });
    });
    safeObserve(clsObserver, { entryTypes: ['layout-shift'] });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return null;
};

export default SEOPerformance;
