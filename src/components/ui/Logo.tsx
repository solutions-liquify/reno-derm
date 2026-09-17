type Props = { className?: string; size?: number };

/** Two-lobed mark: a kidney silhouette meeting a soft skin-tone droplet. */
export function LogoMark({ className = "", size = 36 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="lg-teal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1f8b79" />
          <stop offset="1" stopColor="#0d3833" />
        </linearGradient>
        <linearGradient id="lg-apricot" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffc9a6" />
          <stop offset="1" stopColor="#e86f2e" />
        </linearGradient>
      </defs>
      <rect width="48" height="48" rx="14" fill="url(#lg-teal)" />
      <path
        d="M20 12c-6.5 0-10 5.2-10 12s3.5 12 10 12c3.2 0 4.6-1.6 4.6-3.6 0-2.4-2.9-2.9-2.9-5.4 0-1.9 1.6-2.6 1.6-4.6 0-2.4-1.1-3.3-1.1-5.3 0-2.2 1.2-3.4 2.9-3.9C24.2 12.4 22.3 12 20 12Z"
        fill="#ffffff"
        fillOpacity="0.95"
      />
      <path
        d="M32.5 14.5c-3.8 4.6-7 8.3-7 12.4a7 7 0 0 0 14 0c0-4.1-3.2-7.8-7-12.4Z"
        fill="url(#lg-apricot)"
      />
    </svg>
  );
}

export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 sm:gap-2.5 ${className}`}>
      <LogoMark className="h-8 w-8 shrink-0 sm:h-9 sm:w-9" />
      <span className="leading-none whitespace-nowrap">
        <span className={`block font-display text-[1.2rem] tracking-tight sm:text-[1.35rem] ${light ? "text-paper" : "text-ink"}`}>
          RenoDerm
        </span>
        <span className={`block text-[9px] font-semibold uppercase tracking-[0.18em] sm:text-[10px] sm:tracking-[0.22em] ${light ? "text-teal-200" : "text-teal-700"}`}>
          Kidney & Skin Clinic
        </span>
      </span>
    </span>
  );
}
