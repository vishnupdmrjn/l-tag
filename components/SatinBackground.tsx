"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

/**
 * Fixed, full-viewport satin/silk background with a gentle parallax drift as
 * the page scrolls. Purely decorative and very low-contrast so it never
 * competes with foreground content. Disabled motion respects user prefs.
 */
export function SatinBackground() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <motion.div
        style={reduceMotion ? undefined : { y }}
        className="satin-bg satin-sheen absolute -inset-x-0 -top-[10%] h-[130%] w-full"
      />
      {/* Soft champagne light pooling, kept extremely subtle. */}
      <div className="absolute right-[-10%] top-[-5%] h-[40rem] w-[40rem] rounded-full bg-champagne/[0.06] blur-3xl" />
      <div className="absolute bottom-[-15%] left-[-10%] h-[36rem] w-[36rem] rounded-full bg-champagne-light/[0.07] blur-3xl" />
    </div>
  );
}
