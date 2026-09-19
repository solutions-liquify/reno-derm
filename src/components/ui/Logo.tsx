import Image from "next/image";
import { brand } from "@/data/clinic";

type MarkProps = { className?: string; size?: number; preload?: boolean };

/** The kidney-and-face mark from the RenoDerm logo, on a transparent background. */
export function LogoMark({ className = "", size = 40, preload }: MarkProps) {
  return (
    <Image
      src={brand.logoMark.src}
      alt=""
      aria-hidden="true"
      width={size}
      height={Math.round((size * brand.logoMark.height) / brand.logoMark.width)}
      preload={preload}
      className={className}
    />
  );
}

/** The full circular RenoDerm badge (mark + wordmark inside the gradient ring). */
export function LogoBadge({ className = "", size = 160, preload }: MarkProps) {
  return (
    <Image
      src={brand.logo.src}
      alt="RenoDerm – Kidney and Skin Clinic logo"
      width={size}
      height={size}
      preload={preload}
      className={className}
    />
  );
}

/** Horizontal lock-up: mark + "RenoDerm / Kidney and Skin Clinic" wordmark. */
export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 sm:gap-2.5 ${className}`}>
      <LogoMark size={96} preload className="h-9 w-auto shrink-0 sm:h-10" />
      <span className="leading-none whitespace-nowrap">
        <span className="block font-display text-[1.3rem] font-semibold tracking-[-0.01em] sm:text-[1.45rem]">
          <span className={light ? "text-teal-200" : "text-teal-600"}>Reno</span>
          <span className={light ? "text-apricot-300" : "text-apricot-500"}>Derm</span>
        </span>
        <span
          className={`mt-1 block text-[8px] font-semibold uppercase tracking-[0.2em] sm:text-[9px] sm:tracking-[0.24em] ${
            light ? "text-paper/70" : "text-ink-soft"
          }`}
        >
          Kidney and Skin Clinic
        </span>
      </span>
    </span>
  );
}
