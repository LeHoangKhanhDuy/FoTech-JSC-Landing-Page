import CorporateNavbar from "@/components/layout/CorporateNavbar";
import CorporateFooter from "@/components/layout/CorporateFooter";
import WhyTrustFoTech from "@/modules/marketing/components/WhyTrustFoTech";
import CtaSection from "@/modules/cta/components/CtaSection";
import HeroCard from "@/modules/hero/components/HeroCard";
import { ServicesSection } from "@/modules/pricing/components";
import { IntegrationFeatureSection } from "@/modules/feature/components";
import SEO from "@/components/common/SEO";

export default function CorporateHomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
      <SEO
        title="FoTech Solutions | Hệ sinh thái giải pháp công nghệ"
        description="FoTech Solutions phát triển hệ sinh thái công nghệ gồm FoHRM, FoMed, FoCode và Troo.vn. Cung cấp giải pháp quản lý, chuyển đổi số và thiết kế website cho doanh nghiệp."
        ogDescription="Khám phá hệ sinh thái FoTech: FoHRM, FoMed, FoCode và Troo.vn. Giải pháp công nghệ hỗ trợ doanh nghiệp vận hành hiệu quả."
        keywords="FoTech, FoHRM, Quản trị nhân sự AI, Chuyển đổi số doanh nghiệp, phần mềm tính lương tự động, ERP Việt Nam, FoMed, FoCode, Troo.vn, HR Tech 2026"
        canonical="https://www.fotech.solutions/"
      />
      <CorporateNavbar />
      <main>
        <HeroCard />
        <WhyTrustFoTech />
        <ServicesSection />
        <IntegrationFeatureSection />
        <CtaSection />
      </main>
      <CorporateFooter />
    </div>
  );
}
