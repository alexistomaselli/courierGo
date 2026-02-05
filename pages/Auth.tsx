
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Auth: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleAuth = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/admin');
  };

  return (
    <div className="flex min-h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-background-dark/95 z-10"></div>
        <div className="relative z-20 w-full flex flex-col justify-between p-12 text-white">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-4xl">local_shipping</span>
            <h2 className="text-2xl font-black">CourierGo</h2>
          </div>
          <div className="max-w-md">
            <h1 className="text-6xl font-black leading-tight mb-6">Efficiency in every move.</h1>
            <p className="text-xl text-white/80">Manage your entire supply chain from one single place.</p>
          </div>
          <div className="text-xs text-white/40">© 2024 CourierGo International</div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 relative">
        <div className="absolute top-8 right-8">
           <LanguageSwitcher variant="full" />
        </div>
        <div className="w-full max-w-md space-y-10">
          <div className="flex border-b border-slate-200 dark:border-slate-800">
            <button onClick={() => setIsLogin(true)} className={`flex-1 pb-4 text-sm font-bold ${isLogin ? 'border-b-2 border-primary text-primary' : 'text-slate-50'}`}>{t('auth.loginTab')}</button>
            <button onClick={() => setIsLogin(false)} className={`flex-1 pb-4 text-sm font-bold ${!isLogin ? 'border-b-2 border-primary text-primary' : 'text-slate-50'}`}>{t('auth.signupTab')}</button>
          </div>

          <div className="space-y-2">
            <h3 className="text-3xl font-black tracking-tight dark:text-white">{isLogin ? t('auth.welcome') : t('auth.create')}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{isLogin ? t('auth.descLogin') : t('auth.descSignup')}</p>
          </div>

          <form className="space-y-6" onSubmit={handleAuth}>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-slate-500">{t('auth.email')}</label>
              <input className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none text-sm" placeholder="jane@company.com" type="email" required />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500">{t('auth.password')}</label>
                {isLogin && <a className="text-[10px] font-black text-primary uppercase" href="#">{t('auth.forgot')}</a>}
              </div>
              <input className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl outline-none text-sm" placeholder="••••••••" type="password" required />
            </div>
            <button className="w-full py-4 bg-primary text-white font-black rounded-xl shadow-2xl uppercase tracking-widest text-sm" type="submit">
              {isLogin ? t('auth.submitLogin') : t('auth.submitSignup')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
