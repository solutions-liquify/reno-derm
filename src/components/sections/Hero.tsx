"use client";

import { AnimatePresence, motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { Clock, MapPin, MessageCircle, Navigation, Phone, Star } from "lucide-react";
import { InstagramIcon as Instagram } from "@/components/ui/InstagramIcon";
import { useEffect, useState, type MouseEvent } from "react";
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

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-5 lg:grid-cols-12 lg:gap-8">
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

          <h1 className="mt-5 font-sans font-semibold text-[2.6rem] leading-[1.04] tracking-[-0.03em] text-ink sm:text-[3.4rem] lg:text-[3.6rem] xl:text-[4.25rem]">
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
            className="mt-7 grid gap-3 sm:grid-cols-2"
          >
            <div className="rounded-2xl border border-line bg-white/85 p-4 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Dermatology</p>
              <p className="mt-1 font-semibold text-ink">Dr. Vyoma Mehta Dholakia</p>
              <a href={clinic.phones.dermatology.href} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-teal-700">
                <Phone className="h-4 w-4 text-teal-600" />
                {clinic.phones.dermatology.number}
              </a>
              <a
                href={clinic.whatsapp.dermatology}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex w-fit items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-teal-700"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Dr. Vyoma
              </a>
            </div>
            <div className="rounded-2xl border border-line bg-white/85 p-4 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">Nephrology</p>
              <p className="mt-1 font-semibold text-ink">Dr. Akash Dholakia</p>
              <a href={clinic.phones.nephrology.href} className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-ink hover:text-teal-700">
                <Phone className="h-4 w-4 text-teal-600" />
                {clinic.phones.nephrology.number}
              </a>
              <a
                href={clinic.whatsapp.nephrology}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex w-fit items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-teal-700"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Dr. Akash
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 1.1 }}
            className="mt-4"
          >
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

        </div>

        {/* visual */}
        <div className="relative lg:col-span-5 lg:mt-14">
          <div className="relative mx-auto w-full max-w-[30rem] lg:mr-0">
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

                </div>
              </div>
            </motion.div>

            {/* corner chips: pinned to the card's corners, with content that ticks over */}
            <motion.div
              initial={{ opacity: 0, x: -16, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 1.3 }}
              className="absolute -left-6 -top-14 hidden sm:block lg:-left-12"
            >
              <ResultChip />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 16, y: -8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 1.45 }}
              className="absolute -bottom-14 -right-4 hidden sm:block lg:-right-6"
            >
              <ReviewChip />
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease, delay: 1.5 }}
            className="relative mx-auto mt-10 w-full max-w-[30rem] space-y-3 sm:mt-20 lg:mr-0"
          >
            <a
              href={clinic.maps.directions}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-3 rounded-2xl border border-line bg-white/85 px-4 py-3.5 shadow-soft backdrop-blur transition-colors hover:border-teal-300"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-100">
                <MapPin className="h-4 w-4" />
              </span>
              <span className="min-w-0 text-sm leading-snug">
                <span className="block font-semibold text-ink">
                  {clinic.address.line1}, {clinic.address.line2}
                </span>
                <span className="block text-xs text-ink-soft">
                  {clinic.address.area}, {clinic.address.city} {clinic.address.pincode}
                </span>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-teal-700 group-hover:text-teal-800">
                  Open in Google Maps
                  <Navigation className="h-3 w-3" />
                </span>
              </span>
            </a>

            <div className="flex items-start gap-3 rounded-2xl border border-line bg-white/85 px-4 py-3.5 shadow-soft backdrop-blur">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-100">
                <Instagram className="h-4 w-4" />
              </span>
              <span className="min-w-0 text-sm leading-snug">
                <span className="block text-xs text-ink-soft">For more details, visit us on Instagram</span>
                <span className="mt-0.5 flex flex-wrap gap-x-3 gap-y-0.5">
                  <a
                    href={clinic.social.instagramClinic}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-ink transition-colors hover:text-teal-700"
                  >
                    @renodermclinic
                  </a>
                  <a
                    href={clinic.social.instagramDoctor}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-ink transition-colors hover:text-teal-700"
                  >
                    @drvyoma_dermatologist
                  </a>
                </span>
              </span>
            </div>
          </motion.div>
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

const results = [
  { treatment: "Subcision + PRP", outcome: "Visible change in one session" },
  { treatment: "Ingrown toenail surgery", outcome: "Painless, no complications" },
  { treatment: "Hair PRP", outcome: "Effective for dryness and thinning" },
  { treatment: "Acne scar microneedling", outcome: "Smoother texture in weeks" },
];

const quotes = [
  { text: "Hands down the best dermat", who: "Ayushi" },
  { text: "Knowledgeable, patient, genuinely cares", who: "Mamta" },
  { text: "Professional, reassuring, personalized", who: "Shreya" },
  { text: "Never made me feel in pain", who: "Meet" },
];

const TICK_MS = 3600;

/** Cycles an index every TICK_MS, paused while `paused` is true. */
function useTicker(length: number, paused: boolean) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setI((v) => (v + 1) % length), TICK_MS);
    return () => window.clearInterval(id);
  }, [length, paused]);
  return i;
}

const swap = {
  initial: { opacity: 0, y: 8, filter: "blur(3px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  exit: { opacity: 0, y: -8, filter: "blur(3px)" },
};

function ResultChip() {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);
  const i = useTicker(results.length, !!reduce || hover);
  const r = results[i];
  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative w-[15.5rem] overflow-hidden rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-lift backdrop-blur"
    >
      <div className="flex items-center justify-between">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">Recent result</p>
        <span className="flex items-center gap-1" aria-hidden="true">
          {results.map((_, k) => (
            <span
              key={k}
              className={`h-1 rounded-full transition-all duration-500 ${k === i ? "w-3 bg-teal-500" : "w-1 bg-line"}`}
            />
          ))}
        </span>
      </div>
      <div className="relative mt-0.5 h-[2.35rem]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={i}
            variants={reduce ? undefined : swap}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease }}
            className="absolute inset-0"
          >
            <p className="truncate text-sm font-semibold text-ink">{r.treatment}</p>
            <p className="truncate text-xs text-ink-soft">{r.outcome}</p>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* progress hairline that refills on every tick */}
      {!reduce && (
        <motion.span
          key={`bar-${i}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: hover ? 0 : 1 }}
          transition={{ duration: TICK_MS / 1000, ease: "linear" }}
          className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-teal-400 to-apricot-400"
        />
      )}
    </motion.div>
  );
}

function ReviewChip() {
  const reduce = useReducedMotion();
  const [hover, setHover] = useState(false);
  const i = useTicker(quotes.length, !!reduce || hover);
  const q = quotes[i];
  return (
    <motion.div
      onHoverStart={() => setHover(true)}
      onHoverEnd={() => setHover(false)}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="w-[15.5rem] rounded-2xl border border-line bg-white/95 px-4 py-3 shadow-lift backdrop-blur"
    >
      <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }).map((_, k) => (
          <motion.span
            key={`${i}-${k}`}
            initial={reduce ? false : { scale: 0.4, opacity: 0.3 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 18, delay: 0.08 * k }}
            className="inline-flex"
          >
            <Star className="h-3.5 w-3.5 fill-apricot-400 text-apricot-400" />
          </motion.span>
        ))}
      </div>
      <div className="relative mt-1 h-[2.1rem]">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={i}
            variants={reduce ? undefined : swap}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4, ease }}
            className="absolute inset-0"
          >
            <p className="truncate text-xs font-medium text-ink">“{q.text}”</p>
            <p className="text-[11px] text-muted">{q.who} · Google review</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
