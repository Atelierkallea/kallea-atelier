import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  /** « clair » sur fond crème, « sombre » sur fond brun */
  tone?: "clair" | "sombre";
  className?: string;
};

/**
 * Bouton au trait fin, sobre : bordure et texte de la couleur du fond inversée au survol.
 * Les liens externes (tel:, mailto:, https:) utilisent une balise <a> simple.
 */
export function ButtonLink({ href, children, tone = "clair", className = "" }: Props) {
  const colors =
    tone === "sombre"
      ? "border-texte-clair/70 text-texte-clair hover:bg-texte-clair hover:text-brun"
      : "border-or text-or-profond hover:bg-or hover:text-creme";
  const classes = `inline-flex min-h-12 items-center justify-center border px-7 py-3 text-[13px] font-medium tracking-[0.16em] uppercase transition-colors duration-300 lg:min-h-[max(48px,calc(3.1*var(--u)))] lg:px-[max(28px,calc(2.2*var(--u)))] lg:text-[max(13px,calc(0.95*var(--u)))] ${colors} ${className}`;

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}
