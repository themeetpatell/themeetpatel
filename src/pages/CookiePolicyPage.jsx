import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cookie, Settings, Eye, Shield, Database, Globe, AlertCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white text-gray-900">
      <SEOHead
        title="Cookie Policy - The Meet Patel"
        description="Cookie Policy for The Meet Patel's personal website. Learn about how we use cookies and similar technologies."
        keywords="cookie policy, cookies, tracking, analytics, website cookies"
        canonical="https://themeetpatel.com/cookie-policy"
      />

      {/* Header */}
      <div className="bg-gradient-to-r from-cyan-900/20 to-teal-900/20 border-b border-purple-200/50 mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6">
              <Cookie className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mb-4 sm:mb-0 sm:mr-4" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center sm:text-left">Cookie Policy</h1>
            </div>
            <p className="text-lg sm:text-xl text-purple-600 max-w-3xl mx-auto px-4">
              Learn about how we use cookies and similar technologies to enhance your browsing experience.
            </p>
            <div className="mt-6">
              <Link
                to="/"
                className="inline-flex items-center text-purple-600 hover:text-purple-500 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg prose-invert max-w-none"
        >
          <div className="bg-white/80 rounded-2xl p-4 sm:p-6 lg:p-8 border border-purple-200/50">
            <p className="text-gray-700 mb-6">
              <strong>Last updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Cookie className="w-6 h-6 mr-3 text-purple-600" />
              What Are Cookies?
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and analyzing how you use our site.</p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center mt-8">
              <Settings className="w-6 h-6 mr-3 text-purple-600" />
              Types of Cookies We Use
            </h2>
            <div className="text-gray-700 space-y-6">
              
              <div className="bg-white/80 rounded-xl p-4 sm:p-6 border border-purple-200/50">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-400" />
                  Essential Cookies
                </h3>
                <p className="mb-3">These cookies are necessary for the website to function properly and cannot be disabled.</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Session management and security</li>
                  <li>Form submission and validation</li>
                  <li>User authentication</li>
                  <li>Website functionality</li>
              </ul>
              </div>

              <div className="bg-white/80 rounded-xl p-4 sm:p-6 border border-purple-200/50">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center">
                  <Database className="w-5 h-5 mr-2 text-purple-500" />
                  Analytics Cookies
                </h3>
                <p className="mb-3">These cookies help us understand how visitors interact with our website.</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Google Analytics for website traffic analysis</li>
                  <li>Page views and user behavior tracking</li>
                  <li>Performance monitoring and optimization</li>
                  <li>User journey analysis</li>
              </ul>
              </div>

              <div className="bg-white/80 rounded-xl p-4 sm:p-6 border border-purple-200/50">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center">
                  <Eye className="w-5 h-5 mr-2 text-purple-400" />
                  Functional Cookies
                </h3>
                <p className="mb-3">These cookies enhance your experience by remembering your preferences.</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Language and region preferences</li>
                  <li>Theme and display settings</li>
                  <li>Form data and user inputs</li>
                  <li>Personalized content delivery</li>
              </ul>
              </div>

              <div className="bg-white/80 rounded-xl p-4 sm:p-6 border border-purple-200/50">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-orange-400" />
                  Third-Party Cookies
                </h3>
                <p className="mb-3">These cookies are set by third-party services we use.</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Social media integration (LinkedIn, Twitter, etc.)</li>
                  <li>Email marketing and newsletter services</li>
                  <li>Customer support and chat widgets</li>
                  <li>Payment processing services</li>
              </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center mt-8">
              <Settings className="w-6 h-6 mr-3 text-purple-600" />
              Managing Your Cookie Preferences
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>You can control and manage cookies in several ways:</p>
              
              <div className="bg-white/80 rounded-xl p-4 sm:p-6 border border-purple-200/50">
                <h3 className="text-lg font-semibold text-white mb-3">Browser Settings</h3>
                <p className="mb-3">Most web browsers allow you to control cookies through their settings:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                  <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
                  <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
                </ul>
              </div>

              <div className="bg-white/80 rounded-xl p-4 sm:p-6 border border-purple-200/50">
                <h3 className="text-lg font-semibold text-white mb-3">Cookie Consent</h3>
                <p>When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept or reject.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center mt-8">
              <AlertCircle className="w-6 h-6 mr-3 text-purple-600" />
              Important Notes
            </h2>
            <div className="text-gray-700 space-y-4">
              <div className="bg-yellow-500/10 rounded-xl p-4 sm:p-6 border border-yellow-500/20">
                <p className="text-yellow-200">
                  <strong>Note:</strong> Disabling certain cookies may affect the functionality of our website and your user experience. Essential cookies cannot be disabled as they are necessary for the website to work properly.
                </p>
              </div>
              
              <div className="bg-purple-600/10 rounded-xl p-4 sm:p-6 border border-purple-600/20">
                <p className="text-blue-200">
                  <strong>Updates:</strong> We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center mt-8">
              <Shield className="w-6 h-6 mr-3 text-purple-600" />
              Contact Us
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>If you have any questions about our use of cookies, please contact us:</p>
              <div className="bg-white/80 rounded-xl p-4 sm:p-6 border border-purple-200/50">
                <p><strong>Email:</strong> the.meetpatell@gmail.com</p>
                <p><strong>Phone:</strong> +971 54 754 1414</p>
                <p><strong>Location:</strong> Dubai, UAE</p>
              </div>
            </div>
          </div>
        </motion.div>
        </div>
    </div>
  );
};

export default CookiePolicyPage;
