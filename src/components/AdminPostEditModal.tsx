import React, { useState } from 'react';
import { 
  X, 
  Save, 
  Lock, 
  Key, 
  Calendar, 
  DollarSign, 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  Trash2, 
  Eye, 
  EyeOff,
  Sparkles,
  Building2,
  Clock,
  Layers,
  ChevronRight
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { PostItem, CategoryType, VerificationStatus, ComputedStatus } from '../types';
import { CATEGORIES } from '../data/categories';

interface AdminPostEditModalProps {
  post: PostItem;
  isOpen: boolean;
  onClose: () => void;
  onPostUpdated?: (updatedPost: PostItem) => void;
}

export const AdminPostEditModal: React.FC<AdminPostEditModalProps> = ({
  post,
  isOpen,
  onClose,
  onPostUpdated
}) => {
  const { 
    isAdminAuthenticated, 
    loginAdmin, 
    updatePost, 
    deletePost, 
    showToast, 
    language,
    navigateToHome 
  } = useApp();

  const isHindi = language === 'hi';

  // Login Form for non-authenticated admins
  const [passcode, setPasscode] = useState('');
  const [showPasscode, setShowPasscode] = useState(false);
  const [loginError, setLoginError] = useState(false);

  // Active Edit Form Tab
  const [activeTab, setActiveTab] = useState<'dates' | 'basics' | 'fees' | 'links'>('dates');

  // Working copy of post data
  const [formData, setFormData] = useState<PostItem>({ ...post });

  if (!isOpen) return null;

  const handleAdminAuth = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode.trim()) return;
    const ok = loginAdmin(passcode);
    if (!ok) {
      setLoginError(true);
    } else {
      setLoginError(false);
      setPasscode('');
      showToast(isHindi ? 'एडमिन सत्यापन सफल! अब आप पोस्ट एडिट कर सकते हैं।' : 'Admin verified! You can now edit this post.');
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.titleEn || !formData.titleHi) {
      alert(isHindi ? 'कृपया अंग्रेजी और हिंदी दोनों शीर्षक भरें।' : 'Please provide both English and Hindi titles.');
      return;
    }

    const updated: PostItem = {
      ...formData,
      lastUpdated: new Date().toISOString().split('T')[0],
      lastVerifiedDate: new Date().toISOString().split('T')[0]
    };

    updatePost(updated);
    if (onPostUpdated) {
      onPostUpdated(updated);
    }
    showToast(isHindi ? 'पोस्ट सफलतापूर्वक अपडेट हो गई!' : 'Post updated successfully by Admin!');
    onClose();
  };

  const handleDelete = () => {
    const confirmMsg = isHindi 
      ? `क्या आप वाकई "${formData.titleHi}" को हटाना चाहते हैं?` 
      : `Are you sure you want to delete "${formData.titleEn}"?`;
    if (window.confirm(confirmMsg)) {
      deletePost(formData.id);
      showToast(isHindi ? 'पोस्ट हटा दी गई।' : 'Post deleted.');
      onClose();
      navigateToHome();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/80 backdrop-blur-xs overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden my-auto max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-xs">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
                  {isHindi ? 'एडमिन पोस्ट एडिटर (Admin Post Control)' : 'Admin Post Editor'}
                </h3>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-black bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                  2026 Database
                </span>
              </div>
              <p className="text-[11px] text-slate-500 truncate max-w-md">
                {post.advertisementNumber || post.postNameEn}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {!isAdminAuthenticated ? (
          /* Locked Authentication View */
          <div className="p-6 sm:p-10 text-center max-w-md mx-auto my-auto space-y-5">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 border border-amber-200 dark:border-amber-800 flex items-center justify-center mx-auto">
              <Lock className="w-8 h-8" />
            </div>
            <div>
              <h4 className="text-lg font-black text-slate-900 dark:text-white">
                {isHindi ? 'केवल अधिकृत एडमिन ही पोस्ट एडिट कर सकते हैं' : 'Admin Authorization Required'}
              </h4>
              <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
                {isHindi 
                  ? 'सरकारी अधिसूचनाओं की सत्यता व प्रामाणिकता बनाए रखने हेतु पोस्ट में किसी भी प्रकार का बदलाव केवल एडमिन ही कर सकते हैं। कृपया अपना एडमिन पासवर्ड दर्ज करें।'
                  : 'To maintain the integrity of official government notifications, only verified administrators can edit published articles. Enter admin passcode to unlock.'}
              </p>
            </div>

            <form onSubmit={handleAdminAuth} className="space-y-3">
              <div className="relative">
                <input
                  type={showPasscode ? 'text' : 'password'}
                  placeholder={isHindi ? 'एडमिन पासवर्ड दर्ज करें...' : 'Enter Admin Passcode...'}
                  value={passcode}
                  onChange={(e) => {
                    setPasscode(e.target.value);
                    setLoginError(false);
                  }}
                  className={`w-full px-4 py-3 rounded-xl border text-sm font-mono text-center focus:outline-hidden ${
                    loginError 
                      ? 'border-red-500 focus:ring-2 focus:ring-red-200' 
                      : 'border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500'
                  }`}
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => setShowPasscode(!showPasscode)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPasscode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {loginError && (
                <p className="text-xs font-bold text-red-600 flex items-center justify-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{isHindi ? 'गलत पासवर्ड! कृपया पुनः प्रयास करें।' : 'Incorrect admin passcode! Please retry.'}</span>
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Key className="w-4 h-4" />
                <span>{isHindi ? 'एडमिन अनलॉक करें' : 'Unlock Admin Editor'}</span>
              </button>
            </form>
          </div>
        ) : (
          /* Unlocked Admin Post Editor Form */
          <form onSubmit={handleSave} className="flex flex-col flex-1 overflow-hidden">
            
            {/* Tabs Navigation */}
            <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 px-4 sm:px-6 overflow-x-auto gap-2 py-2 shrink-0 text-xs">
              <button
                type="button"
                onClick={() => setActiveTab('dates')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'dates'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>{isHindi ? '1. तिथियां व शेड्यूल' : '1. Dates & Schedule'}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('fees')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'fees'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                <DollarSign className="w-3.5 h-3.5" />
                <span>{isHindi ? '2. शुल्क व रिक्तियां' : '2. Fees & Vacancies'}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('basics')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'basics'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>{isHindi ? '3. शीर्षक व विवरण' : '3. Titles & Details'}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('links')}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl font-bold transition-colors whitespace-nowrap cursor-pointer ${
                  activeTab === 'links'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                }`}
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>{isHindi ? '4. आधिकारिक लिंक्स' : '4. Official Links'}</span>
              </button>
            </div>

            {/* Tab Contents */}
            <div className="p-4 sm:p-6 overflow-y-auto flex-1 space-y-4 text-xs">
              
              {/* TAB 1: DATES & SCHEDULE */}
              {activeTab === 'dates' && (
                <div className="space-y-4">
                  <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-300 flex items-center justify-between">
                    <div>
                      <span className="font-bold block">{isHindi ? '📅 2026 महत्वपूर्ण तिथियां नियंत्रण' : '📅 2026 Important Dates Control'}</span>
                      <span className="text-[11px] opacity-80">{isHindi ? 'अधिसूचना जारी, आवेदन शुरू, अंतिम तिथि व परीक्षा तिथियों को संशोधित करें।' : 'Edit Notification Release, Apply Dates, Last Date, and Exam dates.'}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                        {isHindi ? 'अधिसूचना जारी तिथि (Notification Release Date)' : 'Notification Date'}
                      </label>
                      <input
                        type="text"
                        value={formData.importantDates?.notificationDate || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          importantDates: { ...formData.importantDates, notificationDate: e.target.value }
                        })}
                        placeholder="e.g., 20/08/2026 or August 2026"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                        {isHindi ? 'विज्ञापन / अधिसूचना संख्या (Advt No.)' : 'Advertisement Number'}
                      </label>
                      <input
                        type="text"
                        value={formData.advertisementNumber || ''}
                        onChange={(e) => setFormData({ ...formData, advertisementNumber: e.target.value })}
                        placeholder="e.g., Advt No. 89/2026-BPSC"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                        {isHindi ? 'ऑनलाइन आवेदन प्रारंभ तिथि (Start Date)' : 'Application Start Date'}
                      </label>
                      <input
                        type="text"
                        value={formData.importantDates?.applicationStart || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          importantDates: { ...formData.importantDates, applicationStart: e.target.value }
                        })}
                        placeholder="e.g., 01/09/2026"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-semibold text-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-red-600 dark:text-red-400 mb-1">
                        {isHindi ? 'आवेदन की अंतिम तिथि (Last Date to Apply)' : 'Application Last Date'}
                      </label>
                      <input
                        type="text"
                        value={formData.importantDates?.applicationLastDate || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          importantDates: { ...formData.importantDates, applicationLastDate: e.target.value }
                        })}
                        placeholder="e.g., 30/09/2026"
                        className="w-full px-3 py-2 rounded-xl border border-red-300 dark:border-red-800 bg-red-50/50 dark:bg-red-950/40 text-red-600 dark:text-red-300 font-bold"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                        {isHindi ? 'शुल्क भुगतान की अंतिम तिथि (Fee Last Date)' : 'Fee Payment Last Date'}
                      </label>
                      <input
                        type="text"
                        value={formData.importantDates?.feePaymentLastDate || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          importantDates: { ...formData.importantDates, feePaymentLastDate: e.target.value }
                        })}
                        placeholder="e.g., 30/09/2026"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                        {isHindi ? 'फॉर्म सुधार तिथि (Correction Window)' : 'Correction Window'}
                      </label>
                      <input
                        type="text"
                        value={formData.importantDates?.correctionWindow || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          importantDates: { ...formData.importantDates, correctionWindow: e.target.value }
                        })}
                        placeholder="e.g., 01/10/2026 to 05/10/2026"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                        {isHindi ? 'एडमिट कार्ड तिथि (Admit Card Date)' : 'Admit Card Date'}
                      </label>
                      <input
                        type="text"
                        value={formData.importantDates?.admitCardDate || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          importantDates: { ...formData.importantDates, admitCardDate: e.target.value }
                        })}
                        placeholder="e.g., October 2026"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                        {isHindi ? 'परीक्षा तिथि (Exam Date)' : 'Exam Date'}
                      </label>
                      <input
                        type="text"
                        value={formData.importantDates?.examDate || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          importantDates: { ...formData.importantDates, examDate: e.target.value }
                        })}
                        placeholder="e.g., November 2026"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                        {isHindi ? 'रिजल्ट घोषणा तिथि (Result Date)' : 'Result Date'}
                      </label>
                      <input
                        type="text"
                        value={formData.importantDates?.resultDate || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          importantDates: { ...formData.importantDates, resultDate: e.target.value }
                        })}
                        placeholder="e.g., December 2026"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                        {isHindi ? 'स्थिति बैज (Computed Status)' : 'Computed Status'}
                      </label>
                      <select
                        value={formData.computedStatus || 'LIVE'}
                        onChange={(e) => setFormData({ ...formData, computedStatus: e.target.value as ComputedStatus })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      >
                        <option value="LIVE">🟢 LIVE / Active Now</option>
                        <option value="UPCOMING">🔵 UPCOMING (जल्द आ रहा है)</option>
                        <option value="EXPIRED">🔴 EXPIRED (समाप्त)</option>
                        <option value="ANNOUNCED">🟡 ANNOUNCED (घोषित)</option>
                        <option value="PENDING_VERIFICATION">🟠 PENDING VERIFICATION</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: FEES & VACANCIES */}
              {activeTab === 'fees' && (
                <div className="space-y-4">
                  <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300">
                    <span className="font-bold block">{isHindi ? '💰 आवेदन शुल्क एवं पद विवरण' : '💰 Application Fee & Vacancy Breakdown'}</span>
                    <span className="text-[11px] opacity-80">{isHindi ? 'विभिन्न श्रेणियों का आवेदन शुल्क और पद संख्या अपडेट करें।' : 'Update category-wise application fee, total vacancies and salary.'}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">General Fee</label>
                      <input
                        type="text"
                        value={formData.applicationFee?.generalFee || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          applicationFee: { ...formData.applicationFee, generalFee: e.target.value }
                        })}
                        placeholder="e.g., ₹100/-"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">OBC / BC / EBC Fee</label>
                      <input
                        type="text"
                        value={formData.applicationFee?.obcFee || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          applicationFee: { ...formData.applicationFee, obcFee: e.target.value }
                        })}
                        placeholder="e.g., ₹100/-"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">EWS Fee</label>
                      <input
                        type="text"
                        value={formData.applicationFee?.ewsFee || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          applicationFee: { ...formData.applicationFee, ewsFee: e.target.value }
                        })}
                        placeholder="e.g., ₹100/-"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">SC / ST Fee</label>
                      <input
                        type="text"
                        value={formData.applicationFee?.scFee || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          applicationFee: { ...formData.applicationFee, scFee: e.target.value, stFee: e.target.value }
                        })}
                        placeholder="e.g., ₹100/-"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Female (All Categories)</label>
                      <input
                        type="text"
                        value={formData.applicationFee?.female || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          applicationFee: { ...formData.applicationFee, female: e.target.value }
                        })}
                        placeholder="e.g., ₹100/-"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Divyang / PwD Fee</label>
                      <input
                        type="text"
                        value={formData.applicationFee?.scStPwd || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          applicationFee: { ...formData.applicationFee, scStPwd: e.target.value }
                        })}
                        placeholder="e.g., ₹100/-"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      {isHindi ? 'शुल्क नोट / विवरण (Fee Exemption Note)' : 'Fee Exemption / Payment Note'}
                    </label>
                    <input
                      type="text"
                      value={formData.applicationFee?.feeExemptionNote || ''}
                      onChange={(e) => setFormData({
                        ...formData,
                        applicationFee: { ...formData.applicationFee, feeExemptionNote: e.target.value }
                      })}
                      placeholder="e.g., सभी श्रेणियों के लिए आवेदन शुल्क ₹100/- निर्धारित है।"
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                        {isHindi ? 'कुल पद / लाभ राशि (Total Vacancies / Benefit)' : 'Total Vacancies or Amount'}
                      </label>
                      <input
                        type="text"
                        value={formData.totalVacanciesOrAmount || ''}
                        onChange={(e) => setFormData({ ...formData, totalVacanciesOrAmount: e.target.value })}
                        placeholder="e.g., 32,388+ Vacancies"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                        {isHindi ? 'वेतनमान / पे-स्केल (Salary / Pay Scale)' : 'Salary / Pay Scale'}
                      </label>
                      <input
                        type="text"
                        value={formData.salaryPayScale || ''}
                        onChange={(e) => setFormData({ ...formData, salaryPayScale: e.target.value })}
                        placeholder="e.g., Level-7 (₹44,900 - ₹1,42,400)"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Min Age</label>
                      <input
                        type="text"
                        value={formData.ageLimit?.minAge || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          ageLimit: { ...formData.ageLimit, minAge: e.target.value }
                        })}
                        placeholder="e.g., 18 Years"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Max Age</label>
                      <input
                        type="text"
                        value={formData.ageLimit?.maxAge || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          ageLimit: { ...formData.ageLimit, maxAge: e.target.value }
                        })}
                        placeholder="e.g., 37 Years"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Age as on Date</label>
                      <input
                        type="text"
                        value={formData.ageLimit?.asOnDate || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          ageLimit: { ...formData.ageLimit, asOnDate: e.target.value }
                        })}
                        placeholder="e.g., 01/08/2026"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: TITLES & DETAILS */}
              {activeTab === 'basics' && (
                <div className="space-y-4">
                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      Title (English) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.titleEn || ''}
                      onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                      शीर्षक (Hindi) <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.titleHi || ''}
                      onChange={(e) => setFormData({ ...formData, titleHi: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white font-bold"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Organization (English)</label>
                      <input
                        type="text"
                        value={formData.organizationEn || ''}
                        onChange={(e) => setFormData({ ...formData, organizationEn: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">संस्था / विभाग (Hindi)</label>
                      <input
                        type="text"
                        value={formData.organizationHi || ''}
                        onChange={(e) => setFormData({ ...formData, organizationHi: e.target.value })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">Short Summary (English)</label>
                    <textarea
                      rows={2}
                      value={formData.shortSummaryEn || ''}
                      onChange={(e) => setFormData({ ...formData, shortSummaryEn: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">संक्षिप्त विवरण (Hindi)</label>
                    <textarea
                      rows={2}
                      value={formData.shortSummaryHi || ''}
                      onChange={(e) => setFormData({ ...formData, shortSummaryHi: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                    />
                  </div>
                </div>
              )}

              {/* TAB 4: OFFICIAL LINKS */}
              {activeTab === 'links' && (
                <div className="space-y-4">
                  <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-amber-900 dark:text-amber-300">
                    <span className="font-bold block">{isHindi ? '🔗 आधिकारिक वेबसाइट व नोटिफिकेशन लिंक्स' : '🔗 Official Links & PDFs'}</span>
                    <span className="text-[11px] opacity-80">{isHindi ? 'केवल प्रामाणिक .gov.in या .nic.in लिंक ही जोड़ें।' : 'Enter direct official URLs for online application and PDF notifications.'}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                        {isHindi ? 'ऑनलाइन आवेदन लिंक (Apply Online URL)' : 'Apply Online URL'}
                      </label>
                      <input
                        type="url"
                        value={formData.officialLinks?.applyOnlineUrl || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          officialLinks: { ...formData.officialLinks, applyOnlineUrl: e.target.value }
                        })}
                        placeholder="https://onlinebpsc.bihar.gov.in"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                        {isHindi ? 'आधिकारिक नोटिफिकेशन PDF लिंक' : 'Official Notification PDF URL'}
                      </label>
                      <input
                        type="url"
                        value={formData.officialLinks?.officialNotificationPdfUrl || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          officialLinks: { ...formData.officialLinks, officialNotificationPdfUrl: e.target.value }
                        })}
                        placeholder="https://bpsc.bih.nic.in/advt.pdf"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                        {isHindi ? 'आधिकारिक पोर्टल (Official Website URL)' : 'Official Website URL'}
                      </label>
                      <input
                        type="url"
                        value={formData.officialLinks?.officialWebsiteUrl || formData.primarySourceUrl || ''}
                        onChange={(e) => setFormData({
                          ...formData,
                          officialLinks: { ...formData.officialLinks, officialWebsiteUrl: e.target.value },
                          primarySourceUrl: e.target.value
                        })}
                        placeholder="https://bpsc.bih.nic.in"
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 dark:text-slate-300 mb-1">
                        {isHindi ? 'सत्यापन स्थिति (Verification Status)' : 'Verification Status'}
                      </label>
                      <select
                        value={formData.verificationStatus || 'OFFICIAL_VERIFIED'}
                        onChange={(e) => setFormData({ ...formData, verificationStatus: e.target.value as VerificationStatus })}
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-white"
                      >
                        <option value="OFFICIAL_VERIFIED">🛡️ OFFICIAL_VERIFIED (100% सरकारी स्रोत सत्यापित)</option>
                        <option value="PARTIALLY_VERIFIED">⚠️ PARTIALLY_VERIFIED (आंशिक सत्यापन)</option>
                        <option value="DISPUTED">❌ DISPUTED (द्वंद्व)</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Footer Action Buttons */}
            <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-850 flex items-center justify-between gap-3 shrink-0">
              <button
                type="button"
                onClick={handleDelete}
                className="px-3.5 py-2 rounded-xl border border-red-200 dark:border-red-800 bg-red-50 hover:bg-red-100 dark:bg-red-950/60 dark:hover:bg-red-900 text-red-600 dark:text-red-300 font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>{isHindi ? 'पोस्ट हटाएं' : 'Delete Post'}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 font-semibold transition-colors cursor-pointer"
                >
                  {isHindi ? 'रद्द करें' : 'Cancel'}
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-md transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>{isHindi ? 'सहेजें व तुरंत लाइव करें' : 'Save & Publish Live'}</span>
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
