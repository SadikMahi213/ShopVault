import { AnalyticsSummary, RevenueDataPoint, Activity } from "@/types";

export const analyticsSummary: AnalyticsSummary = {
  totalRevenue: 2845000,
  revenueChange: 23.5,
  totalOrders: 12450,
  ordersChange: 18.2,
  conversionRate: 3.42,
  conversionChange: 0.8,
  avgOrderValue: 228.5,
  aovChange: 5.3,
  activeCustomers: 8920,
  customersChange: 12.1,
};

export const revenueData: RevenueDataPoint[] = [
  { date: "Jan", revenue: 185000, orders: 820 },
  { date: "Feb", revenue: 210000, orders: 940 },
  { date: "Mar", revenue: 248000, orders: 1100 },
  { date: "Apr", revenue: 265000, orders: 1180 },
  { date: "May", revenue: 298000, orders: 1320 },
  { date: "Jun", revenue: 342000, orders: 1510 },
  { date: "Jul", revenue: 385000, orders: 1680 },
  { date: "Aug", revenue: 365000, orders: 1600 },
  { date: "Sep", revenue: 410000, orders: 1800 },
  { date: "Oct", revenue: 382000, orders: 1700 },
  { date: "Nov", revenue: 425000, orders: 1900 },
  { date: "Dec", revenue: 498000, orders: 2200 },
];

export const recentActivity: Activity[] = [
  { id: "act-1", type: "order", message: "New order #ORD-2026-4821 from Acme Corp", timestamp: "2 min ago", user: "System" },
  { id: "act-2", type: "customer", message: "Premium customer Sarah Mitchell joined", timestamp: "15 min ago", user: "System" },
  { id: "act-3", type: "order", message: "Order #ORD-2026-4819 marked as shipped", timestamp: "1 hour ago", user: "Admin" },
  { id: "act-4", type: "product", message: "New product 'Quantum Headphones' added to catalog", timestamp: "2 hours ago", user: "Merchant" },
  { id: "act-5", type: "alert", message: "Inventory alert: 'Ergonomic Chair' stock below threshold", timestamp: "3 hours ago", user: "System" },
  { id: "act-6", type: "order", message: "Bulk order #ORD-2026-4800 ($12,400) from TechCorp", timestamp: "4 hours ago", user: "System" },
  { id: "act-7", type: "customer", message: "5 new enterprise accounts onboarded today", timestamp: "5 hours ago", user: "Sales" },
  { id: "act-8", type: "product", message: "Price update applied to 24 products in Electronics", timestamp: "6 hours ago", user: "Merchant" },
];
