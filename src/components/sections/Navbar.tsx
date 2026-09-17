"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { clinic, navLinks } from "@/data/clinic";
import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  // Track which section is in view for the nav indicator.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left bg-gradient-to-r from-teal-500 via-teal-400 to-apricot-400"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="fixed left-0 right-0 top-0 z-50 w-full px-3 pt-3 sm:px-6"
      >
        <div
          className={`mx-auto flex w-full max-w-7xl items-center justify-between gap-3 rounded-full border px-3 py-2 transition-all duration-500 sm:px-5 sm:py-2.5 ${
            scrolled
              ? "border-line/80 bg-paper/80 shadow-soft backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <a href="#top" aria-label="RenoDerm home" className="min-w-0 shrink-0">
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navLinks.map((l) => {
              const isActive = active === l.href.slice(1);
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className="relative rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-white shadow-soft"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={clinic.phones[0].href}
              className="link-underline text-sm font-semibold text-ink-soft hover:text-ink"
            >
              {clinic.phones[0].number}
            </a>
            <a
              href={clinic.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition-colors hover:bg-teal-700"
            >
              <Phone className="h-4 w-4 transition-transform group-hover:-rotate-12" />
              Book appointment
            </a>
          </div>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line bg-white/80 text-ink lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-paper/95 backdrop-blur-xl lg:hidden"
          >
            <motion.nav
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
              className="flex h-full flex-col justify-center gap-2 px-8"
              aria-label="Mobile"
            >
              {navLinks.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  variants={{ hidden: { opacity: 0, x: -24 }, show: { opacity: 1, x: 0 } }}
                  className="font-display text-4xl tracking-tight text-ink"
                >
                  {l.label}
                </motion.a>
              ))}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                className="mt-8 flex flex-col gap-3"
              >
                <a
                  href={clinic.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-4 text-base font-semibold text-paper"
                >
                  Book on WhatsApp
                </a>
                <a
                  href={clinic.phones[0].href}
                  className="inline-flex items-center justify-center rounded-full border border-line bg-white px-6 py-4 text-base font-semibold text-ink"
                >
                  Call {clinic.phones[0].number}
                </a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
