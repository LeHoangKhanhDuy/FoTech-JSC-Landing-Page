import { Link, useLocation } from 'react-router-dom';
import FoTechLogo from '@/assets/FoTech_Logo.png';
import type { NavbarPageConfig } from '@/components/layout/navbar/navbarData';

export default function CorporateLogoMark({ config }: { config: NavbarPageConfig }) {
  const location = useLocation();

  const handleClick = (e: React.MouseEvent) => {
    if (location.pathname === config.homePath.split('#')[0]) {
      e.preventDefault();
      const target = config.homePath.includes('#')
        ? document.getElementById(config.homePath.split('#')[1])
        : null;
      target?.scrollIntoView({ behavior: 'smooth' });
      if (!target) window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Link
      to={config.homePath}
      onClick={handleClick}
      className="group flex items-center gap-3 outline-none focus:outline-none"
    >
      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center transition-transform group-hover:scale-105">
        <img
          src={FoTechLogo}
          alt={`${config.brandName} logo`}
          className="h-full w-full object-contain"
        />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-extrabold tracking-tight text-blue-600">
          {config.brandName}
        </span>
        <span className="mt-1 text-[11px] font-medium tracking-wide text-slate-500">
          {config.tagline}
        </span>
      </div>
    </Link>
  );
}
