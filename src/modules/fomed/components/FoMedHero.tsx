import {
  ArrowRight,
  CirclePlay,
  CalendarCheck2,
  ShieldCheck,
  LayoutDashboard,
} from "lucide-react";
import DashboardMockup from "@/assets/fomed/FoMed Medical Dashboard Mockup.png";
import Reveal from "@/components/ui/Reveal";

interface FoMedHeroProps {
  onStartTrial: () => void;
}

const highlights = [
  { icon: CalendarCheck2, label: "Lịch hẹn rõ ràng" },
  { icon: ShieldCheck, label: "Hồ sơ tập trung" },
  { icon: LayoutDashboard, label: "Vận hành liền mạch" },
];

export function FoMedHero({ onStartTrial }: FoMedHeroProps) {
  return (
    <section
      id="hero"
      className="relative isolate min-h-screen min-h-[100svh] overflow-hidden bg-[#F4FBF9] pt-28 transition-colors sm:pt-32 lg:pt-48 dark:bg-[#071916]"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -left-48 top-8 h-[520px] w-[520px] rounded-full bg-[#A7F3D0]/50 blur-3xl" />
        <div className="absolute right-[-8%] top-14 h-[600px] w-[600px] rounded-full bg-[#2DD4BF]/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/80 to-transparent dark:from-[#071916]/90" />
      </div>

      <div className="mx-auto grid max-w-[1440px] items-center gap-8 px-5 pb-12 sm:px-8 lg:grid-cols-[0.83fr_1.17fr] lg:gap-2 lg:px-10 lg:pb-16">
        <Reveal
          fromX={-56}
          duration={0.5}
          className="relative z-10 max-w-2xl lg:pb-10"
        >
          <div className="inline-flex rounded-full bg-[#D1FAE5]/90 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#064E3B]">
            Giải pháp quản lý phòng khám toàn diện
          </div>

          <h1 className="mt-6 max-w-[700px] text-4xl font-black leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[58px] dark:text-white">
            Quản lý phòng khám thông minh, chăm sóc{" "}
            <span className="text-[#0B4F4A]">bệnh nhân tốt hơn</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 dark:text-slate-300">
            FoMed giúp phòng khám tối ưu quy trình vận hành, quản lý bệnh nhân,
            lịch hẹn và hồ sơ y tế trên một nền tảng hiện đại.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={onStartTrial}
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-[#0B4F4A] px-6 text-sm font-bold text-white shadow-lg shadow-[#0B4F4A]/20 transition hover:-translate-y-0.5 hover:bg-[#047857]"
            >
              Trải nghiệm FoMed{" "}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <a
              href="#features"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-[#0B4F4A]/35 bg-white/75 px-6 text-sm font-bold text-[#0B4F4A] transition hover:bg-[#D1FAE5] dark:border-[#14B8A6]/40 dark:bg-[#102A26] dark:text-[#6EE7B7] dark:hover:bg-[#064E3B]"
            >
              <CirclePlay className="h-5 w-5" aria-hidden="true" />
              Khám phá tính năng
            </a>
          </div>

          <div className="mt-9 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-2">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 rounded-xl border border-white/80 bg-white/55 px-3 py-2.5 text-sm font-semibold text-slate-700 backdrop-blur-sm dark:border-white/10 dark:bg-[#102A26]/80 dark:text-slate-200"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D1FAE5] text-[#0B4F4A] dark:bg-[#064E3B] dark:text-[#A7F3D0]">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </span>
                {label}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal
          fromX={56}
          duration={0.6}
          delay={0.2}
          className="relative mx-auto w-full max-w-[860px] lg:-mr-10"
        >
          <div
            className="pointer-events-none absolute inset-[12%] rounded-full bg-[#14B8A6]/20 blur-3xl"
            aria-hidden="true"
          />
          <img
            src={DashboardMockup}
            alt="Giao diện dashboard quản lý lịch hẹn, bệnh nhân, hồ sơ và báo cáo FoMed"
            className="relative z-10 h-auto w-full object-contain drop-shadow-[0_28px_35px_rgba(11,79,74,0.15)]"
            fetchPriority="high"
          />
        </Reveal>
      </div>
    </section>
  );
}
