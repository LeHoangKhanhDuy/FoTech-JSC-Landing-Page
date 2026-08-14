import { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X, ChevronDown, Users, Stethoscope, Cloud, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '@/components/common/Button';
import CorporateLogoMark from '@/components/common/CorporateLogoMark';
import LeadModal from '@/components/common/LeadModal';
import { useDarkMode } from '@/hooks/useDarkMode';

export default function CorporateNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [ecosystemOpen, setEcosystemOpen] = useState(false);
  const { isDark, toggleDarkMode } = useDarkMode();
  
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    type: 'demo' | 'trial' | 'login' | 'consulting';
  }>({ isOpen: false, type: 'consulting' });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openModal = (type: 'demo' | 'trial' | 'login' | 'consulting') => {
    setModalState({ isOpen: true, type });
    setIsOpen(false);
    setEcosystemOpen(false);
  };

  const ecosystemProducts = [
    {
      name: 'FoHRM',
      tagline: 'Quản trị Nhân sự Tích hợp AI',
      desc: 'Tự động chấm công, tính lương & trợ lý AI FINA.',
      icon: Users,
      color: 'bg-blue-600',
      link: '/fohrm',
      isRoute: true,
    },
    {
      name: 'FoMed',
      tagline: 'Quản lý Phòng khám & Y tế',
      desc: 'Tối ưu luồng bệnh nhân, hồ sơ bệnh án & đơn thuốc.',
      icon: Stethoscope,
      color: 'bg-emerald-600',
      link: '#fomed',
      isRoute: false,
    },
    {
      name: 'FoTech Cloud',
      tagline: 'Hạ tầng Điện toán Đám mây & AI',
      desc: 'Lưu trữ an toàn, API Gateway & AI Engine doanh nghiệp.',
      icon: Cloud,
      color: 'bg-indigo-600',
      link: '#fotech-cloud',
      isRoute: false,
    },
    {
      name: 'FoAnalytics',
      tagline: 'Trung tâm Báo cáo Điều hành',
      desc: 'Dashboard dữ liệu tập trung realtime cho Ban quản trị.',
      icon: BarChart3,
      color: 'bg-amber-500',
      link: '#foanalytics',
      isRoute: false,
    },
  ];

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-900/90'
            : 'bg-transparent'
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <CorporateLogoMark />

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-8 md:flex">
            
            {/* Dropdown Menu for Ecosystem */}
            <div
              className="relative"
              onMouseEnter={() => setEcosystemOpen(true)}
              onMouseLeave={() => setEcosystemOpen(false)}
            >
              <button
                type="button"
                onClick={() => setEcosystemOpen(!ecosystemOpen)}
                className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 transition hover:text-blue-600 dark:text-slate-200 dark:hover:text-white"
              >
                <span>Hệ sinh thái</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${ecosystemOpen ? 'rotate-180 text-blue-600' : ''}`} aria-hidden="true" />
              </button>

              {/* Dropdown Panel */}
              {ecosystemOpen && (
                <div className="absolute top-full -left-4 mt-2 w-96 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900 animate-fade-in">
                  <div className="mb-2 px-3 pt-2 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    Sản phẩm B2B Digital Transformation
                  </div>
                  <div className="space-y-1">
                    {ecosystemProducts.map((prod) => {
                      const Icon = prod.icon;
                      
                      const content = (
                        <div className="group flex items-start gap-3 rounded-xl p-2.5 transition hover:bg-slate-50 dark:hover:bg-slate-800/80">
                          <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${prod.color} text-white shadow-md`}>
                            <Icon className="h-4 w-4" aria-hidden="true" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-slate-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                                {prod.name}
                              </span>
                              <span className="text-[10px] font-medium text-slate-500">
                                {prod.tagline}
                              </span>
                            </div>
                            <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                              {prod.desc}
                            </p>
                          </div>
                        </div>
                      );

                      if (prod.isRoute) {
                        return (
                          <Link key={prod.name} to={prod.link} onClick={() => setEcosystemOpen(false)}>
                            {content}
                          </Link>
                        );
                      }

                      return (
                        <a key={prod.name} href={prod.link} onClick={() => setEcosystemOpen(false)}>
                          {content}
                        </a>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <a
              href="#solutions"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-white"
            >
              Giải pháp
            </a>
            <a
              href="#why-trust"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-white"
            >
              Về chúng tôi
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-white"
            >
              Liên hệ
            </a>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 md:flex">
            <button
              type="button"
              aria-label="Đổi chế độ sáng tối"
              onClick={toggleDarkMode}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:border-blue-500/40 hover:text-blue-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            >
              {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
            </button>

            <Button
              variant="ghost"
              icon={null}
              onClick={() => openModal('consulting')}
            >
              Liên hệ tư vấn
            </Button>

            <Button
              variant="primary"
              onClick={() => openModal('login')}
              icon={<ArrowRight className="h-4 w-4" aria-hidden="true" />}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              Đăng nhập Hệ thống
            </Button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label="Đổi chế độ sáng tối"
              onClick={toggleDarkMode}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-200"
            >
              {isDark ? <Sun className="h-4 w-4" aria-hidden="true" /> : <Moon className="h-4 w-4" aria-hidden="true" />}
            </button>

            <button
              type="button"
              aria-label="Mở menu"
              onClick={() => setIsOpen((value) => !value)}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-white"
            >
              {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="border-t border-slate-200 bg-white px-4 py-5 shadow-xl dark:border-slate-800 dark:bg-slate-900 md:hidden animate-fade-in">
            <div className="mx-auto grid max-w-7xl gap-3">
              <div className="px-3 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Sản phẩm Hệ sinh thái
              </div>
              <div className="grid gap-2">
                <Link
                  to="/fohrm"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between rounded-xl bg-blue-50 px-3.5 py-2.5 text-xs font-bold text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
                >
                  <span>FoHRM (Quản trị Nhân sự AI)</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <a
                  href="#fomed"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  FoMed (Quản lý Phòng khám)
                </a>
                <a
                  href="#fotech-cloud"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-3.5 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
                >
                  FoTech Cloud (Hạ tầng & AI)
                </a>
              </div>

              <div className="mt-2 grid gap-2">
                <Button
                  variant="outline"
                  icon={null}
                  onClick={() => openModal('consulting')}
                  className="w-full"
                >
                  Liên hệ tư vấn
                </Button>
                <Button
                  variant="primary"
                  onClick={() => openModal('login')}
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600"
                >
                  Đăng nhập Hệ thống
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <LeadModal
        isOpen={modalState.isOpen}
        onClose={() => setModalState({ ...modalState, isOpen: false })}
        type={modalState.type}
      />
    </>
  );
}
