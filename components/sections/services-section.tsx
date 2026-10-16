"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Building2, HardHat, Landmark, Briefcase, ArrowRight } from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Real Estate Development",
      description: "Site selection, entitlements, financing, and execution for residential, mixed-use, and institutional projects.",
      image: "/media/preview-real-estate.jpg",
      href: "/real-estate",
      icon: Building2,
    },
    {
      title: "Construction Program Management",
      description: "Owner's representation, program oversight, cost and schedule management, and risk mitigation.",
      image: "/media/preview-construction-site.jpg",
      href: "/companies",
      icon: HardHat,
    },
    {
      title: "Government Contracting",
      description: "Strategy, compliance, capture support, and execution for federal, state, and local opportunities.",
      image: "/media/preview-government-contracting.jpg",
      href: "/government-contracting",
      icon: Landmark,
    },
    {
      title: "Strategic Advisory",
      description: "Real estate strategy, capital advisory, market analysis, and organizational development.",
      image: "/media/preview-capital-advisory.jpg",
      href: "/advisory",
      icon: Briefcase,
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
                OUR SERVICES
              </span>
              <span className="w-8 h-[1px] bg-brand-brass opacity-60" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] font-normal leading-[1.12] text-brand-charcoal tracking-tight">
              An Integrated Approach to Development and Impact.
            </h2>
          </div>

          <div className="lg:col-span-6 flex justify-end">
            <p className="text-xs sm:text-sm font-light text-brand-charcoal/75 leading-relaxed max-w-lg">
              We provide end-to-end real estate development, construction program management, and strategic advisory services for public, private, and institutional partners.
            </p>
          </div>
        </div>

        {/* 4 Services Grid - Staggered entrance */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.title}
                className="stagger-card group flex flex-col bg-[#FAF8F5] border border-brand-hairline rounded-[2px] overflow-hidden hover:border-brand-brass/60 transition-all shadow-sm hover:shadow-md card-hover-lift"
              >
                {/* Visual with Scale/Unmask */}
                <div className="img-unmask-container relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-brand-navy/10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="img-unmask-reveal object-cover group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Body */}
                <div className="p-4 sm:p-5 lg:p-4 flex-1 flex flex-col justify-between space-y-3 bg-white">
                  <div className="space-y-2">
                    <div className="p-1.5 w-fit rounded-[2px] bg-brand-navy/5 text-brand-brass">
                      <IconComp className="w-4 h-4 stroke-[1.5]" />
                    </div>
                    <h3 className="font-serif text-lg sm:text-xl text-brand-charcoal font-medium leading-snug group-hover:text-brand-brass transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-brand-charcoal/70 font-light leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-brand-hairline/60">
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-kicker uppercase text-brand-brass hover:text-brand-navy transition-colors group/link"
                    >
                      <span>LEARN MORE</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
