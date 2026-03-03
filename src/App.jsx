import React, { useEffect } from 'react';
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

// Public pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import BiggMatePage from './pages/BiggMatePage';
import BlogPage from './pages/BlogPage';
import BlogArticlePage from './pages/BlogArticlePage';
import CommunityPage from './pages/CommunityPage';
import SystemsPage from './pages/SystemsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

// Admin pages
import AdminLoginPage from './admin/AdminLoginPage';
import AdminProtectedRoute from './admin/AdminProtectedRoute';
import AdminLayout from './admin/AdminLayout';
import AdminDashboardPage from './admin/AdminDashboardPage';
import AdminArticlesPage from './admin/AdminArticlesPage';
import AdminArticleEditorPage from './admin/AdminArticleEditorPage';
import AdminMediaPage from './admin/AdminMediaPage';
import AdminMigratePage from './admin/AdminMigratePage';

function PageTracker() {
  const location = useLocation();
  useEffect(() => { initGA(); }, []);
  useEffect(() => { trackPageView(location.pathname + location.search); }, [location]);
  return null;
}

function PublicLayout({ children }) {
  return (
    <div className="App ultra-gradient-bg min-h-screen">
      <UltraNavigation />
      {children}
      <UltraFooter />
      <SEOPerformance />
      <SubstackSubscriptionModal />
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
          {/* ── Admin routes (no nav/footer) ───────────────────────────── */}
          <Route path="/admin/login" element={<AdminLoginPage />} />
          <Route
            path="/admin/*"
            element={
              <AdminProtectedRoute>
                <AdminLayout />
              </AdminProtectedRoute>
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
          <Route path="/about" element={<PublicLayout><AboutPage /></PublicLayout>} />
          <Route path="/contact" element={<PublicLayout><ContactPage /></PublicLayout>} />
          <Route path="/portfolio" element={<PublicLayout><PortfolioPage /></PublicLayout>} />
          <Route path="/biggmate" element={<PublicLayout><BiggMatePage /></PublicLayout>} />
          <Route path="/community" element={<PublicLayout><CommunityPage /></PublicLayout>} />
          <Route path="/systems" element={<PublicLayout><SystemsPage /></PublicLayout>} />
          <Route path="/blogs" element={<PublicLayout><BlogPage /></PublicLayout>} />
          <Route path="/blogs/:slug" element={<PublicLayout><BlogArticlePage /></PublicLayout>} />
          <Route path="/privacy-policy" element={<PublicLayout><PrivacyPolicyPage /></PublicLayout>} />
          <Route path="/cookie-policy" element={<PublicLayout><CookiePolicyPage /></PublicLayout>} />
          <Route path="/terms-of-service" element={<PublicLayout><TermsOfServicePage /></PublicLayout>} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
