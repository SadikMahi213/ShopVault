import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Hero skeleton */}
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 space-y-4">
          <Skeleton className="h-6 w-40 rounded-full" />
          <Skeleton className="h-16 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-12 w-48 rounded-lg" />
        </div>
        <div className="flex-1">
          <Skeleton className="aspect-square w-full rounded-2xl" />
        </div>
      </div>

      {/* Product grid skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="space-y-3">
            <Skeleton className="aspect-square rounded-xl" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-8 w-full rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}
