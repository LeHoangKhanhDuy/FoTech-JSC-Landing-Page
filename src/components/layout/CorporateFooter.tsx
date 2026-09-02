import { Link } from "react-router-dom";
import { Twitter, Instagram, Youtube, Linkedin } from "lucide-react";

export default function CorporateFooter() {
  return (
    <footer
      id="contact"
      className="relative border-t border-slate-800/80 bg-[#020817] text-slate-100 pt-16 pb-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_100%,rgba(37,99,235,0.08),transparent_70%)]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4 space-y-5">
            <p className="max-w-sm text-sm leading-relaxed text-slate-300">
              <strong className="text-blue-500 font-extrabold text-lg uppercase">
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
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-blue-500/50 hover:bg-slate-800 hover:text-blue-400 transition-all duration-300 shadow-sm"
              >
                <Twitter className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram FoTech"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-blue-500/50 hover:bg-slate-800 hover:text-blue-400 transition-all duration-300 shadow-sm"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube FoTech"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-blue-500/50 hover:bg-slate-800 hover:text-blue-400 transition-all duration-300 shadow-sm"
              >
                <Youtube className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn FoTech"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900/60 text-slate-400 hover:border-blue-500/50 hover:bg-slate-800 hover:text-blue-400 transition-all duration-300 shadow-sm"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Công ty
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm font-medium text-slate-400">
              <li>
                <a
                  href="#why-trust"
                  className="hover:text-blue-400 transition-colors"
                >
                  Về FoTech
                </a>
              </li>
              <li className="flex items-center">
                <a
                  href="#careers"
                  className="hover:text-blue-400 transition-colors"
                >
                  Tuyển dụng
                </a>
                <span className="ml-2.5 px-2 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-blue-950 text-blue-400 border border-blue-500/30">
                  WE'RE HIRING
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Sản phẩm
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm font-medium text-slate-400">
              <li>
                <Link
                  to="/fohrm"
                  className="hover:text-blue-400 transition-colors"
                >
                  FoHRM (Quản trị Nhân sự AI)
                </Link>
              </li>
              <li>
                <a
                  href="#troovn"
                  className="hover:text-blue-400 transition-colors"
                >
                  Troo.vn (Tìm & Quản lý Trọ)
                </a>
              </li>
              <li>
                <a
                  href="#fomed"
                  className="hover:text-blue-400 transition-colors"
                >
                  FoMed (Quản lý Phòng khám)
                </a>
              </li>
              <li>
                <a
                  href="#focode"
                  className="hover:text-blue-400 transition-colors"
                >
                  FoCode (Sàn TMĐT)
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Tài nguyên
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs sm:text-sm font-medium text-slate-400">
              <li>
                <a
                  href="#why-trust"
                  className="hover:text-blue-400 transition-colors"
                >
                  Câu chuyện khách hàng
                </a>
              </li>
              <li>
                <a
                  href="#integrations"
                  className="hover:text-blue-400 transition-colors"
                >
                  Tài liệu API & Docs
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-blue-400 transition-colors"
                >
                  Hỏi đáp thường gặp (FAQ)
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="my-10 sm:my-14 text-center select-none overflow-hidden">
          <span
            className="block text-[13vw] sm:text-[14vw] font-black uppercase tracking-[0.14em] text-center leading-none text-transparent opacity-25"
            style={{
              WebkitTextStroke: "1.5px rgba(255, 255, 255, 0.25)",
              backgroundImage:
                "linear-gradient(180deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)",
              WebkitBackgroundClip: "text",
            }}
          >
            FOTECH
          </span>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-6 text-xs text-slate-400 sm:flex-row">
          <p>© {new Date().getFullYear()} FoTech JSC. All rights reserved.</p>

          <div className="flex items-center gap-6 font-medium text-slate-400">
            <a
              href="#security"
              className="hover:text-blue-400 transition-colors"
            >
              Bảo mật
            </a>
            <a href="#terms" className="hover:text-blue-400 transition-colors">
              Điều khoản dịch vụ
            </a>
            <a
              href="#privacy"
              className="hover:text-blue-400 transition-colors"
            >
              Chính sách bảo mật
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
