import { Link, useLocation } from 'react-router-dom';
import FoTechLogo from '@/assets/FoTech_Logo.png';

export default function LogoMark() {
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    if (location.pathname === '/fohrm') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Link
      to="/fohrm"
      onClick={handleClick}
      className="group flex items-center gap-3 outline-none focus:outline-none"
    >
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-1 shadow-sm transition-transform group-hover:scale-105 dark:bg-slate-900">
        <img
          src={FoTechLogo}
          alt="FoHRM Logo"
          className="h-full w-full object-contain"
        />
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 " />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Fo<span className="text-blue-600 dark:text-blue-400">HRM</span>
        </span>
        <span className="mt-1 text-[11px] font-medium tracking-wide text-slate-500 dark:text-slate-400">
          FoTech HR Management
        </span>
      </div>
    </Link>
  );
}
