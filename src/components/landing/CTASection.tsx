"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const benefits = [
  "14-day free trial, no credit card",
  "Dedicated onboarding specialist",
  "Enterprise SLA guarantee",
  "Migration support included",
];

export function CTASection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-dark to-accent p-8 sm:p-16 text-center"
        >
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          </div>
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Ready to transform your commerce operations?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-lg mx-auto">
              Join 12,000+ businesses using ShopVaultOS to power their commerce infrastructure.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              {benefits.map((b) => (
                <div key={b} className="flex items-center gap-2 text-white/80 text-sm">
                  <Check className="h-4 w-4 text-emerald-300" />
                  {b}
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" variant="secondary" className="gap-2 text-base h-12 px-8" asChild>
                <Link href="/pricing">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base h-12 px-8 border-white/20 text-white hover:text-white hover:bg-white/10" asChild>
                <Link href="/shop">Explore Storefront</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
