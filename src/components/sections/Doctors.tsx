"use client";

import { motion } from "framer-motion";
import { Check, GraduationCap, Phone } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/InstagramIcon";
import { clinic, doctors } from "@/data/clinic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Doctors() {
  return (
    <section id="doctors" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="Your doctors"
          title="Meet the specialists"
          accent="behind RenoDerm."
          align="center"
          description="Husband-and-wife team, two disciplines, one standard of care."
        />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {doctors.map((d, i) => {
            const isDerm = d.speciality === "Dermatology";
            const phone = isDerm ? clinic.phones.dermatology : clinic.phones.nephrology;
            return (
              <Reveal key={d.slug} delay={i * 0.12}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-xl3 border border-line bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift"
                >
                  {/* header band */}
                  <div
                    className={`relative overflow-hidden p-7 sm:p-8 ${
                      isDerm
                        ? "bg-gradient-to-br from-apricot-100 via-apricot-50 to-white"
                        : "bg-gradient-to-br from-teal-100 via-teal-50 to-white"
                    }`}
                  >
                    <div
                      className={`absolute -right-10 -top-10 h-40 w-40 rounded-full blur-2xl transition-transform duration-700 group-hover:scale-125 ${
                        isDerm ? "bg-apricot-300/50" : "bg-teal-300/50"
                      }`}
                    />
                    <div className="relative flex items-center gap-5">
                      <div
                        className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl font-display text-2xl shadow-soft ${
                          isDerm ? "bg-apricot-400 text-white" : "bg-teal-600 text-white"
                        }`}
                      >
                        {d.initials}
                      </div>
                      <div>
                        <span className="kicker">{d.speciality}</span>
                        <h3 className="mt-2 font-display text-2xl tracking-tight text-ink sm:text-3xl">{d.name}</h3>
                        <p className="mt-1 text-sm font-medium text-ink-soft">{d.degrees}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-7 sm:p-8">
                    <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">{d.role}</p>
                    <p className="mt-3 leading-relaxed text-ink-soft">{d.bio}</p>

                    <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                      {d.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-ink">
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-50 text-teal-700 ring-1 ring-teal-100">
                            <Check className="h-3 w-3" />
                          </span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-col items-start gap-4 border-t border-line pt-6">
                      <ul className="space-y-1.5">
                        {d.training.map((t) => (
                          <li key={t} className="flex items-center gap-2 text-xs text-muted">
                            <GraduationCap className="h-3.5 w-3.5 text-teal-600" />
                            {t}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        <a
                          href={phone.href}
                          className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-xs font-semibold text-ink transition-colors hover:border-teal-300 hover:text-teal-800"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          {phone.number}
                        </a>
                        {d.instagram && (
                          <a
                            href={d.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-2 text-xs font-semibold text-ink transition-colors hover:border-teal-300 hover:text-teal-800"
                          >
                            <Instagram className="h-3.5 w-3.5" />
                            Follow
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
