import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Check, 
  Star, 
  Zap, 
  Crown, 
  Rocket, 
  Shield,
  ArrowRight,
  Sparkles,
  Users,
  BarChart3,
  Globe,
  Brain,
  Phone,
  Mail,
  MessageCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import '../App.css';

const UltraPremiumPricing = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [billingCycle, setBillingCycle] = useState('annual');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const plans = [
    {
      name: "Launch",
      subtitle: "MVP-stage solo/small team founders",
      icon: Rocket,
      gradient: "from-green-400 to-emerald-500",
      monthlyPrice: 24,
      annualPrice: 288,
      popular: false,
      savings: "Save 17%",
      features: [
        "AI Co-Builders (Basic)",
        "Stage-Aware Smart Onboarding",
        "MVP Dashboard: Tasks, Runway, KPIs",
        "5 Team Members",
        "Community Access",
        "Co-Founder & Stack Builder",
        "Founder Momentum Tracker (Lite)",
        "Gamified Progress System (Lite)"
      ],
      highlights: [
        "Perfect for idea to MVP stage",
        "Speed-to-clarity with no fluff",
        "Gets founders hooked early"
      ],
      limitations: [
        "Limited AI capabilities",
        "Basic analytics only",
        "Standard support"
      ]
    },
    {
      name: "Scale",
      subtitle: "For post-MVP startups raising or hiring",
      icon: Zap,
      gradient: "from-blue-400 to-cyan-500",
      monthlyPrice: 83,
      annualPrice: 996,
      popular: true,
      savings: "Save 17%",
      features: [
        "AI Co-Builders (Advanced)",
        "Full Execution System (GTM, Hiring, Fundraising Playbooks)",
        "Advanced Analytics + Insights",
        "25 Team Members",
        "Fractional CXO Marketplace Access",
        "Investor Data Room Builder",
        "Custom KPI Builder",
        "Momentum Tracker (Full)"
      ],
      highlights: [
        "Most popular choice",
        "Growth with insights",
        "Gives serious unfair leverage"
      ],
      limitations: []
    },
    {
      name: "Enterprise",
      subtitle: "For scale-ups and funded companies with ops complexity",
      icon: Crown,
      gradient: "from-purple-400 to-pink-500",
      monthlyPrice: 166,
      annualPrice: 1992,
      popular: false,
      savings: "Save 17%",
      features: [
        "AI Co-Builders (Enterprise)",
        "Unlimited Team Members",
        "Dedicated CXO Network Access",
        "Real-Time Intelligence Dashboard (Portfolio View)",
        "Execution Contracts Engine",
        "Outcome-Based Billing System",
        "Custom integrations, smart alerts, etc.",
        "All features from Scale Plan"
      ],
      highlights: [
        "High-performance Scale",
        "Designed for Personalization",
        "Scales with your complexity"
      ],
      limitations: []
    },
    {
      name: "Institution",
      subtitle: "For VCs, Accelerators, Communities, and Ecosystems",
      icon: Shield,
      gradient: "from-gray-400 to-slate-500",
      monthlyPrice: null,
      annualPrice: null,
      popular: false,
      savings: "Custom pricing",
      features: [
        "Everything in Enterprise Plan",
        "Co-Branded OS for Startups",
        "Portfolio Command Center",
        "Custom AI Training + Playbooks",
        "Community Leader Admin Panel",
        "SLA Guarantees & Dedicated Infra",
        "Copilot Workspace",
        "API & Integration Suite",
        "Dedicated Partner Success Team"
      ],
      highlights: [
        "Power Network at scale",
        "Full-blown startup enabler",
        "For leading VCs and Founders"
      ],
      limitations: []
    }
  ];

  const addOns = [
    {
      name: "Additional CXO Engagements",
      description: "Outcome-based pricing for fractional CXO services",
      price: "Custom",
      icon: Users,
      popular: true
    },
    {
      name: "Custom Copilot Training",
      description: "Custom AI model training on your startup's data and workflows",
      price: 1500,
      icon: Brain
    },
    {
      name: "Advanced KPI Modules",
      description: "ESG, Carbon, AI Readiness and other specialized KPIs",
      price: 19,
      icon: BarChart3
    },
    {
      name: "Dedicated Onboarding Coach",
      description: "Personal onboarding coach for strategic setup and guidance",
      price: 299,
      icon: Globe
    }
  ];

  const faqs = [
    {
      question: "How does the AI Copilot actually work?",
      answer: "Our AI Copilots are domain-specific AI agents trained on startup best practices and your company data. They don't just provide suggestions—they execute tasks like financial modeling, hiring workflows, and go-to-market strategies. Each copilot integrates directly into your workflows and learns from your team's patterns."
    },
    {
      question: "What makes StartupOS different from other startup tools?",
      answer: "StartupOS is the only platform that grows with your startup. Unlike static tools, we unlock new features and capabilities as you hit growth milestones. Our AI copilots execute tasks rather than just providing advice, and our fractional CXO network provides expert leadership on-demand."
    },
    {
      question: "How does the fractional CXO matching work?",
      answer: "Our AI analyzes your startup's stage, industry, goals, and culture to match you with the perfect fractional executives. All CXOs in our network are vetted and have proven track records. You work with them on outcome-based contracts with clear deliverables and timelines."
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at your next billing cycle. We'll prorate any charges and ensure a smooth transition without losing your data or progress."
    },
    {
      question: "What kind of support do you provide?",
      answer: "Support varies by plan: Seedling gets email support, Sprinter gets priority chat support, Scaler gets white-glove support with a dedicated success manager, and Enterprise gets 24/7 phone support with SLA guarantees. All plans include our comprehensive knowledge base and community forums."
    },
    {
      question: "Is my startup data secure?",
      answer: "Absolutely. We maintain SOC 2 Type II compliance, use end-to-end encryption, and follow enterprise-grade security practices. Your data is never shared with other startups or third parties. Enterprise plans include additional security controls and compliance certifications."
    }
  ];

  const getPrice = (plan) => {
    if (!plan.monthlyPrice) return "Custom";
    return billingCycle === 'monthly' ? plan.monthlyPrice : Math.round(plan.annualPrice / 12);
  };

  const getSavings = (plan) => {
    if (!plan.monthlyPrice) return 0;
    return Math.round(((plan.monthlyPrice * 12 - plan.annualPrice) / (plan.monthlyPrice * 12)) * 100);
  };

  return (
    <section ref={containerRef} id="pricing" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/20 to-slate-900" />
      
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-medium">Worth Less than Your Startup's Valuation</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="ultra-text-gradient">Worth Less than Your Startup's Valuation</span>
            <br />
            <span className="text-white">Pricing</span>
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed mb-12">
            Choose the plan that grows with your startup. From idea to scale, we've got you covered 
            with transparent pricing and no hidden fees.
          </p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center space-x-4"
          >
            <span className={`font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-white/60'}`}>
              Monthly
            </span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                billingCycle === 'annual' ? 'bg-blue-500' : 'bg-white/20'
              }`}
            >
              <motion.div
                animate={{ x: billingCycle === 'annual' ? 32 : 4 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="absolute top-1 w-6 h-6 bg-white rounded-full"
              />
            </motion.button>
            <span className={`font-medium ${billingCycle === 'annual' ? 'text-white' : 'text-white/60'}`}>
              Annual
            </span>
            {billingCycle === 'annual' && (
              <motion.span
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500 text-white text-sm font-medium px-3 py-1 rounded-full"
              >
                Save 20%
              </motion.span>
            )}
          </motion.div>
        </motion.div>

        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center shadow-lg">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Start Free</h3>
              <p className="text-white/70">No credit card required. Start building your startup immediately.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-500 flex items-center justify-center shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Scale Smart</h3>
              <p className="text-white/70">Upgrade anytime. Your data and progress stay with you.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center shadow-lg">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Grow Together</h3>
              <p className="text-white/70">Join 10,000+ founders building the future.</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`ultra-card relative ${plan.popular ? 'ring-2 ring-blue-400/50 shadow-xl shadow-blue-500/25' : ''}`}
            >
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm font-medium px-6 py-2 rounded-full shadow-lg">
                    Most Popular
                  </div>
                </motion.div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${plan.gradient} flex items-center justify-center shadow-lg`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-white/60 text-sm mb-6">{plan.subtitle}</p>
                
                <div className="mb-6">
                  {plan.monthlyPrice ? (
                    <>
                      <div className="flex items-baseline justify-center">
                        <span className="text-4xl font-bold text-white">${getPrice(plan)}</span>
                        <span className="text-white/60 ml-1">/month</span>
                      </div>
                      {billingCycle === 'annual' && (
                        <div className="mt-2">
                          <p className="text-white/60 text-sm">
                            Billed annually (${plan.annualPrice}/year)
                          </p>
                          <p className="text-green-400 text-sm font-medium mt-1">
                            {plan.savings}
                          </p>
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-3xl font-bold text-white">Custom Pricing</div>
                  )}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                {plan.highlights.map((highlight, highlightIndex) => (
                  <div key={highlightIndex} className="flex items-center space-x-2 mb-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-white/70 text-sm">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-white/80 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-full font-medium transition-all duration-200 ${
                  plan.popular
                    ? 'ultra-button shadow-lg shadow-blue-500/25'
                    : 'border border-white/20 text-white hover:bg-white/10'
                }`}
              >
                {plan.monthlyPrice ? 'Start Free Trial' : 'Contact Sales'}
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Premium Add-ons</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Enhance your StartupOS experience with these premium add-ons available for all plans.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`ultra-glass p-6 rounded-xl text-center ${addon.popular ? 'ring-2 ring-blue-400/50' : ''}`}
              >
                {addon.popular && (
                  <div className="absolute -top-2 right-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                      Popular
                    </div>
                  </div>
                )}
                <addon.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">{addon.name}</h4>
                <p className="text-white/60 text-sm mb-4">{addon.description}</p>
                <div className="text-2xl font-bold text-white mb-4">
                  {typeof addon.price === 'number' ? `$${addon.price}/mo` : addon.price}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors duration-200 text-sm font-medium"
                >
                  Add to Plan
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Social Proof */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Trusted by 10,000+ Founders</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Join the fastest-growing community of startup founders building the future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="ultra-glass p-8 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">$2.1B+</div>
              <div className="text-white/70 mb-4">Total Funding Raised</div>
              <div className="text-green-400 text-sm font-medium">By our founders</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="ultra-glass p-8 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <div className="text-white/70 mb-4">Successful Exits</div>
              <div className="text-green-400 text-sm font-medium">From our community</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="ultra-glass p-8 rounded-xl text-center"
            >
              <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
              <div className="text-white/70 mb-4">Average Rating</div>
              <div className="text-green-400 text-sm font-medium">From 2,000+ reviews</div>
            </motion.div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h3>
            <p className="text-white/70 max-w-2xl mx-auto">
              Everything you need to know about StartupOS pricing and features.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.0 + index * 0.1 }}
                className="ultra-glass rounded-xl overflow-hidden"
              >
                <motion.button
                  whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between"
                >
                  <span className="text-white font-medium">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-white/60" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-white/60" />
                  )}
                </motion.button>
                
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-white/70 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="ultra-glass rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Build Your Startup?
            </h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Join 10,000+ founders who've already started their journey. Our team is here to help you choose the perfect plan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="ultra-button flex items-center space-x-2 shadow-lg shadow-blue-500/25"
              >
                <Rocket className="w-5 h-5" />
                <span>Start Free Trial</span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-8 py-4 border border-white/20 rounded-full text-white hover:bg-white/10 transition-colors duration-200 font-medium"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat with Sales</span>
              </motion.button>
            </div>

            <p className="text-white/50 text-sm mt-6">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UltraPremiumPricing;

