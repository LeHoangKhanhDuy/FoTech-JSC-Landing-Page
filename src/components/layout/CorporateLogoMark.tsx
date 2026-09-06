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
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center transition-transform group-hover:scale-105">
        <img
          src={FoTechLogo}
          alt="FoTech Logo"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-extrabold tracking-tight text-blue-600">
          FoTech
        </span>
        <span className="mt-1 text-[11px] font-medium tracking-wide text-slate-500">
          Enterprise Ecosystem
        </span>
      </div>
    </Link>
  );
}
