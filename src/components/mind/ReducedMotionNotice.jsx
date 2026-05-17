/**
 * Accessibility fallback. Detects prefers-reduced-motion and tells the user
 * the graph has been paused. Also exposes a toggle.
 */

import React, { useEffect, useState } from "react";

const T = {
  text: "#f7f7fb",
  sub: "#a8a9c3",
  border: "rgba(255,255,255,0.10)",
};

export function useReducedMotion() {
  const [reduced, setReduced] = useState(
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e) => setReduced(e.matches);
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);
  return reduced;
}

export default function ReducedMotionNotice({ paused, onToggle }) {
  if (!paused) return null;
  return (
    <div
      role="status"
      style={{
        padding: "8px 12px",
        borderRadius: 10,
        background: "rgba(13,14,22,0.7)",
        border: `1px solid ${T.border}`,
        backdropFilter: "blur(8px)",
        color: T.sub,
        fontSize: 12,
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <span style={{ color: T.text }}>Motion paused for accessibility.</span>
      <button
        type="button"
        onClick={onToggle}
        style={{
          padding: "4px 10px",
          borderRadius: 8,
          background: "transparent",
          color: T.text,
          border: `1px solid ${T.border}`,
          cursor: "pointer",
          fontSize: 12,
        }}
      >
        Resume
      </button>
    </div>
  );
}
