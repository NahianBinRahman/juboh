import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ServiceIntro } from "@/components/sections/service-intro";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { QuietCta } from "@/components/sections/quiet-cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { executivePrograms } from "@/lib/content";
import { ArrowRight, GraduationCap, Check, Clock, Calendar, Users, BookOpen } from "lucide-react";

export const metadata: Metadata = {
  title: "Executive Education & Academy",
  description:
    "Distinct executive leadership academies, cohort training, and private advisory programs by JUBOH Companies International.",
};

export default function ExecutiveEducationPage() {
  return (
    <div>
      <ServiceIntro
        kicker="Dedicated Educational Platform"
        title="JUBOH Academy & Executive Education"
        description="Providing senior executives, emerging developers, and public decision-makers with rigorous masterclasses, cohort learning, and capital leadership frameworks."
      />

      {/* Educational Mandate Split */}
      <section className="py-20 sm:py-28 bg-white border-b border-brand-hairline">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 text-brand-brass">
                <GraduationCap className="h-4 w-4" />
                <EditorialKicker
                  label="Educational Standard"
                  tagline="Separated from Corporate Contracting"
                />
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal leading-[1.12] text-brand-charcoal text-balance">
                Real operating experience translated into executive mastery.
              </h2>

              <p className="text-base sm:text-lg font-light text-brand-charcoal/85 leading-relaxed font-sans">
                Operating separately from our core commercial disciplines, the Academy provides leaders with practical frameworks for navigating multi-million dollar developments, capital formation, and municipal governance.
              </p>

              <div className="space-y-4 text-sm text-brand-charcoal/75 leading-relaxed font-light">
                <p>
                  Our curriculum is designed for ambitious professionals who manage physical and financial assets. We emphasize case-study analysis, regulatory mechanics, and peer-to-peer executive dialogue.
                </p>
                <p>
                  Admissions are selective and conducted on a rolling basis. We evaluate applicants based on leadership track record, institutional mandate, and commitment to operational excellence.
                </p>
              </div>

              <div className="pt-2">
                <Badge variant="navy">Executive Cohorts • Real Estate Masterclasses • P3 Governance</Badge>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2px] border border-brand-hairline bg-brand-charcoal/5 group shadow-sm">
                <Image
                  src="/media/preview-capital-advisory.jpg"
                  alt="JUBOH Executive Education Seminar Room"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-brand-navy/90 backdrop-blur-md px-5 py-3 border border-white/10 text-white rounded-[2px]">
                  <p className="text-[9px] uppercase tracking-kicker text-brand-brass font-semibold">
                    Executive Learning
                  </p>
                  <p className="font-serif text-base font-normal mt-0.5">
                    Senior Leadership Cohorts & Masterclasses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 Executive Program Offerings */}
      <section className="py-24 sm:py-32 bg-brand-ivory border-b border-brand-hairline">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-16">
          <div className="max-w-2xl space-y-4">
            <EditorialKicker
              label="Curriculum Architecture"
              tagline="Active Executive Tracks"
            />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-brand-charcoal">
              Rigorous executive tracks for industry leaders.
            </h2>
            <p className="text-base text-brand-charcoal/70 font-light leading-relaxed">
              Each track is led by experienced practitioners and structured to provide actionable operational capacity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {executivePrograms.map((prog) => (
              <div
                key={prog.title}
                className="p-8 bg-white border border-brand-hairline rounded-[2px] space-y-6 flex flex-col justify-between shadow-sm"
              >
                <div className="space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase tracking-kicker text-brand-brass font-semibold">
                      {prog.format}
                    </span>
                    <h3 className="font-serif text-2xl text-brand-charcoal mt-1">
                      {prog.title}
                    </h3>
                  </div>

                  <p className="text-sm text-brand-charcoal/70 leading-relaxed font-light">
                    {prog.description}
                  </p>

                  <div className="pt-2 space-y-2 border-t border-brand-hairline text-xs">
                    <div className="flex items-center gap-2 text-brand-charcoal/70">
                      <Clock className="h-3.5 w-3.5 text-brand-brass shrink-0" />
                      <span>Duration: <strong>{prog.duration}</strong></span>
                    </div>
                    <div className="flex items-start gap-2 text-brand-charcoal/70">
                      <Users className="h-3.5 w-3.5 text-brand-brass shrink-0 mt-0.5" />
                      <span>Audience: {prog.targetAudience}</span>
                    </div>
                  </div>

                  <div className="pt-2 space-y-2 border-t border-brand-hairline">
                    <p className="text-xs uppercase tracking-kicker text-brand-charcoal font-semibold">
                      Curriculum Modules:
                    </p>
                    {prog.coreModules.map((mod, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-brand-charcoal/75">
                        <Check className="h-3.5 w-3.5 text-brand-brass mt-0.5 shrink-0" />
                        <span>{mod}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-brand-hairline">
                  <Button asChild variant="default" className="w-full">
                    <Link href="/contact">Apply for Cohort Admissions</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Admissions Notice */}
      <section className="py-16 bg-white border-b border-brand-hairline">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-4">
          <EditorialKicker label="Admissions Standard" tagline="Selective Executive Cohorts" className="justify-center flex" />
          <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal font-normal">
            Admissions & Enrollment Process
          </h3>
          <p className="text-sm text-brand-charcoal/70 max-w-2xl mx-auto leading-relaxed font-light">
            Cohorts admit a limited number of participants per session to ensure intensive seminar engagement. Tuition fees, cohort calendars, and prerequisite profiles are furnished upon application review. No promotional discounts or commercial sales funnels are applied.
          </p>
          <div className="pt-4">
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Request Admissions Prospectus</Link>
            </Button>
          </div>
        </div>
      </section>

      <QuietCta
        kicker="Admissions Office"
        title="Elevate Your Institutional Leadership"
        description="Connect with our admissions committee to discuss enrollment availability, corporate sponsorships, and cohort schedules."
        primaryCtaText="Submit Application Inquiry"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
