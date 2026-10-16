import { Gamepad2, Trophy } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { LivePill, MicroLabel, SceneShell } from "./SceneShell";

type Match = { a: [string, number]; b: [string, number]; live?: boolean };

const QF: Match[] = [
  { a: ["Nova", 3], b: ["Riftline", 1] },
  { a: ["Vanta", 2], b: ["Overcast", 3] },
  { a: ["Kestrel", 3], b: ["Halcyon", 0] },
  { a: ["Tidebreak", 1], b: ["Sundial", 3] },
];
const SF: Match[] = [
  { a: ["Nova", 3], b: ["Overcast", 2] },
  { a: ["Kestrel", 1], b: ["Sundial", 1], live: true },
];

// Column geometry, in % of the bracket box.
const COLS = { qf: [0, 31], sf: [38, 69], f: [76, 100] } as const;
const Y = { qf: [12.5, 37.5, 62.5, 87.5], sf: [25, 75], f: [50] };

function MatchCard({ m, style }: { m: Match; style: React.CSSProperties }) {
  const aWin = !m.live && m.a[1] > m.b[1];
  const bWin = !m.live && m.b[1] > m.a[1];
  return (
    <div
      className={cn(
        "absolute -translate-y-1/2 overflow-hidden rounded-[7px] border bg-white/[0.035] text-[10px] leading-none @[560px]:text-[11px]",
        m.live ? "border-violet/50 shadow-[0_0_18px_-4px_oklch(0.64_0_0/0.7)]" : "border-white/[0.08]"
      )}
      style={style}
    >
      {[m.a, m.b].map(([name, score], i) => {
        const win = i === 0 ? aWin : bWin;
        return (
          <div
            key={name}
            className={cn(
              "flex h-[17px] items-center justify-between gap-2 px-2 @[560px]:h-5",
              i === 1 && "border-t border-white/[0.06]",
              win ? "text-fg" : "text-fg-subtle"
            )}
          >
            <span className="flex min-w-0 items-center gap-1.5">
              <span className={cn("h-2.5 w-[2px] shrink-0 rounded-full", win ? "bg-violet" : "bg-white/10")} />
              <span className="truncate">{name}</span>
            </span>
            <span className="font-mono tabular-nums">{score}</span>
          </div>
        );
      })}
    </div>
  );
}

function FinalCard({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute flex -translate-y-1/2 flex-col items-center gap-1.5 rounded-[9px] border border-violet/35 bg-[linear-gradient(180deg,oklch(0.58_0_0/0.22),oklch(0.58_0_0/0.06))] px-2 py-2.5 text-center"
      style={style}
    >
      <Trophy className="size-4 text-violet" />
      <span className="text-[10.5px] font-semibold @[560px]:text-[11.5px]">Final</span>
      <MicroLabel className="text-[9.5px]">Sat · 10:00 EST</MicroLabel>
    </div>
  );
}

export function BattleLoungeScene({ tag }: { tag?: boolean }) {
  const card = (col: readonly [number, number] | [number, number], y: number): React.CSSProperties => ({
    left: `${col[0]}%`,
    width: `${col[1] - col[0]}%`,
    top: `${y}%`,
  });
  return (
    <SceneShell label="Battle's Lounge tournament bracket" tag={tag}>
      <div className="flex h-full flex-col p-4 @[520px]:p-5">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="grid size-7 shrink-0 place-items-center rounded-[8px] bg-gradient-to-br from-violet to-violet-strong text-bg">
              <Gamepad2 className="size-4" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[12.5px] font-semibold tracking-[-0.01em]">Apex Weekly Qualifier</p>
              <MicroLabel>Arena + online · single elimination</MicroLabel>
            </div>
          </div>
          <LivePill>
            <span className="hidden @[440px]:inline">Semi-final </span>live
          </LivePill>
        </div>

        {/* Full bracket from 440px of container width */}
        <div className="relative mt-4 hidden flex-1 @[440px]:block">
          <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
            <g fill="none" stroke="oklch(1 0 0 / 0.14)" strokeWidth="1" vectorEffect="non-scaling-stroke">
              <path d="M31 12.5 H34.5 V25 H38 M31 37.5 H34.5 V25" vectorEffect="non-scaling-stroke" />
              <path d="M31 62.5 H34.5 V75 H38 M31 87.5 H34.5 V75" vectorEffect="non-scaling-stroke" />
              <path d="M69 25 H72.5 V50 H76 M69 75 H72.5 V50" vectorEffect="non-scaling-stroke" />
            </g>
            <path d="M69 75 H72.5 V50 H76" fill="none" stroke="oklch(0.74 0 0)" strokeWidth="1.5" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" className="animate-flow-dash motion-reduce:animate-none" />
          </svg>
          {QF.map((m, i) => (
            <MatchCard key={i} m={m} style={card(COLS.qf, Y.qf[i])} />
          ))}
          {SF.map((m, i) => (
            <MatchCard key={i} m={m} style={card(COLS.sf, Y.sf[i])} />
          ))}
          <FinalCard style={card(COLS.f, Y.f[0])} />
        </div>

        {/* Compact: semi-finals into the final */}
        <div className="relative mt-4 flex-1 @[440px]:hidden">
          <svg aria-hidden viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
            <path d="M58 25 H62 V50 H66 M58 75 H62 V50" fill="none" stroke="oklch(1 0 0 / 0.14)" strokeWidth="1" vectorEffect="non-scaling-stroke" />
            <path d="M58 75 H62 V50 H66" fill="none" stroke="oklch(0.74 0 0)" strokeWidth="1.5" strokeDasharray="3 4" vectorEffect="non-scaling-stroke" className="animate-flow-dash motion-reduce:animate-none" />
          </svg>
          {SF.map((m, i) => (
            <MatchCard key={i} m={m} style={card([0, 58], Y.sf[i])} />
          ))}
          <FinalCard style={card([66, 100], 50)} />
        </div>

        <div className="mt-3 flex items-center justify-between gap-3 border-t border-white/[0.06] pt-3">
          <MicroLabel>Registration closes 20 min before start</MicroLabel>
          <span className="hidden rounded-full border border-violet/40 bg-violet/15 px-2.5 py-0.5 text-[10.5px] font-medium text-violet @[420px]:inline">
            Register
          </span>
        </div>
      </div>
    </SceneShell>
  );
}
