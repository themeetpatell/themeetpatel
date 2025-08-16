import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  User, 
  Building2, 
  Phone, 
  Globe, 
  Send, 
  CheckCircle, 
  XCircle,
  Users,
  Rocket,
  Zap
} from 'lucide-react';

const WaitlistForm = ({ 
  variant = 'primary', 
  size = 'default', 
  showIcon = true,
  className = '',
  onSuccess = null 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    website: '',
    role: '',
    stage: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Store in localStorage for demo purposes
      const existingWaitlist = JSON.parse(localStorage.getItem('startupos_waitlist') || '[]');
      const newEntry = {
        ...formData,
        id: Date.now(),
        submittedAt: new Date().toISOString(),
        status: 'pending'
      };
      localStorage.setItem('startupos_waitlist', JSON.stringify([...existingWaitlist, newEntry]));
      
      setSubmitSuccess(true);
      setFormData({
        firstName: '', lastName: '', email: '', company: '', phone: '', 
        website: '', role: '', stage: '', message: ''
      });
      
      if (onSuccess) onSuccess(newEntry);
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
        setIsOpen(false);
      }, 3000);
      
    } catch (error) {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getButtonStyles = () => {
    const baseStyles = "inline-flex items-center space-x-2 font-semibold rounded-xl transition-all duration-300 hover:scale-105";
    
    if (variant === 'primary') {
      return `${baseStyles} bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 shadow-lg hover:shadow-blue-500/25`;
    } else if (variant === 'secondary') {
      return `${baseStyles} bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 shadow-lg hover:shadow-purple-500/25`;
    } else if (variant === 'outline') {
      return `${baseStyles} border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-6 py-3`;
    }
    
    return baseStyles;
  };

  const getSizeStyles = () => {
    if (size === 'small') return 'px-4 py-2 text-sm';
    if (size === 'large') return 'px-8 py-4 text-lg';
    return 'px-6 py-3 text-base';
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`${getButtonStyles()} ${getSizeStyles()} ${className}`}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {showIcon && <Users className="w-5 h-5" />}
        <span>Join Waitlist</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-black/90 backdrop-blur-xl border border-blue-500/20 rounded-2xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-blue-500/20 p-6 rounded-t-2xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Rocket className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">Join the StartupOS Waitlist</h2>
                      <p className="text-blue-300">Be among the first to experience the future of startup building</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <XCircle className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <div className="p-6">
                {submitSuccess ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Welcome to the Waitlist! 🚀</h3>
                    <p className="text-blue-300 mb-6">
                      You've successfully joined the StartupOS waitlist. We'll notify you as soon as we're ready to onboard new users.
                    </p>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
                      <p className="text-blue-300 text-sm">
                        <strong>What's next?</strong> We'll send you exclusive updates, early access opportunities, and insights about StartupOS development.
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-blue-300 mb-2">
                          First Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-400" />
                          <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                            placeholder="Enter your first name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-blue-300 mb-2">
                          Last Name *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-400" />
                          <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-blue-300 mb-2">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-400" />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-blue-300 mb-2">
                          Phone Number
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                            placeholder="+1 (555) 123-4567"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-blue-300 mb-2">
                          Company Name *
                        </label>
                        <div className="relative">
                          <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-400" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                            placeholder="Your company name"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-blue-300 mb-2">
                          Website
                        </label>
                        <div className="relative">
                          <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-400" />
                          <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleInputChange}
                            className="w-full pl-10 pr-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                            placeholder="https://yourcompany.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Role and Stage */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-blue-300 mb-2">
                          Your Role *
                        </label>
                        <select
                          name="role"
                          value={formData.role}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                        >
                          <option value="">Select your role</option>
                          <option value="founder">Founder</option>
                          <option value="co-founder">Co-Founder</option>
                          <option value="ceo">CEO</option>
                          <option value="cto">CTO</option>
                          <option value="product-manager">Product Manager</option>
                          <option value="startup-employee">Startup Employee</option>
                          <option value="investor">Investor</option>
                          <option value="advisor">Advisor</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-blue-300 mb-2">
                          Startup Stage *
                        </label>
                        <select
                          name="stage"
                          value={formData.stage}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                        >
                          <option value="">Select startup stage</option>
                          <option value="idea">Idea Stage</option>
                          <option value="mvp">MVP Development</option>
                          <option value="pmf">Product-Market Fit</option>
                          <option value="scaling">Scaling</option>
                          <option value="exit">Exit Planning</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-sm font-medium text-blue-300 mb-2">
                        Additional Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none"
                        placeholder="Tell us about your startup journey, challenges, or what you're looking for..."
                      />
                    </div>

                    {/* Error Message */}
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 flex items-center space-x-3"
                      >
                        <XCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
                        <p className="text-red-400 text-sm">{submitError}</p>
                      </motion.div>
                    )}

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Joining Waitlist...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Join Waitlist</span>
                        </>
                      )}
                    </motion.button>

                    {/* Benefits */}
                    <div className="bg-blue-500/5 border border-blue-500/10 rounded-xl p-4">
                      <h4 className="text-sm font-semibold text-blue-300 mb-3 flex items-center space-x-2">
                        <Zap className="w-4 h-4" />
                        <span>What you'll get:</span>
                      </h4>
                      <ul className="text-xs text-blue-300/80 space-y-1">
                        <li>• Early access to StartupOS platform</li>
                        <li>• Exclusive founder resources and insights</li>
                        <li>• Priority onboarding and support</li>
                        <li>• Special pricing for early adopters</li>
                      </ul>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WaitlistForm;
