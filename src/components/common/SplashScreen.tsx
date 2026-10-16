import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import FoTechLogo from "@/assets/fotech/FoTech_Logo.png";
import FoMedLogo from "@/assets/fomed/FoMed_Logo.png";

const STORAGE_KEY = "fotech_splash_seen";
const DURATION_MS = 3000;
const FADE_OUT_MS = 350;

export default function SplashScreen() {
  const { pathname } = useLocation();
  const isFoMedPage = pathname === "/app/fomed" || pathname.startsWith("/app/fomed/");
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    const params = new URLSearchParams(window.location.search);
    if (params.get("splash") === "1" || params.get("splash") === "true") {
      return true;
    }
    return !sessionStorage.getItem(STORAGE_KEY);
  });

  const [isFadingOut, setIsFadingOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const progressTimer = setTimeout(() => setProgress(100), 50);
    const fadeTimer = setTimeout(() => setIsFadingOut(true), DURATION_MS);
    const closeTimer = setTimeout(() => {
      try {
        sessionStorage.setItem(STORAGE_KEY, "true");
      } catch {
        // Bỏ qua lỗi khi trình duyệt ở chế độ ẩn danh (Private Mode)
      }
      setIsVisible(false);
      document.body.style.overflow = originalOverflow;
    }, DURATION_MS + FADE_OUT_MS);

    return () => {
      clearTimeout(progressTimer);
      clearTimeout(fadeTimer);
      clearTimeout(closeTimer);
      document.body.style.overflow = originalOverflow;
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Loading splash screen"
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[99999] flex select-none flex-col items-center justify-center transition-opacity duration-300 ease-out ${
        isFoMedPage ? "bg-[#F4FBF9]" : "bg-white dark:bg-[#020817]"
      } ${
        isFadingOut ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative z-10 flex flex-col items-center">
        <div className="flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24">
          <img
            src={isFoMedPage ? FoMedLogo : FoTechLogo}
            alt={isFoMedPage ? "FoMed Logo" : "FoTech Logo"}
            className="h-full w-full object-contain"
          />
        </div>

        <div className="mt-8 flex flex-col items-center">
          <div
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
            className={`relative h-1 w-44 overflow-hidden rounded-full sm:w-56 ${
              isFoMedPage ? "bg-[#D1FAE5]" : "bg-slate-100 dark:bg-slate-800"
            }`}
          >
            <div
              className={`h-full rounded-full transition-all ease-linear ${
                isFoMedPage ? "bg-[#047857]" : "bg-blue-600 dark:bg-blue-500"
              }`}
              style={{
                width: `${progress}%`,
                transitionDuration: `${DURATION_MS}ms`,
              }}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}
