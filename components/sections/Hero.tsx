import Image from "next/image";
import { ButtonLink } from "../ui/Button";

const stats = [
  { value: "30+", label: "Sourcing markets" },
  { value: "500+", label: "Retail partners" },
  { value: "1M+", label: "Units shipped yearly" },
];

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 md:min-h-screen md:pt-32">
      {/* Editorial hero image as a bottom band that dissolves into the ivory
          page on every edge (no hard photo border), leaving airy negative
          space above for the headline. Responsive crop keeps the rack — not
          the vase — in frame on narrow screens. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[56%] md:h-[66%]">
        <Image
          src="/img/hero.jpg"
          alt="Imported apparel collection displayed on an LTAG showroom rack"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[74%_30%] md:object-[center_28%]"
        />
        {/* Feather each edge into ivory so the photo has no defined boundary. */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#FAF8F6_0%,transparent_32%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,#FAF8F6_0%,transparent_22%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FAF8F6_0%,transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_left,transparent_80%,#FAF8F6_100%)]" />
        {/* Extra left wash on mobile to keep the subtext legible over the rack. */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#FAF8F6_5%,transparent_62%)] md:hidden" />
      </div>

      <div className="container-x relative z-10 w-full">
        <div className="hero-rise max-w-xl md:max-w-2xl">
          <p className="eyebrow mb-6">Global Garment Import &amp; Wholesale</p>

          <h1 className="text-balance text-5xl font-bold leading-[1.04] tracking-tightest sm:text-6xl md:text-7xl">
            Imported Fashion.
            <br />
            <span className="text-champagne-dark">Wholesale Excellence.</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-muted sm:text-xl">
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
