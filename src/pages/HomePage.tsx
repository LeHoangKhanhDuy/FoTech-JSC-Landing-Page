import CorporateNavbar from "@/components/layout/CorporateNavbar";
import Hero from "@/modules/fohrm/hero/components";
import FeaturesSection from "@/components/sections/fohrm/FeaturesSection";
import BenefitsSection from "@/components/sections/fohrm/BenefitsSection";
import SolutionSection from "@/components/sections/fohrm/SolutionSection";
import PricingSection from "@/components/sections/fohrm/PricingSection";
import FaqSection from "@/components/sections/fohrm/FaqSection";
import CorporateFooter from "@/components/layout/CorporateFooter";
import CtaSection from "@/modules/cta/components/CtaSection";
import SEO from "@/components/common/SEO";

const fohrmSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      "@id": "https://fotech.vn/fohrm#software",
      name: "FoHRM - Hệ sinh thái Quản trị Nhân sự & Tính lương AI",
      operatingSystem: "Web, iOS, Android, Cloud-based",
      applicationCategory: "BusinessApplication",
      offers: {
        "@type": "AggregateOffer",
        priceCurrency: "VND",
        lowPrice: "0",
        highPrice: "99000",
        offerCount: "3",
        description: "Gói Khởi nghiệp, Doanh nghiệp Tăng trưởng và Enterprise",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "1280",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Trang chủ",
          item: "https://fotech.vn/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "FoHRM AI",
          item: "https://fotech.vn/fohrm",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "FoHRM có đáp ứng 100% Luật Lao động Việt Nam năm 2026 không?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Có. FoHRM được thiết kế dành riêng cho thị trường Việt Nam. Hệ thống tự động cập nhật các quy định mới nhất về lương tối thiểu vùng, khấu trừ bảo hiểm (BHXH, BHYT, BHTN), biểu thuế TNCN lũy tiến, chế độ thai sản, và quy định tăng ca OT.",
          },
        },
        {
          "@type": "Question",
          name: "Trợ lý AI (FINA) có thể giải đáp những câu hỏi nào của nhân viên?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "FINA hỗ trợ tiếng Việt tự nhiên, có thể trả lời tức thì các câu hỏi về quỹ phép còn lại, chính sách thưởng, quy trình đăng ký WFH/nghỉ mát, hoặc hướng dẫn đọc hiểu chi tiết từng khoản trong phiếu lương điện tử.",
          },
        },
        {
          "@type": "Question",
          name: "Tính năng kết nối Ngân hàng (Bank API) thanh toán lương vận hành như thế nào?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sau khi bảng lương được HR và Giám đốc phê duyệt, FoHRM kết nối trực tiếp với cổng API của các ngân hàng lớn (Vietcombank, MB Bank, Techcombank, VPBank) để thực hiện lệnh chi lương hàng loạt chỉ với 1-click.",
          },
        },
        {
          "@type": "Question",
          name: "Có thể tích hợp FoHRM với máy chấm công FaceID/Vân tay sẵn có của doanh nghiệp không?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Có. FoHRM hỗ trợ kết nối API trực tiếp hoặc qua phần mềm đồng bộ dữ liệu với hầu hết các dòng máy chấm công FaceID, vân tay, thẻ từ phổ biến hiện nay.",
          },
        },
        {
          "@type": "Question",
          name: "Dữ liệu nhân sự của công ty chúng tôi được bảo mật ra sao?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Tất cả dữ liệu được mã hóa chuẩn AES-256 bit cả khi lưu trữ lẫn trên đường truyền. Hệ thống tự động sao lưu dữ liệu 24/7, đạt chuẩn an toàn thông tin ISO 27001 và có nhật ký truy cập (Audit Logs) minh bạch.",
          },
        },
        {
          "@type": "Question",
          name: "Thời gian triển khai FoHRM cho doanh nghiệp khoảng bao lâu?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Với doanh nghiệp nhỏ và vừa (dưới 100 nhân sự), thời gian cài đặt và đi vào sử dụng chỉ mất từ 15-30 phút. Đội ngũ CSM của FoHRM sẵn sàng hỗ trợ import dữ liệu từ file Excel có sẵn.",
          },
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#020817] text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
      <SEO
        title="FoHRM - Phần mềm Quản trị Nhân sự & Tính lương Tự động AI 2026"
        description="Giải pháp quản lý nhân sự HRM thông minh tích hợp trợ lý AI FINA, chấm công FaceID đa điểm, tính lương tự động 1-click, chi lương Bank API và tuân thủ 100% Luật lao động Việt Nam 2026."
        keywords="FoHRM, phần mềm quản lý nhân sự AI, tính lương tự động, chấm công FaceID, trợ lý ảo HR FINA, Bank API chi lương, phần mềm HRM tốt nhất 2026"
        canonical="https://fotech.vn/fohrm"
        schema={fohrmSchema}
      />
      <CorporateNavbar />
      <main>
        <Hero />
        <FeaturesSection />
        <BenefitsSection />
        <SolutionSection />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>
      <CorporateFooter />
    </div>
  );
}
