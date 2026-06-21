import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Server, Zap, Cable, Shield, Phone, Eye, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types';

const ServiceCard: React.FC<{ item: ServiceItem; icon: React.ReactNode; dark?: boolean }> = ({ item, icon, dark }) => {
  return (
    <div className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
      dark 
        ? 'bg-slate-900 border-slate-800 text-white' 
        : 'bg-white border-slate-100 text-slate-900 shadow-sm'
    }`}>
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
        dark ? 'bg-slate-800 text-brand-400' : 'bg-brand-50 text-brand-600'
      }`}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
      <p className={`mb-6 leading-relaxed ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
        {item.description}
      </p>
      <ul className="space-y-3">
        {item.features.map((feature, idx) => (
          <li key={idx} className="flex items-start text-sm font-medium">
            <CheckCircle2 className={`w-5 h-5 mr-3 rtl:ml-3 rtl:mr-0 shrink-0 ${dark ? 'text-brand-500' : 'text-green-500'}`} />
            <span className={dark ? 'text-slate-300' : 'text-slate-700'}>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-600 font-bold tracking-widest uppercase text-sm mb-3">
            {content.services.sectionTitle}
          </h2>
          <p className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight mb-6">
            {content.services.sectionSubtitle}
          </p>
        </div>

        {/* Part 1: Security & Communication (Priority) */}
        <div className="mb-24">
          <div className="flex items-center mb-10">
            <div className="h-px flex-1 bg-slate-200"></div>
            <span className="px-4 text-xl font-bold text-slate-400 uppercase tracking-widest">{content.services.securityTitle}</span>
            <div className="h-px flex-1 bg-slate-200"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              item={content.services.cctv} 
              icon={<Eye size={32} />} 
              dark={true} // Highlighting Security as premium/dark
            />
            <ServiceCard 
              item={content.services.alarms} 
              icon={<Shield size={32} />} 
              dark={true}
            />
            <ServiceCard 
              item={content.services.telephony} 
              icon={<Phone size={32} />} 
              dark={true}
            />
          </div>
        </div>

        {/* Part 2: Infrastructure */}
        <div>
          <div className="flex items-center mb-10">
            <div className="h-px flex-1 bg-slate-200"></div>
            <span className="px-4 text-xl font-bold text-slate-400 uppercase tracking-widest">{content.services.infraTitle}</span>
            <div className="h-px flex-1 bg-slate-200"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard 
              item={content.services.networking} 
              icon={<Cable size={32} />} 
            />
            <ServiceCard 
              item={content.services.fiber} 
              icon={<Zap size={32} />} 
            />
            <ServiceCard 
              item={content.services.racks} 
              icon={<Server size={32} />} 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;