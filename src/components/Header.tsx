import React from 'react';

interface HeaderProps {
  currentPath?: string;
  navigate: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ navigate }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#E9E3DD] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center">
          {/* Brand Wordmark & Tagline */}
          <button
            id="brand-header-link"
            onClick={() => navigate('/')}
            className="flex flex-col text-left focus-visible:ring-2 focus-visible:ring-[#E4503A] rounded-lg p-0.5 transition-opacity hover:opacity-90 cursor-pointer"
            aria-label="AvantTek home"
          >
            <span className="text-[28px] font-bold tracking-[0.2px] text-[#1F2328] leading-tight">
              Avant<span className="text-[#E4503A]">Tek</span>
            </span>
            <span className="text-[12.5px] text-[#5B6470] font-medium tracking-normal">
              Tech Foundations · Frontiers · What&apos;s Next
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};



