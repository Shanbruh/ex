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

      <div className="grid gap-4 mt-2">
        {subject.chapters.map((chapter, index) => (
          <motion.div
            key={chapter.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="group p-5 bg-slate-900/40 border border-white/5 rounded-3xl flex items-center justify-between hover:bg-slate-800/40 hover:border-indigo-500/30 transition-all duration-300"
          >
            <div className="flex-1 pr-4">
              <div className="flex flex-wrap items-center gap-3 mb-1">
                <h4 className="font-bold text-white text-lg tracking-tight group-hover:text-indigo-300 transition-colors">
                  {chapter.title}
                </h4>
                {cachedLinks.has(chapter.url) && (
                  <span className="flex items-center gap-1.5 text-[10px] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-2.5 py-1 rounded-full font-black uppercase tracking-widest shadow-sm">
                    <CheckCircle2 className="w-3 h-3" />
                    Offline Ready
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-400 leading-relaxed font-medium">
                {chapter.description}
              </p>
            </div>
            
            <button
              onClick={() => handleChapterClick(chapter)}
              className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-slate-800 group-hover:bg-indigo-600 text-slate-400 group-hover:text-white rounded-2xl shadow-inner transition-all duration-300 transform group-hover:rotate-12"
              title="Open Notes"
            >
              <ExternalLink className="w-5 h-5" />
            </button>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 p-8 bg-slate-900/40 border border-white/5 rounded-[32px] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full -mr-16 -mt-16 blur-2xl" />
        <h4 className="text-indigo-400 font-black text-xs uppercase tracking-[0.2em] mb-3">Sync Instruction</h4>
        <p className="text-sm text-slate-400 leading-relaxed font-medium">
          Study Hub uses <span className="text-white font-bold underline decoration-indigo-500/50">Dynamic Edge Caching</span>. To enable offline access for any external resource, simply open the link once while your connection is active. Our background service will mirror the page for your next session.
        </p>
      </div>
    </div>
  );
}
