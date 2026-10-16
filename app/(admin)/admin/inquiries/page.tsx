import * as React from "react";
import { Metadata } from "next";
import { getAllInquiries } from "@/lib/inquiries/store";
import { InquiriesManager } from "@/components/admin/inquiries-manager";

export const metadata: Metadata = {
  title: "Enterprise Inquiries Log | JUBOH Enterprise Admin",
  description: "Review, route, and resolve institutional inquiries submitted through the JUBOH web portal.",
};

export default async function AdminInquiriesPage() {
  const inquiries = await getAllInquiries();

  return (
    <div className="space-y-8 max-w-6xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
        <div>
          <p className="text-[10px] uppercase tracking-kicker text-brand-brass font-semibold">
            Institutional Communications
          </p>
          <h1 className="font-serif text-3xl text-white font-normal mt-1">
            Enterprise Inquiries Log
          </h1>
          <p className="text-xs text-white/50 mt-1">
            Real-time feed of enterprise partnership requests, capital advisory requests, and municipal RFP notices.
          </p>
        </div>
      </div>

      <InquiriesManager initialInquiries={inquiries} />
    </div>
  );
}
