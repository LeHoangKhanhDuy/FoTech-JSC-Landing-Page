import WhyTrustHeader from '@/modules/marketing/components/WhyTrustHeader';
import CapabilityCard from '@/modules/marketing/components/CapabilityCard';
import PartnershipJourney from '@/modules/marketing/components/PartnershipJourney';
import { capabilitiesData } from '@/modules/marketing/data/whyTrustData';

export default function WhyTrustFoTech() {
  return (
    <section id="why-trust" className="relative py-20 md:py-28 bg-slate-50 text-slate-900 dark:bg-[#030817] dark:text-slate-100 transition-colors duration-300">
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.04),transparent_42%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.08),transparent_42%)]" />
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <WhyTrustHeader />

        <div className="mt-14 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {capabilitiesData.map((cap) => (
            <CapabilityCard key={cap.id} capability={cap} />
          ))}
        </div>

        <PartnershipJourney />
      </div>
    </section>
  );
}
