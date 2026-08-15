import { starsData } from '../data/ctaData';

export default function StarField() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {starsData.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-cyan-200 dark:bg-cyan-100 animate-pulse"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            boxShadow: star.glow
              ? '0 0 12px #38bdf8, 0 0 24px #2563eb, 0 0 6px #ffffff'
              : '0 0 6px rgba(56, 189, 248, 0.8)',
          }}
        />
      ))}
    </div>
  );
}
