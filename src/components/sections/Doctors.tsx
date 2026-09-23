"use client";

import Image from "next/image";
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
            const phone = d.speciality === "Dermatology" ? clinic.phones.dermatology : clinic.phones.nephrology;
            return (
              <Reveal key={d.slug} delay={i * 0.12}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 260, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-xl3 border border-line bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift"
                >
                  <div className="brand-gradient-soft relative flex min-h-60 overflow-hidden border-b border-line sm:min-h-64">
                    <div className="brand-gradient-bar absolute inset-x-0 top-0 h-1" aria-hidden="true" />
                    <div className="absolute inset-y-0 right-0 w-[47%] [mask-image:radial-gradient(ellipse_100%_85%_at_80%_38%,black_35%,transparent_100%)] sm:w-[38%] sm:[mask-image:linear-gradient(to_right,transparent_0%,black_28%)]">
                      <Image
                        src={d.photo}
                        alt={`Portrait of ${d.name}`}
                        fill
                        sizes="(min-width: 1280px) 230px, (min-width: 1024px) 19vw, (min-width: 640px) 38vw, 47vw"
                        loading="eager"
                        className={`object-cover object-top ${d.slug === "dr-vyoma-mehta-dholakia" ? "scale-[1.1] sm:translate-y-3 sm:scale-[1.18]" : "sm:origin-bottom-right sm:scale-[0.9]"}`}
                      />
                    </div>
                    <div className="relative z-10 flex w-full min-w-0 flex-col justify-center px-5 py-6 sm:w-[72%] sm:px-7">
                      <span className="mb-4 h-1 w-10 rounded-full bg-apricot-400" aria-hidden="true" />
                      <p className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.08em] text-teal-700">{d.speciality}</p>
                      <h3 className="mt-3 whitespace-nowrap font-display text-[clamp(0.85rem,3.75vw,1rem)] leading-tight tracking-tight text-ink sm:text-[clamp(1.3rem,2.15vw,1.85rem)]">{d.name}</h3>
                      <p className="mt-3 max-w-[60%] text-xs font-medium leading-relaxed text-ink-soft sm:max-w-none sm:text-sm">{d.degrees}</p>
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
