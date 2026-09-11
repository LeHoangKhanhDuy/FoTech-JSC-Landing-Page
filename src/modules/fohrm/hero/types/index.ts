export interface HeroRatingData {
  score: string;
  maxScore: string;
  reviewCount: string;
  linkText: string;
  linkHref: string;
}

export interface HeroTrustItem {
  id: string;
  text: string;
}

export interface HeroPartnerLogo {
  id: string;
  name: string;
  highlight?: boolean;
}

export interface FoHrmHeroProps {
  className?: string;
  defaultEmail?: string;
}
