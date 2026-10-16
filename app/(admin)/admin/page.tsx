import * as React from "react";
import Link from "next/link";
import { projectCaseStudies, operatingDisciplines, newsArticles } from "@/lib/content";
import { getAllInquiries } from "@/lib/inquiries/store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Building,
  Briefcase,
  FileText,
  Mail,
  ShieldAlert,
  ArrowRight,
  CheckCircle,
  Clock,
  Sparkles,
} from "lucide-react";

export default async function AdminDashboardPage() {
  const inquiries = await getAllInquiries();
  const newInquiriesCount = inquiries.filter((i) => i.status === "NEW").length;

  const stats = [
    { label: "Operating Disciplines", count: operatingDisciplines.length, icon: Briefcase, href: "/admin/areas" },
    { label: "Portfolio Case Studies", count: projectCaseStudies.length, icon: Building, href: "/admin/projects" },
    { label: "News & Insights", count: newsArticles.length, icon: FileText, href: "/admin/articles" },
    {
      label: "Inquiries Logged",
      count: inquiries.length,
      badge: newInquiriesCount > 0 ? `${newInquiriesCount} NEW` : undefined,
      icon: Mail,
      href: "/admin/inquiries",
    },
  ];

  return (
    <div className="space-y-10 max-w-6xl">
      {/* Page Title & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <p className="text-[10px] uppercase tracking-kicker text-brand-brass font-semibold">
            CMS Control Overview
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl text-white font-normal mt-1">
            Enterprise Dashboard
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant="navy" className="border-green-500/40 text-green-400 bg-green-950/40">
            System Online & Healthy
          </Badge>
          <Button asChild variant="outlineLight" size="sm">
            <Link href="/" target="_blank">Preview Public Site</Link>
          </Button>
        </div>
      </div>

      {/* Critical Verification Guardrail Notice */}
      <div className="p-6 bg-brand-navy border-l-4 border-brand-brass border-y border-r border-white/10 rounded-[2px] space-y-2">
        <div className="flex items-center gap-2 text-brand-brass font-semibold text-xs uppercase tracking-kicker">
          <ShieldAlert className="h-4 w-4" />
          <span>Brand Source-of-Truth Compliance Guardrail</span>
        </div>
        <p className="text-sm text-white/80 leading-relaxed font-light">
          All quantitative figures, corporate acquisitions, subsidiary titles, and individual executive attributions are governed strictly by <strong className="text-white">docs/BRAND_SOURCE_OF_TRUTH.md</strong>. Unverified case studies or leader identities must remain flagged as <em>DRAFT / Verification Pending</em> before public release.
        </p>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <Link
              key={s.label}
              href={s.href}
              className="p-6 bg-brand-navy/60 border border-white/10 hover:border-brand-brass/60 transition-colors rounded-[2px] space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-kicker text-white/60 font-medium">
                  {s.label}
                </span>
                <Icon className="h-4 w-4 text-brand-brass" />
              </div>
              <div className="flex items-baseline justify-between">
                <p className="font-serif text-3xl text-white group-hover:text-brand-brass transition-colors">
                  {s.count}
                </p>
                {s.badge && (
                  <Badge variant="default" className="text-[9px] px-1.5 py-0.5">
                    {s.badge}
                  </Badge>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      {/* Two Column Summary: Recent Projects & Inquiries */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Projects Overview */}
        <div className="p-6 bg-brand-navy/60 border border-white/10 rounded-[2px] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <h3 className="font-serif text-xl text-white">Active Case Studies</h3>
            <Link href="/admin/projects" className="text-xs text-brand-brass hover:underline uppercase tracking-kicker">
              Manage →
            </Link>
          </div>

          <div className="divide-y divide-white/5 space-y-2 text-xs">
            {projectCaseStudies.map((p) => (
              <div key={p.slug} className="pt-2 flex items-center justify-between">
                <div>
                  <p className="font-medium text-white">{p.title}</p>
                  <p className="text-white/50">{p.discipline}</p>
                </div>
                <Badge variant="outline" className="text-[10px]">{p.status}</Badge>
              </div>
            ))}
          </div>
        </div>

        {/* Live Inquiries Overview */}
        <div className="p-6 bg-brand-navy/60 border border-white/10 rounded-[2px] space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <h3 className="font-serif text-xl text-white">Live Enterprise Inquiries</h3>
            <Link href="/admin/inquiries" className="text-xs text-brand-brass hover:underline uppercase tracking-kicker">
              View All ({inquiries.length}) →
            </Link>
          </div>

          <div className="space-y-3 text-xs">
            {inquiries.slice(0, 3).map((inq) => (
              <div key={inq.id} className="p-3 bg-white/5 border border-white/5 rounded-[2px] space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-brand-brass">{inq.referenceCode}</span>
                    <span className="font-medium text-white">{inq.fullName}</span>
                  </div>
                  <Badge
                    variant={
                      inq.status === "NEW"
                        ? "default"
                        : inq.status === "IN_PROGRESS"
                        ? "outline"
                        : "navy"
                    }
                    className="text-[9px]"
                  >
                    {inq.status.replace("_", " ")}
                  </Badge>
                </div>
                <p className="text-white/60">
                  {inq.organization ? `${inq.organization} • ` : ""}
                  {inq.inquiryType}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
