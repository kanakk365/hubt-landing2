import Link from "next/link";
import React from "react";
import { cn } from "@/lib/utils";

/** Secondary hairline button. */
export function LinkButton({
  href,
  children,
  size = "lg",
  className,
}: {
  href: string;
  children: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center rounded-[10px] border border-line-strong font-medium tracking-[-0.01em] text-fg transition-[background-color,border-color] duration-300 hover:border-white/40 hover:bg-white/[0.04]",
        size === "lg" ? "h-12 px-5.5 text-[0.9375rem]" : "h-11 px-4.5 text-[0.9375rem]",
        className
      )}
    >
      {children}
    </Link>
  );
}
