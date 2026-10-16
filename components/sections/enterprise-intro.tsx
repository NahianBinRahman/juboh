import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Building2,
  HardHat,
  Landmark,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

export function EnterpriseIntro() {
  const cards = [
    {
      title: "Real Estate Development",
      description:
        "Mixed-use, multifamily, affordable housing, and institutional projects that create communities and long-term value.",
      image: "/media/preview-real-estate.jpg",
      href: "/real-estate",
      icon: Building2,
    },
    {
      title: "Construction Program Management",
      description:
        "Owner's representation, program oversight, cost and schedule management, and risk mitigation for complex projects.",
      image: "/media/preview-construction-site.jpg",
      href: "/companies",
      icon: HardHat,
    },
    {
      title: "Government Contracting",
      description:
        "Strategic advisory, capture support, and compliance for federal, state, and local opportunities.",
      image: "/media/preview-government-contracting.jpg",
      href: "/government-contracting",
      icon: Landmark,
    },
    {
      title: "Capital Advisory",
      description:
        "Development finance, capital raises, public-private partnerships, and strategic investments.",
      image: "/media/preview-capital-advisory.jpg",
      href: "/advisory",
      icon: TrendingUp,
    },
  ];

  return (
    <section className="bg-brand-ivory text-brand-charcoal min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center py-6 sm:py-8 lg:py-4 border-b border-brand-hairline overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 my-auto flex flex-col justify-center space-y-6 lg:space-y-7">
        {/* Header Row matching buyer mockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end justify-between">
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase font-sans text-brand-brass">
                OUR EXPERTISE
              </span>
              <span className="w-8 h-[1px] bg-brand-brass opacity-60" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] font-normal leading-[1.12] text-brand-charcoal tracking-tight">
              An Integrated Platform for Real-World Impact.
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-6">
            <p className="text-xs sm:text-sm font-light text-brand-charcoal/75 leading-relaxed max-w-md">
              From real estate development to government contracting, we bring together capital, expertise, and execution to create economic opportunity and stronger communities.
            </p>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="h-9 px-4 text-[11px] tracking-kicker shrink-0"
            >
              <Link href="/companies" className="inline-flex items-center gap-1.5">
                <span>EXPLORE OUR SERVICES</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </Button>
          </div>
        </div>

        {/* 4 Cards Grid matching buyer mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card) => {
            const IconComp = card.icon;
            return (
              <div
                key={card.title}
                className="group flex flex-col bg-white border border-brand-hairline rounded-[2px] overflow-hidden hover:border-brand-brass/60 transition-all shadow-sm hover:shadow-md"
              >
                {/* Card Visual with badge */}
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-brand-navy/10">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-2.5 left-2.5 p-1.5 bg-brand-navy/90 backdrop-blur-sm border border-white/10 text-brand-brass rounded-[2px]">
                    <IconComp className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 sm:p-5 lg:p-4 flex-1 flex flex-col justify-between space-y-3">
                  <div className="space-y-1.5">
                    <h3 className="font-serif text-lg sm:text-xl text-brand-charcoal font-medium leading-snug group-hover:text-brand-brass transition-colors">
                      {card.title}
                    </h3>
                    <p className="text-xs text-brand-charcoal/70 font-light leading-relaxed line-clamp-2 sm:line-clamp-3">
                      {card.description}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-brand-hairline/60">
                    <Link
                      href={card.href}
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
