"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchSmartSearchResults } from "@/services/api";
import { Search, X, Sparkles, TrendingUp } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { formatPrice } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function SmartSearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { data: results } = useQuery({
    queryKey: ["smart-search", query],
    queryFn: () => fetchSmartSearchResults(query),
    enabled: query.length > 1,
  });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handler = (e: KeyboardEvent) => {
        if ((e.metaKey || e.ctrlKey) && e.key === "k") {
          e.preventDefault();
          setOpen(true);
          setTimeout(() => inputRef.current?.focus(), 50);
        }
        if (e.key === "Escape") setOpen(false);
      };
      document.addEventListener("keydown", handler);
      return () => document.removeEventListener("keydown", handler);
    }
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-lg">
      <div
        className="flex items-center gap-2 h-11 px-4 rounded-xl border border-border bg-muted/50 cursor-text hover:border-primary/30 transition-colors"
        onClick={() => { setOpen(true); setTimeout(() => inputRef.current?.focus(), 50); }}
      >
        <Search className="h-4 w-4 text-muted-foreground shrink-0" />
        <span className="flex-1 text-sm text-muted-foreground">AI Search — try &quot;wireless headphones&quot;</span>
        <kbd className="hidden sm:inline-flex h-6 items-center gap-1 rounded-md border border-border bg-background px-2 text-[11px] text-muted-foreground">
          <span className="text-xs">⌘</span>K
        </kbd>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -4, scale: 0.98 }}
            className="absolute top-full left-0 right-0 mt-2 rounded-xl border border-border bg-card shadow-2xl overflow-hidden z-50"
          >
            <div className="flex items-center gap-3 px-4 border-b border-border">
              <Search className="h-4 w-4 text-muted-foreground shrink-0" />
              <Input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="border-0 h-12 bg-transparent text-sm focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
              />
              {query && (
                <button onClick={() => setQuery("")} className="p-1 text-muted-foreground hover:text-foreground">
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {!query && (
                <div className="p-6 text-center">
                  <Sparkles className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-sm font-medium">AI-Powered Search</p>
                  <p className="text-xs text-muted-foreground mt-1">Search across our entire catalog with intelligent suggestions</p>
                </div>
              )}

              {query.length === 1 && (
                <p className="text-center text-xs text-muted-foreground py-4">Type at least 2 characters to search...</p>
              )}

              {results && results.length === 0 && query.length > 1 && (
                <p className="text-center text-sm text-muted-foreground py-8">No results found for &ldquo;{query}&rdquo;</p>
              )}

              {results && results.length > 0 && (
                <>
                  <div className="flex items-center gap-2 px-3 py-2">
                    <TrendingUp className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">AI Recommendations</span>
                  </div>
                  {results.map((product) => (
                    <Link
                      key={product.id}
                      href={`/shop/${product.slug}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <div className="h-12 w-12 rounded-lg overflow-hidden bg-muted shrink-0">
                        <img src={product.images[0]} alt={product.name} className="h-full w-full object-cover" loading="lazy" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">{product.name}</p>
                        <p className="text-xs text-muted-foreground">{product.category}</p>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="text-sm font-semibold">{formatPrice(product.price)}</p>
                        {product.discount && <Badge variant="destructive" className="text-[10px]">-{product.discount}%</Badge>}
                      </div>
                    </Link>
                  ))}
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
