import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

import './App.css';
import { initGA, trackPageView } from './utils/analytics';

// Components
import UltraNavigation from './components/UltraNavigation';
import UltraFooter from './components/UltraFooter';
import SEOPerformance from './components/SEOPerformance';
import SubstackSubscriptionModal from './components/SubstackSubscriptionModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import BiggMatePage from './pages/BiggMatePage';
import SystemsPage from './pages/SystemsPage';
import SystemDetailPage from './pages/SystemDetailPage';
import BlogPage from './pages/BlogPage';
import BlogArticlePage from './pages/BlogArticlePage';
import CommunityPage from './pages/CommunityPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import TermsOfServicePage from './pages/TermsOfServicePage';

// Component to track page views
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // Initialize GA on first load
    initGA();
  }, []);

  useEffect(() => {
    // Track page view on route change
    trackPageView(location.pathname + location.search);
  }, [location]);

  return null;
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <PageTracker />
        <div className="App ultra-gradient-bg min-h-screen">
          <UltraNavigation />
          
          <Routes>
          {/* Main Pages */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/biggmate" element={<BiggMatePage />} />
          {/* Systems pages hidden - coming soon */}
          {/* <Route path="/systems" element={<SystemsPage />} /> */}
          {/* <Route path="/systems/:systemId" element={<SystemDetailPage />} /> */}
          <Route path="/community" element={<CommunityPage />} />
          
          {/* Blog Pages */}
          <Route path="/blogs" element={<BlogPage />} />
          <Route path="/blogs/:slug" element={<BlogArticlePage />} />
          
          {/* Legal Pages */}
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        </Routes>
        
        <UltraFooter />
        <SEOPerformance />
        <SubstackSubscriptionModal />
        <Analytics />
        <SpeedInsights />
      </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

