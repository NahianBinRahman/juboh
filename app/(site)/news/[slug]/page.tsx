import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getArticleBySlug, newsArticles } from "@/lib/content";
import { ServiceIntro } from "@/components/sections/service-intro";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { QuietCta } from "@/components/sections/quiet-cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Clock, Share2, ArrowRight } from "lucide-react";

export async function generateStaticParams() {
  return newsArticles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Article Not Found" };
  return {
    title: `${article.title} | JUBOH Editorial`,
    description: article.lead,
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  // Related articles
  const relatedArticles = newsArticles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <div>
      {/* Header Intro */}
      <ServiceIntro
        kicker={article.category}
        title={article.title}
        description={article.lead}
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-16 space-y-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-kicker text-brand-charcoal/60">
          <Link href="/news" className="hover:text-brand-brass transition-colors inline-flex items-center gap-1">
            <ChevronLeft className="h-3 w-3" />
            <span>All Insights</span>
          </Link>
          <span>/</span>
          <span className="text-brand-charcoal font-medium line-clamp-1">{article.title}</span>
        </div>

        {/* Reading Article Shell */}
        <div className="max-w-3xl mx-auto space-y-10">
          {/* Article Header Meta */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-brand-hairline text-xs">
            <div className="flex items-center gap-3">
              <span className="text-brand-charcoal/60 uppercase tracking-kicker font-medium">
                Published: {article.date}
              </span>
              <span>•</span>
              <span className="inline-flex items-center gap-1 text-brand-charcoal/60">
                <Clock className="h-3.5 w-3.5 text-brand-brass" />
                <span>{article.readTime}</span>
              </span>
            </div>
            <Badge variant="outline">{article.category}</Badge>
          </div>

          {/* Optional Featured Image */}
          {article.coverImage && (
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] border border-brand-hairline bg-brand-charcoal/5 shadow-sm">
              <Image
                src={article.coverImage}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 768px"
                priority
              />
            </div>
          )}

          {/* Article Body Typography */}
          <div className="space-y-6 text-base sm:text-lg text-brand-charcoal/85 leading-relaxed font-light font-sans max-w-[68ch]">
            <p className="text-xl sm:text-2xl font-serif text-brand-charcoal font-normal leading-relaxed pb-2 border-b border-brand-hairline/60">
              {article.lead}
            </p>

            {article.body.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>

          {/* Tags & Topic Categories */}
          <div className="pt-8 border-t border-brand-hairline space-y-3">
            <p className="text-xs uppercase tracking-kicker text-brand-charcoal font-semibold">
              Topic Classifications:
            </p>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs uppercase tracking-wider text-brand-charcoal/70 bg-white border border-brand-hairline px-3 py-1 rounded-[2px]"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Row */}
          <div className="pt-6 border-t border-brand-hairline flex flex-wrap items-center justify-between gap-4">
            <Button asChild variant="outline" size="sm">
              <Link href="/news" className="inline-flex items-center gap-1.5">
                <ChevronLeft className="h-3.5 w-3.5" />
                <span>Return to All Insights</span>
              </Link>
            </Button>

            <Button asChild variant="editorialLink">
              <Link href="/contact">Inquire Regarding this Topic →</Link>
            </Button>
          </div>
        </div>

        {/* Related Insights Grid */}
        <div className="pt-16 border-t border-brand-hairline space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <EditorialKicker
                label="Further Reading"
                tagline="Related Editorial Insights"
              />
              <h2 className="font-serif text-3xl text-brand-charcoal mt-1">
                More From JUBOH Perspectives
              </h2>
            </div>
            <Link
              href="/news"
              className="text-xs uppercase tracking-kicker font-semibold text-brand-charcoal hover:text-brand-brass transition-colors"
            >
              Full Index →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedArticles.map((rel) => (
              <div
                key={rel.slug}
                className="p-8 bg-white border border-brand-hairline rounded-[2px] flex flex-col justify-between space-y-4 group shadow-sm"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-brand-charcoal/60">
                    <span>{rel.date}</span>
                    <Badge variant="outline">{rel.category}</Badge>
                  </div>
                  <h3 className="font-serif text-2xl text-brand-charcoal group-hover:text-brand-brass transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-charcoal/70 line-clamp-2 leading-relaxed">
                    {rel.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-brand-hairline">
                  <Link
                    href={`/news/${rel.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-kicker text-brand-charcoal group-hover:text-brand-brass transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <QuietCta />
    </div>
  );
}
