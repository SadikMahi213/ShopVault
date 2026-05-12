"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProductCard } from "@/components/product/ProductCard";
import { products } from "@/data/products";
import { motion } from "framer-motion";

function Countdown({ target }: { target: Date }) {
  const [timeLeft, setTimeLeft] = useState(() => target.getTime() - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(target.getTime() - Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, [target]);

  if (timeLeft <= 0) return null;

  const hours = Math.floor(timeLeft / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div className="flex items-center gap-2">
      {[
        { value: hours, label: "Hours" },
        { value: minutes, label: "Minutes" },
        { value: seconds, label: "Seconds" },
      ].map((unit) => (
        <div key={unit.label} className="text-center">
          <div className="bg-background rounded-lg px-3 py-1.5 shadow-sm border border-border min-w-[48px]">
            <span className="text-xl font-bold">{unit.value.toString().padStart(2, "0")}</span>
          </div>
          <span className="text-[10px] text-muted-foreground mt-0.5 block">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}

export function FlashSale() {
  const saleProducts = products.filter((p) => p.discount).slice(0, 4);
  const [targetDate] = useState(() => new Date(Date.now() + 24 * 60 * 60 * 1000));

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary/10 via-background to-accent/10 rounded-3xl p-8 sm:p-12 border border-border/50">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2
                    className="text-2xl sm:text-3xl font-bold"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    Flash Sale
                  </h2>
                  <Badge variant="destructive">Limited Time</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Hurry up! Deals end soon
                </p>
              </div>
            </div>
            <Countdown target={targetDate} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {saleProducts.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" className="gap-2" asChild>
              <Link href="/shop">
                View All Deals <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
