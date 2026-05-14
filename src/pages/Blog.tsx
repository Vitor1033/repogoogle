import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { ArrowRight, Clock, User } from 'lucide-react';
import { BLOG_POSTS } from '../data/cms';

export const Blog = () => {
  const posts = BLOG_POSTS;

  return (
    <div className="flex flex-col flex-1 bg-white">
      {/* Header */}
      <section className="bg-slate-50 py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Insights & Stories</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Expert advice, comprehensive guides, and real student experiences to help you navigate your international journey.
          </p>
        </div>
      </section>

      {/* Featured Post (First one) */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-xl">
          <div className="md:w-1/2 bg-slate-800 p-12 flex flex-col justify-center">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-primary/20 text-blue-300 w-fit mb-6">
              {posts[0].category}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{posts[0].title}</h2>
            <p className="text-slate-400 text-lg mb-8">{posts[0].excerpt}</p>
            <div className="flex items-center text-slate-500 text-sm gap-4 mb-8">
              <span className="flex items-center gap-1.5"><User className="w-4 h-4"/> {posts[0].author}</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4"/> {posts[0].readTime}</span>
            </div>
            <Button className="w-fit" variant="default">Read Article</Button>
          </div>
          <div className="md:w-1/2 aspect-square md:aspect-auto bg-slate-800 border-l border-slate-700 overflow-hidden relative">
             <img src={posts[0].image} alt={posts[0].title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-12 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
         <div className="flex justify-between items-end mb-10">
           <h2 className="text-2xl font-bold text-slate-900">Latest Articles</h2>
           {/* Simple categories filter placeholder */}
           <div className="hidden md:flex gap-4 text-sm font-medium text-slate-500">
             <span className="text-primary border-b-2 border-primary pb-1 cursor-pointer">All</span>
             <span className="hover:text-slate-900 cursor-pointer">Erasmus Tips</span>
             <span className="hover:text-slate-900 cursor-pointer">Career Advice</span>
             <span className="hover:text-slate-900 cursor-pointer">Student Exp.</span>
           </div>
         </div>

         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {posts.slice(1).map(post => (
             <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow border-slate-200 group flex flex-col cursor-pointer p-0">
               <div className={`w-full aspect-video bg-slate-100 overflow-hidden relative`}>
                 <img src={post.image} alt={post.title} loading="lazy" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" />
               </div>
               <CardContent className="p-6 flex-1 flex flex-col">
                 <span className="text-xs font-semibold text-primary mb-3 block">{post.category}</span>
                 <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                 <p className="text-slate-600 mb-6 flex-1 line-clamp-3">{post.excerpt}</p>
                 
                 <div className="flex justify-between items-center pt-4 border-t border-slate-100 mt-auto">
                   <div className="text-xs text-slate-500">
                     <span className="block font-medium text-slate-700">{post.author}</span>
                     <span>{post.date}</span>
                   </div>
                   <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                     <ArrowRight className="w-4 h-4 text-inherit" />
                   </div>
                 </div>
               </CardContent>
             </Card>
           ))}
         </div>
         
         <div className="mt-16 text-center">
           <Button variant="outline" size="lg">Load More Articles</Button>
         </div>
      </section>
    </div>
  );
};
