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
              "font-serif tracking-[0.2em] text-2xl sm:text-[24px] font-medium leading-none transition-colors",
              isDarkOverlay || isScrolled
                ? "text-white group-hover:text-brand-brass"
                : "text-brand-charcoal group-hover:text-brand-navy"
            )}
          >
            {siteConfig.shortName}
          </span>
          <span
            className={cn(
              "text-[8px] tracking-[0.3em] uppercase font-sans font-semibold mt-0.5 transition-colors",
              isDarkOverlay || isScrolled
                ? "text-brand-brass"
                : "text-brand-charcoal/60 group-hover:text-brand-brass"
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
            variant="default"
            size="sm"
            className="hidden sm:inline-flex text-[11px] tracking-kicker h-9 sm:h-10 px-5 gap-1.5"
          >
            <Link href={siteConfig.primaryCta.href}>
              <span>{siteConfig.primaryCta.title}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </Button>

          <MobileNav isDark={isDarkOverlay || isScrolled} />
        </div>
      </div>
    </header>
  );
}
