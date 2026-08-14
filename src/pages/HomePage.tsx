import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import TrustedCompanies from '@/components/sections/TrustedCompanies';
import FeaturesSection from '@/components/sections/FeaturesSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import SolutionSection from '@/components/sections/SolutionSection';
import PricingSection from '@/components/sections/PricingSection';
import FaqSection from '@/components/sections/FaqSection';
import CtaSection from '@/components/sections/CtaSection';
import Footer from '@/components/layout/Footer';

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
