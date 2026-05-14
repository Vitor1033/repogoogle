import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../components/ui/Card';
import { MapPin, Search, Filter, Briefcase, Calendar, Euro, Heart, Bell, Loader2 } from 'lucide-react';
import { motion } from 'motion/react';
import { OPPORTUNITIES } from '../data/cms';
import { useAuth } from '../lib/AuthContext';
import { useFavorites } from '../lib/useFavorites';
import { useSubscriptions } from '../lib/useSubscriptions';

const categories = ["All", "Marketing", "Business", "IT & Tech", "Design", "AI & Innovation", "Remote"];

export const Opportunities = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const { user, signIn } = useAuth();
  const { favorites, toggleFavorite } = useFavorites();
  const { addSubscription } = useSubscriptions();
  const [showSubscribeSuccess, setShowSubscribeSuccess] = useState(false);
  
  // Loading states
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);
  const [processingFavs, setProcessingFavs] = useState<Record<string, boolean>>({});
  const [isSubscribing, setIsSubscribing] = useState(false);

  React.useEffect(() => {
    // Simulate fetching job listings
    setIsLoadingJobs(true);
    const timer = setTimeout(() => {
      setIsLoadingJobs(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const filteredOpps = OPPORTUNITIES.filter(op => {
    const matchesCategory = activeCategory === "All" || op.category === activeCategory;
    const matchesSearch = op.title.toLowerCase().includes(searchQuery.toLowerCase()) || op.company.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleFavoriteClick = async (jobId: string | number) => {
     if (!user) {
        signIn();
        return;
     }
     setProcessingFavs(prev => ({ ...prev, [jobId]: true }));
     await toggleFavorite(jobId);
     setProcessingFavs(prev => ({ ...prev, [jobId]: false }));
  };

  const handleSubscribe = async () => {
    if (!user) {
      signIn();
      return;
    }
    setIsSubscribing(true);
    await addSubscription(activeCategory, searchQuery);
    setIsSubscribing(false);
    setShowSubscribeSuccess(true);
    setTimeout(() => setShowSubscribeSuccess(false), 3000);
  };

  return (
    <div className="flex flex-col flex-1 bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Explore Opportunities</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10">Find your next big step. Browse Erasmus+ funded programs and exclusive paid internships across Europe.</p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto flex items-center relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4" />
            <input 
              type="text" 
              placeholder="Search by role, company, or skill..." 
              className="w-full h-14 pl-12 pr-4 rounded-full border border-slate-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all shadow-sm text-lg"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 shrink-0">
          <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm sticky top-24">
            <div className="flex items-center gap-2 font-semibold text-slate-900 mb-4 pb-4 border-b border-slate-100">
              <Filter className="w-5 h-5 text-primary" />
              Categories
            </div>
            <div className="space-y-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === category 
                      ? "bg-primary/10 text-primary" 
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="mt-8 pt-6 border-t border-slate-100">
              <h3 className="font-semibold text-slate-900 mb-4 text-sm uppercase tracking-wider">Program Type</h3>
              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-primary focus:ring-primary w-4 h-4 border-slate-300" defaultChecked />
                  <span className="text-sm text-slate-600">Erasmus+ (Funded)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded text-primary focus:ring-primary w-4 h-4 border-slate-300" defaultChecked />
                  <span className="text-sm text-slate-600">Paid Internship</span>
                </label>
              </div>
            </div>
          </div>
        </aside>

        {/* Results */}
        <div className="flex-1">
          <div className="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pr-2">
            <p className="text-slate-500 font-medium">Showing {filteredOpps.length} results</p>
            <div className="flex items-center gap-3">
               {showSubscribeSuccess && (
                 <span className="text-emerald-600 text-sm font-medium animate-pulse">Alerts Subscribed!</span>
               )}
               <Button variant="outline" onClick={handleSubscribe} disabled={isSubscribing} className="gap-2">
                 {isSubscribing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Bell className="w-4 h-4" />}
                 {isSubscribing ? 'Subscribing...' : 'Subscribe to Search'}
               </Button>
            </div>
          </div>

          <div className="space-y-4">
            {isLoadingJobs ? (
              // Loading Skeleton
              Array.from({ length: 4 }).map((_, i) => (
                <Card key={i} className="border-slate-200">
                  <div className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center relative animate-pulse">
                    <div className="w-16 h-16 rounded-xl bg-slate-200 shrink-0"></div>
                    <div className="flex-1 space-y-3 w-full">
                      <div className="h-4 bg-slate-200 rounded w-1/4"></div>
                      <div className="h-6 bg-slate-200 rounded w-3/4"></div>
                      <div className="h-4 bg-slate-200 rounded w-1/2"></div>
                      <div className="flex gap-4 mt-2">
                         <div className="h-4 bg-slate-200 rounded w-16"></div>
                         <div className="h-4 bg-slate-200 rounded w-16"></div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))
            ) : (
              filteredOpps.map((job) => {
                const isSaved = favorites[job.id] || false;
                const isProcessingFav = processingFavs[job.id] || false;
                
                return (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="hover:shadow-md transition-shadow group border-slate-200">
                    <div className="p-6 flex flex-col md:flex-row gap-6 items-start md:items-center relative">
                      <button 
                        onClick={() => handleFavoriteClick(job.id)}
                        disabled={isProcessingFav}
                        className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors disabled:opacity-50"
                        title={isSaved ? "Remove from saved" : "Save opportunity"}
                      >
                        {isProcessingFav ? (
                          <Loader2 className="w-5 h-5 text-slate-400 animate-spin" />
                        ) : (
                          <Heart className={`w-5 h-5 ${isSaved ? 'fill-rose-500 text-rose-500' : 'text-slate-400 hover:text-rose-500'}`} />
                        )}
                      </button>
                      {/* Logo */}
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center shrink-0 shadow-sm border border-slate-200">
                      <img src={job.logo} alt={job.company} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    
                    {/* Details */}
                    <div className="flex-1 pr-8">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                          {job.type}
                        </span>
                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full">
                          {job.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors cursor-pointer">
                        {job.title}
                      </h3>
                      <p className="text-slate-600 font-medium mb-3">{job.company}</p>
                      
                      {/* Meta */}
                      <div className="flex flex-wrap gap-4 text-sm text-slate-500">
                        <div className="flex items-center gap-1.5">
                          <MapPin className="w-4 h-4" /> {job.location}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" /> {job.duration}
                        </div>
                        <div className="flex items-center gap-1.5">
                          <Euro className="w-4 h-4" /> {job.stipend}
                        </div>
                      </div>
                    </div>
                    
                    {/* Action */}
                    <div className="w-full md:w-auto shrink-0 mt-4 md:mt-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
                      <Button className="w-full md:w-auto" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}))}

            {!isLoadingJobs && filteredOpps.length === 0 && (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-slate-900 mb-2">No opportunities found</h3>
                <p className="text-slate-500">Try adjusting your filters or search query.</p>
                <Button variant="outline" className="mt-6" onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
