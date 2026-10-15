import { useState } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  Crown,
  Home,
  UsersRound,
} from "lucide-react";

interface FoMedPricingProps {
  onContact: () => void;
}

const plans = [
  {
    name: "Cơ bản",
    description: "Phù hợp phòng khám nhỏ",
    icon: Home,
    annualPrice: 2_500_000,
    originalPrice: 3_000_000,
    discount: "-17%",
    features: [
      "Quản lý lịch hẹn",
      "Quản lý bệnh nhân cơ bản",
      "Hồ sơ bệnh án điện tử",
      "Báo cáo thống kê cơ bản",
      "Hỗ trợ qua email",
    ],
  },
  {
    name: "Chuyên nghiệp",
    description: "Phù hợp phòng khám vừa",
    icon: Building2,
    annualPrice: 5_900_000,
    originalPrice: 7_200_000,
    discount: "-18%",
    popular: true,
    features: [
      "Tất cả tính năng gói Cơ bản",
      "Quản lý kho thuốc",
      "Quản lý thu chi, công nợ",
      "Báo cáo nâng cao",
      "Tích hợp thiết bị y tế",
      "Hỗ trợ qua chat & email",
    ],
  },
  {
    name: "Doanh nghiệp",
    description: "Phù hợp chuỗi phòng khám",
    icon: UsersRound,
    annualPrice: 12_900_000,
    originalPrice: 15_600_000,
    discount: "-17%",
    features: [
      "Tất cả tính năng gói Chuyên nghiệp",
      "Quản lý đa chi nhánh",
      "Phân quyền nhân sự chi tiết",
      "Báo cáo tổng hợp toàn hệ thống",
      "Tích hợp kế toán, HRM",
      "Hỗ trợ ưu tiên",
    ],
  },
  {
    name: "Tùy chỉnh",
    description: "Dành cho nhu cầu đặc thù",
    icon: Crown,
    features: [
      "Thiết kế theo nhu cầu riêng",
      "Tích hợp hệ thống bên thứ 3",
      "Hỗ trợ triển khai, đào tạo",
      "Bảo trì và nâng cấp lâu dài",
      "Hỗ trợ 1:1 từ đội ngũ FoTech",
    ],
  },
];

function formatPrice(price: number) {
  return new Intl.NumberFormat("vi-VN").format(price);
}

export function FoMedPricing({ onContact }: FoMedPricingProps) {
  const [billing, setBilling] = useState<"annual" | "monthly">("annual");

  return (
    <section
      id="pricing"
      className="relative isolate overflow-hidden bg-[#F5FCFA] py-16 transition-colors sm:py-20 lg:py-24 dark:bg-[#091E1B]"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_50%_48%,rgba(167,243,208,0.22),transparent_68%)]"
        aria-hidden="true"
      />
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <header className="mx-auto max-w-4xl text-center">
          <span className="inline-flex rounded-full bg-[#D1FAE5] px-5 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-[#064E3B]">
            Bảng giá
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl dark:text-white">
            Chọn gói phù hợp với quy mô phòng khám của bạn
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg dark:text-slate-300">
            FoMed cung cấp nhiều gói linh hoạt, đáp ứng từ phòng khám nhỏ đến
            chuỗi phòng khám đa chi nhánh.
          </p>

          <div className="mx-auto mt-6 inline-flex rounded-full border border-white bg-white/90 p-1.5 shadow-[0_8px_24px_rgba(6,78,59,0.1)] dark:border-white/10 dark:bg-[#102A26]">
            <button
              type="button"
              aria-pressed={billing === "annual"}
              onClick={() => setBilling("annual")}
              className={`rounded-full px-4 py-2 text-xs font-bold transition sm:px-5 ${billing === "annual" ? "bg-[#E0F7EF] text-[#064E3B]" : "text-slate-600 hover:text-[#047857] dark:text-slate-300"}`}
            >
              Thanh toán theo năm{" "}
              <span className="ml-1 rounded-full bg-[#047857] px-2 py-1 text-[10px] text-white">
                Tiết kiệm đến 20%
              </span>
            </button>
            <button
              type="button"
              aria-pressed={billing === "monthly"}
              onClick={() => setBilling("monthly")}
              className={`rounded-full px-4 py-2 text-xs font-bold transition sm:px-5 ${billing === "monthly" ? "bg-[#E0F7EF] text-[#064E3B]" : "text-slate-600 hover:text-[#047857] dark:text-slate-300"}`}
            >
              Thanh toán theo tháng
            </button>
          </div>
        </header>

        <div className="mt-7 grid items-stretch gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const price = plan.annualPrice
              ? billing === "annual"
                ? plan.annualPrice
                : Math.round(plan.annualPrice / 12 / 1000) * 1000
              : null;
            const originalPrice =
              plan.originalPrice && billing === "annual"
                ? plan.originalPrice
                : null;

            return (
              <article
                key={plan.name}
                className={`relative flex min-h-[400px] flex-col rounded-2xl border bg-white/90 p-5 shadow-[0_12px_34px_rgba(6,78,59,0.045)] transition-colors sm:p-6 dark:bg-[#102A26] ${plan.popular ? "border-[#6EE7B7] shadow-[0_16px_40px_rgba(4,120,87,0.12)]" : "border-[#DCEFE9] dark:border-white/10"}`}
              >
                {plan.popular && (
                  <span className="absolute right-3 top-3 rounded-full bg-[#10B981] px-3 py-1 text-[11px] font-bold text-white">
                    Phổ biến
                  </span>
                )}
                <div className="flex items-center gap-4">
                  <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-[#D1FAE5] text-[#047857] dark:bg-[#064E3B] dark:text-[#6EE7B7]">
                    <Icon
                      className="h-7 w-7"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                  </span>
                  <div>
                    <h3 className="font-extrabold text-[#102C36] dark:text-white">
                      {plan.name}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">
                      {plan.description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 min-h-[76px]">
                  {price ? (
                    <>
                      <p
                        className={`text-[27px] font-black tracking-tight ${plan.popular ? "text-[#056B5D]" : "text-[#102C36] dark:text-white"}`}
                      >
                        {formatPrice(price)}{" "}
                        <span className="text-sm font-bold">
                          đ/{billing === "annual" ? "năm" : "tháng"}
                        </span>
                      </p>
                      <div className="mt-1 flex items-center gap-2 text-xs">
                        {originalPrice && (
                          <span className="text-slate-500 line-through">
                            {formatPrice(originalPrice)} đ/năm
                          </span>
                        )}
                        {plan.discount && billing === "annual" && (
                          <span className="rounded-full bg-[#D1FAE5] px-2.5 py-1 font-bold text-[#047857]">
                            {plan.discount}
                          </span>
                        )}
                      </div>
                      {billing === "monthly" && (
                        <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                          Giá quy đổi từ gói năm
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      <p className="text-[27px] font-black tracking-tight text-[#102C36] dark:text-white">
                        Liên hệ
                      </p>
                      <p className="mt-1 text-xs text-slate-500 dark:text-slate-300">
                        Nhận báo giá theo yêu cầu
                      </p>
                    </>
                  )}
                </div>

                <ul className="mt-3 flex-1 space-y-2.5">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-[13px] leading-5 text-slate-700 dark:text-slate-200"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#10B981]"
                        strokeWidth={2.8}
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={onContact}
                  className={`mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border px-4 text-sm font-bold transition hover:-translate-y-0.5 ${plan.popular ? "border-[#047857] bg-[#047857] text-white shadow-md shadow-[#047857]/20 hover:bg-[#059669]" : "border-[#78AFA1] bg-white text-[#064E3B] hover:bg-[#D1FAE5] dark:border-[#14B8A6]/50 dark:bg-transparent dark:text-[#A7F3D0] dark:hover:bg-[#064E3B]"}`}
                >
                  {plan.name === "Cơ bản" || plan.name === "Chuyên nghiệp"
                    ? "Dùng thử miễn phí"
                    : plan.name === "Doanh nghiệp"
                      ? "Nhận tư vấn ngay"
                      : "Liên hệ tư vấn"}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
