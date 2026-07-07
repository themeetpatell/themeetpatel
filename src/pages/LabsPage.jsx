import React from 'react';
import SEOHead from '../components/SEOHead';
import InstantKillModeSection from '../components/InstantKillModeSection';

// Labs — open-source experiments (God Mode / Instant Kill Mode).
// Moved off the fundraising homepage so it doesn't compete with Company 8 / Dan,
// but preserved here for the people who actually want it.
const LabsPage = () => (
  <main style={{ background: '#09090e', minHeight: '100vh' }}>
    <SEOHead
      title="Labs — Open-source experiments by Meet Patel"
      description="Open-source tools and experiments from Meet Patel, including Instant Kill Mode for Claude Code."
      canonical="/labs"
      robotsNoindex={true}
    />
    <div style={{ paddingTop: 96 }}>
      <InstantKillModeSection />
    </div>
  </main>
);

export default LabsPage;
