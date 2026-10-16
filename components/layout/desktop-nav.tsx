"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface DesktopNavProps {
  isDark?: boolean;
}

export function DesktopNav({ isDark = false }: DesktopNavProps) {
  const pathname = usePathname();

  return (
    <nav className="hidden lg:flex items-center gap-7">
      {siteConfig.primaryNavigation.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "text-[12px] tracking-[0.08em] uppercase transition-colors duration-200 py-1 font-medium",
              isDark
                ? isActive
                  ? "text-brand-brass font-semibold"
                  : "text-white/80 hover:text-white"
                : isActive
                ? "text-brand-brass font-semibold"
                : "text-brand-charcoal/80 hover:text-brand-charcoal"
            )}
          >
            {item.title}
          </Link>
        );
      })}

      <button
        type="button"
        aria-label="Search institutional portal"
        className={cn(
          "p-1 rounded transition-colors focus:outline-none focus:ring-1 focus:ring-brand-brass",
          isDark ? "text-white/70 hover:text-white" : "text-brand-charcoal/70 hover:text-brand-charcoal"
        )}
      >
        <svg
          className="w-4 h-4 stroke-[1.75]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </nav>
  );
}
