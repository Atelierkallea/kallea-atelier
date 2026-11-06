import type { ComponentPropsWithoutRef } from "react";

export type Tone = "clair" | "sombre";

type Props = ComponentPropsWithoutRef<"section"> & { tone?: Tone };

/** Bande de page : fond crème (« clair ») ou brun (« sombre »), comme sur les maquettes. */
export function Section({ tone = "clair", className = "", children, ...props }: Props) {
  const colors = tone === "sombre" ? "bg-brun text-texte-clair" : "bg-creme text-texte";
  return (
    <section className={`${colors} ${className}`} {...props}>
      {children}
    </section>
  );
}

/** Alterne clair / sombre selon la position (0 = clair). */
export const toneAt = (index: number): Tone => (index % 2 === 0 ? "clair" : "sombre");
