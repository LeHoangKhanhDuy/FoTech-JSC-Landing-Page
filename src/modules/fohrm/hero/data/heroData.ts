import { HeroRatingData, HeroTrustItem, HeroPartnerLogo } from "../types";

export const HERO_RATING: HeroRatingData = {
  score: "5.0",
  maxScore: "5.0",
  reviewCount: "1.200+ đánh giá",
  linkText: "Tại sao nên chọn FoHRM",
  linkHref: "#features",
};

export const HERO_TRUST_ITEMS: HeroTrustItem[] = [
  { id: "trial", text: "14 ngày dùng thử miễn phí" },
  { id: "no-card", text: "Không cần thẻ tín dụng" },
  { id: "setup", text: "Triển khai trong 5 phút" },
];

export const HERO_PARTNER_LOGOS: HeroPartnerLogo[] = [
  { id: "fotech", name: "FoTech", highlight: true },
  { id: "focode", name: "FoCode" },
  { id: "fopos", name: "FoPOS" },
  { id: "fomed", name: "FoMed" },
  { id: "foedu", name: "FoEdu" },
  { id: "fina", name: "FINA AI", highlight: true },
  { id: "techcombank", name: "Techcombank" },
  { id: "mbbank", name: "MB Bank" },
  { id: "vietcombank", name: "Vietcombank" },
  { id: "vng", name: "VNG Cloud" },
  { id: "fpt", name: "FPT Telecom" },
  { id: "viettel", name: "Viettel Solutions" },
];
