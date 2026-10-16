"use client";

import * as React from "react";
import Link from "next/link";
import { useActionState } from "react";
import { loginAdminAction } from "@/lib/auth/actions";
import { Button } from "@/components/ui/button";
import { Lock, ShieldAlert, ArrowLeft } from "lucide-react";

export default function AdminLoginPage() {
  const [state, formAction, isPending] = useActionState(loginAdminAction, null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-navy px-5 py-12 relative overflow-hidden">
      {/* Background vignette subtle pattern */}
      <div className="absolute inset-0 bg-radial-gradient from-white/5 to-transparent pointer-events-none" />

      <div className="relative z-10 w-full max-w-md space-y-8 bg-brand-navy border border-white/10 p-8 sm:p-10 rounded-[2px] shadow-2xl">
        {/* Header Wordmark */}
        <div className="text-center space-y-3">
          <Link href="/" className="inline-block group focus:outline-none">
            <span className="font-serif tracking-[0.2em] text-3xl font-medium text-white">
              JUBOH
            </span>
            <span className="block text-[8px] tracking-[0.25em] uppercase font-sans text-brand-brass font-semibold -mt-1">
              COMPANIES INTERNATIONAL
            </span>
          </Link>

          <div className="pt-2">
            <h1 className="font-serif text-2xl text-white font-normal">
              Enterprise Administration
            </h1>
            <p className="text-xs text-white/60 font-light mt-1">
              Secure access for authorized corporate officers only.
            </p>
          </div>
        </div>

        {/* Error Alert */}
        {state?.error && (
          <div className="p-3.5 bg-red-950/60 border border-red-800/60 rounded-[2px] text-xs text-red-200 flex items-center gap-2.5">
            <ShieldAlert className="h-4 w-4 text-red-400 shrink-0" />
            <span>{state.error}</span>
          </div>
        )}

        {/* Login Form */}
        <form action={formAction} className="space-y-5">
          <div className="space-y-2">
            <label className="text-[11px] uppercase tracking-kicker font-semibold text-white/80 block">
              Authorized Email
            </label>
            <input
              name="email"
              type="email"
              required
              defaultValue="admin@juboh.com"
              placeholder="admin@juboh.com"
              className="w-full h-11 px-3.5 bg-white/5 border border-white/15 rounded-[2px] text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-brass focus:ring-1 focus:ring-brand-brass transition-all"
            />
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-[11px] uppercase tracking-kicker font-semibold text-white/80 block">
                Security Password
              </label>
            </div>
            <input
              name="password"
              type="password"
              required
              defaultValue="ChangeMeInProduction2026!"
              placeholder="••••••••••••"
              className="w-full h-11 px-3.5 bg-white/5 border border-white/15 rounded-[2px] text-sm text-white placeholder-white/40 focus:outline-none focus:border-brand-brass focus:ring-1 focus:ring-brand-brass transition-all"
            />
          </div>

          <div className="pt-2">
            <Button
              type="submit"
              variant="default"
              size="lg"
              disabled={isPending}
              className="w-full h-12 text-xs tracking-kicker font-medium"
            >
              {isPending ? "Authenticating..." : "Authenticate Session →"}
            </Button>
          </div>
        </form>

        {/* Return to Public Portal */}
        <div className="pt-4 border-t border-white/10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-white/50 hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Return to Public Website</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
