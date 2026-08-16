import ServiceHeader from "@/modules/pricing/components/ServiceHeader";
import ServiceVisual from "@/modules/pricing/components/ServiceVisual";
import ServiceHighlights from "@/modules/pricing/components/ServiceHighlights";
import ServiceFeatureList from "@/modules/pricing/components/ServiceFeatureList";
import ServiceCTA from "@/modules/pricing/components/ServiceCTA";
import ServiceBenefits from "@/modules/pricing/components/ServiceBenefits";
import WebsitePricingContent from "@/modules/pricing/components/WebsitePricingContent";
import { ServiceItemData } from "@/modules/pricing/types/pricing-types";

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
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <ServiceHeader service={service} />
              </div>

              <div className="shrink-0 flex justify-center">
                <ServiceVisual serviceId={service.id} />
              </div>
            </div>

            <ServiceHighlights highlights={service.highlights} />

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

      <ServiceBenefits benefits={service.benefits} />
    </div>
  );
}
