import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: Props) {
  const alignment =
    align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";
  return (
    <Reveal className={`${alignment} ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-balance text-3xl font-bold leading-[1.1] tracking-tightest sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-lg leading-relaxed text-ink-muted">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
