import React, { useEffect } from 'react';

const SEOPerformance = () => {
  useEffect(() => {
    // Google Analytics 4 Event Tracking
    const trackPageView = () => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname
        });
      }
    };

    // Track scroll depth
    const trackScrollDepth = () => {
      let maxScroll = 0;
      const scrollThresholds = [25, 50, 75, 90, 100];
      
      const handleScroll = () => {
        const scrollPercent = Math.round(
          (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
        );
        
        if (scrollPercent > maxScroll) {
          maxScroll = scrollPercent;
          
          scrollThresholds.forEach(threshold => {
            if (scrollPercent >= threshold && maxScroll >= threshold) {
              if (typeof gtag !== 'undefined') {
                gtag('event', 'scroll', {
                  event_category: 'engagement',
                  event_label: `${threshold}%`,
                  value: threshold
                });
              }
            }
          });
        }
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    };

    // Track time on page
    const trackTimeOnPage = () => {
      const startTime = Date.now();
      
      const handleBeforeUnload = () => {
        const timeOnPage = Math.round((Date.now() - startTime) / 1000);
        if (typeof gtag !== 'undefined') {
          gtag('event', 'timing_complete', {
            name: 'time_on_page',
            value: timeOnPage
          });
        }
      };

      window.addEventListener('beforeunload', handleBeforeUnload);
      return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    };

    // Track form interactions
    const trackFormInteractions = () => {
      const forms = document.querySelectorAll('form');
      
      forms.forEach(form => {
        form.addEventListener('submit', (e) => {
          if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
              event_category: 'engagement',
              event_label: form.id || 'contact_form'
            });
          }
        });
      });
    };

    // Track external link clicks
    const trackExternalLinks = () => {
      const externalLinks = document.querySelectorAll('a[href^="http"]');
      
      externalLinks.forEach(link => {
        link.addEventListener('click', (e) => {
          if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
              event_category: 'outbound',
              event_label: link.href,
              transport_type: 'beacon'
            });
          }
        });
      });
    };

    // Track CTA clicks
    const trackCTAClicks = () => {
      const ctaButtons = document.querySelectorAll('a[href="/contact"], a[href="/about"], button');
      
      ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
          if (typeof gtag !== 'undefined') {
            gtag('event', 'cta_click', {
              event_category: 'engagement',
              event_label: button.textContent || button.href
            });
          }
        });
      });
    };

    // Initialize tracking
    trackPageView();
    const cleanupScroll = trackScrollDepth();
    const cleanupTime = trackTimeOnPage();
    trackFormInteractions();
    trackExternalLinks();
    trackCTAClicks();

    // Cleanup
    return () => {
      if (cleanupScroll) cleanupScroll();
      if (cleanupTime) cleanupTime();
    };
  }, []);

  // Core Web Vitals monitoring
  useEffect(() => {
    const measureWebVitals = () => {
      // Largest Contentful Paint (LCP)
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'LCP',
            value: Math.round(lastEntry.startTime)
          });
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (typeof gtag !== 'undefined') {
            gtag('event', 'web_vitals', {
              event_category: 'performance',
              event_label: 'FID',
              value: Math.round(entry.processingStart - entry.startTime)
            });
          }
        });
      });
      
      fidObserver.observe({ entryTypes: ['first-input'] });

      // Cumulative Layout Shift (CLS)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        
        if (typeof gtag !== 'undefined') {
          gtag('event', 'web_vitals', {
            event_category: 'performance',
            event_label: 'CLS',
            value: Math.round(clsValue * 1000)
          });
        }
      });
      
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      return () => {
        observer.disconnect();
        fidObserver.disconnect();
        clsObserver.disconnect();
      };
    };

    const cleanup = measureWebVitals();
    return cleanup;
  }, []);

  return null; // This component doesn't render anything
};

export default SEOPerformance;
