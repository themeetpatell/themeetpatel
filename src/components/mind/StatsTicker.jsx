/**
 * Animated counters for the mind. Three numbers that re-animate on each
 * snapshot change: total notes, total connections, +N added this week.
 */

import React, { useEffect, useRef } from "react";
import { animate, useMotionValue, motion } from "framer-motion";

const T = {
  text: "#f7f7fb",
  sub: "#a8a9c3",
  muted: "#70728d",
  border: "rgba(255,255,255,0.10)",
};

function fmt(n) {
  return Math.round(n).toLocaleString("en-US");
}

function Counter({ value, label, unit }) {
  const mv = useMotionValue(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    const controls = animate(mv, value, {
      duration: 1.5,
      ease: [0.2, 0.7, 0.2, 1],
    });
    const unsubscribe = mv.on("change", (v) => {
      if (nodeRef.current) nodeRef.current.textContent = fmt(v);
    });
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [value, mv]);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div
        style={{
          fontSize: 11,
          color: T.muted,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: 22,
          fontWeight: 700,
          color: T.text,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        <span ref={nodeRef}>0</span>
        {unit ? (
          <span style={{ marginLeft: 4, color: T.sub, fontSize: 14 }}>
            {unit}
          </span>
        ) : null}
      </div>
    </div>
  );
}

export default function StatsTicker({ stats }) {
  if (!stats) return null;
  return (
    <motion.dl
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      aria-label="Second brain statistics"
      style={{
        display: "flex",
        gap: 28,
        margin: 0,
        padding: "12px 16px",
        borderRadius: 12,
        background: "rgba(13,14,22,0.7)",
        border: `1px solid ${T.border}`,
        backdropFilter: "blur(8px)",
      }}
    >
      <Counter value={stats.noteCount} label="Thoughts" />
      <Counter value={stats.edgeCount} label="Connections" />
      <Counter value={stats.addedLast7d} label="This week" unit="new" />
    </motion.dl>
  );
}
