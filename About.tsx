import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Check } from 'lucide-react';

const About: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section id="about" className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="lg:col-span-6 animate-fade-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-50 border border-brand-100 text-brand-700 font-semibold text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-600 mr-2 animate-pulse"></span>
              {content.about.title}
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight">
              Building the <span className="text-brand-600 decoration-4 decoration-brand-200 underline underline-offset-4">backbone</span> of your business.
            </h2>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed font-light">
              {content.about.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div className="text-center sm:text-left rtl:sm:text-right">
                <div className="text-4xl font-black text-slate-900 mb-1">{content.about.stat1}</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{content.about.stat1Label}</div>
              </div>
              <div className="text-center sm:text-left rtl:sm:text-right">
                <div className="text-4xl font-black text-slate-900 mb-1">{content.about.stat2}</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{content.about.stat2Label}</div>
              </div>
              <div className="text-center sm:text-left rtl:sm:text-right">
                <div className="text-4xl font-black text-slate-900 mb-1">{content.about.stat3}</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider">{content.about.stat3Label}</div>
              </div>
            </div>
          </div>

          {/* Image Content - "Grand" visual */}
          <div className="lg:col-span-6 mt-16 lg:mt-0 relative">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-700">
               <img
                src="https://images.unsplash.com/photo-1544197150-b99a580bbc7c?q=80&w=1000&auto=format&fit=crop"
                alt="Structured Cabling"
                className="w-full h-[600px] object-cover filter contrast-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs border border-white/50">
                <div className="flex items-center gap-4 mb-3">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <Check size={20} strokeWidth={3} />
                  </div>
                  <span className="font-bold text-slate-800">Certified Experts</span>
                </div>
                <p className="text-slate-600 text-sm">ISO 9001 certified installation processes guaranteed.</p>
              </div>
            </div>
            
            {/* Decorative background element */}
            <div className="absolute -z-10 top-10 -right-10 w-full h-full bg-brand-100/50 rounded-[2rem] transform -rotate-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;