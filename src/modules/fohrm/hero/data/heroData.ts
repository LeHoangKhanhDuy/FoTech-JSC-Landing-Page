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
  { id: "reactjs", name: "React.js", highlight: true },
  { id: "typescript", name: "TypeScript" },
  { id: "c#", name: "C#" },
  { id: "asp", name: "ASP.NET Core" },
  { id: "laravel", name: "Laravel" },
  { id: "finaai", name: "FINA AI", highlight: true },
  { id: "php", name: "PHP" },
  { id: "docker", name: "Docker" },
  { id: "azure", name: "Azure" },
  { id: "sqlserver", name: "SQL Server" },
  { id: "tailwind", name: "Tailwind CSS" },
  { id: "nextjs", name: "Next.js" },
];
