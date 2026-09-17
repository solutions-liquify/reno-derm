"use client";

import Image from "next/image";
import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone, QrCode } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/InstagramIcon";
import { brand, clinic } from "@/data/clinic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Contact() {
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
          <Reveal className="flex flex-col overflow-hidden rounded-xl3 border border-line bg-white p-2 shadow-soft lg:col-span-7">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-paper-2 sm:aspect-[16/10] lg:aspect-auto lg:min-h-[28rem] lg:flex-1">
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
                    {clinic.hours.schedule.map((h) => (
                      <li key={h.doctor} className="flex items-center justify-between gap-4 py-2">
                        <span>
                          <span className="block font-semibold text-ink">{h.doctor}</span>
                          <span className="block text-xs text-muted">
                            {h.speciality} · {h.days}
                          </span>
                        </span>
                        <span className="shrink-0 font-semibold text-teal-800">{h.time}</span>
                      </li>
                    ))}
                    <li className="flex items-center justify-between gap-4 py-2 text-ink-soft">
                      <span>Sunday</span>
                      <span className="shrink-0">{clinic.hours.sunday}</span>
                    </li>
                  </ul>
                  <p className="mt-3 rounded-xl bg-apricot-50 px-3 py-2 text-xs leading-relaxed text-apricot-600 ring-1 ring-apricot-100">
                    {clinic.hours.note}
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

        {/* Instagram QR */}
        <div className="mt-6">
          <Reveal className="rounded-xl3 border border-line bg-gradient-to-br from-teal-800 to-ink p-7 text-paper shadow-soft sm:p-10">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-12">
              <div className="md:col-span-7">
                <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-teal-100">
                  <QrCode className="h-3.5 w-3.5" />
                  Instagram
                </span>
                <h3 className="mt-4 font-display text-2xl leading-tight tracking-tight sm:text-3xl">
                  Scan to follow {brand.instagramQr.handle}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-teal-100/85">
                  Skin tips, kidney health explainers and clinic updates. Point your phone camera at the code.
                </p>
                <div className="mt-6 flex text-sm">
                  <a
                    href={clinic.social.instagramClinic}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-ink shadow-lift transition-colors hover:bg-teal-100"
                  >
                    <Instagram className="h-4 w-4" />
                    Open Instagram
                  </a>
                </div>
              </div>

              <div className="flex justify-center md:col-span-5 md:justify-end">
                <a
                  href={clinic.social.instagramClinic}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open ${brand.instagramQr.handle} on Instagram`}
                  className="rounded-2xl bg-white p-3 shadow-lift transition-transform duration-300 hover:scale-[1.03]"
                >
                  <Image
                    src={brand.instagramQr.image.src}
                    alt={`QR code linking to ${brand.instagramQr.handle} on Instagram`}
                    width={brand.instagramQr.image.width}
                    height={brand.instagramQr.image.height}
                    sizes="200px"
                    className="h-52 w-auto sm:h-60"
                  />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
