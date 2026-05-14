import React from 'react';
import { Button } from '../components/ui/Button';
import { ClipboardList, Users2, PlaneTakeoff, Rocket } from 'lucide-react';
import { motion } from 'motion/react';

export const HowItWorks = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-8 h-8" />,
      title: "1. Apply",
      description: "Browse our portal and submit an application for the opportunities that match your profile. You can apply for specific positions or join our general talent pool. Upload your CV and academic records.",
      timeframe: "1-2 Days"
    },
    {
      icon: <Users2 className="w-8 h-8" />,
      title: "2. Matching & Interviews",
      description: "Our team reviews your profile and connects you with host organizations. If there's a mutual fit, we organize interviews to ensure your goals align with the company's expectations.",
      timeframe: "1-3 Weeks"
    },
    {
      icon: <PlaneTakeoff className="w-8 h-8" />,
      title: "3. Preparation & Contracts",
      description: "Once accepted, we handle the bureaucracy. We draft the Learning Agreement, secure Erasmus signatures if applicable, and assist with visas, flights, and finding accommodation.",
      timeframe: "2-4 Weeks"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "4. Start Your Experience",
      description: "Arrive in your new city with confidence. We provide a welcome guide, connect you with other interns in the area, and remain available 24/7 throughout your entire placement.",
      timeframe: "Ongoing"
    }
  ];

  return (
    <div className="flex flex-col flex-1 bg-slate-50">
      <section className="py-24 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">How It Works</h1>
        <p className="text-xl text-slate-600 mb-10">
          A transparent, step-by-step process designed to minimize stress and maximize your chances of securing the perfect international placement.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 relative">
        {/* Connecting line */}
        <div className="absolute left-1/2 top-0 bottom-32 w-0.5 bg-slate-200 -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              
              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 !== 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'} relative z-10 box-border`}>
                <div className={`inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 text-xs font-bold text-slate-500 rounded-full mb-4 shadow-sm uppercase tracking-wider`}>
                  Est. {step.timeframe}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed text-lg">{step.description}</p>
              </div>

              {/* Center Node */}
              <div className="hidden md:flex flex-col items-center justify-center relative z-10">
                <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 border-4 border-slate-50">
                  {step.icon}
                </div>
              </div>

              {/* Mobile Icon (hidden on desktop) */}
              <div className="md:hidden w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/30 mb-4">
                 {step.icon}
              </div>

              {/* Spacer for alternating layout */}
              <div className="md:w-1/2 hidden md:block"></div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-primary text-white text-center px-4">
        <h2 className="text-3xl font-bold mb-6">Ready to take the first step?</h2>
        <Button variant="outline" size="lg" className="bg-white text-primary border-none hover:bg-slate-100 rounded-full h-14 px-10 text-lg">
          Start Your Application
        </Button>
      </section>
    </div>
  );
};
