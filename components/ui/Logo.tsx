type LogoProps = {
  className?: string;
  /** Accessible label; set to empty when used decoratively next to text. */
  label?: string;
};

/**
 * L-TAG wordmark rendered as crisp text matching the brand's bold,
 * geometric sans-serif. Uses the display font + tight tracking so it scales
 * sharply at any size without shipping a raster image.
 */
export function Logo({ className = "", label = "L-TAG" }: LogoProps) {
  return (
    <span
      className={`font-display font-bold leading-none tracking-tightest ${className}`}
      aria-label={label || undefined}
      role={label ? "img" : undefined}
    >
      L<span className="mx-[0.04em] font-medium text-champagne">-</span>TAG
    </span>
  );
}
