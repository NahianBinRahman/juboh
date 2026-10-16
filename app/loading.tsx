import * as React from "react";

export default function Loading() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-brand-ivory">
      <div className="flex flex-col items-center gap-3">
        <div className="h-6 w-6 border-2 border-brand-brass border-t-transparent rounded-full animate-spin" />
        <p className="text-[11px] uppercase tracking-kicker text-brand-charcoal/60 font-medium">
          Loading JUBOH Content...
        </p>
      </div>
    </div>
  );
}
