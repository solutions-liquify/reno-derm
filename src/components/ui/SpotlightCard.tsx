"use client";

import { motion } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

type Props = { children: ReactNode; className?: string; lift?: boolean };

/** Card with a cursor-following radial highlight and a gentle hover lift. */
export function SpotlightCard({ children, className = "", lift = true }: Props) {
  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  }
  return (
    <motion.div
      onMouseMove={onMove}
      whileHover={lift ? { y: -6 } : undefined}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`spotlight rounded-xl2 border border-line bg-white shadow-soft transition-shadow duration-300 hover:shadow-lift ${className}`}
    >
      {children}
    </motion.div>
  );
}
