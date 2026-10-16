import type { Metadata, Viewport } from "next";
import { Newsreader, DM_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#101D2C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.displayTagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL("https://juboh.com"),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: "https://juboh.com" }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${siteConfig.name} | ${siteConfig.displayTagline}`,
    description: siteConfig.description,
    url: "https://juboh.com",
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/media/preview-hero-architecture.jpg",
        width: 1200,
        height: 630,
        alt: "JUBOH Companies International - Enterprise Overview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | ${siteConfig.displayTagline}`,
    description: siteConfig.description,
    images: ["/media/preview-hero-architecture.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: "https://juboh.com",
    logo: "https://juboh.com/media/preview-hero-architecture.jpg",
    slogan: siteConfig.brandStatement,
    description: siteConfig.description,
    email: siteConfig.inquiryEmail,
    sameAs: [],
    knowsAbout: [
      "Real Estate Development",
      "Business Strategy & Capital Advisory",
      "Government Contracting",
      "Strategic Investments",
      "Executive Education",
      "Community Impact and Philanthropy",
    ],
  };

  return (
    <html lang="en" className={`${newsreader.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-brand-ivory text-brand-charcoal antialiased selection:bg-brand-brass selection:text-white">
        {children}
      </body>
    </html>
  );
}
