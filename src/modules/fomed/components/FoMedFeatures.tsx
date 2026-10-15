import { ArrowRight } from "lucide-react";
import FeatureImage from "@/assets/fomed/FoMed_FeatureBG.png";
import AppointmentIcon from "@/assets/fomed/calendar.png";
import PatientRecordsIcon from "@/assets/fomed/medical-report.png";
import CareWorkflowIcon from "@/assets/fomed/folders.png";
import PaymentIcon from "@/assets/fomed/wallet.png";
import AnalyticsIcon from "@/assets/fomed/statistical.png";
import SystemIcon from "@/assets/fomed/procedure.png";
import Reveal from "@/components/ui/Reveal";

const featureCards = [
  {
    icon: AppointmentIcon,
    title: "Đặt lịch khám trực tuyến",
    description:
      "Bệnh nhân dễ dàng đặt lịch qua website, ứng dụng hoặc quầy tiếp nhận, giảm tải cho nhân viên.",
    note: "Tiết kiệm thời gian · Giảm chờ đợi",
    tone: "green",
  },
  {
    icon: PatientRecordsIcon,
    title: "Quản lý hồ sơ bệnh nhân",
    description:
      "Lưu trữ và tra cứu hồ sơ, lịch sử khám, chẩn đoán, đơn thuốc nhanh chóng và bảo mật.",
    note: "Bảo mật cao · Truy cập nhanh",
    tone: "blue",
  },
  {
    icon: CareWorkflowIcon,
    title: "Quản lý khám chữa bệnh",
    description:
      "Hỗ trợ bác sĩ ghi nhận khám, chẩn đoán, chỉ định cận lâm sàng, kê đơn và theo dõi điều trị.",
    note: "Quy trình chuẩn · Dễ sử dụng",
    tone: "orange",
  },
  {
    icon: PaymentIcon,
    title: "Thanh toán & hóa đơn",
    description:
      "Hỗ trợ thanh toán trực tuyến, tại quầy, xuất hóa đơn điện tử và theo dõi chi phí minh bạch.",
    note: "Đa hình thức · Minh bạch",
    tone: "purple",
  },
  {
    icon: AnalyticsIcon,
    title: "Báo cáo & thống kê",
    description:
      "Cung cấp báo cáo doanh thu, số lượt khám, hiệu suất bác sĩ và nhiều thống kê quan trọng khác.",
    note: "Trực quan · Dễ theo dõi",
    tone: "pink",
  },
  {
    icon: SystemIcon,
    title: "Quản lý hệ thống linh hoạt",
    description:
      "Quản lý bác sĩ, nhân viên, chuyên khoa, dịch vụ, khung giờ làm việc và nhiều thiết lập khác.",
    note: "Tùy chỉnh theo nhu cầu",
    tone: "teal",
  },
] as const;

const toneStyles = {
  green: {
    icon: "bg-[#DDF8F0] text-[#07866E]",
    note: "bg-[#E4FAF3] text-[#07866E]",
  },
  blue: {
    icon: "bg-[#E4F3FF] text-[#168BEA]",
    note: "bg-[#E8F5FF] text-[#168BEA]",
  },
  orange: {
    icon: "bg-[#FFF0DE] text-[#F47A0B]",
    note: "bg-[#FFF3E5] text-[#E97708]",
  },
  purple: {
    icon: "bg-[#F0E9FF] text-[#8153E8]",
    note: "bg-[#F3EDFF] text-[#7546DE]",
  },
  pink: {
    icon: "bg-[#FFE8F0] text-[#E84D88]",
    note: "bg-[#FFF0F5] text-[#D83F79]",
  },
  teal: {
    icon: "bg-[#DDF8F0] text-[#07866E]",
    note: "bg-[#E4FAF3] text-[#07866E]",
  },
} as const;

function FeatureCard({ feature }: { feature: (typeof featureCards)[number] }) {
  const tone = toneStyles[feature.tone];

  return (
    <article className="group relative flex min-h-[168px] items-start gap-4 rounded-xl border border-white/90 bg-white/90 cursor-pointer p-5 shadow-[0_14px_38px_rgba(11,79,74,0.08)] backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(11,79,74,0.14)] sm:p-6 dark:border-white/10 dark:bg-[#102A26]/90">
      <span className={`flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[21px] ${tone.icon}`}>
        <img src={feature.icon} alt="" aria-hidden="true" className="h-12 w-12 object-contain" loading="lazy" decoding="async" />
      </span>
      <div className="min-w-0 flex-1 pr-7">
        <h3 className="text-[16px] font-extrabold leading-6 tracking-tight text-[#101F3C] dark:text-white">
          {feature.title}
        </h3>
        <p className="mt-1.5 text-[13px] leading-[1.55] text-slate-600 dark:text-slate-300">
          {feature.description}
        </p>
        <span className={`mt-3 inline-flex rounded-full px-3 py-2 text-[11px] font-semibold leading-none ${tone.note}`}>
          {feature.note}
        </span>
      </div>
      <span className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-[#E1F8F1] text-[#0B4F4A] transition group-hover:translate-x-0.5 dark:bg-[#064E3B] dark:text-[#A7F3D0]">
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </span>
    </article>
  );
}

export function FoMedFeatures() {
  const leftFeatures = featureCards.slice(0, 3);
  const rightFeatures = featureCards.slice(3);

  return (
    <section
      id="features"
      className="relative isolate overflow-hidden bg-white py-20 transition-colors sm:py-24 lg:py-28 dark:bg-[#091E1B]"
    >
      <div className="mx-auto max-w-[1540px] px-5 sm:px-8 lg:px-9">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#D1FAE5]/90 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#064E3B]">
            Tính năng nổi bật
          </span>
          <h2 className="mt-5 text-3xl font-black leading-[1.12] tracking-tight text-[#101F3C] sm:text-4xl lg:text-[46px] dark:text-white">
            Đầy đủ tính năng cho
            <br className="hidden sm:block" /> quản lý phòng khám{" "}
            <span className="text-[#079778]">hiện đại</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-6 text-slate-600 sm:text-base dark:text-slate-300">
            FoMed cung cấp bộ tính năng toàn diện giúp phòng khám vận hành hiệu
            quả,
            <br className="hidden md:block" /> tiết kiệm thời gian và nâng cao
            trải nghiệm cho cả bác sĩ và bệnh nhân.
          </p>
        </Reveal>

        <div className="mt-12 grid items-center gap-7 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(400px,1.48fr)_minmax(0,1fr)] lg:gap-3 xl:gap-5">
          <div className="relative z-10 order-2 grid gap-4 sm:grid-cols-2 lg:order-1 lg:grid-cols-1 lg:gap-5">
            {leftFeatures.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.4} fromX={-56}>
                <FeatureCard feature={feature} />
              </Reveal>
            ))}
          </div>

          <Reveal className="relative z-0 order-1 mx-auto flex w-full max-w-[720px] justify-center lg:order-2">
            <img
              src={FeatureImage}
              alt="Giao diện FoMed trên máy tính và điện thoại cùng hình nền minh họa"
              className="h-auto w-full max-w-[620px] object-contain lg:w-[112%] xl:w-[108%]"
              loading="lazy"
              decoding="async"
            />
          </Reveal>

          <div className="relative z-10 order-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-5">
            {rightFeatures.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.4} fromX={56}>
                <FeatureCard feature={feature} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
