"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal, revealItem } from "../ui/Reveal";
import { aboutPillars } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <SectionHeading
            eyebrow="Who We Are"
            title="A wholesale partner built for the way modern retail buys."
            description="L-TAG is an international garment importer and wholesaler. We connect retailers, boutiques, and fashion businesses with premium apparel — sourced responsibly, priced competitively, and delivered retail-ready."
          />

          <Reveal stagger as="div" className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2">
            {aboutPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                variants={revealItem}
                className={`group bg-ivory/70 p-7 transition-colors duration-300 hover:bg-ivory-deep ${
                  i === aboutPillars.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <h3 className="font-display text-lg font-semibold text-ink">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
