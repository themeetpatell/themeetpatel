-- =============================================================================
-- SEO/AEO/GEO CMS — Supabase Migration
-- Run this in: Supabase Dashboard → SQL Editor → New Query
-- =============================================================================

-- If starting fresh, create the full articles table:
CREATE TABLE IF NOT EXISTS articles (
  id              uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at      timestamptz DEFAULT now(),
  updated_at      timestamptz DEFAULT now(),
  published_at    timestamptz,
  title           text NOT NULL,
  slug            text UNIQUE NOT NULL,
  excerpt         text,
  content         jsonb,
  content_html    text,
  content_html_sanitized text,
  status          text DEFAULT 'draft' CHECK (status IN ('draft','published','scheduled','archived')),
  scheduled_at    timestamptz,
  category        text,
  tags            text[] DEFAULT '{}',
  author          text DEFAULT 'Meet Patel',
  date            date DEFAULT CURRENT_DATE,
  read_time       text,
  featured        boolean DEFAULT false,
  views           integer DEFAULT 0,
  likes           integer DEFAULT 0,

  -- SEO fields
  meta_title          text,
  meta_description    text,
  og_title            text,
  og_description      text,
  og_image            text,
  canonical_url       text,
  focus_keyword       text,
  schema_type         text DEFAULT 'BlogPosting',
  secondary_keywords  text[] DEFAULT '{}',
  twitter_card        text DEFAULT 'summary_large_image',
  twitter_creator     text DEFAULT '@themeetpatel',
  robots_noindex      boolean DEFAULT false,
  robots_nofollow     boolean DEFAULT false,

  -- AEO fields
  faq_items      jsonb DEFAULT '[]',
  ai_summary     text,
  howto_steps    jsonb DEFAULT '[]',
  speakable      boolean DEFAULT false,

  -- GEO fields
  content_type      text DEFAULT 'evergreen',
  last_updated_at   timestamptz,
  citations         jsonb DEFAULT '[]',
  key_stats         jsonb DEFAULT '[]',
  expert_quotes     jsonb DEFAULT '[]',
  related_entities  text[] DEFAULT '{}'
);

-- =============================================================================
-- OR — if you already have the articles table, run only these ALTER statements:
-- =============================================================================

ALTER TABLE articles ADD COLUMN IF NOT EXISTS secondary_keywords  text[]    DEFAULT '{}';
ALTER TABLE articles ADD COLUMN IF NOT EXISTS twitter_card        text      DEFAULT 'summary_large_image';
ALTER TABLE articles ADD COLUMN IF NOT EXISTS twitter_creator     text      DEFAULT '@themeetpatel';
ALTER TABLE articles ADD COLUMN IF NOT EXISTS robots_noindex      boolean   DEFAULT false;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS robots_nofollow     boolean   DEFAULT false;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS howto_steps         jsonb     DEFAULT '[]';
ALTER TABLE articles ADD COLUMN IF NOT EXISTS speakable           boolean   DEFAULT false;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS content_type        text      DEFAULT 'evergreen';
ALTER TABLE articles ADD COLUMN IF NOT EXISTS last_updated_at     timestamptz;
ALTER TABLE articles ADD COLUMN IF NOT EXISTS citations           jsonb     DEFAULT '[]';
ALTER TABLE articles ADD COLUMN IF NOT EXISTS key_stats           jsonb     DEFAULT '[]';
ALTER TABLE articles ADD COLUMN IF NOT EXISTS expert_quotes       jsonb     DEFAULT '[]';
ALTER TABLE articles ADD COLUMN IF NOT EXISTS related_entities    text[]    DEFAULT '{}';

-- =============================================================================
-- Media table (if not already created)
-- =============================================================================

CREATE TABLE IF NOT EXISTS media (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at  timestamptz DEFAULT now(),
  name        text NOT NULL,
  url         text NOT NULL,
  size        integer,
  mime_type   text
);

-- =============================================================================
-- Auto-update updated_at trigger
-- =============================================================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_updated_at ON articles;
CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================================================
-- View counter RPC (called from public frontend without auth)
-- =============================================================================

CREATE OR REPLACE FUNCTION increment_views(article_id uuid)
RETURNS void
LANGUAGE sql SECURITY DEFINER
AS $$
  UPDATE articles SET views = views + 1 WHERE id = article_id;
$$;

-- =============================================================================
-- Row Level Security (RLS)
-- =============================================================================

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE media    ENABLE ROW LEVEL SECURITY;

-- Public: read published articles only
DROP POLICY IF EXISTS "Public can read published articles" ON articles;
CREATE POLICY "Public can read published articles"
  ON articles FOR SELECT
  USING (status = 'published');

-- Authenticated (admin): full access
DROP POLICY IF EXISTS "Authenticated users have full access" ON articles;
CREATE POLICY "Authenticated users have full access"
  ON articles FOR ALL
  USING (auth.role() = 'authenticated');

-- Media: authenticated can read/write; public can read
DROP POLICY IF EXISTS "Authenticated users manage media" ON media;
CREATE POLICY "Authenticated users manage media"
  ON media FOR ALL
  USING (auth.role() = 'authenticated');

DROP POLICY IF EXISTS "Public can read media" ON media;
CREATE POLICY "Public can read media"
  ON media FOR SELECT USING (true);

-- =============================================================================
-- Storage Bucket Policies for "media" bucket
-- (Supabase Storage has its own RLS, separate from table-level RLS)
-- =============================================================================

-- Create the bucket if it doesn't exist (public so images are accessible via URL)
INSERT INTO storage.buckets (id, name, public)
VALUES ('media', 'media', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Allow authenticated users to upload files
DROP POLICY IF EXISTS "Authenticated users can upload media" ON storage.objects;
CREATE POLICY "Authenticated users can upload media"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'media');

-- Allow authenticated users to update their uploads
DROP POLICY IF EXISTS "Authenticated users can update media" ON storage.objects;
CREATE POLICY "Authenticated users can update media"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'media');

-- Allow authenticated users to delete media
DROP POLICY IF EXISTS "Authenticated users can delete media" ON storage.objects;
CREATE POLICY "Authenticated users can delete media"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'media');

-- Allow public read access (so images display on the website)
DROP POLICY IF EXISTS "Public can view media" ON storage.objects;
CREATE POLICY "Public can view media"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id = 'media');
