import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { PageModernWeb } from './components/PageModernWeb';
import { PageDistributedLedgers } from './components/PageDistributedLedgers';
import { PageSkeleton } from './components/PageSkeleton';
import { TopLoadingBar } from './components/TopLoadingBar';

function getInitialPath(): string {
  const path = window.location.pathname;
  const hash = window.location.hash;
  if (path.includes('/dlt') || hash.includes('/dlt') || hash === '#dlt') {
    return '/dlt';
  }
  return '/';
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const [isNavigating, setIsNavigating] = useState<boolean>(false);
  const [targetPath, setTargetPath] = useState<string>(getInitialPath);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleLocationChange = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      const newPath = path.includes('/dlt') || hash.includes('/dlt') || hash === '#dlt' ? '/dlt' : '/';
      
      if (newPath !== currentPath) {
        setTargetPath(newPath);
        setIsNavigating(true);
        if (timerRef.current) window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => {
          setCurrentPath(newPath);
          setIsNavigating(false);
          window.scrollTo({ top: 0, behavior: 'instant' });
        }, 220);
      }
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [currentPath]);

  const navigate = (path: string) => {
    if (path === currentPath) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    setTargetPath(path);
    setIsNavigating(true);
    try {
      window.history.pushState({}, '', path);
    } catch {
      window.location.hash = path === '/dlt' ? 'dlt' : '';
    }

    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setCurrentPath(path);
      setIsNavigating(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 240);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1F2328] relative">
      {/* Sleek Top Loading Bar */}
      <TopLoadingBar isLoading={isNavigating} />

      <Header currentPath={currentPath} navigate={navigate} />

      <div className="flex-1 w-full relative">
        <AnimatePresence mode="wait">
          {isNavigating ? (
            <motion.div
              key={`skeleton-${targetPath}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="w-full"
            >
              <PageSkeleton targetPath={targetPath} />
            </motion.div>
          ) : (
            <motion.div
              key={`page-${currentPath}`}
              initial={{ opacity: 0, y: 3 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="w-full"
            >
              {currentPath === '/dlt' ? (
                <PageDistributedLedgers navigate={navigate} />
              ) : (
                <PageModernWeb navigate={navigate} />
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Footer />
    </div>
  );
}


