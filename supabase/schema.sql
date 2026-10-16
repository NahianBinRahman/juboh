-- ==========================================================
-- JUBOH Companies International — Supabase PostgreSQL Schema
-- ==========================================================

-- 1. Site Settings Table
CREATE TABLE IF NOT EXISTS site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name TEXT NOT NULL DEFAULT 'JUBOH Companies International',
  short_name TEXT NOT NULL DEFAULT 'JUBOH',
  tagline TEXT NOT NULL DEFAULT 'BUILDING AN EXCEPTIONAL FUTURE, TOGETHER!',
  display_tagline TEXT NOT NULL DEFAULT 'Building an Exceptional Future, Together.',
  corporate_descriptor TEXT NOT NULL,
  inquiry_email TEXT NOT NULL DEFAULT 'inquiries@juboh.com',
  operating_hubs TEXT NOT NULL DEFAULT 'United States & Select International Markets',
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Operating Disciplines Table
CREATE TABLE IF NOT EXISTS business_areas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  tagline TEXT NOT NULL,
  summary TEXT NOT NULL,
  description TEXT[] NOT NULL DEFAULT '{}',
  capabilities TEXT[] NOT NULL DEFAULT '{}',
  client_types TEXT[] NOT NULL DEFAULT '{}',
  image TEXT NOT NULL,
  display_order INT NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 3. Projects Portfolio Table
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  discipline TEXT NOT NULL,
  discipline_slug TEXT NOT NULL,
  role TEXT NOT NULL,
  location TEXT NOT NULL,
  status TEXT NOT NULL,
  summary TEXT NOT NULL,
  overview TEXT[] NOT NULL DEFAULT '{}',
  highlights TEXT[] NOT NULL DEFAULT '{}',
  specifications JSONB NOT NULL DEFAULT '{}'::jsonb,
  cover_image TEXT NOT NULL,
  gallery TEXT[] NOT NULL DEFAULT '{}',
  display_order INT NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT true,
  is_verified BOOLEAN NOT NULL DEFAULT false,
  published_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 4. Leadership Table
CREATE TABLE IF NOT EXISTS leaders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  full_name TEXT,
  title TEXT NOT NULL,
  department TEXT NOT NULL,
  quote TEXT NOT NULL,
  portrait TEXT NOT NULL,
  bio TEXT[] NOT NULL DEFAULT '{}',
  responsibilities TEXT[] NOT NULL DEFAULT '{}',
  display_order INT NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT true,
  is_identity_verified BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 5. Articles Table (News & Insights)
CREATE TABLE IF NOT EXISTS articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  date TEXT NOT NULL,
  read_time TEXT NOT NULL DEFAULT '4 min read',
  excerpt TEXT NOT NULL,
  lead TEXT NOT NULL,
  body TEXT[] NOT NULL DEFAULT '{}',
  cover_image TEXT,
  tags TEXT[] NOT NULL DEFAULT '{}',
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 6. Inquiries Table
CREATE TABLE IF NOT EXISTS inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  reference_code TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  organization TEXT,
  inquiry_type TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'NEW',
  internal_notes TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 7. Admin Users Table
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT NOT NULL DEFAULT 'SUPER_ADMIN',
  last_login_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Row-Level Security (Public Read on Published Content, Private Inquiries & Admin)
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE business_areas ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE leaders ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE inquiries ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Public can read published content
CREATE POLICY "Public can view published site settings" ON site_settings FOR SELECT USING (true);
CREATE POLICY "Public can view published business areas" ON business_areas FOR SELECT USING (is_published = true);
CREATE POLICY "Public can view published projects" ON projects FOR SELECT USING (is_published = true);
CREATE POLICY "Public can view published leaders" ON leaders FOR SELECT USING (is_published = true);
CREATE POLICY "Public can view published articles" ON articles FOR SELECT USING (is_published = true);

-- Public can insert contact inquiries
CREATE POLICY "Public can submit contact inquiries" ON inquiries FOR INSERT WITH CHECK (true);
