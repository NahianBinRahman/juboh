import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EditorialKicker } from "@/components/sections/editorial-kicker";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-brand-ivory px-5 py-24">
      <div className="max-w-xl text-center space-y-6">
        <EditorialKicker label="Error 404" tagline="Page Not Found" className="justify-center flex" />
        <h1 className="font-serif text-4xl sm:text-5xl text-brand-charcoal font-normal">
          The requested resource is unavailable.
        </h1>
        <p className="text-base text-brand-charcoal/70 leading-relaxed font-light">
          The page or corporate record you are attempting to access does not exist, has been relocated, or is pending verification.
        </p>
        <div className="pt-4 flex justify-center gap-4">
          <Button asChild variant="default">
            <Link href="/">Return to Homepage</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Administration</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
