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
        <div className="bg-gradient-to-br from-indigo-600 to-violet-700 rounded-[32px] p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2">Ready for Finals?</h3>
            <p className="text-indigo-100 mb-6 max-w-md">Track your progress and keep your notes organized in one place. Your future self will thank you.</p>
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-2xl font-bold hover:bg-slate-100 transition-colors shadow-xl shadow-indigo-900/20">
              Set Study Goal
            </button>
          </div>
        </div>
      </section>

      <section className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
          <h4 className="text-lg font-bold text-white mb-2">How to install</h4>
          <p className="text-sm text-slate-400">
            On Android: Tap the 'Install App' button in the navbar or the three dots in Chrome and select 'Add to Home Screen'.
          </p>
        </div>
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-3xl">
          <h4 className="text-lg font-bold text-white mb-2">Offline access</h4>
          <p className="text-sm text-slate-400">
            Simply visit a chapter's note page while online. It will be cached automatically for offline viewing later.
          </p>
        </div>
      </section>
    </div>
  );
}
