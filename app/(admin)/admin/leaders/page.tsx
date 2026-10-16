import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { executiveProfile } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { ShieldAlert, ExternalLink } from "lucide-react";

export default function AdminLeadersPage() {
  return (
    <div className="space-y-8 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <p className="text-[10px] uppercase tracking-kicker text-brand-brass font-semibold">
            Governance Administration
          </p>
          <h1 className="font-serif text-3xl text-white font-normal mt-1">
            Leadership & Executive Profiles
          </h1>
        </div>
      </div>

      {/* Critical Verification Guardrail Alert */}
      <div className="p-6 bg-brand-navy border-l-4 border-amber-400 border-y border-r border-white/10 rounded-[2px] space-y-2">
        <div className="flex items-center gap-2 text-amber-400 font-semibold text-xs uppercase tracking-kicker">
          <ShieldAlert className="h-4 w-4" />
          <span>Strict Identity Verification Policy</span>
        </div>
        <p className="text-sm text-white/80 leading-relaxed font-light">
          Per operational guidelines in <strong className="text-white">AGENTS.md</strong>, individual executive names, degrees, and corporate officer titles must not be attributed to photographic assets in public production until explicit written client verification is received.
        </p>
      </div>

      <div className="bg-brand-navy/60 border border-white/10 rounded-[2px] p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="relative aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-[2px] border border-white/20 bg-brand-navy">
            <Image
              src={executiveProfile.portrait}
              alt="Leader Portrait Asset"
              fill
              className="object-cover object-top"
            />
          </div>

          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-serif text-2xl text-white">
                {executiveProfile.title}
              </h3>
              <Badge variant="default" className="text-[10px]">
                Attribution Pending Verification
              </Badge>
            </div>
            <p className="text-xs text-white/60">
              Department: {executiveProfile.department}
            </p>
            <p className="text-xs text-white/80 italic max-w-xl">
              &ldquo;{executiveProfile.quote}&rdquo;
            </p>
          </div>

          <div className="sm:self-center">
            <Link
              href={`/leadership/${executiveProfile.slug}`}
              target="_blank"
              className="text-xs text-brand-brass hover:text-white transition-colors inline-flex items-center gap-1 uppercase tracking-kicker font-medium"
            >
              <span>Public Profile</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
