import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/layout/Providers";
import { ThemeScript } from "@/components/layout/ThemeScript";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ShopVault OS — Enterprise Commerce Infrastructure",
    template: "%s | ShopVault OS",
  },
  description:
    "Enterprise Commerce Operating System. AI-powered commerce infrastructure for high-growth retail businesses. Multi-tenant, scalable, and built for enterprise.",
  keywords: ["ecommerce", "enterprise", "SaaS", "commerce OS", "AI commerce", "multi-tenant"],
  openGraph: {
    title: "ShopVault OS — Enterprise Commerce Infrastructure",
    description: "Enterprise Commerce Operating System for high-growth retail businesses.",
    siteName: "ShopVault OS",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <ThemeScript />
      </head>
      <body className="min-h-screen flex flex-col bg-background text-foreground antialiased">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
