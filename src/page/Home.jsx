import React, { useState, useEffect } from 'react';

export default function Home({ setCurrentPage, userName = "Senait" }) {
  // ፎቶው በ public/profile.jpg ውስጥ መሆን አለበት
   const photo = "/profile.jpg";
  const [photoError, setPhotoError] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slideshow texts
  const slides = [
    "Full-Stack Web Developer",
    "Mobile App Developer",
    "AI & Machine Learning Developer",
    "UI/UX Designer",
    "Problem Solver",
  ];

  // Areas of expertise
  const expertise = [
    {
      icon: "🌐",
      title: "Web Development",
      desc: "React, Node.js, MERN Stack, Tailwind CSS, HTML, CSS, JavaScript",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      desc: "React Native, Flutter",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: "🤖",
      title: "AI & ML",
      desc: "Python, OpenAI",
      color: "from-emerald-500 to-teal-500",
    },
  ];

  // Slideshow changes every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="py-12 px-2">
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

        {/* ===== LEFT: Text ===== */}
        <div className="text-left order-2 md:order-1">

          {/* Availability Status */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Available for Freelance & Full-time Work
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3 text-slate-900 dark:text-white">
            Hello! I'm
            <br />
            <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {userName}
            </span>{" "}
            <span className="text-slate-700 dark:text-slate-200">Developer</span>
          </h1>

          {/* Slide Show Text */}
          <div className="h-12 mb-6 overflow-hidden">
            <p
              key={currentSlide}
              className="text-xl sm:text-2xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent animate-[fadeIn_0.5s_ease-in-out]"
            >
              {slides[currentSlide]}
            </p>
          </div>

          {/* Short Bio — Student + Professional */}
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed mb-6">
            I'm a{" "}
            <span className="font-bold text-indigo-600 dark:text-indigo-400">4th year Software Engineering</span>{" "}
            student. But I haven't limited myself to academics alone — I work hands-on
            with{" "}
            <span className="font-bold">Web</span>,{" "}
            <span className="font-bold">Mobile</span>, and{" "}
            <span className="font-bold">AI</span> development.
            Using modern technologies, I deliver professional solutions to my clients.
          </p>

          {/* Expertise Cards */}
          <div className="grid grid-cols-3 gap-3 mb-8 max-w-xl">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="group relative rounded-2xl p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all hover:shadow-lg hover:-translate-y-1 cursor-default"
              >
                <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${item.color} flex items-center justify-center text-xl mb-2 shadow-md`}>
                  {item.icon}
                </div>
                <h3 className="text-xs font-bold text-slate-800 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-tight">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => setCurrentPage && setCurrentPage('projects')}
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold cursor-pointer transition-all shadow-md shadow-indigo-500/20 hover:shadow-lg hover:shadow-indigo-500/30"
            >
              View Projects
            </button>

            <button
              onClick={() => setCurrentPage && setCurrentPage('cv')}
              className="px-6 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold cursor-pointer transition-all"
            >
              View CV
            </button>
          </div>

          {/* ===== Social Links ===== */}
          <div className="flex flex-wrap gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/seniko2024-sudo/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black text-white text-sm font-semibold hover:bg-slate-800 transition-all shadow-md"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              GitHub
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/seni-ke-071841441/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/smi_le510"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-sm font-semibold transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
              </svg>
              Telegram
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/smile5.876"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-linear-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white text-sm font-semibold transition-all hover:opacity-90"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Instagram
            </a>

            {/* Email */}
            <a
              href="mailto:seniko2024@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-red-600 hover:bg-red-700 text-white text-sm font-semibold transition-all"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
              Email
            </a>

            {/* Contact */}
            <button
              onClick={() => setCurrentPage && setCurrentPage('contact')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-sm font-semibold hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-all"
            >
              💬 Contact Me
            </button>
          </div>
        </div>

        {/* ===== RIGHT: Photo ===== */}
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            {/* Decorative gradient ring */}
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-40 animate-pulse"></div>

            {/* Photo Circle */}
<div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl bg-slate-100 dark:bg-slate-800">              {!photoError ? (
                <img
                  src={photo}
                  alt={userName}
                  onError={() => setPhotoError(true)}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 dark:text-slate-600">
                  <svg className="w-20 h-20 mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                  <span className="text-sm font-medium">No Photo</span>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}