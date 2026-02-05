
import React, { useState } from 'react';

const RegisterPackage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(2); // Mocked at step 2
  
  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark min-h-screen">
      {/* Header Breadcrumb */}
      <header className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md px-8 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-500">
          <span>Admin</span>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-slate-900 dark:text-slate-100">Register New Package</span>
        </div>
        <div className="flex items-center gap-4">
          <button className="size-10 flex items-center justify-center rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 relative">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white dark:border-background-dark"></span>
          </button>
          <button className="bg-primary text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-base">list</span>
            All Packages
          </button>
        </div>
      </header>

      <div className="p-8 max-w-6xl mx-auto w-full flex-1">
        {/* Stepper */}
        <div className="mb-12">
          <div className="flex items-center justify-between relative px-10">
            <div className="absolute top-5 left-10 right-10 h-0.5 bg-slate-200 dark:bg-slate-800 -z-0"></div>
            <div 
              className="absolute top-5 left-10 h-0.5 bg-primary -z-0 transition-all duration-500" 
              style={{ width: `${(currentStep - 1) * 33.33}%` }}
            ></div>
            
            {[
              { label: 'Client', icon: 'person' },
              { label: 'Package Info', icon: 'inventory_2' },
              { label: 'Pricing', icon: 'payments' },
              { label: 'Status', icon: 'published_with_changes' },
            ].map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center gap-3">
                <div className={`size-11 rounded-full flex items-center justify-center ring-8 ring-background-light dark:ring-background-dark transition-all duration-500 ${
                  idx + 1 <= currentStep ? 'bg-primary text-white shadow-xl shadow-primary/30 scale-110' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'
                }`}>
                  <span className="material-symbols-outlined text-lg">{step.icon}</span>
                </div>
                <span className={`text-[10px] font-black uppercase tracking-widest ${idx + 1 <= currentStep ? 'text-primary' : 'text-slate-400'}`}>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-step Form Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Column: Form Details */}
          <div className="lg:col-span-2 space-y-8">
            <section className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
              <h2 className="text-xl font-black mb-8 flex items-center gap-3 dark:text-white">
                <span className="material-symbols-outlined text-primary">info</span>
                Package Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="col-span-1 md:col-span-2">
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">Select Client</label>
                  <div className="relative group">
                    <input 
                      className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl py-3.5 pl-12 pr-12 text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all dark:text-white" 
                      type="text" 
                      defaultValue="Global Logistics Corp (ID: GLC-992)" 
                    />
                    <span className="material-symbols-outlined absolute left-4 top-3.5 text-slate-400 group-focus-within:text-primary transition-colors">search</span>
                    <span className="material-symbols-outlined absolute right-4 top-3.5 text-slate-400">unfold_more</span>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">Tracking ID</label>
                  <input 
                    className="w-full bg-slate-100 dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-2xl py-3.5 px-5 text-sm font-mono text-slate-500" 
                    readOnly 
                    type="text" 
                    value="LT-7782-9901" 
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">Content Type</label>
                  <select className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl py-3.5 px-5 text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all dark:text-white appearance-none">
                    <option>Standard Freight</option>
                    <option>Fragile / Glass</option>
                    <option>Electronics</option>
                    <option>Perishables</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">Weight (lbs)</label>
                  <div className="flex group">
                    <input className="flex-1 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-l-2xl py-3.5 px-5 text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all dark:text-white" step="0.1" type="number" defaultValue="12.5" />
                    <span className="bg-slate-100 dark:bg-slate-700 border border-l-0 border-slate-200 dark:border-slate-700 rounded-r-2xl px-6 flex items-center text-[10px] font-black text-slate-500 uppercase tracking-widest">LBS</span>
                  </div>
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-3">Dimensions (L x W x H)</label>
                  <input className="w-full bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-2xl py-3.5 px-5 text-sm focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all dark:text-white" placeholder="10 x 10 x 5 in" type="text" />
                </div>
              </div>
            </section>

            <section className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
              <h2 className="text-xl font-black mb-8 flex items-center gap-3 dark:text-white">
                <span className="material-symbols-outlined text-primary">photo_camera</span>
                Package Photos
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div className="aspect-square rounded-2xl border-2 border-dashed border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-slate-400 hover:border-primary hover:text-primary cursor-pointer transition-all group hover:bg-primary/5">
                  <span className="material-symbols-outlined text-3xl group-hover:scale-125 transition-transform duration-300">add_a_photo</span>
                  <span className="text-[9px] font-black uppercase mt-3 tracking-widest">Upload</span>
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 relative group shadow-lg">
                  <img alt="Package" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLfHy_lwaJX2LxvrqW6bfmVeao5YFJjIwwCQvr73STirvwutQcR7rkfn9AdhfBxZi_IOUCkf3UeaLUjXEeCEky8MQ8iCSPBwJklAxCLHX7BJgaX3p28L-SCGMSQ3Af2ymRMOREbWWPGjxJsod1LLHw75d0U9Am6rBcaCyxyDta1FBkEJONfZlxRrgBql4S-O7oqqCpWl8neK3YUN_dkWdygWT6L6kiVN_8gMu0XfPR7sANGwqturpPHJ4OEY72TmSrDOKXWBgnd1E" />
                  <button className="absolute top-2 right-2 bg-red-500 text-white size-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all shadow-xl hover:scale-110">
                    <span className="material-symbols-outlined text-sm font-black">close</span>
                  </button>
                </div>
              </div>
              <p className="mt-5 text-[10px] text-slate-400 font-bold uppercase tracking-widest">Accepts JPG, PNG. Max 5MB per file.</p>
            </section>
          </div>

          {/* Right Column: Pricing & Actions */}
          <div className="space-y-8">
            <div className="bg-primary text-white rounded-[2rem] p-8 shadow-2xl shadow-primary/30 relative overflow-hidden group">
              <div className="absolute -right-12 -bottom-12 text-white/10 transition-transform duration-700 group-hover:scale-125 group-hover:-rotate-12">
                <span className="material-symbols-outlined !text-[12rem]">monetization_on</span>
              </div>
              <h3 className="text-xs font-black uppercase tracking-widest text-white/70 mb-8 flex items-center justify-between">
                Price Calculation
                <span className="material-symbols-outlined text-base">info</span>
              </h3>
              <div className="space-y-5 relative z-10">
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-white/80">Base Rate (12.5 lbs x $2.50)</span>
                  <span className="font-mono">$31.25</span>
                </div>
                <div className="flex justify-between items-center text-sm font-medium">
                  <span className="text-white/80">Insurance (Standard)</span>
                  <span className="font-mono">$5.00</span>
                </div>
                <div className="flex items-center gap-2 py-4">
                  <div className="h-px flex-1 bg-white/20"></div>
                </div>
                <div className="flex justify-between items-end">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/80">Estimated Total</span>
                  <span className="text-4xl font-black font-mono tracking-tighter">$36.25</span>
                </div>
              </div>
              <div className="mt-10 space-y-3 relative z-10">
                <label className="block text-[10px] font-black uppercase tracking-widest text-white/70">Manual Adjustment ($)</label>
                <input className="w-full bg-white/10 border-white/20 rounded-2xl py-3 px-5 text-sm text-white focus:ring-white focus:border-white outline-none placeholder:text-white/30 font-bold" placeholder="+/- Charges" type="number" defaultValue="0.00" />
              </div>
            </div>

            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 shadow-sm">
              <label className="block text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">Initial Status</label>
              <div className="space-y-3">
                {[
                  { id: 'received', title: 'Package Received', desc: 'Warehouse arrival', active: true },
                  { id: 'processing', title: 'In Processing', desc: 'Sortation & Inspection', active: false },
                ].map((st) => (
                  <label key={st.id} className={`flex items-center gap-4 p-5 rounded-2xl border cursor-pointer transition-all ${
                    st.active ? 'border-primary bg-primary/5 shadow-xl shadow-primary/5' : 'border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                  }`}>
                    <input checked={st.active} className="text-primary focus:ring-primary size-5 bg-transparent border-slate-300 dark:border-slate-600 rounded-full" type="radio" readOnly />
                    <div className="flex-1">
                      <p className="text-sm font-black dark:text-white">{st.title}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">{st.desc}</p>
                    </div>
                    {st.active && <span className="material-symbols-outlined text-primary text-xl">check_circle</span>}
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/50 p-6 rounded-3xl flex gap-4 animate-pulse">
              <span className="material-symbols-outlined text-amber-500 shrink-0">warning</span>
              <div className="text-[11px] text-amber-800 dark:text-amber-400">
                <p className="font-black uppercase tracking-widest mb-1">Unsaved Changes</p>
                <p className="font-medium leading-relaxed">Data will not be stored until you finalize the registration steps.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="h-24 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 px-10 flex items-center justify-between sticky bottom-0 z-10 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
        <button className="flex items-center gap-3 text-slate-500 hover:text-slate-900 dark:hover:text-slate-100 font-black transition-all uppercase tracking-widest text-[10px]">
          <span className="material-symbols-outlined">arrow_back</span>
          Back
        </button>
        <div className="flex items-center gap-4">
          <button className="px-8 py-4 border-2 border-slate-200 dark:border-slate-800 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 dark:hover:bg-slate-900 transition-all shadow-sm">
            Save as Draft
          </button>
          <button className="px-10 py-4 bg-primary text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-2xl shadow-primary/40 hover:shadow-primary/60 hover:-translate-y-1 transition-all">
            Next: Review & Confirm
          </button>
        </div>
      </footer>
    </div>
  );
};

export default RegisterPackage;
