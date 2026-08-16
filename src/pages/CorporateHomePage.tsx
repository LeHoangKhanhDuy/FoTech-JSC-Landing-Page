import CorporateNavbar from "@/components/layout/CorporateNavbar";
import EcosystemSection from "@/modules/ecosystem/components/EcosystemSection";
import CorporateFooter from "@/components/layout/CorporateFooter";
import TrustedCompanies from "@/modules/hero/components/TrustedCompanies";
import WhyTrustFoTech from "@/modules/marketing/components/WhyTrustFoTech";
import CtaSection from "@/modules/cta/components/CtaSection";
import HeroCard from "@/modules/hero/components/HeroCard";
import { ServicesSection } from "@/modules/pricing/components";

export default function CorporateHomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      <CorporateNavbar />
      <main>
        <HeroCard />
        <TrustedCompanies />
        <EcosystemSection />
        <WhyTrustFoTech />
        <ServicesSection />
        <CtaSection />
      </main>
      <CorporateFooter />
    </div>
  );
}
