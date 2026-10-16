import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { cn } from "@/lib/utils";

interface EditorialSplitProps {
  kicker: string;
  title: string;
  lead?: string;
  description: string[];
  ctaText?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  reversed?: boolean;
  dark?: boolean;
  className?: string;
}

export function EditorialSplit({
  kicker,
  title,
  lead,
  description,
  ctaText,
  ctaHref,
  imageSrc,
  imageAlt = "Editorial photograph",
  reversed = false,
  dark = false,
  className,
}: EditorialSplitProps) {
  return (
    <section
      className={cn(
        "py-20 lg:py-28 relative",
        dark ? "bg-brand-navy text-brand-ivory" : "bg-brand-ivory text-brand-charcoal",
        className
      )}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div
          className={cn(
            "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",
            reversed && "lg:[&>*:first-child]:order-2"
          )}
        >
          {/* Text Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <EditorialKicker label={kicker} dark={dark} />

            <h2
              className={cn(
                "font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-balance",
                dark ? "text-white" : "text-brand-charcoal"
              )}
            >
              {title}
            </h2>

            {lead && (
              <p
                className={cn(
                  "text-lg sm:text-xl font-sans font-light leading-relaxed",
                  dark ? "text-white/90" : "text-brand-charcoal/90"
                )}
              >
                {lead}
              </p>
            )}

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-brand-charcoal/80 dark:text-white/70 max-w-[65ch]">
              {description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {ctaText && ctaHref && (
              <div className="pt-4">
                <Link
                  href={ctaHref}
                  className={cn(
                    "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-kicker pb-1 border-b transition-all duration-200 group",
                    dark
                      ? "text-brand-brass border-brand-brass/40 hover:border-brand-brass hover:text-white"
                      : "text-brand-charcoal border-brand-charcoal/30 hover:border-brand-brass hover:text-brand-brass"
                  )}
                >
                  <span>{ctaText}</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            )}
          </div>

          {/* Media / Visual Column */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[5/4] w-full overflow-hidden rounded-[2px] bg-brand-charcoal/5 border border-brand-hairline dark:border-white/10">
              {imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-brand-charcoal/5 dark:bg-white/5">
                  <p className="text-xs uppercase tracking-kicker text-brand-brass font-medium">
                    Verified Photographic Slot
                  </p>
                  <p className="font-serif text-lg text-brand-charcoal/60 dark:text-white/60 mt-1 max-w-sm">
                    Editorial architectural presentation adhering to brand source of truth
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
