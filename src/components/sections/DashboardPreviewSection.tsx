import { Activity, BarChart3, CalendarDays, PieChart, UsersRound } from 'lucide-react';
import DashboardMockup from '@/components/sections/DashboardMockup';
import Reveal from '@/components/common/Reveal';
import Section from '@/components/common/Section';
import SectionHeading from '@/components/common/SectionHeading';

const kpis = [
  { label: 'Attendance KPI', value: '96.4%', icon: Activity },
  { label: 'Department Score', value: '88/100', icon: UsersRound },
  { label: 'Leave Forecast', value: '32 ngày', icon: CalendarDays },
  { label: 'Payroll Health', value: '99%', icon: PieChart },
];

export default function DashboardPreviewSection() {
  return (
    <Section className="bg-white dark:bg-slate-950">
      <SectionHeading
        eyebrow="Dashboard Preview"
        title="Attendance Analytics, KPI, Charts, Heatmap trong một màn hình"
        description="Cung cấp góc nhìn tức thời cho HR, quản lý phòng ban và ban lãnh đạo về tình trạng vận hành nhân sự."
      />
      <div className="mt-12 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {kpis.map((kpi) => {
              const Icon = kpi.icon;

              return (
                <div key={kpi.label} className="rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#1972F5]/10 text-[#1972F5]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <BarChart3 className="h-5 w-5 text-slate-300 dark:text-slate-600" aria-hidden="true" />
                  </div>
                  <p className="mt-5 text-2xl font-black text-slate-950 dark:text-white">{kpi.value}</p>
                  <p className="mt-1 text-sm font-semibold text-slate-500 dark:text-slate-400">{kpi.label}</p>
                </div>
              );
            })}
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <DashboardMockup />
        </Reveal>
      </div>
    </Section>
  );
}
