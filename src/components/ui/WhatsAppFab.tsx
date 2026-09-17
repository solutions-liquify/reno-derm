"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { clinic } from "@/data/clinic";

export function WhatsAppFab() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setShow(v > 500));

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          key="fab"
          href={clinic.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3.5 pr-4 text-sm font-semibold text-white shadow-lift"
        >
          <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-[#25D366]/50" />
          <MessageCircle className="h-5 w-5" />
          <span className="hidden sm:inline">WhatsApp</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
