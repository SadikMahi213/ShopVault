"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar } from "@/components/ui/avatar";
import { Mail, Phone, MapPin, Shield } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h1 className="text-2xl font-bold mb-8">Account Settings</h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Profile */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Profile Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4 mb-6">
                <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" alt="User" size="lg" />
                <Button variant="outline" size="sm">Change Avatar</Button>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2"><Label>First Name</Label><Input defaultValue="John" /></div>
                <div className="space-y-2"><Label>Last Name</Label><Input defaultValue="Doe" /></div>
              </div>
              <div className="space-y-2"><Label>Email</Label><Input type="email" defaultValue="john@example.com" /></div>
              <div className="space-y-2"><Label>Phone</Label><Input type="tel" defaultValue="+1 (555) 000-0000" /></div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2"><Label>Current Password</Label><Input type="password" /></div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2"><Label>New Password</Label><Input type="password" /></div>
                <div className="space-y-2"><Label>Confirm Password</Label><Input type="password" /></div>
              </div>
              <Button variant="outline">Update Password</Button>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar info */}
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <div><p className="text-sm font-medium">Email</p><p className="text-xs text-muted-foreground">john@example.com</p></div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <div><p className="text-sm font-medium">Phone</p><p className="text-xs text-muted-foreground">+1 (555) 000-0000</p></div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <div><p className="text-sm font-medium">Address</p><p className="text-xs text-muted-foreground">3 addresses on file</p></div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="h-4 w-4 text-muted-foreground" />
                <div><p className="text-sm font-medium">2FA</p><p className="text-xs text-muted-foreground">Not enabled</p></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader><CardTitle className="text-base">Account Summary</CardTitle></CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Plan</span><span className="font-medium">Enterprise</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Orders</span><span className="font-medium">24</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Member since</span><span className="font-medium">Jan 2025</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Role</span><span className="font-medium">Admin</span></div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
