import React from "react";
import { PRODUCTS, type Product } from "@/lib/site";
import { ACCENT } from "@/lib/accent";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { ProductScene } from "@/components/scenes";

const TILES: { slug: string; span: string }[] = [
  { slug: "battles-lounge", span: "lg:col-span-7" },
  { slug: "ysn", span: "lg:col-span-5" },
  { slug: "connected-athlete", span: "lg:col-span-5" },
  { slug: "xura", span: "lg:col-span-7" },
  { slug: "rivalis", span: "lg:col-span-5" },
  { slug: "oneplace", span: "lg:col-span-7" },
];

function Tile({ product, span }: { product: Product; span: string }) {
  const a = ACCENT[product.accent];
  return (
    <article
      id={`work-${product.slug}`}
      className={cn(
        "panel group relative isolate flex scroll-mt-28 flex-col overflow-hidden rounded-[16px] transition-[border-color] duration-500 hover:border-white/[0.16]",
        span
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-3/4 opacity-50 transition-opacity duration-700 group-hover:opacity-100"
        style={{ background: `radial-gradient(65% 70% at 50% 0%, ${a.glow}, transparent 75%)` }}
      />
      <div className="relative h-[260px] px-5 pt-5 sm:h-[320px] lg:h-[340px] lg:px-7 lg:pt-7">
        <div className="h-full overflow-hidden rounded-t-[14px] border border-b-0 border-white/[0.09] shadow-[0_-24px_48px_-24px_oklch(0_0_0/0.7)] transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:-translate-y-1.5">
          <ProductScene slug={product.slug} />
        </div>
      </div>
      <div className="relative flex items-start justify-between gap-6 border-t border-line px-6 py-6 lg:px-7">
        <div>
          <h3 className="font-display text-[1.375rem] font-medium tracking-[-0.03em] text-fg">{product.name}</h3>
          <p className={cn("mt-1 text-[0.875rem] font-medium", a.text)}>{product.category}</p>
          <p className="mt-3 max-w-[50ch] text-[0.9375rem] leading-relaxed text-fg-muted">{product.summary}</p>
        </div>
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
          lede="Esports, live media, computer vision, AI tools for strategy teams and energy infrastructure, each designed, engineered and shipped by our team."
        />
        <Reveal className="mt-14 grid gap-4 md:mt-16 lg:grid-cols-12 lg:gap-5">
          {TILES.map((t) => {
            const product = PRODUCTS.find((p) => p.slug === t.slug)!;
            return <Tile key={t.slug} product={product} span={t.span} />;
          })}
        </Reveal>
        <p className="mt-6 text-[0.8125rem] text-fg-subtle">
          Interfaces are redrawn from the real products with demo data.
        </p>
      </div>
    </section>
  );
}
