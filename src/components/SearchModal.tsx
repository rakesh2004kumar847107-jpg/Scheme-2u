import React, { useState, useEffect } from 'react';
import { Search, X, Clock, ArrowRight, Sparkles, ExternalLink, Briefcase, FileText, Award, Landmark } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SearchModal: React.FC = () => {
  const { 
    language, 
    isSearchModalOpen, 
    setIsSearchModalOpen, 
    posts, 
    navigateToPost, 
    navigateToCategory 
  } = useApp();
  const [query, setQuery] = useState('');
  const isHindi = language === 'hi';

  // Keyboard shortcut listener (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen(true);
      }
      if (e.key === 'Escape' && isSearchModalOpen) {
        setIsSearchModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchModalOpen, setIsSearchModalOpen]);

  if (!isSearchModalOpen) return null;

  const results = query.trim()
    ? posts.filter(p => 
        p.titleEn.toLowerCase().includes(query.toLowerCase()) ||
        p.titleHi.toLowerCase().includes(query.toLowerCase()) ||
        p.organizationEn.toLowerCase().includes(query.toLowerCase()) ||
        p.organizationHi.toLowerCase().includes(query.toLowerCase()) ||
        p.tags.some(t => t.toLowerCase().includes(query.toLowerCase()))
      )
    : posts.slice(0, 5);

  const handleSelectPost = (slug: string) => {
    navigateToPost(slug);
    setIsSearchModalOpen(false);
    setQuery('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 sm:pt-20 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-4 border-b border-slate-200 dark:border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={isHindi ? "नौकरी, योजना, एडमिट कार्ड, रिजल्ट या विभाग का नाम खोजें..." : "Search Jobs, Schemes, Admit Cards, Results, Departments..."}
            className="flex-1 bg-transparent text-sm sm:text-base font-semibold text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden"
          />
          {query && (
            <button 
              onClick={() => setQuery('')}
              className="text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchModalOpen(false)}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Tag Pills */}
        <div className="px-4 py-2 bg-slate-50 dark:bg-slate-850 border-b border-slate-200 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto text-xs no-scrollbar">
          <span className="text-slate-400 font-bold shrink-0">{isHindi ? 'त्वरित:' : 'Quick:'}</span>
          {['Bihar Police', 'PM Kisan', 'SSC GD', 'Kanya Utthan', 'BPSC 70th', 'RTPS'].map(tag => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-blue-500 font-medium text-[11px] shrink-0"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          <div className="text-[11px] font-extrabold uppercase text-slate-400 tracking-wider">
            {query.trim() ? (isHindi ? `परिणाम (${results.length})` : `Search Results (${results.length})`) : (isHindi ? 'ताज़ा एवं लोकप्रिय अपडेट्स' : 'Trending & Recent Updates')}
          </div>

          {results.map(post => (
            <div
              key={post.id}
              onClick={() => handleSelectPost(post.slug)}
              className="group flex items-center justify-between p-3 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 cursor-pointer transition-all"
            >
              <div className="flex-1 min-w-0 pr-3">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
                    {post.category.toUpperCase()}
                  </span>
                  <span className="text-[10px] text-slate-500 font-semibold truncate">
                    {isHindi ? post.organizationHi : post.organizationEn}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors line-clamp-1">
                  {isHindi ? post.titleHi : post.titleEn}
                </h4>
                {post.importantDates.applicationLastDate && (
                  <p className="text-[11px] text-red-600 dark:text-red-400 font-medium mt-0.5">
                    {isHindi ? `अंतिम तिथि: ${post.importantDates.applicationLastDate}` : `Last Date: ${post.importantDates.applicationLastDate}`}
                  </p>
                )}
              </div>

              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0 group-hover:translate-x-1 transition-transform" />
            </div>
          ))}

          {results.length === 0 && (
            <div className="p-8 text-center text-xs text-slate-500">
              {isHindi ? 'कोई परिणाम नहीं मिला। कृपया अन्य शब्द खोजें।' : 'No matching results found. Try searching another keyword.'}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
          <span>Navigate with <kbd className="font-mono bg-white dark:bg-slate-900 px-1 py-0.5 rounded border border-slate-300 dark:border-slate-700">ESC</kbd> to close</span>
          <span className="font-semibold text-blue-600 dark:text-blue-400">Scheme 2 U Search</span>
        </div>
      </div>
    </div>
  );
};
