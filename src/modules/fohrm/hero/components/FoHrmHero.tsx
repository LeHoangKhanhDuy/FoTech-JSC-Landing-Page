import { memo } from "react";
import ContactModal from "@/modules/contact/components/ContactModal";
import { FoHrmHeroProps } from "@/modules/fohrm/hero/types";
import {
  HERO_RATING,
  HERO_TRUST_ITEMS,
} from "@/modules/fohrm/hero/data/heroData";
import { useHeroEmailCta } from "@/modules/fohrm/hero/hooks/useHeroEmailCta";
import { HeroRatingBadge } from "@/modules/fohrm/hero/components/HeroRatingBadge";
import { HeroEmailCta } from "@/modules/fohrm/hero/components/HeroEmailCta";
import { HeroVisual } from "@/modules/fohrm/hero/components/HeroVisual";
import { TrustedCompanies } from "@/modules/fohrm/hero/components/TrustedCompanies";

export const FoHrmHero = memo(function FoHrmHero({
  className = "",
  defaultEmail = "",
}: FoHrmHeroProps) {
  const {
    email,
    emailError,
    modalState,
    handleEmailChange,
    handleEmailSubmit,
    closeModal,
  } = useHeroEmailCta({ defaultEmail });

  return (
    <section
      id="hero"
      aria-label="FoHRM Giới thiệu"
      className={`relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 bg-white dark:bg-[#020817] ${className}`}
    >
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.12),rgba(255,255,255,0))] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.2),rgba(2,8,23,0))]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.06),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5 flex flex-col items-start animate-fade-in-up">
            <HeroRatingBadge rating={HERO_RATING} />

            <h1 className="mt-6 font-extrabold tracking-tight text-slate-900 dark:text-white text-2xl sm:text-3xl lg:text-4xl leading-[1.12]">
              Giải phóng bộ máy nhân sự.
              <br />
              <span className="bg-blue-600 bg-clip-text text-transparent">
                Tối ưu 100% hiệu suất vận hành.
              </span>
            </h1>

            <p className="mt-5 text-base text-justify leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg max-w-xl">
              Nền tảng quản trị nhân sự thiết kế riêng cho doanh nghiệp hiện
              đại. Xử lý triệt để bài toán chấm công đa ca kíp, tự động hóa bảng
              lương động tuân thủ chặt chẽ pháp luật, cùng trợ lý AI FINA giúp
              số hóa toàn diện hệ thống vận hành.
            </p>

            <div className="mt-8 w-full">
              <HeroEmailCta
                email={email}
                emailError={emailError}
                trustItems={HERO_TRUST_ITEMS}
                onEmailChange={handleEmailChange}
                onSubmit={handleEmailSubmit}
              />
            </div>
          </div>

          <div
            className="lg:col-span-7 relative animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            <HeroVisual />
          </div>
        </div>

        <div className="mt-14 sm:mt-18 lg:mt-22">
          <TrustedCompanies />
        </div>
      </div>

      <ContactModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        type={modalState.type}
        initialEmail={email}
        defaultProductId="fohrm"
      />
    </section>
  );
});

export default FoHrmHero;
