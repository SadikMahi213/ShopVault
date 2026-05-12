import { products } from "@/data/products";
import { orders } from "@/data/orders";
import { customers } from "@/data/customers";
import { analyticsSummary, revenueData, recentActivity } from "@/data/analytics";
import { pricingTiers, caseStudies } from "@/data/pricing";
import { categories } from "@/data/categories";
import { testimonials } from "@/data/testimonials";
import type {
  Product,
  Order,
  Customer,
  AnalyticsSummary,
  RevenueDataPoint,
  Activity,
  PricingTier,
  CaseStudy,
  Category,
  Testimonial,
} from "@/types";

const delay = (ms: number) => new Promise((r) => setTimeout(r, ms));

// ─── Products ───
export async function fetchProducts(params?: {
  category?: string;
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  sort?: string;
}): Promise<Product[]> {
  await delay(200);
  let result = [...products];
  if (params?.category) result = result.filter((p) => p.categorySlug === params.category);
  if (params?.search) {
    const q = params.search.toLowerCase();
    result = result.filter((p) => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
  }
  if (params?.minPrice !== undefined) result = result.filter((p) => p.price >= params.minPrice!);
  if (params?.maxPrice !== undefined) result = result.filter((p) => p.price <= params.maxPrice!);
  if (params?.sort === "price-asc") result.sort((a, b) => a.price - b.price);
  if (params?.sort === "price-desc") result.sort((a, b) => b.price - a.price);
  if (params?.sort === "rating") result.sort((a, b) => b.rating - a.rating);
  if (params?.sort === "newest") result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  return result;
}

export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  await delay(150);
  return products.find((p) => p.slug === slug) ?? null;
}

export async function fetchRelatedProducts(productId: string): Promise<Product[]> {
  await delay(200);
  const product = products.find((p) => p.id === productId);
  if (!product) return [];
  return products.filter((p) => p.category === product.category && p.id !== productId).slice(0, 4);
}

// ─── Categories ───
export async function fetchCategories(): Promise<Category[]> {
  await delay(100);
  return categories;
}

// ─── Orders ───
export async function fetchOrders(): Promise<Order[]> {
  await delay(300);
  return orders;
}

export async function fetchOrderById(id: string): Promise<Order | null> {
  await delay(200);
  return orders.find((o) => o.id === id) ?? null;
}

// ─── Customers ───
export async function fetchCustomers(): Promise<Customer[]> {
  await delay(300);
  return customers;
}

// ─── Analytics ───
export async function fetchAnalyticsSummary(): Promise<AnalyticsSummary> {
  await delay(250);
  return analyticsSummary;
}

export async function fetchRevenueData(): Promise<RevenueDataPoint[]> {
  await delay(250);
  return revenueData;
}

export async function fetchRecentActivity(): Promise<Activity[]> {
  await delay(150);
  return recentActivity;
}

// ─── Landing ───
export async function fetchPricingTiers(): Promise<PricingTier[]> {
  await delay(200);
  return pricingTiers;
}

export async function fetchCaseStudies(): Promise<CaseStudy[]> {
  await delay(250);
  return caseStudies;
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  await delay(150);
  return testimonials;
}

// ─── AI Recommendations ───
export async function fetchAIRecommendations(productId?: string): Promise<Product[]> {
  await delay(300);
  const shuffled = [...products].sort(() => Math.random() - 0.5);
  return productId
    ? shuffled.filter((p) => p.id !== productId).slice(0, 4)
    : shuffled.slice(0, 8);
}

export async function fetchSmartSearchResults(query: string): Promise<Product[]> {
  await delay(100);
  if (!query) return [];
  const q = query.toLowerCase();
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.tags?.some((t) => t.toLowerCase().includes(q))
  ).slice(0, 6);
}
