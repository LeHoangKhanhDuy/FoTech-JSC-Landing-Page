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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      <SEO
        title="FoTech - Nền tảng Chuyển đổi số & Quản trị Doanh nghiệp AI Hàng Đầu"
        description="Hệ sinh thái giải pháp số toàn diện từ FoTech: FoHRM (Quản trị Nhân sự & Tính lương AI), FoMed (Quản lý Phòng khám), FoCode (Thương mại Điện tử) và Troo.vn (PropTech thông minh). Tối ưu vận hành doanh nghiệp 2026."
        keywords="FoTech, Hệ sinh thái số FoTech, Chuyển đổi số doanh nghiệp, FoHRM, FoMed, FoCode, Troo.vn, Quản trị AI 2026"
        canonical="https://fotech.vn/"
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
