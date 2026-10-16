import * as React from "react";
import { Metadata } from "next";
import { ServiceIntro } from "@/components/sections/service-intro";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/site-config";
import { Building2, Mail, MapPin, Globe, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact & Institutional Inquiries | JUBOH Companies International",
  description:
    "Initiate confidential dialogue with JUBOH Companies International across real estate development, capital advisory, government contracting, and executive education.",
};

export default function ContactPage() {
  return (
    <div>
      <ServiceIntro
        kicker="Institutional Inquiries"
        title="Start a Conversation with JUBOH"
        description="We invite dialogue with capital partners, municipalities, enterprise leaders, and community stakeholders seeking disciplined development and strategic advisory."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Information Column (Left) */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-kicker text-brand-brass font-semibold">
                Engagement Standard
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-normal tracking-tight">
                Direct Communication Channels
              </h2>
              <p className="text-sm text-brand-charcoal/70 leading-relaxed font-light">
                All communications are routed directly to the appropriate operating discipline or executive office. We respect institutional confidentiality and respond promptly to verified inquiries.
              </p>
            </div>

            <div className="space-y-6 pt-6 border-t border-brand-hairline">
              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-brand-brass shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-kicker text-brand-brass font-semibold">
                    Corporate Inquiries
                  </p>
                  <p className="text-sm text-brand-charcoal">
                    General & Partner Inquiries:{" "}
                    <a
                      href={`mailto:${siteConfig.inquiryEmail}`}
                      className="font-medium text-brand-navy hover:text-brand-brass underline underline-offset-4 decoration-brand-hairline transition-colors"
                    >
                      {siteConfig.inquiryEmail}
                    </a>
                  </p>
                  <p className="text-xs text-brand-charcoal/50 italic">
                    Institutional inbox monitored by corporate administration.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-brand-brass shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-kicker text-brand-brass font-semibold">
                    Operating Hubs
                  </p>
                  <p className="text-sm text-brand-charcoal">
                    Active across the United States and select international markets.
                  </p>
                  <p className="text-xs text-brand-charcoal/50 italic">
                    Physical meeting rooms and site inspections coordinated upon preliminary engagement verification.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Globe className="w-5 h-5 text-brand-brass shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-kicker text-brand-brass font-semibold">
                    Operating Disciplines
                  </p>
                  <ul className="text-xs text-brand-charcoal/70 space-y-1 pt-1">
                    <li>• Real Estate Development & Master Planning</li>
                    <li>• Business Strategy & Capital Advisory</li>
                    <li>• Government Contracting & Civic Infrastructure</li>
                    <li>• Strategic Investments & Acquisitions</li>
                    <li>• JUBOH Academy (Executive Education)</li>
                    <li>• JUBOH Foundation (Philanthropy)</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <ShieldCheck className="w-5 h-5 text-brand-brass shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-kicker text-brand-brass font-semibold">
                    Corporate North Star
                  </p>
                  <p className="font-serif text-lg text-brand-charcoal italic mt-0.5">
                    &ldquo;{siteConfig.brandStatement}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column (Right) */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
