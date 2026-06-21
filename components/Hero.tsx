import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, ArrowLeft, ChevronDown, ShieldCheck } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const Hero: React.FC = () => {
  const { content, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div id="home" className="relative min-h-screen flex items-center bg-slate-900 overflow-hidden py-20">
      
      {/* Full Width Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop" 
          alt="Server Room" 
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/60"></div>
        {/* Tech Pattern Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-300 text-sm font-bold tracking-wide uppercase mb-6 border border-brand-500/20 backdrop-blur-sm">
               <ShieldCheck size={16} />
               <span>{content.hero.badge}</span>
            </div>
            
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 drop-shadow-lg">
              {content.hero.title} <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-200">
                {content.hero.highlight}
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-slate-300 font-medium leading-relaxed max-w-xl mb-10 border-s-4 border-brand-500 ps-6">
              {content.hero.subtitle}
            </p>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, '#contact')}
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-brand-600 rounded-lg hover:bg-brand-500 shadow-xl shadow-brand-500/20 hover:shadow-brand-500/40 hover:-translate-y-1"
              >
                <span>{content.hero.cta}</span>
                <ArrowIcon className="ml-2 rtl:mr-2 rtl:ml-0 w-5 h-5" />
              </a>
              <a
                 href="#services"
                 onClick={(e) => scrollToSection(e, '#services')}
                 className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 backdrop-blur-sm"
              >
                 {content.hero.secondaryCta}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 opacity-50">
        <ChevronDown className="text-white" size={32} />
      </div>
    </div>
  );
};

export default Hero;