"use client";

import { useMemo } from "react";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductReviews } from "@/components/product/ProductReviews";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/data/products";
import type { Product } from "@/types";

export function ProductDetailClient({ product }: { product: Product }) {
  const related = useMemo(
    () =>
      products
        .filter((p) => p.category === product.category && p.id !== product.id)
        .slice(0, 4),
    [product]
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
        <span>/</span>
        <Link href="/shop" className="hover:text-foreground transition-colors">Shop</Link>
        <span>/</span>
        <Link
          href={`/shop?category=${product.categorySlug}`}
          className="hover:text-foreground transition-colors"
        >
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-foreground truncate">{product.name}</span>
      </div>

      {/* Back button mobile */}
      <Button variant="ghost" size="sm" className="mb-6 gap-1 lg:hidden" asChild>
        <Link href="/shop">
          <ChevronLeft className="h-4 w-4" />
          Back to Shop
        </Link>
      </Button>

      {/* Product Detail */}
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 mb-16">
        <ProductGallery images={product.images} name={product.name} />
        <ProductInfo product={product} />
      </div>

      <Separator className="mb-16" />

      {/* Reviews */}
      <div className="mb-16">
        <ProductReviews />
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Related Products
          </h2>
          <ProductGrid products={related} />
        </div>
      )}
    </div>
  );
}
