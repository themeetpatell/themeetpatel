import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import './App.css';
import { initGA, trackPageView } from './utils/analytics';

// Components
import UltraNavigation from './components/UltraNavigation';
import UltraFooter from './components/UltraFooter';
import SEOPerformance from './components/SEOPerformance';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import SystemsPage from './pages/SystemsPage';
import SystemDetailPage from './pages/SystemDetailPage';
import BlogPage from './pages/BlogPage';
import BlogArticlePage from './pages/BlogArticlePage';

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
          <Route path="/systems" element={<SystemsPage />} />
          <Route path="/systems/:systemId" element={<SystemDetailPage />} />
          
          {/* Blog Pages */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogArticlePage />} />
        </Routes>
        
        <UltraFooter />
        <SEOPerformance />
      </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;

