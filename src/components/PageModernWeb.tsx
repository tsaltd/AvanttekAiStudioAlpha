import React from 'react';
import { AnimatedSection } from './AnimatedSection';
import { IconSlot } from './IconSlot';
import { EcoSphereNav } from './EcoSphereNav';

interface PageModernWebProps {
  navigate: (path: string) => void;
}

export const PageModernWeb: React.FC<PageModernWebProps> = ({ navigate }) => {
  return (
    <main className="w-full bg-white">
      {/* SECTION 1 — HERO */}
      <section
        id="hero"
        className="w-full bg-[#E4503A] text-white flex items-center justify-center py-20 sm:py-24 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* h1 */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 leading-tight">
            Hello AvantTek !!
          </h1>

          {/* Subhead */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-light text-white/95 max-w-2xl leading-relaxed">
            Adventures in Digital Transformation
          </p>
        </div>
      </section>

      {/* LIGHT-GRAY BAND — COLLAPSIBLE ECOSPHERE NAV */}
      <div
        id="ecosphere-nav-band"
        className="w-full bg-[#FAF7F4] border-b border-[#E9E3DD] py-3.5 sm:py-4 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <EcoSphereNav currentPath="/" navigate={navigate} defaultOpen={true} />
        </div>
      </div>

      {/* SECTION 2 — INTRO */}
      <AnimatedSection
        id="modern-web-intro"
        className="w-full bg-white pt-16 pb-16 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-light text-[#1F2328] mb-4 tracking-tight">
            The Modern Web
          </h2>
          <p className="text-xl sm:text-2xl text-[#5B6470] font-light">
            Platforms, Frameworks, & Tools
          </p>
        </div>
      </AnimatedSection>

      {/* SECTION 3 — THREE PILLARS */}
      <AnimatedSection
        id="three-pillars"
        className="w-full bg-white pb-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
            {/* Card 1 */}
            <article
              id="pillar-card-cloud-platforms"
              className="bg-[#FAF7F4] border border-[#E9E3DD] rounded-[24px] p-8 sm:p-10 flex flex-col items-center text-center shadow-warm-card hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="mb-8 mt-2">
                <IconSlot
                  slotId="ICON_CLOUD"
                  accentColor="#F5B400"
                  altText="Cloud Platforms icon slot"
                />
              </div>
              <span className="text-sm font-bold text-[#F5B400] mb-2 uppercase tracking-wide">
                Platforms
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#1F2328] mb-4">
                Cloud Platforms
              </h3>
              <p className="text-[#1F2328] text-base sm:text-lg leading-relaxed font-normal max-w-[68ch]">
                The growth of cloud platform adoption continues to accelerate rapidly. This
                constant innovation in ways to deliver on‑demand access to scalable computing is
                a foundation of the digital eco‑sphere
              </p>
            </article>

            {/* Card 2 */}
            <article
              id="pillar-card-modern-web-toolkits"
              className="bg-[#FAF7F4] border border-[#E9E3DD] rounded-[24px] p-8 sm:p-10 flex flex-col items-center text-center shadow-warm-card hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="mb-8 mt-2">
                <IconSlot
                  slotId="ICON_TOOLKITS"
                  accentColor="#3B9BE8"
                  altText="Modern Web ToolKits icon slot"
                />
              </div>
              <span className="text-sm font-bold text-[#3B9BE8] mb-2 uppercase tracking-wide">
                Modern Web Solutions
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#1F2328] mb-4">
                Modern Web ToolKits
              </h3>
              <p className="text-[#1F2328] text-base sm:text-lg leading-relaxed font-normal max-w-[68ch]">
                Platforms, languages, operating systems, and developer tools have evolved in
                exciting ways. Today's modern web is all about richly functional front‑ends
                connected to powerful servers. They are cloud‑ hosted and scalable,
                cross‑platform, and modular.
              </p>
            </article>

            {/* Card 3 */}
            <article
              id="pillar-card-dapp-frameworks"
              className="bg-[#FAF7F4] border border-[#E9E3DD] rounded-[24px] p-8 sm:p-10 flex flex-col items-center text-center shadow-warm-card hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="mb-8 mt-2">
                <IconSlot
                  slotId="ICON_DAPPS"
                  accentColor="#7C5CE6"
                  altText="D-App Frameworks icon slot"
                />
              </div>
              <span className="text-sm font-bold text-[#7C5CE6] mb-2 uppercase tracking-wide">
                D‑App Frameworks
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#1F2328] mb-4">
                D‑App Frameworks
              </h3>
              <p className="text-[#1F2328] text-base sm:text-lg leading-relaxed font-normal max-w-[68ch]">
                D‑Apps are &quot;smart contract&quot; code modules integrated into blockchain ledgers to
                enable solutions beyond legacy blockchain crypto‑currency exchanges. In turn,
                they benefit from blockchain fault tolerant networks, cryptography‑based
                security, and immutable transaction ledgers.
              </p>
            </article>
          </div>
        </div>
      </AnimatedSection>

      {/* SECTION 4 — TRANSFORMATION CTA */}
      <AnimatedSection
        id="transformation-cta"
        className="w-full bg-[#FAF7F4] border-t border-b border-[#E9E3DD] py-24 px-4 sm:px-6 lg:px-8 text-center"
      >
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <p className="text-sm sm:text-base uppercase tracking-widest font-bold text-[#E4503A] mb-4 select-none">
            Platforms for Transformation
          </p>
          <h2 className="text-4xl sm:text-5xl font-light text-[#1F2328] mb-4 tracking-tight">
            The AvantTek Solution
          </h2>
          <p className="text-xl sm:text-2xl text-[#5B6470] font-light mb-10">
            De‑Centralized Application Platforms
          </p>
          <div>
            <button
              id="cta-dlt-more-button"
              onClick={() => navigate('/dlt')}
              className="inline-flex items-center justify-center bg-[#E4503A] hover:bg-[#C93D28] text-white font-bold text-lg py-3.5 px-10 rounded-full transition-all shadow-sm hover:shadow active:scale-98 focus-visible:ring-2 focus-visible:ring-[#E4503A]"
            >
              ...more
            </button>
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
};
