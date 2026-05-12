import Link from "next/link";
import { Shield, Truck, HeadphonesIcon, RefreshCw } from "lucide-react";

const features = [
  { icon: Truck, title: "Enterprise Shipping", desc: "Global logistics network" },
  { icon: Shield, title: "SOC 2 Compliant", desc: "Enterprise-grade security" },
  { icon: HeadphonesIcon, title: "24/7 Priority Support", desc: "Dedicated account team" },
  { icon: RefreshCw, title: "99.99% Uptime SLA", desc: "Guaranteed reliability" },
];

const footerLinks = {
  Platform: ["Storefront", "AI Commerce", "Analytics", "Inventory", "Checkout"],
  Solutions: ["Enterprise", "Growth", "Startup", "Wholesale", "International"],
  Developers: ["API Docs", "Webhooks", "SDKs", "Changelog", "Status"],
  Company: ["About", "Careers", "Press", "Blog", "Contact"],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{f.title}</p>
                    <p className="text-xs text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-semibold text-lg">ShopVault<span className="text-primary">OS</span></span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Enterprise Commerce Operating System. Powering the next generation of digital commerce for high-growth brands.
            </p>
            <div className="flex gap-2">
              {["X", "LI", "GH", "YT"].map((s) => (
                <Link key={s} href="#" className="h-8 w-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors text-xs font-medium">
                  {s}
                </Link>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2026 ShopVault OS, Inc. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-muted-foreground">
            <Link href="#" className="hover:text-foreground">Privacy Policy</Link>
            <Link href="#" className="hover:text-foreground">Terms of Service</Link>
            <Link href="#" className="hover:text-foreground">Cookie Policy</Link>
            <Link href="#" className="hover:text-foreground">SLA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
