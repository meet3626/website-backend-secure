import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Contact from '@/pages/Contact';
import Project from '@/pages/Project';
import BrokerSetupCalculator from '@/pages/BrokerSetupCalculator';
import AboutUs from '@/pages/AboutUs';
import Blog from '@/pages/Blog';
import BlogPost from '@/pages/BlogPost';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsAndConditions from '@/pages/TermsAndConditions';
import DisclaimerPolicy from '@/pages/DisclaimerPolicy';
import CookiePolicy from '@/pages/CookiePolicy';
import RefundPolicy from '@/pages/RefundPolicy';
import AMLPolicy from '@/pages/AMLPolicy';
import DataProtectionPolicy from '@/pages/DataProtectionPolicy';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="calculator" element={<BrokerSetupCalculator />} />
          <Route path="brokerage-calculator" element={<BrokerSetupCalculator />} />
          <Route path="about-us" element={<AboutUs />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<BlogPost />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project/:projectId" element={<Project />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="disclaimer" element={<DisclaimerPolicy />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="refund-policy" element={<RefundPolicy />} />
          <Route path="aml-policy" element={<AMLPolicy />} />
          <Route path="data-protection-policy" element={<DataProtectionPolicy />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default App;