import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Share2, 
  Bookmark, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  ArrowLeft, 
  HelpCircle, 
  ChevronDown, 
  Printer, 
  ShieldCheck, 
  FileText, 
  FileDown, 
  Sparkles, 
  Send, 
  MessageCircle, 
  Facebook, 
  Twitter, 
  Link as LinkIcon,
  Award,
  Landmark,
  UserCheck,
  CreditCard,
  Layers,
  ListOrdered,
  FileCheck2
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PostItem } from '../types';
import { getCategoryById } from '../data/categories';
import { SOCIAL_LINKS } from '../data/social';
import { PostCard } from './PostCard';

interface DetailViewProps {
  slug: string;
}

export const DetailView: React.FC<DetailViewProps> = ({ slug }) => {
  const { 
    language, 
    posts, 
    navigateToHome, 
    navigateToCategory, 
    toggleBookmark, 
    isBookmarked, 
    showToast, 
    navigateToPost 
  } = useApp();
  
  const isHindi = language === 'hi';
  const post = posts.find(p => p.slug === slug) || posts[0];
  const categoryInfo = getCategoryById(post.category);
  const bookmarked = isBookmarked(post.id);

  // Accordion state for FAQs
  const [openFaqIndices, setOpenFaqIndices] = useState<number[]>([0]);

  const toggleFaq = (index: number) => {
    setOpenFaqIndices(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const handleCopyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    try {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch {}
    showToast(isHindi ? 'लिंक कॉपी हो गया!' : 'Link copied to clipboard!');
  };

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.titleEn,
        text: `${post.titleEn} - Details on Scheme 2 U`,
        url: window.location.href
      }).catch(() => {});
    } else {
      handleCopyLink();
    }
  };

  const relatedPosts = posts
    .filter(p => p.id !== post.id && (p.category === post.category || p.stateScope === post.stateScope))
    .slice(0, 3);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 no-print flex-wrap">
        <button 
          onClick={navigateToHome} 
          className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium cursor-pointer"
        >
          {isHindi ? 'मुख्य पृष्ठ' : 'Home'}
        </button>
        <ChevronRight className="w-3 h-3 text-slate-400" />
        {categoryInfo && (
          <>
            <button 
              onClick={() => navigateToCategory(post.category)}
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium cursor-pointer"
            >
              {isHindi ? categoryInfo.labelHi : categoryInfo.labelEn}
            </button>
            <ChevronRight className="w-3 h-3 text-slate-400" />
          </>
        )}
        <span className="font-semibold text-slate-800 dark:text-slate-200 truncate max-w-[200px] sm:max-w-xs">
          {isHindi ? post.titleHi : post.titleEn}
        </span>
      </nav>

      {/* Back Button & Action Bar */}
      <div className="flex items-center justify-between no-print">
        <button
          onClick={navigateToHome}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-700 dark:text-slate-300 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{isHindi ? 'वापस जाएं' : 'Back to Home'}</span>
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title="Print or Save as PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{isHindi ? 'प्रिंट करें' : 'Print / PDF'}</span>
          </button>

          <button
            onClick={() => toggleBookmark(post.id)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors cursor-pointer ${
              bookmarked
                ? 'bg-blue-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" fill={bookmarked ? 'currentColor' : 'none'} />
            <span>{bookmarked ? (isHindi ? 'सहेजा गया' : 'Saved') : (isHindi ? 'सेव करें' : 'Bookmark')}</span>
          </button>

          <button
            onClick={handleNativeShare}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 text-xs font-bold hover:bg-blue-100 transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{isHindi ? 'शेयर' : 'Share'}</span>
          </button>
        </div>
      </div>

      {/* Main Detail Article Card */}
      <article className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-8 shadow-xs space-y-6">
        {/* Category & Verified Header */}
        <div className="flex items-center justify-between gap-2 flex-wrap border-b border-slate-100 dark:border-slate-800 pb-4">
          <div className="flex items-center gap-2 flex-wrap">
            {categoryInfo && (
              <span className={`px-2.5 py-1 rounded-lg text-xs font-bold border ${categoryInfo.badgeBg}`}>
                {isHindi ? categoryInfo.labelHi : categoryInfo.labelEn}
              </span>
            )}
            <span className="px-2 py-1 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {post.stateScope}
            </span>
            {post.isNew && (
              <span className="px-2 py-0.5 rounded-lg text-xs font-black bg-red-600 text-white animate-pulse">
                NEW
              </span>
            )}
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <Clock className="w-3.5 h-3.5 text-blue-500" />
            <span>{isHindi ? 'अंतिम अपडेट: ' : 'Last Updated: '} <strong>{post.lastUpdated}</strong></span>
          </div>
        </div>

        {/* Organization Subhead */}
        <div className="text-xs sm:text-sm font-bold text-blue-700 dark:text-blue-400 flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
          <span>{isHindi ? post.organizationHi : post.organizationEn}</span>
        </div>

        {/* Bilingual Titles */}
        <div>
          <h1 className="text-lg sm:text-2xl font-black text-slate-900 dark:text-white leading-tight">
            {isHindi ? post.titleHi : post.titleEn}
          </h1>
          <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
            {isHindi ? post.titleEn : post.titleHi}
          </p>
        </div>

        {/* Featured Image Banner */}
        <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 max-h-72">
          <img
            src={post.featuredImage}
            alt={post.titleEn}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4 sm:p-6">
            <div className="text-white space-y-1">
              <span className="text-xs font-extrabold uppercase px-2 py-0.5 rounded bg-blue-600/90 tracking-wide">
                Scheme 2 U Verified Information
              </span>
              <p className="text-xs sm:text-sm text-slate-200 font-medium">
                {isHindi ? post.postNameHi : post.postNameEn}
                {post.totalVacanciesOrAmount && ` • ${post.totalVacanciesOrAmount}`}
              </p>
            </div>
          </div>
        </div>

        {/* Short Summary Highlights Box */}
        <div className="p-4 sm:p-5 rounded-2xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/50 space-y-2">
          <div className="flex items-center gap-2 text-xs font-extrabold text-blue-900 dark:text-blue-300 uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>{isHindi ? 'संक्षिप्त विवरण व मुख्य बिंदु' : 'Summary & Key Highlights'}</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
            {isHindi ? post.shortSummaryHi : post.shortSummaryEn}
          </p>
        </div>

        {/* TOP OFFICIAL ACTION BOX (Sticky Quick Access) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white border-2 border-amber-400 shadow-md space-y-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="text-xs sm:text-sm font-extrabold uppercase text-amber-300 tracking-wider">
                {isHindi ? 'सीधे आधिकारिक लिंक (100% प्रामाणिक)' : 'Direct Official Links (100% Authentic)'}
              </span>
            </div>
            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-300 font-semibold">
              Official Government Servers (.gov.in / .nic.in)
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
            {post.officialLinks.applyOnlineUrl && (
              <a
                href={post.officialLinks.applyOnlineUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02]"
              >
                <ExternalLink className="w-4 h-4" />
                <span>{isHindi ? 'ऑनलाइन आवेदन करें' : 'Apply Online'}</span>
              </a>
            )}

            {post.officialLinks.admitCardUrl && (
              <a
                href={post.officialLinks.admitCardUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02]"
              >
                <Download className="w-4 h-4" />
                <span>{isHindi ? 'एडमिट कार्ड डाउनलोड' : 'Download Admit Card'}</span>
              </a>
            )}

            {post.officialLinks.resultUrl && (
              <a
                href={post.officialLinks.resultUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02]"
              >
                <Award className="w-4 h-4" />
                <span>{isHindi ? 'रिजल्ट चेक करें' : 'Check Result'}</span>
              </a>
            )}

            {post.officialLinks.answerKeyUrl && (
              <a
                href={post.officialLinks.answerKeyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-black text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02]"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>{isHindi ? 'उत्तर कुंजी डाउनलोड' : 'Download Answer Key'}</span>
              </a>
            )}

            <a
              href={post.officialLinks.officialNotificationPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02]"
            >
              <FileDown className="w-4 h-4" />
              <span>{isHindi ? 'आधिकारिक नोटिफिकेशन PDF' : 'Official Notification PDF'}</span>
            </a>

            <a
              href={post.officialLinks.officialWebsiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold text-xs sm:text-sm border border-slate-700 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>{isHindi ? 'आधिकारिक वेबसाइट' : 'Official Website'}</span>
            </a>
          </div>
        </div>

        {/* SECTION 1: IMPORTANT DATES (Table Format) */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-slate-900 dark:text-white border-l-4 border-blue-600 pl-2.5">
            <Calendar className="w-5 h-5 text-blue-600" />
            <h2>{isHindi ? 'महत्वपूर्ण तिथियां (Important Dates)' : 'Important Dates'}</h2>
          </div>

          <div className="overflow-hidden border border-slate-200 dark:border-slate-700 rounded-2xl">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border-b border-slate-200 dark:border-slate-700">
                <tr>
                  <th className="py-2.5 px-4">{isHindi ? 'विवरण (Event)' : 'Event'}</th>
                  <th className="py-2.5 px-4">{isHindi ? 'तिथि (Date)' : 'Date'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {post.importantDates.applicationStart && (
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-2.5 px-4 font-semibold text-slate-700 dark:text-slate-300">
                      {isHindi ? 'आवेदन शुरू होने की तिथि' : 'Application Start Date'}
                    </td>
                    <td className="py-2.5 px-4 font-bold text-slate-900 dark:text-white">
                      {post.importantDates.applicationStart}
                    </td>
                  </tr>
                )}
                {post.importantDates.applicationLastDate && (
                  <tr className="bg-red-50/50 dark:bg-red-950/20 hover:bg-red-50 dark:hover:bg-red-950/30">
                    <td className="py-2.5 px-4 font-bold text-red-700 dark:text-red-300 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {isHindi ? 'आवेदन की अंतिम तिथि' : 'Application Last Date'}
                    </td>
                    <td className="py-2.5 px-4 font-black text-red-600 dark:text-red-400">
                      {post.importantDates.applicationLastDate}
                    </td>
                  </tr>
                )}
                {post.importantDates.feePaymentLastDate && (
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-2.5 px-4 font-semibold text-slate-700 dark:text-slate-300">
                      {isHindi ? 'शुल्क भुगतान की अंतिम तिथि' : 'Fee Payment Last Date'}
                    </td>
                    <td className="py-2.5 px-4 font-bold text-slate-900 dark:text-white">
                      {post.importantDates.feePaymentLastDate}
                    </td>
                  </tr>
                )}
                {post.importantDates.admitCardDate && (
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-2.5 px-4 font-semibold text-slate-700 dark:text-slate-300">
                      {isHindi ? 'एडमिट कार्ड जारी होने की तिथि' : 'Admit Card Release Date'}
                    </td>
                    <td className="py-2.5 px-4 font-bold text-amber-600 dark:text-amber-400">
                      {post.importantDates.admitCardDate}
                    </td>
                  </tr>
                )}
                {post.importantDates.examDate && (
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-2.5 px-4 font-semibold text-slate-700 dark:text-slate-300">
                      {isHindi ? 'परीक्षा तिथि' : 'Examination Date'}
                    </td>
                    <td className="py-2.5 px-4 font-bold text-blue-600 dark:text-blue-400">
                      {post.importantDates.examDate}
                    </td>
                  </tr>
                )}
                {post.importantDates.answerKeyDate && (
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-2.5 px-4 font-semibold text-slate-700 dark:text-slate-300">
                      {isHindi ? 'उत्तर कुंजी जारी' : 'Answer Key Date'}
                    </td>
                    <td className="py-2.5 px-4 font-bold text-purple-600 dark:text-purple-400">
                      {post.importantDates.answerKeyDate}
                    </td>
                  </tr>
                )}
                {post.importantDates.resultDate && (
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-2.5 px-4 font-semibold text-slate-700 dark:text-slate-300">
                      {isHindi ? 'रिजल्ट घोषणा की तिथि' : 'Result Declaration Date'}
                    </td>
                    <td className="py-2.5 px-4 font-bold text-emerald-600 dark:text-emerald-400">
                      {post.importantDates.resultDate}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 2: APPLICATION FEE & AGE LIMIT (Split Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Application Fee Box */}
          {post.applicationFee && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2.5">
              <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
                <CreditCard className="w-4 h-4 text-emerald-600" />
                <h3>{isHindi ? 'आवेदन शुल्क (Application Fee)' : 'Application Fee'}</h3>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-750">
                  <span className="text-slate-600 dark:text-slate-400">General / OBC / EWS:</span>
                  <strong className="text-slate-900 dark:text-white">{post.applicationFee.generalObcEws}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-750">
                  <span className="text-slate-600 dark:text-slate-400">SC / ST / PwD:</span>
                  <strong className="text-slate-900 dark:text-white">{post.applicationFee.scStPwd}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-750">
                  <span className="text-slate-600 dark:text-slate-400">Female Candidates:</span>
                  <strong className="text-slate-900 dark:text-white">{post.applicationFee.female}</strong>
                </div>
                <div className="pt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  <strong>Payment Mode:</strong> {post.applicationFee.paymentMode}
                </div>
              </div>
            </div>
          )}

          {/* Age Limit Box */}
          {post.ageLimit && (
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 space-y-2.5">
              <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-700 pb-2">
                <UserCheck className="w-4 h-4 text-blue-600" />
                <h3>{isHindi ? 'आयु सीमा (Age Limit)' : 'Age Limit & Relaxations'}</h3>
              </div>

              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-750">
                  <span className="text-slate-600 dark:text-slate-400">{isHindi ? 'न्यूनतम आयु:' : 'Minimum Age:'}</span>
                  <strong className="text-slate-900 dark:text-white">{post.ageLimit.minAge}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-750">
                  <span className="text-slate-600 dark:text-slate-400">{isHindi ? 'अधिकतम आयु:' : 'Maximum Age:'}</span>
                  <strong className="text-slate-900 dark:text-white">{post.ageLimit.maxAge}</strong>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100 dark:border-slate-750">
                  <span className="text-slate-600 dark:text-slate-400">{isHindi ? 'आयु गणना तिथि:' : 'Age as on date:'}</span>
                  <strong className="text-blue-600 dark:text-blue-400">{post.ageLimit.asOnDate}</strong>
                </div>
                <div className="pt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  <strong>Relaxation:</strong> {post.ageLimit.ageRelaxationRule}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* SECTION 3: ELIGIBILITY & VACANCY DETAILS */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-slate-900 dark:text-white border-l-4 border-indigo-600 pl-2.5">
            <Award className="w-5 h-5 text-indigo-600" />
            <h2>{isHindi ? 'शैक्षणिक योग्यता व पद विवरण (Eligibility Details)' : 'Eligibility & Vacancy Details'}</h2>
          </div>

          <div className="space-y-3">
            {post.eligibility.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-850">
                <div className="flex items-center justify-between gap-2 flex-wrap pb-2 border-b border-slate-100 dark:border-slate-700">
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {item.postName}
                  </h3>
                  {item.totalPosts && (
                    <span className="px-2 py-0.5 rounded-md text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                      {item.totalPosts} {isHindi ? 'पद' : 'Posts'}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-2 font-medium">
                  {isHindi ? item.eligibilityHi : item.eligibilityEn}
                </p>
                <div className="mt-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-50 dark:bg-slate-800 p-2.5 rounded-xl">
                  <strong>{isHindi ? 'विस्तृत योग्यता: ' : 'Qualification: '}</strong>
                  {item.qualification}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: REQUIRED DOCUMENTS */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-slate-900 dark:text-white border-l-4 border-amber-500 pl-2.5">
            <FileText className="w-5 h-5 text-amber-500" />
            <h2>{isHindi ? 'आवश्यक दस्तावेज (Required Documents Checklist)' : 'Required Documents Checklist'}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {(isHindi ? post.requiredDocuments.hi : post.requiredDocuments.en).map((doc, idx) => (
              <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 text-xs font-medium text-slate-800 dark:text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: SELECTION PROCESS (If applicable) */}
        {post.selectionProcess && (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-slate-900 dark:text-white border-l-4 border-teal-600 pl-2.5">
              <Layers className="w-5 h-5 text-teal-600" />
              <h2>{isHindi ? 'चयन प्रक्रिया (Selection Process)' : 'Selection Process'}</h2>
            </div>

            <div className="space-y-2">
              {(isHindi ? post.selectionProcess.hi : post.selectionProcess.en).map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-100 dark:border-teal-900/40 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                  <span className="w-6 h-6 rounded-full bg-teal-600 text-white flex items-center justify-center text-xs shrink-0 font-bold">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECTION 6: HOW TO APPLY (Step by Step Guide) */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-slate-900 dark:text-white border-l-4 border-blue-600 pl-2.5">
            <ListOrdered className="w-5 h-5 text-blue-600" />
            <h2>{isHindi ? 'आवेदन कैसे करें — चरण-दर-चरण प्रक्रिया' : 'How to Apply — Step by Step Guide'}</h2>
          </div>

          <div className="space-y-2.5">
            {(isHindi ? post.howToApply.hi : post.howToApply.en).map((step, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-700 shadow-xs">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs shrink-0 font-bold mt-0.5">
                  {idx + 1}
                </span>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 7: IMPORTANT INSTRUCTIONS */}
        {post.importantInstructions && (
          <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/60 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              <span>{isHindi ? 'महत्वपूर्ण दिशानिर्देश' : 'Important Instructions'}</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs text-amber-950 dark:text-amber-200/90 font-medium">
              {(isHindi ? post.importantInstructions.hi : post.importantInstructions.en).map((inst, idx) => (
                <li key={idx}>{inst}</li>
              ))}
            </ul>
          </div>
        )}

        {/* SECTION 8: FULL OFFICIAL LINKS MATRIX (Clear Labelling Guarantee) */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-slate-900 dark:text-white border-l-4 border-emerald-600 pl-2.5">
            <LinkIcon className="w-5 h-5 text-emerald-600" />
            <h2>{isHindi ? 'सभी आधिकारिक व उपयोगी लिंक्स' : 'Official Links & Direct Portal Redirection'}</h2>
          </div>

          <div className="overflow-hidden border border-slate-200 dark:border-slate-700 rounded-2xl">
            <table className="w-full text-xs sm:text-sm text-left">
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {post.officialLinks.applyOnlineUrl && (
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-3 px-4 font-bold text-slate-800 dark:text-slate-200">
                      🟢 {isHindi ? 'ऑनलाइन आवेदन करें (Direct Link)' : 'Apply Online (Direct Link)'}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <a
                        href={post.officialLinks.applyOnlineUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-xs"
                      >
                        <span>{isHindi ? 'यहाँ क्लिक करें' : 'Click Here'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </td>
                  </tr>
                )}

                {post.officialLinks.admitCardUrl && (
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-3 px-4 font-bold text-amber-700 dark:text-amber-400">
                      📄 {isHindi ? 'एडमिट कार्ड डाउनलोड करें' : 'Download Admit Card / City Slip'}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <a
                        href={post.officialLinks.admitCardUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs transition-colors shadow-xs"
                      >
                        <span>{isHindi ? 'डाउनलोड करें' : 'Download'}</span>
                        <Download className="w-3.5 h-3.5" />
                      </a>
                    </td>
                  </tr>
                )}

                {post.officialLinks.resultUrl && (
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-3 px-4 font-bold text-emerald-700 dark:text-emerald-400">
                      🏆 {isHindi ? 'परीक्षा परिणाम व मेरिट सूची' : 'Download Result / Merit PDF'}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <a
                        href={post.officialLinks.resultUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors shadow-xs"
                      >
                        <span>{isHindi ? 'रिजल्ट देखें' : 'View Result'}</span>
                        <Award className="w-3.5 h-3.5" />
                      </a>
                    </td>
                  </tr>
                )}

                {post.officialLinks.answerKeyUrl && (
                  <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-3 px-4 font-bold text-purple-700 dark:text-purple-400">
                      📑 {isHindi ? 'उत्तर कुंजी व आपत्ति लिंक' : 'Download Answer Key & Challenge'}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <a
                        href={post.officialLinks.answerKeyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs transition-colors shadow-xs"
                      >
                        <span>{isHindi ? 'उत्तर कुंजी' : 'Answer Key'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </td>
                  </tr>
                )}

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="py-3 px-4 font-bold text-slate-800 dark:text-slate-200">
                    📄 {isHindi ? 'आधिकारिक अधिसूचना (Official Notification PDF)' : 'Download Official Notification PDF'}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <a
                      href={post.officialLinks.officialNotificationPdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs transition-colors shadow-xs"
                    >
                      <span>PDF</span>
                      <Download className="w-3.5 h-3.5" />
                    </a>
                  </td>
                </tr>

                <tr className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="py-3 px-4 font-bold text-slate-800 dark:text-slate-200">
                    🌐 {isHindi ? 'आधिकारिक वेबसाइट (Official Website)' : 'Official Website'}
                  </td>
                  <td className="py-3 px-4 text-right">
                    <a
                      href={post.officialLinks.officialWebsiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-slate-700 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
                    >
                      <span>{isHindi ? 'विजिट करें' : 'Visit'}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-[11px] text-slate-500 dark:text-slate-400 text-center italic">
            {isHindi 
              ? 'नोट: Scheme 2 U पर दिए गए सभी लिंक सीधे संबंधित विभाग की आधिकारिक वेबसाइट (.gov.in / .nic.in) पर खुलते हैं।'
              : 'Disclaimer: All links listed above direct strictly to authorized official government portals.'}
          </p>
        </div>

        {/* SECTION 9: FREQUENTLY ASKED QUESTIONS (FAQ Accordion) */}
        {post.faqs.length > 0 && (
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-sm sm:text-base font-extrabold text-slate-900 dark:text-white border-l-4 border-purple-600 pl-2.5">
              <HelpCircle className="w-5 h-5 text-purple-600" />
              <h2>{isHindi ? 'अक्सर पूछे जाने वाले सवाल (FAQ)' : 'Frequently Asked Questions (FAQ)'}</h2>
            </div>

            <div className="space-y-2">
              {post.faqs.map((faq, idx) => {
                const isOpen = openFaqIndices.includes(idx);
                return (
                  <div 
                    key={idx} 
                    className="border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-3 bg-white dark:bg-slate-850 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                        {isHindi ? faq.questionHi : faq.questionEn}
                      </span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${isOpen ? 'rotate-180 text-blue-600' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 font-medium leading-relaxed">
                        {isHindi ? faq.answerHi : faq.answerEn}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Social Share & Connect Box */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-850 border border-blue-200 dark:border-slate-700 space-y-3 no-print">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <span className="text-xs font-extrabold text-slate-900 dark:text-white uppercase tracking-wider">
              {isHindi ? 'दोस्तों के साथ शेयर करें' : 'Share this update with friends'}
            </span>
            <span className="text-xs text-slate-500">Scheme 2 U Official</span>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${post.titleEn}\n\nRead full details here: ${window.location.href}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-xs transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>

            <a
              href={`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.titleEn)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-bold shadow-xs transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Telegram</span>
            </a>

            <button
              onClick={handleCopyLink}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-bold border border-slate-300 dark:border-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <LinkIcon className="w-4 h-4" />
              <span>{isHindi ? 'लिंक कॉपी करें' : 'Copy Link'}</span>
            </button>
          </div>
        </div>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex items-center gap-1.5 flex-wrap pt-2">
            <span className="text-xs font-bold text-slate-400">{isHindi ? 'टैग:' : 'Tags:'}</span>
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </article>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="space-y-3 no-print">
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>{isHindi ? 'अन्य संबंधित अपडेट्स' : 'Related Updates You May Like'}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {relatedPosts.map(rel => (
              <PostCard key={rel.id} post={rel} layout="compact" />
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
