import React, { useState, useEffect } from 'react';
import { Menu, X, Hexagon, ExternalLink } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { scrollToSection } from '../utils/scroll';
import { useNavigate, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const { content } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: content.nav.home, href: '#home' },
    { name: content.nav.services, href: '#services' },
    { name: content.nav.process, href: '#process' },
    { name: content.nav.about, href: '#about' },
    { name: content.nav.gallery, href: '#gallery' },
    { name: content.nav.contact, href: '#contact' },
  ];

  const handleLogoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/' + href);
    } else {
      scrollToSection(e, href);
    }
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md py-3 shadow-sm border-slate-200' 
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={handleLogoClick}>
            <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-3 rtl:ml-3 transition-colors duration-300 ${
              scrolled ? 'bg-brand-600 text-white' : 'bg-white text-brand-600 shadow-lg'
            }`}>
               <Hexagon size={24} strokeWidth={2.5} className={scrolled ? 'fill-brand-600 stroke-white' : 'fill-white stroke-brand-600'} />
            </div>
            <div className="flex flex-col">
              <span className={`text-2xl font-black tracking-tight leading-none ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                on<span className={scrolled ? 'text-brand-600' : 'text-brand-400'}>Tech</span>
              </span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center space-x-1 rtl:space-x-reverse rounded-full px-2`}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 text-sm font-semibold transition-colors rounded-full ${
                  scrolled 
                    ? 'text-slate-600 hover:text-brand-600 hover:bg-slate-50' 
                    : 'text-slate-200 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className={`w-px h-5 mx-4 opacity-30 ${scrolled ? 'bg-slate-300' : 'bg-white'}`}></div>
            <LanguageSwitcher />
            
            {/* BUNKER-255 Button */}
            <a
              href="https://bunker-255.com"
              target="_blank"
              rel="noopener noreferrer"
              className={`ml-4 rtl:mr-4 rtl:ml-0 flex items-center gap-2 px-4 py-1.5 text-xs font-black uppercase tracking-wider border rounded-full transition-all duration-300 ${
                scrolled 
                  ? 'border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white' 
                  : 'border-white text-white hover:bg-white hover:text-slate-900'
              }`}
            >
              <span>BUNKER-255</span>
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageSwitcher />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-slate-200 shadow-xl">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-4 py-3 rounded-lg text-lg font-medium text-slate-800 hover:bg-slate-50 hover:text-brand-600 transition-all border-b border-slate-50 last:border-0"
              >
                {link.name}
              </a>
            ))}
            
            {/* Mobile BUNKER-255 Button */}
            <a
               href="https://bunker-255.com"
               target="_blank"
               rel="noopener noreferrer"
               className="flex items-center justify-between px-4 py-3 rounded-lg text-lg font-black text-slate-900 hover:bg-slate-50 transition-all border-b border-slate-50 last:border-0"
               onClick={() => setIsOpen(false)}
            >
               <span>BUNKER-255</span>
               <ExternalLink size={18} className="text-slate-400" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;