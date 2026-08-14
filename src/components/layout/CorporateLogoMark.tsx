import { Link, useLocation } from 'react-router-dom';
import FoTechLogo from '@/assets/FoTech_Logo.png';

export default function CorporateLogoMark() {
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Link
      to="/"
      onClick={handleClick}
      className="group flex items-center gap-3 outline-none focus:outline-none"
    >
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-1 shadow-sm transition-transform group-hover:scale-105 dark:bg-slate-900">
        <img
          src={FoTechLogo}
          alt="FoTech Logo"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Fo<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Tech</span>
        </span>
        <span className="mt-1 text-[11px] font-medium tracking-wide text-slate-500 dark:text-slate-400">
          Enterprise Ecosystem
        </span>
      </div>
    </Link>
  );
}
