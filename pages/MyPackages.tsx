
import React from 'react';
import { MOCK_PACKAGES } from '../constants';
import { PackageStatus } from '../types';
import { useLanguage } from '../context/LanguageContext';

const MyPackages: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="p-8 space-y-10 animate-in slide-in-from-bottom-4 duration-500">
      <div className="flex flex-wrap justify-between items-end gap-6">
        <div className="space-y-2">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">{t('customer.title')}</h2>
          <p className="text-slate-500 dark:text-[#9dabb9] font-bold uppercase tracking-widest text-xs">{t('customer.sub')}</p>
        </div>
        <button className="flex items-center gap-2 bg-[#283039] hover:bg-[#343e49] text-white px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shadow-xl shadow-black/20">
          <span className="material-symbols-outlined text-xl">add_box</span>
          {t('customer.add')}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: t('customer.stats.total'), value: '12', icon: 'package_2', color: 'primary' },
          { label: t('customer.stats.transit'), value: '4', icon: 'local_shipping', color: 'amber-500' },
          { label: t('customer.stats.toPay'), value: '$84.50', icon: 'payments', color: 'primary', highlight: true },
          { label: t('customer.stats.storage'), value: '1.2', icon: 'schedule', color: 'slate-400' },
        ].map((stat, idx) => (
          <div key={idx} className={`bg-white dark:bg-[#1c2127] p-8 rounded-2xl border ${stat.highlight ? 'border-primary/50 ring-1 ring-primary/20 shadow-primary/10' : 'border-slate-200 dark:border-slate-800'} shadow-sm transition-all relative overflow-hidden`}>
            <div className="flex items-center justify-between mb-4">
              <p className={`text-[10px] font-black uppercase tracking-widest ${stat.highlight ? 'text-primary' : 'text-slate-500 dark:text-[#9dabb9]'}`}>{stat.label}</p>
              <span className="material-symbols-outlined text-primary">{stat.icon}</span>
            </div>
            <p className="text-4xl font-black text-slate-900 dark:text-white tabular-nums">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="space-y-6">
        <h3 className="text-xl font-black text-slate-900 dark:text-white flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">receipt_long</span>
          {t('customer.active')}
        </h3>
        {MOCK_PACKAGES.slice(0, 3).map((pkg) => (
          <div key={pkg.id} className="bg-white dark:bg-[#1c2127] rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:border-primary/50 transition-all flex flex-col md:flex-row">
            <div className="w-full md:w-64 h-48 md:h-auto overflow-hidden">
              <img className="w-full h-full object-cover" src={pkg.image} alt="" />
            </div>
            <div className="flex-1 p-8">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h4 className="text-2xl font-black text-slate-900 dark:text-white">{pkg.trackingId}</h4>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">{pkg.status}</p>
                </div>
                <button className="bg-primary text-white px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg">Detalles</button>
              </div>
              <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                <span>{t('customer.steps.pre')}</span>
                <span>{t('customer.steps.warehouse')}</span>
                <span>{t('customer.steps.transit')}</span>
                <span>{t('customer.steps.ready')}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 p-10 rounded-[2.5rem] bg-primary/10 dark:bg-primary/20 border border-primary/10 shadow-2xl flex flex-col md:flex-row items-center gap-10">
        <div className="flex-shrink-0 size-20 rounded-3xl bg-primary/20 flex items-center justify-center">
          <span className="material-symbols-outlined text-4xl text-primary">support_agent</span>
        </div>
        <div className="flex-1 text-center md:text-left">
          <h4 className="text-2xl font-black text-slate-900 dark:text-white">{t('customer.supportTitle')}</h4>
          <p className="text-slate-500 dark:text-[#9dabb9] font-medium mt-1">{t('customer.supportSub')}</p>
        </div>
        <button className="bg-white dark:bg-white text-primary font-black px-8 py-4 rounded-2xl shadow-2xl text-[11px] uppercase tracking-widest">
          {t('customer.supportCTA')}
        </button>
      </div>
    </div>
  );
};

export default MyPackages;
