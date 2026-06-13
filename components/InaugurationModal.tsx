"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Logo } from "./ui/Logo";
import { inauguration } from "@/lib/content";

const STORAGE_KEY = "ltag_inauguration_seen";

/**
 * Elegant, dismissible inauguration announcement. Shows once per browser
 * session (sessionStorage), a short beat after load. Closes on backdrop click,
 * the close button, or Escape, and restores focus. Honours reduced motion.
 */
export function InaugurationModal() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return;
    const t = setTimeout(() => {
      lastFocused.current = document.activeElement as HTMLElement;
      setOpen(true);
    }, 1100);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
    lastFocused.current?.focus?.();
  };

  // Lock scroll, focus the close button, and wire Escape while open.
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="inauguration-title"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close announcement"
            onClick={close}
            className="absolute inset-0 cursor-default bg-ink/45 backdrop-blur-sm"
          />

          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: 8 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={
              inauguration.poster
                ? "relative w-full max-w-md overflow-hidden rounded-3xl bg-ivory shadow-2xl"
                : "relative grid w-full max-w-3xl overflow-hidden rounded-3xl bg-ivory shadow-2xl sm:grid-cols-2"
            }
          >
            {inauguration.poster ? (
              /* Poster-centric: the artwork carries the date, venue & details. */
              <>
                <h2 id="inauguration-title" className="sr-only">
                  {inauguration.title} — {inauguration.location}
                </h2>
                <div className="relative aspect-square">
                  <Image
                    src={inauguration.poster}
                    alt="L-TAG showroom inauguration announcement"
                    fill
                    sizes="(max-width: 640px) 92vw, 448px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="p-4">
                  <a
                    href={inauguration.ctaHref}
                    onClick={close}
                    className="focus-ring group flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-300 ease-smooth hover:bg-ink-soft"
                  >
                    {inauguration.ctaLabel}
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </div>
              </>
            ) : (
              /* Fallback: designed placeholder + text until a poster is added. */
              <>
                <div className="relative aspect-[4/5] sm:aspect-auto">
                  <PosterPlaceholder />
                </div>
                <div className="flex flex-col justify-center p-7 sm:p-9">
                  <p className="eyebrow">{inauguration.eyebrow}</p>
                  <h2
                    id="inauguration-title"
                    className="mt-3 text-balance font-display text-3xl font-bold leading-tight tracking-tightest sm:text-[2rem]"
                  >
                    {inauguration.title}
                  </h2>

                  <div className="mt-5 space-y-2 text-sm">
                    <p className="flex items-center gap-2 text-ink-soft">
                      <span className="text-champagne-dark">◆</span>
                      <span className="font-display text-base font-semibold">
                        {inauguration.date}
                      </span>
                    </p>
                    <p className="text-ink-muted">{inauguration.location}</p>
                  </div>

                  <p className="mt-5 text-[15px] leading-relaxed text-ink-muted">
                    {inauguration.blurb}
                  </p>

                  <a
                    href={inauguration.ctaHref}
                    onClick={close}
                    className="focus-ring group mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-ivory transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:bg-ink-soft"
                  >
                    {inauguration.ctaLabel}
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </div>
              </>
            )}

            {/* Close button */}
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Close announcement"
              className="focus-ring absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-ivory/80 text-ink backdrop-blur transition-colors hover:bg-ivory"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/** Designed stand-in poster shown until a real image is supplied. */
function PosterPlaceholder() {
  return (
    <div className="satin-bg satin-sheen relative flex h-full min-h-[18rem] flex-col items-center justify-center gap-5 border-b border-ink/10 p-8 text-center sm:border-b-0 sm:border-r">
      <Logo className="text-3xl" />
      <div className="h-px w-12 bg-champagne/50" />
      <p className="font-display text-xs font-semibold uppercase tracking-widest text-ink/60">
        Grand Inauguration
      </p>
      <p className="max-w-[14rem] text-xs leading-relaxed text-ink-muted">
        Showroom poster goes here — drop your image at the configured path.
      </p>
      <span className="text-2xl text-champagne-dark" aria-hidden>
        ✦
      </span>
    </div>
  );
}
