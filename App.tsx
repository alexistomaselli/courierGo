
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Auth from './pages/Auth';
import Landing from './pages/Landing';
import AdminDashboard from './pages/AdminDashboard';
import MyPackages from './pages/MyPackages';
import RegisterPackage from './pages/RegisterPackage';
import DemoSwitcher from './components/DemoSwitcher';
import LanguageSwitcher from './components/LanguageSwitcher';
import ThemeToggle from './components/ThemeToggle';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import { ADMIN_PROFILE, CUSTOMER_PROFILE } from './constants';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark font-display relative transition-colors duration-300">
      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar Container */}
      <div className={`fixed inset-y-0 left-0 z-[70] transition-transform duration-300 transform lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar user={ADMIN_PROFILE} mode="admin" />
      </div>

      <main className="flex-1 flex flex-col overflow-y-auto min-w-0">
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50 px-4 lg:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden size-10 flex items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 shrink-0"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
            <div className="relative w-full max-w-xl group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors text-lg">search</span>
              <input 
                className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl pl-12 pr-4 py-2.5 text-xs font-medium focus:ring-4 focus:ring-primary/10 transition-all dark:text-white" 
                placeholder="Search..." 
                type="text" 
              />
            </div>
          </div>
          <div className="flex items-center gap-1 lg:gap-3 shrink-0">
            <div className="hidden sm:flex items-center gap-2">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
            <button className="size-10 lg:size-11 flex items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 relative transition-all">
              <span className="material-symbols-outlined text-2xl">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
            </button>
            <button className="hidden sm:flex size-11 items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all">
              <span className="material-symbols-outlined text-2xl">settings</span>
            </button>
          </div>
        </header>
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </main>
    </div>
  );
};

const CustomerLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark font-display relative transition-colors duration-300">
      {/* Sidebar Overlay for Mobile */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-[60] lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar Container */}
      <div className={`fixed inset-y-0 left-0 z-[70] transition-transform duration-300 transform lg:relative lg:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar user={CUSTOMER_PROFILE} mode="customer" />
      </div>

      <main className="flex-1 overflow-y-auto min-w-0 flex flex-col">
        <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50 px-4 lg:px-8 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden size-10 flex items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400"
            >
              <span className="material-symbols-outlined text-2xl">menu</span>
            </button>
            <span className="lg:hidden font-black text-primary text-sm tracking-tight">CourierGo</span>
          </div>
          <div className="flex items-center gap-2 lg:gap-4">
            <ThemeToggle />
            <LanguageSwitcher />
            <button className="size-10 lg:size-11 flex items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all">
              <span className="material-symbols-outlined text-2xl">logout</span>
            </button>
          </div>
        </header>
        <div className="flex-1 min-w-0">
          {children}
        </div>
      </main>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
          <Route path="/admin/packages" element={<RegisterPackage />} />
          <Route path="/admin/clients" element={<AdminLayout><div className="p-8"><h2 className="text-2xl font-black">Clients Management</h2></div></AdminLayout>} />
          <Route path="/admin/rates" element={<AdminLayout><div className="p-8"><h2 className="text-2xl font-black">Rates & Billing</h2></div></AdminLayout>} />
          <Route path="/admin/logs" element={<AdminLayout><div className="p-8"><h2 className="text-2xl font-black">System Logs</h2></div></AdminLayout>} />
          <Route path="/customer" element={<CustomerLayout><MyPackages /></CustomerLayout>} />
          <Route path="/customer/history" element={<CustomerLayout><div className="p-8"><h2 className="text-2xl font-black">Shipping History</h2></div></CustomerLayout>} />
          <Route path="/customer/profile" element={<CustomerLayout><div className="p-8"><h2 className="text-2xl font-black">My Profile</h2></div></CustomerLayout>} />
          <Route path="/customer/settings" element={<CustomerLayout><div className="p-8"><h2 className="text-2xl font-black">Settings</h2></div></CustomerLayout>} />
          <Route path="*" element={<Landing />} />
        </Routes>
        <DemoSwitcher />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
