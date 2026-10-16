import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ServiceIntro } from "@/components/sections/service-intro";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { QuietCta } from "@/components/sections/quiet-cta";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Landmark, Building2, School, Church, Briefcase, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Business Strategy & Capital Advisory",
  description:
    "Institutional advisory services, capital formation strategy, and development advisory for corporate, municipal, and private partners.",
};

export default function AdvisoryPage() {
  const audiences = [
    { icon: Landmark, title: "Commercial & Private Banks", desc: "Capital stack validation, asset review, and underwriting support." },
    { icon: TrendingUp, title: "Institutional Investors", desc: "Co-development analysis, risk-adjusted returns modeling, and deal vetting." },
    { icon: School, title: "Universities & Endowments", desc: "Campus master-planning, asset monetization, and P3 student living frameworks." },
    { icon: Building2, title: "Municipalities & Public Entities", desc: "Redevelopment finance, civic infrastructure capital, and economic impact." },
    { icon: Church, title: "Churches & Civic Organizations", desc: "Faith-based community development and surplus land stewardship." },
    { icon: Briefcase, title: "Corporate Executives & Developers", desc: "Strategic expansion, portfolio optimization, and transaction structuring." },
  ];

  return (
    <div>
      <ServiceIntro
        kicker="Strategic Capital Advisory"
        title="Business Strategy & Capital Advisory"
        description="Providing disciplined strategic guidance, capital formation strategy, and development advisory to institutions, developers, and corporate leaders across the United States."
      />

      {/* Flagship Split */}
      <section className="py-20 sm:py-28 bg-white border-b border-brand-hairline">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <EditorialKicker
                label="Advisory Practice"
                tagline="Institutional Grounding"
              />

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal leading-[1.12] text-brand-charcoal text-balance">
                Quantitative rigor. Real operating market experience.
              </h2>

              <p className="text-base sm:text-lg font-light text-brand-charcoal/85 leading-relaxed font-sans">
                Our advisory practice bridges the gap between institutional capital markets and physical execution. We provide senior decision-makers with the clarity needed to navigate complex multi-party transactions.
              </p>

              <div className="space-y-4 text-sm text-brand-charcoal/75 leading-relaxed font-light">
                <p>
                  Rather than delivering generic slide decks or coaching rhetoric, JUBOH evaluates real estate development feasibility, senior debt positioning, and public-private funding models from the perspective of an active operating developer.
                </p>
                <p>
                  We help partners de-risk development pipelines, optimize asset capitalization, and build durable consensus among municipal stakeholders and financial underwriters.
                </p>
              </div>

              <div className="pt-2">
                <Badge variant="steel">Institutional Feasibility • Capital Structuring • Risk Governance</Badge>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2px] border border-brand-hairline bg-brand-charcoal/5 group">
                <Image
                  src="/media/preview-capital-advisory.jpg"
                  alt="JUBOH Capital Advisory Practice"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-brand-navy/90 backdrop-blur-md px-5 py-3 border border-white/10 text-white rounded-[2px]">
                  <p className="text-[9px] uppercase tracking-kicker text-brand-brass font-semibold">
                    Advisory Practice
                  </p>
                  <p className="font-serif text-base font-normal mt-0.5">
                    Institutional Strategy & Capital Architecture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Audiences Served (from PDF Page 2) */}
      <section className="py-24 sm:py-32 bg-brand-ivory border-b border-brand-hairline">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-16">
          <div className="max-w-2xl space-y-4">
            <EditorialKicker
              label="Audience Alignment"
              tagline="Institutional Client Profiles"
            />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-brand-charcoal">
              Trusted by institutions with significant fiduciary responsibilities.
            </h2>
            <p className="text-base text-brand-charcoal/70 font-light leading-relaxed">
              We collaborate with decision-makers who manage substantial physical and financial assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {audiences.map((aud) => {
              const Icon = aud.icon;
              return (
                <div
                  key={aud.title}
                  className="p-8 bg-white border border-brand-hairline rounded-[2px] space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-[2px] bg-brand-navy text-brand-brass flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-2xl text-brand-charcoal">
                      {aud.title}
                    </h3>
                    <p className="text-sm text-brand-charcoal/70 leading-relaxed font-light">
                      {aud.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compliance / Fiduciary Notice */}
      <section className="py-12 bg-white border-b border-brand-hairline">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-3">
          <p className="text-[10px] uppercase tracking-kicker text-brand-charcoal/60 font-semibold">
            Institutional Governance & Compliance Standard
          </p>
          <p className="text-xs text-brand-charcoal/60 leading-relaxed max-w-2xl mx-auto font-light">
            JUBOH Companies International provides management consulting, real estate development feasibility, and strategic advisory services. We do not provide public securities underwriting, registered investment advice, or guaranteed financial outcomes. All advisory engagements are governed by formal written bilateral agreements.
          </p>
        </div>
      </section>

      <QuietCta
        kicker="Strategic Advisory Inquiries"
        title="Schedule a Strategic Advisory Consultation"
        description="Engage our senior advisory practice to evaluate development underwriting, asset restructuring, or capital partner syndication."
        primaryCtaText="Consult Our Advisors"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
