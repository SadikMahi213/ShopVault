"use client";

import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { pricingTiers } from "@/data/pricing";
import { motion } from "framer-motion";

export function PricingSection() {
  return (
    <section className="py-24 sm:py-32 bg-muted/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Plans for every stage of growth
          </h2>
          <p className="text-lg text-muted-foreground">
            Start with a free trial. No credit card required. Scale as you grow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 flex flex-col ${
                tier.highlighted
                  ? "border-primary/30 bg-card shadow-xl shadow-primary/5 scale-[1.02]"
                  : "border-border bg-card shadow-sm"
              }`}
            >
              {tier.badge && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">{tier.badge}</Badge>
              )}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-1">{tier.name}</h3>
                <p className="text-sm text-muted-foreground">{tier.description}</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-bold">${tier.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <Button
                className={`w-full mb-6 ${tier.highlighted ? "" : "variant-outline"}`}
                variant={tier.highlighted ? "default" : "outline"}
                asChild
              >
                <Link href="/pricing">
                  {tier.cta} <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </Button>
              <ul className="space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <Check className="h-4 w-4 text-emerald-500 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm text-muted-foreground">
            All plans include a 14-day free trial. Enterprise plans include a dedicated onboarding team.{" "}
            <Link href="/pricing" className="text-primary hover:underline">Compare plans →</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
