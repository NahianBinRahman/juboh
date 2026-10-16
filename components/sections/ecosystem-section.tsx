"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, HardHat, TrendingUp, Landmark } from "lucide-react";

export function EcosystemSection() {
  const companies = [
    {
      name: "JUBOH DEVELOPMENT",
      description: "Real estate development and investment.",
      href: "/real-estate",
      dark: true,
      icon: Building2,
    },
    {
      name: "JUBOH CONSTRUCTION",
      description: "Construction program management and owner's representation.",
      href: "/companies",
      dark: false,
      icon: HardHat,
    },
    {
      name: "JUBOH CAPITAL",
      description: "Strategic advisory and capital solutions.",
      href: "/advisory",
      dark: false,
      icon: TrendingUp,
    },
    {
      name: "JUBOH GOVERNMENT SOLUTIONS",
      description: "Government contracting and program delivery.",
      href: "/government-contracting",
      dark: true,
      icon: Landmark,
    },
  ];

  return (
    <section className="scroll-section bg-white text-brand-charcoal min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center py-6 sm:py-8 lg:py-6 border-b border-brand-hairline overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 my-auto flex flex-col justify-center space-y-6 lg:space-y-8">
        {/* Header Row */}
        <div className="section-header grid grid-cols-1 lg:grid-cols-12 gap-6 items-end justify-between border-b border-brand-hairline pb-4">
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase font-sans text-brand-brass">
                OUR COMPANIES & ECOSYSTEM
              </span>
              <span className="w-8 h-[1px] bg-brand-brass opacity-60" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] font-normal leading-[1.12] text-brand-charcoal tracking-tight">
              An Integrated Platform for Greater Impact.
            </h2>
          </div>

          <div className="lg:col-span-6 flex justify-end">
            <p className="text-xs sm:text-sm font-light text-brand-charcoal/75 leading-relaxed max-w-lg">
              JUBOH operates a family of companies and strategic partnerships that extend our ability to develop, build, and deliver across markets.
            </p>
          </div>
        </div>

        {/* 2-Column Split: 2x2 Grid on Left, Skyscraper Photography on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* 2x2 Cards Grid - Staggered */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {companies.map((c) => {
              const IconComp = c.icon;
              return (
                <div
                  key={c.name}
                  className={`stagger-card p-6 rounded-[2px] flex flex-col justify-between space-y-6 transition-all border card-hover-lift ${
                    c.dark
                      ? "bg-[#1E1B18] text-white border-transparent"
                      : "bg-[#F5F2EB] text-brand-charcoal border-[#E8E3D8]"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`p-1.5 rounded-[2px] ${
                          c.dark ? "bg-white/10 text-brand-brass" : "bg-black/5 text-brand-brass"
                        }`}
                      >
                        <IconComp className="w-4 h-4" />
                      </div>
                      <h3 className="font-serif text-base sm:text-lg font-medium tracking-wide">
                        {c.name}
                      </h3>
                    </div>
                    <p
                      className={`text-xs font-light leading-relaxed ${
                        c.dark ? "text-white/70" : "text-brand-charcoal/75"
                      }`}
                    >
                      {c.description}
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href={c.href}
                      className={`inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-kicker uppercase group ${
                        c.dark
                          ? "text-brand-brass hover:text-white"
                          : "text-brand-brass hover:text-brand-charcoal"
                      } transition-colors`}
                    >
                      <span>LEARN MORE</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Skyscraper Photography with Zoom/Unmask */}
          <div className="img-unmask-container lg:col-span-5 relative min-h-[300px] lg:min-h-full rounded-[2px] overflow-hidden border border-brand-hairline shadow-sm">
            <Image
              src="/media/preview-ecosystem-skyscraper.jpg"
              alt="JUBOH Corporate Architectural Tower"
              fill
              className="img-unmask-reveal object-cover group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
