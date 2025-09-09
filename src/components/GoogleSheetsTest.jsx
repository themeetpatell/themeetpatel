import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, X, AlertCircle, Loader2 } from 'lucide-react';
import { testGoogleSheetsConnection } from '../services/formService';

const GoogleSheetsTest = () => {
  const [isTesting, setIsTesting] = useState(false);
  const [testResult, setTestResult] = useState(null);

  const handleTest = async () => {
    setIsTesting(true);
    setTestResult(null);

    try {
      const result = await testGoogleSheetsConnection();
      setTestResult(result);
    } catch (error) {
      setTestResult({
        success: false,
        error: error.message
      });
    } finally {
      setIsTesting(false);
    }
  };

  const getStatusIcon = () => {
    if (isTesting) {
      return <Loader2 className="w-5 h-5 animate-spin text-blue-400" />;
    }
    
    if (testResult) {
      return testResult.success ? (
        <CheckCircle className="w-5 h-5 text-green-400" />
      ) : (
        <X className="w-5 h-5 text-red-400" />
      );
    }
    
    return <AlertCircle className="w-5 h-5 text-yellow-400" />;
  };

  const getStatusText = () => {
    if (isTesting) return 'Testing connection...';
    if (!testResult) return 'Not tested yet';
    return testResult.success ? 'Connection successful!' : 'Connection failed';
  };

  const getStatusColor = () => {
    if (isTesting) return 'text-blue-400';
    if (!testResult) return 'text-yellow-400';
    return testResult.success ? 'text-green-400' : 'text-red-400';
  };

  return (
    <div className="apple-glass rounded-2xl p-6 max-w-md mx-auto">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
        {getStatusIcon()}
        <span>Google Sheets Test</span>
      </h3>
      
      <p className={`text-sm mb-4 ${getStatusColor()}`}>
        {getStatusText()}
      </p>

      {testResult && !testResult.success && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-xl">
          <p className="text-red-300 text-sm">
            <strong>Error:</strong> {testResult.error}
          </p>
        </div>
      )}

      <motion.button
        onClick={handleTest}
        disabled={isTesting}
        whileHover={{ scale: isTesting ? 1 : 1.02 }}
        whileTap={{ scale: isTesting ? 1 : 0.98 }}
        className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 ${
          isTesting
            ? 'bg-gray-500 cursor-not-allowed'
            : 'bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600'
        }`}
      >
        {isTesting ? 'Testing...' : 'Test Connection'}
      </motion.button>

      <div className="mt-4 text-xs text-white/60">
        <p><strong>Environment Variables Check:</strong></p>
        <ul className="mt-2 space-y-1">
          <li>• REACT_APP_GOOGLE_SHEET_ID: {process.env.REACT_APP_GOOGLE_SHEET_ID ? '✓ Set' : '✗ Missing'}</li>
          <li>• REACT_APP_GOOGLE_API_KEY: {process.env.REACT_APP_GOOGLE_API_KEY ? '✓ Set' : '✗ Missing'}</li>
          <li>• REACT_APP_ENABLE_GOOGLE_SHEETS: {process.env.REACT_APP_ENABLE_GOOGLE_SHEETS || 'Not set'}</li>
        </ul>
      </div>
    </div>
  );
};

export default GoogleSheetsTest;
