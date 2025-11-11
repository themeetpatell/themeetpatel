import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Scale, AlertTriangle, Shield, Users, Globe, Mail } from 'lucide-react';
import SEOHead from '../components/SEOHead';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-white text-gray-900">
      <SEOHead
        title="Terms of Service - The Meet Patel"
        description="Terms of Service for The Meet Patel's personal website. Read our terms and conditions for using our services."
        keywords="terms of service, terms and conditions, legal terms, website terms"
        canonical="https://themeetpatel.com/terms-of-service"
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
              <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 mb-4 sm:mb-0 sm:mr-4" />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center sm:text-left">Terms of Service</h1>
            </div>
            <p className="text-lg sm:text-xl text-purple-600 max-w-3xl mx-auto px-4">
              Please read these terms and conditions carefully before using our website and services.
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
              <Scale className="w-6 h-6 mr-3 text-purple-600" />
              1. Acceptance of Terms
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center mt-8">
              <Users className="w-6 h-6 mr-3 text-purple-600" />
              2. Use License
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>Permission is granted to temporarily download one copy of the materials on The Meet Patel's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose or for any public display</li>
                <li>Attempt to reverse engineer any software contained on the website</li>
                <li>Remove any copyright or other proprietary notations from the materials</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center mt-8">
              <AlertTriangle className="w-6 h-6 mr-3 text-purple-600" />
              3. Disclaimer
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>The materials on The Meet Patel's website are provided on an 'as is' basis. The Meet Patel makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center mt-8">
              <Shield className="w-6 h-6 mr-3 text-purple-600" />
              4. Limitations
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>In no event shall The Meet Patel or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on The Meet Patel's website, even if The Meet Patel or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center mt-8">
              <FileText className="w-6 h-6 mr-3 text-purple-600" />
              5. Accuracy of Materials
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>The materials appearing on The Meet Patel's website could include technical, typographical, or photographic errors. The Meet Patel does not warrant that any of the materials on its website are accurate, complete, or current. The Meet Patel may make changes to the materials contained on its website at any time without notice. However, The Meet Patel does not make any commitment to update the materials.</p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center mt-8">
              <Globe className="w-6 h-6 mr-3 text-purple-600" />
              6. Links
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>The Meet Patel has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by The Meet Patel of the site. Use of any such linked website is at the user's own risk.</p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center mt-8">
              <Scale className="w-6 h-6 mr-3 text-purple-600" />
              7. Modifications
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>The Meet Patel may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.</p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center mt-8">
              <Users className="w-6 h-6 mr-3 text-purple-600" />
              8. User Conduct
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>You agree to use our website and services only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Use the website in any way that violates any applicable laws or regulations</li>
                <li>Transmit any harmful, threatening, abusive, or harassing content</li>
                <li>Impersonate any person or entity or misrepresent your affiliation</li>
                <li>Interfere with or disrupt the website or servers</li>
                <li>Attempt to gain unauthorized access to any part of the website</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center mt-8">
              <Shield className="w-6 h-6 mr-3 text-purple-600" />
              9. Intellectual Property
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>All content, including but not limited to text, graphics, logos, images, and software, is the property of The Meet Patel or its content suppliers and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works without written permission.</p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center mt-8">
              <Scale className="w-6 h-6 mr-3 text-purple-600" />
              10. Governing Law
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>These terms and conditions are governed by and construed in accordance with the laws of the United Arab Emirates and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.</p>
            </div>

            <h2 className="text-2xl font-bold text-white mb-4 flex items-center mt-8">
              <Mail className="w-6 h-6 mr-3 text-purple-600" />
              11. Contact Information
            </h2>
            <div className="text-gray-700 space-y-4">
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              <div className="bg-white/80 rounded-xl p-4 sm:p-6 border border-purple-200/50">
                <p><strong>Email:</strong> the.meetpatell@gmail.com</p>
                <p><strong>Phone:</strong> +971 54 754 1414</p>
                <p><strong>Location:</strong> Dubai, UAE</p>
              </div>
            </div>

            <div className="mt-8 p-4 sm:p-6 bg-purple-600/10 rounded-xl border border-purple-600/20">
              <p className="text-purple-600 text-sm">
                <strong>Note:</strong> These Terms of Service may be updated from time to time. We will notify you of any material changes by posting the new Terms of Service on this page and updating the "Last updated" date.
              </p>
              </div>
          </div>
        </motion.div>
        </div>
    </div>
  );
};

export default TermsOfServicePage; 
