"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  as?: "div" | "section" | "li" | "span" | "p" | "h1" | "h2" | "h3";
};

const ease = [0.22, 1, 0.36, 1] as const;

const tags = {
  div: motion.div,
  section: motion.section,
  li: motion.li,
  span: motion.span,
  p: motion.p,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
};

export function Reveal({ children, className, delay = 0, y = 28, once = true, as = "div" }: Props) {
  const reduce = useReducedMotion();
  const Tag = tags[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      initial={reduce ? undefined : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </Tag>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

export function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={staggerItem}>
      {children}
    </motion.div>
  );
}
