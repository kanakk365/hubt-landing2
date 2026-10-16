import { ArrowDownRight, ArrowUpRight, Radar } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { MicroLabel, SceneShell } from "./SceneShell";

const ROWS = [
  { name: "Brightline", score: 23, delta: 2 },
  { name: "Acme Labs", score: 21, delta: 1 },
  { name: "Corvid", score: 18, delta: -1 },
  { name: "Delta Nine", score: 15, delta: 3 },
  { name: "Evergreen", score: 12, delta: -2 },
];

export function RivalisScene({ tag }: { tag?: boolean }) {
  return (
    <SceneShell label="Rivalis competitor scoring" tag={tag}>
      <div className="flex h-full flex-col p-4 @[520px]:p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <span className="grid size-7 place-items-center rounded-[8px] bg-rose/15 text-rose">
              <Radar className="size-4" />
            </span>
            <div>
              <p className="text-[12.5px] font-semibold tracking-[-0.01em]">Tracked companies</p>
              <MicroLabel>Same 27 points for every rival</MicroLabel>
            </div>
          </div>
          <span className="rounded-full border border-rose/35 bg-rose/10 px-2.5 py-0.5 font-mono text-[10px] text-rose">27-pt</span>
        </div>

        <ul className="mt-4 flex flex-1 flex-col justify-between gap-1">
          {ROWS.map((r, i) => (
            <li
              key={r.name}
              className={cn(
                "grid grid-cols-[22px_minmax(0,0.9fr)_minmax(0,1.6fr)_auto] items-center gap-2.5 rounded-[8px] px-2 py-1.5 @[460px]:grid-cols-[22px_minmax(0,0.8fr)_minmax(0,1.8fr)_auto_auto]",
                i === 0 && "bg-white/[0.04] ring-1 ring-white/[0.06]"
              )}
            >
              <span className="grid size-[22px] place-items-center rounded-[6px] bg-white/[0.06] text-[10px] font-semibold text-fg-muted">{r.name[0]}</span>
              <span className="truncate text-[11.5px] text-fg">{r.name}</span>
              <span className="flex gap-[2px]" aria-hidden>
                {Array.from({ length: 27 }, (_, k) => (
                  <span key={k} className={cn("h-2.5 flex-1 rounded-[1px]", k < r.score ? "bg-rose" : "bg-white/[0.07]")} style={k < r.score ? { opacity: 0.45 + (k / 27) * 0.55 } : undefined} />
                ))}
              </span>
              <span className="font-mono text-[10.5px] tabular-nums text-fg-muted">{r.score}/27</span>
              <span
                className={cn(
                  "hidden items-center gap-0.5 font-mono text-[10px] tabular-nums @[460px]:flex",
                  r.delta > 0 ? "text-green" : "text-rose"
                )}
              >
                {r.delta > 0 ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                {Math.abs(r.delta)}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-3 flex items-center justify-between border-t border-white/[0.06] pt-3">
          <MicroLabel>Signed in through OnePlace</MicroLabel>
          <MicroLabel>Updated today</MicroLabel>
        </div>
      </div>
    </SceneShell>
  );
}
