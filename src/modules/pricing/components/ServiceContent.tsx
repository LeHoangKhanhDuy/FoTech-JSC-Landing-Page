import ServiceHeader from "./ServiceHeader";
import ServiceVisual from "./ServiceVisual";
import ServiceHighlights from "./ServiceHighlights";
import ServiceFeatureList from "./ServiceFeatureList";
import ServiceCTA from "./ServiceCTA";
import ServiceBenefits from "./ServiceBenefits";
import WebsitePricingContent from "./WebsitePricingContent";
import { ServiceItemData } from "../types/types";

interface ServiceContentProps {
  service: ServiceItemData;
  onOpenModal: (type: "demo" | "trial" | "consulting") => void;
}

export default function ServiceContent({
  service,
  onOpenModal,
}: ServiceContentProps) {
  const isWebsiteTab = service.id === "website";

  return (
    <div
      key={service.id}
      role="tabpanel"
      tabIndex={0}
      aria-labelledby={`tab-${service.id}`}
      className="flex-1 p-6 sm:p-10 lg:p-14 min-h-[700px] flex flex-col justify-between animate-fade-in"
    >
      <div>
        {isWebsiteTab ? (
          <WebsitePricingContent
            onSelectPackage={() => onOpenModal("consulting")}
          />
        ) : (
          <>
            {/* Top Layout: Header (Left 65%) + Visual Mockup (Right 35%) */}
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <ServiceHeader service={service} />
              </div>

              <div className="shrink-0 flex justify-center">
                <ServiceVisual serviceId={service.id} />
              </div>
            </div>

            {/* Middle Layout: 4 Feature Highlights Information Blocks */}
            <ServiceHighlights highlights={service.highlights} />

            {/* Lower Middle Layout: Feature List (Left) + CTA Panel (Right) */}
            <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7">
                <ServiceFeatureList features={service.features} />
              </div>

              <div className="lg:col-span-5">
                <ServiceCTA
                  ctaData={service.cta}
                  onAction={() => onOpenModal("trial")}
                />
              </div>
            </div>
          </>
        )}
      </div>

      {/* Bottom Horizontal Benefit Strip */}
      <ServiceBenefits benefits={service.benefits} />
    </div>
  );
}
