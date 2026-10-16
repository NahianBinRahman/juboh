import * as React from "react";
import type { Metadata } from "next";
import { ServiceIntro } from "@/components/sections/service-intro";
import { Badge } from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "Terms of Service (Draft)",
  description: "Terms of service draft for JUBOH Companies International.",
};

export default function TermsPage() {
  return (
    <div>
      <ServiceIntro
        kicker="Governance & Compliance"
        title="Terms of Service"
        description="Standard operational terms governing public web access and preliminary institutional inquiries."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-16">
        <div className="max-w-3xl mx-auto space-y-8">
          <Badge variant="outline">Draft Document — Pending Formal Client Legal Counsel Review</Badge>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-brand-charcoal">1. Informational Nature of Website</h2>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed font-light">
              Content provided on this website is for corporate informational purposes regarding JUBOH Companies International and does not constitute a formal solicitation, binding legal offer, or financial underwriting commitment unless executed in an explicit written contract.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-brand-charcoal">2. Intellectual Property & Brand Assets</h2>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed font-light">
              All brand names, taglines including &ldquo;Building an Exceptional Future, Together!&rdquo;, architectural case descriptions, and media assets remain the proprietary intellectual property of JUBOH Companies International.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="font-serif text-2xl text-brand-charcoal">3. Inquiries & Verification</h2>
            <p className="text-sm text-brand-charcoal/80 leading-relaxed font-light">
              Direct inquiries regarding legal governance or contractual terms should be addressed to our corporate counsel office.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
