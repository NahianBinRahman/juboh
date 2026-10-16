import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ServiceIntro } from "@/components/sections/service-intro";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { QuietCta } from "@/components/sections/quiet-cta";
import { Badge } from "@/components/ui/badge";
import { foundationPrograms } from "@/lib/content";
import { ArrowRight, HeartHandshake, Check, Users, Sparkles, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Foundation & Community Impact",
  description:
    "Philanthropic initiatives, civic partnerships, and community empowerment by JUBOH Companies International.",
};

export default function FoundationPage() {
  return (
    <div>
      <ServiceIntro
        kicker="Civic Responsibility & Philanthropy"
        title="JUBOH Foundation & Community Impact"
        description="Advancing educational opportunities, civic partnerships, and grassroots community initiatives that create enduring generational uplift in the neighborhoods we serve."
      />

      {/* Flagship Narrative Split */}
      <section className="py-20 sm:py-28 bg-white border-b border-brand-hairline">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-brand-brass">
                <HeartHandshake className="h-4 w-4" />
                <EditorialKicker
                  label="Philanthropic Mandate"
                  tagline="Human Investment Paired with Physical Development"
                />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal leading-[1.12] text-brand-charcoal text-balance">
                Building an exceptional future starts with community resilience.
              </h2>

              <p className="text-base sm:text-lg font-light text-brand-charcoal/85 leading-relaxed font-sans">
                At JUBOH, corporate responsibility is not an afterthought or marketing tactic. We believe that true institutional excellence requires direct reinvestment into the people, families, and grassroots civic organizations that give neighborhoods their vitality.
              </p>

              <div className="space-y-4 text-sm text-brand-charcoal/75 leading-relaxed font-light">
                <p>
                  Through the JUBOH Foundation, we collaborate with local non-profit leaders, educators, faith-based institutions, and youth advocates to provide direct mentorship, educational grants, and community facility support.
                </p>
                <p>
                  Our programs are designed for measurable, long-term enrichment rather than vanity metrics, fostering economic empowerment and opening pathways to professional opportunity.
                </p>
              </div>

              <div className="pt-2">
                <Badge variant="default">Educational Empowerment • Grassroots Grants • Civic Mentorship</Badge>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2px] border border-brand-hairline bg-brand-charcoal/5 group shadow-sm">
                <Image
                  src="/media/preview-community-foundation.jpg"
                  alt="JUBOH Community Foundation Public Center"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-brand-navy/90 backdrop-blur-md px-5 py-3 border border-white/10 text-white rounded-[2px]">
                  <p className="text-[9px] uppercase tracking-kicker text-brand-brass font-semibold">
                    Foundation Vision
                  </p>
                  <p className="font-serif text-base font-normal mt-0.5">
                    Civic Centers & Educational Spaces
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Core Impact Programs */}
      <section className="py-24 sm:py-32 bg-brand-ivory border-b border-brand-hairline">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-16">
          <div className="max-w-2xl space-y-4">
            <EditorialKicker
              label="Impact Pillars"
              tagline="Active Foundation Initiatives"
            />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-brand-charcoal">
              Targeted programs delivering lasting civic empowerment.
            </h2>
            <p className="text-base text-brand-charcoal/70 font-light leading-relaxed">
              We focus philanthropic capital and human mentorship where it has the greatest generational multiplier effect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {foundationPrograms.map((prog) => (
              <div
                key={prog.title}
                className="p-8 bg-white border border-brand-hairline rounded-[2px] space-y-6 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-4">
                  <Badge variant="outline">{prog.pillar}</Badge>
                  <h3 className="font-serif text-2xl text-brand-charcoal">
                    {prog.title}
                  </h3>
                  <p className="text-sm text-brand-charcoal/70 leading-relaxed font-light">
                    {prog.description}
                  </p>

                  <div className="pt-2 space-y-2 border-t border-brand-hairline">
                    <p className="text-xs uppercase tracking-kicker text-brand-charcoal font-semibold">
                      Key Program Scope:
                    </p>
                    {prog.initiatives.map((init, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-brand-charcoal/75">
                        <Check className="h-3.5 w-3.5 text-brand-brass mt-0.5 shrink-0" />
                        <span>{init}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-hairline">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-kicker text-brand-charcoal hover:text-brand-brass transition-colors"
                  >
                    <span>Partner on this Initiative</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuietCta
        kicker="Foundation Collaboration"
        title="Partner with the JUBOH Foundation"
        description="We invite non-profit organizations, educational leaders, and civic advocates to connect with our philanthropic directors."
        primaryCtaText="Contact Foundation Office"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
