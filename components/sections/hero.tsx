"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Building2,
  MapPin,
  Users,
  Home,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export function Hero() {
  const stats = [
    {
      value: "$1B+",
      label: "Projects & Programs Supported",
    },
    {
      value: "250+",
      label: "Homes Delivered",
    },
    {
      value: "20+",
      label: "Markets Across the U.S.",
    },
    {
      value: "100%",
      label: "Commitment to Community Impact",
    },
  ];

  return (
    <section className="scroll-section is-in-view relative w-full h-[100dvh] max-h-[1080px] flex flex-col justify-between bg-brand-navy overflow-hidden">
      {/* Background Architectural Photo with Wide Perspective matching Reference */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/juboh-hero-dusk-wide.jpg"
          alt="JUBOH Modern Mixed-Use Architectural Headquarters at Dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%] lg:object-[center_35%]"
        />
        {/* Cinematic gradient overlay matching buyer reference: dark left, clear right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 z-10" />
      </div>

      {/* Top Spacer for Fixed Header */}
      <div className="h-14 sm:h-16 shrink-0" aria-hidden="true" />

      {/* Main Hero Content (Vertically Balanced within 100vh) */}
      <div className="relative z-20 flex-1 flex items-center py-1 sm:py-2">
        <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Column: Headlines & Actions matching buyer mockup */}
            <div className="lg:col-span-8 space-y-3 sm:space-y-4 max-w-xl">
              {/* Eyebrow */}
              <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase font-sans text-brand-brass">
                REAL ESTATE | CONSTRUCTION | GOVERNMENT | STRATEGIC ADVISORY
              </p>

              {/* Main Headline */}
              <h1 className="font-serif text-white tracking-tight space-y-0 sm:space-y-0.5">
                <span className="block text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[4rem] font-normal leading-[1.08]">
                  Building
                </span>
                <span className="block text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[4rem] font-normal leading-[1.08]">
                  More Than
                </span>
                <span className="block text-4xl sm:text-5xl md:text-[3.25rem] lg:text-[4rem] font-normal leading-[1.08]">
                  Buildings.
                </span>
              </h1>

              {/* Subcopy */}
              <p className="text-xs sm:text-sm font-sans font-light text-white/85 leading-relaxed max-w-md">
                Real estate development, construction program management, and strategic advisory for stronger communities.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-row items-center gap-3">
                <Button
                  asChild
                  variant="default"
                  size="sm"
                  className="h-9 sm:h-10 px-5 sm:px-6 text-[11px] tracking-kicker"
                >
                  <Link href="/projects" className="inline-flex items-center gap-1.5">
                    <span>EXPLORE OUR WORK</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outlineLight"
                  size="sm"
                  className="h-9 sm:h-10 px-5 sm:px-6 text-[11px] tracking-kicker"
                >
                  <Link href="/companies" className="inline-flex items-center gap-1.5">
                    <span>OUR SERVICES</span>
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column: Floating Accent Bar */}
            <div className="hidden lg:flex lg:col-span-4 justify-end">
              <div className="flex items-start gap-3 pl-6 border-l border-white/20 text-white">
                <div className="space-y-2.5">
                  <div className="w-8 h-[2px] bg-[#C5A059]" />
                  <div className="space-y-1.5 text-[10px] sm:text-[11px] font-sans tracking-[0.22em] text-white/90 uppercase font-medium">
                    <p>PEOPLE.</p>
                    <p>PLACES.</p>
                    <p>OPPORTUNITY.</p>
                    <p>LEGACY.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom 4 Metrics Strip matching Reference Photo */}
      <div className="relative z-20 w-full shrink-0 bg-[#0B1520]/95 backdrop-blur-md border-t border-white/10 shadow-lg">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-white/10 py-3 sm:py-4">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex flex-col justify-center px-4 sm:px-6 py-2 md:py-0 ${
                  idx === 0 ? "md:pl-0" : ""
                } ${idx === stats.length - 1 ? "md:pr-0" : ""}`}
              >
                <p className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-normal tracking-tight leading-none">
                  {stat.value}
                </p>
                <p className="text-[11px] sm:text-xs text-white/70 font-light mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
