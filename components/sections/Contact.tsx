"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { Button } from "../ui/Button";
import { businessTypes } from "@/lib/content";

const fieldBase =
  "w-full rounded-xl border border-ink/15 bg-ivory/60 px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/60 transition-colors duration-300 focus:border-champagne focus-ring";

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm font-medium text-ink-soft">
        {label}
        {required && <span className="ml-0.5 text-champagne-dark">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className={fieldBase}
      />
    </div>
  );
}

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Front-end demo: replace with your CRM / email endpoint.
    setSubmitted(true);
  }

  return (
    <section id="contact" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Request wholesale pricing."
              description="Tell us about your business and what you're sourcing. Our team will respond with tailored pricing and availability."
            />

            <Reveal className="mt-10 space-y-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-ink-muted">
                  Email
                </p>
                <a
                  href="mailto:wholesale@l-tag.com"
                  className="focus-ring mt-1 inline-block rounded font-display text-lg font-medium text-ink transition-colors hover:text-champagne-dark"
                >
                  wholesale@l-tag.com
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-ink-muted">
                  Phone
                </p>
                <a
                  href="tel:+10000000000"
                  className="focus-ring mt-1 inline-block rounded font-display text-lg font-medium text-ink transition-colors hover:text-champagne-dark"
                >
                  +1 (000) 000-0000
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-ink-muted">
                  Hours
                </p>
                <p className="mt-1 font-display text-lg font-medium text-ink">
                  Mon–Fri · 9:00–18:00
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal className="rounded-3xl border border-ink/10 bg-ivory/70 p-6 backdrop-blur-sm sm:p-9">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex min-h-[24rem] flex-col items-center justify-center text-center"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-champagne/40 text-2xl text-champagne-dark">
                    ✓
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                    Thank you.
                  </h3>
                  <p className="mt-3 max-w-sm text-ink-muted">
                    Your enquiry has been received. A member of our wholesale
                    team will be in touch shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 gap-5 sm:grid-cols-2"
                >
                  <Field label="Name" name="name" required autoComplete="name" />
                  <Field
                    label="Company"
                    name="company"
                    required
                    autoComplete="organization"
                  />
                  <Field
                    label="Country"
                    name="country"
                    autoComplete="country-name"
                  />
                  <Field
                    label="Email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                  />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                  />
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="businessType"
                      className="text-sm font-medium text-ink-soft"
                    >
                      Business Type
                    </label>
                    <select
                      id="businessType"
                      name="businessType"
                      defaultValue=""
                      className={`${fieldBase} appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat`}
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%236B6760' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E\")",
                      }}
                    >
                      <option value="" disabled>
                        Select…
                      </option>
                      {businessTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-2 sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium text-ink-soft"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="Categories, volumes, timelines…"
                      className={`${fieldBase} resize-none`}
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <Button type="submit" variant="primary" className="w-full sm:w-auto">
                      Request Wholesale Pricing
                      <span
                        aria-hidden
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </Button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
