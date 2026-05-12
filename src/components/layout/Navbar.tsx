"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, ShoppingBag, Heart, User, Menu, X, ChevronDown, Moon, Sun, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/store";
import { useThemeStore } from "@/store";
import { useUIStore } from "@/store";
import { categories } from "@/data/categories";
import { SearchModal } from "./SearchModal";
import { CartDrawer } from "./CartDrawer";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Storefront" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/pricing", label: "Pricing" },
];

export function Navbar() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const totalItems = useCartStore((s) => s.getTotalItems());
  const toggleCart = useCartStore((s) => s.toggleCart);
  const { theme, toggleTheme } = useThemeStore();
  const { mobileMenuOpen, toggleMobileMenu } = useUIStore();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isDark = theme === "dark";

  return (
    <>
      <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "border-b border-border/60 glass shadow-sm" : "border-transparent"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Mobile menu */}
            <button className="lg:hidden -ml-2 p-2 text-foreground" onClick={toggleMobileMenu} aria-label="Menu">
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-semibold text-lg tracking-tight">
                ShopVault<span className="text-primary">OS</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    pathname === link.href
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              {/* Mega menu trigger */}
              <div className="relative" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/60 transition-colors">
                  Categories <ChevronDown className="h-3.5 w-3.5" />
                </button>
                {megaOpen && (
                  <div className="absolute top-full left-0 mt-1 w-[640px] rounded-xl border border-border bg-card shadow-xl p-5 grid grid-cols-3 gap-3 animate-in">
                    {categories.map((cat) => (
                      <Link key={cat.id} href={`/shop?category=${cat.slug}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group">
                        <div className="h-10 w-10 rounded-lg overflow-hidden shrink-0 bg-muted">
                          <img src={cat.image} alt={cat.name} className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300" loading="lazy" />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{cat.name}</p>
                          <p className="text-[11px] text-muted-foreground">{cat.productCount} products</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link href="/account" className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/60 transition-colors">
                Account
              </Link>
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)} aria-label="Search" className="hidden sm:inline-flex">
                <Search className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
              <Link href="/account/wishlist">
                <Button variant="ghost" size="icon" aria-label="Wishlist">
                  <Heart className="h-4 w-4" />
                </Button>
              </Link>
              <Button variant="ghost" size="icon" onClick={toggleCart} aria-label="Cart" className="relative">
                <ShoppingBag className="h-4 w-4" />
                {totalItems > 0 && (
                  <Badge variant="default" className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[9px]">
                    {totalItems}
                  </Badge>
                )}
              </Button>
              <Link href="/dashboard">
                <Button variant="ghost" size="icon" aria-label="Dashboard">
                  <LayoutDashboard className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-in">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="block px-3 py-2.5 text-sm font-medium rounded-lg hover:bg-muted" onClick={toggleMobileMenu}>
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-border mt-2">
                <p className="px-3 py-1.5 text-xs font-medium text-muted-foreground">Categories</p>
                {categories.slice(0, 4).map((cat) => (
                  <Link key={cat.id} href={`/shop?category=${cat.slug}`} className="block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted" onClick={toggleMobileMenu}>
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
      <CartDrawer />
    </>
  );
}
