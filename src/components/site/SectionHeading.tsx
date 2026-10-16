import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  title,
  lede,
  align = "left",
  layout = "split",
  className,
  id,
  action,
}: {
  title: React.ReactNode;
  lede?: React.ReactNode;
  align?: "left" | "center";
  /** "split" balances a full-width heading: title on the left, lede and action on the right. */
  layout?: "split" | "stack";
  className?: string;
  id?: string;
  action?: React.ReactNode;
}) {
  if (align === "left" && layout === "split" && lede) {
    return (
      <div className={cn("grid gap-5 lg:grid-cols-2 lg:items-end lg:gap-16", className)}>
        <h2 id={id} className="text-heading max-w-[20ch] text-fg">
          {title}
        </h2>
        <div className="flex flex-col items-start gap-5 lg:pb-1">
          <p className="max-w-[52ch] text-[1.0625rem] leading-relaxed text-fg-muted md:text-lg">{lede}</p>
          {action}
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        action && align === "left" && "md:flex-row md:items-end md:justify-between md:gap-12",
        className
      )}
    >
      <div className={cn("flex flex-col gap-5", align === "center" && "items-center")}>
        <h2 id={id} className="text-heading max-w-[24ch] text-fg">
          {title}
        </h2>
        {lede && (
          <p className="max-w-[60ch] text-[1.0625rem] leading-relaxed text-fg-muted md:text-lg">
            {lede}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-[0.9375rem] font-medium text-fg transition-colors hover:text-violet",
        className
      )}
    >
      {children}
      <ArrowRight
        aria-hidden
        className="size-4 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-0.5"
      />
    </Link>
  );
}
