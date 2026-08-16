import { CheckCircle2 } from 'lucide-react';

interface ServiceFeatureListProps {
  features: string[];
}

export default function ServiceFeatureList({ features }: ServiceFeatureListProps) {
  if (!features || features.length === 0) return null;

  return (
    <div>
      <h4 className="text-base font-bold text-white">Tính năng nổi bật</h4>

      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5 text-xs sm:text-sm font-medium text-slate-200">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-500" aria-hidden="true" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
