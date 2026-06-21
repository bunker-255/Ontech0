import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { UserCheck } from 'lucide-react';

const About: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative mb-12 lg:mb-0">
            <div className="absolute inset-0 bg-brand-600 rounded-3xl transform rotate-3 translate-x-2 translate-y-2 opacity-10"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-100">
               <img
                src="https://raw.githubusercontent.com/bunker-255/onTech/refs/heads/main/photo/Server.jpg"
                alt="Server Room Assembly"
                className="w-full h-auto object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-slate-900/90 to-transparent p-8">
                <div className="flex items-center text-white">
                  <UserCheck className="w-8 h-8 mr-3 rtl:ml-3 rtl:mr-0 text-brand-400" />
                  <div>
                    <p className="font-bold text-lg">Field Verified</p>
                    <p className="text-sm text-slate-300">Professional Installation Team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-10 rtl:lg:pl-0 rtl:lg:pr-10">
            <h2 className="text-4xl font-black text-slate-900 mb-6">
              {content.about.title}
            </h2>
            <h3 className="text-xl text-brand-600 font-bold mb-6">
              {content.about.subtitle}
            </h3>
            
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>{content.about.description1}</p>
              <p>{content.about.description2}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;