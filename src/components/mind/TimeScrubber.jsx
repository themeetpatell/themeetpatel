/**
 * Time-travel scrubber. Drag the slider to walk through monthly snapshots.
 * Gracefully degrades when only one snapshot exists.
 */

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

void motion;

const T = {
  text: "#f7f7fb",
  sub: "#a8a9c3",
  muted: "#70728d",
  border: "rgba(255,255,255,0.10)",
  violet: "#9b8bff",
};

export default function TimeScrubber({
  snapshots,
  active,
  onChange,
  playing,
  onTogglePlay,
}) {
  const sorted = [...(snapshots ?? [])].sort((a, b) =>
    a.month.localeCompare(b.month),
  );
  const activeIdx = Math.max(
    0,
    sorted.findIndex((s) => s.month === active),
  );

  useEffect(() => {
    if (!playing || sorted.length <= 1) return;
    const id = setInterval(() => {
      const next = (activeIdx + 1) % sorted.length;
      onChange?.(sorted[next].month);
    }, 1500);
    return () => clearInterval(id);
  }, [playing, activeIdx, sorted, onChange]);

  if (sorted.length === 0) return null;

  const onlyOne = sorted.length === 1;
  const activeMonth = sorted[activeIdx]?.month ?? active;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "10px 14px",
        borderRadius: 12,
        background: "rgba(13,14,22,0.7)",
        border: `1px solid ${T.border}`,
        backdropFilter: "blur(8px)",
        minWidth: 280,
      }}
    >
      <button
        type="button"
        onClick={onTogglePlay}
        disabled={onlyOne}
        aria-label={playing ? "Pause time travel" : "Play time travel"}
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 32,
          height: 32,
          borderRadius: 8,
          background: "transparent",
          color: onlyOne ? T.muted : T.text,
          border: `1px solid ${T.border}`,
          cursor: onlyOne ? "not-allowed" : "pointer",
        }}
      >
        {playing ? <Pause size={14} /> : <Play size={14} />}
      </button>

      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          gap: 4,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 11,
            color: T.muted,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>{sorted[0].month}</span>
          <span style={{ color: T.violet, fontWeight: 700 }}>
            {activeMonth}
          </span>
          <span>{sorted[sorted.length - 1].month}</span>
        </div>
        <input
          type="range"
          min={0}
          max={Math.max(0, sorted.length - 1)}
          value={activeIdx}
          onChange={(e) => onChange?.(sorted[Number(e.target.value)].month)}
          disabled={onlyOne}
          aria-label="Time travel through the second brain"
          style={{ width: "100%", accentColor: T.violet }}
        />
      </div>
    </div>
  );
}
