import { Facebook, Linkedin, Mail } from 'lucide-react';
import LogoMark from '@/components/common/LogoMark';

const links = ['Chính sách', 'Điều khoản', 'Liên hệ', 'Facebook', 'LinkedIn'];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-white px-4 py-12 dark:border-slate-800 dark:bg-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <LogoMark />
          <p className="mt-5 max-w-md text-sm leading-6 text-slate-600 dark:text-slate-300">
            FoTalent AI là sản phẩm của FoTech, giúp doanh nghiệp vận hành nhân sự thông minh hơn với AI Assistant FINA.
          </p>
          <div className="mt-6 flex gap-3">
            {[Facebook, Linkedin, Mail].map((Icon, index) => (
              <a
                key={index}
                href="#contact"
                aria-label="Kênh liên hệ FoTalent AI"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:border-[#1972F5] hover:text-[#1972F5] dark:border-slate-800 dark:text-slate-300"
              >
                <Icon className="h-5 w-5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {links.map((link) => (
            <a
              key={link}
              href="#contact"
              className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-[#1972F5] dark:text-slate-300 dark:hover:bg-slate-900"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-10 max-w-7xl text-sm text-slate-500 dark:text-slate-400">
        © 2026 FoTech. All rights reserved.
      </p>
    </footer>
  );
}
