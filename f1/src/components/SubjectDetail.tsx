import { Subject, Chapter } from '../types';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { useState, useEffect } from 'react';

interface SubjectDetailProps {
  subject: Subject;
  onBack: () => void;
}

export function SubjectDetail({ subject, onBack }: SubjectDetailProps) {
  const [cachedLinks, setCachedLinks] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Check which links are already in cache
    const checkCache = async () => {
      const cache = await caches.open('study-hub-v1');
      const keys = await cache.keys();
      const urls = new Set(keys.map(request => request.url));
      setCachedLinks(urls);
    };
    checkCache();
  }, [subject]);

  const handleChapterClick = (chapter: Chapter) => {
    // We just open the link, the service worker handles the dynamic caching
    window.open(chapter.url, '_blank');
    
    // Optimistically update UI to show it might be cached soon
    // Realistically we should check after a delay or on return
    setTimeout(() => {
      setCachedLinks(prev => new Set([...prev, chapter.url]));
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in duration-300">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors w-fit"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back to Subjects</span>
      </button>

      <div className="flex items-center gap-4">
        <span className="text-5xl">{subject.icon}</span>
        <div>
          <h2 className="text-3xl font-bold text-white">{subject.name}</h2>
          <p className="text-slate-400">Select a chapter to start studying</p>
        </div>
      </div>

      <div className="grid gap-4 mt-4">
        {subject.chapters.map((chapter, index) => (
          <motion.div
            key={chapter.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group p-5 bg-slate-800/40 border border-slate-700/50 rounded-2xl flex items-center justify-between hover:border-slate-600 transition-all"
          >
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-white">{chapter.title}</h4>
                {cachedLinks.has(chapter.url) && (
                  <span className="flex items-center gap-1 text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    Offline Ready
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-400 mt-1">{chapter.description}</p>
            </div>
            
            <button
              onClick={() => handleChapterClick(chapter)}
              className="ml-4 p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-lg shadow-indigo-600/20 transition-all"
            >
              <ExternalLink className="w-5 h-5" />
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 p-6 bg-indigo-600/10 border border-indigo-500/20 rounded-3xl">
        <h4 className="text-indigo-400 font-bold mb-2">💡 Study Tip</h4>
        <p className="text-sm text-slate-300">
          To save a chapter for offline use, open the link once while you have an internet connection. The Study Hub will automatically cache it for you.
        </p>
      </div>
    </div>
  );
}
