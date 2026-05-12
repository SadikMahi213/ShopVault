"use client";

import { useWishlistStore } from "@/lib/store";
import { products } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function WishlistPage() {
  const items = useWishlistStore((s) => s.items);
  const wishlistedProducts = products.filter((p) => items.includes(p.id));

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-2xl font-bold mb-2">My Wishlist</h1>
      <p className="text-muted-foreground text-sm mb-8">{items.length} saved items</p>

      {items.length === 0 ? (
        <div className="text-center py-16">
          <Heart className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-lg font-medium">Your wishlist is empty</p>
          <p className="text-sm text-muted-foreground mb-6">Save your favorite items here.</p>
          <Button asChild><Link href="/shop">Browse Products</Link></Button>
        </div>
      ) : (
        <ProductGrid products={wishlistedProducts} />
      )}
    </div>
  );
}
