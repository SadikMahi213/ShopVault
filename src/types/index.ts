// ─── Enterprise SaaS Commerce Types ───

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  categorySlug: string;
  images: string[];
  rating: number;
  reviewCount: number;
  features: string[];
  inStock: boolean;
  stockCount?: number;
  isNew?: boolean;
  isTrending?: boolean;
  discount?: number;
  tags?: string[];
  sku?: string;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  productCount: number;
  description: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerId: string;
  customerName: string;
  customerEmail: string;
  items: CartItem[];
  total: number;
  subtotal: number;
  shipping: number;
  tax: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
  paymentStatus: "paid" | "unpaid" | "refunded";
  shippingAddress: Address;
  createdAt: string;
  updatedAt: string;
}

export interface Address {
  id: string;
  label: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  isDefault: boolean;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  avatar: string;
  totalOrders: number;
  totalSpent: number;
  joinedAt: string;
  status: "active" | "inactive" | "vip";
  segment: "retail" | "wholesale" | "enterprise";
}

export interface AnalyticsSummary {
  totalRevenue: number;
  revenueChange: number;
  totalOrders: number;
  ordersChange: number;
  conversionRate: number;
  conversionChange: number;
  avgOrderValue: number;
  aovChange: number;
  activeCustomers: number;
  customersChange: number;
}

export interface RevenueDataPoint {
  date: string;
  revenue: number;
  orders: number;
}

export interface PricingTier {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  highlighted: boolean;
  cta: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
}

export interface CaseStudy {
  id: string;
  company: string;
  logo: string;
  industry: string;
  quote: string;
  results: { label: string; value: string }[];
  image: string;
}

export interface Activity {
  id: string;
  type: "order" | "customer" | "product" | "alert";
  message: string;
  timestamp: string;
  user: string;
}
