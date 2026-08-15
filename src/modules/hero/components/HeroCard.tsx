import { useState } from "react";
import LeadModal from "@/components/ui/LeadModal";
import HeroContent from "@/modules/hero/components/HeroContent";
import HeroVideoPlayer from "@/modules/hero/components/HeroVideoPlayer";

export default function HeroCard() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "trial" | "login" | "consulting";
  }>({ isOpen: false, type: "consulting" });

  const handleOpenDemo = () => {
    setModalState({ isOpen: true, type: "demo" });
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-28 bg-white dark:bg-slate-950"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.14),rgba(255,255,255,0))]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.07),transparent_70%)]" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <HeroContent onOpenDemo={handleOpenDemo} />
          <HeroVideoPlayer />
        </div>
      </div>

      <LeadModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        type={modalState.type}
      />
    </section>
  );
}
