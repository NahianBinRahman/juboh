import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ServiceIntro } from "@/components/sections/service-intro";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { QuietCta } from "@/components/sections/quiet-cta";
import { Badge } from "@/components/ui/badge";
import { executiveProfile } from "@/lib/content";
import { ArrowRight, ShieldCheck, Scale, Compass, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Leadership & Governance",
  description:
    "Executive leadership, governance philosophy, and operating stewardship at JUBOH Companies International.",
};

export default function LeadershipPage() {
  const governanceCommittees = [
    {
      title: "Executive Strategic Direction",
      desc: "Directing multi-sector vision, municipal alignments, and long-range capital partnerships across metropolitan markets.",
    },
    {
      title: "Capital & Risk Underwriting Committee",
      desc: "Overseeing conservative capital stack structuring, debt placement covenants, and development feasibility.",
    },
    {
      title: "Master-Development Steering Group",
      desc: "Supervising A/E team selection, zoning entitlements, contractor procurement, and job-site safety controls.",
    },
    {
      title: "Civic & Community Foundation Council",
      desc: "Ensuring every commercial development generates grassroots community uplift, youth mentorship, and civic partnership.",
    },
  ];

  return (
    <div>
      <ServiceIntro
        kicker="Executive Governance"
        title="Leadership Dedicated to Disciplined Growth"
        description="JUBOH Companies International is guided by experienced executive leadership across real estate development, strategic capital advisory, government contracting, and community empowerment."
      />

      {/* Featured Executive Profile Card */}
      <section className="py-20 sm:py-28 bg-white border-b border-brand-hairline">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Portrait Asset Column */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-[2px] border border-brand-hairline bg-brand-navy shadow-md">
                <Image
                  src={executiveProfile.portrait}
                  alt="Executive Leadership Portrait"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Editorial Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <EditorialKicker
                  label="Office of the Executive"
                  tagline="Strategic Direction"
                />
                <Badge variant="default" className="mt-2">
                  Executive Profile Attribution Pending Formal Client Release
                </Badge>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal leading-[1.14] text-brand-charcoal text-balance">
                Executive Leadership & Enterprise Governance
              </h2>

              <div className="p-6 bg-brand-ivory border-l-2 border-brand-brass border-y border-r border-brand-hairline rounded-[2px]">
                <p className="font-serif text-xl sm:text-2xl text-brand-charcoal/90 italic font-normal leading-snug">
                  &ldquo;{executiveProfile.quote}&rdquo;
                </p>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-brand-charcoal/75 leading-relaxed font-light max-w-[65ch]">
                {executiveProfile.bio.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="pt-4 border-t border-brand-hairline flex flex-wrap gap-6 items-center">
                <Link
                  href={`/leadership/${executiveProfile.slug}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-kicker font-semibold text-brand-charcoal hover:text-brand-brass transition-colors pb-1 border-b border-brand-charcoal/30 hover:border-brand-brass group"
                >
                  <span>Examine Governance Mandate</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <span className="text-brand-charcoal/20">•</span>
                <Link
                  href="/about"
                  className="text-xs uppercase tracking-kicker font-semibold text-brand-charcoal/70 hover:text-brand-brass transition-colors"
                >
                  Enterprise Philosophy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Committees Overview */}
      <section className="py-24 sm:py-32 bg-brand-ivory border-b border-brand-hairline">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-16">
          <div className="max-w-2xl space-y-4">
            <EditorialKicker
              label="Stewardship Structure"
              tagline="Governance Councils"
            />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-brand-charcoal">
              Operating governance ensuring fiduciary integrity.
            </h2>
            <p className="text-base text-brand-charcoal/70 font-light leading-relaxed">
              JUBOH maintains disciplined committees to review development entitlements, capital commitments, and procurement transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {governanceCommittees.map((comm) => (
              <div
                key={comm.title}
                className="p-8 bg-white border border-brand-hairline rounded-[2px] space-y-3"
              >
                <div className="w-8 h-8 rounded-[2px] bg-brand-navy text-brand-brass flex items-center justify-center">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <h3 className="font-serif text-2xl text-brand-charcoal">
                  {comm.title}
                </h3>
                <p className="text-sm text-brand-charcoal/70 leading-relaxed font-light">
                  {comm.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuietCta
        kicker="Direct Executive Inquiries"
        title="Direct Institutional Dialogue"
        description="For confidential communications with the executive office or governance board, our administrative secretariat provides secure routing."
        primaryCtaText="Contact Executive Office"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
