import { Facebook, Linkedin, Mail, Phone, MapPin, Globe } from 'lucide-react';
import LogoMark from '@/components/layout/LogoMark';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white pt-16 pb-12 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-10 md:grid-cols-12">
          
          {/* Brand Info */}
          <div className="md:col-span-5">
            <LogoMark />
            <p className="mt-4 max-w-sm text-xs leading-relaxed text-slate-600 dark:text-slate-300 sm:text-sm">
              <strong>FoHRM (FoTech HR Management)</strong> là nền tảng quản trị nhân sự tích hợp AI toàn diện, giúp tự động hóa chấm công, tính lương và nâng tầm trải nghiệm nhân viên cho doanh nghiệp Việt Nam.
            </p>
            <div className="mt-6 space-y-2 text-xs text-slate-500 dark:text-slate-400">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-600" aria-hidden="true" />
                <span>Trụ sở: Tầng 8, Tòa nhà FoTech Building, TP. Hà Nội / TP. Hồ Chí Minh</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-600" aria-hidden="true" />
                <span>Hotline: 1900 6868 (8:00 - 18:00 T2-T7)</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-600" aria-hidden="true" />
                <span>Email: contact@fotech.vn | support@fohrm.vn</span>
              </p>
            </div>
          </div>

          {/* Quick Links Column 1 */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Sản Phẩm & Giải Pháp
            </h4>
            <ul className="mt-4 space-y-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <li><a href="#features" className="hover:text-blue-600 transition">Trợ lý AI Nhân sự (FINA)</a></li>
              <li><a href="#features" className="hover:text-blue-600 transition">Quản lý Công & Nghỉ phép</a></li>
              <li><a href="#features" className="hover:text-blue-600 transition">Lương & Phúc lợi (Payroll)</a></li>
              <li><a href="#features" className="hover:text-blue-600 transition">Cổng Nhân viên Self-Service</a></li>
              <li><a href="#solutions" className="hover:text-blue-600 transition">Giải pháp cho Chuỗi Bán lẻ</a></li>
              <li><a href="#solutions" className="hover:text-blue-600 transition">Giải pháp cho Nhà máy</a></li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Tài Nguyên
            </h4>
            <ul className="mt-4 space-y-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
              <li><a href="#pricing" className="hover:text-blue-600 transition">Bảng giá sản phẩm</a></li>
              <li><a href="#resources" className="hover:text-blue-600 transition">Hỏi đáp thường gặp (FAQ)</a></li>
              <li><a href="#why-fohrm" className="hover:text-blue-600 transition">Bảo mật & Tuân thủ Luật LĐ</a></li>
              <li><a href="#hero" className="hover:text-blue-600 transition">Đăng ký Demo 1:1</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Kết Nối
            </h4>
            <div className="mt-4 flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook FoHRM"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:text-slate-300"
              >
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn FoHRM"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:text-slate-300"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:contact@fohrm.vn"
                aria-label="Email FoHRM"
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-blue-500 hover:text-blue-600 dark:border-slate-800 dark:text-slate-300"
              >
                <Globe className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-100 pt-6 text-center text-xs text-slate-500 dark:border-slate-800/80 dark:text-slate-400">
          <p>© 2026 FoHRM by FoTech JSC. Tất cả quyền được bảo lưu. Tuân thủ 100% Luật Lao động Việt Nam.</p>
        </div>

      </div>
    </footer>
  );
}
