import React from 'react';
import { Flame, Send, MessageCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { SOCIAL_LINKS } from '../data/social';

export const BreakingTicker: React.FC = () => {
  const { language, posts, navigateToPost } = useApp();
  const isHindi = language === 'hi';

  // Get hot/trending or new posts for ticker
  const breakingItems = posts.filter(p => p.isHot || p.isNew || p.isTrending).slice(0, 6);

  return (
    <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-100 shadow-xs overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 flex items-center h-10">
        {/* Ticker Badge */}
        <div className="flex items-center gap-1.5 bg-red-600 text-white px-2.5 py-1 rounded-lg text-xs font-black uppercase tracking-wider shrink-0 mr-3 shadow-xs">
          <Flame className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span className="text-[11px] font-extrabold tracking-wide">
            {isHindi ? 'ताज़ा अपडेट' : 'Flash News'}
          </span>
        </div>

        {/* Marquee Content */}
        <div className="flex-1 overflow-hidden relative">
          <div className="animate-marquee flex items-center gap-8 text-xs font-medium cursor-pointer whitespace-nowrap">
            {breakingItems.map((item, idx) => (
              <button
                key={`${item.id}-${idx}`}
                onClick={() => navigateToPost(item.slug)}
                className="flex items-center gap-1.5 hover:text-blue-600 dark:hover:text-blue-400 transition-colors focus:outline-hidden"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                <span className="font-bold text-blue-700 dark:text-blue-400">
                  [{isHindi ? item.organizationHi : item.organizationEn}]:
                </span>
                <span className="font-semibold text-slate-900 dark:text-white">{isHindi ? item.titleHi : item.titleEn}</span>
                <span className="text-[10px] bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-1.5 py-0.5 rounded text-slate-700 dark:text-slate-300 font-bold ml-1">
                  {item.importantDates.applicationLastDate ? `Last Date: ${item.importantDates.applicationLastDate}` : 'Active'}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Fast Join Links on the Right */}
        <div className="hidden sm:flex items-center gap-2 shrink-0 ml-3 pl-3 border-l border-slate-200 dark:border-slate-800 text-xs">
          <a
            href={SOCIAL_LINKS.telegram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-sky-50 dark:bg-sky-950/60 hover:bg-sky-100 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 px-2 py-0.5 rounded text-[11px] font-bold transition-all"
            title="Join Telegram"
          >
            <Send className="w-3 h-3" />
            <span>Telegram</span>
          </a>
          <a
            href={SOCIAL_LINKS.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-emerald-600 hover:bg-emerald-700 px-2 py-0.5 rounded text-[11px] font-bold text-white transition-all shadow-xs"
            title="Join WhatsApp"
          >
            <MessageCircle className="w-3 h-3" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
