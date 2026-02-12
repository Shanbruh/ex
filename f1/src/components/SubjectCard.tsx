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
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onClick(subject)}
      className="relative group w-full text-left overflow-hidden rounded-[32px] p-7 bg-slate-900/40 border border-white/5 hover:border-indigo-500/30 hover:bg-slate-800/40 transition-all duration-500 shadow-xl"
    >
      <div className={`absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-[0.07] blur-3xl transition-opacity duration-700`} />
      
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-5">
          <div className="text-4xl filter drop-shadow-2xl transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500">
            {subject.icon}
          </div>
          <div>
            <h3 className="text-xl font-black text-white tracking-tight group-hover:text-indigo-200 transition-colors">
              {subject.name}
            </h3>
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-0.5">
              {subject.chapters.length} Modules
            </p>
          </div>
        </div>
        <div className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-2xl border border-white/5 group-hover:bg-indigo-500 group-hover:text-white group-hover:border-transparent transition-all duration-500">
          <ChevronRight className="w-5 h-5 opacity-50 group-hover:opacity-100" />
        </div>
      </div>
    </motion.button>
  );
}
