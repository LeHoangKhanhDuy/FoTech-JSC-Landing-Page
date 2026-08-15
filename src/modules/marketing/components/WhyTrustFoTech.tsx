import WhyTrustHeader from './WhyTrustHeader';
import CapabilityCard from './CapabilityCard';
import PartnershipJourney from './PartnershipJourney';
import { capabilitiesData } from '../data/whyTrustData';

export default function WhyTrustFoTech() {
  return (
    <section id="why-trust" className="relative py-20 md:py-28 bg-slate-50 text-slate-900 dark:bg-[#030817] dark:text-slate-100 transition-colors duration-300">
      {/* Subtle Background Radial Glow */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.04),transparent_42%)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.08),transparent_42%)]" />

      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <WhyTrustHeader />

        {/* 3 Capability Cards Grid */}
        <div className="mt-14 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {capabilitiesData.map((cap) => (
            <CapabilityCard key={cap.id} capability={cap} />
          ))}
        </div>

        {/* 5-Step Partnership Journey Flow */}
        <PartnershipJourney />
      </div>
    </section>
  );
}
