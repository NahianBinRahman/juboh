import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ServiceIntro } from "@/components/sections/service-intro";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { QuietCta } from "@/components/sections/quiet-cta";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ShieldCheck, FileCheck2, Scale, Users2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Government Contracting & Public Sector",
  description:
    "Public-sector program execution, municipal infrastructure delivery, compliance, and institutional contracting by JUBOH Companies International.",
};

export default function GovernmentContractingPage() {
  const complianceStandards = [
    {
      icon: ShieldCheck,
      title: "Regulatory & FAR Adherence",
      desc: "Full alignment with municipal procurement codes, Federal Acquisition Regulations (FAR), and agency standards.",
    },
    {
      icon: FileCheck2,
      title: "Audit-Ready Transparency",
      desc: "Traceable cost accounting, daily field logs, and real-time milestone reporting for public stakeholders.",
    },
    {
      icon: Scale,
      title: "Subcontractor Quality Oversight",
      desc: "Comprehensive tier management, wage compliance, and safety enforcement across job sites.",
    },
    {
      icon: Users2,
      title: "Teaming & Joint Venture Delivery",
      desc: "Structuring transparent teaming alignments with regional specialty trade contractors and engineering partners.",
    },
  ];

  return (
    <div>
      <ServiceIntro
        kicker="Public Sector Delivery"
        title="Government Contracting & Infrastructure"
        description="Executing municipal, state, and federal initiatives with uncompromising regulatory compliance, transparent reporting, and administrative discipline."
      />

      {/* Flagship Split */}
      <section className="py-20 sm:py-28 bg-white border-b border-brand-hairline">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2px] border border-brand-hairline bg-brand-charcoal/5 group">
                <Image
                  src="/media/preview-hero-architecture.jpg"
                  alt="JUBOH Government Contracting & Civic Infrastructure"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-brand-navy/90 backdrop-blur-md px-5 py-3 border border-white/10 text-white rounded-[2px]">
                  <p className="text-[9px] uppercase tracking-kicker text-brand-brass font-semibold">
                    Public Sector Mandate
                  </p>
                  <p className="font-serif text-base font-normal mt-0.5">
                    Municipal Infrastructure & Program Delivery
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <EditorialKicker
                label="Contracting Capabilities"
                tagline="Public Stewardship"
              />

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal leading-[1.12] text-brand-charcoal text-balance">
                Delivering essential public assets with administrative certainty.
              </h2>

              <p className="text-base sm:text-lg font-light text-brand-charcoal/85 leading-relaxed font-sans">
                Government projects demand an exceptional standard of fiscal discipline, scheduling precision, and regulatory compliance. JUBOH provides public agencies with trusted program management and construction oversight.
              </p>

              <div className="space-y-4 text-sm text-brand-charcoal/75 leading-relaxed font-light">
                <p>
                  We separate corporate contracting delivery from education or coaching services, dedicating our operational personnel exclusively to contract performance, quality assurance, and mission fulfillment.
                </p>
                <p>
                  Our contracting officers maintain rigorous document control, certified payroll administration, and proactive liaison with agency contracting officers and community leaders.
                </p>
              </div>

              <div className="pt-2">
                <Badge variant="navy">Municipal Programs • Infrastructure Delivery • Compliance Oversight</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Standard Grid */}
      <section className="py-24 sm:py-32 bg-brand-navy text-brand-ivory border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-16">
          <div className="max-w-2xl space-y-4">
            <EditorialKicker
              label="Quality & Controls"
              tagline="Strict Compliance Framework"
              dark
            />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-white">
              Institutional controls designed for public oversight.
            </h2>
            <p className="text-base text-white/70 font-light leading-relaxed">
              We minimize agency risk through stringent administrative, fiscal, and job-site protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {complianceStandards.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-8 bg-white/5 border border-white/10 rounded-[2px] space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-[2px] bg-brand-brass/15 text-brand-brass flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-2xl text-white">
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Procurement Note */}
      <section className="py-12 bg-white border-b border-brand-hairline">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-3">
          <p className="text-[10px] uppercase tracking-kicker text-brand-charcoal/60 font-semibold">
            Procurement Notice
          </p>
          <p className="text-xs text-brand-charcoal/60 leading-relaxed max-w-2xl mx-auto font-light">
            Government procurement opportunities, agency solicitations, and teaming inquiries are reviewed under formal procurement confidentiality protocols. Contract capabilities are subject to agency verification.
          </p>
        </div>
      </section>

      <QuietCta
        kicker="Procurement Collaboration"
        title="Public-Sector & Municipal Contracting Inquiries"
        description="Our contracting officers and project managers are available to discuss solicitation schedules, teaming alignments, and agency requirements."
        primaryCtaText="Contact Contracting Team"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
