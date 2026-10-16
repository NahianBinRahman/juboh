import * as React from "react";
import { cn } from "@/lib/utils";

const Separator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    orientation?: "horizontal" | "vertical";
    dark?: boolean;
  }
>(({ className, orientation = "horizontal", dark = false, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "shrink-0",
      orientation === "horizontal"
        ? cn("h-[1px] w-full", dark ? "bg-white/12" : "bg-brand-hairline")
        : cn("h-full w-[1px]", dark ? "bg-white/12" : "bg-brand-hairline"),
      className
    )}
    {...props}
  />
));
Separator.displayName = "Separator";

export { Separator };
