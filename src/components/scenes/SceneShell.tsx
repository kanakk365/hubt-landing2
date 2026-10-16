import React from "react";
import { cn } from "@/lib/utils";

/**
 * Common ground for the coded product scenes: a dark well, a container-query
 * root so each scene adapts to the frame it sits in, and an optional
 * "demo data" tag. Scenes are illustrative recreations of real products.
 */
export function SceneShell({
  children,
  className,
  tag = false,
  label,
}: {
  children: React.ReactNode;
  className?: string;
  tag?: boolean;
  label: string;
}) {
  return (
    <div
      role="img"
      aria-label={`${label}. Interface recreation with demo data.`}
      className={cn(
        "@container relative h-full w-full overflow-hidden bg-[oklch(0.135_0_0)] text-fg",
        className
      )}
    >
      <div aria-hidden className="h-full w-full">
        {children}
      </div>
      {tag && (
        <span
          aria-hidden
          className="absolute bottom-2.5 right-3 rounded-full border border-white/[0.08] bg-bg/70 px-2 py-0.5 font-mono text-[9.5px] text-fg-subtle backdrop-blur"
        >
          demo data
        </span>
      )}
    </div>
  );
}

export function LivePill({ className, children = "Live" }: { className?: string; children?: React.ReactNode }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-rose/15 px-2 py-0.5 text-[10.5px] font-medium text-rose",
        className
      )}
    >
      <span className="relative flex size-1.5">
        <span className="absolute inset-0 animate-ping rounded-full bg-rose opacity-60 motion-reduce:hidden" />
        <span className="relative size-1.5 rounded-full bg-rose" />
      </span>
      {children}
    </span>
  );
}

export function MicroLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return <span className={cn("font-mono text-[10px] tracking-[0.01em] text-fg-subtle", className)}>{children}</span>;
}
