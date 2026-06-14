import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { ButtonLink } from "../ui/Button";
import { showroom } from "@/lib/content";

export function Showroom() {
  return (
    <section
      id="showroom"
      className="scroll-mt-24 border-y border-ink/5 bg-ivory-deep/60 py-24 md:py-32"
    >
      <div className="container-x">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Invitation copy + reasons to visit */}
          <div>
            <SectionHeading
              eyebrow={`Wholesale Showroom · ${showroom.area}, ${showroom.city}`}
              title="Experience the collection before you order."
              description="Our Manjeri showroom is built for wholesale buyers. Come see, feel, and assess our imported range in person — fabric, fit, and finish — before you place your order."
            />

            <Reveal stagger as="ul" className="mt-10 space-y-7">
              {showroom.highlights.map((h, i) => (
                <li key={h.title} className="flex gap-4">
                  <span className="mt-0.5 font-display text-sm font-semibold tabular-nums text-champagne-dark">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {h.title}
                    </h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-ink-muted">
                      {h.body}
                    </p>
                  </div>
                </li>
              ))}
            </Reveal>
          </div>

          {/* Location / directions card */}
          <Reveal className="lg:sticky lg:top-28">
            <div className="overflow-hidden rounded-3xl border border-ink/10 bg-ivory/80 shadow-[0_24px_60px_-32px_rgba(17,17,17,0.25)]">
              {/* Stylised map-pin banner (decorative, lightweight). */}
              <div className="satin-bg satin-sheen relative h-44 border-b border-ink/10 sm:h-52">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="text-champagne-dark"
                    >
                      <path
                        d="M12 21s7-5.686 7-11a7 7 0 1 0-14 0c0 5.314 7 11 7 11Z"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                      <circle
                        cx="12"
                        cy="10"
                        r="2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span className="mt-2 font-display text-sm font-semibold uppercase tracking-widest text-ink/70">
                      {showroom.area}, {showroom.city}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-7 sm:p-8">
                <dl className="space-y-5">
                  <div>
                    <dt className="text-xs uppercase tracking-widest text-ink-muted">
                      Address
                    </dt>
                    <dd className="mt-1.5 font-display text-base font-medium leading-relaxed text-ink">
                      {showroom.addressLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </dd>
                  </div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <dt className="text-xs uppercase tracking-widest text-ink-muted">
                        Hours
                      </dt>
                      <dd className="mt-1.5 text-sm font-medium text-ink">
                        {showroom.hours}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs uppercase tracking-widest text-ink-muted">
                        Phone
                      </dt>
                      <dd className="mt-1.5 text-sm font-medium text-ink">
                        <a
                          href={showroom.phoneHref}
                          className="focus-ring rounded transition-colors hover:text-champagne-dark"
                        >
                          {showroom.phoneDisplay}
                        </a>
                      </dd>
                    </div>
                  </div>
                </dl>

                <div className="mt-8">
                  <ButtonLink
                    href="#contact"
                    variant="primary"
                    className="w-full"
                  >
                    Plan Your Visit
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </ButtonLink>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
