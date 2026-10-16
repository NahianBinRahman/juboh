"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ServiceIntro } from "@/components/sections/service-intro";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { QuietCta } from "@/components/sections/quiet-cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projectCaseStudies } from "@/lib/content";
import { ArrowRight, Filter } from "lucide-react";

export default function ProjectsPage() {
  const [selectedDiscipline, setSelectedDiscipline] = React.useState<string>("all");

  const disciplines = [
    { label: "All Disciplines", value: "all" },
    { label: "Real Estate Development", value: "real-estate" },
    { label: "Capital Advisory", value: "advisory" },
    { label: "Government Contracting", value: "government-contracting" },
  ];

  const filteredProjects = selectedDiscipline === "all"
    ? projectCaseStudies
    : projectCaseStudies.filter((p) => p.disciplineSlug === selectedDiscipline);

  return (
    <div>
      <ServiceIntro
        kicker="Development Portfolio"
        title="Selected Projects & Built Environments"
        description="A curated overview of master-development, commercial, and civic initiatives currently active or in planning stages across our operating disciplines."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-16 space-y-12">
        {/* Verification Status Notice */}
        <div className="p-8 border border-brand-hairline bg-white rounded-[2px] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 max-w-2xl">
            <Badge variant="default" className="mb-1">Governance Standard</Badge>
            <h3 className="font-serif text-2xl text-brand-charcoal">
              Portfolio Verification & Client Clearance Standard
            </h3>
            <p className="text-sm text-brand-charcoal/70 leading-relaxed font-light">
              In accordance with our governance standard, specific historical project facts, asset valuations, and photographic rights are published exclusively upon client documentation.
            </p>
          </div>
          <Link
            href="/contact"
            className="text-xs uppercase tracking-kicker font-semibold text-brand-brass hover:text-brand-charcoal transition-colors whitespace-nowrap pb-0.5 border-b border-brand-brass"
          >
            Inquire for Confidential Project Roster →
          </Link>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-brand-hairline">
          <div className="flex items-center gap-2 text-xs uppercase tracking-kicker text-brand-charcoal font-semibold">
            <Filter className="h-4 w-4 text-brand-brass" />
            <span>Filter by Operating Sector:</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {disciplines.map((d) => (
              <button
                key={d.value}
                onClick={() => setSelectedDiscipline(d.value)}
                className={`px-4 py-2 text-xs uppercase tracking-kicker font-medium rounded-[2px] transition-all duration-200 ${
                  selectedDiscipline === d.value
                    ? "bg-gradient-to-r from-[#B49360] via-[#C5A059] to-[#9E7F4E] text-white border border-[#D4AF37]/50 shadow-[0_2px_10px_rgba(180,147,96,0.3),inset_0_1px_0_rgba(255,255,255,0.4)]"
                    : "bg-white/80 backdrop-blur-sm border border-brand-hairline text-brand-charcoal/80 hover:border-brand-brass/60 hover:text-brand-brass hover:bg-white shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-16 text-center border border-dashed border-brand-hairline rounded-[2px] bg-white/60 space-y-4">
            <p className="font-serif text-2xl text-brand-charcoal">
              No Projects Active in This Category
            </p>
            <p className="text-sm text-brand-charcoal/60 max-w-md mx-auto">
              Please adjust your filter criteria or consult our development office for verified records.
            </p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedDiscipline("all")}
            >
              Reset Filter Selection
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.slug}
                className="bg-white border border-brand-hairline rounded-[2px] overflow-hidden flex flex-col justify-between group shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Cover Image */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-charcoal/5 border-b border-brand-hairline">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="navy">{project.discipline}</Badge>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <Badge variant="default" className="bg-white/95 text-brand-charcoal">
                      {project.status}
                    </Badge>
                  </div>
                </div>

                {/* Card Details */}
                <div className="p-6 sm:p-8 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-brand-charcoal/60">
                      <span>Role: <strong className="text-brand-charcoal">{project.role}</strong></span>
                      <span>{project.location}</span>
                    </div>

                    <h3 className="font-serif text-2xl text-brand-charcoal group-hover:text-brand-brass transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-brand-charcoal/70 leading-relaxed font-light line-clamp-3">
                      {project.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-brand-hairline">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-kicker text-brand-charcoal group-hover:text-brand-brass transition-colors"
                    >
                      <span>Examine Case Study</span>
                      <ArrowRight className="h-3 w-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <QuietCta
        kicker="Development Pipeline Inquiries"
        title="Inquire Regarding Active Opportunities"
        description="Our development and capital advisory teams are available to evaluate joint ventures, land acquisitions, and institutional syndications."
        primaryCtaText="Contact Development Office"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
