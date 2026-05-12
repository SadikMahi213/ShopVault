"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, CreditCard, Lock, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

export default function CheckoutPage() {
  const { items, getTotalPrice } = useCartStore();
  const [submitted, setSubmitted] = useState(false);

  if (items.length === 0 && !submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <h1 className="text-2xl font-bold mb-2">No items to checkout</h1>
        <p className="text-muted-foreground mb-8">Add some products to your cart first.</p>
        <Button asChild>
          <Link href="/shop">Browse Products</Link>
        </Button>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
        <div className="h-20 w-20 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
          <svg className="h-10 w-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold mb-2">Order Placed!</h1>
        <p className="text-muted-foreground mb-2">Thank you for your purchase.</p>
        <p className="text-sm text-muted-foreground mb-8">
          A confirmation email will be sent shortly.
        </p>
        <Button asChild>
          <Link href="/shop">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="flex items-center gap-2 mb-8">
        <Button variant="ghost" size="sm" className="gap-1" asChild>
          <Link href="/cart">
            <ChevronLeft className="h-4 w-4" />
            Back to Cart
          </Link>
        </Button>
      </div>

      <h1 className="text-2xl sm:text-3xl font-bold mb-8" style={{ fontFamily: "var(--font-heading)" }}>
        Checkout
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Billing Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <h2 className="text-lg font-semibold">Contact Information</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" required placeholder="John" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" required placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            {/* Shipping */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-lg font-semibold">Shipping Address</h2>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Street Address</Label>
                <Input id="address" required placeholder="123 Main St" />
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" required placeholder="New York" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Input id="state" required placeholder="NY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" required placeholder="10001" />
                </div>
              </div>
            </div>

            {/* Payment */}
            <div className="rounded-xl border border-border bg-card p-6 space-y-4">
              <div className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-muted-foreground" />
                <h2 className="text-lg font-semibold">Payment</h2>
              </div>
              <div className="space-y-2">
                <Label htmlFor="card">Card Number</Label>
                <Input id="card" required placeholder="4242 4242 4242 4242" />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input id="expiry" required placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" required placeholder="123" />
                </div>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Lock className="h-3 w-3" />
                Your payment information is secure
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-xl border border-border bg-card p-6 space-y-4 sticky top-24">
              <h2 className="text-lg font-semibold">Order Summary</h2>
              <div className="space-y-3 max-h-60 overflow-y-auto">
                {items.map((item) => (
                  <div key={item.product.id} className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg overflow-hidden bg-muted shrink-0">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium truncate">{item.product.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-medium">
                      {formatPrice(item.product.price * item.quantity)}
                    </p>
                  </div>
                ))}
              </div>
              <Separator />
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span className="text-emerald-600 font-medium">Free</span>
                </div>
              </div>
              <Separator />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>{formatPrice(getTotalPrice())}</span>
              </div>
              <Button type="submit" className="w-full h-12 text-base">
                <Lock className="h-4 w-4 mr-2" />
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
