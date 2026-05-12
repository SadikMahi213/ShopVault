"use client";

import { addresses } from "@/data/orders";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Plus } from "lucide-react";

export default function AddressesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold">Saved Addresses</h1>
          <p className="text-muted-foreground text-sm">Manage your shipping and billing addresses.</p>
        </div>
        <Button className="gap-2"><Plus className="h-4 w-4" /> Add Address</Button>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {addresses.map((addr) => (
          <Card key={addr.id} className={addr.isDefault ? "border-primary/30" : ""}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm font-semibold">{addr.label}</p>
                </div>
                {addr.isDefault && <Badge className="text-[10px]">Default</Badge>}
              </div>
              <p className="text-sm text-muted-foreground">{addr.street}</p>
              <p className="text-sm text-muted-foreground">{addr.city}, {addr.state} {addr.zip}</p>
              <p className="text-sm text-muted-foreground mb-4">{addr.country}</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">Remove</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
