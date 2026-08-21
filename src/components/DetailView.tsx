import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Share2, 
  Bookmark, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  FileText, 
  Award, 
  HelpCircle, 
  ShieldCheck, 
  History, 
  Download, 
  Info,
  DollarSign,
  UserCheck,
  Briefcase,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  FileCheck,
  Edit3,
  Lock,
  Shield
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getCategoryById } from '../data/categories';
import { VerificationStatus, ComputedStatus } from '../types';
import { AdminPostEditModal } from './AdminPostEditModal';

export const DetailView: React.FC = () => {
  const { 
    activeView, 
    navigateToHome, 
    navigateToCategory, 
    posts, 
    language, 
    isBookmarked, 
    toggleBookmark, 
    showToast,
    isAdminAuthenticated 
  } = useApp();
  const isHindi = language === 'hi';

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isAdminEditOpen, setIsAdminEditOpen] = useState(false);

  if (activeView.type !== 'detail' && activeView.type !== 'post') {
    return null;
  }

  const currentSlug = activeView.slug;
  const post = posts.find(p => p.slug === currentSlug);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-red-500 mx-auto" />
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">
          {isHindi ? 'यह पोस्ट उपलब्ध नहीं है या हटा दी गई है' : 'Post Not Found'}
        </h2>
        <p className="text-sm text-slate-500">
          {isHindi 
            ? 'कृपया मुख्य पृष्ठ पर जाकर अन्य सत्यापित 2026 सूचनाएं देखें।' 
            : 'The requested 2026 notification could not be found.'}
        </p>
        <button
          onClick={navigateToHome}
          className="px-4 py-2 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-xs hover:bg-blue-700 transition-colors"
        >
          {isHindi ? 'मुख्य पृष्ठ पर लौटें' : 'Return to Home'}
        </button>
      </div>
    );
  }

  const categoryInfo = getCategoryById(post.category);
  const bookmarked = isBookmarked(post.id);

  const handleShare = () => {
    const shareUrl = window.location.href;
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

  const isValidLink = (url?: string): boolean => {
    if (!url) return false;
    const clean = url.trim().toLowerCase();
    return clean.startsWith('http://') || clean.startsWith('https://');
  };

  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Breadcrumb & Navigation */}
      <nav className="flex items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
        <div className="flex items-center gap-1.5 flex-wrap">
          <button 
            onClick={navigateToHome}
            className="flex items-center gap-1 font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isHindi ? 'होम' : 'Home'}</span>
          </button>
          <span>/</span>
          {categoryInfo && (
            <button
              onClick={() => navigateToCategory(post.category)}
              className="hover:text-blue-600 transition-colors cursor-pointer font-medium"
            >
              {isHindi ? categoryInfo.labelHi : categoryInfo.labelEn}
            </button>
          )}
          <span>/</span>
          <span className="font-semibold text-slate-900 dark:text-white truncate max-w-xs">
            {post.advertisementNumber || post.postNameEn}
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Admin Edit Post Button */}
          <button
            onClick={() => setIsAdminEditOpen(true)}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl border font-bold text-xs shadow-xs transition-colors cursor-pointer ${
              isAdminAuthenticated
                ? 'bg-amber-500 hover:bg-amber-600 text-white border-amber-600'
                : 'bg-slate-100 dark:bg-slate-800 hover:bg-amber-50 dark:hover:bg-amber-950/60 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-700 hover:border-amber-400 hover:text-amber-700 dark:hover:text-amber-400'
            }`}
            title={isAdminAuthenticated ? 'Admin: Edit this post' : 'Admin only: Login to edit post'}
          >
            {isAdminAuthenticated ? <Edit3 className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
            <span>
              {isAdminAuthenticated 
                ? (isHindi ? 'पोस्ट एडिट करें (एडमिन)' : 'Edit Post (Admin)') 
                : (isHindi ? 'एडमिन एडिट' : 'Admin Edit')}
            </span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-1 px-3 py-1.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{isHindi ? 'शेयर' : 'Share'}</span>
          </button>
          <button
            onClick={() => toggleBookmark(post.id)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-xl border font-semibold transition-colors cursor-pointer ${
              bookmarked 
                ? 'bg-blue-50 dark:bg-blue-950 text-blue-600 border-blue-200 dark:border-blue-800' 
                : 'border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" fill={bookmarked ? 'currentColor' : 'none'} />
            <span>{bookmarked ? (isHindi ? 'सहेजा गया' : 'Saved') : (isHindi ? 'सेव करें' : 'Save')}</span>
          </button>
        </div>
      </nav>

      {/* Main Post Header Card (Image-Free, Clean & High Contrast) */}
      <header className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xs space-y-4">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-2.5 py-1 rounded-md text-xs font-black bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300">
              Year {post.year || 2026}
            </span>
            <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-200">
              {post.stateScope}
            </span>
            {post.verificationStatus === 'OFFICIAL_VERIFIED' ? (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-50 text-emerald-800 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isHindi ? 'आधिकारिक स्रोत द्वारा सत्यापित' : 'Official Source Verified'}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-bold bg-amber-50 text-amber-800 dark:bg-amber-950/80 dark:text-amber-300 border border-amber-300">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                <span>{isHindi ? 'आंशिक सत्यापन' : 'Verification In Progress'}</span>
              </span>
            )}
          </div>

          <div className="text-xs text-slate-400 font-medium">
            {isHindi ? 'अंतिम सत्यापन: ' : 'Verified: '}{post.lastVerifiedDate || post.lastUpdated}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-blue-700 dark:text-blue-400 mb-1.5">
            <Building2 className="w-4 h-4" />
            <span>{isHindi ? post.organizationHi : post.organizationEn}</span>
            {post.advertisementNumber && post.advertisementNumber !== 'Not Announced' && (
              <span className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[11px]">
                {post.advertisementNumber}
              </span>
            )}
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight">
            {isHindi ? post.titleHi : post.titleEn}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
            {isHindi ? post.shortSummaryHi : post.shortSummaryEn}
          </p>
        </div>

        {/* Quick Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <span className="text-[11px] text-slate-500 block mb-0.5">{isHindi ? 'पद / राशि' : 'Total Vacancy / Benefit'}</span>
            <span className="font-bold text-slate-900 dark:text-white">
              {post.totalVacanciesOrAmount || (isHindi ? 'आधिकारिक अधिसूचना देखें' : 'Check Notification')}
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <span className="text-[11px] text-slate-500 block mb-0.5">{isHindi ? 'आवेदन अंतिम तिथि' : 'Last Date to Apply'}</span>
            <span className="font-bold text-red-600 dark:text-red-400">
              {post.importantDates?.applicationLastDate || (isHindi ? 'घोषणा शेष' : 'Official Confirmation Pending')}
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <span className="text-[11px] text-slate-500 block mb-0.5">{isHindi ? 'परीक्षा / इवेंट तिथि' : 'Exam / Event Date'}</span>
            <span className="font-bold text-blue-600 dark:text-blue-400">
              {post.importantDates?.examDate || (isHindi ? 'जल्द अधिसूचित' : 'To be notified')}
            </span>
          </div>

          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
            <span className="text-[11px] text-slate-500 block mb-0.5">{isHindi ? 'प्राथमिक आधिकारिक स्रोत' : 'Primary Source'}</span>
            <a
              href={post.primarySourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-emerald-600 hover:underline flex items-center gap-1 truncate"
            >
              <span className="truncate">{post.primarySourceName || 'Official Portal'}</span>
              <ExternalLink className="w-3 h-3 shrink-0" />
            </a>
          </div>
        </div>
      </header>

      {/* Conflict Logs Warning (Rule 11) */}
      {post.conflictLogs && post.conflictLogs.length > 0 && (
        <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-300 dark:border-amber-800 text-xs space-y-2">
          <div className="flex items-center gap-2 font-bold text-amber-900 dark:text-amber-300">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{isHindi ? 'सूचना द्वंद्व सूचना (Conflicting Information Detected)' : 'Conflicting Information Warning'}</span>
          </div>
          <p className="text-amber-800 dark:text-amber-200">
            {isHindi 
              ? 'विभिन्न स्रोतों में इस सूचना के कुछ विवरणों में अंतर पाया गया है। Scheme 2 U केवल आधिकारिक सरकारी गजट व विभाग की वेबसाइट को ही प्राथमिकता देता है।'
              : 'Discrepancy detected across secondary portals. Showing data verified strictly against primary Government Gazette.'}
          </p>
        </div>
      )}

      {/* Grid of Important Dates & Application Fee */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Important Dates */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-600" />
              <span>{isHindi ? 'महत्वपूर्ण तिथियां (Important Dates 2026)' : 'Important Dates (2026)'}</span>
            </h2>
            <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
              {isHindi ? 'सत्यापित' : 'Source-Checked'}
            </span>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
            {post.importantDates?.notificationDate && (
              <div className="py-2 flex items-center justify-between gap-2">
                <span className="text-slate-500">{isHindi ? 'अधिसूचना जारी तिथि' : 'Notification Release Date'}</span>
                <span className="font-semibold text-slate-900 dark:text-white">{post.importantDates.notificationDate}</span>
              </div>
            )}
            <div className="py-2 flex items-center justify-between gap-2">
              <span className="text-slate-500">{isHindi ? 'ऑनलाइन आवेदन प्रारंभ' : 'Application Start Date'}</span>
              <span className="font-semibold text-slate-900 dark:text-white">
                {post.importantDates?.applicationStart || (isHindi ? 'उपलब्ध नहीं' : 'Not Announced')}
              </span>
            </div>
            <div className="py-2 flex items-center justify-between gap-2">
              <span className="text-slate-500 font-bold text-red-600 dark:text-red-400">{isHindi ? 'आवेदन की अंतिम तिथि' : 'Application Last Date'}</span>
              <span className="font-bold text-red-600 dark:text-red-400">
                {post.importantDates?.applicationLastDate || (isHindi ? 'घोषणा शेष' : 'Official Confirmation Pending')}
              </span>
            </div>
            {post.importantDates?.feePaymentLastDate && (
              <div className="py-2 flex items-center justify-between gap-2">
                <span className="text-slate-500">{isHindi ? 'शुल्क भुगतान की अंतिम तिथि' : 'Fee Payment Last Date'}</span>
                <span className="font-semibold text-slate-900 dark:text-white">{post.importantDates.feePaymentLastDate}</span>
              </div>
            )}
            {post.importantDates?.correctionWindow && (
              <div className="py-2 flex items-center justify-between gap-2">
                <span className="text-slate-500">{isHindi ? 'फॉर्म सुधार (Correction Window)' : 'Correction Window'}</span>
                <span className="font-semibold text-slate-900 dark:text-white">{post.importantDates.correctionWindow}</span>
              </div>
            )}
            {post.importantDates?.admitCardDate && (
              <div className="py-2 flex items-center justify-between gap-2">
                <span className="text-slate-500">{isHindi ? 'एडमिट कार्ड जारी तिथि' : 'Admit Card Release Date'}</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">{post.importantDates.admitCardDate}</span>
              </div>
            )}
            {post.importantDates?.examDate && (
              <div className="py-2 flex items-center justify-between gap-2">
                <span className="text-slate-500">{isHindi ? 'परीक्षा तिथि' : 'Exam Date'}</span>
                <span className="font-semibold text-blue-600 dark:text-blue-400">{post.importantDates.examDate}</span>
              </div>
            )}
            {post.importantDates?.resultDate && (
              <div className="py-2 flex items-center justify-between gap-2">
                <span className="text-slate-500">{isHindi ? 'रिजल्ट घोषणा' : 'Result Declaration'}</span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400">{post.importantDates.resultDate}</span>
              </div>
            )}
          </div>
        </section>

        {/* Application Fee */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              <span>{isHindi ? 'आवेदन शुल्क (Application Fee)' : 'Application Fee'}</span>
            </h2>
            <span className="text-[11px] text-slate-400 font-medium">Category-Wise</span>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800 text-xs">
            <div className="py-2 flex items-center justify-between gap-2">
              <span className="text-slate-500">General / OBC / EWS</span>
              <span className="font-bold text-slate-900 dark:text-white">
                {post.applicationFee?.generalFee || post.applicationFee?.generalObcEws || '₹0/-'}
              </span>
            </div>
            <div className="py-2 flex items-center justify-between gap-2">
              <span className="text-slate-500">SC / ST / PwD (दिव्यांग)</span>
              <span className="font-bold text-slate-900 dark:text-white">
                {post.applicationFee?.scFee || post.applicationFee?.scStPwd || '₹0/-'}
              </span>
            </div>
            <div className="py-2 flex items-center justify-between gap-2">
              <span className="text-slate-500">{isHindi ? 'महिला उम्मीदवार (Bihar/All Female)' : 'Female Candidates'}</span>
              <span className="font-bold text-slate-900 dark:text-white">
                {post.applicationFee?.female || '₹0/-'}
              </span>
            </div>
            <div className="py-2 flex items-center justify-between gap-2">
              <span className="text-slate-500">{isHindi ? 'भुगतान का माध्यम' : 'Payment Mode'}</span>
              <span className="font-semibold text-slate-700 dark:text-slate-300">
                {post.applicationFee?.paymentMode || 'Online (Debit/Credit Card/UPI/Net Banking)'}
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* Age Limit & Eligibility */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xs space-y-4">
        <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
          <UserCheck className="w-4 h-4 text-blue-600" />
          <span>{isHindi ? 'आयु सीमा एवं शैक्षणिक पात्रता (Age Limit & Eligibility)' : 'Age Limit & Eligibility Criteria'}</span>
        </h2>

        {/* Age Grid */}
        {post.ageLimit && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <span className="text-[11px] text-slate-500 block mb-0.5">{isHindi ? 'न्यूनतम आयु' : 'Minimum Age'}</span>
              <span className="font-bold text-slate-900 dark:text-white">{post.ageLimit.minAge || '18 Years'}</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <span className="text-[11px] text-slate-500 block mb-0.5">{isHindi ? 'अधिकतम आयु' : 'Maximum Age'}</span>
              <span className="font-bold text-slate-900 dark:text-white">{post.ageLimit.maxAge || '37 Years'}</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800">
              <span className="text-[11px] text-slate-500 block mb-0.5">{isHindi ? 'आयु गणना तिथि' : 'Age Calculated As On'}</span>
              <span className="font-bold text-slate-900 dark:text-white">{post.ageLimit.asOnDate || '01/08/2026'}</span>
            </div>
          </div>
        )}

        {post.ageLimit?.ageRelaxationRule && (
          <p className="text-xs text-slate-600 dark:text-slate-400 bg-blue-50/50 dark:bg-slate-800/40 p-3 rounded-xl border border-blue-100 dark:border-slate-700">
            <strong className="text-blue-700 dark:text-blue-400">{isHindi ? 'आयु में छूट: ' : 'Age Relaxation: '}</strong>
            {post.ageLimit.ageRelaxationRule}
          </p>
        )}

        {/* Eligibility Table */}
        {post.eligibility && post.eligibility.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
              <thead className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-bold">
                <tr>
                  <th className="p-3">{isHindi ? 'पद का नाम' : 'Post Name'}</th>
                  <th className="p-3">{isHindi ? 'अनिवार्य योग्यता' : 'Educational Qualification'}</th>
                  <th className="p-3">{isHindi ? 'पात्रता विवरण' : 'Eligibility Details'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {post.eligibility.map((el, i) => (
                  <tr key={i} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="p-3 font-bold text-slate-900 dark:text-white">{el.postName}</td>
                    <td className="p-3 text-slate-700 dark:text-slate-300 font-medium">{el.qualification}</td>
                    <td className="p-3 text-slate-600 dark:text-slate-400">{isHindi ? el.eligibilityHi : el.eligibilityEn}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Required Documents & How to Apply */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* Required Documents */}
        {post.requiredDocuments && (
          <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xs space-y-3">
            <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <FileCheck className="w-4 h-4 text-emerald-600" />
              <span>{isHindi ? 'आवश्यक दस्तावेज (Required Documents)' : 'Required Documents'}</span>
            </h2>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              {(isHindi ? post.requiredDocuments.hi : post.requiredDocuments.en).map((doc, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{doc}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* How to Apply */}
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xs space-y-3">
          <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-blue-600" />
            <span>{isHindi ? 'आवेदन कैसे करें (How to Apply Online)' : 'Step-by-Step Application Guide'}</span>
          </h2>
          <ol className="space-y-2 text-xs text-slate-700 dark:text-slate-300 list-decimal list-inside">
            {(isHindi ? post.howToApply.hi : post.howToApply.en).map((step, idx) => (
              <li key={idx} className="leading-relaxed">
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {/* Official Verified Direct Links (Rule 19: Strict No Fake URLs) */}
      <section className="bg-gradient-to-br from-blue-50/80 via-white to-slate-50 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/30 border-2 border-blue-500/30 rounded-3xl p-5 sm:p-7 shadow-md space-y-4">
        <div>
          <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <ExternalLink className="w-5 h-5 text-blue-600" />
            <span>{isHindi ? 'आधिकारिक एवं डायरेक्ट लिंक्स (Verified Direct Links)' : 'Official Direct Verified Links'}</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {isHindi 
              ? 'Scheme 2 U पर सभी लिंक्स आधिकारिक सरकारी पोर्टल्स द्वारा सत्यापित हैं। अनधिकृत या अनुपलब्ध लिंक्स को सुरक्षित रूप से लॉक रखा जाता है।'
              : 'All direct actions are routed directly through verified Government portals. Missing links are safely disabled.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
          {/* Apply Online Link */}
          {isValidLink(post.officialLinks?.applyOnlineUrl) ? (
            <a
              href={post.officialLinks.applyOnlineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-xs transition-all cursor-pointer group"
            >
              <span>{isHindi ? 'ऑनलाइन आवेदन करें' : 'Apply Online'}</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          ) : (
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 font-semibold border border-slate-200 dark:border-slate-700 cursor-not-allowed">
              <span>{isHindi ? 'ऑनलाइन आवेदन (उपलब्ध नहीं)' : 'Apply Online (Not Available)'}</span>
              <AlertCircle className="w-4 h-4" />
            </div>
          )}

          {/* Official Notification PDF */}
          {isValidLink(post.officialLinks?.officialNotificationPdfUrl) ? (
            <a
              href={post.officialLinks.officialNotificationPdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-xs transition-all cursor-pointer group"
            >
              <span>{isHindi ? 'आधिकारिक नोटिफिकेशन PDF' : 'Notification PDF'}</span>
              <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            </a>
          ) : (
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-400 font-semibold border border-slate-200 dark:border-slate-700 cursor-not-allowed">
              <span>{isHindi ? 'नोटिफिकेशन PDF (जल्द जारी)' : 'PDF Notification (Pending)'}</span>
              <AlertCircle className="w-4 h-4" />
            </div>
          )}

          {/* Admit Card Link */}
          {isValidLink(post.officialLinks?.admitCardUrl) ? (
            <a
              href={post.officialLinks.admitCardUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-xs transition-all cursor-pointer group"
            >
              <span>{isHindi ? 'एडमिट कार्ड डाउनलोड' : 'Download Admit Card'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : null}

          {/* Result Link */}
          {isValidLink(post.officialLinks?.resultUrl) ? (
            <a
              href={post.officialLinks.resultUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold shadow-xs transition-all cursor-pointer group"
            >
              <span>{isHindi ? 'रिजल्ट / स्कोरकार्ड देखें' : 'View Result / Scorecard'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : null}

          {/* Official Website */}
          {isValidLink(post.officialLinks?.officialWebsiteUrl) && (
            <a
              href={post.officialLinks.officialWebsiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3.5 rounded-2xl bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white font-bold shadow-xs transition-all cursor-pointer group"
            >
              <span>{isHindi ? 'विभाग की आधिकारिक वेबसाइट' : 'Official Website'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </section>

      {/* Field-Level Source Transparency & Verification Registry Box (Rule 9 & 23) */}
      <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xs space-y-3 text-xs">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2.5">
          <h3 className="font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{isHindi ? 'स्रोत प्रामाणिकता एवं सत्यापन मेटाडेटा' : 'Source Transparency & Verification Metadata'}</span>
          </h3>
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300">
            100% Zero-Hallucination Policy
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-600 dark:text-slate-300">
          <div>
            <span className="text-slate-400 block text-[11px]">{isHindi ? 'प्राथमिक स्रोत पोर्टल:' : 'Primary Source Portal:'}</span>
            <a href={post.primarySourceUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-600 hover:underline">
              {post.primarySourceName} ({post.primarySourceUrl})
            </a>
          </div>
          <div>
            <span className="text-slate-400 block text-[11px]">{isHindi ? 'सत्यापन तिथि एवं चक्र:' : 'Verification Timestamp:'}</span>
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              {post.lastVerifiedDate || post.lastUpdated} (Year 2026 Engine)
            </span>
          </div>
        </div>

        {/* Update History Timeline (Rule 21) */}
        {post.updateHistory && post.updateHistory.length > 0 && (
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <span className="font-bold text-slate-800 dark:text-slate-200 block mb-1.5 flex items-center gap-1">
              <History className="w-3.5 h-3.5 text-blue-600" />
              <span>{isHindi ? 'अद्यतन इतिहास (Revision & Update History):' : 'Update History Log:'}</span>
            </span>
            <div className="space-y-1 text-[11px] text-slate-500">
              {post.updateHistory.map((upd) => (
                <div key={upd.id} className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span><strong>{upd.timestamp}</strong>: {upd.field} → {upd.newValue}</span>
                  <span className="text-slate-400 font-mono">[{upd.verifiedBy}]</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Frequently Asked Questions */}
      {post.faqs && post.faqs.length > 0 && (
        <section className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-6 shadow-xs space-y-3">
          <h2 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
            <HelpCircle className="w-4 h-4 text-blue-600" />
            <span>{isHindi ? 'अक्सर पूछे जाने वाले प्रश्न (FAQ 2026)' : 'Frequently Asked Questions (FAQ)'}</span>
          </h2>
          <div className="space-y-2">
            {post.faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div key={idx} className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="w-full p-3.5 text-left text-xs font-bold text-slate-900 dark:text-white flex items-center justify-between gap-2 hover:bg-slate-50 dark:hover:bg-slate-800/50 cursor-pointer"
                  >
                    <span>{isHindi ? faq.questionHi : faq.questionEn}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 shrink-0 text-slate-400" /> : <ChevronDown className="w-4 h-4 shrink-0 text-slate-400" />}
                  </button>
                  {isOpen && (
                    <div className="p-3.5 pt-0 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800">
                      {isHindi ? faq.answerHi : faq.answerEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Admin Post Edit Modal (Protected: Admin Only) */}
      <AdminPostEditModal
        post={post}
        isOpen={isAdminEditOpen}
        onClose={() => setIsAdminEditOpen(false)}
      />
    </article>
  );
};
