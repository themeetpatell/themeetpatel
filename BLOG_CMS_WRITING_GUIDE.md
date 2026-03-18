# Blog + CMS Writing Guide (themeetpatel.com)

This guide explains how your current blog CMS works, how to write an article correctly, and which fields are required before publishing.

## 1) How The System Works

- Public blog list: `/blogs`
- Public article page: `/blogs/:slug`
- Admin CMS login: `/admin/login`
- Admin article management: `/admin/articles`
- Admin editor: `/admin/articles/new` (or `/admin/articles/:id`)
- Admin media library: `/admin/media`

Data source is Supabase:

- Table: `articles`
- Table: `media`
- Storage bucket used by media uploader: `media`
- Public can only read `articles` where `status = 'published'` (RLS policy)

## 2) One-Time Setup Requirements

Before writing/publishing, make sure these are done:

1. Add env vars in `.env`:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY` (or `VITE_SUPABASE_ANON_KEY`)
2. Run `SUPABASE_MIGRATION.sql` in Supabase SQL editor.
3. Create at least one authenticated admin user in Supabase Auth (email/password) for CMS login.
4. Ensure a Supabase Storage bucket named `media` exists (used by `/admin/media` uploader).

## 3) Article Writing Workflow

1. Login at `/admin/login`.
2. Go to `/admin/articles/new`.
3. Fill title, excerpt, and write content in the editor.
4. Complete right-side tabs:
   - `Publish`
   - `SEO`
   - `AEO`
   - `GEO`
5. Click `Save Draft` while working.
6. Click `Publish Now` when ready.
7. Open public URL and validate output.

Notes:

- Auto-save runs every 30 seconds when title exists.
- Slug auto-generates from title for new posts unless manually edited.
- Slug must be unique in DB.

## 4) What Is Required

### A) Hard required by database/application

- `title` (required)
- `slug` (required, unique; auto-generated if empty)

### B) Practically required for a usable published post

- `excerpt` (used in cards + SEO fallback)
- `content_html` (main article body; without this, article page will be mostly empty)
- `category` (used in list/filter/UI)
- `date` (shown in article metadata)
- `read_time` (displayed in article page metadata)
- `author` (defaults to `Meet Patel`, can override)

### C) Recommended before publishing (quality)

- `tags` (search/filter relevance)
- `og_image` (social preview + article hero image)
- `meta_title`, `meta_description`
- `canonical_url`
- `focus_keyword`, `secondary_keywords`

## 5) Field Guide By Tab

## Publish Tab

- `status`: draft/published/scheduled/archived
- `category`: pick from predefined categories
- `tags`: lowercase slug-like tags
- `featured`: marks article as featured
- `author`
- `read_time`: can use auto-estimated suggestion
- `scheduled_at`: available only if status is `scheduled`

Important:

- Public pages read only `published`.
- `scheduled` is currently just a status value. There is no automatic scheduler job in code.
- Use the `Publish Now` button for normal publishing flow.

## SEO Tab

- `focus_keyword`
- `meta_title` (ideal 50-60 chars)
- `meta_description` (ideal 120-160 chars)
- `secondary_keywords` (2+ recommended)
- `og_title`, `og_description`, `og_image` (1200x630 recommended)
- `canonical_url`
- `schema_type`: `BlogPosting`, `Article`, `NewsArticle`, `HowToArticle`
- `twitter_card`, `twitter_creator`
- `robots_noindex`, `robots_nofollow`

### AEO Tab

- `ai_summary` (Direct Answer, max 300 chars)
- `speakable` toggle
- `faq_items` (Q/A pairs)
- `howto_steps` (title, description, optional image)

Schema behavior:

- FAQ JSON-LD is generated when valid FAQs exist.
- HowTo JSON-LD needs `schema_type = HowToArticle` and at least 2 valid steps.

### GEO Tab

- `content_type`
- `last_updated_at`
- `citations` (title + URL)
- `key_stats`
- `expert_quotes` (quote + author + optional role)
- `related_entities`

These improve trust/context for AI/search engines and populate GEO scoring/checklist.

## 6) Writing In The Editor (Tiptap)

Supported formatting includes:

- Headings (`H1`-`H4`)
- Bold, italic, underline, strike, highlight
- Align left/center/right
- Bulleted and numbered lists
- Blockquote
- Inline code + code block
- Links
- Images by URL
- Tables
- Horizontal rule

Word count and estimated read time are shown in editor footer.

## 7) Media Workflow

1. Open `/admin/media`.
2. Upload image/video.
3. Copy public URL.
4. Insert image URL inside editor (`Insert image`) or use as `og_image`.

## 8) Publish Checklist (Use Every Time)

1. Title is final and slug is clean.
2. Excerpt is clear (1-2 short paragraphs max).
3. Body content is complete (`content_html` exists).
4. Category + tags set.
5. Meta title + meta description set.
6. OG image + canonical URL set.
7. `robots_noindex` is OFF for public posts.
8. Optional but recommended: FAQ, AI summary, citations, last updated date.
9. Click `Publish Now`.
10. Verify live page:
   - `/blogs` list card
   - `/blogs/<slug>` full page
   - social preview metadata

## 9) Current Caveats To Know

- `scheduled` status does not auto-publish by time yet.
- Blog listing currently references `article.readTime`, while CMS stores `read_time`. If read time is blank on cards, align this mapping in `src/pages/BlogPage.jsx`.
- Old static content still exists in `src/data/blogData.js`; migration utility is at `/admin/migrate` for one-time import.

