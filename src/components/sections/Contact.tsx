import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import { clinic } from "@/data/clinic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Contact() {
  return (
    <section id="contact" className="bg-paper py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading kicker="Visit us" title="Find us in Gota." />

        <div className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch">
          <div className="space-y-5">
            <Reveal className="overflow-hidden rounded-xl3 border border-line bg-white p-5 shadow-soft sm:p-7">
              <div className="flex items-center gap-3 text-teal-700">
                <MapPin className="h-5 w-5 shrink-0" aria-hidden="true" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em]">RenoDerm clinic</h3>
              </div>
              <p className="mt-4 max-w-md text-base font-medium leading-relaxed text-ink">
                {clinic.address.line1}, {clinic.address.line2}, {clinic.address.area}, {clinic.address.city}, {clinic.address.state} {clinic.address.pincode}
              </p>
              <a
                href={clinic.maps.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full bg-teal-700 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Get directions
              </a>
            </Reveal>

            <Reveal delay={0.05} className="overflow-hidden rounded-xl3 border border-line bg-white p-5 shadow-soft sm:p-7">
              <div className="flex items-center gap-3 text-teal-700">
                <Clock className="h-5 w-5 shrink-0" aria-hidden="true" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em]">Consultation hours</h3>
              </div>
              <ul className="mt-2 divide-y divide-line">
                {clinic.hours.schedule.map((schedule) => {
                  const phone = clinic.phones[schedule.phone];
                  return (
                    <li key={schedule.doctor} className="py-4 last:pb-2">
                      <p className="font-semibold text-ink">{schedule.doctor}</p>
                      <p className="mt-0.5 text-xs text-muted">{schedule.speciality}</p>
                      <p className="mt-2 text-sm text-ink-soft">{schedule.days} · {schedule.time}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        <a
                          href={phone.href}
                          aria-label={`Call ${schedule.doctor} for ${schedule.speciality} at ${phone.number}`}
                          className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line px-3 py-2 text-xs font-semibold text-ink transition-colors hover:border-teal-300 hover:bg-teal-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:text-sm"
                        >
                          <Phone className="h-4 w-4 text-teal-700" aria-hidden="true" />
                          {phone.number}
                        </a>
                        <a
                          href={clinic.whatsapp[schedule.phone]}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`WhatsApp ${schedule.doctor} for ${schedule.speciality}`}
                          className="inline-flex min-h-10 items-center gap-2 rounded-full border border-line px-3 py-2 text-xs font-semibold text-ink transition-colors hover:border-teal-300 hover:bg-teal-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700 sm:text-sm"
                        >
                          <MessageCircle className="h-4 w-4 text-teal-700" aria-hidden="true" />
                          WhatsApp
                        </a>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <p className="border-t border-line pt-3 text-xs text-muted sm:text-sm">
                Sunday consultations are on an appointment basis.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="relative h-64 overflow-hidden rounded-xl3 border border-line bg-paper-2 p-2 shadow-soft sm:h-80 lg:h-full lg:min-h-[32rem]">
            <iframe
              title="RenoDerm clinic location on Google Maps"
              src={clinic.maps.embed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-full w-full rounded-[1.35rem] border-0"
            />
            <a
              href={clinic.maps.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-5 left-5 inline-flex min-h-10 items-center gap-2 rounded-full bg-teal-800 px-4 py-2 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-teal-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800"
            >
              <Navigation className="h-4 w-4" aria-hidden="true" />
              Open in Google Maps
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
