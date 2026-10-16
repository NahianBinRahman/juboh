import * as React from "react";
import type { Metadata } from "next";
import { ServiceIntro } from "@/components/sections/service-intro";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Privacy Policy (Draft)",
  description: "Privacy policy draft for JUBOH Companies International.",
};

export default function PrivacyPage() {
  return (
    <div>
      <ServiceIntro
        kicker="Governance & Compliance"
        title="Privacy Policy"
        description="Information stewardship and data handling principles for institutional inquiries and enterprise communications."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <Badge variant="outline">Draft Document — Pending Formal Client Legal Counsel Review</Badge>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-brand-charcoal">1. Information Collection & Use</h2>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed font-light">
              JUBOH Companies International collects information provided voluntarily through our enterprise inquiry forms, including full names, organizational affiliations, email addresses, and project scope details. This information is utilized solely to evaluate and respond to legitimate institutional communications.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-brand-charcoal">2. Data Confidentiality & Sharing</h2>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed font-light">
              We do not sell, license, or commercially distribute client or visitor communications. Data submitted for transaction evaluations or municipal procurement is handled in strict compliance with applicable confidentiality agreements.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-brand-charcoal">3. Contact & Inquiries</h2>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed font-light">
              For questions regarding information handling or data privacy practices, contact our administrative team at legal@juboh.com (Draft).
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
