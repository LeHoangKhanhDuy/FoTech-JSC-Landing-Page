import { useState } from "react";
import ContactModal from "@/modules/contact/components/ContactModal";
import { howItWorksSteps } from "@/modules/marketing/data/howItWorksData";
import { HowItWorksHeader } from "@/modules/marketing/components/HowItWorksHeader";
import { HowItWorksCard } from "@/modules/marketing/components/HowItWorksCard";
import { HowItWorksCenterArch } from "@/modules/marketing/components/HowItWorksCenterArch";

export default function WhyTrustFoTech() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="why-trust"
      className="relative py-20 md:py-28 bg-[#020817] text-slate-100 overflow-hidden transition-colors duration-300"
    >
      <div
        className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_20%,rgba(37,99,235,0.08),transparent_60%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <HowItWorksHeader />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-4 flex flex-col gap-6">
            {[0, 2].map((idx) => (
              <HowItWorksCard
                key={howItWorksSteps[idx].number}
                step={howItWorksSteps[idx]}
                isActive={activeStep === idx}
                onSelect={() => setActiveStep(idx)}
              />
            ))}
          </div>

          <HowItWorksCenterArch />

          <div className="lg:col-span-4 flex flex-col gap-6">
            {[1, 3].map((idx) => (
              <HowItWorksCard
                key={howItWorksSteps[idx].number}
                step={howItWorksSteps[idx]}
                isActive={activeStep === idx}
                onSelect={() => setActiveStep(idx)}
              />
            ))}
          </div>
        </div>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type="consulting"
        title="Đăng Ký Tư Vấn Quy Trình Chuyển Đổi Số"
        subtitle="Để lại thông tin, chuyên gia FoTech sẽ liên hệ hỗ trợ lộ trình chi tiết trong vòng 15 phút."
      />
    </section>
  );
}
