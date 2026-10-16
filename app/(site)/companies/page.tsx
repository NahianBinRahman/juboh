import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ServiceIntro } from "@/components/sections/service-intro";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { QuietCta } from "@/components/sections/quiet-cta";
import { operatingDisciplines } from "@/lib/content";
import { ArrowRight, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Operating Companies & Business Disciplines",
  description:
    "An institutional overview of the operating disciplines, capabilities, and sector expertise of JUBOH Companies International.",
};

export default function CompaniesPage() {
  return (
    <div>
      <ServiceIntro
        kicker="Enterprise Architecture"
        title="Operating Disciplines of the Enterprise"
        description="JUBOH Companies International coordinates complementary business sectors into an integrated operating platform—uniting master-development, capital advisory, public-sector delivery, and civic enrichment."
      />

      {/* Enterprise Rationale */}
      <section className="py-16 sm:py-20 bg-white border-b border-brand-hairline">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-4">
              <EditorialKicker
                label="Integrated Platform"
                tagline="Disciplined Multi-Sector Capability"
              />
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-normal leading-[1.15]">
                Why an integrated enterprise delivers superior institutional outcomes.
              </h2>
              <p className="text-base text-brand-charcoal/80 leading-relaxed font-light max-w-[68ch]">
                Complex real estate developments require more than construction management—they require capital structuring expertise and municipal alignment. Conversely, public-sector programs require rigorous private-sector scheduling and cost controls. JUBOH brings these complementary disciplines under one roof.
              </p>
            </div>
            <div className="lg:col-span-4 p-6 bg-brand-ivory border border-brand-hairline rounded-[2px] space-y-2">
              <p className="text-[10px] uppercase tracking-kicker text-brand-brass font-semibold">
                Client Base Served
              </p>
              <p className="font-serif text-xl text-brand-charcoal font-normal">
                Banks, Institutional Funds, Municipalities, Universities & Civic Partners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Discipline Cards */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-20 space-y-16">
        {operatingDisciplines.map((discipline, idx) => (
          <div
            key={discipline.slug}
            id={discipline.slug}
            className="bg-white border border-brand-hairline rounded-[2px] overflow-hidden scroll-mt-28"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Visual Side */}
              <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto min-h-[300px] bg-brand-charcoal/5 border-b lg:border-b-0 lg:border-r border-brand-hairline">
                <Image
                  src={discipline.image}
                  alt={discipline.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute top-4 left-4 bg-brand-navy/90 backdrop-blur-md px-3 py-1.5 border border-white/10 text-white rounded-[2px]">
                  <span className="text-[9px] uppercase tracking-kicker text-brand-brass font-semibold">
                    Discipline 0{idx + 1}
                  </span>
                </div>
              </div>

              {/* Information Side */}
              <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-kicker text-brand-brass font-semibold">
                      {discipline.tagline}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl text-brand-charcoal mt-1">
                      {discipline.name}
                    </h3>
                  </div>

                  <p className="text-base text-brand-charcoal/85 leading-relaxed font-light">
                    {discipline.summary}
                  </p>

                  <div className="space-y-2 pt-2">
                    <p className="text-xs uppercase tracking-kicker text-brand-charcoal font-semibold">
                      Core Operating Capabilities:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-brand-charcoal/75">
                      {discipline.capabilities.map((cap) => (
                        <div key={cap} className="flex items-start gap-2">
                          <Check className="h-3.5 w-3.5 text-brand-brass mt-0.5 shrink-0" />
                          <span>{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="text-xs text-brand-charcoal/60">
                    <span>Key Client Profile: </span>
                    <strong className="text-brand-charcoal font-medium">
                      {discipline.clientTypes[0]}
                    </strong>
                  </div>

                  <Link
                    href={discipline.href}
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-kicker font-semibold text-brand-brass hover:text-brand-charcoal transition-colors pb-0.5 border-b border-brand-brass/40 hover:border-brand-charcoal group whitespace-nowrap"
                  >
                    <span>View Dedicated Practice Page</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <QuietCta
        title="Discuss Multi-Sector Collaboration"
        description="Whether engaging JUBOH for master development, capital strategy, or municipal contracting, our leadership provides unified, single-point accountability."
        primaryCtaText="Contact Enterprise Office"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
