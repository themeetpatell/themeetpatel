import React from 'react';
import { motion } from 'framer-motion';
import { 
  BookOpen, 
  Edit3, 
  Eye, 
  Save, 
  Share2, 
  CheckCircle,
  ArrowRight,
  X
} from 'lucide-react';

const BlogPublishingGuide = ({ onClose }) => {
  const steps = [
    {
      icon: Edit3,
      title: "Write Your Article",
      description: "Use the blog editor to write your content with markdown support for formatting.",
      details: [
        "Use # for headings (H1, H2, H3)",
        "Use **bold** and *italic* for emphasis",
        "Add bullet points with - or *",
        "Include an engaging excerpt"
      ]
    },
    {
      icon: Eye,
      title: "Preview & Edit",
      description: "Preview your article before publishing to ensure everything looks perfect.",
      details: [
        "Check formatting and layout",
        "Verify all links work correctly",
        "Review the excerpt and tags",
        "Ensure proper categorization"
      ]
    },
    {
      icon: Save,
      title: "Publish",
      description: "Save and publish your article to make it live on your blog.",
      details: [
        "Choose to publish immediately or save as draft",
        "Set featured status if it's a special article",
        "Add relevant tags for better discoverability",
        "Set appropriate read time estimate"
      ]
    },
    {
      icon: Share2,
      title: "Share & Promote",
      description: "Share your published article across your social media channels.",
      details: [
        "Share on LinkedIn, Twitter, and other platforms",
        "Use the built-in sharing buttons",
        "Engage with readers in comments",
        "Track views and engagement metrics"
      ]
    }
  ];

  const features = [
    {
      title: "Easy Content Management",
      description: "Create, edit, and delete articles with a simple interface",
      icon: BookOpen
    },
    {
      title: "Live Preview",
      description: "See exactly how your article will look before publishing",
      icon: Eye
    },
    {
      title: "SEO Optimized",
      description: "Automatic slug generation and meta tags for better search visibility",
      icon: CheckCircle
    },
    {
      title: "Analytics Ready",
      description: "Track views, likes, and engagement for each article",
      icon: Share2
    }
  ];

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-slate-900 rounded-2xl w-full max-w-4xl h-[90vh] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Blog Publishing Guide</h2>
              <p className="text-white/60">Learn how to easily publish and manage your blog content</p>
            </div>
          </div>
          
          <motion.button
            onClick={onClose}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Quick Start */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Quick Start</h3>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
              <p className="text-blue-200">
                <strong>Getting Started:</strong> Click "Manage Blog" → "New Article" → Write your content → Preview → Publish!
              </p>
            </div>
          </div>

          {/* Publishing Steps */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-6">Publishing Process</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center mt-2">
                      <span className="text-2xl font-bold text-blue-400">{index + 1}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white mb-2">{step.title}</h4>
                    <p className="text-white/70 mb-3">{step.description}</p>
                    <ul className="space-y-1">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center space-x-2 text-white/60 text-sm">
                          <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-6">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 rounded-lg p-4"
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <feature.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <h4 className="font-semibold text-white">{feature.title}</h4>
                  </div>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
            <h4 className="font-semibold text-yellow-400 mb-2">Pro Tips</h4>
            <ul className="space-y-1 text-yellow-200 text-sm">
              <li>• Use engaging titles that clearly describe your content</li>
              <li>• Write compelling excerpts that make people want to read more</li>
              <li>• Add relevant tags to improve discoverability</li>
              <li>• Preview your articles before publishing to catch any issues</li>
              <li>• Use featured articles to highlight your best content</li>
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-white/10">
          <div className="flex items-center justify-between">
            <p className="text-white/60 text-sm">
              Ready to start publishing? Click "Manage Blog" to get started!
            </p>
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <span>Got it!</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default BlogPublishingGuide;
