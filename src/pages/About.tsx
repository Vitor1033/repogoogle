import React from 'react';
import { Button } from '../components/ui/Button';
import * as motion from 'motion/react-client';
import { Link } from 'react-router-dom';
import RicardImage from '../assets/images/regenerated_image_1778681183667.png';
import AnaImage from '../assets/images/regenerated_image_1778681184643.png';
import FrancescaImage from '../assets/images/regenerated_image_1778681185811.png';
import HelenaImage from '../assets/images/regenerated_image_1778681186560.png';

export const About = () => {
  return (
    <div className="flex flex-col flex-1">
      {/* Header */}
      <section className="bg-slate-900 text-white py-24 md:py-32 relative overflow-hidden">
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80" alt="Team meeting" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Why Us?</h1>
          </motion.div>
        </div>
      </section>

      {/* Why Us Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-8 text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                European Era is a distinguished educational organization with over 30 years of educational experience.
              </p>
              <p>
                In the framework of Erasmus+ and other mobility programs, we host VET students and staff, graduates, youth and professionals. We also provide high quality internship placements from our extensive database, excellent accommodation (private ensuite rooms), and a comprehensive program of cultural activities and 24/7 support.
              </p>
            </div>
            <div className="space-y-8 text-lg text-slate-600 leading-relaxed font-medium">
              <p>
                The company is located in Malaga, a lovely seaside resort right on the Mediterranean sea.
              </p>
              <p>
                This city greets you with many cultural and entertainment attractions and is an accommodating place with warm and friendly people. Don't miss a chance to experience internship benefits in Spain, with sandy beaches, water sports, and much more to make your stay worthwhile and memorable!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Team */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-8">The Team</h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              European ERA, a multicultural team of professionals, specializes in European Internships, offering expertise in strategic planning, project management, and more. We guide and support interns in customizing their experience, actively contributing to project development and European standard implementation. Handling administrative tasks, we ensure host companies meet documentation requirements and provide ongoing support during stays in Malaga. Our mission is to enhance the internship journey for both interns and host organizations.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Ricard Bou", role: "General Manager", image: RicardImage },
              { name: "Ana Ramos", role: "Team coordinator", image: AnaImage },
              { name: "Francesca Truvola", role: "Internship Coordinator", image: FrancescaImage },
              { name: "Helena Roelens", role: "Internship Coordinator", image: HelenaImage }
            ].map((member, idx) => (
              <div key={idx} className="group flex flex-col items-center">
                <div className="w-full aspect-[3/4] overflow-hidden bg-slate-200 rounded-2xl mb-6 shadow-sm relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-1">{member.name}</h3>
                <p className="text-slate-500 font-medium text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white text-center border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Want to join our team?</h2>
          <p className="text-xl text-slate-600 mb-8">We are always looking for passionate individuals to help us expand our impact across Europe.</p>
          <Link to="/contact">
            <Button size="lg" className="rounded-full">Contact Us</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
