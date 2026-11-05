import Image from "next/image";
import React from "react";
import { PRODUCTS, type Product } from "@/lib/site";
import { ACCENT } from "@/lib/accent";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { BookCall } from "@/components/site/BookCall";

const IMG = "/static/landing-page/projects";

type Shot = { src: string; alt: string };

/**
 * Each tile shows a real screen of the product, cropped from the top. `category` and
 * `summary` override the shared product data for this section only, where the shared
 * wording is a tagline or doesn't match the screen shown.
 */
const TILES: { slug: string; span: string; sizes: string; shot: Shot; category?: string; summary?: string }[] = [
  {
    slug: "battles-lounge",
    span: "lg:col-span-7",
    sizes: "(min-width: 1024px) 680px, 100vw",
    shot: { src: `${IMG}/battle-lounge-home-crop.jpg`, alt: "Battle's Lounge home page: Welcome to the battleground of esports" },
  },
  {
    slug: "ysn",
    span: "lg:col-span-5",
    sizes: "(min-width: 1024px) 480px, 100vw",
    shot: { src: `${IMG}/ysn-live-interface.jpeg`, alt: "YSN live stream with live chat beside the video" },
  },
  {
    slug: "connected-athlete",
    span: "lg:col-span-5",
    sizes: "(min-width: 1024px) 480px, 100vw",
    shot: { src: `${IMG}/connected-athlete-dashboard.png`, alt: "Connected Athlete health dashboard with steps, calories and active energy" },
    summary: "Video-based movement analysis that flags injury risk early, with a health dashboard for every athlete.",
  },
  {
    slug: "xura",
    span: "lg:col-span-7",
    sizes: "(min-width: 1024px) 680px, 100vw",
    shot: { src: `${IMG}/xura-feasibility-wide.jpg`, alt: "Xura feasibility dashboard: sites scored for EV charging, ranked, with a score distribution" },
  },
  {
    slug: "rivalis",
    span: "lg:col-span-7",
    sizes: "(min-width: 1024px) 680px, 100vw",
    shot: { src: `${IMG}/rivalis-dashboard.jpg`, alt: "Rivalis dashboard tracking competitors across social media, websites and market activity" },
  },
  {
    slug: "oneplace",
    span: "lg:col-span-5",
    sizes: "(min-width: 1024px) 480px, 100vw",
    shot: { src: `${IMG}/oneplace-console.jpg`, alt: "OnePlace main dashboard with activity across every product" },
    category: "Marketing operations console",
    summary: "Competitive intelligence, publishing, presentations and AI research behind one login, reporting into one console.",
  },
];

function Tile({ product, sizes, shot, category, summary }: { product: Product; sizes: string; shot: Shot; category?: string; summary?: string }) {
  const a = ACCENT[product.accent];
  return (
    <article
      id={`work-${product.slug}`}
      className="panel relative isolate flex h-full scroll-mt-28 flex-col overflow-hidden rounded-[16px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-3/4 opacity-60"
        style={{ background: `radial-gradient(65% 70% at 50% 0%, ${a.glow}, transparent 75%)` }}
      />
      <div className="relative h-[260px] px-5 pt-5 sm:h-[320px] lg:h-[340px] lg:px-7 lg:pt-7">
        <div className="relative h-full overflow-hidden rounded-t-[14px] border border-b-0 border-white/[0.09] bg-black shadow-[0_-24px_48px_-24px_oklch(0_0_0/0.7)]">
          <Image src={shot.src} alt={shot.alt} fill sizes={sizes} className="object-cover object-top" />
        </div>
      </div>
      <div className="relative flex flex-1 flex-col border-t border-line px-6 py-6 lg:px-7 lg:py-7">
        <h3 className="font-display text-[1.625rem] font-medium leading-[1.1] tracking-[-0.03em] text-fg">{product.name}</h3>
        <p className={cn("mt-1.5 text-[0.9375rem] font-medium", "text-fg")}>{category ?? product.category}</p>
        <p className="mt-3 max-w-[50ch] text-[0.9375rem] leading-relaxed text-fg-muted">{summary ?? product.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Built with">
          {product.addedTags.map((t) => (
            <li key={t} className="rounded-full border border-line px-3 py-1 text-[0.8125rem] font-medium text-fg-muted">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export function WorkShowcase() {
  return (
    <section id="work" className="scroll-mt-20 pb-10 pt-20 md:pb-14 md:pt-32" aria-labelledby="work-title">
      <div className="container-site">
        <SectionHeading
          id="work-title"
          title={
            <>
              Six platforms, <span className="text-fg-subtle">taken from first sketch to production.</span>
            </>
          }
          lede="Esports, live sports streaming, computer vision, competitive intelligence, a console for marketing teams and energy software, each designed, engineered and shipped by our team."
        />
        <div className="mt-14 grid gap-4 md:mt-16 lg:grid-cols-12 lg:gap-5">
          {TILES.map((t, i) => {
            const product = PRODUCTS.find((p) => p.slug === t.slug)!;
            return (
              <Reveal key={t.slug} delay={(i % 2) * 0.08} y={28} className={t.span}>
                <Tile product={product} sizes={t.sizes} shot={t.shot} category={t.category} summary={t.summary} />
              </Reveal>
            );
          })}
        </div>
        <div className="mt-12 flex flex-col items-start gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:justify-between md:mt-16">
          <div>
            <p className="font-display text-[clamp(1.5rem,1.1rem+1.2vw,2rem)] font-medium leading-[1.1] tracking-[-0.03em] text-fg">
              Building something like these?
            </p>
            <p className="mt-2 text-[1.0625rem] text-fg-muted">{"We'll walk you through how we'd build yours."}</p>
          </div>
          <BookCall size="lg">Book a call</BookCall>
        </div>
      </div>
    </section>
  );
}
