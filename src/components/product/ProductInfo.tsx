"use client";

import { Star, Check, ShoppingBag, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCartStore, useWishlistStore } from "@/lib/store";
import { formatPrice, formatDiscount } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const addItem = useCartStore((s) => s.addItem);
  const { isWishlisted, toggleWishlist } = useWishlistStore();
  const wishlisted = isWishlisted(product.id);

  return (
    <div className="space-y-6">
      {/* Category & Badges */}
      <div className="flex items-center gap-2 flex-wrap">
        <Badge variant="outline" className="text-xs">
          {product.category}
        </Badge>
        {product.isNew && <Badge className="text-xs">New Arrival</Badge>}
        {product.discount && (
          <Badge variant="destructive" className="text-xs">
            -{product.discount}% Off
          </Badge>
        )}
      </div>

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl font-bold leading-tight" style={{ fontFamily: "var(--font-heading)" }}>
        {product.name}
      </h1>

      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(product.rating)
                  ? "fill-secondary text-secondary"
                  : "text-muted-foreground/30"
              }`}
            />
          ))}
        </div>
        <span className="text-sm font-medium">{product.rating}</span>
        <span className="text-sm text-muted-foreground">
          ({product.reviewCount} reviews)
        </span>
      </div>

      <Separator />

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold">{formatPrice(product.price)}</span>
        {product.originalPrice && (
          <>
            <span className="text-lg text-muted-foreground line-through">
              {formatPrice(product.originalPrice)}
            </span>
            <Badge variant="destructive" className="text-xs">
              Save {formatDiscount(product.originalPrice, product.price)}%
            </Badge>
          </>
        )}
      </div>

      {/* Description */}
      <p className="text-muted-foreground leading-relaxed">
        {product.description}
      </p>

      {/* Features */}
      <div className="space-y-2">
        <p className="text-sm font-semibold">Features</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {product.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
              <Check className="h-4 w-4 text-emerald-500 shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <Separator />

      {/* Stock */}
      <div className="flex items-center gap-2">
        <div className={`h-2 w-2 rounded-full ${product.inStock ? "bg-emerald-500" : "bg-red-500"}`} />
        <span className="text-sm font-medium">
          {product.inStock ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <Button
          size="lg"
          className="flex-1 gap-2"
          onClick={() => addItem(product)}
          disabled={!product.inStock}
        >
          <ShoppingBag className="h-5 w-5" />
          Add to Cart
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="gap-2"
          onClick={() => toggleWishlist(product.id)}
        >
          <Heart
            className={`h-5 w-5 ${
              wishlisted ? "fill-accent text-accent" : ""
            }`}
          />
        </Button>
      </div>
    </div>
  );
}
