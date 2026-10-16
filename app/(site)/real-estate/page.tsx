import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ServiceIntro } from "@/components/sections/service-intro";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { QuietCta } from "@/components/sections/quiet-cta";
import { Badge } from "@/components/ui/badge";
import { projectCaseStudies } from "@/lib/content";
import { ArrowRight, Building, MapPin, Hammer, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Real Estate Development",
  description:
    "Master-development, owner representation, and civic-scale built environments by JUBOH Companies International.",
};

export default function RealEstatePage() {
  const lifecyclePhases = [
    {
      num: "01",
      title: "Site Identification & Land Assembly",
      description:
        "Rigorous demographic analysis, municipal zoning evaluation, and parcel acquisition designed for community integration.",
    },
    {
      num: "02",
      title: "Entitlements & Civic Approvals",
      description:
        "Proactive collaboration with city councils, neighborhood commissions, and planning departments to secure lasting development rights.",
    },
    {
      num: "03",
      title: "Capital Stack Architecture",
      description:
        "Structuring conservative debt and equity capitalization with institutional lenders, equity funds, and public incentive programs.",
    },
    {
      num: "04",
      title: "Owner's Representation & Delivery",
      description:
        "On-site project controls, architectural team coordination, contractor oversight, and budget adherence throughout construction.",
    },
    {
      num: "05",
      title: "Asset Commissioning & Stewardship",
      description:
        "Seamless delivery, tenant onboarding, and long-term operational alignment to ensure enduring civic and commercial vitality.",
    },
  ];

  const reProjects = projectCaseStudies.filter(
    (p) => p.disciplineSlug === "real-estate"
  );

  return (
    <div>
      <ServiceIntro
        kicker="Core Operating Discipline"
        title="Real Estate Development & Built Environments"
        description="Advancing master-development, commercial, and residential projects with architectural permanence, environmental discipline, and civic alignment across key metropolitan markets."
      />

      {/* Flagship Editorial Split */}
      <section className="py-20 sm:py-28 bg-white border-b border-brand-hairline">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[2px] border border-brand-hairline bg-brand-charcoal/5 group">
                <Image
                  src="/media/preview-real-estate.jpg"
                  alt="JUBOH Master-Development Perspective"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto bg-brand-navy/90 backdrop-blur-md px-5 py-3 border border-white/10 text-white rounded-[2px]">
                  <p className="text-[9px] uppercase tracking-kicker text-brand-brass font-semibold">
                    Master-Development Standard
                  </p>
                  <p className="font-serif text-base font-normal mt-0.5">
                    Enduring Urban Infill & Residential Communities
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <EditorialKicker
                label="Development Methodology"
                tagline="Built for Institutional Value"
              />

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-normal leading-[1.12] text-brand-charcoal text-balance">
                Bridging institutional underwriting with community stewardship.
              </h2>

              <p className="text-base sm:text-lg font-light text-brand-charcoal/85 leading-relaxed font-sans">
                At JUBOH, development is never merely transactional. We view every parcel as an opportunity to establish durable physical architecture that serves residents, tenants, and surrounding neighborhoods for decades.
              </p>

              <div className="space-y-4 text-sm text-brand-charcoal/75 leading-relaxed font-light">
                <p>
                  Our team provides direct oversight from conceptual master planning through final commissioning, maintaining an unyielding standard of craft, budget control, and stakeholder transparency.
                </p>
                <p>
                  We collaborate with leading architectural firms, regional municipalities, and institutional capital partners to create places where commerce, culture, and community converge.
                </p>
              </div>

              <div className="pt-2">
                <Badge variant="default">Master-Development • Owner Representation • Program Oversight</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development Lifecycle Process */}
      <section className="py-24 sm:py-32 bg-brand-ivory border-b border-brand-hairline">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-16">
          <div className="max-w-2xl space-y-4">
            <EditorialKicker
              label="Operating Process"
              tagline="The JUBOH Development Lifecycle"
            />
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12] text-brand-charcoal">
              Rigorous oversight across all phases of development.
            </h2>
            <p className="text-base text-brand-charcoal/70 font-light leading-relaxed">
              Our structured process ensures predictable timelines, risk-adjusted returns, and architectural excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {lifecyclePhases.map((phase) => (
              <div
                key={phase.num}
                className="p-6 bg-white border border-brand-hairline rounded-[2px] space-y-3 flex flex-col justify-between"
              >
                <span className="font-serif text-3xl text-brand-brass font-normal">
                  {phase.num}
                </span>
                <div className="space-y-2">
                  <h3 className="font-serif text-lg text-brand-charcoal font-medium leading-snug">
                    {phase.title}
                  </h3>
                  <p className="text-xs text-brand-charcoal/70 leading-relaxed font-light">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight */}
      <section className="py-24 sm:py-32 bg-white border-b border-brand-hairline">
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-6 border-b border-brand-hairline">
            <div>
              <EditorialKicker
                label="Selected Work"
                tagline="Real Estate Portfolio Pipeline"
              />
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal mt-1">
                Featured Built Environment Projects
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-kicker font-semibold text-brand-charcoal hover:text-brand-brass transition-colors pb-0.5 border-b border-brand-charcoal/30 hover:border-brand-brass"
            >
              <span>View Full Portfolio Index</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {reProjects.map((project) => (
              <div
                key={project.slug}
                className="bg-brand-ivory border border-brand-hairline rounded-[2px] overflow-hidden flex flex-col justify-between group"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-charcoal/5 border-b border-brand-hairline">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="navy">{project.status}</Badge>
                  </div>
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between text-xs text-brand-charcoal/60">
                    <span>Role: <strong className="text-brand-charcoal">{project.role}</strong></span>
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-brand-charcoal group-hover:text-brand-brass transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-brand-charcoal/70 leading-relaxed font-light">
                    {project.summary}
                  </p>
                  <div className="pt-4 border-t border-brand-hairline">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-kicker font-semibold text-brand-charcoal group-hover:text-brand-brass transition-colors"
                    >
                      <span>Read Full Project Case Study</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <QuietCta
        kicker="Development Inquiries"
        title="Collaborate on a Real Estate Initiative"
        description="We evaluate land parcels, joint ventures, and municipal master-development opportunities with institutional capital partners."
        primaryCtaText="Submit Development Inquiry"
        primaryCtaHref="/contact"
      />
    </div>
  );
}
