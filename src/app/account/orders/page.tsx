"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "@/services/api";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice } from "@/lib/utils";
import { Package } from "lucide-react";

export default function AccountOrdersPage() {
  const { data: orders, isLoading } = useQuery({ queryKey: ["orders"], queryFn: fetchOrders });

  if (isLoading) return (
    <div className="space-y-4"><Skeleton className="h-24 w-full rounded-xl" /><Skeleton className="h-24 w-full rounded-xl" /><Skeleton className="h-24 w-full rounded-xl" /></div>
  );

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-2xl font-bold mb-8">Order History</h1>

      {!orders || orders.length === 0 ? (
        <div className="text-center py-16">
          <Package className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <p className="text-lg font-medium">No orders yet</p>
          <p className="text-sm text-muted-foreground">Your order history will appear here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <Card key={order.id} className="hover:shadow-sm transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-semibold">{order.orderNumber}</p>
                      <Badge variant={order.status === "delivered" ? "success" : order.status === "cancelled" ? "destructive" : order.status === "processing" ? "default" : "outline"} className="capitalize text-[10px]">{order.status}</Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">{new Date(order.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
                    <p className="text-xs text-muted-foreground mt-1">{order.items.length} item(s)</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-bold">{formatPrice(order.total)}</p>
                    <Badge variant={order.paymentStatus === "paid" ? "success" : "outline"} className="capitalize text-[10px] mt-1">{order.paymentStatus}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
