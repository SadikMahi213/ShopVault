import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedCategories } from "@/components/home/FeaturedCategories";
import { TrendingProducts } from "@/components/home/TrendingProducts";
import { FlashSale } from "@/components/home/FlashSale";
import { Testimonials } from "@/components/home/Testimonials";
import { Newsletter } from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedCategories />
      <TrendingProducts />
      <FlashSale />
      <Testimonials />
      <Newsletter />
    </>
  );
}
