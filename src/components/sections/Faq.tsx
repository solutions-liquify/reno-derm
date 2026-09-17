"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/clinic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-paper-2/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeading
              kicker="FAQ"
              title="Good to know"
              accent="before you visit."
              description="Short answers to the questions we get asked most."
            />
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <ul className="divide-y divide-line rounded-xl3 border border-line bg-white shadow-soft">
                {faqs.map((f, i) => {
                  const isOpen = open === i;
                  return (
                    <li key={f.q}>
                      <button
                        onClick={() => setOpen(isOpen ? null : i)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-${i}`}
                        className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left sm:px-8"
                      >
                        <span className={`text-base font-semibold tracking-tight transition-colors sm:text-lg ${isOpen ? "text-teal-800" : "text-ink"}`}>
                          {f.q}
                        </span>
                        <motion.span
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ type: "spring", stiffness: 300, damping: 20 }}
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${
                            isOpen ? "border-teal-300 bg-teal-50 text-teal-700" : "border-line text-ink-soft"
                          }`}
                        >
                          <Plus className="h-4 w-4" />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-${i}`}
                            key="content"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="px-6 pb-6 text-sm leading-relaxed text-ink-soft sm:px-8 sm:text-base">{f.a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
