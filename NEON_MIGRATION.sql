-- =============================================================================
-- Neon Migration — run once in Neon SQL Editor
-- =============================================================================

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
  faq_items      jsonb DEFAULT '[]',
  ai_summary     text,
  howto_steps    jsonb DEFAULT '[]',
  speakable      boolean DEFAULT false,
  content_type      text DEFAULT 'evergreen',
  last_updated_at   timestamptz,
  citations         jsonb DEFAULT '[]',
  key_stats         jsonb DEFAULT '[]',
  expert_quotes     jsonb DEFAULT '[]',
  related_entities  text[] DEFAULT '{}'
);

CREATE TABLE IF NOT EXISTS media (
  id          uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at  timestamptz DEFAULT now(),
  name        text NOT NULL,
  url         text NOT NULL,
  size        integer,
  mime_type   text
);

-- Auto-update updated_at on articles
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
