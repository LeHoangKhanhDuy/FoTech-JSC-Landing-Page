import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Lock, Layers } from "lucide-react";
import IntroFoTech from "@/assets/Intro_FoTech.mp4";

export default function HeroVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

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
    <div
      className="lg:col-span-7 relative animate-fade-in-up"
      style={{ animationDelay: "0.15s" }}
    >
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-emerald-500/20 blur-3xl opacity-70 dark:opacity-60 -z-10 animate-pulse-glow" />

      <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-slate-200/80 bg-slate-900 shadow-2xl shadow-indigo-900/15 dark:border-slate-800 dark:shadow-black/70">
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-3 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-[#FF5F56] transition-opacity hover:opacity-80" />
            <span className="h-3 w-3 rounded-full bg-[#FFBD2E] transition-opacity hover:opacity-80" />
            <span className="h-3 w-3 rounded-full bg-[#27C93F] transition-opacity hover:opacity-80" />
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/80 px-3.5 py-1 text-[11px] font-medium text-slate-400">
            <Lock className="h-3 w-3 text-emerald-400" aria-hidden="true" />
            <span className="text-slate-200 font-semibold">
              fotech.vn/ecosystem
            </span>
            <span className="hidden sm:inline text-slate-500">
              — FoTech Enterprise Platform
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
          </div>
        </div>

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
  );
}
