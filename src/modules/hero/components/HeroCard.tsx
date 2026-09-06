import { useState, lazy, Suspense } from "react";
import HeroContent from "@/modules/hero/components/HeroContent";
import TrustedCompanies from "@/modules/hero/components/TrustedCompanies";
import HeroStats from "@/modules/hero/components/HeroStats";
import LightRays from "@/components/ui/LightRays";
import backgroundHero from "@/assets/backgroundHero.png";

const ContactModal = lazy(() => import("@/modules/contact/components/ContactModal"));

export default function HeroCard() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "trial" | "consulting";
  }>({ isOpen: false, type: "consulting" });

  const handleOpenTrial = () => {
    setModalState({ isOpen: true, type: "trial" });
  };

  const handleOpenConsulting = () => {
    setModalState({ isOpen: true, type: "consulting" });
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full flex-col justify-between items-center overflow-hidden pt-20 pb-6 bg-white text-slate-900 text-center"
    >
      {/* Background Hero Image - Original Sharpness */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <img
          src={backgroundHero}
          alt=""
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Light Rays Effect - Fixed Light Mode Blue Glow */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <LightRays
          raysOrigin="top-center"
          raysColor="#2563eb"
          lightMode={true}
          raysSpeed={1.2}
          lightSpread={0.8}
          rayLength={3.5}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.05}
          distortion={0.1}
          className="w-full h-full opacity-70"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      <div className="relative z-10 flex-1 flex flex-col justify-evenly items-center w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 py-2">
        <div className="w-full max-w-4xl mx-auto py-2">
          <HeroContent
            onOpenTrial={handleOpenTrial}
            onOpenConsulting={handleOpenConsulting}
          />
        </div>

        <div className="w-full max-w-4xl mx-auto py-2 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <div className="w-28 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 mx-auto rounded-full mb-5 opacity-75 shadow-sm shadow-blue-500/50" />
          <TrustedCompanies />
        </div>

        <div className="w-full py-2">
          <HeroStats />
        </div>
      </div>

      {modalState.isOpen && (
        <Suspense fallback={null}>
          <ContactModal
            isOpen={modalState.isOpen}
            onClose={() => setModalState({ ...modalState, isOpen: false })}
            type={modalState.type}
          />
        </Suspense>
      )}
    </section>
  );
}
