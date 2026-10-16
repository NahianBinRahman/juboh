export type OperatingDisciplineSlug =
  | "real-estate"
  | "advisory"
  | "government-contracting"
  | "executive-education"
  | "foundation";

export interface OperatingDiscipline {
  slug: OperatingDisciplineSlug;
  name: string;
  tagline: string;
  summary: string;
  description: string[];
  capabilities: string[];
  clientTypes: string[];
  image: string;
  heroImage?: string;
  href: string;
}

export type ProjectStatus =
  | "Planning & Entitlements"
  | "Active Advisory"
  | "Procurement Phase"
  | "In Development"
  | "Completed";

export interface ProjectCaseStudy {
  slug: string;
  title: string;
  discipline: string;
  disciplineSlug: OperatingDisciplineSlug;
  role: string;
  location: string;
  status: ProjectStatus;
  summary: string;
  overview: string[];
  highlights: string[];
  specifications: Record<string, string>;
  coverImage: string;
  gallery?: string[];
  isVerified: boolean;
}

export interface LeaderProfile {
  slug: string;
  title: string;
  department: string;
  quote: string;
  bio: string[];
  responsibilities: string[];
  portrait: string;
  isIdentityVerified: boolean;
}

export interface NewsArticle {
  slug: string;
  title: string;
  category: "Market Insights" | "Corporate Press" | "Government Contracting";
  date: string;
  readTime: string;
  excerpt: string;
  lead: string;
  body: string[];
  coverImage?: string;
  tags: string[];
}

export interface FoundationProgram {
  title: string;
  pillar: string;
  description: string;
  initiatives: string[];
}

export interface ExecutiveProgram {
  title: string;
  targetAudience: string;
  duration: string;
  format: string;
  description: string;
  coreModules: string[];
}
