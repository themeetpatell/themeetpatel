import React, { useState, useEffect } from 'react';
import { X, Sparkles, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';

const SubstackSubscriptionModal = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('substackModalSeen');
    const lastSeenDate = localStorage.getItem('substackModalDate');
    const today = new Date().toDateString();

    if (!hasSeenModal || lastSeenDate !== today) {
      const timer = setTimeout(() => {
        setOpen(true);
      }, 5000);

      return () => clearTimeout(timer);
    }

    window.showSubstackModal = () => setOpen(true);
    window.resetSubstackModal = () => {
      localStorage.removeItem('substackModalSeen');
      localStorage.removeItem('substackModalDate');
    };
  }, []);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem('substackModalSeen', 'true');
    localStorage.setItem('substackModalDate', new Date().toDateString());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          to_email: 'the.meetpatell@gmail.com',
          from_name: email,
          form_type: 'NEWSLETTER SUBSCRIPTION',
          email: email,
          subject: 'Newsletter Subscription',
          message: `New newsletter subscription from: ${email}`,
          reply_to: email,
          timestamp: new Date().toLocaleString(),
        }
      );

      localStorage.setItem('formSubmissions', JSON.stringify([
        ...JSON.parse(localStorage.getItem('formSubmissions') || '[]'),
        {
          timestamp: new Date().toISOString(),
          formType: 'newsletter',
          data: { email }
        }
      ]));

      handleClose();
      window.open('https://themeetpatell.substack.com/', '_blank');
    } catch (error) {
      console.error('Subscription error:', error);
      alert('Subscription failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <>
      {/* Backdrop Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
        onClick={handleClose}
      />
      
      {/* Popup Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        <div 
          className="relative w-full max-w-[480px] bg-black/90 backdrop-blur-xl border border-blue-500/30 rounded-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl" />
          
          {/* Content */}
          <div className="relative">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-gray-400 hover:text-white hover:bg-black transition-all hover:scale-110"
              aria-label="Close"
            >
              <X size={22} />
            </button>

            <div className="p-8">
              {/* Icon */}
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg animate-pulse">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h2 className="text-3xl font-bold text-center mb-3">
                <span className="ultra-text-gradient">
                  Join the Journey
                </span>
              </h2>
              
              {/* Subtitle */}
              <p className="text-gray-300 text-center text-base mb-8 leading-relaxed">
                Get exclusive insights, behind-the-scenes updates, and premium content delivered directly to your inbox
              </p>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full pl-12 pr-4 py-4 bg-black/50 border border-blue-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="ultra-button w-full relative overflow-hidden py-4 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Subscribing...
                    </span>
                  ) : (
                    'Subscribe Now'
                  )}
                </button>
              </form>

              {/* Footer Text */}
              <p className="text-xs text-gray-500 text-center mt-6">
                ✨ No spam. Unsubscribe anytime. ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubstackSubscriptionModal;

