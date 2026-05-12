import { PricingSection } from "@/components/landing/PricingSection";
import { CTASection } from "@/components/landing/CTASection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Enterprise commerce platform pricing. Start free, scale as you grow.",
};

export default function PricingPage() {
  return (
    <>
      <div className="pt-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">Simple, transparent pricing</h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">No hidden fees. No surprises. Scale your commerce operations with confidence.</p>
      </div>
      <PricingSection />
      <CTASection />
    </>
  );
}
