import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import ContactModal from '@/modules/contact/components/ContactModal';
import { HowItWorksHeader } from '@/modules/fohrm/howitwork/components/HowItWorksHeader';
import { HowItWorksTimeline } from '@/modules/fohrm/howitwork/components/HowItWorksTimeline';
import { HOW_IT_WORKS_STEPS } from '@/modules/fohrm/howitwork/data/howItWorkData';
import type { HowItWorksSectionProps } from '@/modules/fohrm/howitwork/types/howItWorkTypes';

export function HowItWorksSection({ className = '' }: HowItWorksSectionProps) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section
      id="features"
      className={`relative py-24 bg-white dark:bg-[#020817] overflow-hidden ${className}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[700px] rounded-full bg-gradient-to-tr from-blue-500/10 via-cyan-500/10 to-indigo-500/10 blur-3xl dark:from-blue-600/15 dark:via-cyan-600/10 dark:to-indigo-900/20"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <HowItWorksHeader />

        <HowItWorksTimeline
          steps={HOW_IT_WORKS_STEPS}
          onActionClick={() => setModalOpen(true)}
        />

        <div className="mt-10 text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => setModalOpen(true)}
            icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}
          >
            Trải nghiệm trọn bộ quy trình FoHRM
          </Button>
          <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
            Dùng thử miễn phí 14 ngày đầy đủ tính năng · Không cần thẻ tín dụng
          </p>
        </div>
      </div>

      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type="trial"
      />
    </section>
  );
}

export default HowItWorksSection;
