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
      } else {
        results.errors.push(`Email error: ${results.email?.error}`);
      }
    } catch (error) {
      results.errors.push(`Email error: ${error.message}`);
      console.error('Email submission failed:', error);
    }

    // Keep a local copy so a failed send is recoverable from the browser.
    // It is a backup, never a delivery: results.success stays tied to the
    // email actually leaving, or the visitor is told "sent" for a message
    // that only ever reached their own localStorage.
    try {
      results.localStorage = await storeFallbackData(formType, formData);
    } catch (error) {
      results.errors.push(`localStorage error: ${error.message}`);
      console.error('localStorage backup failed:', error);
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
