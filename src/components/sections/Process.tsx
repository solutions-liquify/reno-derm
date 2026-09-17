"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { CalendarCheck, ClipboardList, MessageCircle, Repeat } from "lucide-react";
import { useRef } from "react";
import { Reveal } from "@/components/ui/Reveal";

const steps = [
  {
    icon: MessageCircle,
    title: "Reach out",
    desc: "Call or WhatsApp with your concern. We reply with the earliest slot, usually the same or next day.",
  },
  {
    icon: ClipboardList,
    title: "Unhurried consultation",
    desc: "A full history, examination and plain-language explanation of what is happening and why.",
  },
  {
    icon: CalendarCheck,
    title: "A plan you understand",
    desc: "Medicines, procedures or tests, only what is needed, with costs and timelines discussed upfront.",
  },
  {
    icon: Repeat,
    title: "Follow-through",
    desc: "Scheduled reviews and easy access for questions in between so progress never stalls.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const line = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative bg-ink py-24 text-paper sm:py-32">
      <div className="dot-grid absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgb(248_246_241/0.5)_1px,transparent_1px)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="kicker !border-white/15 !bg-white/5 !text-teal-200">Your visit</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl">
                Simple, calm, <em className="not-italic text-apricot-300">predictable.</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-5 text-base leading-relaxed text-paper/70 sm:text-lg">
                We keep the process short and transparent so that you can focus on getting better,
                not on paperwork.
              </p>
            </Reveal>
          </div>

          <div ref={ref} className="relative lg:col-span-7">
            <div className="absolute left-6 top-2 bottom-2 w-px bg-white/10 sm:left-7" />
            <motion.div
              style={{ height: line }}
              className="absolute left-6 top-2 w-px bg-gradient-to-b from-teal-300 to-apricot-300 sm:left-7"
            />
            <ol className="space-y-8">
              {steps.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.08} as="li" className="relative flex gap-6 pl-0">
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-ink text-teal-200 shadow-[0_0_0_6px_rgb(16_34_31)] sm:h-14 sm:w-14">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="pt-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Step {i + 1}</p>
                    <h3 className="mt-1 text-xl font-semibold tracking-tight">{s.title}</h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-paper/70">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
