import Link from "next/link";
import { Heart, Shield, Truck, HeadphonesIcon } from "lucide-react";

const features = [
  { icon: Truck, title: "Free Shipping", desc: "On orders over $50" },
  { icon: Shield, title: "Secure Payment", desc: "100% secure transactions" },
  { icon: HeadphonesIcon, title: "24/7 Support", desc: "Dedicated support team" },
  { icon: Heart, title: "Easy Returns", desc: "30-day return policy" },
];

const footerLinks = {
  Shop: ["Electronics", "Fashion", "Home & Living", "Beauty", "Sports", "Accessories"],
  Company: ["About Us", "Careers", "Press", "Blog", "Contact"],
  Support: ["Help Center", "Shipping Info", "Returns", "Size Guide", "FAQ"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      {/* Features Bar */}
      <div className="border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{feature.title}</p>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-xl" style={{ fontFamily: "var(--font-heading)" }}>
                ShopVault
              </span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Premium ecommerce destination for quality products. We curate the best items from around the world.
            </p>
            <div className="flex gap-3">
              {["Twitter", "Instagram", "Facebook", "YouTube"].map((social) => (
                <Link
                  key={social}
                  href="#"
                  className="h-9 w-9 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={social}
                >
                  <span className="text-xs font-medium">{social[0]}</span>
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
                    <Link
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 ShopVault. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, Tailwind CSS, and ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
