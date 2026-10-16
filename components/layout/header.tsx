"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // When on homepage and before scroll, navbar is transparent with light text
  const isDarkOverlay = isHomePage && !isScrolled;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled
          ? "bg-brand-navy/95 backdrop-blur-md shadow-md border-b border-white/10 py-3"
          : isHomePage
          ? "bg-gradient-to-b from-black/85 via-black/35 to-transparent py-3 sm:py-3.5"
          : "bg-brand-ivory border-b border-brand-hairline py-3.5"
      )}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Wordmark matching reference */}
        <Link href="/" className="group flex flex-col focus:outline-none">
          <span
            className={cn(
              "font-serif tracking-[0.18em] text-2xl sm:text-[26px] font-normal leading-none transition-colors",
              isDarkOverlay || isScrolled
                ? "text-white"
                : "text-brand-charcoal group-hover:text-brand-navy"
            )}
          >
            {siteConfig.shortName}
          </span>
          <span
            className={cn(
              "text-[8px] tracking-[0.38em] uppercase font-sans font-medium mt-1 transition-colors",
              isDarkOverlay || isScrolled
                ? "text-[#C5A059]"
                : "text-brand-charcoal/60"
            )}
          >
            COMPANIES
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <DesktopNav isDark={isDarkOverlay || isScrolled} />

        {/* Far Right CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden sm:inline-flex bg-[#C5A059] hover:bg-[#B38F48] text-[#181512] font-semibold text-[11px] tracking-[0.14em] uppercase h-9 sm:h-10 px-5 gap-2 rounded-[2px] shadow-sm transition-all hover:shadow-[0_4px_16px_rgba(197,160,89,0.35)]"
          >
            <Link href={siteConfig.primaryCta.href}>
              <span>{siteConfig.primaryCta.title}</span>
              <ArrowRight className="w-3.5 h-3.5 stroke-[2.4]" />
            </Link>
          </Button>

          <MobileNav isDark={isDarkOverlay || isScrolled} />
        </div>
      </div>
    </header>
  );
}
