import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TRANSLATIONS } from '../constants';
import { Maximize2, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  "https://raw.githubusercontent.com/bunker-255/onTech/refs/heads/main/photo/Server.jpg",
  "https://raw.githubusercontent.com/bunker-255/onTech/refs/heads/main/photo/alert_sys.jpg",
  "https://raw.githubusercontent.com/bunker-255/onTech/refs/heads/main/photo/olegNixon.jpg",
  "https://raw.githubusercontent.com/bunker-255/onTech/refs/heads/main/photo/Server2.jpg",
];

export default function GalleryPreview() {
  const { language, dir } = useLanguage();
  const content = TRANSLATIONS[language];
  const navigate = useNavigate();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section id="gallery" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {content.gallery.title}
          </h2>
          <p className="text-lg text-slate-600">
            {content.gallery.subtitle}
          </p>
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-2xl cursor-pointer aspect-square"
              onClick={() => navigate('/gallery')}
            >
              <img 
                src={src} 
                alt={`Gallery preview ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {content.gallery.viewAll}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button 
            onClick={() => navigate('/gallery')}
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-brand-600 border border-transparent rounded-full hover:bg-brand-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600"
          >
            <span>{content.gallery.viewAll}</span>
            <ArrowIcon className="ml-2 rtl:mr-2 rtl:ml-0 w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
