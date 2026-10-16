import { FileText, FlaskConical, LayoutDashboard, Newspaper, Radar, Users } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { MicroLabel, SceneShell } from "./SceneShell";

const MODULES = [
  { icon: LayoutDashboard, label: "Main dashboard", active: true },
  { icon: Radar, label: "Rivalis" },
  { icon: Newspaper, label: "Newsletter & blog" },
  { icon: FileText, label: "Presentation" },
  { icon: FlaskConical, label: "Research" },
  { icon: Users, label: "Programs" },
];

// Two stacked series for the activity chart, 0..1.
const S1 = [0.34, 0.42, 0.38, 0.5, 0.46, 0.58, 0.52, 0.6, 0.55, 0.66, 0.62, 0.74];
const S2 = [0.16, 0.2, 0.18, 0.24, 0.22, 0.2, 0.26, 0.24, 0.28, 0.26, 0.3, 0.28];

function areaPath(top: number[], base: number[], w: number, h: number) {
  const step = w / (top.length - 1);
  const up = top.map((v, i) => `${(i * step).toFixed(1)},${(h - v * h).toFixed(1)}`).join(" L ");
  const down = base
    .map((v, i) => `${((base.length - 1 - i) * step).toFixed(1)},${(h - base[base.length - 1 - i] * h).toFixed(1)}`)
    .join(" L ");
  return `M ${up} L ${down} Z`;
}

export function OnePlaceScene({ tag }: { tag?: boolean }) {
  const total = S1.map((v, i) => v + S2[i] * 0.6);
  const zero = S1.map(() => 0);
  return (
    <SceneShell label="OnePlace console" tag={tag}>
      <div className="flex h-full">
        <aside className="hidden w-[34%] max-w-[170px] flex-col gap-0.5 border-r border-white/[0.06] p-2.5 @[400px]:flex">
          <div className="mb-2 flex items-center gap-2 px-1.5 py-1">
            <span className="grid size-5 place-items-center rounded-[6px] bg-gradient-to-br from-violet to-lilac" />
            <span className="text-[11.5px] font-semibold">OnePlace</span>
          </div>
          {MODULES.map((m) => (
            <span
              key={m.label}
              className={cn(
                "flex items-center gap-2 rounded-[7px] px-2 py-1.5 text-[10.5px]",
                m.active ? "bg-white/[0.07] text-fg" : "text-fg-subtle"
              )}
            >
              <m.icon className="size-3 shrink-0" />
              <span className="truncate">{m.label}</span>
            </span>
          ))}
        </aside>
        <div className="flex min-w-0 flex-1 flex-col p-3 @[520px]:p-4">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-[12.5px] font-semibold tracking-[-0.01em]">Main dashboard</p>
              <MicroLabel>Every module, one console</MicroLabel>
            </div>
            <span className="flex items-center gap-1.5 rounded-full bg-green/10 px-2 py-0.5 text-[10px] text-green">
              <span className="size-1.5 rounded-full bg-green" />
              All systems operational
            </span>
          </div>
          <div className="mt-3 flex-1 rounded-[9px] border border-white/[0.07] bg-white/[0.02] p-2.5">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-[10px] text-fg-muted">
                <span className="size-1.5 rounded-full bg-violet" /> Engagement
              </span>
              <span className="flex items-center gap-1 text-[10px] text-fg-muted">
                <span className="size-1.5 rounded-full bg-rose" /> Competitor scans
              </span>
            </div>
            <svg aria-hidden viewBox="0 0 220 80" preserveAspectRatio="none" className="mt-2 h-[calc(100%-22px)] min-h-[60px] w-full">
              <defs>
                <linearGradient id="op-a" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="oklch(0.74 0 0)" stopOpacity="0.55" />
                  <stop offset="1" stopColor="oklch(0.74 0 0)" stopOpacity="0.04" />
                </linearGradient>
                <linearGradient id="op-b" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="oklch(0.72 0 0)" stopOpacity="0.6" />
                  <stop offset="1" stopColor="oklch(0.72 0 0)" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              {[20, 40, 60].map((y) => (
                <line key={y} x1="0" x2="220" y1={y} y2={y} stroke="oklch(1 0 0 / 0.05)" vectorEffect="non-scaling-stroke" />
              ))}
              <path d={areaPath(total, S1, 220, 80)} fill="url(#op-b)" />
              <path d={areaPath(S1, zero, 220, 80)} fill="url(#op-a)" />
              <polyline
                points={total.map((v, i) => `${((i * 220) / (total.length - 1)).toFixed(1)},${(80 - v * 80).toFixed(1)}`).join(" ")}
                fill="none"
                stroke="oklch(0.72 0 0)"
                strokeWidth="1.2"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
          <ul className="mt-2.5 hidden grid-cols-2 gap-2 @[340px]:grid">
            {[
              { name: "Rivalis", state: "Running", tone: "text-violet bg-violet/10" },
              { name: "Presentation", state: "Healthy", tone: "text-green bg-green/10" },
            ].map((p) => (
              <li key={p.name} className="flex items-center justify-between rounded-[8px] border border-white/[0.07] px-2.5 py-1.5">
                <span className="text-[10.5px]">{p.name}</span>
                <span className={cn("rounded-full px-1.5 py-0.5 text-[9.5px]", p.tone)}>{p.state}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SceneShell>
  );
}
