import { useState, useRef, useEffect } from "react";
import {
  ArrowRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Star,
} from "lucide-react";
import Button from "@/components/common/Button";
import LeadModal from "@/components/common/LeadModal";

export default function Hero() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: "demo" | "trial" | "login" | "consulting";
  }>({ isOpen: false, type: "trial" });

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openModal = (type: "demo" | "trial") => {
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
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-white dark:bg-slate-950"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.12),rgba(255,255,255,0))]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.06),transparent_70%)]" />
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left Column:*/}
          <div className="lg:col-span-5 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-50/80 px-4 py-1.5 text-xs font-bold text-blue-600 shadow-sm backdrop-blur-md dark:border-blue-500/30 dark:bg-blue-950/50 dark:text-blue-400">
              <Sparkles
                className="h-4 w-4 text-blue-600 dark:text-blue-400"
                aria-hidden="true"
              />
              <span>✨ Nền tảng HR Tech Tích hợp AI Hàng đầu</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-5xl leading-[1.12]">
              Nền tảng
              <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Quản trị Nhân sự
              </span>
              <br className="hidden sm:inline" />
              toàn diện
            </h1>

            {/* Sub-headline */}
            <p className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg max-w-xl">
              Tự động hóa chấm công, tính lương, và nâng tầm trải nghiệm nhân
              viên với trợ lý AI thông minh. Tuân thủ 100% Luật Lao động Việt
              Nam.
            </p>

            {/* CTA Buttons Side-by-Side */}
            <div className="mt-8 flex flex-col items-stretch sm:flex-row sm:items-center gap-3.5">
              <Button
                variant="primary"
                size="lg"
                onClick={() => openModal("trial")}
                icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}
                className="shadow-xl shadow-blue-500/25 px-6"
              >
                Bắt đầu miễn phí
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => openModal("demo")}
                icon={
                  <Play
                    className="h-4 w-4 fill-current text-blue-600"
                    aria-hidden="true"
                  />
                }
                className="px-6"
              >
                Xem Demo
              </Button>
            </div>

            {/* Rating & Trust Badges */}
            <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-3">
                {/* Avatar stack */}
                <div className="flex -space-x-2 overflow-hidden">
                  {["NV", "HR", "CEO", "CTO"].map((initials, idx) => (
                    <span
                      key={idx}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-white dark:ring-slate-950 bg-gradient-to-br from-blue-500 to-indigo-600 text-[10px] font-bold text-white shadow-sm"
                    >
                      {initials}
                    </span>
                  ))}
                </div>

                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-current"
                        aria-hidden="true"
                      />
                    ))}
                    <span className="ml-1.5 text-xs font-bold text-slate-900 dark:text-white">
                      4.9/5
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    dựa trên hơn 500+ doanh nghiệp tại Việt Nam
                  </p>
                </div>
              </div>

              {/* Checkmarks Row */}
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2
                    className="h-4 w-4 text-emerald-500"
                    aria-hidden="true"
                  />
                  14 ngày dùng thử
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2
                    className="h-4 w-4 text-emerald-500"
                    aria-hidden="true"
                  />
                  Không cần thẻ tín dụng
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck
                    className="h-4 w-4 text-blue-600 dark:text-blue-400"
                    aria-hidden="true"
                  />
                  Triển khai 5 phút
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Video Container (Jumpshare Style macOS Window Mockup - 7 / 12 cols) */}
          <div
            className="lg:col-span-7 relative animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            {/* Glowing Radial Background */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/25 via-indigo-500/20 to-emerald-500/20 blur-3xl opacity-70 dark:opacity-60 -z-10 animate-pulse-glow" />

            {/* macOS Window Frame Wrapper */}
            <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-slate-200/80 bg-slate-900 shadow-2xl shadow-blue-900/15 dark:border-slate-800 dark:shadow-black/70">
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
                    app.fohrm.vn
                  </span>
                  <span className="hidden sm:inline text-slate-500">
                    — Quản trị Nhân sự AI
                  </span>
                </div>

                {/* Live Indicator */}
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                  </span>
                  <span className="hidden sm:inline">Live Preview</span>
                </div>
              </div>

              {/* Video Player Box */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  className="h-full w-full object-cover"
                  src="https://assets.mixkit.co/videos/preview/mixkit-financial-trading-dashboard-on-a-monitor-screen-39547-large.mp4"
                />

                {/* Jumpshare Style Floating Control Pill overlay on left */}
                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-xl border border-white/20 bg-slate-950/80 px-3 py-1.5 backdrop-blur-md text-white shadow-lg">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-rose-400">
                    <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                    <span>0:01</span>
                  </div>
                  <div className="h-3 w-px bg-slate-700" />
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="text-white hover:text-blue-400 transition"
                    aria-label="Play/Pause"
                  >
                    {isPlaying ? (
                      <Pause className="h-3.5 w-3.5" aria-hidden="true" />
                    ) : (
                      <Play
                        className="h-3.5 w-3.5 fill-current"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </div>

                {/* Bottom Right Control Overlay */}
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
                  <Sparkles
                    className="h-3.5 w-3.5 text-blue-400"
                    aria-hidden="true"
                  />
                  <span>FINA AI Assistant</span>
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
