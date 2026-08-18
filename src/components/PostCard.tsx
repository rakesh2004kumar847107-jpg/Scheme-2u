import React from 'react';
import { 
  Calendar, 
  Clock, 
  Share2, 
  Bookmark, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  MapPin, 
  ArrowRight,
  Flame,
  Award
} from 'lucide-react';
import { PostItem } from '../types';
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
        text: `${post.titleEn} - Scheme 2 U`,
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

  if (layout === 'compact') {
    return (
      <div 
        onClick={() => navigateToPost(post.slug)}
        className="group flex items-start justify-between p-3 bg-white dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700/70 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-xs transition-all cursor-pointer"
      >
        <div className="flex-1 min-w-0 pr-3">
          <div className="flex items-center gap-1.5 flex-wrap mb-1">
            {post.isNew && (
              <span className="px-1.5 py-0.2 bg-red-600 text-white text-[9px] font-black rounded uppercase">
                New
              </span>
            )}
            {post.isHot && (
              <span className="px-1.5 py-0.2 bg-amber-500 text-slate-950 text-[9px] font-black rounded uppercase flex items-center gap-0.5">
                <Flame className="w-2.5 h-2.5" /> Hot
              </span>
            )}
            <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400">
              {isHindi ? post.organizationHi : post.organizationEn}
            </span>
          </div>

          <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug">
            {isHindi ? post.titleHi : post.titleEn}
          </h4>

          <div className="flex items-center gap-3 mt-1.5 text-[11px] text-slate-500 dark:text-slate-400">
            {post.importantDates.applicationLastDate && (
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
            className={`p-1 rounded-md transition-colors ${
              bookmarked ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200'
            }`}
            title="Save to bookmarks"
          >
            <Bookmark className="w-3.5 h-3.5" fill={bookmarked ? 'currentColor' : 'none'} />
          </button>
          <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
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
      className="group relative flex flex-col justify-between bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:shadow-md transition-all cursor-pointer overflow-hidden"
    >
      {/* Card Header Tag Bar */}
      <div className="p-4 pb-2">
        <div className="flex items-center justify-between gap-2 mb-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            {categoryInfo && (
              <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${categoryInfo.badgeBg}`}>
                {isHindi ? categoryInfo.labelHi : categoryInfo.labelEn}
              </span>
            )}
            <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300">
              {post.stateScope}
            </span>
            {post.isNew && (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-600 text-white animate-pulse">
                NEW
              </span>
            )}
            {post.isHot && (
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-500 text-slate-950 flex items-center gap-0.5">
                <Flame className="w-2.5 h-2.5" /> HOT
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleShare}
              className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              title="Share"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={handleBookmarkClick}
              className={`p-1.5 rounded-lg transition-colors ${
                bookmarked 
                  ? 'text-blue-600 bg-blue-50 dark:bg-blue-950/60' 
                  : 'text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
              title="Bookmark"
            >
              <Bookmark className="w-4 h-4" fill={bookmarked ? 'currentColor' : 'none'} />
            </button>
          </div>
        </div>

        {/* Organization Name */}
        <div className="text-xs font-semibold text-blue-700 dark:text-blue-400 flex items-center gap-1">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
          <span className="truncate">{isHindi ? post.organizationHi : post.organizationEn}</span>
        </div>

        {/* Title */}
        <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mt-1.5 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {isHindi ? post.titleHi : post.titleEn}
        </h3>

        {/* Short Summary */}
        <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
          {isHindi ? post.shortSummaryHi : post.shortSummaryEn}
        </p>
      </div>

      {/* Info Pills & Key Metas */}
      <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-850/50 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between gap-2 text-xs">
        <div className="flex flex-col min-w-0">
          {post.importantDates.applicationLastDate ? (
            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-medium">
              <Calendar className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span className="truncate">
                {isHindi ? 'अंतिम तिथि: ' : 'Last Date: '}
                <strong className="text-red-600 dark:text-red-400">{post.importantDates.applicationLastDate}</strong>
              </span>
            </div>
          ) : post.importantDates.examDate ? (
            <div className="flex items-center gap-1 text-slate-600 dark:text-slate-300 font-medium">
              <Calendar className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span className="truncate">
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
            <div className="text-[11px] text-slate-500 dark:text-slate-400 font-semibold mt-0.5">
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
