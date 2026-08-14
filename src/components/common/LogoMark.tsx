import { Cpu } from 'lucide-react';

export default function LogoMark() {
  return (
    <a
      href="#hero"
      className="group flex items-center gap-3 rounded-xl transition focus:outline-none focus:ring-4 focus:ring-blue-500/20"
    >
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25 transition-transform group-hover:scale-105">
        <Cpu className="h-5 w-5 text-white" aria-hidden="true" />
        <span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-white dark:ring-slate-900" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Fo<span className="text-blue-600 dark:text-blue-400">HRM</span>
        </span>
        <span className="mt-1 text-[11px] font-medium tracking-wide text-slate-500 dark:text-slate-400">
          FoTech HR Management
        </span>
      </div>
    </a>
  );
}
