/**
 * /mind — public visualization of Meet's second brain.
 *
 * Topology only. No titles, no content, no folder paths beyond top-level
 * PARA bucket. See spec at themeetpatell/meetpatel-brain:docs/superpowers/
 * specs/2026-05-15-living-mind-section-design.md.
 */

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SEOHead from "../components/SEOHead";
import { SITE_URL, meetPatelEntities, personRef } from "../lib/seoEntity";
import MindGraph from "../components/mind/MindGraph";
import TimeScrubber from "../components/mind/TimeScrubber";
import StatsTicker from "../components/mind/StatsTicker";
import Legend from "../components/mind/Legend";
import ReducedMotionNotice, {
  useReducedMotion,
} from "../components/mind/ReducedMotionNotice";
import { useGraphData } from "../components/mind/useGraphData";

void motion;

const T = {
  bg: "#07070d",
  text: "#f7f7fb",
  sub: "#a8a9c3",
  muted: "#70728d",
  violet: "#9b8bff",
};

export default function MindPage() {
  const reducedMotion = useReducedMotion();
  const [userPaused, setUserPaused] = useState(false);
  const [playing, setPlaying] = useState(false);
  const paused = reducedMotion || userPaused;

  const { manifest, active, snapshot, loading, error, setActive } =
    useGraphData();

  useEffect(() => {
    if (paused) setPlaying(false);
  }, [paused]);

  const structuredData = [
    ...meetPatelEntities,
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Meet Patel's Mind",
      description:
        "A living visualization of Meet Patel's second brain — the topology of how a Dubai-based startup founder organizes knowledge across ventures.",
      url: `${SITE_URL}/mind`,
      about: personRef,
      isPartOf: { "@id": `${SITE_URL}/#person` },
    },
  ];

  return (
    <>
      <SEOHead
        title="The Mind — Meet Patel's Second Brain, Visualized"
        description="Explore Meet Patel's mind — a live visualization of the second brain a Dubai startup founder uses to organize knowledge across ventures."
        canonical="/mind"
        structuredData={structuredData}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "calc(100vh - 72px)",
          background: T.bg,
          overflow: "hidden",
        }}
      >
        {/* Header overlay (top-left) */}
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 24,
            zIndex: 5,
            display: "flex",
            flexDirection: "column",
            gap: 8,
            pointerEvents: "none",
            maxWidth: 460,
          }}
        >
          <span
            style={{
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: T.violet,
              fontWeight: 700,
            }}
          >
            The Mind
          </span>
          <h1
            style={{
              margin: 0,
              color: T.text,
              fontSize: 32,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            A living map of how I think.
          </h1>
          <p
            style={{
              margin: 0,
              color: T.sub,
              fontSize: 14,
              lineHeight: 1.55,
              maxWidth: 380,
            }}
          >
            Each dot is a note in my second brain. Colors are life areas. No
            content is shown — just the shape of the thinking, breathing in
            real time.
          </p>
        </div>

        {/* Stats — top right */}
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 24,
            zIndex: 5,
            pointerEvents: "none",
          }}
        >
          {snapshot ? <StatsTicker stats={snapshot.stats} /> : null}
        </div>

        {/* The canvas */}
        <div style={{ position: "absolute", inset: 0 }}>
          {error ? (
            <ErrorPanel message={error.message} />
          ) : loading || !snapshot ? (
            <LoadingPanel />
          ) : (
            <MindGraph data={snapshot} paused={paused} />
          )}
        </div>

        {/* Legend — bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: 24,
            right: 24,
            zIndex: 5,
          }}
        >
          {snapshot ? <Legend byArea={snapshot.stats.byArea} /> : null}
        </div>

        {/* Time scrubber + reduced-motion — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: 24,
            left: 24,
            zIndex: 5,
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {manifest ? (
            <TimeScrubber
              snapshots={manifest.snapshots}
              active={active}
              onChange={setActive}
              playing={playing}
              onTogglePlay={() => setPlaying((p) => !p)}
            />
          ) : null}
          <ReducedMotionNotice
            paused={paused}
            onToggle={() => setUserPaused((p) => !p)}
          />
        </div>
      </div>
    </>
  );
}

function LoadingPanel() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: T.sub,
        fontSize: 14,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
      }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.3, 1, 0.3] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        Wiring synapses…
      </motion.span>
    </div>
  );
}

function ErrorPanel({ message }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: T.sub,
        gap: 8,
        padding: 32,
        textAlign: "center",
      }}
    >
      <div style={{ color: T.text, fontWeight: 700 }}>
        The mind is offline right now.
      </div>
      <div style={{ fontSize: 12, color: T.muted }}>{message}</div>
    </div>
  );
}
