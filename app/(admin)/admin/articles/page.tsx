import * as React from "react";
import Link from "next/link";
import { newsArticles } from "@/lib/content";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, ExternalLink } from "lucide-react";

export default function AdminArticlesPage() {
  return (
    <div className="space-y-8 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <p className="text-[10px] uppercase tracking-kicker text-brand-brass font-semibold">
            Corporate Press & Editorial
          </p>
          <h1 className="font-serif text-3xl text-white font-normal mt-1">
            Articles & Market Insights
          </h1>
        </div>

        <Button variant="default" size="sm" className="inline-flex items-center gap-1.5 text-xs">
          <Plus className="h-4 w-4" />
          <span>New Article Draft</span>
        </Button>
      </div>

      <div className="bg-brand-navy/60 border border-white/10 rounded-[2px] overflow-hidden">
        <table className="w-full text-left text-xs">
          <thead className="bg-white/5 border-b border-white/10 text-white/60 uppercase tracking-kicker text-[10px]">
            <tr>
              <th className="py-4 px-6">Article Title</th>
              <th className="py-4 px-6">Category</th>
              <th className="py-4 px-6">Date</th>
              <th className="py-4 px-6">Read Time</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5 text-white/80">
            {newsArticles.map((article) => (
              <tr key={article.slug} className="hover:bg-white/5 transition-colors">
                <td className="py-4 px-6 font-medium text-white max-w-sm truncate">
                  {article.title}
                </td>
                <td className="py-4 px-6">
                  <Badge variant="outline" className="text-[10px]">{article.category}</Badge>
                </td>
                <td className="py-4 px-6 text-white/60">{article.date}</td>
                <td className="py-4 px-6 text-white/60">{article.readTime}</td>
                <td className="py-4 px-6">
                  <Badge variant="navy" className="border-green-500/40 text-green-400">
                    PUBLISHED
                  </Badge>
                </td>
                <td className="py-4 px-6 text-right space-x-3">
                  <Link
                    href={`/news/${article.slug}`}
                    target="_blank"
                    className="text-brand-brass hover:text-white transition-colors inline-flex items-center gap-1"
                  >
                    <span>View</span>
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
  );
}
