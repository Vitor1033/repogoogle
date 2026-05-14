import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/ScrollToTop';

// Lazy Pages
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const About = lazy(() => import('./pages/About').then(module => ({ default: module.About })));
const Opportunities = lazy(() => import('./pages/Opportunities').then(module => ({ default: module.Opportunities })));
const Services = lazy(() => import('./pages/Services').then(module => ({ default: module.Services })));
const HowItWorks = lazy(() => import('./pages/HowItWorks').then(module => ({ default: module.HowItWorks })));
const Partners = lazy(() => import('./pages/Partners').then(module => ({ default: module.Partners })));
const Blog = lazy(() => import('./pages/Blog').then(module => ({ default: module.Blog })));
const Contact = lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })));
const Apply = lazy(() => import('./pages/Apply').then(module => ({ default: module.Apply })));
const FAQ = lazy(() => import('./pages/FAQ').then(module => ({ default: module.FAQ })));
const Malaga = lazy(() => import('./pages/Malaga').then(module => ({ default: module.Malaga })));
const Dashboard = lazy(() => import('./pages/Dashboard').then(module => ({ default: module.Dashboard })));

// Loading Component
const PageLoader = () => (
  <div className="flex-1 flex items-center justify-center py-24 min-h-[60vh]">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
  </div>
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="opportunities" element={<Opportunities />} />
            <Route path="services" element={<Services />} />
            <Route path="how-it-works" element={<HowItWorks />} />
            <Route path="partners" element={<Partners />} />
            <Route path="blog" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
            <Route path="apply" element={<Apply />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="malaga" element={<Malaga />} />
            <Route path="dashboard" element={<Dashboard />} />
            
            {/* Catch all */}
            <Route path="*" element={
              <div className="flex-1 flex flex-col items-center justify-center py-24 text-center px-4">
                <h1 className="text-9xl font-bold text-slate-100 mb-8">404</h1>
                <h2 className="text-3xl font-semibold mb-4 text-slate-900">Page Not Found</h2>
                <p className="text-slate-500 max-w-md mx-auto mb-8">The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
                <a href="/" className="bg-primary text-white px-6 py-3 rounded-md font-medium hover:bg-primary-dark transition-colors">
                  Return Home
                </a>
              </div>
            } />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
