"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  const stats = [
    {
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#C5A059] shrink-0"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M4 28h24M7 28V9l9-5v24M16 14v14M16 14l9 4v10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10 11h3M10 15h3M10 19h3M10 23h3M19 19h3M19 23h3"
            strokeLinecap="round"
          />
        </svg>
      ),
      value: "$1B+",
      label1: "PROJECTS & PROGRAMS",
      label2: "SUPPORTED",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#C5A059] shrink-0"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M5 10l3.5-3 5 2 6-4 6 3 2 7.5-2.5 5.5-6.5 2.5-7.5-2.5-4 1-2-4.5 2-7.5z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      value: "20+",
      label1: "MARKETS ACROSS",
      label2: "THE U.S.",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#C5A059] shrink-0"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="16" cy="11" r="3.5" />
          <circle cx="9" cy="14.5" r="2.5" />
          <circle cx="23" cy="14.5" r="2.5" />
          <path
            d="M11 25v-2a5 5 0 0 1 10 0v2M4 26v-1.5a4 4 0 0 1 6-3.5M28 26v-1.5a4 4 0 0 0-6-3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      value: "100%",
      label1: "COMMITMENT TO",
      label2: "EXECUTION",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#C5A059] shrink-0"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            d="M5 26h22M8 26v-6M13 26v-11M18 26v-16M23 26v-21"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      value: "250+",
      label1: "HOMES & UNITS",
      label2: "DELIVERED",
    },
    {
      icon: (
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 text-[#C5A059] shrink-0"
          viewBox="0 0 32 32"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="16" cy="9" r="2.5" />
          <circle cx="23" cy="14" r="2.5" />
          <circle cx="20.5" cy="22" r="2.5" />
          <circle cx="11.5" cy="22" r="2.5" />
          <circle cx="9" cy="14" r="2.5" />
          <path
            d="M13.5 11l6 3M21 16.5l-1 4M18.5 22.5h-5M11.5 20.5l-1-4M10.5 13l4-2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="1 1.5"
          />
        </svg>
      ),
      value: "STRONGER",
      label1: "COMMUNITIES",
      label2: "NATIONWIDE",
    },
  ];

  return (
    <section className="scroll-section is-in-view relative w-full min-h-[100dvh] flex flex-col justify-between bg-[#0B1520] overflow-hidden">
      {/* Background Architectural Photo with Wide Perspective matching Reference */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/juboh-hero-dusk.jpg"
          alt="JUBOH Modern Mixed-Use Architectural Headquarters at Dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_38%]"
        />
        {/* Cinematic gradient overlay matching buyer reference: strong contrast on left, revealing building on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/55 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/35 z-10" />
      </div>

      {/* Top Spacer for Fixed Header */}
      <div className="h-16 sm:h-20 shrink-0" aria-hidden="true" />

      {/* Main Hero Content (Vertically Balanced within Viewport) */}
      <div className="relative z-20 flex-1 flex items-center py-6 sm:py-10">
        <div className="max-w-[1440px] w-full mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Headlines & Actions matching buyer mockup */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-5 max-w-2xl">
              {/* Eyebrow / Kicker */}
              <p className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] uppercase font-sans text-white/80">
                REAL ESTATE. INFRASTRUCTURE. OPPORTUNITY.
              </p>

              {/* Main Headline */}
              <h1 className="font-serif tracking-tight text-white leading-[1.04]">
                <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal">
                  Building
                </span>
                <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal text-[#C5A059]">
                  More Than
                </span>
                <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-normal">
                  Buildings.
                </span>
              </h1>

              {/* Subcopy */}
              <p className="text-xs sm:text-sm md:text-[15px] font-sans font-light text-white/85 leading-relaxed max-w-lg">
                We develop real estate, manage complex construction programs, and provide strategic advisory services that turn vision into lasting impact.
              </p>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3.5">
                <Button
                  asChild
                  className="bg-[#C5A059] hover:bg-[#B38F48] text-[#181512] font-semibold text-xs tracking-[0.14em] uppercase h-11 px-6 sm:px-7 gap-2 rounded-[2px] transition-all hover:shadow-[0_4px_20px_rgba(197,160,89,0.35)]"
                >
                  <Link href="/projects" className="inline-flex items-center gap-2">
                    <span>OUR PROJECTS</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.4]" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-white/45 text-white bg-black/20 backdrop-blur-sm hover:bg-white/10 hover:border-white hover:text-white font-medium text-xs tracking-[0.14em] uppercase h-11 px-6 sm:px-7 gap-2 rounded-[2px] transition-all"
                >
                  <Link href="/companies" className="inline-flex items-center gap-2">
                    <span>OUR SERVICES</span>
                    <ArrowRight className="w-4 h-4 stroke-[2]" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column: Floating Accent Bar matching Reference */}
            <div className="hidden lg:flex lg:col-span-4 justify-end">
              <div className="flex items-start gap-4 text-white">
                <div className="w-[1px] h-32 bg-white/25 self-stretch" />
                <div className="space-y-3 pt-2">
                  <div className="w-6 h-[2px] bg-[#C5A059]" />
                  <div className="space-y-2 text-xs font-sans tracking-[0.24em] text-white/90 uppercase font-medium leading-relaxed">
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

      {/* Bottom 5 Metrics Strip matching Reference Photo Exactly */}
      <div className="relative z-20 w-full shrink-0 bg-[#070D14]/95 backdrop-blur-md border-t border-white/15">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 lg:divide-x divide-white/10 py-4 sm:py-5">
            {stats.map((stat, idx) => (
              <div
                key={stat.label1}
                className={`flex items-center gap-3.5 px-3 sm:px-5 py-2.5 lg:py-1 ${
                  idx === 0 ? "lg:pl-0" : ""
                } ${idx === stats.length - 1 ? "lg:pr-0" : ""}`}
              >
                {stat.icon}
                <div className="flex flex-col">
                  <span className="font-serif text-2xl sm:text-3xl lg:text-[2rem] text-white font-normal tracking-tight leading-none">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-sans tracking-[0.08em] uppercase text-white/65 mt-1 leading-tight font-medium">
                    {stat.label1}
                    <br />
                    {stat.label2}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
