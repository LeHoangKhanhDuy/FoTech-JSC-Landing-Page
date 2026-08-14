import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqList = [
  {
    question: 'FoHRM có đáp ứng 100% Luật Lao động Việt Nam năm 2026 không?',
    answer: 'Có. FoHRM được thiết kế dành riêng cho thị trường Việt Nam. Hệ thống tự động cập nhật các quy định mới nhất về lương tối thiểu vùng, khấu trừ bảo hiểm (BHXH, BHYT, BHTN), biểu thuế TNCN lũy tiến, chế độ thai sản, và quy định tăng ca OT.',
  },
  {
    question: 'Trợ lý AI (FINA) có thể giải đáp những câu hỏi nào của nhân viên?',
    answer: 'FINA hỗ trợ tiếng Việt tự nhiên, có thể trả lời tức thì các câu hỏi về quỹ phép còn lại, chính sách thưởng, quy trình đăng ký WFH/nghỉ mát, hoặc hướng dẫn đọc hiểu chi tiết từng khoản trong phiếu lương điện tử.',
  },
  {
    question: 'Tính năng kết nối Ngân hàng (Bank API) thanh toán lương vận hành như thế nào?',
    answer: 'Sau khi bảng lương được HR và Giám đốc phê duyệt, FoHRM kết nối trực tiếp với cổng API của các ngân hàng lớn (Vietcombank, MB Bank, Techcombank, VPBank) để thực hiện lệnh chi lương hàng loạt chỉ với 1-click.',
  },
  {
    question: 'Có thể tích hợp FoHRM với máy chấm công FaceID/Vân tay sẵn có của doanh nghiệp không?',
    answer: 'Có. FoHRM hỗ trợ kết nối API trực tiếp hoặc qua phần mềm đồng bộ dữ liệu với hầu hết các dòng máy chấm công FaceID, vân tay, thẻ từ phổ biến hiện nay.',
  },
  {
    question: 'Dữ liệu nhân sự của công ty chúng tôi được bảo mật ra sao?',
    answer: 'Tất cả dữ liệu được mã hóa chuẩn AES-256 bit cả khi lưu trữ lẫn trên đường truyền. Hệ thống tự động sao lưu dữ liệu 24/7, đạt chuẩn an toàn thông tin ISO 27001 và có nhật ký truy cập (Audit Logs) minh bạch.',
  },
  {
    question: 'Thời gian triển khai FoHRM cho doanh nghiệp khoảng bao lâu?',
    answer: 'Với doanh nghiệp nhỏ và vừa (dưới 100 nhân sự), thời gian cài đặt và đi vào sử dụng chỉ mất từ 15-30 phút. Đội ngũ CSM của FoHRM sẵn sàng hỗ trợ import dữ liệu từ file Excel có sẵn.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="resources" className="relative py-20 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/20 bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-600 dark:bg-blue-950/50 dark:text-blue-400">
            <HelpCircle className="h-3.5 w-3.5" aria-hidden="true" />
            Tài Nguyên & FAQ
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Câu Hỏi Thường Gặp Về FoHRM
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            Giải đáp thắc mắc chi tiết trước khi bạn bắt đầu 14 ngày dùng thử miễn phí.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mt-12 space-y-4">
          {faqList.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50/50 transition-all dark:border-slate-800 dark:bg-slate-900/60"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left font-bold text-slate-900 dark:text-white sm:p-6"
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-slate-500 transition-transform duration-200 dark:bg-slate-800 dark:text-slate-300 ${isOpen ? 'rotate-180 text-blue-600 dark:text-blue-400' : ''}`}>
                    <ChevronDown className="h-5 w-5" aria-hidden="true" />
                  </div>
                </button>

                {isOpen && (
                  <div className="border-t border-slate-200/60 px-5 pb-6 pt-3 text-sm leading-relaxed text-slate-600 dark:border-slate-800 dark:text-slate-300 sm:px-6">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
