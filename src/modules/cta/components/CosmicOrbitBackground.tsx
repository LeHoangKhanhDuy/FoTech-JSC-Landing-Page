import CosmicOrbit from './CosmicOrbit';
import StarField from './StarField';

export default function CosmicOrbitBackground() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {/* Background Deep Color */}
      <div className="absolute inset-0 bg-[#030712] dark:bg-[#030712]" />

      {/* Layered Radial Glows behind Card */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[1000px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.35),transparent_65%)] blur-3xl" />
      <div className="absolute top-1/2 left-10 -translate-y-1/2 h-96 w-96 rounded-full bg-blue-600/25 blur-3xl" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 h-96 w-96 rounded-full bg-indigo-600/25 blur-3xl" />

      {/* Orbit Rings & Nodes SVG */}
      <CosmicOrbit />

      {/* Twinkling Star Field */}
      <StarField />
    </div>
  );
}
