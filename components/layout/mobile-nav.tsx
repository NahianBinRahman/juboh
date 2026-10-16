"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface MobileNavProps {
  isDark?: boolean;
}

export function MobileNav({ isDark = false }: MobileNavProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  // Close on route change
  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open primary navigation menu"
        className={cn(
          "p-2 -mr-2 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-brand-brass",
          isDark ? "text-white hover:text-brand-brass" : "text-brand-charcoal hover:text-brand-brass"
        )}
      >
        <Menu className="h-6 w-6 stroke-[1.5]" />
      </button>

      {/* Backdrop & Drawer */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col bg-brand-navy text-brand-ivory transition-opacity duration-300"
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="flex flex-col tracking-wider font-serif text-xl font-normal text-white"
            >
              <span className="font-serif tracking-widest text-lg">JUBOH</span>
              <span className="text-[8px] tracking-[0.2em] uppercase font-sans text-brand-brass -mt-1 font-semibold">
                Companies International
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
              className="p-2 -mr-2 text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-1 focus:ring-brand-brass"
            >
              <X className="h-6 w-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col justify-between">
            <nav className="space-y-4">
              <p className="text-[10px] uppercase tracking-kicker text-brand-brass font-semibold mb-3">
                Enterprise Navigation
              </p>
              {siteConfig.primaryNavigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block text-2xl font-serif py-1.5 transition-colors",
                      isActive
                        ? "text-brand-brass italic pl-2 border-l-2 border-brand-brass"
                        : "text-white/90 hover:text-white"
                    )}
                  >
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            {/* Utility & Action Section */}
            <div className="mt-8 pt-6 border-t border-white/10 space-y-6">
              <div>
                <p className="text-[10px] uppercase tracking-kicker text-white/50 mb-2 font-medium">
                  Distinct Programs & Client Portals
                </p>
                <div className="flex flex-col gap-2">
                  {siteConfig.utilityNavigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center justify-between text-xs font-sans uppercase tracking-[0.1em] text-white/70 hover:text-brand-brass py-1.5"
                    >
                      <span>{item.title}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
                    </Link>
                  ))}
                </div>
              </div>

              <Button asChild variant="default" className="w-full h-12 text-xs">
                <Link href={siteConfig.primaryCta.href} onClick={() => setIsOpen(false)}>
                  {siteConfig.primaryCta.title}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
