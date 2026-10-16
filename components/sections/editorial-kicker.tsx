import * as React from "react";
import { cn } from "@/lib/utils";

interface EditorialKickerProps {
  label: string;
  tagline?: string;
  dark?: boolean;
  className?: string;
}

export function EditorialKicker({
  label,
  tagline,
  dark = false,
  className,
}: EditorialKickerProps) {
  return (
    <div className={cn("space-y-1", className)}>
      <p
        className={cn(
          "text-[11px] font-semibold tracking-kicker uppercase font-sans",
          dark ? "text-brand-brass" : "text-brand-brass"
        )}
      >
        {label}
      </p>
      {tagline && (
        <p
          className={cn(
            "text-xs tracking-wider uppercase font-medium",
            dark ? "text-white/60" : "text-brand-charcoal/60"
          )}
        >
          {tagline}
        </p>
      )}
    </div>
  );
}
