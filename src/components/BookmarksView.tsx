import React from 'react';
import { Bookmark, ArrowLeft, Trash2, ExternalLink } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PostCard } from './PostCard';

export const BookmarksView: React.FC = () => {
  const { language, bookmarks, posts, navigateToHome } = useApp();
  const isHindi = language === 'hi';

  const bookmarkedPosts = posts.filter(p => bookmarks.includes(p.id));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <button
            onClick={navigateToHome}
            className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-blue-600 mb-1 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isHindi ? 'मुख्य पृष्ठ' : 'Back to Home'}</span>
          </button>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Bookmark className="w-6 h-6 text-blue-600" fill="currentColor" />
            <span>{isHindi ? `सहेजे गए अपडेट्स (${bookmarkedPosts.length})` : `Saved Bookmarks (${bookmarkedPosts.length})`}</span>
          </h1>
          <p className="text-xs text-slate-500">
            {isHindi ? 'आपके द्वारा सहेजी गई सभी महत्वपूर्ण नौकरियां और योजनाएं यहाँ सुरक्षित हैं।' : 'Quick access to all opportunities and schemes saved on this device.'}
          </p>
        </div>
      </div>

      {bookmarkedPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bookmarkedPosts.map(post => (
            <PostCard key={post.id} post={post} layout="standard" />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 p-8 space-y-3">
          <Bookmark className="w-12 h-12 text-slate-300 dark:text-slate-700 mx-auto" />
          <h3 className="text-base font-bold text-slate-700 dark:text-slate-300">
            {isHindi ? 'कोई सहेजा गया पोस्ट नहीं मिला' : 'No Bookmarked Posts Yet'}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            {isHindi 
              ? 'किसी भी नौकरी या योजना के कार्ड पर बुकमार्क आइकन पर क्लिक करके उसे यहाँ सेव करें।'
              : 'Click the bookmark icon on any job or scheme card to save it for quick reference later.'}
          </p>
          <button
            onClick={navigateToHome}
            className="mt-2 px-5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors cursor-pointer"
          >
            {isHindi ? 'अपडेट्स देखें' : 'Explore Updates'}
          </button>
        </div>
      )}
    </div>
  );
};
