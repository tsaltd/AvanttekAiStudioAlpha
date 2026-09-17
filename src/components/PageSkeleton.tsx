import React from 'react';
import { motion } from 'motion/react';
import { Loader2 } from 'lucide-react';

interface PageSkeletonProps {
  targetPath: string;
}

export const PageSkeleton: React.FC<PageSkeletonProps> = ({ targetPath }) => {
  const isDlt = targetPath === '/dlt';

  return (
    <div
      id="page-transition-skeleton"
      aria-busy="true"
      aria-label="Loading page content"
      className="w-full min-h-[70vh] bg-white animate-pulse"
    >
      {/* Floating subtle spinner indicator */}
      <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1F2328]/90 text-white shadow-lg backdrop-blur-xs text-xs font-medium tracking-wide">
        <Loader2 className="w-3.5 h-3.5 animate-spin text-[#E4503A]" />
        <span>Loading...</span>
      </div>

      {isDlt ? (
        /* DLT Page Skeleton */
        <div>
          {/* Nav band placeholder */}
          <div className="w-full bg-[#FAF7F4] border-b border-[#E9E3DD] py-4 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto flex justify-center">
              <div className="h-6 w-48 bg-[#E9E3DD] rounded-full" />
            </div>
          </div>

          {/* DLT Hero Skeleton */}
          <div className="w-full bg-white py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="h-8 w-3/4 bg-[#FAF7F4] border border-[#E9E3DD] rounded-xl" />
                <div className="h-5 w-full bg-[#FAF7F4] rounded-lg" />
                <div className="h-5 w-5/6 bg-[#FAF7F4] rounded-lg" />
                <div className="h-40 w-full bg-[#FAF7F4] border border-[#E9E3DD] rounded-2xl mt-6" />
              </div>
              <div className="lg:col-span-5">
                <div className="h-72 w-full bg-[#FAF7F4] border border-[#E9E3DD] rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Modern Web Page Skeleton */
        <div>
          {/* Coral Hero Skeleton */}
          <div className="w-full bg-[#E4503A]/90 py-20 sm:py-24 px-4 sm:px-6 text-center flex flex-col items-center justify-center">
            <div className="h-12 sm:h-16 w-3/4 max-w-md bg-white/25 rounded-2xl mb-5" />
            <div className="h-6 sm:h-8 w-2/3 max-w-sm bg-white/20 rounded-xl" />
          </div>

          {/* EcoSphere Nav Band Skeleton */}
          <div className="w-full bg-[#FAF7F4] border-b border-[#E9E3DD] py-4 px-4 sm:px-6">
            <div className="max-w-4xl mx-auto flex justify-center">
              <div className="h-6 w-48 bg-[#E9E3DD] rounded-full" />
            </div>
          </div>

          {/* Intro & Cards Grid Skeleton */}
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-12 space-y-3">
              <div className="h-9 w-64 bg-[#FAF7F4] border border-[#E9E3DD] rounded-xl" />
              <div className="h-5 w-80 bg-[#FAF7F4] rounded-lg" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-[#FAF7F4] border border-[#E9E3DD] rounded-[24px] p-8 sm:p-10 flex flex-col items-center space-y-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-white border border-[#E9E3DD]" />
                  <div className="h-4 w-24 bg-[#E9E3DD] rounded-full" />
                  <div className="h-7 w-40 bg-white border border-[#E9E3DD] rounded-lg" />
                  <div className="h-4 w-full bg-white/80 rounded-md" />
                  <div className="h-4 w-5/6 bg-white/80 rounded-md" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
