"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Home, Eye, ShieldCheck, Users, ArrowRight } from "lucide-react";

export function AboutSection() {
  const pillars = [
    {
      title: "OUR MISSION",
      description: "Create lasting impact through real estate development and strategic execution.",
      icon: Home,
    },
    {
      title: "OUR VISION",
      description: "A more equitable, resilient, and prosperous built environment.",
      icon: Eye,
    },
    {
      title: "OUR VALUES",
      description: "Integrity. Excellence. Execution. Community. Opportunity.",
      icon: ShieldCheck,
    },
    {
      title: "OUR PEOPLE",
      description: "A multidisciplinary team with experience and a shared commitment to impact.",
      icon: Users,
    },
  ];

  return (
    <section className="scroll-section bg-[#FAF8F5] text-brand-charcoal min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center py-6 sm:py-8 lg:py-6 border-b border-brand-hairline overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 my-auto flex flex-col justify-center space-y-6 lg:space-y-8">
        {/* Top Split Row: Narrative & Portrait with Quote */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-4 max-w-xl slide-from-left">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase font-sans text-brand-brass">
                ABOUT JUBOH
              </span>
              <span className="w-8 h-[1px] bg-brand-brass opacity-60" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-[1.12] text-brand-charcoal tracking-tight">
              A Development Mindset. A Broader Purpose.
            </h2>

            <p className="text-xs sm:text-sm font-light text-brand-charcoal/75 leading-relaxed">
              JUBOH is a real estate development, construction program management, and strategic advisory firm committed to building places, creating opportunities, and strengthening communities.
            </p>

            <div className="pt-1">
              <Button
                asChild
                variant="default"
                size="sm"
                className="h-9 sm:h-10 px-5 sm:px-6 text-[11px] tracking-kicker"
              >
                <Link href="/about" className="inline-flex items-center gap-1.5">
                  <span>OUR STORY</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Portrait + Quote Card */}
          <div className="lg:col-span-6 relative flex items-center justify-center lg:justify-end slide-from-right">
            <div className="relative flex items-center max-w-lg w-full">
              {/* Executive Portrait with Zoom/Unmask Effect */}
              <div className="img-unmask-container relative aspect-[4/5] w-[260px] sm:w-[320px] lg:w-[340px] max-h-[46vh] rounded-[2px] overflow-hidden border border-brand-hairline shadow-md bg-brand-navy">
                <Image
                  src="/assets/leadership-portrait-unverified.jpg"
                  alt="JUBOH Leadership"
                  fill
                  className="img-unmask-reveal object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Floating Quote Card */}
              <div className="absolute -right-2 sm:right-0 lg:-right-4 bottom-4 sm:bottom-8 bg-white p-4 sm:p-5 max-w-[210px] sm:max-w-[240px] shadow-lg border border-brand-hairline rounded-[2px] space-y-2.5 z-10 card-hover-lift">
                <p className="font-serif text-xs sm:text-sm text-brand-charcoal italic leading-snug">
                  &ldquo;We develop with purpose, execute with excellence, and create lasting impact.&rdquo;
                </p>
                <div className="pt-2 border-t border-brand-hairline">
                  <p className="font-sans text-[11px] font-bold text-brand-charcoal tracking-wide">
                    JALEN UBOH
                  </p>
                  <p className="text-[10px] text-brand-brass font-medium">
                    Chairman & CEO
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 4 Pillar Cards - Staggered by nth-child */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-brand-hairline/80">
          {pillars.map((p) => {
            const IconComp = p.icon;
            return (
              <div
                key={p.title}
                className="stagger-card bg-white/70 backdrop-blur-sm p-4 sm:p-5 border border-brand-hairline/80 rounded-[2px] space-y-2 hover:border-brand-brass/60 card-hover-lift"
              >
                <div className="p-1.5 w-fit rounded-[2px] bg-brand-navy/5 text-brand-brass">
                  <IconComp className="w-4 h-4 stroke-[1.5]" />
                </div>
                <h3 className="font-sans text-[11px] font-semibold tracking-kicker uppercase text-brand-charcoal">
                  {p.title}
                </h3>
                <p className="text-xs text-brand-charcoal/70 font-light leading-relaxed">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
