import React from 'react';

export default function Cv({ userName = "Senait" }) {

  const skills = {
    'Web & UI Design': ['Figma', 'Framer', 'Responsive Web Design', 'HTML5', 'CSS3'],
    'Frontend Development': ['JavaScript', 'React', 'Tailwind CSS'],
    'Backend Development': ['Node.js', 'Express.js', 'PHP', 'Python (FastAPI)'],
    'Desktop Development': ['Java (Java Swing)', 'NetBeans'],
    'Databases': ['MongoDB', 'MySQL'],
    'Tools & Version Control': ['Git', 'GitHub', 'VS Code', 'Apache'],
  };

  const achievements = [
    { icon: '🤖', title: 'AI Platform', desc: 'Built TherapyFlow using Google GenAI API, Node.js, and React.' },
    { icon: '🌐', title: 'Full-Stack App', desc: 'Co-developed Verified Rental System using the MERN stack.' },
    { icon: '🎨', title: 'UI/UX Design', desc: 'Designed interactive web wireframes and layouts in Figma & Framer.' },
  ];

  const projects = [
    { title: 'TherapyFlow — AI Mental Health Platform', tech: 'React · Node.js · Express · MongoDB · Google GenAI API', desc: 'AI-driven mental health companion with personalized therapy sessions and mood tracking.' },
    { title: 'Verified Rental System (P2P)', tech: 'React · Node.js · Express · MongoDB · Framer', desc: 'Peer-to-peer house rental platform with verified listings and secure authentication.' },
    { title: 'University Gym Fitness Tracker', tech: 'Java · Swing · MySQL · NetBeans', desc: 'Desktop application for tracking workouts, calories, and fitness progress.' },
    { title: 'Personal Budget Tracker', tech: 'PHP · MySQL · HTML · CSS · JavaScript', desc: 'Web app to track daily income/expenses with charts and admin panel.' },
  ];

  // ፒዲኤፍ ለማውረድ የሚያገለግል ተግባር (ምንም ላይብረሪ አያስፈልገውም)
  const downloadPDF = () => {
    // ገጹ ላይ ያለውን የ Print ስታይል አስገድደን እንከፍታለን
    window.print();
  };

  return (
    <div className="py-8 px-4 max-w-4xl mx-auto">

      {/* CSS ለፕሪንት (PDF) ሲደረግ ገጹ በአግባቡ እንዲወጣ ያደርጋል */}
      <style>
        {`
          @media print {
            /* የቁልፎችን እና የማያስፈልጉ ነገሮችን ደብቅ */
            .no-print { display: none !important; }
            
            /* ገጹ ሙሉ በሙሉ ነጭ እንዲሆን እና ህዳግ እንዳይኖረው */
            body { background: white !important; margin: 0; padding: 0; }
            .print-container { 
              box-shadow: none !important; 
              border: none !important; 
              padding: 0 !important; 
              margin: 0 !important; 
              width: 100% !important; 
              max-width: 100% !important;
            }
            /* ጥቁር ገጽታ (Dark mode) ሲሆን ቀለሞች እንዳይጠፉ */
            * { 
              -webkit-print-color-adjust: exact !important; 
              print-color-adjust: exact !important; 
            }
            @page { size: A4; margin: 15mm; }
          }
        `}
      </style>

      {/* Header Actions - በፒዲኤፍ ላይ እንዳይታዩ no-print ተብለዋል */}
      <div className="flex flex-wrap justify-between items-center gap-3 mb-6 no-print">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">Curriculum Vitae</h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mt-2"></div>
        </div>
        
        <button
          onClick={downloadPDF}
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold cursor-pointer transition-all shadow-md shadow-indigo-500/20 flex items-center gap-2"
        >
          <span>⬇️</span>
          Download CV (PDF)
        </button>
      </div>

      {/* CV Content */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-8 print-container">

        {/* Header: Name + Title */}
        <div className="flex flex-col items-start gap-3 pb-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex-1 w-full">
            <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">SENAIT KERDU</h1>
            <p className="text-lg font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Software Engineering Student | Web Designer & Developer
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Candidate for B.Sc. in Software Engineering — Mekdela Amba University
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              Expected Graduation: <span className="font-semibold">2027</span>
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-2 gap-3 py-5 border-b border-slate-200 dark:border-slate-800 text-sm">
          <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
            <span className="w-8 h-8 rounded-lg bg-indigo-50 dark:bg-indigo-950 flex items-center justify-center text-indigo-600 dark:text-indigo-400">📞</span>
            <span className="font-semibold">+251 955 844 370</span>
          </div>
          <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
            <span className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-950 flex items-center justify-center text-red-600 dark:text-red-400">📧</span>
            <a href="mailto:seniko2024@gmail.com" className="font-semibold hover:text-indigo-600 transition-colors">seniko2024@gmail.com</a>
          </div>
          <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
            <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-700 dark:text-slate-300">🐙</span>
            <a href="https://github.com/seniko2024-sudo/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-indigo-600 transition-colors">github.com/seniko2024-sudo</a>
          </div>
          <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
            <span className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400">📍</span>
            <span className="font-semibold">Addis Ababa, Ethiopia</span>
          </div>
        </div>

        {/* Profile Summary */}
        <div className="py-5 border-b border-slate-200 dark:border-slate-800">
          <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-3">Profile</h3>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Passionate Software Engineering student with strong expertise in Web Design, UI/UX, and Full-Stack Development.
            Proficient in crafting responsive web applications using React, Node.js, and modern design tools like
            Figma and Framer. Dedicated to building user-friendly digital solutions and eager to contribute to
            innovative software projects.
          </p>
        </div>

        {/* Education */}
        <div className="py-5 border-b border-slate-200 dark:border-slate-800">
          <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">Education</h3>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-2xl text-white shadow-md shrink-0">🎓</div>
            <div>
              <h4 className="font-bold text-slate-800 dark:text-white">B.Sc. in Software Engineering</h4>
              <p className="text-sm text-slate-600 dark:text-slate-400">Mekdela Amba University · 2022 – 2027</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">Focus: Web Design & Full-Stack Web Development</p>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="py-5 border-b border-slate-200 dark:border-slate-800">
          <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">Technical Skills</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-2">{category}</h4>
                <div className="flex flex-wrap gap-1.5">
                  {items.map((skill) => (
                    <span key={skill} className="text-[11px] font-mono font-semibold px-2 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div className="py-5 border-b border-slate-200 dark:border-slate-800">
          <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">Experience</h3>
          <div className="space-y-5">
            <div>
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-slate-800 dark:text-white">Web Designer & Full-Stack Developer</h4>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">2018 - present</span>
              </div>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-2">Academic & Personal Projects</p>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                <li>Designed responsive UI/UX interfaces and interactive wireframes using Figma and Framer.</li>
                <li>Built full-stack web applications using React, Node.js, Express.js, and MongoDB (MERN Stack).</li>
                <li>Developed server-side features and database integrations using PHP and MySQL.</li>
                <li>Optimized website components for cross-device compatibility and smooth navigation.</li>
              </ul>
            </div>
            <div>
              <div className="flex justify-between items-start mb-1">
                <h4 className="font-bold text-slate-800 dark:text-white">Software Engineering Student</h4>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">Present</span>
              </div>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-2">Mekdela Amba University</p>
              <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc list-inside">
                <li>Engineered a university gym fitness tracker desktop application using Java (Java Swing) and MySQL.</li>
                <li>Developed TherapyFlow, an AI-driven platform integrating the Google GenAI API with a Node.js backend.</li>
                <li>Collaborated with team members using Git and GitHub for version control and issue tracking.</li>
                <li>Conducted software testing, debugging, and quality assurance to ensure system performance.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="py-5 border-b border-slate-200 dark:border-slate-800">
          <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">Key Projects</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {projects.map((proj) => (
              <div key={proj.title} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-800">
                <h4 className="text-sm font-bold text-slate-800 dark:text-white mb-1">{proj.title}</h4>
                <p className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 mb-2">{proj.tech}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{proj.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="py-5 border-b border-slate-200 dark:border-slate-800">
          <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">Achievements</h3>
          <div className="space-y-3">
            {achievements.map((a) => (
              <div key={a.title} className="flex gap-3 items-start">
                <span className="text-xl shrink-0">{a.icon}</span>
                <div>
                  <h4 className="text-sm font-bold text-slate-800 dark:text-white">{a.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{a.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="pt-5">
          <h3 className="text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-4">Languages</h3>
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300">English</span>
            <span className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-sm font-semibold text-slate-700 dark:text-slate-300">አማርኛ — Basic</span>
          </div>
        </div>

      </div>
    </div>
  );
}