import { useState } from "react";
import LeadModal from "@/components/ui/LeadModal";
import ServiceSidebar from "./ServiceSidebar";
import ServiceContent from "./ServiceContent";
import { servicesData } from "../data/data";
import { ServiceId } from "../types/types";

export default function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState<ServiceId>("fohrm");
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "trial" | "consulting";
  }>({ isOpen: false, type: "trial" });

  const activeService =
    servicesData.find((s) => s.id === activeServiceId) || servicesData[0];

  const handleOpenModal = (type: "demo" | "trial" | "consulting") => {
    setModalState({ isOpen: true, type });
  };

  return (
    <section
      id="solutions"
      className="relative py-16 md:py-24 overflow-hidden bg-[#020817] text-white"
    >
      {/* Subtle Background Radial Glows */}
      <div
        className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.08),transparent_40%),radial-gradient(circle_at_20%_70%,rgba(79,70,229,0.06),transparent_35%)]"
        aria-hidden="true"
      />

      {/* Main Container Card (1440px max-width, rounded 28px) */}
      <div className="mx-auto w-[calc(100%-32px)] sm:w-[calc(100%-48px)] max-w-[1440px] rounded-[28px] border border-slate-800/80 bg-[#071225] shadow-2xl shadow-blue-950/20 overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Service Navigation Sidebar (320px) */}
          <ServiceSidebar
            services={servicesData}
            activeServiceId={activeServiceId}
            onSelectService={setActiveServiceId}
          />

          {/* Right Service Content Panel */}
          <ServiceContent
            service={activeService}
            onOpenModal={handleOpenModal}
          />
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
