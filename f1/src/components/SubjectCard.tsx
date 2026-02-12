import { Subject } from '../types';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface SubjectCardProps {
  subject: Subject;
  onClick: (subject: Subject) => void;
}

export function SubjectCard({ subject, onClick }: SubjectCardProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(subject)}
      className="relative group w-full text-left overflow-hidden rounded-3xl p-6 bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/50 transition-all"
    >
      <div className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 rounded-full bg-gradient-to-br ${subject.color} opacity-10 blur-2xl group-hover:opacity-20 transition-opacity`} />
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-4xl">{subject.icon}</span>
          <div>
            <h3 className="text-lg font-bold text-white">{subject.name}</h3>
            <p className="text-sm text-slate-400">{subject.chapters.length} Chapters</p>
          </div>
        </div>
        <div className="bg-slate-700/50 p-2 rounded-full group-hover:bg-indigo-600/20 group-hover:text-indigo-400 transition-colors">
          <ChevronRight className="w-5 h-5 text-slate-400 group-hover:text-inherit" />
        </div>
      </div>
    </motion.button>
  );
}
