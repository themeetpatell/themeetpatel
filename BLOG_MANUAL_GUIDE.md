# Manual Blog Creation Guide

## Overview
The blog system has been converted to manual creation. All blogs are now managed through static data in `src/data/blogData.js`.

## URL Structure
- Blog listing page: `/blogs`
- Individual blog posts: `/blogs/{slug}`

## How to Add a New Blog Post

### Step 1: Open the Blog Data File
Navigate to: `src/data/blogData.js`

### Step 2: Add Your Article
Add a new article object to the `blogArticles` array:

```javascript
{
  id: 14,  // Increment from the last ID
  slug: "your-article-url-slug",  // URL-friendly slug
  title: "Your Article Title",
  excerpt: "Brief description of your article...",
  content: `
    <p>Your HTML content goes here...</p>
    
    <h2>Section Heading</h2>
    <p>More content...</p>
    
    <h3>Subsection</h3>
    <p>Additional content...</p>
  `,
  category: "Entrepreneurship",  // Options: Entrepreneurship, Leadership, Writing & Books, Personal Growth, Strategy, etc.
  author: "The Meet Patel",
  date: "2025-11-11",  // Format: YYYY-MM-DD
  readTime: "5 min read",
  views: 0,  // Starting views
  likes: 0,  // Starting likes
  featured: false,  // Set to true for featured articles
  tags: ["tag1", "tag2", "tag3"],  // Relevant tags
  published: true  // Set to false to hide from public
}
```

### Step 3: Content Formatting
- Use HTML tags for content formatting
- Available tags: `<p>`, `<h2>`, `<h3>`, `<ul>`, `<ol>`, `<li>`, `<blockquote>`, `<strong>`, `<em>`
- Keep paragraphs well-structured for readability

### Step 4: Categories
Available categories (with icons):
- Entrepreneurship (Rocket)
- Leadership (Crown)
- Writing & Books (FileText)
- Personal Growth (TrendingUp)
- Strategy (BookOpen)
- Operations (Settings)
- Design & UX (Code)
- Marketing & Sales (BarChart3)
- Partnerships (Handshake)
- Business Strategy (Lightbulb)
- User-led Growth (Users)

### Step 5: Generate URL Slug
Create a URL-friendly slug:
- Use lowercase letters
- Replace spaces with hyphens
- Remove special characters
- Example: "The Art of Entrepreneurship" → "art-of-entrepreneurship"

### Step 6: Featured Articles
Featured articles appear in a special section on the blog page. Set `featured: true` for up to 3 articles you want to highlight.

### Step 7: Build and Deploy
After adding your article:
```bash
npm run build
```

## File Structure
```
src/
  data/
    blogData.js          # Main blog data file
  pages/
    BlogPage.jsx         # Blog listing page
    BlogArticlePage.jsx  # Individual article page
```

## Helper Functions Available

### `getPublishedArticles()`
Returns all published articles

### `getFeaturedArticles()`
Returns featured articles only

### `getArticleBySlug(slug)`
Get a specific article by its slug

### `getArticlesByCategory(category)`
Get all articles in a category

### `getRelatedArticles(currentArticle, limit)`
Get related articles based on category and tags

### `getCategories()`
Get all categories with article counts

## Tips for Writing Great Blog Posts

1. **Title**: Keep it clear, compelling, and SEO-friendly
2. **Excerpt**: Write a 1-2 sentence summary that entices readers
3. **Content**: Use short paragraphs, subheadings, and bullet points
4. **Tags**: Use 3-5 relevant tags for better discoverability
5. **Images**: While not required, consider adding visual elements to your HTML content
6. **SEO**: Include relevant keywords naturally in your content

## Publishing Workflow

1. Write your article content (Markdown, Word, etc.)
2. Convert to HTML format
3. Add to `blogData.js`
4. Test locally: `npm run dev`
5. Review the article at `http://localhost:5173/blogs/{your-slug}`
6. Build: `npm run build`
7. Deploy to production

## Editing Existing Articles

To edit an article, simply find it in the `blogArticles` array by its ID or slug and update the fields you want to change.

## Unpublishing Articles

Set `published: false` to hide an article without deleting it:
```javascript
{
  id: 5,
  // ... other fields
  published: false  // Article won't appear on the site
}
```

## Notes

- Articles are sorted by date (newest first)
- The system automatically generates breadcrumbs and structured data for SEO
- Social sharing is built-in for all articles
- Reading progress tracking is automatic
- No CMS or database required - everything is static and fast

