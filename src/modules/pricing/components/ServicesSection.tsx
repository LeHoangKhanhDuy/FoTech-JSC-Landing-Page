import ContactModal from '@/modules/contact/components/ContactModal';
import ServicesHeader from '@/modules/pricing/components/ServicesHeader';
import ServiceTabNav from '@/modules/pricing/components/ServiceTabNav';
import ServiceTabCard from '@/modules/pricing/components/ServiceTabCard';
import { servicesTabData } from '@/modules/pricing/data/pricing-data';
import { useServicesSection } from '@/modules/pricing/hooks/useServicesSection';
import { useServicesAnimation } from '@/modules/pricing/hooks/useServicesAnimation';

export default function ServicesSection() {
  const { sectionRef, isInView } = useServicesAnimation();

  const {
    activeTabId,
    activeTabData,
    slideDirection,
    modalState,
    handleSelectTab,
    handleOpenModal,
    handleCloseModal,
    handleMouseEnter,
    handleMouseLeave,
  } = useServicesSection();

  return (
    <section
      ref={sectionRef}
      id="solutions"
      className="relative py-16 md:py-24 overflow-hidden bg-slate-50/60 dark:bg-[#020817] text-slate-900 dark:text-white transition-colors duration-300"
    >
      <div
        className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.05),transparent_40%),radial-gradient(circle_at_20%_70%,rgba(79,70,229,0.04),transparent_35%)] dark:bg-[radial-gradient(circle_at_70%_30%,rgba(37,99,235,0.08),transparent_40%),radial-gradient(circle_at_20%_70%,rgba(79,70,229,0.06),transparent_35%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <ServicesHeader
          key={isInView ? 'header-in' : 'header-out'}
          className={isInView ? 'animate-hero-down' : 'opacity-0'}
          style={isInView ? { animationDelay: '0.4s' } : undefined}
        />

        <ServiceTabNav
          key={isInView ? 'nav-in' : 'nav-out'}
          tabs={servicesTabData}
          activeTabId={activeTabId}
          onSelectTab={handleSelectTab}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={isInView ? 'animate-hero-down' : 'opacity-0'}
          style={isInView ? { animationDelay: '0.5s' } : undefined}
        />

        <div
          key={isInView ? `card-wrap-in-${activeTabId}` : 'card-wrap-out'}
          className={isInView ? 'animate-hero-right' : 'opacity-0'}
          style={isInView ? { animationDelay: '0.6s' } : undefined}
        >
          <ServiceTabCard
            data={activeTabData}
            slideDirection={slideDirection}
            onOpenModal={() => handleOpenModal('consulting')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
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
