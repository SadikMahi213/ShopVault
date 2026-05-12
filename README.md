# ShopVault - Premium Ecommerce Demo

A modern, production-quality ecommerce frontend built with Next.js 16, TypeScript, Tailwind CSS v4, and shadcn/ui.

## Tech Stack

| Technology | Purpose |
|---|---|
| Next.js 16.2 (App Router) | React framework |
| TypeScript | Type safety |
| Tailwind CSS v4 | Utility-first styling |
| shadcn/ui (Radix Primitives) | Accessible UI components |
| Framer Motion | Animations & transitions |
| Zustand | Cart/wishlist state management |
| TanStack Query | Data fetching architecture |
| Lucide React | Icon library |

## Features

- **Homepage**: Hero with animations, featured categories, trending products, flash sale with countdown, testimonials, newsletter signup
- **Product System**: Listing with filters, detail page with image gallery, reviews UI
- **Cart**: Add/remove/update, cart drawer sidebar, persistent state via Zustand
- **UI/UX**: Responsive navbar with mega menu, search modal, wishlist, skeleton loading, smooth animations
- **Pages**: Home, Shop (with filters), Product Detail, Cart, Checkout, About

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with fonts & providers
│   ├── page.tsx            # Homepage
│   ├── shop/               # Shop listing & product detail
│   ├── cart/               # Cart page
│   ├── checkout/           # Checkout UI
│   └── about/              # About page
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── layout/             # Navbar, Footer, CartDrawer, SearchModal
│   ├── home/               # Hero, Categories, Products, etc.
│   └── product/            # ProductCard, Gallery, Info, Reviews
├── lib/
│   ├── store.ts            # Zustand stores (cart, wishlist)
│   └── utils.ts            # Helpers (cn, formatPrice)
├── data/                   # Mock data (products, categories, testimonials)
└── types/                  # TypeScript interfaces
```

## Deployment (Vercel)

1. Push to GitHub
2. Import repo in Vercel
3. Framework: Next.js
4. Build command: `npm run build`
5. Output directory: `.next`
6. No environment variables needed

Or deploy instantly:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyourusername%2Fshopyvault)

## Design

- **Fonts**: Inter (body), Poppins (headings) via Google Fonts
- **Colors**: Indigo primary, amber secondary, pink accent
- **Glassmorphism**: Navbar with backdrop blur
- **Animations**: Framer Motion for page sections, micro-interactions
- **Responsive**: Mobile-first, breakpoints at sm/md/lg/xl

## License

MIT
