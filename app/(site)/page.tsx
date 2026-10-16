import * as React from "react";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { Hero } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about-section";
import { ServicesSection } from "@/components/sections/services-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { EcosystemSection } from "@/components/sections/ecosystem-section";
import { GovernmentContractingSection } from "@/components/sections/government-contracting-section";
import { InsightsSection } from "@/components/sections/insights-section";
import { ContactSection } from "@/components/sections/contact-section";

export const metadata: Metadata = {
  title: `${siteConfig.name} | ${siteConfig.displayTagline}`,
  description: siteConfig.description,
};

export default function HomePage() {
  return (
    <div>
      {/* 01. Hero Section: Building More Than Buildings */}
      <Hero />

      {/* 02. About JUBOH: A Development Mindset. A Broader Purpose */}
      <AboutSection />

      {/* 03. Our Services: An Integrated Approach to Development and Impact */}
      <ServicesSection />

      {/* 04. Our Projects: Real Projects. Stronger Communities */}
      <ProjectsSection />

      {/* 05. Our Companies & Ecosystem: An Integrated Platform for Greater Impact */}
      <EcosystemSection />

      {/* 06. Government Contracting: From Strategy to Contract Award */}
      <GovernmentContractingSection />

      {/* 07. Insights: Ideas. Perspectives. Real-World Impact */}
      <InsightsSection />

      {/* 08. Work With Us: Let's Build What's Next */}
      <ContactSection />
    </div>
  );
}
