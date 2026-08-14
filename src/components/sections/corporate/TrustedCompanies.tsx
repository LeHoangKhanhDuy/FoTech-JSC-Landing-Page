import { Building2 } from 'lucide-react';

const companies = [
  'FoTech JSC',
  'VinCommerce',
  'Techcom Retail',
  'FPT Logistics',
  'VNPay Hub',
  'Tiki Delivery',
  'Shopee Logistics',
  'Highlands Coffee',
];

export default function TrustedCompanies() {
  const logos = [...companies, ...companies];

  return (
    <section className="bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Được tin dùng bởi hơn 500+ doanh nghiệp hàng đầu tại Việt Nam
        </p>

        <div className="mb-16 mt-6 overflow-hidden">
          <div className="flex w-max items-center gap-6 logo-marquee">
            {logos.map((company, index) => (
              <div
                key={`${company}-${index}`}
                className="flex items-center gap-2 rounded-xl border border-slate-200/80 bg-slate-50 px-5 py-2.5 text-xs font-bold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300"
              >
                <Building2 className="h-4 w-4 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                <span>{company}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
