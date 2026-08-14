const brandLogos = [
  { name: 'VPBank', style: 'font-black text-2xl tracking-tight' },
  { name: 'ACB', style: 'font-black text-2xl tracking-widest uppercase' },
  { name: 'vietjetAir.com', style: 'font-extrabold italic text-xl tracking-tighter' },
  { name: '247Express', style: 'font-black text-2xl tracking-tight' },
  { name: 'NIPPON EXPRESS', style: 'font-extrabold text-lg tracking-widest uppercase' },
  { name: 'WinCommerce', style: 'font-bold text-2xl tracking-tight' },
  { name: 'Techcombank', style: 'font-extrabold text-2xl tracking-normal' },
  { name: 'FPT Corporation', style: 'font-black text-xl tracking-widest uppercase' },
  { name: 'Highlands Coffee', style: 'font-extrabold text-xl tracking-tight' },
  { name: 'VNPay', style: 'font-black text-2xl tracking-tighter' },
];

export default function TrustedCompanies() {
  const logos = [...brandLogos, ...brandLogos];

  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Được tin dùng bởi hơn 500+ doanh nghiệp hàng đầu tại Việt Nam
        </p>

        <div className="mt-8 mb-16 overflow-hidden">
          <div className="flex w-max items-center gap-12 sm:gap-16 logo-marquee">
            {logos.map((brand, index) => (
              <span
                key={`${brand.name}-${index}`}
                className={`shrink-0 select-none text-slate-400/90 transition-colors duration-300 hover:text-slate-800 dark:text-slate-500 dark:hover:text-slate-100 ${brand.style}`}
              >
                {brand.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
