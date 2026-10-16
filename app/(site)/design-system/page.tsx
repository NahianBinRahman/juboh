import * as React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { EditorialKicker } from "@/components/sections/editorial-kicker";

export const metadata: Metadata = {
  title: "Design System Specification",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignSystemPage() {
  const colors = [
    { name: "Midnight Navy", hex: "#101D2C", bg: "bg-brand-navy", text: "text-white", border: "border-transparent" },
    { name: "Warm Ivory", hex: "#F6F3ED", bg: "bg-brand-ivory", text: "text-brand-charcoal", border: "border-brand-hairline" },
    { name: "Charcoal Ink", hex: "#252A2F", bg: "bg-brand-charcoal", text: "text-white", border: "border-transparent" },
    { name: "Muted Brass", hex: "#B49360", bg: "bg-brand-brass", text: "text-white", border: "border-transparent" },
    { name: "Dark Brass", hex: "#917445", bg: "bg-brand-brass-dark", text: "text-white", border: "border-transparent" },
    { name: "Slate Steel", hex: "#314C63", bg: "bg-brand-steel", text: "text-white", border: "border-transparent" },
    { name: "Hairline Rule", hex: "#DFD9CE", bg: "bg-brand-hairline", text: "text-brand-charcoal", border: "border-brand-hairline" },
  ];

  return (
    <div className="py-16 lg:py-24 max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 space-y-20">
      {/* Intro */}
      <div className="space-y-4 max-w-3xl">
        <EditorialKicker label="Internal Specification" tagline="Design Tokens & Component Rules" />
        <h1 className="font-serif text-4xl sm:text-5xl font-normal text-brand-charcoal">
          JUBOH Design System Foundation
        </h1>
        <p className="text-base text-brand-charcoal/70 leading-relaxed font-light">
          This private specification illustrates the color palette, typography hierarchy, responsive gutter rules,
          shadcn/ui customized primitives, and architectural hairline divisions established in Phase 01.
        </p>
      </div>

      <Separator />

      {/* 1. Color Palette */}
      <section className="space-y-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-kicker text-brand-brass">Token System</p>
          <h2 className="font-serif text-3xl font-normal text-brand-charcoal mt-1">1. Color Palette</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {colors.map((c) => (
            <div key={c.name} className="space-y-2">
              <div
                className={`h-28 w-full rounded-[2px] ${c.bg} ${c.text} flex flex-col justify-end p-3 border ${c.border} shadow-sm`}
              >
                <span className="text-[11px] font-mono tracking-tight">{c.hex}</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-brand-charcoal">{c.name}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Separator />

      {/* 2. Typography Scale */}
      <section className="space-y-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-kicker text-brand-brass">Editorial Hierarchy</p>
          <h2 className="font-serif text-3xl font-normal text-brand-charcoal mt-1">2. Typography System</h2>
          <p className="text-sm text-brand-charcoal/70 mt-1">
            Headings set in <strong>Newsreader</strong> (editorial serif); body and UI set in <strong>DM Sans</strong>.
          </p>
        </div>

        <div className="space-y-8 bg-white p-8 sm:p-12 border border-brand-hairline rounded-[2px]">
          <div>
            <p className="text-[10px] uppercase tracking-kicker text-brand-brass mb-1">Display H1 (60px Desktop / 40px Mobile)</p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-charcoal font-normal leading-[1.08]">
              Building an Exceptional Future, Together.
            </h1>
          </div>

          <Separator />

          <div>
            <p className="text-[10px] uppercase tracking-kicker text-brand-brass mb-1">Section H2 (44px Desktop / 32px Mobile)</p>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-charcoal font-normal leading-[1.15]">
              An Integrated Approach to Development and Advisory
            </h2>
          </div>

          <Separator />

          <div>
            <p className="text-[10px] uppercase tracking-kicker text-brand-brass mb-1">Subsection H3 (30px Desktop / 24px Mobile)</p>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal font-normal">
              Disciplined Capital & Public-Sector Execution
            </h3>
          </div>

          <Separator />

          <div>
            <p className="text-[10px] uppercase tracking-kicker text-brand-brass mb-1">Lead Paragraph (20px Desktop / 18px Mobile)</p>
            <p className="text-lg sm:text-xl font-light text-brand-charcoal/90 leading-relaxed max-w-[65ch]">
              JUBOH Companies International operates across complementary business disciplines, connecting real estate development,
              strategic capital advisory, government contracting, executive education, and community initiatives.
            </p>
          </div>

          <Separator />

          <div>
            <p className="text-[10px] uppercase tracking-kicker text-brand-brass mb-1">Body Text (16px / 1.65 line-height, max 68ch measure)</p>
            <p className="text-base text-brand-charcoal/80 leading-relaxed max-w-[68ch]">
              Institutional credibility requires operational evidence rather than inflated assertions. Our disciplines combine
              civic alignment, technical execution, and rigorous capital stewardship to advance projects of enduring community scale.
            </p>
          </div>
        </div>
      </section>

      <Separator />

      {/* 3. Button & Action States */}
      <section className="space-y-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-kicker text-brand-brass">Interactive Primitives</p>
          <h2 className="font-serif text-3xl font-normal text-brand-charcoal mt-1">3. Buttons & Controls</h2>
          <p className="text-sm text-brand-charcoal/70 mt-1">
            Restrained brass/ink, square corners (2px radius), zero pill shapes, clear focus indicators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Light Background Variants */}
          <div className="p-8 bg-white border border-brand-hairline rounded-[2px] space-y-6">
            <p className="text-xs font-semibold uppercase tracking-kicker text-brand-charcoal">
              Light Canvas Actions
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="default">Primary Brass</Button>
              <Button variant="navy">Navy Ink</Button>
              <Button variant="outline">Secondary Outline</Button>
              <Button variant="ghost">Ghost Action</Button>
            </div>
            <div className="pt-2">
              <Button variant="editorialLink">Editorial Link Arrow →</Button>
            </div>
          </div>

          {/* Dark Background Variants */}
          <div className="p-8 bg-brand-navy border border-white/10 rounded-[2px] space-y-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-kicker text-brand-brass">
              Dark Surface Actions
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <Button variant="default">Primary Brass</Button>
              <Button variant="outlineLight">Light Outline</Button>
              <Button variant="ghostLight">Light Ghost</Button>
            </div>
            <div className="pt-2">
              <span className="text-xs font-semibold uppercase tracking-kicker text-brand-brass inline-flex items-center gap-1 border-b border-brand-brass/40 pb-0.5">
                Dark Surface Link →
              </span>
            </div>
          </div>
        </div>
      </section>

      <Separator />

      {/* 4. Badges & Architectural Dividers */}
      <section className="space-y-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-kicker text-brand-brass">UI Accents</p>
          <h2 className="font-serif text-3xl font-normal text-brand-charcoal mt-1">4. Badges & Status Indicators</h2>
        </div>

        <div className="flex flex-wrap gap-4 items-center">
          <Badge variant="default">Muted Brass Accent</Badge>
          <Badge variant="secondary">Navy Subdued</Badge>
          <Badge variant="outline">Hairline Outline</Badge>
          <Badge variant="steel">Slate Steel</Badge>
          <Badge variant="navy">Midnight Navy</Badge>
        </div>
      </section>

      <Separator />

      {/* 5. Editorial Card Module */}
      <section className="space-y-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-kicker text-brand-brass">Layout Components</p>
          <h2 className="font-serif text-3xl font-normal text-brand-charcoal mt-1">5. Editorial Card Module</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Badge variant="default" className="w-fit mb-2">Real Estate</Badge>
              <CardTitle>Master Development</CardTitle>
              <CardDescription>
                Commercial, multifamily, and civic infrastructure built for enduring value.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-brand-charcoal/80">
                Disciplined execution spanning entitlements, design coordination, and owner representation.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="editorialLink">Read Discipline →</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Badge variant="steel" className="w-fit mb-2">Advisory</Badge>
              <CardTitle>Capital Strategy</CardTitle>
              <CardDescription>
                Institutional advisory for private enterprises, municipalities, and institutions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-brand-charcoal/80">
                Bridging institutional capital, strategic market expansion, and transaction structuring.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="editorialLink">Read Discipline →</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Badge variant="secondary" className="w-fit mb-2">Public Sector</Badge>
              <CardTitle>Government Contracting</CardTitle>
              <CardDescription>
                Municipal and federal program execution with rigorous compliance oversight.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-brand-charcoal/80">
                Full-lifecycle capture, contract administration, and public infrastructure delivery.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="editorialLink">Read Discipline →</Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
