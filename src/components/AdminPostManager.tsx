import React, { useState } from 'react';
import { 
  PlusCircle, 
  Trash2, 
  Edit3, 
  Save, 
  Download, 
  Upload, 
  RefreshCw, 
  ArrowLeft, 
  Eye, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink, 
  Layers
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PostItem, CategoryType } from '../types';
import { CATEGORIES } from '../data/categories';

export const AdminPostManager: React.FC = () => {
  const { 
    language, 
    posts, 
    addPost, 
    updatePost, 
    deletePost, 
    resetPostsToDefault, 
    navigateToHome, 
    navigateToPost,
    showToast 
  } = useApp();

  const isHindi = language === 'hi';

  const [isEditing, setIsEditing] = useState(false);
  const [activeEditingId, setActiveEditingId] = useState<string | null>(null);

  // Form State
  const [formData, setFormData] = useState<Partial<PostItem>>({
    category: 'jobs',
    stateScope: 'Bihar',
    titleEn: '',
    titleHi: '',
    shortSummaryEn: '',
    shortSummaryHi: '',
    organizationEn: '',
    organizationHi: '',
    postNameEn: '',
    postNameHi: '',
    totalVacanciesOrAmount: '',
    featuredImage: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    lastUpdated: new Date().toISOString().split('T')[0],
    postedDate: new Date().toISOString().split('T')[0],
    isNew: true,
    isHot: false,
    importantDates: {
      applicationStart: 'Today',
      applicationLastDate: 'Next Month',
      examDate: 'To be notified',
      admitCardDate: 'Before exam'
    },
    applicationFee: {
      generalObcEws: '₹100/-',
      scStPwd: '₹0/-',
      female: '₹0/-',
      paymentMode: 'Online'
    },
    ageLimit: {
      minAge: '18 Years',
      maxAge: '28 Years',
      asOnDate: '01/01/2025',
      ageRelaxationRule: 'As per Govt Rules (OBC +3 Yrs, SC/ST +5 Yrs)'
    },
    eligibility: [
      {
        postName: 'General Post',
        qualification: '10th / 12th / Graduate from recognized board',
        eligibilityEn: 'Passed minimum educational qualification.',
        eligibilityHi: 'मान्यता प्राप्त बोर्ड से न्यूनतम शैक्षणिक योग्यता उत्तीर्ण।'
      }
    ],
    requiredDocuments: {
      en: ['Aadhaar Card', 'Photo & Signature', 'Educational Certificates'],
      hi: ['आधार कार्ड', 'फोटो व हस्ताक्षर', 'शैक्षणिक अंकतालिका']
    },
    howToApply: {
      en: [
        'Visit official portal linked below.',
        'Click on New Registration and enter personal info.',
        'Upload required documents, pay fee and print acknowledgement.'
      ],
      hi: [
        'नीचे दिए गए आधिकारिक पोर्टल पर जाएं।',
        'नया पंजीकरण करें और विवरण भरें।',
        'दस्तावेज अपलोड करें और रसीद सुरक्षित रखें।'
      ]
    },
    officialLinks: {
      applyOnlineUrl: 'https://serviceonline.bihar.gov.in',
      officialNotificationPdfUrl: 'https://bpsc.bih.nic.in',
      officialWebsiteUrl: 'https://bihar.gov.in'
    },
    faqs: [
      {
        questionEn: 'How to apply online?',
        questionHi: 'ऑनलाइन आवेदन कैसे करें?',
        answerEn: 'Follow the step by step instructions given above using the official portal.',
        answerHi: 'ऊपर दी गई चरण-दर-चरण प्रक्रिया का पालन करें।'
      }
    ],
    tags: ['Scheme 2 U', 'Govt Job', 'Latest Update']
  });

  const [tagInput, setTagInput] = useState('');

  const handleStartNew = () => {
    setIsEditing(true);
    setActiveEditingId(null);
    setFormData({
      category: 'jobs',
      stateScope: 'Bihar',
      titleEn: '',
      titleHi: '',
      shortSummaryEn: '',
      shortSummaryHi: '',
      organizationEn: '',
      organizationHi: '',
      postNameEn: '',
      postNameHi: '',
      totalVacanciesOrAmount: '',
      featuredImage: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
      lastUpdated: new Date().toISOString().split('T')[0],
      postedDate: new Date().toISOString().split('T')[0],
      isNew: true,
      isHot: false,
      importantDates: {
        applicationStart: 'Active Now',
        applicationLastDate: 'Next Month'
      },
      eligibility: [
        {
          postName: 'General Post',
          qualification: '10th / 12th / Graduate',
          eligibilityEn: 'Passed qualification from recognized institute.',
          eligibilityHi: 'मान्यता प्राप्त संस्थान से उत्तीर्ण।'
        }
      ],
      requiredDocuments: {
        en: ['Aadhaar Card', 'Photo & Signature'],
        hi: ['आधार कार्ड', 'फोटो व हस्ताक्षर']
      },
      howToApply: {
        en: ['Visit official website', 'Submit form and pay fee'],
        hi: ['आधिकारिक वेबसाइट पर जाएं', 'फॉर्म भरें और सबमिट करें']
      },
      officialLinks: {
        applyOnlineUrl: 'https://serviceonline.bihar.gov.in',
        officialNotificationPdfUrl: 'https://bihar.gov.in',
        officialWebsiteUrl: 'https://bihar.gov.in'
      },
      faqs: [],
      tags: ['Sarkari Job']
    });
  };

  const handleStartEdit = (post: PostItem) => {
    setIsEditing(true);
    setActiveEditingId(post.id);
    setFormData(post);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.titleEn || !formData.titleHi) {
      alert('Please enter both English and Hindi titles.');
      return;
    }

    const slug = formData.slug || formData.titleEn
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');

    const completePost: PostItem = {
      ...(formData as PostItem),
      id: activeEditingId || `post-custom-${Date.now()}`,
      slug: slug,
      category: (formData.category || 'jobs') as CategoryType,
      stateScope: (formData.stateScope || 'Bihar') as any,
      titleEn: formData.titleEn || '',
      titleHi: formData.titleHi || '',
      shortSummaryEn: formData.shortSummaryEn || formData.titleEn || '',
      shortSummaryHi: formData.shortSummaryHi || formData.titleHi || '',
      organizationEn: formData.organizationEn || 'Govt Department',
      organizationHi: formData.organizationHi || 'सरकारी विभाग',
      postNameEn: formData.postNameEn || 'Various Posts',
      postNameHi: formData.postNameHi || 'विभिन्न पद',
      featuredImage: formData.featuredImage || 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
      lastUpdated: formData.lastUpdated || new Date().toISOString().split('T')[0],
      postedDate: formData.postedDate || new Date().toISOString().split('T')[0],
      importantDates: formData.importantDates || { applicationLastDate: 'Soon' },
      eligibility: formData.eligibility || [],
      requiredDocuments: formData.requiredDocuments || { en: ['Aadhaar'], hi: ['आधार'] },
      howToApply: formData.howToApply || { en: ['Apply online'], hi: ['ऑनलाइन आवेदन करें'] },
      officialLinks: formData.officialLinks || {
        officialNotificationPdfUrl: 'https://bihar.gov.in',
        officialWebsiteUrl: 'https://bihar.gov.in'
      },
      faqs: formData.faqs || [],
      tags: formData.tags || ['Scheme 2 U']
    };

    if (activeEditingId) {
      updatePost(completePost);
    } else {
      addPost(completePost);
    }

    setIsEditing(false);
    setActiveEditingId(null);
  };

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(posts, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `scheme2u_database_${new Date().toISOString().split('T')[0]}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showToast(isHindi ? 'डेटाबेस JSON डाउनलोड हो गया!' : 'Database JSON exported successfully!');
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Admin Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <button
            onClick={navigateToHome}
            className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-blue-600 mb-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{isHindi ? 'मुख्य पोर्टल पर जाएं' : 'Back to Home'}</span>
          </button>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-6 h-6 text-emerald-600" />
            <span>{isHindi ? 'Scheme 2 U पोस्ट एवं कंटेंट एडमिन' : 'Scheme 2 U Content & Post Manager'}</span>
          </h1>
          <p className="text-xs text-slate-500">
            {isHindi 
              ? 'यहाँ से आसानी से नई सरकारी नौकरी, योजना, एडमिट कार्ड व रिजल्ट पोस्ट जोड़ें या संपादित करें'
              : 'Easily manage, create, preview and export verified educational posts'}
          </p>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={handleStartNew}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors cursor-pointer"
          >
            <PlusCircle className="w-4 h-4" />
            <span>{isHindi ? 'नया पोस्ट जोड़ें' : 'Add New Post'}</span>
          </button>

          <button
            onClick={handleExportJSON}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 font-semibold text-xs border border-slate-300 dark:border-slate-700 transition-colors cursor-pointer"
            title="Download full JSON"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export JSON</span>
          </button>

          <button
            onClick={resetPostsToDefault}
            className="flex items-center gap-1 px-3 py-2 rounded-xl bg-red-50 text-red-700 dark:bg-red-950/60 dark:text-red-300 font-semibold text-xs border border-red-200 dark:border-red-800 transition-colors cursor-pointer"
            title="Reset to sample dataset"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Editing Form Modal / Inline Box */}
      {isEditing && (
        <form onSubmit={handleSave} className="bg-white dark:bg-slate-900 border-2 border-blue-500 rounded-3xl p-5 sm:p-7 shadow-xl space-y-4 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
              {activeEditingId ? (isHindi ? 'पोस्ट संपादित करें' : 'Edit Post') : (isHindi ? 'नई पोस्ट जोड़ें' : 'Create New Post')}
            </h2>
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="text-xs text-slate-400 hover:text-slate-600 font-bold"
            >
              Cancel
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="block font-bold mb-1">Category (श्रेणी)*</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value as CategoryType })}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold"
              >
                {CATEGORIES.map(c => (
                  <option key={c.id} value={c.id}>{c.labelEn} - {c.labelHi}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-bold mb-1">State / Scope (क्षेत्र)*</label>
              <select
                value={formData.stateScope}
                onChange={(e) => setFormData({ ...formData, stateScope: e.target.value as any })}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-semibold"
              >
                <option value="Bihar">Bihar (बिहार विशेष)</option>
                <option value="Central">Central (केंद्रीय योजना)</option>
                <option value="All India">All India (अखिल भारतीय)</option>
                <option value="State Specific">State Specific</option>
              </select>
            </div>

            <div>
              <label className="block font-bold mb-1">Total Vacancies or Benefit Amount</label>
              <input
                type="text"
                value={formData.totalVacanciesOrAmount || ''}
                onChange={(e) => setFormData({ ...formData, totalVacanciesOrAmount: e.target.value })}
                placeholder="e.g. 21,391 Posts / ₹50,000 Grant"
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
              />
            </div>
          </div>

          {/* Titles */}
          <div className="space-y-3 text-xs">
            <div>
              <label className="block font-bold mb-1">English Title*</label>
              <input
                type="text"
                required
                value={formData.titleEn || ''}
                onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
                placeholder="e.g. Bihar Police Constable Admit Card 2025 Released"
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold"
              />
            </div>

            <div>
              <label className="block font-bold mb-1">Hindi Title (हिंदी शीर्षक)*</label>
              <input
                type="text"
                required
                value={formData.titleHi || ''}
                onChange={(e) => setFormData({ ...formData, titleHi: e.target.value })}
                placeholder="उदा. बिहार पुलिस कांस्टेबल एडमिट कार्ड 2025 जारी — ऐसे डाउनलोड करें"
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 font-bold"
              />
            </div>
          </div>

          {/* Organizations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="block font-bold mb-1">Organization (English)</label>
              <input
                type="text"
                value={formData.organizationEn || ''}
                onChange={(e) => setFormData({ ...formData, organizationEn: e.target.value })}
                placeholder="e.g. Staff Selection Commission (SSC)"
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
              />
            </div>
            <div>
              <label className="block font-bold mb-1">Organization (हिंदी विभाग)</label>
              <input
                type="text"
                value={formData.organizationHi || ''}
                onChange={(e) => setFormData({ ...formData, organizationHi: e.target.value })}
                placeholder="उदा. कर्मचारी चयन आयोग"
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
              />
            </div>
          </div>

          {/* Descriptions */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div>
              <label className="block font-bold mb-1">Short Summary (English)</label>
              <textarea
                rows={2}
                value={formData.shortSummaryEn || ''}
                onChange={(e) => setFormData({ ...formData, shortSummaryEn: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
              />
            </div>
            <div>
              <label className="block font-bold mb-1">Short Summary (हिंदी सारांश)</label>
              <textarea
                rows={2}
                value={formData.shortSummaryHi || ''}
                onChange={(e) => setFormData({ ...formData, shortSummaryHi: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
              />
            </div>
          </div>

          {/* Important Dates */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div>
              <label className="block font-bold mb-1">Application Last Date</label>
              <input
                type="text"
                value={formData.importantDates?.applicationLastDate || ''}
                onChange={(e) => setFormData({
                  ...formData,
                  importantDates: { ...formData.importantDates, applicationLastDate: e.target.value }
                })}
                placeholder="e.g. 15 June 2025"
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block font-bold mb-1">Exam Date / Release Date</label>
              <input
                type="text"
                value={formData.importantDates?.examDate || ''}
                onChange={(e) => setFormData({
                  ...formData,
                  importantDates: { ...formData.importantDates, examDate: e.target.value }
                })}
                placeholder="e.g. August 2025"
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
              />
            </div>

            <div>
              <label className="block font-bold mb-1">Featured Image URL</label>
              <input
                type="text"
                value={formData.featuredImage || ''}
                onChange={(e) => setFormData({ ...formData, featuredImage: e.target.value })}
                className="w-full p-2.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800"
              />
            </div>
          </div>

          {/* Official Direct Links */}
          <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 space-y-2 text-xs">
            <span className="font-bold text-slate-800 dark:text-slate-200">Official Links (Must be authentic .gov.in / board link)</span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <input
                type="url"
                value={formData.officialLinks?.applyOnlineUrl || ''}
                onChange={(e) => setFormData({
                  ...formData,
                  officialLinks: { ...formData.officialLinks!, applyOnlineUrl: e.target.value }
                })}
                placeholder="Apply Online URL"
                className="p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
              />
              <input
                type="url"
                value={formData.officialLinks?.officialNotificationPdfUrl || ''}
                onChange={(e) => setFormData({
                  ...formData,
                  officialLinks: { ...formData.officialLinks!, officialNotificationPdfUrl: e.target.value }
                })}
                placeholder="Notification PDF URL"
                className="p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
              />
              <input
                type="url"
                value={formData.officialLinks?.officialWebsiteUrl || ''}
                onChange={(e) => setFormData({
                  ...formData,
                  officialLinks: { ...formData.officialLinks!, officialWebsiteUrl: e.target.value }
                })}
                placeholder="Official Website URL"
                className="p-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex items-center justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Save className="w-4 h-4" />
              <span>{isHindi ? 'पोस्ट सुरक्षित करें (Save Post)' : 'Save Post'}</span>
            </button>
          </div>
        </form>
      )}

      {/* Existing Posts Table / Management List */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-5 sm:p-7 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
            {isHindi ? `सभी सक्रिय पोस्ट (${posts.length})` : `Published Posts (${posts.length})`}
          </h2>
          <span className="text-xs text-slate-500">Live in Scheme 2 U database</span>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {posts.map(post => (
            <div key={post.id} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group">
              <div className="flex-1 min-w-0 pr-3">
                <div className="flex items-center gap-2 mb-1 flex-wrap">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 uppercase">
                    {post.category}
                  </span>
                  <span className="px-1.5 py-0.2 rounded text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-semibold">
                    {post.stateScope}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Updated: {post.lastUpdated}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white line-clamp-1">
                  {post.titleEn}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                  {post.titleHi}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => navigateToPost(post.slug)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 text-slate-600 hover:text-blue-600 transition-colors"
                  title="Preview"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleStartEdit(post)}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-amber-50 text-slate-600 hover:text-amber-600 transition-colors"
                  title="Edit"
                >
                  <Edit3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    if (window.confirm('Are you sure you want to delete this post?')) {
                      deletePost(post.id);
                    }
                  }}
                  className="p-2 rounded-xl bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-950/40 dark:hover:bg-red-900 transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
