import { ArrowRight, PhoneCall } from 'lucide-react';
import Button from '@/components/ui/Button';

interface CTAActionsProps {
  onOpenTrial: () => void;
  onOpenConsulting: () => void;
}

export default function CTAActions({ onOpenTrial, onOpenConsulting }: CTAActionsProps) {
  return (
    <div className="mt-7 sm:mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center sm:gap-4 max-w-sm sm:max-w-none mx-auto">
      <Button
        variant="primary"
        size="lg"
        onClick={onOpenTrial}
        icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
        className="w-full sm:w-auto h-[48px] sm:h-[50px] px-7 text-xs sm:text-base font-bold rounded-xl bg-[#1A60FF] hover:bg-[#0052FF] text-white shadow-[0_0_25px_rgba(26,96,255,0.5)] border-0"
      >
        Bắt đầu dùng thử miễn phí
      </Button>

      <Button
        variant="outline"
        size="lg"
        onClick={onOpenConsulting}
        icon={<PhoneCall className="h-4 w-4 text-white" aria-hidden="true" />}
        className="w-full sm:w-auto h-[48px] sm:h-[50px] px-7 text-xs sm:text-base font-bold rounded-xl border border-slate-700/90 bg-[#06122E]/90 hover:bg-slate-800 text-white shadow-sm"
      >
        Đặt lịch Tư vấn 1:1
      </Button>
    </div>
  );
}
