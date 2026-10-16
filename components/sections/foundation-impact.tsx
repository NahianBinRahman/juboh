import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { ArrowRight, HeartHandshake } from "lucide-react";

export function FoundationImpact() {
  return (
    <section className="bg-white text-brand-charcoal min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center py-6 sm:py-8 lg:py-6 border-b border-brand-hairline overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Narrative Column */}
          <div className="lg:col-span-6 space-y-3.5 lg:space-y-4">
            <div className="flex items-center gap-2 text-brand-brass">
              <HeartHandshake className="h-4 w-4" />
              <EditorialKicker
                label="Philanthropy & Civic Uplift"
                tagline="JUBOH Foundation"
              />
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-normal leading-[1.14] text-brand-charcoal text-balance">
              Building stronger communities through dedicated civic investment.
            </h2>

            <p className="text-sm sm:text-base font-light text-brand-charcoal/85 leading-relaxed">
              We believe physical real estate development must always be paired with grassroots community investment and educational opportunity.
            </p>

            <div className="space-y-2 text-xs sm:text-sm text-brand-charcoal/75 leading-relaxed font-light max-w-[65ch]">
              <p>
                Through the JUBOH Foundation, our enterprise partners with local non-profits, faith-based institutions, and educational leaders to provide mentorship, community programming, and civic advancement.
              </p>
              <p>
                Our impact initiatives operate with transparent governance, focusing on measurable, long-term enrichment in the metropolitan neighborhoods where JUBOH develops.
              </p>
            </div>

            <div className="pt-2 border-t border-brand-hairline">
              <Link
                href="/foundation"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-kicker font-semibold text-brand-charcoal hover:text-brand-brass transition-colors pb-1 border-b border-brand-charcoal/30 hover:border-brand-brass group"
              >
                <span>Learn More About the Foundation</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[16/10] w-full max-h-[50vh] overflow-hidden rounded-[2px] border border-brand-hairline bg-brand-charcoal/5 group">
              <Image
                src="/media/preview-community-foundation.jpg"
                alt="JUBOH Community Foundation Civic Atrium"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-auto bg-brand-navy/90 backdrop-blur-md px-4 py-2.5 border border-white/10 text-white rounded-[2px]">
                <p className="text-[9px] uppercase tracking-kicker text-brand-brass font-semibold">
                  Civic Mission
                </p>
                <p className="font-serif text-sm sm:text-base font-normal mt-0.5">
                  Educational & Community Partnerships
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
