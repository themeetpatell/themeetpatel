# Blog Batch 3 — Publish Instructions

5 SEO/AEO/GEO-rich articles, ready to publish.

## What's here

| File | Purpose |
|------|---------|
| `BLOG_BATCH_3.md` | Human-readable source (same format as `BLOG_BATCH_2.md`) |
| `BLOG_BATCH_3_INSERT.sql` | Ready-to-run SQL insert — paste into Neon SQL Editor to publish |
| `BLOG_BATCH_3_README.md` | This file |

## The 5 articles

| # | Slug | Category | Featured |
|---|------|----------|----------|
| 1 | `solo-founder-economics-1m-arr-2026` | Entrepreneurship | yes |
| 2 | `pre-pmf-survival-math-3-numbers-founders` | Entrepreneurship | no |
| 3 | `category-design-vs-category-entry-strategy` | Strategy | no |
| 4 | `activation-cliff-onboarding-retention-product` | Product-Led Management | yes |
| 5 | `growth-loops-beat-growth-channels-startups` | Product-Led Management | no |

All articles: `status = 'published'`, `date = 2026-05-15`, `author = Meet Patel`.

## How to publish (1 step)

1. Open Neon SQL Editor for the production project.
2. Paste the entire contents of `BLOG_BATCH_3_INSERT.sql` and run.
3. Done. Articles are live at:
   - `https://themeetpatel.com/blogs/solo-founder-economics-1m-arr-2026`
   - `https://themeetpatel.com/blogs/pre-pmf-survival-math-3-numbers-founders`
   - `https://themeetpatel.com/blogs/category-design-vs-category-entry-strategy`
   - `https://themeetpatel.com/blogs/activation-cliff-onboarding-retention-product`
   - `https://themeetpatel.com/blogs/growth-loops-beat-growth-channels-startups`

The INSERT is idempotent — `ON CONFLICT (slug) DO UPDATE` means re-running it updates rather than duplicates. The final `SELECT` echoes the inserted rows so you can verify.

## SEO / AEO / GEO coverage

Every article ships with all three layers populated:

- **SEO:** focus_keyword, meta_title, meta_description, og_title, og_description, canonical_url, secondary_keywords (5 each), schema_type, twitter_card, twitter_creator
- **AEO:** ai_summary, faq_items (4 per article), speakable=true
- **GEO:** content_type=evergreen, last_updated_at, citations (3 per article), key_stats (4 per article), expert_quotes (1 per article), related_entities (6 per article)

## Verified

The SQL was executed against PostgreSQL 16 using the exact schema in `NEON_MIGRATION.sql`. All 5 rows insert cleanly, JSONB and array fields parse, and the second run hits `ON CONFLICT DO UPDATE` without error.
