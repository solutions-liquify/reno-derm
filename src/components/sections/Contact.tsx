"use client";

import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/InstagramIcon";
import { useSyncExternalStore } from "react";
import { clinic } from "@/data/clinic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Contact() {
  // Resolved on the client only, so server and client markup always match.
  const today = useSyncExternalStore(
    () => () => {},
    () => new Date().toLocaleDateString("en-IN", { weekday: "long", timeZone: "Asia/Kolkata" }),
    () => ""
  );

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          kicker="Visit us"
          title="Find us in Gota,"
          accent="book in seconds."
          align="center"
          description="Walk-ins for enquiries are welcome during clinic hours. Consultations are by appointment so you never wait long."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* map */}
          <Reveal className="overflow-hidden rounded-xl3 border border-line bg-white p-2 shadow-soft lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-paper-2 sm:aspect-[16/10]">
              <iframe
                title="RenoDerm clinic location on Google Maps"
                src={clinic.maps.embed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0 grayscale-[20%] transition-[filter] duration-500 hover:grayscale-0"
              />
              <a
                href={clinic.maps.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-ink/90 px-4 py-2.5 text-sm font-semibold text-paper shadow-lift backdrop-blur transition-colors hover:bg-teal-700"
              >
                <Navigation className="h-4 w-4" />
                Get directions
              </a>
            </div>
          </Reveal>

          {/* details */}
          <div className="grid grid-cols-1 gap-6 lg:col-span-5">
            <Reveal delay={0.05} className="rounded-xl3 border border-line bg-white p-7 shadow-soft">
              <div className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-100">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-semibold text-ink">Address</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                    {clinic.address.line1}, {clinic.address.line2},<br />
                    {clinic.address.area}, {clinic.address.city}, {clinic.address.state} {clinic.address.pincode}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-100">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="w-full">
                  <h3 className="font-semibold text-ink">Hours</h3>
                  <ul className="mt-2 divide-y divide-line text-sm">
                    {clinic.hours.weekly.map((h) => (
                      <li
                        key={h.day}
                        className={`flex items-center justify-between py-1.5 ${h.day === today ? "font-semibold text-teal-800" : "text-ink-soft"}`}
                      >
                        <span className="flex items-center gap-2">
                          {h.day}
                          {h.day === today && (
                            <span className="rounded-full bg-teal-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-teal-700 ring-1 ring-teal-100">
                              Today
                            </span>
                          )}
                        </span>
                        <span>{h.time}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 rounded-xl bg-apricot-50 px-3 py-2 text-xs leading-relaxed text-apricot-600 ring-1 ring-apricot-100">
                    Doctor consultations {clinic.hours.consultation}. {clinic.hours.note}
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="rounded-xl3 border border-line bg-white p-7 shadow-soft">
              <h3 className="font-semibold text-ink">Talk to us</h3>
              <ul className="mt-4 space-y-3">
                {clinic.phones.map((p) => (
                  <li key={p.href}>
                    <a
                      href={p.href}
                      className="group flex items-center justify-between rounded-xl border border-line px-4 py-3 transition-colors hover:border-teal-300 hover:bg-teal-50/40"
                    >
                      <span className="flex items-center gap-3 text-sm">
                        <Phone className="h-4 w-4 text-teal-600 transition-transform group-hover:-rotate-12" />
                        <span>
                          <span className="block text-[11px] uppercase tracking-wider text-muted">{p.label}</span>
                          <span className="font-semibold text-ink">{p.number}</span>
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={`mailto:${clinic.email}`}
                    className="group flex items-center gap-3 rounded-xl border border-line px-4 py-3 text-sm transition-colors hover:border-teal-300 hover:bg-teal-50/40"
                  >
                    <Mail className="h-4 w-4 text-teal-600" />
                    <span className="font-semibold text-ink">{clinic.email}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={clinic.social.instagramClinic}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 rounded-xl border border-line px-4 py-3 text-sm transition-colors hover:border-teal-300 hover:bg-teal-50/40"
                  >
                    <Instagram className="h-4 w-4 text-teal-600" />
                    <span className="font-semibold text-ink">@renodermclinic</span>
                  </a>
                </li>
              </ul>
              <div className="mt-5">
                <MagneticButton href={clinic.whatsapp} external className="w-full">
                  <MessageCircle className="h-4 w-4" />
                  Book on WhatsApp
                </MagneticButton>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
