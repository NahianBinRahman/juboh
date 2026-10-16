"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const categories = [
    "All",
    "Residential",
    "Mixed-Use",
    "Institutional",
    "Government",
    "In Development",
  ];

  const projects = [
    {
      title: "Mixed-Use Development",
      location: "ATLANTA, GA",
      category: "Mixed-Use",
      image: "/media/preview-real-estate.jpg",
      href: "/projects/urban-mixed-use-development",
    },
    {
      title: "Educational Facility",
      location: "ATLANTA, GA",
      category: "Institutional",
      image: "/media/preview-community-foundation.jpg",
      href: "/projects/institutional-campus-advisory",
    },
    {
      title: "Public Infrastructure",
      location: "SOUTHEAST U.S.",
      category: "Government",
      image: "/media/preview-hero-architecture.jpg",
      href: "/projects",
    },
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory || activeCategory === "In Development");

  return (
    <section className="scroll-section bg-[#FAF8F5] text-brand-charcoal min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center py-6 sm:py-8 lg:py-6 border-b border-brand-hairline overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 my-auto flex flex-col justify-center space-y-5 lg:space-y-6">
        {/* Header Row */}
        <div className="section-header grid grid-cols-1 lg:grid-cols-12 gap-6 items-end justify-between border-b border-brand-hairline pb-4">
          <div className="lg:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase font-sans text-brand-brass">
                OUR PROJECTS
              </span>
              <span className="w-8 h-[1px] bg-brand-brass opacity-60" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.5rem] font-normal leading-[1.12] text-brand-charcoal tracking-tight">
              Real Projects. Stronger Communities.
            </h2>
          </div>

          <div className="lg:col-span-6 flex justify-end">
            <p className="text-xs sm:text-sm font-light text-brand-charcoal/75 leading-relaxed max-w-lg">
              We develop and manage projects that create economic opportunity, strengthen communities, and enhance the built environment.
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

        {/* 3 Projects Grid - Staggered */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="stagger-card group bg-white border border-brand-hairline rounded-[2px] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col card-hover-lift"
            >
              <div className="img-unmask-container relative aspect-[16/10] w-full overflow-hidden bg-brand-charcoal/5">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="img-unmask-reveal object-cover group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-4 sm:p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-serif text-lg text-brand-charcoal font-medium group-hover:text-brand-brass transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[11px] text-brand-charcoal/60 uppercase tracking-wider font-sans mt-0.5">
                    {project.location}
                  </p>
                </div>
                <div className="p-2 rounded-full border border-brand-hairline text-brand-charcoal/60 group-hover:border-brand-brass group-hover:text-brand-brass transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
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
            <Link href="/projects" className="inline-flex items-center gap-1.5">
              <span>VIEW ALL PROJECTS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
