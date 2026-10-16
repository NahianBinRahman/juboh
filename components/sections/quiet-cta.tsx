import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { cn } from "@/lib/utils";

interface QuietCtaProps {
  kicker?: string;
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  dark?: boolean;
  className?: string;
  fullScreen?: boolean;
}

export function QuietCta({
  kicker = "Start a Conversation",
  title = "Partner with JUBOH Companies International",
  description = "We welcome dialogue with institutional partners, municipalities, capital providers, and enterprise leaders seeking disciplined development and strategic advisory.",
  primaryCtaText = "Initiate an Inquiry",
  primaryCtaHref = "/contact",
  secondaryCtaText = "Explore Our Companies",
  secondaryCtaHref = "/companies",
  dark = true,
  className,
  fullScreen = false,
}: QuietCtaProps) {
  return (
    <section
      className={cn(
        "text-center relative overflow-hidden",
        fullScreen
          ? "min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center py-6 sm:py-8 lg:py-6"
          : "py-20 lg:py-28",
        dark ? "bg-brand-navy text-white border-t border-white/10" : "bg-brand-ivory text-brand-charcoal border-t border-brand-hairline",
        className
      )}
    >
      <div className={cn("max-w-4xl mx-auto px-5 sm:px-8 space-y-6 lg:space-y-8", fullScreen && "my-auto")}>
        <EditorialKicker label={kicker} dark={dark} className="justify-center flex" />

        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-balance">
          {title}
        </h2>

        <p
          className={cn(
            "text-base sm:text-lg leading-relaxed max-w-2xl mx-auto font-light",
            dark ? "text-white/80" : "text-brand-charcoal/80"
          )}
        >
          {description}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="default" size="lg" className="w-full sm:w-auto">
            <Link href={primaryCtaHref}>{primaryCtaText}</Link>
          </Button>

          {secondaryCtaText && secondaryCtaHref && (
            <Button
              asChild
              variant={dark ? "outlineLight" : "outline"}
              size="lg"
              className="w-full sm:w-auto"
            >
              <Link href={secondaryCtaHref}>{secondaryCtaText}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
