import { ArrowRight, Clock, MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/InstagramIcon";
import { clinic, doctors } from "@/data/clinic";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-paper pt-28 pb-12 sm:pt-36 sm:pb-16 lg:pt-40">
      <div className="brand-gradient-bar absolute inset-x-0 top-0 h-1" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-teal-50/80 via-paper to-apricot-50/60" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-12">
          <div className="flex min-w-0 flex-col justify-center">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-teal-700">
              <span className="h-1.5 w-1.5 rounded-full bg-apricot-400" aria-hidden="true" />
              Now open in Gota, Ahmedabad
            </p>

            <h1 className="mt-6 font-display text-[clamp(3rem,4vw,3.9rem)] leading-[1.07] tracking-[-0.035em] text-ink">
              Specialised kidney &amp; skin care,
              <span className="text-gradient block">under one roof.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg">
              A board-certified dermatologist and a consultant nephrologist, together at RenoDerm.
              Clear explanations, honest plans and results patients talk about.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
              <a
                href="#services"
                className="inline-flex min-h-12 items-center gap-2 rounded-full bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-soft transition-colors hover:bg-teal-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                Explore services
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={clinic.maps.directions}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center gap-2 text-sm font-semibold text-teal-800 underline decoration-teal-300 underline-offset-4 transition-colors hover:text-teal-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700"
              >
                Get directions
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] bg-teal-800 p-5 text-paper shadow-lift sm:p-6">
            <div className="brand-gradient-bar absolute inset-x-0 top-0 h-1" aria-hidden="true" />
            <div className="divide-y divide-white/15">
              {doctors.map((doctor, index) => {
                const channel = index === 0 ? "dermatology" : "nephrology";
                const schedule = clinic.hours.schedule[index];
                const phone = clinic.phones[channel];
                return (
                  <div key={doctor.slug} className="py-4 first:pt-1 last:pb-0">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-apricot-200">{doctor.speciality}</p>
                    <h2 className="mt-1 text-lg font-semibold text-white sm:text-xl">{doctor.name}</h2>
                    <p className="mt-0.5 text-xs text-teal-100/80 sm:text-sm">{doctor.degrees}</p>
                    <div className="mt-2.5 flex items-center gap-2 text-xs text-teal-100 sm:text-sm">
                      <Clock className="h-3.5 w-3.5 shrink-0 text-apricot-200" aria-hidden="true" />
                      {schedule.days} · {schedule.time}
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <a href={phone.href} className="inline-flex min-h-10 items-center gap-2 rounded-full border border-white/25 px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-sm">
                        <Phone className="h-3.5 w-3.5 text-apricot-200" aria-hidden="true" />
                        {phone.number}
                      </a>
                      <a href={clinic.whatsapp[channel]} target="_blank" rel="noreferrer" aria-label={"WhatsApp " + doctor.name} className="inline-flex min-h-10 items-center gap-2 rounded-full bg-apricot-300 px-4 py-2 text-xs font-semibold text-ink transition-colors hover:bg-apricot-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-sm">
                        <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
            <p className="mt-4 border-t border-white/15 pt-3 text-xs text-teal-100/80 sm:text-sm">Sunday consultations are on an appointment basis.</p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 border-t border-line pt-6 text-sm sm:grid-cols-3 lg:mt-20">
          <div className="flex items-start gap-3">
            <Star className="mt-0.5 h-4 w-4 shrink-0 fill-apricot-400 text-apricot-400" aria-hidden="true" />
            <div>
              <p className="font-semibold text-ink">{clinic.rating.value.toFixed(1)} on Google</p>
              <a href={clinic.social.googleReviews} target="_blank" rel="noreferrer" className="text-ink-soft underline decoration-line underline-offset-4 hover:text-teal-700">Read Google reviews</a>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" aria-hidden="true" />
            <a href={clinic.maps.directions} target="_blank" rel="noreferrer" className="text-ink-soft hover:text-teal-700">
              <span className="block font-semibold text-ink">{clinic.address.line1}, {clinic.address.area}</span>
              <span className="block">{clinic.address.line2}, {clinic.address.city} {clinic.address.pincode}</span>
            </a>
          </div>
          <div className="flex items-start gap-3">
            <Instagram className="mt-0.5 h-4 w-4 shrink-0 text-teal-700" aria-hidden="true" />
            <div>
              <a href={clinic.social.instagramClinic} target="_blank" rel="noreferrer" className="block font-semibold text-ink hover:text-teal-700">@renodermclinic</a>
              <a href={clinic.social.instagramDoctor} target="_blank" rel="noreferrer" className="block text-ink-soft hover:text-teal-700">@drvyoma_dermatologist</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
