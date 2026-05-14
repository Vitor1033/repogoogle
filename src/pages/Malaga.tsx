import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/Button';
import { MapPin, Sun, Palette, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';
import MalagaImage1 from '../assets/images/regenerated_image_1778681745239.png';
import { SEO } from '../components/SEO';

export const Malaga = () => {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Malaga" 
        description="Capital of the Costa del Sol and the perfect destination for your international mobility experience."
      />
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 md:py-32 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1549556899-73e0c034b074?auto=format&fit=crop&q=80" alt="View of Malaga" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/80"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Malaga</h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
              Capital of the Costa del Sol and the perfect destination for your international mobility experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-8 font-medium text-lg leading-relaxed text-slate-600">
               <p>
                 Malaga is located in southern Spain, on the Costa del Sol (Coast of the Sun) on the northern side of the Mediterranean Sea.
               </p>
               <p>
                 It lies at the feet of the Montes de Málaga, about 100 kilometers (62 miles) east of the Strait of Gibraltar and roughly 130 kilometers (81 miles) east of Tarifa (the southernmost point of continental Europe) and about 130 km (81 miles) to the north of Africa.
               </p>
               <p>
                 Malaga has over 500,000 people and is the birthplace of Pablo Picasso.
               </p>
               <p>
                 In line with the city’s strategic plan, the campaign “Malaga: Open for Business” is directed towards the international promotion of the town on all levels but fundamentally on a business level.
               </p>
               <p>
                 The campaign emphasizes new technologies, innovation, and research to promote the city as a reference and focal point for many global business initiatives and projects. Málaga is a city of commerce, and tourism has been a growing source of revenue, driven by the presence of a major airport, the improvement of communications, and new infrastructure (such as the AVE, the maritime station), and new cultural facilities (such as the Picasso Museum, the Contemporary Art Centre and Trade Fair and Congress), which have drawn more tourists.
               </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                 <img src={MalagaImage1} alt="Malaga Port" className="rounded-2xl h-64 w-full object-cover shadow-sm" />
                 <img src="https://images.unsplash.com/photo-1612268710318-7b952fd6ee62?auto=format&fit=crop&q=80" alt="Malaga Streets" className="rounded-2xl h-80 w-full object-cover shadow-sm" />
              </div>
              <div className="space-y-4 pt-12">
                 <img src="https://images.unsplash.com/photo-1549556899-73e0c034b074?auto=format&fit=crop&q=80" alt="Malaga Alcazaba" className="rounded-2xl h-80 w-full object-cover shadow-sm" />
                 <img src="https://images.unsplash.com/photo-1594954005953-bbaaf135af7e?auto=format&fit=crop&q=80" alt="Malaga Cathedral" className="rounded-2xl h-64 w-full object-cover shadow-sm" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-6">The sunniest place in Spain</h2>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                The city boasts 320 days of sunshine each year, making it the sunniest place in Spain.
              </p>
           </div>
           
           <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-14 h-14 bg-yellow-100 text-yellow-600 rounded-xl flex items-center justify-center mb-6">
                   <Sun className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">A Cosmopolitan Hub</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  Málaga is a large city in the south of Spain, located directly on the sea in the heart of Andalusia and the capital of the Málaga Province. Its airport is the third largest airport in Spain and has direct access to many European cities.
                </p>
             </div>

             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                   <MapPin className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Mediterranean Lifestyle</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  With annual average temperatures of 18.5 °C, Málaga is a major tourist destination with its sandy beaches, water sports, rich architectural history, Mediterranean cuisine, and friendly local people.
                </p>
             </div>

             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                   <Palette className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Art & Culture</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  The famous Spanish artist Pablo Picasso was born in Malaga. The city proudly claimed him as its son by hosting a prestigious museum in his honor and naming its airport after him. The city is considered the most cosmopolitan city in the South of Spain.
                </p>
             </div>

             <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                   <Compass className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Authentic Spanish Culture</h3>
                <p className="text-slate-600 leading-relaxed font-medium">
                  There could be no better place to discover and embrace authentic Spanish culture during your Erasmus. Málaga embodies Spanish traditions in multiple aspects, such as a magnificent Plaza de Toros, and a superb variety of tapas bars.
                </p>
             </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Experience Malaga?</h2>
          <p className="text-xl text-slate-600 mb-8 font-medium">Excellent workplace opportunities are waiting to be explored.</p>
          <div className="flex gap-4 justify-center">
            <Button href="/opportunities" size="lg" className="rounded-full shadow-lg shadow-primary/20">Explore Opportunities</Button>
            <Button href="/contact" size="lg" variant="outline" className="rounded-full">Contact Us</Button>
          </div>
        </div>
      </section>
    </div>
  );
};
