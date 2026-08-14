import { Link } from 'react-router-dom';
import FoTechLogo from '@/assets/FoTech_Logo.png';

export default function CorporateLogoMark() {
  return (
    <Link
      to="/"
      className="group flex items-center gap-3 rounded-xl transition focus:outline-none focus:ring-4 focus:ring-blue-500/20"
    >
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 p-1 shadow-sm transition-transform group-hover:scale-105 dark:bg-slate-900">
        <img
          src={FoTechLogo}
          alt="FoTech Logo"
          className="h-full w-full object-contain"
        />
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-slate-900" />
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
