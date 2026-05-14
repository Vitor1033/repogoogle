import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <>
      {/* Institutional Support Logos */}
      <div className="bg-white py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 max-w-4xl mx-auto">
              
              {/* Logo 1 */}
              <div className="flex-1 flex justify-center md:justify-start w-full">
                <div className="flex border border-slate-200 w-full max-w-sm h-full">
                   <div className="w-1/2 p-4 flex flex-col items-center justify-center text-center">
                     <div className="w-12 h-12 mb-3 text-[#5d1830] border-2 border-[#5d1830] p-1 flex items-center justify-center rounded-sm transform rotate-45">
                        <div className="transform -rotate-45 font-bold text-xs">🤝</div>
                     </div>
                     <span className="text-[8px] font-bold text-slate-800 leading-tight">PROGRAMA PARA EL APOYO A LA<br/>CONTRATACIÓN DE PERSONAS<br/>DESEMPLEADAS DE LARGA DURACIÓN</span>
                   </div>
                   <div className="w-1/2 p-4 bg-[#5d1830] text-white flex flex-col justify-between items-center text-center">
                     <span className="text-[9px] font-semibold leading-tight font-sans">empresa subvencionada<br/>en el marco del programa<br/>de apoyo a la contratación de<br/>personas desempleadas de<br/>larga duración</span>
                     <div className="mt-4">
                       <span className="text-3xl font-serif leading-none italic block">M</span>
                       <span className="text-[7px] tracking-widest mt-1 block">diputación de málaga</span>
                     </div>
                   </div>
                </div>
              </div>
              
              {/* Logo 2 */}
              <div className="flex-1 flex justify-center md:justify-end w-full">
                <div className="flex flex-col w-full max-w-sm h-full">
                   <div className="bg-[#21395b] text-white p-4 flex items-center gap-3">
                      <div className="flex items-center gap-1 font-bold text-xl">
                        <div className="flex gap-0.5">
                          <div className="w-1.5 h-1.5 bg-white rounded-full mt-2"></div>
                          <div className="w-1.5 h-3 bg-white rounded-full mt-1"></div>
                          <div className="w-1.5 h-4 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <div className="font-semibold text-xs leading-tight tracking-wide border-l border-white/30 pl-3">Diputación Provincial<br/>de Málaga</div>
                   </div>
                   <div className="p-5 border border-t-0 border-slate-200 flex-1 flex flex-col bg-white">
                     <h4 className="text-[#21395b] font-bold text-lg leading-tight mb-4 tracking-tight">Empresa<br/>subvencionada<br/>por la<br/>Diputación<br/>de Málaga</h4>
                     <p className="text-[9px] text-slate-800 leading-tight font-medium mt-auto">Convocatoria para la concesión de<br/>subvenciones de apoyo a la<br/>contratación de personas desempleadas</p>
                   </div>
                </div>
              </div>

           </div>
        </div>
      </div>

      <footer className="bg-slate-900 border-t border-slate-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand */}
          <div className="space-y-6">
             <Link to="/" className="flex items-center gap-2 group">
                <div className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center text-white font-bold tracking-tighter">
                  EE
                </div>
                <span className="font-semibold text-xl text-white">European Era</span>
              </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Empowering students and professionals through international mobility, Erasmus programs, and top-tier internship placements across Europe.
            </p>
            <div className="flex items-center space-x-4">
              {/* Dummy Social Links */}
              <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                 <span className="sr-only">LinkedIn</span>
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
              </a>
               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                 <span className="sr-only">Twitter</span>
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
              </a>
               <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                 <span className="sr-only">Instagram</span>
                 <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white tracking-wide mb-5">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/opportunities" className="hover:text-primary transition-colors">Opportunities</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/how-it-works" className="hover:text-primary transition-colors">How It Works</Link></li>
              <li><Link to="/partners" className="hover:text-primary transition-colors">Partners</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
             <h3 className="font-semibold text-white tracking-wide mb-5">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/blog" className="hover:text-primary transition-colors">Blog & Tips</Link></li>
              <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link to="/resources" className="hover:text-primary transition-colors">Guides & Downloads</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h3 className="font-semibold text-white tracking-wide mb-5">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-500 shrink-0" />
                <span>Málaga, Spain</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-500 shrink-0" />
                <span>+34 617 916 957</span>
              </li>
               <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-500 shrink-0" />
                 <a href="mailto:info@europeanera.eu" className="hover:text-primary transition-colors">
                  info@europeanera.eu
                 </a>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} European Era. Organisational ID: E10008095. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link to="/legal" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/legal" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link to="/legal" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};
