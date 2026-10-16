import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, projectCaseStudies } from "@/lib/content";
import { ServiceIntro } from "@/components/sections/service-intro";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { QuietCta } from "@/components/sections/quiet-cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, MapPin, Building, ChevronLeft } from "lucide-react";

export async function generateStaticParams() {
  return projectCaseStudies.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | JUBOH Project Case Study`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Related projects
  const relatedProjects = projectCaseStudies
    .filter((p) => p.slug !== project.slug)
    .slice(0, 2);

  return (
    <div>
      {/* Project Top Intro */}
      <ServiceIntro
        kicker={project.discipline}
        title={project.title}
        description={project.summary}
      />

      {/* Case Study Content */}
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-16 space-y-16">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-kicker text-brand-charcoal/60">
          <Link href="/projects" className="hover:text-brand-brass transition-colors inline-flex items-center gap-1">
            <ChevronLeft className="h-3 w-3" />
            <span>All Projects</span>
          </Link>
          <span>/</span>
          <span className="text-brand-charcoal font-medium">{project.title}</span>
        </div>

        {/* Hero Architectural Gallery */}
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[2px] border border-brand-hairline bg-brand-charcoal/5 shadow-md">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute top-6 left-6 flex flex-wrap gap-2">
            <Badge variant="navy" className="backdrop-blur-sm">{project.discipline}</Badge>
            <Badge variant="default">{project.status}</Badge>
          </div>
          <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-brand-navy/90 backdrop-blur-md px-6 py-4 border border-white/10 text-white rounded-[2px] max-w-md">
            <p className="text-[9px] uppercase tracking-kicker text-brand-brass font-semibold">
              Project Location & Scope
            </p>
            <p className="font-serif text-lg font-normal mt-0.5">
              {project.location}
            </p>
          </div>
        </div>

        {/* Two-Column Details & Facts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Case Narrative */}
          <div className="lg:col-span-8 space-y-10">
            <div className="space-y-4">
              <EditorialKicker
                label="Master-Planning Overview"
                tagline="Scope & Execution"
              />
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal">
                Architectural Narrative & Civic Vision
              </h2>
              <div className="space-y-4 text-base sm:text-lg text-brand-charcoal/80 leading-relaxed font-light">
                {project.overview.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Program Highlights */}
            <div className="p-8 bg-white border border-brand-hairline rounded-[2px] space-y-4">
              <h3 className="font-serif text-2xl text-brand-charcoal">
                Key Development Highlights
              </h3>
              <div className="space-y-3">
                {project.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-brand-charcoal/80">
                    <Check className="h-4 w-4 text-brand-brass mt-1 shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Gallery Image If Available */}
            {project.gallery && project.gallery.length > 1 && (
              <div className="space-y-4">
                <h3 className="font-serif text-2xl text-brand-charcoal">
                  Architectural Perspectives
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {project.gallery.map((img, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-[16/10] overflow-hidden rounded-[2px] border border-brand-hairline bg-brand-charcoal/5"
                    >
                      <Image
                        src={img}
                        alt={`${project.title} perspective ${idx + 1}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Project Record Facts Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 bg-white border border-brand-hairline rounded-[2px] space-y-6 shadow-sm">
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-kicker text-brand-brass font-semibold">
                  Record Ledger
                </p>
                <h3 className="font-serif text-2xl text-brand-charcoal">
                  Project Record Facts
                </h3>
              </div>

              <div className="divide-y divide-brand-hairline text-sm">
                <div className="py-3 flex justify-between items-center">
                  <span className="text-brand-charcoal/60">Discipline</span>
                  <span className="font-medium text-brand-charcoal">{project.discipline}</span>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <span className="text-brand-charcoal/60">JUBOH Role</span>
                  <span className="font-medium text-brand-charcoal">{project.role}</span>
                </div>
                <div className="py-3 flex justify-between items-center">
                  <span className="text-brand-charcoal/60">Project Status</span>
                  <Badge variant="outline">{project.status}</Badge>
                </div>
                {Object.entries(project.specifications).map(([key, val]) => (
                  <div key={key} className="py-3 flex flex-col gap-1">
                    <span className="text-xs text-brand-charcoal/60">{key}</span>
                    <span className="font-medium text-brand-charcoal text-xs">{val}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-brand-hairline">
                <Button asChild variant="default" className="w-full">
                  <Link href="/contact">Inquire Regarding This Record</Link>
                </Button>
              </div>
            </div>

            {/* Governance Disclaimer */}
            <div className="p-4 bg-brand-ivory border border-brand-hairline rounded-[2px] text-xs text-brand-charcoal/60 space-y-1">
              <p className="font-semibold uppercase tracking-kicker text-[10px] text-brand-charcoal/70">
                Confidentiality Notice
              </p>
              <p>
                Public dissemination of specific financial parameters and partner commitments is subject to institutional non-disclosure agreements.
              </p>
            </div>
          </div>
        </div>

        {/* Related Projects */}
        <div className="pt-16 border-t border-brand-hairline space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <EditorialKicker
                label="Related Engagements"
                tagline="Cross-Discipline Case Studies"
              />
              <h2 className="font-serif text-3xl text-brand-charcoal mt-1">
                Other Development Case Studies
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-xs uppercase tracking-kicker font-semibold text-brand-charcoal hover:text-brand-brass transition-colors"
            >
              All Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedProjects.map((rel) => (
              <div
                key={rel.slug}
                className="p-6 bg-white border border-brand-hairline rounded-[2px] flex flex-col justify-between space-y-4 group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-brand-charcoal/60 mb-2">
                    <span className="text-brand-brass font-medium uppercase tracking-kicker">{rel.discipline}</span>
                    <Badge variant="outline">{rel.status}</Badge>
                  </div>
                  <h3 className="font-serif text-2xl text-brand-charcoal group-hover:text-brand-brass transition-colors">
                    {rel.title}
                  </h3>
                  <p className="text-xs text-brand-charcoal/70 mt-1 line-clamp-2">
                    {rel.summary}
                  </p>
                </div>
                <div className="pt-2 border-t border-brand-hairline">
                  <Link
                    href={`/projects/${rel.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-kicker text-brand-charcoal group-hover:text-brand-brass transition-colors"
                  >
                    <span>Read Case Study</span>
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
