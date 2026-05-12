"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchAnalyticsSummary, fetchRevenueData, fetchRecentActivity } from "@/services/api";
import React from "react";
import { DollarSign, ShoppingBag, TrendingUp, Users, ArrowUp, ArrowDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils";

function StatCard({ title, value, change, icon: Icon, prefix, suffix }: {
  title: string; value: string; change: number; icon: React.ComponentType<{ className?: string }>; prefix?: string; suffix?: string;
}) {
  const positive = change >= 0;
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-muted-foreground">{title}</p>
          <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="h-4 w-4 text-primary" />
          </div>
        </div>
        <p className="text-2xl font-bold mb-1">{prefix}{value}{suffix}</p>
        <div className="flex items-center gap-1 text-xs">
          {positive ? <ArrowUp className="h-3 w-3 text-emerald-500" /> : <ArrowDown className="h-3 w-3 text-red-500" />}
          <span className={positive ? "text-emerald-500" : "text-red-500"}>{Math.abs(change)}%</span>
          <span className="text-muted-foreground">vs last month</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default function DashboardPage() {
  const { data: summary, isLoading } = useQuery({ queryKey: ["analytics-summary"], queryFn: fetchAnalyticsSummary });
  const { data: revenue } = useQuery({ queryKey: ["revenue-data"], queryFn: fetchRevenueData });
  const { data: activities } = useQuery({ queryKey: ["recent-activity"], queryFn: fetchRecentActivity });

  if (isLoading) return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-32 rounded-xl" />)}
      </div>
      <Skeleton className="h-80 rounded-xl" />
    </div>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Your commerce overview at a glance.</p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard title="Total Revenue" value={formatPrice(summary?.totalRevenue || 0)} change={summary?.revenueChange || 0} icon={DollarSign} />
        <StatCard title="Total Orders" value={(summary?.totalOrders || 0).toLocaleString()} change={summary?.ordersChange || 0} icon={ShoppingBag} />
        <StatCard title="Conversion Rate" value={(summary?.conversionRate || 0).toFixed(2)} change={summary?.conversionChange || 0} icon={TrendingUp} suffix="%" />
        <StatCard title="Active Customers" value={(summary?.activeCustomers || 0).toLocaleString()} change={summary?.customersChange || 0} icon={Users} />
      </div>

      {/* Revenue chart + Activity */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Revenue chart */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">Revenue Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end gap-2">
              {revenue?.map((d) => (
                <div key={d.date} className="flex-1 flex flex-col items-center gap-1 group">
                  <div className="w-full relative">
                    <div
                      className="chart-bar bg-gradient-to-t from-primary to-primary-light rounded-t-sm"
                      style={{ height: `${(d.revenue / 500000) * 100}%` }}
                    />
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      ${(d.revenue / 1000).toFixed(0)}k
                    </div>
                  </div>
                  <span className="text-[10px] text-muted-foreground">{d.date}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent activity */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {activities?.slice(0, 5).map((act) => (
              <div key={act.id} className="flex items-start gap-3">
                <div className={cn(
                  "h-2 w-2 rounded-full mt-1.5 shrink-0",
                  act.type === "order" ? "bg-primary" :
                  act.type === "customer" ? "bg-emerald-500" :
                  act.type === "alert" ? "bg-amber-500" : "bg-muted-foreground"
                )} />
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground line-clamp-1">{act.message}</p>
                  <p className="text-xs text-muted-foreground/60">{act.timestamp}</p>
                </div>
              </div>
            ))}
            {(!activities || activities.length === 0) && (
              <p className="text-sm text-muted-foreground text-center py-4">No recent activity</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}


