import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import './App.css';
import { initGA, trackPageView } from './utils/analytics';

// Public components
import UltraNavigation from './components/UltraNavigation';
import UltraFooter from './components/UltraFooter';
import SEOPerformance from './components/SEOPerformance';
import SubstackSubscriptionModal from './components/SubstackSubscriptionModal';
import StickyWhatsApp from './components/StickyWhatsApp';
import LaunchAnnouncementBar from './components/launch/LaunchAnnouncementBar';
import LaunchProductHuntCard from './components/launch/LaunchProductHuntCard';

// Public pages
import HomePage from './pages/HomePage';
import HomePageV2 from './pages/HomePageV2';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import InvestorsPage from './pages/InvestorsPage';
import PortfolioPage from './pages/PortfolioPage';
import BiggMatePage from './pages/BiggMatePage';
// import BiggDatePage from './pages/BiggDatePage'; // hidden — route disabled below
import BlogPage from './pages/BlogPage';
import BlogArticlePage from './pages/BlogArticlePage';
import CommunityPage from './pages/CommunityPage';
import LabsPage from './pages/LabsPage';
import ThesisPage from './pages/ThesisPage';

// /mind renders an interactive force-directed graph (react-force-graph + d3).
// It's a single minor route, so it is lazy-loaded rather than taxing every
// public pageview with the graph engine.
const MindPage = lazy(() => import('./pages/MindPage'));
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

// Admin pages — lazy-loaded on purpose.
// The editor pulls in Tiptap + ProseMirror + lowlight (~1MB of the vendor
// bundle) and the dashboard pulls Recharts. Nobody visiting a public page ever
// needs that code, but a static import forced every visitor to download it,
// which is what pushed LCP behind a loading spinner on mobile.
const AdminLoginPage        = lazy(() => import('./admin/AdminLoginPage'));
const AdminProtectedRoute   = lazy(() => import('./admin/AdminProtectedRoute'));
const AdminLayout           = lazy(() => import('./admin/AdminLayout'));
const AdminDashboardPage    = lazy(() => import('./admin/AdminDashboardPage'));
const AdminArticlesPage     = lazy(() => import('./admin/AdminArticlesPage'));
const AdminArticleEditorPage = lazy(() => import('./admin/AdminArticleEditorPage'));
const AdminMediaPage        = lazy(() => import('./admin/AdminMediaPage'));
const AdminMigratePage      = lazy(() => import('./admin/AdminMigratePage'));

/** Shared loading state for the lazy routes (admin + /mind). */
const RouteFallback = () => (
  <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', color: '#a8a9c3' }}>
    Loading…
  </div>
);

function PageTracker() {
  const location = useLocation();
  useEffect(() => { initGA(); }, []);
  useEffect(() => { trackPageView(location.pathname + location.search); }, [location]);
  return null;
}

// Consumer-grade widgets (newsletter popup, personal WhatsApp bar) read "creator"
// not "founder" to an investor, so we suppress them on the fundraising surfaces
// (homepage + investor page). They remain live on audience-building pages.
const FUNDRAISING_SURFACES = new Set(['/', '/investors']);

function PublicLayout({ children }) {
  const location = useLocation();
  const isFundraisingSurface = FUNDRAISING_SURFACES.has(location.pathname);

  return (
    <div
      className="App ultra-gradient-bg min-h-screen"
      style={{
        paddingTop: 'var(--launch-banner-h, 0px)',
        transition: 'padding-top 300ms ease',
      }}
    >
      <LaunchAnnouncementBar />
      <UltraNavigation />
      {children}
      <UltraFooter />
      <SEOPerformance />
      {!isFundraisingSurface && <SubstackSubscriptionModal />}
      {!isFundraisingSurface && <StickyWhatsApp />}
      <LaunchProductHuntCard />
    </div>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <PageTracker />
        <Analytics />
        <SpeedInsights />
        <Routes>
          {/* ── Admin routes (no nav/footer, lazy-loaded) ──────────────── */}
          <Route
            path="/admin/login"
            element={
              <Suspense fallback={<RouteFallback />}>
                <AdminLoginPage />
              </Suspense>
            }
          />
          <Route
            path="/admin/*"
            element={
              <Suspense fallback={<RouteFallback />}>
                <AdminProtectedRoute>
                  <AdminLayout />
                </AdminProtectedRoute>
              </Suspense>
            }
          >
            <Route index element={<AdminDashboardPage />} />
            <Route path="articles" element={<AdminArticlesPage />} />
            <Route path="articles/new" element={<AdminArticleEditorPage />} />
            <Route path="articles/:id" element={<AdminArticleEditorPage />} />
            <Route path="media" element={<AdminMediaPage />} />
            <Route path="migrate" element={<AdminMigratePage />} />
          </Route>

          {/* ── Public routes (with nav/footer) ───────────────────────── */}
          <Route path="/" element={<PublicLayout><HomePage /></PublicLayout>} />
          <Route path="/v2" element={<PublicLayout><HomePageV2 /></PublicLayout>} />
          <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
          <Route path="/thesis" element={<PublicLayout><ThesisPage /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />
          <Route path="/investors" element={<PublicLayout><InvestorsPage /></PublicLayout>} />
          <Route path="/portfolio" element={<PublicLayout><PortfolioPage /></PublicLayout>} />
          <Route path="/biggmate" element={<PublicLayout><BiggMatePage /></PublicLayout>} />
          {/* <Route path="/biggdate" element={<PublicLayout><BiggDatePage /></PublicLayout>} /> */}  {/* hidden — BiggDatePage.jsx kept on disk */}
          <Route path="/community" element={<PublicLayout><CommunityPage /></PublicLayout>} />
          <Route path="/mind" element={<PublicLayout><Suspense fallback={<RouteFallback />}><MindPage /></Suspense></PublicLayout>} />
          <Route path="/labs" element={<PublicLayout><LabsPage /></PublicLayout>} />
          <Route path="/blogs" element={<PublicLayout><BlogPage /></PublicLayout>} />
          <Route path="/blogs/:slug" element={<PublicLayout><BlogArticlePage /></PublicLayout>} />
          <Route path="/privacy-policy" element={<PublicLayout><PrivacyPolicyPage /></PublicLayout>} />
          <Route path="/cookie-policy" element={<PublicLayout><CookiePolicyPage /></PublicLayout>} />
          <Route path="/terms-of-service" element={<PublicLayout><TermsOfServicePage /></PublicLayout>} />
          <Route path="*" element={<PublicLayout><NotFoundPage /></PublicLayout>} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
