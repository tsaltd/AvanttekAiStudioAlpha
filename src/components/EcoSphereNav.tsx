import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

interface EcoSphereNavProps {
  currentPath?: string;
  navigate: (path: string) => void;
  defaultOpen?: boolean;
}

export const EcoSphereNav: React.FC<EcoSphereNavProps> = ({
  currentPath = '/',
  navigate,
  defaultOpen = true,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const navRef = useRef<HTMLElement>(null);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavigate = (path: string) => {
    setIsOpen(false);
    navigate(path);
    if (path === '/' && window.location.pathname === '/') {
      const el = document.getElementById('modern-web-intro');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <nav
      ref={navRef}
      id="ecosphere-nav-control"
      aria-label="EcoSphere Components Menu"
      className="flex flex-col items-center justify-center text-center select-none w-full"
    >
      {/* Toggle Controls: Label + Hamburger Icon */}
      <div className="inline-flex items-center justify-center gap-2">
        {/* 1. Label Toggle */}
        <button
          id="ecosphere-label-toggle"
          type="button"
          onClick={toggleOpen}
          aria-expanded={isOpen}
          aria-controls="ecosphere-nav-children"
          className="px-3 py-1.5 rounded-lg text-xs sm:text-sm uppercase tracking-widest font-bold text-[#5B6470] hover:text-[#1F2328] hover:bg-black/5 transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E4503A] cursor-pointer"
        >
          EcoSphere Components
        </button>

        {/* 2. Hamburger Icon Toggle */}
        <button
          id="ecosphere-hamburger-toggle"
          type="button"
          onClick={toggleOpen}
          aria-expanded={isOpen}
          aria-controls="ecosphere-nav-children"
          aria-label={isOpen ? 'Close EcoSphere navigation menu' : 'Open EcoSphere navigation menu'}
          className="inline-flex items-center justify-center p-1.5 rounded-lg text-[#5B6470] hover:text-[#E4503A] hover:bg-black/5 transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E4503A] cursor-pointer"
        >
          {isOpen ? (
            <X className="w-5 h-5 transition-transform duration-200" aria-hidden="true" />
          ) : (
            <Menu className="w-5 h-5 transition-transform duration-200" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Collapsible Children: Fluid Container-Width Wrapping */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id="ecosphere-nav-children"
            initial={{ opacity: 0, height: 0, y: -4 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: -4 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="overflow-hidden w-full"
          >
            <div className="flex flex-wrap items-center justify-center gap-3 pt-3.5 pb-1 w-full max-w-3xl mx-auto">
              {/* Tag 1: Modern Web Tools */}
              {(() => {
                const isActive = currentPath === '/';
                return (
                  <button
                    id="tag-modern-web-tools"
                    type="button"
                    onClick={() => handleNavigate('/')}
                    aria-current={isActive ? 'page' : undefined}
                    className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-mono tracking-tight transition-all border whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E4503A] cursor-pointer ${
                      isActive
                        ? 'bg-white border-[#1F2328] text-[#1F2328] opacity-100 font-bold shadow-xs ring-1 ring-[#1F2328]/10'
                        : 'bg-[#FAF7F4]/80 border-[#DDD7D0] text-[#76808C] opacity-60 hover:opacity-95 hover:bg-white hover:text-[#1F2328] hover:border-[#1F2328]/30'
                    }`}
                  >
                    <span className={isActive ? 'text-[#E4503A] font-bold' : 'text-[#9BA3AF] font-medium'}>
                      {'{'}
                    </span>
                    <span
                      className={`font-sans ${
                        isActive ? 'font-bold text-[#1F2328]' : 'font-normal text-[#76808C]'
                      }`}
                    >
                      Modern Web Tools
                    </span>
                    <span className={isActive ? 'text-[#E4503A] font-bold' : 'text-[#9BA3AF] font-medium'}>
                      {'}'}
                    </span>
                  </button>
                );
              })()}

              {/* Tag 2: Distributed Ledger Technologies */}
              {(() => {
                const isActive = currentPath === '/dlt';
                return (
                  <button
                    id="tag-distributed-ledgers"
                    type="button"
                    onClick={() => handleNavigate('/dlt')}
                    aria-current={isActive ? 'page' : undefined}
                    className={`inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs sm:text-sm font-mono tracking-tight transition-all border whitespace-nowrap focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#E4503A] cursor-pointer ${
                      isActive
                        ? 'bg-white border-[#1F2328] text-[#1F2328] opacity-100 font-bold shadow-xs ring-1 ring-[#1F2328]/10'
                        : 'bg-[#FAF7F4]/80 border-[#DDD7D0] text-[#76808C] opacity-60 hover:opacity-95 hover:bg-white hover:text-[#1F2328] hover:border-[#1F2328]/30'
                    }`}
                  >
                    <span className={isActive ? 'text-[#E4503A] font-bold' : 'text-[#9BA3AF] font-medium'}>
                      {'{'}
                    </span>
                    <span
                      className={`font-sans ${
                        isActive ? 'font-bold text-[#1F2328]' : 'font-normal text-[#76808C]'
                      }`}
                    >
                      Distributed Ledger Technologies
                    </span>
                    <span className={isActive ? 'text-[#E4503A] font-bold' : 'text-[#9BA3AF] font-medium'}>
                      {'}'}
                    </span>
                  </button>
                );
              })()}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
