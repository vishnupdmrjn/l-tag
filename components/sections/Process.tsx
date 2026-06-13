import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { processSteps } from "@/lib/content";

export function Process() {
  return (
    <section id="process" className="scroll-mt-24 py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Wholesale Process"
          title="From first enquiry to delivered goods."
          description="A clear, six-step path designed to make sourcing at scale feel effortless."
        />

        <Reveal stagger as="ol" className="relative mt-16">
          {/* Connecting line */}
          <span
            aria-hidden
            className="absolute left-[19px] top-2 bottom-2 w-px bg-ink/10 md:hidden"
          />
          <div className="grid gap-y-10 md:grid-cols-3 md:gap-x-10 md:gap-y-14">
            {processSteps.map((s) => (
              <li
                key={s.step}
                className="relative flex gap-5 md:flex-col md:gap-4"
              >
                <span className="z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-champagne/40 bg-ivory font-display text-sm font-semibold text-champagne-dark">
                  {s.step}
                </span>
                <div className="md:mt-1">
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
