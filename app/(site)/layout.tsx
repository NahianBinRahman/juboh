import * as React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { ScrollRevealProvider } from "@/components/ui/scroll-reveal-provider";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-ivory text-brand-charcoal">
      <CustomCursor />
      <Header />
      <main className="flex-1">
        <ScrollRevealProvider>{children}</ScrollRevealProvider>
      </main>
      <Footer />
    </div>
  );
}
