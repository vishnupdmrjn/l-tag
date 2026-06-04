import Link from "next/link";
import type { ComponentProps } from "react";

type Variant = "primary" | "outline" | "ghost";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ease-smooth focus-ring disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink px-7 py-3.5 text-ivory hover:bg-ink-soft hover:shadow-[0_12px_30px_-12px_rgba(17,17,17,0.5)] hover:-translate-y-0.5",
  outline:
    "border border-ink/15 bg-transparent px-7 py-3.5 text-ink hover:border-champagne hover:text-champagne-dark hover:-translate-y-0.5",
  ghost:
    "px-2 py-1 text-ink-soft hover:text-champagne-dark",
};

type ButtonAsLink = {
  href: string;
} & ComponentProps<typeof Link> & {
    variant?: Variant;
  };

export function ButtonLink({
  href,
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonAsLink) {
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = ComponentProps<"button"> & { variant?: Variant };

export function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </button>
  );
}
