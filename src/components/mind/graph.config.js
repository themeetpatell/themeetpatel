/**
 * Visual config for the /mind force-graph. One file so the renderer and the
 * legend can't drift.
 */

// Okabe–Ito colorblind-safe palette mapped to PARA areas.
export const AREA_COLORS = Object.freeze({
  compass: "#0072B2", // blue
  ventures: "#D55E00", // vermillion
  areas: "#009E73", // bluish green
  atlas: "#CC79A7", // reddish purple
  meta: "#56B4E9", // sky blue
  daily: "#F0E442", // yellow
  inbox: "#E69F00", // orange
  archive: "#9aa0b3", // muted grey
});

export const AREA_LABELS = Object.freeze({
  compass: "Compass — identity & vision",
  ventures: "Ventures — what I'm building",
  areas: "Areas — ongoing life domains",
  atlas: "Atlas — books, ideas, signals",
  meta: "Meta — maps & dashboards",
  daily: "Daily — journals",
  inbox: "Inbox",
  archive: "Archive",
});

export const FORCE_PARAMS = Object.freeze({
  alphaDecay: 0,
  velocityDecay: 0.4,
  linkDistance: 30,
  linkStrength: 0.05,
  chargeStrength: -22,
  centerStrength: 0.025,
  cursorForceRadius: 80,
  jitterMagnitude: 0.02,
});

export const VISUAL = Object.freeze({
  baseNodeRadius: 2.2,
  recencyDays: 7,
  pulsePeriodMs: 2000,
  pulseRadiusJitterPct: 0.15,
  edgeAlphaBase: 0.13,
  edgeAlphaHighlight: 0.4,
  bgColor: "#07070d",
});

export function radiusFor(node) {
  return Math.sqrt(node.size || 1) * VISUAL.baseNodeRadius;
}

export function colorFor(node) {
  return AREA_COLORS[node.area] ?? "#888";
}
