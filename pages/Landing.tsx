
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from '../components/LanguageSwitcher';
import ThemeToggle from '../components/ThemeToggle';

const Landing: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-background-dark text-slate-900 dark:text-white font-display overflow-x-hidden transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 shrink-0">
              <span className="material-symbols-outlined text-2xl">local_shipping</span>
            </div>
            <span className="text-xl font-black tracking-tight truncate">CourierGo</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#features" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">{t('nav.features')}</a>
            <Link to="/admin" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">{t('nav.dashboard')}</Link>
            <a href="#pricing" className="text-sm font-bold text-slate-500 hover:text-primary transition-colors">{t('nav.pricing')}</a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <LanguageSwitcher />
            <Link to="/auth" className="text-sm font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-primary transition-colors px-2">{t('nav.login')}</Link>
            <Link to="/auth" className="bg-primary text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-105 transition-all">{t('nav.getStarted')}</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="size-10 flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 p-6 space-y-6 animate-in slide-in-from-top duration-300 shadow-2xl transition-colors duration-300">
            <div className="flex flex-col gap-6">
              <a href="#features" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 dark:text-white">{t('nav.features')}</a>
              <Link to="/admin" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 dark:text-white">{t('nav.dashboard')}</Link>
              <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="text-lg font-bold text-slate-900 dark:text-white">{t('nav.pricing')}</a>
            </div>
            <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black uppercase tracking-widest text-slate-400">Settings</span>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <LanguageSwitcher variant="full" />
                </div>
              </div>
              <Link to="/auth" className="w-full py-4 text-center text-sm font-black uppercase tracking-widest text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 rounded-xl">{t('nav.login')}</Link>
              <Link to="/auth" className="w-full py-4 text-center text-sm font-black uppercase tracking-widest bg-primary text-white rounded-xl shadow-xl shadow-primary/20">{t('nav.getStarted')}</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 lg:pt-48 pb-16 lg:pb-24 px-6 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 size-[400px] lg:size-[800px] bg-primary/10 rounded-full blur-[80px] lg:blur-[120px]"></div>
        <div className="absolute top-60 -left-20 size-[300px] lg:size-[600px] bg-blue-500/5 rounded-full blur-[60px] lg:blur-[100px]"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 lg:mb-10 animate-fade-in">
            <span className="material-symbols-outlined text-sm">auto_awesome</span>
            {t('hero.new')}
          </div>
          <h1 className="text-4xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.95] lg:leading-[0.85] mb-6 lg:mb-8">
            {t('hero.title1')} <br />
            <span className="text-primary italic">{t('hero.title2')}</span>
          </h1>
          <p className="text-lg lg:text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-10 lg:mb-14 font-medium leading-relaxed">
            {t('hero.desc')}
          </p>

          <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 p-2 lg:p-3 rounded-2xl lg:rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row gap-2 lg:gap-3 transition-colors">
            <div className="flex-1 relative flex items-center px-4 lg:px-6 py-2 lg:py-0">
              <span className="material-symbols-outlined text-slate-400 mr-4 text-2xl shrink-0">search</span>
              <input 
                type="text" 
                placeholder={t('hero.placeholder')} 
                className="w-full bg-transparent border-none focus:ring-0 text-base lg:text-lg font-bold dark:text-white placeholder:text-slate-300" 
              />
            </div>
            <button 
              onClick={() => navigate('/auth')} 
              className="bg-primary text-white px-8 lg:px-12 py-4 lg:py-5 rounded-xl lg:rounded-[2rem] font-black uppercase tracking-widest text-xs lg:text-sm hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 shadow-xl shadow-primary/25"
            >
              {t('hero.cta')}
              <span className="material-symbols-outlined text-xl">arrow_forward</span>
            </button>
          </div>

          <div className="mt-12 lg:mt-16 flex flex-wrap justify-center gap-6 lg:gap-12 opacity-30 grayscale contrast-125">
             <img src="https://upload.wikimedia.org/wikipedia/commons/b/b3/FedEx_Express_logo.svg" className="h-4 lg:h-6" alt="FedEx" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/UPS_logo_2014.svg" className="h-6 lg:h-8" alt="UPS" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/DHL_Logo.svg" className="h-3 lg:h-4" alt="DHL" />
             <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" className="h-4 lg:h-6" alt="Amazon" />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-slate-900 dark:bg-black py-12 lg:py-16 transition-colors">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {[
            { label: t('stats.packages'), value: '25M+' },
            { label: t('stats.countries'), value: '180+' },
            { label: t('stats.clients'), value: '12k' },
            { label: t('stats.uptime'), value: '99.9%' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h4 className="text-3xl lg:text-5xl font-black text-white mb-2 tracking-tighter tabular-nums">{stat.value}</h4>
              <p className="text-[9px] lg:text-xs font-black uppercase tracking-widest text-slate-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl lg:text-6xl font-black tracking-tight mb-4">{t('process.title')}</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">{t('process.sub')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-slate-100 dark:bg-slate-800 -z-0"></div>
            {[
              { title: t('process.step1Title'), desc: t('process.step1Desc'), icon: 'edit_document' },
              { title: t('process.step2Title'), desc: t('process.step2Desc'), icon: 'forklift' },
              { title: t('process.step3Title'), desc: t('process.step3Desc'), icon: 'verified_user' },
            ].map((step, i) => (
              <div key={i} className="relative z-10 text-center flex flex-col items-center">
                <div className="size-20 lg:size-24 rounded-2xl lg:rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl flex items-center justify-center text-primary mb-6 lg:mb-8 group hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl lg:text-4xl">{step.icon}</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-black mb-3 lg:mb-4">{step.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm lg:text-base font-medium leading-relaxed max-w-xs">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section id="features" className="py-20 lg:py-32 px-6 bg-slate-50 dark:bg-slate-900/50 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center mb-20 lg:mb-32">
            <div>
              <h2 className="text-3xl lg:text-7xl font-black tracking-tight leading-[1] lg:leading-[0.9] mb-6 lg:mb-8">
                {t('featuresSection.title1')} <br /> 
                <span className="text-primary">{t('featuresSection.title2')}</span>
              </h2>
              <p className="text-base lg:text-lg text-slate-500 font-medium leading-relaxed mb-8 lg:mb-10">{t('featuresSection.desc')}</p>
              <div className="space-y-4">
                {[t('featuresSection.item1'), t('featuresSection.item2'), t('featuresSection.item3')].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs lg:text-sm font-bold">
                    <span className="material-symbols-outlined text-primary">check_circle</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/20 blur-[60px] lg:blur-[100px] group-hover:bg-primary/30 transition-all"></div>
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" className="rounded-2xl lg:rounded-[3rem] shadow-2xl border border-white/10 relative z-10" alt="Warehouse Intelligence" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { icon: 'analytics', title: t('featuresSection.card1Title'), desc: t('featuresSection.card1Desc') },
              { icon: 'security', title: t('featuresSection.card2Title'), desc: t('featuresSection.card2Desc') },
              { icon: 'hub', title: t('featuresSection.card3Title'), desc: t('featuresSection.card3Desc') },
            ].map((f, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-8 lg:p-12 rounded-2xl lg:rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className="size-14 lg:size-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6 lg:mb-8">
                  <span className="material-symbols-outlined text-3xl">{f.icon}</span>
                </div>
                <h3 className="text-xl lg:text-2xl font-black mb-3 lg:mb-4">{f.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm lg:text-base font-medium leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 lg:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 lg:mb-20">
            <h2 className="text-3xl lg:text-6xl font-black tracking-tight mb-4">{t('pricingSection.title')}</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">{t('pricingSection.sub')}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { name: t('pricingSection.basic'), price: '0', features: [t('pricingSection.feature1'), t('pricingSection.feature2')] },
              { name: t('pricingSection.pro'), price: '49', features: [t('pricingSection.feature1'), t('pricingSection.feature2'), t('pricingSection.feature3')], popular: true },
              { name: t('pricingSection.enterprise'), price: '199', features: [t('pricingSection.feature1'), t('pricingSection.feature2'), t('pricingSection.feature3'), t('pricingSection.feature4'), t('pricingSection.feature5')] },
            ].map((plan, i) => (
              <div key={i} className={`p-8 lg:p-10 rounded-2xl lg:rounded-[3rem] border relative ${plan.popular ? 'border-primary bg-primary/5 shadow-2xl' : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'} transition-colors duration-300`}>
                {plan.popular && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">Most Popular</span>
                )}
                <h3 className="text-xl font-black mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6 lg:mb-8">
                  <span className="text-4xl lg:text-5xl font-black tracking-tighter">${plan.price}</span>
                  <span className="text-slate-500 font-bold text-xs lg:text-sm">{t('pricingSection.perMonth')}</span>
                </div>
                <ul className="space-y-3 lg:space-y-4 mb-8 lg:mb-10">
                  {plan.features.map((feat, j) => (
                    <li key={j} className="flex items-center gap-3 text-xs lg:text-sm font-medium text-slate-600 dark:text-slate-400">
                      <span className="material-symbols-outlined text-primary text-lg">check</span>
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-xl lg:rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all ${plan.popular ? 'bg-primary text-white shadow-xl shadow-primary/30' : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'}`}>
                  {t('pricingSection.cta')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 px-6 bg-slate-50 dark:bg-slate-900/50 transition-colors">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-black text-center mb-10 lg:mb-16">{t('faq.title')}</h2>
          <div className="space-y-4">
            {[
              { q: t('faq.q1'), a: t('faq.a1') },
              { q: t('faq.q2'), a: t('faq.a2') },
              { q: t('faq.q3'), a: t('faq.a3') },
            ].map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl lg:rounded-3xl overflow-hidden shadow-sm transition-colors duration-300">
                <button 
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-6 lg:px-8 py-5 lg:py-6 flex items-center justify-between text-left group"
                >
                  <span className="font-bold text-base lg:text-lg pr-4">{item.q}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 text-slate-400 group-hover:text-primary ${activeFaq === i ? 'rotate-180' : ''}`}>expand_more</span>
                </button>
                {activeFaq === i && (
                  <div className="px-6 lg:px-8 pb-5 lg:pb-6 animate-in fade-in slide-in-from-top-2">
                    <p className="text-sm lg:text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 lg:py-24 px-6 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6 lg:mb-8">
              <div className="size-8 lg:size-10 bg-primary rounded-lg lg:rounded-xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-xl lg:text-2xl">local_shipping</span>
              </div>
              <span className="text-lg lg:text-xl font-black tracking-tight">CourierGo</span>
            </div>
            <p className="text-sm lg:text-base text-slate-500 max-w-sm leading-relaxed font-medium">{t('footer.desc')}</p>
          </div>
          <div className="col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 lg:mb-8">{t('footer.product')}</h4>
            <ul className="space-y-3 lg:space-y-4 text-xs lg:text-sm font-bold text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary">{t('footer.tracking')}</a></li>
              <li><a href="#" className="hover:text-primary">{t('footer.analytics')}</a></li>
              <li><a href="#" className="hover:text-primary">{t('footer.automation')}</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 lg:mb-8">{t('footer.company')}</h4>
            <ul className="space-y-3 lg:space-y-4 text-xs lg:text-sm font-bold text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary">{t('footer.about')}</a></li>
              <li><a href="#" className="hover:text-primary">{t('footer.careers')}</a></li>
              <li><a href="#" className="hover:text-primary">{t('footer.contact')}</a></li>
            </ul>
          </div>
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6 lg:mb-8">{t('footer.legal')}</h4>
            <ul className="space-y-3 lg:space-y-4 text-xs lg:text-sm font-bold text-slate-600 dark:text-slate-400">
              <li><a href="#" className="hover:text-primary">{t('footer.privacy')}</a></li>
              <li><a href="#" className="hover:text-primary">{t('footer.terms')}</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-16 lg:mt-24 pt-8 lg:pt-10 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] lg:text-xs text-slate-400 font-medium text-center">© 2024 CourierGo International. {t('footer.rights')}</p>
          <div className="flex items-center gap-6">
             <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg lg:text-xl">public</span></a>
             <a href="#" className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined text-lg lg:text-xl">share</span></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
