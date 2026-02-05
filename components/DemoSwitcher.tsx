
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DemoSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const routes = [
    { label: 'Landing Page', path: '/', icon: 'home', color: 'text-slate-400' },
    { label: 'Auth / Login', path: '/auth', icon: 'login', color: 'text-slate-400' },
    { label: 'Admin Dashboard', path: '/admin', icon: 'admin_panel_settings', color: 'text-primary' },
    { label: 'Register Package (Admin)', path: '/admin/packages', icon: 'add_box', color: 'text-primary' },
    { label: 'Customer Portal', path: '/customer', icon: 'person', color: 'text-emerald-500' },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 font-display">
      {isOpen && (
        <div className="bg-white/80 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-4 shadow-2xl w-64 animate-in slide-in-from-bottom-4 fade-in duration-300">
          <div className="flex items-center justify-between mb-4 px-2">
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Demo Navigation</span>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-slate-600 dark:hover:text-white">
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
          <div className="space-y-1">
            {routes.map((route) => (
              <button
                key={route.path}
                onClick={() => {
                  navigate(route.path);
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-3 p-3 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-left group"
              >
                <span className={`material-symbols-outlined ${route.color} group-hover:scale-110 transition-transform`}>
                  {route.icon}
                </span>
                <span className="text-xs font-bold dark:text-slate-200">{route.label}</span>
              </button>
            ))}
          </div>
          <div className="mt-4 p-3 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="text-[9px] text-primary font-bold leading-tight">
              Switch roles and views instantly for previewing the full application flow.
            </p>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`size-14 rounded-full flex items-center justify-center shadow-2xl transition-all hover:scale-110 active:scale-95 ${
          isOpen ? 'bg-slate-900 text-white' : 'bg-primary text-white ring-4 ring-primary/20'
        }`}
      >
        <span className="material-symbols-outlined text-2xl">
          {isOpen ? 'close' : 'grid_view'}
        </span>
      </button>
    </div>
  );
};

export default DemoSwitcher;
