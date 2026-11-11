import React, { useState, useEffect } from 'react';
import Navbar from './component/Navbar';
import Home from './page/Home';
import Aboutme from './page/Aboutme';
import Projects from './page/projects';
import Cv from './page/Cv';
import Footer from './component/Footer';
import Skills from './page/skills';
import Contact from './page/Contact';
export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'about':
        return <Aboutme setCurrentPage={setCurrentPage} />;
      case 'projects':
        return <Projects />;
      case 'cv':
        return <Cv />;
      case 'skills':
        return <Skills />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300 flex flex-col">
      
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} 
        userName="Seniko"
      />

      <main className="flex-1 max-w-6xl mx-auto px-4 py-8 w-full page-view">
        {renderPage()}
      </main>

      {/* ===== Footer Component ===== */}
      <Footer setCurrentPage={setCurrentPage} userName="Seniko" />

    </div>
  );
}