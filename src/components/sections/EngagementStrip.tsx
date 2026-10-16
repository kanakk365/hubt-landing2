import React from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

const STEPS = [
  { title: "Discover", line: "The problem, the people, the data and what success means." },
  { title: "Design", line: "Flows, interfaces and architecture, tested on real cases." },
  { title: "Build", line: "Working software in short cycles, riskiest parts first." },
  { title: "Verify", line: "Testing and evaluation against agreed acceptance criteria." },
  { title: "Launch", line: "Deployment, store releases and the monitoring around them." },
  { title: "Run", line: "Measuring and improving once it is live, for as long as it runs." },
];

/** Home page's six-step outline of how an engagement runs. */
export function EngagementStrip() {
  return (
    <section id="process" className="scroll-mt-24 py-20 md:py-28" aria-labelledby="engagement-strip-title">
      <div className="container-site">
        <SectionHeading
          id="engagement-strip-title"
          title="How we work with you"
          lede="From the first call to a system that keeps working."
        />
        <Reveal className="mt-12 md:mt-14">
          <ol className="panel edge-lit grid overflow-hidden rounded-[16px] sm:grid-cols-2 lg:grid-cols-6">
            {STEPS.map((s, i) => (
              <li
                key={s.title}
                className="relative -mb-px -mr-px flex flex-col gap-3 border-b border-r border-line p-6 transition-colors duration-300 hover:bg-white/[0.025] lg:p-7"
              >
                <span className="flex items-center gap-2.5">
                  <span className="grid size-7 place-items-center rounded-full border border-line-strong font-mono text-[0.6875rem] tabular-nums text-fg-muted">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {i < STEPS.length - 1 && <span aria-hidden className="hidden h-px flex-1 bg-gradient-to-r from-violet/50 to-transparent lg:block" />}
                </span>
                <h3 className="font-display mt-6 text-[1.25rem] font-medium tracking-[-0.03em] text-fg lg:mt-8">{s.title}</h3>
                <p className="text-[0.875rem] leading-relaxed text-fg-muted">{s.line}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
