
import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserProfile } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface SidebarProps {
  user: UserProfile;
  mode: 'admin' | 'customer';
}

const Sidebar: React.FC<SidebarProps> = ({ user, mode }) => {
  const { t } = useLanguage();
  
  const adminLinks = [
    { to: '/admin', icon: 'dashboard', label: t('sidebar.dashboard') },
    { to: '/admin/packages', icon: 'package_2', label: t('sidebar.packages') },
    { to: '/admin/clients', icon: 'groups', label: t('sidebar.clients') },
    { to: '/admin/rates', icon: 'payments', label: t('sidebar.rates') },
    { to: '/admin/logs', icon: 'receipt_long', label: t('sidebar.logs') },
  ];

  const customerLinks = [
    { to: '/customer', icon: 'inventory_2', label: t('sidebar.myPackages') },
    { to: '/customer/history', icon: 'history', label: t('sidebar.history') },
    { to: '/customer/profile', icon: 'account_circle', label: t('sidebar.profile') },
    { to: '/customer/settings', icon: 'settings', label: t('sidebar.settings') },
  ];

  const links = mode === 'admin' ? adminLinks : customerLinks;

  return (
    <aside className="w-64 flex-shrink-0 flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111418] h-screen sticky top-0 transition-colors duration-300">
      <div className="p-6 flex items-center gap-3">
        <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
          <span className="material-symbols-outlined text-2xl">local_shipping</span>
        </div>
        <div>
          <h1 className="text-xl font-black tracking-tight dark:text-white leading-none">
            {mode === 'admin' ? t('sidebar.adminTitle') : t('sidebar.customerTitle')}
          </h1>
          {mode === 'customer' && (
            <p className="text-[#9dabb9] text-[10px] font-bold uppercase tracking-wider mt-1">
              {t('sidebar.customerSub')}
            </p>
          )}
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-1 mt-4">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === (mode === 'admin' ? '/admin' : '/customer')}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 font-medium ${
                isActive
                  ? 'bg-primary/10 text-primary dark:bg-primary/20 dark:border-l-4 dark:border-primary dark:rounded-l-none'
                  : 'text-slate-600 dark:text-[#9dabb9] hover:bg-slate-100 dark:hover:bg-[#1c2127] hover:text-slate-900 dark:hover:text-white'
              }`
            }
          >
            <span className="material-symbols-outlined">{link.icon}</span>
            <span className="text-sm">{link.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 mt-auto border-t border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-3 mb-4 p-2 rounded-xl dark:bg-[#1c2127] border border-transparent dark:border-slate-800/50">
          <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden shrink-0 border-2 border-primary/20 shadow-inner">
            <img className="w-full h-full object-cover scale-110" src={user.avatar} alt={user.name} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-black truncate dark:text-white">{user.name}</p>
            <p className="text-[10px] font-bold text-slate-500 dark:text-[#9dabb9] truncate uppercase tracking-tighter">
              {user.role} {mode === 'customer' && `| ${user.id}`}
            </p>
          </div>
        </div>
        {mode === 'admin' && (
          <button className="w-full flex items-center justify-center gap-2 bg-primary text-white py-2.5 rounded-lg font-bold text-xs hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-base">support_agent</span>
            {t('sidebar.support')}
          </button>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
