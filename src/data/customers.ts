import { Customer } from "@/types";

export const customers: Customer[] = [
  { id: "cust-1", name: "Acme Corporation", email: "orders@acme.com", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80", totalOrders: 342, totalSpent: 284500, joinedAt: "2024-03-15", status: "vip", segment: "enterprise" },
  { id: "cust-2", name: "TechSphere Inc", email: "purchasing@techsphere.io", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80", totalOrders: 189, totalSpent: 156000, joinedAt: "2024-06-20", status: "active", segment: "enterprise" },
  { id: "cust-3", name: "LuxeWear Co", email: "alex@luxewear.com", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80", totalOrders: 78, totalSpent: 89200, joinedAt: "2024-09-01", status: "vip", segment: "wholesale" },
  { id: "cust-4", name: "Digital Nomad Shop", email: "info@dignomad.com", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80", totalOrders: 15, totalSpent: 12400, joinedAt: "2025-01-10", status: "active", segment: "retail" },
  { id: "cust-5", name: "GreenLeaf Organics", email: "orders@greenleaf.com", avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&q=80", totalOrders: 56, totalSpent: 67800, joinedAt: "2024-11-05", status: "active", segment: "wholesale" },
  { id: "cust-6", name: "Fitness First", email: "b2b@fitnessfirst.com", avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80", totalOrders: 23, totalSpent: 28900, joinedAt: "2025-03-22", status: "inactive", segment: "retail" },
  { id: "cust-7", name: "Home & Hue", email: "hello@homeandhue.com", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80", totalOrders: 112, totalSpent: 145000, joinedAt: "2024-04-18", status: "vip", segment: "enterprise" },
  { id: "cust-8", name: "Peak Performance", email: "b2b@peakperf.com", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80", totalOrders: 42, totalSpent: 45200, joinedAt: "2025-06-30", status: "active", segment: "wholesale" },
];
