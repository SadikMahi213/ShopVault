"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  ShoppingBag,
  Heart,
  User,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/lib/store";
import { categories } from "@/data/categories";
import { SearchModal } from "./SearchModal";
import { CartDrawer } from "./CartDrawer";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState<string | null>(null);
  const totalItems = useCartStore((s) => s.getTotalItems());
  const toggleCart = useCartStore((s) => s.toggleCart);

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-border/60 glass">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Mobile menu button */}
            <button
              className="lg:hidden -ml-2 p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-xl hidden sm:block" style={{ fontFamily: "var(--font-heading)" }}>
                ShopVault
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              <Link
                href="/"
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-lg hover:bg-muted transition-colors"
              >
                Home
              </Link>
              <div
                className="relative"
                onMouseEnter={() => setMegaMenuOpen("shop")}
                onMouseLeave={() => setMegaMenuOpen(null)}
              >
                <Link
                  href="/shop"
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-lg hover:bg-muted transition-colors"
                >
                  Shop
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                {megaMenuOpen === "shop" && (
                  <div className="absolute top-full left-0 mt-1 w-[600px] rounded-xl border border-border bg-background shadow-xl p-6 grid grid-cols-3 gap-4 animate-in">
                    {categories.slice(0, 6).map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/shop?category=${cat.slug}`}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <div className="h-12 w-12 rounded-lg overflow-hidden shrink-0">
                          <img
                            src={cat.image}
                            alt={cat.name}
                            className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{cat.name}</p>
                          <p className="text-xs text-muted-foreground">{cat.productCount} products</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/about"
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground rounded-lg hover:bg-muted transition-colors"
              >
                About
              </Link>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-1 sm:gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </Button>

              <Link href="/cart">
                <Button variant="ghost" size="icon" aria-label="Wishlist">
                  <Heart className="h-5 w-5" />
                </Button>
              </Link>

              <Button
                variant="ghost"
                size="icon"
                onClick={toggleCart}
                aria-label="Cart"
                className="relative"
              >
                <ShoppingBag className="h-5 w-5" />
                {totalItems > 0 && (
                  <Badge
                    variant="default"
                    className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-[10px]"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Button>

              <Link href="/checkout">
                <Button variant="ghost" size="icon" aria-label="Account">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background animate-in">
            <div className="px-4 py-4 space-y-1">
              <Link
                href="/"
                className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                Shop
              </Link>
              <div className="pl-3 space-y-1">
                {categories.slice(0, 4).map((cat) => (
                  <Link
                    key={cat.id}
                    href={`/shop?category=${cat.slug}`}
                    className="block px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
              <Link
                href="/about"
                className="block px-3 py-2 text-sm font-medium rounded-lg hover:bg-muted"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </div>
        )}
      </header>

      {searchOpen && <SearchModal onClose={() => setSearchOpen(false)} />}
      <CartDrawer />
    </>
  );
}
