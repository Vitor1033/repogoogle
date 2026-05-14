import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-900 bg-white">
      <Navbar />
      <main className="flex-grow pt-16 flex flex-col">
        {/* We use flex-col on main to allow children pages to fill height if needed */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
