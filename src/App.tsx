import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { ScrollToTop } from './components/ScrollToTop';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Opportunities } from './pages/Opportunities';
import { Services } from './pages/Services';
import { HowItWorks } from './pages/HowItWorks';
import { Partners } from './pages/Partners';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Apply } from './pages/Apply';
import { FAQ } from './pages/FAQ';
import { Malaga } from './pages/Malaga';
import { Dashboard } from './pages/Dashboard';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
    </BrowserRouter>
  );
}
