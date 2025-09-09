// Form submission service with Google Sheets integration
import { submitContactForm, submitCommunityForm } from '../utils/googleSheets';

// Check if Google Sheets integration is enabled
const isGoogleSheetsEnabled = () => {
  const enabled = import.meta.env.VITE_ENABLE_GOOGLE_SHEETS || process.env.REACT_APP_ENABLE_GOOGLE_SHEETS;
  const sheetId = import.meta.env.VITE_GOOGLE_SHEET_ID || process.env.REACT_APP_GOOGLE_SHEET_ID;
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY || process.env.REACT_APP_GOOGLE_API_KEY;
  
  console.log('Google Sheets check:', { enabled, sheetId: !!sheetId, apiKey: !!apiKey });
  
  return enabled === 'true' && sheetId && apiKey;
};

// Fallback notification service (email or other)
const sendFallbackNotification = async (formType, formData) => {
  console.log(`Fallback notification for ${formType}:`, formData);
  
  // Store in localStorage as backup
  try {
    const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
    submissions.push({
      timestamp: new Date().toISOString(),
      formType,
      data: formData
    });
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));
    console.log('Form data stored in localStorage as backup');
  } catch (error) {
    console.error('Failed to store in localStorage:', error);
  }
  
  // In production, you might want to:
  // - Send an email notification
  // - Send a webhook to a backend service
  // - Send to a different database
  
  return { success: true, method: 'fallback' };
};

// Enhanced form submission with error handling and fallbacks
export const submitForm = async (formType, formData) => {
  const results = {
    googleSheets: null,
    fallback: null,
    success: false,
    errors: []
  };

  try {
    // Try Google Sheets integration first
    if (isGoogleSheetsEnabled()) {
      try {
        if (formType === 'contact') {
          results.googleSheets = await submitContactForm(formData);
        } else if (formType === 'community') {
          results.googleSheets = await submitCommunityForm(formData);
        }
        
        if (results.googleSheets?.success) {
          results.success = true;
          console.log(`${formType} form submitted to Google Sheets successfully`);
        } else {
          results.errors.push(`Google Sheets error: ${results.googleSheets?.error}`);
        }
      } catch (error) {
        results.errors.push(`Google Sheets error: ${error.message}`);
        console.error('Google Sheets submission failed:', error);
      }
    } else {
      console.log('Google Sheets integration disabled or not configured');
    }

    // Always try fallback method
    try {
      results.fallback = await sendFallbackNotification(formType, formData);
      if (results.fallback?.success) {
        results.success = true;
        console.log(`${formType} form submitted via fallback method`);
      }
    } catch (error) {
      results.errors.push(`Fallback error: ${error.message}`);
      console.error('Fallback submission failed:', error);
    }

    // If both methods failed, mark as unsuccessful
    if (!results.googleSheets?.success && !results.fallback?.success) {
      results.success = false;
    }

    // Always ensure we have at least one successful method
    if (!results.success && results.fallback?.success) {
      results.success = true;
    }

  } catch (error) {
    results.errors.push(`General error: ${error.message}`);
    console.error('Form submission failed:', error);
  }

  return results;
};

// Contact form submission
export const submitContactFormData = async (formData) => {
  return await submitForm('contact', formData);
};

// Community form submission
export const submitCommunityFormData = async (formData) => {
  return await submitForm('community', formData);
};

// Utility function to format form data for logging
export const formatFormDataForLogging = (formType, formData) => {
  const baseData = {
    timestamp: new Date().toISOString(),
    formType,
    userAgent: navigator.userAgent,
    url: window.location.href
  };

  if (formType === 'contact') {
    return {
      ...baseData,
      name: formData.name,
      email: formData.email,
      phone: `${formData.countryCode} ${formData.whatsapp}`,
      subject: formData.subject,
      message: formData.message
    };
  } else if (formType === 'community') {
    return {
      ...baseData,
      linkedin: formData.linkedinId,
      email: formData.email,
      whatsapp: formData.whatsapp,
      businessName: formData.businessName,
      role: formData.role,
      reason: formData.reason
    };
  }

  return baseData;
};

// Debug function to test Google Sheets connection
export const testGoogleSheetsConnection = async () => {
  if (!isGoogleSheetsEnabled()) {
    return {
      success: false,
      error: 'Google Sheets integration not enabled or not configured'
    };
  }

  try {
    // Test with minimal data
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      countryCode: '+1',
      whatsapp: '1234567890',
      subject: 'Test Subject',
      message: 'Test message'
    };

    const result = await submitContactForm(testData);
    return result;
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};
