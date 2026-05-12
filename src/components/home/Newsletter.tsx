"use client";

import { useState } from "react";
import { Mail, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-accent p-8 sm:p-16 text-center">
          {/* Background pattern */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative z-10 max-w-lg mx-auto">
            <div className="h-14 w-14 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
              {submitted ? (
                <Check className="h-7 w-7 text-white" />
              ) : (
                <Mail className="h-7 w-7 text-white" />
              )}
            </div>

            <h2
              className="text-3xl sm:text-4xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {submitted ? "You're Subscribed!" : "Stay in the Loop"}
            </h2>
            <p className="text-white/80 mb-8">
              {submitted
                ? "Thanks for subscribing! We'll send you the best deals and new arrivals."
                : "Get exclusive access to new arrivals, flash sales, and member-only discounts."}
            </p>

            {!submitted && (
              <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/50 h-12 flex-1"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  className="h-12 px-6 gap-2 shrink-0"
                >
                  Subscribe <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
