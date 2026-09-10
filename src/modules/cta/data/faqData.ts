import { FAQItemData, FAQSectionData } from "@/modules/cta/types/faqTypes";

export const faqItems: FAQItemData[] = [
  {
    id: "faq-1",
    question: "Doanh nghiệp của chúng tôi có thể bắt đầu triển khai nhanh như thế nào?",
    answer:
      "Hầu hết các doanh nghiệp có thể hoàn tất khởi tạo và bắt đầu vận hành trong vòng 24 - 48 giờ. Đội ngũ kỹ sư của FoTech sẽ trực tiếp đồng hành khảo sát, kết nối hệ thống, chuyển giao dữ liệu và đào tạo nhân sự trọn gói.",
  },
  {
    id: "faq-2",
    question: "Hệ sinh thái FoTech hỗ trợ những tích hợp nào?",
    answer:
      "FoTech hỗ trợ tích hợp mở qua API với các hệ thống phổ biến: máy chấm công AI/FaceID, cổng thanh toán (VNPay, ZaloPay, MoMo, thẻ quốc tế), hóa đơn điện tử, thông báo Zalo ZNS, Telegram Bot và các phần mềm ERP kế toán hiện có.",
  },
  {
    id: "faq-3",
    question: "Tất cả các gói dịch vụ có bao gồm hỗ trợ chuyên gia trực tiếp không?",
    answer:
      "Chắc chắn có. FoTech cam kết chuẩn SLA phản hồi dưới 15 phút với đội ngũ hỗ trợ kỹ thuật tận tâm 24/7 qua hotline và nhóm hỗ trợ riêng biệt (Zalo/Telegram). Đối với khách hàng Enterprise, chúng tôi hỗ trợ kỹ thuật On-site trực tiếp tại văn phòng.",
  },
  {
    id: "faq-4",
    question: "Có yêu cầu quy mô nhân sự tối thiểu để áp dụng không?",
    answer:
      "Hoàn toàn không có giới hạn tối thiểu. Dù doanh nghiệp của bạn là nhóm khởi nghiệp từ 5 - 10 người hay chuỗi tập đoàn trên 5.000 nhân sự, kiến trúc Cloud-native của FoTech đều mở rộng mượt mà và tối ưu chi phí theo đúng nhu cầu sử dụng.",
  },
  {
    id: "faq-5",
    question: "Hình thức dùng thử và chu kỳ thanh toán được quy định ra sao?",
    answer:
      "Chúng tôi cung cấp gói trải nghiệm thử miễn phí lên đến 14 ngày đầy đủ tính năng để doanh nghiệp đánh giá thực tế. Doanh nghiệp có thể linh hoạt chọn thanh toán theo tháng hoặc theo năm với chiết khấu ưu đãi và xuất hóa đơn VAT đầy đủ.",
  },
  {
    id: "faq-6",
    question: "Nếu doanh nghiệp có quy trình đặc thù, FoTech có nhận may đo (Customize) không?",
    answer:
      "Đây là năng lực cốt lõi của FoTech. Đội ngũ kỹ sư R&D sẵn sàng khảo sát bài toán thực tế và lập trình các module tính năng may đo (Customization) tích hợp sâu vào hệ thống gốc, đáp ứng chuẩn xác 100% nghiệp vụ của doanh nghiệp bạn.",
  },
];

export const englishFaqItems: FAQItemData[] = [
  {
    id: "faq-en-1",
    question: "How quickly can my team get started?",
    answer:
      "Most teams are up and running in under an hour. Sign up, connect your workspace, and import your data, we'll handle the rest.",
  },
  {
    id: "faq-en-2",
    question: "What integrations do you offer?",
    answer:
      "We integrate with all major platforms including FaceID timekeeping, payment gateways (VNPay, ZaloPay, MoMo), e-invoicing, Zalo ZNS, Telegram, and accounting ERPs via secure Open APIs.",
  },
  {
    id: "faq-en-3",
    question: "Does every plan include human support?",
    answer:
      "Yes, 24/7 dedicated human support is included across all plans with an SLA under 15 minutes, plus on-site engineering support for Enterprise tiers.",
  },
  {
    id: "faq-en-4",
    question: "Is there a minimum team size?",
    answer:
      "No minimum team size required. Whether you're a team of 5 or 5,000+, our cloud-native platform scales seamlessly with your business needs.",
  },
  {
    id: "faq-en-5",
    question: "Which currencies and billing cycles are supported?",
    answer:
      "We support VND, USD, and major currencies with flexible monthly and annual billing cycles, accompanied by official VAT electronic invoices.",
  },
  {
    id: "faq-en-6",
    question: "Can I switch between monthly and annual billing?",
    answer:
      "Yes, you can upgrade, downgrade, or switch between billing cycles anytime from your account dashboard with prorated adjustments.",
  },
];

export const faqData: FAQSectionData = {
  title: "Các câu hỏi thường gặp",
  subtitle: "Bạn không tìm thấy điều mình đang tìm kiếm?",
  ctaText: "Liên hệ chúng tôi",
  items: faqItems,
  badge: "HỖ TRỢ & GIẢI ĐÁP",
  description:
    "Các câu hỏi dưới đây giải đáp những thắc mắc cơ bản nhất. Đối với yêu cầu tư vấn lộ trình chuyển đổi số, báo giá Enterprise hay kiểm tra bảo mật, hãy gửi thông tin để đội ngũ FoTech đồng hành cùng bạn.",
  stats: [
    {
      value: "15p",
      label: "Thời gian phản hồi",
    },
    {
      value: "99.8%",
      label: "Hài lòng",
    },
  ],
  buttonText: "Gửi yêu cầu tư vấn",
  column1: faqItems.slice(0, 3),
  column2: faqItems.slice(3, 6),
};
