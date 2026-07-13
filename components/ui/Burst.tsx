export default function Burst({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full" aria-hidden="true">
        <polygon
          points="100,4 112,40 145,20 138,58 178,58 152,86 188,100 152,114 178,142 138,142 145,180 112,160 100,196 88,160 55,180 62,142 22,142 48,114 12,100 48,86 22,58 62,58 55,20 88,40"
          fill="#D62828"
          stroke="#1A1410"
          strokeWidth="3"
        />
      </svg>
      <span className="relative font-tag font-bold text-cream text-center text-xs sm:text-sm leading-tight px-6 py-2 -rotate-6">
        {label}
      </span>
    </div>
  );
}
