import { useState, useRef, useEffect } from 'react';
import { ArrowRight, Play, Pause, Volume2, VolumeX, ShieldCheck, CheckCircle2, Lock, Layers } from 'lucide-react';
import Button from '@/components/common/Button';
import LeadModal from '@/components/common/LeadModal';

export default function CorporateHero() {
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'demo' | 'trial' | 'login' | 'consulting';
  }>({ isOpen: false, type: 'consulting' });

  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openModal = (type: 'demo' | 'consulting') => {
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
    <section id="hero" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-28 bg-white dark:bg-slate-950">
      {/* Background Radial Glow & Grid Overlay */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,235,0.15),rgba(255,255,255,0))]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[600px] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Top Section (Centered Typography & CTAs) */}
        <div className="mx-auto max-w-4xl text-center animate-fade-in-up">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-50/80 px-4 py-1.5 text-xs font-bold text-indigo-700 shadow-sm backdrop-blur-md dark:border-indigo-500/30 dark:bg-indigo-950/60 dark:text-indigo-300">
            <span className="text-sm">🚀</span>
            <span>Đẩy nhanh tốc độ Chuyển đổi số của bạn</span>
          </div>

          {/* Headline */}
          <h1 className="text-balance mt-6 text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl md:leading-[1.12]">
            Hệ sinh thái Giải pháp Số <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 bg-clip-text text-transparent">
              toàn diện
            </span>{' '}
            từ FoTech
          </h1>

          {/* Sub-headline */}
          <p className="mx-auto text-balance mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg md:text-xl">
            Cung cấp các nền tảng phần mềm mạnh mẽ, tích hợp AI, giúp doanh nghiệp tối ưu vận hành, từ quản trị nhân sự đến quản lý y tế.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              onClick={() => {
                const elem = document.getElementById('ecosystem');
                elem?.scrollIntoView({ behavior: 'smooth' });
              }}
              icon={<ArrowRight className="h-5 w-5" aria-hidden="true" />}
              className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl shadow-indigo-500/25 px-8"
            >
              Khám phá Hệ sinh thái
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => openModal('demo')}
              icon={<Play className="h-4 w-4 fill-current text-indigo-600" aria-hidden="true" />}
              className="w-full sm:w-auto px-8"
            >
              Lịch trình Demo
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
              Đồng bộ dữ liệu SSO 1 tài khoản
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-emerald-500" aria-hidden="true" />
              Hạ tầng Điện toán Đám mây AWS
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="h-4 w-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
              Bảo mật ISO 27001 & AES-256
            </span>
          </div>

        </div>

        {/* Bottom Section (Jumpshare Style Massive macOS Video Presentation) */}
        <div className="mt-12 md:mt-16 relative mx-auto max-w-5xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          
          {/* Glowing Radial Background Glow */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-emerald-500/20 blur-3xl opacity-70 dark:opacity-60 -z-10 animate-pulse-glow" />

          {/* macOS Browser Window Frame Wrapper */}
          <div className="group relative overflow-hidden rounded-2xl md:rounded-3xl border border-slate-200/80 bg-slate-900 shadow-2xl shadow-indigo-900/15 dark:border-slate-800 dark:shadow-black/70">
            
            {/* macOS Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-3 backdrop-blur-md">
              
              {/* Red, Yellow, Green Dots */}
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#FF5F56] transition-opacity hover:opacity-80" />
                <span className="h-3 w-3 rounded-full bg-[#FFBD2E] transition-opacity hover:opacity-80" />
                <span className="h-3 w-3 rounded-full bg-[#27C93F] transition-opacity hover:opacity-80" />
              </div>

              {/* Browser Address Bar */}
              <div className="flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-950/80 px-4 py-1 text-[11px] font-medium text-slate-400">
                <Lock className="h-3 w-3 text-emerald-400" aria-hidden="true" />
                <span className="text-slate-200 font-semibold">fotech.vn/ecosystem</span>
                <span className="hidden sm:inline text-slate-500">— FoTech Enterprise Platform</span>
              </div>

              {/* Live Indicator */}
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="hidden sm:inline">Enterprise Engine Active</span>
              </div>
            </div>

            {/* Video Container Box */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="object-cover w-full h-full"
                src="https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-across-multiple-screens-42512-large.mp4"
              />

              {/* Controls & Badge Overlay */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-950/80 p-1.5 backdrop-blur-md opacity-90 group-hover:opacity-100 transition-opacity">
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={isPlaying ? 'Tạm dừng video' : 'Phát video'}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
                >
                  {isPlaying ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4 fill-current" aria-hidden="true" />}
                </button>

                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? 'Bật âm thanh' : 'Tắt âm thanh'}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white transition hover:bg-white/20"
                >
                  {isMuted ? <VolumeX className="h-4 w-4" aria-hidden="true" /> : <Volume2 className="h-4 w-4" aria-hidden="true" />}
                </button>
              </div>

              <div className="absolute top-4 left-4 hidden sm:flex items-center gap-2 rounded-xl border border-white/15 bg-slate-950/80 px-3.5 py-2 backdrop-blur-md text-xs font-semibold text-white shadow-lg">
                <Layers className="h-4 w-4 text-blue-400" aria-hidden="true" />
                <span>FoTech Core B2B Engine v4.2</span>
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
