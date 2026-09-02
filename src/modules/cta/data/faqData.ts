import { FAQSectionData } from '@/modules/cta/types/faqTypes';

export const faqData: FAQSectionData = {
  badge: 'HỖ TRỢ & GIẢI ĐÁP',
  title: 'Questions that need a human?',
  description:
    'Các câu hỏi dưới đây giải đáp những thắc mắc cơ bản. Đối với yêu cầu tư vấn triển khai, báo giá hay kiểm tra bảo mật, hãy gửi thông tin để đội ngũ FoTech hỗ trợ trực tiếp.',
  stats: [
    {
      value: '< 15p',
      label: 'Thời gian phản hồi TB',
    },
    {
      value: '99.8%',
      label: 'Hài lòng CSAT',
    },
  ],
  buttonText: 'Gửi yêu cầu hỗ trợ',
  availabilityNote: 'Hỗ trợ 24/7 | T2 – CN trên toàn quốc.',
  column1: [
    {
      id: 'faq-1',
      question: 'Can you help us plan the rollout?',
      answer:
        'Có. Đội ngũ chuyên gia FoTech sẽ khảo sát quy trình hiện tại, lập roadmap triển khai theo từng giai đoạn (Pilot group, quy mô phòng ban và mở rộng toàn doanh nghiệp) kèm hỗ trợ 1-1.',
    },
    {
      id: 'faq-2',
      question: 'How does procurement usually go?',
      answer:
        'Quy trình minh bạch và nhanh chóng: Đăng ký tư vấn -> Nhận báo giá & Dùng thử miễn phí -> Ký kết hợp đồng điện tử -> Bàn giao & Đào tạo.',
    },
    {
      id: 'faq-3',
      question: 'Do you run training for new teams?',
      answer:
        'Chúng tôi cung cấp tài liệu hướng dẫn, video walkthrough chi tiết và các buổi Training trực tiếp miễn phí cho nhân sự mới của doanh nghiệp.',
    },
    {
      id: 'faq-4',
      question: 'What does priority support include?',
      answer:
        'Cam kết SLA phản hồi dưới 15 phút, kênh hỗ trợ riêng 24/7, chuyên viên tư vấn riêng và ưu tiên cập nhật tính năng mới.',
    },
  ],
  column2: [
    {
      id: 'faq-5',
      question: 'Can we start before contracts are signed?',
      answer:
        'Có. FoTech cung cấp gói dùng thử 14 ngày đầy đủ tính năng để doanh nghiệp trải nghiệm thực tế trước khi ra quyết định ký kết.',
    },
    {
      id: 'faq-6',
      question: 'Is there an implementation partner network?',
      answer:
        'Chúng tôi có mạng lưới đối tác kỹ thuật và chi nhánh hỗ trợ tại Hà Nội, TP. Hồ Chí Minh, Đà Nẵng và sẵn sàng hỗ trợ on-site.',
    },
    {
      id: 'faq-7',
      question: 'How are feature requests handled?',
      answer:
        'Đội ngũ R&D FoTech tiếp nhận yêu cầu, đánh giá tính khả thi và phát triển module riêng phù hợp theo bài toán của từng doanh nghiệp.',
    },
    {
      id: 'faq-8',
      question: 'What if we outgrow our current plan?',
      answer:
        'Hệ thống linh hoạt hỗ trợ nâng cấp dung lượng và mở rộng tài khoản tức thì mà không gián đoạn dữ liệu vận hành.',
    },
  ],
};
