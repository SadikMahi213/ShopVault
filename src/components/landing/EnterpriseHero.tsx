"use client";

import Link from "next/link";
import { ArrowRight, Play, BarChart3, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const stats = [
  { value: "$2.8B+", label: "Revenue Processed" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "50K+", label: "Enterprise Users" },
  { value: "190+", label: "Countries Served" },
];

export function EnterpriseHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background pt-20 pb-16 sm:pb-24">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-secondary/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <motion.div className="flex-1 text-center lg:text-left" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-sm mb-6">
              <Zap className="h-3.5 w-3.5 text-primary" />
              <span className="text-muted-foreground">Introducing</span>
              <span className="font-semibold text-foreground">ShopVaultOS v3.0</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Enterprise Commerce{" "}
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Operating System
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              The AI-powered infrastructure that high-growth retailers trust to process millions of orders, 
              manage global inventories, and deliver personalized experiences at scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button size="lg" className="gap-2 text-base h-12 px-8" asChild>
                <Link href="/pricing">
                  Start Free Trial <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-base h-12 px-8" asChild>
                <Link href="#demo">
                  <Play className="h-4 w-4" /> Watch Demo
                </Link>
              </Button>
            </div>

            {/* Trust bar */}
            <div className="flex items-center gap-4 mt-10 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[1,2,3,4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                    <img src={`https://images.unsplash.com/photo-${i === 1 ? '1494790108377-be9c29b29330' : i === 2 ? '1507003211169-0a1dd7228f2d' : i === 3 ? '1472099645785-5658abf4ff4e' : '1438761681033-6461ffad8d80'}?w=64&q=80`} alt="" className="h-full w-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold">12,000+</span>{" "}
                <span className="text-muted-foreground">businesses trust us</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-bold">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Hero visual */}
          <motion.div className="flex-1 w-full max-w-lg lg:max-w-none" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-border/50">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  alt="Enterprise dashboard"
                  className="h-full w-full object-cover"
                />
              </div>
              {/* Floating cards */}
              <div className="absolute -bottom-3 -left-3 glass-card rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-emerald-500" />
                  <span className="text-sm font-semibold">Revenue +23.5%</span>
                </div>
                <p className="text-xs text-muted-foreground">This quarter vs last</p>
              </div>
              <div className="absolute -top-3 -right-3 glass-card rounded-xl px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="text-sm font-semibold">SOC 2 Type II</span>
                </div>
                <p className="text-xs text-muted-foreground">Enterprise certified</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
