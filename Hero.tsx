import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowRight, ArrowLeft, ChevronDown } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

const Hero: React.FC = () => {
  const { content, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-tech-dark overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-tech-grid opacity-20"></div>
        <img
          src="https://images.unsplash.com/photo-1558494949-ef526bca4852?q=80&w=2668&auto=format&fit=crop"
          alt="Data Center"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-tech-dark via-tech-dark/80 to-slate-900/40"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="animate-fade-up">
           <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-brand-300 text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-md">
            Next Gen Infrastructure
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tight mb-8 drop-shadow-2xl">
            on<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-600">Tech</span>
            <br />
            <span className="text-slate-300 text-4xl md:text-6xl lg:text-7xl font-bold">{content.hero.title}</span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg md:text-2xl text-slate-400 font-light leading-relaxed animate-fade-up delay-100">
            {content.hero.subtitle}
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-6 animate-fade-up delay-200">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-brand-600 rounded-lg hover:bg-brand-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-600 focus:ring-offset-slate-900 overflow-hidden"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span>{content.hero.cta}</span>
              <ArrowIcon className="ml-3 rtl:mr-3 rtl:ml-0 w-5 h-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </a>
            <a
               href="#services"
               onClick={(e) => scrollToSection(e, '#services')}
               className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-200 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 hover:border-white/20 backdrop-blur-sm"
            >
               {content.nav.services}
            </a>
          </div>
        </div>
      </div>

      <a 
        href="#services"
        onClick={(e) => scrollToSection(e, '#services')}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 hover:text-white transition-colors cursor-pointer z-20"
      >
        <ChevronDown size={32} />
      </a>
    </div>
  );
};

export default Hero;