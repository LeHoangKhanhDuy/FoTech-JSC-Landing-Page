import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode;
};

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-[#1972F5] text-white shadow-lg shadow-[#1972F5]/25 hover:bg-[#0f63dc]',
  secondary:
    'border border-slate-200 bg-white text-slate-950 hover:border-[#1972F5]/40 hover:bg-[#1972F5]/5 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-[#1972F5]/50',
  ghost: 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800',
  dark: 'bg-slate-950 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100',
};

export default function Button({
  children,
  variant = 'primary',
  icon,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-4 focus:ring-[#1972F5]/20 ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon ?? <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </button>
  );
}
