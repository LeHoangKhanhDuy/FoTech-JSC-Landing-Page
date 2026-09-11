import { PricingSectionData } from "@/modules/fohrm/pricing/types/pricingTypes";

export const pricingData: PricingSectionData = {
  badge: "BẢNG GIÁ MINH BẠCH",
  title: "Linh Hoạt Theo Quy Mô Doanh Nghiệp",
  subtitle:
    "Không chi phí ẩn. Chọn gói giải pháp phù hợp hôm nay và mở rộng theo tốc độ phát triển của bạn.",
  freeTrial: {
    title: "Dùng thử miễn phí",
    badge: "14 NGÀY",
    infoText: "14 ngày trải nghiệm trọn gói tính năng, không cần thẻ tín dụng",
    buttonText: "Bắt đầu ngay",
    modalType: "trial",
  },
  plans: [
    {
      id: "starter",
      name: "Gói cơ bản",
      badge: "Cá nhân & Đội nhóm",
      description:
        "Phù hợp cho cửa hàng F&B, Retail hoặc Startup bắt đầu chuẩn hóa chấm công và đơn từ tự động.",
      monthlyPrice: "29.000đ",
      annualPrice: "230.000đ",
      period: "/nhân sự /tháng",
      annualPeriod: "/nhân sự /năm",
      features: [
        "Sẵn 10 tài khoản nhân sự đầu tiên",
        "Chấm công GPS đa điểm",
        "Quản lý đơn từ & Quỹ phép năm tự động",
        "Bảng công linh hoạt cho nhân viên part-time / ca xoay",
        "Cổng thông tin nhân viên (Self-Service Web & App)",
      ],
      highlighted: false,
      hasToggle: true,
      buttonText: "Dùng Thử Starter",
      modalType: "trial",
    },
    {
      id: "growth",
      name: "Gói Nổi Bật",
      badge: "Phổ biến nhất",
      description:
        "Giải pháp tự động hóa toàn diện C&B, tính lương đa ca kíp và tích hợp ngân hàng cho doanh nghiệp đang mở rộng.",
      monthlyPrice: "49.000đ",
      annualPrice: "468.000đ",
      period: "/nhân sự /tháng",
      annualPeriod: "/nhân sự /năm",
      subfeaturesHeading: "Tất cả tính năng của gói Starter, cộng thêm:",
      features: [
        "Tính lương Payroll tự động 100%",
        "Trợ lý AI FINA hỗ trợ nhân sự 24/7",
        "Tích hợp Ngân hàng chi lương Bank API 1-click",
        "Khấu trừ BHXH & Thuế TNCN lũy tiến 2026",
      ],
      highlighted: true,
      hasToggle: true,
      buttonText: "Chọn Gói Growth",
      modalType: "trial",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      badge: "Tập đoàn & Chuỗi",
      description:
        "Dành cho tập đoàn đa chi nhánh, nhiều nhà máy cần hạ tầng riêng biệt.",
      monthlyPrice: "Liên hệ",
      annualPrice: "Liên hệ",
      period: "Báo giá theo quy mô",
      features: [
        "Không giới hạn quy mô số lượng nhân sự",
        "Phân quyền RBAC Multi-level chi tiết",
        "Tích hợp máy chấm công FaceID sẵn có",
        "Cam kết Uptime SLA 99.99% & Hỗ trợ 24/7",
      ],
      highlighted: false,
      hasToggle: false,
      buttonText: "Đặt Lịch Tư Vấn",
      modalType: "consulting",
    },
  ],
};
