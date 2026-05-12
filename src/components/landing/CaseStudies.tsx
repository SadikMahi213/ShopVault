"use client";

import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { caseStudies } from "@/data/pricing";
import { motion } from "framer-motion";

export function CaseStudies() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary mb-3">Case Studies</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Trusted by industry leaders
          </h2>
          <p className="text-lg text-muted-foreground">
            See how leading brands transformed their commerce operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[16/9] overflow-hidden bg-muted">
                <img src={cs.image} alt={cs.company} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-lg bg-muted overflow-hidden">
                    <img src={cs.logo} alt="" className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{cs.company}</p>
                    <p className="text-xs text-muted-foreground">{cs.industry}</p>
                  </div>
                </div>
                <Quote className="h-6 w-6 text-primary/30 mb-2" />
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">&ldquo;{cs.quote}&rdquo;</p>
                <div className="flex gap-4 pt-3 border-t border-border">
                  {cs.results.map((r) => (
                    <div key={r.label}>
                      <p className="text-sm font-bold text-primary">{r.value}</p>
                      <p className="text-xs text-muted-foreground">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="gap-2" asChild>
            <Link href="#">
              View All Case Studies <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
