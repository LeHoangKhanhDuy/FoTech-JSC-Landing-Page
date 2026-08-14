import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: ReactNode | null;
  size?: 'sm' | 'md' | 'lg';
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-blue-600 text-white shadow-md shadow-blue-500/20 hover:bg-blue-700 active:bg-blue-800 focus:ring-4 focus:ring-blue-500/25',
  secondary:
    'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700 focus:ring-4 focus:ring-blue-500/20',
  outline:
    'border border-slate-200 bg-white text-slate-800 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50/50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-white dark:hover:bg-slate-800 focus:ring-4 focus:ring-blue-500/20',
  ghost:
    'text-slate-700 hover:text-blue-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-white dark:hover:bg-slate-800/80 focus:ring-4 focus:ring-blue-500/20',
};

const sizeClasses = {
  sm: 'px-3.5 py-2 text-xs rounded-lg min-h-9',
  md: 'px-5 py-2.5 text-sm rounded-xl min-h-11',
  lg: 'px-6 py-3.5 text-base rounded-xl min-h-12',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60 focus:outline-none ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon !== undefined ? icon : null}
    </button>
  );
}
