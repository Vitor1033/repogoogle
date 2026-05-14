import React from 'react';
import { useAuth } from '../lib/AuthContext';
import { useFavorites } from '../lib/useFavorites';
import { useSubscriptions } from '../lib/useSubscriptions';
import { OPPORTUNITIES } from '../data/cms';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MapPin, Calendar, Euro, Heart, UserCircle, Bell, Trash2 } from 'lucide-react';
import { Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/SEO';

export const Dashboard = () => {
  const { user, loading: authLoading } = useAuth();
  const { favorites, toggleFavorite, loading: favLoading } = useFavorites();
  const { subscriptions, removeSubscription, loading: subLoading } = useSubscriptions();

  if (authLoading || favLoading || subLoading) {
    return (
      <div className="flex flex-col flex-1 items-center justify-center bg-slate-50 min-h-screen">
         <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/" replace />;
  }

  const savedJobs = OPPORTUNITIES.filter(job => favorites[job.id]);

  return (
    <div className="flex flex-col flex-1 bg-slate-50 min-h-screen pt-24 pb-12">
      <SEO 
        title="Dashboard" 
        description="Manage your saved opportunities and subscriptions on European Era."
      />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 w-full">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">My Dashboard</h1>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
           
           {/* Profile Sidebar */}
           <div className="w-full md:w-1/3 space-y-6">
             <Card className="p-6 border-slate-200 shadow-sm bg-white top-24 sticky">
                <div className="flex flex-col items-center text-center">
                   <div className="w-24 h-24 bg-primary/10 text-primary rounded-full flex items-center justify-center mb-4">
                      {user.photoURL ? (
                          <img src={user.photoURL} alt={user.displayName || "User"} className="w-full h-full rounded-full object-cover" />
                      ) : (
                          <UserCircle className="w-12 h-12" />
                      )}
                   </div>
                   <h2 className="text-xl font-bold text-slate-900">{user.displayName || 'User'}</h2>
                   <p className="text-sm text-slate-500 mb-4">{user.email}</p>
                   <div className="w-full border-t border-slate-100 pt-4 flex flex-col gap-2 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Saved Opportunities</span>
                        <span className="font-semibold text-slate-900">{savedJobs.length}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-500">Alert Subscriptions</span>
                        <span className="font-semibold text-slate-900">{subscriptions.length}</span>
                      </div>
                   </div>
                </div>
             </Card>
           </div>
           
           {/* Main Column */}
           <div className="flex-1 w-full space-y-10">
              
              {/* Alert Subscriptions Section */}
              <div className="space-y-6">
                 <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                       <Bell className="w-5 h-5 text-primary" /> Active Job Alerts
                    </h2>
                 </div>
                 
                 {subscriptions.length === 0 ? (
                    <div className="text-center py-10 bg-white rounded-xl border border-dashed border-slate-300">
                       <p className="text-slate-500">You aren't subscribed to any job alerts.</p>
                       <p className="text-sm text-slate-400 mt-2">Go to Opportunities and click 'Subscribe to Search' to get notified.</p>
                    </div>
                 ) : (
                    <div className="grid sm:grid-cols-2 gap-4">
                       {subscriptions.map(sub => (
                          <Card key={sub.id} className="p-5 border-slate-200 bg-white flex justify-between items-start group">
                             <div>
                                <h3 className="font-semibold text-slate-900 mb-1">{sub.category === "All" ? "Any Category" : sub.category}</h3>
                                {sub.searchQuery && (
                                   <p className="text-sm text-slate-500">Keyword: "{sub.searchQuery}"</p>
                                )}
                                {!sub.searchQuery && (
                                   <p className="text-sm text-slate-500">All new opportunities</p>
                                )}
                             </div>
                             <button
                                onClick={() => removeSubscription(sub.id)}
                                className="text-slate-400 hover:text-rose-500 transition-colors p-2"
                                title="Remove subscription"
                             >
                                <Trash2 className="w-4 h-4" />
                             </button>
                          </Card>
                       ))}
                    </div>
                 )}
              </div>

              {/* Saved Opportunities Section */}
              <div className="space-y-6">
                 <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                       <Heart className="w-5 h-5 text-rose-500 fill-rose-500" /> Saved Opportunities
                    </h2>
                 </div>
                 
                 {savedJobs.length === 0 ? (
                 <div className="text-center py-16 bg-white rounded-xl border border-dashed border-slate-300">
                    <Heart className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-slate-900 mb-2">No saved opportunities</h3>
                    <p className="text-slate-500 mb-6">You haven't saved any jobs or internships yet.</p>
                    <Button href="/opportunities">Explore Opportunities</Button>
                 </div>
              ) : (
                <div className="space-y-4">
                  {savedJobs.map((job) => (
                    <Card key={job.id} className="hover:shadow-md transition-shadow group border-slate-200">
                      <div className="p-5 flex flex-col sm:flex-row gap-5 items-start sm:items-center relative">
                        <button 
                          onClick={() => toggleFavorite(job.id)}
                          className="absolute top-4 right-4 p-2 rounded-full hover:bg-slate-100 transition-colors"
                          title="Remove from saved"
                        >
                          <Heart className="w-5 h-5 fill-rose-500 text-rose-500 hover:fill-slate-300 hover:text-slate-300 transition-colors" />
                        </button>
                        
                        <div className="w-14 h-14 rounded-lg overflow-hidden bg-slate-100 flex items-center justify-center shrink-0 shadow-sm border border-slate-200">
                          <img src={job.logo} alt={job.company} loading="lazy" className="w-full h-full object-cover" />
                        </div>
                        
                        <div className="flex-1 pr-8">
                          <h3 className="text-base font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors cursor-pointer">
                            {job.title}
                          </h3>
                          <p className="text-sm text-slate-600 font-medium mb-3">{job.company}</p>
                          
                          <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5" /> {job.location}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5" /> {job.duration}
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Euro className="w-3.5 h-3.5" /> {job.stipend}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
              </div>
           </div>
           
        </div>
      </div>
    </div>
  );
};
