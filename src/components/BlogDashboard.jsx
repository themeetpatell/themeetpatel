import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Plus, 
  Edit3, 
  Trash2, 
  Eye, 
  Calendar, 
  User, 
  Clock, 
  Star,
  Search, 
  Filter, 
  MoreVertical,
  BookOpen,
  TrendingUp,
  Users,
  Heart,
  X
} from 'lucide-react';
import { getPublishedArticles, updateArticle, deleteArticle } from '../data/blogData';
import BlogEditor from './BlogEditor';

const BlogDashboard = ({ onClose }) => {
  const [articles, setArticles] = useState(getPublishedArticles());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showEditor, setShowEditor] = useState(false);
  const [editingArticle, setEditingArticle] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);

  const categories = ['All', 'Entrepreneurship', 'Personal Growth', 'Writing & Books', 'Leadership'];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleEdit = (article) => {
    setEditingArticle(article);
    setShowEditor(true);
  };

  const handleDelete = (articleId) => {
    deleteArticle(articleId);
    setArticles(getPublishedArticles());
    setShowDeleteConfirm(null);
  };

  const handleToggleFeatured = (articleId) => {
    const article = articles.find(a => a.id === articleId);
    if (article) {
      updateArticle(articleId, { featured: !article.featured });
      setArticles(getPublishedArticles());
    }
  };

  const handleEditorClose = (success) => {
    setShowEditor(false);
    setEditingArticle(null);
    if (success) {
      setArticles(getPublishedArticles());
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const totalViews = 100000; // 100K+ total reach
  const totalLikes = articles.reduce((sum, article) => sum + article.likes, 0);
  const featuredCount = articles.filter(article => article.featured).length;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-slate-900 rounded-2xl w-full max-w-7xl h-[90vh] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
              <h2 className="text-2xl font-bold text-white">Blog Dashboard</h2>
              <p className="text-white/60">Manage your blog articles and content</p>
            </div>
          </div>
          
            <div className="flex items-center space-x-3">
            <motion.button
              onClick={() => setShowEditor(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Plus className="w-4 h-4" />
              <span>New Article</span>
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

        {/* Stats */}
        <div className="p-6 border-b border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{articles.length}</div>
                  <div className="text-white/60 text-sm">Total Articles</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Eye className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">100K+</div>
                  <div className="text-white/60 text-sm">Total Reach</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-red-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{totalLikes.toLocaleString()}</div>
                  <div className="text-white/60 text-sm">Total Likes</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{featuredCount}</div>
                  <div className="text-white/60 text-sm">Featured</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="p-6 border-b border-white/10">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center space-x-2">
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-white/60 hover:text-white hover:bg-white/20'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Articles List */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="space-y-4">
            {filteredArticles.map((article, index) => (
                <motion.div
                key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white/5 rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-white">{article.title}</h3>
                      {article.featured && (
                        <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full text-xs font-medium flex items-center">
                          <Star className="w-3 h-3 mr-1" />
                          Featured
                          </span>
                        )}
                      </div>

                    <p className="text-white/70 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                    
                    <div className="flex items-center space-x-4 text-white/50 text-sm">
                      <span className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                        <span>{formatDate(article.date)}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{article.views.toLocaleString()} views</span>
                      </span>
                      <span className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                        <span>{article.likes} likes</span>
                      </span>
                      </div>

                    <div className="flex items-center space-x-2 mt-3">
                      <span className="bg-white/10 text-white/60 px-2 py-1 rounded text-xs">
                        {article.category}
                      </span>
                      {article.tags.slice(0, 3).map((tag, idx) => (
                        <span key={idx} className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">
                          #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                    <motion.button
                      onClick={() => handleEdit(article)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                      >
                        <Edit3 className="w-4 h-4" />
                    </motion.button>
                    
                    <motion.button
                      onClick={() => handleToggleFeatured(article.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                        className={`p-2 rounded-lg transition-colors ${
                        article.featured 
                          ? 'text-yellow-400 hover:bg-yellow-500/20' 
                          : 'text-white/60 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Star className="w-4 h-4" />
                    </motion.button>
                    
                    <motion.button
                      onClick={() => setShowDeleteConfirm(article.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-2 text-white/60 hover:text-red-400 hover:bg-red-500/20 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-white/40" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
              <p className="text-white/60 mb-6">Try adjusting your search or create a new article.</p>
              <motion.button
                onClick={() => setShowEditor(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mx-auto"
              >
                <Plus className="w-5 h-5" />
                <span>Create First Article</span>
              </motion.button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Editor Modal */}
      {showEditor && (
        <BlogEditor
          editingArticle={editingArticle}
          onClose={handleEditorClose}
        />
      )}

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
                onClick={() => setShowDeleteConfirm(null)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors"
              >
                Cancel
              </motion.button>
              <motion.button
                onClick={() => handleDelete(showDeleteConfirm)}
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

export default BlogDashboard;
