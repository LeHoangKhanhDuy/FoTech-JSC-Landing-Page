import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
} from "lucide-react";
import FoMedLogo from "@/assets/fomed/FoMed_Logo.png";
import FoMedFooterBackground from "@/assets/fomed/FoMed_Footer.png";
import Reveal from "@/components/ui/Reveal";

const productLinks = [
  { label: "Tính năng", href: "/app/fomed#features" },
  { label: "Bảng giá", href: "/app/fomed#pricing" },
  { label: "Câu hỏi thường gặp", href: "/app/fomed#contact" },
  { label: "Dùng thử miễn phí", href: "/app/fomed#hero" },
  { label: "Liên hệ tư vấn", href: "/app/fomed#contact" },
];

const resourceLinks = [
  { label: "Hướng dẫn sử dụng", href: "/app/fomed#features" },
  { label: "Tài liệu API", href: "mailto:contact@fotech.solutions?subject=T%C3%A0i%20li%E1%BB%87u%20API%20FoMed" },
  { label: "Blog - Tin tức", href: "/#blog" },
  { label: "Chính sách bảo mật", href: "mailto:contact@fotech.solutions?subject=Ch%C3%ADnh%20s%C3%A1ch%20b%E1%BA%A3o%20m%E1%BA%ADt%20FoMed" },
  { label: "Điều khoản sử dụng", href: "mailto:contact@fotech.solutions?subject=%C4%90i%E1%BB%81u%20kho%E1%BA%A3n%20s%E1%BB%AD%20d%E1%BB%A5ng%20FoMed" },
];

export function FoMedFooter() {
  return (
    <footer
      id="contact"
      className="relative isolate overflow-hidden bg-[#003F39] text-white"
      style={{
        backgroundImage: `url(${FoMedFooterBackground})`,
        backgroundPosition: "center -140px",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% auto",
      }}
    >
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#003F39]/65 via-[#003F39]/20 to-[#003F39]/50" aria-hidden="true" />
      <svg
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[72px] w-full"
        viewBox="0 0 1440 72"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0 0H1440V18C1320 22 1230 42 1110 52C970 65 835 69 720 69C565 69 440 62 310 53C185 44 90 20 0 24Z"
          fill="#F5FCFA"
        />
      </svg>
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 pb-6 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pt-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.45fr_0.8fr_0.8fr_1.15fr] lg:gap-12">
          <Reveal>
          <div>
            <a href="/app/fomed#hero" className="inline-flex items-center gap-3" aria-label="FoMed - về đầu trang">
              <img src={FoMedLogo} alt="" className="h-12 w-12 rounded-xl object-contain" />
              <span className="leading-tight">
                <span className="block text-2xl font-extrabold">FoMed</span>
                <span className="block text-sm text-white/70">Product by FoTech</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-6 text-justify text-white/75">
              Giải pháp quản lý phòng khám hiện đại, giúp tối ưu quy trình vận hành, nâng cao chất lượng dịch vụ y tế và trải nghiệm bệnh nhân.
            </p>
            <div className="mt-4 flex items-center gap-2.5">
              <a href="https://www.facebook.com/fotechvn" target="_blank" rel="noreferrer" aria-label="Facebook FoTech" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#10B981]">
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="https://www.linkedin.com/company/fotech-solutions/" target="_blank" rel="noreferrer" aria-label="LinkedIn FoTech" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#10B981]">
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          </Reveal>

          <Reveal delay={0.08}>
          <nav aria-label="Sản phẩm FoMed">
            <h2 className="mb-3 text-base font-extrabold">Sản phẩm</h2>
            <ul className="space-y-2.5">
              {productLinks.map((link) => <li key={link.label}><a href={link.href} className="text-sm text-white/70 transition hover:text-[#6EE7B7]">{link.label}</a></li>)}
            </ul>
          </nav>
          </Reveal>

          <Reveal delay={0.16}>
          <nav aria-label="Tài nguyên">
            <h2 className="mb-3 text-base font-extrabold">Tài nguyên</h2>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => <li key={link.label}><a href={link.href} className="text-sm text-white/70 transition hover:text-[#6EE7B7]">{link.label}</a></li>)}
            </ul>
          </nav>
          </Reveal>

          <Reveal delay={0.24}>
          <div>
            <h2 className="mb-3 text-base font-extrabold">Liên hệ</h2>
            <ul className="space-y-3">
              {/* <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#2DD4BF]" aria-hidden="true" />
                <a href="tel:18001234" className="text-sm font-semibold hover:text-[#A7F3D0]">1800 1234<span className="mt-0.5 block text-xs font-normal text-white/60">Hỗ trợ tư vấn miễn phí</span></a>
              </li> */}
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-[#2DD4BF]" aria-hidden="true" />
                <a href="mailto:contact@fotech.solutions" className="text-sm text-white/80 hover:text-[#A7F3D0]">contact@fotech.solutions</a>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/80">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2DD4BF]" aria-hidden="true" />
                TP. Hồ Chí Minh, Việt Nam
              </li>
            </ul>
          </div>
          </Reveal>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/15 pt-4 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} FoTech Solutions. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <a href="mailto:contact@fotech.solutions?subject=Ch%C3%ADnh%20s%C3%A1ch%20b%E1%BA%A3o%20m%E1%BA%ADt%20FoMed" className="transition hover:text-white">Chính sách bảo mật</a>
            <span aria-hidden="true">|</span>
            <a href="mailto:contact@fotech.solutions?subject=%C4%90i%E1%BB%81u%20kho%E1%BA%A3n%20s%E1%BB%AD%20d%E1%BB%A5ng%20FoMed" className="transition hover:text-white">Điều khoản sử dụng</a>
            <span aria-hidden="true">|</span>
            <a href="mailto:contact@fotech.solutions" className="transition hover:text-white">Liên hệ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
