import { useState } from "react";
import ContactModal from "@/modules/contact/components/ContactModal";
import { ecosystemProducts } from "@/modules/ecosystem/data/ecosystemData";
import EcosystemHeader from "@/modules/ecosystem/components/EcosystemHeader";
import EcosystemCard from "@/modules/ecosystem/components/EcosystemCard";

export default function EcosystemSection() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "trial" | "consulting";
  }>({ isOpen: false, type: "consulting" });

  const handleOpenModal = (type: "demo" | "consulting" | "trial") => {
    setModalState({ isOpen: true, type });
  };

  return (
    <section
      id="ecosystem"
      className="relative py-24 bg-slate-50 text-slate-900 overflow-hidden dark:bg-[#030817] dark:text-slate-100 transition-colors duration-300"
    >
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.06),transparent_45%)] dark:bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.12),transparent_45%)]" />
      <div className="absolute inset-0 pointer-events-none -z-10 opacity-10 dark:opacity-20 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_20%,#000_70%,transparent_100%)]" />
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <EcosystemHeader />

        <div className="mt-14 grid gap-5 grid-cols-1 lg:grid-cols-2">
          {ecosystemProducts.map((product) => (
            <EcosystemCard
              key={product.id}
              product={product}
              onOpenModal={handleOpenModal}
            />
          ))}
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
