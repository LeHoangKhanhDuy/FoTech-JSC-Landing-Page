import {
  ArrowRight,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import WorkflowBackground from "@/assets/fomed/FoMed_Workflow_BG.webp";
import CalendarLockArtwork from "@/assets/fomed/FoMed_Calendar_Lock.png";
import PhoneMockup from "@/assets/fomed/workflow-phone.png";
import PatientListMockup from "@/assets/fomed/workflow-patient-list.png";
import MedicalRecordMockup from "@/assets/fomed/workflow-medical-record.png";
import PaymentMockup from "@/assets/fomed/workflow-payment.png";

interface FoMedWorkflowProps {
  onContact: () => void;
}

const steps = [
  {
    number: "01",
    title: "Đặt lịch khám",
    description:
      "Bệnh nhân đặt lịch dễ dàng qua website, ứng dụng hoặc trực tiếp tại quầy, lựa chọn chuyên khoa, bác sĩ và khung giờ phù hợp.",
    image: PhoneMockup,
    imageAlt: "Màn hình ứng dụng FoMed đặt lịch khám trên điện thoại",
    imageClass: "w-[82%] sm:w-[78%]",
  },
  {
    number: "02",
    title: "Tiếp nhận & quản lý lượt khám",
    description:
      "Hệ thống tự động tiếp nhận, tạo hồ sơ bệnh nhân, phân luồng và quản lý thứ tự khám, giảm thời gian chờ và hạn chế quá tải.",
    image: PatientListMockup,
    imageAlt: "Danh sách bệnh nhân và lịch hẹn trên hệ thống FoMed",
    imageClass: "w-full",
  },
  {
    number: "03",
    title: "Khám chữa bệnh",
    description:
      "Bác sĩ tra cứu hồ sơ, ghi nhận chỉ định, đơn thuốc, kết quả cận lâm sàng trên hệ thống. Tất cả thông tin được lưu trữ tập trung, an toàn.",
    image: MedicalRecordMockup,
    imageAlt: "Giao diện hồ sơ khám và thông tin bệnh án điện tử FoMed",
    imageClass: "w-full",
  },
  {
    number: "04",
    title: "Thanh toán & theo dõi",
    description:
      "Bệnh nhân thanh toán trực tuyến hoặc tại quầy, nhận hóa đơn điện tử và theo dõi lịch sử khám, đơn thuốc, tái khám ngay trên ứng dụng.",
    image: PaymentMockup,
    imageAlt: "Thông tin thanh toán và nhắc lịch tái khám FoMed",
    imageClass: "w-full",
  },
];

export function FoMedWorkflow({ onContact }: FoMedWorkflowProps) {
  return (
    <section
      id="workflow"
      className="relative isolate overflow-hidden bg-[#F4FBF9] py-16 transition-colors sm:py-20 lg:py-24 dark:bg-[#071916]"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-center bg-no-repeat dark:hidden"
        style={{ backgroundImage: `url(${WorkflowBackground})`, backgroundSize: "cover" }}
        aria-hidden="true"
      />
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-[#D1FAE5]/90 px-5 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#064E3B]">
            Quy trình hoạt động
          </span>
          <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight text-[#102033] sm:text-4xl lg:text-5xl dark:text-white">
            Vận hành phòng khám dễ dàng
            <br className="hidden sm:block" />
            chỉ với <span className="text-[#047857]">4 bước đơn giản</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-300">
            FoMed giúp bạn số hóa toàn bộ quy trình từ đặt lịch, tiếp nhận, khám chữa bệnh đến thanh toán và quản lý, tối ưu thời gian và nâng cao trải nghiệm bệnh nhân.
          </p>
          <div className="mx-auto mt-5 h-1 w-32 rounded-full bg-gradient-to-r from-[#047857] via-[#2DD4BF] to-transparent" aria-hidden="true" />
        </Reveal>

        <div className="relative mt-12 grid items-stretch gap-x-5 gap-y-12 sm:grid-cols-2 xl:grid-cols-4 xl:gap-x-6">
          <svg className="pointer-events-none absolute left-[8%] top-5 hidden h-24 w-[84%] overflow-visible xl:block" viewBox="0 0 1200 100" fill="none" aria-hidden="true">
            <path d="M55 8C215 8 215 82 365 82S515 8 665 8s150 74 300 74 150-74 180-74" stroke="#14B8A6" strokeDasharray="3 7" strokeLinecap="round" strokeWidth="2" />
          </svg>

          {steps.map(({ number, title, description, image, imageAlt, imageClass }, index) => (
            <Reveal key={number} delay={index * 0.12} duration={0.55} className="h-full">
              <article className="relative flex h-full min-h-[460px] flex-col rounded-xl border border-white/90 bg-white/80 px-5 pb-5 pt-8 shadow-[0_18px_45px_rgba(6,78,59,0.08)] transition-shadow hover:shadow-[0_22px_52px_rgba(6,78,59,0.12)] sm:px-6 dark:border-white/10 dark:bg-[#102A26]/90 dark:shadow-black/20">
                <div className="mx-auto -mt-16 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full border-[5px] border-white bg-gradient-to-br from-[#059669] to-[#064E3B] text-lg font-black text-white shadow-lg shadow-[#047857]/25 dark:border-[#102A26]">
                  {number}
                </div>
                <h3 className="mt-4 text-lg font-extrabold leading-snug text-[#102033] dark:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-[1.55] text-slate-600 dark:text-slate-300">{description}</p>
                <div className="mt-4 flex justify-center overflow-hidden rounded-2xl">
                  <img src={image} alt={imageAlt} className={`block h-auto max-h-[220px] object-contain object-top ${imageClass}`} loading="lazy" decoding="async" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-16">
          <div className="relative flex min-h-[170px] flex-col items-center overflow-hidden rounded-xl bg-gradient-to-r from-[#064E3B] via-[#056B5D] to-[#047857] px-6 py-6 text-white shadow-[0_20px_48px_rgba(6,78,59,0.2)] sm:flex-row sm:gap-5 sm:px-8 lg:px-10">
            <img
              src={CalendarLockArtwork}
              alt="Lịch hẹn khám FoMed với đồng hồ"
              className="mb-3 w-36 shrink-0 object-contain sm:mb-0 sm:w-40 lg:w-48"
              loading="lazy"
            />
            <div className="max-w-sm text-center sm:text-left">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A7F3D0]">Bắt đầu ngay hôm nay</p>
              <h3 className="mt-2 text-xl font-black leading-tight sm:text-2xl">Số hóa quy trình khám chữa bệnh cùng FoMed</h3>
            </div>
            <p className="mt-4 max-w-sm text-center text-sm leading-6 text-white/75 sm:ml-auto sm:mt-0 sm:text-left">
              Tối ưu vận hành phòng khám, nâng cao trải nghiệm bệnh nhân và phát triển bền vững với giải pháp từ FoTech.
            </p>
            <button
              type="button"
              onClick={onContact}
              className="mt-5 inline-flex min-h-12 shrink-0 items-center justify-center gap-3 rounded-full bg-white px-6 text-sm font-extrabold text-[#064E3B] transition hover:-translate-y-0.5 hover:bg-[#D1FAE5] sm:ml-5 sm:mt-0"
            >
              Nhận tư vấn miễn phí <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
