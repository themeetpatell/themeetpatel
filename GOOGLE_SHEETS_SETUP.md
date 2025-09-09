# Google Sheets Integration Setup Guide

This guide will help you set up Google Sheets integration to automatically capture form submissions from your contact and community forms.

## Prerequisites

1. A Google account
2. Access to Google Sheets
3. Google Cloud Console access

## Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it "Form Submissions" or similar
4. Create two sheets within the spreadsheet:
   - **Contact Form** - for contact page submissions
   - **Community Form** - for community page submissions

## Step 2: Set up Google Cloud Console

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Enable the Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click on it and press "Enable"

## Step 3: Create API Credentials

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the API key (you'll need this later)
4. (Optional) Restrict the API key to only work with Google Sheets API for security

## Step 4: Set up Sheet Headers

### Contact Form Sheet
Create these column headers in row 1:
- A1: Timestamp
- B1: Name
- C1: Email
- D1: Phone
- E1: Subject
- F1: Message

### Community Form Sheet
Create these column headers in row 1:
- A1: Timestamp
- B1: LinkedIn
- C1: Email
- D1: WhatsApp
- E1: Business Name
- F1: Role
- G1: Reason

## Step 5: Get Your Sheet ID

1. Open your Google Sheet
2. Look at the URL: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
3. Copy the `SHEET_ID_HERE` part - this is your Spreadsheet ID

## Step 6: Configure Environment Variables

1. Copy `env.example` to `.env` in your project root
2. Fill in your credentials:

```env
REACT_APP_GOOGLE_SHEET_ID=1dQfQ3ZApWGLyp3To5dzNurtAM3p1Ah0XMmw0erXdKWg
REACT_APP_GOOGLE_API_KEY=AIzaSyAB1z5ysDENMEyO9dbt2ujs696Mh35hWao
REACT_APP_ENABLE_GOOGLE_SHEETS=true
```

## Step 7: Test the Integration

1. Start your development server: `npm run dev`
2. Fill out and submit both forms
3. Check your Google Sheet to see if data appears
4. Check the browser console for any error messages

## Troubleshooting

### Common Issues

1. **"API key not valid"** - Double-check your API key in the .env file
2. **"Sheet not found"** - Verify your Spreadsheet ID is correct
3. **"Permission denied"** - Make sure the Google Sheet is accessible and the API key has proper permissions
4. **CORS errors** - This shouldn't happen with the Google Sheets API, but if it does, check your API key restrictions

### Debug Mode

To enable debug logging, add this to your .env file:
```env
REACT_APP_DEBUG_GOOGLE_SHEETS=true
```

## Security Notes

- Never commit your `.env` file to version control
- Consider restricting your API key to specific domains/IPs
- The Google Sheets API has usage quotas - monitor your usage
- For production, consider using a backend service instead of direct API calls

## Data Structure

### Contact Form Data
- Timestamp (auto-generated)
- Name (from form)
- Email (from form)
- Phone (country code + number)
- Subject (from form)
- Message (from form)

### Community Form Data
- Timestamp (auto-generated)
- LinkedIn (profile URL)
- Email (from form)
- WhatsApp (phone number)
- Business Name (from form)
- Role (from form)
- Reason (from form)

## Next Steps

Once set up, you can:
1. Set up automated email notifications when forms are submitted
2. Create dashboards to analyze form data
3. Export data for further analysis
4. Set up automated responses based on form submissions
