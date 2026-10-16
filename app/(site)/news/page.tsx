"use client";

import * as React from "react";
import Link from "next/link";
import { ServiceIntro } from "@/components/sections/service-intro";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { QuietCta } from "@/components/sections/quiet-cta";
import { Badge } from "@/components/ui/badge";
import { newsArticles } from "@/lib/content";
import { ArrowRight, Clock, Filter } from "lucide-react";

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");

  const categories = [
    { label: "All Insights & Press", value: "all" },
    { label: "Market Insights", value: "Market Insights" },
    { label: "Corporate Press", value: "Corporate Press" },
    { label: "Government Contracting", value: "Government Contracting" },
  ];

  const filteredArticles = selectedCategory === "all"
    ? newsArticles
    : newsArticles.filter((a) => a.category === selectedCategory);

  return (
    <div>
      <ServiceIntro
        kicker="Corporate Editorial & Press"
        title="Perspectives, Market Insights & Announcements"
        description="Thoughtful commentary on real estate development, capital markets, public infrastructure, and enterprise governance from JUBOH Companies International."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-16 space-y-12">
        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-brand-hairline">
          <div className="flex items-center gap-2 text-xs uppercase tracking-kicker text-brand-charcoal font-semibold">
            <Filter className="h-4 w-4 text-brand-brass" />
            <span>Category Filter:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c.value}
                onClick={() => setSelectedCategory(c.value)}
                className={`px-4 py-2 text-xs uppercase tracking-kicker font-medium rounded-[2px] transition-all duration-200 ${
                  selectedCategory === c.value
                    ? "bg-gradient-to-r from-[#B49360] via-[#C5A059] to-[#9E7F4E] text-white border border-[#D4AF37]/50 shadow-[0_2px_10px_rgba(180,147,96,0.3),inset_0_1px_0_rgba(255,255,255,0.4)]"
                    : "bg-white/80 backdrop-blur-sm border border-brand-hairline text-brand-charcoal/80 hover:border-brand-brass/60 hover:text-brand-brass hover:bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Editorial Articles Directory */}
        <div className="divide-y divide-brand-hairline border-y border-brand-hairline bg-white/50">
          {filteredArticles.map((article) => (
            <article
              key={article.slug}
              className="py-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group hover:bg-white/80 transition-colors px-4 sm:px-6 rounded-[2px]"
            >
              {/* Meta Column */}
              <div className="lg:col-span-3 space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-kicker text-brand-charcoal/60 font-medium">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{article.readTime}</span>
                  </span>
                </div>
                <div>
                  <Badge variant="outline">{article.category}</Badge>
                </div>
              </div>

              {/* Title & Excerpt Column */}
              <div className="lg:col-span-7 space-y-3">
                <h2 className="font-serif text-2xl sm:text-3xl text-brand-charcoal group-hover:text-brand-brass transition-colors leading-snug">
                  <Link href={`/news/${article.slug}`}>{article.title}</Link>
                </h2>
                <p className="text-sm sm:text-base text-brand-charcoal/70 leading-relaxed font-light max-w-[65ch]">
                  {article.excerpt}
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  {article.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-wider text-brand-charcoal/50 bg-brand-charcoal/5 px-2 py-0.5 rounded-[2px]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read Action Column */}
              <div className="lg:col-span-2 flex lg:justify-end pt-2">
                <Link
                  href={`/news/${article.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-kicker font-semibold text-brand-charcoal group-hover:text-brand-brass transition-colors pb-0.5 border-b border-brand-charcoal/30 group-hover:border-brand-brass"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      <QuietCta
        kicker="Media & Press Inquiries"
        title="Connect with Institutional Communications"
        description="For press releases, executive interview requests, or official publications, contact our corporate communications office."
        primaryCtaText="Contact Communications Team"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
