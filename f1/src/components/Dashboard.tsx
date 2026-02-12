import { Subject } from '../types';
import { SubjectCard } from './SubjectCard';
import { motion } from 'framer-motion';

interface DashboardProps {
  subjects: Subject[];
  onSelectSubject: (subject: Subject) => void;
}

export function Dashboard({ subjects, onSelectSubject }: DashboardProps) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h2 className="text-3xl font-bold text-white mb-2">My Subjects</h2>
        <p className="text-slate-400">Welcome back! Pick a subject to continue your journey.</p>
      </header>

      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {subjects.map((subject) => (
          <motion.div key={subject.id} variants={item}>
            <SubjectCard 
              subject={subject} 
              onClick={onSelectSubject} 
            />
          </motion.div>
        ))}
      </motion.div>

      <section className="mt-8">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/50 rounded-[32px] p-8 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider mb-4 border border-indigo-500/30">
              Quick Tip
            </div>
            <h3 className="text-2xl font-bold mb-2">Optimize Your Learning</h3>
            <p className="text-slate-400 mb-6 max-w-md">Consistent daily review is the key to long-term memory. Use the offline mode to study anywhere, even without a connection.</p>
            <div className="flex flex-wrap gap-4">
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">100%</span>
                <span className="text-xs text-slate-500 uppercase">Offline Support</span>
              </div>
              <div className="w-px h-10 bg-slate-700 hidden sm:block" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">Zero</span>
                <span className="text-xs text-slate-500 uppercase">Distractions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          Getting Started
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group bg-slate-900/50 border border-slate-800 p-6 rounded-3xl hover:bg-slate-800/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </div>
            <h5 className="font-bold text-white mb-2">Native Installation</h5>
            <p className="text-sm text-slate-400 leading-relaxed">
              Add Study Hub to your home screen for a full-screen, app-like experience. Tap the install icon in your browser address bar.
            </p>
          </div>
          <div className="group bg-slate-900/50 border border-slate-800 p-6 rounded-3xl hover:bg-slate-800/50 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h5 className="font-bold text-white mb-2">Offline Capability</h5>
            <p className="text-sm text-slate-400 leading-relaxed">
              Once a note page is opened, it is automatically stored on your device. You can access it anytime from the 'Chapters' list.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
