import * as React from "react";
import Link from "next/link";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function HomepageNews() {
  const articles = [
    {
      slug: "institutional-real-estate-capital-trends",
      title: "Navigating Institutional Real Estate Capital in Evolving Markets",
      date: "September 2026",
      category: "Market Insights",
      excerpt: "An analysis of disciplined capital structuring, municipal alignment, and risk-adjusted development models in metropolitan regions.",
    },
    {
      slug: "public-private-partnership-advancement",
      title: "The Growing Imperative of Public-Private Alignment in Civic Infrastructure",
      date: "August 2026",
      category: "Government Contracting",
      excerpt: "How forward-thinking municipalities and private developers unite to advance community-scale infrastructure programs.",
    },
    {
      slug: "juboh-creative-direction-redesign",
      title: "JUBOH Companies International Announces Enterprise Brand Evolution",
      date: "September 2026",
      category: "Corporate Press",
      excerpt: "Reaffirming the institutional north star: 'Building an Exceptional Future, Together!' with focused multi-disciplinary operations.",
    },
  ];

  return (
    <section className="bg-brand-ivory text-brand-charcoal min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center py-6 sm:py-8 lg:py-6 border-b border-brand-hairline overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 my-auto flex flex-col justify-center space-y-6 lg:space-y-7">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-brand-hairline">
          <div className="space-y-2 max-w-2xl">
            <EditorialKicker
              label="Insights & Recognition"
              tagline="Corporate Press & Editorial"
            />
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.14] text-brand-charcoal">
              Perspectives, market insights, and enterprise updates.
            </h2>
          </div>

          <div>
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-kicker font-semibold text-brand-charcoal hover:text-brand-brass transition-colors pb-1 border-b border-brand-charcoal/30 hover:border-brand-brass group"
            >
              <span>View All News & Press</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Typographic Article Rows */}
        <div className="divide-y divide-brand-hairline border-y border-brand-hairline">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="py-4 lg:py-5 grid grid-cols-1 lg:grid-cols-12 gap-4 items-baseline group"
            >
              <div className="lg:col-span-3 space-y-1">
                <span className="text-[11px] uppercase tracking-kicker text-brand-charcoal/60 font-medium font-sans">
                  {article.date}
                </span>
                <div>
                  <Badge variant="outline" className="text-[10px]">{article.category}</Badge>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-1.5">
                <h3 className="font-serif text-lg sm:text-xl text-brand-charcoal group-hover:text-brand-brass transition-colors leading-snug">
                  <Link href={`/news/${article.slug}`}>{article.title}</Link>
                </h3>
                <p className="text-xs text-brand-charcoal/70 leading-relaxed font-light line-clamp-2 max-w-[65ch]">
                  {article.excerpt}
                </p>
              </div>

              <div className="lg:col-span-2 flex lg:justify-end">
                <Link
                  href={`/news/${article.slug}`}
                  className="text-[11px] uppercase tracking-kicker font-semibold text-brand-charcoal group-hover:text-brand-brass transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-3 w-3" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
