"use client";

import * as React from "react";

export function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in-view");
          } else {
            // Remove when scrolled away so it re-triggers when scrolled into view
            if (entry.boundingClientRect.top > 0) {
              entry.target.classList.remove("is-in-view");
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    const initSections = () => {
      const sections = document.querySelectorAll(".scroll-section");
      sections.forEach((sec, idx) => {
        if (idx === 0) {
          // Hero section is always in view on initial load
          sec.classList.add("is-in-view");
        }
        observer.observe(sec);
      });
    };

    initSections();
    const timer = setTimeout(initSections, 400);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return <>{children}</>;
}
