import React, { useState } from 'react';
import { 
  Search, 
  Moon, 
  Sun, 
  Languages, 
  Menu, 
  X, 
  Bookmark, 
  ChevronDown, 
  Sparkles, 
  PlusCircle, 
  Calculator, 
  Compass, 
  ShieldCheck, 
  FileText,
  Briefcase,
  GraduationCap,
  Award,
  Landmark,
  CheckSquare,
  Cpu,
  Youtube,
  Send,
  MessageCircle,
  Instagram,
  Facebook
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { CATEGORIES } from '../data/categories';
import { CategoryType } from '../types';
import { SOCIAL_LINKS } from '../data/social';

export const Header: React.FC = () => {
  const { 
    language, 
    toggleLanguage, 
    theme, 
    toggleTheme, 
    navigateToHome, 
    navigateToCategory, 
    navigateToAdmin,
    setActiveView,
    bookmarks,
    setIsSearchModalOpen,
    setIsAgeCalcOpen,
    setIsSchemeFinderOpen,
    activeView,
    isAdminAuthenticated
  } = useApp();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const isHindi = language === 'hi';

  const handleCategoryClick = (catId: CategoryType) => {
    navigateToCategory(catId);
    setIsCategoryDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-4 h-4" />;
      case 'FileText': return <FileText className="w-4 h-4" />;
      case 'Award': return <Award className="w-4 h-4" />;
      case 'CheckSquare': return <CheckSquare className="w-4 h-4" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4" />;
      case 'Landmark': return <Landmark className="w-4 h-4" />;
      case 'Compass': return <Compass className="w-4 h-4" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      default: return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors shadow-xs">
      {/* Top micro bar for quick announcements & social */}
      <div className="bg-slate-50 dark:bg-slate-950 text-slate-700 dark:text-slate-300 text-xs py-1.5 px-4 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white uppercase tracking-wide">
              Official Portal
            </span>
            <span className="hidden sm:inline font-medium text-slate-600 dark:text-slate-400">
              {isHindi 
                ? 'सरकारी योजनाएं, सरकारी नौकरी, एडमिट कार्ड व छात्रवृत्ति का विश्वसनीय केंद्र' 
                : 'India\'s Trusted Information Portal for Govt Jobs, Schemes & Results'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {/* Social Icons in top micro bar */}
            <div className="hidden md:flex items-center gap-2.5 border-r border-slate-200 dark:border-slate-700 pr-3">
              <a 
                href={SOCIAL_LINKS.youtube.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="YouTube"
                className="text-red-600 hover:text-red-700 transition-colors"
                title="Scheme 2 U on YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a 
                href={SOCIAL_LINKS.telegram.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Telegram"
                className="text-sky-600 hover:text-sky-700 transition-colors"
                title="Join Telegram Channel"
              >
                <Send className="w-3.5 h-3.5" />
              </a>
              <a 
                href={SOCIAL_LINKS.whatsapp.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp"
                className="text-emerald-600 hover:text-emerald-700 transition-colors"
                title="Join WhatsApp Channel"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
              <a 
                href={SOCIAL_LINKS.instagram.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
                className="text-pink-600 hover:text-pink-700 transition-colors"
                title="Follow Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a 
                href={SOCIAL_LINKS.facebook.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="text-blue-600 hover:text-blue-700 transition-colors"
                title="Facebook Page"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Tools */}
            <button 
              id="top-age-calc-btn"
              onClick={() => setIsAgeCalcOpen(true)}
              className="flex items-center gap-1 font-semibold text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white transition-colors cursor-pointer text-[11px]"
            >
              <Calculator className="w-3 h-3 text-amber-600" />
              <span>{isHindi ? 'आयु कैलकुलेटर' : 'Age Calc'}</span>
            </button>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <button 
              id="top-scheme-finder-btn"
              onClick={() => setIsSchemeFinderOpen(true)}
              className="flex items-center gap-1 font-semibold text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white transition-colors cursor-pointer text-[11px]"
            >
              <Sparkles className="w-3 h-3 text-blue-600" />
              <span>{isHindi ? 'पात्रता जांचें' : 'Eligibility'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand Name */}
          <div className="flex items-center gap-3">
            <button
              id="brand-logo-btn"
              onClick={navigateToHome}
              className="flex items-center gap-2.5 group text-left focus:outline-hidden"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 to-indigo-800 text-white flex items-center justify-center font-black text-xl shadow-md group-hover:scale-105 transition-transform">
                <span className="tracking-tighter">S2U</span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white">
                    Scheme <span className="text-blue-600 dark:text-blue-400">2</span> U
                  </span>
                  <span className="text-[10px] font-bold px-1.5 py-0.2 rounded bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                    .in
                  </span>
                </div>
                <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400 leading-tight">
                  {isHindi ? 'सरकारी योजना & नौकरी पोर्टल' : 'Sarkari Schemes & Jobs Portal'}
                </p>
              </div>
            </button>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-1">
            <button
              id="nav-home-btn"
              onClick={navigateToHome}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activeView.type === 'home'
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300'
                  : 'text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400'
              }`}
            >
              {isHindi ? 'मुख्य पृष्ठ' : 'Home'}
            </button>

            {/* All Categories Dropdown */}
            <div className="relative">
              <button
                id="nav-categories-dropdown-btn"
                onClick={() => setIsCategoryDropdownOpen(!isCategoryDropdownOpen)}
                onBlur={() => setTimeout(() => setIsCategoryDropdownOpen(false), 200)}
                className="flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors"
              >
                <span>{isHindi ? 'सभी श्रेणियां' : 'Categories'}</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isCategoryDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl p-2 z-50 animate-in fade-in zoom-in-95 duration-100">
                  <div className="grid grid-cols-1 gap-1">
                    {CATEGORIES.map(cat => (
                      <button
                        key={cat.id}
                        onClick={() => handleCategoryClick(cat.id)}
                        className="flex items-center gap-3 w-full px-3 py-2 text-left rounded-lg text-xs font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                      >
                        <div className="p-1 rounded bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400">
                          {getCategoryIcon(cat.icon)}
                        </div>
                        <div className="flex-1 truncate">
                          <div className="font-semibold">{isHindi ? cat.labelHi : cat.labelEn}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Quick Priority Category Tabs */}
            <button
              id="nav-jobs-btn"
              onClick={() => handleCategoryClick('jobs')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activeView.type === 'category' && activeView.category === 'jobs'
                  ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300'
                  : 'text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400'
              }`}
            >
              {isHindi ? 'सरकारी नौकरी' : 'Jobs'}
            </button>

            <button
              id="nav-admit-btn"
              onClick={() => handleCategoryClick('admit-card')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activeView.type === 'category' && activeView.category === 'admit-card'
                  ? 'bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                  : 'text-slate-700 hover:text-amber-600 dark:text-slate-300 dark:hover:text-amber-400'
              }`}
            >
              {isHindi ? 'एडमिट कार्ड' : 'Admit Card'}
            </button>

            <button
              id="nav-results-btn"
              onClick={() => handleCategoryClick('results')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activeView.type === 'category' && activeView.category === 'results'
                  ? 'bg-emerald-50 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                  : 'text-slate-700 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400'
              }`}
            >
              {isHindi ? 'रिजल्ट' : 'Results'}
            </button>

            <button
              id="nav-schemes-btn"
              onClick={() => handleCategoryClick('schemes')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activeView.type === 'category' && activeView.category === 'schemes'
                  ? 'bg-teal-50 text-teal-800 dark:bg-teal-950/60 dark:text-teal-300'
                  : 'text-slate-700 hover:text-teal-600 dark:text-slate-300 dark:hover:text-teal-400'
              }`}
            >
              {isHindi ? 'सरकारी योजनाएं' : 'Schemes'}
            </button>

            <button
              id="nav-scholarship-btn"
              onClick={() => handleCategoryClick('scholarships')}
              className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors ${
                activeView.type === 'category' && activeView.category === 'scholarships'
                  ? 'bg-indigo-50 text-indigo-800 dark:bg-indigo-950/60 dark:text-indigo-300'
                  : 'text-slate-700 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400'
              }`}
            >
              {isHindi ? 'छात्रवृत्ति' : 'Scholarships'}
            </button>

            <button
              id="nav-bihar-btn"
              onClick={() => handleCategoryClick('bihar')}
              className={`px-3 py-2 rounded-lg text-sm font-bold flex items-center gap-1 transition-colors ${
                activeView.type === 'category' && activeView.category === 'bihar'
                  ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                  : 'text-rose-600 hover:text-rose-700 dark:text-rose-400'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse"></span>
              {isHindi ? 'बिहार स्पेशल' : 'Bihar Updates'}
            </button>
          </nav>

          {/* Right Action Icons & Controls */}
          <div className="flex items-center gap-1 sm:gap-2">
            {/* Search Trigger Button */}
            <button
              id="header-search-trigger-btn"
              onClick={() => setIsSearchModalOpen(true)}
              className="flex items-center gap-2 px-3 py-2 text-sm text-slate-500 bg-slate-100 dark:bg-slate-800 dark:text-slate-400 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              title="Search updates (Ctrl + K)"
            >
              <Search className="w-4 h-4 text-slate-600 dark:text-slate-300" />
              <span className="hidden md:inline font-medium">
                {isHindi ? 'खोजें...' : 'Search...'}
              </span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded text-slate-500">
                ⌘K
              </kbd>
            </button>

            {/* Language Switcher Button */}
            <button
              id="lang-toggle-btn"
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs font-bold bg-slate-100 text-slate-800 hover:bg-blue-50 hover:text-blue-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-blue-950 dark:hover:text-blue-300 transition-colors"
              title={isHindi ? 'Switch to English' : 'हिंदी में बदलें'}
            >
              <Languages className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span>{language === 'hi' ? 'EN' : 'हिन्दी'}</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              id="theme-toggle-btn"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              title={theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-slate-600" />
              )}
            </button>

            {/* Bookmarks Icon */}
            <button
              id="bookmarks-btn"
              onClick={() => setActiveView({ type: 'bookmarks' })}
              className="relative p-2 rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
              title={isHindi ? 'सहेजे गए अपडेट (Bookmarks)' : 'Saved Bookmarks'}
            >
              <Bookmark className="w-5 h-5" />
              {bookmarks.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-blue-600 text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  {bookmarks.length}
                </span>
              )}
            </button>

            {/* Post Manager / Admin */}
            <button
              id="admin-manager-btn"
              onClick={navigateToAdmin}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xs cursor-pointer ${
                isAdminAuthenticated
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 border border-slate-200 dark:border-slate-700'
              }`}
              title={isAdminAuthenticated ? "Admin Dashboard (Logged In)" : "Admin Login / Post Manager"}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isAdminAuthenticated ? (isHindi ? 'एडमिन पैनल' : 'Admin Panel') : (isHindi ? 'एडमिन लॉगिन' : 'Admin Login')}</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={() => { navigateToHome(); setIsMobileMenuOpen(false); }}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300 font-semibold text-xs text-left"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isHindi ? 'मुख्य पृष्ठ' : 'Home'}</span>
            </button>

            <button
              onClick={() => { handleCategoryClick('bihar'); }}
              className="flex items-center gap-2 p-2.5 rounded-lg bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300 font-bold text-xs text-left"
            >
              <Compass className="w-4 h-4" />
              <span>{isHindi ? 'बिहार अपडेट्स' : 'Bihar Updates'}</span>
            </button>
          </div>

          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-1 pt-2">
            {isHindi ? 'प्रमुख श्रेणियां' : 'Main Categories'}
          </div>

          <div className="grid grid-cols-2 gap-2">
            {CATEGORIES.slice(0, 8).map(cat => (
              <button
                key={cat.id}
                onClick={() => handleCategoryClick(cat.id)}
                className="flex items-center gap-2 p-2 rounded-lg text-left text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                <div className="p-1 rounded bg-white dark:bg-slate-700 text-blue-600">
                  {getCategoryIcon(cat.icon)}
                </div>
                <span className="truncate">{isHindi ? cat.labelHi : cat.labelEn}</span>
              </button>
            ))}
          </div>

          {/* Quick Tools & Admin in Mobile */}
          <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
            <button
              onClick={() => { setIsAgeCalcOpen(true); setIsMobileMenuOpen(false); }}
              className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold bg-amber-50 text-amber-800 dark:bg-amber-950 dark:text-amber-300 flex items-center justify-center gap-1.5"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>{isHindi ? 'आयु कैलकुलेटर' : 'Age Calculator'}</span>
            </button>

            <button
              onClick={() => { navigateToAdmin(); setIsMobileMenuOpen(false); }}
              className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 ${
                isAdminAuthenticated
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isAdminAuthenticated ? (isHindi ? 'एडमिन पैनल' : 'Admin Panel') : (isHindi ? 'एडमिन लॉगिन' : 'Admin Login')}</span>
            </button>
          </div>

          {/* Social Channels in Mobile */}
          <div className="pt-2 flex items-center justify-around bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl">
            <a href={SOCIAL_LINKS.youtube.url} target="_blank" rel="noopener noreferrer" className="text-red-600 p-1">
              <Youtube className="w-5 h-5" />
            </a>
            <a href={SOCIAL_LINKS.telegram.url} target="_blank" rel="noopener noreferrer" className="text-sky-500 p-1">
              <Send className="w-5 h-5" />
            </a>
            <a href={SOCIAL_LINKS.whatsapp.url} target="_blank" rel="noopener noreferrer" className="text-emerald-600 p-1">
              <MessageCircle className="w-5 h-5" />
            </a>
            <a href={SOCIAL_LINKS.instagram.url} target="_blank" rel="noopener noreferrer" className="text-pink-600 p-1">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={SOCIAL_LINKS.facebook.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 p-1">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
