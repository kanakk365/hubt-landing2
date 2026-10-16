"use client";

import React from "react";
import { cn } from "@/lib/utils";

/** A surface whose border-light follows the pointer. */
export function Spotlight({
  as: Tag = "div",
  className,
  children,
  ...rest
}: {
  as?: "div" | "article" | "li" | "section";
  className?: string;
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>) {
  const onPointerMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <Tag onPointerMove={onPointerMove} className={cn("spotlight relative", className)} {...rest}>
      {children}
    </Tag>
  );
}
