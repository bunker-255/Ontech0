import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Activity, ExternalLink } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { scrollToSection } from '../utils/scroll';

const Footer: React.FC = () => {
  const { content } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: content.nav.home, href: '#home' },
    { name: content.nav.services, href: '#services' },
    { name: content.nav.process, href: '#process' },
    { name: content.nav.about, href: '#about' },
    { name: content.nav.gallery, href: '#gallery' },
    { name: content.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/' + href);
    } else {
      scrollToSection(e, href);
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-slate-900 rounded-lg text-brand-500 flex items-center justify-center mr-3 rtl:ml-3 border border-slate-800">
                 <Activity size={24} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-bold text-slate-200 tracking-tight">
                on<span className="text-brand-600">Tech</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm max-w-xs">
              {content.hero.subtitle}
            </p>
          </div>

          {/* Sitemap */}
          <div className="flex flex-col">
            <h3 className="text-slate-200 font-semibold mb-6 uppercase tracking-wider text-sm">Sitemap</h3>
            <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-slate-400 hover:text-brand-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <a 
                  href="/gallery"
                  onClick={(e) => {
                    e.preventDefault();
                    navigate('/gallery');
                    window.scrollTo(0, 0);
                  }}
                  className="text-slate-400 hover:text-brand-500 transition-colors text-sm"
                >
                  Full Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Links */}
          <div className="flex flex-col md:items-end">
            <h3 className="text-slate-200 font-semibold mb-6 uppercase tracking-wider text-sm">Legal</h3>
            <ul className="flex flex-col gap-y-3 md:items-end">
              <li><span className="text-slate-400 hover:text-brand-500 transition-colors text-sm cursor-pointer">Privacy Policy</span></li>
              <li><span className="text-slate-400 hover:text-brand-500 transition-colors text-sm cursor-pointer">Terms of Service</span></li>
              <li className="mt-4">
                <a
                  href="https://bunker-255.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-xs font-black uppercase tracking-wider text-slate-400 bg-slate-900 hover:bg-slate-800 hover:text-white border border-slate-800 hover:border-slate-700 rounded-full transition-all duration-300"
                >
                  <span>BUNKER-255</span>
                  <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-900/50 text-sm text-center md:text-left flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} onTech Israel. {content.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;