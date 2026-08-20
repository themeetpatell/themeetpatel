// Analytics utility functions.
//
// Each helper fans the same interaction out to Google Analytics (positional
// gtag args) and PostHog (snake_case event + named properties). PostHog is only
// captured in the specific wrappers — never in the generic `trackEvent` — so a
// single interaction is never counted twice.
import { capture } from '../lib/posthog';

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
  capture('button_clicked', { button_name: buttonName, location });
};

// Track form submissions
export const trackFormSubmission = (formName) => {
  trackEvent('submit', 'form', formName);
  capture('form_submitted', { form_name: formName });
};

// Track downloads
export const trackDownload = (fileName) => {
  trackEvent('download', 'file', fileName);
  capture('file_downloaded', { file_name: fileName });
};

// Track social media clicks
export const trackSocialClick = (platform) => {
  trackEvent('click', 'social', platform);
  capture('social_link_clicked', { platform });
};

// Track email clicks
export const trackEmailClick = (emailType) => {
  trackEvent('click', 'email', emailType);
  capture('email_link_clicked', { email_type: emailType });
};

// Track phone clicks
export const trackPhoneClick = () => {
  trackEvent('click', 'phone', 'contact');
  capture('phone_link_clicked', { contact_method: 'phone' });
};

// Track external link clicks
export const trackExternalLink = (url) => {
  trackEvent('click', 'external_link', url);
  capture('external_link_clicked', { url });
};

// Track scroll depth
export const trackScrollDepth = (depth) => {
  trackEvent('scroll', 'engagement', `scroll_depth_${depth}%`);
};

// Track time on page
export const trackTimeOnPage = (timeInSeconds) => {
  trackEvent('timing', 'engagement', 'time_on_page', timeInSeconds);
};
