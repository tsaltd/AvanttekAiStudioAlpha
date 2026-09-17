import React from 'react';
import { motion } from 'motion/react';

interface TopLoadingBarProps {
  isLoading: boolean;
}

export const TopLoadingBar: React.FC<TopLoadingBarProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div
      id="top-navigation-progress-bar"
      role="progressbar"
      aria-label="Loading page navigation"
      className="fixed top-0 left-0 right-0 h-1 z-[100] bg-transparent pointer-events-none overflow-hidden"
    >
      <motion.div
        className="h-full bg-linear-to-r from-[#E4503A] via-[#F5B400] to-[#E4503A] shadow-xs shadow-[#E4503A]/50"
        initial={{ x: '-100%', width: '40%' }}
        animate={{
          x: ['-100%', '250%'],
          width: ['30%', '60%', '30%'],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.85,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
};
