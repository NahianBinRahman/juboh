import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { executiveProfile } from "@/lib/content";
import { ServiceIntro } from "@/components/sections/service-intro";
import { EditorialKicker } from "@/components/sections/editorial-kicker";
import { QuietCta } from "@/components/sections/quiet-cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronLeft, ShieldCheck } from "lucide-react";

export async function generateStaticParams() {
  return [{ slug: executiveProfile.slug }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (slug !== executiveProfile.slug) {
    return { title: "Leader Profile Not Found" };
  }
  return {
    title: `${executiveProfile.title} | JUBOH Leadership & Governance`,
    description: executiveProfile.department,
  };
}

export default async function LeaderDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (slug !== executiveProfile.slug) {
    notFound();
  }

  return (
    <div>
      <ServiceIntro
        kicker="Leadership & Governance"
        title={executiveProfile.title}
        description="Overseeing enterprise strategy, institutional capital alignment, and multi-disciplinary operational execution across the United States."
      />

      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 py-16 space-y-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-kicker text-brand-charcoal/60">
          <Link href="/leadership" className="hover:text-brand-brass transition-colors inline-flex items-center gap-1">
            <ChevronLeft className="h-3 w-3" />
            <span>Leadership Index</span>
          </Link>
          <span>/</span>
          <span className="text-brand-charcoal font-medium">{executiveProfile.title}</span>
        </div>

        {/* Profile Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Portrait Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-[2px] border border-brand-hairline bg-brand-navy shadow-md">
              <Image
                src={executiveProfile.portrait}
                alt="Executive Leadership Portrait"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>

            <div className="p-6 bg-white border border-brand-hairline rounded-[2px] space-y-2 text-xs text-brand-charcoal/70">
              <div className="flex items-center gap-2 text-brand-brass font-semibold uppercase tracking-kicker text-[10px]">
                <ShieldCheck className="h-3.5 w-3.5" />
                <span>Verification Guardrail Notice</span>
              </div>
              <p className="leading-relaxed">
                Personal biographical details, individual executive naming, and corporate officer titles are pending formal client verification per company governance standards.
              </p>
            </div>
          </div>

          {/* Details & Mandate Column */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <Badge variant="default">{executiveProfile.department}</Badge>
              <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal">
                Executive Mandate & Operating Scope
              </h2>
              <p className="text-lg font-light text-brand-charcoal/85 leading-relaxed font-sans">
                Directing the long-range development vision, capital partner alignment, and public-private collaboration across the United States.
              </p>
            </div>

            <div className="space-y-4 text-base text-brand-charcoal/80 leading-relaxed font-light">
              {executiveProfile.bio.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Scope of Responsibilities */}
            <div className="p-8 bg-white border border-brand-hairline rounded-[2px] space-y-4">
              <h3 className="font-serif text-2xl text-brand-charcoal">
                Key Areas of Responsibility
              </h3>
              <div className="space-y-3">
                {executiveProfile.responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-brand-charcoal/80">
                    <Check className="h-4 w-4 text-brand-brass mt-1 shrink-0" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-brand-hairline flex flex-wrap gap-4">
              <Button asChild variant="default" size="lg">
                <Link href="/contact">Inquire with Executive Office</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/leadership">Return to Leadership Overview</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <QuietCta />
    </div>
  );
}
