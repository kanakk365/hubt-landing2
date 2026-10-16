"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { BOOKING } from "@/lib/site";
import { cn } from "@/lib/utils";

type CalApi = ((...args: unknown[]) => void) & {
  loaded?: boolean;
  ns?: Record<string, (...args: unknown[]) => void>;
};

declare global {
  interface Window {
    Cal?: CalApi;
  }
}

export interface BookingPrefill {
  name?: string;
  email?: string;
  notes?: string;
}

/**
 * Opens the cal.com booking modal when the embed is ready, otherwise lets the
 * link open cal.com in a new tab. Works with JavaScript off.
 */
export function openBooking(prefill?: BookingPrefill): boolean {
  const api = typeof window !== "undefined" ? window.Cal?.ns?.[BOOKING.namespace] : undefined;
  if (!api) return false;
  api("modal", {
    calLink: BOOKING.link,
    config: { layout: "month_view", theme: "dark", ...prefill },
  });
  return true;
}

export function bookingUrl(prefill?: BookingPrefill) {
  const url = new URL(BOOKING.url);
  if (prefill?.name) url.searchParams.set("name", prefill.name);
  if (prefill?.email) url.searchParams.set("email", prefill.email);
  if (prefill?.notes) url.searchParams.set("notes", prefill.notes);
  return url.toString();
}

const SIZES = {
  sm: "h-9 gap-1.5 px-3.5 text-[0.8125rem]",
  md: "h-11 gap-2 px-4.5 text-[0.9375rem]",
  lg: "h-12 gap-2 px-5.5 text-[0.9375rem]",
} as const;

/** Button face: a squared white slab (primary) or a hairline outline (ghost), with an inline arrow. */
export function PillChip({
  size,
  variant,
  className,
  children,
}: {
  size: keyof typeof SIZES;
  variant: "primary" | "ghost";
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center rounded-[10px] font-medium tracking-[-0.01em] transition-[background-color,border-color,color,transform] duration-300 ease-[var(--ease-out-expo)] active:scale-[0.98]",
        SIZES[size],
        variant === "primary"
          ? "bg-fg text-bg group-hover:bg-white"
          : "border border-line-strong text-fg group-hover:border-white/40 group-hover:bg-white/[0.04]",
        className
      )}
    >
      {children}
      <ArrowUpRight
        aria-hidden
        className="size-4 shrink-0 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:-translate-y-px group-hover:translate-x-0.5"
        strokeWidth={2}
      />
    </span>
  );
}

export function BookCall({
  children = "Book a call",
  variant = "primary",
  size = "md",
  className,
}: {
  children?: React.ReactNode;
  variant?: "primary" | "ghost" | "compact";
  size?: "sm" | "md" | "lg";
  className?: string;
  showArrow?: boolean;
}) {
  return (
    <a
      href={BOOKING.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        if (openBooking()) e.preventDefault();
      }}
      className={cn("group inline-flex rounded-[10px]", className)}
    >
      <PillChip size={variant === "compact" ? "sm" : size} variant={variant === "ghost" ? "ghost" : "primary"} className="w-full">
        {children}
      </PillChip>
    </a>
  );
}
