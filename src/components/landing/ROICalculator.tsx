"use client";

import { useState } from "react";
import { Calculator, TrendingUp, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";

export function ROICalculator() {
  const [orders, setOrders] = useState("5000");
  const [aov, setAov] = useState("85");
  const [employees, setEmployees] = useState("5");

  const monthlyOrders = Number(orders) || 0;
  const avgOrderValue = Number(aov) || 0;
  const teamSize = Number(employees) || 1;

  const manualCost = monthlyOrders * 2.5;
  const platformCost = monthlyOrders * 0.8 + teamSize * 200;
  const monthlySavings = manualCost - platformCost;
  const annualSavings = monthlySavings * 12;
  const efficiencyGain = Math.min(100, Math.round(((manualCost - platformCost) / manualCost) * 100));

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-primary mb-3">ROI Calculator</p>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">
            Calculate your potential savings
          </h2>
          <p className="text-lg text-muted-foreground">
            See how much your business could save by switching to ShopVaultOS.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-border/60 shadow-xl">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="space-y-2">
                  <Label>Monthly Orders</Label>
                  <Input type="number" value={orders} onChange={(e) => setOrders(e.target.value)} min="0" />
                </div>
                <div className="space-y-2">
                  <Label>Avg. Order Value ($)</Label>
                  <Input type="number" value={aov} onChange={(e) => setAov(e.target.value)} min="0" />
                </div>
                <div className="space-y-2">
                  <Label>Team Size</Label>
                  <Input type="number" value={employees} onChange={(e) => setEmployees(e.target.value)} min="1" />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl bg-muted/50 p-5 text-center">
                  <DollarSign className="h-5 w-5 text-muted-foreground mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground mb-1">Estimated Annual Savings</p>
                  <p className="text-2xl font-bold text-emerald-500">${annualSavings.toLocaleString()}</p>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="rounded-xl bg-muted/50 p-5 text-center">
                  <TrendingUp className="h-5 w-5 text-muted-foreground mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground mb-1">Efficiency Gain</p>
                  <p className="text-2xl font-bold text-primary">{efficiencyGain}%</p>
                  <Progress value={efficiencyGain} className="mt-2 h-1.5" />
                </motion.div>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="rounded-xl bg-muted/50 p-5 text-center">
                  <Calculator className="h-5 w-5 text-muted-foreground mx-auto mb-2" />
                  <p className="text-xs text-muted-foreground mb-1">Monthly Cost/Order</p>
                  <p className="text-2xl font-bold">
                    ${monthlyOrders > 0 ? (platformCost / monthlyOrders).toFixed(2) : "0.00"}
                  </p>
                </motion.div>
              </div>

              <div className="mt-8 pt-6 border-t border-border text-center">
                <p className="text-xs text-muted-foreground mb-4">
                  *Based on industry averages. Actual results may vary. Includes platform fees, labor costs, and infrastructure savings.
                </p>
                <Button size="lg" className="gap-2">
                  <Calculator className="h-4 w-4" /> Get Detailed ROI Report
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
