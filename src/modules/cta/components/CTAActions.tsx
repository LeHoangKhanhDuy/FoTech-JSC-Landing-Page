import { ArrowRight, PhoneCall } from 'lucide-react';
import Button from '@/components/ui/Button';

interface CTAActionsProps {
  onOpenTrial: () => void;
  onOpenConsulting: () => void;
}

export default function CTAActions({ onOpenTrial, onOpenConsulting }: CTAActionsProps) {
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
      {/* Primary Button */}
      <Button
        variant="primary"
        size="lg"
        onClick={onOpenTrial}
        icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
        className="w-full sm:w-auto h-[50px] px-8 text-sm sm:text-base font-bold rounded-xl bg-[#1A60FF] hover:bg-[#0052FF] text-white shadow-[0_0_25px_rgba(26,96,255,0.5)] border-0"
      >
        Bắt đầu miễn phí 14 ngày
      </Button>

      {/* Secondary Button */}
      <Button
        variant="outline"
        size="lg"
        onClick={onOpenConsulting}
        icon={<PhoneCall className="h-4 w-4 text-white" aria-hidden="true" />}
        className="w-full sm:w-auto h-[50px] px-8 text-sm sm:text-base font-bold rounded-xl border border-slate-700 bg-[#06122E]/80 hover:bg-slate-800/90 text-white shadow-sm"
      >
        Đặt lịch Tư vấn 1:1
      </Button>
    </div>
  );
}
