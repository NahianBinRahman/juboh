import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export function LeadershipFeature() {
  return (
    <section className="bg-brand-ivory text-brand-charcoal min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center py-6 sm:py-8 lg:py-6 border-b border-brand-hairline overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Portrait Column: Tasteful Studio Crop */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative aspect-[4/5] w-full max-w-[300px] sm:max-w-[340px] max-h-[50vh] overflow-hidden rounded-[2px] border border-brand-hairline bg-brand-navy shadow-md">
              <Image
                src="/assets/leadership-portrait-unverified.jpg"
                alt="JUBOH Executive Leadership"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Editorial Content Column */}
          <div className="lg:col-span-7 space-y-3.5 lg:space-y-4">
            <div className="space-y-1">
              <EditorialKicker
                label="Leadership & Governance"
                tagline="Institutional Strategic Direction"
              />
              <Badge variant="default" className="text-[10px]">
                Executive Profile Verification Pending
              </Badge>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-normal leading-[1.14] text-brand-charcoal text-balance">
              Guided by operational rigor and an uncompromising commitment to excellence.
            </h2>

            {/* Signature Quote Block */}
            <div className="p-3.5 sm:p-4 bg-white border-l-2 border-brand-brass border-y border-r border-brand-hairline rounded-[2px]">
              <p className="font-serif text-base sm:text-lg text-brand-charcoal/90 italic font-normal leading-snug">
                &ldquo;We develop with purpose, execute with excellence, and build lasting institutional impact.&rdquo;
              </p>
            </div>

            <div className="space-y-2 text-xs sm:text-sm text-brand-charcoal/75 leading-relaxed font-light max-w-[65ch]">
              <p>
                Under experienced executive leadership, JUBOH Companies International maintains a disciplined approach to real estate development, strategic capital advisory, and government contracting.
              </p>
              <p>
                Our governance model ensures all enterprise divisions operate with institutional stewardship, transparent reporting, and deep civic alignment across every metropolitan market we serve.
              </p>
            </div>

            <div className="pt-2 border-t border-brand-hairline flex flex-wrap items-center gap-6">
              <Link
                href="/leadership"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-kicker font-semibold text-brand-charcoal hover:text-brand-brass transition-colors pb-1 border-b border-brand-charcoal/30 hover:border-brand-brass group"
              >
                <span>View Leadership & Governance Overview</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
