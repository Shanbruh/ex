import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { SubjectDetail } from './components/SubjectDetail';
import { subjects } from './data/subjects';
import { Subject } from './types';
import { AnimatePresence, motion } from 'framer-motion';

export function App() {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  useEffect(() => {
    // Register Service Worker
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(reg => console.log('SW registered:', reg))
          .catch(err => console.error('SW registration failed:', err));
      });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-indigo-500/30">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 py-8">
        <AnimatePresence mode="wait">
          {!selectedSubject ? (
            <motion.div
              key="dashboard"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Dashboard 
                subjects={subjects} 
                onSelectSubject={setSelectedSubject} 
              />
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              <SubjectDetail 
                subject={selectedSubject} 
                onBack={() => setSelectedSubject(null)} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="mt-24 border-t border-white/5 py-12">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 opacity-30">
            <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
            <div className="w-1.5 h-1.5 rounded-full bg-slate-500" />
          </div>
          <p className="text-slate-600 text-xs font-black uppercase tracking-[0.3em]">
            Study Hub &bull; v1.0.0
          </p>
        </div>
      </footer>
    </div>
  );
}
