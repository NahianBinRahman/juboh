import * as React from "react";
import Link from "next/link";
import { operatingDisciplines } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export default function AdminAreasPage() {
  return (
    <div className="space-y-8 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <p className="text-[10px] uppercase tracking-kicker text-brand-brass font-semibold">
            Enterprise Structure
          </p>
          <h1 className="font-serif text-3xl text-white font-normal mt-1">
            Operating Disciplines
          </h1>
        </div>
      </div>

      <div className="bg-brand-navy/60 border border-white/10 rounded-[2px] overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-white/5 border-b border-white/10 text-white/60 uppercase tracking-kicker text-[10px]">
            <tr>
              <th className="py-4 px-6">Discipline Name</th>
              <th className="py-4 px-6">Tagline</th>
              <th className="py-4 px-6">Capabilities Listed</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6 text-right">Preview</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-white/80">
            {operatingDisciplines.map((d) => (
              <tr key={d.slug} className="hover:bg-white/5 transition-colors">
                <td className="py-4 px-6 font-medium text-white">{d.name}</td>
                <td className="py-4 px-6 text-white/60">{d.tagline}</td>
                <td className="py-4 px-6">{d.capabilities.length} Capabilities</td>
                <td className="py-4 px-6">
                  <Badge variant="navy" className="border-green-500/40 text-green-400">
                    PUBLISHED
                  </Badge>
                </td>
                <td className="py-4 px-6 text-right">
                  <Link
                    href={d.href}
                    target="_blank"
                    className="text-brand-brass hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>View</span>
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
