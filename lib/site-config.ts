export interface NavItem {
  title: string;
  href: string;
  description?: string;
}

export const siteConfig = {
  name: "JUBOH Companies International",
  shortName: "JUBOH",
  tagline: "BUILDING AN EXCEPTIONAL FUTURE, TOGETHER!",
  displayTagline: "Building an Exceptional Future, Together.",
  brandStatement: "BUILDING AN EXCEPTIONAL FUTURE, TOGETHER!",
  inquiryEmail: "inquiries@juboh.com",
  description:
    "JUBOH Companies International is a privately held enterprise advancing real estate development, business strategy, government contracting, strategic investments, executive education, and community impact across the United States and select international markets.",
  primaryNavigation: [
    { title: "About", href: "/about" },
    { title: "Services", href: "/companies" },
    { title: "Projects", href: "/projects" },
    { title: "Companies", href: "/companies" },
    { title: "Insights", href: "/news" },
    { title: "Contact", href: "/contact" },
  ] as NavItem[],
  utilityNavigation: [
    { title: "Executive Education", href: "/executive-education" },
    { title: "Client Portal", href: "/contact" },
  ] as NavItem[],
  primaryCta: {
    title: "WORK WITH US",
    href: "/contact",
  },
  operatingDisciplines: [
    {
      name: "Real Estate Development",
      slug: "real-estate",
      href: "/real-estate",
      summary:
        "Master-development, commercial, and residential projects developed with architectural permanence and civic alignment.",
    },
    {
      name: "Business Strategy & Capital Advisory",
      slug: "advisory",
      href: "/advisory",
      summary:
        "Institutional capital strategy, development advisory, and strategic guidance for corporate, institutional, and private clients.",
    },
    {
      name: "Government Contracting",
      slug: "government-contracting",
      href: "/government-contracting",
      summary:
        "Public-sector program execution, municipal and federal contracting capabilities, compliance, and institutional project delivery.",
    },
    {
      name: "Executive Education",
      slug: "executive-education",
      href: "/executive-education",
      summary:
        "Distinct leadership academies, executive cohorts, and private advisory programs for senior leaders and entrepreneurs.",
    },
    {
      name: "Foundation & Community Impact",
      slug: "foundation",
      href: "/foundation",
      summary:
        "Philanthropic initiatives, community partnerships, educational opportunities, and civic impact.",
    },
  ],
  footerLinks: {
    enterprise: [
      { title: "About JUBOH", href: "/about" },
      { title: "Operating Companies", href: "/companies" },
      { title: "Selected Projects", href: "/projects" },
      { title: "Leadership & Governance", href: "/leadership" },
      { title: "Press & Insights", href: "/news" },
    ],
    capabilities: [
      { title: "Real Estate Development", href: "/real-estate" },
      { title: "Business Strategy & Capital", href: "/advisory" },
      { title: "Government Contracting", href: "/government-contracting" },
      { title: "Executive Education", href: "/executive-education" },
      { title: "Community Foundation", href: "/foundation" },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy" },
      { title: "Terms of Service", href: "/terms" },
      { title: "Contact & Inquiries", href: "/contact" },
    ],
  },
  metadata: {
    siteUrl: "https://juboh.com",
    title: "JUBOH Companies International | Building an Exceptional Future, Together",
    author: "JUBOH Companies International",
  },
} as const;

export type SiteConfig = typeof siteConfig;
