import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Content } from '../types';
import { TRANSLATIONS } from '../constants';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  content: Content;
  dir: 'ltr' | 'rtl';
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Default to Hebrew as it's an Israeli site, or detect browser. Let's default to English for global appeal, then let user switch.
  // Actually, request implied Multilingual. Let's start with 'he' since loc is Israel.
  const [language, setLanguage] = useState<Language>('he');

  const content = TRANSLATIONS[language];
  const dir = language === 'he' ? 'rtl' : 'ltr';

  useEffect(() => {
    // Update the HTML dir attribute for proper layout mirroring
    document.documentElement.dir = dir;
    document.documentElement.lang = language;
  }, [dir, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, content, dir }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};