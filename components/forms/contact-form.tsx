"use client";

import * as React from "react";
import Link from "next/link";
import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { submitInquiryAction, InquiryActionResult } from "@/lib/inquiries/actions";
import { INQUIRY_TYPES } from "@/lib/inquiries/schema";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight } from "lucide-react";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState<InquiryActionResult | null, FormData>(
    submitInquiryAction,
    null
  );

  const [mountTime, setMountTime] = React.useState<number | null>(null);
  const [selectedDiscipline, setSelectedDiscipline] = React.useState<string>(INQUIRY_TYPES[0]);

  React.useEffect(() => {
    setMountTime(Date.now());
  }, []);

  if (state?.success) {
    return (
      <div className="bg-white border border-brand-hairline p-8 sm:p-12 rounded-[2px] shadow-sm text-center space-y-6 animate-in fade-in duration-300">
        <div className="w-14 h-14 bg-brand-brass/10 border border-brand-brass/30 text-brand-brass rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-7 h-7 stroke-[1.5]" />
        </div>

        <div className="space-y-2">
          <p className="text-xs uppercase tracking-kicker text-brand-brass font-semibold">
            Institutional Receipt Confirmed
          </p>
          <h3 className="font-serif text-3xl text-brand-charcoal">
            Communication Transmitted
          </h3>
          <p className="text-sm text-brand-charcoal/70 max-w-lg mx-auto leading-relaxed">
            {state.message}
          </p>
        </div>

        <div className="p-4 bg-brand-ivory border border-brand-hairline rounded-[2px] max-w-sm mx-auto text-left space-y-1">
          <p className="text-[10px] uppercase tracking-kicker text-brand-charcoal/60 font-semibold">
            Tracking Reference
          </p>
          <p className="font-mono text-sm font-semibold text-brand-charcoal select-all">
            {state.referenceCode}
          </p>
          <p className="text-[11px] text-brand-charcoal/50">
            Please retain this reference code for institutional communications.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            variant="outline"
            onClick={() => {
              window.location.reload();
            }}
          >
            Submit Another Inquiry
          </Button>
          <Button
            variant="default"
            asChild
          >
            <Link href="/projects">
              Explore Enterprise Portfolio <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-brand-hairline p-8 sm:p-12 rounded-[2px] shadow-sm">
      <div className="space-y-2 pb-6 border-b border-brand-hairline">
        <p className="text-xs uppercase tracking-kicker text-brand-brass font-semibold">
          Confidential Communication Channel
        </p>
        <h3 className="font-serif text-2xl sm:text-3xl text-brand-charcoal font-normal">
          Initiate Institutional Inquiry
        </h3>
        <p className="text-xs text-brand-charcoal/60 leading-relaxed font-light">
          Required fields are indicated with an asterisk (<span className="text-brand-brass">*</span>). Submissions route directly to authorized executive offices.
        </p>
      </div>

      {state?.message && !state.success && (
        <div className="mt-6 p-4 bg-red-50 border border-red-200 text-red-900 rounded-[2px] flex items-start gap-3 text-xs">
          <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-medium">{state.message}</p>
          </div>
        </div>
      )}

      <form action={formAction} className="mt-8 space-y-6">
        {/* Anti-spam hidden honeypot field */}
        <div className="hidden opacity-0 pointer-events-none absolute -left-[9999px]" aria-hidden="true">
          <label htmlFor="website_url_hp">Leave this field blank</label>
          <input
            type="text"
            id="website_url_hp"
            name="website_url_hp"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>

        {/* Speed verification timestamp */}
        <input
          type="hidden"
          name="timestamp_start"
          value={mountTime ? mountTime.toString() : ""}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="space-y-1.5">
            <label
              htmlFor="fullName"
              className="block text-xs uppercase tracking-[0.08em] font-medium text-brand-charcoal"
            >
              Principal / Contact Name <span className="text-brand-brass">*</span>
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              required
              placeholder="e.g. Eleanor Vance"
              className={`w-full h-11 px-3.5 bg-brand-ivory/40 border rounded-[2px] text-sm text-brand-charcoal placeholder:text-brand-charcoal/30 focus:outline-none focus:border-brand-brass focus:ring-1 focus:ring-brand-brass transition-all ${
                state?.errors?.fullName ? "border-red-500 bg-red-50/20" : "border-brand-hairline"
              }`}
            />
            {state?.errors?.fullName && (
              <p className="text-[11px] text-red-600 font-medium">
                {state.errors.fullName[0]}
              </p>
            )}
          </div>

          {/* Corporate Email */}
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-xs uppercase tracking-[0.08em] font-medium text-brand-charcoal"
            >
              Corporate / Institutional Email <span className="text-brand-brass">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="e.g. name@organization.com"
              className={`w-full h-11 px-3.5 bg-brand-ivory/40 border rounded-[2px] text-sm text-brand-charcoal placeholder:text-brand-charcoal/30 focus:outline-none focus:border-brand-brass focus:ring-1 focus:ring-brand-brass transition-all ${
                state?.errors?.email ? "border-red-500 bg-red-50/20" : "border-brand-hairline"
              }`}
            />
            {state?.errors?.email && (
              <p className="text-[11px] text-red-600 font-medium">
                {state.errors.email[0]}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Direct Phone Line */}
          <div className="space-y-1.5">
            <label
              htmlFor="phone"
              className="block text-xs uppercase tracking-[0.08em] font-medium text-brand-charcoal"
            >
              Direct Line / Telephone <span className="text-brand-charcoal/40 text-[10px]">(Optional)</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="e.g. +1 (404) 555-0100"
              className={`w-full h-11 px-3.5 bg-brand-ivory/40 border rounded-[2px] text-sm text-brand-charcoal placeholder:text-brand-charcoal/30 focus:outline-none focus:border-brand-brass focus:ring-1 focus:ring-brand-brass transition-all ${
                state?.errors?.phone ? "border-red-500 bg-red-50/20" : "border-brand-hairline"
              }`}
            />
            {state?.errors?.phone && (
              <p className="text-[11px] text-red-600 font-medium">
                {state.errors.phone[0]}
              </p>
            )}
          </div>

          {/* Organization */}
          <div className="space-y-1.5">
            <label
              htmlFor="organization"
              className="block text-xs uppercase tracking-[0.08em] font-medium text-brand-charcoal"
            >
              Organization / Institution <span className="text-brand-charcoal/40 text-[10px]">(Optional)</span>
            </label>
            <input
              id="organization"
              name="organization"
              type="text"
              placeholder="e.g. City Planning Board / Capital Partners"
              className={`w-full h-11 px-3.5 bg-brand-ivory/40 border rounded-[2px] text-sm text-brand-charcoal placeholder:text-brand-charcoal/30 focus:outline-none focus:border-brand-brass focus:ring-1 focus:ring-brand-brass transition-all ${
                state?.errors?.organization ? "border-red-500 bg-red-50/20" : "border-brand-hairline"
              }`}
            />
            {state?.errors?.organization && (
              <p className="text-[11px] text-red-600 font-medium">
                {state.errors.organization[0]}
              </p>
            )}
          </div>
        </div>

        {/* Operating Discipline */}
        <div className="space-y-1.5">
          <label
            htmlFor="inquiryType"
            className="block text-xs uppercase tracking-[0.08em] font-medium text-brand-charcoal"
          >
            Operating Discipline <span className="text-brand-brass">*</span>
          </label>
          <select
            id="inquiryType"
            name="inquiryType"
            value={selectedDiscipline}
            onChange={(e) => setSelectedDiscipline(e.target.value)}
            className={`w-full h-11 px-3.5 bg-brand-ivory/40 border rounded-[2px] text-sm text-brand-charcoal focus:outline-none focus:border-brand-brass focus:ring-1 focus:ring-brand-brass transition-all ${
              state?.errors?.inquiryType ? "border-red-500" : "border-brand-hairline"
            }`}
          >
            {INQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {state?.errors?.inquiryType && (
            <p className="text-[11px] text-red-600 font-medium">
              {state.errors.inquiryType[0]}
            </p>
          )}
        </div>

        {/* Message / Scope */}
        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="block text-xs uppercase tracking-[0.08em] font-medium text-brand-charcoal"
          >
            Inquiry Scope & Overview <span className="text-brand-brass">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Please outline the nature of your inquiry, capital parameters, project location, or timeframe..."
            className={`w-full p-3.5 bg-brand-ivory/40 border rounded-[2px] text-sm text-brand-charcoal placeholder:text-brand-charcoal/30 focus:outline-none focus:border-brand-brass focus:ring-1 focus:ring-brand-brass transition-all resize-none ${
              state?.errors?.message ? "border-red-500 bg-red-50/20" : "border-brand-hairline"
            }`}
          />
          {state?.errors?.message && (
            <p className="text-[11px] text-red-600 font-medium">
              {state.errors.message[0]}
            </p>
          )}
        </div>

        {/* Institutional Privacy & Transmission Button */}
        <div className="pt-2 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <p className="text-[11px] text-brand-charcoal/50 leading-relaxed max-w-md">
              Communications are subject to enterprise non-disclosure standards and institutional record retention policies.
            </p>
            <Button
              type="submit"
              variant="default"
              size="lg"
              disabled={isPending}
              className="w-full sm:w-auto min-w-[200px]"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Transmitting...
                </>
              ) : (
                <>
                  Transmit Enterprise Inquiry
                  <ArrowRight className="w-3.5 h-3.5 ml-2" />
                </>
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
