import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield,
  Cookie,
  Settings,
  Eye,
  Calendar,
  Info,
  AlertCircle,
  CheckCircle,
  XCircle,
  FileText,
  ExternalLink
} from 'lucide-react';

const CookiePolicyPage = () => {
  const lastUpdated = "August 20, 2025";

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-green-900/20 to-slate-900" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="policy-badge inline-flex items-center space-x-2 rounded-full px-6 py-3 mb-8"
            >
              <Cookie className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-medium">Cookie & Tracking</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cookie Policy
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
              We use cookies and similar technologies to enhance your experience, analyze site usage, 
              and provide personalized content. Learn how we use these technologies and your choices.
            </p>

            <div className="flex items-center justify-center space-x-4 text-white/60 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Last updated: {lastUpdated}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>Version 2.1</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="policy-content p-8 rounded-xl"
          >
            <div className="policy-content max-w-none">
              <h2>1. What Are Cookies?</h2>
              <p>Cookies are small text files that are stored on your device when you visit our website. They help us remember your preferences, analyze site traffic, and provide a better user experience.</p>
              
              <h3>1.1 Types of Cookies We Use</h3>
              <ul>
                <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our site</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Targeting Cookies:</strong> Deliver relevant content and advertisements</li>
              </ul>

              <h2>2. How We Use Cookies</h2>
              <p>We use cookies for the following purposes:</p>
              
              <h3>2.1 Essential Functions</h3>
              <ul>
                <li>Maintain your login session and authentication</li>
                <li>Remember your language and region preferences</li>
                <li>Ensure secure transactions and form submissions</li>
                <li>Provide basic website functionality</li>
              </ul>

              <h3>2.2 Performance & Analytics</h3>
              <ul>
                <li>Analyze website traffic and user behavior</li>
                <li>Identify popular content and features</li>
                <li>Monitor site performance and loading times</li>
                <li>Improve user experience and site design</li>
              </ul>

              <h3>2.3 Personalization</h3>
              <ul>
                <li>Remember your preferences and settings</li>
                <li>Provide personalized content and recommendations</li>
                <li>Customize your dashboard and interface</li>
                <li>Save your progress and form data</li>
              </ul>

              <h2>3. Third-Party Cookies</h2>
              <p>We may use third-party services that place cookies on your device:</p>

              <h3>3.1 Analytics Services</h3>
              <ul>
                <li>Google Analytics for website usage statistics</li>
                <li>Hotjar for user behavior analysis</li>
                <li>Mixpanel for product analytics</li>
                <li>Amplitude for user journey tracking</li>
              </ul>

              <h3>3.2 Marketing & Advertising</h3>
              <ul>
                <li>Facebook Pixel for social media advertising</li>
                <li>Google Ads for search advertising</li>
                <li>LinkedIn Insight Tag for professional networking</li>
                <li>Twitter Pixel for social engagement</li>
              </ul>

              <h3>3.3 Social Media</h3>
              <ul>
                <li>Social media sharing buttons</li>
                <li>Social login and authentication</li>
                <li>Social media content embedding</li>
                <li>Community features and interactions</li>
              </ul>

              <h2>4. Cookie Duration</h2>
              <p>Cookies have different lifespans:</p>

              <h3>4.1 Session Cookies</h3>
              <p>These cookies are temporary and are deleted when you close your browser. They are essential for basic website functionality.</p>

              <h3>4.2 Persistent Cookies</h3>
              <p>These cookies remain on your device for a set period or until you delete them. They remember your preferences and settings.</p>

              <h3>4.3 Third-Party Cookies</h3>
              <p>Third-party cookies may have different expiration dates set by their respective services.</p>

              <h2>5. Your Cookie Choices</h2>
              <p>You have several options for managing cookies:</p>

              <h3>5.1 Browser Settings</h3>
              <ul>
                <li>Block all cookies (may affect site functionality)</li>
                <li>Block third-party cookies only</li>
                <li>Delete existing cookies</li>
                <li>Set cookie preferences for specific sites</li>
              </ul>

              <h3>5.2 Cookie Consent</h3>
              <p>When you first visit our site, you'll see a cookie consent banner. You can:</p>
              <ul>
                <li>Accept all cookies</li>
                <li>Accept only essential cookies</li>
                <li>Customize your cookie preferences</li>
                <li>Reject non-essential cookies</li>
              </ul>

              <h3>5.3 Opt-Out Tools</h3>
              <ul>
                <li>Google Analytics Opt-out Browser Add-on</li>
                <li>Facebook Ad Preferences</li>
                <li>Digital Advertising Alliance (DAA) Opt-out</li>
                <li>European Interactive Digital Advertising Alliance (EDAA)</li>
              </ul>

              <h2>6. Mobile Apps & Devices</h2>
              <p>Our mobile applications may also use similar technologies:</p>

              <h3>6.1 Mobile Identifiers</h3>
              <ul>
                <li>Device advertising identifiers (IDFA, AAID)</li>
                <li>App usage analytics and crash reporting</li>
                <li>Push notification preferences</li>
                <li>Location-based services (with consent)</li>
              </ul>

              <h3>6.2 Cross-Platform Tracking</h3>
              <p>We may link data across devices and platforms to provide a consistent experience and better understand user behavior.</p>

              <h2>7. Updates to This Policy</h2>
              <p>We may update this cookie policy to reflect changes in our practices or applicable laws. We will notify you of any material changes by:</p>
              <ul>
                <li>Posting the updated policy on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Displaying prominent notices in our applications</li>
                <li>Updating the "Last updated" date</li>
              </ul>

              <h2>8. Contact Us</h2>
              <p>If you have questions about our use of cookies or this policy, please contact us:</p>
              
              <div className="policy-contact rounded-lg p-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Email</h4>
                    <p className="text-white/70">aarivbizz@gmail.com</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Address</h4>
                    <p className="text-white/70">Dubai Marina<br />Dubai, United Arab Emirates</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Phone</h4>
                    <p className="text-white/70">+971 54 574 1414</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Data Protection Officer</h4>
                    <p className="text-white/70">aarivbizz@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="policy-notice rounded-lg p-6 mt-8">
                <div className="flex items-start space-x-3">
                  <Info className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Cookie Management</h3>
                    <p className="text-white/80">
                      You can manage your cookie preferences at any time through your browser settings or our cookie consent manager. 
                      Remember that disabling certain cookies may affect the functionality of our services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Policies */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Related Policies</h2>
            <p className="text-xl text-white/70">Review our other important legal documents.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="policy-card p-6 rounded-xl cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Terms of Service</h3>
              <p className="text-white/70 text-sm mb-4">
                Our terms and conditions governing the use of our platform and services.
              </p>
              <Link to="/terms" className="text-blue-400 hover:text-blue-300 text-sm font-medium">
                Read Terms →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="policy-card p-6 rounded-xl cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Privacy Policy</h3>
              <p className="text-white/70 text-sm mb-4">
                How we collect, use, and protect your personal information.
              </p>
              <Link to="/privacy" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Read Privacy Policy →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="policy-card p-6 rounded-xl cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Data Processing</h3>
              <p className="text-white/70 text-sm mb-4">
                Details about our data processing activities and procedures.
              </p>
              <Link to="/data-processing" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
                Learn More →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;
