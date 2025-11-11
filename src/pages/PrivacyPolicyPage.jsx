import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, Database, User, Mail, Phone, Globe } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white text-gray-900">
      <SEOHead
        title="Privacy Policy - The Meet Patel"
        description="Privacy Policy for The Meet Patel's personal website. Learn how we collect, use, and protect your personal information."
        keywords="privacy policy, data protection, personal information, GDPR, privacy rights"
        canonical="https://themeetpatel.in/privacy-policy"
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
              <Shield className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mb-4 sm:mb-0 sm:mr-4" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center sm:text-left">Privacy Policy</h1>
            </div>
            <p className="text-lg sm:text-xl text-purple-600 max-w-3xl mx-auto px-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
              <Eye className="w-6 h-6 mr-3 text-purple-600" />
              1. Information We Collect
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>We collect information you provide directly to us, such as when you:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fill out our contact forms</li>
                <li>Subscribe to our newsletter</li>
                <li>Join our WhatsApp community</li>
                <li>Communicate with us via email or social media</li>
              </ul>
              <p><strong>Types of information we collect:</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Name and contact information (email, phone number)</li>
                <li>Professional information (company, role, LinkedIn profile)</li>
                <li>Communication preferences and interests</li>
                <li>Website usage data and analytics</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center mt-8">
              <Database className="w-6 h-6 mr-3 text-purple-600" />
              2. How We Use Your Information
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Send you newsletters and updates about our services</li>
                <li>Improve our website and user experience</li>
                <li>Analyze website traffic and user behavior</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center mt-8">
              <Lock className="w-6 h-6 mr-3 text-purple-600" />
              3. Information Sharing and Disclosure
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>When required by law or legal process</li>
                <li>To protect our rights and prevent fraud</li>
                <li>With service providers who assist in website operations (under strict confidentiality agreements)</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center mt-8">
              <Shield className="w-6 h-6 mr-3 text-purple-600" />
              4. Data Security
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.</p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center mt-8">
              <User className="w-6 h-6 mr-3 text-purple-600" />
              5. Your Rights
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access and update your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
                <li>Request data portability</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center mt-8">
              <Globe className="w-6 h-6 mr-3 text-purple-600" />
              6. Cookies and Tracking
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>We use cookies and similar technologies to enhance your browsing experience. You can control cookie settings through your browser preferences. For more details, see our <Link to="/cookie-policy" className="text-purple-600 hover:text-purple-500">Cookie Policy</Link>.</p>
              </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center mt-8">
              <Mail className="w-6 h-6 mr-3 text-purple-600" />
              7. Contact Us
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>If you have any questions about this Privacy Policy, please contact us:</p>
              <div className="bg-white/80 rounded-xl p-4 sm:p-6 border border-purple-200/50">
                <p><strong>Email:</strong> the.meetpatell@gmail.com</p>
                <p><strong>Phone:</strong> +971 54 754 1414</p>
                <p><strong>Location:</strong> Dubai, UAE</p>
              </div>
            </div>

            <div className="mt-8 p-4 sm:p-6 bg-purple-600/10 rounded-xl border border-purple-600/20">
              <p className="text-purple-600 text-sm">
                <strong>Note:</strong> This Privacy Policy may be updated from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>
          </div>
        </motion.div>
        </div>
    </div>
  );
};

export default PrivacyPolicyPage; 
