import React, { useState } from 'react';
import { 
  Search, 
  Briefcase, 
  FileText, 
  Award, 
  GraduationCap, 
  Landmark, 
  Compass, 
  Cpu, 
  Calculator, 
  CheckSquare, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CategoryType } from '../types';

export const HeroSearch: React.FC = () => {
  const { 
    language, 
    navigateToCategory, 
    setActiveView, 
    setIsAgeCalcOpen, 
    setIsSchemeFinderOpen, 
    posts 
  } = useApp();
  const [localQuery, setLocalQuery] = useState('');
  const isHindi = language === 'hi';

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (localQuery.trim()) {
      setActiveView({ type: 'search', query: localQuery.trim() });
    }
  };

  const handleTagClick = (tag: string) => {
    setActiveView({ type: 'search', query: tag });
  };

  const categoriesList: { id: CategoryType; labelEn: string; labelHi: string; icon: any; color: string; count: number }[] = [
    { 
      id: 'jobs', 
      labelEn: 'Govt Jobs', 
      labelHi: 'सरकारी नौकरी', 
      icon: Briefcase, 
      color: 'bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800',
      count: posts.filter(p => p.category === 'jobs').length 
    },
    { 
      id: 'admit-card', 
      labelEn: 'Admit Card', 
      labelHi: 'एडमिट कार्ड', 
      icon: FileText, 
      color: 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950 dark:text-amber-300 dark:border-amber-800',
      count: posts.filter(p => p.category === 'admit-card').length 
    },
    { 
      id: 'results', 
      labelEn: 'Results', 
      labelHi: 'रिजल्ट', 
      icon: Award, 
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800',
      count: posts.filter(p => p.category === 'results').length 
    },
    { 
      id: 'schemes', 
      labelEn: 'Govt Schemes', 
      labelHi: 'सरकारी योजनाएं', 
      icon: Landmark, 
      color: 'bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950 dark:text-teal-300 dark:border-teal-800',
      count: posts.filter(p => p.category === 'schemes').length 
    },
    { 
      id: 'scholarships', 
      labelEn: 'Scholarships', 
      labelHi: 'छात्रवृत्ति', 
      icon: GraduationCap, 
      color: 'bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800',
      count: posts.filter(p => p.category === 'scholarships').length 
    },
    { 
      id: 'bihar', 
      labelEn: 'Bihar Special', 
      labelHi: 'बिहार विशेष', 
      icon: Compass, 
      color: 'bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-800',
      count: posts.filter(p => p.stateScope === 'Bihar').length 
    },
    { 
      id: 'services', 
      labelEn: 'Online Services', 
      labelHi: 'ऑनलाइन सेवाएं', 
      icon: Cpu, 
      color: 'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950 dark:text-sky-300 dark:border-sky-800',
      count: posts.filter(p => p.category === 'services').length 
    },
    { 
      id: 'answer-key', 
      labelEn: 'Answer Key', 
      labelHi: 'उत्तर कुंजी', 
      icon: CheckSquare, 
      color: 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800',
      count: posts.filter(p => p.category === 'answer-key').length 
    }
  ];

  const trendingTags = [
    'Bihar Police',
    'PM Kisan 19th',
    'SSC GD 2025',
    'Kanya Utthan ₹50k',
    'BPSC 70th',
    'PMS Scholarship',
    'RTPS Bihar',
    'RRB NTPC'
  ];

  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 pt-6 pb-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto space-y-4">
        {/* Compact Hero Search Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              {isHindi ? (
                <>
                  सरकारी योजनाएं एवं नौकरियों की <span className="text-blue-600 dark:text-blue-400">सटीक जानकारी</span>
                </>
              ) : (
                <>
                  Find Verified <span className="text-blue-600 dark:text-blue-400">Sarkari Schemes & Jobs</span>
                </>
              )}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5 font-medium">
              {isHindi 
                ? 'एडमिट कार्ड, रिजल्ट, छात्रवृत्ति, बिहार अपडेट्स एवं ऑनलाइन सेवाओं का 100% आधिकारिक स्रोत'
                : 'Direct official links for Admit Cards, Results, Scholarships & Online Citizen Portals'}
            </p>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-96">
            <form onSubmit={handleSearchSubmit} className="relative">
              <input
                id="hero-search-input"
                type="text"
                value={localQuery}
                onChange={(e) => setLocalQuery(e.target.value)}
                placeholder={isHindi ? "नौकरी, योजना, एडमिट कार्ड या रिजल्ट खोजें..." : "Search Jobs, Schemes, Admit Card, Result..."}
                className="w-full pl-10 pr-20 py-2.5 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 rounded-xl text-sm font-medium text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-blue-600 dark:focus:border-blue-500 shadow-xs transition-colors"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <button
                id="hero-search-submit-btn"
                type="submit"
                className="absolute right-1.5 top-1.5 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold transition-colors cursor-pointer"
              >
                {isHindi ? 'खोजें' : 'Search'}
              </button>
            </form>
          </div>
        </div>

        {/* Trending Searches Tags */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
          <span className="font-bold text-slate-600 dark:text-slate-400 shrink-0 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-500" />
            {isHindi ? 'ट्रेंडिंग:' : 'Trending:'}
          </span>
          {trendingTags.map((tag, idx) => (
            <button
              key={idx}
              onClick={() => handleTagClick(tag)}
              className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 hover:text-blue-700 hover:border-blue-300 dark:hover:bg-blue-950 dark:hover:text-blue-300 text-slate-700 dark:text-slate-300 font-semibold text-[11px] shrink-0 border border-slate-200 dark:border-slate-700 transition-colors cursor-pointer"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Compact Category Action Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 pt-1">
          {categoriesList.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                id={`cat-card-${cat.id}`}
                onClick={() => navigateToCategory(cat.id)}
                className="group relative flex flex-col items-center justify-center p-3 rounded-xl bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-sm transition-all text-center cursor-pointer"
              >
                <div className={`w-8 h-8 rounded-lg ${cat.color} border flex items-center justify-center mb-1.5 group-hover:scale-105 transition-transform`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200 line-clamp-1">
                  {isHindi ? cat.labelHi : cat.labelEn}
                </span>
                <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                  {cat.count} {isHindi ? 'अपडेट्स' : 'Updates'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Quick Utility Banners (Age Eligibility & Scheme Finder) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
          <div 
            onClick={() => setIsAgeCalcOpen(true)}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-800/60 cursor-pointer hover:bg-amber-50 hover:border-amber-300 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-white font-bold flex items-center justify-center shadow-xs">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xs font-bold text-amber-950 dark:text-amber-200">
                  {isHindi ? 'सरकारी नौकरी आयु कैलकुलेटर' : 'Sarkari Job Age Calculator'}
                </h2>
                <p className="text-[11px] font-medium text-amber-900/80 dark:text-amber-300/70">
                  {isHindi ? 'कट-ऑफ तिथि के अनुसार अपनी सटीक आयु और छूट जांचें' : 'Check exact age and category relaxation as on cutoff date'}
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
          </div>

          <div 
            onClick={() => setIsSchemeFinderOpen(true)}
            className="flex items-center justify-between p-3.5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/40 border border-blue-200/80 dark:border-blue-800/60 cursor-pointer hover:bg-blue-50 hover:border-blue-300 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xs font-bold text-blue-950 dark:text-blue-200">
                  {isHindi ? 'स्मार्ट योजना व छात्रवृत्ति खोजक' : 'Smart Scheme & Scholarship Finder'}
                </h2>
                <p className="text-[11px] font-medium text-blue-900/80 dark:text-blue-300/70">
                  {isHindi ? 'योग्यता व श्रेणी अनुसार अपने लिए लागू योजनाएं देखें' : 'Find eligible schemes & grants matching your profile'}
                </p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-blue-700 dark:text-blue-400 shrink-0" />
          </div>
        </div>
      </div>
    </div>
  );
};
