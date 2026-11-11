import React from 'react';

export default function Aboutme({ setCurrentPage }) {
  const skills = [
    'React', 'Node.js', 'Express', 'MongoDB',
    'JavaScript', 'Tailwind CSS', 'Figma', 'Git',
    'Python', 'React Native', 'Firebase', 'REST API'
  ];

  const timeline = [
    {
      year: '2002-2015',
      title: 'Elementary & High School',
      desc: 'Started my educational journey — completed elementary and high school.',
      icon: '🎒',
      color: 'from-emerald-500 to-teal-500',
    },
    {
      year: '2015',
      title: 'Mekdela Amba University',
      desc: 'Joined Mekdela Amba University to pursue Software Engineering.',
      icon: '🏛️',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      year: '2020',
      title: 'First Degree Graduate',
      desc: 'Graduated with a BSc in Software Engineering — now a Software Developer.',
      icon: '🎓',
      color: 'from-amber-500 to-orange-500',
    },
  ];

  const values = [
    {
      icon: '🇪🇹',
      title: 'Impact-Driven',
      desc: 'Building technology solutions that solve real problems for Ethiopia.',
    },
    {
      icon: '📚',
      title: 'Always Learning',
      desc: 'Constantly exploring new technologies and frameworks.',
    },
    {
      icon: '💡',
      title: 'Innovative',
      desc: 'Creating modern solutions with cutting-edge tools.',
    },
    {
      icon: '🤝',
      title: 'Collaborative',
      desc: 'Working with teams to deliver great results.',
    },
  ];

  return (
    <div className="py-8 max-w-5xl mx-auto">

      {/* ===== ርዕስ ===== */}
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
          About Me
        </h2>
        <div className="w-20 h-1.5 bg-linear-to-r from-indigo-500 to-purple-500 rounded-full"></div>
      </div>

      {/* ===== Profile Section ===== */}
      <div className="flex flex-col items-center text-center mb-12">

        {/* Name */}
        <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">
          Senait Kerdu
        </h3>

        {/* Role */}
        <p className="text-lg font-semibold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
          Software Engineer
        </p>

        {/* Location + University badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 text-xs font-bold">
            🏙️ Addis Ababa, Ethiopia
          </span>
          <span className="px-3 py-1 rounded-lg bg-purple-50 dark:bg-purple-950 text-purple-700 dark:text-purple-300 text-xs font-bold">
            🏛️ Mekdela Amba University
          </span>
          <span className="px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 text-xs font-bold">
            🎓 4th Year
          </span>
        </div>

        {/* Short Bio */}
        <p className="max-w-2xl text-slate-600 dark:text-slate-400 leading-relaxed">
          I'm a <span className="font-bold text-indigo-600 dark:text-indigo-400">4th year Software Engineering</span> student
          at <span className="font-bold">Mekdela Amba University</span>. Passionate about
          <span className="font-bold"> Web</span>, <span className="font-bold">Mobile</span>, and
          <span className="font-bold"> AI</span> development. I'm always ready to learn something new
          and build solutions that make a real impact.
        </p>
      </div>

      {/* ===== Core Values ===== */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-5">
          💎 Core Values
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {values.map((v) => (
            <div
              key={v.title}
              className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="text-3xl mb-3">{v.icon}</div>
              <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-1.5">
                {v.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ===== School Journey ===== */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-5">
          📅 School Journey
        </h3>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2"></div>

          <div className="space-y-6">
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-center gap-4 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 ml-12 md:ml-0">
                  <div
                    className={`p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all ${
                      index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                    }`}
                  >
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-linear-to-r ${item.color} text-white text-xs font-bold mb-2`}>
                      <span>{item.icon}</span>
                      {item.year}
                    </div>
                    <h4 className="text-base font-bold text-slate-800 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white dark:border-slate-950 -translate-x-1/2 z-10 shadow-md"></div>

                {/* Spacer for md */}
                <div className="hidden md:block flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== Skills ===== */}
      <div className="rounded-2xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm mb-10">
        <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-5">
          🛠️ Skills & Technologies
        </h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-indigo-50 dark:hover:bg-indigo-950 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="rounded-2xl p-8 bg-linear-to-br from-indigo-600 to-purple-600 text-white text-center shadow-lg">
        <h3 className="text-2xl font-bold mb-2">
          Let's Work Together
        </h3>
        <p className="text-white/80 max-w-lg mx-auto">
          I'm available for projects, collaborations, and freelance opportunities.
        </p>
      </div>

    </div>
  );
}