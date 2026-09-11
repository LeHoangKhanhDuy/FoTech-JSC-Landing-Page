import ContactModal from '@/modules/contact/components/ContactModal';
import { pricingData } from '@/modules/fohrm/pricing/data/pricingData';
import { usePricingSection } from '@/modules/fohrm/pricing/hooks/usePricingSection';
import { usePricingAnimation } from '@/modules/fohrm/pricing/hooks/usePricingAnimation';
import PricingHeader from '@/modules/fohrm/pricing/components/PricingHeader';
import FreeTrialCard from '@/modules/fohrm/pricing/components/FreeTrialCard';
import PricingCard from '@/modules/fohrm/pricing/components/PricingCard';

export default function FoHrmPricing() {
  const {
    isYearly,
    toggleYearly,
    modalState,
    handleOpenModal,
    handleCloseModal,
  } = usePricingSection();

  const { sectionRef, isInView } = usePricingAnimation();

  return (
    <section
      ref={sectionRef}
      id="pricing"
      className="relative py-20 md:py-28 bg-slate-50/70 dark:bg-[#020817] text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300"
    >
      <div
        className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_15%,rgba(37,99,235,0.06),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(79,70,229,0.04),transparent_40%)] dark:bg-[radial-gradient(circle_at_50%_15%,rgba(37,99,235,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(79,70,229,0.06),transparent_40%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <PricingHeader
          key={isInView ? 'pricing-header-in' : 'pricing-header-out'}
          badge={pricingData.badge}
          title={pricingData.title}
          subtitle={pricingData.subtitle}
          className={isInView ? 'animate-hero-up' : 'opacity-0'}
          style={isInView ? { animationDelay: '0.4s' } : undefined}
        />

        <div className="mt-8 sm:mt-10">
          <FreeTrialCard
            key={isInView ? 'free-trial-in' : 'free-trial-out'}
            data={pricingData.freeTrial}
            onGetStarted={() => handleOpenModal(pricingData.freeTrial.modalType)}
            className={isInView ? 'animate-hero-up' : 'opacity-0'}
            style={isInView ? { animationDelay: '0.5s' } : undefined}
          />
        </div>

        <div className="mt-12 sm:mt-14 grid gap-8 lg:grid-cols-3 items-stretch">
          {pricingData.plans.map((plan, idx) => (
            <PricingCard
              key={isInView ? `${plan.id}-in` : `${plan.id}-out`}
              plan={plan}
              isYearly={isYearly}
              onToggleYearly={toggleYearly}
              onSelectPlan={(type) => handleOpenModal(type)}
              className={isInView ? 'animate-hero-up' : 'opacity-0'}
              style={
                isInView
                  ? { animationDelay: `${0.28 + idx * 0.08}s` }
                  : undefined
              }
            />
          ))}
        </div>
      </div>

      <ContactModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        type={modalState.type}
      />
    </section>
  );
}

export { FoHrmPricing };
