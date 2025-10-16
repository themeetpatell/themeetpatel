import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// Initialize EmailJS
if (EMAILJS_PUBLIC_KEY) {
  emailjs.init(EMAILJS_PUBLIC_KEY);
}

const isEmailJSConfigured = () => {
  return !!(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);
};

const sendEmailNotification = async (formType, formData) => {
  if (!isEmailJSConfigured()) {
    console.warn('EmailJS not configured. Check environment variables.');
    return { success: false, error: 'Email service not configured' };
  }

  try {
    let emailParams = {
      to_email: 'the.meetpatell@gmail.com',
      from_name: formData.name || 'Anonymous',
      form_type: formType.toUpperCase(),
      timestamp: new Date().toLocaleString(),
    };

    if (formType === 'contact') {
      emailParams = {
        ...emailParams,
        name: formData.name,
        email: formData.email,
        phone: `${formData.countryCode} ${formData.whatsapp}`,
        subject: formData.subject,
        message: formData.message,
        reply_to: formData.email,
      };
    } else if (formType === 'community') {
      emailParams = {
        ...emailParams,
        linkedin: formData.linkedinId,
        email: formData.email,
        whatsapp: formData.whatsapp,
        business_name: formData.businessName,
        role: formData.role,
        reason: formData.reason,
        reply_to: formData.email,
      };
    }

    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      emailParams
    );

    console.log('Email sent successfully:', response);
    return { success: true, method: 'email', response };
  } catch (error) {
    console.error('Email sending failed:', error);
    return { success: false, error: error.message };
  }
};

const storeFallbackData = async (formType, formData) => {
  try {
    const submissions = JSON.parse(localStorage.getItem('formSubmissions') || '[]');
    submissions.push({
      timestamp: new Date().toISOString(),
      formType,
      data: formData
    });
    localStorage.setItem('formSubmissions', JSON.stringify(submissions));
    console.log('Form data stored in localStorage as backup');
    return { success: true, method: 'localStorage' };
  } catch (error) {
    console.error('Failed to store in localStorage:', error);
    return { success: false, error: error.message };
  }
};

export const submitForm = async (formType, formData) => {
  const results = {
    email: null,
    localStorage: null,
    success: false,
    errors: []
  };

  try {
    // Try sending email first
    try {
      results.email = await sendEmailNotification(formType, formData);
      if (results.email?.success) {
        results.success = true;
        console.log(`${formType} form emailed to the.meetpatell@gmail.com successfully`);
      } else {
        results.errors.push(`Email error: ${results.email?.error}`);
      }
    } catch (error) {
      results.errors.push(`Email error: ${error.message}`);
      console.error('Email submission failed:', error);
    }

    // Always store in localStorage as backup
    try {
      results.localStorage = await storeFallbackData(formType, formData);
      if (results.localStorage?.success) {
        console.log(`${formType} form backed up to localStorage`);
      }
    } catch (error) {
      results.errors.push(`localStorage error: ${error.message}`);
      console.error('localStorage backup failed:', error);
    }

    // If email failed but localStorage succeeded, still mark as success
    if (!results.email?.success && results.localStorage?.success) {
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

export const testEmailConnection = async () => {
  if (!isEmailJSConfigured()) {
    return {
      success: false,
      error: 'EmailJS not configured. Check environment variables.'
    };
  }

  try {
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      countryCode: '+1',
      whatsapp: '1234567890',
      subject: 'Test Email Connection',
      message: 'This is a test message to verify email configuration.'
    };

    const result = await sendEmailNotification('contact', testData);
    return result;
  } catch (error) {
    return {
      success: false,
      error: error.message
    };
  }
};
