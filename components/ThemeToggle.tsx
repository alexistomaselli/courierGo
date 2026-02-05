
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="size-10 flex items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
      aria-label="Toggle Theme"
    >
      <span className="material-symbols-outlined text-2xl animate-in zoom-in duration-300">
        {theme === 'light' ? 'dark_mode' : 'light_mode'}
      </span>
    </button>
  );
};

export default ThemeToggle;
