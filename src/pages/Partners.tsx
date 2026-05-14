import React from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

export const Partners = () => {
  return (
    <div className="flex flex-col flex-1">
      <section className="bg-slate-900 py-24 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Partner Network</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-10">
            European Era bridges the gap between educational institutions and the corporate world. We work with hundreds of trusted entities across the continent.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="rounded-full">Become a Partner</Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-24">
            <div className="mb-12 border-b border-slate-200 pb-4">
              <h2 className="text-3xl font-bold text-slate-900">Partner Universities</h2>
              <p className="text-slate-600 mt-2 text-lg">Institutions that trust us with their students' mobility.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
               {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                 <Card key={i} className="flex items-center justify-center p-8 aspect-square border-slate-100 shadow-sm hover:shadow-md transition-shadow grayscale hover:grayscale-0 cursor-pointer">
                   <div className="font-bold text-slate-400 text-center leading-tight">Univ<br/>Partner {i}</div>
                 </Card>
               ))}
            </div>
          </div>

          <div>
             <div className="mb-12 border-b border-slate-200 pb-4">
              <h2 className="text-3xl font-bold text-slate-900">Host Companies</h2>
              <p className="text-slate-600 mt-2 text-lg">Startups, agencies, and enterprises offering high-quality positions.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
               {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => (
                 <Card key={i} className="flex items-center justify-center p-8 aspect-video border-slate-100 shadow-sm hover:shadow-md transition-shadow grayscale hover:grayscale-0 cursor-pointer">
                   <div className="font-bold text-slate-400 text-center">Company {i}</div>
                 </Card>
               ))}
            </div>
          </div>

        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Partner With Us?</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left mt-12 mb-12">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">For Universities</h3>
              <ul className="space-y-3 text-slate-600">
                <li>• Guarantee high-quality placements for top students</li>
                <li>• Streamlined Learning Agreement management</li>
                <li>• Higher student satisfaction & safety</li>
                <li>• Enhanced international reputation</li>
              </ul>
            </div>
             <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-3">For Companies</h3>
              <ul className="space-y-3 text-slate-600">
                <li>• Filtered access to Europe's brightest young talent</li>
                <li>• Diversity and fresh perspectives for your team</li>
                <li>• Reduce HR overhead (we handle the admin)</li>
                <li>• Access to subsidized talent via Erasmus+</li>
              </ul>
            </div>
          </div>
          <Button size="lg" href="/contact">Request Partnership Form</Button>
        </div>
      </section>
    </div>
  );
};
