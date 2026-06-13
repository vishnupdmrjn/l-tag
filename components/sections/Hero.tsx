import { ButtonLink } from "../ui/Button";

const stats = [
  { value: "30+", label: "Sourcing markets" },
  { value: "500+", label: "Retail partners" },
  { value: "1M+", label: "Units shipped yearly" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center pt-28 md:min-h-screen md:pt-32">
      <div className="container-x w-full">
        <div className="hero-rise max-w-4xl">
          <p className="eyebrow mb-6">Global Garment Import &amp; Wholesale</p>

          <h1 className="text-balance text-5xl font-bold leading-[1.04] tracking-tightest sm:text-6xl md:text-7xl lg:text-[5.25rem]">
            Imported Fashion.
            <br />
            <span className="text-champagne-dark">Wholesale Excellence.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            Premium apparel sourcing and wholesale distribution for retailers,
            boutiques, and fashion businesses worldwide.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="#collections" variant="primary">
              View Collections
              <span
                aria-hidden
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </ButtonLink>
            <ButtonLink href="#showroom" variant="outline">
              Visit Our Showroom
            </ButtonLink>
          </div>

          <dl className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-ink/10 pt-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-ink-muted sm:text-sm">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
