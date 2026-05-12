"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/services/api";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice } from "@/lib/utils";

export default function DashboardProductsPage() {
  const { data: products, isLoading } = useQuery({ queryKey: ["products"], queryFn: () => fetchProducts() });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Products</h1>
          <p className="text-muted-foreground text-sm">Manage your product catalog.</p>
        </div>
        <Badge variant="outline" className="text-xs">{products?.length || 0} products</Badge>
      </div>

      {isLoading ? (
        <div className="space-y-3"><Skeleton className="h-10 w-full" /><Skeleton className="h-20 w-full" /><Skeleton className="h-20 w-full" /></div>
      ) : (
        <div className="rounded-xl border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>SKU</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Stock</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products?.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg overflow-hidden bg-muted shrink-0">
                        <img src={product.images[0]} alt="" className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">{product.name}</p>
                        <p className="text-xs text-muted-foreground line-clamp-1">{product.description.substring(0, 60)}...</p>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">{product.sku || `SKU-${product.id}`}</TableCell>
                  <TableCell><Badge variant="outline" className="text-[10px]">{product.category}</Badge></TableCell>
                  <TableCell className="font-medium">
                    {formatPrice(product.price)}
                    {product.originalPrice && <span className="text-xs text-muted-foreground line-through ml-1">{formatPrice(product.originalPrice)}</span>}
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${product.inStock ? "bg-emerald-500" : "bg-red-500"}`} />
                      <span className="text-xs">{product.inStock ? `${product.stockCount || "In Stock"}` : "Out of Stock"}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-sm">{product.rating} ★</TableCell>
                  <TableCell>
                    {product.isNew && <Badge className="text-[10px] mr-1">New</Badge>}
                    {product.discount && <Badge variant="destructive" className="text-[10px]">-{product.discount}%</Badge>}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
