import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Plus, 
  Edit3, 
  Eye, 
  Trash2, 
  Search, 
  Filter, 
  MoreVertical,
  Calendar,
  User,
  Eye as ViewsIcon,
  Heart,
  MessageCircle,
  Star,
  FileText,
  Settings,
  Download,
  Upload,
  RefreshCw,
  BarChart3,
  TrendingUp,
  CheckCircle,
  XCircle,
  AlertCircle,
  Clock,
  Globe,
  Tag
} from 'lucide-react';
import blogDatabase from './BlogDatabase';
import BlogEditor from './BlogEditor';

const BlogDashboard = ({ isOpen = false, onClose = () => {} }) => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showEditor, setShowEditor] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [stats, setStats] = useState({});

  // Load blogs and stats
  useEffect(() => {
    loadBlogs();
    loadStats();
  }, []);

  // Filter and sort blogs when filters change
  useEffect(() => {
    filterAndSortBlogs();
  }, [blogs, searchQuery, statusFilter, categoryFilter, sortBy, sortOrder]);

  const loadBlogs = () => {
    const allBlogs = blogDatabase.getAllBlogs();
    setBlogs(allBlogs);
  };

  const loadStats = () => {
    const blogStats = blogDatabase.getBlogStats();
    setStats(blogStats);
  };

  const filterAndSortBlogs = () => {
    let filtered = [...blogs];

    // Apply search filter
    if (searchQuery) {
      filtered = filtered.filter(blog => 
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Apply status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(blog => blog.status === statusFilter);
    }

    // Apply category filter
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(blog => blog.category === categoryFilter);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      let aValue, bValue;
      
      switch (sortBy) {
        case 'date':
          aValue = new Date(a.publishDate || a.lastModified);
          bValue = new Date(b.publishDate || b.lastModified);
          break;
        case 'title':
          aValue = a.title.toLowerCase();
          bValue = b.title.toLowerCase();
          break;
        case 'views':
          aValue = a.views;
          bValue = b.views;
          break;
        case 'likes':
          aValue = a.likes;
          bValue = b.likes;
          break;
        default:
          aValue = new Date(a.publishDate || a.lastModified);
          bValue = new Date(b.publishDate || b.lastModified);
      }

      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    setFilteredBlogs(filtered);
  };

  const handleCreateNew = () => {
    setEditingBlogId(null);
    setShowEditor(true);
  };

  const handleEdit = (blogId) => {
    setEditingBlogId(blogId);
    setShowEditor(true);
  };

  const handleDelete = (blogId) => {
    setDeleteConfirm(blogId);
  };

  const confirmDelete = () => {
    if (deleteConfirm) {
      blogDatabase.deleteBlog(deleteConfirm);
      loadBlogs();
      loadStats();
      setDeleteConfirm(null);
    }
  };

  const handlePublish = (blogId) => {
    blogDatabase.publishBlog(blogId);
    loadBlogs();
    loadStats();
  };

  const handleUnpublish = (blogId) => {
    blogDatabase.unpublishBlog(blogId);
    loadBlogs();
    loadStats();
  };

  const handleToggleFeatured = (blogId) => {
    blogDatabase.toggleFeatured(blogId);
    loadBlogs();
    loadStats();
  };

  const handleEditorSave = (savedBlog) => {
    loadBlogs();
    loadStats();
    if (savedBlog.status === 'published') {
      setShowEditor(false);
    }
  };

  const handleEditorClose = () => {
    setShowEditor(false);
    setEditingBlogId(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'published':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'draft':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'archived':
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
      default:
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'published':
        return <CheckCircle className="w-4 h-4" />;
      case 'draft':
        return <Clock className="w-4 h-4" />;
      case 'archived':
        return <XCircle className="w-4 h-4" />;
      default:
        return <AlertCircle className="w-4 h-4" />;
    }
  };

  const categories = blogDatabase.getCategories();
  const allTags = blogDatabase.getTags();

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
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Blog Management Dashboard</h2>
                <p className="text-blue-300">Manage, edit, and publish your blog posts</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={handleCreateNew}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Plus className="w-4 h-4" />
                <span>New Post</span>
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

        {/* Stats Overview */}
        <div className="p-6 border-b border-blue-500/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/5 border border-blue-500/20 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stats.totalBlogs || 0}</div>
                  <div className="text-blue-300 text-sm">Total Posts</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-blue-500/20 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stats.publishedBlogs || 0}</div>
                  <div className="text-green-300 text-sm">Published</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-blue-500/20 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <ViewsIcon className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stats.totalViews || 0}</div>
                  <div className="text-purple-300 text-sm">Total Views</div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-blue-500/20 rounded-xl p-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-pink-500/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-pink-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">{stats.totalLikes || 0}</div>
                  <div className="text-pink-300 text-sm">Total Likes</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="p-6 border-b border-blue-500/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-blue-400" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white placeholder-blue-300/50 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
              />
            </div>

            {/* Status Filter */}
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>

            {/* Category Filter */}
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="px-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
            >
              <option value="all">All Categories</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={`${sortBy}-${sortOrder}`}
              onChange={(e) => {
                const [sort, order] = e.target.value.split('-');
                setSortBy(sort);
                setSortOrder(order);
              }}
              className="px-4 py-3 bg-white/5 border border-blue-500/20 rounded-xl text-white focus:outline-none focus:border-blue-500/50 focus:bg-white/10 transition-all"
            >
              <option value="date-desc">Newest First</option>
              <option value="date-asc">Oldest First</option>
              <option value="title-asc">Title A-Z</option>
              <option value="title-desc">Title Z-A</option>
              <option value="views-desc">Most Views</option>
              <option value="likes-desc">Most Likes</option>
            </select>
          </div>
        </div>

        {/* Blog List */}
        <div className="p-6">
          <div className="space-y-4">
            {filteredBlogs.length === 0 ? (
              <div className="text-center py-12">
                <FileText className="w-16 h-16 text-blue-400/40 mx-auto mb-4" />
                <p className="text-blue-300/60">No blog posts found</p>
                <button
                  onClick={handleCreateNew}
                  className="mt-4 px-6 py-3 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-xl transition-colors"
                >
                  Create Your First Post
                </button>
              </div>
            ) : (
              filteredBlogs.map((blog) => (
                <motion.div
                  key={blog.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 border border-blue-500/20 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(blog.status)}`}>
                          {getStatusIcon(blog.status)}
                          <span className="capitalize">{blog.status}</span>
                        </span>
                        
                        {blog.featured && (
                          <span className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                            <Star className="w-4 h-4" />
                            <span>Featured</span>
                          </span>
                        )}
                        
                        <span className="text-blue-300 text-sm">{blog.category}</span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2">{blog.title}</h3>
                      <p className="text-white/70 mb-4 line-clamp-2">{blog.excerpt}</p>

                      <div className="flex items-center space-x-6 text-sm text-white/60">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4" />
                          <span>{blog.author}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{blog.publishDate || blog.lastModified}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ViewsIcon className="w-4 h-4" />
                          <span>{blog.views} views</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Heart className="w-4 h-4" />
                          <span>{blog.likes} likes</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MessageCircle className="w-4 h-4" />
                          <span>{blog.comments} comments</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4">
                        {blog.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center space-x-1 px-2 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-xs"
                          >
                            <Tag className="w-3 h-3" />
                            <span>{tag}</span>
                          </span>
                        ))}
                        {blog.tags.length > 3 && (
                          <span className="inline-flex items-center px-2 py-1 bg-white/10 text-white/60 rounded-lg text-xs">
                            +{blog.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => handleEdit(blog.id)}
                        className="p-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg transition-colors"
                        title="Edit post"
                      >
                        <Edit3 className="w-4 h-4" />
                      </button>

                      {blog.status === 'published' ? (
                        <button
                          onClick={() => handleUnpublish(blog.id)}
                          className="p-2 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400 rounded-lg transition-colors"
                          title="Unpublish post"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      ) : (
                        <button
                          onClick={() => handlePublish(blog.id)}
                          className="p-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg transition-colors"
                          title="Publish post"
                        >
                          <CheckCircle className="w-4 h-4" />
                        </button>
                      )}

                      <button
                        onClick={() => handleToggleFeatured(blog.id)}
                        className={`p-2 rounded-lg transition-colors ${
                          blog.featured
                            ? 'bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-400'
                            : 'bg-white/10 hover:bg-white/20 text-white/60'
                        }`}
                        title={blog.featured ? 'Remove from featured' : 'Mark as featured'}
                      >
                        <Star className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => handleDelete(blog.id)}
                        className="p-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 rounded-lg transition-colors"
                        title="Delete post"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>

        {/* Delete Confirmation Modal */}
        <AnimatePresence>
          {deleteConfirm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                className="bg-black/90 border border-red-500/20 rounded-2xl p-8 max-w-md mx-4"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trash2 className="w-8 h-8 text-red-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Delete Blog Post</h3>
                  <p className="text-white/70 mb-6">
                    Are you sure you want to delete this blog post? This action cannot be undone.
                  </p>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => setDeleteConfirm(null)}
                      className="flex-1 px-4 py-3 border border-white/20 text-white hover:bg-white/10 rounded-xl transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={confirmDelete}
                      className="flex-1 px-4 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Blog Editor */}
        <BlogEditor
          isOpen={showEditor}
          blogId={editingBlogId}
          onSave={handleEditorSave}
          onClose={handleEditorClose}
          onCancel={handleEditorClose}
        />
      </motion.div>
    </motion.div>
  );
};

export default BlogDashboard;
