import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Save, 
  Eye, 
  Upload, 
  X, 
  Plus, 
  Trash2, 
  Edit3, 
  BookOpen,
  Calendar,
  Tag,
  User,
  Clock,
  Star
} from 'lucide-react';
import { addArticle, updateArticle, deleteArticle, getPublishedArticles } from '../data/blogData';

const BlogEditor = ({ onClose, editingArticle = null }) => {
  const [formData, setFormData] = useState({
    title: editingArticle?.title || '',
    excerpt: editingArticle?.excerpt || '',
    content: editingArticle?.content || '',
    category: editingArticle?.category || 'Entrepreneurship',
    tags: editingArticle?.tags?.join(', ') || '',
    featured: editingArticle?.featured || false,
    published: editingArticle?.published || true,
    readTime: editingArticle?.readTime || '5 min read'
  });

  const [isPreview, setIsPreview] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const categories = [
    'Entrepreneurship',
    'Personal Growth', 
    'Writing & Books',
    'Leadership'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTagsChange = (e) => {
    const tags = e.target.value.split(',').map(tag => tag.trim()).filter(tag => tag);
    setFormData(prev => ({ ...prev, tags: e.target.value }));
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleSave = async () => {
    setIsSaving(true);
    
    try {
      const articleData = {
        ...formData,
        slug: generateSlug(formData.title),
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        author: 'The Meet Patel',
        date: new Date().toISOString().split('T')[0],
        views: editingArticle?.views || 0,
        likes: editingArticle?.likes || 0
      };

      if (editingArticle) {
        updateArticle(editingArticle.id, articleData);
      } else {
        addArticle(articleData);
      }

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      onClose(true); // Pass true to indicate success
    } catch (error) {
      console.error('Error saving article:', error);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async () => {
    if (editingArticle) {
      deleteArticle(editingArticle.id);
      onClose(true);
    }
  };

  const formatContent = (content) => {
    return content
      .replace(/\n/g, '<br>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^# (.*$)/gm, '<h1>$1</h1>');
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-slate-900 rounded-2xl w-full max-w-6xl h-[90vh] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
              <h2 className="text-xl font-bold text-white">
                {editingArticle ? 'Edit Article' : 'Create New Article'}
                </h2>
              <p className="text-white/60 text-sm">
                {editingArticle ? 'Update your blog post' : 'Write and publish a new blog post'}
                </p>
              </div>
            </div>
          
          <div className="flex items-center space-x-2">
            <motion.button
              onClick={() => setIsPreview(!isPreview)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              <Eye className="w-4 h-4" />
              <span>{isPreview ? 'Edit' : 'Preview'}</span>
            </motion.button>
            
            <motion.button
                onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
              <X className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 flex overflow-hidden">
          {/* Form */}
          {!isPreview && (
            <div className="flex-1 p-6 overflow-y-auto">
            <div className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-white font-medium mb-2">Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter article title"
                  />
                </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-white font-medium mb-2">Excerpt</label>
                  <textarea
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Brief description of the article"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-medium mb-2">Content *</label>
                  <textarea
                    name="content"
                    value={formData.content}
                    onChange={handleInputChange}
                    rows={15}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
                    placeholder="Write your article content here...

You can use:
# Heading 1
## Heading 2
### Heading 3
**Bold text**
*Italic text*
- Bullet points"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-white font-medium mb-2">Tags</label>
                    <input
                      type="text"
                      value={formData.tags}
                      onChange={handleTagsChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="tag1, tag2, tag3"
                  />
                </div>

                <div>
                    <label className="block text-white font-medium mb-2">Read Time</label>
                  <input
                    type="text"
                      name="readTime"
                      value={formData.readTime}
                    onChange={handleInputChange}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="5 min read"
                  />
                </div>
              </div>

                {/* Options */}
                <div className="flex items-center space-x-6">
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="featured"
                      checked={formData.featured}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-blue-500 bg-white/5 border-white/10 rounded focus:ring-blue-500"
                    />
                    <span className="text-white">Featured Article</span>
                  </label>
                  
                  <label className="flex items-center space-x-2">
                  <input
                      type="checkbox"
                      name="published"
                      checked={formData.published}
                    onChange={handleInputChange}
                      className="w-4 h-4 text-blue-500 bg-white/5 border-white/10 rounded focus:ring-blue-500"
                    />
                    <span className="text-white">Publish Immediately</span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Preview */}
          {isPreview && (
            <div className="flex-1 p-6 overflow-y-auto bg-slate-800">
              <div className="max-w-4xl mx-auto">
                <div className="mb-6">
                  <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
                    {formData.category}
                  </span>
                </div>
                
                <h1 className="text-4xl font-bold text-white mb-4">{formData.title}</h1>
                <p className="text-xl text-cyan-200 mb-6">{formData.excerpt}</p>
                
                <div className="flex items-center space-x-4 text-cyan-300 mb-6">
                  <span className="flex items-center space-x-1">
                    <User className="w-4 h-4" />
                    <span>The Meet Patel</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date().toLocaleDateString()}</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{formData.readTime}</span>
                  </span>
                </div>

                <div className="prose prose-lg prose-invert max-w-none">
                  <div dangerouslySetInnerHTML={{ __html: formatContent(formData.content) }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-white/10">
          <div className="flex items-center space-x-4">
            {editingArticle && (
              <motion.button
                onClick={() => setShowDeleteConfirm(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
                <span>Delete</span>
              </motion.button>
            )}
          </div>

            <div className="flex items-center space-x-3">
            <motion.button
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              Cancel
            </motion.button>
            
            <motion.button
              onClick={handleSave}
              disabled={isSaving || !formData.title || !formData.content}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSaving ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Save className="w-4 h-4" />
              )}
              <span>{isSaving ? 'Saving...' : editingArticle ? 'Update' : 'Publish'}</span>
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Delete Confirmation */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-60 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900 rounded-xl p-6 max-w-md w-full"
          >
            <h3 className="text-xl font-bold text-white mb-2">Delete Article</h3>
            <p className="text-white/70 mb-6">
              Are you sure you want to delete this article? This action cannot be undone.
            </p>
            <div className="flex items-center space-x-3">
              <motion.button
                onClick={() => setShowDeleteConfirm(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
              >
                Cancel
              </motion.button>
              <motion.button
                onClick={handleDelete}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Delete
              </motion.button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default BlogEditor;
