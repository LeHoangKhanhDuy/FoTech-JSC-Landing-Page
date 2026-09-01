export default function ServicesHeader() {
  return (
    <div className="relative mx-auto mb-12 max-w-3xl text-center">
      <div className="pointer-events-none absolute -top-16 left-1/2 -z-10 h-64 w-[600px] -translate-x-1/2 opacity-20 dark:opacity-30 hidden sm:block">
        <svg
          viewBox="0 0 600 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <path
            d="M 50 150 Q 200 30 300 100 T 550 50"
            stroke="url(#services-header-line-grad)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          <circle cx="200" cy="55" r="4" fill="#3B82F6" />
          <circle cx="420" cy="75" r="4" fill="#8B5CF6" />
          <defs>
            <linearGradient
              id="services-header-line-grad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Heading H2 */}
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[48px] lg:leading-[1.08]">
        Giải pháp & Bảng giá dịch vụ
      </h2>
    </div>
  );
}
