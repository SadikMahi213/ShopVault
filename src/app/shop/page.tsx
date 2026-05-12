"use client";

import { useState, useMemo } from "react";
import { SlidersHorizontal, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ProductGrid } from "@/components/product/ProductGrid";
import { products } from "@/data/products";
import { motion } from "framer-motion";

const allCategories = [
  "All",
  ...new Set(products.map((p) => p.category)),
];

export default function ShopPage() {
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("default");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);

  const filtered = useMemo(() => {
    let result = [...products];
    if (category !== "All") result = result.filter((p) => p.category === category);
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);
    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);
    if (sortBy === "newest") result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return result;
  }, [category, sortBy, priceRange]);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold" style={{ fontFamily: "var(--font-heading)" }}>
          {category === "All" ? "All Products" : category}
        </h1>
        <p className="text-muted-foreground mt-2">
          Showing {filtered.length} of {products.length} products
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:w-64 shrink-0">
          <div className="sticky top-24 space-y-6">
            <div>
              <h3 className="text-sm font-semibold mb-3">Categories</h3>
              <div className="space-y-1">
                {allCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`block w-full text-left px-3 py-2 text-sm rounded-lg transition-colors ${
                      category === cat
                        ? "bg-primary text-white"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="text-sm font-semibold mb-3">Price Range</h3>
              <div className="flex items-center gap-2">
                <Input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                  className="h-9 text-xs"
                  placeholder="Min"
                />
                <span className="text-xs text-muted-foreground">to</span>
                <Input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                  className="h-9 text-xs"
                  placeholder="Max"
                />
              </div>
            </div>
            <Separator />
            <div>
              <h3 className="text-sm font-semibold mb-3">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full h-9 rounded-lg border border-border bg-background px-3 text-sm"
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Products */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <SlidersHorizontal className="h-4 w-4 lg:hidden" />
              <span className="lg:hidden">Filters</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-lg font-medium">No products found</p>
              <p className="text-sm text-muted-foreground mt-1">Try adjusting your filters</p>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <ProductGrid products={filtered} />
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
