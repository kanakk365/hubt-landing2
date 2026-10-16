"use client";

import React from "react";
import {
  Backdrop,
  Figure,
  Glow,
  INK,
  Label,
  Line,
  Ping,
  Signal,
  TextBars,
  onEllipse,
  r2,
  smooth,
  useFigure,
} from "@/components/illustrations/kit";

const W = 360;
const H = 240;

/** A hairline ruler along the bottom edge: the shared baseline of the three pillar figures. */
function Ruler({ y = 222 }: { y?: number }) {
  const ticks = [];
  for (let x = 24; x <= W - 24; x += 12) ticks.push(x);
  return (
    <g aria-hidden>
      <Line d={`M24 ${y} H${W - 24}`} tone="faint" />
      {ticks.map((x, i) => (
        <path key={x} d={`M${x} ${y} v${i % 4 === 0 ? 5 : 2.5}`} stroke={INK.faint} vectorEffect="non-scaling-stroke" />
      ))}
    </g>
  );
}

/** Inputs of different kinds converging into a model, which returns a recommended next action. */
export function SystemsDiagram() {
  const cy = 120;
  const cards = [
    { y: 40, label: "DOC" },
    { y: 97, label: "IMAGE" },
    { y: 154, label: "AUDIO" },
  ];
  const cardH = 46;
  const model = { x: 194, y: cy };
  const links = cards.map((c) => {
    const y = c.y + cardH / 2;
    return y === cy ? `M118 ${y} H168` : `M118 ${y} C146 ${y}, 142 ${cy}, 168 ${cy}`;
  });
  const out = `M220 ${cy} H252`;
  const wave = [3, 7, 4, 11, 6, 14, 9, 5, 12, 8, 16, 7, 10, 4, 8, 5];

  return (
    <Figure viewBox={`0 0 ${W} ${H}`} label="Documents, images and audio flowing into a model that returns a recommended next action">
      <Backdrop w={W} h={H} />
      <Label x={24} y={28}>Input</Label>
      <Label x={model.x} y={28} anchor="middle">Model</Label>
      <Label x={252} y={28}>Output</Label>

      {/* inputs */}
      {cards.map((c) => (
        <g key={c.label}>
          <rect x="24" y={c.y} width="94" height={cardH} rx="9" fill={INK.surface} stroke={INK.line} vectorEffect="non-scaling-stroke" />
          <Label x={34} y={c.y + 14} size={6.5}>{c.label}</Label>
          <circle cx="118" cy={c.y + cardH / 2} r="2" fill={INK.soft} />
        </g>
      ))}
      <TextBars x={34} y={65} widths={[62, 48, 56]} gap={6.5} weight={1.8} tone={0.32} />
      <g aria-hidden>
        <rect x="34" y="117" width="34" height="18" rx="3" stroke={INK.mid} vectorEffect="non-scaling-stroke" />
        <path d="M36 133 l8 -8 l5 4 l6 -6 l11 10" stroke={INK.soft} strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        <circle cx="60" cy="122" r="2" fill={INK.soft} />
        <TextBars x={74} y={121} widths={[34, 22]} gap={7} weight={1.8} tone={0.28} />
      </g>
      <g stroke="#fff" strokeOpacity="0.5" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
        {wave.map((h, i) => (
          <path key={i} d={`M${34 + i * 4.6} ${r2(185 - h / 2)} v${h}`} />
        ))}
      </g>

      {/* links */}
      {links.map((d) => (
        <Line key={d} d={d} />
      ))}
      <Line d={out} tone="mid" />

      {/* model */}
      <Glow cx={model.x} cy={model.y} r={70} />
      <circle cx={model.x} cy={model.y} r="35" stroke={INK.faint} strokeDasharray="1 4" vectorEffect="non-scaling-stroke">
        <animateTransform attributeName="transform" type="rotate" from={`0 ${model.x} ${model.y}`} to={`360 ${model.x} ${model.y}`} dur="40s" repeatCount="indefinite" />
      </circle>
      {Array.from({ length: 24 }, (_, i) => {
        const [x1, y1] = onEllipse(model.x, model.y, 28, 28, i * 15);
        const [x2, y2] = onEllipse(model.x, model.y, i % 6 === 0 ? 31.5 : 30, i % 6 === 0 ? 31.5 : 30, i * 15);
        return <path key={i} d={`M${x1} ${y1} L${x2} ${y2}`} stroke={INK.mid} vectorEffect="non-scaling-stroke" />;
      })}
      <circle cx={model.x} cy={model.y} r="26" fill={INK.surface} stroke={INK.mid} vectorEffect="non-scaling-stroke" />
      <circle cx={model.x} cy={model.y} r="14" fill={INK.raised} stroke={INK.strong} vectorEffect="non-scaling-stroke" />
      <circle cx={model.x} cy={model.y} r="4.5" fill={INK.white} />

      {/* recommendation */}
      <rect x="252" y={cy - 34} width="86" height="68" rx="11" fill={INK.raised} stroke={INK.mid} vectorEffect="non-scaling-stroke" />
      <Label x={262} y={cy - 18} size={6.5} tone="hi">Next action</Label>
      <circle cx="267" cy={cy + 1} r="6.5" stroke={INK.strong} vectorEffect="non-scaling-stroke" />
      <path d={`M264 ${cy + 1} l2 2 l4 -4.5`} stroke={INK.white} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <TextBars x={280} y={cy - 2} widths={[46, 30]} gap={7} weight={1.8} tone={0.5} />
      <path d={`M262 ${cy + 21} h66`} stroke={INK.faint} strokeWidth="2.4" strokeLinecap="round" />
      <path d={`M262 ${cy + 21} h50`} stroke={INK.strong} strokeWidth="2.4" strokeLinecap="round" />

      {links.map((d, i) => (
        <Signal key={d} d={d} dur={2.6} delay={i * 0.85} />
      ))}
      <Signal d={out} dur={1.3} delay={0.4} tail={34} head={10} />
      <Ruler />
    </Figure>
  );
}

/** An agent working a loop inside a permission boundary, stopping for a person before it acts. */
export function AgentsDiagram() {
  const c = { x: 180, y: 126 };
  const rx = 104;
  const ry = 66;
  const loop = `M${c.x + rx} ${c.y} A${rx} ${ry} 0 0 1 ${c.x - rx} ${c.y} A${rx} ${ry} 0 0 1 ${c.x + rx} ${c.y}`;
  const gate = { x: c.x + rx, y: c.y };
  const stations = [
    { name: "Plan", deg: 225, icon: "plan" },
    { name: "Tools", deg: 315, icon: "tools" },
    { name: "Act", deg: 45, icon: "act" },
    { name: "Check", deg: 135, icon: "check" },
  ].map((s) => {
    const [x, y] = onEllipse(c.x, c.y, rx, ry, s.deg);
    return { ...s, x, y };
  });

  const icon = (kind: string, x: number, y: number) => {
    const p = { stroke: INK.strong, strokeWidth: 1.2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, vectorEffect: "non-scaling-stroke" as const };
    switch (kind) {
      case "plan":
        return <path {...p} d={`M${x - 4} ${y - 3} h8 M${x - 4} ${y} h6 M${x - 4} ${y + 3} h7`} />;
      case "tools":
        return (
          <g {...p}>
            <rect x={x - 4.5} y={y - 4.5} width="3.6" height="3.6" rx="0.8" />
            <rect x={x + 0.9} y={y - 4.5} width="3.6" height="3.6" rx="0.8" />
            <rect x={x - 4.5} y={y + 0.9} width="3.6" height="3.6" rx="0.8" />
            <rect x={x + 0.9} y={y + 0.9} width="3.6" height="3.6" rx="0.8" />
          </g>
        );
      case "act":
        return <path {...p} d={`M${x - 2.5} ${y - 4} L${x + 3.5} ${y} L${x - 2.5} ${y + 4} Z`} />;
      default:
        return <path {...p} d={`M${x - 4} ${y} l2.6 2.6 l5 -5.2`} />;
    }
  };

  return (
    <Figure viewBox={`0 0 ${W} ${H}`} label="An agent loop of plan, tools, act and check inside a permission boundary, with a person approving before it acts">
      <Backdrop w={W} h={H} corners={false} />
      {/* permission boundary */}
      <rect x="14" y="14" width={W - 28} height={H - 28} rx="16" stroke={INK.line} strokeDasharray="3 5" vectorEffect="non-scaling-stroke" />
      <Label x={28} y={32} size={6.5}>Permission boundary</Label>

      <Line d={loop} />
      {stations.map((s) => (
        <Line key={s.name} d={`M${c.x} ${c.y} L${s.x} ${s.y}`} tone="faint" dash="2 4" />
      ))}

      {/* agent */}
      <Glow cx={c.x} cy={c.y} r={58} />
      <circle cx={c.x} cy={c.y} r="30" stroke={INK.faint} strokeDasharray="1 4" vectorEffect="non-scaling-stroke">
        <animateTransform attributeName="transform" type="rotate" from={`360 ${c.x} ${c.y}`} to={`0 ${c.x} ${c.y}`} dur="36s" repeatCount="indefinite" />
      </circle>
      <circle cx={c.x} cy={c.y} r="21" fill={INK.surface} stroke={INK.mid} vectorEffect="non-scaling-stroke" />
      <circle cx={c.x} cy={c.y} r="6.5" fill={INK.white} />
      <Label x={c.x} y={c.y + 44} anchor="middle" size={6.5}>Agent</Label>

      {stations.map((s) => (
        <g key={s.name}>
          <circle cx={s.x} cy={s.y} r="12.5" fill={INK.raised} stroke={INK.mid} vectorEffect="non-scaling-stroke" />
          {icon(s.icon, s.x, s.y)}
          <Label x={s.x} y={s.y < c.y ? s.y - 20 : s.y + 26} anchor="middle" tone="hi">
            {s.name}
          </Label>
        </g>
      ))}

      {/* the person at the gate between tools and act */}
      <circle cx={gate.x} cy={gate.y} r="13" stroke="#fff" strokeOpacity="0" vectorEffect="non-scaling-stroke">
        <animate attributeName="stroke-opacity" values="0;0;0.7;0" keyTimes="0;0.78;0.88;1" dur="7s" repeatCount="indefinite" />
        <animate attributeName="r" values="11;11;20;24" keyTimes="0;0.78;0.9;1" dur="7s" repeatCount="indefinite" />
      </circle>
      <rect x={gate.x - 10} y={gate.y - 10} width="20" height="20" rx="4" transform={`rotate(45 ${gate.x} ${gate.y})`} fill={INK.raised} stroke={INK.strong} vectorEffect="non-scaling-stroke" />
      <circle cx={gate.x} cy={gate.y - 2.6} r="2.4" fill={INK.white} />
      <path d={`M${gate.x - 4} ${gate.y + 4.5} Q${gate.x} ${gate.y - 0.2} ${gate.x + 4} ${gate.y + 4.5}`} stroke={INK.white} strokeWidth="1.3" strokeLinecap="round" />
      <Label x={gate.x + 18} y={gate.y + 3} tone="hi" size={7}>Approve</Label>

      {/* the agent's work going round, holding at the gate for approval */}
      <g aria-hidden>
        <circle r="7" fill="#fff" fillOpacity="0.16">
          <animateMotion path={loop} dur="7s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1" keyTimes="0;0.78;1" />
        </circle>
        <circle r="2.6" fill={INK.white}>
          <animateMotion path={loop} dur="7s" repeatCount="indefinite" calcMode="linear" keyPoints="0;1;1" keyTimes="0;0.78;1" />
        </circle>
      </g>
    </Figure>
  );
}

/** Evaluation scores across releases against an acceptance threshold, with one drop flagged. */
export function EvaluationDiagram() {
  const plot = { x0: 56, x1: 336, y0: 44, y1: 188 };
  const yOf = (v: number) => r2(plot.y0 + ((1 - v) / 0.3) * (plot.y1 - plot.y0));
  const scores = [0.9, 0.92, 0.91, 0.94, 0.93, 0.95, 0.94, 0.81, 0.93, 0.95, 0.96, 0.96];
  const step = (plot.x1 - plot.x0 - 16) / (scores.length - 1);
  const pts = scores.map((v, i) => [r2(plot.x0 + 8 + i * step), yOf(v)] as [number, number]);
  const line = smooth(pts);
  const area = `${line} L${pts[pts.length - 1][0]} ${plot.y1} L${pts[0][0]} ${plot.y1} Z`;
  const threshold = yOf(0.85);
  const drift = pts[7];
  const { x0, x1, y0, y1 } = plot;

  return (
    <Figure viewBox={`0 0 ${W} ${H}`} label="Evaluation scores across releases staying above an acceptance threshold, with one drop flagged">
      <EvaluationFill area={area} threshold={threshold} plot={plot} />
      <Backdrop w={W} h={H} />
      <Label x={x0} y={28}>Eval score</Label>

      {[1, 0.9, 0.8, 0.7].map((v) => (
        <g key={v}>
          <Line d={`M${x0} ${yOf(v)} H${x1}`} tone={v === 0.7 ? "line" : "grid"} />
          <Label x={x0 - 8} y={yOf(v) + 3} anchor="end" size={6.5}>
            {v.toFixed(2)}
          </Label>
        </g>
      ))}
      <Line d={`M${x0} ${threshold} H${x1}`} tone="soft" dash="3 3" />
      <Label x={x1} y={threshold - 6} anchor="end" size={6.5} tone="hi">
        Threshold 0.85
      </Label>

      <path d={line} stroke={INK.white} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      {pts.map(([x, y], i) =>
        i === 7 ? null : <circle key={i} cx={x} cy={y} r="2.3" fill={INK.ground} stroke={INK.white} strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
      )}

      {/* the flagged release */}
      <Line d={`M${drift[0]} ${y0 + 12} V${y1}`} tone="mid" dash="2 3" />
      <Ping cx={drift[0]} cy={drift[1]} r={4} to={14} />
      <circle cx={drift[0]} cy={drift[1]} r="4" fill={INK.white} />
      <rect x={drift[0] - 40} y={y0 + 2} width="80" height="17" rx="8.5" fill={INK.white} />
      <Label x={drift[0]} y={y0 + 13.5} anchor="middle" size={6.5} tone="dark">
        Drift · flagged
      </Label>

      {pts.map(([x], i) => (
        <path key={i} d={`M${x} ${y1} v4`} stroke={INK.line} vectorEffect="non-scaling-stroke" />
      ))}
      <Label x={x0} y={y1 + 18} size={6.5}>Release 1</Label>
      <Label x={x1} y={y1 + 18} anchor="end" size={6.5}>Release 12</Label>

      {/* the evaluation sweeping across every release */}
      <g aria-hidden>
        <path d={`M0 ${y0} V${y1}`} stroke="#fff" strokeOpacity="0.28" vectorEffect="non-scaling-stroke">
          <animateTransform attributeName="transform" type="translate" values={`${x0} 0;${x1} 0`} dur="6s" repeatCount="indefinite" />
        </path>
      </g>
    </Figure>
  );
}

function EvaluationFill({ area, threshold, plot }: { area: string; threshold: number; plot: { x0: number; x1: number; y0: number; y1: number } }) {
  const { id } = useFigure();
  return (
    <g aria-hidden>
      {/* the failing zone under the threshold is hatched; the score area fades down from the line */}
      <rect x={plot.x0} y={threshold} width={plot.x1 - plot.x0} height={plot.y1 - threshold} fill={`url(#${id}-hatch)`} />
      <path d={area} fill={`url(#${id}-fall)`} />
    </g>
  );
}
