// Comprehensive Blog Article Schema for CMS
// This schema defines all fields needed for a complete blog CMS

export const blogArticleSchema = {
  // Basic Information
  id: {
    type: 'string',
    required: true,
    description: 'Unique identifier for the article'
  },
  
  slug: {
    type: 'string',
    required: true,
    unique: true,
    description: 'URL-friendly version of the title',
    validation: {
      pattern: '^[a-z0-9-]+$',
      minLength: 3,
      maxLength: 100
    }
  },
  
  title: {
    type: 'string',
    required: true,
    description: 'Main article title',
    validation: {
      minLength: 10,
      maxLength: 200
    }
  },
  
  excerpt: {
    type: 'string',
    required: true,
    description: 'Short description/summary of the article',
    validation: {
      minLength: 50,
      maxLength: 500
    }
  },
  
  content: {
    type: 'richText',
    required: true,
    description: 'Main article content in HTML/Markdown format'
  },
  
  // Author Information
  author: {
    type: 'object',
    required: true,
    properties: {
      id: { type: 'string', required: true },
      name: { type: 'string', required: true },
      email: { type: 'string', required: true },
      bio: { type: 'string', maxLength: 500 },
      avatar: { type: 'string', format: 'url' },
      socialLinks: {
        type: 'object',
        properties: {
          linkedin: { type: 'string', format: 'url' },
          twitter: { type: 'string', format: 'url' },
          website: { type: 'string', format: 'url' }
        }
      }
    }
  },
  
  // Publishing Information
  status: {
    type: 'string',
    required: true,
    enum: ['draft', 'review', 'scheduled', 'published', 'archived'],
    default: 'draft'
  },
  
  publishedAt: {
    type: 'datetime',
    description: 'When the article was published'
  },
  
  scheduledAt: {
    type: 'datetime',
    description: 'When the article should be published (for scheduled posts)'
  },
  
  updatedAt: {
    type: 'datetime',
    required: true,
    description: 'Last modification date'
  },
  
  createdAt: {
    type: 'datetime',
    required: true,
    description: 'Creation date'
  },
  
  // Content Organization
  category: {
    type: 'string',
    required: true,
    description: 'Primary category',
    options: [
      'Entrepreneurship',
      'Leadership',
      'Writing & Books',
      'Technology',
      'Startup Ecosystem',
      'Personal Growth',
      'Business Operations',
      'Product Development',
      'Marketing',
      'Finance',
      'Innovation',
      'Mentorship'
    ]
  },
  
  subcategory: {
    type: 'string',
    description: 'Secondary category for better organization'
  },
  
  tags: {
    type: 'array',
    required: true,
    description: 'Array of tags for content discovery',
    validation: {
      minItems: 1,
      maxItems: 10,
      uniqueItems: true
    }
  },
  
  // SEO Fields
  seo: {
    type: 'object',
    properties: {
      metaTitle: {
        type: 'string',
        maxLength: 60,
        description: 'SEO title (different from main title)'
      },
      metaDescription: {
        type: 'string',
        maxLength: 160,
        description: 'Meta description for search engines'
      },
      keywords: {
        type: 'array',
        description: 'SEO keywords',
        maxItems: 20
      },
      canonicalUrl: {
        type: 'string',
        format: 'url',
        description: 'Canonical URL for SEO'
      },
      focusKeyword: {
        type: 'string',
        description: 'Primary keyword to optimize for'
      },
      seoScore: {
        type: 'number',
        min: 0,
        max: 100,
        description: 'SEO optimization score'
      }
    }
  },
  
  // Media and Visuals
  featuredImage: {
    type: 'object',
    required: true,
    properties: {
      url: { type: 'string', required: true, format: 'url' },
      alt: { type: 'string', required: true },
      caption: { type: 'string' },
      credit: { type: 'string' },
      width: { type: 'number' },
      height: { type: 'number' },
      formats: {
        type: 'object',
        properties: {
          thumbnail: { type: 'string', format: 'url' },
          medium: { type: 'string', format: 'url' },
          large: { type: 'string', format: 'url' }
        }
      }
    }
  },
  
  images: {
    type: 'array',
    description: 'Additional images in the article',
    items: {
      type: 'object',
      properties: {
        url: { type: 'string', required: true, format: 'url' },
        alt: { type: 'string', required: true },
        caption: { type: 'string' },
        position: { type: 'string' },
        width: { type: 'number' },
        height: { type: 'number' }
      }
    }
  },
  
  // Reading Experience
  readTime: {
    type: 'number',
    required: true,
    description: 'Estimated reading time in minutes',
    validation: {
      min: 1,
      max: 60
    }
  },
  
  wordCount: {
    type: 'number',
    description: 'Total word count of the article'
  },
  
  difficulty: {
    type: 'string',
    enum: ['beginner', 'intermediate', 'advanced'],
    default: 'intermediate'
  },
  
  // Engagement and Analytics
  engagement: {
    type: 'object',
    properties: {
      views: { type: 'number', default: 0 },
      likes: { type: 'number', default: 0 },
      shares: { type: 'number', default: 0 },
      comments: { type: 'number', default: 0 },
      bookmarks: { type: 'number', default: 0 },
      averageTimeOnPage: { type: 'number' },
      bounceRate: { type: 'number' },
      conversionRate: { type: 'number' }
    }
  },
  
  // Social Media
  socialSharing: {
    type: 'object',
    properties: {
      twitterText: { type: 'string', maxLength: 280 },
      linkedinText: { type: 'string', maxLength: 300 },
      facebookText: { type: 'string', maxLength: 500 },
      customHashtags: { type: 'array', maxItems: 5 }
    }
  },
  
  // Content Structure
  tableOfContents: {
    type: 'array',
    description: 'Auto-generated table of contents',
    items: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        title: { type: 'string' },
        level: { type: 'number' },
        position: { type: 'number' }
      }
    }
  },
  
  // Related Content
  relatedArticles: {
    type: 'array',
    description: 'Manually curated related articles',
    items: { type: 'string' }, // Article IDs
    maxItems: 5
  },
  
  // Publishing Workflow
  workflow: {
    type: 'object',
    properties: {
      assignedTo: { type: 'string' }, // Editor/Reviewer ID
      reviewNotes: { type: 'string' },
      lastReviewedBy: { type: 'string' },
      lastReviewedAt: { type: 'datetime' },
      approvedBy: { type: 'string' },
      approvedAt: { type: 'datetime' },
      publishedBy: { type: 'string' },
      publishedAt: { type: 'datetime' }
    }
  },
  
  // Content Features
  features: {
    type: 'object',
    properties: {
      featured: { type: 'boolean', default: false },
      trending: { type: 'boolean', default: false },
      newsletter: { type: 'boolean', default: false },
      socialMedia: { type: 'boolean', default: true },
      commentsEnabled: { type: 'boolean', default: true },
      sharingEnabled: { type: 'boolean', default: true },
      printEnabled: { type: 'boolean', default: true }
    }
  },
  
  // Localization
  language: {
    type: 'string',
    default: 'en',
    description: 'Article language code'
  },
  
  translations: {
    type: 'array',
    description: 'Links to translated versions',
    items: {
      type: 'object',
      properties: {
        language: { type: 'string' },
        articleId: { type: 'string' },
        url: { type: 'string', format: 'url' }
      }
    }
  },
  
  // Technical Fields
  version: {
    type: 'number',
    default: 1,
    description: 'Article version number'
  },
  
  lastModifiedBy: {
    type: 'string',
    description: 'User ID of last modifier'
  },
  
  // Custom Fields (for extensibility)
  customFields: {
    type: 'object',
    description: 'Custom fields for specific content types',
    additionalProperties: true
  }
};

// Validation rules for the schema
export const validationRules = {
  slug: {
    pattern: /^[a-z0-9-]+$/,
    minLength: 3,
    maxLength: 100,
    message: 'Slug must contain only lowercase letters, numbers, and hyphens'
  },
  
  title: {
    minLength: 10,
    maxLength: 200,
    message: 'Title must be between 10 and 200 characters'
  },
  
  excerpt: {
    minLength: 50,
    maxLength: 500,
    message: 'Excerpt must be between 50 and 500 characters'
  },
  
  tags: {
    minItems: 1,
    maxItems: 10,
    message: 'Article must have between 1 and 10 tags'
  },
  
  readTime: {
    min: 1,
    max: 60,
    message: 'Reading time must be between 1 and 60 minutes'
  }
};

// Default values for new articles
export const defaultArticle = {
  status: 'draft',
  featured: false,
  trending: false,
  newsletter: false,
  socialMedia: true,
  commentsEnabled: true,
  sharingEnabled: true,
  printEnabled: true,
  language: 'en',
  version: 1,
  engagement: {
    views: 0,
    likes: 0,
    shares: 0,
    comments: 0,
    bookmarks: 0
  },
  features: {
    featured: false,
    trending: false,
    newsletter: false,
    socialMedia: true,
    commentsEnabled: true,
    sharingEnabled: true,
    printEnabled: true
  }
};
