import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

const faqs = [
  {
    category: "General",
    questions: [
      { q: "What is European Era?", a: "European Era is a platform that connects students and young professionals with exclusive internships and Erasmus+ funded programs across Europe, providing full relocation and administrative support." },
      { q: "Do I have to be a European citizen to apply?", a: "No, we offer opportunities for non-EU citizens as well, though specific funding programs like Erasmus+ have specific eligibility criteria based on your home university." }
    ]
  },
  {
    category: "Students",
    questions: [
      { q: "How much does the service cost for students?", a: "Application to our general portal is free. For specific premium placement services where we actively hunt for customized roles, there may be a service fee which is fully transparent before you commit." },
      { q: "Will I get paid during my internship?", a: "Many of our internships are paid directly by the host company. Additionally, if you are eligible for Erasmus+ through your university, you can receive the European grant on top of your internship stipend." },
      { q: "Do you help with accommodation?", a: "Yes! Our relocation support package includes assistance with finding safe, affordable housing near your new workplace." }
    ]
  },
  {
    category: "Companies",
    questions: [
      { q: "How does European Era vet candidates?", a: "We conduct a rigorous multi-stage screening process including academic verification, language proficiency testing, and behavioral interviews before presenting any candidate." },
      { q: "How much does it cost to become a host partner?", a: "We offer tailored partnership models depending on the volume of interns you wish to hire. Please fill out our partnership form for a custom quote." }
    ]
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<string | null>("Students-0");
  const [activeCategory, setActiveCategory] = useState("Students");

  const toggle = (id: string) => {
    setOpenIndex(openIndex === id ? null : id);
  };

  const currentFaqs = faqs.find(f => f.category === activeCategory)?.questions || [];

  return (
    <div className="flex flex-col flex-1 bg-slate-50 pb-24">
      <SEO 
        title="FAQ" 
        description="Find answers to frequently asked questions about European Era, our services, and specific programs."
      />
      <section className="bg-slate-900 text-white py-24 border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-slate-400">Everything you need to know about our programs and services.</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 w-full">
        {/* Category Tabs */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {faqs.map(cat => (
            <button
               key={cat.category}
               onClick={() => { setActiveCategory(cat.category); setOpenIndex(`${cat.category}-0`); }}
               className={`px-6 py-2.5 rounded-full font-medium transition-colors ${activeCategory === cat.category ? 'bg-primary text-white' : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'}`}
            >
              {cat.category} FAQ
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {currentFaqs.map((faq, index) => {
            const id = `${activeCategory}-${index}`;
            const isOpen = openIndex === id;
            return (
              <div key={index} className="border-b border-slate-100 last:border-none">
                <button 
                  onClick={() => toggle(id)}
                  className="w-full text-left px-8 py-6 flex justify-between items-center bg-white hover:bg-slate-50 transition-colors focus:outline-none"
                >
                  <span className="text-lg font-semibold text-slate-900">{faq.q}</span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'bg-primary text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>
                 {isOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }} 
                      animate={{ opacity: 1, height: 'auto' }} 
                      className="px-8 pb-6 text-slate-600 leading-relaxed bg-slate-50 pt-2"
                    >
                      {faq.a}
                    </motion.div>
                 )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
