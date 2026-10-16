import * as React from "react";
import Link from "next/link";
import { projectCaseStudies } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, CheckCircle2, AlertCircle, ExternalLink } from "lucide-react";

export default function AdminProjectsPage() {
  return (
    <div className="space-y-8 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <p className="text-[10px] uppercase tracking-kicker text-brand-brass font-semibold">
            Portfolio Management
          </p>
          <h1 className="font-serif text-3xl text-white font-normal mt-1">
            Projects & Case Studies
          </h1>
        </div>

        <Button variant="default" size="sm" className="inline-flex items-center gap-1.5 text-xs">
          <Plus className="h-4 w-4" />
          <span>New Project Record</span>
        </Button>
      </div>

      {/* Projects Table */}
      <div className="bg-brand-navy/60 border border-white/10 rounded-[2px] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-white/5 border-b border-white/10 text-white/60 uppercase tracking-kicker text-[10px]">
              <tr>
                <th className="py-4 px-6">Project Title</th>
                <th className="py-4 px-6">Discipline</th>
                <th className="py-4 px-6">Role</th>
                <th className="py-4 px-6">Current Status</th>
                <th className="py-4 px-6">Client Clearance</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-white/80">
              {projectCaseStudies.map((project) => (
                <tr key={project.slug} className="hover:bg-white/5 transition-colors">
                  <td className="py-4 px-6 font-medium text-white">
                    {project.title}
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-white/60">{project.discipline}</span>
                  </td>
                  <td className="py-4 px-6">{project.role}</td>
                  <td className="py-4 px-6">
                    <Badge variant="outline" className="text-[10px]">{project.status}</Badge>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-1.5 text-amber-300">
                      <AlertCircle className="h-3.5 w-3.5" />
                      <span className="text-[11px]">Pending Release</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right space-x-3">
                    <Link
                      href={`/projects/${project.slug}`}
                      target="_blank"
                      className="text-brand-brass hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      <span>Public</span>
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                    <button className="text-white/60 hover:text-white transition-colors">
                      Edit
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
