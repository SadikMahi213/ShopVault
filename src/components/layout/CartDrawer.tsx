"use client";

import Link from "next/link";
import { X, ShoppingBag, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/lib/store";
import { formatPrice } from "@/lib/utils";

export function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, getTotalPrice } =
    useCartStore();

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/40" onClick={closeCart} />
          <div className="fixed inset-y-0 right-0 w-full max-w-md bg-background shadow-2xl flex flex-col animate-in">
            {/* Header */}
            <div className="flex items-center justify-between px-6 h-16 border-b border-border">
              <div className="flex items-center gap-3">
                <ShoppingBag className="h-5 w-5" />
                <h2 className="text-lg font-semibold">Cart</h2>
                <span className="text-sm text-muted-foreground">
                  ({items.length} items)
                </span>
              </div>
              <button
                onClick={closeCart}
                className="p-2 hover:bg-muted rounded-full transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Items */}
            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
                <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                  <ShoppingBag className="h-10 w-10 text-muted-foreground" />
                </div>
                <p className="text-lg font-medium">Your cart is empty</p>
                <p className="text-sm text-muted-foreground text-center">
                  Add some products to get started
                </p>
                <Button onClick={closeCart} asChild>
                  <Link href="/shop">Continue Shopping</Link>
                </Button>
              </div>
            ) : (
              <>
                <ScrollArea className="flex-1 px-6 py-4">
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.product.id} className="flex gap-4">
                        <Link
                          href={`/shop/${item.product.slug}`}
                          onClick={closeCart}
                          className="h-20 w-20 rounded-lg overflow-hidden bg-muted shrink-0"
                        >
                          <img
                            src={item.product.images[0]}
                            alt={item.product.name}
                            className="h-full w-full object-cover"
                          />
                        </Link>
                        <div className="flex-1 min-w-0">
                          <Link
                            href={`/shop/${item.product.slug}`}
                            onClick={closeCart}
                            className="text-sm font-medium hover:text-primary transition-colors line-clamp-1"
                          >
                            {item.product.name}
                          </Link>
                          <p className="text-sm text-muted-foreground mt-0.5">
                            {formatPrice(item.product.price)}
                          </p>
                          <div className="flex items-center gap-2 mt-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity - 1)
                              }
                              className="h-7 w-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                            >
                              <Minus className="h-3 w-3" />
                            </button>
                            <span className="text-sm font-medium w-6 text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.product.id, item.quantity + 1)
                              }
                              className="h-7 w-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                            >
                              <Plus className="h-3 w-3" />
                            </button>
                            <button
                              onClick={() => removeItem(item.product.id)}
                              className="ml-auto p-1.5 text-muted-foreground hover:text-destructive transition-colors"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Footer */}
                <div className="border-t border-border px-6 py-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Subtotal</span>
                    <span className="text-lg font-bold">{formatPrice(getTotalPrice())}</span>
                  </div>
                  <Separator />
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex-1" asChild>
                      <Link href="/cart" onClick={closeCart}>
                        View Cart
                      </Link>
                    </Button>
                    <Button className="flex-1" asChild>
                      <Link href="/checkout" onClick={closeCart}>
                        Checkout
                      </Link>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
