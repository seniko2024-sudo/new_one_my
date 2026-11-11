import React, { useState, useEffect } from 'react';

export default function Skills({ setCurrentPage }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [animate, setAnimate] = useState(false);

  // ሁሉም ክህሎቶች ከ category እና level ጋር
  const allSkills = [
    // ===== Frontend =====
    { name: 'React', level: 90, category: 'Frontend', icon: '⚛️', color: 'from-cyan-500 to-blue-500' },
    { name: 'JavaScript', level: 88, category: 'Frontend', icon: '🟨', color: 'from-yellow-400 to-amber-500' },
    { name: 'HTML5', level: 95, category: 'Frontend', icon: '🌐', color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', level: 90, category: 'Frontend', icon: '🎨', color: 'from-blue-500 to-indigo-500' },
    { name: 'Tailwind CSS', level: 92, category: 'Frontend', icon: '💨', color: 'from-teal-400 to-cyan-500' },

    // ===== Backend =====
    { name: 'Node.js', level: 85, category: 'Backend', icon: '🟢', color: 'from-green-500 to-emerald-500' },
    { name: 'Express.js', level: 82, category: 'Backend', icon: '🚂', color: 'from-slate-500 to-slate-700' },
    { name: 'MongoDB', level: 80, category: 'Backend', icon: '🍃', color: 'from-emerald-500 to-green-600' },

    // ===== Mobile =====
    { name: 'React Native', level: 50, category: 'Mobile', icon: '📱', color: 'from-cyan-500 to-blue-500' },

    // ===== AI & ML =====
    { name: 'Python', level: 80, category: 'AI & ML', icon: '🐍', color: 'from-yellow-500 to-green-500' },
    { name: 'OpenAI API', level: 70, category: 'AI & ML', icon: '🤖', color: 'from-emerald-500 to-teal-500' },
    { name: 'Machine Learning', level: 65, category: 'AI & ML', icon: '🧠', color: 'from-purple-500 to-pink-500' },

    // ===== Design =====
    { name: 'Figma', level: 85, category: 'Design', icon: '🎨', color: 'from-pink-500 to-purple-500' },
    { name: 'UI/UX Design', level: 80, category: 'Design', icon: '✨', color: 'from-indigo-500 to-purple-500' },
    { name: 'Framer', level: 70, category: 'Design', icon: '🖼️', color: 'from-slate-500 to-slate-700' },

    // ===== Tools =====
    { name: 'Git & GitHub', level: 88, category: 'Tools', icon: '🐙', color: 'from-slate-700 to-slate-900' },
    { name: 'VS Code', level: 95, category: 'Tools', icon: '💻', color: 'from-blue-500 to-cyan-500' },
    { name: 'Vite', level: 85, category: 'Tools', icon: '⚡', color: 'from-purple-500 to-pink-500' },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Mobile', 'AI & ML', 'Design', 'Tools'];

  // የሚታዩ ክህሎቶች
  const filteredSkills = activeCategory === 'All'
    ? allSkills
    : allSkills.filter((s) => s.category === activeCategory);

  // Animation ለ progress bars
  useEffect(() => {
    setAnimate(false);
    const timer = setTimeout(() => setAnimate(true), 100);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">

      {/* ===== ርዕስ ===== */}
      <div className="mb-8">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
          Skills & Expertise
        </h2>
        <div className="w-20 h-1.5 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
          Technologies, tools, and frameworks I work with regularly.
        </p>
      </div>

      {/* ===== Category Filter ===== */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ===== Skills Grid ===== */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {filteredSkills.map((skill, index) => (
          <div
            key={skill.name}
            className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all hover:shadow-lg hover:-translate-y-1"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            {/* Header: Icon + Name + Level */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${skill.color} flex items-center justify-center text-xl shadow-md`}>
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-white">
                    {skill.name}
                  </h3>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 dark:text-slate-500 font-semibold">
                    {skill.category}
                  </p>
                </div>
              </div>
              <span className="text-sm font-bold text-indigo-600 dark:text-indigo-400">
                {skill.level}%
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className={`h-full rounded-full bg-linear-to-r ${skill.color} transition-all duration-1000 ease-out`}
                style={{ width: animate ? `${skill.level}%` : '0%' }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== ማጠቃለያ ስታቲስቲክስ ===== */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
          <p className="text-3xl font-extrabold text-indigo-600 dark:text-indigo-400">
            {allSkills.length}+
          </p>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
            Technologies
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
          <p className="text-3xl font-extrabold text-purple-600 dark:text-purple-400">
            6
          </p>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
            Categories
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
          <p className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
            2
          </p>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
            Years Coding
          </p>
        </div>
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
          <p className="text-3xl font-extrabold text-amber-600 dark:text-amber-400">
            4
          </p>
          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
            Projects
          </p>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="rounded-2xl p-8 bg-linear-to-br from-indigo-600 to-purple-600 text-white text-center shadow-lg">
        <h3 className="text-2xl font-bold mb-2">
          Want to Work Together?
        </h3>
        <p className="text-white/80 mb-5 max-w-lg mx-auto">
          I'm available for projects, collaborations, and freelance opportunities.
        </p>
        
      </div>

    </div>
  );
}