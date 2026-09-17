"use client";

import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown, Clock, MapPin, Star } from "lucide-react";
import { type MouseEvent } from "react";
import { clinic } from "@/data/clinic";
import { MagneticButton } from "@/components/ui/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

const words = ["Specialised", "kidney", "&", "skin", "care,"];

export function Hero() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 20 });
  const sy = useSpring(my, { stiffness: 60, damping: 20 });
  const blobX = useTransform(sx, [0, 1], [-40, 40]);
  const blobY = useTransform(sy, [0, 1], [-30, 30]);
  const cardRX = useTransform(sy, [0, 1], [6, -6]);
  const cardRY = useTransform(sx, [0, 1], [-8, 8]);

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
      className="grain relative isolate overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
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

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
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

          <h1 className="mt-6 font-display text-[2.85rem] leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-[4.6rem]">
            {words.map((w, i) => (
              <span key={i} className="inline-block overflow-hidden pb-1 pr-[0.22em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%", rotate: 3 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.35 + i * 0.07 }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
            <br />
            <span className="inline-block overflow-hidden pb-2">
              <motion.span
                className="text-gradient inline-block"
                initial={{ y: "110%", rotate: 3 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.9, ease, delay: 0.35 + words.length * 0.07 }}
              >
                under one roof.
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.9 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft"
          >
            A board-certified dermatologist and a consultant nephrologist, together at RenoDerm. Clear
            explanations, honest treatment plans and results our patients talk about.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 1.05 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href={clinic.whatsapp} external>
              Book an appointment
              <ArrowDown className="h-4 w-4 -rotate-90 transition-transform group-hover:translate-x-0.5" />
            </MagneticButton>
            <MagneticButton href="#services" variant="secondary">
              Explore treatments
            </MagneticButton>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-ink-soft"
          >
            <li className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-apricot-400 text-apricot-400" />
              <span>
                <strong className="font-semibold text-ink">{clinic.rating.value.toFixed(1)}</strong> ·{" "}
                {clinic.rating.count} Google reviews
              </span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-teal-600" />
              Consultations {clinic.hours.consultation}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-teal-600" />
              {clinic.address.area}, {clinic.address.city}
            </li>
          </motion.ul>
        </div>

        {/* visual */}
        <div className="relative lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.6 }}
            style={reduce ? undefined : { rotateX: cardRX, rotateY: cardRY, transformPerspective: 1200 }}
            className="relative mx-auto max-w-md"
          >
            <div className="relative overflow-hidden rounded-xl3 border border-line bg-white p-2 shadow-lift">
              <div className="relative overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-teal-700 via-teal-600 to-teal-900 p-7 text-paper">
                <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-apricot-400/30 blur-2xl" />
                <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-teal-300/30 blur-2xl" />
                <p className="relative text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-200">
                  Two specialists
                </p>
                <div className="relative mt-5 space-y-4">
                  <SpecialistRow
                    initials="VM"
                    name="Dr. Vyoma Mehta Dholakia"
                    role="Dermatologist · M.D. (Skin & V.D.)"
                    tone="apricot"
                  />
                  <div className="h-px w-full bg-white/15" />
                  <SpecialistRow
                    initials="AD"
                    name="Dr. Akash Dholakia"
                    role="Nephrologist · MD, DrNB"
                    tone="teal"
                  />
                </div>
                <div className="relative mt-7 grid grid-cols-3 gap-3 text-center">
                  <MiniStat label="Rating" value="5.0" />
                  <MiniStat label="Reviews" value="29+" />
                  <MiniStat label="Days open" value="7" />
                </div>
              </div>
            </div>

            {/* floating chips */}
            <motion.div
              className="absolute -left-6 top-10 hidden rounded-2xl border border-line bg-white/90 px-4 py-3 shadow-lift backdrop-blur sm:block"
              animate={reduce ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-muted">Recent</p>
              <p className="mt-0.5 text-sm font-semibold text-ink">Subcision + PRP</p>
              <p className="text-xs text-ink-soft">Visible change in one session</p>
            </motion.div>
            <motion.div
              className="absolute -right-4 bottom-8 hidden rounded-2xl border border-line bg-white/90 px-4 py-3 shadow-lift backdrop-blur sm:block"
              animate={reduce ? undefined : { y: [0, 10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-apricot-400 text-apricot-400" />
                ))}
              </div>
              <p className="mt-1 text-xs text-ink-soft">“Hands down the best dermat”</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-muted lg:block"
      >
        <motion.span
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown className="h-5 w-5" />
        </motion.span>
      </motion.a>
    </section>
  );
}

function SpecialistRow({
  initials,
  name,
  role,
  tone,
}: {
  initials: string;
  name: string;
  role: string;
  tone: "apricot" | "teal";
}) {
  return (
    <div className="flex items-center gap-4">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl font-display text-lg ${
          tone === "apricot" ? "bg-apricot-300 text-ink" : "bg-teal-200 text-ink"
        }`}
      >
        {initials}
      </div>
      <div>
        <p className="font-semibold leading-tight">{name}</p>
        <p className="text-xs text-teal-100/90">{role}</p>
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white/10 px-2 py-3 backdrop-blur-sm">
      <p className="font-display text-2xl leading-none">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-wider text-teal-100/90">{label}</p>
    </div>
  );
}
