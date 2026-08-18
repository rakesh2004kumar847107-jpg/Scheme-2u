import React, { createContext, useContext, useState, useEffect } from 'react';
import { PostItem, Language, ThemeMode, ActiveView, CategoryType } from '../types';
import { INITIAL_POSTS } from '../data/posts';

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
  posts: PostItem[];
  addPost: (post: PostItem) => void;
  updatePost: (post: PostItem) => void;
  deletePost: (id: string) => void;
  resetPostsToDefault: () => void;
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
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const LOCAL_STORAGE_KEY_POSTS = 'scheme2u_custom_posts_v3';
const LOCAL_STORAGE_KEY_LANG = 'scheme2u_lang';
const LOCAL_STORAGE_KEY_THEME = 'scheme2u_theme';
const LOCAL_STORAGE_KEY_BOOKMARKS = 'scheme2u_bookmarks';

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Language State
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY_LANG);
    return (saved === 'en' || saved === 'hi') ? saved : 'hi'; // Default Hindi + English dual friendly
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
    return 'light'; // Default clean white background
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

  // Posts State (Merged with user modifications)
  const [posts, setPosts] = useState<PostItem[]>(() => {
    try {
      const saved = localStorage.getItem(LOCAL_STORAGE_KEY_POSTS);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Merge custom user created posts with initial 2024-2026 posts
          const initialIds = new Set(INITIAL_POSTS.map(p => p.id));
          const userOnlyPosts = parsed.filter((p: PostItem) => !initialIds.has(p.id));
          return [...userOnlyPosts, ...INITIAL_POSTS];
        }
      }
    } catch {
      // Fallback
    }
    return INITIAL_POSTS;
  });

  const savePostsToStorage = (updatedPosts: PostItem[]) => {
    setPosts(updatedPosts);
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY_POSTS, JSON.stringify(updatedPosts));
    } catch (e) {
      console.error('Storage full error', e);
    }
  };

  const addPost = (newPost: PostItem) => {
    const updated = [newPost, ...posts];
    savePostsToStorage(updated);
    showToast(language === 'hi' ? 'नई पोस्ट सफलतापूर्वक जोड़ी गई!' : 'New post created successfully!');
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
    showToast(language === 'hi' ? 'डिफ़ॉल्ट पोस्ट पुनर्स्थापित कर दिए गए!' : 'Reset to default posts!');
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

    // Update URL hash for sharing, bookmarks & browser history
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
        posts,
        addPost,
        updatePost,
        deletePost,
        resetPostsToDefault,
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
        showToast
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
