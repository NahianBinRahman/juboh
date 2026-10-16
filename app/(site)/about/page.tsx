import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ServiceIntro } from "@/components/sections/service-intro";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { QuietCta } from "@/components/sections/quiet-cta";
import { siteConfig } from "@/lib/site-config";
import { ArrowRight, ShieldCheck, Building2, Landmark, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "About the Enterprise",
  description:
    "JUBOH Companies International is an established, privately held operating enterprise advancing real estate development, capital advisory, and government contracting.",
};

export default function AboutPage() {
  const principles = [
    {
      icon: ShieldCheck,
      title: "Operational Rigor",
      description:
        "Every engagement is governed by institutional standards, strict compliance controls, and audited accountability. We prioritize execution over promotional claims.",
    },
    {
      icon: Building2,
      title: "Physical Permanence",
      description:
        "In our real estate practice, we develop built environments designed for long-term durability, pedestrian connectivity, and sustainable civic integration.",
    },
    {
      icon: Scale,
      title: "Institutional Stewardship",
      description:
        "We serve banks, universities, municipalities, and private capital providers with transparent capital structuring and conservative underwriting.",
    },
    {
      icon: Landmark,
      title: "Civic Alignment",
      description:
        "Physical development must always be matched by community uplift. Our initiatives actively strengthen municipal relationships and grassroots human potential.",
    },
  ];

  return (
    <div>
      <ServiceIntro
        kicker="Enterprise Overview"
        title="Institutional Credibility. Disciplined Execution."
        description="JUBOH Companies International is a privately held enterprise advancing real estate development, business strategy, government contracting, strategic investments, executive education, and community impact across the United States and select international markets."
      />

      {/* Narrative Split Section */}
      <section className="py-20 sm:py-28 bg-white border-b border-brand-hairline">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2px] border border-brand-hairline bg-brand-charcoal/5 shadow-sm">
                <Image
                  src="/media/preview-hero-architecture.jpg"
                  alt="JUBOH Corporate Architecture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="lg:col-span-6 space-y-6">
              <EditorialKicker
                label="Enterprise Heritage & Mandate"
                tagline="Established. Elegant. Substantial."
              />

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal leading-[1.14] text-brand-charcoal text-balance">
                Built to belong in the room with institutional partners.
              </h2>

              <p className="text-base sm:text-lg font-light text-brand-charcoal/85 leading-relaxed font-sans">
                The reference point for JUBOH is not a consulting startup or online coaching funnel. We operate in the tradition of premier diversified real estate developers, private capital platforms, and multi-disciplinary operating enterprises.
              </p>

              <div className="space-y-4 text-sm text-brand-charcoal/75 leading-relaxed font-normal max-w-[65ch]">
                <p>
                  Rather than fragmenting operations across disjointed entities, JUBOH coordinates development, strategic capital advisory, and public contracting under a unified corporate leadership standard.
                </p>
                <p>
                  Our partners include commercial banks, institutional real estate funds, city municipal authorities, universities, and sophisticated corporate clients who require proven capacity and disciplined execution.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap gap-6 items-center border-t border-brand-hairline">
                <Link
                  href="/companies"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-kicker font-semibold text-brand-charcoal hover:text-brand-brass transition-colors"
                >
                  <span>Explore Operating Disciplines</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <span className="text-brand-charcoal/20">•</span>
                <Link
                  href="/leadership"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-kicker font-semibold text-brand-charcoal hover:text-brand-brass transition-colors"
                >
                  <span>Executive Governance</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Principles Grid */}
      <section className="py-24 sm:py-32 bg-brand-ivory border-b border-brand-hairline">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-16">
          <div className="max-w-2xl space-y-4">
            <EditorialKicker
              label="Governance Standard"
              tagline="Four Foundational Pillars"
            />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-brand-charcoal">
              Operating principles that guide our enterprise.
            </h2>
            <p className="text-base text-brand-charcoal/70 font-light leading-relaxed">
              Every project, transaction, and public engagement adheres to an unyielding set of core values.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="p-8 bg-white border border-brand-hairline rounded-[2px] space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-[2px] bg-brand-navy text-brand-brass flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-serif text-2xl text-brand-charcoal">
                      {p.title}
                    </h3>
                    <p className="text-sm text-brand-charcoal/70 leading-relaxed font-light">
                      {p.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Descriptor Banner */}
      <section className="py-20 bg-brand-navy text-brand-ivory border-b border-white/10">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-6">
          <p className="text-[11px] uppercase tracking-kicker text-brand-brass font-semibold">
            Corporate North Star
          </p>
          <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-[1.15] italic">
            &ldquo;Building an Exceptional Future, Together!&rdquo;
          </p>
          <p className="text-sm text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            {siteConfig.description}
          </p>
        </div>
      </section>

      <QuietCta
        title="Connect With Our Corporate Office"
        description="For institutional partnerships, capital inquiries, or strategic development consultations, our leadership team is available for confidential dialogue."
        primaryCtaText="Start a Conversation"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
