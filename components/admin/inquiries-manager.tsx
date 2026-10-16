"use client";

import * as React from "react";
import { InquiryRecord, InquiryStatus, INQUIRY_TYPES } from "@/lib/inquiries/schema";
import { updateInquiryStatusAction, deleteInquiryAction } from "@/lib/inquiries/actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Search,
  Filter,
  Mail,
  Phone,
  Building,
  Calendar,
  CheckCircle2,
  Clock,
  Archive,
  Trash2,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Shield,
  FileText,
} from "lucide-react";

interface InquiriesManagerProps {
  initialInquiries: InquiryRecord[];
}

export function InquiriesManager({ initialInquiries }: InquiriesManagerProps) {
  const [inquiries, setInquiries] = React.useState<InquiryRecord[]>(initialInquiries);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [selectedStatus, setSelectedStatus] = React.useState<string>("ALL");
  const [selectedDiscipline, setSelectedDiscipline] = React.useState<string>("ALL");
  const [expandedId, setExpandedId] = React.useState<string | null>(null);
  const [updatingId, setUpdatingId] = React.useState<string | null>(null);
  const [noteDrafts, setNoteDrafts] = React.useState<Record<string, string>>({});

  // Sync with server updates
  React.useEffect(() => {
    setInquiries(initialInquiries);
  }, [initialInquiries]);

  // Status counts
  const counts = React.useMemo(() => {
    return {
      ALL: inquiries.length,
      NEW: inquiries.filter((i) => i.status === "NEW").length,
      IN_PROGRESS: inquiries.filter((i) => i.status === "IN_PROGRESS").length,
      RESOLVED: inquiries.filter((i) => i.status === "RESOLVED").length,
      ARCHIVED: inquiries.filter((i) => i.status === "ARCHIVED").length,
    };
  }, [inquiries]);

  // Filtered inquiries
  const filtered = React.useMemo(() => {
    return inquiries.filter((inq) => {
      // Status filter
      if (selectedStatus !== "ALL" && inq.status !== selectedStatus) {
        return false;
      }
      // Discipline filter
      if (selectedDiscipline !== "ALL" && inq.inquiryType !== selectedDiscipline) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = inq.fullName.toLowerCase().includes(q);
        const matchesEmail = inq.email.toLowerCase().includes(q);
        const matchesOrg = (inq.organization || "").toLowerCase().includes(q);
        const matchesRef = inq.referenceCode.toLowerCase().includes(q);
        const matchesMsg = inq.message.toLowerCase().includes(q);
        return matchesName || matchesEmail || matchesOrg || matchesRef || matchesMsg;
      }
      return true;
    });
  }, [inquiries, selectedStatus, selectedDiscipline, searchQuery]);

  const handleStatusChange = async (id: string, newStatus: InquiryStatus) => {
    setUpdatingId(id);
    const notes = noteDrafts[id];
    // Optimistic local update
    setInquiries((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status: newStatus, internalNotes: notes || i.internalNotes } : i))
    );

    const res = await updateInquiryStatusAction(id, newStatus, notes);
    setUpdatingId(null);
    if (!res.success) {
      alert(res.message || "Could not update status.");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to permanently delete this inquiry record?")) {
      return;
    }
    setUpdatingId(id);
    setInquiries((prev) => prev.filter((i) => i.id !== id));
    const res = await deleteInquiryAction(id);
    setUpdatingId(null);
    if (!res.success) {
      alert(res.message || "Could not delete inquiry.");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header controls: Search & Filters */}
      <div className="p-4 sm:p-6 bg-brand-navy/60 border border-white/10 rounded-[2px] space-y-4">
        {/* Status Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-white/10 text-xs">
          {(["ALL", "NEW", "IN_PROGRESS", "RESOLVED", "ARCHIVED"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setSelectedStatus(status)}
              className={`px-3 py-1.5 rounded-[2px] transition-all flex items-center gap-1.5 whitespace-nowrap font-medium ${
                selectedStatus === status
                  ? "bg-brand-brass text-brand-navy font-semibold shadow-sm"
                  : "bg-white/5 hover:bg-white/10 text-white/70"
              }`}
            >
              <span>{status.replace("_", " ")}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                  selectedStatus === status ? "bg-brand-navy/20 text-brand-navy" : "bg-white/10 text-white/60"
                }`}
              >
                {counts[status]}
              </span>
            </button>
          ))}
        </div>

        {/* Search & Discipline Filter Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 pt-1">
          <div className="sm:col-span-8 relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-white/40" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by principal name, organization, email, or reference code..."
              className="w-full h-10 pl-9 pr-4 bg-white/5 border border-white/10 rounded-[2px] text-xs text-white placeholder:text-white/30 focus:outline-none focus:border-brand-brass"
            />
          </div>

          <div className="sm:col-span-4">
            <select
              value={selectedDiscipline}
              onChange={(e) => setSelectedDiscipline(e.target.value)}
              className="w-full h-10 px-3 bg-brand-navy border border-white/10 rounded-[2px] text-xs text-white/90 focus:outline-none focus:border-brand-brass"
            >
              <option value="ALL">All Operating Disciplines</option>
              {INQUIRY_TYPES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Inquiries List */}
      <div className="space-y-4">
        {filtered.length === 0 ? (
          <div className="p-12 text-center bg-brand-navy/40 border border-white/10 rounded-[2px] space-y-3">
            <FileText className="w-10 h-10 text-white/20 mx-auto" />
            <p className="text-sm text-white/60">No inquiry records match your active criteria.</p>
            {(searchQuery || selectedStatus !== "ALL" || selectedDiscipline !== "ALL") && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedStatus("ALL");
                  setSelectedDiscipline("ALL");
                }}
              >
                Reset All Filters
              </Button>
            )}
          </div>
        ) : (
          filtered.map((inq) => {
            const isExpanded = expandedId === inq.id;
            const isBusy = updatingId === inq.id;

            return (
              <div
                key={inq.id}
                className={`bg-brand-navy/60 border rounded-[2px] transition-all overflow-hidden ${
                  inq.status === "NEW" ? "border-brand-brass/40 shadow-sm" : "border-white/10"
                }`}
              >
                {/* Header row */}
                <div className="p-5 sm:p-6 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
                    <div className="flex flex-wrap items-center gap-2 text-xs">
                      <span className="font-mono text-[11px] px-2 py-0.5 bg-white/10 rounded-[2px] text-brand-brass font-semibold">
                        {inq.referenceCode}
                      </span>
                      <span className="font-medium text-white text-sm">{inq.fullName}</span>
                      {inq.organization && (
                        <>
                          <span className="text-white/30">•</span>
                          <span className="text-white/70">{inq.organization}</span>
                        </>
                      )}
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-[11px] text-white/40 flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(inq.createdAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>

                      <Badge
                        variant={
                          inq.status === "NEW"
                            ? "default"
                            : inq.status === "IN_PROGRESS"
                            ? "outline"
                            : inq.status === "RESOLVED"
                            ? "navy"
                            : "secondary"
                        }
                        className="text-[10px] tracking-wider uppercase font-semibold"
                      >
                        {inq.status.replace("_", " ")}
                      </Badge>
                    </div>
                  </div>

                  {/* Metadata Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-white/70">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-brand-brass shrink-0" />
                      <a
                        href={`mailto:${inq.email}`}
                        className="hover:text-brand-brass truncate underline decoration-white/20"
                      >
                        {inq.email}
                      </a>
                    </div>
                    {inq.phone ? (
                      <div className="flex items-center gap-2">
                        <Phone className="w-3.5 h-3.5 text-brand-brass shrink-0" />
                        <span>{inq.phone}</span>
                      </div>
                    ) : (
                      <div className="text-white/30">No direct phone provided</div>
                    )}
                    <div className="sm:text-right">
                      <span className="text-brand-brass font-medium">{inq.inquiryType}</span>
                    </div>
                  </div>

                  {/* Message Preview / Full */}
                  <div className="p-4 bg-white/5 border border-white/5 rounded-[2px] space-y-2">
                    <p className="text-[11px] uppercase tracking-kicker text-white/40 font-semibold flex items-center gap-1.5">
                      <MessageSquare className="w-3 h-3 text-brand-brass" />
                      Inquiry Scope & Overview
                    </p>
                    <p className="text-sm text-white/90 leading-relaxed font-light whitespace-pre-wrap">
                      {isExpanded ? inq.message : inq.message.length > 220 ? `${inq.message.slice(0, 220)}...` : inq.message}
                    </p>

                    {inq.message.length > 220 && (
                      <button
                        onClick={() => setExpandedId(isExpanded ? null : inq.id)}
                        className="text-xs text-brand-brass hover:underline pt-1 inline-flex items-center gap-1"
                      >
                        {isExpanded ? (
                          <>
                            Show Less <ChevronUp className="w-3 h-3" />
                          </>
                        ) : (
                          <>
                            Read Complete Transmission <ChevronDown className="w-3 h-3" />
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Internal Notes Display */}
                  {inq.internalNotes && (
                    <div className="p-3 bg-brand-brass/10 border border-brand-brass/20 rounded-[2px] text-xs text-brand-brass space-y-1">
                      <p className="font-semibold uppercase tracking-wider text-[10px]">Internal Executive Note</p>
                      <p className="text-white/80">{inq.internalNotes}</p>
                    </div>
                  )}

                  {/* Management Action Bar */}
                  <div className="pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="text-white/40">Status:</span>
                      {inq.status !== "IN_PROGRESS" && (
                        <button
                          disabled={isBusy}
                          onClick={() => handleStatusChange(inq.id, "IN_PROGRESS")}
                          className="px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-[2px] text-white/80 transition-colors disabled:opacity-50"
                        >
                          Mark In Progress
                        </button>
                      )}
                      {inq.status !== "RESOLVED" && (
                        <button
                          disabled={isBusy}
                          onClick={() => handleStatusChange(inq.id, "RESOLVED")}
                          className="px-2.5 py-1 bg-brand-brass/20 hover:bg-brand-brass/30 border border-brand-brass/40 text-brand-brass rounded-[2px] transition-colors disabled:opacity-50 font-medium"
                        >
                          Mark Resolved
                        </button>
                      )}
                      {inq.status !== "ARCHIVED" && (
                        <button
                          disabled={isBusy}
                          onClick={() => handleStatusChange(inq.id, "ARCHIVED")}
                          className="px-2.5 py-1 bg-white/5 hover:bg-white/10 border border-white/10 rounded-[2px] text-white/60 transition-colors disabled:opacity-50 flex items-center gap-1"
                        >
                          <Archive className="w-3 h-3" /> Archive
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        disabled={isBusy}
                        onClick={() => handleDelete(inq.id)}
                        className="px-2.5 py-1 text-red-400 hover:text-red-300 hover:bg-red-950/30 border border-red-500/20 rounded-[2px] transition-colors disabled:opacity-50 flex items-center gap-1"
                      >
                        <Trash2 className="w-3 h-3" /> Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
