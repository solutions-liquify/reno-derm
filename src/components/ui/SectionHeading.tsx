import { Reveal } from "./Reveal";

type Props = {
  kicker: string;
  title: string;
  accent?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ kicker, title, accent, description, align = "left", className = "" }: Props) {
  const center = align === "center";
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}>
      <Reveal>
        <span className="kicker">
          <span className="h-1.5 w-1.5 rounded-full bg-apricot-400" />
          {kicker}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">
          {title}{" "}
          {accent && <em className="text-gradient not-italic">{accent}</em>}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
