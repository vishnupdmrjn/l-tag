"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in seconds. */
  delay?: number;
  /** Animate children sequentially when true. */
  stagger?: boolean;
  as?: "div" | "section" | "li" | "ul" | "ol" | "article" | "header" | "footer";
};

/**
 * Fade-up-on-scroll wrapper. Respects prefers-reduced-motion by rendering
 * content statically. Durations stay within the 300–700ms brief.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  stagger = false,
  as = "div",
}: RevealProps) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay,
        ...(stagger ? { staggerChildren: 0.1, delayChildren: delay } : {}),
      },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}

/** Child item for use inside a staggered Reveal container. */
export const revealItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};
