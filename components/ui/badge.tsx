import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-[2px] px-2.5 py-0.5 text-[10px] font-medium tracking-[0.12em] uppercase transition-colors focus:outline-none focus:ring-1 focus:ring-brand-brass",
  {
    variants: {
      variant: {
        default:
          "border border-transparent bg-brand-brass/10 text-brand-brass-dark",
        secondary:
          "border border-transparent bg-brand-navy/5 text-brand-charcoal",
        outline:
          "border border-brand-hairline text-brand-charcoal",
        navy:
          "border border-white/20 bg-brand-navy text-brand-ivory",
        steel:
          "border border-transparent bg-brand-steel/15 text-brand-steel",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
