"use client";

import { products } from "@/data/products";
import { ProductCard } from "@/components/product/ProductCard";
import { motion } from "framer-motion";

export function TrendingProducts() {
  const trending = products.filter((p) => p.isTrending).slice(0, 8);

  return (
    <section className="py-16 sm:py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-medium text-primary mb-2">Trending Now</p>
          <h2
            className="text-3xl sm:text-4xl font-bold"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Most Popular Products
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Discover what everyone is loving right now
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {trending.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
