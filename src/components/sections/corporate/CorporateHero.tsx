import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Layers,
} from "lucide-react";
import Button from '@/components/ui/Button';
import LeadModal from '@/components/ui/LeadModal';
import IntroFoTech from '@/assets/Intro_FoTech.mp4';

export default function CorporateHero() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "trial" | "login" | "consulting";
  }>({ isOpen: false, type: "consulting" });

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openModal = (type: "demo" | "consulting") => {
    setModalState({ isOpen: true, type });
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-28 bg-white dark:bg-slate-950"
    >
      {/* Background Radial Glow & Grid Overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.14),rgba(255,255,255,0))]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.07),transparent_70%)]" />

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        {/* 2-Column Side-by-Side Layout (Jumpshare Style) */}
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Text Content & CTAs (5.5 / 12 cols) */}
          <div className="lg:col-span-5 text-left animate-fade-in-up">

            {/* Headline */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-5xl leading-[1.12]">
              Hệ sinh thái Giải pháp số {""}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
                toàn diện
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg max-w-xl">
              Cung cấp các nền tảng phần mềm mạnh mẽ, tích hợp AI, giúp doanh
              nghiệp tối ưu vận hành, từ quản trị nhân sự đến quản lý y tế.
            </p>

            {/* CTA Buttons Side-by-Side */}
            <div className="mt-8 flex flex-col items-stretch sm:flex-row sm:items-center gap-3.5">
              <Button
                variant="primary"
                size="lg"
                onClick={() => {
                  const elem = document.getElementById("ecosystem");
                  elem?.scrollIntoView({ behavior: "smooth" });
                }}
                icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl shadow-indigo-500/25 px-7"
              >
                Khám phá Hệ sinh thái
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => openModal("demo")}
                icon={
                  <Play
                    className="h-4 w-4 fill-current text-indigo-600"
                    aria-hidden="true"
                  />
                }
                className="px-7"
              >
                Lịch trình Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2
                    className="h-4 w-4 text-emerald-500"
                    aria-hidden="true"
                  />
                  Đồng bộ SSO 1 tài khoản
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2
                    className="h-4 w-4 text-emerald-500"
                    aria-hidden="true"
                  />
                  Đám mây AWS SLA 99.99%
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck
                    className="h-4 w-4 text-indigo-600 dark:text-indigo-400"
                    aria-hidden="true"
                  />
                  Bảo mật ISO 27001
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Jumpshare Style macOS Video Mockup (7 / 12 cols) */}
          <div
            className="lg:col-span-7 relative animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            {/* Glowing Radial Background */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-emerald-500/20 blur-3xl opacity-70 dark:opacity-60 -z-10 animate-pulse-glow" />

            {/* macOS Browser Window Frame Wrapper */}
            <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-slate-200/80 bg-slate-900 shadow-2xl shadow-indigo-900/15 dark:border-slate-800 dark:shadow-black/70">
              {/* macOS Top Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-3 backdrop-blur-md">
                {/* Colored Dots (Red, Yellow, Green) */}
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[#FF5F56] transition-opacity hover:opacity-80" />
                  <span className="h-3 w-3 rounded-full bg-[#FFBD2E] transition-opacity hover:opacity-80" />
                  <span className="h-3 w-3 rounded-full bg-[#27C93F] transition-opacity hover:opacity-80" />
                </div>

                {/* Browser Address Bar */}
                <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/80 px-3.5 py-1 text-[11px] font-medium text-slate-400">
                  <Lock
                    className="h-3 w-3 text-emerald-400"
                    aria-hidden="true"
                  />
                  <span className="text-slate-200 font-semibold">
                    fotech.vn/ecosystem
                  </span>
                  <span className="hidden sm:inline text-slate-500">
                    — FoTech Enterprise Platform
                  </span>
                </div>

                {/* Live Indicator */}
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="hidden sm:inline">Engine Active</span>
                </div>
              </div>

              {/* Video Container Box */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="object-cover w-full h-full"
                  src={IntroFoTech}
                />

                {/* Jumpshare Style Floating Control Pill overlay on left */}
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-xl border border-white/20 bg-slate-950/80 px-3 py-1.5 backdrop-blur-md text-white shadow-lg">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Live 4K</span>
                  </div>
                </div>

                {/* Bottom Right Controls Overlay */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 p-1.5 backdrop-blur-md opacity-90 group-hover:opacity-100 transition-opacity">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Tạm dừng" : "Phát"}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
                  >
                    {isPlaying ? (
                      <Pause className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Play
                        className="h-4 w-4 fill-current"
                        aria-hidden="true"
                      />
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={toggleMute}
                    aria-label={isMuted ? "Bật âm thanh" : "Tắt âm thanh"}
                    className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Volume2 className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>

                {/* Floating AI Badge on top right */}
                <div className="absolute top-4 right-4 hidden sm:flex items-center gap-2 rounded-xl border border-white/15 bg-slate-950/80 px-3 py-1.5 backdrop-blur-md text-xs font-semibold text-white shadow-md">
                  <Layers
                    className="h-3.5 w-3.5 text-indigo-400"
                    aria-hidden="true"
                  />
                  <span>FoTech Core B2B Engine</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LeadModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        type={modalState.type}
      />
    </section>
  );
}
