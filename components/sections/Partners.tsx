"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal, revealItem } from "../ui/Reveal";

const partners = [
  "MAISON",
  "ATELIER",
  "VESTRA",
  "NORDIC CO.",
  "LUXE",
  "ÉLAN",
  "STUDIO 9",
  "AVENIR",
  "MERIDIAN",
  "CRÈME",
];

export function Partners() {
  return (
    <section
      id="partners"
      className="scroll-mt-24 border-y border-ink/5 bg-ivory-deep/60 py-24 md:py-28"
    >
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Partners"
          title="Trusted by retailers and brands worldwide."
        />

        <Reveal
          stagger
          as="ul"
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/[0.07] sm:grid-cols-3 lg:grid-cols-5"
        >
          {partners.map((name) => (
            <motion.li
              key={name}
              variants={revealItem}
              className="flex items-center justify-center bg-ivory/70 px-6 py-10 transition-colors duration-300 hover:bg-ivory"
            >
              <span className="select-none font-display text-base font-semibold tracking-[0.18em] text-ink/35 transition-colors duration-300 hover:text-ink/70 sm:text-lg">
                {name}
              </span>
            </motion.li>
          ))}
        </Reveal>

        <Reveal>
          <p className="mt-10 text-center text-sm text-ink-muted">
            Placeholder partner marks — ready to be replaced with your network.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
