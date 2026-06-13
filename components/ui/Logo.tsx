import Image from "next/image";

type LogoProps = {
  className?: string;
  /** Pixel size of the square monogram mark. */
  markSize?: number;
  /** Hide the wordmark and show only the monogram. */
  markOnly?: boolean;
  /** Accessible label for the brand. */
  label?: string;
};

/**
 * L-TAG brand lockup: the official square monogram mark (public/logo) paired
 * with the bold, geometric "L-TAG" wordmark. The SVG is served unoptimized so
 * it stays crisp at any size.
 */
export function Logo({
  className = "",
  markSize = 30,
  markOnly = false,
  label = "L-TAG — Imported Fashion",
}: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label={label}
      role="img"
    >
      <Image
        src="/logo/ltag-logo.svg"
        alt=""
        width={markSize}
        height={markSize}
        priority
        unoptimized
        className="h-[1.15em] w-auto"
      />
      {!markOnly && (
        <span className="font-display font-bold leading-none tracking-tightest">
          L<span className="mx-[0.02em] font-medium text-champagne">-</span>TAG
        </span>
      )}
    </span>
  );
}
