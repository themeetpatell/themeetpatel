const FORMS_NOTIFY_ENDPOINT = '/api/forms/notify';

const sendEmailNotification = async (formType, formData) => {
  const payload = {
    formType,
    formData,
    pagePath: typeof window !== 'undefined' ? window.location.pathname : '',
    pageUrl: typeof window !== 'undefined' ? window.location.href : '',
  };

  try {
    const response = await fetch(FORMS_NOTIFY_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      return { success: false, error: data?.error || 'Email sending failed' };
    }

    return { success: true, method: 'resend', response: data };
  } catch (error) {
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
        console.log(`${formType} form emailed to meet@company8.dev successfully`);
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

export const submitNewsletterFormData = async (formData) => {
  return await submitForm('newsletter', formData);
};

export const submitWaitlistFormData = async (formData) => {
  return await submitForm('waitlist', formData);
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
  try {
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      countryCode: '+1',
      whatsapp: '1234567890',
      subject: 'Test Email Connection',
      message: 'This is a test message to verify Resend configuration.'
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
