import CorporateNavbar from '@/components/layout/CorporateNavbar';
import CorporateHero from '@/components/sections/CorporateHero';
import TrustedCompanies from '@/components/sections/TrustedCompanies';
import EcosystemSection from '@/components/sections/EcosystemSection';
import WhyTrustFoTech from '@/components/sections/WhyTrustFoTech';
import CtaSection from '@/components/sections/CtaSection';
import CorporateFooter from '@/components/layout/CorporateFooter';

export default function CorporateHomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white">
      <CorporateNavbar />
      <main>
        <CorporateHero />
        <TrustedCompanies />
        <EcosystemSection />
        <WhyTrustFoTech />
        <CtaSection />
      </main>
      <CorporateFooter />
    </div>
  );
}
