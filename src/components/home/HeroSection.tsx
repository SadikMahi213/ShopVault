"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-60 w-60 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 py-16 sm:py-24">
          {/* Text Content */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-6">
              <Sparkles className="h-4 w-4" />
              New Season Collection
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Discover Premium{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Products
              </span>{" "}
              You&apos;ll Love
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Curated collections of the finest products from around the world.
              Quality you can trust, prices you&apos;ll appreciate.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button size="lg" className="gap-2 text-base" asChild>
                <Link href="/shop">
                  Shop Now <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
              {[
                { value: "10K+", label: "Products" },
                { value: "50K+", label: "Customers" },
                { value: "4.9", label: "Rating" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            className="flex-1 w-full max-w-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80"
                  alt="Hero shopping"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating badges */}
              <div className="absolute -bottom-4 -left-4 glass rounded-xl px-4 py-3 shadow-lg">
                <p className="text-sm font-semibold">Free Shipping</p>
                <p className="text-xs text-muted-foreground">On all orders $50+</p>
              </div>
              <div className="absolute -top-4 -right-4 glass rounded-xl px-4 py-3 shadow-lg">
                <p className="text-sm font-semibold">🏆 Top Rated</p>
                <p className="text-xs text-muted-foreground">4.9 average rating</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
