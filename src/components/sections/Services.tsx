import * as Icons from "lucide-react";
import { ArrowUpRight } from "lucide-react";
import { clinic, services } from "@/data/clinic";

const departments = [
  { key: "dermatology", contact: "WhatsApp Dr. Vyoma" },
  { key: "nephrology", contact: "WhatsApp Dr. Akash" },
] as const;

export function Services() {
  return (
    <section id="services" className="relative bg-paper-2/60 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="space-y-12 sm:space-y-14">
          {departments.map(({ key, contact }) => {
            const group = services[key];
            return (
              <article key={key}>
                <div className="flex flex-col gap-4 border-b border-line pb-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="font-display text-2xl leading-tight tracking-tight text-ink sm:text-3xl">
                      {group.heading}
                    </h2>
                    <p className="mt-1 text-sm text-ink-soft">{group.doctor}</p>
                  </div>
                  <a
                    href={clinic.whatsapp[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:self-auto"
                  >
                    {contact}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>

                {group.sections.map((section) => (
                  <div key={section.title} className="mt-5">
                    <div className="flex items-center gap-3">
                      <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
                        {section.title}
                      </h3>
                      <span className="h-px flex-1 bg-line" aria-hidden="true" />
                    </div>
                    <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                      {section.items.map((service) => {
                        const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Sparkles;
                        return (
                          <li key={service.title} className="flex h-32 items-start gap-3 rounded-2xl border border-line bg-white p-4 shadow-sm">
                            <span className="brand-gradient-soft flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-teal-700 ring-1 ring-line" aria-hidden="true">
                              <Icon className="h-[18px] w-[18px]" />
                            </span>
                            <div className="min-w-0">
                              <h4 className="text-sm font-semibold leading-snug text-ink">{service.title}</h4>
                              <p className="mt-1 text-xs leading-relaxed text-ink-soft">{service.desc}</p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
