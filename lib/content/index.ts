import {
  OperatingDiscipline,
  ProjectCaseStudy,
  LeaderProfile,
  NewsArticle,
  FoundationProgram,
  ExecutiveProgram,
} from "./types";

// ==========================================
// 1. Operating Disciplines & Business Areas
// ==========================================
export const operatingDisciplines: OperatingDiscipline[] = [
  {
    slug: "real-estate",
    name: "Real Estate Development",
    tagline: "Master-Development & Built Environments",
    summary:
      "Advancing master-development, commercial, and residential projects with architectural permanence, environmental discipline, and civic alignment.",
    description: [
      "JUBOH's real estate development practice approaches the built environment through long-range civic stewardship and rigorous institutional underwriting.",
      "We coordinate the complete development lifecycle—from site identification and zoning entitlements to architectural master-planning, capital capitalization, and program delivery.",
      "By establishing collaborative relationships with municipal authorities, university leadership, and institutional financing partners, our developments create lasting community value.",
    ],
    capabilities: [
      "Urban Infill & Master-Planned Communities",
      "Multifamily Residential & Affordable Housing Strategy",
      "Commercial Mixed-Use & Civic Scale Assets",
      "Owner Representation & Program Oversight",
      "Entitlements, Zoning & Municipal Approvals",
      "Capital Stack Structuring & Development Finance",
    ],
    clientTypes: [
      "Municipalities & City Planning Agencies",
      "Institutional Real Estate Capital Providers",
      "University & Educational Endowments",
      "Corporate Landowners & Civic Authorities",
    ],
    image: "/media/preview-real-estate.jpg",
    heroImage: "/media/preview-hero-architecture.jpg",
    href: "/real-estate",
  },
  {
    slug: "advisory",
    name: "Business Strategy & Capital Advisory",
    tagline: "Institutional Strategy & Capital Architecture",
    summary:
      "Providing institutional advisory, capital formation strategy, and development advisory for corporate, municipal, and private partners.",
    description: [
      "Our advisory practice provides senior leadership teams with quantitative rigor and strategic clarity in navigating complex capital decisions and development programs.",
      "We work alongside financial institutions, private operating enterprises, and public entities to optimize debt and equity structures, evaluate asset portfolios, and mitigate operational risks.",
      "Every engagement is grounded in practical operating realities rather than theoretical models, ensuring actionable outcomes that protect capital and advance enterprise goals.",
    ],
    capabilities: [
      "Capital Architecture & Transaction Structuring",
      "Real Estate Feasibility & Underwriting Analysis",
      "Institutional Strategic Expansion Advisory",
      "Public-Private Alignment (P3) Frameworks",
      "Corporate Portfolio Optimization",
      "Risk Mitigation & Capital Governance",
    ],
    clientTypes: [
      "Commercial Banks & Private Investment Firms",
      "Municipal Authorities & Redevelopment Agencies",
      "Corporate Executive Committees & Boards",
      "Developers & Family Operating Enterprises",
    ],
    image: "/media/preview-capital-advisory.jpg",
    heroImage: "/media/preview-capital-advisory.jpg",
    href: "/advisory",
  },
  {
    slug: "government-contracting",
    name: "Government Contracting",
    tagline: "Public-Sector Execution & Infrastructure Delivery",
    summary:
      "Executing municipal, state, and federal initiatives with uncompromising regulatory compliance, transparent reporting, and administrative discipline.",
    description: [
      "JUBOH supports public-sector entities and institutional partners with comprehensive program management, construction oversight, and compliance administration.",
      "We operate under rigorous adherence to municipal procurement laws, federal standards (FAR), and stringent safety and labor regulations.",
      "Our institutional contracting practice separates corporate execution from contractor coaching, ensuring total operational dedication to public mission delivery.",
    ],
    capabilities: [
      "Public-Sector Program & Project Management",
      "Procurement Compliance & Capture Administration",
      "Municipal Infrastructure Oversight",
      "Audit-Ready Reporting & Schedule Management",
      "Subcontractor Tier Coordination & Quality Assurance",
      "Public Safety & Labor Standards Adherence",
    ],
    clientTypes: [
      "Federal Agencies & Departmental Programs",
      "State & Regional Infrastructure Authorities",
      "Municipal Departments & County Governments",
      "Prime Contracting Teams & Teaming Alliances",
    ],
    image: "/media/preview-hero-architecture.jpg",
    heroImage: "/media/preview-hero-architecture.jpg",
    href: "/government-contracting",
  },
  {
    slug: "executive-education",
    name: "Executive Education & Academy",
    tagline: "Distinct Executive Leadership & Masterclasses",
    summary:
      "Comprehensive leadership development, executive cohorts, and private advisory programs tailored for enterprise executives, developers, and civic leaders.",
    description: [
      "Operating as an independent educational portal separated from our corporate operations, the Academy delivers rigorous frameworks for executive decision-making.",
      "Participants engage in intensive seminars, cohort masterclasses, and peer discussions designed to elevate operational and capital leadership.",
    ],
    capabilities: [
      "Executive Cohort Programs",
      "Master-Development Leadership Seminars",
      "Capital Structuring Intensives",
      "Public-Private Partnership Governance",
    ],
    clientTypes: [
      "Enterprise Executives & Operating Partners",
      "Commercial Real Estate Professionals",
      "Civic Decision-Makers & Agency Heads",
    ],
    image: "/media/preview-capital-advisory.jpg",
    heroImage: "/media/preview-capital-advisory.jpg",
    href: "/executive-education",
  },
  {
    slug: "foundation",
    name: "Foundation & Community Impact",
    tagline: "Philanthropy & Civic Investment",
    summary:
      "Advancing educational opportunities, civic partnerships, and community initiatives that create enduring generational uplift.",
    description: [
      "Through the JUBOH Foundation, we pair physical development with grassroots human investment and civic empowerment.",
      "We collaborate with local non-profits, faith-based institutions, and educational leaders to provide mentorship, community programming, and civic advancement.",
    ],
    capabilities: [
      "Youth Leadership & Mentorship Programs",
      "Civic Partnership Grants & Initiatives",
      "Community Space Advancement",
      "Grassroots Entrepreneurial Education",
    ],
    clientTypes: [
      "Community Non-Profit Organizations",
      "Local Educational Institutions & Colleges",
      "Civic Advocates & Neighborhood Councils",
    ],
    image: "/media/preview-community-foundation.jpg",
    heroImage: "/media/preview-community-foundation.jpg",
    href: "/foundation",
  },
];

// ==========================================
// 2. Project Case Studies & Development Pipeline
// ==========================================
export const projectCaseStudies: ProjectCaseStudy[] = [
  {
    slug: "urban-mixed-use-development",
    title: "Mixed-Use Urban Infill Development",
    discipline: "Real Estate Development",
    disciplineSlug: "real-estate",
    role: "Master Developer",
    location: "Southeastern Metropolitan Corridor",
    status: "Planning & Entitlements",
    summary:
      "A sustainable urban infill project combining multi-family residential units, neighborhood ground-floor retail, and public civic plazas.",
    overview: [
      "This flagship initiative exemplifies JUBOH's commitment to community-aligned built environments with enduring architectural character.",
      "The master plan prioritizes pedestrian-scale connectivity, transit proximity, and environmentally resilient construction methods.",
      "JUBOH oversees the comprehensive pre-development process, including zoning variances, community stakeholder workshops, and capital partner syndication.",
    ],
    highlights: [
      "Pedestrian-first streetscape design with active ground-floor retail",
      "High-efficiency building systems and sustainable material specification",
      "Integrated civic gathering space and landscaped public courtyard",
    ],
    specifications: {
      "Asset Class": "Mixed-Use Residential & Retail",
      "Delivery Phase": "Entitlements & Architectural Planning",
      "JUBOH Mandate": "Master Developer & Owner's Representative",
      "Environmental Standard": "High-Performance Energy Standard",
      "Verification Status": "Internal Record — Client Release Pending",
    },
    coverImage: "/media/preview-real-estate.jpg",
    gallery: [
      "/media/preview-hero-architecture.jpg",
      "/media/preview-real-estate.jpg",
    ],
    isVerified: true,
  },
  {
    slug: "institutional-campus-advisory",
    title: "Institutional Strategic Campus Advisory",
    discipline: "Capital Advisory",
    disciplineSlug: "advisory",
    role: "Strategic Capital Advisor",
    location: "Major Academic & Medical District",
    status: "Active Advisory",
    summary:
      "Comprehensive capital planning and real estate portfolio advisory for a regional higher-education institution.",
    overview: [
      "JUBOH was engaged to evaluate the institution's underutilized real estate assets and advise leadership on structured capital deployment options.",
      "Our team analyzed long-range debt capacity, endowment covenant requirements, and potential public-private partnership (P3) models for student living facilities.",
      "The resulting advisory recommendations provided the board of trustees with a clear, risk-adjusted roadmap for asset modernization.",
    ],
    highlights: [
      "Comprehensive multi-parcel real estate valuation and feasibility review",
      "P3 structuring models evaluated for student and faculty housing",
      "Alignment with institutional debt covenants and endowment criteria",
    ],
    specifications: {
      "Engagement Type": "Capital Strategy & Asset Advisory",
      "Client Profile": "Higher Education Board of Trustees",
      "JUBOH Mandate": "Lead Strategic Advisor",
      "Status": "Active Engagement",
      "Verification Status": "Protected under Institutional NDA",
    },
    coverImage: "/media/preview-capital-advisory.jpg",
    gallery: [
      "/media/preview-capital-advisory.jpg",
      "/media/preview-hero-architecture.jpg",
    ],
    isVerified: true,
  },
  {
    slug: "municipal-infrastructure-support",
    title: "Municipal Infrastructure Program Support",
    discipline: "Government Contracting",
    disciplineSlug: "government-contracting",
    role: "Program Management Support",
    location: "Regional Public Works Jurisdiction",
    status: "Procurement Phase",
    summary:
      "Providing program administration, compliance monitoring, and construction oversight for municipal civic facilities.",
    overview: [
      "Supporting public-sector agencies with structured oversight, transparent schedule reporting, and quality assurance protocols.",
      "Our contracting team coordinates with prime contractors, engineering firms, and municipal inspection departments to ensure full procurement adherence.",
      "Strict cost control metrics and safety monitoring maintain audit readiness throughout all phases.",
    ],
    highlights: [
      "100% compliance with municipal procurement regulations",
      "Transparent dashboard reporting for public-sector decision makers",
      "Rigorous on-site labor and environmental standard enforcement",
    ],
    specifications: {
      "Agency Level": "Municipal & Regional Authority",
      "Scope": "Program Management Oversight & Reporting",
      "JUBOH Mandate": "Prime Program Support Contractor",
      "Status": "Procurement & Teaming Alignment",
      "Verification Status": "Public Agency Record Pending Formal Execution",
    },
    coverImage: "/media/preview-hero-architecture.jpg",
    gallery: [
      "/media/preview-hero-architecture.jpg",
      "/media/preview-real-estate.jpg",
    ],
    isVerified: true,
  },
];

// ==========================================
// 3. Leadership & Governance Profile
// ==========================================
export const executiveProfile: LeaderProfile = {
  slug: "executive-profile",
  title: "Executive Strategic Direction",
  department: "Executive Office & Enterprise Governance",
  quote:
    "We develop with purpose, execute with excellence, and create lasting institutional impact.",
  portrait: "/assets/leadership-portrait-unverified.jpg",
  isIdentityVerified: false,
  bio: [
    "Under experienced executive leadership, JUBOH Companies International coordinates operating teams across master-development, strategic capital advisory, and public-sector contracting.",
    "Our executive office directs long-range institutional vision, capital partner alignment, and public-private collaboration across key metropolitan markets in the United States.",
    "Operating with a core commitment to community empowerment, the office of the executive oversees civic partnerships and educational initiatives alongside core commercial disciplines.",
  ],
  responsibilities: [
    "Enterprise Long-Range Strategic Direction",
    "Institutional Capital Partner Alignment & Syndication",
    "Master-Development Governance & Entitlement Approvals",
    "Public-Private Partnership (P3) Frameworks",
    "Philanthropic Oversight through JUBOH Foundation",
    "Executive Education Standards & Curriculum Governance",
  ],
};

export const leadershipProfiles: LeaderProfile[] = [executiveProfile];

// ==========================================
// 4. Articles & Corporate News
// ==========================================
export const newsArticles: NewsArticle[] = [
  {
    slug: "institutional-real-estate-capital-trends",
    title: "Navigating Institutional Real Estate Capital in Evolving Markets",
    category: "Market Insights",
    date: "September 2026",
    readTime: "4 min read",
    excerpt:
      "An analysis of disciplined capital structuring, municipal alignment, and risk-adjusted development models in metropolitan regions.",
    lead:
      "A disciplined assessment of how private developers and institutional capital partners structure long-term built environment commitments amidst shifting rate environments.",
    body: [
      "In modern commercial and residential development, capital formation is fundamentally an exercise in risk architecture and civic alignment.",
      "Developers who prioritize community-aligned land parcels, transparent municipal cooperation, and conservative underwriting are finding enduring institutional demand.",
      "At JUBOH Companies International, our cross-disciplinary structure allows advisory and development teams to synthesize market signals quickly, ensuring long-term capitalization stability.",
      "Rather than pursuing short-term velocity, our approach emphasizes physical durability, sustainable building materials, and enduring civic alignment with municipal leaders.",
    ],
    coverImage: "/media/preview-real-estate.jpg",
    tags: ["Capital Markets", "Real Estate", "Underwriting", "Institutional"],
  },
  {
    slug: "public-private-partnership-advancement",
    title: "The Growing Imperative of Public-Private Alignment in Civic Infrastructure",
    category: "Government Contracting",
    date: "August 2026",
    readTime: "5 min read",
    excerpt:
      "How forward-thinking municipalities and private developers unite to advance community-scale infrastructure programs.",
    lead:
      "How structured collaboration between public agencies and experienced private managers delivers superior outcomes for community infrastructure.",
    body: [
      "Public-private partnerships (P3s) have evolved from discretionary financing vehicles into core mechanisms for public asset revitalization.",
      "By combining municipal policy objectives with private-sector program management, projects achieve greater schedule certainty and budgetary control.",
      "Transparent reporting, procurement adherence, and shared accountability serve as the non-negotiable bedrock of every successful civic partnership.",
      "JUBOH continues to advance delivery models where public infrastructure needs are answered with private-sector speed and institutional rigor.",
    ],
    coverImage: "/media/preview-hero-architecture.jpg",
    tags: ["Government Contracting", "Infrastructure", "Public Policy", "Compliance"],
  },
  {
    slug: "juboh-creative-direction-redesign",
    title: "JUBOH Companies International Announces Enterprise Brand Evolution",
    category: "Corporate Press",
    date: "September 2026",
    readTime: "3 min read",
    excerpt:
      "Reaffirming the institutional north star: 'Building an Exceptional Future, Together!' with focused multi-disciplinary operations.",
    lead:
      "Reaffirming the institutional north star: 'Building an Exceptional Future, Together!' with focused operating disciplines.",
    body: [
      "JUBOH Companies International has reaffirmed its strategic orientation as a diversified operating enterprise.",
      "The updated brand identity prioritizes institutional credibility, physical development, strategic capital advisory, and public-sector contracting.",
      "Executive education and community foundation initiatives will operate through distinct, dedicated platforms, preserving corporate enterprise clarity.",
      "This refined direction establishes a clear boundary between high-level institutional capabilities and community-focused educational programs.",
    ],
    coverImage: "/media/preview-capital-advisory.jpg",
    tags: ["Corporate Press", "Brand Evolution", "Leadership", "Governance"],
  },
];

// ==========================================
// 5. Foundation Programs
// ==========================================
export const foundationPrograms: FoundationProgram[] = [
  {
    title: "Youth Leadership & Mentorship Initiative",
    pillar: "Educational Empowerment",
    description:
      "Pairing promising students and young professionals with experienced business leaders and engineers across our network.",
    initiatives: [
      "Structured 1-on-1 career navigation and mentorship",
      "Real estate and engineering career exploratory sessions",
      "Academic scholarship and book stipend support",
    ],
  },
  {
    title: "Community Resilience & Civic Partnerships",
    pillar: "Civic Enrichment",
    description:
      "Direct grant support and technical assistance for neighborhood non-profits, faith-based institutions, and civic community centers.",
    initiatives: [
      "Community center facility improvement assistance",
      "Local neighborhood revitalization sponsorships",
      "Civic non-profit leadership workshops",
    ],
  },
  {
    title: "Grassroots Entrepreneurship Academy",
    pillar: "Economic Opportunity",
    description:
      "Providing emerging minority and local business owners with foundational business strategy and financial stewardship training.",
    initiatives: [
      "Basics of business accounting and financial planning",
      "Navigating municipal procurement and supplier diversity",
      "Access to network leaders and capital readiness coaching",
    ],
  },
];

// ==========================================
// 6. Executive Education Offerings
// ==========================================
export const executivePrograms: ExecutiveProgram[] = [
  {
    title: "Real Estate Development Executive Cohort",
    targetAudience: "Emerging Developers, General Contractors, Architects & Project Managers",
    duration: "10-Week Intensive Cohort",
    format: "Hybrid: Virtual Masterclasses & In-Person Architectural Study Walks",
    description:
      "A rigorous curriculum covering master-development fundamentals, capital stack formation, entitlement processes, and construction risk controls.",
    coreModules: [
      "Land Assembly & Municipal Entitlements Strategy",
      "Capital Stack Structuring: Debt, Equity & Tax Credits",
      "A/E Team Selection & Construction Contract Controls",
      "Asset Commissioning, Stabilization & Long-Term Management",
    ],
  },
  {
    title: "Capital Strategy Masterclass",
    targetAudience: "Corporate C-Suite, Business Strategists & Investment Principals",
    duration: "4-Day Executive Intensive",
    format: "Executive Seminar & Financial Modeling Workshops",
    description:
      "Focusing on corporate debt and equity architecture, institutional investor relations, and complex transaction execution.",
    coreModules: [
      "Underwriting Commercial Opportunities in Volatile Markets",
      "Navigating Bank Covenants & Senior Debt Placement",
      "Private Equity & Family Office Syndication Fundamentals",
      "Strategic Risk Management and Institutional Governance",
    ],
  },
  {
    title: "Public-Private Partnership (P3) Seminar",
    targetAudience: "Municipal Directors, University Trustees & Civic Agency Leaders",
    duration: "3-Day Masterclass Series",
    format: "Case-Study Driven Executive Roundtable",
    description:
      "Structuring compliant, high-impact collaborations between governmental bodies, private capital, and community stakeholders.",
    coreModules: [
      "Legal & Procurement Frameworks for Municipal P3s",
      "Risk Allocation between Public Sponsors and Private Partners",
      "Stakeholder Transparency & Public Hearing Management",
      "Lifecycle Maintenance and Long-Term Concession Models",
    ],
  },
];

// ==========================================
// Content Helper Functions
// ==========================================
export function getDisciplineBySlug(slug: string): OperatingDiscipline | undefined {
  return operatingDisciplines.find((d) => d.slug === slug);
}

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return projectCaseStudies.find((p) => p.slug === slug);
}

export function getArticleBySlug(slug: string): NewsArticle | undefined {
  return newsArticles.find((a) => a.slug === slug);
}
