"use client";

import { AnimatePresence, motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { clinic, services } from "@/data/clinic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";

type Key = keyof typeof services;

const tabs: { key: Key; label: string; hint: string }[] = [
  { key: "dermatology", label: "Dermatology", hint: "Dr. Vyoma" },
  { key: "nephrology", label: "Nephrology", hint: "Dr. Akash" },
];

export function Services() {
  const [tab, setTab] = useState<Key>("dermatology");
  const group = services[tab];

  return (
    <section id="services" className="relative bg-paper-2/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="Treatments"
            title="What we treat,"
            accent="and how."
            description="Pick a speciality to see every condition and procedure we handle at the clinic, exactly as listed on our service board."
          />
          <Reveal delay={0.1}>
            <div
              role="tablist"
              aria-label="Speciality"
              className="inline-flex rounded-full border border-line bg-white p-1 shadow-soft"
            >
              {tabs.map((t) => {
                const selected = t.key === tab;
                return (
                  <button
                    key={t.key}
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setTab(t.key)}
                    className={`relative rounded-full px-4 py-2.5 text-sm font-semibold whitespace-nowrap transition-colors sm:px-5 ${
                      selected ? "text-paper" : "text-ink-soft hover:text-ink"
                    }`}
                  >
                    {selected && (
                      <motion.span
                        layoutId="service-tab"
                        className="absolute inset-0 rounded-full bg-ink"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    <span className="relative">
                      {t.label}
                      <span className={`ml-2 hidden text-xs font-medium sm:inline ${selected ? "text-teal-200" : "text-muted"}`}>
                        {t.hint}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-2xl tracking-tight text-ink sm:text-3xl">{group.heading}</h3>
                <p className="mt-2 max-w-2xl text-base text-ink-soft">{group.intro}</p>
              </div>
              <span className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-teal-800 ring-1 ring-line sm:self-auto">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
                {group.sections.reduce((n, sec) => n + sec.items.length, 0)} services · {group.doctor}
              </span>
            </div>
            {group.sections.map((sec, si) => (
              <div key={sec.title} className={si === 0 ? "mt-8" : "mt-12"}>
                <div className="flex items-center gap-3">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">{sec.title}</h4>
                  <span className="h-px flex-1 bg-line" aria-hidden="true" />
                  <span className="text-xs text-muted">{sec.items.length}</span>
                </div>
                <motion.ul
                  initial="hidden"
                  animate="show"
                  variants={{ show: { transition: { staggerChildren: 0.04, delayChildren: si * 0.15 } } }}
                  className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
                >
                  {sec.items.map((s) => {
                    const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[s.icon] ?? Icons.Sparkles;
                    return (
                      <motion.li
                        key={s.title}
                        variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <SpotlightCard className="group h-full p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-50 to-apricot-50 text-teal-700 ring-1 ring-line transition-transform duration-300 group-hover:scale-105">
                              <Icon className="h-5 w-5" />
                            </div>
                            <ArrowUpRight className="h-4 w-4 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                          </div>
                          <h3 className="mt-5 font-semibold tracking-tight text-ink">{s.title}</h3>
                          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
                        </SpotlightCard>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        <Reveal delay={0.1} className="mt-12 flex flex-col items-start justify-between gap-5 rounded-xl3 border border-line bg-white p-6 shadow-soft sm:flex-row sm:items-center sm:p-8">
          <div>
            <p className="font-display text-2xl tracking-tight text-ink">Not sure which doctor you need?</p>
            <p className="mt-1 text-sm text-ink-soft">
              Message us with your concern and we will book you with the right specialist.
            </p>
          </div>
          <a
            href={clinic.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-700"
          >
            Ask on WhatsApp
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
