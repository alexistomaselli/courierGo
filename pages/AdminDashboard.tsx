
import React from 'react';
import { STATS, MOCK_PACKAGES } from '../constants';
import { PackageStatus } from '../types';
import { useLanguage } from '../context/LanguageContext';

const AdminDashboard: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-4xl font-black tracking-tight dark:text-white">{t('admin.overview')}</h2>
          <p className="text-slate-500 mt-1 font-bold uppercase tracking-widest text-xs">{t('admin.sub')}</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm">
          <span className="material-symbols-outlined text-base">download</span>
          {t('admin.report')}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: t('admin.stats.active'), value: STATS.totalActive, trend: STATS.activeTrend, icon: 'package_2', color: 'primary' },
          { label: t('admin.stats.delivered'), value: STATS.delivered, trend: STATS.deliveredTrend, icon: 'task_alt', color: 'emerald-500' },
          { label: t('admin.stats.users'), value: STATS.registeredUsers, trend: STATS.usersTrend, icon: 'person_add', color: 'amber-500' },
          { label: t('admin.stats.revenue'), value: STATS.estimatedRevenue, trend: STATS.revenueTrend, icon: 'monetization_on', color: 'blue-500' },
        ].map((kpi, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 bg-primary/10 text-primary rounded-xl`}>
                <span className="material-symbols-outlined text-2xl">{kpi.icon}</span>
              </div>
              <span className="text-[10px] font-black text-emerald-500 flex items-center gap-1 bg-emerald-500/10 px-2 py-1 rounded-full uppercase tracking-tighter">
                {kpi.trend}
              </span>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest">{kpi.label}</p>
            <h3 className="text-3xl font-black mt-1 dark:text-white tabular-nums">{kpi.value.toLocaleString()}</h3>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
        <div className="p-8 border-b border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-black dark:text-white">{t('admin.table.title')}</h3>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">{t('admin.table.sub')}</p>
          </div>
          <button className="flex items-center gap-2 px-6 py-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            {t('admin.table.filter')}
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">{t('admin.table.id')}</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">{t('admin.table.client')}</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">{t('admin.table.status')}</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">{t('admin.table.weight')}</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500">{t('admin.table.updated')}</th>
                <th className="px-8 py-5 text-[10px] font-black uppercase tracking-widest text-slate-500 text-right">{t('admin.table.actions')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {MOCK_PACKAGES.map((pkg) => (
                <tr key={pkg.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/20 transition-all">
                  <td className="px-8 py-5 font-mono text-sm text-primary font-black">{pkg.trackingId}</td>
                  <td className="px-8 py-5 font-bold dark:text-white">{pkg.client}</td>
                  <td className="px-8 py-5"><span className="text-[9px] font-black uppercase px-2 py-1 rounded-full bg-primary/10 text-primary">{pkg.status}</span></td>
                  <td className="px-8 py-5 text-xs font-bold">{pkg.weight}</td>
                  <td className="px-8 py-5 text-xs text-slate-500">{pkg.lastUpdated}</td>
                  <td className="px-8 py-5 text-right"><span className="material-symbols-outlined text-slate-400">more_vert</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
