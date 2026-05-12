"use client";

import Link from "next/link";
import { Heart, ShoppingBag, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCartStore, useWishlistStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((s) => s.addItem);
  const { isWishlisted, toggleWishlist } = useWishlistStore();
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="group relative rounded-xl border border-border bg-card shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Image */}
      <Link href={`/shop/${product.slug}`} className="block aspect-square overflow-hidden bg-muted relative">
        <img
          src={product.images[0]}
          alt={product.name}
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.isNew && <Badge variant="default" className="text-[10px]">NEW</Badge>}
          {product.discount && (
            <Badge variant="destructive" className="text-[10px]">-{product.discount}%</Badge>
          )}
          {product.isTrending && (
            <Badge variant="secondary" className="text-[10px]">TRENDING</Badge>
          )}
        </div>
        {/* Wishlist */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
          aria-label="Toggle wishlist"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              wishlisted ? "fill-accent text-accent" : "text-foreground"
            }`}
          />
        </button>
      </Link>

      {/* Info */}
      <div className="p-4">
        <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="text-sm font-semibold line-clamp-1 hover:text-primary transition-colors">
            {product.name}
          </h3>
        </Link>
        <div className="flex items-center gap-1 mt-1">
          <Star className="h-3 w-3 fill-secondary text-secondary" />
          <span className="text-xs font-medium">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
        </div>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1.5">
            <span className="text-base font-bold">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <Button
            size="icon"
            variant="ghost"
            className="h-8 w-8 rounded-full hover:bg-primary hover:text-white"
            onClick={() => addItem(product)}
            aria-label="Add to cart"
          >
            <ShoppingBag className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
