const items = [
  "Acne & scars",
  "PRP therapy",
  "Chronic kidney disease",
  "Chemical peels",
  "Dialysis care",
  "Melasma",
  "Hypertension",
  "Hair loss",
  "Kidney transplant",
  "Nail surgery",
  "Skin boosters",
  "Glomerular disease",
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
