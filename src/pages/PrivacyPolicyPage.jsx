import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Shield,
  Lock,
  Eye,
  EyeOff,
  User,
  Mail,
  Phone,
  Globe,
  Calendar,
  Clock,
  AlertCircle,
  Info,
  HelpCircle,
  Settings,
  CheckCircle,
  XCircle,
  ArrowRight,
  ExternalLink,
  Download,
  FileText,
  Search,
  Filter,
  Grid,
  List,
  Plus,
  Minus,
  X,
  Check,
  Edit,
  Trash2,
  Save,
  Folder,
  File,
  Image,
  Video,
  Music,
  Mic,
  Camera,
  MessageCircle,
  Send,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Gift,
  ShoppingCart,
  CreditCard,
  Wallet,
  Banknote,
  Coins,
  DollarSign,
  Percent,
  TrendingUp,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  Target,
  Zap,
  Lightbulb,
  Code,
  Rocket,
  Sparkles,
  Heart,
  Share2,
  Bookmark,
  Download as DownloadIcon,
  Upload,
  RefreshCw,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Maximize2,
  Minimize2,
  Copy,
  Scissors,
  Paperclip,
  Link as LinkIcon
} from 'lucide-react';

const PrivacyPolicyPage = () => {
  const lastUpdated = "January 15, 2024";

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900" />
        
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
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full px-6 py-3 mb-8"
            >
              <Shield className="w-5 h-5 text-purple-400" />
              <span className="text-purple-400 font-medium">Privacy & Security</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
              We are committed to protecting your privacy and ensuring the security of your personal information. 
              This policy explains how we collect, use, and safeguard your data.
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
            className="ultra-glass p-8 rounded-xl"
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <h2>1. Information We Collect</h2>
              <p>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.</p>
              
              <h3>1.1 Personal Information</h3>
              <ul>
                <li>Name and contact information (email, phone number)</li>
                <li>Account credentials and profile information</li>
                <li>Payment and billing information</li>
                <li>Communication preferences and settings</li>
                <li>Feedback, comments, and support requests</li>
              </ul>

              <h3>1.2 Usage Information</h3>
              <ul>
                <li>Log data and device information</li>
                <li>Usage patterns and feature interactions</li>
                <li>Performance data and error reports</li>
                <li>Location data (with your consent)</li>
                <li>Cookies and similar technologies</li>
              </ul>

              <h2>2. How We Use Your Information</h2>
              <p>We use the information we collect to provide, improve, and personalize our services:</p>
              
              <h3>2.1 Service Provision</h3>
              <ul>
                <li>Process transactions and manage your account</li>
                <li>Provide customer support and respond to inquiries</li>
                <li>Send service-related communications</li>
                <li>Ensure security and prevent fraud</li>
              </ul>

              <h3>2.2 Service Improvement</h3>
              <ul>
                <li>Analyze usage patterns and optimize performance</li>
                <li>Develop new features and functionality</li>
                <li>Conduct research and analytics</li>
                <li>Improve user experience and interface design</li>
              </ul>

              <h3>2.3 Personalization</h3>
              <ul>
                <li>Customize content and recommendations</li>
                <li>Provide relevant features and services</li>
                <li>Tailor communications to your preferences</li>
                <li>Remember your settings and preferences</li>
              </ul>

              <h2>3. Information Sharing and Disclosure</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>

              <h3>3.1 Service Providers</h3>
              <p>We work with trusted third-party service providers who assist us in operating our platform, such as:</p>
              <ul>
                <li>Cloud hosting and infrastructure providers</li>
                <li>Payment processors and financial institutions</li>
                <li>Analytics and monitoring services</li>
                <li>Customer support and communication tools</li>
              </ul>

              <h3>3.2 Legal Requirements</h3>
              <p>We may disclose your information when required by law or to:</p>
              <ul>
                <li>Comply with legal obligations and court orders</li>
                <li>Protect our rights, property, and safety</li>
                <li>Prevent fraud and security threats</li>
                <li>Respond to government requests and investigations</li>
              </ul>

              <h3>3.3 Business Transfers</h3>
              <p>In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the business transaction.</p>

              <h2>4. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information:</p>

              <h3>4.1 Security Measures</h3>
              <ul>
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and penetration testing</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Secure development practices and code reviews</li>
                <li>Incident response and breach notification procedures</li>
              </ul>

              <h3>4.2 Data Retention</h3>
              <p>We retain your personal information for as long as necessary to:</p>
              <ul>
                <li>Provide our services and maintain your account</li>
                <li>Comply with legal obligations and regulatory requirements</li>
                <li>Resolve disputes and enforce our agreements</li>
                <li>Improve our services and develop new features</li>
              </ul>

              <h2>5. Your Rights and Choices</h2>
              <p>You have certain rights regarding your personal information:</p>

              <h3>5.1 Access and Control</h3>
              <ul>
                <li>Access and review your personal information</li>
                <li>Update and correct inaccurate information</li>
                <li>Delete your account and associated data</li>
                <li>Export your data in a portable format</li>
                <li>Opt-out of marketing communications</li>
              </ul>

              <h3>5.2 Cookie Preferences</h3>
              <p>You can control cookie settings through your browser preferences. However, disabling certain cookies may affect the functionality of our services.</p>

              <h3>5.3 Third-Party Services</h3>
              <p>Our services may integrate with third-party services. We encourage you to review their privacy policies as well.</p>

              <h2>6. International Data Transfers</h2>
              <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during international transfers.</p>

              <h2>7. Children's Privacy</h2>
              <p>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.</p>

              <h2>8. Changes to This Policy</h2>
              <p>We may update this privacy policy from time to time. We will notify you of any material changes by:</p>
              <ul>
                <li>Posting the updated policy on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Displaying prominent notices in our applications</li>
              </ul>

              <h2>9. Contact Us</h2>
              <p>If you have any questions about this privacy policy or our data practices, please contact us:</p>
              
              <div className="bg-white/10 rounded-lg p-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Email</h4>
                    <p className="text-white/70">privacy@startupos.com</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Address</h4>
                    <p className="text-white/70">123 Innovation Street<br />San Francisco, CA 94105</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Phone</h4>
                    <p className="text-white/70">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Data Protection Officer</h4>
                    <p className="text-white/70">dpo@startupos.com</p>
                  </div>
                </div>
              </div>

              <h2>10. Legal Basis for Processing (EU Users)</h2>
              <p>If you are located in the European Union, our legal basis for processing your personal information includes:</p>
              <ul>
                <li><strong>Consent:</strong> When you explicitly agree to the processing</li>
                <li><strong>Contract:</strong> To provide our services under our terms of service</li>
                <li><strong>Legitimate Interest:</strong> To improve our services and prevent fraud</li>
                <li><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</li>
              </ul>

              <h2>11. California Privacy Rights (CCPA)</h2>
              <p>If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
              <ul>
                <li>Right to know what personal information is collected and how it's used</li>
                <li>Right to delete personal information</li>
                <li>Right to opt-out of the sale of personal information</li>
                <li>Right to non-discrimination for exercising your privacy rights</li>
              </ul>

              <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg p-6 mt-8 border border-purple-500/20">
                <div className="flex items-start space-x-3">
                  <Info className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Important Notice</h3>
                    <p className="text-white/80">
                      This privacy policy is effective as of {lastUpdated}. By using our services, you acknowledge that you have read and understood this privacy policy and agree to the collection, use, and disclosure of your information as described herein.
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
              className="ultra-glass p-6 rounded-xl cursor-pointer"
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
              className="ultra-glass p-6 rounded-xl cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Cookie Policy</h3>
              <p className="text-white/70 text-sm mb-4">
                Information about how we use cookies and similar technologies.
              </p>
              <Link to="/cookies" className="text-green-400 hover:text-green-300 text-sm font-medium">
                Read Cookie Policy →
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="ultra-glass p-6 rounded-xl cursor-pointer"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Data Processing</h3>
              <p className="text-white/70 text-sm mb-4">
                Details about our data processing activities and procedures.
              </p>
              <Link to="/data-processing" className="text-purple-400 hover:text-purple-300 text-sm font-medium">
                Learn More →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage; 