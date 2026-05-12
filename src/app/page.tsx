import { EnterpriseHero } from "@/components/landing/EnterpriseHero";
import { FeatureGrid } from "@/components/landing/FeatureGrid";
import { PricingSection } from "@/components/landing/PricingSection";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { ROICalculator } from "@/components/landing/ROICalculator";
import { CTASection } from "@/components/landing/CTASection";

export default function HomePage() {
  return (
    <>
      <EnterpriseHero />
      <FeatureGrid />
      <CaseStudies />
      <PricingSection />
      <ROICalculator />
      <CTASection />
    </>
  );
}
