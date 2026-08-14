import type { ReactNode } from 'react';

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({ id, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`relative px-4 py-20 sm:px-6 lg:px-8 ${className}`}>
      <div className="mx-auto w-full max-w-[1440px]">{children}</div>
    </section>
  );
}
