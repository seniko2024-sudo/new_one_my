import React, { useState } from 'react';

export default function Navbar({ 
  darkMode, 
  setDarkMode, 
  currentPage, 
  setCurrentPage, 
  userName = "Senait" 
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'cv', label: 'CV' },
    { id: 'contact', label: 'Contact' },
  ];

  const navigateTo = (id) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between gap-4">

        {/* ===== Logo ===== */}
        <button
          onClick={() => navigateTo('home')}
          className="flex items-center gap-2 group cursor-pointer shrink-0"
        >
          {/* Logo Icon */}
          <div className="w-9 h-9 rounded-xl bg-linear-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-black text-lg shadow-md group-hover:scale-105 transition-transform">
            {userName.charAt(0).toUpperCase()}
          </div>

          {/* Logo Text */}
          <div className="flex flex-col leading-none text-left">
            <span className="font-extrabold text-base text-slate-800 dark:text-white">
              {userName}
              <span className="text-indigo-600 dark:text-indigo-400">.dev</span>
            </span>
            <span className="text-[10px] font-semibold tracking-widest text-slate-500 dark:text-slate-400 uppercase">
              Developer
            </span>
          </div>
        </button>

        {/* ===== Desktop Links (Center) ===== */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => navigateTo(link.id)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                currentPage === link.id
                  ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400 font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-slate-50 dark:hover:bg-slate-800/50'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* ===== Right Side: Dark Mode + Mobile Menu ===== */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-9 h-9 rounded-xl border border-slate-300 dark:border-slate-700 flex items-center justify-center text-sm font-semibold hover:border-indigo-500 transition cursor-pointer"
            title={darkMode ? 'Switch to Light' : 'Switch to Dark'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-xl transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

      </div>

      {/* ===== Mobile Menu (Dropdown) ===== */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 flex flex-col gap-1">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => navigateTo(link.id)}
              className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                currentPage === link.id
                  ? 'bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}