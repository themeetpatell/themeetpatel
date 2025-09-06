// Google Analytics utility functions
export const GA_TRACKING_ID = 'G-Q7F8NBDNKN';

// Initialize Google Analytics
export const initGA = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track page views
export const trackPageView = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
      page_title: document.title,
      page_location: window.location.href,
    });
  }
};

// Track custom events
export const trackEvent = (action, category, label, value) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track button clicks
export const trackButtonClick = (buttonName, location) => {
  trackEvent('click', 'button', `${buttonName} - ${location}`);
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('submit', 'form', formName);
};

// Track downloads
export const trackDownload = (fileName) => {
  trackEvent('download', 'file', fileName);
};

// Track social media clicks
export const trackSocialClick = (platform) => {
  trackEvent('click', 'social', platform);
};

// Track email clicks
export const trackEmailClick = (emailType) => {
  trackEvent('click', 'email', emailType);
};

// Track phone clicks
export const trackPhoneClick = () => {
  trackEvent('click', 'phone', 'contact');
};

// Track external link clicks
export const trackExternalLink = (url) => {
  trackEvent('click', 'external_link', url);
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
  trackEvent('scroll', 'engagement', `scroll_depth_${depth}%`);
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds) => {
  trackEvent('timing', 'engagement', 'time_on_page', timeInSeconds);
};
