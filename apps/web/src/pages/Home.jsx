import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import SectionAnimator from '@/components/SectionAnimator';
import SEOHead from '@/components/SEOHead';

// Lazy load below-the-fold sections
const Services = React.lazy(() => import('@/components/Services'));
const Features = React.lazy(() => import('@/components/Features'));
const Roadmap = React.lazy(() => import('@/components/Roadmap'));
const Insights = React.lazy(() => import('@/components/Insights'));
const FAQ = React.lazy(() => import('@/components/FAQ'));
const Testimonials = React.lazy(() => import('@/components/Testimonials'));
const Partners = React.lazy(() => import('@/components/Partners'));
const CTA = React.lazy(() => import('@/components/CTA'));

const Home = () => {
  return (
    <div className="bg-[#0B0B0B] min-h-screen text-white font-sans">
      <SEOHead 
        title="KAPSERFX | Turnkey Forex Broker Solutions"
        description="Launch your Forex brokerage in days. We offer MT5/cTrader platforms, CRM, liquidity integration, and digital marketing strategies."
      />

      <Hero />
      
      {/* Fallback space while components load */}
      <Suspense fallback={<div className="h-64" />}>
        <SectionAnimator><Services /></SectionAnimator>
        <SectionAnimator><Features /></SectionAnimator>
        <Roadmap />
        <SectionAnimator><Insights /></SectionAnimator>
        <SectionAnimator><FAQ /></SectionAnimator>
        <SectionAnimator><Testimonials /></SectionAnimator>
        <SectionAnimator><Partners /></SectionAnimator>
        <SectionAnimator><CTA /></SectionAnimator>
      </Suspense>
    </div>
  );
};

export default Home;