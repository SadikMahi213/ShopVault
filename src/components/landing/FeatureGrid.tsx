"use client";

import { Brain, BarChart3, Globe, Shield, Zap, Users, Package, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: Brain, title: "AI Commerce Engine", desc: "Machine learning-powered product recommendations, demand forecasting, and dynamic pricing that adapts in real-time to market conditions.", color: "from-violet-500 to-purple-600" },
  { icon: BarChart3, title: "Enterprise Analytics", desc: "Real-time dashboards with custom KPIs, cohort analysis, funnel visualization, and predictive revenue modeling.", color: "from-blue-500 to-cyan-600" },
  { icon: Globe, title: "Global Commerce", desc: "Multi-currency, multi-language, cross-border taxation, and localized payment gateways in 190+ countries.", color: "from-emerald-500 to-teal-600" },
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 Type II certified, GDPR compliant, end-to-end encryption, and role-based access controls.", color: "from-red-500 to-rose-600" },
  { icon: Zap, title: "Headless Architecture", desc: "API-first platform with full composability. Use any frontend, any CMS, any payment provider.", color: "from-amber-500 to-orange-600" },
  { icon: Users, title: "Multi-Tenant SaaS", desc: "Enterprise-grade multi-tenancy with isolated data, custom branding, and per-tenant configurations.", color: "from-indigo-500 to-blue-600" },
  { icon: Package, title: "Inventory Intelligence", desc: "AI-driven inventory optimization, warehouse automation, real-time stock tracking across all channels.", color: "from-pink-500 to-rose-600" },
  { icon: RefreshCw, title: "Automation Studio", desc: "Visual workflow builder for order routing, customer communications, returns, and fulfillment automation.", color: "from-cyan-500 to-sky-600" },
];

export function FeatureGrid() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-primary mb-3">Platform Capabilities</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Everything you need to scale
          </h2>
          <p className="text-lg text-muted-foreground">
            From AI-powered commerce to global infrastructure — one platform, infinite possibilities.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group relative rounded-2xl border border-border bg-card p-6 hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 shadow-sm`}>
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h3 className="text-base font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
