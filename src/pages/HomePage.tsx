import CorporateNavbar from "@/components/layout/CorporateNavbar";
import Hero from "@/components/sections/fohrm/Hero";
import FeaturesSection from "@/components/sections/fohrm/FeaturesSection";
import BenefitsSection from "@/components/sections/fohrm/BenefitsSection";
import SolutionSection from "@/components/sections/fohrm/SolutionSection";
import PricingSection from "@/components/sections/fohrm/PricingSection";
import FaqSection from "@/components/sections/fohrm/FaqSection";
import CorporateFooter from "@/components/layout/CorporateFooter";
import TrustedCompanies from "@/modules/hero/components/TrustedCompanies";
import CtaSection from "@/modules/cta/components/CtaSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#020817] text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      <CorporateNavbar />
      <main>
        <Hero />
        <TrustedCompanies />
        <FeaturesSection />
        <BenefitsSection />
        <SolutionSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <CorporateFooter />
    </div>
  );
}
