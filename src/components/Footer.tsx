import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#FAF7F4] border-t border-[#E9E3DD] py-16 px-4 sm:px-6 lg:px-8 mt-auto">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-widest text-[#5B6470] font-bold mb-4 select-none">
          DIGITAL PUBLISHING PROPERTY • MENUBAR NETWORK
        </p>

        {/* Line 1 */}
        <p className="text-lg text-[#1F2328] font-normal mb-6">
          AvantTek Solutions — New York, NY
        </p>

        {/* Line 2 */}
        <div>
          <a
            id="footer-request-info-button"
            href="mailto:info@avanttek.com?subject=AvantTek%20Information%20Request"
            className="inline-flex items-center justify-center bg-[#E4503A] hover:bg-[#C93D28] text-white font-bold text-base py-3.5 px-8 rounded-full transition-all shadow-sm hover:shadow active:scale-98 focus-visible:ring-2 focus-visible:ring-[#E4503A]"
          >
            Request more info
          </a>
        </div>
      </div>
    </footer>
  );
};

