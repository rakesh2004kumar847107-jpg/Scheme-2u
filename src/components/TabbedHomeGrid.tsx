import React, { useState } from 'react';
import { 
  Briefcase, 
  FileText, 
  Award, 
  Landmark, 
  GraduationCap, 
  Compass, 
  ChevronRight, 
  Sparkles, 
  Flame, 
  Filter, 
  Cpu, 
  CheckSquare, 
  BookOpen
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PostCard } from './PostCard';
import { CategoryType } from '../types';
import { CATEGORIES } from '../data/categories';

export const TabbedHomeGrid: React.FC = () => {
  const { language, posts, navigateToCategory } = useApp();
  const [activeTab, setActiveTab] = useState<CategoryType | 'all' | 'bihar-special'>('all');
  const [selectedScope, setSelectedScope] = useState<'All' | 'Bihar' | 'Central'>('All');
  const isHindi = language === 'hi';

  // Filter posts based on tab & scope
  const filteredPosts = posts.filter(post => {
    if (selectedScope === 'Bihar' && post.stateScope !== 'Bihar') return false;
    if (selectedScope === 'Central' && post.stateScope !== 'Central') return false;

    if (activeTab === 'all') return true;
    if (activeTab === 'bihar-special') return post.stateScope === 'Bihar';
    return post.category === activeTab;
  });

  // Categorized slices for compact multi-column section
  const latestJobs = posts.filter(p => p.category === 'jobs').slice(0, 4);
  const admitCards = posts.filter(p => p.category === 'admit-card').slice(0, 4);
  const results = posts.filter(p => p.category === 'results').slice(0, 4);
  const schemes = posts.filter(p => p.category === 'schemes').slice(0, 4);
  const scholarships = posts.filter(p => p.category === 'scholarships').slice(0, 4);
  const biharUpdates = posts.filter(p => p.stateScope === 'Bihar').slice(0, 4);

  const tabs: { id: CategoryType | 'all' | 'bihar-special'; labelEn: string; labelHi: string; icon: any }[] = [
    { id: 'all', labelEn: 'All Updates', labelHi: 'सभी अपडेट', icon: Sparkles },
    { id: 'jobs', labelEn: 'Latest Jobs', labelHi: 'सरकारी नौकरी', icon: Briefcase },
    { id: 'admit-card', labelEn: 'Admit Card', labelHi: 'एडमिट कार्ड', icon: FileText },
    { id: 'results', labelEn: 'Results', labelHi: 'रिजल्ट', icon: Award },
    { id: 'schemes', labelEn: 'Govt Schemes', labelHi: 'सरकारी योजनाएं', icon: Landmark },
    { id: 'scholarships', labelEn: 'Scholarship', labelHi: 'छात्रवृत्ति', icon: GraduationCap },
    { id: 'bihar-special', labelEn: 'Bihar Special', labelHi: 'बिहार विशेष', icon: Compass },
    { id: 'services', labelEn: 'Services', labelHi: 'ऑनलाइन सेवाएं', icon: Cpu }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Tab Filter Bar with State Selector */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-3">
        {/* Horizontal Scrollable Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar">
          {tabs.map(tab => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`home-tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{isHindi ? tab.labelHi : tab.labelEn}</span>
              </button>
            );
          })}
        </div>

        {/* State Filter Pills */}
        <div className="flex items-center gap-1 shrink-0 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-bold">
          <span className="text-[10px] text-slate-400 uppercase px-1.5">
            <Filter className="w-3 h-3 inline mr-0.5" />
            {isHindi ? 'क्षेत्र:' : 'Filter:'}
          </span>
          {(['All', 'Bihar', 'Central'] as const).map(scope => (
            <button
              key={scope}
              onClick={() => setSelectedScope(scope)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                selectedScope === scope
                  ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {scope === 'All' ? (isHindi ? 'सभी' : 'All') : scope === 'Bihar' ? (isHindi ? 'बिहार' : 'Bihar') : (isHindi ? 'केंद्रीय' : 'Central')}
            </button>
          ))}
        </div>
      </div>

      {/* Main Filtered Feed Grid (If specific tab is selected) */}
      {activeTab !== 'all' ? (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              {tabs.find(t => t.id === activeTab)?.[isHindi ? 'labelHi' : 'labelEn']} ({filteredPosts.length})
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPosts.map(post => (
              <PostCard key={post.id} post={post} layout="standard" />
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 p-6">
              <p className="text-sm font-medium text-slate-500">
                {isHindi ? 'इस श्रेणी में अभी कोई पोस्ट नहीं मिली।' : 'No updates found matching this filter.'}
              </p>
            </div>
          )}
        </div>
      ) : (
        /* Multi-Column High-Density Compact Home Feed (All Updates Mode) */
        <div className="space-y-6">
          {/* Top High Priority Split: Latest Jobs & Admit Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Box 1: Latest Govt Jobs */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 flex items-center justify-center">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                    {isHindi ? 'नवीनतम सरकारी नौकरी (Latest Jobs)' : 'Latest Government Jobs'}
                  </h3>
                </div>
                <button
                  onClick={() => navigateToCategory('jobs')}
                  className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-0.5 cursor-pointer"
                >
                  <span>{isHindi ? 'सभी देखें' : 'View All'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2.5">
                {latestJobs.map(post => (
                  <PostCard key={post.id} post={post} layout="compact" />
                ))}
              </div>
            </div>

            {/* Box 2: Admit Cards & Exam Intimations */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                    {isHindi ? 'प्रवेश पत्र (Admit Cards)' : 'Admit Cards & Hall Tickets'}
                  </h3>
                </div>
                <button
                  onClick={() => navigateToCategory('admit-card')}
                  className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-0.5 cursor-pointer"
                >
                  <span>{isHindi ? 'सभी देखें' : 'View All'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2.5">
                {admitCards.map(post => (
                  <PostCard key={post.id} post={post} layout="compact" />
                ))}
              </div>
            </div>
          </div>

          {/* Second Row Split: Schemes & Scholarships */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Box 3: Govt Schemes & Welfare */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-100 dark:bg-teal-950 text-teal-800 dark:text-teal-300 flex items-center justify-center">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                    {isHindi ? 'सरकारी योजनाएं (Govt Schemes)' : 'Government Welfare Schemes'}
                  </h3>
                </div>
                <button
                  onClick={() => navigateToCategory('schemes')}
                  className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-0.5 cursor-pointer"
                >
                  <span>{isHindi ? 'सभी देखें' : 'View All'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2.5">
                {schemes.map(post => (
                  <PostCard key={post.id} post={post} layout="compact" />
                ))}
              </div>
            </div>

            {/* Box 4: Scholarships & Direct Benefits */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 flex items-center justify-center">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                    {isHindi ? 'छात्रवृत्ति व प्रोत्साहन (Scholarships)' : 'Scholarships & Student Grants'}
                  </h3>
                </div>
                <button
                  onClick={() => navigateToCategory('scholarships')}
                  className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline flex items-center gap-0.5 cursor-pointer"
                >
                  <span>{isHindi ? 'सभी देखें' : 'View All'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2.5">
                {scholarships.map(post => (
                  <PostCard key={post.id} post={post} layout="compact" />
                ))}
              </div>
            </div>
          </div>

          {/* Third Row: Bihar Special & Examination Results */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Box 5: Bihar Special Section */}
            <div className="bg-gradient-to-br from-rose-50/50 via-white to-orange-50/40 dark:from-slate-900 dark:via-slate-900 dark:to-rose-950/20 border-2 border-rose-200 dark:border-rose-900/60 rounded-2xl p-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-rose-100 dark:border-rose-900/50 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-rose-600 text-white flex items-center justify-center font-bold">
                    <Compass className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-rose-950 dark:text-rose-200 text-sm sm:text-base">
                      {isHindi ? 'बिहार विशेष अपडेट्स (Bihar Special)' : 'Bihar Government Updates'}
                    </h3>
                    <span className="text-[10px] text-rose-700 dark:text-rose-400 font-semibold">
                      BPSC, BSSC, RTPS, Police & Medhasoft
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => navigateToCategory('bihar')}
                  className="text-xs font-bold text-rose-600 dark:text-rose-400 hover:underline flex items-center gap-0.5 cursor-pointer"
                >
                  <span>{isHindi ? 'सभी देखें' : 'View All'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2.5">
                {biharUpdates.map(post => (
                  <PostCard key={post.id} post={post} layout="compact" />
                ))}
              </div>
            </div>

            {/* Box 6: Results & Merit Lists */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 flex items-center justify-center">
                    <Award className="w-4 h-4" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                    {isHindi ? 'परीक्षा परिणाम व कट-ऑफ (Results)' : 'Exam Results & Cut-Off Marks'}
                  </h3>
                </div>
                <button
                  onClick={() => navigateToCategory('results')}
                  className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline flex items-center gap-0.5 cursor-pointer"
                >
                  <span>{isHindi ? 'सभी देखें' : 'View All'}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="space-y-2.5">
                {results.map(post => (
                  <PostCard key={post.id} post={post} layout="compact" />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
