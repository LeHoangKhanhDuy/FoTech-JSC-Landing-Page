import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/fohrm/Hero";
import FeaturesSection from "@/components/sections/fohrm/FeaturesSection";
import BenefitsSection from "@/components/sections/fohrm/BenefitsSection";
import SolutionSection from "@/components/sections/fohrm/SolutionSection";
import PricingSection from "@/components/sections/fohrm/PricingSection";
import FaqSection from "@/components/sections/fohrm/FaqSection";
import Footer from "@/components/layout/Footer";
import TrustedCompanies from "@/modules/hero/components/TrustedCompanies";
import CtaSection from "@/modules/corporate/CtaSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />
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
      <Footer />
    </div>
  );
}
