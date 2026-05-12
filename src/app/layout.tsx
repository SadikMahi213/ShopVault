import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Providers } from "@/components/layout/Providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ShopVault - Premium Ecommerce Destination",
    template: "%s | ShopVault",
  },
  description:
    "Discover premium products curated from around the world. Shop the latest trends in electronics, fashion, home & living, beauty, and more.",
  keywords: [
    "ecommerce",
    "shop",
    "online store",
    "premium products",
    "electronics",
    "fashion",
  ],
  openGraph: {
    title: "ShopVault - Premium Ecommerce Destination",
    description:
      "Discover premium products curated from around the world.",
    siteName: "ShopVault",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable}`}
      suppressHydrationWarning
    >
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
