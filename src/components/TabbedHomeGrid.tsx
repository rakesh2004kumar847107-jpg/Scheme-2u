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
  Filter, 
  Cpu, 
  ShieldCheck,
  CheckCircle2,
  Calendar
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PostCard } from './PostCard';
import { CategoryType } from '../types';

export const TabbedHomeGrid: React.FC = () => {
  const { language, posts, navigateToCategory, yearFilter, setYearFilter } = useApp();
  const [activeTab, setActiveTab] = useState<CategoryType | 'all' | 'bihar-special'>('all');
  const [selectedScope, setSelectedScope] = useState<'All' | 'Bihar' | 'Central'>('All');
  const isHindi = language === 'hi';

  // Filter posts based on tab & scope & year
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
    { id: 'all', labelEn: 'All 2026 Updates', labelHi: 'सभी 2026 अपडेट', icon: Sparkles },
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
      {/* Source Verification & Zero Hallucination Guarantee Banner */}
      <div className="bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-emerald-950 dark:text-emerald-200">
              {isHindi ? '100% स्रोत-सत्यापित 2026 अपडेट्स (Zero-Hallucination Policy)' : '100% Official Source-Verified 2026 Updates'}
            </h4>
            <p className="text-emerald-800 dark:text-emerald-300 text-[11px]">
              {isHindi 
                ? 'सभी तिथियां, रिक्तियां व लिंक्स केवल BPSC, CSBC, BPSSC, BSEB, NTA व सरकारी गजट से प्रमाणित हैं।' 
                : 'All dates, vacancies & links are verified strictly against official Government portals and PDFs.'}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
          <span className="px-2.5 py-1 rounded-lg bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 font-black text-xs flex items-center gap-1">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>2026 Live Portal</span>
          </span>
        </div>
      </div>

      {/* Tab Filter Bar with State & Year Selector */}
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
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
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
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-700 text-white flex items-center justify-center shadow-[0_4px_12px_rgba(37,99,235,0.35),inset_0_1px_1px_rgba(255,255,255,0.6)]">
                    <div className="absolute inset-x-1 top-0.5 h-2.5 bg-gradient-to-b from-white/40 to-transparent rounded-t-lg pointer-events-none" />
                    <Briefcase className="w-4 h-4 drop-shadow-xs" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                    {isHindi ? 'नवीनतम सरकारी नौकरी (Latest Jobs 2026)' : 'Latest Government Jobs 2026'}
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
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-orange-600 text-white flex items-center justify-center shadow-[0_4px_12px_rgba(245,158,11,0.35),inset_0_1px_1px_rgba(255,255,255,0.6)]">
                    <div className="absolute inset-x-1 top-0.5 h-2.5 bg-gradient-to-b from-white/40 to-transparent rounded-t-lg pointer-events-none" />
                    <FileText className="w-4 h-4 drop-shadow-xs" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                    {isHindi ? 'प्रवेश पत्र (Admit Cards 2026)' : 'Admit Cards & Hall Tickets 2026'}
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
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-700 text-white flex items-center justify-center shadow-[0_4px_12px_rgba(20,184,166,0.35),inset_0_1px_1px_rgba(255,255,255,0.6)]">
                    <div className="absolute inset-x-1 top-0.5 h-2.5 bg-gradient-to-b from-white/40 to-transparent rounded-t-lg pointer-events-none" />
                    <Landmark className="w-4 h-4 drop-shadow-xs" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                    {isHindi ? 'सरकारी योजनाएं (Govt Schemes 2026)' : 'Government Welfare Schemes 2026'}
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
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-indigo-400 to-purple-800 text-white flex items-center justify-center shadow-[0_4px_12px_rgba(99,102,241,0.35),inset_0_1px_1px_rgba(255,255,255,0.6)]">
                    <div className="absolute inset-x-1 top-0.5 h-2.5 bg-gradient-to-b from-white/40 to-transparent rounded-t-lg pointer-events-none" />
                    <GraduationCap className="w-4 h-4 drop-shadow-xs" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                    {isHindi ? 'छात्रवृत्ति व प्रोत्साहन (Scholarships 2026)' : 'Scholarships & Student Grants 2026'}
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
              <div className="flex items-center justify-between border-b border-rose-100 dark:border-slate-800 pb-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-rose-500 to-red-700 text-white flex items-center justify-center shadow-[0_4px_12px_rgba(225,29,72,0.35),inset_0_1px_1px_rgba(255,255,255,0.6)]">
                    <div className="absolute inset-x-1 top-0.5 h-2.5 bg-gradient-to-b from-white/40 to-transparent rounded-t-lg pointer-events-none" />
                    <Compass className="w-4 h-4 drop-shadow-xs" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                    {isHindi ? 'बिहार विशेष 2026 (BPSC, CSBC, BSEB, PMS)' : 'Bihar Government Portal 2026'}
                  </h3>
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

            {/* Box 6: Examination Results */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3 mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-700 text-white flex items-center justify-center shadow-[0_4px_12px_rgba(16,185,129,0.35),inset_0_1px_1px_rgba(255,255,255,0.6)]">
                    <div className="absolute inset-x-1 top-0.5 h-2.5 bg-gradient-to-b from-white/40 to-transparent rounded-t-lg pointer-events-none" />
                    <Award className="w-4 h-4 drop-shadow-xs" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-sm sm:text-base">
                    {isHindi ? 'परीक्षा परिणाम व स्कोरकार्ड (Results 2026)' : 'Results & Scorecards 2026'}
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
