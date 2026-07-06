"use client";

import { Loader2 } from "lucide-react";

/** Single shimmering card placeholder shown while video metadata resolves. */
export function SkeletonCard() {
  return (
    <div className="rounded-md border border-border bg-bg-elevated overflow-hidden">
      <div className="skeleton aspect-video w-full" />
      <div className="p-4 space-y-3">
        <div className="skeleton h-4 w-2/3 rounded" />
        <div className="skeleton h-3 w-1/3 rounded" />
      </div>
    </div>
  );
}

/**
 * Grid of skeleton cards + "Loading videos..." label — mirrors the reference
 * site's loading UX before the video grid mounts.
 */
export default function LoadingSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div>
      <div className="mb-8 flex items-center justify-center gap-2 text-text-muted">
        <Loader2 className="h-4 w-4 animate-spin text-accent" />
        <span className="text-sm tracking-label uppercase">Loading videos…</span>
      </div>
      <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: count }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
