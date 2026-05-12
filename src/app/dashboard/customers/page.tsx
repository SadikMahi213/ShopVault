"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCustomers } from "@/services/api";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Avatar } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { formatPrice } from "@/lib/utils";

const segmentColors: Record<string, "default" | "secondary" | "outline"> = {
  enterprise: "default", wholesale: "secondary", retail: "outline",
};

export default function DashboardCustomersPage() {
  const { data: customers, isLoading } = useQuery({ queryKey: ["customers"], queryFn: fetchCustomers });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Customers</h1>
        <p className="text-muted-foreground text-sm">View and manage your customer base.</p>
      </div>

      {isLoading ? (
        <div className="space-y-3"><Skeleton className="h-10 w-full" /><Skeleton className="h-20 w-full" /><Skeleton className="h-20 w-full" /></div>
      ) : (
        <div className="rounded-xl border border-border overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Segment</TableHead>
                <TableHead>Orders</TableHead>
                <TableHead>Total Spent</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Joined</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers?.map((c) => (
                <TableRow key={c.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar src={c.avatar} alt={c.name} fallback={c.name.charAt(0)} size="sm" />
                      <span className="text-sm font-medium">{c.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">{c.email}</TableCell>
                  <TableCell>
                    <Badge variant={segmentColors[c.segment] || "outline"} className="capitalize text-[10px]">{c.segment}</Badge>
                  </TableCell>
                  <TableCell>{c.totalOrders}</TableCell>
                  <TableCell className="font-medium">{formatPrice(c.totalSpent)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <div className={`h-2 w-2 rounded-full ${c.status === "vip" ? "bg-amber-500" : c.status === "active" ? "bg-emerald-500" : "bg-muted-foreground"}`} />
                      <span className="text-xs capitalize">{c.status}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-xs text-muted-foreground">{new Date(c.joinedAt).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}
