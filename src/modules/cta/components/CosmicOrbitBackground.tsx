import CosmicOrbit from '@/modules/cta/components/CosmicOrbit';
import StarField from '@/modules/cta/components/StarField';

export default function CosmicOrbitBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/60 via-white to-indigo-50/40 dark:hidden" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.12),transparent_70%)] blur-2xl dark:hidden" />
      <div className="absolute inset-0 hidden dark:block bg-[#060E28]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[1000px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.35),transparent_65%)] blur-3xl hidden dark:block" />
      <div className="absolute top-1/2 left-10 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl hidden dark:block" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 h-96 w-96 rounded-full bg-indigo-600/20 blur-3xl hidden dark:block" />

      <CosmicOrbit />

      <StarField />
    </div>
  );
}
