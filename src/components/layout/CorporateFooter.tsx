import { Facebook, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import CorporateLogoMark from "@/components/layout/CorporateLogoMark";

export default function CorporateFooter() {
  return (
    <footer
      id="contact"
      className="border-t border-slate-200 bg-white pt-16 pb-12 dark:border-slate-800 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <CorporateLogoMark />
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
              <strong>FoTech</strong> Nền tảng chuyển đổi số B2B tích hợp AI
              toàn diện cho doanh nghiệp Việt Nam.
            </p>

            <div className="mt-6 space-y-2 text-xs text-slate-500 dark:text-slate-400">
              {/* <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600 shrink-0" aria-hidden="true" />
                <span>Trụ sở chính: Tầng 8, Tòa nhà FoTech Building, TP. Hà Nội / TP. Hồ Chí Minh</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600 shrink-0" aria-hidden="true" />
                <span>Tổng đài tư vấn: 1900 6868 (8:00 - 18:00 T2-T7)</span>
              </p> */}
              <p className="flex items-center gap-2">
                <Mail
                  className="h-4 w-4 text-blue-600 shrink-0"
                  aria-hidden="true"
                />
                <span>Email: contact@fotech.vn | sales@fotech.vn</span>
              </p>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Về chúng tôi
            </h4>
            <ul className="mt-4 space-y-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <li>
                <a href="#why-trust" className="hover:text-blue-600 transition">
                  Đội ngũ FoTech
                </a>
              </li>
              {/* <li>
                <a href="#careers" className="hover:text-blue-600 transition">
                  Tuyển dụng (We are hiring!)
                </a>
              </li> */}
              <li>
                <a href="#news" className="hover:text-blue-600 transition">
                  Tin tức & Sự kiện
                </a>
              </li>
              <li>
                <a href="#contact&support" className="hover:text-blue-600 transition">
                  Liên hệ & Hỗ trợ
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Sản Phẩm
            </h4>
            <ul className="mt-4 space-y-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <li>
                <Link to="/fohrm" className="hover:text-blue-600 transition">
                  FoHRM (Quản trị Nhân sự)
                </Link>
              </li>
              <li>
                <a href="#troovn" className="hover:text-blue-600 transition">
                  Troo.vn (Quản lý & Tìm kiếm Trọ)
                </a>
              </li>
              <li>
                <a href="#fomed" className="hover:text-blue-600 transition">
                  FoMed (Quản lý Phòng khám)
                </a>
              </li>
              <li>
                <a href="#focode" className="hover:text-blue-600 transition">
                  FoCode (Thương mại Điện tử)
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Tài Nguyên
            </h4>
            <ul className="mt-4 space-y-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <li>
                <a href="#docs" className="hover:text-blue-600 transition">
                  Tài liệu API Kỹ thuật
                </a>
              </li>
              <li>
                <a href="#help" className="hover:text-blue-600 transition">
                  Hướng dẫn sử dụng
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Pháp Lý & Bảo Mật
            </h4>
            <ul className="mt-4 space-y-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <li>
                <a href="#terms" className="hover:text-blue-600 transition">
                  Điều khoản dịch vụ
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-blue-600 transition">
                  Chính sách bảo mật
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-6 text-center dark:border-slate-800/80 md:flex-row md:text-left">
          <p className="text-xs text-slate-500 dark:text-slate-400">
            © 2026 FoTech JSC. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook FoTech"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:text-slate-300"
            >
              <Facebook className="h-4 w-4" aria-hidden="true" />
            </a>
            {/* <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn FoTech"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:text-slate-300"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
