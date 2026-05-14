import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { User, Building2, Landmark, CheckCircle2, Loader2 } from 'lucide-react';

export const Apply = () => {
  const [activeTab, setActiveTab] = useState<'student' | 'company' | 'partner'>('student');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // MOCK API CALL
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  const handleTabChange = (tab: 'student' | 'company' | 'partner') => {
    setActiveTab(tab);
    setFormStatus('idle'); // Reset on tab change
  };

  return (
    <div className="flex flex-col flex-1 bg-slate-50">
      <section className="py-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Apply Now</h1>
        <p className="text-xl text-slate-600 mb-10">Select your profile to begin the application process.</p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button 
            type="button"
            onClick={() => handleTabChange('student')}
            className={`flex items-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all shadow-sm ${activeTab === 'student' ? 'bg-primary text-white scale-105 shadow-primary/25' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
          >
            <User className="w-5 h-5" /> Student / Intern
          </button>
           <button 
             type="button"
             onClick={() => handleTabChange('company')}
            className={`flex items-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all shadow-sm ${activeTab === 'company' ? 'bg-emerald-600 text-white scale-105 shadow-emerald-600/25' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
          >
            <Building2 className="w-5 h-5" /> Host Company
          </button>
           <button 
             type="button"
             onClick={() => handleTabChange('partner')}
            className={`flex items-center gap-2 px-6 py-4 rounded-xl font-semibold transition-all shadow-sm ${activeTab === 'partner' ? 'bg-purple-600 text-white scale-105 shadow-purple-600/25' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
          >
            <Landmark className="w-5 h-5" /> University / Partner
          </button>
        </div>

        {/* Dynamic Form Placeholder based on tab */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-slate-100 text-left max-w-3xl mx-auto relative overflow-hidden">
          {/* Accent border top */}
          <div className={`absolute top-0 left-0 w-full h-1.5 ${activeTab === 'student' ? 'bg-primary' : activeTab === 'company' ? 'bg-emerald-600' : 'bg-purple-600'}`}></div>
          
          {formStatus === 'success' ? (
            <div className="py-12 text-center text-slate-900">
               <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                 <CheckCircle2 className="w-8 h-8" />
               </div>
               <h3 className="text-2xl font-bold mb-4">Application Submitted!</h3>
               <p className="text-slate-600 mb-8">Thank you for your interest. We have received your application and will contact you via email regarding the next steps.</p>
               <Button variant="outline" onClick={() => setFormStatus('idle')}>Submit another</Button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {activeTab === 'student' && "Student Application"}
                {activeTab === 'company' && "Company Registration"}
                {activeTab === 'partner' && "Partnership Inquiry"}
              </h2>
              <p className="text-slate-500 mb-8 pb-8 border-b border-slate-100">
                {activeTab === 'student' && "Fill out your details to join our talent pool or apply for a specific open position."}
                {activeTab === 'company' && "Register your organization to start receiving highly qualified intern profiles."}
                {activeTab === 'partner' && "Submit your institution's details to explore a formal partnership framework with European Era."}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">First Name</label>
                    <input required type="text" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="John"/>
                  </div>
                   <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-900">Last Name</label>
                    <input required type="text" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Doe"/>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900">Email Address</label>
                  <input required type="email" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="you@example.com"/>
                </div>

                {activeTab === 'student' && (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-900">Field of Study</label>
                      <select required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white">
                        <option>Marketing & Communications</option>
                        <option>IT & Software Engineering</option>
                        <option>Business Administration</option>
                        <option>Design & Creative</option>
                        <option>Other</option>
                      </select>
                    </div>
                     <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-900">CV / Resume (PDF)</label>
                      <div className="w-full border-2 border-dashed border-slate-300 p-8 text-center rounded-lg hover:bg-slate-50 transition-colors cursor-pointer relative overflow-hidden group">
                        <input type="file" required className="absolute inset-0 opacity-0 cursor-pointer z-10" />
                        <span className="text-primary font-medium group-hover:underline">Click to upload</span> or drag and drop
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'company' && (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-900">Company Name</label>
                      <input required type="text" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Acme Corp"/>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-900">Industry / Sector</label>
                        <select required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white">
                          <option>IT & Software</option>
                          <option>Marketing & Media</option>
                          <option>Hospitality & Tourism</option>
                          <option>Business & Finance</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-900">Interns Needed (Per Year)</label>
                        <select required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white">
                          <option>1-5</option>
                          <option>5-10</option>
                          <option>10+</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                {activeTab === 'partner' && (
                  <>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-slate-900">Institution Name</label>
                      <input required type="text" className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="University of Example"/>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-900">Institution Type</label>
                        <select required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white">
                          <option>University</option>
                          <option>VET College</option>
                          <option>Educational Agency</option>
                          <option>NGO / Non-Profit</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-900">Students Sent (Per Year)</label>
                        <select required className="w-full h-12 px-4 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-white">
                          <option>1-10</option>
                          <option>10-50</option>
                          <option>50+</option>
                        </select>
                      </div>
                    </div>
                  </>
                )}

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-900">Additional Information</label>
                  <textarea className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" rows={4} placeholder="Tell us more about your goals..."></textarea>
                </div>

                <Button type="submit" disabled={formStatus === 'submitting'} size="lg" className={`w-full h-14 text-lg ${activeTab === 'company' ? 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-200' : activeTab === 'partner' ? 'bg-purple-600 hover:bg-purple-700 shadow-purple-200' : ''}`}>
                  {formStatus === 'submitting' ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Processing...
                    </span>
                  ) : 'Submit Application'}
                </Button>
                <p className="text-center text-sm text-slate-500 mt-4">By submitting, you agree to our Privacy Policy and Terms & Conditions.</p>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
};
