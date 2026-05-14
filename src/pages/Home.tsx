import React from 'react';
import { Button } from '../components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '../components/ui/Card';
import { Globe, Plane, GraduationCap, Building2, MapPin, ArrowRight, CheckCircle2, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import HeroImage from '../assets/images/regenerated_image_1778680293282.png';
import { TESTIMONIALS } from '../data/cms';
import { SEO } from '../components/SEO';

export const Home = () => {
  return (
    <div className="flex flex-col flex-1">
      <SEO 
        title="Home" 
        description="European Era creates life-changing opportunities for students and professionals across Europe through Erasmus+, internships, and courses."
      />
      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-0 bg-slate-50">
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 lg:py-24 xl:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-6 w-fit">
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              New Internships Open 2024
            </div>
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.1] text-slate-900 mb-6">
              Your European <br/><span className="text-blue-600">Career Starts Here.</span>
            </h1>
            <p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
              Bridging the gap between ambitious students and world-class European companies through Erasmus+ and professional mobility programs.
            </p>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <Button variant="secondary" size="lg" href="/opportunities" className="h-14 px-8 text-base rounded-xl flex items-center gap-2 hover:scale-105 transition-transform">
                Explore Opportunities
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 overflow-hidden"><img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop" alt="partner"/></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-400 overflow-hidden"><img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop" alt="partner"/></div>
                  <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-500 overflow-hidden"><img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop" alt="partner"/></div>
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white bg-blue-100 text-blue-600 text-[12px] font-bold tracking-tighter">400+</div>
                </div>
                <span className="text-sm text-slate-500 font-medium">Partner Companies</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Hero Image */}
        <div className="col-span-5 relative overflow-hidden hidden md:block w-full h-full min-h-[500px]">
           <img src={HeroImage} alt="Students collaborating" className="absolute inset-0 w-full h-full object-cover" />
           <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
           <div className="absolute bottom-10 left-10 right-10 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-white/20 transform hover:-translate-y-1 transition-transform">
               <span className="text-blue-600 text-xs font-bold uppercase tracking-widest mb-1 block">Active Opportunities</span>
               <div className="flex items-end justify-between">
                 <h2 className="text-4xl font-black text-slate-900">482+</h2>
                 <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center -mb-2 shadow-lg shadow-yellow-200">
                   <Building2 className="w-5 h-5 text-slate-900" />
                 </div>
               </div>
               <p className="text-slate-500 text-xs mt-3 font-medium uppercase tracking-wide">Marketing • IT • AI • Design</p>
           </div>
        </div>
      </div>

      {/* Trust Bar */}
      <div className="bg-white border-y border-slate-200 py-6 px-6 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] whitespace-nowrap shrink-0">Strategic Partners & Universities</span>
        <div className="flex items-center gap-8 md:gap-12 opacity-50 grayscale contrast-125 overflow-x-auto w-full pb-2 md:pb-0 hide-scrollbar justify-start md:justify-end">
           <div className="font-black text-lg italic tracking-tighter whitespace-nowrap">UNIVERSITY COLL.</div>
           <div className="font-serif text-lg font-bold whitespace-nowrap">EUROPEAN CENTER</div>
           <div className="font-sans font-bold text-xl tracking-widest uppercase whitespace-nowrap">ERASMUS+</div>
           <div className="font-mono font-bold text-sm underline underline-offset-4 whitespace-nowrap">TECH HUB.EU</div>
           <div className="font-serif italic text-lg whitespace-nowrap pr-4 md:pr-0">Global Mobility</div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-24 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Complete Mobility Solutions</h2>
            <p className="text-lg text-slate-600">From finding the perfect internship to securing accommodation, we handle the logistics so you can focus on your professional growth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Card className="h-full border-none shadow-md bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">Erasmus+ Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Access funded mobility programs tailored for students and recent graduates across participating European nations.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Card className="h-full border-none shadow-md bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">Premium Internships</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">Exclusive placements in tech startups, marketing agencies, and established corporations tailored to your field of study.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Card className="h-full border-none shadow-md bg-white">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                    <Plane className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-xl">Relocation Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">End-to-end guidance including visa assistance, accommodation hunting, and local administrative setups.</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Opportunities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Latest Opportunities</h2>
                <p className="text-lg text-slate-600 max-w-2xl">Start your journey today with these featured positions across Europe.</p>
              </div>
              <Button variant="outline" href="/opportunities" className="shrink-0 group hidden sm:flex">
                View all positions <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
           </div>

           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 text-left">
             {/* Stub Data for opportunities */}
             {[
               { title: "Digital Marketing Intern", company: "GrowthX", location: "Lisbon, Portugal", tag: "Marketing", type: "Erasmus+" },
               { title: "Frontend Developer", company: "TechNova", location: "Berlin, Germany", tag: "IT & Tech", type: "Paid Internship" },
               { title: "Business Development", company: "ScaleUp Partners", location: "Barcelona, Spain", tag: "Business", type: "Erasmus+" }
             ].map((job, idx) => (
                <Card key={idx} className="hover:border-primary/50 transition-colors cursor-pointer group">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                        {job.tag}
                      </span>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-md">
                        {job.type}
                      </span>
                    </div>
                    <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">{job.title}</CardTitle>
                    <CardDescription className="text-sm font-medium">{job.company}</CardDescription>
                  </CardHeader>
                  <CardContent className="pb-4">
                    <div className="flex items-center text-sm text-slate-500">
                      <MapPin className="w-4 h-4 mr-1.5" /> {job.location}
                    </div>
                  </CardContent>
                  <CardFooter className="pt-2">
                     <Button variant="ghost" className="w-full justify-between px-0 font-medium text-slate-900 group-hover:text-primary">
                       View Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                     </Button>
                  </CardFooter>
                </Card>
             ))}
           </div>
           
           <Button variant="outline" href="/opportunities" className="w-full sm:hidden group">
              View all positions <ArrowRight className="w-4 h-4 ml-2" />
           </Button>
        </div>
      </section>

      {/* How it works (Minimal) */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row gap-16 items-center">
             <div className="md:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Your journey to Europe in 4 simple steps</h2>
                <p className="text-slate-400 text-lg mb-8">We've streamlined the entire process so you can secure your dream placement without the administrative headaches.</p>
                <div className="space-y-6">
                  {[
                    "Apply online through our portal",
                    "Complete the matching process",
                    "Sign contracts and get relocation support",
                    "Start your international experience"
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-slate-200 text-lg">{step}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-10">
                  <Button variant="default" href="/apply" className="bg-primary hover:bg-primary-dark">
                    Start Your Application
                  </Button>
                </div>
             </div>
              <div className="md:w-1/2 w-full">
               {/* Image section */}
               <div className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                 <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80" alt="Professional meeting" className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                 <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-yellow-400 text-slate-900 flex items-center justify-center font-bold shadow-lg shadow-yellow-500/20"><CheckCircle2 className="w-6 h-6"/></div>
                      <div>
                        <h4 className="text-white font-bold">Placement Secured</h4>
                        <p className="text-slate-300 text-sm">Málaga, Spain</p>
                      </div>
                    </div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Student Success Stories</h2>
            <p className="text-lg text-slate-600">Don't just take our word for it. Hear from the students who have transformed their careers through our mobility programs.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, idx) => (
              <motion.div key={testimonial.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.1 }}>
                <Card className="h-full border-none shadow-md bg-white relative pt-8 px-2">
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex items-center justify-center">
                     <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-white shadow-sm">
                       <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                     </div>
                  </div>
                  <CardHeader className="text-center pb-2 pt-4">
                    <CardTitle className="text-lg mb-1">{testimonial.name}</CardTitle>
                    <CardDescription className="text-primary font-medium">{testimonial.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Quote className="w-8 h-8 text-slate-200 mx-auto mb-4" />
                    <p className="text-slate-600 italic">"{testimonial.text}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to expand your horizons?</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Join thousands of students who have trusted European Era to guide their international professional journey.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Button variant="secondary" size="lg" href="/apply" className="h-14 px-10 text-base rounded-full">
              Apply as a Student
            </Button>
            <Button variant="default" size="lg" href="/contact" className="h-14 px-10 text-base rounded-full">
              Partner with Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
