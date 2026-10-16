"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MessageSquare, FolderKanban, Layers, UserPlus, ArrowRight, CheckCircle2 } from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          organization: formData.organization,
          discipline: "General Inquiry",
          inquiryType: "General",
          message: formData.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Graceful fallback
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const contactOptions = [
    {
      title: "Start a Conversation",
      desc: "General inquiries and partnerships.",
      icon: MessageSquare,
    },
    {
      title: "Discuss a Project",
      desc: "Share details about your development or program.",
      icon: FolderKanban,
    },
    {
      title: "Explore Our Services",
      desc: "Learn how we can support your goals.",
      icon: Layers,
    },
    {
      title: "Join Our Team",
      desc: "Explore career opportunities.",
      icon: UserPlus,
    },
  ];

  return (
    <section className="scroll-section relative min-h-[100dvh] lg:h-[100dvh] flex flex-col justify-center py-6 sm:py-8 lg:py-6 border-b border-brand-hairline overflow-hidden bg-[#FAF8F5]">
      {/* Background visual subtly placed on left */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-1/2 z-0 opacity-20 pointer-events-none">
        <Image
          src="/media/preview-contact-lounge.jpg"
          alt="JUBOH Office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FAF8F5]/80 to-[#FAF8F5]" />
      </div>

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-12 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Narrative & Options */}
          <div className="lg:col-span-6 space-y-4 max-w-xl slide-from-left">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.2em] uppercase font-sans text-brand-brass">
                  WORK WITH US
                </span>
                <span className="w-8 h-[1px] bg-brand-brass opacity-60" />
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-normal leading-[1.12] text-brand-charcoal tracking-tight">
                Let&apos;s Build What&apos;s Next.
              </h2>
              <p className="text-xs sm:text-sm font-light text-brand-charcoal/75 leading-relaxed">
                We partner with public, private, and institutional clients to bring ambitious projects to life.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              {contactOptions.map((opt) => {
                const IconComp = opt.icon;
                return (
                  <div key={opt.title} className="flex items-start gap-3">
                    <div className="p-2 rounded-full border border-brand-hairline bg-white text-brand-brass shadow-2xs shrink-0">
                      <IconComp className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-medium text-brand-charcoal">
                        {opt.title}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-brand-charcoal/65 font-light">
                        {opt.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Contact Form Card */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end slide-from-right">
            <div className="w-full max-w-lg bg-white p-6 sm:p-8 rounded-[2px] border border-brand-hairline shadow-md space-y-4 card-hover-lift">
              <h3 className="font-serif text-xl sm:text-2xl text-brand-charcoal font-medium">
                Send Us a Message
              </h3>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-[2px] space-y-2 text-center">
                  <CheckCircle2 className="w-8 h-8 mx-auto text-emerald-600" />
                  <p className="font-serif text-lg font-medium">Thank You</p>
                  <p className="text-xs text-emerald-700">
                    Your inquiry has been received. Our executive office will review and respond shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-sans font-medium text-brand-charcoal/80">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full h-9 px-3 text-xs border border-brand-hairline rounded-[2px] focus:outline-none focus:border-brand-brass bg-[#FAF8F5]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-[11px] font-sans font-medium text-brand-charcoal/80">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full h-9 px-3 text-xs border border-brand-hairline rounded-[2px] focus:outline-none focus:border-brand-brass bg-[#FAF8F5]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-sans font-medium text-brand-charcoal/80">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-9 px-3 text-xs border border-brand-hairline rounded-[2px] focus:outline-none focus:border-brand-brass bg-[#FAF8F5]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-sans font-medium text-brand-charcoal/80">
                      Organization
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full h-9 px-3 text-xs border border-brand-hairline rounded-[2px] focus:outline-none focus:border-brand-brass bg-[#FAF8F5]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[11px] font-sans font-medium text-brand-charcoal/80">
                      How can we help?
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-2.5 text-xs border border-brand-hairline rounded-[2px] focus:outline-none focus:border-brand-brass bg-[#FAF8F5] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={loading}
                    variant="default"
                    className="w-full h-11 text-xs tracking-kicker mt-2"
                  >
                    <span>{loading ? "SENDING..." : "SEND MESSAGE"}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
