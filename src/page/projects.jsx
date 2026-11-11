import React, { useState } from 'react';

export default function Projects({ setCurrentPage }) {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "TherapyFlow",
      description: "AI-driven mental health companion app that provides personalized therapy sessions, mood tracking, and emotional support using Gemini AI.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Gemini API"],
      category: "AI & Web",
      icon: "🧠",
      gradient: "from-purple-500 to-pink-500",
      github: "https://github.com/seniko2024-sudo/",
      demo: "#",
      featured: true,
      status: "Completed",
    },
    {
      title: "Verified Rental System",
      description: "Peer-to-peer house rental platform with verified listings, secure authentication, and real-time booking. Solves housing trust issues in Ethiopia.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Framer"],
      category: "Web",
      icon: "🏠",
      gradient: "from-blue-500 to-cyan-500",
      github: "https://github.com/seniko2024-sudo/",
      demo: "#",
      featured: true,
      status: "Completed",
    },
    {
      title: "Personal Budget Tracker",
      description: "Track daily income and expenses, set monthly budgets, and visualize spending patterns with charts. Full authentication and admin panel.",
      tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      category: "Web",
      icon: "💰",
      gradient: "from-emerald-500 to-teal-500",
      github: "https://github.com/seniko2024-sudo/",
      demo: "#",
      status: "Completed",
    },
    {
      title: "Calculator Desktop App",
      description: "A feature-rich desktop calculator with scientific functions, history, and keyboard support built with Java Swing.",
      tech: ["Java", "Swing", "NetBeans"],
      category: "Desktop",
      icon: "🧮",
      gradient: "from-amber-500 to-orange-500",
      github: "https://github.com/seniko2024-sudo/",
      demo: "#",
      status: "Completed",
    },
    {
      title: "Fitness Progress Tracker",
      description: "Desktop application to track workouts, calories, weight progress, and fitness goals with visual charts and reminders.",
      tech: ["Java", "Swing", "NetBeans", "MySQL"],
      category: "Desktop",
      icon: "💪",
      gradient: "from-red-500 to-pink-500",
      github: "https://github.com/seniko2024-sudo/",
      demo: "#",
      status: "Completed",
    },
    {
      title: "School Attendance System",
      description: "Automated attendance tracking system with card-based check-in, real-time reports, and admin dashboard for teachers and students.",
      tech: ["Java", "Swing", "MySQL", "NetBeans"],
      category: "Desktop",
      icon: "🎓",
      gradient: "from-indigo-500 to-purple-500",
      github: "https://github.com/seniko2024-sudo/",
      demo: "#",
      status: "Completed",
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio built with React and Tailwind CSS — featuring dark mode, responsive design, and smooth animations.",
      tech: ["React", "Tailwind CSS", "Vite"],
      category: "Web",
      icon: "🌐",
      gradient: "from-sky-500 to-blue-600",
      github: "https://github.com/seniko2024-sudo/",
      demo: "#",
      status: "Live",
    },
    {
      title: "More Coming Soon...",
      description: "Currently working on new AI-powered tools and mobile applications. Stay tuned for updates!",
      tech: ["React Native", "Python", "OpenAI"],
      category: "Mobile",
      icon: "🚀",
      gradient: "from-slate-500 to-slate-700",
      github: "https://github.com/seniko2024-sudo/",
      demo: "#",
      status: "In Progress",
    },
  ];

  const categories = ['All', 'Web', 'AI & Web', 'Desktop', 'Mobile'];
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  const statusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300';
      case 'Live': return 'bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300';
      case 'In Progress': return 'bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300';
      default: return 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300';
    }
  };

  return (
    <div className="py-12 px-4 max-w-6xl mx-auto">

      {/* ===== ርዕስ ===== */}
      <div className="mb-8">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
          Projects
        </h2>
        <div className="w-20 h-1.5 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full mb-4"></div>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
          A collection of projects I've built — from AI-powered web apps to desktop applications.
        </p>
      </div>

      {/* ===== Statistics ===== */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
          <p className="text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">8+</p>
          <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Total Projects</p>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
          <p className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">6</p>
          <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Completed</p>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
          <p className="text-2xl font-extrabold text-purple-600 dark:text-purple-400">15+</p>
          <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">Technologies</p>
        </div>
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-center">
          <p className="text-2xl font-extrabold text-amber-600 dark:text-amber-400">2</p>
          <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">In Progress</p>
        </div>
      </div>

      {/* ===== Filter ===== */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
              filter === cat
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-500'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ===== Projects Grid ===== */}
      <div className="grid sm:grid-cols-2 gap-5">
        {filtered.map((proj, idx) => (
          <div
            key={idx}
            className={`group relative rounded-2xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all hover:shadow-xl hover:-translate-y-1 flex flex-col ${
              proj.featured ? 'ring-1 ring-indigo-500/20' : ''
            }`}
          >
            {/* Gradient Top Bar */}
            <div className={`h-1.5 bg-linear-to-r ${proj.gradient}`}></div>

            <div className="p-6 flex flex-col flex-1">

              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${proj.gradient} flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform`}>
                  {proj.icon}
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider ${statusColor(proj.status)}`}>
                    {proj.status}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                    {proj.category}
                  </span>
                </div>
              </div>

              {/* Title + Description */}
              <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-2">
                {proj.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                {proj.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {proj.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono font-semibold px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  Code
                </a>
                {proj.demo !== '#' && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    Live Demo
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H8M17 7v9" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ===== CTA ===== */}
      <div className="mt-12 rounded-2xl p-8 bg-linear-to-br from-indigo-600 to-purple-600 text-white text-center shadow-lg">
        <h3 className="text-2xl font-bold mb-2">
          Have a Project in Mind?
        </h3>
        <p className="text-white/80 mb-5 max-w-lg mx-auto">
          I'm available for freelance work and collaborations. Let's build something great together.
        </p>
        
      </div>

    </div>
  );
}