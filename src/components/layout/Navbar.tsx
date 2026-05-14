import React from 'react';
import { cn } from '../../lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '../ui/Button';
import { Menu, X, Globe, ChevronRight } from 'lucide-react';
import { useAuth } from '../../lib/AuthContext';

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { user, signIn, logOut } = useAuth();

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Opportunities', href: '/opportunities' },
    { name: 'Services', href: '/services' },
    { name: 'Malaga', href: '/malaga' },
    { name: 'Partners', href: '/partners' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-slate-200 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-10 py-3 sm:py-4 flex justify-between items-center bg-white">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl leading-none pt-0.5">E</span>
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900 group-hover:text-primary transition-colors">European Era</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex ml-10 space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA & Actions */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <Link to="/dashboard" className="px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-full transition-all">
                Dashboard
              </Link>
              <button onClick={logOut} className="px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-full transition-all">
                Logout
              </button>
            </>
          ) : (
            <button onClick={signIn} className="px-5 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 rounded-full transition-all">
              Login
            </button>
          )}
          <Button variant="secondary" href="/apply" className="px-6 py-2.5 text-sm">
            Apply Now
          </Button>
        </div>

        {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg absolute w-full max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navigation.map((item) => (
               <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md"
              >
                {item.name}
              </Link>
            ))}
             {user ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md border-t border-slate-100 mt-2"
                  >
                    Dashboard
                  </Link>
                  <button
                    onClick={() => { logOut(); setIsOpen(false); }}
                    className="w-full text-left block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md"
                  >
                    Logout
                  </button>
                </>
             ) : (
                <button
                  onClick={() => { signIn(); setIsOpen(false); }}
                  className="w-full text-left block px-3 py-3 text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 rounded-md border-t border-slate-100 mt-2"
                >
                  Login
                </button>
             )}
             <div className="mt-4 px-3">
               <Button href="/apply" onClick={() => setIsOpen(false)} className="w-full justify-center">
                 Apply Now
               </Button>
             </div>
          </div>
        </div>
      )}
    </header>
  );
};
