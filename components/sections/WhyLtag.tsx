import { SectionHeading } from "../ui/SectionHeading";
import { Reveal } from "../ui/Reveal";
import { whyFeatures } from "@/lib/content";

export function WhyLtag() {
  return (
    <section
      id="why"
      className="scroll-mt-24 border-y border-ink/5 bg-ivory-deep/60 py-24 md:py-32"
    >
      <div className="container-x">
        <SectionHeading
          align="center"
          eyebrow="Why LTAG"
          title="The advantages that keep partners coming back."
          description="Everything a serious buyer needs from a wholesale import partner — under one roof."
        />

        <Reveal
          stagger
          as="div"
          className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {whyFeatures.map((f, i) => (
            <div key={f.title} className="group">
              <div className="flex items-center gap-4">
                <span className="font-display text-sm font-semibold tabular-nums text-champagne-dark">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-ink/10 transition-colors duration-500 group-hover:bg-champagne/40" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                {f.title}
              </h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-ink-muted">
                {f.body}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
