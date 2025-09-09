#!/usr/bin/env node

/**
 * Google Sheets Setup Script
 * This script helps you set up Google Sheets integration for form submissions
 */

const fs = require('fs');
const path = require('path');

console.log('🚀 Google Sheets Integration Setup');
console.log('==================================\n');

// Check if .env file exists
const envPath = path.join(process.cwd(), '.env');
const envExamplePath = path.join(process.cwd(), 'env.example');

if (!fs.existsSync(envPath)) {
  if (fs.existsSync(envExamplePath)) {
    console.log('📋 Creating .env file from template...');
    fs.copyFileSync(envExamplePath, envPath);
    console.log('✅ .env file created! Please edit it with your Google Sheets credentials.\n');
  } else {
    console.log('❌ env.example file not found. Please create it manually.\n');
  }
} else {
  console.log('✅ .env file already exists.\n');
}

// Check for required environment variables
console.log('🔍 Checking environment variables...\n');

const requiredVars = [
  'REACT_APP_GOOGLE_SHEET_ID',
  'REACT_APP_GOOGLE_API_KEY',
  'REACT_APP_ENABLE_GOOGLE_SHEETS'
];

let missingVars = [];

requiredVars.forEach(varName => {
  if (!process.env[varName]) {
    missingVars.push(varName);
  }
});

if (missingVars.length > 0) {
  console.log('⚠️  Missing environment variables:');
  missingVars.forEach(varName => {
    console.log(`   - ${varName}`);
  });
  console.log('\n📝 Please set these in your .env file\n');
} else {
  console.log('✅ All required environment variables are set!\n');
}

console.log('📚 Next Steps:');
console.log('1. Get your Google Sheet ID from the URL');
console.log('2. Create a Google Cloud project and enable Sheets API');
console.log('3. Generate an API key');
console.log('4. Update your .env file with the credentials');
console.log('5. Set up your Google Sheet with the required headers');
console.log('6. Test the integration using the test component\n');

console.log('📖 For detailed instructions, see: GOOGLE_SHEETS_SETUP.md\n');

console.log('🧪 To test the integration:');
console.log('1. Add <GoogleSheetsTest /> to any page');
console.log('2. Or check the browser console for form submission logs\n');

console.log('✨ Setup complete! Happy form collecting! 🎉');
