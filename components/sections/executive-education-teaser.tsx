import * as React from "react";
import Link from "next/link";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ExecutiveEducationTeaser() {
  const tracks = [
    {
      label: "Program Track 01",
      title: "Real Estate Development Masterclass",
      desc: "Institutional underwriting, municipal entitlements, site acquisition, and construction capital syndication.",
    },
    {
      label: "Program Track 02",
      title: "Strategic Capital & Enterprise Advisory",
      desc: "Capital stack engineering, joint-venture structuring, and private equity alignment for growth-stage sponsors.",
    },
    {
      label: "Program Track 03",
      title: "Public-Private Partnership Governance",
      desc: "Civic infrastructure delivery, municipal procurement, FAR adherence, and public sector oversight frameworks.",
    },
  ];

  return (
    <section className="bg-brand-navy text-brand-ivory min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center py-6 sm:py-8 lg:py-6 border-b border-white/10 relative overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 my-auto flex flex-col justify-center space-y-6 lg:space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-end justify-between border-b border-white/10 pb-6">
          <div className="lg:col-span-8 space-y-2.5">
            <div className="flex items-center gap-2 text-brand-brass">
              <GraduationCap className="h-4 w-4" />
              <EditorialKicker
                label="Distinct Program Platform"
                tagline="JUBOH Academy & Executive Education"
                dark
              />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal leading-[1.14]">
              Executive leadership development for developers and enterprise leaders.
            </h2>
            <p className="text-xs sm:text-sm text-white/70 font-light leading-relaxed max-w-2xl">
              Operating separately from our core commercial disciplines, our Academy offers executive cohorts, strategic leadership seminars, and masterclasses designed to elevate operational capacity.
            </p>
          </div>

          <div className="lg:col-span-4 lg:flex lg:justify-end">
            <Button asChild variant="outlineLight" size="default" className="w-full sm:w-auto text-xs tracking-kicker">
              <Link href="/executive-education" className="inline-flex items-center gap-2">
                <span>Access Executive Education Portal</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* 3 Program Tracks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {tracks.map((t) => (
            <div
              key={t.title}
              className="p-5 sm:p-6 bg-white/[0.04] border border-white/10 rounded-[2px] space-y-2 hover:border-brand-brass/50 transition-colors"
            >
              <span className="text-[9px] uppercase tracking-kicker text-brand-brass font-semibold font-sans">
                {t.label}
              </span>
              <h3 className="font-serif text-lg text-white font-medium">
                {t.title}
              </h3>
              <p className="text-xs text-white/65 font-light leading-relaxed line-clamp-3">
                {t.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="pt-2 flex items-center justify-between text-[11px] text-white/50 border-t border-white/10">
          <p>Admission by application & selective cohort invitation only.</p>
          <Link
            href="/executive-education"
            className="text-brand-brass hover:text-white transition-colors uppercase tracking-kicker font-semibold"
          >
            Review Curriculum & Schedule →
          </Link>
        </div>
      </div>
    </section>
  );
}
