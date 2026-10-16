"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";
import React from "react";
import { BookCall } from "@/components/site/BookCall";
import { LinkButton } from "@/components/site/LinkButton";
import { PRODUCTS } from "@/lib/site";

const Topography = dynamic(() => import("@/components/reactbits/Topography"), { ssr: false });

const EASE = [0.22, 1, 0.36, 1] as const;

const SERVICES = ["AI systems", "Web platforms", "Mobile apps", "QA and testing"];

export function HomeHero() {
  const rise = (i: number) => ({
    initial: { opacity: 0, y: 22, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 1, ease: EASE, delay: 0.1 + i * 0.09 },
  });

  return (
    <section className="relative isolate flex min-h-[min(100svh,1040px)] flex-col overflow-hidden" aria-labelledby="hero-title">
      {/* Terrain: white contour lines rising under the copy, quiet at the top so the headline stays clean */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 top-[60%] -z-10 [mask-image:linear-gradient(to_bottom,transparent,black_40%,black_85%,transparent)] sm:top-[44%] sm:[mask-image:linear-gradient(to_bottom,transparent,black_42%,black_85%,transparent)]"
      >
        <Topography
          color="#ffffff"
          lineCount={26}
          lineWidth={1}
          elevation={1.15}
          foreground={0.25}
          tilt={38}
          speed={0.18}
          glow={0.2}
          fog={0.55}
          depthOfField={0.35}
          brightness={0.8}
          hoverEffect="lift"
          mouseStrength={0.7}
          className="h-full w-full"
        />
      </div>

      {/* A dark pool behind the copy keeps the contour lines out from under the text */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[64%] -z-10 h-[420px] w-[min(1100px,120vw)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(closest-side,var(--color-bg)_55%,transparent)] max-sm:top-[58%]"
      />

      {/* Centred, symmetric composition: headline, lede, actions and services share one axis */}
      <div className="container-site relative flex flex-col items-center pt-32 text-center md:pt-40">
        <motion.h1 id="hero-title" {...rise(0)} className="text-display text-fg [font-size:clamp(3rem,1rem+5.9vw,6rem)]">
          <span className="block">Six platforms,</span>
          <span className="text-signal block">one hub.</span>
        </motion.h1>

        <motion.p
          {...rise(1)}
          className="mt-8 max-w-[58ch] text-[1.0625rem] leading-relaxed text-fg-muted md:mt-10 md:text-lg md:leading-relaxed"
        >
          HubTech is the AI and software studio behind Battle&apos;s Lounge, YSN, Connected Athlete, Rivalis,
          OnePlace and Xura. We design, build and run production systems like these for businesses, founders and
          sports organisations.
        </motion.p>

        <motion.div {...rise(2)} className="mt-9 flex flex-col items-center gap-6">
          <div className="flex flex-wrap justify-center gap-3">
            <BookCall size="lg" />
            <LinkButton href="#work">See the work</LinkButton>
          </div>
          <p className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-[0.8125rem] text-fg-subtle">
            {SERVICES.map((s, i) => (
              <span key={s} className="flex items-center gap-3">
                {/* separators only from sm up, so a wrapped line never starts with one */}
                {i > 0 && <span aria-hidden className="size-[3px] rounded-full bg-fg-subtle max-sm:hidden" />}
                {s}
              </span>
            ))}
          </p>
        </motion.div>
      </div>

      <div className="flex-1" />

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: EASE, delay: 0.7 }}
        className="container-site relative max-sm:hidden"
      >
        <ul
          aria-label="Platforms built by HubTech"
          className="grid grid-cols-2 gap-px border-t border-line bg-line sm:grid-cols-3 lg:grid-cols-6"
        >
        {PRODUCTS.map((p) => (
          <li key={p.slug} className="bg-bg">
            <Link
              href={`#work-${p.slug}`}
              className="group flex h-full flex-col gap-1 px-4 py-5 transition-colors duration-300 hover:bg-white/[0.04] lg:px-5"
            >
              <span className="flex items-center justify-between gap-2 text-[0.9375rem] font-medium text-fg">
                {p.name}
                <ArrowDownRight
                  aria-hidden
                  className="size-3.5 text-fg-subtle transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-fg"
                />
              </span>
              <span className="text-[0.75rem] leading-snug text-fg-subtle">{p.category}</span>
            </Link>
          </li>
        ))}
        </ul>
      </motion.div>
    </section>
  );
}
