import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function SelectedWork() {
  const projects = [
    {
      slug: "urban-mixed-use-development",
      title: "Mixed-Use Urban Infill Development",
      discipline: "Real Estate Development",
      role: "Master Developer",
      status: "Planning & Entitlements",
      image: "/media/preview-real-estate.jpg",
      summary: "A sustainable urban infill project combining residential, retail, and public community spaces with architectural permanence.",
    },
    {
      slug: "institutional-campus-advisory",
      title: "Institutional Strategic Campus Advisory",
      discipline: "Capital Advisory",
      role: "Strategic Capital Advisor",
      status: "Advisory Phase",
      image: "/media/preview-capital-advisory.jpg",
      summary: "Advising institutional leadership on long-range capital planning, asset optimization, and public-private partnership models.",
    },
  ];

  return (
    <section className="bg-brand-ivory text-brand-charcoal min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center py-6 sm:py-8 lg:py-6 border-b border-brand-hairline overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 my-auto flex flex-col justify-center space-y-5 lg:space-y-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-4 border-b border-brand-hairline">
          <div className="space-y-2 max-w-2xl">
            <EditorialKicker
              label="Selected Work"
              tagline="Built Environments & Strategic Advisory"
            />
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.14] text-brand-charcoal text-balance">
              Disciplined projects advancing community and institutional scale.
            </h2>
          </div>

          <div className="lg:text-right space-y-1">
            <Badge variant="outline">Pipeline Verification Notice</Badge>
            <p className="text-[11px] text-brand-charcoal/60 max-w-sm">
              Portfolio case studies display verified project parameters and client clearances.
            </p>
          </div>
        </div>

        {/* 2-Column High-End Case Study Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((item) => (
            <div
              key={item.slug}
              className="bg-white border border-brand-hairline rounded-[2px] overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-md transition-all"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/9] w-full max-h-[26vh] overflow-hidden bg-brand-charcoal/5 border-b border-brand-hairline">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-3 left-3">
                  <Badge variant="navy" className="backdrop-blur-sm text-[10px]">
                    {item.discipline}
                  </Badge>
                </div>
              </div>

              {/* Case Details */}
              <div className="p-4 sm:p-5 lg:p-4 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-brand-charcoal/60 pb-1.5 border-b border-brand-hairline">
                    <span>Role: <strong className="text-brand-charcoal font-medium">{item.role}</strong></span>
                    <Badge variant="default" className="text-[10px]">{item.status}</Badge>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl text-brand-charcoal group-hover:text-brand-brass transition-colors leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-brand-charcoal/70 leading-relaxed font-light line-clamp-2">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-2 border-t border-brand-hairline">
                  <Link
                    href={`/projects/${item.slug}`}
                    className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-kicker font-semibold text-brand-charcoal group-hover:text-brand-brass transition-colors"
                  >
                    <span>View Project Case Study</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link to Full Project Index */}
        <div className="pt-2 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-kicker font-semibold text-brand-charcoal hover:text-brand-brass transition-colors pb-1 border-b border-brand-charcoal/30 hover:border-brand-brass"
          >
            <span>View All Development Case Studies & Portfolio Roster</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
