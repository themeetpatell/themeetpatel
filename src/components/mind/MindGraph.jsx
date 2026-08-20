/**
 * Canvas-based force-directed graph of the mind.
 *
 * Receives sanitized `{ nodes, edges }` and paints on a never-settling
 * d3-force simulation. Implements physics motion, recency pulse, and
 * cursor force. Time scrubber + stats ticker are siblings.
 */

import React, { useEffect, useMemo, useRef } from "react";
import ForceGraph2D from "react-force-graph-2d";
import {
  AREA_COLORS,
  FORCE_PARAMS,
  VISUAL,
  colorFor,
  radiusFor,
} from "./graph.config";

const DAY_MS = 86_400_000;

function isRecent(lastModifiedAt, nowMs) {
  if (!lastModifiedAt) return false;
  const t = new Date(lastModifiedAt).getTime();
  if (Number.isNaN(t)) return false;
  return (nowMs - t) / DAY_MS <= VISUAL.recencyDays;
}

function hexToRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function MindGraph({ data, paused = false }) {
  const fgRef = useRef(null);

  const graph = useMemo(
    () => ({
      nodes: data.nodes.map((n) => ({ ...n })),
      links: data.edges.map((e) => ({ source: e.s, target: e.t })),
    }),
    [data],
  );

  useEffect(() => {
    const fg = fgRef.current;
    // react-force-graph-2d@1.29 predates React 19, and under it the ref does not
    // always expose the underlying kapsule instance. Calling its methods blindly
    // threw "e.d3AlphaDecay is not a function" and the error boundary replaced
    // the entire page. Tuning the simulation is a nice-to-have; rendering the
    // graph at all is not, so every call is now guarded and the graph falls back
    // to the library's default physics.
    if (!fg || typeof fg.d3Force !== "function") return;

    if (typeof fg.d3AlphaDecay === "function") fg.d3AlphaDecay(FORCE_PARAMS.alphaDecay);
    if (typeof fg.d3VelocityDecay === "function") fg.d3VelocityDecay(FORCE_PARAMS.velocityDecay);

    const linkForce = fg.d3Force("link");
    if (linkForce) {
      linkForce
        .distance(FORCE_PARAMS.linkDistance)
        .strength(FORCE_PARAMS.linkStrength);
    }
    const chargeForce = fg.d3Force("charge");
    if (chargeForce) chargeForce.strength(FORCE_PARAMS.chargeStrength);

    fg.d3Force("jitter", () => {
      const j = FORCE_PARAMS.jitterMagnitude;
      for (const n of graph.nodes) {
        n.vx = (n.vx ?? 0) + (Math.random() - 0.5) * j;
        n.vy = (n.vy ?? 0) + (Math.random() - 0.5) * j;
      }
    });

    if (typeof fg.d3ReheatSimulation === "function") fg.d3ReheatSimulation();
  }, [graph]);

  useEffect(() => {
    const fg = fgRef.current;
    if (!fg || typeof fg.pauseAnimation !== "function") return;
    if (paused) fg.pauseAnimation();
    else fg.resumeAnimation();
  }, [paused]);

  useEffect(() => {
    const fg = fgRef.current;
    if (!fg || typeof fg.screen2GraphCoords !== "function") return;
    const r = FORCE_PARAMS.cursorForceRadius;
    function onMouseMove(e) {
      const rect = e.target.getBoundingClientRect();
      const world = fg.screen2GraphCoords(
        e.clientX - rect.left,
        e.clientY - rect.top,
      );
      for (const n of graph.nodes) {
        const dx = (n.x ?? 0) - world.x;
        const dy = (n.y ?? 0) - world.y;
        const dist = Math.hypot(dx, dy);
        if (dist > 0 && dist < r) {
          const f = (1 - dist / r) * 0.5;
          n.vx = (n.vx ?? 0) + (dx / dist) * f;
          n.vy = (n.vy ?? 0) + (dy / dist) * f;
        }
      }
    }
    const el = fg.canvasContainer?.();
    el?.addEventListener("mousemove", onMouseMove);
    return () => el?.removeEventListener("mousemove", onMouseMove);
  }, [graph]);

  function paintNode(node, ctx) {
    const baseR = radiusFor(node);
    const recent = isRecent(node.lastModifiedAt, Date.now());
    let r = baseR;
    let glow = 0;
    if (recent && !paused) {
      const phase = (Date.now() % VISUAL.pulsePeriodMs) / VISUAL.pulsePeriodMs;
      const sine = Math.sin(phase * Math.PI * 2);
      r = baseR * (1 + sine * VISUAL.pulseRadiusJitterPct);
      glow = 0.3 + (sine + 1) * 0.25;
    }
    const color = colorFor(node);
    if (glow > 0) {
      ctx.beginPath();
      ctx.arc(node.x, node.y, r * 2.4, 0, Math.PI * 2);
      ctx.fillStyle = hexToRgba(color, glow * 0.35);
      ctx.fill();
    }
    ctx.beginPath();
    ctx.arc(node.x, node.y, r, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }

  function linkColor(link) {
    const s = typeof link.source === "object" ? link.source : null;
    const t = typeof link.target === "object" ? link.target : null;
    const now = Date.now();
    const hot =
      (s && isRecent(s.lastModifiedAt, now)) ||
      (t && isRecent(t.lastModifiedAt, now));
    return hot
      ? `rgba(247,247,251,${VISUAL.edgeAlphaHighlight})`
      : `rgba(247,247,251,${VISUAL.edgeAlphaBase})`;
  }

  return (
    <ForceGraph2D
      ref={fgRef}
      graphData={graph}
      backgroundColor={VISUAL.bgColor}
      nodeRelSize={1}
      nodeCanvasObject={paintNode}
      nodePointerAreaPaint={(node, color, ctx) => {
        ctx.fillStyle = color;
        const r = radiusFor(node);
        ctx.beginPath();
        ctx.arc(node.x, node.y, r + 1, 0, Math.PI * 2);
        ctx.fill();
      }}
      linkColor={linkColor}
      linkWidth={0.6}
      enableNodeDrag={false}
      enableZoomInteraction
      enablePanInteraction
      cooldownTicks={Infinity}
      warmupTicks={60}
      aria-label={`Interactive visualization of Meet's second brain — ${graph.nodes.length} notes across ${Object.values(AREA_COLORS).length} areas`}
    />
  );
}
