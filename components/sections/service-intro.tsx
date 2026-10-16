import * as React from "react";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { cn } from "@/lib/utils";

interface ServiceIntroProps {
  kicker: string;
  title: string;
  description: string;
  dark?: boolean;
  className?: string;
}

export function ServiceIntro({
  kicker,
  title,
  description,
  dark = false,
  className,
}: ServiceIntroProps) {
  return (
    <div
      className={cn(
        "pt-28 sm:pt-32 pb-16 sm:pb-20 border-b",
        dark
          ? "bg-brand-navy text-brand-ivory border-white/10"
          : "bg-brand-ivory text-brand-charcoal border-brand-hairline",
        className
      )}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7 space-y-4">
            <EditorialKicker label={kicker} dark={dark} />
            <h1
              className={cn(
                "font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.12]",
                dark ? "text-white" : "text-brand-charcoal"
              )}
            >
              {title}
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p
              className={cn(
                "text-base sm:text-lg leading-relaxed font-light",
                dark ? "text-white/80" : "text-brand-charcoal/80"
              )}
            >
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
