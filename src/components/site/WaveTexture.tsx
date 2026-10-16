"use client";

import dynamic from "next/dynamic";
import React from "react";
import { cn } from "@/lib/utils";

const PatternWaves = dynamic(() => import("@/components/reactbits/PatternWaves"), { ssr: false });

/** A faint white halftone surface (React Bits PatternWaves) on a transparent canvas, used as section texture. */
export function WaveTexture({
  preset = "lines",
  opacity = 0.55,
  className,
}: {
  preset?: "silk" | "lines" | "mesh" | "ocean";
  opacity?: number;
  className?: string;
}) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute", className)}>
      <PatternWaves
        preset={preset}
        color="#ffffff"
        backgroundColor="transparent"
        opacity={opacity}
        fade="edges"
        interactive={false}
        className="h-full w-full"
      />
    </div>
  );
}
