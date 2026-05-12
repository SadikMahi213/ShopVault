"use client";

import { Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const reviews = [
  {
    id: "rev-1",
    name: "Alex Thompson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    rating: 5,
    date: "2 weeks ago",
    content: "Absolutely incredible product! Exceeded all my expectations. The quality is outstanding and it arrived beautifully packaged.",
  },
  {
    id: "rev-2",
    name: "Jessica Park",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    rating: 4,
    date: "1 month ago",
    content: "Great value for the price. Very well made and looks premium. Would recommend to anyone looking for quality.",
  },
  {
    id: "rev-3",
    name: "David Kim",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    rating: 5,
    date: "3 weeks ago",
    content: "This is my third purchase from ShopVault and they never disappoint. Fast shipping, amazing products, great customer service.",
  },
];

export function ProductReviews() {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Customer Reviews</h3>
      <div className="space-y-6">
        {reviews.map((review, i) => (
          <div key={review.id}>
            <div className="flex gap-4">
              <img
                src={review.avatar}
                alt={review.name}
                className="h-10 w-10 rounded-full object-cover shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">{review.name}</p>
                  <span className="text-xs text-muted-foreground">
                    {review.date}
                  </span>
                </div>
                <div className="flex items-center gap-0.5 mt-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < review.rating
                          ? "fill-secondary text-secondary"
                          : "text-muted-foreground/30"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  {review.content}
                </p>
              </div>
            </div>
            {i < reviews.length - 1 && <Separator className="mt-6" />}
          </div>
        ))}
      </div>
    </div>
  );
}
