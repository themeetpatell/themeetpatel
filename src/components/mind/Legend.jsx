/**
 * Small color key, bottom-right corner of the graph canvas.
 * Hides areas with zero count.
 */

import React from "react";
import { AREA_COLORS, AREA_LABELS } from "./graph.config";

const T = {
  text: "#f7f7fb",
  sub: "#a8a9c3",
  muted: "#70728d",
  border: "rgba(255,255,255,0.10)",
};

export default function Legend({ byArea = {} }) {
  const entries = Object.entries(AREA_COLORS)
    .filter(([area]) => (byArea[area] ?? 0) > 0)
    .map(([area, color]) => ({
      area,
      color,
      count: byArea[area] ?? 0,
      label: AREA_LABELS[area] ?? area,
    }))
    .sort((a, b) => b.count - a.count);

  return (
    <div
      style={{
        padding: "10px 12px",
        borderRadius: 12,
        background: "rgba(13,14,22,0.7)",
        border: `1px solid ${T.border}`,
        backdropFilter: "blur(8px)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
        fontSize: 12,
        color: T.sub,
        minWidth: 220,
      }}
    >
      {entries.map(({ area, color, count, label }) => (
        <div
          key={area}
          style={{ display: "flex", alignItems: "center", gap: 8 }}
        >
          <span
            aria-hidden
            style={{
              display: "inline-block",
              width: 8,
              height: 8,
              borderRadius: 8,
              background: color,
              boxShadow: `0 0 8px ${color}80`,
            }}
          />
          <span style={{ color: T.text, fontWeight: 500 }}>{label}</span>
          <span
            style={{
              marginLeft: "auto",
              color: T.muted,
              fontVariantNumeric: "tabular-nums",
            }}
          >
            {count.toLocaleString("en-US")}
          </span>
        </div>
      ))}
    </div>
  );
}
