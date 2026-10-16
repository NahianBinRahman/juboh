import * as React from "react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { ShieldCheck } from "lucide-react";

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8 max-w-4xl">
      <div className="pb-6 border-b border-white/10">
        <p className="text-[10px] uppercase tracking-kicker text-brand-brass font-semibold">
          Governance & Metadata
        </p>
        <h1 className="font-serif text-3xl text-white font-normal mt-1">
          Brand Source-of-Truth Settings
        </h1>
      </div>

      <div className="bg-brand-navy/60 border border-white/10 rounded-[2px] p-6 sm:p-8 space-y-6">
        <div className="flex items-center gap-2 text-xs text-brand-brass font-medium">
          <ShieldCheck className="h-4 w-4" />
          <span>Locked to Approved Creative Direction Brief (Sept 20, 2026)</span>
        </div>

        <div className="space-y-4 text-xs">
          <div className="space-y-1.5">
            <label className="text-white/60 uppercase tracking-kicker">
              Full Legal / Brand Name
            </label>
            <input
              type="text"
              readOnly
              defaultValue={siteConfig.name}
              className="w-full h-10 px-3 bg-white/5 border border-white/15 rounded-[2px] text-white"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-white/60 uppercase tracking-kicker">
              Approved Brand Statement (PDF p. 3, 12)
            </label>
            <input
              type="text"
              readOnly
              defaultValue={siteConfig.tagline}
              className="w-full h-10 px-3 bg-white/5 border border-white/15 rounded-[2px] text-white"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-white/60 uppercase tracking-kicker">
              Approved Corporate Descriptor (PDF p. 3)
            </label>
            <textarea
              readOnly
              rows={3}
              defaultValue={siteConfig.description}
              className="w-full p-3 bg-white/5 border border-white/15 rounded-[2px] text-white resize-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-white/60 uppercase tracking-kicker">
              General Inquiries Channel
            </label>
            <input
              type="text"
              defaultValue="inquiries@juboh.com"
              className="w-full h-10 px-3 bg-white/5 border border-white/15 rounded-[2px] text-white"
            />
          </div>
        </div>

        <div className="pt-4 border-t border-white/10 flex justify-end">
          <Button variant="default" size="sm">
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
}
