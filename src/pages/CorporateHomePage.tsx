import CorporateNavbar from "@/components/layout/CorporateNavbar";
import EcosystemSection from "@/modules/ecosystem/components/EcosystemSection";
import CorporateFooter from "@/components/layout/CorporateFooter";
import TrustedCompanies from "@/modules/hero/components/TrustedCompanies";
import WhyTrustFoTech from "@/modules/corporate/WhyTrustFoTech";
import CtaSection from "@/modules/corporate/CtaSection";
import HeroCard from "@/modules/hero/components/HeroCard";

export default function CorporateHomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      <CorporateNavbar />
      <main>
        <HeroCard />
        <TrustedCompanies />
        <EcosystemSection />
        <WhyTrustFoTech />
        <CtaSection />
      </main>
      <CorporateFooter />
    </div>
  );
}
