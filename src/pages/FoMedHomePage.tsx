import { Suspense, lazy, useState } from "react";
import SEO from "@/components/common/SEO";
import CorporateNavbar from "@/components/layout/CorporateNavbar";
import {
  FoMedFooter,
  FoMedFeatures,
  FoMedHero,
  FoMedPricing,
  FoMedWorkflow,
} from "@/modules/fomed/components";

const ContactModal = lazy(() => import("@/modules/contact/components/ContactModal"));

const foMedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.fotech.solutions/app/fomed#software",
      name: "FoMed - Giải pháp quản lý phòng khám",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Nền tảng hỗ trợ quản lý lịch hẹn, bệnh nhân, hồ sơ y tế và hoạt động phòng khám.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "FoTech",
          item: "https://www.fotech.solutions/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "FoMed",
          item: "https://www.fotech.solutions/app/fomed",
        },
      ],
    },
  ],
};

export default function FoMedHomePage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#0B4F4A] selection:text-white">
      <SEO
        title="FoMed - Phần mềm quản lý phòng khám và hồ sơ y tế"
        description="FoMed hỗ trợ phòng khám quản lý lịch hẹn, bệnh nhân, hồ sơ y tế và quy trình vận hành trên một nền tảng hiện đại."
        keywords="FoMed, phần mềm quản lý phòng khám, quản lý lịch hẹn khám, hồ sơ bệnh án điện tử, quản lý bệnh nhân"
        canonical="https://www.fotech.solutions/app/fomed"
        schema={foMedSchema}
      />
      <CorporateNavbar />
      <main>
        <FoMedHero onStartTrial={() => setIsContactOpen(true)} />
        <FoMedFeatures />
        <FoMedWorkflow onContact={() => setIsContactOpen(true)} />
        <FoMedPricing onContact={() => setIsContactOpen(true)} />
      </main>
      <FoMedFooter />
      {isContactOpen && (
        <Suspense fallback={null}>
          <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
            type="demo"
            defaultProductId="fomed"
          />
        </Suspense>
      )}
    </div>
  );
}
