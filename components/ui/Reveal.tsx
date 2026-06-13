"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Transition delay in seconds (non-stagger only). */
  delay?: number;
  /** Animate direct children in sequence when scrolled into view. */
  stagger?: boolean;
  as?: "div" | "section" | "li" | "ul" | "ol" | "article" | "header" | "footer";
};

/**
 * Scroll-reveal that is SSR-safe and progressive-enhancement only.
 *
 * Content renders fully visible by default — the hidden state is applied on the
 * client, after mount, and ONLY to elements that start below the fold. So if JS
 * is slow, blocked, or fails to hydrate, every section is still visible. The
 * fade-up itself is pure CSS (see globals.css), driven by the classes below.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  stagger = false,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [state, setState] = useState<"" | "pre" | "show">("");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced || typeof IntersectionObserver === "undefined") return;

    // Already in (or near) view at load → leave visible, never animate.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    setState("pre");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("show");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Tag = as as React.ElementType;
  const cls = [
    className,
    stagger ? "reveal-stagger" : "",
    state === "pre" ? "reveal-pre" : "",
    state === "show" ? "reveal-show" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const style =
    delay && !stagger && state ? { transitionDelay: `${delay}s` } : undefined;

  return (
    <Tag ref={ref} className={cls} style={style}>
      {children}
    </Tag>
  );
}
