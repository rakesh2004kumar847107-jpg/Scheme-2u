import React from 'react';
import { 
  Calendar, 
  Clock, 
  Share2, 
  Bookmark, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  Flame,
  Award,
  ShieldCheck,
  Building2,
  FileText
} from 'lucide-react';
import { PostItem, ComputedStatus, VerificationStatus } from '../types';
import { useApp } from '../context/AppContext';
import { getCategoryById } from '../data/categories';

interface PostCardProps {
  post: PostItem;
  layout?: 'compact' | 'standard' | 'minimal';
}

export const PostCard: React.FC<PostCardProps> = ({ post, layout = 'standard' }) => {
  const { language, navigateToPost, toggleBookmark, isBookmarked, showToast } = useApp();
  const isHindi = language === 'hi';
  const categoryInfo = getCategoryById(post.category);
  const bookmarked = isBookmarked(post.id);

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/#post/${post.slug}`;
    if (navigator.share) {
      navigator.share({
        title: post.titleEn,
        text: `${post.titleEn} - Scheme 2 U (2026 Verified)`,
        url: shareUrl
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareUrl);
      showToast(isHindi ? 'लिंक कॉपी हो गया!' : 'Link copied to clipboard!');
    }
  };

  const handleBookmarkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleBookmark(post.id);
  };

  const renderStatusBadge = (status?: ComputedStatus) => {
    switch (status) {
      case 'LAST_DATE_NEAR':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-red-600 text-white animate-pulse flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {isHindi ? 'अंतिम तिथि नजदीक' : 'LAST DATE NEAR'}
          </span>
        );
      case 'ADMIT_CARD':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-indigo-600 text-white flex items-center gap-1">
            <FileText className="w-3 h-3" />
            {isHindi ? 'एडमिट कार्ड जारी' : 'ADMIT CARD OUT'}
          </span>
        );
      case 'RESULT':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-600 text-white flex items-center gap-1">
            <Award className="w-3 h-3" />
            {isHindi ? 'रिजल्ट घोषित' : 'RESULT DECLARED'}
          </span>
        );
      case 'ANSWER_KEY':
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-purple-600 text-white">
            {isHindi ? 'उत्तर कुंजी' : 'ANSWER KEY'}
          </span>
        );
      case 'LIVE':
      default:
        return (
          <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-blue-600 text-white">
            {isHindi ? 'आवेदन सक्रिय' : 'LIVE 2026'}
          </span>
        );
    }
  };

  const renderVerificationBadge = (vStatus?: VerificationStatus, isDemo?: boolean) => {
    if (isDemo) {
      return (
        <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-amber-100 text-amber-900 border border-amber-300">
          DEMO DATA
        </span>
      );
    }
    if (vStatus === 'OFFICIAL_VERIFIED') {
      return (
        <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-emerald-50 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-emerald-600" />
          <span>{isHindi ? 'आधिकारिक सत्यापित 2026' : 'Official Verified'}</span>
        </span>
      );
    }
    if (vStatus === 'PARTIALLY_VERIFIED') {
      return (
        <span className="px-2 py-0.5 rounded-full text-[9px] font-extrabold bg-amber-50 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300 flex items-center gap-1">
          <AlertCircle className="w-3 h-3 text-amber-600" />
          <span>{isHindi ? 'आंशिक सत्यापित' : 'Partially Verified'}</span>
        </span>
      );
    }
    return (
      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
        {isHindi ? 'सत्यापन प्रक्रियाधीन' : 'Pending Verification'}
      </span>
    );
  };

  if (layout === 'compact') {
    return (
      <div 
        onClick={() => navigateToPost(post.slug)}
        className="group flex items-start justify-between p-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xs transition-all cursor-pointer"
      >
        <div className="flex-1 min-w-0 pr-3">
          <div className="flex items-center gap-1.5 flex-wrap mb-1">
            <span className="px-1.5 py-0.2 bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 text-[9px] font-black rounded">
              {post.year || 2026}
            </span>
            {renderStatusBadge(post.computedStatus)}
            {post.isHot && (
              <span className="px-1.5 py-0.2 bg-amber-500 text-slate-950 text-[9px] font-black rounded uppercase flex items-center gap-0.5">
                <Flame className="w-2.5 h-2.5" /> Hot
              </span>
            )}
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 truncate">
              {isHindi ? post.organizationHi : post.organizationEn}
            </span>
          </div>

          <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
            {isHindi ? post.titleHi : post.titleEn}
          </h4>

          <div className="flex items-center gap-3 mt-1.5 text-[11px] text-slate-500 dark:text-slate-400 flex-wrap">
            {post.importantDates?.applicationLastDate && (
              <span className="flex items-center gap-1 text-red-600 dark:text-red-400 font-semibold">
                <Clock className="w-3 h-3" />
                {isHindi ? `अंतिम तिथि: ${post.importantDates.applicationLastDate}` : `Last Date: ${post.importantDates.applicationLastDate}`}
              </span>
            )}
            {post.totalVacanciesOrAmount && (
              <span className="flex items-center gap-1 font-medium text-slate-700 dark:text-slate-300">
                <Award className="w-3 h-3 text-blue-600" />
                {post.totalVacanciesOrAmount}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col items-end gap-2 shrink-0">
          <button
            onClick={handleBookmarkClick}
            className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
              bookmarked ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
            }`}
            title="Save to bookmarks"
          >
            <Bookmark className="w-4 h-4" fill={bookmarked ? 'currentColor' : 'none'} />
          </button>
          <div className="w-7 h-7 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
            <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      id={`post-card-${post.id}`}
      onClick={() => navigateToPost(post.slug)}
      className="group relative flex flex-col justify-between bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all cursor-pointer overflow-hidden"
    >
      {/* Card Header Tag Bar */}
      <div className="p-4 pb-2">
        <div className="flex items-center justify-between gap-2 mb-2 flex-wrap">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
              {post.year || 2026}
            </span>

            {renderStatusBadge(post.computedStatus)}

            {categoryInfo && (
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${categoryInfo.badgeBg}`}>
                {isHindi ? categoryInfo.labelHi : categoryInfo.labelEn}
              </span>
            )}

            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300">
              {post.stateScope}
            </span>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              title="Share"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={handleBookmarkClick}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                bookmarked 
                  ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/60' 
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              title="Bookmark"
            >
              <Bookmark className="w-4 h-4" fill={bookmarked ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>

        {/* Organization Name & Advertisement No */}
        <div className="flex items-center justify-between text-xs font-semibold text-blue-700 dark:text-blue-400 gap-2 mb-1">
          <div className="flex items-center gap-1 truncate">
            <Building2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="truncate">{isHindi ? post.organizationHi : post.organizationEn}</span>
          </div>
          {post.advertisementNumber && post.advertisementNumber !== 'Not Announced' && (
            <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 shrink-0">
              {post.advertisementNumber}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {isHindi ? post.titleHi : post.titleEn}
        </h3>

        {/* Short Summary */}
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
          {isHindi ? post.shortSummaryHi : post.shortSummaryEn}
        </p>

        {/* Verification Status Pill */}
        <div className="mt-2.5 flex items-center justify-between gap-2">
          {renderVerificationBadge(post.verificationStatus, post.isDemoData)}
          <span className="text-[10px] text-slate-400">
            {isHindi ? 'सत्यापित: ' : 'Verified: '}{post.lastVerifiedDate || post.lastUpdated}
          </span>
        </div>
      </div>

      {/* Info Pills & Key Metas */}
      <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-850/80 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2 text-xs">
        <div className="flex flex-col min-w-0">
          {post.importantDates?.applicationLastDate ? (
            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-medium">
              <Calendar className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span className="truncate text-[11px] sm:text-xs">
                {isHindi ? 'अंतिम तिथि: ' : 'Last Date: '}
                <strong className="text-red-600 dark:text-red-400">{post.importantDates.applicationLastDate}</strong>
              </span>
            </div>
          ) : post.importantDates?.examDate ? (
            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-medium">
              <Calendar className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span className="truncate text-[11px] sm:text-xs">
                {isHindi ? 'परीक्षा: ' : 'Exam: '}
                <strong className="text-blue-600 dark:text-blue-400">{post.importantDates.examDate}</strong>
              </span>
            </div>
          ) : (
            <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
              <span>{isHindi ? 'पोर्टल सक्रिय है' : 'Portal Active'}</span>
            </div>
          )}

          {post.totalVacanciesOrAmount && (
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold mt-0.5 truncate">
              {post.totalVacanciesOrAmount}
            </div>
          )}
        </div>

        <div className="flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 group-hover:translate-x-0.5 transition-transform shrink-0">
          <span>{isHindi ? 'विवरण देखें' : 'View Details'}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
