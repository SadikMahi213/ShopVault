import Link from "next/link";
import { Shield, Heart, Truck, HeadphonesIcon, Award, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Award,
    title: "Quality First",
    desc: "Every product is carefully curated and vetted to ensure it meets our premium standards.",
  },
  {
    icon: Heart,
    title: "Customer Obsession",
    desc: "We put our customers at the heart of everything we do. Your satisfaction is our success.",
  },
  {
    icon: Shield,
    title: "Trust & Security",
    desc: "Your data and transactions are protected with enterprise-grade security measures.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    desc: "We source and deliver products from around the world, bringing the best to your doorstep.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Lightning-fast shipping with real-time tracking. Most orders arrive within 2-3 business days.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    desc: "Our dedicated support team is available around the clock to help with anything you need.",
  },
];

const team = [
  {
    name: "Sarah Mitchell",
    role: "CEO & Founder",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
  },
  {
    name: "James Chen",
    role: "CTO",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    name: "Marcus Williams",
    role: "VP of Operations",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ fontFamily: "var(--font-heading)" }}>
            Our Story
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            ShopVault was born from a simple idea: shopping should be delightful, not stressful.
            We&apos;ve built a platform where quality meets convenience, and every purchase feels special.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50K+", label: "Happy Customers" },
              { value: "10K+", label: "Products" },
              { value: "99%", label: "Satisfaction Rate" },
              { value: "48hr", label: "Avg. Delivery" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              What We Stand For
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Our core values guide everything we do
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="rounded-xl border border-border bg-card p-6 hover:shadow-md transition-shadow">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 sm:py-24 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3" style={{ fontFamily: "var(--font-heading)" }}>
              Meet the Team
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              The people behind ShopVault
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="aspect-square rounded-2xl overflow-hidden bg-muted mb-4">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-primary to-accent p-8 sm:p-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-heading)" }}>
              Ready to Start Shopping?
            </h2>
            <p className="text-white/80 mb-8 max-w-lg mx-auto">
              Join thousands of happy customers and discover products you&apos;ll love.
            </p>
            <Button size="lg" variant="secondary" className="text-base" asChild>
              <Link href="/shop">Shop Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
