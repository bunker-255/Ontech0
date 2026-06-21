import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Plus, Minus } from 'lucide-react';

const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-brand-600' : 'text-slate-800 group-hover:text-brand-600'}`}>
          {question}
        </span>
        <div className={`ml-4 rtl:mr-4 rtl:ml-0 p-1 rounded-full ${isOpen ? 'bg-brand-100 text-brand-600' : 'bg-slate-100 text-slate-500'}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-slate-600 leading-relaxed pr-8 rtl:pl-8 rtl:pr-0">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const { content } = useLanguage();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-slate-900 mb-4">{content.faq.title}</h2>
          <p className="text-slate-500">{content.faq.subtitle}</p>
        </div>

        <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 shadow-sm">
          {content.faq.items.map((item, index) => (
            <FAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;