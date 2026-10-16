"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function InsightsSection() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const categories = [
    "All",
    "Development",
    "Construction",
    "Government",
    "Markets",
    "Leadership",
  ];

  const articles = [
    {
      title: "The Future of Urban Development in Growing Markets",
      meta: "MARKET TRENDS | OCT 10, 2026",
      category: "Markets",
      image: "/media/preview-hero-architecture.jpg",
      href: "/news/institutional-real-estate-capital-trends",
    },
    {
      title: "Building Equitable Communities Through Strategic Development",
      meta: "IMPACT | SEP 25, 2026",
      category: "Development",
      image: "/media/preview-construction-site.jpg",
      href: "/news/public-private-partnership-advancement",
    },
    {
      title: "Navigating Government Contracting Opportunities",
      meta: "GOVERNMENT | SEP 12, 2026",
      category: "Government",
      image: "/media/preview-government-contracting.jpg",
      href: "/news/juboh-creative-direction-redesign",
    },
  ];

  const filteredArticles =
    activeCategory === "All"
      ? articles
      : articles.filter((a) => a.category === activeCategory);

  return (
    <section className="scroll-section bg-[#FAF8F5] text-brand-charcoal min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center py-6 sm:py-8 lg:py-6 border-b border-brand-hairline overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 my-auto flex flex-col justify-center space-y-5 lg:space-y-6">
        {/* Header Row */}
        <div className="section-header grid grid-cols-1 lg:grid-cols-12 gap-6 items-end justify-between border-b border-brand-hairline pb-4">
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase font-sans text-brand-brass">
                INSIGHTS
              </span>
              <span className="w-8 h-[1px] bg-brand-brass opacity-60" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] font-normal leading-[1.12] text-brand-charcoal tracking-tight">
              Ideas. Perspectives. Real-World Impact.
            </h2>
          </div>

          <div className="lg:col-span-6 flex justify-end">
            <p className="text-xs sm:text-sm font-light text-brand-charcoal/75 leading-relaxed max-w-lg">
              We share insights on real estate, construction, government contracting, economic development, and leadership.
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="section-header flex flex-wrap items-center gap-2 pt-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs transition-all font-medium ${
                activeCategory === cat
                  ? "bg-brand-charcoal text-white shadow-sm"
                  : "bg-white text-brand-charcoal/70 border border-brand-hairline hover:border-brand-brass/60"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3 Articles Grid - Staggered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Link
              key={article.title}
              href={article.href}
              className="stagger-card group bg-white border border-brand-hairline rounded-[2px] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col card-hover-lift"
            >
              <div className="img-unmask-container relative aspect-[16/10] w-full overflow-hidden bg-brand-charcoal/5">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="img-unmask-reveal object-cover group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                <h3 className="font-serif text-lg text-brand-charcoal font-medium group-hover:text-brand-brass transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-[10px] sm:text-[11px] font-sans font-medium uppercase tracking-wider text-brand-brass">
                  {article.meta}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA Button */}
        <div className="section-header pt-2 flex justify-start">
          <Button
            asChild
            variant="default"
            size="sm"
            className="h-9 sm:h-10 px-5 sm:px-6 text-[11px] tracking-kicker"
          >
            <Link href="/news" className="inline-flex items-center gap-1.5">
              <span>VIEW ALL INSIGHTS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
