import Image from "next/image";
import { ArrowUp } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/InstagramIcon";
import { brand, clinic, navLinks } from "@/data/clinic";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-paper">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo light />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-paper/65">{clinic.description}</p>
            <div className="mt-6 flex gap-3">
              <a
                href={clinic.social.instagramClinic}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RenoDerm on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-paper/80 transition-colors hover:border-teal-300 hover:text-teal-200"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href={clinic.social.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="RenoDerm on Google Maps"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 font-display text-base text-paper/80 transition-colors hover:border-teal-300 hover:text-teal-200"
              >
                G
              </a>
            </div>

            <a
              href={clinic.social.instagramClinic}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-3 pr-5 transition-colors hover:border-teal-300/60 hover:bg-white/10"
            >
              <span className="shrink-0 overflow-hidden rounded-xl bg-white p-1.5">
                <Image
                  src={brand.instagramQr.image.src}
                  alt={`QR code for ${brand.instagramQr.handle} on Instagram`}
                  width={brand.instagramQr.image.width}
                  height={brand.instagramQr.image.height}
                  sizes="80px"
                  className="h-[4.5rem] w-auto"
                />
              </span>
              <span className="text-sm leading-snug">
                <span className="block font-semibold text-paper">Scan to follow us</span>
                <span className="mt-0.5 block text-paper/60">
                  {brand.instagramQr.handle} on Instagram
                </span>
              </span>
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="link-underline text-sm text-paper/75 hover:text-paper">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Clinic</p>
            <address className="mt-4 space-y-2.5 text-sm not-italic text-paper/75">
              <p>{clinic.address.full}</p>
              <p>
                Dermatology · <a href={clinic.phones.dermatology.href} className="link-underline hover:text-paper">
                  {clinic.phones.dermatology.number}
                </a>
              </p>
              <p>
                Nephrology · <a href={clinic.phones.nephrology.href} className="link-underline hover:text-paper">
                  {clinic.phones.nephrology.number}
                </a>
              </p>
              <p>
                <a href={`mailto:${clinic.email}`} className="link-underline hover:text-paper">
                  {clinic.email}
                </a>
              </p>
              <p>Open {clinic.hours.clinic}</p>
            </address>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-paper/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {clinic.fullName}. Information on this site is for general awareness and
            is not a substitute for a consultation.
          </p>
          <a href="#top" className="inline-flex items-center gap-1.5 text-paper/70 transition-colors hover:text-paper">
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
