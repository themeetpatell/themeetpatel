import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Save, 
  Eye, 
  EyeOff, 
  Send, 
  Edit3, 
  FileText, 
  Tag, 
  Image, 
  Settings,
  Calendar,
  User,
  Globe,
  Target,
  CheckCircle,
  XCircle,
  AlertCircle,
  Plus,
  Trash2,
  Copy,
  Download,
  Upload
} from 'lucide-react';
import blogDatabase from './BlogDatabase';

const BlogEditor = ({ 
  blogId = null, 
  onSave = null, 
  onCancel = null,
  isOpen = false,
  onClose = () => {}
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState('');
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    tags: [],
    seoTitle: '',
    seoDescription: '',
    seoKeywords: '',
    coverImage: '',
    coverImageAlt: '',
    featured: false
  });

  const [newTag, setNewTag] = useState('');

  // Load existing blog data if editing
  useEffect(() => {
    if (blogId) {
      const existingBlog = blogDatabase.getBlogById(blogId);
      if (existingBlog) {
        setFormData({
          title: existingBlog.title || '',
          excerpt: existingBlog.excerpt || '',
          content: existingBlog.content || '',
          category: existingBlog.category || '',
          tags: existingBlog.tags || [],
          seoTitle: existingBlog.seoTitle || '',
          seoDescription: existingBlog.seoDescription || '',
          seoKeywords: existingBlog.seoKeywords || '',
          coverImage: existingBlog.coverImage || '',
          coverImageAlt: existingBlog.coverImageAlt || '',
          featured: existingBlog.featured || false
        });
      }
    }
  }, [blogId]);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSave = async (status = 'draft') => {
    setIsSubmitting(true);
    setSaveError('');

    try {
      const blogData = {
        ...formData,
        author: "The Meet Patel",
        authorAvatar: "/src/assets/themeetpatel.jpeg",
        readTime: calculateReadTime(formData.content),
        status: status
      };

      let savedBlog;
      if (blogId) {
        savedBlog = blogDatabase.updateBlog(blogId, blogData);
      } else {
        savedBlog = blogDatabase.addBlog(blogData);
      }

      if (savedBlog) {
        setSaveSuccess(true);
        if (onSave) onSave(savedBlog);
        
        // Auto-hide success message
        setTimeout(() => {
          setSaveSuccess(false);
          if (status === 'published') {
            onClose();
          }
        }, 3000);
      } else {
        throw new Error('Failed to save blog');
      }
    } catch (error) {
      setSaveError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateReadTime = (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  const handlePublish = () => {
    handleSave('published');
  };

  const handleSaveDraft = () => {
    handleSave('draft');
  };

  const categories = [
    'AI & Technology',
    'Product Development',
    'Startup Strategy',
    'Fundraising',
    'Marketing & Growth',
    'Team Building',
    'Community Building',
    'Leadership',
    'Innovation',
    'Case Studies'
  ];

  const renderMarkdownPreview = (content) => {
    // Simple markdown rendering for preview
    return content
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-white mb-3">$1</h3>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-white mb-4">$1</h2>')
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-white mb-6">$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-white/80">$1</em>')
      .replace(/^- (.*$)/gim, '<li class="text-white/70 mb-2">$1</li>')
      .replace(/\n\n/g, '<br><br>')
      .replace(/\n/g, '<br>');
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full max-w-7xl max-h-[95vh] overflow-y-auto bg-black/90 backdrop-blur-xl border border-blue-500/20 rounded-2xl shadow-2xl"
      >
        {/* Header */}
        <div className="sticky top-0 bg-black/80 backdrop-blur-xl border-b border-blue-500/20 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">
                  {blogId ? 'Edit Blog Post' : 'Create New Blog Post'}
                </h2>
                <p className="text-blue-300">
                  {blogId ? 'Update your existing blog post' : 'Write and publish your next blog post'}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setShowPreview(!showPreview)}
                className="flex items-center space-x-2 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              >
                {showPreview ? <EyeOff className="w-4 h-4 text-white" /> : <Eye className="w-4 h-4 text-white" />}
                <span className="text-white text-sm">{showPreview ? 'Hide Preview' : 'Show Preview'}</span>
              </button>
              <button
                onClick={onClose}
                className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors"
              >
                <XCircle className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {saveSuccess && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-6 flex items-center space-x-3"
            >
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <p className="text-green-400 text-sm">
                Blog post saved successfully! {formData.status === 'published' ? 'Your post is now live.' : 'Draft saved.'}
              </p>
            </motion.div>
          )}

          {saveError && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6 flex items-center space-x-3"
            >
              <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" />
              <p className="text-red-400 text-sm">{saveError}</p>
            </motion.div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Editor Panel */}
            <div className="space-y-6">
              {/* Basic Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <Edit3 className="w-5 h-5 text-blue-400" />
                  <span>Basic Information</span>
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                    placeholder="Enter your blog post title..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Excerpt *
                  </label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    className="w-full px-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none"
                    placeholder="Brief description of your blog post..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-blue-300 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                    >
                      <option value="">Select category</option>
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-blue-300 mb-2">
                      Featured Post
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="featured"
                        checked={formData.featured}
                        onChange={handleInputChange}
                        className="w-5 h-5 text-blue-500 bg-white/5 border border-blue-500/20 rounded focus:ring-blue-500 focus:ring-2"
                      />
                      <span className="text-white text-sm">Mark as featured</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Tags
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center space-x-2 bg-blue-500/20 text-blue-300 px-3 py-1 rounded-lg text-sm"
                      >
                        <span>{tag}</span>
                        <button
                          type="button"
                          onClick={() => handleRemoveTag(tag)}
                          className="hover:text-red-400 transition-colors"
                        >
                          <XCircle className="w-4 h-4" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddTag()}
                      className="flex-1 px-4 py-2 bg-white/5 border border-blue-500/20 rounded-lg text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                      placeholder="Add a tag..."
                    />
                    <button
                      type="button"
                      onClick={handleAddTag}
                      className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content Editor */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-blue-400" />
                  <span>Content</span>
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Blog Content (Markdown) *
                  </label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    required
                    rows={20}
                    className="w-full px-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none font-mono text-sm"
                    placeholder="# Your Blog Post Title

## Introduction

Start writing your blog post content here using Markdown formatting...

### Key Points

- Point 1
- Point 2
- Point 3

## Conclusion

Wrap up your thoughts here..."
                  />
                  <div className="mt-2 text-xs text-blue-300/60">
                    Use Markdown formatting. # for H1, ## for H2, ### for H3, **bold**, *italic*, - for lists
                  </div>
                </div>
              </div>

              {/* SEO Settings */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <Target className="w-5 h-5 text-blue-400" />
                  <span>SEO Settings</span>
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    SEO Title
                  </label>
                  <input
                    type="text"
                    name="seoTitle"
                    value={formData.seoTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                    placeholder="SEO-optimized title for search engines..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    SEO Description
                  </label>
                  <textarea
                    name="seoDescription"
                    value={formData.seoDescription}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all resize-none"
                    placeholder="Brief description for search engine results..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    SEO Keywords
                  </label>
                  <input
                    type="text"
                    name="seoKeywords"
                    value={formData.seoKeywords}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                    placeholder="Keywords separated by commas..."
                  />
                </div>
              </div>

              {/* Media */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <Image className="w-5 h-5 text-blue-400" />
                  <span>Media</span>
                </h3>
                
                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Cover Image URL
                  </label>
                  <input
                    type="url"
                    name="coverImage"
                    value={formData.coverImage}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                    placeholder="https://example.com/image.jpg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-300 mb-2">
                    Cover Image Alt Text
                  </label>
                  <input
                    type="text"
                    name="coverImageAlt"
                    value={formData.coverImageAlt}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
                    placeholder="Descriptive text for accessibility..."
                  />
                </div>
              </div>
            </div>

            {/* Preview Panel */}
            {showPreview && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-white flex items-center space-x-2">
                  <Eye className="w-5 h-5 text-blue-400" />
                  <span>Preview</span>
                </h3>
                
                <div className="bg-white/5 border border-blue-500/20 rounded-xl p-6 max-h-[600px] overflow-y-auto">
                  {formData.title && (
                    <h1 className="text-3xl font-bold text-white mb-4">{formData.title}</h1>
                  )}
                  
                  {formData.excerpt && (
                    <p className="text-blue-300 text-lg mb-6">{formData.excerpt}</p>
                  )}
                  
                  {formData.content && (
                    <div 
                      className="prose prose-invert prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: renderMarkdownPreview(formData.content) }}
                    />
                  )}
                  
                  {!formData.title && !formData.content && (
                    <div className="text-center py-12">
                      <FileText className="w-16 h-16 text-blue-400/40 mx-auto mb-4" />
                      <p className="text-blue-300/60">Start writing to see a preview of your blog post</p>
                    </div>
                  )}
                </div>

                {/* Post Stats */}
                <div className="bg-white/5 border border-blue-500/20 rounded-xl p-4">
                  <h4 className="text-sm font-semibold text-blue-300 mb-3">Post Statistics</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-white/60">Read Time:</span>
                      <span className="text-white ml-2">{calculateReadTime(formData.content)}</span>
                    </div>
                    <div>
                      <span className="text-white/60">Word Count:</span>
                      <span className="text-white ml-2">{formData.content.split(/\s+/).length}</span>
                    </div>
                    <div>
                      <span className="text-white/60">Category:</span>
                      <span className="text-white ml-2">{formData.category || 'Not set'}</span>
                    </div>
                    <div>
                      <span className="text-white/60">Tags:</span>
                      <span className="text-white ml-2">{formData.tags.length}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-6 border-t border-blue-500/20">
            <div className="flex items-center space-x-3">
              <button
                onClick={handleSaveDraft}
                disabled={isSubmitting}
                className="flex items-center space-x-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl transition-colors disabled:opacity-50"
              >
                <Save className="w-4 h-4" />
                <span>Save Draft</span>
              </button>
              
              <button
                onClick={onCancel}
                className="px-6 py-3 border border-white/20 text-white hover:bg-white/10 rounded-xl transition-colors"
              >
                Cancel
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={handlePublish}
                disabled={isSubmitting || !formData.title || !formData.content || !formData.category}
                className="flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-blue-500/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Publishing...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Publish Now</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BlogEditor;
