"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal, revealItem } from "../ui/Reveal";
import { collections } from "@/lib/content";

export function Collections() {
  return (
    <section id="collections" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Collections"
            title="Curated ranges for every floor."
            description="From everyday essentials to occasion dressing — each collection is selected for quality, commercial appeal, and margin."
          />
        </div>

        <Reveal
          stagger
          as="div"
          className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {collections.map((c) => (
            <motion.a
              key={c.title}
              href="#contact"
              variants={revealItem}
              className="focus-ring group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-2xl border border-ink/5"
              aria-label={`${c.title} — request wholesale details`}
            >
              {/* Editorial-style fabric tone placeholder. Swap for photography. */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${c.tone} transition-transform duration-700 ease-smooth group-hover:scale-[1.06]`}
              />
              <div className="satin-sheen absolute inset-0 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />

              <div className="relative p-6">
                <h3 className="font-display text-xl font-semibold text-ivory drop-shadow-sm">
                  {c.title}
                </h3>
                <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-ivory/0 transition-all duration-500 ease-smooth group-hover:text-ivory/85">
                  {c.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-champagne-light opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Enquire
                  <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </div>
            </motion.a>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
