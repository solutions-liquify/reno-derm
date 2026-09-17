"use client";

import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  external?: boolean;
  strength?: number;
};

const styles: Record<NonNullable<Props["variant"]>, string> = {
  primary:
    "bg-ink text-paper shadow-lift hover:bg-teal-800 focus-visible:ring-teal-400",
  secondary:
    "bg-white text-ink border border-line shadow-soft hover:border-teal-300 hover:text-teal-800 focus-visible:ring-teal-300",
  ghost:
    "bg-transparent text-ink hover:bg-white/60 focus-visible:ring-teal-300",
};

export function MagneticButton({
  href,
  children,
  variant = "primary",
  className = "",
  external,
  strength = 0.35,
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 });

  function onMove(e: MouseEvent<HTMLAnchorElement>) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  }
  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: sx, y: sy }}
      whileTap={{ scale: 0.97 }}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${styles[variant]} ${className}`}
    >
      {children}
    </motion.a>
  );
}
