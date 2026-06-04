import Reveal from '@/components/common/Reveal';

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  invert?: boolean;
};

export default function SectionHeading({ eyebrow, title, description, align = 'center', invert = false }: SectionHeadingProps) {
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#1972F5]">{eyebrow}</p>
      ) : null}
      <h2 className={`text-balance text-3xl font-bold leading-tight md:text-4xl ${invert ? 'text-white' : 'text-slate-950 dark:text-white'}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-7 md:text-lg ${invert ? 'text-slate-300' : 'text-slate-600 dark:text-slate-300'}`}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
