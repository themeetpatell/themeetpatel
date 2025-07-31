import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FileText,
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

const TermsOfServicePage = () => {
  const lastUpdated = "January 15, 2024";

  return (
    <div className="min-h-screen pt-16 ultra-gradient-bg">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-blue-900/20 to-slate-900" />
        
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
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full px-6 py-3 mb-8"
            >
              <FileText className="w-5 h-5 text-blue-400" />
              <span className="text-blue-400 font-medium">Legal & Compliance</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Terms of Service
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-8">
              These terms govern your use of StartupOS and outline the rules, rights, and responsibilities 
              for all users of our platform.
            </p>

            <div className="flex items-center justify-center space-x-4 text-white/60 text-sm">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Last updated: {lastUpdated}</span>
              </div>
              <span>•</span>
              <div className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span>Version 1.2</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="ultra-glass p-8 rounded-xl"
          >
            <div className="prose prose-invert prose-lg max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>By accessing and using StartupOS ("the Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>

              <h2>2. Description of Service</h2>
              <p>StartupOS provides a comprehensive platform for startup development, including but not limited to:</p>
              <ul>
                <li>AI-powered co-building tools and resources</li>
                <li>Ecosystem access and networking opportunities</li>
                <li>Stage-aware gamification and progress tracking</li>
                <li>Real-time analytics and insights</li>
                <li>Fractional CXO services and mentorship</li>
                <li>Mergers and acquisition support</li>
              </ul>

              <h2>3. User Accounts and Registration</h2>
              <h3>3.1 Account Creation</h3>
              <p>To access certain features of the Service, you must create an account. You agree to:</p>
              <ul>
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your account credentials secure and confidential</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use</li>
              </ul>

              <h3>3.2 Account Termination</h3>
              <p>We reserve the right to terminate or suspend your account at any time for violations of these terms or for any other reason at our sole discretion.</p>

              <h2>4. Acceptable Use Policy</h2>
              <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
              <ul>
                <li>Use the Service for any illegal or unauthorized purpose</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon the rights of others</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the Service</li>
                <li>Share false or misleading information</li>
                <li>Use the Service to spam or harass others</li>
                <li>Reverse engineer or attempt to extract source code</li>
              </ul>

              <h2>5. Intellectual Property Rights</h2>
              <h3>5.1 Our Rights</h3>
              <p>The Service and its original content, features, and functionality are owned by StartupOS and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.</p>

              <h3>5.2 Your Rights</h3>
              <p>You retain ownership of any content you create or upload to the Service. By uploading content, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content in connection with the Service.</p>

              <h3>5.3 Third-Party Content</h3>
              <p>The Service may contain content from third parties. We are not responsible for the accuracy or reliability of such content.</p>

              <h2>6. Privacy and Data Protection</h2>
              <p>Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.</p>

              <h2>7. Payment Terms</h2>
              <h3>7.1 Subscription Services</h3>
              <p>Some features of the Service require a paid subscription. By subscribing, you agree to:</p>
              <ul>
                <li>Pay all fees in advance</li>
                <li>Provide accurate billing information</li>
                <li>Authorize recurring charges</li>
                <li>Notify us of any billing disputes within 30 days</li>
              </ul>

              <h3>7.2 Refunds and Cancellations</h3>
              <p>Subscription fees are non-refundable except as required by law. You may cancel your subscription at any time, but no refunds will be provided for partial periods.</p>

              <h2>8. Disclaimers and Limitations</h2>
              <h3>8.1 Service Availability</h3>
              <p>The Service is provided "as is" and "as available." We do not guarantee that the Service will be uninterrupted or error-free.</p>

              <h3>8.2 Limitation of Liability</h3>
              <p>To the maximum extent permitted by law, StartupOS shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use.</p>

              <h3>8.3 No Warranty</h3>
              <p>We make no warranties about the accuracy, reliability, completeness, or timeliness of the Service or any content therein.</p>

              <h2>9. Indemnification</h2>
              <p>You agree to indemnify and hold harmless StartupOS, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.</p>

              <h2>10. Termination</h2>
              <h3>10.1 Termination by You</h3>
              <p>You may terminate your account at any time by contacting us or using the account deletion feature in your settings.</p>

              <h3>10.2 Termination by Us</h3>
              <p>We may terminate or suspend your access to the Service immediately, without prior notice, for any reason, including breach of these Terms.</p>

              <h3>10.3 Effect of Termination</h3>
              <p>Upon termination, your right to use the Service will cease immediately. We may delete your account and data, though we may retain certain information as required by law.</p>

              <h2>11. Governing Law and Disputes</h2>
              <h3>11.1 Governing Law</h3>
              <p>These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.</p>

              <h3>11.2 Dispute Resolution</h3>
              <p>Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.</p>

              <h2>12. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms at any time. We will notify users of material changes by:</p>
              <ul>
                <li>Posting the updated terms on our website</li>
                <li>Sending email notifications to registered users</li>
                <li>Displaying prominent notices in our applications</li>
              </ul>
              <p>Your continued use of the Service after such changes constitutes acceptance of the new Terms.</p>

              <h2>13. Severability</h2>
              <p>If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that these Terms will otherwise remain in full force and effect.</p>

              <h2>14. Entire Agreement</h2>
              <p>These Terms, together with our Privacy Policy and any other legal notices published by us, constitute the entire agreement between you and StartupOS regarding the Service.</p>

              <h2>15. Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us:</p>
              
              <div className="bg-white/10 rounded-lg p-6 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-2">Email</h4>
                    <p className="text-white/70">legal@startupos.com</p>
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
                    <h4 className="text-white font-semibold mb-2">General Support</h4>
                    <p className="text-white/70">support@startupos.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg p-6 mt-8 border border-blue-500/20">
                <div className="flex items-start space-x-3">
                  <Info className="w-6 h-6 text-blue-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Important Notice</h3>
                    <p className="text-white/80">
                      These Terms of Service are effective as of {lastUpdated}. By using our Service, you acknowledge that you have read, understood, and agree to be bound by these terms and all applicable laws and regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Documents */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-6">Related Documents</h2>
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
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Acceptable Use</h3>
              <p className="text-white/70 text-sm mb-4">
                Guidelines for appropriate use of our platform and services.
              </p>
              <Link to="/acceptable-use" className="text-orange-400 hover:text-orange-300 text-sm font-medium">
                Read Guidelines →
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage; 