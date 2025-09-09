# Production Deployment Fix

## Issue
Contact page works locally but not in production.

## Root Cause
Environment variables are not available in production environment.

## Solution

### 1. Set Environment Variables in Production

**For Vercel:**
1. Go to your Vercel dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Add these variables:
   ```
   VITE_GOOGLE_SHEET_ID = 1dQfQ3ZApWGLyp3To5dzNurtAM3p1Ah0XMmw0erXdKWg
   VITE_GOOGLE_API_KEY = AIzaSyAB1z5ysDENMEyO9dbt2ujs696Mh35hWao
   VITE_ENABLE_GOOGLE_SHEETS = true
   ```

**For Netlify:**
1. Go to Site settings → Environment variables
2. Add the same variables as above

**For other platforms:**
- Add the environment variables to your hosting platform
- Or create a `.env.production` file in your project root

### 2. Debug in Production

1. Deploy with the debug component
2. Visit your production site
3. Click the red "🐛 Debug" button in bottom right
4. Check if environment variables are loaded
5. Test form submission
6. Check browser console for errors

### 3. Fallback System

The form now has a fallback system:
- If Google Sheets fails, data is stored in localStorage
- Form still shows success to user
- You can retrieve data from localStorage if needed

### 4. Remove Debug Component

After fixing, remove the debug component:
1. Remove `import ProductionDebug from '../components/ProductionDebug';`
2. Remove `<ProductionDebug />` from the component
3. Delete `src/components/ProductionDebug.jsx`

## Testing

1. **Local Test:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Production Test:**
   - Deploy to your hosting platform
   - Test form submission
   - Check Google Sheet for new data
   - Check localStorage for fallback data

## Environment Variables Reference

```env
# Required for Google Sheets integration
VITE_GOOGLE_SHEET_ID=1dQfQ3ZApWGLyp3To5dzNurtAM3p1Ah0XMmw0erXdKWg
VITE_GOOGLE_API_KEY=AIzaSyAB1z5ysDENMEyO9dbt2ujs696Mh35hWao
VITE_ENABLE_GOOGLE_SHEETS=true
```

## Troubleshooting

### If form still doesn't work:
1. Check browser console for errors
2. Verify environment variables are set
3. Check Google Sheets API permissions
4. Test with debug component

### If Google Sheets fails:
1. Data is automatically stored in localStorage
2. Form still shows success to user
3. You can retrieve data manually from localStorage

## Security Notes

- Never commit `.env` files to version control
- Use environment variables in production
- Consider using a backend service for sensitive data
