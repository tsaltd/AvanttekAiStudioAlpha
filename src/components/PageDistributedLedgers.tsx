import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { AnimatedSection } from './AnimatedSection';
import { CentralizedHubSpokeSvg, DecentralizedMeshSvg } from './Schematics';
import { EcoSphereNav } from './EcoSphereNav';

interface LedgerEntry {
  matchup: string;
  date: string;
}

interface LedgerPanelData {
  id: number;
  label: string;
  style: {
    left: string;
    top: string;
    width: string;
    height: string;
  };
  entries: LedgerEntry[];
}

const LEDGER_PANELS: LedgerPanelData[] = [
  {
    id: 1,
    label: 'Panel 1 (coral header, far left)',
    style: {
      left: '19.52%',
      top: '7.78%',
      width: '10.95%',
      height: '36.67%',
    },
    entries: [
      { matchup: 'Giants @ Falcons', date: '10/11' },
      { matchup: 'Knicks @ Celtics', date: '10/24' },
      { matchup: 'Rangers @ Devils', date: '10/09' },
      { matchup: 'Mets @ Phillies', date: '09/28' },
    ],
  },
  {
    id: 2,
    label: 'Panel 2 (violet header, top center-left)',
    style: {
      left: '35.48%',
      top: '6.67%',
      width: '10.95%',
      height: '36.67%',
    },
    entries: [
      { matchup: 'Yankees @ Red Sox', date: '10/03' },
      { matchup: 'Jets @ Patriots', date: '10/19' },
      { matchup: 'Nets @ Heat', date: '11/02' },
      { matchup: 'Islanders @ Bruins', date: '10/30' },
    ],
  },
  {
    id: 3,
    label: 'Panel 3 (amber header, top center-right)',
    style: {
      left: '51.43%',
      top: '6.67%',
      width: '10.95%',
      height: '36.67%',
    },
    entries: [
      { matchup: 'Liberty @ Fever', date: '09/21' },
      { matchup: 'Red Bulls @ Union', date: '10/05' },
      { matchup: 'Cosmos @ Rowdies', date: '10/12' },
      { matchup: 'Sky @ Aces', date: '09/27' },
    ],
  },
  {
    id: 4,
    label: 'Panel 4 (sky header, top right)',
    style: {
      left: '67.62%',
      top: '7.78%',
      width: '10.95%',
      height: '36.67%',
    },
    entries: [
      { matchup: 'Knicks @ Bulls', date: '11/08' },
      { matchup: 'Giants @ Eagles', date: '11/16' },
      { matchup: 'Rangers @ Islanders', date: '11/21' },
      { matchup: 'Yankees @ Orioles', date: '09/30' },
    ],
  },
  {
    id: 5,
    label: 'Panel 5 (amber header, bottom center)',
    style: {
      left: '43.57%',
      top: '52.22%',
      width: '10.95%',
      height: '36.67%',
    },
    entries: [
      { matchup: 'Nets @ Sixers', date: '11/12' },
      { matchup: 'Jets @ Bills', date: '11/23' },
      { matchup: 'Mets @ Braves', date: '10/02' },
      { matchup: 'Devils @ Penguins', date: '11/01' },
    ],
  },
  {
    id: 6,
    label: 'Panel 6 (violet header, bottom right)',
    style: {
      left: '59.52%',
      top: '52.22%',
      width: '10.95%',
      height: '36.67%',
    },
    entries: [
      { matchup: 'Liberty @ Mystics', date: '09/24' },
      { matchup: 'Red Bulls @ Revolution', date: '10/18' },
      { matchup: 'Knicks @ Raptors', date: '11/28' },
      { matchup: 'Giants @ Cowboys', date: '11/30' },
    ],
  },
];

interface PageDistributedLedgersProps {
  navigate?: (path: string) => void;
}

export const PageDistributedLedgers: React.FC<PageDistributedLedgersProps> = ({ navigate }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="w-full bg-white">
      {/* ECOSPHERE COMPONENTS COLLAPSIBLE NAV BAND */}
      {navigate && (
        <div
          id="dlt-ecosphere-nav-band"
          className="w-full bg-[#FAF7F4] border-b border-[#E9E3DD] py-3.5 sm:py-4 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-4xl mx-auto">
            <EcoSphereNav currentPath="/dlt" navigate={navigate} defaultOpen={false} />
          </div>
        </div>
      )}

      {/* SECTION 1 — HERO WITH IMAGE ASSET & LEDGER ENTRIES */}
      <section
        id="dlt-hero"
        className="relative w-full overflow-hidden bg-[#FAF7F4] border-b border-[#E9E3DD]"
      >
        <div
          id="dlt_hero_image"
          className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden select-none"
        >
          {/* Full-bleed hero image with right center positioning */}
          <img
            src="/assets/dlt-hero.png"
            alt="Illustration of a peer-to-peer ledger network exchanging event tickets"
            className="w-full h-full object-cover object-[right_center] block"
            referrerPolicy="no-referrer"
          />

          {/* Interactive Scaled Ledger Entry Overlays (desktop/tablet >= 768px) */}
          <div
            className="hidden md:block absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            {LEDGER_PANELS.map((panel, panelIndex) => (
              <motion.div
                key={`panel-${panel.id}`}
                initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.35,
                  delay: shouldReduceMotion ? 0 : 0.15 + panelIndex * 0.12,
                  ease: [0.25, 0.1, 0.25, 1.0],
                }}
                className="absolute flex flex-col justify-between"
                style={{
                  left: panel.style.left,
                  top: panel.style.top,
                  width: panel.style.width,
                  height: panel.style.height,
                  paddingTop: '12.8%', // Space below colored header band
                  paddingBottom: '2.5%',
                  paddingLeft: '6%',
                  paddingRight: '6%',
                }}
              >
                {panel.entries.map((entry, entryIndex) => (
                  <div
                    key={`entry-${panel.id}-${entryIndex}`}
                    className="flex flex-col justify-center h-[24.5%] text-left truncate"
                  >
                    <span
                      style={{ fontSize: 'clamp(0.44rem, 0.62vw, 0.82rem)' }}
                      className="font-bold text-[#1F2328] tracking-tight leading-none truncate"
                    >
                      {entry.matchup}
                    </span>
                    <span
                      style={{ fontSize: 'clamp(0.36rem, 0.50vw, 0.68rem)' }}
                      className="font-normal text-[#5B6470] tracking-tight leading-none mt-[2%]"
                    >
                      {entry.date}
                    </span>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>

          {/* Overlay Bottom-Left Content with soft white radial glow for legibility */}
          <div
            className="absolute bottom-0 left-0 p-6 sm:p-10 lg:p-14 z-10 max-w-2xl"
            style={{
              background: 'radial-gradient(ellipse at bottom left, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.8) 45%, rgba(255, 255, 255, 0) 100%)',
            }}
          >
            <p className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#5B6470] mb-2 select-none">
              EcoSphere Components
            </p>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#1F2328] leading-tight">
              Distributed Ledger Platforms
            </h1>
          </div>
        </div>
      </section>

      {/* SECTION 2 — DE‑CENTRALIZED NETWORKS */}
      <AnimatedSection
        id="decentralized-networks"
        className="w-full bg-white py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1F2328] mb-12 tracking-tight">
            de-centralized Networks
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Step 1 */}
            <div className="flex items-start space-x-5">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E4503A] text-white flex items-center justify-center font-bold text-xl shadow-sm select-none"
                aria-hidden="true"
              >
                1
              </div>
              <p className="text-[#1F2328] text-base sm:text-lg leading-relaxed pt-1">
                De-centralized peer-to-peer networks are essential for building and
                operating web 3.0 distributed ledgers and modern digital eco-Spheres.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-5">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E4503A] text-white flex items-center justify-center font-bold text-xl shadow-sm select-none"
                aria-hidden="true"
              >
                2
              </div>
              <p className="text-[#1F2328] text-base sm:text-lg leading-relaxed pt-1">
                Nodes on P2P networks interact with each other directly. The use of
                intermediaries and middle-men can be avoided.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-5">
              <div
                className="flex-shrink-0 w-12 h-12 rounded-full bg-[#E4503A] text-white flex items-center justify-center font-bold text-xl shadow-sm select-none"
                aria-hidden="true"
              >
                3
              </div>
              <p className="text-[#1F2328] text-base sm:text-lg leading-relaxed pt-1">
                With no middle-men, transaction processing is streamlined and the state of
                the ledger can be viewed in real-time from any node.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* SECTION 3 — DISTRIBUTED LEDGERS */}
      <AnimatedSection
        id="distributed-ledgers"
        className="w-full bg-[#FAF7F4] border-t border-b border-[#E9E3DD] py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1F2328] mb-6 tracking-tight">
            Distributed Ledgers
          </h2>
          <p className="text-[#1F2328] text-lg sm:text-xl leading-relaxed max-w-[68ch]">
            Distributed Ledger Technology is key to processing information from the
            always-on Internet of Things and is inspiring the creation of a wide range of
            other new innovative and disruptive services and eco-systems.
          </p>
        </div>
      </AnimatedSection>

      {/* SECTION 4 — CENTRALIZATION ABC'S */}
      <AnimatedSection
        id="centralization-abcs"
        className="w-full bg-white py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1F2328] mb-8 tracking-tight">
            Centralization ABC&apos;s — Legacy Systems on Centralized Networks
          </h2>

          {/* Pull quote */}
          <div className="border-l-4 border-[#E4503A] pl-6 py-2 my-8">
            <blockquote className="text-xl sm:text-2xl text-[#1F2328] italic font-light leading-relaxed max-w-[68ch]">
              &quot;Nearly all the Web 2.0 online publications, e-commerce, and social media
              platforms we use are centralized.&quot;
            </blockquote>
          </div>

          {/* Two schematic cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mt-12">
            {/* Card A */}
            <article
              id="schematic-card-a"
              className="bg-[#FAF7F4] border border-[#E9E3DD] rounded-[24px] p-8 sm:p-10 shadow-warm-card flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
            >
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-[#5B6470] mb-4">
                  SCHEMATIC 01 — CENTRALIZED HUB & SPOKE
                </p>
                <div className="bg-white rounded-2xl p-4 border border-[#E9E3DD] mb-6">
                  <CentralizedHubSpokeSvg />
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-[#1F2328] mb-6">
                  With centralized platforms
                </h3>
                <ul className="space-y-4 text-[#1F2328] text-base sm:text-lg leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-[#E4503A] font-bold mr-3 select-none">•</span>
                    <span>
                      All network activity flows to and from a single processing hub: typically
                      a cloud platform or enterprise data center.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E4503A] font-bold mr-3 select-none">•</span>
                    <span>
                      Databases and all other information repositories are controlled by the
                      system&apos;s owner.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#E4503A] font-bold mr-3 select-none">•</span>
                    <span>
                      The owning entity has control over all processing. Your bank can decide to
                      turn off its portal and online services will cease to exist for you and
                      all other customers.
                    </span>
                  </li>
                </ul>
              </div>
            </article>

            {/* Card B */}
            <article
              id="schematic-card-b"
              className="bg-[#FAF7F4] border border-[#E9E3DD] rounded-[24px] p-8 sm:p-10 shadow-warm-card flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300"
            >
              <div>
                <p className="text-xs uppercase tracking-widest font-bold text-[#5B6470] mb-4">
                  SCHEMATIC 02 — P2P DECENTRALIZED MESH
                </p>
                <div className="bg-white rounded-2xl p-4 border border-[#E9E3DD] mb-6">
                  <DecentralizedMeshSvg />
                </div>
                <h3 className="text-2xl sm:text-3xl font-light text-[#1F2328] mb-6">
                  De-Centralized
                </h3>
                <div className="space-y-4 text-[#1F2328] text-base sm:text-lg leading-relaxed">
                  <p>
                    A highly de-Centralized peer-to-peer network is required for the operation
                    of a digital ledger technology platform.
                  </p>
                  <p>
                    Anyone can set-up a secure distributed node on a public digital ledger.
                  </p>
                  <p>
                    Out-of-the-box DLT security and encryption protocols simplify setting-up
                    tamper-proof processing environments with strong data integrity.
                  </p>
                  <p>
                    Many DLT platforms cannot be public. They require secured services that can
                    only be accessed by admins for managing the network and administering users
                    and IOT nodes.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </AnimatedSection>

      {/* SECTION 5 — A PERFECT FIT */}
      <AnimatedSection
        id="a-perfect-fit"
        className="w-full bg-[#FAF7F4] border-t border-b border-[#E9E3DD] py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1F2328] mb-8 tracking-tight">
            DeCentralized Networks and Digital Ledgers — A Perfect Fit
          </h2>
          <div className="space-y-6 text-[#1F2328] text-base sm:text-lg leading-relaxed max-w-[68ch]">
            <p>
              Digital ledgers on de-Centralized networks enable disintermediation — a
              reduction in the use of intermediaries between producers and consumers.
              Benefits of disintermediation include: no single point of failure in the
              network, no central administrative authority, elimination of transaction fees.
            </p>
            <p>
              DLT platforms are immutable. Once transactions are committed as ledger entries
              they are very hard to change, almost impossible. Data stored on the ledger is
              generally considered incorruptible.
            </p>
            <p>
              Ledger platform protocols use advanced hashing and encryption methods to
              guarantee transactions and ledger entries cannot be tampered with during
              creation and are immutable after they become ledger entries. Encrypted digital
              signatures ensure non-repudiation — the assurance that ledger object creators
              cannot successfully dispute ledger page or transaction authorship.
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* SECTION 6 — THE HISTORY */}
      <AnimatedSection
        id="the-history"
        className="w-full bg-white py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1F2328] mb-8 tracking-tight">
            The History
          </h2>
          <div className="space-y-6 text-[#1F2328] text-base sm:text-lg leading-relaxed max-w-[68ch]">
            <p>
              Distributed ledger technology [DLT] was introduced when the mysterious Satoshi
              Nakamoto published Bitcoin: A Peer-to-Peer Electronic Cash System in October
              2008, only weeks after the collapse of Lehman Brothers.
            </p>
            <p>
              Two months later the Bitcoin Network went live on the Internet when a block of
              50 bitcoins was &quot;mined&quot; by Nakamoto and sent to the computer scientist Hal
              Finney.
            </p>
            <p>
              Today, the market cap of Bitcoin exceeds $1.55 trillion (9/26). The success of
              the crypto exchanges validated distributed ledger technology and created great
              excitement and interest regarding the potential of DLT and de-centralized
              networks.
            </p>
            <p>
              In 2015 a huge advance in the capabilities of de-centralized /
              blockchain-powered platforms surfaced. Ethereum — a blockchain ledger with an
              integrated programming language — was released.
            </p>
            <p>
              &quot;Smart contracts&quot; extended Ethereum&apos;s capabilities beyond the simple exchange
              of financial items and moved the Web 3.0 vision toward:
            </p>
          </div>
        </div>
      </AnimatedSection>

      {/* SECTION 7 — WEB 3.0 QUOTE */}
      <AnimatedSection
        id="web-30-quote"
        className="w-full bg-[#FAF7F4] border-t border-b border-[#E9E3DD] py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <p className="text-xs sm:text-sm uppercase tracking-widest font-bold text-[#5B6470] mb-6 select-none">
            D-APPS: WHAT WEB 3.0 LOOKS LIKE
          </p>
          <blockquote className="text-2xl sm:text-3xl lg:text-4xl font-light text-[#1F2328] italic leading-relaxed mb-6 max-w-[68ch]">
            &quot;…a more secure, trustworthy and globally accessible internet for agreements,
            finance, auditing, tracking and simple websites and web applications that use
            decentralized technology to overcome some of the practical, political and
            technological inefficiencies of previous approaches.&quot;
          </blockquote>
          <cite className="not-italic text-lg sm:text-xl font-bold text-[#E4503A]">
            — Gavin Wood
          </cite>
        </div>
      </AnimatedSection>

      {/* SECTION 8 — THE AVANTTEK SOLUTION */}
      <AnimatedSection
        id="the-avanttek-solution"
        className="w-full bg-white py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#1F2328] mb-10 tracking-tight">
            The AvantTek Solution
          </h2>
          <ul className="space-y-5 text-lg sm:text-xl text-[#1F2328]">
            <li className="flex items-center space-x-4">
              <svg
                className="w-7 h-7 text-[#E4503A] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.8"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span className="font-normal">Tools Word Cloud & Modern Toolkits</span>
            </li>
            <li className="flex items-center space-x-4">
              <svg
                className="w-7 h-7 text-[#E4503A] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.8"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span className="font-normal">Ethereum Smart Contracts</span>
            </li>
            <li className="flex items-center space-x-4">
              <svg
                className="w-7 h-7 text-[#E4503A] flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.8"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              <span className="font-normal">Cloud & Scalable Infrastructure</span>
            </li>
          </ul>
        </div>
      </AnimatedSection>
    </main>
  );
};
