import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function OperatingDisciplines() {
  return (
    <div className="space-y-0">
      {/* 1. Real Estate Development: 60% Dominant Image Split */}
      <section className="bg-brand-ivory text-brand-charcoal min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center py-6 sm:py-8 lg:py-6 border-b border-brand-hairline overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* 60% Dominant Architectural Visual Column */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full max-h-[52vh] overflow-hidden rounded-[2px] border border-brand-hairline bg-brand-charcoal/5 group">
                <Image
                  src="/media/preview-real-estate.jpg"
                  alt="JUBOH Real Estate Development Practice"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-auto bg-brand-navy/90 backdrop-blur-md px-4 py-2.5 border border-white/10 text-white rounded-[2px]">
                  <p className="text-[9px] uppercase tracking-kicker text-brand-brass font-semibold">
                    Core Operating Discipline
                  </p>
                  <p className="font-serif text-sm sm:text-base font-normal mt-0.5">
                    Master-Development & Built Environments
                  </p>
                </div>
              </div>
            </div>

            {/* 40% Editorial Narrative Column */}
            <div className="lg:col-span-5 space-y-4 lg:space-y-5">
              <EditorialKicker
                label="Discipline 01"
                tagline="Real Estate Development"
              />

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.35rem] font-normal leading-[1.14] text-brand-charcoal text-balance">
                Architectural permanence, civic scale, and disciplined execution.
              </h2>

              <p className="text-sm sm:text-base font-light text-brand-charcoal/85 leading-relaxed">
                We develop master-planned residential communities, mixed-use commercial centers, and institutional facilities designed for enduring economic and civic value.
              </p>

              <div className="space-y-2.5 pt-1 text-xs sm:text-sm text-brand-charcoal/75">
                <div className="flex items-start gap-2">
                  <span className="text-brand-brass mt-0.5 font-serif text-base leading-none">§</span>
                  <p>Site identification, municipal entitlements, and land assembly.</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-brass mt-0.5 font-serif text-base leading-none">§</span>
                  <p>Comprehensive program management and owner&apos;s representation.</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-brand-brass mt-0.5 font-serif text-base leading-none">§</span>
                  <p>Community-aligned master development with institutional capital partners.</p>
                </div>
              </div>

              <div className="pt-3 border-t border-brand-hairline">
                <Link
                  href="/real-estate"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-kicker font-semibold text-brand-charcoal hover:text-brand-brass transition-colors pb-1 border-b border-brand-charcoal/30 hover:border-brand-brass group"
                >
                  <span>Explore Real Estate Development Practice</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Business Strategy & Capital Advisory: Reversed Composition */}
      <section className="bg-white text-brand-charcoal min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center py-6 sm:py-8 lg:py-6 border-b border-brand-hairline overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Narrative (Reversed) */}
            <div className="lg:col-span-5 space-y-4 lg:space-y-5">
              <EditorialKicker
                label="Discipline 02"
                tagline="Capital Advisory & Strategy"
              />

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.35rem] font-normal leading-[1.14] text-brand-charcoal text-balance">
                Strategic capital structuring and enterprise advisory.
              </h2>

              <p className="text-sm sm:text-base font-light text-brand-charcoal/85 leading-relaxed">
                Providing institutional advisory, development finance structuring, and market guidance to corporate leaders, banks, universities, and municipalities.
              </p>

              <div className="space-y-3 text-xs sm:text-sm text-brand-charcoal/75 leading-relaxed">
                <p>
                  Our advisory practice is structured around rigorous quantitative analysis and real operating market experience, avoiding generic coaching or abstract wealth formulas.
                </p>
                <p>
                  We assist client partners in evaluating complex transactions, aligning institutional debt and equity partners, and navigating public-private development financing.
                </p>
              </div>

              <div className="pt-3 border-t border-brand-hairline">
                <Link
                  href="/advisory"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-kicker font-semibold text-brand-charcoal hover:text-brand-brass transition-colors pb-1 border-b border-brand-charcoal/30 hover:border-brand-brass group"
                >
                  <span>Explore Capital Advisory Practice</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: Visual in 16:10 Ratio */}
            <div className="lg:col-span-7">
              <div className="relative aspect-[16/10] w-full max-h-[52vh] overflow-hidden rounded-[2px] border border-brand-hairline bg-brand-charcoal/5 group">
                <Image
                  src="/media/preview-capital-advisory.jpg"
                  alt="JUBOH Capital Advisory & Strategy"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-auto bg-brand-navy/90 backdrop-blur-md px-4 py-2.5 border border-white/10 text-white rounded-[2px]">
                  <p className="text-[9px] uppercase tracking-kicker text-brand-brass font-semibold">
                    Advisory Practice
                  </p>
                  <p className="font-serif text-sm sm:text-base font-normal mt-0.5">
                    Institutional Strategy & Capital Architecture
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Government Contracting: Midnight Navy Interlude with Typographic Columns */}
      <section className="bg-brand-navy text-brand-ivory min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center py-6 sm:py-8 lg:py-6 border-b border-white/10 relative overflow-hidden">
        <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 my-auto space-y-6 lg:space-y-8">
          <div className="max-w-3xl space-y-2.5">
            <EditorialKicker
              label="Discipline 03"
              tagline="Government Contracting & Public Sector"
              dark
            />
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal leading-[1.14] text-white text-balance">
              Disciplined public-sector execution and municipal infrastructure.
            </h2>
            <p className="text-xs sm:text-sm text-white/75 font-light leading-relaxed">
              Supporting municipal, state, and federal agencies with program management, construction oversight, and regulatory compliance.
            </p>
          </div>

          {/* 3 Distinct Typographic Columns separated by hairlines */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 pt-4 border-t border-white/10">
            <div className="space-y-2.5 p-4 sm:p-5 bg-white/5 border border-white/10 rounded-[2px]">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-kicker text-brand-brass font-semibold font-sans">
                Capability 01
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-white">
                Procurement & Capture Strategy
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-light line-clamp-3 sm:line-clamp-4">
                Targeted pursuit of municipal and federal opportunities with rigorous adherence to FAR requirements, registration compliance, and transparent proposal development.
              </p>
            </div>

            <div className="space-y-2.5 p-4 sm:p-5 bg-white/5 border border-white/10 rounded-[2px]">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-kicker text-brand-brass font-semibold font-sans">
                Capability 02
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-white">
                Program & Contract Compliance
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-light line-clamp-3 sm:line-clamp-4">
                Comprehensive auditability, schedule management, cost control, and risk mitigation systems designed to satisfy demanding public-sector oversight standards.
              </p>
            </div>

            <div className="space-y-2.5 p-4 sm:p-5 bg-white/5 border border-white/10 rounded-[2px]">
              <span className="text-[9px] sm:text-[10px] uppercase tracking-kicker text-brand-brass font-semibold font-sans">
                Capability 03
              </span>
              <h3 className="font-serif text-lg sm:text-xl text-white">
                Civic Program Execution
              </h3>
              <p className="text-xs text-white/70 leading-relaxed font-light line-clamp-3 sm:line-clamp-4">
                Post-award administration and on-site project management delivering civic facilities, municipal infrastructure, and institutional physical programs.
              </p>
            </div>
          </div>

          <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-white/10">
            <p className="text-[11px] sm:text-xs text-white/60">
              Procurement inquiries are routed through our dedicated government contracting office.
            </p>
            <Link
              href="/government-contracting"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-kicker font-semibold text-brand-brass hover:text-white transition-colors"
            >
              <span>View Contracting Capabilities & Sectors</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
