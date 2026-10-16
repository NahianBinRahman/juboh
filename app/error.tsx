"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-brand-ivory px-5 py-24">
      <div className="max-w-md text-center space-y-6">
        <p className="text-[11px] uppercase tracking-kicker text-red-700 font-semibold">
          System Notice
        </p>
        <h2 className="font-serif text-3xl text-brand-charcoal font-normal">
          An unexpected interruption occurred.
        </h2>
        <p className="text-sm text-brand-charcoal/70 leading-relaxed font-light">
          We encountered an issue processing this request. Please refresh or attempt to re-establish the connection.
        </p>
        <div className="pt-2">
          <Button variant="default" onClick={() => reset()}>
            Retry Connection
          </Button>
        </div>
      </div>
    </div>
  );
}
