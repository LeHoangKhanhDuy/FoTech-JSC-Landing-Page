import { Headphones, Rocket } from 'lucide-react';
import Button from '@/components/common/Button';
import Reveal from '@/components/common/Reveal';
import Section from '@/components/common/Section';
import { submitLead } from '@/services/leadService';

export default function CtaSection() {
  return (
    <Section className="bg-slate-950 text-white">
      <Reveal>
        <div className="grid items-center gap-8 rounded-2xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-xl md:grid-cols-[1fr_auto] md:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#00C951]">FoTalent AI</p>
            <h2 className="mt-4 text-balance text-3xl font-black leading-tight md:text-4xl">
              Sẵn sàng chuyển đổi số nhân sự với AI?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
              Đặt lịch demo để xem cách FoTalent AI chuẩn hóa chấm công, nghỉ phép, payroll và hỏi đáp HR với FINA.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
            <Button icon={<Rocket className="h-5 w-5" aria-hidden="true" />} onClick={() => submitLead('demo')}>
              Đăng ký Demo
            </Button>
            <Button
              variant="secondary"
              icon={<Headphones className="h-5 w-5" aria-hidden="true" />}
              onClick={() => submitLead('consulting')}
            >
              Liên hệ tư vấn
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
