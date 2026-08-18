import React, { useState } from 'react';
import { 
  ChevronRight, 
  ArrowLeft, 
  Filter, 
  Sparkles, 
  Search, 
  Briefcase, 
  Compass, 
  Calendar,
  Layers
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CategoryType } from '../types';
import { getCategoryById } from '../data/categories';
import { PostCard } from './PostCard';

interface CategoryViewProps {
  category: CategoryType;
}

export const CategoryView: React.FC<CategoryViewProps> = ({ category }) => {
  const { language, posts, navigateToHome } = useApp();
  const isHindi = language === 'hi';
  const categoryInfo = getCategoryById(category);

  const [searchFilter, setSearchFilter] = useState('');
  const [selectedScope, setSelectedScope] = useState<'All' | 'Bihar' | 'Central'>('All');
  const [sortBy, setSortBy] = useState<'newest' | 'closing-soon'>('newest');

  // Filter posts
  const categoryPosts = posts.filter(post => {
    // Check category or state scope for bihar
    const matchesCategory = category === 'bihar' 
      ? post.stateScope === 'Bihar' 
      : category === 'central'
      ? post.stateScope === 'Central'
      : post.category === category;

    if (!matchesCategory) return false;

    if (selectedScope === 'Bihar' && post.stateScope !== 'Bihar') return false;
    if (selectedScope === 'Central' && post.stateScope !== 'Central') return false;

    if (searchFilter.trim()) {
      const q = searchFilter.toLowerCase();
      return (
        post.titleEn.toLowerCase().includes(q) ||
        post.titleHi.toLowerCase().includes(q) ||
        post.organizationEn.toLowerCase().includes(q) ||
        post.organizationHi.toLowerCase().includes(q) ||
        post.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
        <button 
          onClick={navigateToHome} 
          className="hover:text-blue-600 dark:hover:text-blue-400 font-medium cursor-pointer"
        >
          {isHindi ? 'मुख्य पृष्ठ' : 'Home'}
        </button>
        <ChevronRight className="w-3 h-3 text-slate-400" />
        <span className="font-semibold text-slate-800 dark:text-slate-200">
          {categoryInfo ? (isHindi ? categoryInfo.labelHi : categoryInfo.labelEn) : category}
        </span>
      </nav>

      {/* Category Header Banner */}
      <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-slate-50 dark:from-slate-850 dark:via-slate-900 dark:to-slate-850 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className={`px-2.5 py-0.5 rounded-lg text-xs font-bold border ${categoryInfo?.badgeBg || 'bg-blue-100 text-blue-800'}`}>
                {isHindi ? categoryInfo?.labelHi : categoryInfo?.labelEn}
              </span>
              <span className="text-xs text-slate-500 font-semibold">
                {categoryPosts.length} {isHindi ? 'उपलब्ध अपडेट्स' : 'Active Listings'}
              </span>
            </div>

            <h1 className="text-xl sm:text-3xl font-black text-slate-900 dark:text-white">
              {isHindi ? categoryInfo?.labelHi : categoryInfo?.labelEn}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1 max-w-2xl font-medium">
              {isHindi ? categoryInfo?.descriptionHi : categoryInfo?.descriptionEn}
            </p>
          </div>

          <button
            onClick={navigateToHome}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 transition-colors self-start sm:self-auto cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isHindi ? 'सभी श्रेणियां' : 'All Updates'}</span>
          </button>
        </div>

        {/* Filter & Search Toolbar */}
        <div className="pt-4 border-t border-slate-200/80 dark:border-slate-750 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* In-category search */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              placeholder={isHindi ? "इस श्रेणी में खोजें..." : "Search within this category..."}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-xs text-slate-900 dark:text-white placeholder-slate-400 focus:outline-hidden focus:border-blue-500"
            />
          </div>

          {/* State Scope Filter */}
          <div className="flex items-center gap-1 bg-white dark:bg-slate-800 p-1 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold">
            <span className="text-[10px] text-slate-400 uppercase px-1.5">
              <Filter className="w-3 h-3 inline mr-0.5" /> Scope:
            </span>
            {(['All', 'Bihar', 'Central'] as const).map(scope => (
              <button
                key={scope}
                onClick={() => setSelectedScope(scope)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedScope === scope
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {scope === 'All' ? (isHindi ? 'सभी' : 'All') : scope}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categoryPosts.map(post => (
          <PostCard key={post.id} post={post} layout="standard" />
        ))}
      </div>

      {/* Empty State */}
      {categoryPosts.length === 0 && (
        <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 p-6 space-y-2">
          <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
            {isHindi ? 'कोई परिणाम नहीं मिला।' : 'No updates found matching your search filter.'}
          </p>
          <button
            onClick={() => {
              setSearchFilter('');
              setSelectedScope('All');
            }}
            className="text-xs font-bold text-blue-600 hover:underline cursor-pointer"
          >
            {isHindi ? 'फ़िल्टर हटाएं' : 'Clear Filters'}
          </button>
        </div>
      )}
    </div>
  );
};
