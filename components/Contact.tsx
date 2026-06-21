import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin, ArrowRight, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const { content } = useLanguage();

  const phoneNumber = "052-608-5951";
  const fullPhoneNumber = "+972 52-608-5951";
  const whatsappNumber = "972526085951";
  const email = "ontech@bunker-255.com";

  return (
    <section id="contact" className="relative py-32 bg-slate-900 text-white overflow-hidden">
      {/* Map Background Concept */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
         <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop" alt="World Map" className="w-full h-full object-cover grayscale" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/95 to-slate-950"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Header */}
        <div className="animate-fade-up mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight text-white">{content.contact.title}</h2>
          <p className="text-xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
            {content.contact.subtitle}
          </p>
        </div>

        {/* Main Action - WhatsApp */}
        <div className="animate-fade-up delay-100 mb-16">
          <a 
            href={`https://wa.me/${whatsappNumber}?text=Hi,%20I'm%20interested%20in%20onTech%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-10 py-6 text-xl font-bold text-white transition-all duration-300 bg-[#25D366] rounded-2xl hover:bg-[#20bd5a] hover:shadow-[0_0_40px_-10px_rgba(37,211,102,0.6)] focus:outline-none transform hover:-translate-y-1"
          >
            <MessageCircle size={32} className="mr-3" />
            <span>Chat on WhatsApp</span>
            <ArrowRight className="ml-3 rtl:mr-3 rtl:ml-0 w-6 h-6 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            
            {/* Ping effect */}
            <span className="absolute -top-2 -right-2 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-green-500"></span>
            </span>
          </a>
        </div>

        {/* Secondary Actions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-up delay-200">
          
          {/* Phone Card */}
          <a href={`tel:${whatsappNumber}`} className="group p-8 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-brand-600/20 text-brand-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Phone size={32} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Call Us</h3>
            <p className="text-slate-400 font-mono text-lg">{phoneNumber}</p>
          </a>

          {/* Email Card */}
          <a href={`mailto:${email}`} className="group p-8 rounded-3xl bg-white/5 hover:bg-white/10 border border-white/5 transition-all duration-300 hover:-translate-y-1">
            <div className="w-16 h-16 mx-auto bg-purple-600/20 text-purple-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail size={32} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Email Us</h3>
            <p className="text-slate-400 text-lg break-all">{email}</p>
          </a>

          {/* Location Card */}
          <div className="group p-8 rounded-3xl bg-white/5 border border-white/5 transition-all duration-300">
            <div className="w-16 h-16 mx-auto bg-amber-600/20 text-amber-400 rounded-2xl flex items-center justify-center mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Main Office</h3>
            <p className="text-slate-400 text-lg">{content.contact.address}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;