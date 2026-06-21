import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ClipboardList, PenTool, Wrench, HeadphonesIcon } from 'lucide-react';

const icons = [ClipboardList, PenTool, Wrench, HeadphonesIcon];

const Process: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section id="process" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6">{content.process.title}</h2>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">{content.process.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {content.process.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <div key={index} className="relative group">
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-700 rtl:right-1/2 rtl:left-auto"></div>
                )}
                
                <div className="relative flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-brand-500 flex items-center justify-center mb-6 z-10 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                    <Icon size={28} className="text-brand-400" />
                  </div>
                  
                  <div className="w-8 h-8 rounded-full bg-slate-800 text-slate-400 font-bold flex items-center justify-center text-sm mb-4 border border-slate-700">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;