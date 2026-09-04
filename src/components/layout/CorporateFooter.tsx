import { Link } from "react-router-dom";
import { Linkedin, Facebook } from "lucide-react";

interface FooterLink {
  label: string;
  href?: string;
  to?: string;
  badge?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const FOOTER_SECTIONS: FooterSection[] = [
  {
    title: "Công ty",
    links: [
      { label: "Về FoTech", href: "#why-trust" },
      { label: "Tuyển dụng", href: "#careers", badge: "WE'RE HIRING" },
    ],
  },
  {
    title: "Liên hệ",
    links: [
      { label: "Hotline: 1900 xxxx", href: "tel:1900xxxx" },
      { label: "Email: hi@fotech.vn", href: "mailto:hi@fotech.vn" },
      { label: "Trụ sở chính: TP. Hồ Chí Minh", href: "#contact" },
    ],
  },
  {
    title: "Sản phẩm",
    links: [
      { label: "Thiết kế website", href: "#" },
      { label: "FoHRM (Quản trị Nhân sự)", to: "/fohrm" },
      { label: "Troo.vn (Tìm & Quản lý Trọ)", href: "#troovn" },
      { label: "FoMed (Quản lý Phòng khám)", href: "#fomed" },
      { label: "FoCode (Sàn TMĐT)", href: "#focode" },
    ],
  },
  {
    title: "Tài nguyên",
    links: [
      { label: "Câu chuyện khách hàng", href: "#why-trust" },
      { label: "Tài liệu API & Docs", href: "#integrations" },
      { label: "Hỏi đáp (FAQ)", href: "#faq" },
    ],
  },
];

export default function CorporateFooter() {
  return (
    <footer
      id="contact"
      className="relative bg-[#020817] pt-10 pb-10 sm:pb-14 overflow-hidden"
    >
      <div className="mx-auto max-w-8xl px-3 sm:px-6 lg:px-8">
        <div className="relative rounded-[36px] sm:rounded-[48px] lg:rounded-[56px] bg-blue-600 text-white pt-14 sm:pt-16 px-6 sm:px-10 lg:px-14 shadow-2xl overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.18),transparent_70%)]"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4 space-y-5">
              <p className="max-w-sm text-sm leading-relaxed text-blue-50">
                <strong className="text-white font-extrabold text-lg uppercase">
                  FoTech
                </strong>{" "}
                là giải pháp chuyển đổi số B2B hiện đại & trực quan giúp tối ưu
                vận hành doanh nghiệp.
              </p>

              <div className="flex items-center gap-2.5 pt-1">
                {[
                  {
                    icon: Facebook,
                    href: "https://www.facebook.com/fotechvn",
                    label: "Facebook",
                  },
                  {
                    icon: Linkedin,
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${social.label} FoTech`}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white hover:bg-white hover:text-blue-600 transition-all duration-300 shadow-sm"
                  >
                    <social.icon className="h-4 w-4" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {FOOTER_SECTIONS.map((section, idx) => (
              <div key={idx} className="lg:col-span-2">
                <h4 className="text-md font-bold uppercase tracking-wider text-white">
                  {section.title}
                </h4>
                <ul className="mt-4 space-y-2.5 text-xs sm:text-sm font-medium text-blue-100">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="flex items-center">
                      {link.to ? (
                        <Link
                          to={link.to}
                          className="hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href || "#"}
                          className="hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      )}
                      {link.badge && (
                        <span className="ml-2.5 px-2 py-0.5 text-[10px] font-extrabold uppercase rounded-full bg-white/20 text-white border border-white/30">
                          {link.badge}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 overflow-hidden h-[10.5vw] sm:h-[11.5vw] flex items-start justify-center select-none pointer-events-none -mb-px">
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

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/20 py-6 text-xs text-blue-100/90 sm:flex-row">
            <p>© {new Date().getFullYear()} FoTech JSC. All rights reserved.</p>

            <div className="flex items-center gap-6 font-medium text-blue-100/90">
              {["Bảo mật", "Điều khoản dịch vụ", "Chính sách bảo mật"].map(
                (text, i) => (
                  <a
                    key={i}
                    href="#"
                    className="hover:text-white transition-colors"
                  >
                    {text}
                  </a>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
