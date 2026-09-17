import { Ear, HeartHandshake, Layers, Microscope } from "lucide-react";
import { stats } from "@/data/clinic";
import { Counter } from "@/components/ui/Counter";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const pillars = [
  {
    icon: Layers,
    title: "Two specialities, one visit",
    desc: "Skin and kidney problems often overlap. Get both opinions in a single appointment, without running between hospitals.",
  },
  {
    icon: Ear,
    title: "Listening comes first",
    desc: "Every review mentions the same thing: unhurried consultations where your concerns are heard and explained back clearly.",
  },
  {
    icon: Microscope,
    title: "Evidence-led treatment",
    desc: "Protocols grounded in current dermatology and nephrology guidelines, never trends or upselling.",
  },
  {
    icon: HeartHandshake,
    title: "Care for the whole family",
    desc: "From a child's eczema to a grandparent's kidney numbers, the clinic is built for long-term relationships.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <SectionHeading
              kicker="About RenoDerm"
              title="A clinic designed around"
              accent="how bodies actually work."
              description="RenoDerm brings dermatology and nephrology together in Gota, Ahmedabad. Dr. Vyoma Mehta Dholakia and Dr. Akash Dholakia opened the clinic so that patients could get specialist skin, hair, nail and kidney care in one calm, well-run space."
            />
            <Reveal delay={0.2} className="mt-10 grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl2 border border-line bg-white p-5 shadow-soft">
                  <p className="font-display text-4xl tracking-tight text-ink">
                    <Counter value={s.value} decimals={s.decimals} suffix={s.suffix} />
                  </p>
                  <p className="mt-1 text-sm text-muted">{s.label}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <SpotlightCard className="h-full p-6 sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-100">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{p.desc}</p>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
