"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ButtonLink } from "../ui/Button";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };
  const item = {
    hidden: reduceMotion ? { opacity: 0 } : { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
  };

  return (
    <section className="relative flex min-h-[92vh] items-center pt-28 md:min-h-screen md:pt-32">
      <div className="container-x w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.p variants={item} className="eyebrow mb-6">
            Global Garment Import &amp; Wholesale
          </motion.p>

          <motion.h1
            variants={item}
            className="text-balance text-5xl font-bold leading-[1.04] tracking-tightest sm:text-6xl md:text-7xl lg:text-[5.25rem]"
          >
            Imported Fashion.
            <br />
            <span className="text-champagne-dark">Wholesale Excellence.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl"
          >
            Premium apparel sourcing and wholesale distribution for retailers,
            boutiques, and fashion businesses worldwide.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <ButtonLink href="#collections" variant="primary">
              View Collections
              <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </ButtonLink>
            <ButtonLink href="#contact" variant="outline">
              Become a Partner
            </ButtonLink>
          </motion.div>

          <motion.dl
            variants={item}
            className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-ink/10 pt-8"
          >
            {[
              { value: "30+", label: "Sourcing markets" },
              { value: "500+", label: "Retail partners" },
              { value: "1M+", label: "Units shipped yearly" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-ink-muted sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
