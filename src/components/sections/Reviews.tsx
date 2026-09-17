"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { clinic, reviews } from "@/data/clinic";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

function Stars() {
  return (
    <div className="flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-apricot-400 text-apricot-400" />
      ))}
    </div>
  );
}

export function Reviews() {
  const featured = reviews.slice(0, 3);
  const rest = reviews.slice(3);
  const [i, setI] = useState(0);
  const [dir, setDir] = useState(1);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (d: number) => {
      setDir(d);
      setI((v) => (v + d + featured.length) % featured.length);
    },
    [featured.length]
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 6000);
    return () => clearInterval(id);
  }, [go, paused]);

  const r = featured[i];

  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <SectionHeading
              kicker="Patient stories"
              title="Rated 5.0 by"
              accent="every single patient."
              description={`${clinic.rating.count} reviews on Google, all five stars. Here is what people say after their visit.`}
            />
            <Reveal delay={0.2} className="mt-8 flex items-center gap-4">
              <div className="flex items-center gap-3 rounded-full border border-line bg-white py-2 pl-2 pr-4 shadow-soft">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-paper-2 font-display text-lg text-ink">
                  G
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-xl leading-none text-ink">5.0</span>
                    <Stars />
                  </div>
                  <a
                    href={clinic.social.googleReviews}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-underline text-xs text-muted"
                  >
                    See all {clinic.rating.count} Google reviews
                  </a>
                </div>
              </div>
            </Reveal>

            {/* featured carousel */}
            <Reveal delay={0.3}>
              <div
                className="relative mt-8 overflow-hidden rounded-xl3 border border-line bg-gradient-to-br from-teal-700 to-teal-900 p-7 text-paper shadow-lift sm:p-8"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                <Quote className="absolute right-6 top-6 h-10 w-10 text-white/10" />
                <AnimatePresence mode="wait" custom={dir}>
                  <motion.figure
                    key={r.name}
                    custom={dir}
                    initial={{ opacity: 0, x: 40 * dir, filter: "blur(4px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -40 * dir, filter: "blur(4px)" }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Stars />
                    <blockquote className="mt-4 min-h-[9.5rem] text-[15px] leading-relaxed text-paper/90">
                      “{r.text}”
                    </blockquote>
                    <figcaption className="mt-5 flex items-center justify-between gap-3">
                      <div>
                        <p className="font-semibold">{r.name}</p>
                        <p className="text-xs text-teal-200">
                          {r.tag} · {r.when}
                        </p>
                      </div>
                    </figcaption>
                  </motion.figure>
                </AnimatePresence>

                <div className="mt-6 flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {featured.map((_, k) => (
                      <button
                        key={k}
                        aria-label={`Show review ${k + 1}`}
                        onClick={() => {
                          setDir(k > i ? 1 : -1);
                          setI(k);
                        }}
                        className="h-1.5 overflow-hidden rounded-full bg-white/20"
                        style={{ width: k === i ? 28 : 10 }}
                      >
                        {k === i && (
                          <motion.span
                            key={`${k}-${paused}`}
                            initial={{ width: "0%" }}
                            animate={{ width: paused ? "0%" : "100%" }}
                            transition={{ duration: 6, ease: "linear" }}
                            className="block h-full bg-apricot-300"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <button
                      aria-label="Previous review"
                      onClick={() => go(-1)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-paper transition-colors hover:bg-white/10"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button
                      aria-label="Next review"
                      onClick={() => go(1)}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-paper transition-colors hover:bg-white/10"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* masonry-ish grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {rest.map((rv, k) => (
              <Reveal key={rv.name} delay={0.05 * k} className={k % 3 === 0 ? "sm:mt-8" : ""}>
                <SpotlightCard className="h-full p-6">
                  <div className="flex items-center justify-between">
                    <Stars />
                    <span className="rounded-full bg-paper-2 px-2.5 py-1 text-[11px] font-medium text-ink-soft">
                      {rv.tag}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">“{rv.text}”</p>
                  <div className="mt-5 flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-teal-100 to-apricot-100 text-xs font-bold text-ink">
                      {rv.name
                        .split(" ")
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join("")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-ink">{rv.name}</p>
                      <p className="text-xs text-muted">Google · {rv.when}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
