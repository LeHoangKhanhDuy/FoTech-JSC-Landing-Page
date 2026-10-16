import { useEffect, useRef } from "react";
import CorporateNavbar from "@/components/layout/CorporateNavbar";
import Hero from "@/modules/fohrm/hero/components";
import BentoSection from "@/modules/fohrm/bento/components/BentoSection";
import HowItWorksSection from "@/modules/fohrm/howitwork/components/HowItWorksSection";
import PricingSection from "@/modules/fohrm/pricing/components/FoHrmPricing";
import CorporateFooter from "@/components/layout/CorporateFooter";
import CtaSection from "@/modules/cta/components/CtaSection";
import SEO from "@/components/common/SEO";

const fohrmSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.fotech.solutions/app/fohrm#software",
      url: "https://www.fotech.solutions/app/fohrm",
      name: "FoHRM",
      alternateName: ["FoTech HRM", "FoTech FoHRM"],
      description:
        "FoHRM là phần mềm quản lý nhân sự của FoTech Solutions, hỗ trợ chấm công, quản lý hồ sơ, đơn từ và tính lương.",
      operatingSystem: "Web",
      applicationCategory: "BusinessApplication",
      offers: {
        "@type": "Offer",
        priceCurrency: "VND",
        price: "2760000",
        description: "Gói Starter, thanh toán 2.760.000 đ/năm (tương đương 230.000 đ/tháng).",
      },
      publisher: { "@id": "https://www.fotech.solutions/#organization" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Trang chủ",
          item: "https://www.fotech.solutions/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "FoHRM",
          item: "https://www.fotech.solutions/app/fohrm",
        },
      ],
    },
  ],
};

export default function FoHRMHomePage() {
  const hasInitializedRef = useRef(false);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    if (hasInitializedRef.current) return;
    hasInitializedRef.current = true;

    const lenis = (
      window as unknown as {
        __lenis?: {
          scrollTo: (target: number, options?: { immediate?: boolean }) => void;
        };
      }
    ).__lenis;

    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#020817] text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
      <SEO
        title="FoHRM | Phần mềm HRM, chấm công & tính lương"
        description="FoHRM là phần mềm quản lý nhân sự của FoTech Solutions: chấm công, hồ sơ, đơn từ và tính lương. Dùng thử miễn phí 14 ngày."
        keywords="FoHRM, FoTech HRM, FoTech FoHRM, FoHRM FoTech, phần mềm quản lý nhân sự, phần mềm HRM, chấm công FaceID, phần mềm chấm công, tính lương tự động, trợ lý AI FINA, chi lương Bank API"
        ogDescription="FoHRM giúp doanh nghiệp quản lý nhân sự, chấm công, hồ sơ, đơn từ và tính lương. Dùng thử miễn phí 14 ngày."
        canonical="https://www.fotech.solutions/app/fohrm"
        ogImage="https://www.fotech.solutions/fohrm-og-image.png"
        ogImageAlt="FoHRM - Phần mềm quản lý nhân sự, chấm công và tính lương"
        schema={fohrmSchema}
      />
      <CorporateNavbar />
      <main>
        <Hero />
        <BentoSection />
        <HowItWorksSection />
        <PricingSection />
        <CtaSection />
      </main>
      <CorporateFooter />
    </div>
  );
}
