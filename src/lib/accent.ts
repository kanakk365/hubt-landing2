import type { Accent } from "./site";

/** Static class strings per product accent so Tailwind can see them. */
export const ACCENT: Record<
  Accent,
  { dot: string; text: string; border: string; glow: string; soft: string }
> = {
  violet: {
    dot: "bg-violet",
    text: "text-violet",
    border: "border-violet/40",
    glow: "oklch(1 0 0 / 0.06)",
    soft: "bg-violet/10",
  },
  cyan: {
    dot: "bg-cyan",
    text: "text-cyan",
    border: "border-cyan/40",
    glow: "oklch(1 0 0 / 0.06)",
    soft: "bg-cyan/10",
  },
  blue: {
    dot: "bg-blue",
    text: "text-blue",
    border: "border-blue/40",
    glow: "oklch(1 0 0 / 0.06)",
    soft: "bg-blue/10",
  },
  amber: {
    dot: "bg-amber",
    text: "text-amber",
    border: "border-amber/40",
    glow: "oklch(1 0 0 / 0.06)",
    soft: "bg-amber/10",
  },
  rose: {
    dot: "bg-rose",
    text: "text-rose",
    border: "border-rose/40",
    glow: "oklch(1 0 0 / 0.06)",
    soft: "bg-rose/10",
  },
  lime: {
    dot: "bg-lime",
    text: "text-lime",
    border: "border-lime/40",
    glow: "oklch(1 0 0 / 0.06)",
    soft: "bg-lime/10",
  },
  lilac: {
    dot: "bg-lilac",
    text: "text-lilac",
    border: "border-lilac/40",
    glow: "oklch(1 0 0 / 0.06)",
    soft: "bg-lilac/10",
  },
};
