import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { TRANSLATIONS } from '../constants';
import { X, ChevronLeft, ChevronRight, Maximize2, ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const images = [
  "https://raw.githubusercontent.com/bunker-255/onTech/refs/heads/main/photo/Server.jpg",
  "https://raw.githubusercontent.com/bunker-255/onTech/refs/heads/main/photo/alert_sys.jpg",
  "https://raw.githubusercontent.com/bunker-255/onTech/refs/heads/main/photo/olegNixon.jpg",
  "https://raw.githubusercontent.com/bunker-255/onTech/refs/heads/main/photo/Server2.jpg",
  "https://raw.githubusercontent.com/bunker-255/onTech/refs/heads/main/photo/Server3.jpg",
  "https://raw.githubusercontent.com/bunker-255/onTech/refs/heads/main/photo/Server4.jpg",
  "https://raw.githubusercontent.com/bunker-255/onTech/refs/heads/main/photo/Server5.jpg",
  "https://raw.githubusercontent.com/bunker-255/onTech/refs/heads/main/photo/telephony.jpg"
];

export default function Gallery() {
  const { language, dir } = useLanguage();
  const content = TRANSLATIONS[language];
  const isRtl = language === 'he';
  const navigate = useNavigate();
  const BackIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeGallery = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="py-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate('/')}
          className="mb-8 inline-flex items-center text-slate-600 hover:text-brand-600 transition-colors font-medium"
        >
          <BackIcon className="w-5 h-5 mr-2 rtl:ml-2 rtl:mr-0" />
          {content.nav.home}
        </button>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {content.gallery.title}
          </h2>
          <p className="text-lg text-slate-600">
            {content.gallery.subtitle}
          </p>
        </div>

        {/* Preview Grid */}
        <div className="columns-2 gap-4 mb-12">
          {images.map((src, index) => (
            <div 
              key={index} 
              className="relative group overflow-hidden rounded-2xl cursor-pointer break-inside-avoid mb-4"
              onClick={() => openGallery(index)}
            >
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/20 transition-colors duration-300 flex items-center justify-center">
                <Maximize2 className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-8 h-8" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/95 backdrop-blur-sm flex items-center justify-center" onClick={closeGallery}>
          <button 
            onClick={closeGallery}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-50"
            aria-label={content.gallery.close}
          >
            <X className="w-8 h-8" />
          </button>

          <button 
            onClick={isRtl ? nextImage : prevImage}
            className="absolute left-6 text-white/70 hover:text-white transition-colors z-50 p-2"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div className="relative w-full max-w-5xl max-h-[80vh] px-16 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[currentIndex]} 
              alt={`Gallery image ${currentIndex + 1}`} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

          <button 
            onClick={isRtl ? prevImage : nextImage}
            className="absolute right-6 text-white/70 hover:text-white transition-colors z-50 p-2"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          
          <div className="absolute bottom-6 left-0 right-0 text-center text-white/70 font-medium tracking-widest">
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </section>
  );
}
