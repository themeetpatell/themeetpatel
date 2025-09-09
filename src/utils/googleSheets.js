// Google Sheets API integration utility
const GOOGLE_SHEETS_API_URL = 'https://sheets.googleapis.com/v4/spreadsheets';
const SPREADSHEET_ID = import.meta.env.VITE_GOOGLE_SHEET_ID || process.env.REACT_APP_GOOGLE_SHEET_ID;
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY || process.env.REACT_APP_GOOGLE_API_KEY;

// Contact form data structure
const CONTACT_SHEET_RANGE = 'Contact Form!A:F';
const CONTACT_HEADERS = ['Timestamp', 'Name', 'Email', 'Phone', 'Subject', 'Message'];

// Community form data structure  
const COMMUNITY_SHEET_RANGE = 'Community Form!A:G';
const COMMUNITY_HEADERS = ['Timestamp', 'LinkedIn', 'Email', 'WhatsApp', 'Business Name', 'Role', 'Reason'];

// Helper function to get current timestamp
const getCurrentTimestamp = () => {
  return new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
};

// Submit contact form data to Google Sheets
export const submitContactForm = async (formData) => {
  try {
    const timestamp = getCurrentTimestamp();
    const phone = `${formData.countryCode} ${formData.whatsapp}`;
    
    const values = [
      timestamp,
      formData.name,
      formData.email,
      phone,
      formData.subject,
      formData.message
    ];

    const response = await fetch(
      `${GOOGLE_SHEETS_API_URL}/${SPREADSHEET_ID}/values/${CONTACT_SHEET_RANGE}:append?valueInputOption=RAW&key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [values]
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    console.error('Error submitting contact form:', error);
    return { success: false, error: error.message };
  }
};

// Submit community form data to Google Sheets
export const submitCommunityForm = async (formData) => {
  try {
    const timestamp = getCurrentTimestamp();
    
    const values = [
      timestamp,
      formData.linkedinId,
      formData.email,
      formData.whatsapp,
      formData.businessName,
      formData.role,
      formData.reason
    ];

    const response = await fetch(
      `${GOOGLE_SHEETS_API_URL}/${SPREADSHEET_ID}/values/${COMMUNITY_SHEET_RANGE}:append?valueInputOption=RAW&key=${API_KEY}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [values]
        })
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`HTTP error! status: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    console.error('Error submitting community form:', error);
    return { success: false, error: error.message };
  }
};

// Initialize Google Sheets with headers (run once)
export const initializeSheets = async () => {
  try {
    // Initialize Contact Form sheet
    const contactResponse = await fetch(
      `${GOOGLE_SHEETS_API_URL}/${SPREADSHEET_ID}/values/${CONTACT_SHEET_RANGE}?valueInputOption=RAW&key=${API_KEY}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [CONTACT_HEADERS]
        })
      }
    );

    // Initialize Community Form sheet
    const communityResponse = await fetch(
      `${GOOGLE_SHEETS_API_URL}/${SPREADSHEET_ID}/values/${COMMUNITY_SHEET_RANGE}?valueInputOption=RAW&key=${API_KEY}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          values: [COMMUNITY_HEADERS]
        })
      }
    );

    if (!contactResponse.ok || !communityResponse.ok) {
      throw new Error('Failed to initialize sheets');
    }

    console.log('Google Sheets initialized successfully');
    return { success: true };
  } catch (error) {
    console.error('Error initializing sheets:', error);
    return { success: false, error: error.message };
  }
};
