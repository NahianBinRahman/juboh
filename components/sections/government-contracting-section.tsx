"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Crosshair, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";

export function GovernmentContractingSection() {
  const capabilities = [
    {
      title: "Capture Strategy",
      description: "Targeted pursuit of federal, state, and local opportunities.",
      icon: Crosshair,
    },
    {
      title: "Compliance Support",
      description: "Registrations, certifications, and proposal compliance.",
      icon: ShieldCheck,
    },
    {
      title: "Proposal Development",
      description: "Win strategies and compelling submissions.",
      icon: FileText,
    },
    {
      title: "Program Execution",
      description: "Post-award support and contract management.",
      icon: CheckCircle2,
    },
  ];

  return (
    <section className="scroll-section bg-[#0C151D] text-white min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center py-6 sm:py-8 lg:py-6 border-b border-white/10 overflow-hidden relative">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 my-auto flex flex-col justify-center space-y-6 lg:space-y-8">
        {/* Main 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Narrative & Button */}
          <div className="lg:col-span-7 space-y-4 max-w-xl slide-from-left">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase font-sans text-brand-brass">
                GOVERNMENT CONTRACTING
              </span>
              <span className="w-8 h-[1px] bg-brand-brass opacity-60" />
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-[1.12] text-white tracking-tight">
              From Strategy to Contract Award.
            </h2>

            <p className="text-xs sm:text-sm font-light text-white/75 leading-relaxed">
              We help businesses and institutions navigate the government market with a proven strategy, compliance support, and hands-on capture and execution assistance.
            </p>

            <div className="pt-2">
              <Button
                asChild
                variant="default"
                size="sm"
                className="h-9 sm:h-10 px-5 sm:px-6 text-[11px] tracking-kicker"
              >
                <Link href="/government-contracting" className="inline-flex items-center gap-1.5">
                  <span>OUR CAPABILITIES</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Capitol Dome Photography with Zoom/Unmask */}
          <div className="img-unmask-container lg:col-span-5 relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] rounded-[2px] overflow-hidden border border-white/10 shadow-lg">
            <Image
              src="/media/preview-government-contracting.jpg"
              alt="U.S. Capitol Dome Government Contracting"
              fill
              className="img-unmask-reveal object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* Bottom 4 Capability Columns with Stagger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-white/10">
          {capabilities.map((cap) => {
            const IconComp = cap.icon;
            return (
              <div key={cap.title} className="stagger-card space-y-2">
                <div className="p-1.5 w-fit rounded-[2px] bg-white/5 text-brand-brass border border-white/10">
                  <IconComp className="w-4 h-4 stroke-[1.5]" />
                </div>
                <h3 className="font-sans text-[11px] font-semibold tracking-kicker uppercase text-white">
                  {cap.title}
                </h3>
                <p className="text-xs text-white/65 font-light leading-relaxed">
                  {cap.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
