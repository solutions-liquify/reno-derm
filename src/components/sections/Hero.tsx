"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Clock, MapPin, Navigation, Star } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/InstagramIcon";
import { type MouseEvent } from "react";
import { clinic, doctors } from "@/data/clinic";
import { MagneticButton } from "@/components/ui/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

const lines: { text: string; gradient?: boolean }[] = [
  { text: "Specialised kidney" },
  { text: "& skin care," },
  { text: "under one roof.", gradient: true },
];

export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const blobX = useTransform(sx, [0, 1], [-40, 40]);
  const blobY = useTransform(sy, [0, 1], [-30, 30]);
  const cardRX = useTransform(sy, [0, 1], [4, -4]);
  const cardRY = useTransform(sx, [0, 1], [-6, 6]);

  function onMove(e: MouseEvent<HTMLElement>) {
    if (reduce) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  }

  return (
    <section
      id="top"
      onMouseMove={onMove}
      className="grain relative isolate flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-24 lg:pb-12"
    >
      {/* background */}
      <div className="dot-grid absolute inset-0 -z-20 opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <motion.div
        style={{ x: blobX, y: blobY }}
        className="absolute -top-40 right-[-10%] -z-10 h-[38rem] w-[38rem] rounded-full bg-teal-200/50 blur-3xl"
      />
      <motion.div
        style={{ x: blobY, y: blobX }}
        className="absolute -bottom-52 left-[-12%] -z-10 h-[34rem] w-[34rem] rounded-full bg-apricot-200/50 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-10">
        {/* copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
            className="kicker"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500" />
            </span>
            Now open in Gota, Ahmedabad
          </motion.div>

          <h1 className="mt-5 font-sans font-semibold text-[2.6rem] leading-[1.04] tracking-[-0.03em] text-ink sm:text-[3.4rem] lg:text-[3.9rem] xl:text-[4.5rem]">
            {lines.map((l, i) => (
              <span key={l.text} className="block overflow-hidden pb-[0.08em]">
                <motion.span
                  className={`block ${l.gradient ? "text-gradient" : ""}`}
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.95, ease, delay: 0.4 + i * 0.1 }}
                >
                  {l.text}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.85 }}
            className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            A board-certified dermatologist and a consultant nephrologist, together at RenoDerm.
            Clear explanations, honest plans and results patients talk about.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 1 }}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#services">
              Explore treatments
            </MagneticButton>
            <MagneticButton href={clinic.maps.directions} variant="secondary" external>
              <Navigation className="h-4 w-4" />
              Get directions
            </MagneticButton>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.25 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm text-ink-soft"
          >
            <li className="flex items-center gap-2">
              <span className="flex items-center gap-0.5" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-apricot-400 text-apricot-400" />
                ))}
              </span>
              <span>
                <strong className="font-semibold text-ink">{clinic.rating.value.toFixed(1)}</strong> ·{" "}
                {clinic.rating.count} Google reviews
              </span>
            </li>
            <li className="hidden h-4 w-px bg-line sm:block" aria-hidden="true" />
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-teal-600" />
              Mon – Sat, 3:30 – 8 PM · Sunday by appointment
            </li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.35 }}
            className="mt-5 space-y-3 text-sm text-ink-soft"
          >
            <a
              href={clinic.maps.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex max-w-xl items-start gap-2.5 rounded-xl border border-line bg-white/70 px-4 py-3 backdrop-blur transition-colors hover:border-teal-300 hover:bg-white"
            >
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" />
              <span>
                <span className="block font-semibold text-ink">{clinic.address.full}</span>
                <span className="link-underline mt-0.5 inline-block text-xs text-teal-700 group-hover:text-teal-800">
                  Open in Google Maps
                </span>
              </span>
            </a>
            <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="inline-flex items-center gap-1.5">
                <Instagram className="h-4 w-4 text-teal-600" />
                For more details, visit us on Instagram:
              </span>
              <a
                href={clinic.social.instagramClinic}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-semibold text-ink hover:text-teal-800"
              >
                @renodermclinic
              </a>
              <span aria-hidden="true">·</span>
              <a
                href={clinic.social.instagramDoctor}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline font-semibold text-ink hover:text-teal-800"
              >
                @drvyoma_dermatologist
              </a>
            </p>
          </motion.div>
        </div>

        {/* visual */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto w-full max-w-[26rem]">
            {/* soft halo */}
            <div className="absolute inset-0 -z-10 scale-110 rounded-[2rem] bg-gradient-to-br from-teal-300/30 to-apricot-200/30 blur-2xl" />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease, delay: 0.55 }}
              style={reduce ? undefined : { rotateX: cardRX, rotateY: cardRY, transformPerspective: 1400 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-xl3 border border-line bg-white p-2 shadow-lift">
                <div className="relative overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-teal-700 via-teal-600 to-teal-900 p-6 text-paper sm:p-7">
                  <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-apricot-400/30 blur-2xl" />
                  <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-teal-300/30 blur-2xl" />

                  <div className="relative flex items-center justify-between">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-200">
                      Two specialists
                    </p>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1 text-[11px] font-medium text-teal-100 ring-1 ring-white/10">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      </span>
                      Mon – Sat · 3:30 – 8 PM
                    </span>
                  </div>

                  <div className="relative mt-5 space-y-4">
                    {doctors.map((d, i) => (
                      <div key={d.slug}>
                        {i > 0 && <div className="mb-4 h-px w-full bg-white/15" />}
                        <SpecialistRow
                          initials={d.initials}
                          name={d.name}
                          degrees={d.degrees}
                          hours={clinic.hours.schedule[i]?.short}
                          tone={d.speciality === "Dermatology" ? "apricot" : "teal"}
                          delay={0.9 + i * 0.1}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-6 grid grid-cols-3 gap-2.5 text-center">
                    <MiniStat label="Rating" value="5.0" delay={1.1} />
                    <MiniStat label="Reviews" value="29+" delay={1.18} />
                    <MiniStat label="Sunday" value="By appt" delay={1.26} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* floating chips: siblings of the tilted card so they never cover its content */}
            <motion.div
              initial={{ opacity: 0, x: -16, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 1.3 }}
              className="absolute -left-4 -top-7 hidden sm:block lg:-left-12"
            >
              <motion.div
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-lift backdrop-blur"
              >
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">Recent result</p>
                <p className="mt-0.5 text-sm font-semibold text-ink">Subcision + PRP</p>
                <p className="text-xs text-ink-soft">Visible change in one session</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16, y: -8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 1.45 }}
              className="absolute -bottom-7 -right-3 hidden sm:block lg:-right-10"
            >
              <motion.div
                animate={reduce ? undefined : { y: [0, 8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-lift backdrop-blur"
              >
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-apricot-400 text-apricot-400" />
                  ))}
                </div>
                <p className="mt-1 text-xs font-medium text-ink">“Hands down the best dermat”</p>
                <p className="text-[11px] text-muted">Ayushi · Google review</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecialistRow({
  initials,
  name,
  degrees,
  hours,
  tone,
  delay,
}: {
  initials: string;
  name: string;
  degrees: string;
  hours?: string;
  tone: "apricot" | "teal";
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease, delay }}
      className="flex items-start gap-4"
    >
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl font-display text-base ${
          tone === "apricot" ? "bg-apricot-300 text-ink" : "bg-teal-200 text-ink"
        }`}
      >
        {initials}
      </div>
      <div className="min-w-0">
        <p className="text-[15px] font-semibold leading-tight">{name}</p>
        <p className="mt-1 text-xs leading-snug text-teal-100/90">
          {degrees}
          {hours && <span className="text-teal-200/80"> · {hours}</span>}
        </p>
      </div>
    </motion.div>
  );
}

function MiniStat({ label, value, delay }: { label: string; value: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease, delay }}
      className="rounded-xl bg-white/10 px-2 py-2.5 ring-1 ring-white/10 backdrop-blur-sm"
    >
      <p className="font-display text-xl leading-none sm:text-2xl">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-wider text-teal-100/90">{label}</p>
    </motion.div>
  );
}
