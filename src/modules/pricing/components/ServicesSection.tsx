import { useState } from "react";
import ContactModal from "@/modules/contact/components/ContactModal";
import ServiceSidebar from "@/modules/pricing/components/ServiceSidebar";
import ServiceContent from "@/modules/pricing/components/ServiceContent";
import ServicesHeader from "@/modules/pricing/components/ServicesHeader";
import { servicesData } from "@/modules/pricing/data/pricing-data";
import { ServiceId } from "@/modules/pricing/types/pricing-types";

export default function ServicesSection() {
  const [activeServiceId, setActiveServiceId] = useState<ServiceId>("website");
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
      <div
        className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.08),transparent_40%),radial-gradient(circle_at_20%_70%,rgba(79,70,229,0.06),transparent_35%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <ServicesHeader />

        <div className="rounded-xl border border-slate-800/80 bg-[#071225] shadow-2xl shadow-blue-950/20 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <ServiceSidebar
              services={servicesData}
              activeServiceId={activeServiceId}
              onSelectService={setActiveServiceId}
            />

            <ServiceContent
              service={activeService}
              onOpenModal={handleOpenModal}
            />
          </div>
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
