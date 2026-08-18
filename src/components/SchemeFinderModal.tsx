import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, ArrowRight, Filter, Search } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const SchemeFinderModal: React.FC = () => {
  const { language, isSchemeFinderOpen, setIsSchemeFinderOpen, posts, navigateToPost } = useApp();
  const isHindi = language === 'hi';

  const [state, setState] = useState<'All' | 'Bihar' | 'Central'>('All');
  const [targetGroup, setTargetGroup] = useState<'student' | 'job_seeker' | 'female' | 'farmer' | 'entrepreneur'>('student');
  const [qualification, setQualification] = useState<'10th' | '12th' | 'Graduate' | 'Any'>('Any');

  if (!isSchemeFinderOpen) return null;

  // Filter schemes matching criteria
  const matchedPosts = posts.filter(post => {
    if (state === 'Bihar' && post.stateScope !== 'Bihar') return false;
    if (state === 'Central' && post.stateScope !== 'Central') return false;

    if (targetGroup === 'student' && post.category !== 'scholarships' && post.category !== 'education') {
      return false;
    }
    if (targetGroup === 'job_seeker' && post.category !== 'jobs' && post.category !== 'admit-card' && post.category !== 'results') {
      return false;
    }
    if (targetGroup === 'farmer' && !post.tags.some(t => t.toLowerCase().includes('farmer') || t.toLowerCase().includes('kisan'))) {
      return false;
    }
    if (targetGroup === 'female' && !post.titleEn.toLowerCase().includes('kanya') && !post.tags.some(t => t.toLowerCase().includes('female') || t.toLowerCase().includes('girl'))) {
      return false;
    }
    if (targetGroup === 'entrepreneur' && post.category !== 'schemes') {
      return false;
    }

    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl w-full max-w-lg p-6 shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                {isHindi ? 'स्मार्ट योजना व भर्ती खोजक' : 'Smart Scheme & Eligibility Finder'}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {isHindi ? 'अपनी श्रेणी व योग्यता अनुसार सीधे लागू होने वाली योजनाएं देखें' : 'Instant personalized scheme and job recommendations'}
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsSchemeFinderOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Profile Selectors */}
        <div className="space-y-3 text-xs">
          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              1. {isHindi ? 'आपकी पहचान (Who are you?):' : 'Select Your Profile Category:'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'student', labelEn: 'Student (छात्र)', labelHi: 'विद्यार्थी / छात्र' },
                { id: 'job_seeker', labelEn: 'Job Aspirant (नौकरी)', labelHi: 'नौकरी अभ्यर्थी' },
                { id: 'female', labelEn: 'Girl / Female (महिला)', labelHi: 'छात्रा / महिला' },
                { id: 'farmer', labelEn: 'Farmer (किसान)', labelHi: 'किसान भाई' },
                { id: 'entrepreneur', labelEn: 'Self-Employed (स्वरोजगार)', labelHi: 'उद्यमी / स्वरोजगार' }
              ].map(group => (
                <button
                  key={group.id}
                  onClick={() => setTargetGroup(group.id as any)}
                  className={`p-2 rounded-xl text-left font-bold transition-all ${
                    targetGroup === group.id
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {isHindi ? group.labelHi : group.labelEn}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1.5">
              2. {isHindi ? 'राज्य / क्षेत्र चुनें:' : 'State / Scope:'}
            </label>
            <div className="flex items-center gap-2">
              {[
                { id: 'All', labelEn: 'All India', labelHi: 'अखिल भारतीय (All India)' },
                { id: 'Bihar', labelEn: 'Bihar Special', labelHi: 'बिहार राज्य (Bihar)' },
                { id: 'Central', labelEn: 'Central Govt', labelHi: 'केंद्रीय योजनाएं' }
              ].map(st => (
                <button
                  key={st.id}
                  onClick={() => setState(st.id as any)}
                  className={`flex-1 p-2 rounded-xl text-center font-bold text-xs transition-all ${
                    state === st.id
                      ? 'bg-amber-500 text-slate-950 shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {isHindi ? st.labelHi : st.labelEn}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results List */}
        <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center justify-between text-xs font-bold text-slate-900 dark:text-white">
            <span>{isHindi ? `आपके लिए अनुकूल योजनाएं (${matchedPosts.length})` : `Matching Opportunities (${matchedPosts.length})`}</span>
          </div>

          <div className="space-y-2">
            {matchedPosts.map(post => (
              <div
                key={post.id}
                onClick={() => {
                  navigateToPost(post.slug);
                  setIsSchemeFinderOpen(false);
                }}
                className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-blue-500 cursor-pointer flex items-center justify-between gap-3 group transition-all"
              >
                <div>
                  <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400">
                    {isHindi ? post.organizationHi : post.organizationEn}
                  </span>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors line-clamp-1">
                    {isHindi ? post.titleHi : post.titleEn}
                  </h4>
                  <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold">
                    {post.totalVacanciesOrAmount || 'Direct Portal Link'}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0 group-hover:translate-x-1 transition-transform" />
              </div>
            ))}

            {matchedPosts.length === 0 && (
              <div className="p-4 text-center text-xs text-slate-500 font-medium">
                {isHindi ? 'इस चयन के लिए कोई विशेष योजना नहीं मिली। कृपया फ़िल्टर बदलें।' : 'No matching schemes found for this filter. Try adjusting filters.'}
              </div>
            )}
          </div>
        </div>

        <button
          onClick={() => setIsSchemeFinderOpen(false)}
          className="w-full py-2.5 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-bold text-xs transition-colors cursor-pointer"
        >
          {isHindi ? 'बंद करें' : 'Close'}
        </button>
      </div>
    </div>
  );
};
