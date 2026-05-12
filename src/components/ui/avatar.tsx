"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = { sm: "h-8 w-8", md: "h-10 w-10", lg: "h-12 w-12" };

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, fallback, size = "md", ...props }, ref) => {
    const [error, setError] = React.useState(false);
    return (
      <div ref={ref} className={cn("relative inline-flex shrink-0 overflow-hidden rounded-full", sizeMap[size], className)} {...props}>
        {src && !error ? (
          <img src={src} alt={alt || ""} className="h-full w-full object-cover" onError={() => setError(true)} />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-muted text-xs font-medium text-muted-foreground">
            {fallback || alt?.charAt(0)?.toUpperCase() || "?"}
          </div>
        )}
      </div>
    );
  }
);
Avatar.displayName = "Avatar";

export { Avatar };
