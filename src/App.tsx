import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Header } from './components/Header';
import { BreakingTicker } from './components/BreakingTicker';
import { HeroSearch } from './components/HeroSearch';
import { TabbedHomeGrid } from './components/TabbedHomeGrid';
import { ImportantLinks } from './components/ImportantLinks';
import { DetailView } from './components/DetailView';
import { CategoryView } from './components/CategoryView';
import { PolicyPageView } from './components/PolicyPageView';
import { AdminPostManager } from './components/AdminPostManager';
import { BookmarksView } from './components/BookmarksView';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { AgeCalculatorModal } from './components/AgeCalculatorModal';
import { SchemeFinderModal } from './components/SchemeFinderModal';
import { CheckCircle2 } from 'lucide-react';

const AppContent: React.FC = () => {
  const { activeView, toastMessage } = useApp();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Header & Marquee */}
      <Header />
      <BreakingTicker />

      {/* Dynamic Main View */}
      <main className="flex-1">
        {activeView.type === 'home' && (
          <>
            <HeroSearch />
            <TabbedHomeGrid />
            <ImportantLinks />
          </>
        )}

        {(activeView.type === 'detail' || (activeView as any).type === 'post') && (
          <DetailView slug={(activeView as any).slug} />
        )}

        {activeView.type === 'category' && (
          <CategoryView category={activeView.category} />
        )}

        {activeView.type === 'policy' && (
          <PolicyPageView pageType={activeView.slug as any} />
        )}

        {activeView.type === 'admin' && (
          <AdminPostManager />
        )}

        {activeView.type === 'bookmarks' && (
          <BookmarksView />
        )}
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Global Interactive Modals */}
      <SearchModal />
      <AgeCalculatorModal />
      <SchemeFinderModal />

      {/* Toast Notification Container */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-2xl bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-2xl border border-slate-700 text-xs font-bold animate-in fade-in slide-in-from-bottom-3 duration-200">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
