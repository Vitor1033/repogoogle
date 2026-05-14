import React from 'react';
import { Button } from '../components/ui/Button';
import { GraduationCap, Building2, Plane, Home, ShieldCheck, Handshake } from 'lucide-react';

export const Services = () => {
  return (
    <div className="flex flex-col flex-1">
      {/* Header */}
      <section className="bg-slate-50 py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive end-to-end solutions for students and host organizations to ensure a seamless international mobility experience.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Service 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Student Mobility</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Streamlining International Opportunities in Málaga. We actively collaborate with Erasmus+ coordinators and VET college administrators to streamline the arrangement of tailored internships across various sectors.
              </p>
              <ul className="space-y-3 mb-8">
                {['Over 400 Partnering Companies', 'Project management & welcome induction', '24/7 emergency contact'].map(item => (
                  <li key={item} className="flex items-center text-slate-700 font-medium">
                    <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div> {item}
                  </li>
                ))}
              </ul>
              <Button href="/opportunities">Explore Erasmus Opportunities</Button>
            </div>
            <div className="w-full md:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-2xl">
               <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80" alt="University campus" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          {/* Service 2 / reverse */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Staff Mobility</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We are dedicated to supporting educators and professionals through tailored training courses designed to meet diverse needs, fostering skill development and career growth.
              </p>
               <ul className="space-y-3 mb-8">
                {['Teacher training courses', 'Job shadowing opportunities', 'Preparatory visits'].map(item => (
                  <li key={item} className="flex items-center text-slate-700 font-medium">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 mr-3"></div> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-2xl">
               <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80" alt="Tech internship" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            <div className="w-full md:w-1/2">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center mb-6">
                <Plane className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Relocation & Cultural Immersion</h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We simplify the process for both coordinators and students, covering every detail from accommodation to cultural activities, ensuring that students fully enjoy their time in Málaga.
              </p>
               <ul className="space-y-3 mb-8">
                {['Comfortable housing options (residences, apartments)', 'Local transport arrangements', 'Engaging cultural events in Málaga'].map(item => (
                  <li key={item} className="flex items-center text-slate-700 font-medium">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mr-3"></div> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 aspect-video rounded-3xl overflow-hidden shadow-2xl">
               <img src="https://images.unsplash.com/photo-1510526019688-06ccb4b049d5?auto=format&fit=crop&q=80" alt="Relocation and working abroad" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
            </div>
          </div>

        </div>
      </section>

      {/* Grid of smaller services */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tailored Solutions for Host Organizations</h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">We don't just support students. We help companies build reliable talent pipelines.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
             <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
               <Handshake className="w-10 h-10 text-primary mb-6" />
               <h3 className="text-xl font-bold mb-3">Pre-Screened Candidates</h3>
               <p className="text-slate-400">Save hours of HR time. We deliver a shortlist of motivated candidates that meet your exact specifications.</p>
             </div>
             <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
               <ShieldCheck className="w-10 h-10 text-primary mb-6" />
               <h3 className="text-xl font-bold mb-3">Legal Compliance</h3>
               <p className="text-slate-400">We ensure all training agreements and internship contracts comply with local labor laws and university requirements.</p>
             </div>
             <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
               <Home className="w-10 h-10 text-primary mb-6" />
               <h3 className="text-xl font-bold mb-3">Onboarding Help</h3>
               <p className="text-slate-400">We assist your new interns in securing accommodation so they arrive at work on day one stress-free.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};
