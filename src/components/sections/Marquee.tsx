const items = [
  "Acne & acne scars",
  "Botox & dermal fillers",
  "Kidney disease",
  "Chemical peels",
  "Dialysis & transplant consultation",
  "Pigmentation & melasma",
  "Diabetes & hypertension",
  "Hair & scalp disorders",
  "Kidney stones",
  "Nail & vitiligo surgery",
  "PRP & microneedling",
  "Thyroid disorders",
  "Preventive health check-ups",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="marquee-mask relative w-full overflow-hidden border-y border-line bg-paper-2/60 py-4">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap will-change-transform hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 text-sm font-medium text-ink-soft">
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-apricot-400" />
          </span>
        ))}
      </div>
    </div>
  );
}
