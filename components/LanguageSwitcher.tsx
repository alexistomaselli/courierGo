
import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const LanguageSwitcher: React.FC<{ variant?: 'minimal' | 'full' }> = ({ variant = 'minimal' }) => {
  const { language, setLanguage } = useLanguage();

  const toggle = () => setLanguage(language === 'en' ? 'es' : 'en');

  if (variant === 'minimal') {
    return (
      <button 
        onClick={toggle}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
      >
        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 dark:text-slate-400">
          {language === 'en' ? 'EN' : 'ES'}
        </span>
        <span className="material-symbols-outlined text-sm text-slate-400">language</span>
      </button>
    );
  }

  return (
    <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700">
      <button 
        onClick={() => setLanguage('en')}
        className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
          language === 'en' ? 'bg-white dark:bg-slate-900 shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
        }`}
      >
        EN
      </button>
      <button 
        onClick={() => setLanguage('es')}
        className={`px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${
          language === 'es' ? 'bg-white dark:bg-slate-900 shadow-sm text-primary' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
        }`}
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
