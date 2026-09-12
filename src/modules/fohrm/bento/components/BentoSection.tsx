import React from 'react';
import { Sparkles } from 'lucide-react';
import { BENTO_CONTENT } from '@/modules/fohrm/bento/data/bentoData';
import { BentoIntegrationsCard } from '@/modules/fohrm/bento/components/BentoIntegrationsCard';
import { useBentoAnimation } from '@/modules/fohrm/bento/hooks/useBentoAnimation';

export const BentoSection: React.FC = () => {
  const { sectionRef, isInView } = useBentoAnimation();

  return (
    <section
      ref={sectionRef}
      id="integrations"
      aria-label="Hệ sinh thái kết nối FoHRM"
      className="relative py-16 sm:py-20 lg:py-24 bg-slate-50/70 dark:bg-[#020817] text-slate-900 dark:text-slate-100 overflow-hidden transition-colors duration-300"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[600px] w-[900px] max-w-full rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.08),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.14),transparent_70%)] blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          key={isInView ? "bento-heading-in" : "bento-heading-out"}
          className={`mx-auto max-w-3xl text-center ${
            isInView ? "animate-hero-up" : "opacity-0"
          }`}
          style={isInView ? { animationDelay: "0.3s" } : undefined}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            {BENTO_CONTENT.badge}
          </span>

          <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {BENTO_CONTENT.sectionTitle}
          </h2>
        </div>

        <div
          key={isInView ? "bento-card-in" : "bento-card-out"}
          className={`mx-auto max-w-4xl lg:max-w-5xl mt-10 sm:mt-14 ${
            isInView ? "animate-hero-up" : "opacity-0"
          }`}
          style={isInView ? { animationDelay: "0.4s" } : undefined}
        >
          <BentoIntegrationsCard isInView={isInView} />
        </div>
      </div>
    </section>
  );
};

export default BentoSection;
