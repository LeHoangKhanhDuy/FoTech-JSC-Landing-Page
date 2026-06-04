export default function LogoMark() {
  return (
    <a href="#hero" className="flex items-center gap-3 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#1972F5]/20">
      <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#1972F5] text-sm font-black text-white shadow-lg shadow-[#1972F5]/30">
        F
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-base font-bold text-slate-950 dark:text-white">FoTalent AI</span>
        <span className="mt-1 text-xs font-medium text-slate-500 dark:text-slate-400">by FoTech</span>
      </span>
    </a>
  );
}
