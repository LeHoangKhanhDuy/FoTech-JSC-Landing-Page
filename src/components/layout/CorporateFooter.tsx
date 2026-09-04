import { Link } from "react-router-dom";
import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export default function CorporateFooter() {
  return (
    <footer
      id="contact"
      className="relative bg-[#020817] pt-10 sm:pt-14 overflow-hidden"
    >
      <div className="mx-auto max-w-8xl px-3 sm:px-6 lg:px-8">
        {/* Rounded Blue Footer Card Container */}
        <div className="relative rounded-t-[36px] sm:rounded-t-[48px] lg:rounded-t-[56px] bg-blue-600 text-white pt-14 sm:pt-16 px-6 sm:px-10 lg:px-14 shadow-2xl overflow-hidden">
          {/* Ambient Lighting Gradient */}
          <div
            className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.18),transparent_70%)]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            {/* Column 1: Brand Info & Social Icons */}
            <div className="lg:col-span-4 space-y-5">
              <p className="max-w-sm text-sm leading-relaxed text-blue-50">
                <strong className="text-white font-extrabold text-lg uppercase">
                  FoTech
                </strong>{" "}
                là giải pháp chuyển đổi số B2B hiện đại & trực quan giúp tối ưu
                vận hành doanh nghiệp.
              </p>

              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="X (Twitter) FoTech"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-sm"
                >
                  <Twitter className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram FoTech"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-sm"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube FoTech"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-sm"
                >
                  <Youtube className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn FoTech"
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-sm"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Column 2: Công ty */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Công ty
              </h4>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm font-medium text-blue-100">
                <li>
                  <a
                    href="#why-trust"
                    className="hover:text-white transition-colors"
                  >
                    Về FoTech
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    href="#careers"
                    className="hover:text-white transition-colors"
                  >
                    Tuyển dụng
                  </a>
                  <span className="ml-2.5 px-2 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-white/20 text-white border border-white/30">
                    WE'RE HIRING
                  </span>
                </li>
              </ul>
            </div>

            {/* Column 3: Sản phẩm */}
            <div className="lg:col-span-3">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Sản phẩm
              </h4>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm font-medium text-blue-100">
                <li>
                  <Link
                    to="/fohrm"
                    className="hover:text-white transition-colors"
                  >
                    FoHRM (Quản trị Nhân sự AI)
                  </Link>
                </li>
                <li>
                  <a
                    href="#troovn"
                    className="hover:text-white transition-colors"
                  >
                    Troo.vn (Tìm & Quản lý Trọ)
                  </a>
                </li>
                <li>
                  <a
                    href="#fomed"
                    className="hover:text-white transition-colors"
                  >
                    FoMed (Quản lý Phòng khám)
                  </a>
                </li>
                <li>
                  <a
                    href="#focode"
                    className="hover:text-white transition-colors"
                  >
                    FoCode (Sàn TMĐT)
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Tài nguyên */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-bold uppercase tracking-wider text-white">
                Tài nguyên
              </h4>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm font-medium text-blue-100">
                <li>
                  <a
                    href="#why-trust"
                    className="hover:text-white transition-colors"
                  >
                    Câu chuyện khách hàng
                  </a>
                </li>
                <li>
                  <a
                    href="#integrations"
                    className="hover:text-white transition-colors"
                  >
                    Tài liệu API & Docs
                  </a>
                </li>
                <li>
                  <a
                    href="#faq"
                    className="hover:text-white transition-colors"
                  >
                    Hỏi đáp thường gặp (FAQ)
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Half-cut giant FOTECH watermark sitting right on the bottom divider line */}
          <div className="mt-12 sm:mt-16 overflow-hidden h-[7vw] sm:h-[8vw] flex items-start justify-center select-none pointer-events-none -mb-px">
            <span
              className="block text-[14vw] sm:text-[15vw] font-black uppercase tracking-[0.14em] text-center leading-none text-transparent opacity-40"
              style={{
                WebkitTextStroke: "2px rgba(255, 255, 255, 0.5)",
                backgroundImage:
                  "linear-gradient(180deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0.05) 100%)",
                WebkitBackgroundClip: "text",
              }}
            >
              FOTECH
            </span>
          </div>

          {/* Bottom Bar with Divider */}
          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 py-6 text-xs text-blue-100/90 sm:flex-row">
            <p>© {new Date().getFullYear()} FoTech JSC. All rights reserved.</p>

            <div className="flex items-center gap-6 font-medium text-blue-100/90">
              <a
                href="#security"
                className="hover:text-white transition-colors"
              >
                Bảo mật
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Điều khoản dịch vụ
              </a>
              <a
                href="#privacy"
                className="hover:text-white transition-colors"
              >
                Chính sách bảo mật
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
