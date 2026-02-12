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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-indigo-500/30">
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

      <footer className="mt-20 border-t border-slate-900 py-10 text-center text-slate-500 text-sm">
        <p>&copy; 2024 Study Hub PWA. Built for offline excellence.</p>
      </footer>
    </div>
  );
}
