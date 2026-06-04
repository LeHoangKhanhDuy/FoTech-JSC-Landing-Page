import type { IconCard as IconCardType } from '@/types/landing';
import Reveal from '@/components/common/Reveal';

type IconCardProps = {
  item: IconCardType;
  delay?: number;
};

const toneStyles = {
  primary: 'bg-[#1972F5]/10 text-[#1972F5]',
  success: 'bg-[#00C951]/10 text-[#00A943]',
  warning: 'bg-[#FEBA17]/14 text-[#B97800]',
  danger: 'bg-[#FF2056]/10 text-[#E0003B]',
};

export default function IconCard({ item, delay = 0 }: IconCardProps) {
  const Icon = item.icon;

  return (
    <Reveal delay={delay} className="h-full">
      <article className="h-full rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#1972F5]/30 hover:shadow-xl hover:shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:hover:border-[#1972F5]/40 dark:hover:shadow-black/20">
        <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-lg ${toneStyles[item.tone]}`}>
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <h3 className="text-lg font-bold text-slate-950 dark:text-white">{item.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
      </article>
    </Reveal>
  );
}
