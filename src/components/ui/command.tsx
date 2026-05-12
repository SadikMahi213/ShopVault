"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface CommandProps {
  children: React.ReactNode;
  className?: string;
}

export function Command({ children, className }: CommandProps) {
  return <div className={cn("rounded-xl border border-border bg-card shadow-lg", className)}>{children}</div>;
}

export function CommandInput({ placeholder = "Search...", className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="flex items-center gap-2 px-4 border-b border-border">
      <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
      <input
        className={cn("flex h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground", className)}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

export function CommandList({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("max-h-72 overflow-y-auto p-2", className)}>{children}</div>;
}

export function CommandItem({ children, className, onSelect, ...props }: React.HTMLAttributes<HTMLDivElement> & { onSelect?: () => void }) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm cursor-pointer transition-colors",
        "hover:bg-muted aria-selected:bg-muted data-[selected]:bg-muted",
        className
      )}
      role="option"
      onClick={onSelect}
      {...props}
    >
      {children}
    </div>
  );
}

export function CommandEmpty({ children = "No results found.", className }: { children?: React.ReactNode; className?: string }) {
  return <p className={cn("py-8 text-center text-sm text-muted-foreground", className)}>{children}</p>;
}

export function CommandGroup({ heading, children, className }: { heading?: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("py-2", className)}>
      {heading && <p className="px-3 py-1.5 text-xs font-medium text-muted-foreground">{heading}</p>}
      {children}
    </div>
  );
}
