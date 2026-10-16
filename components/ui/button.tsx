import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center whitespace-nowrap text-xs font-medium uppercase tracking-[0.16em] transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-brass disabled:pointer-events-none disabled:opacity-50 select-none active:scale-[0.98] [&>svg]:transition-transform [&>svg]:duration-300 [&>svg]:ease-out group-hover:[&>svg]:translate-x-1.5",
  {
    variants: {
      variant: {
        default:
          "btn-sheen bg-gradient-to-r from-[#B49360] via-[#C5A059] to-[#9E7F4E] hover:from-[#C5A059] hover:via-[#D4AF37] hover:to-[#B49360] text-white border border-[#D4AF37]/50 shadow-[0_2px_10px_rgba(180,147,96,0.3),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(0,0,0,0.15)] hover:shadow-[0_6px_24px_rgba(180,147,96,0.5),inset_0_1px_0_rgba(255,255,255,0.65)] hover:-translate-y-0.5 active:translate-y-0 rounded-[2px]",
        navy:
          "btn-sheen bg-gradient-to-b from-[#142334] via-[#101D2C] to-[#0A131D] text-brand-ivory border border-white/20 hover:border-brand-brass/60 shadow-[0_2px_10px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.15)] hover:shadow-[0_6px_22px_rgba(0,0,0,0.5),0_0_16px_rgba(197,160,89,0.25)] hover:-translate-y-0.5 active:translate-y-0 rounded-[2px]",
        outline:
          "border border-brand-charcoal/30 text-brand-charcoal bg-transparent hover:border-brand-brass hover:text-brand-brass hover:bg-brand-charcoal/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_1px_3px_rgba(0,0,0,0.03)] hover:shadow-[0_4px_16px_rgba(180,147,96,0.2)] hover:-translate-y-0.5 active:translate-y-0 rounded-[2px]",
        outlineLight:
          "border border-white/35 text-white bg-white/[0.04] backdrop-blur-md hover:border-[#C5A059] hover:text-[#C5A059] hover:bg-white/[0.1] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] hover:shadow-[0_4px_22px_rgba(197,160,89,0.35),inset_0_1px_0_rgba(255,255,255,0.35)] hover:-translate-y-0.5 active:translate-y-0 rounded-[2px]",
        ghost:
          "hover:bg-brand-navy/5 text-brand-charcoal hover:text-brand-brass transition-colors",
        ghostLight:
          "text-white/80 hover:text-white hover:bg-white/10 transition-colors",
        link:
          "text-brand-brass underline-offset-4 hover:underline p-0 h-auto normal-case tracking-normal",
        editorialLink:
          "text-brand-charcoal hover:text-brand-brass tracking-kicker uppercase font-semibold text-[11px] p-0 h-auto inline-flex items-center gap-2 border-b border-brand-charcoal/20 pb-0.5 hover:border-brand-brass transition-colors",
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 px-4 text-[11px]",
        lg: "h-13 px-8 text-sm",
        icon: "h-10 w-10 p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
