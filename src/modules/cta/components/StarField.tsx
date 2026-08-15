import { starsData } from '@/modules/cta/data/ctaData';

export default function StarField() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {starsData.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-blue-500/70 dark:bg-cyan-100 animate-pulse transition-colors duration-300"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
            boxShadow: star.glow
              ? '0 0 10px rgba(37, 99, 235, 0.5)'
              : 'none',
          }}
        />
      ))}
    </div>
  );
}
