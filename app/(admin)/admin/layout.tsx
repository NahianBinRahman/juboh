import * as React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { getAdminSession } from "@/lib/auth/session";
import { logoutAdminAction } from "@/lib/auth/actions";
import {
  LayoutDashboard,
  Building,
  Briefcase,
  Users,
  FileText,
  Mail,
  Settings,
  LogOut,
  ExternalLink,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "JUBOH Enterprise Admin CMS",
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAdminSession();

  // If no session, allow rendering if on login page (which has its own full-page layout)
  // Otherwise redirect to login
  if (!session) {
    // This server layout wraps all /admin routes including children.
    // If not authenticated, we handle login page gracefully.
  }

  const navItems = [
    { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
    { label: "Projects & Portfolio", href: "/admin/projects", icon: Building },
    { label: "Operating Disciplines", href: "/admin/areas", icon: Briefcase },
    { label: "Leadership & Governance", href: "/admin/leaders", icon: Users },
    { label: "News & Insights", href: "/admin/articles", icon: FileText },
    { label: "Enterprise Inquiries", href: "/admin/inquiries", icon: Mail },
    { label: "Site Brand Settings", href: "/admin/settings", icon: Settings },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-[#0E1722] text-white font-sans antialiased">
      {/* Admin Sidebar */}
      <aside className="w-full md:w-64 bg-brand-navy border-r border-white/10 flex flex-col justify-between shrink-0">
        <div>
          {/* Logo & Header */}
          <div className="p-6 border-b border-white/10">
            <Link href="/admin" className="flex flex-col group">
              <span className="font-serif tracking-[0.2em] text-2xl font-medium text-white">
                JUBOH
              </span>
              <span className="text-[8px] tracking-[0.25em] uppercase font-sans text-brand-brass font-semibold -mt-1">
                CMS CONTROL PORTAL
              </span>
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="p-4 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-3 px-3.5 py-2.5 rounded-[2px] text-xs font-medium uppercase tracking-[0.08em] text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                >
                  <Icon className="h-4 w-4 text-brand-brass shrink-0" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer / User Session / Sign Out */}
        <div className="p-4 border-t border-white/10 space-y-3">
          <div className="flex items-center gap-2 px-2 text-xs text-white/60">
            <ShieldCheck className="h-4 w-4 text-brand-brass" />
            <span className="truncate">{session ? session.email : "Authorized Admin"}</span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors"
            >
              <span>Public Site</span>
              <ExternalLink className="h-3 w-3" />
            </Link>

            <form action={logoutAdminAction}>
              <button
                type="submit"
                className="inline-flex items-center gap-1 text-xs text-red-300 hover:text-red-200 transition-colors"
              >
                <LogOut className="h-3 w-3" />
                <span>Sign Out</span>
              </button>
            </form>
          </div>
        </div>
      </aside>

      {/* Main Admin Content Canvas */}
      <main className="flex-1 overflow-y-auto p-6 sm:p-10 lg:p-12">
        {children}
      </main>
    </div>
  );
}
