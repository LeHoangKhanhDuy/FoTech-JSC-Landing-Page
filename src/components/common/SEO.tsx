import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface SEOProps {
  title?: string;
  description?: string;
  ogDescription?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article" | "product";
  schema?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const DEFAULT_TITLE = "FoTech Solutions | Hệ sinh thái giải pháp công nghệ";
const DEFAULT_DESCRIPTION =
  "FoTech Solutions phát triển hệ sinh thái công nghệ gồm FoHRM, FoMed, FoCode và Troo.vn. Cung cấp giải pháp quản lý, chuyển đổi số và thiết kế website cho doanh nghiệp.";
const DEFAULT_KEYWORDS =
  "FoTech, FoHRM, Quản trị nhân sự AI, Chuyển đổi số doanh nghiệp, phần mềm tính lương tự động, ERP Việt Nam, FoMed, FoCode, Troo.vn, HR Tech 2026";
const BASE_URL = "https://www.fotech.solutions";
const DEFAULT_OG_IMAGE = `${BASE_URL}/fotech-og-image.png`;

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
  ogDescription = description,
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
    setMetaTag("name", "author", "FoTech Solutions");
    setMetaTag("name", "publisher", "FoTech Solutions");
    setCanonical(currentCanonical);

    setMetaTag("property", "og:title", title);
    setMetaTag("property", "og:description", ogDescription);
    setMetaTag("property", "og:url", currentCanonical);
    setMetaTag("property", "og:image", ogImage);
    setMetaTag(
      "property",
      "og:image:alt",
      "FoTech Solutions - Hệ sinh thái giải pháp công nghệ"
    );
    setMetaTag("property", "og:image:width", "1672");
    setMetaTag("property", "og:image:height", "941");
    setMetaTag("property", "og:type", ogType);
    setMetaTag("property", "og:site_name", "FoTech Solutions");
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
    } else {
      document.getElementById("page-seo-schema")?.remove();
    }
  }, [title, description, ogDescription, keywords, currentCanonical, ogImage, ogType, schema]);

  return null;
}
