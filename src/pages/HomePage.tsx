import BenefitsSection from '@/components/sections/BenefitsSection';
import CtaSection from '@/components/sections/CtaSection';
import DashboardPreviewSection from '@/components/sections/DashboardPreviewSection';
import FaqSection from '@/components/sections/FaqSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import FinaSection from '@/components/sections/FinaSection';
import Hero from '@/components/sections/Hero';
import ModulesSection from '@/components/sections/ModulesSection';
import PricingSection from '@/components/sections/PricingSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import TrustedCompanies from '@/components/sections/TrustedCompanies';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-950 dark:bg-[#0F172A] dark:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustedCompanies />
        <ProblemSection />
        <SolutionSection />
        <FeaturesSection />
        <FinaSection />
        <DashboardPreviewSection />
        <ModulesSection />
        <BenefitsSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
