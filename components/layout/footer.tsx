import * as React from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { MapPin, Phone, Mail, Linkedin, Instagram, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0C151D] text-white pt-16 pb-10 border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-12">
        {/* Main 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Brand & Motto */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block group focus:outline-none">
              <span className="font-serif tracking-[0.15em] text-3xl font-normal text-white">
                {siteConfig.shortName}
              </span>
            </Link>

            <p className="text-white/70 text-xs sm:text-sm leading-relaxed max-w-xs font-light">
              Developing Places.
              <br />
              Expanding Opportunity.
              <br />
              Building What&apos;s Next.
            </p>

            <div className="flex items-center gap-3 pt-2 text-white/70">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-brand-brass hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-brand-brass hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-brand-brass hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-semibold tracking-wider text-white font-sans">
              Quick Links
            </p>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li>
                <Link href="/about" className="hover:text-brand-brass transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/companies" className="hover:text-brand-brass transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-brand-brass transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/companies" className="hover:text-brand-brass transition-colors">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-brand-brass transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-brass transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Our Services */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-wider text-white font-sans">
              Our Services
            </p>
            <ul className="space-y-2 text-xs text-white/70 font-light">
              <li>
                <Link href="/real-estate" className="hover:text-brand-brass transition-colors">
                  Real Estate Development
                </Link>
              </li>
              <li>
                <Link href="/companies" className="hover:text-brand-brass transition-colors">
                  Construction Management
                </Link>
              </li>
              <li>
                <Link href="/government-contracting" className="hover:text-brand-brass transition-colors">
                  Government Contracting
                </Link>
              </li>
              <li>
                <Link href="/advisory" className="hover:text-brand-brass transition-colors">
                  Strategic Advisory
                </Link>
              </li>
              <li>
                <Link href="/advisory" className="hover:text-brand-brass transition-colors">
                  Capital Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-wider text-white font-sans">
              Contact
            </p>
            <div className="space-y-2.5 text-xs text-white/70 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-brass shrink-0 mt-0.5" />
                <p>Atlanta, GA<br />United States</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-brass shrink-0" />
                <p>(888) 726-3264</p>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-brass shrink-0" />
                <a href="mailto:info@jalenuboh.com" className="hover:text-white transition-colors">
                  info@jalenuboh.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Attribution & Legal Row */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/50 gap-4">
          <p>© {currentYear} {siteConfig.shortName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/20">•</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
