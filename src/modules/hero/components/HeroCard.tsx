import { useState } from "react";
import ContactModal from "@/modules/contact/components/ContactModal";
import HeroContent from "@/modules/hero/components/HeroContent";
import TrustedCompanies from "@/modules/hero/components/TrustedCompanies";
import HeroStats from "@/modules/hero/components/HeroStats";
import LightRays from "@/components/ui/LightRays";

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
      className="relative flex min-h-screen w-full flex-col justify-between items-center overflow-hidden pt-20 pb-6 bg-slate-950 text-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.18),rgba(255,255,255,0))] pointer-events-none z-0" />
      <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_70%)] pointer-events-none z-0" />
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1.2}
          lightSpread={0.8}
          rayLength={3.5}
          followMouse={true}
          mouseInfluence={0.15}
          noiseAmount={0.05}
          distortion={0.1}
          className="w-full h-full opacity-80"
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

        <div className="w-full max-w-4xl mx-auto py-2">
          <div className="w-28 h-[3px] bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-600 mx-auto rounded-full mb-5 opacity-75" />
          <TrustedCompanies />
        </div>

        <div className="w-full py-2">
          <HeroStats />
        </div>
      </div>

      <ContactModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        type={modalState.type}
      />
    </section>
  );
}
