import CountUp from 'react-countup';
import { PlayCircle, Sparkles } from 'lucide-react';
import Button from '@/components/common/Button';
import Reveal from '@/components/common/Reveal';
import DashboardMockup from '@/components/sections/DashboardMockup';
import { heroStats } from '@/data/landing';
import { submitLead } from '@/services/leadService';

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden px-4 pb-16 pt-32 sm:px-6 lg:px-8 lg:pb-24 lg:pt-36">
      <div className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top_left,rgba(25,114,245,0.18),transparent_36%),radial-gradient(circle_at_top_right,rgba(0,201,81,0.12),transparent_32%)]" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#1972F5]/20 bg-[#1972F5]/10 px-4 py-2 text-sm font-bold text-[#1972F5]">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              AI-First HRM Platform
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="text-balance mt-7 text-4xl font-black leading-[1.08] text-slate-950 dark:text-white sm:text-5xl lg:text-6xl">
              Quản trị nhân sự thông minh với AI
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Tự động hóa chấm công, nghỉ phép, tính lương và hỗ trợ nhân viên bằng AI tiếng Việt.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => submitLead('demo')}>Đăng ký Demo</Button>
            <Button variant="secondary" icon={<PlayCircle className="h-5 w-5" aria-hidden="true" />} onClick={() => submitLead('trial')}>
              Trải nghiệm thử
            </Button>
          </Reveal>
          <Reveal delay={0.32} className="mt-10 grid grid-cols-3 gap-4 border-t border-slate-200 pt-8 dark:border-slate-800">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-black text-slate-950 dark:text-white sm:text-3xl">
                  <CountUp end={stat.value} decimals={stat.decimals ?? 0} duration={2.2} enableScrollSpy scrollSpyOnce />
                  {stat.suffix}
                </p>
                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <DashboardMockup />
        </Reveal>
      </div>
    </section>
  );
}
