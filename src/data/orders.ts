import { Order, Address } from "@/types";
import { products } from "./products";
export const addresses: Address[] = [
  { id: "addr-1", label: "Office HQ", street: "100 Enterprise Ave, Suite 400", city: "San Francisco", state: "CA", zip: "94105", country: "United States", isDefault: true },
  { id: "addr-2", label: "Warehouse", street: "2500 Logistics Blvd", city: "Oakland", state: "CA", zip: "94607", country: "United States", isDefault: false },
  { id: "addr-3", label: "Home Office", street: "42 Startup Lane", city: "Austin", state: "TX", zip: "73301", country: "United States", isDefault: false },
];

export const orders: Order[] = [
  {
    id: "ord-1", orderNumber: "ORD-2026-4821", customerId: "cust-1",
    customerName: "Acme Corporation", customerEmail: "orders@acme.com",
    items: [{ product: products[0], quantity: 5 }, { product: products[2], quantity: 3 }],
    total: 1949.90, subtotal: 1799.90, shipping: 50.00, tax: 100.00,
    status: "processing", paymentStatus: "paid",
    shippingAddress: addresses[0],
    createdAt: "2026-05-12T09:30:00Z", updatedAt: "2026-05-12T09:30:00Z",
  },
  {
    id: "ord-2", orderNumber: "ORD-2026-4820", customerId: "cust-2",
    customerName: "TechSphere Inc", customerEmail: "purchasing@techsphere.io",
    items: [{ product: products[4], quantity: 50 }, { product: products[8], quantity: 100 }],
    total: 7999.50, subtotal: 7499.50, shipping: 250.00, tax: 250.00,
    status: "shipped", paymentStatus: "paid",
    shippingAddress: addresses[1],
    createdAt: "2026-05-11T14:00:00Z", updatedAt: "2026-05-12T08:00:00Z",
  },
  {
    id: "ord-3", orderNumber: "ORD-2026-4819", customerId: "cust-3",
    customerName: "LuxeWear Co", customerEmail: "alex@luxewear.com",
    items: [{ product: products[3], quantity: 15 }, { product: products[9], quantity: 30 }],
    total: 7349.55, subtotal: 6949.55, shipping: 150.00, tax: 250.00,
    status: "delivered", paymentStatus: "paid",
    shippingAddress: addresses[2],
    createdAt: "2026-05-10T11:00:00Z", updatedAt: "2026-05-12T10:00:00Z",
  },
  {
    id: "ord-4", orderNumber: "ORD-2026-4818", customerId: "cust-4",
    customerName: "Digital Nomad Shop", customerEmail: "info@dignomad.com",
    items: [{ product: products[1], quantity: 2 }, { product: products[12], quantity: 1 }],
    total: 499.97, subtotal: 469.97, shipping: 0, tax: 30.00,
    status: "pending", paymentStatus: "unpaid",
    shippingAddress: addresses[0],
    createdAt: "2026-05-12T07:15:00Z", updatedAt: "2026-05-12T07:15:00Z",
  },
  {
    id: "ord-5", orderNumber: "ORD-2026-4817", customerId: "cust-5",
    customerName: "GreenLeaf Organics", customerEmail: "orders@greenleaf.com",
    items: [{ product: products[5], quantity: 100 }, { product: products[11], quantity: 50 }],
    total: 11248.50, subtotal: 10498.50, shipping: 350.00, tax: 400.00,
    status: "processing", paymentStatus: "paid",
    shippingAddress: addresses[1],
    createdAt: "2026-05-11T16:45:00Z", updatedAt: "2026-05-12T09:00:00Z",
  },
  {
    id: "ord-6", orderNumber: "ORD-2026-4816", customerId: "cust-6",
    customerName: "Fitness First", customerEmail: "b2b@fitnessfirst.com",
    items: [{ product: products[6], quantity: 10 }, { product: products[14], quantity: 25 }],
    total: 7499.25, subtotal: 7149.25, shipping: 200.00, tax: 150.00,
    status: "cancelled", paymentStatus: "refunded",
    shippingAddress: addresses[2],
    createdAt: "2026-05-09T10:00:00Z", updatedAt: "2026-05-10T15:00:00Z",
  },
];
