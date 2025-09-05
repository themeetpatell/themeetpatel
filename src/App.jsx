import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import './App.css';

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


function App() {
  return (
    <HelmetProvider>
      <Router>
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

