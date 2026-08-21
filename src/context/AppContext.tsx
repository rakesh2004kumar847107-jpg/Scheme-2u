import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  PostItem, 
  Language, 
  ThemeMode, 
  ActiveView, 
  CategoryType, 
  OfficialSourceRegistry,
  VerificationStatus
} from '../types';
import { INITIAL_POSTS } from '../data/posts';
import { OFFICIAL_SOURCES } from '../data/sources';

interface SystemHealthInfo {
  status: string;
  year: number;
  aiEngineAvailable: boolean;
  postsCount: number;
  sourcesCount: number;
  activeSources: number;
  schedulerStatus: string;
}

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  activeView: ActiveView;
  setActiveView: (view: ActiveView) => void;
  navigateToHome: () => void;
  navigateToCategory: (category: CategoryType) => void;
  navigateToPost: (slug: string) => void;
  navigateToPolicy: (slug: string) => void;
  navigateToAdmin: () => void;
  isAdminAuthenticated: boolean;
  loginAdmin: (passcode: string) => boolean;
  logoutAdmin: () => void;
  changeAdminPassword: (currentPass: string, newPass: string) => { success: boolean; message: string };
  resetAdminPassword: () => void;
  isCustomPasswordSet: boolean;
  
  posts: PostItem[];
  addPost: (post: PostItem) => void;
  updatePost: (post: PostItem) => void;
  deletePost: (id: string) => void;
  resetPostsToDefault: () => void;
  verifyPost: (postId: string, status: VerificationStatus, modifiedPost?: Partial<PostItem>, notes?: string) => Promise<boolean>;

  sources: OfficialSourceRegistry[];
  addSource: (source: OfficialSourceRegistry) => void;
  
  yearFilter: number;
  setYearFilter: (year: number) => void;

  isScanningLive: boolean;
  scanLiveSources: (category?: string, query?: string) => Promise<{ success: boolean; discoveredCount: number; updatedCount: number; message: string; requiresKey?: boolean }>;
  
  bookmarks: string[];
  toggleBookmark: (id: string) => void;
  isBookmarked: (id: string) => boolean;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  isSearchModalOpen: boolean;
  setIsSearchModalOpen: (open: boolean) => void;
  isAgeCalcOpen: boolean;
  setIsAgeCalcOpen: (open: boolean) => void;
  isSchemeFinderOpen: boolean;
  setIsSchemeFinderOpen: (open: boolean) => void;
  isSitemapOpen: boolean;
  setIsSitemapOpen: (open: boolean) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
  systemHealth: SystemHealthInfo | null;
  refreshHealth: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY_POSTS = 'scheme2u_custom_posts_v6_2026';
const LOCAL_STORAGE_KEY_SOURCES = 'scheme2u_sources_registry_v1';
const LOCAL_STORAGE_KEY_LANG = 'scheme2u_lang';
const LOCAL_STORAGE_KEY_THEME = 'scheme2u_theme';
const LOCAL_STORAGE_KEY_BOOKMARKS = 'scheme2u_bookmarks';
const LOCAL_STORAGE_KEY_ADMIN_AUTH = 'scheme2u_admin_auth';
const LOCAL_STORAGE_KEY_ADMIN_PASSCODE = 'scheme2u_custom_admin_passcode_v2';
const DEFAULT_ADMIN_PASSCODE = 'admin123';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Year Filter: 2026 is default as mandated
  const [yearFilter, setYearFilter] = useState<number>(2026);

  // System Health
  const [systemHealth, setSystemHealth] = useState<SystemHealthInfo | null>(null);

  const refreshHealth = async () => {
    try {
      const res = await fetch('/api/health');
      if (res.ok) {
        const data = await res.json();
        setSystemHealth(data);
      }
    } catch {
      // Fallback
    }
  };

  useEffect(() => {
    refreshHealth();
  }, []);

  // Admin Custom Passcode State
  const getStoredPasscode = (): string => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_ADMIN_PASSCODE);
      if (saved && saved.trim().length > 0) return saved.trim();
    } catch {}
    return DEFAULT_ADMIN_PASSCODE;
  };

  const [adminPasscode, setAdminPasscode] = useState<string>(getStoredPasscode);
  const isCustomPasswordSet = adminPasscode !== DEFAULT_ADMIN_PASSCODE;

  // Admin Authentication State
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem(LOCAL_STORAGE_KEY_ADMIN_AUTH) === 'true';
    } catch {
      return false;
    }
  });

  const loginAdmin = (passcode: string): boolean => {
    const trimmed = passcode.trim();
    const currentValidPass = getStoredPasscode();
    if (trimmed === currentValidPass) {
      setIsAdminAuthenticated(true);
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY_ADMIN_AUTH, 'true');
      } catch {}
      showToast(language === 'hi' ? 'एडमिन लॉगिन सफल!' : 'Admin logged in successfully!');
      return true;
    }
    showToast(language === 'hi' ? 'गलत एडमिन पासवर्ड! कृपया सही पासवर्ड दर्ज करें।' : 'Incorrect admin password! Please enter correct password.');
    return false;
  };

  const logoutAdmin = () => {
    setIsAdminAuthenticated(false);
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY_ADMIN_AUTH);
    } catch {}
    showToast(language === 'hi' ? 'एडमिन सत्र समाप्त (Logged Out)' : 'Admin logged out');
  };

  const changeAdminPassword = (currentPass: string, newPass: string): { success: boolean; message: string } => {
    const currentValid = getStoredPasscode();
    if (currentPass.trim() !== currentValid) {
      return {
        success: false,
        message: language === 'hi' ? 'वर्तमान पासवर्ड गलत है!' : 'Current password is incorrect!'
      };
    }
    if (!newPass || newPass.trim().length < 4) {
      return {
        success: false,
        message: language === 'hi' ? 'नया पासवर्ड कम से कम 4 अक्षरों का होना चाहिए!' : 'New password must be at least 4 characters long!'
      };
    }
    const cleanNew = newPass.trim();
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_ADMIN_PASSCODE, cleanNew);
      setAdminPasscode(cleanNew);
      showToast(language === 'hi' ? 'एडमिन पासवर्ड सफलतापूर्वक बदल दिया गया है!' : 'Admin password changed successfully!');
      return {
        success: true,
        message: language === 'hi' ? 'पासवर्ड सफलतापूर्वक अपडेट हो गया!' : 'Password updated successfully!'
      };
    } catch {
      return {
        success: false,
        message: language === 'hi' ? 'पासवर्ड सुरक्षित करने में समस्या आई!' : 'Error saving password!'
      };
    }
  };

  const resetAdminPassword = () => {
    try {
      localStorage.removeItem(LOCAL_STORAGE_KEY_ADMIN_PASSCODE);
      setAdminPasscode(DEFAULT_ADMIN_PASSCODE);
      showToast(language === 'hi' ? 'एडमिन पासवर्ड डिफ़ॉल्ट (admin123) पर रीसेट कर दिया गया।' : 'Admin password reset to default (admin123).');
    } catch {}
  };

  // Language State
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY_LANG);
    return (saved === 'en' || saved === 'hi') ? saved : 'hi';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(LOCAL_STORAGE_KEY_LANG, lang);
    document.documentElement.lang = lang;
  };

  const toggleLanguage = () => {
    const next = language === 'hi' ? 'en' : 'hi';
    setLanguage(next);
  };

  // Theme State (Dark / Light Mode)
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY_THEME);
    if (saved === 'dark' || saved === 'light') return saved;
    return 'light';
  });

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setThemeState(next);
    localStorage.setItem(LOCAL_STORAGE_KEY_THEME, next);
  };

  useEffect(() => {
    const isDark = theme === 'dark';
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [theme]);

  // Sources State
  const [sources, setSources] = useState<OfficialSourceRegistry[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_SOURCES);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch {}
    return OFFICIAL_SOURCES;
  });

  const addSource = (source: OfficialSourceRegistry) => {
    const updated = [source, ...sources];
    setSources(updated);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_SOURCES, JSON.stringify(updated));
    } catch {}
    showToast(language === 'hi' ? 'नया आधिकारिक स्रोत रजिस्ट्री में जोड़ा गया!' : 'Official source added to registry!');
  };

  // Posts State
  const [posts, setPosts] = useState<PostItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_POSTS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const initialIds = new Set(INITIAL_POSTS.map(p => p.id));
          const userOnlyPosts = parsed.filter((p: PostItem) => !initialIds.has(p.id));
          return [...userOnlyPosts, ...INITIAL_POSTS];
        }
      }
    } catch {}
    return INITIAL_POSTS;
  });

  const savePostsToStorage = (updatedPosts: PostItem[]) => {
    setPosts(updatedPosts);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_POSTS, JSON.stringify(updatedPosts));
    } catch (e) {
      console.error('Storage error', e);
    }
  };

  const addPost = (newPost: PostItem) => {
    const updated = [newPost, ...posts];
    savePostsToStorage(updated);
    showToast(language === 'hi' ? 'नई पोस्ट सुरक्षित व प्रकाशित की गई!' : 'New post created & published!');
  };

  const updatePost = (updatedPost: PostItem) => {
    const updated = posts.map(p => p.id === updatedPost.id ? updatedPost : p);
    savePostsToStorage(updated);
    showToast(language === 'hi' ? 'पोस्ट अपडेट हो गई है!' : 'Post updated successfully!');
  };

  const deletePost = (id: string) => {
    const updated = posts.filter(p => p.id !== id);
    savePostsToStorage(updated);
    showToast(language === 'hi' ? 'पोस्ट हटा दी गई!' : 'Post deleted successfully!');
  };

  const resetPostsToDefault = () => {
    savePostsToStorage(INITIAL_POSTS);
    showToast(language === 'hi' ? 'सत्यापित डिफ़ॉल्ट 2026 डेटा पुनर्स्थापित!' : 'Reset to verified default 2026 dataset!');
  };

  const verifyPost = async (postId: string, status: VerificationStatus, modifiedPost?: Partial<PostItem>, notes?: string): Promise<boolean> => {
    try {
      const response = await fetch('/api/verify-post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId, newStatus: status, modifiedPost, adminNotes: notes })
      });
      if (response.ok) {
        const data = await response.json();
        if (data.post) {
          updatePost(data.post);
          return true;
        }
      }
    } catch (err) {
      console.error('Verify post api error:', err);
    }

    // Client-side fallback update
    const post = posts.find(p => p.id === postId);
    if (post) {
      const updated = {
        ...post,
        ...(modifiedPost || {}),
        verificationStatus: status,
        lastVerifiedDate: new Date().toISOString().split('T')[0],
        lastUpdated: new Date().toISOString().split('T')[0]
      };
      updatePost(updated);
      return true;
    }
    return false;
  };

  // Live Official Source Scanner
  const [isScanningLive, setIsScanningLive] = useState(false);

  const scanLiveSources = async (category?: string, query?: string) => {
    setIsScanningLive(true);
    try {
      const response = await fetch('/api/scan-live-sources', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category, query })
      });

      const data = await response.json();
      setIsScanningLive(false);

      if (!response.ok) {
        if (data.requiresKey) {
          return {
            success: false,
            discoveredCount: 0,
            updatedCount: 0,
            message: language === 'hi'
              ? 'लाइव Google Search आधारित स्वचालित स्कैन के लिए GEMINI_API_KEY आवश्यक है।'
              : 'GEMINI_API_KEY environment variable required for live search scans.',
            requiresKey: true
          };
        }
        return {
          success: false,
          discoveredCount: 0,
          updatedCount: 0,
          message: data.error || 'Scan failed'
        };
      }

      if (data.discoveredPosts && data.discoveredPosts.length > 0) {
        const updatedList = [...data.discoveredPosts, ...posts];
        savePostsToStorage(updatedList);
      }

      return {
        success: true,
        discoveredCount: data.discoveredCount || 0,
        updatedCount: data.updatedCount || 0,
        message: data.message || 'Scan completed successfully'
      };
    } catch (err: any) {
      setIsScanningLive(false);
      return {
        success: false,
        discoveredCount: 0,
        updatedCount: 0,
        message: err.message || 'Network error scanning sources'
      };
    }
  };

  // Bookmarks State
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_BOOKMARKS);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const toggleBookmark = (id: string) => {
    setBookmarks(prev => {
      const exists = prev.includes(id);
      const next = exists ? prev.filter(item => item !== id) : [...prev, id];
      try {
        localStorage.setItem(LOCAL_STORAGE_KEY_BOOKMARKS, JSON.stringify(next));
      } catch (e) {
        console.error(e);
      }
      showToast(
        exists 
          ? (language === 'hi' ? 'बुकमार्क से हटाया गया' : 'Removed from bookmarks')
          : (language === 'hi' ? 'बुकमार्क में सहेजा गया' : 'Saved to bookmarks')
      );
      return next;
    });
  };

  const isBookmarked = (id: string) => bookmarks.includes(id);

  // Active View / Routing
  const [activeView, setActiveViewState] = useState<ActiveView>(() => {
    const hash = window.location.hash.replace('#', '');
    if (!hash) return { type: 'home' };
    if (hash.startsWith('post/')) return { type: 'detail', slug: hash.replace('post/', '') };
    if (hash.startsWith('category/')) return { type: 'category', category: hash.replace('category/', '') as CategoryType };
    if (hash.startsWith('page/')) return { type: 'policy', slug: hash.replace('page/', '') };
    if (hash === 'admin') return { type: 'admin' };
    if (hash === 'bookmarks') return { type: 'bookmarks' };
    if (hash.startsWith('search/')) return { type: 'search', query: decodeURIComponent(hash.replace('search/', '')) };
    return { type: 'home' };
  });

  const setActiveView = (view: ActiveView) => {
    setActiveViewState(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (view.type === 'home') window.location.hash = '';
    else if (view.type === 'detail') window.location.hash = `post/${view.slug}`;
    else if (view.type === 'category') window.location.hash = `category/${view.category}`;
    else if (view.type === 'policy') window.location.hash = `page/${view.slug}`;
    else if (view.type === 'admin') window.location.hash = 'admin';
    else if (view.type === 'bookmarks') window.location.hash = 'bookmarks';
    else if (view.type === 'search') window.location.hash = `search/${encodeURIComponent(view.query)}`;
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash) setActiveViewState({ type: 'home' });
      else if (hash.startsWith('post/')) setActiveViewState({ type: 'detail', slug: hash.replace('post/', '') });
      else if (hash.startsWith('category/')) setActiveViewState({ type: 'category', category: hash.replace('category/', '') as CategoryType });
      else if (hash.startsWith('page/')) setActiveViewState({ type: 'policy', slug: hash.replace('page/', '') });
      else if (hash === 'admin') setActiveViewState({ type: 'admin' });
      else if (hash === 'bookmarks') setActiveViewState({ type: 'bookmarks' });
      else if (hash.startsWith('search/')) setActiveViewState({ type: 'search', query: decodeURIComponent(hash.replace('search/', '')) });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHome = () => setActiveView({ type: 'home' });
  const navigateToCategory = (category: CategoryType) => setActiveView({ type: 'category', category });
  const navigateToPost = (slug: string) => setActiveView({ type: 'detail', slug });
  const navigateToPolicy = (slug: string) => setActiveView({ type: 'policy', slug });
  const navigateToAdmin = () => setActiveView({ type: 'admin' });

  // Modals & Search state
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isAgeCalcOpen, setIsAgeCalcOpen] = useState(false);
  const [isSchemeFinderOpen, setIsSchemeFinderOpen] = useState(false);
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        theme,
        toggleTheme,
        activeView,
        setActiveView,
        navigateToHome,
        navigateToCategory,
        navigateToPost,
        navigateToPolicy,
        navigateToAdmin,
        isAdminAuthenticated,
        loginAdmin,
        logoutAdmin,
        changeAdminPassword,
        resetAdminPassword,
        isCustomPasswordSet,
        posts,
        addPost,
        updatePost,
        deletePost,
        resetPostsToDefault,
        verifyPost,
        sources,
        addSource,
        yearFilter,
        setYearFilter,
        isScanningLive,
        scanLiveSources,
        bookmarks,
        toggleBookmark,
        isBookmarked,
        searchQuery,
        setSearchQuery,
        isSearchModalOpen,
        setIsSearchModalOpen,
        isAgeCalcOpen,
        setIsAgeCalcOpen,
        isSchemeFinderOpen,
        setIsSchemeFinderOpen,
        isSitemapOpen,
        setIsSitemapOpen,
        toastMessage,
        showToast,
        systemHealth,
        refreshHealth
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
