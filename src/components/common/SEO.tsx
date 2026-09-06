import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const DEFAULT_TITLE = "FoTech - Nền tảng Chuyển đổi số & Quản trị Doanh nghiệp AI Hàng Đầu";
const DEFAULT_DESCRIPTION =
  "Hệ sinh thái giải pháp số toàn diện từ FoTech bao gồm FoHRM (Quản trị Nhân sự & Tính lương AI), FoMed (Quản lý Phòng khám), FoCode (Thương mại Điện tử) và Troo.vn (PropTech thông minh). Tối ưu hóa vận hành, tự động hóa quy trình cho doanh nghiệp Việt Nam.";
const DEFAULT_KEYWORDS =
  "FoTech, FoHRM, Quản trị nhân sự AI, Chuyển đổi số doanh nghiệp, phần mềm tính lương tự động, ERP Việt Nam, FoMed, FoCode, Troo.vn, HR Tech 2026";
const BASE_URL = "https://fotech.vn";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.png`;

function setMetaTag(nameOrProperty: "name" | "property", key: string, content: string) {
  let element = document.querySelector(`meta[${nameOrProperty}="${key}"]`);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(nameOrProperty, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

function setCanonical(href: string) {
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  schema,
}: SEOProps) {
  const location = useLocation();
  const currentCanonical =
    canonical || `${BASE_URL}${location.pathname === "/" ? "" : location.pathname}`;

  useEffect(() => {
    document.title = title;
    setMetaTag("name", "description", description);
    setMetaTag("name", "keywords", keywords);
    setMetaTag(
      "name",
      "robots",
      "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    );
    setMetaTag("name", "author", "Công ty Cổ phần Công nghệ FoTech");
    setMetaTag("name", "publisher", "FoTech JSC");
    setCanonical(currentCanonical);

    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", description);
    setMetaTag("property", "og:url", currentCanonical);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", "FoTech Ecosystem");
    setMetaTag("property", "og:locale", "vi_VN");

    setMetaTag("name", "twitter:card", "summary_large_image");
    setMetaTag("name", "twitter:title", title);
    setMetaTag("name", "twitter:description", description);
    setMetaTag("name", "twitter:image", ogImage);

    if (schema) {
      let script = document.getElementById("page-seo-schema") as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = "page-seo-schema";
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }
      script.text = JSON.stringify(schema);
    }
  }, [title, description, keywords, currentCanonical, ogImage, ogType, schema]);

  return null;
}
