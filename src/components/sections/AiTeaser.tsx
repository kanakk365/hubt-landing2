import React from "react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Spotlight } from "@/components/site/Spotlight";
import { Reveal } from "@/components/site/Reveal";
import { AgentsDiagram, EvaluationDiagram, SystemsDiagram } from "./PillarDiagrams";

const ROWS = [
  {
    title: "AI systems",
    line: "Understand documents, images, audio and data, then recommend what to do next.",
    Diagram: SystemsDiagram,
  },
  {
    title: "Agents and automation",
    line: "Plan the work, use approved tools and act, with people at the control points.",
    Diagram: AgentsDiagram,
  },
  {
    title: "Evaluation and observability",
    line: "Acceptance tests, regression checks and drift monitoring once it is live.",
    Diagram: EvaluationDiagram,
  },
];

/** Home page's short case for HubTech's AI practice. */
export function AiTeaser() {
  return (
    <section id="ai" className="scroll-mt-24 py-20 md:py-28" aria-labelledby="ai-teaser-title">
      <div className="container-site">
        <SectionHeading
          id="ai-teaser-title"
          title={
            <>
              AI that is still right <span className="text-fg-subtle">six months later.</span>
            </>
          }
          lede="We build AI that understands, agents that act inside their permissions, and the evaluation that proves both keep working after launch."
        />

        <Reveal className="mt-14 md:mt-16">
          <ul className="panel edge-lit grid overflow-hidden rounded-[16px] md:grid-cols-3">
            {ROWS.map(({ title, line, Diagram }, i) => (
              <Spotlight
                as="li"
                key={title}
                className={i > 0 ? "flex flex-col border-t border-line md:border-l md:border-t-0" : "flex flex-col"}
              >
                <div className="aspect-[3/2] border-b border-line">
                  <Diagram />
                </div>
                <div className="p-7 md:p-8">
                  <h3 className="font-display text-[1.3125rem] font-medium tracking-[-0.025em] text-fg">{title}</h3>
                  <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-fg-muted">{line}</p>
                </div>
              </Spotlight>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
