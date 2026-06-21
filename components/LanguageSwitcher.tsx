import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';
import { Language } from '../types';

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <div className="flex items-center space-x-1 rtl:space-x-reverse bg-slate-100 rounded-full p-1 border border-slate-200">
      <Globe className="w-4 h-4 text-slate-500 mx-2" />
      {(['he', 'en', 'ru'] as Language[]).map((lang) => (
        <button
          key={lang}
          onClick={() => toggleLanguage(lang)}
          className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
            language === lang
              ? 'bg-brand-600 text-white shadow-sm'
              : 'text-slate-600 hover:bg-slate-200'
          }`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;