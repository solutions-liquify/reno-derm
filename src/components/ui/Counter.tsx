"use client";

import { animate, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = { value: number; decimals?: number; suffix?: string; className?: string };

export function Counter({ value, decimals = 0, suffix = "", className }: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(reduce ? value.toFixed(decimals) : (0).toFixed(decimals));

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [inView, value, decimals, reduce]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
}
