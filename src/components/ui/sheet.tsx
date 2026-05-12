"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

interface SheetProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: "left" | "right";
  title?: string;
  className?: string;
}

export function Sheet({ open, onClose, children, side = "right", title, className }: SheetProps) {
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    if (open) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="fixed inset-0 bg-black/40" onClick={onClose} />
      <div className={cn(
        "fixed inset-y-0 flex flex-col bg-background shadow-2xl w-full max-w-md animate-in",
        side === "right" ? "right-0" : "left-0"
      )}>
        {title && (
          <div className="flex items-center justify-between px-6 h-16 border-b border-border">
            <h2 className="text-lg font-semibold">{title}</h2>
            <button onClick={onClose} className="p-2 hover:bg-muted rounded-full transition-colors">
              <X className="h-5 w-5" />
            </button>
          </div>
        )}
        <div className={cn("flex-1 overflow-y-auto", className)}>{children}</div>
      </div>
    </div>
  );
}
