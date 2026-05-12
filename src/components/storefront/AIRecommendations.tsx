"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchAIRecommendations } from "@/services/api";
import { ProductCard } from "@/components/product/ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface AIRecommendationsProps {
  currentProductId?: string;
  title?: string;
}

export function AIRecommendations({ currentProductId, title = "You Might Also Like" }: AIRecommendationsProps) {
  const { data: recommendations, isLoading } = useQuery({
    queryKey: ["ai-recommendations", currentProductId],
    queryFn: () => fetchAIRecommendations(currentProductId),
  });

  if (isLoading) {
    return (
      <section className="py-12">
        <div className="flex items-center gap-2 mb-6">
          <Skeleton className="h-5 w-5 rounded-full" />
          <Skeleton className="h-6 w-48" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="aspect-square rounded-xl" />)}
        </div>
      </section>
    );
  }

  if (!recommendations || recommendations.length === 0) return null;

  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-2 mb-6"
      >
        <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
          <Sparkles className="h-4 w-4 text-white" />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
        <Badge variant="premium" className="text-[10px] ml-1">AI Powered</Badge>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {recommendations.map((product, i) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
